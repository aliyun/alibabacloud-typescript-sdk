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
      'ap-northeast-1': "ice.aliyuncs.com",
      'ap-northeast-2-pop': "ice.aliyuncs.com",
      'ap-south-1': "ice.aliyuncs.com",
      'ap-southeast-1': "ice.aliyuncs.com",
      'ap-southeast-2': "ice.aliyuncs.com",
      'ap-southeast-3': "ice.aliyuncs.com",
      'ap-southeast-5': "ice.aliyuncs.com",
      'cn-beijing': "ice.aliyuncs.com",
      'cn-beijing-finance-1': "ice.aliyuncs.com",
      'cn-beijing-finance-pop': "ice.aliyuncs.com",
      'cn-beijing-gov-1': "ice.aliyuncs.com",
      'cn-beijing-nu16-b01': "ice.aliyuncs.com",
      'cn-chengdu': "ice.aliyuncs.com",
      'cn-edge-1': "ice.aliyuncs.com",
      'cn-fujian': "ice.aliyuncs.com",
      'cn-haidian-cm12-c01': "ice.aliyuncs.com",
      'cn-hangzhou': "ice.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ice.aliyuncs.com",
      'cn-hangzhou-finance': "ice.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ice.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ice.aliyuncs.com",
      'cn-hangzhou-test-306': "ice.aliyuncs.com",
      'cn-hongkong': "ice.aliyuncs.com",
      'cn-hongkong-finance-pop': "ice.aliyuncs.com",
      'cn-huhehaote': "ice.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ice.aliyuncs.com",
      'cn-north-2-gov-1': "ice.aliyuncs.com",
      'cn-qingdao': "ice.aliyuncs.com",
      'cn-qingdao-nebula': "ice.aliyuncs.com",
      'cn-shanghai-et15-b01': "ice.aliyuncs.com",
      'cn-shanghai-et2-b01': "ice.aliyuncs.com",
      'cn-shanghai-finance-1': "ice.aliyuncs.com",
      'cn-shanghai-inner': "ice.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ice.aliyuncs.com",
      'cn-shenzhen': "ice.aliyuncs.com",
      'cn-shenzhen-finance-1': "ice.aliyuncs.com",
      'cn-shenzhen-inner': "ice.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ice.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ice.aliyuncs.com",
      'cn-wuhan': "ice.aliyuncs.com",
      'cn-wulanchabu': "ice.aliyuncs.com",
      'cn-yushanfang': "ice.aliyuncs.com",
      'cn-zhangbei': "ice.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ice.aliyuncs.com",
      'cn-zhangjiakou': "ice.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ice.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ice.aliyuncs.com",
      'eu-central-1': "ice.aliyuncs.com",
      'eu-west-1': "ice.aliyuncs.com",
      'eu-west-1-oxs': "ice.aliyuncs.com",
      'me-east-1': "ice.aliyuncs.com",
      'rus-west-1-pop': "ice.aliyuncs.com",
      'us-east-1': "ice.aliyuncs.com",
      'us-west-1': "ice.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates a specified license using the batch ID, authorization code, and device SN.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API is used to activate a specific license for Real-time Conversational AI by providing a batch ID (`LicenseItemId`), authorization code (`AuthCode`), and device ID (`DeviceId`). Upon successful activation, the API returns a response containing the request ID, an error code, the request status, the HTTP status code, and the activated license information.
   * **Note**: Ensure that the provided batch ID, authorization code, and device ID are correct. Incorrect information may cause the activation to fail.
   * 
   * @param request - ActiveAiRtcLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveAiRtcLicenseResponse
   */
  async activeAiRtcLicenseWithOptions(request: $_model.ActiveAiRtcLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveAiRtcLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.licenseItemId)) {
      query["LicenseItemId"] = request.licenseItemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveAiRtcLicense",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveAiRtcLicenseResponse>(await this.callApi(params, req, runtime), new $_model.ActiveAiRtcLicenseResponse({}));
  }

  /**
   * Activates a specified license using the batch ID, authorization code, and device SN.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API is used to activate a specific license for Real-time Conversational AI by providing a batch ID (`LicenseItemId`), authorization code (`AuthCode`), and device ID (`DeviceId`). Upon successful activation, the API returns a response containing the request ID, an error code, the request status, the HTTP status code, and the activated license information.
   * **Note**: Ensure that the provided batch ID, authorization code, and device ID are correct. Incorrect information may cause the activation to fail.
   * 
   * @param request - ActiveAiRtcLicenseRequest
   * @returns ActiveAiRtcLicenseResponse
   */
  async activeAiRtcLicense(request: $_model.ActiveAiRtcLicenseRequest): Promise<$_model.ActiveAiRtcLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeAiRtcLicenseWithOptions(request, runtime);
  }

  /**
   * Adds an ad insertion configuration.
   * 
   * @param request - AddAdInsertionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAdInsertionResponse
   */
  async addAdInsertionWithOptions(request: $_model.AddAdInsertionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAdInsertionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adMarkerPassthrough)) {
      body["AdMarkerPassthrough"] = request.adMarkerPassthrough;
    }

    if (!$dara.isNull(request.adsUrl)) {
      body["AdsUrl"] = request.adsUrl;
    }

    if (!$dara.isNull(request.cdnAdSegmentUrlPrefix)) {
      body["CdnAdSegmentUrlPrefix"] = request.cdnAdSegmentUrlPrefix;
    }

    if (!$dara.isNull(request.cdnContentSegmentUrlPrefix)) {
      body["CdnContentSegmentUrlPrefix"] = request.cdnContentSegmentUrlPrefix;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configAliases)) {
      body["ConfigAliases"] = request.configAliases;
    }

    if (!$dara.isNull(request.contentUrlPrefix)) {
      body["ContentUrlPrefix"] = request.contentUrlPrefix;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.personalizationThreshold)) {
      body["PersonalizationThreshold"] = request.personalizationThreshold;
    }

    if (!$dara.isNull(request.slateAdUrl)) {
      body["SlateAdUrl"] = request.slateAdUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAdInsertion",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAdInsertionResponse>(await this.callApi(params, req, runtime), new $_model.AddAdInsertionResponse({}));
  }

  /**
   * Adds an ad insertion configuration.
   * 
   * @param request - AddAdInsertionRequest
   * @returns AddAdInsertionResponse
   */
  async addAdInsertion(request: $_model.AddAdInsertionRequest): Promise<$_model.AddAdInsertionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAdInsertionWithOptions(request, runtime);
  }

  /**
   * Creates a category.
   * 
   * @remarks
   * You can create at most three levels of categories. Each category level can contain a maximum of 100 subcategories.
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
      version: "2020-11-09",
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
   * Creates a category.
   * 
   * @remarks
   * You can create at most three levels of categories. Each category level can contain a maximum of 100 subcategories.
   * 
   * @param request - AddCategoryRequest
   * @returns AddCategoryResponse
   */
  async addCategory(request: $_model.AddCategoryRequest): Promise<$_model.AddCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCategoryWithOptions(request, runtime);
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
    if (!$dara.isNull(request.materialMaps)) {
      query["MaterialMaps"] = request.materialMaps;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEditingProjectMaterials",
      version: "2020-11-09",
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
   * 收藏公共媒资
   * 
   * @param request - AddFavoritePublicMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFavoritePublicMediaResponse
   */
  async addFavoritePublicMediaWithOptions(request: $_model.AddFavoritePublicMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddFavoritePublicMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFavoritePublicMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFavoritePublicMediaResponse>(await this.callApi(params, req, runtime), new $_model.AddFavoritePublicMediaResponse({}));
  }

  /**
   * 收藏公共媒资
   * 
   * @param request - AddFavoritePublicMediaRequest
   * @returns AddFavoritePublicMediaResponse
   */
  async addFavoritePublicMedia(request: $_model.AddFavoritePublicMediaRequest): Promise<$_model.AddFavoritePublicMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addFavoritePublicMediaWithOptions(request, runtime);
  }

  /**
   * Creates a source for a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   A flow can have only one source.
   * ### [](#)Source type
   * *   RTMP-PUSH: An input that you can push to the returned URL over the RTMP protocol.
   * *   RTMP-PULL: An input that the MediaConnect flow pulls from the specified server over the RTMP protocol.
   * *   SRT-Listener: An input that you can push to the returned URL over the SRT protocol.
   * *   SRT-Caller: An input that the MediaConnect flow pulls from the specified server over the SRT protocol.
   * *   Flow: An input that uses the output of another upstream flow. You must specify an upstream flow and its output. The output type of the upstream flow must be SRT-Listener or RTMP-PULL. By default, a dedicated line is used when flows are cascaded. This allows for cross-region distribution among multiple flows.
   * 
   * @param request - AddMediaConnectFlowInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaConnectFlowInputResponse
   */
  async addMediaConnectFlowInputWithOptions(request: $_model.AddMediaConnectFlowInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaConnectFlowInputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.inputFromUrl)) {
      query["InputFromUrl"] = request.inputFromUrl;
    }

    if (!$dara.isNull(request.inputName)) {
      query["InputName"] = request.inputName;
    }

    if (!$dara.isNull(request.inputProtocol)) {
      query["InputProtocol"] = request.inputProtocol;
    }

    if (!$dara.isNull(request.maxBitrate)) {
      query["MaxBitrate"] = request.maxBitrate;
    }

    if (!$dara.isNull(request.pairFlowId)) {
      query["PairFlowId"] = request.pairFlowId;
    }

    if (!$dara.isNull(request.pairOutputName)) {
      query["PairOutputName"] = request.pairOutputName;
    }

    if (!$dara.isNull(request.srtLatency)) {
      query["SrtLatency"] = request.srtLatency;
    }

    if (!$dara.isNull(request.srtPassphrase)) {
      query["SrtPassphrase"] = request.srtPassphrase;
    }

    if (!$dara.isNull(request.srtPbkeyLen)) {
      query["SrtPbkeyLen"] = request.srtPbkeyLen;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMediaConnectFlowInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaConnectFlowInputResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaConnectFlowInputResponse({}));
  }

  /**
   * Creates a source for a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   A flow can have only one source.
   * ### [](#)Source type
   * *   RTMP-PUSH: An input that you can push to the returned URL over the RTMP protocol.
   * *   RTMP-PULL: An input that the MediaConnect flow pulls from the specified server over the RTMP protocol.
   * *   SRT-Listener: An input that you can push to the returned URL over the SRT protocol.
   * *   SRT-Caller: An input that the MediaConnect flow pulls from the specified server over the SRT protocol.
   * *   Flow: An input that uses the output of another upstream flow. You must specify an upstream flow and its output. The output type of the upstream flow must be SRT-Listener or RTMP-PULL. By default, a dedicated line is used when flows are cascaded. This allows for cross-region distribution among multiple flows.
   * 
   * @param request - AddMediaConnectFlowInputRequest
   * @returns AddMediaConnectFlowInputResponse
   */
  async addMediaConnectFlowInput(request: $_model.AddMediaConnectFlowInputRequest): Promise<$_model.AddMediaConnectFlowInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaConnectFlowInputWithOptions(request, runtime);
  }

  /**
   * Creates an output for a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   A flow can have a maximum of four outputs.
   * *   The output names in the same flow cannot be duplicated.
   * *   You can set an upper limit on the number of concurrent viewers for each output. If this limit is exceeded, any new playback requests will fail. Each output supports up to five streams.
   * ### [](#)Output types
   * *   RTMP-PUSH: An output that the MediaConnect flow pushes to the server you specified over the RTMP protocol.
   * *   RTMP-PULL: An output that you can pull using the returned streaming URL over the RTMP protocol.
   * *   SRT-Caller: An output that the MediaConnect flow pushes to the server you specified over the SRT protocol.
   * *   SRT-Listener: An output that you can pull using the returned streaming URL over the SRT protocol.
   * *   Flow: An output that is pushed to the source URL of another MediaConnect flow. The source type of the destination flow must be SRT-Listener or RTMP-PUSH. By default, a dedicated line is used when flows are cascaded. This allows for cross-region distribution among multiple flows.
   * 
   * @param request - AddMediaConnectFlowOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaConnectFlowOutputResponse
   */
  async addMediaConnectFlowOutputWithOptions(request: $_model.AddMediaConnectFlowOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaConnectFlowOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    if (!$dara.isNull(request.outputProtocol)) {
      query["OutputProtocol"] = request.outputProtocol;
    }

    if (!$dara.isNull(request.outputToUrl)) {
      query["OutputToUrl"] = request.outputToUrl;
    }

    if (!$dara.isNull(request.pairFlowId)) {
      query["PairFlowId"] = request.pairFlowId;
    }

    if (!$dara.isNull(request.pairInputName)) {
      query["PairInputName"] = request.pairInputName;
    }

    if (!$dara.isNull(request.playerLimit)) {
      query["PlayerLimit"] = request.playerLimit;
    }

    if (!$dara.isNull(request.srtLatency)) {
      query["SrtLatency"] = request.srtLatency;
    }

    if (!$dara.isNull(request.srtPassphrase)) {
      query["SrtPassphrase"] = request.srtPassphrase;
    }

    if (!$dara.isNull(request.srtPbkeyLen)) {
      query["SrtPbkeyLen"] = request.srtPbkeyLen;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMediaConnectFlowOutput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaConnectFlowOutputResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaConnectFlowOutputResponse({}));
  }

  /**
   * Creates an output for a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   A flow can have a maximum of four outputs.
   * *   The output names in the same flow cannot be duplicated.
   * *   You can set an upper limit on the number of concurrent viewers for each output. If this limit is exceeded, any new playback requests will fail. Each output supports up to five streams.
   * ### [](#)Output types
   * *   RTMP-PUSH: An output that the MediaConnect flow pushes to the server you specified over the RTMP protocol.
   * *   RTMP-PULL: An output that you can pull using the returned streaming URL over the RTMP protocol.
   * *   SRT-Caller: An output that the MediaConnect flow pushes to the server you specified over the SRT protocol.
   * *   SRT-Listener: An output that you can pull using the returned streaming URL over the SRT protocol.
   * *   Flow: An output that is pushed to the source URL of another MediaConnect flow. The source type of the destination flow must be SRT-Listener or RTMP-PUSH. By default, a dedicated line is used when flows are cascaded. This allows for cross-region distribution among multiple flows.
   * 
   * @param request - AddMediaConnectFlowOutputRequest
   * @returns AddMediaConnectFlowOutputResponse
   */
  async addMediaConnectFlowOutput(request: $_model.AddMediaConnectFlowOutputRequest): Promise<$_model.AddMediaConnectFlowOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaConnectFlowOutputWithOptions(request, runtime);
  }

  /**
   * Adds marks for a media asset.
   * 
   * @param request - AddMediaMarksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMediaMarksResponse
   */
  async addMediaMarksWithOptions(request: $_model.AddMediaMarksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMediaMarksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaMarks)) {
      query["MediaMarks"] = request.mediaMarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMediaMarks",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMediaMarksResponse>(await this.callApi(params, req, runtime), new $_model.AddMediaMarksResponse({}));
  }

  /**
   * Adds marks for a media asset.
   * 
   * @param request - AddMediaMarksRequest
   * @returns AddMediaMarksResponse
   */
  async addMediaMarks(request: $_model.AddMediaMarksRequest): Promise<$_model.AddMediaMarksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMediaMarksWithOptions(request, runtime);
  }

  /**
   * Adds tags for a specific live stream media asset.
   * 
   * @param request - AddStreamTagToSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddStreamTagToSearchLibResponse
   */
  async addStreamTagToSearchLibWithOptions(request: $_model.AddStreamTagToSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddStreamTagToSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.msgBody)) {
      query["MsgBody"] = request.msgBody;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddStreamTagToSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddStreamTagToSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.AddStreamTagToSearchLibResponse({}));
  }

  /**
   * Adds tags for a specific live stream media asset.
   * 
   * @param request - AddStreamTagToSearchLibRequest
   * @returns AddStreamTagToSearchLibResponse
   */
  async addStreamTagToSearchLib(request: $_model.AddStreamTagToSearchLibRequest): Promise<$_model.AddStreamTagToSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addStreamTagToSearchLibWithOptions(request, runtime);
  }

  /**
   * Creates a template.
   * 
   * @remarks
   *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * *   After an advanced template is created, it enters the Processing state. In this case, the template is unavailable. The template can be used only when it is in the Available state. The time required for template processing varies based on the size of the template file. Generally, it ranges from 10 seconds to 5 minutes.
   * 
   * @param request - AddTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTemplateResponse
   */
  async addTemplateWithOptions(request: $_model.AddTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverUrl)) {
      query["CoverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.previewMedia)) {
      query["PreviewMedia"] = request.previewMedia;
    }

    if (!$dara.isNull(request.relatedMediaids)) {
      query["RelatedMediaids"] = request.relatedMediaids;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTemplate",
      version: "2020-11-09",
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
   * Creates a template.
   * 
   * @remarks
   *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * *   After an advanced template is created, it enters the Processing state. In this case, the template is unavailable. The template can be used only when it is in the Available state. The time required for template processing varies based on the size of the template file. Generally, it ranges from 10 seconds to 5 minutes.
   * 
   * @param request - AddTemplateRequest
   * @returns AddTemplateResponse
   */
  async addTemplate(request: $_model.AddTemplateRequest): Promise<$_model.AddTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies search index information including index status and configurations.
   * 
   * @param request - AlterSearchIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterSearchIndexResponse
   */
  async alterSearchIndexWithOptions(request: $_model.AlterSearchIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AlterSearchIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.indexConfig)) {
      query["IndexConfig"] = request.indexConfig;
    }

    if (!$dara.isNull(request.indexStatus)) {
      query["IndexStatus"] = request.indexStatus;
    }

    if (!$dara.isNull(request.indexType)) {
      query["IndexType"] = request.indexType;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterSearchIndex",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AlterSearchIndexResponse>(await this.callApi(params, req, runtime), new $_model.AlterSearchIndexResponse({}));
  }

  /**
   * Modifies search index information including index status and configurations.
   * 
   * @param request - AlterSearchIndexRequest
   * @returns AlterSearchIndexResponse
   */
  async alterSearchIndex(request: $_model.AlterSearchIndexRequest): Promise<$_model.AlterSearchIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.alterSearchIndexWithOptions(request, runtime);
  }

  /**
   * 修改库
   * 
   * @param request - AlterSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterSearchLibResponse
   */
  async alterSearchLibWithOptions(request: $_model.AlterSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AlterSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchLibConfig)) {
      query["SearchLibConfig"] = request.searchLibConfig;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AlterSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.AlterSearchLibResponse({}));
  }

  /**
   * 修改库
   * 
   * @param request - AlterSearchLibRequest
   * @returns AlterSearchLibResponse
   */
  async alterSearchLib(request: $_model.AlterSearchLibRequest): Promise<$_model.AlterSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.alterSearchLibWithOptions(request, runtime);
  }

  /**
   * Ingests multiple assets for VOD packaging.
   * 
   * @param tmpReq - BatchCreateVodPackagingAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateVodPackagingAssetResponse
   */
  async batchCreateVodPackagingAssetWithOptions(tmpReq: $_model.BatchCreateVodPackagingAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateVodPackagingAssetResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateVodPackagingAssetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assets)) {
      request.assetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assets, "Assets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assetsShrink)) {
      query["Assets"] = request.assetsShrink;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateVodPackagingAsset",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateVodPackagingAssetResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateVodPackagingAssetResponse({}));
  }

  /**
   * Ingests multiple assets for VOD packaging.
   * 
   * @param request - BatchCreateVodPackagingAssetRequest
   * @returns BatchCreateVodPackagingAssetResponse
   */
  async batchCreateVodPackagingAsset(request: $_model.BatchCreateVodPackagingAssetRequest): Promise<$_model.BatchCreateVodPackagingAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateVodPackagingAssetWithOptions(request, runtime);
  }

  /**
   * Queries the information about multiple media assets at a time based on media asset IDs.
   * 
   * @param request - BatchGetMediaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetMediaInfosResponse
   */
  async batchGetMediaInfosWithOptions(request: $_model.BatchGetMediaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetMediaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionType)) {
      query["AdditionType"] = request.additionType;
    }

    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetMediaInfos",
      version: "2020-11-09",
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
   * Queries the information about multiple media assets at a time based on media asset IDs.
   * 
   * @param request - BatchGetMediaInfosRequest
   * @returns BatchGetMediaInfosResponse
   */
  async batchGetMediaInfos(request: $_model.BatchGetMediaInfosRequest): Promise<$_model.BatchGetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetMediaInfosWithOptions(request, runtime);
  }

  /**
   * Cancels a media fingerprint analysis job.
   * 
   * @remarks
   *   You can cancel a media fingerprint analysis job only if the job is in the Queuing state.
   * *   We recommend that you call the **UpdatePipeline** operation to set the status of the ApsaraVideo Media Processing (MPS) queue to Paused before you cancel a job. This suspends job scheduling in the MPS queue. After the job is canceled, you must set the status of the MPS queue back to Active so that the other jobs in the MPS queue can be scheduled.
   * 
   * @param request - CancelDNAJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDNAJobResponse
   */
  async cancelDNAJobWithOptions(request: $_model.CancelDNAJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDNAJobResponse> {
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
      action: "CancelDNAJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDNAJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelDNAJobResponse({}));
  }

  /**
   * Cancels a media fingerprint analysis job.
   * 
   * @remarks
   *   You can cancel a media fingerprint analysis job only if the job is in the Queuing state.
   * *   We recommend that you call the **UpdatePipeline** operation to set the status of the ApsaraVideo Media Processing (MPS) queue to Paused before you cancel a job. This suspends job scheduling in the MPS queue. After the job is canceled, you must set the status of the MPS queue back to Active so that the other jobs in the MPS queue can be scheduled.
   * 
   * @param request - CancelDNAJobRequest
   * @returns CancelDNAJobResponse
   */
  async cancelDNAJob(request: $_model.CancelDNAJobRequest): Promise<$_model.CancelDNAJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelDNAJobWithOptions(request, runtime);
  }

  /**
   * 取消收藏公共媒资
   * 
   * @param request - CancelFavoritePublicMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelFavoritePublicMediaResponse
   */
  async cancelFavoritePublicMediaWithOptions(request: $_model.CancelFavoritePublicMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelFavoritePublicMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelFavoritePublicMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelFavoritePublicMediaResponse>(await this.callApi(params, req, runtime), new $_model.CancelFavoritePublicMediaResponse({}));
  }

  /**
   * 取消收藏公共媒资
   * 
   * @param request - CancelFavoritePublicMediaRequest
   * @returns CancelFavoritePublicMediaResponse
   */
  async cancelFavoritePublicMedia(request: $_model.CancelFavoritePublicMediaRequest): Promise<$_model.CancelFavoritePublicMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFavoritePublicMediaWithOptions(request, runtime);
  }

  /**
   * Cancels an intelligent production job.
   * 
   * @param request - CancelIProductionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelIProductionJobResponse
   */
  async cancelIProductionJobWithOptions(request: $_model.CancelIProductionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelIProductionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelIProductionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelIProductionJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelIProductionJobResponse({}));
  }

  /**
   * Cancels an intelligent production job.
   * 
   * @param request - CancelIProductionJobRequest
   * @returns CancelIProductionJobResponse
   */
  async cancelIProductionJob(request: $_model.CancelIProductionJobRequest): Promise<$_model.CancelIProductionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelIProductionJobWithOptions(request, runtime);
  }

  /**
   * Deletes a voiceprint based on its ID.
   * 
   * @remarks
   * ## [](#)
   * ``````````
   * 
   * @param request - ClearAIAgentVoiceprintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearAIAgentVoiceprintResponse
   */
  async clearAIAgentVoiceprintWithOptions(request: $_model.ClearAIAgentVoiceprintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClearAIAgentVoiceprintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.voiceprintId)) {
      query["VoiceprintId"] = request.voiceprintId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClearAIAgentVoiceprint",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClearAIAgentVoiceprintResponse>(await this.callApi(params, req, runtime), new $_model.ClearAIAgentVoiceprintResponse({}));
  }

  /**
   * Deletes a voiceprint based on its ID.
   * 
   * @remarks
   * ## [](#)
   * ``````````
   * 
   * @param request - ClearAIAgentVoiceprintRequest
   * @returns ClearAIAgentVoiceprintResponse
   */
  async clearAIAgentVoiceprint(request: $_model.ClearAIAgentVoiceprintRequest): Promise<$_model.ClearAIAgentVoiceprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clearAIAgentVoiceprintWithOptions(request, runtime);
  }

  /**
   * Disables Source Failover for a MediaConnect flow.
   * 
   * @remarks
   *   If a flow has two sources, you cannot disable Source Failover. Delete one of them before this operation.
   * 
   * @param request - CloseMediaConnectFlowFailoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseMediaConnectFlowFailoverResponse
   */
  async closeMediaConnectFlowFailoverWithOptions(request: $_model.CloseMediaConnectFlowFailoverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseMediaConnectFlowFailoverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseMediaConnectFlowFailover",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseMediaConnectFlowFailoverResponse>(await this.callApi(params, req, runtime), new $_model.CloseMediaConnectFlowFailoverResponse({}));
  }

  /**
   * Disables Source Failover for a MediaConnect flow.
   * 
   * @remarks
   *   If a flow has two sources, you cannot disable Source Failover. Delete one of them before this operation.
   * 
   * @param request - CloseMediaConnectFlowFailoverRequest
   * @returns CloseMediaConnectFlowFailoverResponse
   */
  async closeMediaConnectFlowFailover(request: $_model.CloseMediaConnectFlowFailoverRequest): Promise<$_model.CloseMediaConnectFlowFailoverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeMediaConnectFlowFailoverWithOptions(request, runtime);
  }

  /**
   * Stops the tagging and analysis process for a live stream media asset.
   * 
   * @param request - CloseStreamToSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseStreamToSearchLibResponse
   */
  async closeStreamToSearchLibWithOptions(request: $_model.CloseStreamToSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseStreamToSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseStreamToSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseStreamToSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.CloseStreamToSearchLibResponse({}));
  }

  /**
   * Stops the tagging and analysis process for a live stream media asset.
   * 
   * @param request - CloseStreamToSearchLibRequest
   * @returns CloseStreamToSearchLibResponse
   */
  async closeStreamToSearchLib(request: $_model.CloseStreamToSearchLibRequest): Promise<$_model.CloseStreamToSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeStreamToSearchLibWithOptions(request, runtime);
  }

  /**
   * Submits manual review results for media assets.
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
      version: "2020-11-09",
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
   * Submits manual review results for media assets.
   * 
   * @param request - CreateAuditRequest
   * @returns CreateAuditResponse
   */
  async createAudit(request: $_model.CreateAuditRequest): Promise<$_model.CreateAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuditWithOptions(request, runtime);
  }

  /**
   * Creates a digital human training job. You can configure the basic information of the digital human and the materials required for the training. Note: This operation is used to initialize the training job. It does not submit the training job. To submit the training job, call the SubmitAvatarTrainingJob operation.
   * 
   * @param request - CreateAvatarTrainingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAvatarTrainingJobResponse
   */
  async createAvatarTrainingJobWithOptions(request: $_model.CreateAvatarTrainingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAvatarTrainingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avatarDescription)) {
      query["AvatarDescription"] = request.avatarDescription;
    }

    if (!$dara.isNull(request.avatarName)) {
      query["AvatarName"] = request.avatarName;
    }

    if (!$dara.isNull(request.avatarType)) {
      query["AvatarType"] = request.avatarType;
    }

    if (!$dara.isNull(request.portrait)) {
      query["Portrait"] = request.portrait;
    }

    if (!$dara.isNull(request.thumbnail)) {
      query["Thumbnail"] = request.thumbnail;
    }

    if (!$dara.isNull(request.transparent)) {
      query["Transparent"] = request.transparent;
    }

    if (!$dara.isNull(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAvatarTrainingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAvatarTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateAvatarTrainingJobResponse({}));
  }

  /**
   * Creates a digital human training job. You can configure the basic information of the digital human and the materials required for the training. Note: This operation is used to initialize the training job. It does not submit the training job. To submit the training job, call the SubmitAvatarTrainingJob operation.
   * 
   * @param request - CreateAvatarTrainingJobRequest
   * @returns CreateAvatarTrainingJobResponse
   */
  async createAvatarTrainingJob(request: $_model.CreateAvatarTrainingJobRequest): Promise<$_model.CreateAvatarTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAvatarTrainingJobWithOptions(request, runtime);
  }

  /**
   * Creates a channel in MediaWeaver.
   * 
   * @param request - CreateChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChannelResponse
   */
  async createChannelWithOptions(request: $_model.CreateChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPolicy)) {
      query["AccessPolicy"] = request.accessPolicy;
    }

    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.channelTier)) {
      query["ChannelTier"] = request.channelTier;
    }

    if (!$dara.isNull(request.fillerSourceLocationName)) {
      query["FillerSourceLocationName"] = request.fillerSourceLocationName;
    }

    if (!$dara.isNull(request.fillerSourceName)) {
      query["FillerSourceName"] = request.fillerSourceName;
    }

    if (!$dara.isNull(request.outPutConfigList)) {
      query["OutPutConfigList"] = request.outPutConfigList;
    }

    if (!$dara.isNull(request.playbackMode)) {
      query["PlaybackMode"] = request.playbackMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateChannelResponse({}));
  }

  /**
   * Creates a channel in MediaWeaver.
   * 
   * @param request - CreateChannelRequest
   * @returns CreateChannelResponse
   */
  async createChannel(request: $_model.CreateChannelRequest): Promise<$_model.CreateChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChannelWithOptions(request, runtime);
  }

  /**
   * Creates a custom template.
   * 
   * @param request - CreateCustomTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomTemplateResponse
   */
  async createCustomTemplateWithOptions(request: $_model.CreateCustomTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomTemplateResponse({}));
  }

  /**
   * Creates a custom template.
   * 
   * @param request - CreateCustomTemplateRequest
   * @returns CreateCustomTemplateResponse
   */
  async createCustomTemplate(request: $_model.CreateCustomTemplateRequest): Promise<$_model.CreateCustomTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a human voice cloning job. You can configure the basic information of the human voice cloning job.
   * 
   * @param request - CreateCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomizedVoiceJobResponse
   */
  async createCustomizedVoiceJobWithOptions(request: $_model.CreateCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.gender)) {
      query["Gender"] = request.gender;
    }

    if (!$dara.isNull(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.voiceDesc)) {
      query["VoiceDesc"] = request.voiceDesc;
    }

    if (!$dara.isNull(request.voiceId)) {
      query["VoiceId"] = request.voiceId;
    }

    if (!$dara.isNull(request.voiceName)) {
      query["VoiceName"] = request.voiceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomizedVoiceJobResponse({}));
  }

  /**
   * Creates a human voice cloning job. You can configure the basic information of the human voice cloning job.
   * 
   * @param request - CreateCustomizedVoiceJobRequest
   * @returns CreateCustomizedVoiceJobResponse
   */
  async createCustomizedVoiceJob(request: $_model.CreateCustomizedVoiceJobRequest): Promise<$_model.CreateCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * Creates media fingerprint libraries.
   * 
   * @remarks
   *   You can create up to five media fingerprint libraries within an account. To increase the quota, submit a ticket. You can call the DeleteDNADB operation to delete the fingerprint libraries that you no longer need.
   * 
   * @param request - CreateDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDNADBResponse
   */
  async createDNADBWithOptions(request: $_model.CreateDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
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
      action: "CreateDNADB",
      version: "2020-11-09",
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
   * Creates media fingerprint libraries.
   * 
   * @remarks
   *   You can create up to five media fingerprint libraries within an account. To increase the quota, submit a ticket. You can call the DeleteDNADB operation to delete the fingerprint libraries that you no longer need.
   * 
   * @param request - CreateDNADBRequest
   * @returns CreateDNADBResponse
   */
  async createDNADB(request: $_model.CreateDNADBRequest): Promise<$_model.CreateDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDNADBWithOptions(request, runtime);
  }

  /**
   * Creates an online editing project. You can specify configurations such as the title, description, timeline, and thumbnail for the project.
   * 
   * @param request - CreateEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEditingProjectResponse
   */
  async createEditingProjectWithOptions(request: $_model.CreateEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessConfig)) {
      query["BusinessConfig"] = request.businessConfig;
    }

    if (!$dara.isNull(request.clipsParam)) {
      query["ClipsParam"] = request.clipsParam;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.materialMaps)) {
      query["MaterialMaps"] = request.materialMaps;
    }

    if (!$dara.isNull(request.projectType)) {
      query["ProjectType"] = request.projectType;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeline)) {
      body["Timeline"] = request.timeline;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEditingProject",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEditingProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateEditingProjectResponse({}));
  }

  /**
   * Creates an online editing project. You can specify configurations such as the title, description, timeline, and thumbnail for the project.
   * 
   * @param request - CreateEditingProjectRequest
   * @returns CreateEditingProjectResponse
   */
  async createEditingProject(request: $_model.CreateEditingProjectRequest): Promise<$_model.CreateEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEditingProjectWithOptions(request, runtime);
  }

  /**
   * Creates a hotword library.
   * 
   * @param tmpReq - CreateHotwordLibraryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHotwordLibraryResponse
   */
  async createHotwordLibraryWithOptions(tmpReq: $_model.CreateHotwordLibraryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHotwordLibraryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateHotwordLibraryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotwords)) {
      request.hotwordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotwords, "Hotwords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.hotwordsShrink)) {
      query["Hotwords"] = request.hotwordsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.usageScenario)) {
      query["UsageScenario"] = request.usageScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHotwordLibrary",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHotwordLibraryResponse>(await this.callApi(params, req, runtime), new $_model.CreateHotwordLibraryResponse({}));
  }

  /**
   * Creates a hotword library.
   * 
   * @param request - CreateHotwordLibraryRequest
   * @returns CreateHotwordLibraryResponse
   */
  async createHotwordLibrary(request: $_model.CreateHotwordLibraryRequest): Promise<$_model.CreateHotwordLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHotwordLibraryWithOptions(request, runtime);
  }

  /**
   * IPC下单
   * 
   * @param request - CreateIpcOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIpcOrderResponse
   */
  async createIpcOrderWithOptions(request: $_model.CreateIpcOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIpcOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capability)) {
      query["Capability"] = request.capability;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIpcOrder",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIpcOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateIpcOrderResponse({}));
  }

  /**
   * IPC下单
   * 
   * @param request - CreateIpcOrderRequest
   * @returns CreateIpcOrderResponse
   */
  async createIpcOrder(request: $_model.CreateIpcOrderRequest): Promise<$_model.CreateIpcOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIpcOrderWithOptions(request, runtime);
  }

  /**
   * Creates a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you call this operation to create a live package channel, the system will automatically generate the ingest endpoint URL, and username and password required for authentication.
   * ### [](#)Precautions
   * *   Channel group names and channel names can contain only letters, digits, underscores (_), and hyphens (-).
   * *   Only `HLS` is supported.
   * *   The segment duration must be from 1 to 30 seconds.
   * *   The number of M3U8 segments must be from 2 to 100.
   * If the request succeeds, the system will return the details of the newly created channel, including the channel name, creation time, modification time, and ingest endpoint details.
   * 
   * @param request - CreateLivePackageChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLivePackageChannelResponse
   */
  async createLivePackageChannelWithOptions(request: $_model.CreateLivePackageChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLivePackageChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelName)) {
      body["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.segmentCount)) {
      body["SegmentCount"] = request.segmentCount;
    }

    if (!$dara.isNull(request.segmentDuration)) {
      body["SegmentDuration"] = request.segmentDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLivePackageChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLivePackageChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateLivePackageChannelResponse({}));
  }

  /**
   * Creates a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you call this operation to create a live package channel, the system will automatically generate the ingest endpoint URL, and username and password required for authentication.
   * ### [](#)Precautions
   * *   Channel group names and channel names can contain only letters, digits, underscores (_), and hyphens (-).
   * *   Only `HLS` is supported.
   * *   The segment duration must be from 1 to 30 seconds.
   * *   The number of M3U8 segments must be from 2 to 100.
   * If the request succeeds, the system will return the details of the newly created channel, including the channel name, creation time, modification time, and ingest endpoint details.
   * 
   * @param request - CreateLivePackageChannelRequest
   * @returns CreateLivePackageChannelResponse
   */
  async createLivePackageChannel(request: $_model.CreateLivePackageChannelRequest): Promise<$_model.CreateLivePackageChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLivePackageChannelWithOptions(request, runtime);
  }

  /**
   * Creates a live package channel group with a custom name and description.
   * 
   * @remarks
   * After you create a channel group, the assigned origin domain is returned.
   * 
   * @param request - CreateLivePackageChannelGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLivePackageChannelGroupResponse
   */
  async createLivePackageChannelGroupWithOptions(request: $_model.CreateLivePackageChannelGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLivePackageChannelGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLivePackageChannelGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLivePackageChannelGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateLivePackageChannelGroupResponse({}));
  }

  /**
   * Creates a live package channel group with a custom name and description.
   * 
   * @remarks
   * After you create a channel group, the assigned origin domain is returned.
   * 
   * @param request - CreateLivePackageChannelGroupRequest
   * @returns CreateLivePackageChannelGroupResponse
   */
  async createLivePackageChannelGroup(request: $_model.CreateLivePackageChannelGroupRequest): Promise<$_model.CreateLivePackageChannelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLivePackageChannelGroupWithOptions(request, runtime);
  }

  /**
   * Creates an origin endpoint for a live package channel to deliver live streams in HLS format.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation is mainly used to configure origin settings, security policies including the IP address blacklist and whitelist and authorization code, and time shifting settings for channels. Before you create an origin endpoint, you must create a live package channel group and channel. After you create the endpoint, the endpoint URL and other configuration details are returned.
   * 
   * @param tmpReq - CreateLivePackageOriginEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLivePackageOriginEndpointResponse
   */
  async createLivePackageOriginEndpointWithOptions(tmpReq: $_model.CreateLivePackageOriginEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLivePackageOriginEndpointResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLivePackageOriginEndpointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.livePackagingConfig)) {
      request.livePackagingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.livePackagingConfig, "LivePackagingConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationCode)) {
      body["AuthorizationCode"] = request.authorizationCode;
    }

    if (!$dara.isNull(request.channelName)) {
      body["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointName)) {
      body["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ipBlacklist)) {
      body["IpBlacklist"] = request.ipBlacklist;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      body["IpWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.livePackagingConfigShrink)) {
      body["LivePackagingConfig"] = request.livePackagingConfigShrink;
    }

    if (!$dara.isNull(request.manifestName)) {
      body["ManifestName"] = request.manifestName;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.timeshiftVision)) {
      body["TimeshiftVision"] = request.timeshiftVision;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLivePackageOriginEndpoint",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLivePackageOriginEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateLivePackageOriginEndpointResponse({}));
  }

  /**
   * Creates an origin endpoint for a live package channel to deliver live streams in HLS format.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation is mainly used to configure origin settings, security policies including the IP address blacklist and whitelist and authorization code, and time shifting settings for channels. Before you create an origin endpoint, you must create a live package channel group and channel. After you create the endpoint, the endpoint URL and other configuration details are returned.
   * 
   * @param request - CreateLivePackageOriginEndpointRequest
   * @returns CreateLivePackageOriginEndpointResponse
   */
  async createLivePackageOriginEndpoint(request: $_model.CreateLivePackageOriginEndpointRequest): Promise<$_model.CreateLivePackageOriginEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLivePackageOriginEndpointWithOptions(request, runtime);
  }

  /**
   * Creates a live stream recording template to submit live stream recording jobs.
   * 
   * @remarks
   * You must specify a recording template for live stream recording. You can configure information such as the format and duration of a recording in a recording template. The recording format can be M3U8, MP4, or FLV.
   * 
   * @param tmpReq - CreateLiveRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLiveRecordTemplateResponse
   */
  async createLiveRecordTemplateWithOptions(tmpReq: $_model.CreateLiveRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLiveRecordTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLiveRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordFormat)) {
      request.recordFormatShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordFormat, "RecordFormat", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recordFormatShrink)) {
      body["RecordFormat"] = request.recordFormatShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateLiveRecordTemplateResponse({}));
  }

  /**
   * Creates a live stream recording template to submit live stream recording jobs.
   * 
   * @remarks
   * You must specify a recording template for live stream recording. You can configure information such as the format and duration of a recording in a recording template. The recording format can be M3U8, MP4, or FLV.
   * 
   * @param request - CreateLiveRecordTemplateRequest
   * @returns CreateLiveRecordTemplateResponse
   */
  async createLiveRecordTemplate(request: $_model.CreateLiveRecordTemplateRequest): Promise<$_model.CreateLiveRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLiveRecordTemplateWithOptions(request, runtime);
  }

  /**
   * Create a live stream snapshot template to facilitate the creation of snapshot jobs.
   * 
   * @param request - CreateLiveSnapshotTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLiveSnapshotTemplateResponse
   */
  async createLiveSnapshotTemplateWithOptions(request: $_model.CreateLiveSnapshotTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLiveSnapshotTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.overwriteFormat)) {
      body["OverwriteFormat"] = request.overwriteFormat;
    }

    if (!$dara.isNull(request.sequenceFormat)) {
      body["SequenceFormat"] = request.sequenceFormat;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateLiveSnapshotTemplateResponse({}));
  }

  /**
   * Create a live stream snapshot template to facilitate the creation of snapshot jobs.
   * 
   * @param request - CreateLiveSnapshotTemplateRequest
   * @returns CreateLiveSnapshotTemplateResponse
   */
  async createLiveSnapshotTemplate(request: $_model.CreateLiveSnapshotTemplateRequest): Promise<$_model.CreateLiveSnapshotTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLiveSnapshotTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a live stream transcoding template to submit live stream transcoding jobs.
   * 
   * @param tmpReq - CreateLiveTranscodeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLiveTranscodeTemplateResponse
   */
  async createLiveTranscodeTemplateWithOptions(tmpReq: $_model.CreateLiveTranscodeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLiveTranscodeTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLiveTranscodeTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateLiveTranscodeTemplateResponse({}));
  }

  /**
   * Creates a live stream transcoding template to submit live stream transcoding jobs.
   * 
   * @param request - CreateLiveTranscodeTemplateRequest
   * @returns CreateLiveTranscodeTemplateResponse
   */
  async createLiveTranscodeTemplate(request: $_model.CreateLiveTranscodeTemplateRequest): Promise<$_model.CreateLiveTranscodeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLiveTranscodeTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a MediaConnect flow.
   * 
   * @remarks
   *   The flow names cannot be duplicated in the same region.
   * *   Take note of the returned flow ID. You may reference it in other API operations.
   * 
   * @param request - CreateMediaConnectFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaConnectFlowResponse
   */
  async createMediaConnectFlowWithOptions(request: $_model.CreateMediaConnectFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaConnectFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.flowRegion)) {
      query["FlowRegion"] = request.flowRegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaConnectFlow",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaConnectFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaConnectFlowResponse({}));
  }

  /**
   * Creates a MediaConnect flow.
   * 
   * @remarks
   *   The flow names cannot be duplicated in the same region.
   * *   Take note of the returned flow ID. You may reference it in other API operations.
   * 
   * @param request - CreateMediaConnectFlowRequest
   * @returns CreateMediaConnectFlowResponse
   */
  async createMediaConnectFlow(request: $_model.CreateMediaConnectFlowRequest): Promise<$_model.CreateMediaConnectFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaConnectFlowWithOptions(request, runtime);
  }

  /**
   * Creates a MediaLive channel.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - CreateMediaLiveChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaLiveChannelResponse
   */
  async createMediaLiveChannelWithOptions(tmpReq: $_model.CreateMediaLiveChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaLiveChannelResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMediaLiveChannelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.audioSettings)) {
      request.audioSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.audioSettings, "AudioSettings", "json");
    }

    if (!$dara.isNull(tmpReq.inputAttachments)) {
      request.inputAttachmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputAttachments, "InputAttachments", "json");
    }

    if (!$dara.isNull(tmpReq.outputGroups)) {
      request.outputGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputGroups, "OutputGroups", "json");
    }

    if (!$dara.isNull(tmpReq.videoSettings)) {
      request.videoSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoSettings, "VideoSettings", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audioSettingsShrink)) {
      body["AudioSettings"] = request.audioSettingsShrink;
    }

    if (!$dara.isNull(request.inputAttachmentsShrink)) {
      body["InputAttachments"] = request.inputAttachmentsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputGroupsShrink)) {
      body["OutputGroups"] = request.outputGroupsShrink;
    }

    if (!$dara.isNull(request.videoSettingsShrink)) {
      body["VideoSettings"] = request.videoSettingsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaLiveChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaLiveChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaLiveChannelResponse({}));
  }

  /**
   * Creates a MediaLive channel.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - CreateMediaLiveChannelRequest
   * @returns CreateMediaLiveChannelResponse
   */
  async createMediaLiveChannel(request: $_model.CreateMediaLiveChannelRequest): Promise<$_model.CreateMediaLiveChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaLiveChannelWithOptions(request, runtime);
  }

  /**
   * Creates a MediaLive input.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - CreateMediaLiveInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaLiveInputResponse
   */
  async createMediaLiveInputWithOptions(tmpReq: $_model.CreateMediaLiveInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaLiveInputResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMediaLiveInputShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputSettings)) {
      request.inputSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputSettings, "InputSettings", "json");
    }

    if (!$dara.isNull(tmpReq.securityGroupIds)) {
      request.securityGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupIds, "SecurityGroupIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputSettingsShrink)) {
      body["InputSettings"] = request.inputSettingsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.securityGroupIdsShrink)) {
      body["SecurityGroupIds"] = request.securityGroupIdsShrink;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaLiveInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaLiveInputResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaLiveInputResponse({}));
  }

  /**
   * Creates a MediaLive input.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - CreateMediaLiveInputRequest
   * @returns CreateMediaLiveInputResponse
   */
  async createMediaLiveInput(request: $_model.CreateMediaLiveInputRequest): Promise<$_model.CreateMediaLiveInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaLiveInputWithOptions(request, runtime);
  }

  /**
   * Creates a security group in MediaLive.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - CreateMediaLiveInputSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaLiveInputSecurityGroupResponse
   */
  async createMediaLiveInputSecurityGroupWithOptions(tmpReq: $_model.CreateMediaLiveInputSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaLiveInputSecurityGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMediaLiveInputSecurityGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.whitelistRules)) {
      request.whitelistRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.whitelistRules, "WhitelistRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.whitelistRulesShrink)) {
      body["WhitelistRules"] = request.whitelistRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaLiveInputSecurityGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaLiveInputSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaLiveInputSecurityGroupResponse({}));
  }

  /**
   * Creates a security group in MediaLive.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - CreateMediaLiveInputSecurityGroupRequest
   * @returns CreateMediaLiveInputSecurityGroupResponse
   */
  async createMediaLiveInputSecurityGroup(request: $_model.CreateMediaLiveInputSecurityGroupRequest): Promise<$_model.CreateMediaLiveInputSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaLiveInputSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - CreatePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineResponse
   */
  async createPipelineWithOptions(request: $_model.CreatePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipeline",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineResponse({}));
  }

  /**
   * Creates an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - CreatePipelineRequest
   * @returns CreatePipelineResponse
   */
  async createPipeline(request: $_model.CreatePipelineRequest): Promise<$_model.CreatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPipelineWithOptions(request, runtime);
  }

  /**
   * Creates a program in a MediaWeaver channel.
   * 
   * @param request - CreateProgramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProgramResponse
   */
  async createProgramWithOptions(request: $_model.CreateProgramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProgramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adBreaks)) {
      query["AdBreaks"] = request.adBreaks;
    }

    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.clipRange)) {
      query["ClipRange"] = request.clipRange;
    }

    if (!$dara.isNull(request.programName)) {
      query["ProgramName"] = request.programName;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.transition)) {
      query["Transition"] = request.transition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProgram",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProgramResponse>(await this.callApi(params, req, runtime), new $_model.CreateProgramResponse({}));
  }

  /**
   * Creates a program in a MediaWeaver channel.
   * 
   * @param request - CreateProgramRequest
   * @returns CreateProgramResponse
   */
  async createProgram(request: $_model.CreateProgramRequest): Promise<$_model.CreateProgramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProgramWithOptions(request, runtime);
  }

  /**
   * Creates an entity to be recognized in a custom recognition library. The entity can be a landmark, object, logo, or person.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - CreateRecognitionEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecognitionEntityResponse
   */
  async createRecognitionEntityWithOptions(request: $_model.CreateRecognitionEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecognitionEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.entityInfo)) {
      query["EntityInfo"] = request.entityInfo;
    }

    if (!$dara.isNull(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "CreateRecognitionEntity",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecognitionEntityResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecognitionEntityResponse({}));
  }

  /**
   * Creates an entity to be recognized in a custom recognition library. The entity can be a landmark, object, logo, or person.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - CreateRecognitionEntityRequest
   * @returns CreateRecognitionEntityResponse
   */
  async createRecognitionEntity(request: $_model.CreateRecognitionEntityRequest): Promise<$_model.CreateRecognitionEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecognitionEntityWithOptions(request, runtime);
  }

  /**
   * Creates a custom library to store the entity information for recognition.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   Workflow for using a custom recognition library: Create a library, create a custom object entity within the library, register sample images for the entity, create an analysis template that uses your custom library, and then submit an analysis task using the template.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - CreateRecognitionLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecognitionLibResponse
   */
  async createRecognitionLibWithOptions(request: $_model.CreateRecognitionLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecognitionLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.libDescription)) {
      query["LibDescription"] = request.libDescription;
    }

    if (!$dara.isNull(request.libName)) {
      query["LibName"] = request.libName;
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
      action: "CreateRecognitionLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecognitionLibResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecognitionLibResponse({}));
  }

  /**
   * Creates a custom library to store the entity information for recognition.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   Workflow for using a custom recognition library: Create a library, create a custom object entity within the library, register sample images for the entity, create an analysis template that uses your custom library, and then submit an analysis task using the template.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - CreateRecognitionLibRequest
   * @returns CreateRecognitionLibResponse
   */
  async createRecognitionLib(request: $_model.CreateRecognitionLibRequest): Promise<$_model.CreateRecognitionLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecognitionLibWithOptions(request, runtime);
  }

  /**
   * Adds a sample image or a text label to a specific entity within a recognition library.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - CreateRecognitionSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecognitionSampleResponse
   */
  async createRecognitionSampleWithOptions(request: $_model.CreateRecognitionSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecognitionSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.labelPrompt)) {
      query["LabelPrompt"] = request.labelPrompt;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "CreateRecognitionSample",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecognitionSampleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecognitionSampleResponse({}));
  }

  /**
   * Adds a sample image or a text label to a specific entity within a recognition library.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - CreateRecognitionSampleRequest
   * @returns CreateRecognitionSampleResponse
   */
  async createRecognitionSample(request: $_model.CreateRecognitionSampleRequest): Promise<$_model.CreateRecognitionSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecognitionSampleWithOptions(request, runtime);
  }

  /**
   * 创建搜索索引
   * 
   * @remarks
   * The large visual model feature is still in the public preview phase. You can use this feature for free for 1,000 hours of videos.
   * 
   * @param request - CreateSearchIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSearchIndexResponse
   */
  async createSearchIndexWithOptions(request: $_model.CreateSearchIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSearchIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.indexConfig)) {
      query["IndexConfig"] = request.indexConfig;
    }

    if (!$dara.isNull(request.indexStatus)) {
      query["IndexStatus"] = request.indexStatus;
    }

    if (!$dara.isNull(request.indexType)) {
      query["IndexType"] = request.indexType;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSearchIndex",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSearchIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateSearchIndexResponse({}));
  }

  /**
   * 创建搜索索引
   * 
   * @remarks
   * The large visual model feature is still in the public preview phase. You can use this feature for free for 1,000 hours of videos.
   * 
   * @param request - CreateSearchIndexRequest
   * @returns CreateSearchIndexResponse
   */
  async createSearchIndex(request: $_model.CreateSearchIndexRequest): Promise<$_model.CreateSearchIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSearchIndexWithOptions(request, runtime);
  }

  /**
   * Creates a search library to store media assets.
   * 
   * @param request - CreateSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSearchLibResponse
   */
  async createSearchLibWithOptions(request: $_model.CreateSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchLibConfig)) {
      query["SearchLibConfig"] = request.searchLibConfig;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.CreateSearchLibResponse({}));
  }

  /**
   * Creates a search library to store media assets.
   * 
   * @param request - CreateSearchLibRequest
   * @returns CreateSearchLibResponse
   */
  async createSearchLib(request: $_model.CreateSearchLibRequest): Promise<$_model.CreateSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSearchLibWithOptions(request, runtime);
  }

  /**
   * Creates a source in MediaWeaver.
   * 
   * @param request - CreateSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSourceResponse
   */
  async createSourceWithOptions(request: $_model.CreateSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.httpPackageConfigurations)) {
      query["HttpPackageConfigurations"] = request.httpPackageConfigurations;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSource",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSourceResponse({}));
  }

  /**
   * Creates a source in MediaWeaver.
   * 
   * @param request - CreateSourceRequest
   * @returns CreateSourceResponse
   */
  async createSource(request: $_model.CreateSourceRequest): Promise<$_model.CreateSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSourceWithOptions(request, runtime);
  }

  /**
   * Creates a source location.
   * 
   * @param request - CreateSourceLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSourceLocationResponse
   */
  async createSourceLocationWithOptions(request: $_model.CreateSourceLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSourceLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseUrl)) {
      query["BaseUrl"] = request.baseUrl;
    }

    if (!$dara.isNull(request.enableSegmentDelivery)) {
      query["EnableSegmentDelivery"] = request.enableSegmentDelivery;
    }

    if (!$dara.isNull(request.segmentDeliveryUrl)) {
      query["SegmentDeliveryUrl"] = request.segmentDeliveryUrl;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSourceLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSourceLocationResponse>(await this.callApi(params, req, runtime), new $_model.CreateSourceLocationResponse({}));
  }

  /**
   * Creates a source location.
   * 
   * @param request - CreateSourceLocationRequest
   * @returns CreateSourceLocationResponse
   */
  async createSourceLocation(request: $_model.CreateSourceLocationRequest): Promise<$_model.CreateSourceLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSourceLocationWithOptions(request, runtime);
  }

  /**
   * Registers a live stream as a media asset.
   * 
   * @param request - CreateStreamToSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamToSearchLibResponse
   */
  async createStreamToSearchLibWithOptions(request: $_model.CreateStreamToSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamToSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamToSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamToSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamToSearchLibResponse({}));
  }

  /**
   * Registers a live stream as a media asset.
   * 
   * @param request - CreateStreamToSearchLibRequest
   * @returns CreateStreamToSearchLibResponse
   */
  async createStreamToSearchLib(request: $_model.CreateStreamToSearchLibRequest): Promise<$_model.CreateStreamToSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamToSearchLibWithOptions(request, runtime);
  }

  /**
   * Obtains the upload URL and credential of a media asset and creates information about the media asset.
   * 
   * @remarks
   *   You can call this operation to obtain the upload URLs and credentials of audio and video files. You can also call this operation to obtain the upload URLs and credentials of images and auxiliary media assets.
   * *   Obtaining an upload URL and credential is essential for Intelligent Media Services (IMS) and is required in each upload operation.
   * *   If the video upload credential expires, you can call the RefreshUploadMedia operation to obtain a new upload credential. The default validity period of a video upload credential is 3,000 seconds.
   * *   After you upload a media asset, you can configure a callback to receive upload event notifications or call the GetMediaInfo operation to determine whether the media asset is uploaded based on the returned status.
   * *   The MediaId parameter returned by this operation can be used for media asset lifecycle management or media processing.
   * *   You can call this operation to upload media assets only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media asset to your own OSS bucket, you can upload the file to your OSS bucket by using [OSS SDK](https://help.aliyun.com/document_detail/32006.html), and then call the [RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html) operation to register the file in the OSS bucket with the media asset library.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * 
   * @param request - CreateUploadMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadMediaResponse
   */
  async createUploadMediaWithOptions(request: $_model.CreateUploadMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.fileInfo)) {
      query["FileInfo"] = request.fileInfo;
    }

    if (!$dara.isNull(request.mediaMetaData)) {
      query["MediaMetaData"] = request.mediaMetaData;
    }

    if (!$dara.isNull(request.postProcessConfig)) {
      query["PostProcessConfig"] = request.postProcessConfig;
    }

    if (!$dara.isNull(request.uploadTargetConfig)) {
      query["UploadTargetConfig"] = request.uploadTargetConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadMediaResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadMediaResponse({}));
  }

  /**
   * Obtains the upload URL and credential of a media asset and creates information about the media asset.
   * 
   * @remarks
   *   You can call this operation to obtain the upload URLs and credentials of audio and video files. You can also call this operation to obtain the upload URLs and credentials of images and auxiliary media assets.
   * *   Obtaining an upload URL and credential is essential for Intelligent Media Services (IMS) and is required in each upload operation.
   * *   If the video upload credential expires, you can call the RefreshUploadMedia operation to obtain a new upload credential. The default validity period of a video upload credential is 3,000 seconds.
   * *   After you upload a media asset, you can configure a callback to receive upload event notifications or call the GetMediaInfo operation to determine whether the media asset is uploaded based on the returned status.
   * *   The MediaId parameter returned by this operation can be used for media asset lifecycle management or media processing.
   * *   You can call this operation to upload media assets only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media asset to your own OSS bucket, you can upload the file to your OSS bucket by using [OSS SDK](https://help.aliyun.com/document_detail/32006.html), and then call the [RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html) operation to register the file in the OSS bucket with the media asset library.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * 
   * @param request - CreateUploadMediaRequest
   * @returns CreateUploadMediaResponse
   */
  async createUploadMedia(request: $_model.CreateUploadMediaRequest): Promise<$_model.CreateUploadMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadMediaWithOptions(request, runtime);
  }

  /**
   * Obtains the upload URL and credential of a media stream.
   * 
   * @remarks
   *   You can call this operation to upload only a local media stream. After the media stream is uploaded, it is associated with the specified media asset ID.
   * *   You can call this operation to upload media streams only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media stream to your own OSS bucket, you can upload the file to your OSS bucket by using [OSS SDK](https://help.aliyun.com/document_detail/32006.html), and then call the [RegisterMediaStream](https://help.aliyun.com/document_detail/440765.html) operation to associate the media stream with the specified media asset ID.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * 
   * @param request - CreateUploadStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadStreamResponse
   */
  async createUploadStreamWithOptions(request: $_model.CreateUploadStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadStreamResponse> {
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

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadStream",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadStreamResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadStreamResponse({}));
  }

  /**
   * Obtains the upload URL and credential of a media stream.
   * 
   * @remarks
   *   You can call this operation to upload only a local media stream. After the media stream is uploaded, it is associated with the specified media asset ID.
   * *   You can call this operation to upload media streams only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media stream to your own OSS bucket, you can upload the file to your OSS bucket by using [OSS SDK](https://help.aliyun.com/document_detail/32006.html), and then call the [RegisterMediaStream](https://help.aliyun.com/document_detail/440765.html) operation to associate the media stream with the specified media asset ID.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * 
   * @param request - CreateUploadStreamRequest
   * @returns CreateUploadStreamResponse
   */
  async createUploadStream(request: $_model.CreateUploadStreamRequest): Promise<$_model.CreateUploadStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadStreamWithOptions(request, runtime);
  }

  /**
   * Ingests an asset for VOD packaging.
   * 
   * @param tmpReq - CreateVodPackagingAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVodPackagingAssetResponse
   */
  async createVodPackagingAssetWithOptions(tmpReq: $_model.CreateVodPackagingAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVodPackagingAssetResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVodPackagingAssetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assetName)) {
      query["AssetName"] = request.assetName;
    }

    if (!$dara.isNull(request.contentId)) {
      query["ContentId"] = request.contentId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVodPackagingAsset",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVodPackagingAssetResponse>(await this.callApi(params, req, runtime), new $_model.CreateVodPackagingAssetResponse({}));
  }

  /**
   * Ingests an asset for VOD packaging.
   * 
   * @param request - CreateVodPackagingAssetRequest
   * @returns CreateVodPackagingAssetResponse
   */
  async createVodPackagingAsset(request: $_model.CreateVodPackagingAssetRequest): Promise<$_model.CreateVodPackagingAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVodPackagingAssetWithOptions(request, runtime);
  }

  /**
   * Creates a packaging configuration.
   * 
   * @param tmpReq - CreateVodPackagingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVodPackagingConfigurationResponse
   */
  async createVodPackagingConfigurationWithOptions(tmpReq: $_model.CreateVodPackagingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVodPackagingConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVodPackagingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.packageConfig)) {
      request.packageConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.packageConfig, "PackageConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configurationName)) {
      query["ConfigurationName"] = request.configurationName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.packageConfigShrink)) {
      query["PackageConfig"] = request.packageConfigShrink;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVodPackagingConfiguration",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVodPackagingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateVodPackagingConfigurationResponse({}));
  }

  /**
   * Creates a packaging configuration.
   * 
   * @param request - CreateVodPackagingConfigurationRequest
   * @returns CreateVodPackagingConfigurationResponse
   */
  async createVodPackagingConfiguration(request: $_model.CreateVodPackagingConfigurationRequest): Promise<$_model.CreateVodPackagingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVodPackagingConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates a packaging group.
   * 
   * @param request - CreateVodPackagingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVodPackagingGroupResponse
   */
  async createVodPackagingGroupWithOptions(request: $_model.CreateVodPackagingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVodPackagingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVodPackagingGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVodPackagingGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateVodPackagingGroupResponse({}));
  }

  /**
   * Creates a packaging group.
   * 
   * @param request - CreateVodPackagingGroupRequest
   * @returns CreateVodPackagingGroupResponse
   */
  async createVodPackagingGroup(request: $_model.CreateVodPackagingGroupRequest): Promise<$_model.CreateVodPackagingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVodPackagingGroupWithOptions(request, runtime);
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
    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DecryptKMSDataKey",
      version: "2020-11-09",
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
   * Deletes dialog records of an AI agent.
   * 
   * @param request - DeleteAIAgentDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAIAgentDialogueResponse
   */
  async deleteAIAgentDialogueWithOptions(request: $_model.DeleteAIAgentDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAIAgentDialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dialogueId)) {
      query["DialogueId"] = request.dialogueId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAIAgentDialogue",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAIAgentDialogueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAIAgentDialogueResponse({}));
  }

  /**
   * Deletes dialog records of an AI agent.
   * 
   * @param request - DeleteAIAgentDialogueRequest
   * @returns DeleteAIAgentDialogueResponse
   */
  async deleteAIAgentDialogue(request: $_model.DeleteAIAgentDialogueRequest): Promise<$_model.DeleteAIAgentDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAIAgentDialogueWithOptions(request, runtime);
  }

  /**
   * Deletes an ad insertion configuration.
   * 
   * @param request - DeleteAdInsertionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdInsertionResponse
   */
  async deleteAdInsertionWithOptions(request: $_model.DeleteAdInsertionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAdInsertionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAdInsertion",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAdInsertionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAdInsertionResponse({}));
  }

  /**
   * Deletes an ad insertion configuration.
   * 
   * @param request - DeleteAdInsertionRequest
   * @returns DeleteAdInsertionResponse
   */
  async deleteAdInsertion(request: $_model.DeleteAdInsertionRequest): Promise<$_model.DeleteAdInsertionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAdInsertionWithOptions(request, runtime);
  }

  /**
   * Deletes a digital human training job that is in the Init or Fail state.
   * 
   * @param request - DeleteAvatarTrainingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAvatarTrainingJobResponse
   */
  async deleteAvatarTrainingJobWithOptions(request: $_model.DeleteAvatarTrainingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAvatarTrainingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAvatarTrainingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAvatarTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAvatarTrainingJobResponse({}));
  }

  /**
   * Deletes a digital human training job that is in the Init or Fail state.
   * 
   * @param request - DeleteAvatarTrainingJobRequest
   * @returns DeleteAvatarTrainingJobResponse
   */
  async deleteAvatarTrainingJob(request: $_model.DeleteAvatarTrainingJobRequest): Promise<$_model.DeleteAvatarTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAvatarTrainingJobWithOptions(request, runtime);
  }

  /**
   * Deletes a media asset category.
   * 
   * @remarks
   * This operation also deletes the subcategories, including the level-2 and level-3 categories, of the category.
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
      version: "2020-11-09",
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
   * Deletes a media asset category.
   * 
   * @remarks
   * This operation also deletes the subcategories, including the level-2 and level-3 categories, of the category.
   * 
   * @param request - DeleteCategoryRequest
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(request: $_model.DeleteCategoryRequest): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes a channel.
   * 
   * @param request - DeleteChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChannelResponse
   */
  async deleteChannelWithOptions(request: $_model.DeleteChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChannelResponse({}));
  }

  /**
   * Deletes a channel.
   * 
   * @param request - DeleteChannelRequest
   * @returns DeleteChannelResponse
   */
  async deleteChannel(request: $_model.DeleteChannelRequest): Promise<$_model.DeleteChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a custom template.
   * 
   * @param request - DeleteCustomTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomTemplateResponse
   */
  async deleteCustomTemplateWithOptions(request: $_model.DeleteCustomTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomTemplateResponse({}));
  }

  /**
   * Deletes a custom template.
   * 
   * @param request - DeleteCustomTemplateRequest
   * @returns DeleteCustomTemplateResponse
   */
  async deleteCustomTemplate(request: $_model.DeleteCustomTemplateRequest): Promise<$_model.DeleteCustomTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a human voice cloning job that is not in the Training or Success state.
   * 
   * @param request - DeleteCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomizedVoiceJobResponse
   */
  async deleteCustomizedVoiceJobWithOptions(request: $_model.DeleteCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomizedVoiceJobResponse({}));
  }

  /**
   * Deletes a human voice cloning job that is not in the Training or Success state.
   * 
   * @param request - DeleteCustomizedVoiceJobRequest
   * @returns DeleteCustomizedVoiceJobResponse
   */
  async deleteCustomizedVoiceJob(request: $_model.DeleteCustomizedVoiceJobRequest): Promise<$_model.DeleteCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * Deletes a media fingerprint library.
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
      version: "2020-11-09",
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
   * Deletes a media fingerprint library.
   * 
   * @param request - DeleteDNADBRequest
   * @returns DeleteDNADBResponse
   */
  async deleteDNADB(request: $_model.DeleteDNADBRequest): Promise<$_model.DeleteDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDNADBWithOptions(request, runtime);
  }

  /**
   * Deletes files from a media fingerprint library.
   * 
   * @param request - DeleteDNAFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDNAFilesResponse
   */
  async deleteDNAFilesWithOptions(request: $_model.DeleteDNAFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDNAFilesResponse> {
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

    if (!$dara.isNull(request.primaryKeys)) {
      query["PrimaryKeys"] = request.primaryKeys;
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
      action: "DeleteDNAFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDNAFilesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDNAFilesResponse({}));
  }

  /**
   * Deletes files from a media fingerprint library.
   * 
   * @param request - DeleteDNAFilesRequest
   * @returns DeleteDNAFilesResponse
   */
  async deleteDNAFiles(request: $_model.DeleteDNAFilesRequest): Promise<$_model.DeleteDNAFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDNAFilesWithOptions(request, runtime);
  }

  /**
   * Deletes one or more materials from an online editing project.
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

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEditingProjectMaterials",
      version: "2020-11-09",
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
   * Deletes one or more materials from an online editing project.
   * 
   * @param request - DeleteEditingProjectMaterialsRequest
   * @returns DeleteEditingProjectMaterialsResponse
   */
  async deleteEditingProjectMaterials(request: $_model.DeleteEditingProjectMaterialsRequest): Promise<$_model.DeleteEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Deletes one or more online editing project.
   * 
   * @param request - DeleteEditingProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEditingProjectsResponse
   */
  async deleteEditingProjectsWithOptions(request: $_model.DeleteEditingProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEditingProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEditingProjects",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEditingProjectsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEditingProjectsResponse({}));
  }

  /**
   * Deletes one or more online editing project.
   * 
   * @param request - DeleteEditingProjectsRequest
   * @returns DeleteEditingProjectsResponse
   */
  async deleteEditingProjects(request: $_model.DeleteEditingProjectsRequest): Promise<$_model.DeleteEditingProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEditingProjectsWithOptions(request, runtime);
  }

  /**
   * Deletes a specified hotword library based on the ID.
   * 
   * @remarks
   * ## [](#)
   * *   You can call this operation to delete a specified hotword library.
   * *   The delete operation is irreversible.
   * *   You can create up to 100 hotword libraries in an account.
   * 
   * @param request - DeleteHotwordLibraryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHotwordLibraryResponse
   */
  async deleteHotwordLibraryWithOptions(request: $_model.DeleteHotwordLibraryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHotwordLibraryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hotwordLibraryId)) {
      query["HotwordLibraryId"] = request.hotwordLibraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHotwordLibrary",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHotwordLibraryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHotwordLibraryResponse({}));
  }

  /**
   * Deletes a specified hotword library based on the ID.
   * 
   * @remarks
   * ## [](#)
   * *   You can call this operation to delete a specified hotword library.
   * *   The delete operation is irreversible.
   * *   You can create up to 100 hotword libraries in an account.
   * 
   * @param request - DeleteHotwordLibraryRequest
   * @returns DeleteHotwordLibraryResponse
   */
  async deleteHotwordLibrary(request: $_model.DeleteHotwordLibraryRequest): Promise<$_model.DeleteHotwordLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHotwordLibraryWithOptions(request, runtime);
  }

  /**
   * Deletes a live package channel by GroupName and ChannelName.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You need to provide GroupName and ChannelName as parameters to specify exactly which channel to delete. Before you delete a channel, you must delete the origin endpoints associated with the channel.
   * 
   * @param request - DeleteLivePackageChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLivePackageChannelResponse
   */
  async deleteLivePackageChannelWithOptions(request: $_model.DeleteLivePackageChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLivePackageChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLivePackageChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLivePackageChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLivePackageChannelResponse({}));
  }

  /**
   * Deletes a live package channel by GroupName and ChannelName.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You need to provide GroupName and ChannelName as parameters to specify exactly which channel to delete. Before you delete a channel, you must delete the origin endpoints associated with the channel.
   * 
   * @param request - DeleteLivePackageChannelRequest
   * @returns DeleteLivePackageChannelResponse
   */
  async deleteLivePackageChannel(request: $_model.DeleteLivePackageChannelRequest): Promise<$_model.DeleteLivePackageChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLivePackageChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a live package channel group by name.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Make sure that no channels are included in the channel group before you delete it.
   * 
   * @param request - DeleteLivePackageChannelGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLivePackageChannelGroupResponse
   */
  async deleteLivePackageChannelGroupWithOptions(request: $_model.DeleteLivePackageChannelGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLivePackageChannelGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLivePackageChannelGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLivePackageChannelGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLivePackageChannelGroupResponse({}));
  }

  /**
   * Deletes a live package channel group by name.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Make sure that no channels are included in the channel group before you delete it.
   * 
   * @param request - DeleteLivePackageChannelGroupRequest
   * @returns DeleteLivePackageChannelGroupResponse
   */
  async deleteLivePackageChannelGroup(request: $_model.DeleteLivePackageChannelGroupRequest): Promise<$_model.DeleteLivePackageChannelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLivePackageChannelGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an origin endpoint associated with a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation is used to delete an origin endpoint associated with a live package channel by specifying `GroupName`, `ChannelName`, and `EndpointName`. This operation will permanently delete the relevant configurations. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteLivePackageOriginEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLivePackageOriginEndpointResponse
   */
  async deleteLivePackageOriginEndpointWithOptions(request: $_model.DeleteLivePackageOriginEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLivePackageOriginEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLivePackageOriginEndpoint",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLivePackageOriginEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLivePackageOriginEndpointResponse({}));
  }

  /**
   * Deletes an origin endpoint associated with a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation is used to delete an origin endpoint associated with a live package channel by specifying `GroupName`, `ChannelName`, and `EndpointName`. This operation will permanently delete the relevant configurations. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteLivePackageOriginEndpointRequest
   * @returns DeleteLivePackageOriginEndpointResponse
   */
  async deleteLivePackageOriginEndpoint(request: $_model.DeleteLivePackageOriginEndpointRequest): Promise<$_model.DeleteLivePackageOriginEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLivePackageOriginEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes live stream recording files. You can choose to delete only the recording files or delete both the recording files and the original Object Storage Service (OSS) files.
   * 
   * @param request - DeleteLiveRecordFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveRecordFilesResponse
   */
  async deleteLiveRecordFilesWithOptions(request: $_model.DeleteLiveRecordFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveRecordFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordIds)) {
      query["RecordIds"] = request.recordIds;
    }

    if (!$dara.isNull(request.removeFile)) {
      query["RemoveFile"] = request.removeFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLiveRecordFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveRecordFilesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveRecordFilesResponse({}));
  }

  /**
   * Deletes live stream recording files. You can choose to delete only the recording files or delete both the recording files and the original Object Storage Service (OSS) files.
   * 
   * @param request - DeleteLiveRecordFilesRequest
   * @returns DeleteLiveRecordFilesResponse
   */
  async deleteLiveRecordFiles(request: $_model.DeleteLiveRecordFilesRequest): Promise<$_model.DeleteLiveRecordFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLiveRecordFilesWithOptions(request, runtime);
  }

  /**
   * Deletes a live stream recording template without affecting existing jobs.
   * 
   * @param request - DeleteLiveRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveRecordTemplateResponse
   */
  async deleteLiveRecordTemplateWithOptions(request: $_model.DeleteLiveRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveRecordTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveRecordTemplateResponse({}));
  }

  /**
   * Deletes a live stream recording template without affecting existing jobs.
   * 
   * @param request - DeleteLiveRecordTemplateRequest
   * @returns DeleteLiveRecordTemplateResponse
   */
  async deleteLiveRecordTemplate(request: $_model.DeleteLiveRecordTemplateRequest): Promise<$_model.DeleteLiveRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLiveRecordTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes live stream snapshot files. You can choose to delete only the snapshot files or delete both the snapshot files and the original Object Storage Service (OSS) files.
   * 
   * @param tmpReq - DeleteLiveSnapshotFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveSnapshotFilesResponse
   */
  async deleteLiveSnapshotFilesWithOptions(tmpReq: $_model.DeleteLiveSnapshotFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveSnapshotFilesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteLiveSnapshotFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createTimestampList)) {
      request.createTimestampListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimestampList, "CreateTimestampList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.createTimestampListShrink)) {
      query["CreateTimestampList"] = request.createTimestampListShrink;
    }

    if (!$dara.isNull(request.deleteOriginalFile)) {
      query["DeleteOriginalFile"] = request.deleteOriginalFile;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLiveSnapshotFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveSnapshotFilesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveSnapshotFilesResponse({}));
  }

  /**
   * Deletes live stream snapshot files. You can choose to delete only the snapshot files or delete both the snapshot files and the original Object Storage Service (OSS) files.
   * 
   * @param request - DeleteLiveSnapshotFilesRequest
   * @returns DeleteLiveSnapshotFilesResponse
   */
  async deleteLiveSnapshotFiles(request: $_model.DeleteLiveSnapshotFilesRequest): Promise<$_model.DeleteLiveSnapshotFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLiveSnapshotFilesWithOptions(request, runtime);
  }

  /**
   * Deletes a live stream snapshot template.
   * 
   * @param request - DeleteLiveSnapshotTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveSnapshotTemplateResponse
   */
  async deleteLiveSnapshotTemplateWithOptions(request: $_model.DeleteLiveSnapshotTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveSnapshotTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveSnapshotTemplateResponse({}));
  }

  /**
   * Deletes a live stream snapshot template.
   * 
   * @param request - DeleteLiveSnapshotTemplateRequest
   * @returns DeleteLiveSnapshotTemplateResponse
   */
  async deleteLiveSnapshotTemplate(request: $_model.DeleteLiveSnapshotTemplateRequest): Promise<$_model.DeleteLiveSnapshotTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLiveSnapshotTemplateWithOptions(request, runtime);
  }

  /**
   * 删除指定转码任务
   * 
   * @param request - DeleteLiveTranscodeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveTranscodeJobResponse
   */
  async deleteLiveTranscodeJobWithOptions(request: $_model.DeleteLiveTranscodeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveTranscodeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveTranscodeJobResponse({}));
  }

  /**
   * 删除指定转码任务
   * 
   * @param request - DeleteLiveTranscodeJobRequest
   * @returns DeleteLiveTranscodeJobResponse
   */
  async deleteLiveTranscodeJob(request: $_model.DeleteLiveTranscodeJobRequest): Promise<$_model.DeleteLiveTranscodeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLiveTranscodeJobWithOptions(request, runtime);
  }

  /**
   * Deletes a live stream transcoding template.
   * 
   * @param request - DeleteLiveTranscodeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLiveTranscodeTemplateResponse
   */
  async deleteLiveTranscodeTemplateWithOptions(request: $_model.DeleteLiveTranscodeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLiveTranscodeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLiveTranscodeTemplateResponse({}));
  }

  /**
   * Deletes a live stream transcoding template.
   * 
   * @param request - DeleteLiveTranscodeTemplateRequest
   * @returns DeleteLiveTranscodeTemplateResponse
   */
  async deleteLiveTranscodeTemplate(request: $_model.DeleteLiveTranscodeTemplateRequest): Promise<$_model.DeleteLiveTranscodeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLiveTranscodeTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   When a flow is deleted, its source and outputs are also deleted.
   * *   When a flow is in the online state, it cannot be deleted.
   * 
   * @param request - DeleteMediaConnectFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaConnectFlowResponse
   */
  async deleteMediaConnectFlowWithOptions(request: $_model.DeleteMediaConnectFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaConnectFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaConnectFlow",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaConnectFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaConnectFlowResponse({}));
  }

  /**
   * Deletes a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   When a flow is deleted, its source and outputs are also deleted.
   * *   When a flow is in the online state, it cannot be deleted.
   * 
   * @param request - DeleteMediaConnectFlowRequest
   * @returns DeleteMediaConnectFlowResponse
   */
  async deleteMediaConnectFlow(request: $_model.DeleteMediaConnectFlowRequest): Promise<$_model.DeleteMediaConnectFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaConnectFlowWithOptions(request, runtime);
  }

  /**
   * Deletes the source of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   When a flow is in the online state, its source cannot be deleted.
   * *   You can delete the source only after all outputs of the flow have been deleted.
   * 
   * @param request - DeleteMediaConnectFlowInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaConnectFlowInputResponse
   */
  async deleteMediaConnectFlowInputWithOptions(request: $_model.DeleteMediaConnectFlowInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaConnectFlowInputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.inputName)) {
      query["InputName"] = request.inputName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaConnectFlowInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaConnectFlowInputResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaConnectFlowInputResponse({}));
  }

  /**
   * Deletes the source of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   When a flow is in the online state, its source cannot be deleted.
   * *   You can delete the source only after all outputs of the flow have been deleted.
   * 
   * @param request - DeleteMediaConnectFlowInputRequest
   * @returns DeleteMediaConnectFlowInputResponse
   */
  async deleteMediaConnectFlowInput(request: $_model.DeleteMediaConnectFlowInputRequest): Promise<$_model.DeleteMediaConnectFlowInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaConnectFlowInputWithOptions(request, runtime);
  }

  /**
   * Deletes an output of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   When a flow is in the online state, its outputs cannot be deleted.
   * 
   * @param request - DeleteMediaConnectFlowOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaConnectFlowOutputResponse
   */
  async deleteMediaConnectFlowOutputWithOptions(request: $_model.DeleteMediaConnectFlowOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaConnectFlowOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaConnectFlowOutput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaConnectFlowOutputResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaConnectFlowOutputResponse({}));
  }

  /**
   * Deletes an output of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   When a flow is in the online state, its outputs cannot be deleted.
   * 
   * @param request - DeleteMediaConnectFlowOutputRequest
   * @returns DeleteMediaConnectFlowOutputResponse
   */
  async deleteMediaConnectFlowOutput(request: $_model.DeleteMediaConnectFlowOutputRequest): Promise<$_model.DeleteMediaConnectFlowOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaConnectFlowOutputWithOptions(request, runtime);
  }

  /**
   * Deletes a specific media asset from a search library.
   * 
   * @param request - DeleteMediaFromSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaFromSearchLibResponse
   */
  async deleteMediaFromSearchLibWithOptions(request: $_model.DeleteMediaFromSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaFromSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.msgBody)) {
      query["MsgBody"] = request.msgBody;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaFromSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaFromSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaFromSearchLibResponse({}));
  }

  /**
   * Deletes a specific media asset from a search library.
   * 
   * @param request - DeleteMediaFromSearchLibRequest
   * @returns DeleteMediaFromSearchLibResponse
   */
  async deleteMediaFromSearchLib(request: $_model.DeleteMediaFromSearchLibRequest): Promise<$_model.DeleteMediaFromSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaFromSearchLibWithOptions(request, runtime);
  }

  /**
   * Deletes multiple media assets at a time. You can delete at most 20 media assets at a time. If MediaIds is specified, it is preferentially used. If MediaIds is empty, InputURLs must be specified.
   * 
   * @param request - DeleteMediaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaInfosResponse
   */
  async deleteMediaInfosWithOptions(request: $_model.DeleteMediaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletePhysicalFiles)) {
      query["DeletePhysicalFiles"] = request.deletePhysicalFiles;
    }

    if (!$dara.isNull(request.inputURLs)) {
      query["InputURLs"] = request.inputURLs;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaInfosResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaInfosResponse({}));
  }

  /**
   * Deletes multiple media assets at a time. You can delete at most 20 media assets at a time. If MediaIds is specified, it is preferentially used. If MediaIds is empty, InputURLs must be specified.
   * 
   * @param request - DeleteMediaInfosRequest
   * @returns DeleteMediaInfosResponse
   */
  async deleteMediaInfos(request: $_model.DeleteMediaInfosRequest): Promise<$_model.DeleteMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaInfosWithOptions(request, runtime);
  }

  /**
   * Deletes a MediaLive channel.
   * 
   * @remarks
   *  You can only delete a channel that is not running.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DeleteMediaLiveChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaLiveChannelResponse
   */
  async deleteMediaLiveChannelWithOptions(request: $_model.DeleteMediaLiveChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaLiveChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaLiveChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaLiveChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaLiveChannelResponse({}));
  }

  /**
   * Deletes a MediaLive channel.
   * 
   * @remarks
   *  You can only delete a channel that is not running.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DeleteMediaLiveChannelRequest
   * @returns DeleteMediaLiveChannelResponse
   */
  async deleteMediaLiveChannel(request: $_model.DeleteMediaLiveChannelRequest): Promise<$_model.DeleteMediaLiveChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaLiveChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a MediaLive input.
   * 
   * @remarks
   *   You can delete an input only when it is not associated with a MediaLive channel.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DeleteMediaLiveInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaLiveInputResponse
   */
  async deleteMediaLiveInputWithOptions(request: $_model.DeleteMediaLiveInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaLiveInputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputId)) {
      body["InputId"] = request.inputId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaLiveInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaLiveInputResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaLiveInputResponse({}));
  }

  /**
   * Deletes a MediaLive input.
   * 
   * @remarks
   *   You can delete an input only when it is not associated with a MediaLive channel.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DeleteMediaLiveInputRequest
   * @returns DeleteMediaLiveInputResponse
   */
  async deleteMediaLiveInput(request: $_model.DeleteMediaLiveInputRequest): Promise<$_model.DeleteMediaLiveInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaLiveInputWithOptions(request, runtime);
  }

  /**
   * Deletes a security group in MediaLive.
   * 
   * @remarks
   *   You can only delete a security group not associated with an input.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DeleteMediaLiveInputSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaLiveInputSecurityGroupResponse
   */
  async deleteMediaLiveInputSecurityGroupWithOptions(request: $_model.DeleteMediaLiveInputSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaLiveInputSecurityGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaLiveInputSecurityGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaLiveInputSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaLiveInputSecurityGroupResponse({}));
  }

  /**
   * Deletes a security group in MediaLive.
   * 
   * @remarks
   *   You can only delete a security group not associated with an input.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DeleteMediaLiveInputSecurityGroupRequest
   * @returns DeleteMediaLiveInputSecurityGroupResponse
   */
  async deleteMediaLiveInputSecurityGroup(request: $_model.DeleteMediaLiveInputSecurityGroupRequest): Promise<$_model.DeleteMediaLiveInputSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaLiveInputSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the marks of a media asset.
   * 
   * @param request - DeleteMediaMarksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediaMarksResponse
   */
  async deleteMediaMarksWithOptions(request: $_model.DeleteMediaMarksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediaMarksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaMarkIds)) {
      query["MediaMarkIds"] = request.mediaMarkIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMediaMarks",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediaMarksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediaMarksResponse({}));
  }

  /**
   * Deletes the marks of a media asset.
   * 
   * @param request - DeleteMediaMarksRequest
   * @returns DeleteMediaMarksResponse
   */
  async deleteMediaMarks(request: $_model.DeleteMediaMarksRequest): Promise<$_model.DeleteMediaMarksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediaMarksWithOptions(request, runtime);
  }

  /**
   * Deletes an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - DeletePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelineResponse
   */
  async deletePipelineWithOptions(request: $_model.DeletePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePipeline",
      version: "2020-11-09",
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
   * @param request - DeletePipelineRequest
   * @returns DeletePipelineResponse
   */
  async deletePipeline(request: $_model.DeletePipelineRequest): Promise<$_model.DeletePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePipelineWithOptions(request, runtime);
  }

  /**
   * Deletes media streams such as video streams and audio streams.
   * 
   * @remarks
   * You can call this operation to delete multiple media streams at a time.
   * 
   * @param request - DeletePlayInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePlayInfoResponse
   */
  async deletePlayInfoWithOptions(request: $_model.DeletePlayInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePlayInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletePhysicalFiles)) {
      query["DeletePhysicalFiles"] = request.deletePhysicalFiles;
    }

    if (!$dara.isNull(request.fileURLs)) {
      query["FileURLs"] = request.fileURLs;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePlayInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePlayInfoResponse>(await this.callApi(params, req, runtime), new $_model.DeletePlayInfoResponse({}));
  }

  /**
   * Deletes media streams such as video streams and audio streams.
   * 
   * @remarks
   * You can call this operation to delete multiple media streams at a time.
   * 
   * @param request - DeletePlayInfoRequest
   * @returns DeletePlayInfoResponse
   */
  async deletePlayInfo(request: $_model.DeletePlayInfoRequest): Promise<$_model.DeletePlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePlayInfoWithOptions(request, runtime);
  }

  /**
   * Deletes a program from a channel.
   * 
   * @param request - DeleteProgramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProgramResponse
   */
  async deleteProgramWithOptions(request: $_model.DeleteProgramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProgramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.programName)) {
      query["ProgramName"] = request.programName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProgram",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProgramResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProgramResponse({}));
  }

  /**
   * Deletes a program from a channel.
   * 
   * @param request - DeleteProgramRequest
   * @returns DeleteProgramResponse
   */
  async deleteProgram(request: $_model.DeleteProgramRequest): Promise<$_model.DeleteProgramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProgramWithOptions(request, runtime);
  }

  /**
   * Deletes an entity from the specified custom recognition library.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - DeleteRecognitionEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecognitionEntityResponse
   */
  async deleteRecognitionEntityWithOptions(request: $_model.DeleteRecognitionEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecognitionEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "DeleteRecognitionEntity",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecognitionEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecognitionEntityResponse({}));
  }

  /**
   * Deletes an entity from the specified custom recognition library.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - DeleteRecognitionEntityRequest
   * @returns DeleteRecognitionEntityResponse
   */
  async deleteRecognitionEntity(request: $_model.DeleteRecognitionEntityRequest): Promise<$_model.DeleteRecognitionEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecognitionEntityWithOptions(request, runtime);
  }

  /**
   * Deletes a custom recognition library, including all entities and samples within it.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - DeleteRecognitionLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecognitionLibResponse
   */
  async deleteRecognitionLibWithOptions(request: $_model.DeleteRecognitionLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecognitionLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "DeleteRecognitionLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecognitionLibResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecognitionLibResponse({}));
  }

  /**
   * Deletes a custom recognition library, including all entities and samples within it.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - DeleteRecognitionLibRequest
   * @returns DeleteRecognitionLibResponse
   */
  async deleteRecognitionLib(request: $_model.DeleteRecognitionLibRequest): Promise<$_model.DeleteRecognitionLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecognitionLibWithOptions(request, runtime);
  }

  /**
   * Deletes a sample for a custom entity.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - DeleteRecognitionSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecognitionSampleResponse
   */
  async deleteRecognitionSampleWithOptions(request: $_model.DeleteRecognitionSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecognitionSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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

    if (!$dara.isNull(request.sampleId)) {
      query["SampleId"] = request.sampleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecognitionSample",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecognitionSampleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecognitionSampleResponse({}));
  }

  /**
   * Deletes a sample for a custom entity.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - DeleteRecognitionSampleRequest
   * @returns DeleteRecognitionSampleResponse
   */
  async deleteRecognitionSample(request: $_model.DeleteRecognitionSampleRequest): Promise<$_model.DeleteRecognitionSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecognitionSampleWithOptions(request, runtime);
  }

  /**
   * Deletes intelligent jobs based on job IDs.
   * 
   * @param request - DeleteSmartJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSmartJobResponse
   */
  async deleteSmartJobWithOptions(request: $_model.DeleteSmartJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSmartJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSmartJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSmartJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSmartJobResponse({}));
  }

  /**
   * Deletes intelligent jobs based on job IDs.
   * 
   * @param request - DeleteSmartJobRequest
   * @returns DeleteSmartJobResponse
   */
  async deleteSmartJob(request: $_model.DeleteSmartJobRequest): Promise<$_model.DeleteSmartJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSmartJobWithOptions(request, runtime);
  }

  /**
   * Deletes a source from MediaWeaver.
   * 
   * @param request - DeleteSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceResponse
   */
  async deleteSourceWithOptions(request: $_model.DeleteSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.softDelete)) {
      query["SoftDelete"] = request.softDelete;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSource",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceResponse({}));
  }

  /**
   * Deletes a source from MediaWeaver.
   * 
   * @param request - DeleteSourceRequest
   * @returns DeleteSourceResponse
   */
  async deleteSource(request: $_model.DeleteSourceRequest): Promise<$_model.DeleteSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a source location.
   * 
   * @param request - DeleteSourceLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceLocationResponse
   */
  async deleteSourceLocationWithOptions(request: $_model.DeleteSourceLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.softDelete)) {
      query["SoftDelete"] = request.softDelete;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSourceLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceLocationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceLocationResponse({}));
  }

  /**
   * Deletes a source location.
   * 
   * @param request - DeleteSourceLocationRequest
   * @returns DeleteSourceLocationResponse
   */
  async deleteSourceLocation(request: $_model.DeleteSourceLocationRequest): Promise<$_model.DeleteSourceLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSourceLocationWithOptions(request, runtime);
  }

  /**
   * Deletes templates.
   * 
   * @remarks
   * A template is an encapsulation of the timeline of a media editing and production job. You can define a common timeline as a template. When you have the same requirements, you need to only specify key parameters and materials to produce videos.
   * *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: $_model.DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * Deletes templates.
   * 
   * @remarks
   * A template is an encapsulation of the timeline of a media editing and production job. You can define a common timeline as a template. When you have the same requirements, you need to only specify key parameters and materials to produce videos.
   * *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a VOD packaging asset.
   * 
   * @param request - DeleteVodPackagingAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodPackagingAssetResponse
   */
  async deleteVodPackagingAssetWithOptions(request: $_model.DeleteVodPackagingAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodPackagingAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetName)) {
      query["AssetName"] = request.assetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodPackagingAsset",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodPackagingAssetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodPackagingAssetResponse({}));
  }

  /**
   * Deletes a VOD packaging asset.
   * 
   * @param request - DeleteVodPackagingAssetRequest
   * @returns DeleteVodPackagingAssetResponse
   */
  async deleteVodPackagingAsset(request: $_model.DeleteVodPackagingAssetRequest): Promise<$_model.DeleteVodPackagingAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodPackagingAssetWithOptions(request, runtime);
  }

  /**
   * Deletes a packaging configuration.
   * 
   * @param request - DeleteVodPackagingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodPackagingConfigurationResponse
   */
  async deleteVodPackagingConfigurationWithOptions(request: $_model.DeleteVodPackagingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodPackagingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configurationName)) {
      query["ConfigurationName"] = request.configurationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodPackagingConfiguration",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodPackagingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodPackagingConfigurationResponse({}));
  }

  /**
   * Deletes a packaging configuration.
   * 
   * @param request - DeleteVodPackagingConfigurationRequest
   * @returns DeleteVodPackagingConfigurationResponse
   */
  async deleteVodPackagingConfiguration(request: $_model.DeleteVodPackagingConfigurationRequest): Promise<$_model.DeleteVodPackagingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodPackagingConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes a packaging group.
   * 
   * @param request - DeleteVodPackagingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVodPackagingGroupResponse
   */
  async deleteVodPackagingGroupWithOptions(request: $_model.DeleteVodPackagingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVodPackagingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVodPackagingGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVodPackagingGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVodPackagingGroupResponse({}));
  }

  /**
   * Deletes a packaging group.
   * 
   * @param request - DeleteVodPackagingGroupRequest
   * @returns DeleteVodPackagingGroupResponse
   */
  async deleteVodPackagingGroup(request: $_model.DeleteVodPackagingGroupRequest): Promise<$_model.DeleteVodPackagingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVodPackagingGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AI agent.
   * 
   * @remarks
   * ## [](#)Request description
   * *   **Feature**: You can call this operation to query the information about an AI agent.
   * *   **Scenario**: If you need to monitor or analyze the performance of an AI agent in a call or debug the agent configurations, you can call this operation to obtain required data.
   * 
   * @param request - DescribeAIAgentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAIAgentInstanceResponse
   */
  async describeAIAgentInstanceWithOptions(request: $_model.DescribeAIAgentInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIAgentInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAIAgentInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAIAgentInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAIAgentInstanceResponse({}));
  }

  /**
   * Queries the information about an AI agent.
   * 
   * @remarks
   * ## [](#)Request description
   * *   **Feature**: You can call this operation to query the information about an AI agent.
   * *   **Scenario**: If you need to monitor or analyze the performance of an AI agent in a call or debug the agent configurations, you can call this operation to obtain required data.
   * 
   * @param request - DescribeAIAgentInstanceRequest
   * @returns DescribeAIAgentInstanceResponse
   */
  async describeAIAgentInstance(request: $_model.DescribeAIAgentInstanceRequest): Promise<$_model.DescribeAIAgentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAIAgentInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on video-on-demand (VOD) editing. The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsEditUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeterImsEditUsageResponse
   */
  async describeMeterImsEditUsageWithOptions(request: $_model.DescribeMeterImsEditUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeterImsEditUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeterImsEditUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeterImsEditUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeterImsEditUsageResponse({}));
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on video-on-demand (VOD) editing. The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsEditUsageRequest
   * @returns DescribeMeterImsEditUsageResponse
   */
  async describeMeterImsEditUsage(request: $_model.DescribeMeterImsEditUsageRequest): Promise<$_model.DescribeMeterImsEditUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeterImsEditUsageWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on ultra high definition (UHD) transcoding of ApsaraVideo Media Processing (MPS). The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsMediaConvertUHDUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeterImsMediaConvertUHDUsageResponse
   */
  async describeMeterImsMediaConvertUHDUsageWithOptions(request: $_model.DescribeMeterImsMediaConvertUHDUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeterImsMediaConvertUHDUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeterImsMediaConvertUHDUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeterImsMediaConvertUHDUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeterImsMediaConvertUHDUsageResponse({}));
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on ultra high definition (UHD) transcoding of ApsaraVideo Media Processing (MPS). The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsMediaConvertUHDUsageRequest
   * @returns DescribeMeterImsMediaConvertUHDUsageResponse
   */
  async describeMeterImsMediaConvertUHDUsage(request: $_model.DescribeMeterImsMediaConvertUHDUsageRequest): Promise<$_model.DescribeMeterImsMediaConvertUHDUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeterImsMediaConvertUHDUsageWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on video-on-demand (VOD) transcoding. The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsMediaConvertUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeterImsMediaConvertUsageResponse
   */
  async describeMeterImsMediaConvertUsageWithOptions(request: $_model.DescribeMeterImsMediaConvertUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeterImsMediaConvertUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeterImsMediaConvertUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeterImsMediaConvertUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeterImsMediaConvertUsageResponse({}));
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on video-on-demand (VOD) transcoding. The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsMediaConvertUsageRequest
   * @returns DescribeMeterImsMediaConvertUsageResponse
   */
  async describeMeterImsMediaConvertUsage(request: $_model.DescribeMeterImsMediaConvertUsageRequest): Promise<$_model.DescribeMeterImsMediaConvertUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeterImsMediaConvertUsageWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on AI processing of ApsaraVideo Media Processing (MPS). The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsMpsAiUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeterImsMpsAiUsageResponse
   */
  async describeMeterImsMpsAiUsageWithOptions(request: $_model.DescribeMeterImsMpsAiUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeterImsMpsAiUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeterImsMpsAiUsage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeterImsMpsAiUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeterImsMpsAiUsageResponse({}));
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS) on AI processing of ApsaraVideo Media Processing (MPS). The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsMpsAiUsageRequest
   * @returns DescribeMeterImsMpsAiUsageResponse
   */
  async describeMeterImsMpsAiUsage(request: $_model.DescribeMeterImsMpsAiUsageRequest): Promise<$_model.DescribeMeterImsMpsAiUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeterImsMpsAiUsageWithOptions(request, runtime);
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS). The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeterImsSummaryResponse
   */
  async describeMeterImsSummaryWithOptions(request: $_model.DescribeMeterImsSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeterImsSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTs)) {
      query["EndTs"] = request.endTs;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeterImsSummary",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeterImsSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeterImsSummaryResponse({}));
  }

  /**
   * Queries the usage statistics of Intelligent Media Services (IMS). The maximum query range is 31 days. You can query data within the last 90 days.
   * 
   * @param request - DescribeMeterImsSummaryRequest
   * @returns DescribeMeterImsSummaryResponse
   */
  async describeMeterImsSummary(request: $_model.DescribeMeterImsSummaryRequest): Promise<$_model.DescribeMeterImsSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeterImsSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the event callback configurations of an AI agent.
   * 
   * @remarks
   * You can call this operation to query the detailed callback configurations of an AI agent.
   * 
   * @param request - DescribeNotifyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNotifyConfigResponse
   */
  async describeNotifyConfigWithOptions(request: $_model.DescribeNotifyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNotifyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNotifyConfig",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNotifyConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNotifyConfigResponse({}));
  }

  /**
   * Queries the event callback configurations of an AI agent.
   * 
   * @remarks
   * You can call this operation to query the detailed callback configurations of an AI agent.
   * 
   * @param request - DescribeNotifyConfigRequest
   * @returns DescribeNotifyConfigResponse
   */
  async describeNotifyConfig(request: $_model.DescribeNotifyConfigRequest): Promise<$_model.DescribeNotifyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNotifyConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves playback records based on the player\\"s TraceId. This API supports pagination.
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
      version: "2020-11-09",
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
   * Retrieves playback records based on the player\\"s TraceId. This API supports pagination.
   * 
   * @param request - DescribePlayListRequest
   * @returns DescribePlayListResponse
   */
  async describePlayList(request: $_model.DescribePlayListRequest): Promise<$_model.DescribePlayListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlayListWithOptions(request, runtime);
  }

  /**
   * 查询实例
   * 
   * @param request - DescribeRtcRobotInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRtcRobotInstanceResponse
   */
  async describeRtcRobotInstanceWithOptions(request: $_model.DescribeRtcRobotInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRtcRobotInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRtcRobotInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRtcRobotInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRtcRobotInstanceResponse({}));
  }

  /**
   * 查询实例
   * 
   * @param request - DescribeRtcRobotInstanceRequest
   * @returns DescribeRtcRobotInstanceResponse
   */
  async describeRtcRobotInstance(request: $_model.DescribeRtcRobotInstanceRequest): Promise<$_model.DescribeRtcRobotInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRtcRobotInstanceWithOptions(request, runtime);
  }

  /**
   * Checks whether the reading of users has issues, such as noticeable pronunciation errors or background noise. After the audio is checked on the cloud, the qualified audio is temporarily stored on the cloud for subsequent training. Do not skip this step.
   * 
   * @param request - DetectAudioForCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectAudioForCustomizedVoiceJobResponse
   */
  async detectAudioForCustomizedVoiceJobWithOptions(request: $_model.DetectAudioForCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectAudioForCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audioRecordId)) {
      query["AudioRecordId"] = request.audioRecordId;
    }

    if (!$dara.isNull(request.recordUrl)) {
      query["RecordUrl"] = request.recordUrl;
    }

    if (!$dara.isNull(request.voiceId)) {
      query["VoiceId"] = request.voiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectAudioForCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectAudioForCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.DetectAudioForCustomizedVoiceJobResponse({}));
  }

  /**
   * Checks whether the reading of users has issues, such as noticeable pronunciation errors or background noise. After the audio is checked on the cloud, the qualified audio is temporarily stored on the cloud for subsequent training. Do not skip this step.
   * 
   * @param request - DetectAudioForCustomizedVoiceJobRequest
   * @returns DetectAudioForCustomizedVoiceJobResponse
   */
  async detectAudioForCustomizedVoiceJob(request: $_model.DetectAudioForCustomizedVoiceJobRequest): Promise<$_model.DetectAudioForCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectAudioForCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * Deletes a search index. After you delete a search index, the existing index data is cleared and index-based analysis, storage, and query are not supported for subsequent media assets.
   * 
   * @param request - DropSearchIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropSearchIndexResponse
   */
  async dropSearchIndexWithOptions(request: $_model.DropSearchIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DropSearchIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.indexType)) {
      query["IndexType"] = request.indexType;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DropSearchIndex",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DropSearchIndexResponse>(await this.callApi(params, req, runtime), new $_model.DropSearchIndexResponse({}));
  }

  /**
   * Deletes a search index. After you delete a search index, the existing index data is cleared and index-based analysis, storage, and query are not supported for subsequent media assets.
   * 
   * @param request - DropSearchIndexRequest
   * @returns DropSearchIndexResponse
   */
  async dropSearchIndex(request: $_model.DropSearchIndexRequest): Promise<$_model.DropSearchIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dropSearchIndexWithOptions(request, runtime);
  }

  /**
   * Deletes a search library and all media assets in the library.
   * 
   * @param request - DropSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropSearchLibResponse
   */
  async dropSearchLibWithOptions(request: $_model.DropSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DropSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DropSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DropSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.DropSearchLibResponse({}));
  }

  /**
   * Deletes a search library and all media assets in the library.
   * 
   * @param request - DropSearchLibRequest
   * @returns DropSearchLibResponse
   */
  async dropSearchLib(request: $_model.DropSearchLibRequest): Promise<$_model.DropSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dropSearchLibWithOptions(request, runtime);
  }

  /**
   * Disables an output of a MediaConnect flow. When disabled, the output retains its configuration, but no live stream is delivered to the destination.
   * 
   * @param request - ForbidMediaConnectFlowOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForbidMediaConnectFlowOutputResponse
   */
  async forbidMediaConnectFlowOutputWithOptions(request: $_model.ForbidMediaConnectFlowOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ForbidMediaConnectFlowOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForbidMediaConnectFlowOutput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForbidMediaConnectFlowOutputResponse>(await this.callApi(params, req, runtime), new $_model.ForbidMediaConnectFlowOutputResponse({}));
  }

  /**
   * Disables an output of a MediaConnect flow. When disabled, the output retains its configuration, but no live stream is delivered to the destination.
   * 
   * @param request - ForbidMediaConnectFlowOutputRequest
   * @returns ForbidMediaConnectFlowOutputResponse
   */
  async forbidMediaConnectFlowOutput(request: $_model.ForbidMediaConnectFlowOutputRequest): Promise<$_model.ForbidMediaConnectFlowOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forbidMediaConnectFlowOutputWithOptions(request, runtime);
  }

  /**
   * 转呼通话到目标电话
   * 
   * @param request - ForwardAIAgentCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForwardAIAgentCallResponse
   */
  async forwardAIAgentCallWithOptions(request: $_model.ForwardAIAgentCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ForwardAIAgentCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.errorPrompt)) {
      query["ErrorPrompt"] = request.errorPrompt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.transferPrompt)) {
      query["TransferPrompt"] = request.transferPrompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForwardAIAgentCall",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForwardAIAgentCallResponse>(await this.callApi(params, req, runtime), new $_model.ForwardAIAgentCallResponse({}));
  }

  /**
   * 转呼通话到目标电话
   * 
   * @param request - ForwardAIAgentCallRequest
   * @returns ForwardAIAgentCallResponse
   */
  async forwardAIAgentCall(request: $_model.ForwardAIAgentCallRequest): Promise<$_model.ForwardAIAgentCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forwardAIAgentCallWithOptions(request, runtime);
  }

  /**
   * Creates an AI agent. This operation returns the channel in which the AI agent resides, the username of the AI agent in the channel, and the token that you can use to join the channel.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to create an AI agent based on the provided ID. You can join the channel based on the returned information and talk to the agent.
   * **Note:** Make sure that the provided AI agent ID is valid and configure optional parameters based on your business requirements.
   * 
   * @param tmpReq - GenerateAIAgentCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAIAgentCallResponse
   */
  async generateAIAgentCallWithOptions(tmpReq: $_model.GenerateAIAgentCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAIAgentCallResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateAIAgentCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentConfig)) {
      request.agentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentConfig, "AgentConfig", "json");
    }

    if (!$dara.isNull(tmpReq.chatSyncConfig)) {
      request.chatSyncConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chatSyncConfig, "ChatSyncConfig", "json");
    }

    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.agentConfigShrink)) {
      query["AgentConfig"] = request.agentConfigShrink;
    }

    if (!$dara.isNull(request.chatSyncConfigShrink)) {
      query["ChatSyncConfig"] = request.chatSyncConfigShrink;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateAIAgentCall",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateAIAgentCallResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAIAgentCallResponse({}));
  }

  /**
   * Creates an AI agent. This operation returns the channel in which the AI agent resides, the username of the AI agent in the channel, and the token that you can use to join the channel.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to create an AI agent based on the provided ID. You can join the channel based on the returned information and talk to the agent.
   * **Note:** Make sure that the provided AI agent ID is valid and configure optional parameters based on your business requirements.
   * 
   * @param request - GenerateAIAgentCallRequest
   * @returns GenerateAIAgentCallResponse
   */
  async generateAIAgentCall(request: $_model.GenerateAIAgentCallRequest): Promise<$_model.GenerateAIAgentCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAIAgentCallWithOptions(request, runtime);
  }

  /**
   * Generates a random Key Management Service (KMS) data key used for HTTP Live Streaming (HLS) encryption and transcoding of videos.
   * 
   * @param request - GenerateKMSDataKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateKMSDataKeyResponse
   */
  async generateKMSDataKeyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GenerateKMSDataKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GenerateKMSDataKey",
      version: "2020-11-09",
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
   * Generates a random Key Management Service (KMS) data key used for HTTP Live Streaming (HLS) encryption and transcoding of videos.
   * @returns GenerateKMSDataKeyResponse
   */
  async generateKMSDataKey(): Promise<$_model.GenerateKMSDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateKMSDataKeyWithOptions(runtime);
  }

  /**
   * Generates the token required for interactive messaging.
   * 
   * @param request - GenerateMessageChatTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateMessageChatTokenResponse
   */
  async generateMessageChatTokenWithOptions(request: $_model.GenerateMessageChatTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateMessageChatTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateMessageChatToken",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateMessageChatTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateMessageChatTokenResponse({}));
  }

  /**
   * Generates the token required for interactive messaging.
   * 
   * @param request - GenerateMessageChatTokenRequest
   * @returns GenerateMessageChatTokenResponse
   */
  async generateMessageChatToken(request: $_model.GenerateMessageChatTokenRequest): Promise<$_model.GenerateMessageChatTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateMessageChatTokenWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a workflow task.
   * 
   * @param request - GetAIWorkflowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIWorkflowTaskResponse
   */
  async getAIWorkflowTaskWithOptions(request: $_model.GetAIWorkflowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAIWorkflowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIWorkflowTask",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAIWorkflowTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAIWorkflowTaskResponse({}));
  }

  /**
   * Retrieves the details of a workflow task.
   * 
   * @param request - GetAIWorkflowTaskRequest
   * @returns GetAIWorkflowTaskResponse
   */
  async getAIWorkflowTask(request: $_model.GetAIWorkflowTaskRequest): Promise<$_model.GetAIWorkflowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAIWorkflowTaskWithOptions(request, runtime);
  }

  /**
   * Obtains details of an ad insertion configuration.
   * 
   * @param request - GetAdInsertionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdInsertionResponse
   */
  async getAdInsertionWithOptions(request: $_model.GetAdInsertionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdInsertionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdInsertion",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdInsertionResponse>(await this.callApi(params, req, runtime), new $_model.GetAdInsertionResponse({}));
  }

  /**
   * Obtains details of an ad insertion configuration.
   * 
   * @param request - GetAdInsertionRequest
   * @returns GetAdInsertionResponse
   */
  async getAdInsertion(request: $_model.GetAdInsertionRequest): Promise<$_model.GetAdInsertionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAdInsertionWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of Real-time Conversational AI authentication codes and their status for a specified batch.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   This API retrieves a list of authorization codes for a specific batch ID. You can filter the results by status and type.
   * *   Pagination is supported via the `PageNo` and `PageSize` parameters.
   * *   By default, the `NeedTotalCount` parameter is set to `true`, indicating that the response includes the total count of matching records.
   * *   `LicenseItemId` is a required parameter that specifies the batch to query.
   * 
   * @param request - GetAiRtcAuthCodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiRtcAuthCodeListResponse
   */
  async getAiRtcAuthCodeListWithOptions(request: $_model.GetAiRtcAuthCodeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiRtcAuthCodeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseItemId)) {
      query["LicenseItemId"] = request.licenseItemId;
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
      action: "GetAiRtcAuthCodeList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiRtcAuthCodeListResponse>(await this.callApi(params, req, runtime), new $_model.GetAiRtcAuthCodeListResponse({}));
  }

  /**
   * Retrieves a list of Real-time Conversational AI authentication codes and their status for a specified batch.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   This API retrieves a list of authorization codes for a specific batch ID. You can filter the results by status and type.
   * *   Pagination is supported via the `PageNo` and `PageSize` parameters.
   * *   By default, the `NeedTotalCount` parameter is set to `true`, indicating that the response includes the total count of matching records.
   * *   `LicenseItemId` is a required parameter that specifies the batch to query.
   * 
   * @param request - GetAiRtcAuthCodeListRequest
   * @returns GetAiRtcAuthCodeListResponse
   */
  async getAiRtcAuthCodeList(request: $_model.GetAiRtcAuthCodeListRequest): Promise<$_model.GetAiRtcAuthCodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiRtcAuthCodeListWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of license batches for Real-time Conversational AI based on specified filter criteria.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   This API allows you to retrieve a list of license batches for Real-time Conversational AI using filters such as Batch ID, status, and type.
   * *   By default, the `NeedTotalCount` parameter is set to `true`, indicating that the response includes the total count of matching records. Set it to `false` if you do not need this total.
   * *   If no filter criteria are provided, the API returns information for all license batches.
   * 
   * @param request - GetAiRtcLicenseInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiRtcLicenseInfoListResponse
   */
  async getAiRtcLicenseInfoListWithOptions(request: $_model.GetAiRtcLicenseInfoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiRtcLicenseInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseItemId)) {
      query["LicenseItemId"] = request.licenseItemId;
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
      action: "GetAiRtcLicenseInfoList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiRtcLicenseInfoListResponse>(await this.callApi(params, req, runtime), new $_model.GetAiRtcLicenseInfoListResponse({}));
  }

  /**
   * Retrieves a list of license batches for Real-time Conversational AI based on specified filter criteria.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   This API allows you to retrieve a list of license batches for Real-time Conversational AI using filters such as Batch ID, status, and type.
   * *   By default, the `NeedTotalCount` parameter is set to `true`, indicating that the response includes the total count of matching records. Set it to `false` if you do not need this total.
   * *   If no filter criteria are provided, the API returns information for all license batches.
   * 
   * @param request - GetAiRtcLicenseInfoListRequest
   * @returns GetAiRtcLicenseInfoListResponse
   */
  async getAiRtcLicenseInfoList(request: $_model.GetAiRtcLicenseInfoListRequest): Promise<$_model.GetAiRtcLicenseInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAiRtcLicenseInfoListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a trained digital human.
   * 
   * @param request - GetAvatarRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAvatarResponse
   */
  async getAvatarWithOptions(request: $_model.GetAvatarRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAvatarResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avatarId)) {
      query["AvatarId"] = request.avatarId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAvatar",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAvatarResponse>(await this.callApi(params, req, runtime), new $_model.GetAvatarResponse({}));
  }

  /**
   * Queries the information about a trained digital human.
   * 
   * @param request - GetAvatarRequest
   * @returns GetAvatarResponse
   */
  async getAvatar(request: $_model.GetAvatarRequest): Promise<$_model.GetAvatarResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAvatarWithOptions(request, runtime);
  }

  /**
   * Queries the information about a digital human training job.
   * 
   * @param request - GetAvatarTrainingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAvatarTrainingJobResponse
   */
  async getAvatarTrainingJobWithOptions(request: $_model.GetAvatarTrainingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAvatarTrainingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAvatarTrainingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAvatarTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.GetAvatarTrainingJobResponse({}));
  }

  /**
   * Queries the information about a digital human training job.
   * 
   * @param request - GetAvatarTrainingJobRequest
   * @returns GetAvatarTrainingJobResponse
   */
  async getAvatarTrainingJob(request: $_model.GetAvatarTrainingJobRequest): Promise<$_model.GetAvatarTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAvatarTrainingJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about a quick video production job, including the input parameters, job state, and the IDs and URLs of the output media assets. You can call this operation to query only quick video production jobs created within the past year.
   * 
   * @param request - GetBatchMediaProducingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchMediaProducingJobResponse
   */
  async getBatchMediaProducingJobWithOptions(request: $_model.GetBatchMediaProducingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchMediaProducingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatchMediaProducingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchMediaProducingJobResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchMediaProducingJobResponse({}));
  }

  /**
   * Queries the information about a quick video production job, including the input parameters, job state, and the IDs and URLs of the output media assets. You can call this operation to query only quick video production jobs created within the past year.
   * 
   * @param request - GetBatchMediaProducingJobRequest
   * @returns GetBatchMediaProducingJobResponse
   */
  async getBatchMediaProducingJob(request: $_model.GetBatchMediaProducingJobRequest): Promise<$_model.GetBatchMediaProducingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchMediaProducingJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about a category and its subcategories.
   * 
   * @remarks
   * You can call this operation to query the information about a category and its subcategories based on the category ID and category type.
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
      version: "2020-11-09",
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
   * Queries the information about a category and its subcategories.
   * 
   * @remarks
   * You can call this operation to query the information about a category and its subcategories based on the category ID and category type.
   * 
   * @param request - GetCategoriesRequest
   * @returns GetCategoriesResponse
   */
  async getCategories(request: $_model.GetCategoriesRequest): Promise<$_model.GetCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCategoriesWithOptions(request, runtime);
  }

  /**
   * Queries information about a channel in MediaWeaver.
   * 
   * @param request - GetChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChannelResponse
   */
  async getChannelWithOptions(request: $_model.GetChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetChannelResponse({}));
  }

  /**
   * Queries information about a channel in MediaWeaver.
   * 
   * @param request - GetChannelRequest
   * @returns GetChannelResponse
   */
  async getChannel(request: $_model.GetChannelRequest): Promise<$_model.GetChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChannelWithOptions(request, runtime);
  }

  /**
   * 获取内容分析搜索配置
   * 
   * @param request - GetContentAnalyzeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContentAnalyzeConfigResponse
   */
  async getContentAnalyzeConfigWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetContentAnalyzeConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetContentAnalyzeConfig",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContentAnalyzeConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetContentAnalyzeConfigResponse({}));
  }

  /**
   * 获取内容分析搜索配置
   * @returns GetContentAnalyzeConfigResponse
   */
  async getContentAnalyzeConfig(): Promise<$_model.GetContentAnalyzeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContentAnalyzeConfigWithOptions(runtime);
  }

  /**
   * Queries the information about a custom template.
   * 
   * @remarks
   * You can call this operation to query the information about a template with the ID specified by the TemplateId parameter. You can also query the information about the default template. If TemplateId is specified, other parameters are ignored and the template whose ID is specified is queried. If TemplateId is not specified, the default template is queried based on other parameters. In this case, Type is required.
   * Template types:
   * 1.  1: transcoding template.
   * 2.  2: snapshot template.
   * 3.  3: animated image template.
   * 4.  4\\. image watermark template.
   * 5.  5: text watermark template.
   * 6.  6: subtitle template.
   * 7.  7: AI-assisted content moderation template.
   * 8.  8: AI-assisted intelligent thumbnail template.
   * 9.  9: AI-assisted intelligent erasure template.
   * Subtypes of transcoding templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (AudioTranscode): audio transcoding template.
   * 3.  3 (Remux): container format conversion template.
   * 4.  4 (NarrowBandV1): Narrowband HD 1.0 template.
   * 5.  5 (NarrowBandV2): Narrowband HD 2.0 template.
   * Subtypes of snapshot templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (Sprite): sprite template.
   * 3.  3 (WebVtt): WebVTT template.
   * Subtypes of AI-assisted content moderation templates:
   * 1.  1 (Video): video moderation template.
   * 2.  2 (Audio): audio moderation template.
   * 3.  3 (Image): image moderation template.
   * Subtypes of AI-assisted intelligent erasure templates:
   * 1.  1 (VideoDelogo): logo erasure template.
   * 2.  2 (VideoDetext): subtitle erasure template.
   * 
   * @param request - GetCustomTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomTemplateResponse
   */
  async getCustomTemplateWithOptions(request: $_model.GetCustomTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomTemplateResponse({}));
  }

  /**
   * Queries the information about a custom template.
   * 
   * @remarks
   * You can call this operation to query the information about a template with the ID specified by the TemplateId parameter. You can also query the information about the default template. If TemplateId is specified, other parameters are ignored and the template whose ID is specified is queried. If TemplateId is not specified, the default template is queried based on other parameters. In this case, Type is required.
   * Template types:
   * 1.  1: transcoding template.
   * 2.  2: snapshot template.
   * 3.  3: animated image template.
   * 4.  4\\. image watermark template.
   * 5.  5: text watermark template.
   * 6.  6: subtitle template.
   * 7.  7: AI-assisted content moderation template.
   * 8.  8: AI-assisted intelligent thumbnail template.
   * 9.  9: AI-assisted intelligent erasure template.
   * Subtypes of transcoding templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (AudioTranscode): audio transcoding template.
   * 3.  3 (Remux): container format conversion template.
   * 4.  4 (NarrowBandV1): Narrowband HD 1.0 template.
   * 5.  5 (NarrowBandV2): Narrowband HD 2.0 template.
   * Subtypes of snapshot templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (Sprite): sprite template.
   * 3.  3 (WebVtt): WebVTT template.
   * Subtypes of AI-assisted content moderation templates:
   * 1.  1 (Video): video moderation template.
   * 2.  2 (Audio): audio moderation template.
   * 3.  3 (Image): image moderation template.
   * Subtypes of AI-assisted intelligent erasure templates:
   * 1.  1 (VideoDelogo): logo erasure template.
   * 2.  2 (VideoDetext): subtitle erasure template.
   * 
   * @param request - GetCustomTemplateRequest
   * @returns GetCustomTemplateResponse
   */
  async getCustomTemplate(request: $_model.GetCustomTemplateRequest): Promise<$_model.GetCustomTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the information about a personalized human voice.
   * 
   * @param request - GetCustomizedVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomizedVoiceResponse
   */
  async getCustomizedVoiceWithOptions(request: $_model.GetCustomizedVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomizedVoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.voiceId)) {
      query["VoiceId"] = request.voiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomizedVoice",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomizedVoiceResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomizedVoiceResponse({}));
  }

  /**
   * Queries the information about a personalized human voice.
   * 
   * @param request - GetCustomizedVoiceRequest
   * @returns GetCustomizedVoiceResponse
   */
  async getCustomizedVoice(request: $_model.GetCustomizedVoiceRequest): Promise<$_model.GetCustomizedVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomizedVoiceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a human voice cloning job.
   * 
   * @param request - GetCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomizedVoiceJobResponse
   */
  async getCustomizedVoiceJobWithOptions(request: $_model.GetCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomizedVoiceJobResponse({}));
  }

  /**
   * Queries the information about a human voice cloning job.
   * 
   * @param request - GetCustomizedVoiceJobRequest
   * @returns GetCustomizedVoiceJobResponse
   */
  async getCustomizedVoiceJob(request: $_model.GetCustomizedVoiceJobRequest): Promise<$_model.GetCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * 获取用户默认存储地址
   * 
   * @param request - GetDefaultStorageLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultStorageLocationResponse
   */
  async getDefaultStorageLocationWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultStorageLocationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultStorageLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDefaultStorageLocationResponse>(await this.callApi(params, req, runtime), new $_model.GetDefaultStorageLocationResponse({}));
  }

  /**
   * 获取用户默认存储地址
   * @returns GetDefaultStorageLocationResponse
   */
  async getDefaultStorageLocation(): Promise<$_model.GetDefaultStorageLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDefaultStorageLocationWithOptions(runtime);
  }

  /**
   * Queries the text to be read and sample audio for training a personalized human voice.
   * 
   * @param request - GetDemonstrationForCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDemonstrationForCustomizedVoiceJobResponse
   */
  async getDemonstrationForCustomizedVoiceJobWithOptions(request: $_model.GetDemonstrationForCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDemonstrationForCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDemonstrationForCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDemonstrationForCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDemonstrationForCustomizedVoiceJobResponse({}));
  }

  /**
   * Queries the text to be read and sample audio for training a personalized human voice.
   * 
   * @param request - GetDemonstrationForCustomizedVoiceJobRequest
   * @returns GetDemonstrationForCustomizedVoiceJobResponse
   */
  async getDemonstrationForCustomizedVoiceJob(request: $_model.GetDemonstrationForCustomizedVoiceJobRequest): Promise<$_model.GetDemonstrationForCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDemonstrationForCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about an image animation job.
   * 
   * @param request - GetDynamicImageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDynamicImageJobResponse
   */
  async getDynamicImageJobWithOptions(request: $_model.GetDynamicImageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDynamicImageJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDynamicImageJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDynamicImageJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDynamicImageJobResponse({}));
  }

  /**
   * Queries the information about an image animation job.
   * 
   * @param request - GetDynamicImageJobRequest
   * @returns GetDynamicImageJobResponse
   */
  async getDynamicImageJob(request: $_model.GetDynamicImageJobRequest): Promise<$_model.GetDynamicImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDynamicImageJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about an online editing project.
   * 
   * @param request - GetEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEditingProjectResponse
   */
  async getEditingProjectWithOptions(request: $_model.GetEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.requestSource)) {
      query["RequestSource"] = request.requestSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEditingProject",
      version: "2020-11-09",
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
   * Queries the information about an online editing project.
   * 
   * @param request - GetEditingProjectRequest
   * @returns GetEditingProjectResponse
   */
  async getEditingProject(request: $_model.GetEditingProjectRequest): Promise<$_model.GetEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEditingProjectWithOptions(request, runtime);
  }

  /**
   * Queries all materials associated with an online editing project.
   * 
   * @param request - GetEditingProjectMaterialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEditingProjectMaterialsResponse
   */
  async getEditingProjectMaterialsWithOptions(request: $_model.GetEditingProjectMaterialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEditingProjectMaterialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEditingProjectMaterials",
      version: "2020-11-09",
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
   * Queries all materials associated with an online editing project.
   * 
   * @param request - GetEditingProjectMaterialsRequest
   * @returns GetEditingProjectMaterialsResponse
   */
  async getEditingProjectMaterials(request: $_model.GetEditingProjectMaterialsRequest): Promise<$_model.GetEditingProjectMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEditingProjectMaterialsWithOptions(request, runtime);
  }

  /**
   * Queries event callback configurations.
   * 
   * @param request - GetEventCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventCallbackResponse
   */
  async getEventCallbackWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetEventCallbackResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetEventCallback",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventCallbackResponse>(await this.callApi(params, req, runtime), new $_model.GetEventCallbackResponse({}));
  }

  /**
   * Queries event callback configurations.
   * @returns GetEventCallbackResponse
   */
  async getEventCallback(): Promise<$_model.GetEventCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEventCallbackWithOptions(runtime);
  }

  /**
   * Queries the information about a specified hotword library based on the ID.
   * 
   * @remarks
   * ## [](#)
   * You can call this operation to retrieve details of a specified hotword library based on the ID, including the library name, description, and content and attributes of all hotwords in it.
   * 
   * @param request - GetHotwordLibraryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotwordLibraryResponse
   */
  async getHotwordLibraryWithOptions(request: $_model.GetHotwordLibraryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotwordLibraryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hotwordLibraryId)) {
      query["HotwordLibraryId"] = request.hotwordLibraryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotwordLibrary",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotwordLibraryResponse>(await this.callApi(params, req, runtime), new $_model.GetHotwordLibraryResponse({}));
  }

  /**
   * Queries the information about a specified hotword library based on the ID.
   * 
   * @remarks
   * ## [](#)
   * You can call this operation to retrieve details of a specified hotword library based on the ID, including the library name, description, and content and attributes of all hotwords in it.
   * 
   * @param request - GetHotwordLibraryRequest
   * @returns GetHotwordLibraryResponse
   */
  async getHotwordLibrary(request: $_model.GetHotwordLibraryRequest): Promise<$_model.GetHotwordLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotwordLibraryWithOptions(request, runtime);
  }

  /**
   * 查询IPC设备信息
   * 
   * @param request - GetIpcDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIpcDeviceInfoResponse
   */
  async getIpcDeviceInfoWithOptions(request: $_model.GetIpcDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIpcDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capability)) {
      query["Capability"] = request.capability;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIpcDeviceInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIpcDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetIpcDeviceInfoResponse({}));
  }

  /**
   * 查询IPC设备信息
   * 
   * @param request - GetIpcDeviceInfoRequest
   * @returns GetIpcDeviceInfoResponse
   */
  async getIpcDeviceInfo(request: $_model.GetIpcDeviceInfoRequest): Promise<$_model.GetIpcDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIpcDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Queries the index file of a live stream. The index file is used to preview an editing project in the console.
   * 
   * @param request - GetLiveEditingIndexFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveEditingIndexFileResponse
   */
  async getLiveEditingIndexFileWithOptions(request: $_model.GetLiveEditingIndexFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveEditingIndexFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.streamName)) {
      query["StreamName"] = request.streamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveEditingIndexFile",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveEditingIndexFileResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveEditingIndexFileResponse({}));
  }

  /**
   * Queries the index file of a live stream. The index file is used to preview an editing project in the console.
   * 
   * @param request - GetLiveEditingIndexFileRequest
   * @returns GetLiveEditingIndexFileResponse
   */
  async getLiveEditingIndexFile(request: $_model.GetLiveEditingIndexFileRequest): Promise<$_model.GetLiveEditingIndexFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveEditingIndexFileWithOptions(request, runtime);
  }

  /**
   * Queries the information about a live editing job. The requested information includes the state, timeline, and template of the job, the ID and URL of the output file, and the configurations of the job. You can call this operation to query only live editing jobs created within the past year.
   * 
   * @param request - GetLiveEditingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveEditingJobResponse
   */
  async getLiveEditingJobWithOptions(request: $_model.GetLiveEditingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveEditingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveEditingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveEditingJobResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveEditingJobResponse({}));
  }

  /**
   * Queries the information about a live editing job. The requested information includes the state, timeline, and template of the job, the ID and URL of the output file, and the configurations of the job. You can call this operation to query only live editing jobs created within the past year.
   * 
   * @param request - GetLiveEditingJobRequest
   * @returns GetLiveEditingJobResponse
   */
  async getLiveEditingJob(request: $_model.GetLiveEditingJobRequest): Promise<$_model.GetLiveEditingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveEditingJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to query the details of a live package channel, including the creation time, description, ingest endpoint, protocol, number of segments, and segment duration.
   * 
   * @param request - GetLivePackageChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLivePackageChannelResponse
   */
  async getLivePackageChannelWithOptions(request: $_model.GetLivePackageChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLivePackageChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLivePackageChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLivePackageChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetLivePackageChannelResponse({}));
  }

  /**
   * Queries the details of a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to query the details of a live package channel, including the creation time, description, ingest endpoint, protocol, number of segments, and segment duration.
   * 
   * @param request - GetLivePackageChannelRequest
   * @returns GetLivePackageChannelResponse
   */
  async getLivePackageChannel(request: $_model.GetLivePackageChannelRequest): Promise<$_model.GetLivePackageChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLivePackageChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of a live package channel group by name.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can call this API operation to query the details of a specific channel group, including its name, description, origin domain, and creation and last modification timestamps.
   * 
   * @param request - GetLivePackageChannelGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLivePackageChannelGroupResponse
   */
  async getLivePackageChannelGroupWithOptions(request: $_model.GetLivePackageChannelGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLivePackageChannelGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLivePackageChannelGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLivePackageChannelGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetLivePackageChannelGroupResponse({}));
  }

  /**
   * Queries the details of a live package channel group by name.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can call this API operation to query the details of a specific channel group, including its name, description, origin domain, and creation and last modification timestamps.
   * 
   * @param request - GetLivePackageChannelGroupRequest
   * @returns GetLivePackageChannelGroupResponse
   */
  async getLivePackageChannelGroup(request: $_model.GetLivePackageChannelGroupRequest): Promise<$_model.GetLivePackageChannelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLivePackageChannelGroupWithOptions(request, runtime);
  }

  /**
   * Queries origin endpoints associated with a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * 
   * @param request - GetLivePackageOriginEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLivePackageOriginEndpointResponse
   */
  async getLivePackageOriginEndpointWithOptions(request: $_model.GetLivePackageOriginEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLivePackageOriginEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.endpointName)) {
      query["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLivePackageOriginEndpoint",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLivePackageOriginEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetLivePackageOriginEndpointResponse({}));
  }

  /**
   * Queries origin endpoints associated with a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * 
   * @param request - GetLivePackageOriginEndpointRequest
   * @returns GetLivePackageOriginEndpointResponse
   */
  async getLivePackageOriginEndpoint(request: $_model.GetLivePackageOriginEndpointRequest): Promise<$_model.GetLivePackageOriginEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLivePackageOriginEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about a live stream recording job.
   * 
   * @param request - GetLiveRecordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveRecordJobResponse
   */
  async getLiveRecordJobWithOptions(request: $_model.GetLiveRecordJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveRecordJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveRecordJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveRecordJobResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveRecordJobResponse({}));
  }

  /**
   * Queries the information about a live stream recording job.
   * 
   * @param request - GetLiveRecordJobRequest
   * @returns GetLiveRecordJobResponse
   */
  async getLiveRecordJob(request: $_model.GetLiveRecordJobRequest): Promise<$_model.GetLiveRecordJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveRecordJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about a live stream recording template or a snapshot of the template.
   * 
   * @param request - GetLiveRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveRecordTemplateResponse
   */
  async getLiveRecordTemplateWithOptions(request: $_model.GetLiveRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveRecordTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveRecordTemplateResponse({}));
  }

  /**
   * Queries the information about a live stream recording template or a snapshot of the template.
   * 
   * @param request - GetLiveRecordTemplateRequest
   * @returns GetLiveRecordTemplateResponse
   */
  async getLiveRecordTemplate(request: $_model.GetLiveRecordTemplateRequest): Promise<$_model.GetLiveRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveRecordTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the information a live stream snapshot job.
   * 
   * @param request - GetLiveSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveSnapshotJobResponse
   */
  async getLiveSnapshotJobWithOptions(request: $_model.GetLiveSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveSnapshotJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveSnapshotJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveSnapshotJobResponse({}));
  }

  /**
   * Queries the information a live stream snapshot job.
   * 
   * @param request - GetLiveSnapshotJobRequest
   * @returns GetLiveSnapshotJobResponse
   */
  async getLiveSnapshotJob(request: $_model.GetLiveSnapshotJobRequest): Promise<$_model.GetLiveSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about a live stream snapshot template.
   * 
   * @param request - GetLiveSnapshotTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveSnapshotTemplateResponse
   */
  async getLiveSnapshotTemplateWithOptions(request: $_model.GetLiveSnapshotTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveSnapshotTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveSnapshotTemplateResponse({}));
  }

  /**
   * Queries the information about a live stream snapshot template.
   * 
   * @param request - GetLiveSnapshotTemplateRequest
   * @returns GetLiveSnapshotTemplateResponse
   */
  async getLiveSnapshotTemplate(request: $_model.GetLiveSnapshotTemplateRequest): Promise<$_model.GetLiveSnapshotTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveSnapshotTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the information about a live stream transcoding job.
   * 
   * @param request - GetLiveTranscodeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveTranscodeJobResponse
   */
  async getLiveTranscodeJobWithOptions(request: $_model.GetLiveTranscodeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveTranscodeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveTranscodeJobResponse({}));
  }

  /**
   * Queries the information about a live stream transcoding job.
   * 
   * @param request - GetLiveTranscodeJobRequest
   * @returns GetLiveTranscodeJobResponse
   */
  async getLiveTranscodeJob(request: $_model.GetLiveTranscodeJobRequest): Promise<$_model.GetLiveTranscodeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveTranscodeJobWithOptions(request, runtime);
  }

  /**
   * Queries the information a live stream transcoding template.
   * 
   * @param request - GetLiveTranscodeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLiveTranscodeTemplateResponse
   */
  async getLiveTranscodeTemplateWithOptions(request: $_model.GetLiveTranscodeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLiveTranscodeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetLiveTranscodeTemplateResponse({}));
  }

  /**
   * Queries the information a live stream transcoding template.
   * 
   * @param request - GetLiveTranscodeTemplateRequest
   * @returns GetLiveTranscodeTemplateResponse
   */
  async getLiveTranscodeTemplate(request: $_model.GetLiveTranscodeTemplateRequest): Promise<$_model.GetLiveTranscodeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLiveTranscodeTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieves all regions where MediaConnect is available.
   * 
   * @param request - GetMediaConnectAvailableRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaConnectAvailableRegionResponse
   */
  async getMediaConnectAvailableRegionWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaConnectAvailableRegionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaConnectAvailableRegion",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaConnectAvailableRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaConnectAvailableRegionResponse({}));
  }

  /**
   * Retrieves all regions where MediaConnect is available.
   * @returns GetMediaConnectAvailableRegionResponse
   */
  async getMediaConnectAvailableRegion(): Promise<$_model.GetMediaConnectAvailableRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaConnectAvailableRegionWithOptions(runtime);
  }

  /**
   * Obtains information about a specific MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   The returned StartTime is valid only when the flow is in the online state.
   * 
   * @param request - GetMediaConnectFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaConnectFlowResponse
   */
  async getMediaConnectFlowWithOptions(request: $_model.GetMediaConnectFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaConnectFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaConnectFlow",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaConnectFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaConnectFlowResponse({}));
  }

  /**
   * Obtains information about a specific MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * *   The returned StartTime is valid only when the flow is in the online state.
   * 
   * @param request - GetMediaConnectFlowRequest
   * @returns GetMediaConnectFlowResponse
   */
  async getMediaConnectFlow(request: $_model.GetMediaConnectFlowRequest): Promise<$_model.GetMediaConnectFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaConnectFlowWithOptions(request, runtime);
  }

  /**
   * Retrieves the names of all outputs for a MediaConnect flow.
   * 
   * @param request - GetMediaConnectFlowAllOutputNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaConnectFlowAllOutputNameResponse
   */
  async getMediaConnectFlowAllOutputNameWithOptions(request: $_model.GetMediaConnectFlowAllOutputNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaConnectFlowAllOutputNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaConnectFlowAllOutputName",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaConnectFlowAllOutputNameResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaConnectFlowAllOutputNameResponse({}));
  }

  /**
   * Retrieves the names of all outputs for a MediaConnect flow.
   * 
   * @param request - GetMediaConnectFlowAllOutputNameRequest
   * @returns GetMediaConnectFlowAllOutputNameResponse
   */
  async getMediaConnectFlowAllOutputName(request: $_model.GetMediaConnectFlowAllOutputNameRequest): Promise<$_model.GetMediaConnectFlowAllOutputNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaConnectFlowAllOutputNameWithOptions(request, runtime);
  }

  /**
   * Obtains information about the source of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * 
   * @param request - GetMediaConnectFlowInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaConnectFlowInputResponse
   */
  async getMediaConnectFlowInputWithOptions(request: $_model.GetMediaConnectFlowInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaConnectFlowInputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaConnectFlowInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaConnectFlowInputResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaConnectFlowInputResponse({}));
  }

  /**
   * Obtains information about the source of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * 
   * @param request - GetMediaConnectFlowInputRequest
   * @returns GetMediaConnectFlowInputResponse
   */
  async getMediaConnectFlowInput(request: $_model.GetMediaConnectFlowInputRequest): Promise<$_model.GetMediaConnectFlowInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaConnectFlowInputWithOptions(request, runtime);
  }

  /**
   * Obtains information about an output of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * 
   * @param request - GetMediaConnectFlowOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaConnectFlowOutputResponse
   */
  async getMediaConnectFlowOutputWithOptions(request: $_model.GetMediaConnectFlowOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaConnectFlowOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaConnectFlowOutput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaConnectFlowOutputResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaConnectFlowOutputResponse({}));
  }

  /**
   * Obtains information about an output of a MediaConnect flow.
   * 
   * @remarks
   *   When the specified flow ID is not available, an error code is returned.
   * 
   * @param request - GetMediaConnectFlowOutputRequest
   * @returns GetMediaConnectFlowOutputResponse
   */
  async getMediaConnectFlowOutput(request: $_model.GetMediaConnectFlowOutputRequest): Promise<$_model.GetMediaConnectFlowOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaConnectFlowOutputWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a transcoding task.
   * 
   * @param request - GetMediaConvertJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaConvertJobResponse
   */
  async getMediaConvertJobWithOptions(request: $_model.GetMediaConvertJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaConvertJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaConvertJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaConvertJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaConvertJobResponse({}));
  }

  /**
   * Obtains the details of a transcoding task.
   * 
   * @param request - GetMediaConvertJobRequest
   * @returns GetMediaConvertJobResponse
   */
  async getMediaConvertJob(request: $_model.GetMediaConvertJobRequest): Promise<$_model.GetMediaConvertJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaConvertJobWithOptions(request, runtime);
  }

  /**
   * Queries information about a media asset based on the ID of the media asset in Intelligent Media Services (IMS) or the input URL of the media asset.
   * 
   * @remarks
   * If the MediaId parameter is specified, the MediaId parameter is preferentially used for the query. If the MediaId parameter is left empty, the InputURL parameter must be specified.
   * 
   * @param request - GetMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaInfoResponse
   */
  async getMediaInfoWithOptions(request: $_model.GetMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.outputType)) {
      query["OutputType"] = request.outputType;
    }

    if (!$dara.isNull(request.returnDetailedInfo)) {
      query["ReturnDetailedInfo"] = request.returnDetailedInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaInfoResponse({}));
  }

  /**
   * Queries information about a media asset based on the ID of the media asset in Intelligent Media Services (IMS) or the input URL of the media asset.
   * 
   * @remarks
   * If the MediaId parameter is specified, the MediaId parameter is preferentially used for the query. If the MediaId parameter is left empty, the InputURL parameter must be specified.
   * 
   * @param request - GetMediaInfoRequest
   * @returns GetMediaInfoResponse
   */
  async getMediaInfo(request: $_model.GetMediaInfoRequest): Promise<$_model.GetMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about a media information analysis job.
   * 
   * @param request - GetMediaInfoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaInfoJobResponse
   */
  async getMediaInfoJobWithOptions(request: $_model.GetMediaInfoJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaInfoJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaInfoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaInfoJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaInfoJobResponse({}));
  }

  /**
   * Queries the information about a media information analysis job.
   * 
   * @param request - GetMediaInfoJobRequest
   * @returns GetMediaInfoJobResponse
   */
  async getMediaInfoJob(request: $_model.GetMediaInfoJobRequest): Promise<$_model.GetMediaInfoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaInfoJobWithOptions(request, runtime);
  }

  /**
   * Queries a MediaLive channel.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - GetMediaLiveChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaLiveChannelResponse
   */
  async getMediaLiveChannelWithOptions(request: $_model.GetMediaLiveChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaLiveChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaLiveChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaLiveChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaLiveChannelResponse({}));
  }

  /**
   * Queries a MediaLive channel.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - GetMediaLiveChannelRequest
   * @returns GetMediaLiveChannelResponse
   */
  async getMediaLiveChannel(request: $_model.GetMediaLiveChannelRequest): Promise<$_model.GetMediaLiveChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaLiveChannelWithOptions(request, runtime);
  }

  /**
   * Queries the details of a MediaLive input.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - GetMediaLiveInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaLiveInputResponse
   */
  async getMediaLiveInputWithOptions(request: $_model.GetMediaLiveInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaLiveInputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputId)) {
      body["InputId"] = request.inputId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaLiveInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaLiveInputResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaLiveInputResponse({}));
  }

  /**
   * Queries the details of a MediaLive input.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - GetMediaLiveInputRequest
   * @returns GetMediaLiveInputResponse
   */
  async getMediaLiveInput(request: $_model.GetMediaLiveInputRequest): Promise<$_model.GetMediaLiveInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaLiveInputWithOptions(request, runtime);
  }

  /**
   * Queries the details of a security group in MediaLive.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - GetMediaLiveInputSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaLiveInputSecurityGroupResponse
   */
  async getMediaLiveInputSecurityGroupWithOptions(request: $_model.GetMediaLiveInputSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaLiveInputSecurityGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaLiveInputSecurityGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaLiveInputSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaLiveInputSecurityGroupResponse({}));
  }

  /**
   * Queries the details of a security group in MediaLive.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - GetMediaLiveInputSecurityGroupRequest
   * @returns GetMediaLiveInputSecurityGroupResponse
   */
  async getMediaLiveInputSecurityGroup(request: $_model.GetMediaLiveInputSecurityGroupRequest): Promise<$_model.GetMediaLiveInputSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaLiveInputSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about marks based on mark IDs.
   * 
   * @param request - GetMediaMarksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaMarksResponse
   */
  async getMediaMarksWithOptions(request: $_model.GetMediaMarksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaMarksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaMarkIds)) {
      query["MediaMarkIds"] = request.mediaMarkIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaMarks",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaMarksResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaMarksResponse({}));
  }

  /**
   * Queries the information about marks based on mark IDs.
   * 
   * @param request - GetMediaMarksRequest
   * @returns GetMediaMarksResponse
   */
  async getMediaMarks(request: $_model.GetMediaMarksRequest): Promise<$_model.GetMediaMarksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaMarksWithOptions(request, runtime);
  }

  /**
   * Queries the information about a media editing and production job. The requested information includes the state, timeline, template, and data of the job. You can call this operation to query only media editing and production jobs created within the past year.
   * 
   * @param request - GetMediaProducingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaProducingJobResponse
   */
  async getMediaProducingJobWithOptions(request: $_model.GetMediaProducingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaProducingJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaProducingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaProducingJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaProducingJobResponse({}));
  }

  /**
   * Queries the information about a media editing and production job. The requested information includes the state, timeline, template, and data of the job. You can call this operation to query only media editing and production jobs created within the past year.
   * 
   * @param request - GetMediaProducingJobRequest
   * @returns GetMediaProducingJobResponse
   */
  async getMediaProducingJob(request: $_model.GetMediaProducingJobRequest): Promise<$_model.GetMediaProducingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaProducingJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about a packaging job.
   * 
   * @param request - GetPackageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPackageJobResponse
   */
  async getPackageJobWithOptions(request: $_model.GetPackageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPackageJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPackageJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPackageJobResponse>(await this.callApi(params, req, runtime), new $_model.GetPackageJobResponse({}));
  }

  /**
   * Queries the information about a packaging job.
   * 
   * @param request - GetPackageJobRequest
   * @returns GetPackageJobResponse
   */
  async getPackageJob(request: $_model.GetPackageJobRequest): Promise<$_model.GetPackageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPackageJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - GetPipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineResponse
   */
  async getPipelineWithOptions(request: $_model.GetPipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipeline",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineResponse({}));
  }

  /**
   * Queries the information about an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - GetPipelineRequest
   * @returns GetPipelineResponse
   */
  async getPipeline(request: $_model.GetPipelineRequest): Promise<$_model.GetPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPipelineWithOptions(request, runtime);
  }

  /**
   * Queries the playback URL of a video or audio file based on its ID.
   * 
   * @remarks
   * You use the ID of a video or audio file to query the playback URL of the file. Then, you can use the playback URL to play the audio or video in ApsaraVideo Player SDK (for URL-based playback) or a third-party player.
   * 
   * @param request - GetPlayInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlayInfoResponse
   */
  async getPlayInfoWithOptions(request: $_model.GetPlayInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlayInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlayInfo",
      version: "2020-11-09",
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
   * Queries the playback URL of a video or audio file based on its ID.
   * 
   * @remarks
   * You use the ID of a video or audio file to query the playback URL of the file. Then, you can use the playback URL to play the audio or video in ApsaraVideo Player SDK (for URL-based playback) or a third-party player.
   * 
   * @param request - GetPlayInfoRequest
   * @returns GetPlayInfoResponse
   */
  async getPlayInfo(request: $_model.GetPlayInfoRequest): Promise<$_model.GetPlayInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlayInfoWithOptions(request, runtime);
  }

  /**
   * Queries a program.
   * 
   * @param request - GetProgramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProgramResponse
   */
  async getProgramWithOptions(request: $_model.GetProgramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProgramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.programName)) {
      query["ProgramName"] = request.programName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProgram",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProgramResponse>(await this.callApi(params, req, runtime), new $_model.GetProgramResponse({}));
  }

  /**
   * Queries a program.
   * 
   * @param request - GetProgramRequest
   * @returns GetProgramResponse
   */
  async getProgram(request: $_model.GetProgramRequest): Promise<$_model.GetProgramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProgramWithOptions(request, runtime);
  }

  /**
   * Queries the information of a project export task.
   * 
   * @param request - GetProjectExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectExportJobResponse
   */
  async getProjectExportJobWithOptions(request: $_model.GetProjectExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectExportJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectExportJobResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectExportJobResponse({}));
  }

  /**
   * Queries the information of a project export task.
   * 
   * @param request - GetProjectExportJobRequest
   * @returns GetProjectExportJobResponse
   */
  async getProjectExportJob(request: $_model.GetProjectExportJobRequest): Promise<$_model.GetProjectExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectExportJobWithOptions(request, runtime);
  }

  /**
   * 获取公共媒资内容信息
   * 
   * @param request - GetPublicMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicMediaInfoResponse
   */
  async getPublicMediaInfoWithOptions(request: $_model.GetPublicMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPublicMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublicMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPublicMediaInfoResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.GetPublicMediaInfoResponse({}));
  }

  /**
   * 获取公共媒资内容信息
   * 
   * @param request - GetPublicMediaInfoRequest
   * @returns GetPublicMediaInfoResponse
   */
  async getPublicMediaInfo(request: $_model.GetPublicMediaInfoRequest): Promise<$_model.GetPublicMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicMediaInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about an intelligent job and the execution results of the job based the job ID. You can call this operation to query only intelligent jobs created within the past year.
   * 
   * @param request - GetSmartHandleJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSmartHandleJobResponse
   */
  async getSmartHandleJobWithOptions(request: $_model.GetSmartHandleJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSmartHandleJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSmartHandleJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSmartHandleJobResponse>(await this.callApi(params, req, runtime), new $_model.GetSmartHandleJobResponse({}));
  }

  /**
   * Queries the information about an intelligent job and the execution results of the job based the job ID. You can call this operation to query only intelligent jobs created within the past year.
   * 
   * @param request - GetSmartHandleJobRequest
   * @returns GetSmartHandleJobResponse
   */
  async getSmartHandleJob(request: $_model.GetSmartHandleJobRequest): Promise<$_model.GetSmartHandleJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSmartHandleJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about a snapshot job.
   * 
   * @param request - GetSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSnapshotJobResponse
   */
  async getSnapshotJobWithOptions(request: $_model.GetSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSnapshotJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSnapshotJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.GetSnapshotJobResponse({}));
  }

  /**
   * Queries the information about a snapshot job.
   * 
   * @param request - GetSnapshotJobRequest
   * @returns GetSnapshotJobResponse
   */
  async getSnapshotJob(request: $_model.GetSnapshotJobRequest): Promise<$_model.GetSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Queries the accessible URLs of the output images of a snapshot job.
   * 
   * @param request - GetSnapshotUrlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSnapshotUrlsResponse
   */
  async getSnapshotUrlsWithOptions(request: $_model.GetSnapshotUrlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSnapshotUrlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSnapshotUrls",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSnapshotUrlsResponse>(await this.callApi(params, req, runtime), new $_model.GetSnapshotUrlsResponse({}));
  }

  /**
   * Queries the accessible URLs of the output images of a snapshot job.
   * 
   * @param request - GetSnapshotUrlsRequest
   * @returns GetSnapshotUrlsResponse
   */
  async getSnapshotUrls(request: $_model.GetSnapshotUrlsRequest): Promise<$_model.GetSnapshotUrlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSnapshotUrlsWithOptions(request, runtime);
  }

  /**
   * Queries a source.
   * 
   * @param request - GetSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourceResponse
   */
  async getSourceWithOptions(request: $_model.GetSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSource",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetSourceResponse({}));
  }

  /**
   * Queries a source.
   * 
   * @param request - GetSourceRequest
   * @returns GetSourceResponse
   */
  async getSource(request: $_model.GetSourceRequest): Promise<$_model.GetSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSourceWithOptions(request, runtime);
  }

  /**
   * Queries a source location.
   * 
   * @param request - GetSourceLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourceLocationResponse
   */
  async getSourceLocationWithOptions(request: $_model.GetSourceLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourceLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSourceLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourceLocationResponse>(await this.callApi(params, req, runtime), new $_model.GetSourceLocationResponse({}));
  }

  /**
   * Queries a source location.
   * 
   * @param request - GetSourceLocationRequest
   * @returns GetSourceLocationResponse
   */
  async getSourceLocation(request: $_model.GetSourceLocationRequest): Promise<$_model.GetSourceLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSourceLocationWithOptions(request, runtime);
  }

  /**
   * Obtains storage configurations.
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageList",
      version: "2020-11-09",
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
   * Obtains storage configurations.
   * 
   * @param request - GetStorageListRequest
   * @returns GetStorageListResponse
   */
  async getStorageList(request: $_model.GetStorageListRequest): Promise<$_model.GetStorageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageListWithOptions(request, runtime);
  }

  /**
   * Retrieves tags of a live stream media asset.
   * 
   * @param request - GetStreamTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStreamTagListResponse
   */
  async getStreamTagListWithOptions(request: $_model.GetStreamTagListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStreamTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
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
      action: "GetStreamTagList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStreamTagListResponse>(await this.callApi(params, req, runtime), new $_model.GetStreamTagListResponse({}));
  }

  /**
   * Retrieves tags of a live stream media asset.
   * 
   * @param request - GetStreamTagListRequest
   * @returns GetStreamTagListResponse
   */
  async getStreamTagList(request: $_model.GetStreamTagListRequest): Promise<$_model.GetStreamTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStreamTagListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a system template.
   * 
   * @param request - GetSystemTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSystemTemplateResponse
   */
  async getSystemTemplateWithOptions(request: $_model.GetSystemTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSystemTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSystemTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSystemTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetSystemTemplateResponse({}));
  }

  /**
   * Queries the information about a system template.
   * 
   * @param request - GetSystemTemplateRequest
   * @returns GetSystemTemplateResponse
   */
  async getSystemTemplate(request: $_model.GetSystemTemplateRequest): Promise<$_model.GetSystemTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSystemTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the information about a template based on the template ID. You can call this operation to query the information about an advanced template if the template is in the Available state.
   * 
   * @remarks
   * A template is an encapsulation of the timeline of a media editing and production job. You can define a common timeline as a template. When you have the same requirements, you need to only specify key parameters and materials to produce videos.
   * *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: $_model.GetTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.relatedMediaidFlag)) {
      query["RelatedMediaidFlag"] = request.relatedMediaidFlag;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Queries the information about a template based on the template ID. You can call this operation to query the information about an advanced template if the template is in the Available state.
   * 
   * @remarks
   * A template is an encapsulation of the timeline of a media editing and production job. You can define a common timeline as a template. When you have the same requirements, you need to only specify key parameters and materials to produce videos.
   * *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the URLs of materials associated with an advanced template for use by the advanced template editor. The URLs expire in 30 minutes. FileList is an array of materials that you want to query. If you do not specify this parameter, the URLs of all materials are returned. A maximum of 400 URLs can be returned.
   * 
   * @param request - GetTemplateMaterialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateMaterialsResponse
   */
  async getTemplateMaterialsWithOptions(request: $_model.GetTemplateMaterialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateMaterialsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileList)) {
      query["FileList"] = request.fileList;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateMaterials",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateMaterialsResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateMaterialsResponse({}));
  }

  /**
   * Queries the URLs of materials associated with an advanced template for use by the advanced template editor. The URLs expire in 30 minutes. FileList is an array of materials that you want to query. If you do not specify this parameter, the URLs of all materials are returned. A maximum of 400 URLs can be returned.
   * 
   * @param request - GetTemplateMaterialsRequest
   * @returns GetTemplateMaterialsResponse
   */
  async getTemplateMaterials(request: $_model.GetTemplateMaterialsRequest): Promise<$_model.GetTemplateMaterialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateMaterialsWithOptions(request, runtime);
  }

  /**
   * Queries the parameters for replaceable materials in a template, including the parameter names, default values, and material thumbnails. Only advanced templates are supported.
   * 
   * @param request - GetTemplateParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateParamsResponse
   */
  async getTemplateParamsWithOptions(request: $_model.GetTemplateParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateParamsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateParams",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateParamsResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateParamsResponse({}));
  }

  /**
   * Queries the parameters for replaceable materials in a template, including the parameter names, default values, and material thumbnails. Only advanced templates are supported.
   * 
   * @param request - GetTemplateParamsRequest
   * @returns GetTemplateParamsResponse
   */
  async getTemplateParams(request: $_model.GetTemplateParamsRequest): Promise<$_model.GetTemplateParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateParamsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a transcoding job.
   * 
   * @param request - GetTranscodeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscodeJobResponse
   */
  async getTranscodeJobWithOptions(request: $_model.GetTranscodeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranscodeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranscodeJobResponse>(await this.callApi(params, req, runtime), new $_model.GetTranscodeJobResponse({}));
  }

  /**
   * Queries the information about a transcoding job.
   * 
   * @param request - GetTranscodeJobRequest
   * @returns GetTranscodeJobResponse
   */
  async getTranscodeJob(request: $_model.GetTranscodeJobRequest): Promise<$_model.GetTranscodeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTranscodeJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about URL-based upload jobs.
   * 
   * @remarks
   * You can call this operation to query the information, including the upload status, user data, creation time, and completion time, about URL-based upload jobs based on the returned job IDs or the URLs used during the upload.
   * If an upload job fails, you can view the error code and error message. If an upload job is successful, you can obtain the video ID.
   * 
   * @param request - GetUrlUploadInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUrlUploadInfosResponse
   */
  async getUrlUploadInfosWithOptions(request: $_model.GetUrlUploadInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUrlUploadInfosResponse> {
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
      action: "GetUrlUploadInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUrlUploadInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetUrlUploadInfosResponse({}));
  }

  /**
   * Queries the information about URL-based upload jobs.
   * 
   * @remarks
   * You can call this operation to query the information, including the upload status, user data, creation time, and completion time, about URL-based upload jobs based on the returned job IDs or the URLs used during the upload.
   * If an upload job fails, you can view the error code and error message. If an upload job is successful, you can obtain the video ID.
   * 
   * @param request - GetUrlUploadInfosRequest
   * @returns GetUrlUploadInfosResponse
   */
  async getUrlUploadInfos(request: $_model.GetUrlUploadInfosRequest): Promise<$_model.GetUrlUploadInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUrlUploadInfosWithOptions(request, runtime);
  }

  /**
   * Queries information about video and audio files.
   * 
   * @remarks
   * You can call this operation to query information about up to the first 5,000 audio and video files based on the filter condition, such as the status or category ID of the file. We recommend that you set the StartTime and EndTime parameters to narrow down the time range and perform multiple queries to obtain data.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoList",
      version: "2020-11-09",
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
   * Queries information about video and audio files.
   * 
   * @remarks
   * You can call this operation to query information about up to the first 5,000 audio and video files based on the filter condition, such as the status or category ID of the file. We recommend that you set the StartTime and EndTime parameters to narrow down the time range and perform multiple queries to obtain data.
   * 
   * @param request - GetVideoListRequest
   * @returns GetVideoListResponse
   */
  async getVideoList(request: $_model.GetVideoListRequest): Promise<$_model.GetVideoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoListWithOptions(request, runtime);
  }

  /**
   * Queries a VOD packaging asset.
   * 
   * @param request - GetVodPackagingAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVodPackagingAssetResponse
   */
  async getVodPackagingAssetWithOptions(request: $_model.GetVodPackagingAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVodPackagingAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetName)) {
      query["AssetName"] = request.assetName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVodPackagingAsset",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVodPackagingAssetResponse>(await this.callApi(params, req, runtime), new $_model.GetVodPackagingAssetResponse({}));
  }

  /**
   * Queries a VOD packaging asset.
   * 
   * @param request - GetVodPackagingAssetRequest
   * @returns GetVodPackagingAssetResponse
   */
  async getVodPackagingAsset(request: $_model.GetVodPackagingAssetRequest): Promise<$_model.GetVodPackagingAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVodPackagingAssetWithOptions(request, runtime);
  }

  /**
   * Queries a packaging configuration.
   * 
   * @param request - GetVodPackagingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVodPackagingConfigurationResponse
   */
  async getVodPackagingConfigurationWithOptions(request: $_model.GetVodPackagingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVodPackagingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configurationName)) {
      query["ConfigurationName"] = request.configurationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVodPackagingConfiguration",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVodPackagingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetVodPackagingConfigurationResponse({}));
  }

  /**
   * Queries a packaging configuration.
   * 
   * @param request - GetVodPackagingConfigurationRequest
   * @returns GetVodPackagingConfigurationResponse
   */
  async getVodPackagingConfiguration(request: $_model.GetVodPackagingConfigurationRequest): Promise<$_model.GetVodPackagingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVodPackagingConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries a packaging group.
   * 
   * @param request - GetVodPackagingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVodPackagingGroupResponse
   */
  async getVodPackagingGroupWithOptions(request: $_model.GetVodPackagingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVodPackagingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVodPackagingGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVodPackagingGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetVodPackagingGroupResponse({}));
  }

  /**
   * Queries a packaging group.
   * 
   * @param request - GetVodPackagingGroupRequest
   * @returns GetVodPackagingGroupResponse
   */
  async getVodPackagingGroup(request: $_model.GetVodPackagingGroupRequest): Promise<$_model.GetVodPackagingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVodPackagingGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about a workflow task by task ID, including the workflow ID and the status and result of the task. You can query only the workflow task data of the last year.
   * 
   * @param request - GetWorkflowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowTaskResponse
   */
  async getWorkflowTaskWithOptions(request: $_model.GetWorkflowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowTask",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowTaskResponse({}));
  }

  /**
   * Queries the information about a workflow task by task ID, including the workflow ID and the status and result of the task. You can query only the workflow task data of the last year.
   * 
   * @param request - GetWorkflowTaskRequest
   * @returns GetWorkflowTaskResponse
   */
  async getWorkflowTask(request: $_model.GetWorkflowTaskRequest): Promise<$_model.GetWorkflowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowTaskWithOptions(request, runtime);
  }

  /**
   * Adds a media asset in a search library. Before you call this operation, you must create a search library.
   * 
   * @param request - InsertMediaToSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertMediaToSearchLibResponse
   */
  async insertMediaToSearchLibWithOptions(request: $_model.InsertMediaToSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InsertMediaToSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imagesInput)) {
      query["ImagesInput"] = request.imagesInput;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.msgBody)) {
      query["MsgBody"] = request.msgBody;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertMediaToSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertMediaToSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.InsertMediaToSearchLibResponse({}));
  }

  /**
   * Adds a media asset in a search library. Before you call this operation, you must create a search library.
   * 
   * @param request - InsertMediaToSearchLibRequest
   * @returns InsertMediaToSearchLibResponse
   */
  async insertMediaToSearchLib(request: $_model.InsertMediaToSearchLibRequest): Promise<$_model.InsertMediaToSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertMediaToSearchLibWithOptions(request, runtime);
  }

  /**
   * Lists the dialog records of an AI agent.
   * 
   * @param request - ListAIAgentDialoguesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIAgentDialoguesResponse
   */
  async listAIAgentDialoguesWithOptions(request: $_model.ListAIAgentDialoguesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIAgentDialoguesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roundLimit)) {
      query["RoundLimit"] = request.roundLimit;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIAgentDialogues",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIAgentDialoguesResponse>(await this.callApi(params, req, runtime), new $_model.ListAIAgentDialoguesResponse({}));
  }

  /**
   * Lists the dialog records of an AI agent.
   * 
   * @param request - ListAIAgentDialoguesRequest
   * @returns ListAIAgentDialoguesResponse
   */
  async listAIAgentDialogues(request: $_model.ListAIAgentDialoguesRequest): Promise<$_model.ListAIAgentDialoguesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIAgentDialoguesWithOptions(request, runtime);
  }

  /**
   * Queries a list of AI agents.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to query a list of AI agents based on the `AIAgentId`. The optional parameters include `StartTime`, `EndTime`, `PageSize`, and `PageNumber`. The returned result includes the status, runtime configurations, template configurations, custom information, and the URL of call log file for each AI agent.
   * **Note**:
   * *   The default value of `PageSize` is 10, and the default value of `PageNumber` is 1.
   * 
   * @param request - ListAIAgentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIAgentInstanceResponse
   */
  async listAIAgentInstanceWithOptions(request: $_model.ListAIAgentInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIAgentInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIAgentInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIAgentInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListAIAgentInstanceResponse({}));
  }

  /**
   * Queries a list of AI agents.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to query a list of AI agents based on the `AIAgentId`. The optional parameters include `StartTime`, `EndTime`, `PageSize`, and `PageNumber`. The returned result includes the status, runtime configurations, template configurations, custom information, and the URL of call log file for each AI agent.
   * **Note**:
   * *   The default value of `PageSize` is 10, and the default value of `PageNumber` is 1.
   * 
   * @param request - ListAIAgentInstanceRequest
   * @returns ListAIAgentInstanceResponse
   */
  async listAIAgentInstance(request: $_model.ListAIAgentInstanceRequest): Promise<$_model.ListAIAgentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIAgentInstanceWithOptions(request, runtime);
  }

  /**
   * 罗列用户电话资源接口
   * 
   * @param request - ListAIAgentPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIAgentPhoneNumberResponse
   */
  async listAIAgentPhoneNumberWithOptions(request: $_model.ListAIAgentPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIAgentPhoneNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIAgentPhoneNumber",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIAgentPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.ListAIAgentPhoneNumberResponse({}));
  }

  /**
   * 罗列用户电话资源接口
   * 
   * @param request - ListAIAgentPhoneNumberRequest
   * @returns ListAIAgentPhoneNumberResponse
   */
  async listAIAgentPhoneNumber(request: $_model.ListAIAgentPhoneNumberRequest): Promise<$_model.ListAIAgentPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIAgentPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Lists the registered voiceprints.
   * 
   * @param request - ListAIAgentVoiceprintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAIAgentVoiceprintsResponse
   */
  async listAIAgentVoiceprintsWithOptions(request: $_model.ListAIAgentVoiceprintsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAIAgentVoiceprintsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.voiceprintId)) {
      query["VoiceprintId"] = request.voiceprintId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAIAgentVoiceprints",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAIAgentVoiceprintsResponse>(await this.callApi(params, req, runtime), new $_model.ListAIAgentVoiceprintsResponse({}));
  }

  /**
   * Lists the registered voiceprints.
   * 
   * @param request - ListAIAgentVoiceprintsRequest
   * @returns ListAIAgentVoiceprintsResponse
   */
  async listAIAgentVoiceprints(request: $_model.ListAIAgentVoiceprintsRequest): Promise<$_model.ListAIAgentVoiceprintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAIAgentVoiceprintsWithOptions(request, runtime);
  }

  /**
   * Obtains ad insertion configurations.
   * 
   * @param request - ListAdInsertionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAdInsertionsResponse
   */
  async listAdInsertionsWithOptions(request: $_model.ListAdInsertionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAdInsertionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListAdInsertions",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAdInsertionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAdInsertionsResponse({}));
  }

  /**
   * Obtains ad insertion configurations.
   * 
   * @param request - ListAdInsertionsRequest
   * @returns ListAdInsertionsResponse
   */
  async listAdInsertions(request: $_model.ListAdInsertionsRequest): Promise<$_model.ListAdInsertionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAdInsertionsWithOptions(request, runtime);
  }

  /**
   * Lists alerts received in MediaWeaver.
   * 
   * @param request - ListAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertsResponse
   */
  async listAlertsWithOptions(request: $_model.ListAlertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.gmtEnd)) {
      query["GmtEnd"] = request.gmtEnd;
    }

    if (!$dara.isNull(request.gmtStart)) {
      query["GmtStart"] = request.gmtStart;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortByModifiedTime)) {
      query["SortByModifiedTime"] = request.sortByModifiedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlerts",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertsResponse({}));
  }

  /**
   * Lists alerts received in MediaWeaver.
   * 
   * @param request - ListAlertsRequest
   * @returns ListAlertsResponse
   */
  async listAlerts(request: $_model.ListAlertsRequest): Promise<$_model.ListAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags of media assets in the public media library.
   * 
   * @param request - ListAllPublicMediaTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllPublicMediaTagsResponse
   */
  async listAllPublicMediaTagsWithOptions(request: $_model.ListAllPublicMediaTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllPublicMediaTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllPublicMediaTags",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllPublicMediaTagsResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ListAllPublicMediaTagsResponse({}));
  }

  /**
   * Queries a list of tags of media assets in the public media library.
   * 
   * @param request - ListAllPublicMediaTagsRequest
   * @returns ListAllPublicMediaTagsResponse
   */
  async listAllPublicMediaTags(request: $_model.ListAllPublicMediaTagsRequest): Promise<$_model.ListAllPublicMediaTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllPublicMediaTagsWithOptions(request, runtime);
  }

  /**
   * Queries a list of digital human training jobs.
   * 
   * @param request - ListAvatarTrainingJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvatarTrainingJobsResponse
   */
  async listAvatarTrainingJobsWithOptions(request: $_model.ListAvatarTrainingJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvatarTrainingJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvatarTrainingJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvatarTrainingJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvatarTrainingJobsResponse({}));
  }

  /**
   * Queries a list of digital human training jobs.
   * 
   * @param request - ListAvatarTrainingJobsRequest
   * @returns ListAvatarTrainingJobsResponse
   */
  async listAvatarTrainingJobs(request: $_model.ListAvatarTrainingJobsRequest): Promise<$_model.ListAvatarTrainingJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvatarTrainingJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of trained digital humans.
   * 
   * @param request - ListAvatarsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvatarsResponse
   */
  async listAvatarsWithOptions(request: $_model.ListAvatarsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvatarsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avatarType)) {
      query["AvatarType"] = request.avatarType;
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
      action: "ListAvatars",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvatarsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvatarsResponse({}));
  }

  /**
   * Queries a list of trained digital humans.
   * 
   * @param request - ListAvatarsRequest
   * @returns ListAvatarsResponse
   */
  async listAvatars(request: $_model.ListAvatarsRequest): Promise<$_model.ListAvatarsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvatarsWithOptions(request, runtime);
  }

  /**
   * Queries a list of quick video production jobs based on conditions such as the job type and state.
   * 
   * @param request - ListBatchMediaProducingJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBatchMediaProducingJobsResponse
   */
  async listBatchMediaProducingJobsWithOptions(request: $_model.ListBatchMediaProducingJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBatchMediaProducingJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBatchMediaProducingJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBatchMediaProducingJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListBatchMediaProducingJobsResponse({}));
  }

  /**
   * Queries a list of quick video production jobs based on conditions such as the job type and state.
   * 
   * @param request - ListBatchMediaProducingJobsRequest
   * @returns ListBatchMediaProducingJobsResponse
   */
  async listBatchMediaProducingJobs(request: $_model.ListBatchMediaProducingJobsRequest): Promise<$_model.ListBatchMediaProducingJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBatchMediaProducingJobsWithOptions(request, runtime);
  }

  /**
   * Lists alerts for resources in a MediaWeaver channel.
   * 
   * @param request - ListChannelAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChannelAlertsResponse
   */
  async listChannelAlertsWithOptions(request: $_model.ListChannelAlertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChannelAlertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.gmtEnd)) {
      query["GmtEnd"] = request.gmtEnd;
    }

    if (!$dara.isNull(request.gmtStart)) {
      query["GmtStart"] = request.gmtStart;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.sortByModifiedTime)) {
      query["SortByModifiedTime"] = request.sortByModifiedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChannelAlerts",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChannelAlertsResponse>(await this.callApi(params, req, runtime), new $_model.ListChannelAlertsResponse({}));
  }

  /**
   * Lists alerts for resources in a MediaWeaver channel.
   * 
   * @param request - ListChannelAlertsRequest
   * @returns ListChannelAlertsResponse
   */
  async listChannelAlerts(request: $_model.ListChannelAlertsRequest): Promise<$_model.ListChannelAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChannelAlertsWithOptions(request, runtime);
  }

  /**
   * Lists MediaWeaver channels.
   * 
   * @param request - ListChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChannelsResponse
   */
  async listChannelsWithOptions(request: $_model.ListChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.channelTier)) {
      query["ChannelTier"] = request.channelTier;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playbackMode)) {
      query["PlaybackMode"] = request.playbackMode;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortByModifiedTime)) {
      query["SortByModifiedTime"] = request.sortByModifiedTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChannels",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListChannelsResponse({}));
  }

  /**
   * Lists MediaWeaver channels.
   * 
   * @param request - ListChannelsRequest
   * @returns ListChannelsResponse
   */
  async listChannels(request: $_model.ListChannelsRequest): Promise<$_model.ListChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChannelsWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom templates.
   * 
   * @param request - ListCustomTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomTemplatesResponse
   */
  async listCustomTemplatesWithOptions(request: $_model.ListCustomTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomTemplatesResponse({}));
  }

  /**
   * Queries a list of custom templates.
   * 
   * @param request - ListCustomTemplatesRequest
   * @returns ListCustomTemplatesResponse
   */
  async listCustomTemplates(request: $_model.ListCustomTemplatesRequest): Promise<$_model.ListCustomTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of human voice cloning jobs.
   * 
   * @param request - ListCustomizedVoiceJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomizedVoiceJobsResponse
   */
  async listCustomizedVoiceJobsWithOptions(request: $_model.ListCustomizedVoiceJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomizedVoiceJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomizedVoiceJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomizedVoiceJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomizedVoiceJobsResponse({}));
  }

  /**
   * Queries a list of human voice cloning jobs.
   * 
   * @param request - ListCustomizedVoiceJobsRequest
   * @returns ListCustomizedVoiceJobsResponse
   */
  async listCustomizedVoiceJobs(request: $_model.ListCustomizedVoiceJobsRequest): Promise<$_model.ListCustomizedVoiceJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomizedVoiceJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of personalized human voices.
   * 
   * @param request - ListCustomizedVoicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomizedVoicesResponse
   */
  async listCustomizedVoicesWithOptions(request: $_model.ListCustomizedVoicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomizedVoicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomizedVoices",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomizedVoicesResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomizedVoicesResponse({}));
  }

  /**
   * Queries a list of personalized human voices.
   * 
   * @param request - ListCustomizedVoicesRequest
   * @returns ListCustomizedVoicesResponse
   */
  async listCustomizedVoices(request: $_model.ListCustomizedVoicesRequest): Promise<$_model.ListCustomizedVoicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomizedVoicesWithOptions(request, runtime);
  }

  /**
   * Queries a list of media fingerprint libraries.
   * 
   * @param request - ListDNADBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDNADBResponse
   */
  async listDNADBWithOptions(request: $_model.ListDNADBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDNADBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBIds)) {
      query["DBIds"] = request.DBIds;
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
      action: "ListDNADB",
      version: "2020-11-09",
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
   * Queries a list of media fingerprint libraries.
   * 
   * @param request - ListDNADBRequest
   * @returns ListDNADBResponse
   */
  async listDNADB(request: $_model.ListDNADBRequest): Promise<$_model.ListDNADBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDNADBWithOptions(request, runtime);
  }

  /**
   * Queries a list of files in a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to query files in a media fingerprint library based on the library ID. The queried results can be paginated.
   * 
   * @param request - ListDNAFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDNAFilesResponse
   */
  async listDNAFilesWithOptions(request: $_model.ListDNAFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDNAFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBId)) {
      query["DBId"] = request.DBId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDNAFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDNAFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListDNAFilesResponse({}));
  }

  /**
   * Queries a list of files in a media fingerprint library.
   * 
   * @remarks
   * You can call this operation to query files in a media fingerprint library based on the library ID. The queried results can be paginated.
   * 
   * @param request - ListDNAFilesRequest
   * @returns ListDNAFilesResponse
   */
  async listDNAFiles(request: $_model.ListDNAFilesRequest): Promise<$_model.ListDNAFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDNAFilesWithOptions(request, runtime);
  }

  /**
   * Queries a list of image animation jobs.
   * 
   * @param request - ListDynamicImageJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicImageJobsResponse
   */
  async listDynamicImageJobsWithOptions(request: $_model.ListDynamicImageJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDynamicImageJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDynamicImageJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDynamicImageJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDynamicImageJobsResponse({}));
  }

  /**
   * Queries a list of image animation jobs.
   * 
   * @param request - ListDynamicImageJobsRequest
   * @returns ListDynamicImageJobsResponse
   */
  async listDynamicImageJobs(request: $_model.ListDynamicImageJobsRequest): Promise<$_model.ListDynamicImageJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDynamicImageJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of projects that meet the specified conditions. You can filter projects by project creation time.
   * 
   * @param request - ListEditingProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEditingProjectsResponse
   */
  async listEditingProjectsWithOptions(request: $_model.ListEditingProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEditingProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createSource)) {
      query["CreateSource"] = request.createSource;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectType)) {
      query["ProjectType"] = request.projectType;
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

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEditingProjects",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEditingProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListEditingProjectsResponse({}));
  }

  /**
   * Queries a list of projects that meet the specified conditions. You can filter projects by project creation time.
   * 
   * @param request - ListEditingProjectsRequest
   * @returns ListEditingProjectsResponse
   */
  async listEditingProjects(request: $_model.ListEditingProjectsRequest): Promise<$_model.ListEditingProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEditingProjectsWithOptions(request, runtime);
  }

  /**
   * Queries hotword libraries that meet specific search conditions.
   * 
   * @remarks
   * ## [](#)
   * *   You can call this operation to get information about all hotword libraries that you created.
   * *   The API supports fuzzy search by `Name`, filtering by creation time range, and pagination.
   * *   By default, the results are sorted by creation time in descending order. You can set `SortBy` to change the sorting order.
   * *   The maximum number of entries returned for each request is 100. Default value: 10.
   * *   Use `NextToken` for pagination.
   * 
   * @param request - ListHotwordLibrariesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotwordLibrariesResponse
   */
  async listHotwordLibrariesWithOptions(request: $_model.ListHotwordLibrariesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotwordLibrariesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    if (!$dara.isNull(request.usageScenario)) {
      query["UsageScenario"] = request.usageScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotwordLibraries",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotwordLibrariesResponse>(await this.callApi(params, req, runtime), new $_model.ListHotwordLibrariesResponse({}));
  }

  /**
   * Queries hotword libraries that meet specific search conditions.
   * 
   * @remarks
   * ## [](#)
   * *   You can call this operation to get information about all hotword libraries that you created.
   * *   The API supports fuzzy search by `Name`, filtering by creation time range, and pagination.
   * *   By default, the results are sorted by creation time in descending order. You can set `SortBy` to change the sorting order.
   * *   The maximum number of entries returned for each request is 100. Default value: 10.
   * *   Use `NextToken` for pagination.
   * 
   * @param request - ListHotwordLibrariesRequest
   * @returns ListHotwordLibrariesResponse
   */
  async listHotwordLibraries(request: $_model.ListHotwordLibrariesRequest): Promise<$_model.ListHotwordLibrariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotwordLibrariesWithOptions(request, runtime);
  }

  /**
   * Queries live package channel groups by page. Fuzzy search by name or description and sorting are supported.
   * 
   * @remarks
   * ## [](#)Usage notes
   * 
   * @param request - ListLivePackageChannelGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLivePackageChannelGroupsResponse
   */
  async listLivePackageChannelGroupsWithOptions(request: $_model.ListLivePackageChannelGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLivePackageChannelGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListLivePackageChannelGroups",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLivePackageChannelGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListLivePackageChannelGroupsResponse({}));
  }

  /**
   * Queries live package channel groups by page. Fuzzy search by name or description and sorting are supported.
   * 
   * @remarks
   * ## [](#)Usage notes
   * 
   * @param request - ListLivePackageChannelGroupsRequest
   * @returns ListLivePackageChannelGroupsResponse
   */
  async listLivePackageChannelGroups(request: $_model.ListLivePackageChannelGroupsRequest): Promise<$_model.ListLivePackageChannelGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLivePackageChannelGroupsWithOptions(request, runtime);
  }

  /**
   * Queries live package channels by channel group and keyword. Paging and sorting are supported.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to query live package channels by **GroupName** and **Keyword**. Keyword is optional. You can sort the channels by creation time in ascending or descending order and paginate the results. This facilitates the management of channels and retrieval of channel information.
   * *   **GroupName** is required to specify the channel group to which the channel belongs.
   * *   **Keyword** supports fuzzy match of channel names or descriptions, which helps quickly filter desired channels.
   * *   **PageNo** and **PageSize** can help control the paging of returned results to facilitate batch processing of data.
   * *   **SortBy** allows you to customize how the results are sorted. By default, the results are sorted in descending order.
   * **RequestId** in the response is used for subsequent troubleshooting. **TotalCount** indicates the total number of channels that meet the conditions.
   * 
   * @param request - ListLivePackageChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLivePackageChannelsResponse
   */
  async listLivePackageChannelsWithOptions(request: $_model.ListLivePackageChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLivePackageChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListLivePackageChannels",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLivePackageChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListLivePackageChannelsResponse({}));
  }

  /**
   * Queries live package channels by channel group and keyword. Paging and sorting are supported.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to query live package channels by **GroupName** and **Keyword**. Keyword is optional. You can sort the channels by creation time in ascending or descending order and paginate the results. This facilitates the management of channels and retrieval of channel information.
   * *   **GroupName** is required to specify the channel group to which the channel belongs.
   * *   **Keyword** supports fuzzy match of channel names or descriptions, which helps quickly filter desired channels.
   * *   **PageNo** and **PageSize** can help control the paging of returned results to facilitate batch processing of data.
   * *   **SortBy** allows you to customize how the results are sorted. By default, the results are sorted in descending order.
   * **RequestId** in the response is used for subsequent troubleshooting. **TotalCount** indicates the total number of channels that meet the conditions.
   * 
   * @param request - ListLivePackageChannelsRequest
   * @returns ListLivePackageChannelsResponse
   */
  async listLivePackageChannels(request: $_model.ListLivePackageChannelsRequest): Promise<$_model.ListLivePackageChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLivePackageChannelsWithOptions(request, runtime);
  }

  /**
   * Queries origin endpoints by channel group and channel name. Paging and sorting are supported.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to query origin endpoints associated with a live package channel. The results include detailed configurations about the origin endpoints, such as access URL, protocol, and security policies. Paging and sorting by creation time are supported.
   * 
   * @param request - ListLivePackageOriginEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLivePackageOriginEndpointsResponse
   */
  async listLivePackageOriginEndpointsWithOptions(request: $_model.ListLivePackageOriginEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLivePackageOriginEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListLivePackageOriginEndpoints",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLivePackageOriginEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListLivePackageOriginEndpointsResponse({}));
  }

  /**
   * Queries origin endpoints by channel group and channel name. Paging and sorting are supported.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to query origin endpoints associated with a live package channel. The results include detailed configurations about the origin endpoints, such as access URL, protocol, and security policies. Paging and sorting by creation time are supported.
   * 
   * @param request - ListLivePackageOriginEndpointsRequest
   * @returns ListLivePackageOriginEndpointsResponse
   */
  async listLivePackageOriginEndpoints(request: $_model.ListLivePackageOriginEndpointsRequest): Promise<$_model.ListLivePackageOriginEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLivePackageOriginEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries all recording index files in the specified period of time.
   * 
   * @param request - ListLiveRecordFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveRecordFilesResponse
   */
  async listLiveRecordFilesWithOptions(request: $_model.ListLiveRecordFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveRecordFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveRecordFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveRecordFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveRecordFilesResponse({}));
  }

  /**
   * Queries all recording index files in the specified period of time.
   * 
   * @param request - ListLiveRecordFilesRequest
   * @returns ListLiveRecordFilesResponse
   */
  async listLiveRecordFiles(request: $_model.ListLiveRecordFilesRequest): Promise<$_model.ListLiveRecordFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveRecordFilesWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream recording jobs by page.
   * 
   * @param request - ListLiveRecordJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveRecordJobsResponse
   */
  async listLiveRecordJobsWithOptions(request: $_model.ListLiveRecordJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveRecordJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveRecordJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveRecordJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveRecordJobsResponse({}));
  }

  /**
   * Queries a list of live stream recording jobs by page.
   * 
   * @param request - ListLiveRecordJobsRequest
   * @returns ListLiveRecordJobsResponse
   */
  async listLiveRecordJobs(request: $_model.ListLiveRecordJobsRequest): Promise<$_model.ListLiveRecordJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveRecordJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream recording templates.
   * 
   * @param request - ListLiveRecordTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveRecordTemplatesResponse
   */
  async listLiveRecordTemplatesWithOptions(request: $_model.ListLiveRecordTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveRecordTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveRecordTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveRecordTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveRecordTemplatesResponse({}));
  }

  /**
   * Queries a list of live stream recording templates.
   * 
   * @param request - ListLiveRecordTemplatesRequest
   * @returns ListLiveRecordTemplatesResponse
   */
  async listLiveRecordTemplates(request: $_model.ListLiveRecordTemplatesRequest): Promise<$_model.ListLiveRecordTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveRecordTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream snapshot files by page.
   * 
   * @param request - ListLiveSnapshotFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveSnapshotFilesResponse
   */
  async listLiveSnapshotFilesWithOptions(request: $_model.ListLiveSnapshotFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveSnapshotFilesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveSnapshotFiles",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveSnapshotFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveSnapshotFilesResponse({}));
  }

  /**
   * Queries a list of live stream snapshot files by page.
   * 
   * @param request - ListLiveSnapshotFilesRequest
   * @returns ListLiveSnapshotFilesResponse
   */
  async listLiveSnapshotFiles(request: $_model.ListLiveSnapshotFilesRequest): Promise<$_model.ListLiveSnapshotFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveSnapshotFilesWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream snapshot jobs by page.
   * 
   * @param request - ListLiveSnapshotJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveSnapshotJobsResponse
   */
  async listLiveSnapshotJobsWithOptions(request: $_model.ListLiveSnapshotJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveSnapshotJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveSnapshotJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveSnapshotJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveSnapshotJobsResponse({}));
  }

  /**
   * Queries a list of live stream snapshot jobs by page.
   * 
   * @param request - ListLiveSnapshotJobsRequest
   * @returns ListLiveSnapshotJobsResponse
   */
  async listLiveSnapshotJobs(request: $_model.ListLiveSnapshotJobsRequest): Promise<$_model.ListLiveSnapshotJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveSnapshotJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream snapshot templates by page.
   * 
   * @param request - ListLiveSnapshotTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveSnapshotTemplatesResponse
   */
  async listLiveSnapshotTemplatesWithOptions(request: $_model.ListLiveSnapshotTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveSnapshotTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveSnapshotTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveSnapshotTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveSnapshotTemplatesResponse({}));
  }

  /**
   * Queries a list of live stream snapshot templates by page.
   * 
   * @param request - ListLiveSnapshotTemplatesRequest
   * @returns ListLiveSnapshotTemplatesResponse
   */
  async listLiveSnapshotTemplates(request: $_model.ListLiveSnapshotTemplatesRequest): Promise<$_model.ListLiveSnapshotTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveSnapshotTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream transcoding jobs.
   * 
   * @param request - ListLiveTranscodeJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveTranscodeJobsResponse
   */
  async listLiveTranscodeJobsWithOptions(request: $_model.ListLiveTranscodeJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveTranscodeJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    if (!$dara.isNull(request.startMode)) {
      query["StartMode"] = request.startMode;
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
      action: "ListLiveTranscodeJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveTranscodeJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveTranscodeJobsResponse({}));
  }

  /**
   * Queries a list of live stream transcoding jobs.
   * 
   * @param request - ListLiveTranscodeJobsRequest
   * @returns ListLiveTranscodeJobsResponse
   */
  async listLiveTranscodeJobs(request: $_model.ListLiveTranscodeJobsRequest): Promise<$_model.ListLiveTranscodeJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveTranscodeJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of live stream transcoding templates.
   * 
   * @param request - ListLiveTranscodeTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLiveTranscodeTemplatesResponse
   */
  async listLiveTranscodeTemplatesWithOptions(request: $_model.ListLiveTranscodeTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLiveTranscodeTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
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

    if (!$dara.isNull(request.videoCodec)) {
      query["VideoCodec"] = request.videoCodec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLiveTranscodeTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLiveTranscodeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListLiveTranscodeTemplatesResponse({}));
  }

  /**
   * Queries a list of live stream transcoding templates.
   * 
   * @param request - ListLiveTranscodeTemplatesRequest
   * @returns ListLiveTranscodeTemplatesResponse
   */
  async listLiveTranscodeTemplates(request: $_model.ListLiveTranscodeTemplatesRequest): Promise<$_model.ListLiveTranscodeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLiveTranscodeTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of all media assets that meet the specified conditions.
   * 
   * @remarks
   * If includeFileBasicInfo is set to true, the basic information, such as the duration and file size, of the source file is also returned. At most the first 100 entries that meet the specified conditions are returned. All media assets must exactly match all non-empty fields. The fields that support exact match include MediaType, Source, BusinessType, Category, and Status. If all information cannot be returned at a time, you can use NextToken to initiate a request to retrieve a new page of results.
   * 
   * @param request - ListMediaBasicInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaBasicInfosResponse
   */
  async listMediaBasicInfosWithOptions(request: $_model.ListMediaBasicInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaBasicInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.includeFileBasicInfo)) {
      query["IncludeFileBasicInfo"] = request.includeFileBasicInfo;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
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
      action: "ListMediaBasicInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaBasicInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaBasicInfosResponse({}));
  }

  /**
   * Queries the basic information of all media assets that meet the specified conditions.
   * 
   * @remarks
   * If includeFileBasicInfo is set to true, the basic information, such as the duration and file size, of the source file is also returned. At most the first 100 entries that meet the specified conditions are returned. All media assets must exactly match all non-empty fields. The fields that support exact match include MediaType, Source, BusinessType, Category, and Status. If all information cannot be returned at a time, you can use NextToken to initiate a request to retrieve a new page of results.
   * 
   * @param request - ListMediaBasicInfosRequest
   * @returns ListMediaBasicInfosResponse
   */
  async listMediaBasicInfos(request: $_model.ListMediaBasicInfosRequest): Promise<$_model.ListMediaBasicInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaBasicInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves MediaConvert tasks.
   * 
   * @param request - ListMediaConvertJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaConvertJobsResponse
   */
  async listMediaConvertJobsWithOptions(request: $_model.ListMediaConvertJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaConvertJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaConvertJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaConvertJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaConvertJobsResponse({}));
  }

  /**
   * Retrieves MediaConvert tasks.
   * 
   * @param request - ListMediaConvertJobsRequest
   * @returns ListMediaConvertJobsResponse
   */
  async listMediaConvertJobs(request: $_model.ListMediaConvertJobsRequest): Promise<$_model.ListMediaConvertJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaConvertJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of media information analysis jobs.
   * 
   * @param request - ListMediaInfoJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaInfoJobsResponse
   */
  async listMediaInfoJobsWithOptions(request: $_model.ListMediaInfoJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaInfoJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaInfoJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaInfoJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaInfoJobsResponse({}));
  }

  /**
   * Queries a list of media information analysis jobs.
   * 
   * @param request - ListMediaInfoJobsRequest
   * @returns ListMediaInfoJobsResponse
   */
  async listMediaInfoJobs(request: $_model.ListMediaInfoJobsRequest): Promise<$_model.ListMediaInfoJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaInfoJobsWithOptions(request, runtime);
  }

  /**
   * Queries MediaLive channels.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - ListMediaLiveChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaLiveChannelsResponse
   */
  async listMediaLiveChannelsWithOptions(request: $_model.ListMediaLiveChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaLiveChannelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.states)) {
      body["States"] = request.states;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaLiveChannels",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaLiveChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaLiveChannelsResponse({}));
  }

  /**
   * Queries MediaLive channels.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - ListMediaLiveChannelsRequest
   * @returns ListMediaLiveChannelsResponse
   */
  async listMediaLiveChannels(request: $_model.ListMediaLiveChannelsRequest): Promise<$_model.ListMediaLiveChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaLiveChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the security groups in MediaLive.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - ListMediaLiveInputSecurityGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaLiveInputSecurityGroupsResponse
   */
  async listMediaLiveInputSecurityGroupsWithOptions(request: $_model.ListMediaLiveInputSecurityGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaLiveInputSecurityGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaLiveInputSecurityGroups",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaLiveInputSecurityGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaLiveInputSecurityGroupsResponse({}));
  }

  /**
   * Queries the security groups in MediaLive.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - ListMediaLiveInputSecurityGroupsRequest
   * @returns ListMediaLiveInputSecurityGroupsResponse
   */
  async listMediaLiveInputSecurityGroups(request: $_model.ListMediaLiveInputSecurityGroupsRequest): Promise<$_model.ListMediaLiveInputSecurityGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaLiveInputSecurityGroupsWithOptions(request, runtime);
  }

  /**
   * Queries MediaLive inputs.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - ListMediaLiveInputsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaLiveInputsResponse
   */
  async listMediaLiveInputsWithOptions(request: $_model.ListMediaLiveInputsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaLiveInputsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      body["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.types)) {
      body["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaLiveInputs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaLiveInputsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaLiveInputsResponse({}));
  }

  /**
   * Queries MediaLive inputs.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - ListMediaLiveInputsRequest
   * @returns ListMediaLiveInputsResponse
   */
  async listMediaLiveInputs(request: $_model.ListMediaLiveInputsRequest): Promise<$_model.ListMediaLiveInputsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaLiveInputsWithOptions(request, runtime);
  }

  /**
   * Queries a list of marks of a media asset.
   * 
   * @param request - ListMediaMarksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaMarksResponse
   */
  async listMediaMarksWithOptions(request: $_model.ListMediaMarksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaMarksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaMarkIds)) {
      query["MediaMarkIds"] = request.mediaMarkIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaMarks",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaMarksResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaMarksResponse({}));
  }

  /**
   * Queries a list of marks of a media asset.
   * 
   * @param request - ListMediaMarksRequest
   * @returns ListMediaMarksResponse
   */
  async listMediaMarks(request: $_model.ListMediaMarksRequest): Promise<$_model.ListMediaMarksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaMarksWithOptions(request, runtime);
  }

  /**
   * Queries a list of media editing and production jobs that meet the specified conditions. You can query the jobs based on the job state and type.
   * 
   * @param request - ListMediaProducingJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMediaProducingJobsResponse
   */
  async listMediaProducingJobsWithOptions(request: $_model.ListMediaProducingJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMediaProducingJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.masterJobId)) {
      query["MasterJobId"] = request.masterJobId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMediaProducingJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMediaProducingJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListMediaProducingJobsResponse({}));
  }

  /**
   * Queries a list of media editing and production jobs that meet the specified conditions. You can query the jobs based on the job state and type.
   * 
   * @param request - ListMediaProducingJobsRequest
   * @returns ListMediaProducingJobsResponse
   */
  async listMediaProducingJobs(request: $_model.ListMediaProducingJobsRequest): Promise<$_model.ListMediaProducingJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMediaProducingJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of packaging jobs.
   * 
   * @param request - ListPackageJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPackageJobsResponse
   */
  async listPackageJobsWithOptions(request: $_model.ListPackageJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPackageJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPackageJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPackageJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListPackageJobsResponse({}));
  }

  /**
   * Queries a list of packaging jobs.
   * 
   * @param request - ListPackageJobsRequest
   * @returns ListPackageJobsResponse
   */
  async listPackageJobs(request: $_model.ListPackageJobsRequest): Promise<$_model.ListPackageJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPackageJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of ApsaraVideo Media Processing (MPS) queues.
   * 
   * @param request - ListPipelinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelinesResponse
   */
  async listPipelinesWithOptions(request: $_model.ListPipelinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelines",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelinesResponse({}));
  }

  /**
   * Queries a list of ApsaraVideo Media Processing (MPS) queues.
   * 
   * @param request - ListPipelinesRequest
   * @returns ListPipelinesResponse
   */
  async listPipelines(request: $_model.ListPipelinesRequest): Promise<$_model.ListPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPipelinesWithOptions(request, runtime);
  }

  /**
   * Lists programs.
   * 
   * @param request - ListProgramsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProgramsResponse
   */
  async listProgramsWithOptions(request: $_model.ListProgramsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProgramsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.programName)) {
      query["ProgramName"] = request.programName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrograms",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProgramsResponse>(await this.callApi(params, req, runtime), new $_model.ListProgramsResponse({}));
  }

  /**
   * Lists programs.
   * 
   * @param request - ListProgramsRequest
   * @returns ListProgramsResponse
   */
  async listPrograms(request: $_model.ListProgramsRequest): Promise<$_model.ListProgramsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProgramsWithOptions(request, runtime);
  }

  /**
   * Queries a list of media assets in the public media library that meet the specified conditions. A maximum of 100 media assets can be returned.
   * 
   * @param request - ListPublicMediaBasicInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublicMediaBasicInfosResponse
   */
  async listPublicMediaBasicInfosWithOptions(request: $_model.ListPublicMediaBasicInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublicMediaBasicInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.includeFileBasicInfo)) {
      query["IncludeFileBasicInfo"] = request.includeFileBasicInfo;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mediaTagId)) {
      query["MediaTagId"] = request.mediaTagId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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
      action: "ListPublicMediaBasicInfos",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublicMediaBasicInfosResponse>(await this.doRPCRequest(params.action, params.version, params.protocol, params.method, params.authType, params.bodyType, req, runtime), new $_model.ListPublicMediaBasicInfosResponse({}));
  }

  /**
   * Queries a list of media assets in the public media library that meet the specified conditions. A maximum of 100 media assets can be returned.
   * 
   * @param request - ListPublicMediaBasicInfosRequest
   * @returns ListPublicMediaBasicInfosResponse
   */
  async listPublicMediaBasicInfos(request: $_model.ListPublicMediaBasicInfosRequest): Promise<$_model.ListPublicMediaBasicInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPublicMediaBasicInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves all entities in a specified recognition library. Pagination is supported.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - ListRecognitionEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecognitionEntitiesResponse
   */
  async listRecognitionEntitiesWithOptions(request: $_model.ListRecognitionEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecognitionEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "ListRecognitionEntities",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecognitionEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecognitionEntitiesResponse({}));
  }

  /**
   * Retrieves all entities in a specified recognition library. Pagination is supported.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - ListRecognitionEntitiesRequest
   * @returns ListRecognitionEntitiesResponse
   */
  async listRecognitionEntities(request: $_model.ListRecognitionEntitiesRequest): Promise<$_model.ListRecognitionEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecognitionEntitiesWithOptions(request, runtime);
  }

  /**
   * Retrieves all custom recognition libraries. Pagination is supported.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - ListRecognitionLibsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecognitionLibsResponse
   */
  async listRecognitionLibsWithOptions(request: $_model.ListRecognitionLibsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecognitionLibsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "ListRecognitionLibs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecognitionLibsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecognitionLibsResponse({}));
  }

  /**
   * Retrieves all custom recognition libraries. Pagination is supported.
   * 
   * @remarks
   *   This operation is supported only in the China (Beijing), China (Shanghai), China (Hangzhou), and China (Shenzhen) regions.
   * *   You can call this operation up to 50 times per second per account. Requests that exceed this limit are dropped and you may experience service interruptions. For more information, see [QPS limits](https://help.aliyun.com/zh/mps/developer-reference/qps-limits?spm=a2c4g.11186623.0.0.647e1081YGcerb).
   * 
   * @param request - ListRecognitionLibsRequest
   * @returns ListRecognitionLibsResponse
   */
  async listRecognitionLibs(request: $_model.ListRecognitionLibsRequest): Promise<$_model.ListRecognitionLibsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecognitionLibsWithOptions(request, runtime);
  }

  /**
   * Retrieves all samples of a custom entity. Pagination is supported.
   * 
   * @param request - ListRecognitionSamplesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecognitionSamplesResponse
   */
  async listRecognitionSamplesWithOptions(request: $_model.ListRecognitionSamplesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecognitionSamplesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
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
      action: "ListRecognitionSamples",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecognitionSamplesResponse>(await this.callApi(params, req, runtime), new $_model.ListRecognitionSamplesResponse({}));
  }

  /**
   * Retrieves all samples of a custom entity. Pagination is supported.
   * 
   * @param request - ListRecognitionSamplesRequest
   * @returns ListRecognitionSamplesResponse
   */
  async listRecognitionSamples(request: $_model.ListRecognitionSamplesRequest): Promise<$_model.ListRecognitionSamplesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecognitionSamplesWithOptions(request, runtime);
  }

  /**
   * Lists the program schedule of a MediaWeaver channel.
   * 
   * @param request - ListSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchedulesResponse
   */
  async listSchedulesWithOptions(request: $_model.ListSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchedulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.windowDurationSeconds)) {
      query["WindowDurationSeconds"] = request.windowDurationSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchedules",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.ListSchedulesResponse({}));
  }

  /**
   * Lists the program schedule of a MediaWeaver channel.
   * 
   * @param request - ListSchedulesRequest
   * @returns ListSchedulesResponse
   */
  async listSchedules(request: $_model.ListSchedulesRequest): Promise<$_model.ListSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchedulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about search libraries.
   * 
   * @param request - ListSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchLibResponse
   */
  async listSearchLibWithOptions(request: $_model.ListSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchLibResponse> {
    request.validate();
    let query = { };
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
      action: "ListSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchLibResponse({}));
  }

  /**
   * Queries the information about search libraries.
   * 
   * @param request - ListSearchLibRequest
   * @returns ListSearchLibResponse
   */
  async listSearchLib(request: $_model.ListSearchLibRequest): Promise<$_model.ListSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSearchLibWithOptions(request, runtime);
  }

  /**
   * Queries a list of intelligent jobs based on specified parameters.
   * 
   * @param request - ListSmartJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmartJobsResponse
   */
  async listSmartJobsWithOptions(request: $_model.ListSmartJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmartJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmartJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmartJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSmartJobsResponse({}));
  }

  /**
   * Queries a list of intelligent jobs based on specified parameters.
   * 
   * @param request - ListSmartJobsRequest
   * @returns ListSmartJobsResponse
   */
  async listSmartJobs(request: $_model.ListSmartJobsRequest): Promise<$_model.ListSmartJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmartJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of system digital humans. This operation supports paged queries.
   * 
   * @param request - ListSmartSysAvatarModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmartSysAvatarModelsResponse
   */
  async listSmartSysAvatarModelsWithOptions(request: $_model.ListSmartSysAvatarModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmartSysAvatarModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sdkVersion)) {
      query["SdkVersion"] = request.sdkVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmartSysAvatarModels",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmartSysAvatarModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListSmartSysAvatarModelsResponse({}));
  }

  /**
   * Queries a list of system digital humans. This operation supports paged queries.
   * 
   * @param request - ListSmartSysAvatarModelsRequest
   * @returns ListSmartSysAvatarModelsResponse
   */
  async listSmartSysAvatarModels(request: $_model.ListSmartSysAvatarModelsRequest): Promise<$_model.ListSmartSysAvatarModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmartSysAvatarModelsWithOptions(request, runtime);
  }

  /**
   * Queries a list of speaker groups, including the name, gender, and sample audio of each speaker. The list is grouped by scenario.
   * 
   * @param request - ListSmartVoiceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSmartVoiceGroupsResponse
   */
  async listSmartVoiceGroupsWithOptions(request: $_model.ListSmartVoiceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSmartVoiceGroupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSmartVoiceGroups",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSmartVoiceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListSmartVoiceGroupsResponse({}));
  }

  /**
   * Queries a list of speaker groups, including the name, gender, and sample audio of each speaker. The list is grouped by scenario.
   * 
   * @param request - ListSmartVoiceGroupsRequest
   * @returns ListSmartVoiceGroupsResponse
   */
  async listSmartVoiceGroups(request: $_model.ListSmartVoiceGroupsRequest): Promise<$_model.ListSmartVoiceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSmartVoiceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of snapshot jobs.
   * 
   * @param request - ListSnapshotJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotJobsResponse
   */
  async listSnapshotJobsWithOptions(request: $_model.ListSnapshotJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshotJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotJobsResponse({}));
  }

  /**
   * Queries a list of snapshot jobs.
   * 
   * @param request - ListSnapshotJobsRequest
   * @returns ListSnapshotJobsResponse
   */
  async listSnapshotJobs(request: $_model.ListSnapshotJobsRequest): Promise<$_model.ListSnapshotJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSnapshotJobsWithOptions(request, runtime);
  }

  /**
   * Lists source locations.
   * 
   * @param request - ListSourceLocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSourceLocationsResponse
   */
  async listSourceLocationsWithOptions(request: $_model.ListSourceLocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSourceLocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterState)) {
      query["FilterState"] = request.filterState;
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

    if (!$dara.isNull(request.sortByModifiedTime)) {
      query["SortByModifiedTime"] = request.sortByModifiedTime;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSourceLocations",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSourceLocationsResponse>(await this.callApi(params, req, runtime), new $_model.ListSourceLocationsResponse({}));
  }

  /**
   * Lists source locations.
   * 
   * @param request - ListSourceLocationsRequest
   * @returns ListSourceLocationsResponse
   */
  async listSourceLocations(request: $_model.ListSourceLocationsRequest): Promise<$_model.ListSourceLocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSourceLocationsWithOptions(request, runtime);
  }

  /**
   * Lists sources in MediaWeaver.
   * 
   * @param request - ListSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSourcesResponse
   */
  async listSourcesWithOptions(request: $_model.ListSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterState)) {
      query["FilterState"] = request.filterState;
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

    if (!$dara.isNull(request.sortByModifiedTime)) {
      query["SortByModifiedTime"] = request.sortByModifiedTime;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSources",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListSourcesResponse({}));
  }

  /**
   * Lists sources in MediaWeaver.
   * 
   * @param request - ListSourcesRequest
   * @returns ListSourcesResponse
   */
  async listSources(request: $_model.ListSourcesRequest): Promise<$_model.ListSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of system templates.
   * 
   * @remarks
   * Template types:
   * 1.  1: transcoding template.
   * 2.  2: snapshot template.
   * 3.  3: animated image template.
   * 4.  4\\. image watermark template.
   * 5.  5: text watermark template.
   * 6.  6: subtitle template.
   * 7.  7: AI-assisted content moderation template.
   * 8.  8: AI-assisted intelligent thumbnail template.
   * 9.  9: AI-assisted intelligent erasure template.
   * Subtypes of transcoding templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (AudioTranscode): audio transcoding template.
   * 3.  3 (Remux): container format conversion template.
   * 4.  4 (NarrowBandV1): Narrowband HD 1.0 template.
   * 5.  5 (NarrowBandV2): Narrowband HD 2.0 template.
   * Subtypes of snapshot templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (Sprite): sprite template.
   * 3.  3 (WebVtt): WebVTT template.
   * Subtypes of AI-assisted content moderation templates:
   * 1.  1 (Video): video moderation template.
   * 2.  2 (Audio): audio moderation template.
   * 3.  3 (Image): image moderation template.
   * Subtypes of AI-assisted intelligent erasure templates:
   * 1.  1 (VideoDelogo): logo erasure template.
   * 2.  2 (VideoDetext): subtitle erasure template.
   * 
   * @param request - ListSystemTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemTemplatesResponse
   */
  async listSystemTemplatesWithOptions(request: $_model.ListSystemTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subtype)) {
      query["Subtype"] = request.subtype;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemTemplatesResponse({}));
  }

  /**
   * Queries a list of system templates.
   * 
   * @remarks
   * Template types:
   * 1.  1: transcoding template.
   * 2.  2: snapshot template.
   * 3.  3: animated image template.
   * 4.  4\\. image watermark template.
   * 5.  5: text watermark template.
   * 6.  6: subtitle template.
   * 7.  7: AI-assisted content moderation template.
   * 8.  8: AI-assisted intelligent thumbnail template.
   * 9.  9: AI-assisted intelligent erasure template.
   * Subtypes of transcoding templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (AudioTranscode): audio transcoding template.
   * 3.  3 (Remux): container format conversion template.
   * 4.  4 (NarrowBandV1): Narrowband HD 1.0 template.
   * 5.  5 (NarrowBandV2): Narrowband HD 2.0 template.
   * Subtypes of snapshot templates:
   * 1.  1 (Normal): regular template.
   * 2.  2 (Sprite): sprite template.
   * 3.  3 (WebVtt): WebVTT template.
   * Subtypes of AI-assisted content moderation templates:
   * 1.  1 (Video): video moderation template.
   * 2.  2 (Audio): audio moderation template.
   * 3.  3 (Image): image moderation template.
   * Subtypes of AI-assisted intelligent erasure templates:
   * 1.  1 (VideoDelogo): logo erasure template.
   * 2.  2 (VideoDetext): subtitle erasure template.
   * 
   * @param request - ListSystemTemplatesRequest
   * @returns ListSystemTemplatesResponse
   */
  async listSystemTemplates(request: $_model.ListSystemTemplatesRequest): Promise<$_model.ListSystemTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of templates that meet the specified conditions. You can query templates based on information such as the template status and creation source.
   * 
   * @remarks
   * A template is an encapsulation of the timeline of a media editing and production job. You can define a common timeline as a template. When you have the same requirements, you need to only specify key parameters and materials to produce videos.
   * *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(request: $_model.ListTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createSource)) {
      query["CreateSource"] = request.createSource;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
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
      action: "ListTemplates",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * Queries a list of templates that meet the specified conditions. You can query templates based on information such as the template status and creation source.
   * 
   * @remarks
   * A template is an encapsulation of the timeline of a media editing and production job. You can define a common timeline as a template. When you have the same requirements, you need to only specify key parameters and materials to produce videos.
   * *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of transcoding jobs.
   * 
   * @param request - ListTranscodeJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranscodeJobsResponse
   */
  async listTranscodeJobsWithOptions(request: $_model.ListTranscodeJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTranscodeJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTranscodeJobs",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTranscodeJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListTranscodeJobsResponse({}));
  }

  /**
   * Queries a list of transcoding jobs.
   * 
   * @param request - ListTranscodeJobsRequest
   * @returns ListTranscodeJobsResponse
   */
  async listTranscodeJobs(request: $_model.ListTranscodeJobsRequest): Promise<$_model.ListTranscodeJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTranscodeJobsWithOptions(request, runtime);
  }

  /**
   * Lists VOD packaging assets.
   * 
   * @param request - ListVodPackagingAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodPackagingAssetsResponse
   */
  async listVodPackagingAssetsWithOptions(request: $_model.ListVodPackagingAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodPackagingAssetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListVodPackagingAssets",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodPackagingAssetsResponse>(await this.callApi(params, req, runtime), new $_model.ListVodPackagingAssetsResponse({}));
  }

  /**
   * Lists VOD packaging assets.
   * 
   * @param request - ListVodPackagingAssetsRequest
   * @returns ListVodPackagingAssetsResponse
   */
  async listVodPackagingAssets(request: $_model.ListVodPackagingAssetsRequest): Promise<$_model.ListVodPackagingAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodPackagingAssetsWithOptions(request, runtime);
  }

  /**
   * Lists packaging configurations.
   * 
   * @param request - ListVodPackagingConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodPackagingConfigurationsResponse
   */
  async listVodPackagingConfigurationsWithOptions(request: $_model.ListVodPackagingConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodPackagingConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListVodPackagingConfigurations",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodPackagingConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListVodPackagingConfigurationsResponse({}));
  }

  /**
   * Lists packaging configurations.
   * 
   * @param request - ListVodPackagingConfigurationsRequest
   * @returns ListVodPackagingConfigurationsResponse
   */
  async listVodPackagingConfigurations(request: $_model.ListVodPackagingConfigurationsRequest): Promise<$_model.ListVodPackagingConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodPackagingConfigurationsWithOptions(request, runtime);
  }

  /**
   * Lists packaging groups.
   * 
   * @param request - ListVodPackagingGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVodPackagingGroupsResponse
   */
  async listVodPackagingGroupsWithOptions(request: $_model.ListVodPackagingGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVodPackagingGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListVodPackagingGroups",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVodPackagingGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListVodPackagingGroupsResponse({}));
  }

  /**
   * Lists packaging groups.
   * 
   * @param request - ListVodPackagingGroupsRequest
   * @returns ListVodPackagingGroupsResponse
   */
  async listVodPackagingGroups(request: $_model.ListVodPackagingGroupsRequest): Promise<$_model.ListVodPackagingGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVodPackagingGroupsWithOptions(request, runtime);
  }

  /**
   * Retrieves workflow tasks.
   * 
   * @remarks
   * This API only returns data from the last 90 days.
   * 
   * @param request - ListWorkflowTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowTasksResponse
   */
  async listWorkflowTasksWithOptions(request: $_model.ListWorkflowTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endOfCreateTime)) {
      query["EndOfCreateTime"] = request.endOfCreateTime;
    }

    if (!$dara.isNull(request.keyText)) {
      query["KeyText"] = request.keyText;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startOfCreateTime)) {
      query["StartOfCreateTime"] = request.startOfCreateTime;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workflowName)) {
      query["WorkflowName"] = request.workflowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowTasks",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowTasksResponse({}));
  }

  /**
   * Retrieves workflow tasks.
   * 
   * @remarks
   * This API only returns data from the last 90 days.
   * 
   * @param request - ListWorkflowTasksRequest
   * @returns ListWorkflowTasksResponse
   */
  async listWorkflowTasks(request: $_model.ListWorkflowTasksRequest): Promise<$_model.ListWorkflowTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowTasksWithOptions(request, runtime);
  }

  /**
   * Enables Source Failover for a MediaConnect flow.
   * 
   * @remarks
   *   Before this operation, you must add a source to the flow.
   * *   After Source Failover is enabled, you can add an additional source. The input type of the two sources must be identical.
   * 
   * @param request - OpenMediaConnectFlowFailoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenMediaConnectFlowFailoverResponse
   */
  async openMediaConnectFlowFailoverWithOptions(request: $_model.OpenMediaConnectFlowFailoverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenMediaConnectFlowFailoverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenMediaConnectFlowFailover",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenMediaConnectFlowFailoverResponse>(await this.callApi(params, req, runtime), new $_model.OpenMediaConnectFlowFailoverResponse({}));
  }

  /**
   * Enables Source Failover for a MediaConnect flow.
   * 
   * @remarks
   *   Before this operation, you must add a source to the flow.
   * *   After Source Failover is enabled, you can add an additional source. The input type of the two sources must be identical.
   * 
   * @param request - OpenMediaConnectFlowFailoverRequest
   * @returns OpenMediaConnectFlowFailoverResponse
   */
  async openMediaConnectFlowFailover(request: $_model.OpenMediaConnectFlowFailoverRequest): Promise<$_model.OpenMediaConnectFlowFailoverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openMediaConnectFlowFailoverWithOptions(request, runtime);
  }

  /**
   * Queries a job for extracting a copyright watermark.
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
      version: "2020-11-09",
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
   * Queries a job for extracting a copyright watermark.
   * 
   * @param request - QueryCopyrightExtractJobRequest
   * @returns QueryCopyrightExtractJobResponse
   */
  async queryCopyrightExtractJob(request: $_model.QueryCopyrightExtractJobRequest): Promise<$_model.QueryCopyrightExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCopyrightExtractJobWithOptions(request, runtime);
  }

  /**
   * Queries copyright watermarking jobs.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - QueryCopyrightJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCopyrightJobListResponse
   */
  async queryCopyrightJobListWithOptions(request: $_model.QueryCopyrightJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCopyrightJobListResponse> {
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
      action: "QueryCopyrightJobList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCopyrightJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCopyrightJobListResponse({}));
  }

  /**
   * Queries copyright watermarking jobs.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - QueryCopyrightJobListRequest
   * @returns QueryCopyrightJobListResponse
   */
  async queryCopyrightJobList(request: $_model.QueryCopyrightJobListRequest): Promise<$_model.QueryCopyrightJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCopyrightJobListWithOptions(request, runtime);
  }

  /**
   * Queries a list of media fingerprint analysis jobs.
   * 
   * @param request - QueryDNAJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDNAJobListResponse
   */
  async queryDNAJobListWithOptions(request: $_model.QueryDNAJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDNAJobListResponse> {
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
      action: "QueryDNAJobList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDNAJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryDNAJobListResponse({}));
  }

  /**
   * Queries a list of media fingerprint analysis jobs.
   * 
   * @param request - QueryDNAJobListRequest
   * @returns QueryDNAJobListResponse
   */
  async queryDNAJobList(request: $_model.QueryDNAJobListRequest): Promise<$_model.QueryDNAJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDNAJobListWithOptions(request, runtime);
  }

  /**
   * Queries the status and result of an intelligent production job.
   * 
   * @param request - QueryIProductionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIProductionJobResponse
   */
  async queryIProductionJobWithOptions(request: $_model.QueryIProductionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryIProductionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIProductionJob",
      version: "2020-11-09",
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
   * Queries the status and result of an intelligent production job.
   * 
   * @param request - QueryIProductionJobRequest
   * @returns QueryIProductionJobResponse
   */
  async queryIProductionJob(request: $_model.QueryIProductionJobRequest): Promise<$_model.QueryIProductionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryIProductionJobWithOptions(request, runtime);
  }

  /**
   * 查询IPC用量
   * 
   * @param request - QueryIpcQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIpcQuotaResponse
   */
  async queryIpcQuotaWithOptions(request: $_model.QueryIpcQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryIpcQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capability)) {
      query["Capability"] = request.capability;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIpcQuota",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryIpcQuotaResponse>(await this.callApi(params, req, runtime), new $_model.QueryIpcQuotaResponse({}));
  }

  /**
   * 查询IPC用量
   * 
   * @param request - QueryIpcQuotaRequest
   * @returns QueryIpcQuotaResponse
   */
  async queryIpcQuota(request: $_model.QueryIpcQuotaRequest): Promise<$_model.QueryIpcQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryIpcQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the information about a content moderation job.
   * 
   * @remarks
   * In the content moderation results, the moderation results of the video are sorted in ascending order by time into a timeline. If the video is long, the content moderation results are paginated, and the first page is returned. You can call this operation again to query the remaining moderation results of the video.
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
      version: "2020-11-09",
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
   * 
   * @param request - QueryMediaCensorJobDetailRequest
   * @returns QueryMediaCensorJobDetailResponse
   */
  async queryMediaCensorJobDetail(request: $_model.QueryMediaCensorJobDetailRequest): Promise<$_model.QueryMediaCensorJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaCensorJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of content moderation jobs.
   * 
   * @remarks
   * You can call this operation to query only the content moderation jobs within the most recent three months.
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
      version: "2020-11-09",
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
   * Queries a list of content moderation jobs.
   * 
   * @remarks
   * You can call this operation to query only the content moderation jobs within the most recent three months.
   * 
   * @param request - QueryMediaCensorJobListRequest
   * @returns QueryMediaCensorJobListResponse
   */
  async queryMediaCensorJobList(request: $_model.QueryMediaCensorJobListRequest): Promise<$_model.QueryMediaCensorJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaCensorJobListWithOptions(request, runtime);
  }

  /**
   * Queries the indexing jobs enabled for a media asset.
   * 
   * @param request - QueryMediaIndexJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMediaIndexJobResponse
   */
  async queryMediaIndexJobWithOptions(request: $_model.QueryMediaIndexJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMediaIndexJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMediaIndexJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMediaIndexJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryMediaIndexJobResponse({}));
  }

  /**
   * Queries the indexing jobs enabled for a media asset.
   * 
   * @param request - QueryMediaIndexJobRequest
   * @returns QueryMediaIndexJobResponse
   */
  async queryMediaIndexJob(request: $_model.QueryMediaIndexJobRequest): Promise<$_model.QueryMediaIndexJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMediaIndexJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of a search index.
   * 
   * @param request - QuerySearchIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySearchIndexResponse
   */
  async querySearchIndexWithOptions(request: $_model.QuerySearchIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySearchIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.indexType)) {
      query["IndexType"] = request.indexType;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySearchIndex",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySearchIndexResponse>(await this.callApi(params, req, runtime), new $_model.QuerySearchIndexResponse({}));
  }

  /**
   * Queries the details of a search index.
   * 
   * @param request - QuerySearchIndexRequest
   * @returns QuerySearchIndexResponse
   */
  async querySearchIndex(request: $_model.QuerySearchIndexRequest): Promise<$_model.QuerySearchIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySearchIndexWithOptions(request, runtime);
  }

  /**
   * Queries the information about a search library.
   * 
   * @param request - QuerySearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySearchLibResponse
   */
  async querySearchLibWithOptions(request: $_model.QuerySearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySearchLibResponse>(await this.callApi(params, req, runtime), new $_model.QuerySearchLibResponse({}));
  }

  /**
   * Queries the information about a search library.
   * 
   * @param request - QuerySearchLibRequest
   * @returns QuerySearchLibResponse
   */
  async querySearchLib(request: $_model.QuerySearchLibRequest): Promise<$_model.QuerySearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySearchLibWithOptions(request, runtime);
  }

  /**
   * Queries the information about a smart tagging job.
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

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySmarttagJob",
      version: "2020-11-09",
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
   * Queries the information about a smart tagging job.
   * 
   * @param request - QuerySmarttagJobRequest
   * @returns QuerySmarttagJobResponse
   */
  async querySmarttagJob(request: $_model.QuerySmarttagJobRequest): Promise<$_model.QuerySmarttagJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySmarttagJobWithOptions(request, runtime);
  }

  /**
   * Queries A/B watermarking jobs.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - QueryTraceAbJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTraceAbJobListResponse
   */
  async queryTraceAbJobListWithOptions(request: $_model.QueryTraceAbJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTraceAbJobListResponse> {
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

    if (!$dara.isNull(request.traceMediaId)) {
      query["TraceMediaId"] = request.traceMediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTraceAbJobList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTraceAbJobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTraceAbJobListResponse({}));
  }

  /**
   * Queries A/B watermarking jobs.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - QueryTraceAbJobListRequest
   * @returns QueryTraceAbJobListResponse
   */
  async queryTraceAbJobList(request: $_model.QueryTraceAbJobListRequest): Promise<$_model.QueryTraceAbJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTraceAbJobListWithOptions(request, runtime);
  }

  /**
   * Queries a job for extracting a trace watermark.
   * 
   * @remarks
   * This operation is supported only in the China (Shanghai) and China (Beijing) regions.
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
      version: "2020-11-09",
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
   * Queries a job for extracting a trace watermark.
   * 
   * @remarks
   * This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - QueryTraceExtractJobRequest
   * @returns QueryTraceExtractJobResponse
   */
  async queryTraceExtractJob(request: $_model.QueryTraceExtractJobRequest): Promise<$_model.QueryTraceExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTraceExtractJobWithOptions(request, runtime);
  }

  /**
   * Queries jobs for generating M3U8 files containing specific trace watermark information.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   The M3U8 file with absolute paths generated by the SubmitTraceM3u8Job API has a signed URL with an authentication validity period of 24 hours, starting from the moment the job is completed. After the signature expires, the M3U8 file will become inaccessible. You must submit a new M3U8 generation job.
   * 
   * @param request - QueryTraceM3u8JobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTraceM3u8JobListResponse
   */
  async queryTraceM3u8JobListWithOptions(request: $_model.QueryTraceM3u8JobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTraceM3u8JobListResponse> {
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
      action: "QueryTraceM3u8JobList",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTraceM3u8JobListResponse>(await this.callApi(params, req, runtime), new $_model.QueryTraceM3u8JobListResponse({}));
  }

  /**
   * Queries jobs for generating M3U8 files containing specific trace watermark information.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   The M3U8 file with absolute paths generated by the SubmitTraceM3u8Job API has a signed URL with an authentication validity period of 24 hours, starting from the moment the job is completed. After the signature expires, the M3U8 file will become inaccessible. You must submit a new M3U8 generation job.
   * 
   * @param request - QueryTraceM3u8JobListRequest
   * @returns QueryTraceM3u8JobListResponse
   */
  async queryTraceM3u8JobList(request: $_model.QueryTraceM3u8JobListRequest): Promise<$_model.QueryTraceM3u8JobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTraceM3u8JobListWithOptions(request, runtime);
  }

  /**
   * Retrieves the results of an AI analysis and processing task.
   * 
   * @param tmpReq - QueryVideoCognitionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVideoCognitionJobResponse
   */
  async queryVideoCognitionJobWithOptions(tmpReq: $_model.QueryVideoCognitionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVideoCognitionJobResponse> {
    tmpReq.validate();
    let request = new $_model.QueryVideoCognitionJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.includeResults)) {
      request.includeResultsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.includeResults, "IncludeResults", "json");
    }

    let query = { };
    if (!$dara.isNull(request.includeResultsShrink)) {
      query["IncludeResults"] = request.includeResultsShrink;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVideoCognitionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVideoCognitionJobResponse>(await this.callApi(params, req, runtime), new $_model.QueryVideoCognitionJobResponse({}));
  }

  /**
   * Retrieves the results of an AI analysis and processing task.
   * 
   * @param request - QueryVideoCognitionJobRequest
   * @returns QueryVideoCognitionJobResponse
   */
  async queryVideoCognitionJob(request: $_model.QueryVideoCognitionJobRequest): Promise<$_model.QueryVideoCognitionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVideoCognitionJobWithOptions(request, runtime);
  }

  /**
   * Obtain a new upload credential for a media asset after its upload credential expires.
   * 
   * @remarks
   * You can also call this operation to overwrite media files. After you obtain the upload URL of a media file, you can upload the media file again without changing the audio or video ID.
   * 
   * @param request - RefreshUploadMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshUploadMediaResponse
   */
  async refreshUploadMediaWithOptions(request: $_model.RefreshUploadMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshUploadMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshUploadMedia",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshUploadMediaResponse>(await this.callApi(params, req, runtime), new $_model.RefreshUploadMediaResponse({}));
  }

  /**
   * Obtain a new upload credential for a media asset after its upload credential expires.
   * 
   * @remarks
   * You can also call this operation to overwrite media files. After you obtain the upload URL of a media file, you can upload the media file again without changing the audio or video ID.
   * 
   * @param request - RefreshUploadMediaRequest
   * @returns RefreshUploadMediaResponse
   */
  async refreshUploadMedia(request: $_model.RefreshUploadMediaRequest): Promise<$_model.RefreshUploadMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshUploadMediaWithOptions(request, runtime);
  }

  /**
   * Registers a media asset with Intelligent Media Services (IMS). IMS assigns an ID to the media asset. This operation asynchronously accesses the media asset service in which the media asset is stored to obtain the file information of the media asset based on the input URL. You can also specify basic information, such as the title, tags, and description, for the media asset. This operation returns the ID of the media asset. You can call the GetMediaInfo operation based on the ID to query the details of the media asset. You can set InputURL only to the URL of an Object Storage Service (OSS) file or an ApsaraVideo VOD media asset.
   * 
   * @remarks
   * Registering a media asset is an asynchronous job that takes 2 to 3 seconds. When the operation returns the ID of the media asset, the registration may have not be completed. If you call the GetMediaInfo operation at this time, you may fail to obtain the information about the media asset.
   * 
   * @param request - RegisterMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterMediaInfoResponse
   */
  async registerMediaInfoWithOptions(request: $_model.RegisterMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
    }

    if (!$dara.isNull(request.registerConfig)) {
      query["RegisterConfig"] = request.registerConfig;
    }

    if (!$dara.isNull(request.smartTagTemplateId)) {
      query["SmartTagTemplateId"] = request.smartTagTemplateId;
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
      action: "RegisterMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.RegisterMediaInfoResponse({}));
  }

  /**
   * Registers a media asset with Intelligent Media Services (IMS). IMS assigns an ID to the media asset. This operation asynchronously accesses the media asset service in which the media asset is stored to obtain the file information of the media asset based on the input URL. You can also specify basic information, such as the title, tags, and description, for the media asset. This operation returns the ID of the media asset. You can call the GetMediaInfo operation based on the ID to query the details of the media asset. You can set InputURL only to the URL of an Object Storage Service (OSS) file or an ApsaraVideo VOD media asset.
   * 
   * @remarks
   * Registering a media asset is an asynchronous job that takes 2 to 3 seconds. When the operation returns the ID of the media asset, the registration may have not be completed. If you call the GetMediaInfo operation at this time, you may fail to obtain the information about the media asset.
   * 
   * @param request - RegisterMediaInfoRequest
   * @returns RegisterMediaInfoResponse
   */
  async registerMediaInfo(request: $_model.RegisterMediaInfoRequest): Promise<$_model.RegisterMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerMediaInfoWithOptions(request, runtime);
  }

  /**
   * Registers a media stream.
   * 
   * @remarks
   * You can call this operation to register a media stream file in an Object Storage Service (OSS) bucket with Intelligent Media Services (IMS) and associate the media stream with the specified media asset ID.
   * 
   * @param request - RegisterMediaStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterMediaStreamResponse
   */
  async registerMediaStreamWithOptions(request: $_model.RegisterMediaStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterMediaStreamResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.streamTags)) {
      query["StreamTags"] = request.streamTags;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterMediaStream",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterMediaStreamResponse>(await this.callApi(params, req, runtime), new $_model.RegisterMediaStreamResponse({}));
  }

  /**
   * Registers a media stream.
   * 
   * @remarks
   * You can call this operation to register a media stream file in an Object Storage Service (OSS) bucket with Intelligent Media Services (IMS) and associate the media stream with the specified media asset ID.
   * 
   * @param request - RegisterMediaStreamRequest
   * @returns RegisterMediaStreamResponse
   */
  async registerMediaStream(request: $_model.RegisterMediaStreamRequest): Promise<$_model.RegisterMediaStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerMediaStreamWithOptions(request, runtime);
  }

  /**
   * Resumes an output of a MediaConnect flow. When resumed, the output can deliver the live stream to the destination.
   * 
   * @param request - ResumeMediaConnectFlowOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeMediaConnectFlowOutputResponse
   */
  async resumeMediaConnectFlowOutputWithOptions(request: $_model.ResumeMediaConnectFlowOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeMediaConnectFlowOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeMediaConnectFlowOutput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeMediaConnectFlowOutputResponse>(await this.callApi(params, req, runtime), new $_model.ResumeMediaConnectFlowOutputResponse({}));
  }

  /**
   * Resumes an output of a MediaConnect flow. When resumed, the output can deliver the live stream to the destination.
   * 
   * @param request - ResumeMediaConnectFlowOutputRequest
   * @returns ResumeMediaConnectFlowOutputResponse
   */
  async resumeMediaConnectFlowOutput(request: $_model.ResumeMediaConnectFlowOutputRequest): Promise<$_model.ResumeMediaConnectFlowOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeMediaConnectFlowOutputWithOptions(request, runtime);
  }

  /**
   * Queries online editing projects by creation time and status.
   * 
   * @param request - SearchEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchEditingProjectResponse
   */
  async searchEditingProjectWithOptions(request: $_model.SearchEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createSource)) {
      query["CreateSource"] = request.createSource;
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

    if (!$dara.isNull(request.projectType)) {
      query["ProjectType"] = request.projectType;
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

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchEditingProject",
      version: "2020-11-09",
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
   * Queries online editing projects by creation time and status.
   * 
   * @param request - SearchEditingProjectRequest
   * @returns SearchEditingProjectResponse
   */
  async searchEditingProject(request: $_model.SearchEditingProjectRequest): Promise<$_model.SearchEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchEditingProjectWithOptions(request, runtime);
  }

  /**
   * Re-analyzes the search index jobs of media assets. You can re-run the search index jobs of up to 20 media assets in each request.
   * 
   * @param request - SearchIndexJobRerunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchIndexJobRerunResponse
   */
  async searchIndexJobRerunWithOptions(request: $_model.SearchIndexJobRerunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchIndexJobRerunResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    if (!$dara.isNull(request.task)) {
      query["Task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchIndexJobRerun",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchIndexJobRerunResponse>(await this.callApi(params, req, runtime), new $_model.SearchIndexJobRerunResponse({}));
  }

  /**
   * Re-analyzes the search index jobs of media assets. You can re-run the search index jobs of up to 20 media assets in each request.
   * 
   * @param request - SearchIndexJobRerunRequest
   * @returns SearchIndexJobRerunResponse
   */
  async searchIndexJobRerun(request: $_model.SearchIndexJobRerunRequest): Promise<$_model.SearchIndexJobRerunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchIndexJobRerunWithOptions(request, runtime);
  }

  /**
   * Queries information about media assets based on the request parameters.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaResponse
   */
  async searchMediaWithOptions(request: $_model.SearchMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
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

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMedia",
      version: "2020-11-09",
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
   * Queries information about media assets based on the request parameters.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaRequest
   * @returns SearchMediaResponse
   */
  async searchMedia(request: $_model.SearchMediaRequest): Promise<$_model.SearchMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  /**
   * Queries media assets based on character names, subtitles, or AI categories.
   * 
   * @remarks
   * You can call this operation to query media assets or media asset clips based on character names, subtitles, or AI categories.
   * 
   * @param request - SearchMediaByAILabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaByAILabelResponse
   */
  async searchMediaByAILabelWithOptions(request: $_model.SearchMediaByAILabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaByAILabelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.matchingMode)) {
      query["MatchingMode"] = request.matchingMode;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.multimodalSearchType)) {
      query["MultimodalSearchType"] = request.multimodalSearchType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.specificSearch)) {
      query["SpecificSearch"] = request.specificSearch;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.utcCreate)) {
      query["UtcCreate"] = request.utcCreate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMediaByAILabel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaByAILabelResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaByAILabelResponse({}));
  }

  /**
   * Queries media assets based on character names, subtitles, or AI categories.
   * 
   * @remarks
   * You can call this operation to query media assets or media asset clips based on character names, subtitles, or AI categories.
   * 
   * @param request - SearchMediaByAILabelRequest
   * @returns SearchMediaByAILabelResponse
   */
  async searchMediaByAILabel(request: $_model.SearchMediaByAILabelRequest): Promise<$_model.SearchMediaByAILabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaByAILabelWithOptions(request, runtime);
  }

  /**
   * Queries the information about media assets that are related to a specific face.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaByFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaByFaceResponse
   */
  async searchMediaByFaceWithOptions(request: $_model.SearchMediaByFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaByFaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.faceSearchToken)) {
      query["FaceSearchToken"] = request.faceSearchToken;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.personImageUrl)) {
      query["PersonImageUrl"] = request.personImageUrl;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    if (!$dara.isNull(request.utcCreate)) {
      query["UtcCreate"] = request.utcCreate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMediaByFace",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaByFaceResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaByFaceResponse({}));
  }

  /**
   * Queries the information about media assets that are related to a specific face.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaByFaceRequest
   * @returns SearchMediaByFaceResponse
   */
  async searchMediaByFace(request: $_model.SearchMediaByFaceRequest): Promise<$_model.SearchMediaByFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaByFaceWithOptions(request, runtime);
  }

  /**
   * Performs a hybrid search for media assets. This API combines multiple recall strategies, including tag-based text search and large language model (LLM) search. You can locate media assets using natural language descriptions.
   * 
   * @param request - SearchMediaByHybridRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaByHybridResponse
   */
  async searchMediaByHybridWithOptions(request: $_model.SearchMediaByHybridRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaByHybridResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.utcCreate)) {
      query["UtcCreate"] = request.utcCreate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMediaByHybrid",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaByHybridResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaByHybridResponse({}));
  }

  /**
   * Performs a hybrid search for media assets. This API combines multiple recall strategies, including tag-based text search and large language model (LLM) search. You can locate media assets using natural language descriptions.
   * 
   * @param request - SearchMediaByHybridRequest
   * @returns SearchMediaByHybridResponse
   */
  async searchMediaByHybrid(request: $_model.SearchMediaByHybridRequest): Promise<$_model.SearchMediaByHybridResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaByHybridWithOptions(request, runtime);
  }

  /**
   * Queries media assets by using the large visual model. You can use natural language for the query.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaByMultimodalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaByMultimodalResponse
   */
  async searchMediaByMultimodalWithOptions(request: $_model.SearchMediaByMultimodalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaByMultimodalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.utcCreate)) {
      query["UtcCreate"] = request.utcCreate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMediaByMultimodal",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaByMultimodalResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaByMultimodalResponse({}));
  }

  /**
   * Queries media assets by using the large visual model. You can use natural language for the query.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaByMultimodalRequest
   * @returns SearchMediaByMultimodalResponse
   */
  async searchMediaByMultimodal(request: $_model.SearchMediaByMultimodalRequest): Promise<$_model.SearchMediaByMultimodalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaByMultimodalWithOptions(request, runtime);
  }

  /**
   * Queries the information about media asset clips that are related to a specific face based on the response to the SearchMediaByFace operation.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaClipByFaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaClipByFaceResponse
   */
  async searchMediaClipByFaceWithOptions(request: $_model.SearchMediaClipByFaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaClipByFaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.faceSearchToken)) {
      query["FaceSearchToken"] = request.faceSearchToken;
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

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMediaClipByFace",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaClipByFaceResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaClipByFaceResponse({}));
  }

  /**
   * Queries the information about media asset clips that are related to a specific face based on the response to the SearchMediaByFace operation.
   * 
   * @remarks
   * If you have questions about how to use the media asset search feature in Intelligent Media Services (IMS), contact technical support in the DingTalk group (ID 30415005038).
   * 
   * @param request - SearchMediaClipByFaceRequest
   * @returns SearchMediaClipByFaceResponse
   */
  async searchMediaClipByFace(request: $_model.SearchMediaClipByFaceRequest): Promise<$_model.SearchMediaClipByFaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaClipByFaceWithOptions(request, runtime);
  }

  /**
   * 搜索公共媒资信息
   * 
   * @param request - SearchPublicMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchPublicMediaInfoResponse
   */
  async searchPublicMediaInfoWithOptions(request: $_model.SearchPublicMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchPublicMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authorized)) {
      query["Authorized"] = request.authorized;
    }

    if (!$dara.isNull(request.dynamicMetaDataMatchFields)) {
      query["DynamicMetaDataMatchFields"] = request.dynamicMetaDataMatchFields;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.favorite)) {
      query["Favorite"] = request.favorite;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
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
      action: "SearchPublicMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchPublicMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.SearchPublicMediaInfoResponse({}));
  }

  /**
   * 搜索公共媒资信息
   * 
   * @param request - SearchPublicMediaInfoRequest
   * @returns SearchPublicMediaInfoResponse
   */
  async searchPublicMediaInfo(request: $_model.SearchPublicMediaInfoRequest): Promise<$_model.SearchPublicMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchPublicMediaInfoWithOptions(request, runtime);
  }

  /**
   * Sends a DataChannel message to an AI agent.
   * 
   * @param request - SendAIAgentDataChannelMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendAIAgentDataChannelMessageResponse
   */
  async sendAIAgentDataChannelMessageWithOptions(request: $_model.SendAIAgentDataChannelMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendAIAgentDataChannelMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendAIAgentDataChannelMessage",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendAIAgentDataChannelMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendAIAgentDataChannelMessageResponse({}));
  }

  /**
   * Sends a DataChannel message to an AI agent.
   * 
   * @param request - SendAIAgentDataChannelMessageRequest
   * @returns SendAIAgentDataChannelMessageResponse
   */
  async sendAIAgentDataChannelMessage(request: $_model.SendAIAgentDataChannelMessageRequest): Promise<$_model.SendAIAgentDataChannelMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendAIAgentDataChannelMessageWithOptions(request, runtime);
  }

  /**
   * Instructs an AI agent to immediately broadcast a text message and supports interruption settings.
   * 
   * @remarks
   * You can call this operation to instruct an AI agent to broadcast the content that you specify. You can determine whether this broadcast can immediately interrupt the ongoing speech. The interruption is allowed by default.
   * **Note**
   * *   Make sure that the `InstanceId` is valid and corresponds to an existing AI agent.
   * *   The content of `Text` must comply with the specifications and does not contain sensitive or inappropriate information.
   * *   If you do not want the new broadcast to interrupt the ongoing speech, you must set `EnableInterrupt` to `false`.
   * 
   * @param request - SendAIAgentSpeechRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendAIAgentSpeechResponse
   */
  async sendAIAgentSpeechWithOptions(request: $_model.SendAIAgentSpeechRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendAIAgentSpeechResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableInterrupt)) {
      query["EnableInterrupt"] = request.enableInterrupt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendAIAgentSpeech",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendAIAgentSpeechResponse>(await this.callApi(params, req, runtime), new $_model.SendAIAgentSpeechResponse({}));
  }

  /**
   * Instructs an AI agent to immediately broadcast a text message and supports interruption settings.
   * 
   * @remarks
   * You can call this operation to instruct an AI agent to broadcast the content that you specify. You can determine whether this broadcast can immediately interrupt the ongoing speech. The interruption is allowed by default.
   * **Note**
   * *   Make sure that the `InstanceId` is valid and corresponds to an existing AI agent.
   * *   The content of `Text` must comply with the specifications and does not contain sensitive or inappropriate information.
   * *   If you do not want the new broadcast to interrupt the ongoing speech, you must set `EnableInterrupt` to `false`.
   * 
   * @param request - SendAIAgentSpeechRequest
   * @returns SendAIAgentSpeechResponse
   */
  async sendAIAgentSpeech(request: $_model.SendAIAgentSpeechRequest): Promise<$_model.SendAIAgentSpeechResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendAIAgentSpeechWithOptions(request, runtime);
  }

  /**
   * Sends a message as input to the large language model (LLM).
   * 
   * @param request - SendAIAgentTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendAIAgentTextResponse
   */
  async sendAIAgentTextWithOptions(request: $_model.SendAIAgentTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendAIAgentTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendAIAgentText",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendAIAgentTextResponse>(await this.callApi(params, req, runtime), new $_model.SendAIAgentTextResponse({}));
  }

  /**
   * Sends a message as input to the large language model (LLM).
   * 
   * @param request - SendAIAgentTextRequest
   * @returns SendAIAgentTextResponse
   */
  async sendAIAgentText(request: $_model.SendAIAgentTextRequest): Promise<$_model.SendAIAgentTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendAIAgentTextWithOptions(request, runtime);
  }

  /**
   * Sends a command to process a live stream snapshot job.
   * 
   * @param request - SendLiveSnapshotJobCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendLiveSnapshotJobCommandResponse
   */
  async sendLiveSnapshotJobCommandWithOptions(request: $_model.SendLiveSnapshotJobCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendLiveSnapshotJobCommandResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.command)) {
      body["Command"] = request.command;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendLiveSnapshotJobCommand",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendLiveSnapshotJobCommandResponse>(await this.callApi(params, req, runtime), new $_model.SendLiveSnapshotJobCommandResponse({}));
  }

  /**
   * Sends a command to process a live stream snapshot job.
   * 
   * @param request - SendLiveSnapshotJobCommandRequest
   * @returns SendLiveSnapshotJobCommandResponse
   */
  async sendLiveSnapshotJobCommand(request: $_model.SendLiveSnapshotJobCommandRequest): Promise<$_model.SendLiveSnapshotJobCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendLiveSnapshotJobCommandWithOptions(request, runtime);
  }

  /**
   * Sends a command to process a live stream transcoding job.
   * 
   * @param request - SendLiveTranscodeJobCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendLiveTranscodeJobCommandResponse
   */
  async sendLiveTranscodeJobCommandWithOptions(request: $_model.SendLiveTranscodeJobCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendLiveTranscodeJobCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendLiveTranscodeJobCommand",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendLiveTranscodeJobCommandResponse>(await this.callApi(params, req, runtime), new $_model.SendLiveTranscodeJobCommandResponse({}));
  }

  /**
   * Sends a command to process a live stream transcoding job.
   * 
   * @param request - SendLiveTranscodeJobCommandRequest
   * @returns SendLiveTranscodeJobCommandResponse
   */
  async sendLiveTranscodeJobCommand(request: $_model.SendLiveTranscodeJobCommandRequest): Promise<$_model.SendLiveTranscodeJobCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendLiveTranscodeJobCommandWithOptions(request, runtime);
  }

  /**
   * Sends a message to the client.
   * 
   * @param request - SendMessageChatTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageChatTextResponse
   */
  async sendMessageChatTextWithOptions(request: $_model.SendMessageChatTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageChatTextResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.needArchiving)) {
      query["NeedArchiving"] = request.needArchiving;
    }

    if (!$dara.isNull(request.receiverId)) {
      query["ReceiverId"] = request.receiverId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessageChatText",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageChatTextResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageChatTextResponse({}));
  }

  /**
   * Sends a message to the client.
   * 
   * @param request - SendMessageChatTextRequest
   * @returns SendMessageChatTextResponse
   */
  async sendMessageChatText(request: $_model.SendMessageChatTextRequest): Promise<$_model.SendMessageChatTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageChatTextWithOptions(request, runtime);
  }

  /**
   * Registers a voiceprint.
   * 
   * @param tmpReq - SetAIAgentVoiceprintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAIAgentVoiceprintResponse
   */
  async setAIAgentVoiceprintWithOptions(tmpReq: $_model.SetAIAgentVoiceprintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAIAgentVoiceprintResponse> {
    tmpReq.validate();
    let request = new $_model.SetAIAgentVoiceprintShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.voiceprintId)) {
      query["VoiceprintId"] = request.voiceprintId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAIAgentVoiceprint",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAIAgentVoiceprintResponse>(await this.callApi(params, req, runtime), new $_model.SetAIAgentVoiceprintResponse({}));
  }

  /**
   * Registers a voiceprint.
   * 
   * @param request - SetAIAgentVoiceprintRequest
   * @returns SetAIAgentVoiceprintResponse
   */
  async setAIAgentVoiceprint(request: $_model.SetAIAgentVoiceprintRequest): Promise<$_model.SetAIAgentVoiceprintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAIAgentVoiceprintWithOptions(request, runtime);
  }

  /**
   * 设置内容分析搜索配置
   * 
   * @param request - SetContentAnalyzeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetContentAnalyzeConfigResponse
   */
  async setContentAnalyzeConfigWithOptions(request: $_model.SetContentAnalyzeConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetContentAnalyzeConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auto)) {
      query["Auto"] = request.auto;
    }

    if (!$dara.isNull(request.saveType)) {
      query["SaveType"] = request.saveType;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetContentAnalyzeConfig",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetContentAnalyzeConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetContentAnalyzeConfigResponse({}));
  }

  /**
   * 设置内容分析搜索配置
   * 
   * @param request - SetContentAnalyzeConfigRequest
   * @returns SetContentAnalyzeConfigResponse
   */
  async setContentAnalyzeConfig(request: $_model.SetContentAnalyzeConfigRequest): Promise<$_model.SetContentAnalyzeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setContentAnalyzeConfigWithOptions(request, runtime);
  }

  /**
   * Sets a custom template as the default template.
   * 
   * @param request - SetDefaultCustomTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultCustomTemplateResponse
   */
  async setDefaultCustomTemplateWithOptions(request: $_model.SetDefaultCustomTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultCustomTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultCustomTemplateResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultCustomTemplateResponse({}));
  }

  /**
   * Sets a custom template as the default template.
   * 
   * @param request - SetDefaultCustomTemplateRequest
   * @returns SetDefaultCustomTemplateResponse
   */
  async setDefaultCustomTemplate(request: $_model.SetDefaultCustomTemplateRequest): Promise<$_model.SetDefaultCustomTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultCustomTemplateWithOptions(request, runtime);
  }

  /**
   * 设置默认存储路径
   * 
   * @param request - SetDefaultStorageLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultStorageLocationResponse
   */
  async setDefaultStorageLocationWithOptions(request: $_model.SetDefaultStorageLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDefaultStorageLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDefaultStorageLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDefaultStorageLocationResponse>(await this.callApi(params, req, runtime), new $_model.SetDefaultStorageLocationResponse({}));
  }

  /**
   * 设置默认存储路径
   * 
   * @param request - SetDefaultStorageLocationRequest
   * @returns SetDefaultStorageLocationResponse
   */
  async setDefaultStorageLocation(request: $_model.SetDefaultStorageLocationRequest): Promise<$_model.SetDefaultStorageLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDefaultStorageLocationWithOptions(request, runtime);
  }

  /**
   * Configures a callback method for one or more events.
   * 
   * @param request - SetEventCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetEventCallbackResponse
   */
  async setEventCallbackWithOptions(request: $_model.SetEventCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetEventCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authKey)) {
      query["AuthKey"] = request.authKey;
    }

    if (!$dara.isNull(request.authSwitch)) {
      query["AuthSwitch"] = request.authSwitch;
    }

    if (!$dara.isNull(request.callbackQueueName)) {
      query["CallbackQueueName"] = request.callbackQueueName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetEventCallback",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetEventCallbackResponse>(await this.callApi(params, req, runtime), new $_model.SetEventCallbackResponse({}));
  }

  /**
   * Configures a callback method for one or more events.
   * 
   * @param request - SetEventCallbackRequest
   * @returns SetEventCallbackResponse
   */
  async setEventCallback(request: $_model.SetEventCallbackRequest): Promise<$_model.SetEventCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setEventCallbackWithOptions(request, runtime);
  }

  /**
   * Enables or disables event notifications for an AI agent and configures the callback URL and event types.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to configure event notifications for an AI agent. You can configure `EnableNotify` to enable or disable event notifications, configure `CallbackUrl` to specify a callback URL, and configure `EventTypes` to specify event types. You can also configure `Token` to specify an authentication token for enhanced security. The system returns a unique `RequestId` for subsequent tracing after a successful request.
   * 
   * @param request - SetNotifyConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetNotifyConfigResponse
   */
  async setNotifyConfigWithOptions(request: $_model.SetNotifyConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetNotifyConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.audioOssPath)) {
      query["AudioOssPath"] = request.audioOssPath;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.enableAudioRecording)) {
      query["EnableAudioRecording"] = request.enableAudioRecording;
    }

    if (!$dara.isNull(request.enableNotify)) {
      query["EnableNotify"] = request.enableNotify;
    }

    if (!$dara.isNull(request.eventTypes)) {
      query["EventTypes"] = request.eventTypes;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetNotifyConfig",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetNotifyConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetNotifyConfigResponse({}));
  }

  /**
   * Enables or disables event notifications for an AI agent and configures the callback URL and event types.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to configure event notifications for an AI agent. You can configure `EnableNotify` to enable or disable event notifications, configure `CallbackUrl` to specify a callback URL, and configure `EventTypes` to specify event types. You can also configure `Token` to specify an authentication token for enhanced security. The system returns a unique `RequestId` for subsequent tracing after a successful request.
   * 
   * @param request - SetNotifyConfigRequest
   * @returns SetNotifyConfigResponse
   */
  async setNotifyConfig(request: $_model.SetNotifyConfigRequest): Promise<$_model.SetNotifyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setNotifyConfigWithOptions(request, runtime);
  }

  /**
   * Starts an AI agent that is configured in the Intelligent Media Services (IMS) console.
   * 
   * @remarks
   * You can call this operation to start an AI agent instance for a conversation. ````````When the AI agent is started, the system returns a unique `InstanceId` for subsequent tracking and operations.
   * 
   * @param tmpReq - StartAIAgentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAIAgentInstanceResponse
   */
  async startAIAgentInstanceWithOptions(tmpReq: $_model.StartAIAgentInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAIAgentInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.StartAIAgentInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentConfig)) {
      request.agentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentConfig, "AgentConfig", "json");
    }

    if (!$dara.isNull(tmpReq.chatSyncConfig)) {
      request.chatSyncConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.chatSyncConfig, "ChatSyncConfig", "json");
    }

    if (!$dara.isNull(tmpReq.runtimeConfig)) {
      request.runtimeConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runtimeConfig, "RuntimeConfig", "json");
    }

    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.agentConfigShrink)) {
      query["AgentConfig"] = request.agentConfigShrink;
    }

    if (!$dara.isNull(request.chatSyncConfigShrink)) {
      query["ChatSyncConfig"] = request.chatSyncConfigShrink;
    }

    if (!$dara.isNull(request.runtimeConfigShrink)) {
      query["RuntimeConfig"] = request.runtimeConfigShrink;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAIAgentInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAIAgentInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartAIAgentInstanceResponse({}));
  }

  /**
   * Starts an AI agent that is configured in the Intelligent Media Services (IMS) console.
   * 
   * @remarks
   * You can call this operation to start an AI agent instance for a conversation. ````````When the AI agent is started, the system returns a unique `InstanceId` for subsequent tracking and operations.
   * 
   * @param request - StartAIAgentInstanceRequest
   * @returns StartAIAgentInstanceResponse
   */
  async startAIAgentInstance(request: $_model.StartAIAgentInstanceRequest): Promise<$_model.StartAIAgentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAIAgentInstanceWithOptions(request, runtime);
  }

  /**
   * 创建一个智能体实例，返回智能体所在的频道、频道内名称以及进入频道所需的token。
   * 
   * @param tmpReq - StartAIAgentOutboundCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAIAgentOutboundCallResponse
   */
  async startAIAgentOutboundCallWithOptions(tmpReq: $_model.StartAIAgentOutboundCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAIAgentOutboundCallResponse> {
    tmpReq.validate();
    let request = new $_model.StartAIAgentOutboundCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.imsAIAgentFreeObCall)) {
      query["ImsAIAgentFreeObCall"] = request.imsAIAgentFreeObCall;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAIAgentOutboundCall",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAIAgentOutboundCallResponse>(await this.callApi(params, req, runtime), new $_model.StartAIAgentOutboundCallResponse({}));
  }

  /**
   * 创建一个智能体实例，返回智能体所在的频道、频道内名称以及进入频道所需的token。
   * 
   * @param request - StartAIAgentOutboundCallRequest
   * @returns StartAIAgentOutboundCallResponse
   */
  async startAIAgentOutboundCall(request: $_model.StartAIAgentOutboundCallRequest): Promise<$_model.StartAIAgentOutboundCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAIAgentOutboundCallWithOptions(request, runtime);
  }

  /**
   * Initiates a workflow task for automated media processing based on a workflow template.
   * 
   * @remarks
   *   You must specify a workflow template. To create one, go to the [Intelligent Media Services (IMS)](https://ims.console.aliyun.com/ai-workflow/template) console.
   * 
   * @param request - StartAIWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAIWorkflowResponse
   */
  async startAIWorkflowWithOptions(request: $_model.StartAIWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAIWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dispatchTag)) {
      query["DispatchTag"] = request.dispatchTag;
    }

    if (!$dara.isNull(request.inputs)) {
      query["Inputs"] = request.inputs;
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
      action: "StartAIWorkflow",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAIWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.StartAIWorkflowResponse({}));
  }

  /**
   * Initiates a workflow task for automated media processing based on a workflow template.
   * 
   * @remarks
   *   You must specify a workflow template. To create one, go to the [Intelligent Media Services (IMS)](https://ims.console.aliyun.com/ai-workflow/template) console.
   * 
   * @param request - StartAIWorkflowRequest
   * @returns StartAIWorkflowResponse
   */
  async startAIWorkflow(request: $_model.StartAIWorkflowRequest): Promise<$_model.StartAIWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAIWorkflowWithOptions(request, runtime);
  }

  /**
   * Starts a channel.
   * 
   * @param request - StartChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartChannelResponse
   */
  async startChannelWithOptions(request: $_model.StartChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartChannelResponse>(await this.callApi(params, req, runtime), new $_model.StartChannelResponse({}));
  }

  /**
   * Starts a channel.
   * 
   * @param request - StartChannelRequest
   * @returns StartChannelResponse
   */
  async startChannel(request: $_model.StartChannelRequest): Promise<$_model.StartChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startChannelWithOptions(request, runtime);
  }

  /**
   * Starts a MediaLive channel.
   * 
   * @remarks
   *   You can call this operation only when the channel is idle. You cannot start a channel repeatedly.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - StartMediaLiveChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMediaLiveChannelResponse
   */
  async startMediaLiveChannelWithOptions(request: $_model.StartMediaLiveChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartMediaLiveChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMediaLiveChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMediaLiveChannelResponse>(await this.callApi(params, req, runtime), new $_model.StartMediaLiveChannelResponse({}));
  }

  /**
   * Starts a MediaLive channel.
   * 
   * @remarks
   *   You can call this operation only when the channel is idle. You cannot start a channel repeatedly.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - StartMediaLiveChannelRequest
   * @returns StartMediaLiveChannelResponse
   */
  async startMediaLiveChannel(request: $_model.StartMediaLiveChannelRequest): Promise<$_model.StartMediaLiveChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMediaLiveChannelWithOptions(request, runtime);
  }

  /**
   * 开启一个机器人实例
   * 
   * @param tmpReq - StartRtcRobotInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRtcRobotInstanceResponse
   */
  async startRtcRobotInstanceWithOptions(tmpReq: $_model.StartRtcRobotInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRtcRobotInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.StartRtcRobotInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authToken)) {
      query["AuthToken"] = request.authToken;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRtcRobotInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRtcRobotInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartRtcRobotInstanceResponse({}));
  }

  /**
   * 开启一个机器人实例
   * 
   * @param request - StartRtcRobotInstanceRequest
   * @returns StartRtcRobotInstanceResponse
   */
  async startRtcRobotInstance(request: $_model.StartRtcRobotInstanceRequest): Promise<$_model.StartRtcRobotInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRtcRobotInstanceWithOptions(request, runtime);
  }

  /**
   * Submits a workflow task. You can submit a workflow task to implement automated media processing based on a workflow template.
   * 
   * @remarks
   *   Only media assets from Intelligent Media Services (IMS) or ApsaraVideo VOD can be used as the input of a workflow.
   * *   When you submit a workflow task, you must specify a workflow template. You can create a workflow template in the [IMS console](https://ims.console.aliyun.com/settings/workflow/list) or use a preset workflow template.
   * 
   * @param request - StartWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartWorkflowResponse
   */
  async startWorkflowWithOptions(request: $_model.StartWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.skipInputVerification)) {
      query["SkipInputVerification"] = request.skipInputVerification;
    }

    if (!$dara.isNull(request.taskInput)) {
      query["TaskInput"] = request.taskInput;
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
      action: "StartWorkflow",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.StartWorkflowResponse({}));
  }

  /**
   * Submits a workflow task. You can submit a workflow task to implement automated media processing based on a workflow template.
   * 
   * @remarks
   *   Only media assets from Intelligent Media Services (IMS) or ApsaraVideo VOD can be used as the input of a workflow.
   * *   When you submit a workflow task, you must specify a workflow template. You can create a workflow template in the [IMS console](https://ims.console.aliyun.com/settings/workflow/list) or use a preset workflow template.
   * 
   * @param request - StartWorkflowRequest
   * @returns StartWorkflowResponse
   */
  async startWorkflow(request: $_model.StartWorkflowRequest): Promise<$_model.StartWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startWorkflowWithOptions(request, runtime);
  }

  /**
   * Stops an AI agent instance.
   * 
   * @remarks
   *   When you no longer need an AI agent to participate in a conversation or task, you can call this operation to stop the running agent and release relevant resources.****
   * *   You must specify the unique ID of the AI agent that you want to stop by using InstanceId.****
   * *   ****
   * 
   * @param request - StopAIAgentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAIAgentInstanceResponse
   */
  async stopAIAgentInstanceWithOptions(request: $_model.StopAIAgentInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAIAgentInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAIAgentInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAIAgentInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopAIAgentInstanceResponse({}));
  }

  /**
   * Stops an AI agent instance.
   * 
   * @remarks
   *   When you no longer need an AI agent to participate in a conversation or task, you can call this operation to stop the running agent and release relevant resources.****
   * *   You must specify the unique ID of the AI agent that you want to stop by using InstanceId.****
   * *   ****
   * 
   * @param request - StopAIAgentInstanceRequest
   * @returns StopAIAgentInstanceResponse
   */
  async stopAIAgentInstance(request: $_model.StopAIAgentInstanceRequest): Promise<$_model.StopAIAgentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAIAgentInstanceWithOptions(request, runtime);
  }

  /**
   * Manually stops a workflow task.
   * 
   * @remarks
   * This operation is only used to stop workflow tasks in real-time scenarios such as live streaming and RTC. It cannot be used to stop tasks in offline scenarios.
   * 
   * @param request - StopAIWorkflowTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAIWorkflowTaskResponse
   */
  async stopAIWorkflowTaskWithOptions(request: $_model.StopAIWorkflowTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAIWorkflowTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAIWorkflowTask",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAIWorkflowTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopAIWorkflowTaskResponse({}));
  }

  /**
   * Manually stops a workflow task.
   * 
   * @remarks
   * This operation is only used to stop workflow tasks in real-time scenarios such as live streaming and RTC. It cannot be used to stop tasks in offline scenarios.
   * 
   * @param request - StopAIWorkflowTaskRequest
   * @returns StopAIWorkflowTaskResponse
   */
  async stopAIWorkflowTask(request: $_model.StopAIWorkflowTaskRequest): Promise<$_model.StopAIWorkflowTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAIWorkflowTaskWithOptions(request, runtime);
  }

  /**
   * Stops a MediaWeaver channel.
   * 
   * @param request - StopChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopChannelResponse
   */
  async stopChannelWithOptions(request: $_model.StopChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopChannelResponse>(await this.callApi(params, req, runtime), new $_model.StopChannelResponse({}));
  }

  /**
   * Stops a MediaWeaver channel.
   * 
   * @param request - StopChannelRequest
   * @returns StopChannelResponse
   */
  async stopChannel(request: $_model.StopChannelRequest): Promise<$_model.StopChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopChannelWithOptions(request, runtime);
  }

  /**
   * Stops a MediaLive channel.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - StopMediaLiveChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMediaLiveChannelResponse
   */
  async stopMediaLiveChannelWithOptions(request: $_model.StopMediaLiveChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopMediaLiveChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMediaLiveChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopMediaLiveChannelResponse>(await this.callApi(params, req, runtime), new $_model.StopMediaLiveChannelResponse({}));
  }

  /**
   * Stops a MediaLive channel.
   * 
   * @remarks
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - StopMediaLiveChannelRequest
   * @returns StopMediaLiveChannelResponse
   */
  async stopMediaLiveChannel(request: $_model.StopMediaLiveChannelRequest): Promise<$_model.StopMediaLiveChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopMediaLiveChannelWithOptions(request, runtime);
  }

  /**
   * 停止一个机器人实例
   * 
   * @param request - StopRtcRobotInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRtcRobotInstanceResponse
   */
  async stopRtcRobotInstanceWithOptions(request: $_model.StopRtcRobotInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRtcRobotInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRtcRobotInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRtcRobotInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopRtcRobotInstanceResponse({}));
  }

  /**
   * 停止一个机器人实例
   * 
   * @param request - StopRtcRobotInstanceRequest
   * @returns StopRtcRobotInstanceResponse
   */
  async stopRtcRobotInstance(request: $_model.StopRtcRobotInstanceRequest): Promise<$_model.StopRtcRobotInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRtcRobotInstanceWithOptions(request, runtime);
  }

  /**
   * Submits a video to a specified AI agent for content moderation. This operation supports video input from OSS and delivers the results asynchronously via callbacks. You can define custom frame-capturing policies and moderation prompts.
   * 
   * @remarks
   * Call SubmitAIAgentVideoAuditTask to submit a video moderation task with configurations such as a video URL, frame-capturing policies, and review interval. The system returns a unique JobId for tracking. When the task is complete, the service will push the results, including the moderation status and AI-generated analysis, to the configured callback URL. Only OSS URLs are supported as input. The underlying multi-modal large language model (MLLM) only supports interaction via the non-streaming OpenAI protocol.
   * 
   * @param tmpReq - SubmitAIAgentVideoAuditTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAIAgentVideoAuditTaskResponse
   */
  async submitAIAgentVideoAuditTaskWithOptions(tmpReq: $_model.SubmitAIAgentVideoAuditTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAIAgentVideoAuditTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitAIAgentVideoAuditTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callbackConfig)) {
      request.callbackConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callbackConfig, "CallbackConfig", "json");
    }

    if (!$dara.isNull(tmpReq.capturePolicies)) {
      request.capturePoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.capturePolicies, "CapturePolicies", "json");
    }

    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.AIAgentId)) {
      query["AIAgentId"] = request.AIAgentId;
    }

    if (!$dara.isNull(request.auditInterval)) {
      query["AuditInterval"] = request.auditInterval;
    }

    if (!$dara.isNull(request.callbackConfigShrink)) {
      query["CallbackConfig"] = request.callbackConfigShrink;
    }

    if (!$dara.isNull(request.capturePoliciesShrink)) {
      query["CapturePolicies"] = request.capturePoliciesShrink;
    }

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAIAgentVideoAuditTask",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAIAgentVideoAuditTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAIAgentVideoAuditTaskResponse({}));
  }

  /**
   * Submits a video to a specified AI agent for content moderation. This operation supports video input from OSS and delivers the results asynchronously via callbacks. You can define custom frame-capturing policies and moderation prompts.
   * 
   * @remarks
   * Call SubmitAIAgentVideoAuditTask to submit a video moderation task with configurations such as a video URL, frame-capturing policies, and review interval. The system returns a unique JobId for tracking. When the task is complete, the service will push the results, including the moderation status and AI-generated analysis, to the configured callback URL. Only OSS URLs are supported as input. The underlying multi-modal large language model (MLLM) only supports interaction via the non-streaming OpenAI protocol.
   * 
   * @param request - SubmitAIAgentVideoAuditTaskRequest
   * @returns SubmitAIAgentVideoAuditTaskResponse
   */
  async submitAIAgentVideoAuditTask(request: $_model.SubmitAIAgentVideoAuditTaskRequest): Promise<$_model.SubmitAIAgentVideoAuditTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAIAgentVideoAuditTaskWithOptions(request, runtime);
  }

  /**
   * Submits an automatic speech recognition (ASR) job to extract the start and end time and the corresponding text information of a speech in a video.
   * 
   * @param request - SubmitASRJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitASRJobResponse
   */
  async submitASRJobWithOptions(request: $_model.SubmitASRJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitASRJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.editingConfig)) {
      query["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputFile)) {
      query["InputFile"] = request.inputFile;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
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
      action: "SubmitASRJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitASRJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitASRJobResponse({}));
  }

  /**
   * Submits an automatic speech recognition (ASR) job to extract the start and end time and the corresponding text information of a speech in a video.
   * 
   * @param request - SubmitASRJobRequest
   * @returns SubmitASRJobResponse
   */
  async submitASRJob(request: $_model.SubmitASRJobRequest): Promise<$_model.SubmitASRJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitASRJobWithOptions(request, runtime);
  }

  /**
   * Submits an audio production job that converts text into an audio file.
   * 
   * @param request - SubmitAudioProduceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAudioProduceJobResponse
   */
  async submitAudioProduceJobWithOptions(request: $_model.SubmitAudioProduceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAudioProduceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.editingConfig)) {
      query["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      query["InputConfig"] = request.inputConfig;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
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
      action: "SubmitAudioProduceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAudioProduceJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAudioProduceJobResponse({}));
  }

  /**
   * Submits an audio production job that converts text into an audio file.
   * 
   * @param request - SubmitAudioProduceJobRequest
   * @returns SubmitAudioProduceJobResponse
   */
  async submitAudioProduceJob(request: $_model.SubmitAudioProduceJobRequest): Promise<$_model.SubmitAudioProduceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAudioProduceJobWithOptions(request, runtime);
  }

  /**
   * Submits a digital human training job. You can call this operation to submit a job the first time or submit a job again with updated parameters if the training failed.
   * 
   * @param request - SubmitAvatarTrainingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAvatarTrainingJobResponse
   */
  async submitAvatarTrainingJobWithOptions(request: $_model.SubmitAvatarTrainingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAvatarTrainingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAvatarTrainingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAvatarTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAvatarTrainingJobResponse({}));
  }

  /**
   * Submits a digital human training job. You can call this operation to submit a job the first time or submit a job again with updated parameters if the training failed.
   * 
   * @param request - SubmitAvatarTrainingJobRequest
   * @returns SubmitAvatarTrainingJobResponse
   */
  async submitAvatarTrainingJob(request: $_model.SubmitAvatarTrainingJobRequest): Promise<$_model.SubmitAvatarTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAvatarTrainingJobWithOptions(request, runtime);
  }

  /**
   * Submits a task to render a video of an avatar speaking the content of the specified text or a human voice audio file.
   * 
   * @remarks
   * - The input supports only text or a human voice audio file in MP3 or WAV format.
   * - The output supports MP4 and WebM formats. For the MP4 format, the task produces two videos: one with the avatar on a green screen background and a separate alpha mask video. This is ideal for post-production. For the WebM format, the task produces a single video with a transparent alpha channel, suitable for direct web front-end display. Rendering WebM is slower due to encoding complexity.
   * - The final output includes sentence-level timestamps, which are useful for subsequent video editing.
   * 
   * @param request - SubmitAvatarVideoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAvatarVideoJobResponse
   */
  async submitAvatarVideoJobWithOptions(request: $_model.SubmitAvatarVideoJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAvatarVideoJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.editingConfig)) {
      query["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      query["InputConfig"] = request.inputConfig;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
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
      action: "SubmitAvatarVideoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAvatarVideoJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAvatarVideoJobResponse({}));
  }

  /**
   * Submits a task to render a video of an avatar speaking the content of the specified text or a human voice audio file.
   * 
   * @remarks
   * - The input supports only text or a human voice audio file in MP3 or WAV format.
   * - The output supports MP4 and WebM formats. For the MP4 format, the task produces two videos: one with the avatar on a green screen background and a separate alpha mask video. This is ideal for post-production. For the WebM format, the task produces a single video with a transparent alpha channel, suitable for direct web front-end display. Rendering WebM is slower due to encoding complexity.
   * - The final output includes sentence-level timestamps, which are useful for subsequent video editing.
   * 
   * @param request - SubmitAvatarVideoJobRequest
   * @returns SubmitAvatarVideoJobResponse
   */
  async submitAvatarVideoJob(request: $_model.SubmitAvatarVideoJobRequest): Promise<$_model.SubmitAvatarVideoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAvatarVideoJobWithOptions(request, runtime);
  }

  /**
   * Submits a quick video production job that intelligently edits multiple video, audio, and image assets to generate multiple videos at a time.
   * 
   * @param request - SubmitBatchMediaProducingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitBatchMediaProducingJobResponse
   */
  async submitBatchMediaProducingJobWithOptions(request: $_model.SubmitBatchMediaProducingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitBatchMediaProducingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.editingConfig)) {
      body["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitBatchMediaProducingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitBatchMediaProducingJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitBatchMediaProducingJobResponse({}));
  }

  /**
   * Submits a quick video production job that intelligently edits multiple video, audio, and image assets to generate multiple videos at a time.
   * 
   * @param request - SubmitBatchMediaProducingJobRequest
   * @returns SubmitBatchMediaProducingJobResponse
   */
  async submitBatchMediaProducingJob(request: $_model.SubmitBatchMediaProducingJobRequest): Promise<$_model.SubmitBatchMediaProducingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitBatchMediaProducingJobWithOptions(request, runtime);
  }

  /**
   * Submits a job that extracts a copyright watermark.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param tmpReq - SubmitCopyrightExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCopyrightExtractJobResponse
   */
  async submitCopyrightExtractJobWithOptions(tmpReq: $_model.SubmitCopyrightExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCopyrightExtractJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitCopyrightExtractJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCopyrightExtractJob",
      version: "2020-11-09",
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
   * Submits a job that extracts a copyright watermark.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - SubmitCopyrightExtractJobRequest
   * @returns SubmitCopyrightExtractJobResponse
   */
  async submitCopyrightExtractJob(request: $_model.SubmitCopyrightExtractJobRequest): Promise<$_model.SubmitCopyrightExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCopyrightExtractJobWithOptions(request, runtime);
  }

  /**
   * Submits a job for adding a copyright watermark to a video.
   * 
   * @remarks
   *   You can call this operation to add a copyright watermark to a video that lasts at least 3 minutes. If the video is too short, the call may fail, or no output may be returned. To add a copyright watermark to a video shorter than 3 minutes, specify the Params parameter to change the algorithm.
   * *   Each API call supports processing only one video.
   * *   This API is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param tmpReq - SubmitCopyrightJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCopyrightJobResponse
   */
  async submitCopyrightJobWithOptions(tmpReq: $_model.SubmitCopyrightJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCopyrightJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitCopyrightJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
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

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCopyrightJob",
      version: "2020-11-09",
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
   * Submits a job for adding a copyright watermark to a video.
   * 
   * @remarks
   *   You can call this operation to add a copyright watermark to a video that lasts at least 3 minutes. If the video is too short, the call may fail, or no output may be returned. To add a copyright watermark to a video shorter than 3 minutes, specify the Params parameter to change the algorithm.
   * *   Each API call supports processing only one video.
   * *   This API is supported only in the China (Shanghai) and China (Beijing) regions.
   * 
   * @param request - SubmitCopyrightJobRequest
   * @returns SubmitCopyrightJobResponse
   */
  async submitCopyrightJob(request: $_model.SubmitCopyrightJobRequest): Promise<$_model.SubmitCopyrightJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCopyrightJobWithOptions(request, runtime);
  }

  /**
   * Submits a human voice cloning job. The value of VoiceId must be the one used during audio check. The system uses this ID to find the cached audio file for training. After you call this operation, the JobId is returned. The training process is asynchronous. During training, you can call the GetCustomizedVoiceJob operation to query information such as the job state.
   * 
   * @param request - SubmitCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCustomizedVoiceJobResponse
   */
  async submitCustomizedVoiceJobWithOptions(request: $_model.SubmitCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.demoAudioMediaURL)) {
      query["DemoAudioMediaURL"] = request.demoAudioMediaURL;
    }

    if (!$dara.isNull(request.voiceId)) {
      query["VoiceId"] = request.voiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCustomizedVoiceJobResponse({}));
  }

  /**
   * Submits a human voice cloning job. The value of VoiceId must be the one used during audio check. The system uses this ID to find the cached audio file for training. After you call this operation, the JobId is returned. The training process is asynchronous. During training, you can call the GetCustomizedVoiceJob operation to query information such as the job state.
   * 
   * @param request - SubmitCustomizedVoiceJobRequest
   * @returns SubmitCustomizedVoiceJobResponse
   */
  async submitCustomizedVoiceJob(request: $_model.SubmitCustomizedVoiceJobRequest): Promise<$_model.SubmitCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * Submits a media fingerprint analysis job.
   * 
   * @remarks
   *   SubmitDNAJob is an asynchronous operation. After a request is sent, the system returns a request ID and a job ID and runs the task in the background.
   * *   You can call this operation only in the China (Beijing), China (Hangzhou), and China (Shanghai) regions.
   * *   You can submit a text fingerprint analysis job only in the China (Shanghai) region.
   * 
   * @param tmpReq - SubmitDNAJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDNAJobResponse
   */
  async submitDNAJobWithOptions(tmpReq: $_model.SubmitDNAJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDNAJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitDNAJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.DBId)) {
      query["DBId"] = request.DBId;
    }

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
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

    if (!$dara.isNull(request.primaryKey)) {
      query["PrimaryKey"] = request.primaryKey;
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

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDNAJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDNAJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDNAJobResponse({}));
  }

  /**
   * Submits a media fingerprint analysis job.
   * 
   * @remarks
   *   SubmitDNAJob is an asynchronous operation. After a request is sent, the system returns a request ID and a job ID and runs the task in the background.
   * *   You can call this operation only in the China (Beijing), China (Hangzhou), and China (Shanghai) regions.
   * *   You can submit a text fingerprint analysis job only in the China (Shanghai) region.
   * 
   * @param request - SubmitDNAJobRequest
   * @returns SubmitDNAJobResponse
   */
  async submitDNAJob(request: $_model.SubmitDNAJobRequest): Promise<$_model.SubmitDNAJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDNAJobWithOptions(request, runtime);
  }

  /**
   * Generates animated charts based on Excel datasheets, such as line, pie, and bar charts. You can modify the line color and font.
   * 
   * @remarks
   * This feature is available only in the China (Shanghai) region.
   * *   You can add a title, subtitle, data source, and unit to a chart and specify the font and font size. For supported fonts, see [Fonts](https://help.aliyun.com/document_detail/449567.html).
   * *   This feature provides five styles of animated charts: normal, mystery, lively, business, and green.
   * *   You can set the background color or image.
   * *   You can set the animation duration, size, and bitrate.
   * Examples
   * *   Line chart: [Sample datasheet](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/line.xlsx), [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/line.mp4)
   * *   Bar chart: [Sample datasheet](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/histgram.xlsx), [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/histgram.mp4)
   * *   Pie chart: [Sample datasheet](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/pie.xlsx), [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/pie.mp4)
   * *   Normal: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Normal.mp4)
   * *   Mystery: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Mystery.mp4)
   * *   Lively: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Lively.mp4)
   * *   Business: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Business.mp4)
   * *   Green: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Green.mp4)
   * 
   * @param request - SubmitDynamicChartJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDynamicChartJobResponse
   */
  async submitDynamicChartJobWithOptions(request: $_model.SubmitDynamicChartJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDynamicChartJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.axisParams)) {
      query["AxisParams"] = request.axisParams;
    }

    if (!$dara.isNull(request.background)) {
      query["Background"] = request.background;
    }

    if (!$dara.isNull(request.chartConfig)) {
      query["ChartConfig"] = request.chartConfig;
    }

    if (!$dara.isNull(request.chartTitle)) {
      query["ChartTitle"] = request.chartTitle;
    }

    if (!$dara.isNull(request.chartType)) {
      query["ChartType"] = request.chartType;
    }

    if (!$dara.isNull(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.subtitle)) {
      query["Subtitle"] = request.subtitle;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.unit)) {
      query["Unit"] = request.unit;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDynamicChartJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDynamicChartJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDynamicChartJobResponse({}));
  }

  /**
   * Generates animated charts based on Excel datasheets, such as line, pie, and bar charts. You can modify the line color and font.
   * 
   * @remarks
   * This feature is available only in the China (Shanghai) region.
   * *   You can add a title, subtitle, data source, and unit to a chart and specify the font and font size. For supported fonts, see [Fonts](https://help.aliyun.com/document_detail/449567.html).
   * *   This feature provides five styles of animated charts: normal, mystery, lively, business, and green.
   * *   You can set the background color or image.
   * *   You can set the animation duration, size, and bitrate.
   * Examples
   * *   Line chart: [Sample datasheet](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/line.xlsx), [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/line.mp4)
   * *   Bar chart: [Sample datasheet](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/histgram.xlsx), [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/histgram.mp4)
   * *   Pie chart: [Sample datasheet](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/pie.xlsx), [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/pie.mp4)
   * *   Normal: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Normal.mp4)
   * *   Mystery: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Mystery.mp4)
   * *   Lively: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Lively.mp4)
   * *   Business: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Business.mp4)
   * *   Green: [Effect](https://ice-public-media.oss-cn-shanghai.aliyuncs.com/smart/dynamicChart/Green.mp4)
   * 
   * @param request - SubmitDynamicChartJobRequest
   * @returns SubmitDynamicChartJobResponse
   */
  async submitDynamicChartJob(request: $_model.SubmitDynamicChartJobRequest): Promise<$_model.SubmitDynamicChartJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDynamicChartJobWithOptions(request, runtime);
  }

  /**
   * Submits an image animation job.
   * 
   * @param tmpReq - SubmitDynamicImageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDynamicImageJobResponse
   */
  async submitDynamicImageJobWithOptions(tmpReq: $_model.SubmitDynamicImageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDynamicImageJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitDynamicImageJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDynamicImageJob",
      version: "2020-11-09",
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
   * Submits an image animation job.
   * 
   * @param request - SubmitDynamicImageJobRequest
   * @returns SubmitDynamicImageJobResponse
   */
  async submitDynamicImageJob(request: $_model.SubmitDynamicImageJobRequest): Promise<$_model.SubmitDynamicImageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDynamicImageJobWithOptions(request, runtime);
  }

  /**
   * Submits a highlight extraction task.
   * 
   * @param request - SubmitHighlightExtractionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHighlightExtractionJobResponse
   */
  async submitHighlightExtractionJobWithOptions(request: $_model.SubmitHighlightExtractionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitHighlightExtractionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHighlightExtractionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitHighlightExtractionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitHighlightExtractionJobResponse({}));
  }

  /**
   * Submits a highlight extraction task.
   * 
   * @param request - SubmitHighlightExtractionJobRequest
   * @returns SubmitHighlightExtractionJobResponse
   */
  async submitHighlightExtractionJob(request: $_model.SubmitHighlightExtractionJobRequest): Promise<$_model.SubmitHighlightExtractionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitHighlightExtractionJobWithOptions(request, runtime);
  }

  /**
   * Submits an intelligent production job.
   * 
   * @param tmpReq - SubmitIProductionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIProductionJobResponse
   */
  async submitIProductionJobWithOptions(tmpReq: $_model.SubmitIProductionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIProductionJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitIProductionJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
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
      action: "SubmitIProductionJob",
      version: "2020-11-09",
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
   * Submits an intelligent production job.
   * 
   * @param request - SubmitIProductionJobRequest
   * @returns SubmitIProductionJobResponse
   */
  async submitIProductionJob(request: $_model.SubmitIProductionJobRequest): Promise<$_model.SubmitIProductionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitIProductionJobWithOptions(request, runtime);
  }

  /**
   * Submits a live editing job to merge one or more live stream clips into one video. After a live editing job is submitted, the job is queued in the background for asynchronous processing. You can call the GeLiveEditingJob operation to query the state of the job based on the job ID. You can also call the GetMediaInfo operation to query the information about the generated media asset based on the media asset ID.
   * 
   * @remarks
   * Live editing is supported for live streams that are recorded and stored in Object Storage Service (OSS) and ApsaraVideo VOD. If multiple live streams are involved in a single job, only those recorded within the same application are supported for mixed editing. The streams must all be recorded either in OSS or ApsaraVideo VOD.
   * 
   * @param request - SubmitLiveEditingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitLiveEditingJobResponse
   */
  async submitLiveEditingJobWithOptions(request: $_model.SubmitLiveEditingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitLiveEditingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clips)) {
      query["Clips"] = request.clips;
    }

    if (!$dara.isNull(request.liveStreamConfig)) {
      query["LiveStreamConfig"] = request.liveStreamConfig;
    }

    if (!$dara.isNull(request.mediaProduceConfig)) {
      query["MediaProduceConfig"] = request.mediaProduceConfig;
    }

    if (!$dara.isNull(request.outputMediaConfig)) {
      query["OutputMediaConfig"] = request.outputMediaConfig;
    }

    if (!$dara.isNull(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitLiveEditingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitLiveEditingJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitLiveEditingJobResponse({}));
  }

  /**
   * Submits a live editing job to merge one or more live stream clips into one video. After a live editing job is submitted, the job is queued in the background for asynchronous processing. You can call the GeLiveEditingJob operation to query the state of the job based on the job ID. You can also call the GetMediaInfo operation to query the information about the generated media asset based on the media asset ID.
   * 
   * @remarks
   * Live editing is supported for live streams that are recorded and stored in Object Storage Service (OSS) and ApsaraVideo VOD. If multiple live streams are involved in a single job, only those recorded within the same application are supported for mixed editing. The streams must all be recorded either in OSS or ApsaraVideo VOD.
   * 
   * @param request - SubmitLiveEditingJobRequest
   * @returns SubmitLiveEditingJobResponse
   */
  async submitLiveEditingJob(request: $_model.SubmitLiveEditingJobRequest): Promise<$_model.SubmitLiveEditingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitLiveEditingJobWithOptions(request, runtime);
  }

  /**
   * Submits a live stream recording job.
   * 
   * @remarks
   * You can call this operation to record live streams of ApsaraVideo Live or third-party Real-Time Messaging Protocol (RTMP) live streams. We recommend that you ingest a stream before you call this operation to submit a recording job. If no stream is pulled from the streaming URL, the job attempts to pull a stream for 3 minutes. If the attempt times out, the recording service stops.
   * Before you submit a recording job, you must prepare an Object Storage Service (OSS) or ApsaraVideo VOD bucket. We recommend that you use a storage address configured in Intelligent Media Services (IMS) to facilitate the management and processing of generated recording files.
   * If the preset recording template does not meet your requirements, you can create a custom recording template.
   * 
   * @param tmpReq - SubmitLiveRecordJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitLiveRecordJobResponse
   */
  async submitLiveRecordJobWithOptions(tmpReq: $_model.SubmitLiveRecordJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitLiveRecordJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitLiveRecordJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordOutput)) {
      request.recordOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordOutput, "RecordOutput", "json");
    }

    if (!$dara.isNull(tmpReq.streamInput)) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamInput, "StreamInput", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      body["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.recordOutputShrink)) {
      body["RecordOutput"] = request.recordOutputShrink;
    }

    if (!$dara.isNull(request.streamInputShrink)) {
      body["StreamInput"] = request.streamInputShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitLiveRecordJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitLiveRecordJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitLiveRecordJobResponse({}));
  }

  /**
   * Submits a live stream recording job.
   * 
   * @remarks
   * You can call this operation to record live streams of ApsaraVideo Live or third-party Real-Time Messaging Protocol (RTMP) live streams. We recommend that you ingest a stream before you call this operation to submit a recording job. If no stream is pulled from the streaming URL, the job attempts to pull a stream for 3 minutes. If the attempt times out, the recording service stops.
   * Before you submit a recording job, you must prepare an Object Storage Service (OSS) or ApsaraVideo VOD bucket. We recommend that you use a storage address configured in Intelligent Media Services (IMS) to facilitate the management and processing of generated recording files.
   * If the preset recording template does not meet your requirements, you can create a custom recording template.
   * 
   * @param request - SubmitLiveRecordJobRequest
   * @returns SubmitLiveRecordJobResponse
   */
  async submitLiveRecordJob(request: $_model.SubmitLiveRecordJobRequest): Promise<$_model.SubmitLiveRecordJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitLiveRecordJobWithOptions(request, runtime);
  }

  /**
   * Submits a live stream snapshot job. If the job is submitted during stream ingest, it automatically starts in asynchronous mode. Otherwise, it does not start.
   * 
   * @param tmpReq - SubmitLiveSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitLiveSnapshotJobResponse
   */
  async submitLiveSnapshotJobWithOptions(tmpReq: $_model.SubmitLiveSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitLiveSnapshotJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitLiveSnapshotJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.snapshotOutput)) {
      request.snapshotOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.snapshotOutput, "SnapshotOutput", "json");
    }

    if (!$dara.isNull(tmpReq.streamInput)) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamInput, "StreamInput", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callbackUrl)) {
      body["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.jobName)) {
      body["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.snapshotOutputShrink)) {
      body["SnapshotOutput"] = request.snapshotOutputShrink;
    }

    if (!$dara.isNull(request.streamInputShrink)) {
      body["StreamInput"] = request.streamInputShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitLiveSnapshotJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitLiveSnapshotJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitLiveSnapshotJobResponse({}));
  }

  /**
   * Submits a live stream snapshot job. If the job is submitted during stream ingest, it automatically starts in asynchronous mode. Otherwise, it does not start.
   * 
   * @param request - SubmitLiveSnapshotJobRequest
   * @returns SubmitLiveSnapshotJobResponse
   */
  async submitLiveSnapshotJob(request: $_model.SubmitLiveSnapshotJobRequest): Promise<$_model.SubmitLiveSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitLiveSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Submits a live stream transcoding job.
   * 
   * @remarks
   *   When you submit a transcoding job that immediately takes effect, make sure that the input stream can be streamed.
   * *   When you submit a timed transcoding job, make sure that the input stream can be streamed before the specified time.
   * 
   * @param tmpReq - SubmitLiveTranscodeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitLiveTranscodeJobResponse
   */
  async submitLiveTranscodeJobWithOptions(tmpReq: $_model.SubmitLiveTranscodeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitLiveTranscodeJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitLiveTranscodeJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamInput)) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamInput, "StreamInput", "json");
    }

    if (!$dara.isNull(tmpReq.timedConfig)) {
      request.timedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timedConfig, "TimedConfig", "json");
    }

    if (!$dara.isNull(tmpReq.transcodeOutput)) {
      request.transcodeOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transcodeOutput, "TranscodeOutput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.startMode)) {
      query["StartMode"] = request.startMode;
    }

    if (!$dara.isNull(request.streamInputShrink)) {
      query["StreamInput"] = request.streamInputShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.timedConfigShrink)) {
      query["TimedConfig"] = request.timedConfigShrink;
    }

    if (!$dara.isNull(request.transcodeOutputShrink)) {
      query["TranscodeOutput"] = request.transcodeOutputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitLiveTranscodeJobResponse({}));
  }

  /**
   * Submits a live stream transcoding job.
   * 
   * @remarks
   *   When you submit a transcoding job that immediately takes effect, make sure that the input stream can be streamed.
   * *   When you submit a timed transcoding job, make sure that the input stream can be streamed before the specified time.
   * 
   * @param request - SubmitLiveTranscodeJobRequest
   * @returns SubmitLiveTranscodeJobResponse
   */
  async submitLiveTranscodeJob(request: $_model.SubmitLiveTranscodeJobRequest): Promise<$_model.SubmitLiveTranscodeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitLiveTranscodeJobWithOptions(request, runtime);
  }

  /**
   * Submits a structural analysis job for a media asset. For example, you can submit a job to analyze the speaker, translate the video, and obtain the paragraph summary.
   * 
   * @param request - SubmitMediaAiAnalysisJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaAiAnalysisJobResponse
   */
  async submitMediaAiAnalysisJobWithOptions(request: $_model.SubmitMediaAiAnalysisJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaAiAnalysisJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.analysisParams)) {
      query["AnalysisParams"] = request.analysisParams;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaAiAnalysisJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaAiAnalysisJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaAiAnalysisJobResponse({}));
  }

  /**
   * Submits a structural analysis job for a media asset. For example, you can submit a job to analyze the speaker, translate the video, and obtain the paragraph summary.
   * 
   * @param request - SubmitMediaAiAnalysisJobRequest
   * @returns SubmitMediaAiAnalysisJobResponse
   */
  async submitMediaAiAnalysisJob(request: $_model.SubmitMediaAiAnalysisJobRequest): Promise<$_model.SubmitMediaAiAnalysisJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaAiAnalysisJobWithOptions(request, runtime);
  }

  /**
   * Submits a content moderation job.
   * 
   * @remarks
   * The job that you submit by calling this operation is run in asynchronous mode. The job is added to an ApsaraVideo Media Processing (MPS) queue to be scheduled and run. You can call the [QueryMediaCensorJobDetail](https://help.aliyun.com/document_detail/444847.html) operation or configure an asynchronous notification to obtain the job results.
   * 
   * @param tmpReq - SubmitMediaCensorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaCensorJobResponse
   */
  async submitMediaCensorJobWithOptions(tmpReq: $_model.SubmitMediaCensorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaCensorJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitMediaCensorJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

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

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
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
      action: "SubmitMediaCensorJob",
      version: "2020-11-09",
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
   * The job that you submit by calling this operation is run in asynchronous mode. The job is added to an ApsaraVideo Media Processing (MPS) queue to be scheduled and run. You can call the [QueryMediaCensorJobDetail](https://help.aliyun.com/document_detail/444847.html) operation or configure an asynchronous notification to obtain the job results.
   * 
   * @param request - SubmitMediaCensorJobRequest
   * @returns SubmitMediaCensorJobResponse
   */
  async submitMediaCensorJob(request: $_model.SubmitMediaCensorJobRequest): Promise<$_model.SubmitMediaCensorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaCensorJobWithOptions(request, runtime);
  }

  /**
   * Submits a transcoding task.
   * 
   * @param request - SubmitMediaConvertJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaConvertJobResponse
   */
  async submitMediaConvertJobWithOptions(request: $_model.SubmitMediaConvertJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaConvertJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaConvertJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaConvertJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaConvertJobResponse({}));
  }

  /**
   * Submits a transcoding task.
   * 
   * @param request - SubmitMediaConvertJobRequest
   * @returns SubmitMediaConvertJobResponse
   */
  async submitMediaConvertJob(request: $_model.SubmitMediaConvertJobRequest): Promise<$_model.SubmitMediaConvertJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaConvertJobWithOptions(request, runtime);
  }

  /**
   * Submits a media information analysis job in asynchronous mode.
   * 
   * @remarks
   * You can call this operation to analyze an input media file by using a callback mechanism or initiating subsequent queries. This operation is suitable for scenarios in which real-time performance is less critical and high concurrency is expected.
   * 
   * @param tmpReq - SubmitMediaInfoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaInfoJobResponse
   */
  async submitMediaInfoJobWithOptions(tmpReq: $_model.SubmitMediaInfoJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaInfoJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitMediaInfoJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaInfoJob",
      version: "2020-11-09",
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
   * Submits a media information analysis job in asynchronous mode.
   * 
   * @remarks
   * You can call this operation to analyze an input media file by using a callback mechanism or initiating subsequent queries. This operation is suitable for scenarios in which real-time performance is less critical and high concurrency is expected.
   * 
   * @param request - SubmitMediaInfoJobRequest
   * @returns SubmitMediaInfoJobResponse
   */
  async submitMediaInfoJob(request: $_model.SubmitMediaInfoJobRequest): Promise<$_model.SubmitMediaInfoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaInfoJobWithOptions(request, runtime);
  }

  /**
   * Submits a media editing and production job. If you need to perform any form of post-production such as editing and production on video or audio materials, you can call this operation to automate the process.
   * 
   * @remarks
   *   This operation returns only the submission result of a media editing and production job. When the submission result is returned, the job may still be in progress. After a media editing and production job is submitted, the job is queued in the background for asynchronous processing.
   * *   The materials referenced in the timeline of an online editing project can be media assets in the media asset library or Object Storage Service (OSS) objects. External URLs or Alibaba Cloud Content Delivery Network (CDN) URLs are not supported. To use an OSS object as a material, you must set MediaUrl to an OSS URL, such as https://your-bucket.oss-region-name.aliyuncs.com/your-object.ext.
   * *   After the production is complete, the output file is automatically registered as a media asset. The media asset first needs to be analyzed. After the media asset is analyzed, you can query the duration and resolution information based on the media asset ID.
   * ## [](#)Limits
   * *   The throttling threshold of this operation is 30 queries per second (QPS).
   *     **
   *     **Note** If the threshold is exceeded, a "Throttling.User" error is returned when you submit an editing job. For more information about how to resolve this issue, see the [FAQ](https://help.aliyun.com/document_detail/453484.html).
   * *   You can create up to 100 video tracks, 100 image tracks, and 100 subtitle tracks in a project.
   * *   The total size of material files cannot exceed 1 TB.
   * *   The OSS buckets in which the materials reside and where the output media assets are stored must be in the same region as the region in which Intelligent Media Services (IMS) is activated.
   * *   An output video must meet the following requirements:
   *     *   Both the width and height must be at least 128 pixels.
   *     *   Both the width and height cannot exceed 4,096 pixels.
   *     *   The shorter side of the video cannot exceed 2,160 pixels.
   * 
   * @param request - SubmitMediaProducingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaProducingJobResponse
   */
  async submitMediaProducingJobWithOptions(request: $_model.SubmitMediaProducingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaProducingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clipsParam)) {
      query["ClipsParam"] = request.clipsParam;
    }

    if (!$dara.isNull(request.editingProduceConfig)) {
      query["EditingProduceConfig"] = request.editingProduceConfig;
    }

    if (!$dara.isNull(request.mediaMetadata)) {
      query["MediaMetadata"] = request.mediaMetadata;
    }

    if (!$dara.isNull(request.outputMediaConfig)) {
      query["OutputMediaConfig"] = request.outputMediaConfig;
    }

    if (!$dara.isNull(request.outputMediaTarget)) {
      query["OutputMediaTarget"] = request.outputMediaTarget;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectMetadata)) {
      query["ProjectMetadata"] = request.projectMetadata;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeline)) {
      body["Timeline"] = request.timeline;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaProducingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaProducingJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaProducingJobResponse({}));
  }

  /**
   * Submits a media editing and production job. If you need to perform any form of post-production such as editing and production on video or audio materials, you can call this operation to automate the process.
   * 
   * @remarks
   *   This operation returns only the submission result of a media editing and production job. When the submission result is returned, the job may still be in progress. After a media editing and production job is submitted, the job is queued in the background for asynchronous processing.
   * *   The materials referenced in the timeline of an online editing project can be media assets in the media asset library or Object Storage Service (OSS) objects. External URLs or Alibaba Cloud Content Delivery Network (CDN) URLs are not supported. To use an OSS object as a material, you must set MediaUrl to an OSS URL, such as https://your-bucket.oss-region-name.aliyuncs.com/your-object.ext.
   * *   After the production is complete, the output file is automatically registered as a media asset. The media asset first needs to be analyzed. After the media asset is analyzed, you can query the duration and resolution information based on the media asset ID.
   * ## [](#)Limits
   * *   The throttling threshold of this operation is 30 queries per second (QPS).
   *     **
   *     **Note** If the threshold is exceeded, a "Throttling.User" error is returned when you submit an editing job. For more information about how to resolve this issue, see the [FAQ](https://help.aliyun.com/document_detail/453484.html).
   * *   You can create up to 100 video tracks, 100 image tracks, and 100 subtitle tracks in a project.
   * *   The total size of material files cannot exceed 1 TB.
   * *   The OSS buckets in which the materials reside and where the output media assets are stored must be in the same region as the region in which Intelligent Media Services (IMS) is activated.
   * *   An output video must meet the following requirements:
   *     *   Both the width and height must be at least 128 pixels.
   *     *   Both the width and height cannot exceed 4,096 pixels.
   *     *   The shorter side of the video cannot exceed 2,160 pixels.
   * 
   * @param request - SubmitMediaProducingJobRequest
   * @returns SubmitMediaProducingJobResponse
   */
  async submitMediaProducingJob(request: $_model.SubmitMediaProducingJobRequest): Promise<$_model.SubmitMediaProducingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaProducingJobWithOptions(request, runtime);
  }

  /**
   * Submits a packaging job.
   * 
   * @param tmpReq - SubmitPackageJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPackageJobResponse
   */
  async submitPackageJobWithOptions(tmpReq: $_model.SubmitPackageJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitPackageJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitPackageJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputsShrink)) {
      query["Inputs"] = request.inputsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPackageJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitPackageJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitPackageJobResponse({}));
  }

  /**
   * Submits a packaging job.
   * 
   * @param request - SubmitPackageJobRequest
   * @returns SubmitPackageJobResponse
   */
  async submitPackageJob(request: $_model.SubmitPackageJobRequest): Promise<$_model.SubmitPackageJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPackageJobWithOptions(request, runtime);
  }

  /**
   * Submits a project export task.
   * 
   * @param request - SubmitProjectExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitProjectExportJobResponse
   */
  async submitProjectExportJobWithOptions(request: $_model.SubmitProjectExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitProjectExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.outputMediaConfig)) {
      query["OutputMediaConfig"] = request.outputMediaConfig;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeline)) {
      body["Timeline"] = request.timeline;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitProjectExportJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitProjectExportJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitProjectExportJobResponse({}));
  }

  /**
   * Submits a project export task.
   * 
   * @param request - SubmitProjectExportJobRequest
   * @returns SubmitProjectExportJobResponse
   */
  async submitProjectExportJob(request: $_model.SubmitProjectExportJobRequest): Promise<$_model.SubmitProjectExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitProjectExportJobWithOptions(request, runtime);
  }

  /**
   * Submits a batch job to render multiple videos by providing a list of editing project IDs.
   * 
   * @remarks
   *   After submitting a job, you can call ListBatchMediaProducingJob to retrieve all matching jobs. To get detailed information for a specific job, including its status, output media asset IDs, and URLs, call GetBatchMediaProducingJob.
   * 
   * @param request - SubmitSceneBatchEditingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSceneBatchEditingJobResponse
   */
  async submitSceneBatchEditingJobWithOptions(request: $_model.SubmitSceneBatchEditingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSceneBatchEditingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.projectIds)) {
      query["ProjectIds"] = request.projectIds;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSceneBatchEditingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSceneBatchEditingJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSceneBatchEditingJobResponse({}));
  }

  /**
   * Submits a batch job to render multiple videos by providing a list of editing project IDs.
   * 
   * @remarks
   *   After submitting a job, you can call ListBatchMediaProducingJob to retrieve all matching jobs. To get detailed information for a specific job, including its status, output media asset IDs, and URLs, call GetBatchMediaProducingJob.
   * 
   * @param request - SubmitSceneBatchEditingJobRequest
   * @returns SubmitSceneBatchEditingJobResponse
   */
  async submitSceneBatchEditingJob(request: $_model.SubmitSceneBatchEditingJobRequest): Promise<$_model.SubmitSceneBatchEditingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSceneBatchEditingJobWithOptions(request, runtime);
  }

  /**
   * Selects suitable clips based on the submitted videos, images, and voiceovers, and returns the selection results. Two scenarios are supported: image-text matching and highlight mashup.
   * 
   * @remarks
   *   After a job is submitted, you can call [ListBatchMediaProducingJob](https://help.aliyun.com/document_detail/2803751.html) to query submitted jobs, or [GetBatchMediaProducingJob](https://help.aliyun.com/document_detail/2693269.html) to query the job status and results.
   * - The feature is in public preview and charges no fees.
   * 
   * @param request - SubmitSceneMediaSelectionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSceneMediaSelectionJobResponse
   */
  async submitSceneMediaSelectionJobWithOptions(request: $_model.SubmitSceneMediaSelectionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSceneMediaSelectionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.editingConfig)) {
      body["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSceneMediaSelectionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSceneMediaSelectionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSceneMediaSelectionJobResponse({}));
  }

  /**
   * Selects suitable clips based on the submitted videos, images, and voiceovers, and returns the selection results. Two scenarios are supported: image-text matching and highlight mashup.
   * 
   * @remarks
   *   After a job is submitted, you can call [ListBatchMediaProducingJob](https://help.aliyun.com/document_detail/2803751.html) to query submitted jobs, or [GetBatchMediaProducingJob](https://help.aliyun.com/document_detail/2693269.html) to query the job status and results.
   * - The feature is in public preview and charges no fees.
   * 
   * @param request - SubmitSceneMediaSelectionJobRequest
   * @returns SubmitSceneMediaSelectionJobResponse
   */
  async submitSceneMediaSelectionJob(request: $_model.SubmitSceneMediaSelectionJobRequest): Promise<$_model.SubmitSceneMediaSelectionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSceneMediaSelectionJobWithOptions(request, runtime);
  }

  /**
   * Arranges media assets, including videos, images, background music, and voiceovers, into a complete timeline based on media selection results, and creates an editing project for preview. Two scenarios are supported: image-text matching and highlight mashup.
   * 
   * @remarks
   *   After submitting a job, you can call [ListBatchMediaProducingJob](https://help.aliyun.com/document_detail/2803751.html) to retrieve matching jobs. To get detailed information for a specific job, including its status, output media asset IDs, and URLs, call [GetBatchMediaProducingJob](https://help.aliyun.com/document_detail/2693269.html).
   * - The feature is in public preview and does not charge fees.
   * 
   * @param request - SubmitSceneTimelineOrganizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSceneTimelineOrganizationJobResponse
   */
  async submitSceneTimelineOrganizationJobWithOptions(request: $_model.SubmitSceneTimelineOrganizationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSceneTimelineOrganizationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.mediaSelectResult)) {
      query["MediaSelectResult"] = request.mediaSelectResult;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.editingConfig)) {
      body["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSceneTimelineOrganizationJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSceneTimelineOrganizationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSceneTimelineOrganizationJobResponse({}));
  }

  /**
   * Arranges media assets, including videos, images, background music, and voiceovers, into a complete timeline based on media selection results, and creates an editing project for preview. Two scenarios are supported: image-text matching and highlight mashup.
   * 
   * @remarks
   *   After submitting a job, you can call [ListBatchMediaProducingJob](https://help.aliyun.com/document_detail/2803751.html) to retrieve matching jobs. To get detailed information for a specific job, including its status, output media asset IDs, and URLs, call [GetBatchMediaProducingJob](https://help.aliyun.com/document_detail/2693269.html).
   * - The feature is in public preview and does not charge fees.
   * 
   * @param request - SubmitSceneTimelineOrganizationJobRequest
   * @returns SubmitSceneTimelineOrganizationJobResponse
   */
  async submitSceneTimelineOrganizationJob(request: $_model.SubmitSceneTimelineOrganizationJobRequest): Promise<$_model.SubmitSceneTimelineOrganizationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSceneTimelineOrganizationJobWithOptions(request, runtime);
  }

  /**
   * Submits a task to automatically recognize the highlight segments in the video input and compile them into a dramatic and engaging clip.
   * 
   * @param request - SubmitScreenMediaHighlightsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitScreenMediaHighlightsJobResponse
   */
  async submitScreenMediaHighlightsJobWithOptions(request: $_model.SubmitScreenMediaHighlightsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitScreenMediaHighlightsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.editingConfig)) {
      body["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitScreenMediaHighlightsJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitScreenMediaHighlightsJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitScreenMediaHighlightsJobResponse({}));
  }

  /**
   * Submits a task to automatically recognize the highlight segments in the video input and compile them into a dramatic and engaging clip.
   * 
   * @param request - SubmitScreenMediaHighlightsJobRequest
   * @returns SubmitScreenMediaHighlightsJobResponse
   */
  async submitScreenMediaHighlightsJob(request: $_model.SubmitScreenMediaHighlightsJobRequest): Promise<$_model.SubmitScreenMediaHighlightsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitScreenMediaHighlightsJobWithOptions(request, runtime);
  }

  /**
   * Splits a long video into multiple video clips and outputs as video files or media assets.
   * 
   * @param request - SubmitSegmentationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSegmentationJobResponse
   */
  async submitSegmentationJobWithOptions(request: $_model.SubmitSegmentationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSegmentationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSegmentationJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSegmentationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSegmentationJobResponse({}));
  }

  /**
   * Splits a long video into multiple video clips and outputs as video files or media assets.
   * 
   * @param request - SubmitSegmentationJobRequest
   * @returns SubmitSegmentationJobResponse
   */
  async submitSegmentationJob(request: $_model.SubmitSegmentationJobRequest): Promise<$_model.SubmitSegmentationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSegmentationJobWithOptions(request, runtime);
  }

  /**
   * Submits a smart tagging job.
   * 
   * @remarks
   * Before you call this operation to submit a smart tagging job, you must add a smart tagging template and specify the analysis types that you want to use in the template. For more information, see CreateCustomTemplate. You can use the smart tagging feature only in the China (Beijing), China (Shanghai), and China (Hangzhou) regions. By default, an ApsaraVideo Media Processing (MPS) queue can process a maximum of two concurrent smart tagging jobs. If you need to process more concurrent smart tagging jobs, submit a ticket to contact Alibaba Cloud Technical Support for evaluation and configuration.
   * 
   * @param tmpReq - SubmitSmarttagJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmarttagJobResponse
   */
  async submitSmarttagJobWithOptions(tmpReq: $_model.SubmitSmarttagJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSmarttagJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSmarttagJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

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

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
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
      version: "2020-11-09",
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
   * Submits a smart tagging job.
   * 
   * @remarks
   * Before you call this operation to submit a smart tagging job, you must add a smart tagging template and specify the analysis types that you want to use in the template. For more information, see CreateCustomTemplate. You can use the smart tagging feature only in the China (Beijing), China (Shanghai), and China (Hangzhou) regions. By default, an ApsaraVideo Media Processing (MPS) queue can process a maximum of two concurrent smart tagging jobs. If you need to process more concurrent smart tagging jobs, submit a ticket to contact Alibaba Cloud Technical Support for evaluation and configuration.
   * 
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
   * @param tmpReq - SubmitSnapshotJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJobWithOptions(tmpReq: $_model.SubmitSnapshotJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSnapshotJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSnapshotJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSnapshotJob",
      version: "2020-11-09",
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
   * @param request - SubmitSnapshotJobRequest
   * @returns SubmitSnapshotJobResponse
   */
  async submitSnapshotJob(request: $_model.SubmitSnapshotJobRequest): Promise<$_model.SubmitSnapshotJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSnapshotJobWithOptions(request, runtime);
  }

  /**
   * Submits a sports highlights job to generate a highlights video of an event based on event materials that contain commentary.
   * 
   * @param request - SubmitSportsHighlightsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSportsHighlightsJobResponse
   */
  async submitSportsHighlightsJobWithOptions(request: $_model.SubmitSportsHighlightsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSportsHighlightsJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputConfig)) {
      body["InputConfig"] = request.inputConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSportsHighlightsJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSportsHighlightsJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSportsHighlightsJobResponse({}));
  }

  /**
   * Submits a sports highlights job to generate a highlights video of an event based on event materials that contain commentary.
   * 
   * @param request - SubmitSportsHighlightsJobRequest
   * @returns SubmitSportsHighlightsJobResponse
   */
  async submitSportsHighlightsJob(request: $_model.SubmitSportsHighlightsJobRequest): Promise<$_model.SubmitSportsHighlightsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSportsHighlightsJobWithOptions(request, runtime);
  }

  /**
   * Submits a standard human voice cloning job. After you call this operation, the JobId is returned. The training process is asynchronous. During training, you can call the GetCustomizedVoiceJob operation to query information such as the job state.
   * 
   * @param request - SubmitStandardCustomizedVoiceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitStandardCustomizedVoiceJobResponse
   */
  async submitStandardCustomizedVoiceJobWithOptions(request: $_model.SubmitStandardCustomizedVoiceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitStandardCustomizedVoiceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audios)) {
      query["Audios"] = request.audios;
    }

    if (!$dara.isNull(request.authentication)) {
      query["Authentication"] = request.authentication;
    }

    if (!$dara.isNull(request.demoAudioMediaURL)) {
      query["DemoAudioMediaURL"] = request.demoAudioMediaURL;
    }

    if (!$dara.isNull(request.gender)) {
      query["Gender"] = request.gender;
    }

    if (!$dara.isNull(request.voiceName)) {
      query["VoiceName"] = request.voiceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitStandardCustomizedVoiceJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitStandardCustomizedVoiceJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitStandardCustomizedVoiceJobResponse({}));
  }

  /**
   * Submits a standard human voice cloning job. After you call this operation, the JobId is returned. The training process is asynchronous. During training, you can call the GetCustomizedVoiceJob operation to query information such as the job state.
   * 
   * @param request - SubmitStandardCustomizedVoiceJobRequest
   * @returns SubmitStandardCustomizedVoiceJobResponse
   */
  async submitStandardCustomizedVoiceJob(request: $_model.SubmitStandardCustomizedVoiceJobRequest): Promise<$_model.SubmitStandardCustomizedVoiceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitStandardCustomizedVoiceJobWithOptions(request, runtime);
  }

  /**
   * Submits a media file in synchronous mode for media information analysis.
   * 
   * @remarks
   * You can call this operation to analyze an input media file in synchronous mode. This operation is suitable for scenarios that require high real-time performance and low concurrency. If it takes an extended period of time to obtain the media information about the input media file, the request may time out or the obtained information may be inaccurate. We recommend that you call the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/441222.html) operation to obtain media information.
   * 
   * @param tmpReq - SubmitSyncMediaInfoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSyncMediaInfoJobResponse
   */
  async submitSyncMediaInfoJobWithOptions(tmpReq: $_model.SubmitSyncMediaInfoJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSyncMediaInfoJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSyncMediaInfoJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSyncMediaInfoJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSyncMediaInfoJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSyncMediaInfoJobResponse({}));
  }

  /**
   * Submits a media file in synchronous mode for media information analysis.
   * 
   * @remarks
   * You can call this operation to analyze an input media file in synchronous mode. This operation is suitable for scenarios that require high real-time performance and low concurrency. If it takes an extended period of time to obtain the media information about the input media file, the request may time out or the obtained information may be inaccurate. We recommend that you call the [SubmitMediaInfoJob](https://help.aliyun.com/document_detail/441222.html) operation to obtain media information.
   * 
   * @param request - SubmitSyncMediaInfoJobRequest
   * @returns SubmitSyncMediaInfoJobResponse
   */
  async submitSyncMediaInfoJob(request: $_model.SubmitSyncMediaInfoJobRequest): Promise<$_model.SubmitSyncMediaInfoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSyncMediaInfoJobWithOptions(request, runtime);
  }

  /**
   * Submits a text generation job to generate marketing copies based on keywords and the requirements for the word count and number of output copies. The word count of the output copies may differ from the specified word count. After the job is submitted, you can call the GetSmartHandleJob operation to obtain the job state and result based on the job ID.
   * 
   * @param request - SubmitTextGenerateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTextGenerateJobResponse
   */
  async submitTextGenerateJobWithOptions(request: $_model.SubmitTextGenerateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTextGenerateJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.generateConfig)) {
      query["GenerateConfig"] = request.generateConfig;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTextGenerateJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTextGenerateJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTextGenerateJobResponse({}));
  }

  /**
   * Submits a text generation job to generate marketing copies based on keywords and the requirements for the word count and number of output copies. The word count of the output copies may differ from the specified word count. After the job is submitted, you can call the GetSmartHandleJob operation to obtain the job state and result based on the job ID.
   * 
   * @param request - SubmitTextGenerateJobRequest
   * @returns SubmitTextGenerateJobResponse
   */
  async submitTextGenerateJob(request: $_model.SubmitTextGenerateJobRequest): Promise<$_model.SubmitTextGenerateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTextGenerateJobWithOptions(request, runtime);
  }

  /**
   * Submits an A/B watermarking job.
   * 
   * @remarks
   *   This API supports only videos that last at least 3 minutes. If the video is too short, the call may fail, or no output may be returned.
   * 
   * @param tmpReq - SubmitTraceAbJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTraceAbJobResponse
   */
  async submitTraceAbJobWithOptions(tmpReq: $_model.SubmitTraceAbJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTraceAbJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTraceAbJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cipherBase64ed)) {
      query["CipherBase64ed"] = request.cipherBase64ed;
    }

    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.totalTime)) {
      query["TotalTime"] = request.totalTime;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTraceAbJob",
      version: "2020-11-09",
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
   * Submits an A/B watermarking job.
   * 
   * @remarks
   *   This API supports only videos that last at least 3 minutes. If the video is too short, the call may fail, or no output may be returned.
   * 
   * @param request - SubmitTraceAbJobRequest
   * @returns SubmitTraceAbJobResponse
   */
  async submitTraceAbJob(request: $_model.SubmitTraceAbJobRequest): Promise<$_model.SubmitTraceAbJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTraceAbJobWithOptions(request, runtime);
  }

  /**
   * Submits a job to extract the trace watermark.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   The input video must be 3 minutes or longer. Jobs submitted with shorter videos will fail.
   * 
   * @param tmpReq - SubmitTraceExtractJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTraceExtractJobResponse
   */
  async submitTraceExtractJobWithOptions(tmpReq: $_model.SubmitTraceExtractJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTraceExtractJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTraceExtractJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTraceExtractJob",
      version: "2020-11-09",
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
   * Submits a job to extract the trace watermark.
   * 
   * @remarks
   *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   The input video must be 3 minutes or longer. Jobs submitted with shorter videos will fail.
   * 
   * @param request - SubmitTraceExtractJobRequest
   * @returns SubmitTraceExtractJobResponse
   */
  async submitTraceExtractJob(request: $_model.SubmitTraceExtractJobRequest): Promise<$_model.SubmitTraceExtractJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTraceExtractJobWithOptions(request, runtime);
  }

  /**
   * Submits a job that generates an M3U8 file containing specific trace watermark information.
   * 
   * @remarks
   *   Before you call this operation, you must call SubmitTraceAbJob to get the TraceMediaId from its response.
   * *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   The M3U8 file generated by this job has a signed URL with an authentication validity period of 24 hours, starting from the moment the job is completed. Once the signature expires, you will no longer be able to trace the watermark information using that specific M3U8 file. If you need to use it after expiration, you must call this API again to generate a new M3U8 file.
   * 
   * @param tmpReq - SubmitTraceM3u8JobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTraceM3u8JobResponse
   */
  async submitTraceM3u8JobWithOptions(tmpReq: $_model.SubmitTraceM3u8JobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTraceM3u8JobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTraceM3u8JobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.output)) {
      request.outputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.output, "Output", "json");
    }

    let query = { };
    if (!$dara.isNull(request.keyUri)) {
      query["KeyUri"] = request.keyUri;
    }

    if (!$dara.isNull(request.outputShrink)) {
      query["Output"] = request.outputShrink;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.trace)) {
      query["Trace"] = request.trace;
    }

    if (!$dara.isNull(request.traceMediaId)) {
      query["TraceMediaId"] = request.traceMediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTraceM3u8Job",
      version: "2020-11-09",
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
   * Submits a job that generates an M3U8 file containing specific trace watermark information.
   * 
   * @remarks
   *   Before you call this operation, you must call SubmitTraceAbJob to get the TraceMediaId from its response.
   * *   This operation is supported only in the China (Shanghai) and China (Beijing) regions.
   * *   The M3U8 file generated by this job has a signed URL with an authentication validity period of 24 hours, starting from the moment the job is completed. Once the signature expires, you will no longer be able to trace the watermark information using that specific M3U8 file. If you need to use it after expiration, you must call this API again to generate a new M3U8 file.
   * 
   * @param request - SubmitTraceM3u8JobRequest
   * @returns SubmitTraceM3u8JobResponse
   */
  async submitTraceM3u8Job(request: $_model.SubmitTraceM3u8JobRequest): Promise<$_model.SubmitTraceM3u8JobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTraceM3u8JobWithOptions(request, runtime);
  }

  /**
   * Submits a transcoding job.
   * 
   * @param tmpReq - SubmitTranscodeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTranscodeJobResponse
   */
  async submitTranscodeJobWithOptions(tmpReq: $_model.SubmitTranscodeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTranscodeJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTranscodeJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputGroup)) {
      request.inputGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputGroup, "InputGroup", "json");
    }

    if (!$dara.isNull(tmpReq.outputGroup)) {
      request.outputGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputGroup, "OutputGroup", "json");
    }

    if (!$dara.isNull(tmpReq.scheduleConfig)) {
      request.scheduleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduleConfig, "ScheduleConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.inputGroupShrink)) {
      query["InputGroup"] = request.inputGroupShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputGroupShrink)) {
      query["OutputGroup"] = request.outputGroupShrink;
    }

    if (!$dara.isNull(request.scheduleConfigShrink)) {
      query["ScheduleConfig"] = request.scheduleConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTranscodeJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTranscodeJobResponse({}));
  }

  /**
   * Submits a transcoding job.
   * 
   * @param request - SubmitTranscodeJobRequest
   * @returns SubmitTranscodeJobResponse
   */
  async submitTranscodeJob(request: $_model.SubmitTranscodeJobRequest): Promise<$_model.SubmitTranscodeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitTranscodeJobWithOptions(request, runtime);
  }

  /**
   * Submits a video for AI analysis and processing.
   * 
   * @param tmpReq - SubmitVideoCognitionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoCognitionJobResponse
   */
  async submitVideoCognitionJobWithOptions(tmpReq: $_model.SubmitVideoCognitionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoCognitionJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitVideoCognitionJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputShrink)) {
      query["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
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
      action: "SubmitVideoCognitionJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoCognitionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoCognitionJobResponse({}));
  }

  /**
   * Submits a video for AI analysis and processing.
   * 
   * @param request - SubmitVideoCognitionJobRequest
   * @returns SubmitVideoCognitionJobResponse
   */
  async submitVideoCognitionJob(request: $_model.SubmitVideoCognitionJobRequest): Promise<$_model.SubmitVideoCognitionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoCognitionJobWithOptions(request, runtime);
  }

  /**
   * Submits a video translation job. You can call this operation to translate subtitles in a video and audio to a specific language. Lip-sync adaptation will be supported in the future.
   * 
   * @remarks
   * After you call this operation to submit a video translation job, the system returns a job ID. You can call the GetSmartHandleJob operation based on the job ID to obtain the status and result information of the job.
   * 
   * @param request - SubmitVideoTranslationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoTranslationJobResponse
   */
  async submitVideoTranslationJobWithOptions(request: $_model.SubmitVideoTranslationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoTranslationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.editingConfig)) {
      query["EditingConfig"] = request.editingConfig;
    }

    if (!$dara.isNull(request.inputConfig)) {
      query["InputConfig"] = request.inputConfig;
    }

    if (!$dara.isNull(request.outputConfig)) {
      query["OutputConfig"] = request.outputConfig;
    }

    if (!$dara.isNull(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!$dara.isNull(request.signatureMehtod)) {
      query["SignatureMehtod"] = request.signatureMehtod;
    }

    if (!$dara.isNull(request.signatureNonce)) {
      query["SignatureNonce"] = request.signatureNonce;
    }

    if (!$dara.isNull(request.signatureType)) {
      query["SignatureType"] = request.signatureType;
    }

    if (!$dara.isNull(request.signatureVersion)) {
      query["SignatureVersion"] = request.signatureVersion;
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
      action: "SubmitVideoTranslationJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoTranslationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoTranslationJobResponse({}));
  }

  /**
   * Submits a video translation job. You can call this operation to translate subtitles in a video and audio to a specific language. Lip-sync adaptation will be supported in the future.
   * 
   * @remarks
   * After you call this operation to submit a video translation job, the system returns a job ID. You can call the GetSmartHandleJob operation based on the job ID to obtain the status and result information of the job.
   * 
   * @param request - SubmitVideoTranslationJobRequest
   * @returns SubmitVideoTranslationJobResponse
   */
  async submitVideoTranslationJob(request: $_model.SubmitVideoTranslationJobRequest): Promise<$_model.SubmitVideoTranslationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoTranslationJobWithOptions(request, runtime);
  }

  /**
   * Hands off a conversation to a human agent.
   * 
   * @param request - TakeoverAIAgentCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TakeoverAIAgentCallResponse
   */
  async takeoverAIAgentCallWithOptions(request: $_model.TakeoverAIAgentCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TakeoverAIAgentCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.humanAgentUserId)) {
      query["HumanAgentUserId"] = request.humanAgentUserId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.requireToken)) {
      query["RequireToken"] = request.requireToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TakeoverAIAgentCall",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TakeoverAIAgentCallResponse>(await this.callApi(params, req, runtime), new $_model.TakeoverAIAgentCallResponse({}));
  }

  /**
   * Hands off a conversation to a human agent.
   * 
   * @param request - TakeoverAIAgentCallRequest
   * @returns TakeoverAIAgentCallResponse
   */
  async takeoverAIAgentCall(request: $_model.TakeoverAIAgentCallRequest): Promise<$_model.TakeoverAIAgentCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.takeoverAIAgentCallWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of an AI agent.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to update the configurations of an AI agent, such as the tone, by specifying the agent ID and configurations.
   * 
   * @param tmpReq - UpdateAIAgentInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAIAgentInstanceResponse
   */
  async updateAIAgentInstanceWithOptions(tmpReq: $_model.UpdateAIAgentInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAIAgentInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAIAgentInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentConfig)) {
      request.agentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentConfig, "AgentConfig", "json");
    }

    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentConfigShrink)) {
      query["AgentConfig"] = request.agentConfigShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAIAgentInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAIAgentInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAIAgentInstanceResponse({}));
  }

  /**
   * Updates the configurations of an AI agent.
   * 
   * @remarks
   * ## [](#)Request description
   * You can call this operation to update the configurations of an AI agent, such as the tone, by specifying the agent ID and configurations.
   * 
   * @param request - UpdateAIAgentInstanceRequest
   * @returns UpdateAIAgentInstanceResponse
   */
  async updateAIAgentInstance(request: $_model.UpdateAIAgentInstanceRequest): Promise<$_model.UpdateAIAgentInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAIAgentInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies an ad insertion configuration.
   * 
   * @param request - UpdateAdInsertionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdInsertionResponse
   */
  async updateAdInsertionWithOptions(request: $_model.UpdateAdInsertionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAdInsertionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adMarkerPassthrough)) {
      body["AdMarkerPassthrough"] = request.adMarkerPassthrough;
    }

    if (!$dara.isNull(request.adsUrl)) {
      body["AdsUrl"] = request.adsUrl;
    }

    if (!$dara.isNull(request.cdnAdSegmentUrlPrefix)) {
      body["CdnAdSegmentUrlPrefix"] = request.cdnAdSegmentUrlPrefix;
    }

    if (!$dara.isNull(request.cdnContentSegmentUrlPrefix)) {
      body["CdnContentSegmentUrlPrefix"] = request.cdnContentSegmentUrlPrefix;
    }

    if (!$dara.isNull(request.configAliases)) {
      body["ConfigAliases"] = request.configAliases;
    }

    if (!$dara.isNull(request.contentUrlPrefix)) {
      body["ContentUrlPrefix"] = request.contentUrlPrefix;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.personalizationThreshold)) {
      body["PersonalizationThreshold"] = request.personalizationThreshold;
    }

    if (!$dara.isNull(request.slateAdUrl)) {
      body["SlateAdUrl"] = request.slateAdUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAdInsertion",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAdInsertionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAdInsertionResponse({}));
  }

  /**
   * Modifies an ad insertion configuration.
   * 
   * @param request - UpdateAdInsertionRequest
   * @returns UpdateAdInsertionResponse
   */
  async updateAdInsertion(request: $_model.UpdateAdInsertionRequest): Promise<$_model.UpdateAdInsertionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAdInsertionWithOptions(request, runtime);
  }

  /**
   * Modifies a digital human training job. You can modify the basic information or update parameters such as Video and Transparent for retraining if the training failed.
   * 
   * @param request - UpdateAvatarTrainingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAvatarTrainingJobResponse
   */
  async updateAvatarTrainingJobWithOptions(request: $_model.UpdateAvatarTrainingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAvatarTrainingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.avatarDescription)) {
      query["AvatarDescription"] = request.avatarDescription;
    }

    if (!$dara.isNull(request.avatarName)) {
      query["AvatarName"] = request.avatarName;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.portrait)) {
      query["Portrait"] = request.portrait;
    }

    if (!$dara.isNull(request.thumbnail)) {
      query["Thumbnail"] = request.thumbnail;
    }

    if (!$dara.isNull(request.transparent)) {
      query["Transparent"] = request.transparent;
    }

    if (!$dara.isNull(request.video)) {
      query["Video"] = request.video;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAvatarTrainingJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAvatarTrainingJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAvatarTrainingJobResponse({}));
  }

  /**
   * Modifies a digital human training job. You can modify the basic information or update parameters such as Video and Transparent for retraining if the training failed.
   * 
   * @param request - UpdateAvatarTrainingJobRequest
   * @returns UpdateAvatarTrainingJobResponse
   */
  async updateAvatarTrainingJob(request: $_model.UpdateAvatarTrainingJobRequest): Promise<$_model.UpdateAvatarTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAvatarTrainingJobWithOptions(request, runtime);
  }

  /**
   * Updates a category.
   * 
   * @remarks
   * After you create a media asset category, you can call this operation to find the category based on the category ID and change the name of the category.
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
      version: "2020-11-09",
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
   * Updates a category.
   * 
   * @remarks
   * After you create a media asset category, you can call this operation to find the category based on the category ID and change the name of the category.
   * 
   * @param request - UpdateCategoryRequest
   * @returns UpdateCategoryResponse
   */
  async updateCategory(request: $_model.UpdateCategoryRequest): Promise<$_model.UpdateCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCategoryWithOptions(request, runtime);
  }

  /**
   * Modifies a MediaWeaver channel.
   * 
   * @param request - UpdateChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChannelResponse
   */
  async updateChannelWithOptions(request: $_model.UpdateChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessPolicy)) {
      query["AccessPolicy"] = request.accessPolicy;
    }

    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.fillerSourceLocationName)) {
      query["FillerSourceLocationName"] = request.fillerSourceLocationName;
    }

    if (!$dara.isNull(request.fillerSourceName)) {
      query["FillerSourceName"] = request.fillerSourceName;
    }

    if (!$dara.isNull(request.outPutConfigList)) {
      query["OutPutConfigList"] = request.outPutConfigList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChannelResponse({}));
  }

  /**
   * Modifies a MediaWeaver channel.
   * 
   * @param request - UpdateChannelRequest
   * @returns UpdateChannelResponse
   */
  async updateChannel(request: $_model.UpdateChannelRequest): Promise<$_model.UpdateChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChannelWithOptions(request, runtime);
  }

  /**
   * Updates a custom template.
   * 
   * @param request - UpdateCustomTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomTemplateResponse
   */
  async updateCustomTemplateWithOptions(request: $_model.UpdateCustomTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateConfig)) {
      query["TemplateConfig"] = request.templateConfig;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomTemplateResponse({}));
  }

  /**
   * Updates a custom template.
   * 
   * @param request - UpdateCustomTemplateRequest
   * @returns UpdateCustomTemplateResponse
   */
  async updateCustomTemplate(request: $_model.UpdateCustomTemplateRequest): Promise<$_model.UpdateCustomTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomTemplateWithOptions(request, runtime);
  }

  /**
   * Updates a personalized human voice. Only the media asset ID of the sample audio file can be modified.
   * 
   * @param request - UpdateCustomizedVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomizedVoiceResponse
   */
  async updateCustomizedVoiceWithOptions(request: $_model.UpdateCustomizedVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomizedVoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.demoAudioMediaId)) {
      query["DemoAudioMediaId"] = request.demoAudioMediaId;
    }

    if (!$dara.isNull(request.voiceId)) {
      query["VoiceId"] = request.voiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomizedVoice",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomizedVoiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomizedVoiceResponse({}));
  }

  /**
   * Updates a personalized human voice. Only the media asset ID of the sample audio file can be modified.
   * 
   * @param request - UpdateCustomizedVoiceRequest
   * @returns UpdateCustomizedVoiceResponse
   */
  async updateCustomizedVoice(request: $_model.UpdateCustomizedVoiceRequest): Promise<$_model.UpdateCustomizedVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomizedVoiceWithOptions(request, runtime);
  }

  /**
   * Modifies an online editing project. You can call this operation to modify the configurations such as the title, timeline, and thumbnail of an online editing project.
   * 
   * @param request - UpdateEditingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEditingProjectResponse
   */
  async updateEditingProjectWithOptions(request: $_model.UpdateEditingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEditingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessStatus)) {
      query["BusinessStatus"] = request.businessStatus;
    }

    if (!$dara.isNull(request.clipsParam)) {
      query["ClipsParam"] = request.clipsParam;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeline)) {
      body["Timeline"] = request.timeline;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEditingProject",
      version: "2020-11-09",
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
   * Modifies an online editing project. You can call this operation to modify the configurations such as the title, timeline, and thumbnail of an online editing project.
   * 
   * @param request - UpdateEditingProjectRequest
   * @returns UpdateEditingProjectResponse
   */
  async updateEditingProject(request: $_model.UpdateEditingProjectRequest): Promise<$_model.UpdateEditingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEditingProjectWithOptions(request, runtime);
  }

  /**
   * Modifies a specified hotword library, including its name, description, and hotword list.
   * 
   * @remarks
   * ## [](#)
   * *   You can call this operation to modify a specified hotword library.
   * *   The hotword library ID (`HotwordLibraryId`) is required to identify the library that requires modification.
   * *   You can modify its name (`Name` ), description (`Description` ), and hotword list (`HotWords`).
   * *   Each hotword in the list can also be modified, including its content (`Text`), weight (`Weight`), language (`Language`), and translation results (`TranspositionResultList`).
   * *   A single account supports up to 100 hotword libraries, each containing a maximum of 300 hotword entries. In a library, the combination of `language` and `text` of an entry must be unique. The combination of `TranslatedText` and `TargetLanguage` in `TranspositionResultList` must also be unique.
   * 
   * @param tmpReq - UpdateHotwordLibraryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotwordLibraryResponse
   */
  async updateHotwordLibraryWithOptions(tmpReq: $_model.UpdateHotwordLibraryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHotwordLibraryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHotwordLibraryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hotwords)) {
      request.hotwordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotwords, "Hotwords", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.hotwordLibraryId)) {
      query["HotwordLibraryId"] = request.hotwordLibraryId;
    }

    if (!$dara.isNull(request.hotwordsShrink)) {
      query["Hotwords"] = request.hotwordsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotwordLibrary",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHotwordLibraryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHotwordLibraryResponse({}));
  }

  /**
   * Modifies a specified hotword library, including its name, description, and hotword list.
   * 
   * @remarks
   * ## [](#)
   * *   You can call this operation to modify a specified hotword library.
   * *   The hotword library ID (`HotwordLibraryId`) is required to identify the library that requires modification.
   * *   You can modify its name (`Name` ), description (`Description` ), and hotword list (`HotWords`).
   * *   Each hotword in the list can also be modified, including its content (`Text`), weight (`Weight`), language (`Language`), and translation results (`TranspositionResultList`).
   * *   A single account supports up to 100 hotword libraries, each containing a maximum of 300 hotword entries. In a library, the combination of `language` and `text` of an entry must be unique. The combination of `TranslatedText` and `TargetLanguage` in `TranspositionResultList` must also be unique.
   * 
   * @param request - UpdateHotwordLibraryRequest
   * @returns UpdateHotwordLibraryResponse
   */
  async updateHotwordLibrary(request: $_model.UpdateHotwordLibraryRequest): Promise<$_model.UpdateHotwordLibraryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHotwordLibraryWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a live package channel, including the protocol, segment duration, and number of segments.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You need to provide the name of the channel group to which the channel belongs, channel name, protocol, segment duration, and number of segments to update. In addition, you can choose to add or modify the description of the channel. Make sure that the provided channel group name and channel name conform to the naming conventions.
   * 
   * @param request - UpdateLivePackageChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLivePackageChannelResponse
   */
  async updateLivePackageChannelWithOptions(request: $_model.UpdateLivePackageChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLivePackageChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelName)) {
      body["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.segmentCount)) {
      body["SegmentCount"] = request.segmentCount;
    }

    if (!$dara.isNull(request.segmentDuration)) {
      body["SegmentDuration"] = request.segmentDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLivePackageChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLivePackageChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLivePackageChannelResponse({}));
  }

  /**
   * Updates the configuration of a live package channel, including the protocol, segment duration, and number of segments.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You need to provide the name of the channel group to which the channel belongs, channel name, protocol, segment duration, and number of segments to update. In addition, you can choose to add or modify the description of the channel. Make sure that the provided channel group name and channel name conform to the naming conventions.
   * 
   * @param request - UpdateLivePackageChannelRequest
   * @returns UpdateLivePackageChannelResponse
   */
  async updateLivePackageChannel(request: $_model.UpdateLivePackageChannelRequest): Promise<$_model.UpdateLivePackageChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLivePackageChannelWithOptions(request, runtime);
  }

  /**
   * Updates the credentials of ingest endpoints associated with a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can choose to update the primary endpoint, secondary endpoint, or both. The response includes the updated ingest endpoint URL, username, and password for the ingest device to reconfigure.
   * 
   * @param request - UpdateLivePackageChannelCredentialsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLivePackageChannelCredentialsResponse
   */
  async updateLivePackageChannelCredentialsWithOptions(request: $_model.UpdateLivePackageChannelCredentialsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLivePackageChannelCredentialsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelName)) {
      body["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.rotateCredentials)) {
      body["RotateCredentials"] = request.rotateCredentials;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLivePackageChannelCredentials",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLivePackageChannelCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLivePackageChannelCredentialsResponse({}));
  }

  /**
   * Updates the credentials of ingest endpoints associated with a live package channel.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can choose to update the primary endpoint, secondary endpoint, or both. The response includes the updated ingest endpoint URL, username, and password for the ingest device to reconfigure.
   * 
   * @param request - UpdateLivePackageChannelCredentialsRequest
   * @returns UpdateLivePackageChannelCredentialsResponse
   */
  async updateLivePackageChannelCredentials(request: $_model.UpdateLivePackageChannelCredentialsRequest): Promise<$_model.UpdateLivePackageChannelCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLivePackageChannelCredentialsWithOptions(request, runtime);
  }

  /**
   * Updates the information about a live package channel group including its description.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to modify the name and description of a live package channel group. The channel group name must conform to the naming conventions and can be up to 1,000 characters. The API response includes the updated channel group details and unique identifier of the request.
   * 
   * @param request - UpdateLivePackageChannelGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLivePackageChannelGroupResponse
   */
  async updateLivePackageChannelGroupWithOptions(request: $_model.UpdateLivePackageChannelGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLivePackageChannelGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLivePackageChannelGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLivePackageChannelGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLivePackageChannelGroupResponse({}));
  }

  /**
   * Updates the information about a live package channel group including its description.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This API operation allows you to modify the name and description of a live package channel group. The channel group name must conform to the naming conventions and can be up to 1,000 characters. The API response includes the updated channel group details and unique identifier of the request.
   * 
   * @param request - UpdateLivePackageChannelGroupRequest
   * @returns UpdateLivePackageChannelGroupResponse
   */
  async updateLivePackageChannelGroup(request: $_model.UpdateLivePackageChannelGroupRequest): Promise<$_model.UpdateLivePackageChannelGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLivePackageChannelGroupWithOptions(request, runtime);
  }

  /**
   * Updates the origin endpoint settings including the protocol, time shifting, and access control settings.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can call this operation to modify the origin protocol, set the number of days that time-shifted content is available, define playlist names, and configure the IP address blacklist and whitelist, allowing for fine-grained control over streaming media distribution. Some parameters are required. You must configure IpWhitelist, AuthorizationCode, or both.
   * 
   * @param tmpReq - UpdateLivePackageOriginEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLivePackageOriginEndpointResponse
   */
  async updateLivePackageOriginEndpointWithOptions(tmpReq: $_model.UpdateLivePackageOriginEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLivePackageOriginEndpointResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLivePackageOriginEndpointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.livePackagingConfig)) {
      request.livePackagingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.livePackagingConfig, "LivePackagingConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationCode)) {
      body["AuthorizationCode"] = request.authorizationCode;
    }

    if (!$dara.isNull(request.channelName)) {
      body["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpointName)) {
      body["EndpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ipBlacklist)) {
      body["IpBlacklist"] = request.ipBlacklist;
    }

    if (!$dara.isNull(request.ipWhitelist)) {
      body["IpWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.livePackagingConfigShrink)) {
      body["LivePackagingConfig"] = request.livePackagingConfigShrink;
    }

    if (!$dara.isNull(request.manifestName)) {
      body["ManifestName"] = request.manifestName;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.timeshiftVision)) {
      body["TimeshiftVision"] = request.timeshiftVision;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLivePackageOriginEndpoint",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLivePackageOriginEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLivePackageOriginEndpointResponse({}));
  }

  /**
   * Updates the origin endpoint settings including the protocol, time shifting, and access control settings.
   * 
   * @remarks
   * ## [](#)Usage notes
   * You can call this operation to modify the origin protocol, set the number of days that time-shifted content is available, define playlist names, and configure the IP address blacklist and whitelist, allowing for fine-grained control over streaming media distribution. Some parameters are required. You must configure IpWhitelist, AuthorizationCode, or both.
   * 
   * @param request - UpdateLivePackageOriginEndpointRequest
   * @returns UpdateLivePackageOriginEndpointResponse
   */
  async updateLivePackageOriginEndpoint(request: $_model.UpdateLivePackageOriginEndpointRequest): Promise<$_model.UpdateLivePackageOriginEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLivePackageOriginEndpointWithOptions(request, runtime);
  }

  /**
   * Updates the information about a live stream recording template.
   * 
   * @remarks
   * Only user-created templates can be updated. The preset template cannot be updated.
   * 
   * @param tmpReq - UpdateLiveRecordTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLiveRecordTemplateResponse
   */
  async updateLiveRecordTemplateWithOptions(tmpReq: $_model.UpdateLiveRecordTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLiveRecordTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLiveRecordTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordFormat)) {
      request.recordFormatShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordFormat, "RecordFormat", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recordFormatShrink)) {
      body["RecordFormat"] = request.recordFormatShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLiveRecordTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLiveRecordTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLiveRecordTemplateResponse({}));
  }

  /**
   * Updates the information about a live stream recording template.
   * 
   * @remarks
   * Only user-created templates can be updated. The preset template cannot be updated.
   * 
   * @param request - UpdateLiveRecordTemplateRequest
   * @returns UpdateLiveRecordTemplateResponse
   */
  async updateLiveRecordTemplate(request: $_model.UpdateLiveRecordTemplateRequest): Promise<$_model.UpdateLiveRecordTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLiveRecordTemplateWithOptions(request, runtime);
  }

  /**
   * Updates the information about a live stream snapshot template.
   * 
   * @param request - UpdateLiveSnapshotTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLiveSnapshotTemplateResponse
   */
  async updateLiveSnapshotTemplateWithOptions(request: $_model.UpdateLiveSnapshotTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLiveSnapshotTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.overwriteFormat)) {
      body["OverwriteFormat"] = request.overwriteFormat;
    }

    if (!$dara.isNull(request.sequenceFormat)) {
      body["SequenceFormat"] = request.sequenceFormat;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLiveSnapshotTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLiveSnapshotTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLiveSnapshotTemplateResponse({}));
  }

  /**
   * Updates the information about a live stream snapshot template.
   * 
   * @param request - UpdateLiveSnapshotTemplateRequest
   * @returns UpdateLiveSnapshotTemplateResponse
   */
  async updateLiveSnapshotTemplate(request: $_model.UpdateLiveSnapshotTemplateRequest): Promise<$_model.UpdateLiveSnapshotTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLiveSnapshotTemplateWithOptions(request, runtime);
  }

  /**
   * Updates the information about a live stream transcoding job.
   * 
   * @remarks
   *   For a non-timed transcoding job, you can modify the Name parameter of the job, regardless of the job state.
   * *   For a timed job, you can modify the Name, StreamInput, TranscodeOutput, and TimedConfig parameters. However, the StreamInput, TranscodeOutput, and TimedConfig parameters can be modified only when the job is not started.
   * 
   * @param tmpReq - UpdateLiveTranscodeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLiveTranscodeJobResponse
   */
  async updateLiveTranscodeJobWithOptions(tmpReq: $_model.UpdateLiveTranscodeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLiveTranscodeJobResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLiveTranscodeJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.streamInput)) {
      request.streamInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.streamInput, "StreamInput", "json");
    }

    if (!$dara.isNull(tmpReq.timedConfig)) {
      request.timedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timedConfig, "TimedConfig", "json");
    }

    if (!$dara.isNull(tmpReq.transcodeOutput)) {
      request.transcodeOutputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transcodeOutput, "TranscodeOutput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.streamInputShrink)) {
      query["StreamInput"] = request.streamInputShrink;
    }

    if (!$dara.isNull(request.timedConfigShrink)) {
      query["TimedConfig"] = request.timedConfigShrink;
    }

    if (!$dara.isNull(request.transcodeOutputShrink)) {
      query["TranscodeOutput"] = request.transcodeOutputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLiveTranscodeJob",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLiveTranscodeJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLiveTranscodeJobResponse({}));
  }

  /**
   * Updates the information about a live stream transcoding job.
   * 
   * @remarks
   *   For a non-timed transcoding job, you can modify the Name parameter of the job, regardless of the job state.
   * *   For a timed job, you can modify the Name, StreamInput, TranscodeOutput, and TimedConfig parameters. However, the StreamInput, TranscodeOutput, and TimedConfig parameters can be modified only when the job is not started.
   * 
   * @param request - UpdateLiveTranscodeJobRequest
   * @returns UpdateLiveTranscodeJobResponse
   */
  async updateLiveTranscodeJob(request: $_model.UpdateLiveTranscodeJobRequest): Promise<$_model.UpdateLiveTranscodeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLiveTranscodeJobWithOptions(request, runtime);
  }

  /**
   * Updates the information about a live stream transcoding template.
   * 
   * @param tmpReq - UpdateLiveTranscodeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLiveTranscodeTemplateResponse
   */
  async updateLiveTranscodeTemplateWithOptions(tmpReq: $_model.UpdateLiveTranscodeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLiveTranscodeTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLiveTranscodeTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.templateConfig)) {
      request.templateConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateConfig, "TemplateConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateConfigShrink)) {
      query["TemplateConfig"] = request.templateConfigShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLiveTranscodeTemplate",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLiveTranscodeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLiveTranscodeTemplateResponse({}));
  }

  /**
   * Updates the information about a live stream transcoding template.
   * 
   * @param request - UpdateLiveTranscodeTemplateRequest
   * @returns UpdateLiveTranscodeTemplateResponse
   */
  async updateLiveTranscodeTemplate(request: $_model.UpdateLiveTranscodeTemplateRequest): Promise<$_model.UpdateLiveTranscodeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLiveTranscodeTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies the source of a MediaConnect flow.
   * 
   * @remarks
   *   You can modify the source only when the flow is in the offline state.
   * *   The source type cannot be modified.
   * 
   * @param request - UpdateMediaConnectFlowInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaConnectFlowInputResponse
   */
  async updateMediaConnectFlowInputWithOptions(request: $_model.UpdateMediaConnectFlowInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaConnectFlowInputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.inputFromUrl)) {
      query["InputFromUrl"] = request.inputFromUrl;
    }

    if (!$dara.isNull(request.inputName)) {
      query["InputName"] = request.inputName;
    }

    if (!$dara.isNull(request.maxBitrate)) {
      query["MaxBitrate"] = request.maxBitrate;
    }

    if (!$dara.isNull(request.srtLatency)) {
      query["SrtLatency"] = request.srtLatency;
    }

    if (!$dara.isNull(request.srtPassphrase)) {
      query["SrtPassphrase"] = request.srtPassphrase;
    }

    if (!$dara.isNull(request.srtPbkeyLen)) {
      query["SrtPbkeyLen"] = request.srtPbkeyLen;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaConnectFlowInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaConnectFlowInputResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaConnectFlowInputResponse({}));
  }

  /**
   * Modifies the source of a MediaConnect flow.
   * 
   * @remarks
   *   You can modify the source only when the flow is in the offline state.
   * *   The source type cannot be modified.
   * 
   * @param request - UpdateMediaConnectFlowInputRequest
   * @returns UpdateMediaConnectFlowInputResponse
   */
  async updateMediaConnectFlowInput(request: $_model.UpdateMediaConnectFlowInputRequest): Promise<$_model.UpdateMediaConnectFlowInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaConnectFlowInputWithOptions(request, runtime);
  }

  /**
   * Modifies an output of a MediaConnect flow.
   * 
   * @remarks
   *   You can modify an output only when the flow is in the offline state.
   * *   The output type cannot be modified.
   * 
   * @param request - UpdateMediaConnectFlowOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaConnectFlowOutputResponse
   */
  async updateMediaConnectFlowOutputWithOptions(request: $_model.UpdateMediaConnectFlowOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaConnectFlowOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cidrs)) {
      query["Cidrs"] = request.cidrs;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.outputName)) {
      query["OutputName"] = request.outputName;
    }

    if (!$dara.isNull(request.outputToUrl)) {
      query["OutputToUrl"] = request.outputToUrl;
    }

    if (!$dara.isNull(request.playerLimit)) {
      query["PlayerLimit"] = request.playerLimit;
    }

    if (!$dara.isNull(request.srtLatency)) {
      query["SrtLatency"] = request.srtLatency;
    }

    if (!$dara.isNull(request.srtPassphrase)) {
      query["SrtPassphrase"] = request.srtPassphrase;
    }

    if (!$dara.isNull(request.srtPbkeyLen)) {
      query["SrtPbkeyLen"] = request.srtPbkeyLen;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaConnectFlowOutput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaConnectFlowOutputResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaConnectFlowOutputResponse({}));
  }

  /**
   * Modifies an output of a MediaConnect flow.
   * 
   * @remarks
   *   You can modify an output only when the flow is in the offline state.
   * *   The output type cannot be modified.
   * 
   * @param request - UpdateMediaConnectFlowOutputRequest
   * @returns UpdateMediaConnectFlowOutputResponse
   */
  async updateMediaConnectFlowOutput(request: $_model.UpdateMediaConnectFlowOutputRequest): Promise<$_model.UpdateMediaConnectFlowOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaConnectFlowOutputWithOptions(request, runtime);
  }

  /**
   * Modifies the state of a MediaConnect flow.
   * 
   * @param request - UpdateMediaConnectFlowStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaConnectFlowStatusResponse
   */
  async updateMediaConnectFlowStatusWithOptions(request: $_model.UpdateMediaConnectFlowStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaConnectFlowStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaConnectFlowStatus",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaConnectFlowStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaConnectFlowStatusResponse({}));
  }

  /**
   * Modifies the state of a MediaConnect flow.
   * 
   * @param request - UpdateMediaConnectFlowStatusRequest
   * @returns UpdateMediaConnectFlowStatusResponse
   */
  async updateMediaConnectFlowStatus(request: $_model.UpdateMediaConnectFlowStatusRequest): Promise<$_model.UpdateMediaConnectFlowStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaConnectFlowStatusWithOptions(request, runtime);
  }

  /**
   * Updates information about a media asset based on the ID of the media asset in Intelligent Media Services (IMS) or the input URL of the media asset.
   * 
   * @remarks
   * If the MediaId parameter is specified, the MediaId parameter is preferentially used for the query. If the MediaId parameter is left empty, the InputURL parameter must be specified. The request ID and media asset ID are returned. You cannot modify the input URL of a media asset by specifying the ID of the media asset.
   * 
   * @param request - UpdateMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaInfoResponse
   */
  async updateMediaInfoWithOptions(request: $_model.UpdateMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appendTags)) {
      query["AppendTags"] = request.appendTags;
    }

    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.cateId)) {
      query["CateId"] = request.cateId;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!$dara.isNull(request.referenceId)) {
      query["ReferenceId"] = request.referenceId;
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
      action: "UpdateMediaInfo",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaInfoResponse({}));
  }

  /**
   * Updates information about a media asset based on the ID of the media asset in Intelligent Media Services (IMS) or the input URL of the media asset.
   * 
   * @remarks
   * If the MediaId parameter is specified, the MediaId parameter is preferentially used for the query. If the MediaId parameter is left empty, the InputURL parameter must be specified. The request ID and media asset ID are returned. You cannot modify the input URL of a media asset by specifying the ID of the media asset.
   * 
   * @param request - UpdateMediaInfoRequest
   * @returns UpdateMediaInfoResponse
   */
  async updateMediaInfo(request: $_model.UpdateMediaInfoRequest): Promise<$_model.UpdateMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaInfoWithOptions(request, runtime);
  }

  /**
   * Modifies a MediaLive channel.
   * 
   * @remarks
   *   You can modify a MediaLive channel only when it is not running.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - UpdateMediaLiveChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaLiveChannelResponse
   */
  async updateMediaLiveChannelWithOptions(tmpReq: $_model.UpdateMediaLiveChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaLiveChannelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMediaLiveChannelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.audioSettings)) {
      request.audioSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.audioSettings, "AudioSettings", "json");
    }

    if (!$dara.isNull(tmpReq.inputAttachments)) {
      request.inputAttachmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputAttachments, "InputAttachments", "json");
    }

    if (!$dara.isNull(tmpReq.outputGroups)) {
      request.outputGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputGroups, "OutputGroups", "json");
    }

    if (!$dara.isNull(tmpReq.videoSettings)) {
      request.videoSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoSettings, "VideoSettings", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audioSettingsShrink)) {
      body["AudioSettings"] = request.audioSettingsShrink;
    }

    if (!$dara.isNull(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.inputAttachmentsShrink)) {
      body["InputAttachments"] = request.inputAttachmentsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputGroupsShrink)) {
      body["OutputGroups"] = request.outputGroupsShrink;
    }

    if (!$dara.isNull(request.videoSettingsShrink)) {
      body["VideoSettings"] = request.videoSettingsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaLiveChannel",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaLiveChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaLiveChannelResponse({}));
  }

  /**
   * Modifies a MediaLive channel.
   * 
   * @remarks
   *   You can modify a MediaLive channel only when it is not running.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - UpdateMediaLiveChannelRequest
   * @returns UpdateMediaLiveChannelResponse
   */
  async updateMediaLiveChannel(request: $_model.UpdateMediaLiveChannelRequest): Promise<$_model.UpdateMediaLiveChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaLiveChannelWithOptions(request, runtime);
  }

  /**
   * Modifies an input of MediaLive.
   * 
   * @remarks
   *   You can modify an input only when it is not associated with a MediaLive channel.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - UpdateMediaLiveInputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaLiveInputResponse
   */
  async updateMediaLiveInputWithOptions(tmpReq: $_model.UpdateMediaLiveInputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaLiveInputResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMediaLiveInputShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.inputSettings)) {
      request.inputSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputSettings, "InputSettings", "json");
    }

    if (!$dara.isNull(tmpReq.securityGroupIds)) {
      request.securityGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityGroupIds, "SecurityGroupIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.inputSettingsShrink)) {
      query["InputSettings"] = request.inputSettingsShrink;
    }

    if (!$dara.isNull(request.securityGroupIdsShrink)) {
      query["SecurityGroupIds"] = request.securityGroupIdsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputId)) {
      body["InputId"] = request.inputId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaLiveInput",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaLiveInputResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaLiveInputResponse({}));
  }

  /**
   * Modifies an input of MediaLive.
   * 
   * @remarks
   *   You can modify an input only when it is not associated with a MediaLive channel.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - UpdateMediaLiveInputRequest
   * @returns UpdateMediaLiveInputResponse
   */
  async updateMediaLiveInput(request: $_model.UpdateMediaLiveInputRequest): Promise<$_model.UpdateMediaLiveInputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaLiveInputWithOptions(request, runtime);
  }

  /**
   * Modifies a security group created in MediaLive.
   * 
   * @remarks
   *   You can modify a security group only when it is not associated with a MediaLive input.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - UpdateMediaLiveInputSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaLiveInputSecurityGroupResponse
   */
  async updateMediaLiveInputSecurityGroupWithOptions(tmpReq: $_model.UpdateMediaLiveInputSecurityGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaLiveInputSecurityGroupResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMediaLiveInputSecurityGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.whitelistRules)) {
      request.whitelistRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.whitelistRules, "WhitelistRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.whitelistRulesShrink)) {
      body["WhitelistRules"] = request.whitelistRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaLiveInputSecurityGroup",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaLiveInputSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaLiveInputSecurityGroupResponse({}));
  }

  /**
   * Modifies a security group created in MediaLive.
   * 
   * @remarks
   *   You can modify a security group only when it is not associated with a MediaLive input.
   * ## QPS limit
   * This operation can be called up to 50 times per second for each Alibaba Cloud account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - UpdateMediaLiveInputSecurityGroupRequest
   * @returns UpdateMediaLiveInputSecurityGroupResponse
   */
  async updateMediaLiveInputSecurityGroup(request: $_model.UpdateMediaLiveInputSecurityGroupRequest): Promise<$_model.UpdateMediaLiveInputSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaLiveInputSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the marks of a media asset.
   * 
   * @param request - UpdateMediaMarksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaMarksResponse
   */
  async updateMediaMarksWithOptions(request: $_model.UpdateMediaMarksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaMarksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaMarks)) {
      query["MediaMarks"] = request.mediaMarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaMarks",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaMarksResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaMarksResponse({}));
  }

  /**
   * Modifies the marks of a media asset.
   * 
   * @param request - UpdateMediaMarksRequest
   * @returns UpdateMediaMarksResponse
   */
  async updateMediaMarks(request: $_model.UpdateMediaMarksRequest): Promise<$_model.UpdateMediaMarksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaMarksWithOptions(request, runtime);
  }

  /**
   * Updates the media asset information in a search library.
   * 
   * @param request - UpdateMediaToSearchLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaToSearchLibResponse
   */
  async updateMediaToSearchLibWithOptions(request: $_model.UpdateMediaToSearchLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaToSearchLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.msgBody)) {
      query["MsgBody"] = request.msgBody;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.searchLibName)) {
      query["SearchLibName"] = request.searchLibName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMediaToSearchLib",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaToSearchLibResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaToSearchLibResponse({}));
  }

  /**
   * Updates the media asset information in a search library.
   * 
   * @param request - UpdateMediaToSearchLibRequest
   * @returns UpdateMediaToSearchLibResponse
   */
  async updateMediaToSearchLib(request: $_model.UpdateMediaToSearchLibRequest): Promise<$_model.UpdateMediaToSearchLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaToSearchLibWithOptions(request, runtime);
  }

  /**
   * Updates the information about an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - UpdatePipelineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineResponse
   */
  async updatePipelineWithOptions(request: $_model.UpdatePipelineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipeline",
      version: "2020-11-09",
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
   * Updates the information about an ApsaraVideo Media Processing (MPS) queue.
   * 
   * @param request - UpdatePipelineRequest
   * @returns UpdatePipelineResponse
   */
  async updatePipeline(request: $_model.UpdatePipelineRequest): Promise<$_model.UpdatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePipelineWithOptions(request, runtime);
  }

  /**
   * Modifies a program in a MediaWeaver channel.
   * 
   * @param request - UpdateProgramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProgramResponse
   */
  async updateProgramWithOptions(request: $_model.UpdateProgramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProgramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adBreaks)) {
      query["AdBreaks"] = request.adBreaks;
    }

    if (!$dara.isNull(request.channelName)) {
      query["ChannelName"] = request.channelName;
    }

    if (!$dara.isNull(request.clipRange)) {
      query["ClipRange"] = request.clipRange;
    }

    if (!$dara.isNull(request.programName)) {
      query["ProgramName"] = request.programName;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.transition)) {
      query["Transition"] = request.transition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProgram",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProgramResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProgramResponse({}));
  }

  /**
   * Modifies a program in a MediaWeaver channel.
   * 
   * @param request - UpdateProgramRequest
   * @returns UpdateProgramResponse
   */
  async updateProgram(request: $_model.UpdateProgramRequest): Promise<$_model.UpdateProgramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProgramWithOptions(request, runtime);
  }

  /**
   * 修改实例的配置
   * 
   * @param tmpReq - UpdateRtcRobotInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRtcRobotInstanceResponse
   */
  async updateRtcRobotInstanceWithOptions(tmpReq: $_model.UpdateRtcRobotInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRtcRobotInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRtcRobotInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRtcRobotInstance",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRtcRobotInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRtcRobotInstanceResponse({}));
  }

  /**
   * 修改实例的配置
   * 
   * @param request - UpdateRtcRobotInstanceRequest
   * @returns UpdateRtcRobotInstanceResponse
   */
  async updateRtcRobotInstance(request: $_model.UpdateRtcRobotInstanceRequest): Promise<$_model.UpdateRtcRobotInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRtcRobotInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies a source in MediaWeaver.
   * 
   * @param request - UpdateSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSourceResponse
   */
  async updateSourceWithOptions(request: $_model.UpdateSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.httpPackageConfigurations)) {
      query["HttpPackageConfigurations"] = request.httpPackageConfigurations;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    if (!$dara.isNull(request.sourceName)) {
      query["SourceName"] = request.sourceName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSource",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSourceResponse({}));
  }

  /**
   * Modifies a source in MediaWeaver.
   * 
   * @param request - UpdateSourceRequest
   * @returns UpdateSourceResponse
   */
  async updateSource(request: $_model.UpdateSourceRequest): Promise<$_model.UpdateSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSourceWithOptions(request, runtime);
  }

  /**
   * Modifies a source location.
   * 
   * @param request - UpdateSourceLocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSourceLocationResponse
   */
  async updateSourceLocationWithOptions(request: $_model.UpdateSourceLocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSourceLocationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseUrl)) {
      query["BaseUrl"] = request.baseUrl;
    }

    if (!$dara.isNull(request.enableSegmentDelivery)) {
      query["EnableSegmentDelivery"] = request.enableSegmentDelivery;
    }

    if (!$dara.isNull(request.segmentDeliveryUrl)) {
      query["SegmentDeliveryUrl"] = request.segmentDeliveryUrl;
    }

    if (!$dara.isNull(request.sourceLocationName)) {
      query["SourceLocationName"] = request.sourceLocationName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSourceLocation",
      version: "2020-11-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSourceLocationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSourceLocationResponse({}));
  }

  /**
   * Modifies a source location.
   * 
   * @param request - UpdateSourceLocationRequest
   * @returns UpdateSourceLocationResponse
   */
  async updateSourceLocation(request: $_model.UpdateSourceLocationRequest): Promise<$_model.UpdateSourceLocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSourceLocationWithOptions(request, runtime);
  }

  /**
   * Modifies an online editing template. You can modify the template title and template configurations.
   * 
   * @remarks
   *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(request: $_model.UpdateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverUrl)) {
      query["CoverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.previewMedia)) {
      query["PreviewMedia"] = request.previewMedia;
    }

    if (!$dara.isNull(request.relatedMediaids)) {
      query["RelatedMediaids"] = request.relatedMediaids;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2020-11-09",
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
   * Modifies an online editing template. You can modify the template title and template configurations.
   * 
   * @remarks
   *   For more information about how to use a regular template, see [Create and use a regular template](https://help.aliyun.com/document_detail/445399.html).
   * *   For more information about how to use an advanced template, see [Create and use advanced templates](https://help.aliyun.com/document_detail/445389.html).
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * Uploads an audio or video file based on the URL of the source file. You can upload multiple media files at a time.
   * 
   * @remarks
   *   If a callback is configured, you will receive an UploadByURLComplete event notification after the file is uploaded. You can query the upload status by calling the GetURLUploadInfos operation.
   * *   After a request is submitted, the upload job is queued as an asynchronous job in the cloud. You can query the status of the upload job based on information such as the URL and media asset ID that are returned in the event notification.
   * *   You can call this operation to upload media files that are not stored on a local server or device and must be uploaded by using URLs that are accessible over the Internet.
   * *   You can call this operation to upload media files only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media file to an OSS bucket, pull the file to a local directory, use [OSS SDK](https://help.aliyun.com/document_detail/32006.html) to upload the file to an OSS bucket, and then call the [RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html) operation to register the file in the OSS bucket with the media asset library.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * *   You can call this operation to upload only audio and video files.
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

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.mediaMetaData)) {
      query["MediaMetaData"] = request.mediaMetaData;
    }

    if (!$dara.isNull(request.postProcessConfig)) {
      query["PostProcessConfig"] = request.postProcessConfig;
    }

    if (!$dara.isNull(request.uploadTargetConfig)) {
      query["UploadTargetConfig"] = request.uploadTargetConfig;
    }

    if (!$dara.isNull(request.uploadURLs)) {
      query["UploadURLs"] = request.uploadURLs;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadMediaByURL",
      version: "2020-11-09",
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
   * Uploads an audio or video file based on the URL of the source file. You can upload multiple media files at a time.
   * 
   * @remarks
   *   If a callback is configured, you will receive an UploadByURLComplete event notification after the file is uploaded. You can query the upload status by calling the GetURLUploadInfos operation.
   * *   After a request is submitted, the upload job is queued as an asynchronous job in the cloud. You can query the status of the upload job based on information such as the URL and media asset ID that are returned in the event notification.
   * *   You can call this operation to upload media files that are not stored on a local server or device and must be uploaded by using URLs that are accessible over the Internet.
   * *   You can call this operation to upload media files only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media file to an OSS bucket, pull the file to a local directory, use [OSS SDK](https://help.aliyun.com/document_detail/32006.html) to upload the file to an OSS bucket, and then call the [RegisterMediaInfo](https://help.aliyun.com/document_detail/441152.html) operation to register the file in the OSS bucket with the media asset library.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * *   You can call this operation to upload only audio and video files.
   * 
   * @param request - UploadMediaByURLRequest
   * @returns UploadMediaByURLResponse
   */
  async uploadMediaByURL(request: $_model.UploadMediaByURLRequest): Promise<$_model.UploadMediaByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadMediaByURLWithOptions(request, runtime);
  }

  /**
   * Uploads a media stream file based on the URL of the source file.
   * 
   * @remarks
   *   You can call this operation to pull a media stream file based on a URL and upload the file. After the media stream file is uploaded, the media stream is associated with the specified media asset ID.
   * *   You can call this operation to upload media stream files only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media stream file to an OSS bucket, pull the file to a local directory, use [OSS SDK](https://help.aliyun.com/document_detail/32006.html) to upload the file to an OSS bucket, and then call the [RegisterMediaStream](https://help.aliyun.com/document_detail/440765.html) operation to associate the media stream with the specified media asset ID.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
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

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadStreamByURL",
      version: "2020-11-09",
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
   * Uploads a media stream file based on the URL of the source file.
   * 
   * @remarks
   *   You can call this operation to pull a media stream file based on a URL and upload the file. After the media stream file is uploaded, the media stream is associated with the specified media asset ID.
   * *   You can call this operation to upload media stream files only to ApsaraVideo VOD, but not to your own Object Storage Service (OSS) buckets. To upload a media stream file to an OSS bucket, pull the file to a local directory, use [OSS SDK](https://help.aliyun.com/document_detail/32006.html) to upload the file to an OSS bucket, and then call the [RegisterMediaStream](https://help.aliyun.com/document_detail/440765.html) operation to associate the media stream with the specified media asset ID.
   * *   This operation is available only in the China (Shanghai), China (Beijing), and China (Shenzhen) regions.
   * 
   * @param request - UploadStreamByURLRequest
   * @returns UploadStreamByURLResponse
   */
  async uploadStreamByURL(request: $_model.UploadStreamByURLRequest): Promise<$_model.UploadStreamByURLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadStreamByURLWithOptions(request, runtime);
  }

}
