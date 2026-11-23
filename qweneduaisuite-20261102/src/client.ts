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
    this._productId = "QwenEduAiSuite";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qweneduaisuite", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates the learning capability for the current Alibaba Cloud account and supports querying the activation status.
   * 
   * @remarks
   * ## Request description
   * - This operation activates the Qwen learning AI suite capability for the current Alibaba Cloud account.
   * - You must call this operation first. You can call business API operations such as problem solving and grading only after `ACTIVE` is returned.
   * ### Precautions
   * - Both Alibaba Cloud accounts and RAM users can call this operation.
   * - When a RAM user calls this operation, ensure that the RAM user has the required RAM permissions. The service is activated for the Alibaba Cloud account to which the RAM user belongs.
   * - This operation is idempotent based on the Alibaba Cloud account ID. Repeated calls do not result in multiple activations.
   * 
   * @param request - ActivateQwenEduApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateQwenEduApiResponse
   */
  async activateQwenEduApiWithOptions(request: $_model.ActivateQwenEduApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateQwenEduApiResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateQwenEduApi",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/service/activate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateQwenEduApiResponse>(await this.callApi(params, req, runtime), new $_model.ActivateQwenEduApiResponse({}));
  }

  /**
   * Activates the learning capability for the current Alibaba Cloud account and supports querying the activation status.
   * 
   * @remarks
   * ## Request description
   * - This operation activates the Qwen learning AI suite capability for the current Alibaba Cloud account.
   * - You must call this operation first. You can call business API operations such as problem solving and grading only after `ACTIVE` is returned.
   * ### Precautions
   * - Both Alibaba Cloud accounts and RAM users can call this operation.
   * - When a RAM user calls this operation, ensure that the RAM user has the required RAM permissions. The service is activated for the Alibaba Cloud account to which the RAM user belongs.
   * - This operation is idempotent based on the Alibaba Cloud account ID. Repeated calls do not result in multiple activations.
   * 
   * @param request - ActivateQwenEduApiRequest
   * @returns ActivateQwenEduApiResponse
   */
  async activateQwenEduApi(request: $_model.ActivateQwenEduApiRequest): Promise<$_model.ActivateQwenEduApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateQwenEduApiWithOptions(request, headers, runtime);
  }

  /**
   * Submits a single-page homework image and asynchronously retrieves the grading results.
   * 
   * @remarks
   * ## Request description
   * - This operation submits a homework image to the server for question segmentation, recognition, and grading.
   * - You can submit the image by using `imageBase64` or `imageUrl`. `imageBase64` takes precedence.
   * - The optional `dewarp` parameter specifies whether to correct the image distortion. Default value: `true`.
   * - Provide `requestId` to facilitate troubleshooting and reconciliation.
   * - Image size limit: The Base64-encoded image size cannot exceed 15 MB.
   * - All requests and responses use the JSON format.
   * 
   * @param request - CreateEduHomeworkCorrectSubmitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEduHomeworkCorrectSubmitResponse
   */
  async createEduHomeworkCorrectSubmitWithOptions(request: $_model.CreateEduHomeworkCorrectSubmitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEduHomeworkCorrectSubmitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dewarp)) {
      body["dewarp"] = request.dewarp;
    }

    if (!$dara.isNull(request.imageBase64)) {
      body["imageBase64"] = request.imageBase64;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEduHomeworkCorrectSubmit",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/homework/correct/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEduHomeworkCorrectSubmitResponse>(await this.callApi(params, req, runtime), new $_model.CreateEduHomeworkCorrectSubmitResponse({}));
  }

  /**
   * Submits a single-page homework image and asynchronously retrieves the grading results.
   * 
   * @remarks
   * ## Request description
   * - This operation submits a homework image to the server for question segmentation, recognition, and grading.
   * - You can submit the image by using `imageBase64` or `imageUrl`. `imageBase64` takes precedence.
   * - The optional `dewarp` parameter specifies whether to correct the image distortion. Default value: `true`.
   * - Provide `requestId` to facilitate troubleshooting and reconciliation.
   * - Image size limit: The Base64-encoded image size cannot exceed 15 MB.
   * - All requests and responses use the JSON format.
   * 
   * @param request - CreateEduHomeworkCorrectSubmitRequest
   * @returns CreateEduHomeworkCorrectSubmitResponse
   */
  async createEduHomeworkCorrectSubmit(request: $_model.CreateEduHomeworkCorrectSubmitRequest): Promise<$_model.CreateEduHomeworkCorrectSubmitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEduHomeworkCorrectSubmitWithOptions(request, headers, runtime);
  }

  /**
   * Provides question resolution services by using image URLs or Base64 encoding.
   * 
   * @remarks
   * ## Request description
   * - This API supports obtaining question resolution results by providing the URL or Base64 encoding of a question image.
   * - Supports processing a single image. The image format must be JPG, JPEG, or PNG.
   * - The image must be clear and complete. Avoid tilted, obscured, or irrelevant content.
   * - Each request can process only one image. Multi-image or plain text requests are not supported.
   * - The recommended image size is up to 1 MB, with a maximum of 10 MB. The image width and height must not exceed 8,000 pixels, and the total pixel count must not exceed 2.6 million.
   * - You must use the HTTPS protocol to call the API and provide image URLs.
   * - The user_id parameter must be an anonymized identifier. Do not pass direct identity information such as names or phone numbers.
   * - The API uses the HTTP POST method combined with Server-Sent Events (SSE) streaming response. The client must read the response event by event, rather than waiting for the connection to close to read the entire response.
   * - A successful response returns the question resolution process through a series of message events and ends with a complete event. If an error occurs, an error event is returned.
   * - For retryable errors such as TOO_MANY_ACTIVE_STREAMS, use an exponential backoff strategy to retry the request.
   * - Set a reasonable timeout period of at least 3 minutes on the client, and ensure that the proxy layer does not cache SSE responses.
   * 
   * @param tmpReq - CreateEduProblemSolveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEduProblemSolveResponse
   */
  async *createEduProblemSolveWithSSE(tmpReq: $_model.CreateEduProblemSolveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateEduProblemSolveResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.CreateEduProblemSolveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "query", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryShrink)) {
      body["query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEduProblemSolve",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/problem/solve/stream`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.CreateEduProblemSolveResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CreateEduProblemSolveResponse({}));
      }

    }
  }

  /**
   * Provides question resolution services by using image URLs or Base64 encoding.
   * 
   * @remarks
   * ## Request description
   * - This API supports obtaining question resolution results by providing the URL or Base64 encoding of a question image.
   * - Supports processing a single image. The image format must be JPG, JPEG, or PNG.
   * - The image must be clear and complete. Avoid tilted, obscured, or irrelevant content.
   * - Each request can process only one image. Multi-image or plain text requests are not supported.
   * - The recommended image size is up to 1 MB, with a maximum of 10 MB. The image width and height must not exceed 8,000 pixels, and the total pixel count must not exceed 2.6 million.
   * - You must use the HTTPS protocol to call the API and provide image URLs.
   * - The user_id parameter must be an anonymized identifier. Do not pass direct identity information such as names or phone numbers.
   * - The API uses the HTTP POST method combined with Server-Sent Events (SSE) streaming response. The client must read the response event by event, rather than waiting for the connection to close to read the entire response.
   * - A successful response returns the question resolution process through a series of message events and ends with a complete event. If an error occurs, an error event is returned.
   * - For retryable errors such as TOO_MANY_ACTIVE_STREAMS, use an exponential backoff strategy to retry the request.
   * - Set a reasonable timeout period of at least 3 minutes on the client, and ensure that the proxy layer does not cache SSE responses.
   * 
   * @param tmpReq - CreateEduProblemSolveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEduProblemSolveResponse
   */
  async createEduProblemSolveWithOptions(tmpReq: $_model.CreateEduProblemSolveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEduProblemSolveResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEduProblemSolveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "query", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryShrink)) {
      body["query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEduProblemSolve",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/problem/solve/stream`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEduProblemSolveResponse>(await this.callApi(params, req, runtime), new $_model.CreateEduProblemSolveResponse({}));
  }

  /**
   * Provides question resolution services by using image URLs or Base64 encoding.
   * 
   * @remarks
   * ## Request description
   * - This API supports obtaining question resolution results by providing the URL or Base64 encoding of a question image.
   * - Supports processing a single image. The image format must be JPG, JPEG, or PNG.
   * - The image must be clear and complete. Avoid tilted, obscured, or irrelevant content.
   * - Each request can process only one image. Multi-image or plain text requests are not supported.
   * - The recommended image size is up to 1 MB, with a maximum of 10 MB. The image width and height must not exceed 8,000 pixels, and the total pixel count must not exceed 2.6 million.
   * - You must use the HTTPS protocol to call the API and provide image URLs.
   * - The user_id parameter must be an anonymized identifier. Do not pass direct identity information such as names or phone numbers.
   * - The API uses the HTTP POST method combined with Server-Sent Events (SSE) streaming response. The client must read the response event by event, rather than waiting for the connection to close to read the entire response.
   * - A successful response returns the question resolution process through a series of message events and ends with a complete event. If an error occurs, an error event is returned.
   * - For retryable errors such as TOO_MANY_ACTIVE_STREAMS, use an exponential backoff strategy to retry the request.
   * - Set a reasonable timeout period of at least 3 minutes on the client, and ensure that the proxy layer does not cache SSE responses.
   * 
   * @param request - CreateEduProblemSolveRequest
   * @returns CreateEduProblemSolveResponse
   */
  async createEduProblemSolve(request: $_model.CreateEduProblemSolveRequest): Promise<$_model.CreateEduProblemSolveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEduProblemSolveWithOptions(request, headers, runtime);
  }

  /**
   * Queries the progress and final results of homework grading based on the task ID.
   * 
   * @remarks
   * ## Request description
   * - This operation queries the status and detailed results of single-page homework grading by using the `taskId` returned when the task is submitted.
   * - The caller should poll this operation at an interval of 1 to 2 seconds until the task status changes to `finished` or `failed`.
   * - When the task status is `finished`, the response contains complete grading information, including question recognition, grading conclusions, dewarped images, and rendered images.
   * - If the task fails (the status is `failed`), check the `message` field in the response or the specific fault information in `data`.
   * - All requests and responses are in JSON format.
   * 
   * @param request - GetEduHomeworkCorrectionResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEduHomeworkCorrectionResultResponse
   */
  async getEduHomeworkCorrectionResultWithOptions(request: $_model.GetEduHomeworkCorrectionResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEduHomeworkCorrectionResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEduHomeworkCorrectionResult",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/homework/correct/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEduHomeworkCorrectionResultResponse>(await this.callApi(params, req, runtime), new $_model.GetEduHomeworkCorrectionResultResponse({}));
  }

  /**
   * Queries the progress and final results of homework grading based on the task ID.
   * 
   * @remarks
   * ## Request description
   * - This operation queries the status and detailed results of single-page homework grading by using the `taskId` returned when the task is submitted.
   * - The caller should poll this operation at an interval of 1 to 2 seconds until the task status changes to `finished` or `failed`.
   * - When the task status is `finished`, the response contains complete grading information, including question recognition, grading conclusions, dewarped images, and rendered images.
   * - If the task fails (the status is `failed`), check the `message` field in the response or the specific fault information in `data`.
   * - All requests and responses are in JSON format.
   * 
   * @param request - GetEduHomeworkCorrectionResultRequest
   * @returns GetEduHomeworkCorrectionResultResponse
   */
  async getEduHomeworkCorrectionResult(request: $_model.GetEduHomeworkCorrectionResultRequest): Promise<$_model.GetEduHomeworkCorrectionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEduHomeworkCorrectionResultWithOptions(request, headers, runtime);
  }

  /**
   * Queries whether the current account has activated Qwen education-related services.
   * 
   * @remarks
   * ## Request description
   * This operation queries whether a specified Alibaba Cloud account or RAM user has successfully activated the Qwen learning AI suite. Before calling any business API operations, you must use this operation to confirm that the service status is `ACTIVE`. If the service is not activated, perform the corresponding operations based on the returned status information, such as waiting for a period of time and retrying.
   * ### Precautions
   * - This operation supports calls from Alibaba Cloud accounts and RAM users.
   * - When a RAM user calls this operation, make sure that the RAM user has the required RAM permissions. The service is activated for the Alibaba Cloud account to which the RAM user belongs.
   * - This operation is idempotent based on the Alibaba Cloud account ID. Repeated calls do not result in multiple activations.
   * - If the status is `ACTIVATING`, retry the query after the time interval recommended by the returned `retry_after_seconds` field.
   * - If a failure occurs (`FAILED`), refer to the specific error code, take corresponding measures, and then try again.
   * 
   * @param request - GetQwenEduApiActivationStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQwenEduApiActivationStatusResponse
   */
  async getQwenEduApiActivationStatusWithOptions(request: $_model.GetQwenEduApiActivationStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQwenEduApiActivationStatusResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQwenEduApiActivationStatus",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/service/activation/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQwenEduApiActivationStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetQwenEduApiActivationStatusResponse({}));
  }

  /**
   * Queries whether the current account has activated Qwen education-related services.
   * 
   * @remarks
   * ## Request description
   * This operation queries whether a specified Alibaba Cloud account or RAM user has successfully activated the Qwen learning AI suite. Before calling any business API operations, you must use this operation to confirm that the service status is `ACTIVE`. If the service is not activated, perform the corresponding operations based on the returned status information, such as waiting for a period of time and retrying.
   * ### Precautions
   * - This operation supports calls from Alibaba Cloud accounts and RAM users.
   * - When a RAM user calls this operation, make sure that the RAM user has the required RAM permissions. The service is activated for the Alibaba Cloud account to which the RAM user belongs.
   * - This operation is idempotent based on the Alibaba Cloud account ID. Repeated calls do not result in multiple activations.
   * - If the status is `ACTIVATING`, retry the query after the time interval recommended by the returned `retry_after_seconds` field.
   * - If a failure occurs (`FAILED`), refer to the specific error code, take corresponding measures, and then try again.
   * 
   * @param request - GetQwenEduApiActivationStatusRequest
   * @returns GetQwenEduApiActivationStatusResponse
   */
  async getQwenEduApiActivationStatus(request: $_model.GetQwenEduApiActivationStatusRequest): Promise<$_model.GetQwenEduApiActivationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQwenEduApiActivationStatusWithOptions(request, headers, runtime);
  }

}
