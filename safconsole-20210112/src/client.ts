// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("safconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Used for external deletion of community samples in risk identification services.
   * 
   * @param request - RevokeFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeFeedbackResponse
   */
  async revokeFeedbackWithOptions(request: $_model.RevokeFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeFeedbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sampleType)) {
      body["SampleType"] = request.sampleType;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeFeedback",
      version: "2021-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.RevokeFeedbackResponse({}));
  }

  /**
   * Used for external deletion of community samples in risk identification services.
   * 
   * @param request - RevokeFeedbackRequest
   * @returns RevokeFeedbackResponse
   */
  async revokeFeedback(request: $_model.RevokeFeedbackRequest): Promise<$_model.RevokeFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeFeedbackWithOptions(request, runtime);
  }

  /**
   * Used for the external creation of community samples in risk identification services.
   * 
   * @param request - SendFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFeedbackResponse
   */
  async sendFeedbackWithOptions(request: $_model.SendFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendFeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.riskLabel)) {
      query["RiskLabel"] = request.riskLabel;
    }

    if (!$dara.isNull(request.sampleType)) {
      query["SampleType"] = request.sampleType;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendFeedback",
      version: "2021-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.SendFeedbackResponse({}));
  }

  /**
   * Used for the external creation of community samples in risk identification services.
   * 
   * @param request - SendFeedbackRequest
   * @returns SendFeedbackResponse
   */
  async sendFeedback(request: $_model.SendFeedbackRequest): Promise<$_model.SendFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFeedbackWithOptions(request, runtime);
  }

  /**
   * Single User API for Sample Creation
   * 
   * @param request - UploadSampleApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadSampleApiResponse
   */
  async uploadSampleApiWithOptions(request: $_model.UploadSampleApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadSampleApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.dataValue)) {
      query["DataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.sampleType)) {
      query["SampleType"] = request.sampleType;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadSampleApi",
      version: "2021-01-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadSampleApiResponse>(await this.callApi(params, req, runtime), new $_model.UploadSampleApiResponse({}));
  }

  /**
   * Single User API for Sample Creation
   * 
   * @param request - UploadSampleApiRequest
   * @returns UploadSampleApiResponse
   */
  async uploadSampleApi(request: $_model.UploadSampleApiRequest): Promise<$_model.UploadSampleApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadSampleApiWithOptions(request, runtime);
  }

}
