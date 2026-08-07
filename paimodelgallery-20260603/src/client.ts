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
      'us-west-1': "paimodelgallery.us-west-1.aliyuncs.com",
      'us-east-1': "paimodelgallery.us-east-1.aliyuncs.com",
      'eu-central-1': "paimodelgallery.eu-central-1.aliyuncs.com",
      'cn-wulanchabu': "paimodelgallery.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "paimodelgallery.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "paimodelgallery.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "paimodelgallery.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "paimodelgallery.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "paimodelgallery.cn-guangzhou.aliyuncs.com",
      'cn-beijing': "paimodelgallery.cn-beijing.aliyuncs.com",
      'ap-southeast-5': "paimodelgallery.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "paimodelgallery.ap-southeast-3.aliyuncs.com",
      'ap-southeast-1': "paimodelgallery.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "paimodelgallery.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "paimodelgallery.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paimodelgallery", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取ModelGallery模型列表
   * 
   * @param tmpReq - ListModelGalleryModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelGalleryModelsResponse
   */
  async listModelGalleryModelsWithOptions(tmpReq: $_model.ListModelGalleryModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelGalleryModelsResponse> {
    tmpReq.validate();
    let request = new $_model.ListModelGalleryModelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.conditions)) {
      request.conditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditions, "Conditions", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collections)) {
      query["Collections"] = request.collections;
    }

    if (!$dara.isNull(request.compressible)) {
      query["Compressible"] = request.compressible;
    }

    if (!$dara.isNull(request.conditionsShrink)) {
      query["Conditions"] = request.conditionsShrink;
    }

    if (!$dara.isNull(request.deepThink)) {
      query["DeepThink"] = request.deepThink;
    }

    if (!$dara.isNull(request.demonstrable)) {
      query["Demonstrable"] = request.demonstrable;
    }

    if (!$dara.isNull(request.deployable)) {
      query["Deployable"] = request.deployable;
    }

    if (!$dara.isNull(request.distillable)) {
      query["Distillable"] = request.distillable;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.evaluable)) {
      query["Evaluable"] = request.evaluable;
    }

    if (!$dara.isNull(request.functionCall)) {
      query["FunctionCall"] = request.functionCall;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelSeries)) {
      query["ModelSeries"] = request.modelSeries;
    }

    if (!$dara.isNull(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.supportedCompressionResource)) {
      query["SupportedCompressionResource"] = request.supportedCompressionResource;
    }

    if (!$dara.isNull(request.supportedDistillationResource)) {
      query["SupportedDistillationResource"] = request.supportedDistillationResource;
    }

    if (!$dara.isNull(request.supportedEvaluationResource)) {
      query["SupportedEvaluationResource"] = request.supportedEvaluationResource;
    }

    if (!$dara.isNull(request.supportedInferenceResource)) {
      query["SupportedInferenceResource"] = request.supportedInferenceResource;
    }

    if (!$dara.isNull(request.supportedTrainingResource)) {
      query["SupportedTrainingResource"] = request.supportedTrainingResource;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.task)) {
      query["Task"] = request.task;
    }

    if (!$dara.isNull(request.trainable)) {
      query["Trainable"] = request.trainable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelGalleryModels",
      version: "2026-06-03",
      protocol: "HTTPS",
      pathname: `/api/v2/modelgallery/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelGalleryModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelGalleryModelsResponse({}));
  }

  /**
   * 获取ModelGallery模型列表
   * 
   * @param request - ListModelGalleryModelsRequest
   * @returns ListModelGalleryModelsResponse
   */
  async listModelGalleryModels(request: $_model.ListModelGalleryModelsRequest): Promise<$_model.ListModelGalleryModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelGalleryModelsWithOptions(request, headers, runtime);
  }

}
