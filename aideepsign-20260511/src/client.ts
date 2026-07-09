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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aideepsign", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an asynchronous image detection task that supports AIGC and tampering detection.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an asynchronous image detection task that supports automatic classification, AIGC detection, and tampering detection.
   * - You must specify at least one of `ImageUrl` and `ObjectKey`. If both are specified, `ObjectKey` takes precedence.
   * - If you set `DetectType` to `auto`, the system automatically determines whether to perform AIGC detection or tampering detection based on the image content.
   * 
   * @param request - CreateImageDetectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageDetectionTaskResponse
   */
  async createImageDetectionTaskWithOptions(request: $_model.CreateImageDetectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageDetectionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.credType)) {
      query["CredType"] = request.credType;
    }

    if (!$dara.isNull(request.detectType)) {
      query["DetectType"] = request.detectType;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageDetectionTask",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageDetectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageDetectionTaskResponse({}));
  }

  /**
   * Creates an asynchronous image detection task that supports AIGC and tampering detection.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an asynchronous image detection task that supports automatic classification, AIGC detection, and tampering detection.
   * - You must specify at least one of `ImageUrl` and `ObjectKey`. If both are specified, `ObjectKey` takes precedence.
   * - If you set `DetectType` to `auto`, the system automatically determines whether to perform AIGC detection or tampering detection based on the image content.
   * 
   * @param request - CreateImageDetectionTaskRequest
   * @returns CreateImageDetectionTaskResponse
   */
  async createImageDetectionTask(request: $_model.CreateImageDetectionTaskRequest): Promise<$_model.CreateImageDetectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageDetectionTaskWithOptions(request, runtime);
  }

  /**
   * Generates images based on a provided text description and returns a task ID.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an AI image generation task. The system generates images based on the positive prompt provided by the user.
   * - You can configure parameters such as negative prompt, model, and image size to optimize the generation results.
   * - By default, generated images are automatically embedded with a C2PA digital signature. You can optionally add a watermark in the lower-right corner.
   * - Set the ClientToken parameter to ensure the idempotence of the request and guarantee uniqueness across different requests.
   * - After the task is created, call the GetImageTaskResult operation with the TaskId to query the generation results.
   * 
   * @param request - CreateImageTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageTaskResponse
   */
  async createImageTaskWithOptions(request: $_model.CreateImageTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      query["N"] = request.n;
    }

    if (!$dara.isNull(request.negativePrompt)) {
      query["NegativePrompt"] = request.negativePrompt;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.promptExtend)) {
      query["PromptExtend"] = request.promptExtend;
    }

    if (!$dara.isNull(request.seed)) {
      query["Seed"] = request.seed;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageTask",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageTaskResponse({}));
  }

  /**
   * Generates images based on a provided text description and returns a task ID.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an AI image generation task. The system generates images based on the positive prompt provided by the user.
   * - You can configure parameters such as negative prompt, model, and image size to optimize the generation results.
   * - By default, generated images are automatically embedded with a C2PA digital signature. You can optionally add a watermark in the lower-right corner.
   * - Set the ClientToken parameter to ensure the idempotence of the request and guarantee uniqueness across different requests.
   * - After the task is created, call the GetImageTaskResult operation with the TaskId to query the generation results.
   * 
   * @param request - CreateImageTaskRequest
   * @returns CreateImageTaskResponse
   */
  async createImageTask(request: $_model.CreateImageTaskRequest): Promise<$_model.CreateImageTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image sensitive information scan task and returns the task ID.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an image sensitive information scan task. The system performs sensitive data identification on the specified image.
   * - You can specify the image to scan by using an image URL or an OSS ObjectKey.
   * - The image size cannot exceed 10 MB.
   * - You must specify at least one of ImageUrl and ObjectKey. If both are specified, ObjectKey takes precedence.
   * - When you use ObjectKey, make sure that the key belongs to the namespace of the current caller. Cross-tenant access is not allowed.
   * - You can use the ClientToken parameter to ensure the idempotence of the request.
   * 
   * @param request - CreateSensitiveScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSensitiveScanTaskResponse
   */
  async createSensitiveScanTaskWithOptions(request: $_model.CreateSensitiveScanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSensitiveScanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSensitiveScanTask",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSensitiveScanTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSensitiveScanTaskResponse({}));
  }

  /**
   * Creates an image sensitive information scan task and returns the task ID.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates an image sensitive information scan task. The system performs sensitive data identification on the specified image.
   * - You can specify the image to scan by using an image URL or an OSS ObjectKey.
   * - The image size cannot exceed 10 MB.
   * - You must specify at least one of ImageUrl and ObjectKey. If both are specified, ObjectKey takes precedence.
   * - When you use ObjectKey, make sure that the key belongs to the namespace of the current caller. Cross-tenant access is not allowed.
   * - You can use the ClientToken parameter to ensure the idempotence of the request.
   * 
   * @param request - CreateSensitiveScanTaskRequest
   * @returns CreateSensitiveScanTaskResponse
   */
  async createSensitiveScanTask(request: $_model.CreateSensitiveScanTaskRequest): Promise<$_model.CreateSensitiveScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSensitiveScanTaskWithOptions(request, runtime);
  }

  /**
   * Determines whether an image is AI-generated and returns detection labels and confidence levels.
   * 
   * @remarks
   * ## Operation description
   * - This operation detects whether a specified image is AI-generated content (AIGC). You can specify the image to detect by using an image URL or an OSS ObjectKey.
   * - You must provide at least one of ImageUrl and ObjectKey. If both are provided, ObjectKey takes precedence.
   * - When you use the ObjectKey method, the system verifies whether the ObjectKey belongs to the current caller. Cross-tenant access is not allowed.
   * - This is a synchronous operation suitable for real-time detection of a single image. To perform asynchronous detection or credential detection at the same time, use the CreateImageDetectionTask operation.
   * 
   * @param request - DetectAigcImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectAigcImageResponse
   */
  async detectAigcImageWithOptions(request: $_model.DetectAigcImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectAigcImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectAigcImage",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectAigcImageResponse>(await this.callApi(params, req, runtime), new $_model.DetectAigcImageResponse({}));
  }

  /**
   * Determines whether an image is AI-generated and returns detection labels and confidence levels.
   * 
   * @remarks
   * ## Operation description
   * - This operation detects whether a specified image is AI-generated content (AIGC). You can specify the image to detect by using an image URL or an OSS ObjectKey.
   * - You must provide at least one of ImageUrl and ObjectKey. If both are provided, ObjectKey takes precedence.
   * - When you use the ObjectKey method, the system verifies whether the ObjectKey belongs to the current caller. Cross-tenant access is not allowed.
   * - This is a synchronous operation suitable for real-time detection of a single image. To perform asynchronous detection or credential detection at the same time, use the CreateImageDetectionTask operation.
   * 
   * @param request - DetectAigcImageRequest
   * @returns DetectAigcImageResponse
   */
  async detectAigcImage(request: $_model.DetectAigcImageRequest): Promise<$_model.DetectAigcImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectAigcImageWithOptions(request, runtime);
  }

  /**
   * Retrieves basic information about a specified image, such as the file name, format, size, and resolution.
   * 
   * @remarks
   * ## Description
   * - This operation detects and returns basic information about an image, including but not limited to the file name, image format (such as JPEG or PNG), file size, and resolution.
   * - You can specify the image to detect by providing an image URL or an OSS ObjectKey. If both ImageUrl and ObjectKey are provided, ObjectKey takes precedence.
   * - When using ObjectKey, ensure that the object belongs to the namespace of the current caller. Cross-tenant access is not allowed.
   * - The optional parameter ClientToken ensures the idempotence of the request. Generate a new unique value for each request.
   * 
   * @param request - DetectImageBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageBasicInfoResponse
   */
  async detectImageBasicInfoWithOptions(request: $_model.DetectImageBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageBasicInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageBasicInfo",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageBasicInfoResponse({}));
  }

  /**
   * Retrieves basic information about a specified image, such as the file name, format, size, and resolution.
   * 
   * @remarks
   * ## Description
   * - This operation detects and returns basic information about an image, including but not limited to the file name, image format (such as JPEG or PNG), file size, and resolution.
   * - You can specify the image to detect by providing an image URL or an OSS ObjectKey. If both ImageUrl and ObjectKey are provided, ObjectKey takes precedence.
   * - When using ObjectKey, ensure that the object belongs to the namespace of the current caller. Cross-tenant access is not allowed.
   * - The optional parameter ClientToken ensures the idempotence of the request. Generate a new unique value for each request.
   * 
   * @param request - DetectImageBasicInfoRequest
   * @returns DetectImageBasicInfoResponse
   */
  async detectImageBasicInfo(request: $_model.DetectImageBasicInfoRequest): Promise<$_model.DetectImageBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageBasicInfoWithOptions(request, runtime);
  }

  /**
   * Queries the status and results of an image detection task, including AIGC detection labels and tamper detection results.
   * 
   * @remarks
   * ## Operation description
   * Call this operation to query the execution status and results of an asynchronous detection task created by `CreateImageDetectionTask`. Poll at intervals of 2 to 5 seconds until the task status changes to `succeeded` or `failed`.
   * ### Before you begin
   * - Use a valid `TaskId` for the query.
   * - If the task is not complete, increase the polling interval to avoid unnecessary resource consumption caused by frequent requests.
   * 
   * @param request - GetImageDetectionTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageDetectionTaskResultResponse
   */
  async getImageDetectionTaskResultWithOptions(request: $_model.GetImageDetectionTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageDetectionTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageDetectionTaskResult",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageDetectionTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetImageDetectionTaskResultResponse({}));
  }

  /**
   * Queries the status and results of an image detection task, including AIGC detection labels and tamper detection results.
   * 
   * @remarks
   * ## Operation description
   * Call this operation to query the execution status and results of an asynchronous detection task created by `CreateImageDetectionTask`. Poll at intervals of 2 to 5 seconds until the task status changes to `succeeded` or `failed`.
   * ### Before you begin
   * - Use a valid `TaskId` for the query.
   * - If the task is not complete, increase the polling interval to avoid unnecessary resource consumption caused by frequent requests.
   * 
   * @param request - GetImageDetectionTaskResultRequest
   * @returns GetImageDetectionTaskResultResponse
   */
  async getImageDetectionTaskResult(request: $_model.GetImageDetectionTaskResultRequest): Promise<$_model.GetImageDetectionTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageDetectionTaskResultWithOptions(request, runtime);
  }

  /**
   * Queries the status and result of an asynchronous image generation task and retrieves the image download URL.
   * 
   * @remarks
   * ## Operation description
   * - Call this operation to query the execution status and result of an asynchronous image generation task created by `CreateImageTask`.
   * - Poll at intervals of 2 to 5 seconds until the task status changes to `succeeded` or `failed`.
   * - The image download URL (Url) returned after the task succeeds is a pre-signed URL that is valid for 1 hour.
   * - To ensure idempotence of the request, set the `ClientToken` parameter.
   * 
   * @param request - GetImageTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageTaskResultResponse
   */
  async getImageTaskResultWithOptions(request: $_model.GetImageTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageTaskResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageTaskResult",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetImageTaskResultResponse({}));
  }

  /**
   * Queries the status and result of an asynchronous image generation task and retrieves the image download URL.
   * 
   * @remarks
   * ## Operation description
   * - Call this operation to query the execution status and result of an asynchronous image generation task created by `CreateImageTask`.
   * - Poll at intervals of 2 to 5 seconds until the task status changes to `succeeded` or `failed`.
   * - The image download URL (Url) returned after the task succeeds is a pre-signed URL that is valid for 1 hour.
   * - To ensure idempotence of the request, set the `ClientToken` parameter.
   * 
   * @param request - GetImageTaskResultRequest
   * @returns GetImageTaskResultResponse
   */
  async getImageTaskResult(request: $_model.GetImageTaskResultRequest): Promise<$_model.GetImageTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageTaskResultWithOptions(request, runtime);
  }

  /**
   * Queries the status and result of a sensitive information scan task and returns the details of the sensitive data discovered during the scan.
   * 
   * @remarks
   * ## Operation description
   * - Call this operation to query the execution status and result of a sensitive information scan task created by `CreateSensitiveScanTask`.
   * - Poll at intervals of 3 to 5 seconds until the task status changes to `completed` or `terminated`.
   * - The `ClientToken` parameter ensures the idempotence of the request. It is generated by the client, must be unique across different requests, supports ASCII characters, and cannot exceed 64 characters in length.
   * 
   * @param request - GetSensitiveScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSensitiveScanResultResponse
   */
  async getSensitiveScanResultWithOptions(request: $_model.GetSensitiveScanResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSensitiveScanResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSensitiveScanResult",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSensitiveScanResultResponse>(await this.callApi(params, req, runtime), new $_model.GetSensitiveScanResultResponse({}));
  }

  /**
   * Queries the status and result of a sensitive information scan task and returns the details of the sensitive data discovered during the scan.
   * 
   * @remarks
   * ## Operation description
   * - Call this operation to query the execution status and result of a sensitive information scan task created by `CreateSensitiveScanTask`.
   * - Poll at intervals of 3 to 5 seconds until the task status changes to `completed` or `terminated`.
   * - The `ClientToken` parameter ensures the idempotence of the request. It is generated by the client, must be unique across different requests, supports ASCII characters, and cannot exceed 64 characters in length.
   * 
   * @param request - GetSensitiveScanResultRequest
   * @returns GetSensitiveScanResultResponse
   */
  async getSensitiveScanResult(request: $_model.GetSensitiveScanResultRequest): Promise<$_model.GetSensitiveScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSensitiveScanResultWithOptions(request, runtime);
  }

  /**
   * Embeds a C2PA digital signature into a user-uploaded image and returns the download URL.
   * 
   * @remarks
   * ## Operation description
   * - Specify at least one of `ImageUrl` and `ObjectKey`. If both are specified, `ObjectKey` takes precedence.
   * - When you use `ObjectKey`, the system verifies that the `ObjectKey` belongs to the current caller. Cross-tenant access is not allowed.
   * - Supported image formats are JPEG and PNG. Unsupported formats return the `C2PA_FORMAT_UNSUPPORTED` error.
   * - If the original image already contains a C2PA signature, the system retains the original signature as an ingredient and appends a new signature.
   * - Use the `ClientToken` parameter to ensure idempotence. Make sure the value is unique across different requests and does not exceed 64 characters.
   * 
   * @param request - SignUserImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignUserImageResponse
   */
  async signUserImageWithOptions(request: $_model.SignUserImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SignUserImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SignUserImage",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SignUserImageResponse>(await this.callApi(params, req, runtime), new $_model.SignUserImageResponse({}));
  }

  /**
   * Embeds a C2PA digital signature into a user-uploaded image and returns the download URL.
   * 
   * @remarks
   * ## Operation description
   * - Specify at least one of `ImageUrl` and `ObjectKey`. If both are specified, `ObjectKey` takes precedence.
   * - When you use `ObjectKey`, the system verifies that the `ObjectKey` belongs to the current caller. Cross-tenant access is not allowed.
   * - Supported image formats are JPEG and PNG. Unsupported formats return the `C2PA_FORMAT_UNSUPPORTED` error.
   * - If the original image already contains a C2PA signature, the system retains the original signature as an ingredient and appends a new signature.
   * - Use the `ClientToken` parameter to ensure idempotence. Make sure the value is unique across different requests and does not exceed 64 characters.
   * 
   * @param request - SignUserImageRequest
   * @returns SignUserImageResponse
   */
  async signUserImage(request: $_model.SignUserImageRequest): Promise<$_model.SignUserImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signUserImageWithOptions(request, runtime);
  }

  /**
   * Verifies the C2PA digital signature in an image and returns the signature status and issuer information.
   * 
   * @remarks
   * ## Operation description
   * - This operation verifies the C2PA digital signature embedded in an image and returns the signature verification status, issuer trustworthiness, issuer information, and the complete content credentials manifest.
   * - You can specify the image to verify by using an image URL or an OSS ObjectKey. If both ImageUrl and ObjectKey are provided, ObjectKey takes precedence.
   * - When you use the ObjectKey method, the system verifies whether the ObjectKey belongs to the current caller. Cross-tenant access is not allowed.
   * - To ensure request idempotency, provide the ClientToken parameter. Ensure that the value is unique across different requests and does not exceed 64 characters.
   * 
   * @param request - VerifyImageSignatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyImageSignatureResponse
   */
  async verifyImageSignatureWithOptions(request: $_model.VerifyImageSignatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyImageSignatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.objectKey)) {
      query["ObjectKey"] = request.objectKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyImageSignature",
      version: "2026-05-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyImageSignatureResponse>(await this.callApi(params, req, runtime), new $_model.VerifyImageSignatureResponse({}));
  }

  /**
   * Verifies the C2PA digital signature in an image and returns the signature status and issuer information.
   * 
   * @remarks
   * ## Operation description
   * - This operation verifies the C2PA digital signature embedded in an image and returns the signature verification status, issuer trustworthiness, issuer information, and the complete content credentials manifest.
   * - You can specify the image to verify by using an image URL or an OSS ObjectKey. If both ImageUrl and ObjectKey are provided, ObjectKey takes precedence.
   * - When you use the ObjectKey method, the system verifies whether the ObjectKey belongs to the current caller. Cross-tenant access is not allowed.
   * - To ensure request idempotency, provide the ClientToken parameter. Ensure that the value is unique across different requests and does not exceed 64 characters.
   * 
   * @param request - VerifyImageSignatureRequest
   * @returns VerifyImageSignatureResponse
   */
  async verifyImageSignature(request: $_model.VerifyImageSignatureRequest): Promise<$_model.VerifyImageSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyImageSignatureWithOptions(request, runtime);
  }

}
