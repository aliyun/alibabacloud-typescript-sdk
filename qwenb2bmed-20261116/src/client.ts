// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "QwenB2BMed";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qwenb2bmed", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Initiates a conversation with the Qwen medical agent.
   * 
   * @param request - MedicalAgentChatRequest
   * @param headers - MedicalAgentChatHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalAgentChatResponse
   */
  async *medicalAgentChatWithSSE(request: $_model.MedicalAgentChatRequest, headers: $_model.MedicalAgentChatHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.MedicalAgentChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalAgentChat",
      version: "2026-11-16",
      protocol: "HTTPS",
      pathname: `/v1/api/medicalQa`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.MedicalAgentChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.MedicalAgentChatResponse({}));
      }

    }
  }

  /**
   * Initiates a conversation with the Qwen medical agent.
   * 
   * @param request - MedicalAgentChatRequest
   * @param headers - MedicalAgentChatHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalAgentChatResponse
   */
  async medicalAgentChatWithOptions(request: $_model.MedicalAgentChatRequest, headers: $_model.MedicalAgentChatHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MedicalAgentChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalAgentChat",
      version: "2026-11-16",
      protocol: "HTTPS",
      pathname: `/v1/api/medicalQa`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MedicalAgentChatResponse>(await this.callApi(params, req, runtime), new $_model.MedicalAgentChatResponse({}));
  }

  /**
   * Initiates a conversation with the Qwen medical agent.
   * 
   * @param request - MedicalAgentChatRequest
   * @returns MedicalAgentChatResponse
   */
  async medicalAgentChat(request: $_model.MedicalAgentChatRequest): Promise<$_model.MedicalAgentChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MedicalAgentChatHeaders({ });
    return await this.medicalAgentChatWithOptions(request, headers, runtime);
  }

  /**
   * Performs inference using the external Qwen medical foundation model.
   * 
   * @param request - MedicalModelInferenceRequest
   * @param headers - MedicalModelInferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalModelInferenceResponse
   */
  async *medicalModelInferenceWithSSE(request: $_model.MedicalModelInferenceRequest, headers: $_model.MedicalModelInferenceHeaders, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.MedicalModelInferenceResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalModelInference",
      version: "2026-11-16",
      protocol: "HTTPS",
      pathname: `/v1/api/directModel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.MedicalModelInferenceResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.MedicalModelInferenceResponse({}));
      }

    }
  }

  /**
   * Performs inference using the external Qwen medical foundation model.
   * 
   * @param request - MedicalModelInferenceRequest
   * @param headers - MedicalModelInferenceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalModelInferenceResponse
   */
  async medicalModelInferenceWithOptions(request: $_model.MedicalModelInferenceRequest, headers: $_model.MedicalModelInferenceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.MedicalModelInferenceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWProtocol)) {
      realHeaders["X-GW-Protocol"] = String(headers.xGWProtocol);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalModelInference",
      version: "2026-11-16",
      protocol: "HTTPS",
      pathname: `/v1/api/directModel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MedicalModelInferenceResponse>(await this.callApi(params, req, runtime), new $_model.MedicalModelInferenceResponse({}));
  }

  /**
   * Performs inference using the external Qwen medical foundation model.
   * 
   * @param request - MedicalModelInferenceRequest
   * @returns MedicalModelInferenceResponse
   */
  async medicalModelInference(request: $_model.MedicalModelInferenceRequest): Promise<$_model.MedicalModelInferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.MedicalModelInferenceHeaders({ });
    return await this.medicalModelInferenceWithOptions(request, headers, runtime);
  }

  /**
   * Activates the Qwen medical service and returns the current activation status.
   * 
   * @param request - OpenServiceRequest
   * @param headers - OpenServiceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenServiceResponse
   */
  async openServiceWithOptions(request: $_model.OpenServiceRequest, headers: $_model.OpenServiceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OpenServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.communication)) {
      body["communication"] = request.communication;
    }

    if (!$dara.isNull(request.openBenefits)) {
      body["openBenefits"] = request.openBenefits;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xGWAccess)) {
      realHeaders["X-GW-Access"] = String(headers.xGWAccess);
    }

    if (!$dara.isNull(headers.xGWNonce)) {
      realHeaders["X-GW-Nonce"] = String(headers.xGWNonce);
    }

    if (!$dara.isNull(headers.xGWSignature)) {
      realHeaders["X-GW-Signature"] = String(headers.xGWSignature);
    }

    if (!$dara.isNull(headers.xGWTimestamp)) {
      realHeaders["X-GW-Timestamp"] = String(headers.xGWTimestamp);
    }

    if (!$dara.isNull(headers.xRequestId)) {
      realHeaders["X-Request-Id"] = String(headers.xRequestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenService",
      version: "2026-11-16",
      protocol: "HTTPS",
      pathname: `/v1/api/medical/openService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenServiceResponse({}));
  }

  /**
   * Activates the Qwen medical service and returns the current activation status.
   * 
   * @param request - OpenServiceRequest
   * @returns OpenServiceResponse
   */
  async openService(request: $_model.OpenServiceRequest): Promise<$_model.OpenServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OpenServiceHeaders({ });
    return await this.openServiceWithOptions(request, headers, runtime);
  }

}
