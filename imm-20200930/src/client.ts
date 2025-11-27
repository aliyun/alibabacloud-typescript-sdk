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
      'cn-beijing-gov-1': "imm-vpc.cn-beijing-gov-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds mosaics, Gaussian blurs, or solid color shapes to blur one or more areas of an image for privacy protection and saves the output image to the specified path in Object Storage Service (OSS).
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * *   The operation accepts JPG and PNG images with a maximum side length of 30,000 pixels and a total of up to 250 million pixels.
   * 
   * @param tmpReq - AddImageMosaicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageMosaicResponse
   */
  async addImageMosaicWithOptions(tmpReq: $_model.AddImageMosaicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageMosaicResponse> {
    tmpReq.validate();
    let request = new $_model.AddImageMosaicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.imageFormat)) {
      query["ImageFormat"] = request.imageFormat;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.quality)) {
      query["Quality"] = request.quality;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImageMosaic",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImageMosaicResponse>(await this.callApi(params, req, runtime), new $_model.AddImageMosaicResponse({}));
  }

  /**
   * Adds mosaics, Gaussian blurs, or solid color shapes to blur one or more areas of an image for privacy protection and saves the output image to the specified path in Object Storage Service (OSS).
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * *   The operation accepts JPG and PNG images with a maximum side length of 30,000 pixels and a total of up to 250 million pixels.
   * 
   * @param request - AddImageMosaicRequest
   * @returns AddImageMosaicResponse
   */
  async addImageMosaic(request: $_model.AddImageMosaicRequest): Promise<$_model.AddImageMosaicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageMosaicWithOptions(request, runtime);
  }

  /**
   * Adds objects to a story.
   * 
   * @param tmpReq - AddStoryFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddStoryFilesResponse
   */
  async addStoryFilesWithOptions(tmpReq: $_model.AddStoryFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddStoryFilesResponse> {
    tmpReq.validate();
    let request = new $_model.AddStoryFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddStoryFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddStoryFilesResponse>(await this.callApi(params, req, runtime), new $_model.AddStoryFilesResponse({}));
  }

  /**
   * Adds objects to a story.
   * 
   * @param request - AddStoryFilesRequest
   * @returns AddStoryFilesResponse
   */
  async addStoryFiles(request: $_model.AddStoryFilesRequest): Promise<$_model.AddStoryFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addStoryFilesWithOptions(request, runtime);
  }

  /**
   * Binds an Object Storage Service (OSS) bucket to the specified project. The binding enables you to use IMM features by using the x-oss-process parameter.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   To use data processing capabilities of IMM based on the x-oss-process parameter, you must bind an OSS bucket to an IMM project. For more information, see [x-oss-process](https://help.aliyun.com/document_detail/2391270.html).
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * 
   * @param request - AttachOSSBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachOSSBucketResponse
   */
  async attachOSSBucketWithOptions(request: $_model.AttachOSSBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachOSSBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachOSSBucket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachOSSBucketResponse>(await this.callApi(params, req, runtime), new $_model.AttachOSSBucketResponse({}));
  }

  /**
   * Binds an Object Storage Service (OSS) bucket to the specified project. The binding enables you to use IMM features by using the x-oss-process parameter.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   To use data processing capabilities of IMM based on the x-oss-process parameter, you must bind an OSS bucket to an IMM project. For more information, see [x-oss-process](https://help.aliyun.com/document_detail/2391270.html).
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * 
   * @param request - AttachOSSBucketRequest
   * @returns AttachOSSBucketResponse
   */
  async attachOSSBucket(request: $_model.AttachOSSBucketRequest): Promise<$_model.AttachOSSBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachOSSBucketWithOptions(request, runtime);
  }

  /**
   * Deletes the metadata of multiple files from a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   A successful deletion message is returned regardless of whether the metadata of the file exists in the dataset.
   * > 
   * *   If you delete the metadata of a file from a dataset, the file stored in Object Storage Service (OSS) or Photo and Drive Service is **not** deleted. If you want to delete the file, use the operations provided by OSS or Photo and Drive Service.
   * *   Metadata deletion affects existing face groups and stories but does not affect existing spatiotemporal groups.
   * 
   * @param tmpReq - BatchDeleteFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteFileMetaResponse
   */
  async batchDeleteFileMetaWithOptions(tmpReq: $_model.BatchDeleteFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.BatchDeleteFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.URIs)) {
      request.URIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.URIs, "URIs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URIsShrink)) {
      query["URIs"] = request.URIsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteFileMetaResponse({}));
  }

  /**
   * Deletes the metadata of multiple files from a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   A successful deletion message is returned regardless of whether the metadata of the file exists in the dataset.
   * > 
   * *   If you delete the metadata of a file from a dataset, the file stored in Object Storage Service (OSS) or Photo and Drive Service is **not** deleted. If you want to delete the file, use the operations provided by OSS or Photo and Drive Service.
   * *   Metadata deletion affects existing face groups and stories but does not affect existing spatiotemporal groups.
   * 
   * @param request - BatchDeleteFileMetaRequest
   * @returns BatchDeleteFileMetaResponse
   */
  async batchDeleteFileMeta(request: $_model.BatchDeleteFileMetaRequest): Promise<$_model.BatchDeleteFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteFileMetaWithOptions(request, runtime);
  }

  /**
   * Queries face clusters.
   * 
   * @param tmpReq - BatchGetFigureClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetFigureClusterResponse
   */
  async batchGetFigureClusterWithOptions(tmpReq: $_model.BatchGetFigureClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetFigureClusterResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetFigureClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "ObjectIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.objectIdsShrink)) {
      query["ObjectIds"] = request.objectIdsShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetFigureClusterResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetFigureClusterResponse({}));
  }

  /**
   * Queries face clusters.
   * 
   * @param request - BatchGetFigureClusterRequest
   * @returns BatchGetFigureClusterResponse
   */
  async batchGetFigureCluster(request: $_model.BatchGetFigureClusterRequest): Promise<$_model.BatchGetFigureClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetFigureClusterWithOptions(request, runtime);
  }

  /**
   * Queries metadata of multiple objects or files in the specified dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, feel free to join the DingTalk chat group (ID: 31690030817) and share your questions with us.
   * 
   * @param tmpReq - BatchGetFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetFileMetaResponse
   */
  async batchGetFileMetaWithOptions(tmpReq: $_model.BatchGetFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.URIs)) {
      request.URIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.URIs, "URIs", "json");
    }

    if (!$dara.isNull(tmpReq.withFields)) {
      request.withFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.withFields, "WithFields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URIsShrink)) {
      query["URIs"] = request.URIsShrink;
    }

    if (!$dara.isNull(request.withFieldsShrink)) {
      query["WithFields"] = request.withFieldsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetFileMetaResponse({}));
  }

  /**
   * Queries metadata of multiple objects or files in the specified dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, feel free to join the DingTalk chat group (ID: 31690030817) and share your questions with us.
   * 
   * @param request - BatchGetFileMetaRequest
   * @returns BatchGetFileMetaResponse
   */
  async batchGetFileMeta(request: $_model.BatchGetFileMetaRequest): Promise<$_model.BatchGetFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetFileMetaWithOptions(request, runtime);
  }

  /**
   * Indexes metadata of multiple objects into the specified dataset. The process involves data processing operations such as label detection, face detection, and location detection. Metadata indexing helps meet diverse data retrieval requirements.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Data processing operations supported for metadata processing vary with workflow templates. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * *   Metadata indexing poses limits on the total number and size of objects. For more information about these limits, see [Limits](https://help.aliyun.com/document_detail/475569.html). For more information about how to create
   * *   Metadata indexing is available in specific regions. For information about regions that support metadata indexing, see the "Data management and indexing" section of the [Limits](https://help.aliyun.com/document_detail/475569.html) topic.
   * 
   * @param tmpReq - BatchIndexFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchIndexFileMetaResponse
   */
  async batchIndexFileMetaWithOptions(tmpReq: $_model.BatchIndexFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchIndexFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.BatchIndexFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchIndexFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchIndexFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.BatchIndexFileMetaResponse({}));
  }

  /**
   * Indexes metadata of multiple objects into the specified dataset. The process involves data processing operations such as label detection, face detection, and location detection. Metadata indexing helps meet diverse data retrieval requirements.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Data processing operations supported for metadata processing vary with workflow templates. For more information, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * *   Metadata indexing poses limits on the total number and size of objects. For more information about these limits, see [Limits](https://help.aliyun.com/document_detail/475569.html). For more information about how to create
   * *   Metadata indexing is available in specific regions. For information about regions that support metadata indexing, see the "Data management and indexing" section of the [Limits](https://help.aliyun.com/document_detail/475569.html) topic.
   * 
   * @param request - BatchIndexFileMetaRequest
   * @returns BatchIndexFileMetaResponse
   */
  async batchIndexFileMeta(request: $_model.BatchIndexFileMetaRequest): Promise<$_model.BatchIndexFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchIndexFileMetaWithOptions(request, runtime);
  }

  /**
   * Updates some metadata items of files indexed into a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   You cannot call this operation to update all metadata. You can update only metadata fields such as CustomLabels, CustomId, and Figures. For more information, see the "Request parameters" section of this topic.
   * 
   * @param tmpReq - BatchUpdateFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateFileMetaResponse
   */
  async batchUpdateFileMetaWithOptions(tmpReq: $_model.BatchUpdateFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateFileMetaResponse({}));
  }

  /**
   * Updates some metadata items of files indexed into a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   You cannot call this operation to update all metadata. You can update only metadata fields such as CustomLabels, CustomId, and Figures. For more information, see the "Request parameters" section of this topic.
   * 
   * @param request - BatchUpdateFileMetaRequest
   * @returns BatchUpdateFileMetaResponse
   */
  async batchUpdateFileMeta(request: $_model.BatchUpdateFileMetaRequest): Promise<$_model.BatchUpdateFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateFileMetaWithOptions(request, runtime);
  }

  /**
   * Compares the similarity of the largest faces in two images. The largest face refers to the largest face frame in an image after face detection.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   For the input image, only the face with the largest face frame in the image is used for face comparison. The face frame detection result is consistent with the responses of the [DetectImageFaces](https://help.aliyun.com/document_detail/478213.html) operation.
   * 
   * @param tmpReq - CompareImageFacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareImageFacesResponse
   */
  async compareImageFacesWithOptions(tmpReq: $_model.CompareImageFacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompareImageFacesResponse> {
    tmpReq.validate();
    let request = new $_model.CompareImageFacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "Source", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceShrink)) {
      query["Source"] = request.sourceShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompareImageFaces",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompareImageFacesResponse>(await this.callApi(params, req, runtime), new $_model.CompareImageFacesResponse({}));
  }

  /**
   * Compares the similarity of the largest faces in two images. The largest face refers to the largest face frame in an image after face detection.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   For the input image, only the face with the largest face frame in the image is used for face comparison. The face frame detection result is consistent with the responses of the [DetectImageFaces](https://help.aliyun.com/document_detail/478213.html) operation.
   * 
   * @param request - CompareImageFacesRequest
   * @returns CompareImageFacesResponse
   */
  async compareImageFaces(request: $_model.CompareImageFacesRequest): Promise<$_model.CompareImageFacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareImageFacesWithOptions(request, runtime);
  }

  /**
   * Phase II of AI Assistant, Q\\&A API
   * 
   * @remarks
   * ### Precautions
   * - Before using this interface, please make sure you fully understand the billing method and [pricing](https://help.aliyun.com/zh/imm/product-overview/billable-items?spm=openapi-amp.newDocPublishment.0.0.1ecd281fi27Zgk) of the Intelligent Media Management product.
   * - Before calling this interface, ensure that you have indexed the files into the dataset (Dataset) through binding ([CreateBinding](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-createbinding?spm=a2c4g.11186623.0.0.a3d76f44xJrOnF)) or active indexing ([IndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-indexfilemeta?spm=a2c4g.11186623.help-menu-search-62354.d_0) or [BatchIndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-batchindexfilemeta?spm=a2c4g.11186623.help-menu-62354.d_5_2_4_2_1_1.f1d86f44iBs3QZ)).
   * - The returned result is only an example. Depending on the [workflow template configuration](https://help.aliyun.com/zh/imm/user-guide/workflow-templates-and-operators?spm=a2c4g.11186623.0.0.a3d775abr3hDFp), the categories and content of the file metadata information obtained may differ from the example. If you have any questions, please join the DingTalk group by searching for the group number 21714099 in DingTalk.
   * ### Usage Restrictions
   * - The maximum length of the historical conversation is 100, including both user and assistant messages.
   * - Each message should not exceed 1000 Chinese characters.
   * 
   * @param tmpReq - ContextualAnswerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContextualAnswerResponse
   */
  async *contextualAnswerWithSSE(tmpReq: $_model.ContextualAnswerRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ContextualAnswerResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ContextualAnswerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContextualAnswer",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.ContextualAnswerResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.ContextualAnswerResponse({}));
    }
  }

  /**
   * Phase II of AI Assistant, Q\\&A API
   * 
   * @remarks
   * ### Precautions
   * - Before using this interface, please make sure you fully understand the billing method and [pricing](https://help.aliyun.com/zh/imm/product-overview/billable-items?spm=openapi-amp.newDocPublishment.0.0.1ecd281fi27Zgk) of the Intelligent Media Management product.
   * - Before calling this interface, ensure that you have indexed the files into the dataset (Dataset) through binding ([CreateBinding](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-createbinding?spm=a2c4g.11186623.0.0.a3d76f44xJrOnF)) or active indexing ([IndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-indexfilemeta?spm=a2c4g.11186623.help-menu-search-62354.d_0) or [BatchIndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-batchindexfilemeta?spm=a2c4g.11186623.help-menu-62354.d_5_2_4_2_1_1.f1d86f44iBs3QZ)).
   * - The returned result is only an example. Depending on the [workflow template configuration](https://help.aliyun.com/zh/imm/user-guide/workflow-templates-and-operators?spm=a2c4g.11186623.0.0.a3d775abr3hDFp), the categories and content of the file metadata information obtained may differ from the example. If you have any questions, please join the DingTalk group by searching for the group number 21714099 in DingTalk.
   * ### Usage Restrictions
   * - The maximum length of the historical conversation is 100, including both user and assistant messages.
   * - Each message should not exceed 1000 Chinese characters.
   * 
   * @param tmpReq - ContextualAnswerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContextualAnswerResponse
   */
  async contextualAnswerWithOptions(tmpReq: $_model.ContextualAnswerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContextualAnswerResponse> {
    tmpReq.validate();
    let request = new $_model.ContextualAnswerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContextualAnswer",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContextualAnswerResponse>(await this.callApi(params, req, runtime), new $_model.ContextualAnswerResponse({}));
  }

  /**
   * Phase II of AI Assistant, Q\\&A API
   * 
   * @remarks
   * ### Precautions
   * - Before using this interface, please make sure you fully understand the billing method and [pricing](https://help.aliyun.com/zh/imm/product-overview/billable-items?spm=openapi-amp.newDocPublishment.0.0.1ecd281fi27Zgk) of the Intelligent Media Management product.
   * - Before calling this interface, ensure that you have indexed the files into the dataset (Dataset) through binding ([CreateBinding](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-createbinding?spm=a2c4g.11186623.0.0.a3d76f44xJrOnF)) or active indexing ([IndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-indexfilemeta?spm=a2c4g.11186623.help-menu-search-62354.d_0) or [BatchIndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-batchindexfilemeta?spm=a2c4g.11186623.help-menu-62354.d_5_2_4_2_1_1.f1d86f44iBs3QZ)).
   * - The returned result is only an example. Depending on the [workflow template configuration](https://help.aliyun.com/zh/imm/user-guide/workflow-templates-and-operators?spm=a2c4g.11186623.0.0.a3d775abr3hDFp), the categories and content of the file metadata information obtained may differ from the example. If you have any questions, please join the DingTalk group by searching for the group number 21714099 in DingTalk.
   * ### Usage Restrictions
   * - The maximum length of the historical conversation is 100, including both user and assistant messages.
   * - Each message should not exceed 1000 Chinese characters.
   * 
   * @param request - ContextualAnswerRequest
   * @returns ContextualAnswerResponse
   */
  async contextualAnswer(request: $_model.ContextualAnswerRequest): Promise<$_model.ContextualAnswerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contextualAnswerWithOptions(request, runtime);
  }

  /**
   * Retrieves semantically similar documents. The operation is designed for multi-turn conversations and can process message input in historical conversations. The operation returns results that are highly related to the current conversation based on an in-depth understanding of contextual content. It provides consistent and efficient information retrieval in multi-turn conversations.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/zh/imm/product-overview/billable-items?spm=openapi-amp.newDocPublishment.0.0.1ecd281fi27Zgk) of Intelligent Media Management (IMM).
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-createbinding?spm=a2c4g.11186623.0.0.a3d76f44xJrOnF) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-indexfilemeta?spm=a2c4g.11186623.help-menu-search-62354.d_0) or [BatchIndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-batchindexfilemeta?spm=a2c4g.11186623.help-menu-62354.d_5_2_4_2_1_1.f1d86f44iBs3QZ) operation.
   * *   The response provided in this example is for reference only. The categories and content of metadata vary based on configurations of [workflow templates](https://help.aliyun.com/zh/imm/user-guide/workflow-templates-and-operators?spm=a2c4g.11186623.0.0.a3d775abr3hDFp). For any inquiries, join the DingTalk chat group (ID: 21714099) for feedback.
   * ### [](#)Limitations
   * *   The conversation history can hold up to 100 messages, including user-sent messages and assistant-generated messages.
   * *   Each message cannot exceed 1,000 characters in length.
   * 
   * @param tmpReq - ContextualRetrievalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContextualRetrievalResponse
   */
  async contextualRetrievalWithOptions(tmpReq: $_model.ContextualRetrievalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContextualRetrievalResponse> {
    tmpReq.validate();
    let request = new $_model.ContextualRetrievalShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "Messages", "json");
    }

    if (!$dara.isNull(tmpReq.smartClusterIds)) {
      request.smartClusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.smartClusterIds, "SmartClusterIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.recallOnly)) {
      query["RecallOnly"] = request.recallOnly;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messagesShrink)) {
      body["Messages"] = request.messagesShrink;
    }

    if (!$dara.isNull(request.smartClusterIdsShrink)) {
      body["SmartClusterIds"] = request.smartClusterIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContextualRetrieval",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContextualRetrievalResponse>(await this.callApi(params, req, runtime), new $_model.ContextualRetrievalResponse({}));
  }

  /**
   * Retrieves semantically similar documents. The operation is designed for multi-turn conversations and can process message input in historical conversations. The operation returns results that are highly related to the current conversation based on an in-depth understanding of contextual content. It provides consistent and efficient information retrieval in multi-turn conversations.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/zh/imm/product-overview/billable-items?spm=openapi-amp.newDocPublishment.0.0.1ecd281fi27Zgk) of Intelligent Media Management (IMM).
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-createbinding?spm=a2c4g.11186623.0.0.a3d76f44xJrOnF) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-indexfilemeta?spm=a2c4g.11186623.help-menu-search-62354.d_0) or [BatchIndexFileMeta](https://help.aliyun.com/zh/imm/developer-reference/api-imm-2020-09-30-batchindexfilemeta?spm=a2c4g.11186623.help-menu-62354.d_5_2_4_2_1_1.f1d86f44iBs3QZ) operation.
   * *   The response provided in this example is for reference only. The categories and content of metadata vary based on configurations of [workflow templates](https://help.aliyun.com/zh/imm/user-guide/workflow-templates-and-operators?spm=a2c4g.11186623.0.0.a3d775abr3hDFp). For any inquiries, join the DingTalk chat group (ID: 21714099) for feedback.
   * ### [](#)Limitations
   * *   The conversation history can hold up to 100 messages, including user-sent messages and assistant-generated messages.
   * *   Each message cannot exceed 1,000 characters in length.
   * 
   * @param request - ContextualRetrievalRequest
   * @returns ContextualRetrievalResponse
   */
  async contextualRetrieval(request: $_model.ContextualRetrievalRequest): Promise<$_model.ContextualRetrievalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contextualRetrievalWithOptions(request, runtime);
  }

  /**
   * Creates an archive file inspection task to preview the files in a package without decompressing the package.
   * 
   * @remarks
   * >  The operation is in public preview. For any inquires, join our DingTalk chat group (ID: 31690030817) and share your questions with us.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The operation supports a package that contains up to 80,000 files.
   * *   The operation supports ZIP or RAR packages up to 200 GB in size, or 7z packages up to 50 GB in size.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateArchiveFileInspectionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArchiveFileInspectionTaskResponse
   */
  async createArchiveFileInspectionTaskWithOptions(tmpReq: $_model.CreateArchiveFileInspectionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArchiveFileInspectionTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateArchiveFileInspectionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArchiveFileInspectionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArchiveFileInspectionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateArchiveFileInspectionTaskResponse({}));
  }

  /**
   * Creates an archive file inspection task to preview the files in a package without decompressing the package.
   * 
   * @remarks
   * >  The operation is in public preview. For any inquires, join our DingTalk chat group (ID: 31690030817) and share your questions with us.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The operation supports a package that contains up to 80,000 files.
   * *   The operation supports ZIP or RAR packages up to 200 GB in size, or 7z packages up to 50 GB in size.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateArchiveFileInspectionTaskRequest
   * @returns CreateArchiveFileInspectionTaskResponse
   */
  async createArchiveFileInspectionTask(request: $_model.CreateArchiveFileInspectionTaskRequest): Promise<$_model.CreateArchiveFileInspectionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArchiveFileInspectionTaskWithOptions(request, runtime);
  }

  /**
   * Creates a batch processing task to perform a data processing operation, such as transcoding or format conversion, on multiple existing files at a time.
   * 
   * @remarks
   * If you want to create a batch processing task to process data in [OSS](https://help.aliyun.com/document_detail/99372.html), make sure that you have bound the dataset to the OSS bucket where the data is stored. For more information about how to bind a dataset to a bucket, see [AttachOSSBucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param tmpReq - CreateBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBatchResponse
   */
  async createBatchWithOptions(tmpReq: $_model.CreateBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBatchResponse> {
    tmpReq.validate();
    let request = new $_model.CreateBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      body["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.serviceRole)) {
      body["ServiceRole"] = request.serviceRole;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBatchResponse>(await this.callApi(params, req, runtime), new $_model.CreateBatchResponse({}));
  }

  /**
   * Creates a batch processing task to perform a data processing operation, such as transcoding or format conversion, on multiple existing files at a time.
   * 
   * @remarks
   * If you want to create a batch processing task to process data in [OSS](https://help.aliyun.com/document_detail/99372.html), make sure that you have bound the dataset to the OSS bucket where the data is stored. For more information about how to bind a dataset to a bucket, see [AttachOSSBucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param request - CreateBatchRequest
   * @returns CreateBatchResponse
   */
  async createBatch(request: $_model.CreateBatchRequest): Promise<$_model.CreateBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBatchWithOptions(request, runtime);
  }

  /**
   * Creates a binding relationship between a dataset and an Object Storage Service (OSS) bucket. This allows for the automatic synchronization of incremental and full data and indexing.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/2743997.html) of Intelligent Media Management (IMM).****
   * >  Asynchronous processing does not guarantee timely task completion.
   * Before you create a binding, make sure that the project and the dataset that you want to use exist.
   * *   For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   For information about how to create a dataset, see [CreateDataset](https://help.aliyun.com/document_detail/478160.html).
   * >  The CreateBinding operation works by using the [workflow template](https://help.aliyun.com/document_detail/466304.html) that is specified when you created the project or dataset.
   * After you create a binding between a dataset and an OSS bucket, IMM scans the existing objects in the bucket and extracts metadata based on the scanning result. Then, IMM creates an index from the extracted metadata. If new objects are uploaded to the OSS bucket, IMM tracks and scans the objects and updates the index. For objects whose metadata index is created by calling this operation, you can call query operations, such as [SimpleQuery](https://help.aliyun.com/document_detail/478175.html), to query objects, manage objects, and collect statistics on objects.
   * 
   * @param request - CreateBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBindingResponse
   */
  async createBindingWithOptions(request: $_model.CreateBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBindingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBindingResponse>(await this.callApi(params, req, runtime), new $_model.CreateBindingResponse({}));
  }

  /**
   * Creates a binding relationship between a dataset and an Object Storage Service (OSS) bucket. This allows for the automatic synchronization of incremental and full data and indexing.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/2743997.html) of Intelligent Media Management (IMM).****
   * >  Asynchronous processing does not guarantee timely task completion.
   * Before you create a binding, make sure that the project and the dataset that you want to use exist.
   * *   For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   For information about how to create a dataset, see [CreateDataset](https://help.aliyun.com/document_detail/478160.html).
   * >  The CreateBinding operation works by using the [workflow template](https://help.aliyun.com/document_detail/466304.html) that is specified when you created the project or dataset.
   * After you create a binding between a dataset and an OSS bucket, IMM scans the existing objects in the bucket and extracts metadata based on the scanning result. Then, IMM creates an index from the extracted metadata. If new objects are uploaded to the OSS bucket, IMM tracks and scans the objects and updates the index. For objects whose metadata index is created by calling this operation, you can call query operations, such as [SimpleQuery](https://help.aliyun.com/document_detail/478175.html), to query objects, manage objects, and collect statistics on objects.
   * 
   * @param request - CreateBindingRequest
   * @returns CreateBindingResponse
   */
  async createBinding(request: $_model.CreateBindingRequest): Promise<$_model.CreateBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  /**
   * Compresses point cloud data (PCD) in Object Storage Service (OSS) to reduce the amount of data transferred over networks.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   This operation supports only Point Cloud Data (PCD) files.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications. >
   * 
   * @param tmpReq - CreateCompressPointCloudTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCompressPointCloudTaskResponse
   */
  async createCompressPointCloudTaskWithOptions(tmpReq: $_model.CreateCompressPointCloudTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCompressPointCloudTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCompressPointCloudTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.kdtreeOption)) {
      request.kdtreeOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kdtreeOption, "KdtreeOption", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.octreeOption)) {
      request.octreeOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.octreeOption, "OctreeOption", "json");
    }

    if (!$dara.isNull(tmpReq.pointCloudFields)) {
      request.pointCloudFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pointCloudFields, "PointCloudFields", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.compressMethod)) {
      query["CompressMethod"] = request.compressMethod;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.kdtreeOptionShrink)) {
      query["KdtreeOption"] = request.kdtreeOptionShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.octreeOptionShrink)) {
      query["OctreeOption"] = request.octreeOptionShrink;
    }

    if (!$dara.isNull(request.pointCloudFieldsShrink)) {
      query["PointCloudFields"] = request.pointCloudFieldsShrink;
    }

    if (!$dara.isNull(request.pointCloudFileFormat)) {
      query["PointCloudFileFormat"] = request.pointCloudFileFormat;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCompressPointCloudTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCompressPointCloudTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCompressPointCloudTaskResponse({}));
  }

  /**
   * Compresses point cloud data (PCD) in Object Storage Service (OSS) to reduce the amount of data transferred over networks.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   This operation supports only Point Cloud Data (PCD) files.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications. >
   * 
   * @param request - CreateCompressPointCloudTaskRequest
   * @returns CreateCompressPointCloudTaskResponse
   */
  async createCompressPointCloudTask(request: $_model.CreateCompressPointCloudTaskRequest): Promise<$_model.CreateCompressPointCloudTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCompressPointCloudTaskWithOptions(request, runtime);
  }

  /**
   * Creates a story based on the specified images and videos.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * 
   * @param tmpReq - CreateCustomizedStoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomizedStoryResponse
   */
  async createCustomizedStoryWithOptions(tmpReq: $_model.CreateCustomizedStoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomizedStoryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCustomizedStoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cover)) {
      request.coverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cover, "Cover", "json");
    }

    if (!$dara.isNull(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverShrink)) {
      body["Cover"] = request.coverShrink;
    }

    if (!$dara.isNull(request.customLabelsShrink)) {
      body["CustomLabels"] = request.customLabelsShrink;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.storyName)) {
      body["StoryName"] = request.storyName;
    }

    if (!$dara.isNull(request.storySubType)) {
      body["StorySubType"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      body["StoryType"] = request.storyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomizedStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomizedStoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomizedStoryResponse({}));
  }

  /**
   * Creates a story based on the specified images and videos.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * 
   * @param request - CreateCustomizedStoryRequest
   * @returns CreateCustomizedStoryResponse
   */
  async createCustomizedStory(request: $_model.CreateCustomizedStoryRequest): Promise<$_model.CreateCustomizedStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomizedStoryWithOptions(request, runtime);
  }

  /**
   * Create Dataset
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - The dataset name must be unique within the same project.
   * - There is a limit to the number of datasets that can be created, which can be queried through [GetProject](https://help.aliyun.com/document_detail/478155.html).
   * - After creating a dataset, you can use [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) to build file metadata indexes, enabling diversified [data retrieval and statistics](https://help.aliyun.com/document_detail/478175.html) and intelligent management.
   * 
   * @param tmpReq - CreateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(tmpReq: $_model.CreateDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workflowParameters)) {
      request.workflowParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workflowParameters, "WorkflowParameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!$dara.isNull(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!$dara.isNull(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!$dara.isNull(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!$dara.isNull(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.workflowParametersShrink)) {
      query["WorkflowParameters"] = request.workflowParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetResponse({}));
  }

  /**
   * Create Dataset
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - The dataset name must be unique within the same project.
   * - There is a limit to the number of datasets that can be created, which can be queried through [GetProject](https://help.aliyun.com/document_detail/478155.html).
   * - After creating a dataset, you can use [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) to build file metadata indexes, enabling diversified [data retrieval and statistics](https://help.aliyun.com/document_detail/478175.html) and intelligent management.
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: $_model.CreateDatasetRequest): Promise<$_model.CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  /**
   * Decodes the blind watermark in an image.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of Intelligent Media Management (IMM).
   *     **
   *     **Note that** Asynchronous processing does not guarantee timely task completion.
   * *   Make sure that an IMM project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   The region and project specified in the request to decode a blind watermark must match those in the [EncodeBlindWatermark](https://help.aliyun.com/document_detail/2743655.html) request to encode the blind watermark.
   * *   A blind watermark can still be extracted even if attacks, such as compression, scaling, cropping, and color transformation, are performed on the image.
   * *   This operation is compatible with its earlier version DecodeBlindWatermark.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task. If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateDecodeBlindWatermarkTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDecodeBlindWatermarkTaskResponse
   */
  async createDecodeBlindWatermarkTaskWithOptions(tmpReq: $_model.CreateDecodeBlindWatermarkTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDecodeBlindWatermarkTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDecodeBlindWatermarkTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.imageQuality)) {
      query["ImageQuality"] = request.imageQuality;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.originalImageURI)) {
      query["OriginalImageURI"] = request.originalImageURI;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.strengthLevel)) {
      query["StrengthLevel"] = request.strengthLevel;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDecodeBlindWatermarkTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDecodeBlindWatermarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDecodeBlindWatermarkTaskResponse({}));
  }

  /**
   * Decodes the blind watermark in an image.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of Intelligent Media Management (IMM).
   *     **
   *     **Note that** Asynchronous processing does not guarantee timely task completion.
   * *   Make sure that an IMM project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   The region and project specified in the request to decode a blind watermark must match those in the [EncodeBlindWatermark](https://help.aliyun.com/document_detail/2743655.html) request to encode the blind watermark.
   * *   A blind watermark can still be extracted even if attacks, such as compression, scaling, cropping, and color transformation, are performed on the image.
   * *   This operation is compatible with its earlier version DecodeBlindWatermark.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task. If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateDecodeBlindWatermarkTaskRequest
   * @returns CreateDecodeBlindWatermarkTaskResponse
   */
  async createDecodeBlindWatermarkTask(request: $_model.CreateDecodeBlindWatermarkTaskRequest): Promise<$_model.CreateDecodeBlindWatermarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDecodeBlindWatermarkTaskWithOptions(request, runtime);
  }

  /**
   * Searches the dataset for the specified number of images most similar to the specified image or face and returns face IDs and boundaries in descending order of similarity.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The operation searches for faces that are similar to the face within the largest bounding box in each input image.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateFacesSearchingTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFacesSearchingTaskResponse
   */
  async createFacesSearchingTaskWithOptions(tmpReq: $_model.CreateFacesSearchingTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFacesSearchingTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFacesSearchingTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFacesSearchingTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFacesSearchingTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFacesSearchingTaskResponse({}));
  }

  /**
   * Searches the dataset for the specified number of images most similar to the specified image or face and returns face IDs and boundaries in descending order of similarity.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The operation searches for faces that are similar to the face within the largest bounding box in each input image.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateFacesSearchingTaskRequest
   * @returns CreateFacesSearchingTaskResponse
   */
  async createFacesSearchingTask(request: $_model.CreateFacesSearchingTaskRequest): Promise<$_model.CreateFacesSearchingTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFacesSearchingTaskWithOptions(request, runtime);
  }

  /**
   * Creates a face clustering task to cluster faces of different persons in images by person based on the intelligent algorithms.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   Before you call this operation, make sure that you have indexed file metadata into the [dataset](~~CreateDataset~~) automatically by calling the [CreateBinding](~~CreateBinding~~) operation or manually by calling the [IndexFileMeta](~~IndexFileMeta~~) or [BatchIndexFileMeta](~~BatchIndexFileMeta~~) operation.
   * *   Each call to the operation incrementally processes metadata in the [dataset](~~CreateDataset~~). You can regularly call this operation to process incremental files.
   * *   After the clustering task is complete, you can call the [GetFigureCluster](~~GetFigureCluster~~) or [BatchGetFigureCluster](~~BatchGetFigureCluster~~) operation to query information about a specific cluster. You can also call the [QueryFigureClusters](~~QueryFigureClusters~~) operation to query all face clusters of the specified dataset.
   * *   Removing image information from the dataset causes changes to face clusters. When images that contain all faces in a cluster are removed, the cluster is deleted.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can call the [GetTask](~~GetTask~~) or [ListTasks](~~ListTasks~~) operation to query information about the task. If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateFigureClusteringTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFigureClusteringTaskResponse
   */
  async createFigureClusteringTaskWithOptions(tmpReq: $_model.CreateFigureClusteringTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFigureClusteringTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFigureClusteringTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFigureClusteringTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFigureClusteringTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFigureClusteringTaskResponse({}));
  }

  /**
   * Creates a face clustering task to cluster faces of different persons in images by person based on the intelligent algorithms.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   Before you call this operation, make sure that you have indexed file metadata into the [dataset](~~CreateDataset~~) automatically by calling the [CreateBinding](~~CreateBinding~~) operation or manually by calling the [IndexFileMeta](~~IndexFileMeta~~) or [BatchIndexFileMeta](~~BatchIndexFileMeta~~) operation.
   * *   Each call to the operation incrementally processes metadata in the [dataset](~~CreateDataset~~). You can regularly call this operation to process incremental files.
   * *   After the clustering task is complete, you can call the [GetFigureCluster](~~GetFigureCluster~~) or [BatchGetFigureCluster](~~BatchGetFigureCluster~~) operation to query information about a specific cluster. You can also call the [QueryFigureClusters](~~QueryFigureClusters~~) operation to query all face clusters of the specified dataset.
   * *   Removing image information from the dataset causes changes to face clusters. When images that contain all faces in a cluster are removed, the cluster is deleted.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can call the [GetTask](~~GetTask~~) or [ListTasks](~~ListTasks~~) operation to query information about the task. If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateFigureClusteringTaskRequest
   * @returns CreateFigureClusteringTaskResponse
   */
  async createFigureClusteringTask(request: $_model.CreateFigureClusteringTaskRequest): Promise<$_model.CreateFigureClusteringTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFigureClusteringTaskWithOptions(request, runtime);
  }

  /**
   * Merges two or more face clustering groups into one face clustering group.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have called the [CreateFigureClusteringTask](https://help.aliyun.com/document_detail/478180.html) operation to cluster all faces in the dataset.
   * *   If you merge unrelated groups, the feature values of the target groups are affected. As a result, the incremental data may be inaccurately grouped when you create a face clustering task.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateFigureClustersMergingTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFigureClustersMergingTaskResponse
   */
  async createFigureClustersMergingTaskWithOptions(tmpReq: $_model.CreateFigureClustersMergingTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFigureClustersMergingTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFigureClustersMergingTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.froms)) {
      request.fromsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.froms, "Froms", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.fromsShrink)) {
      query["Froms"] = request.fromsShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFigureClustersMergingTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFigureClustersMergingTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFigureClustersMergingTaskResponse({}));
  }

  /**
   * Merges two or more face clustering groups into one face clustering group.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have called the [CreateFigureClusteringTask](https://help.aliyun.com/document_detail/478180.html) operation to cluster all faces in the dataset.
   * *   If you merge unrelated groups, the feature values of the target groups are affected. As a result, the incremental data may be inaccurately grouped when you create a face clustering task.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateFigureClustersMergingTaskRequest
   * @returns CreateFigureClustersMergingTaskResponse
   */
  async createFigureClustersMergingTask(request: $_model.CreateFigureClustersMergingTaskRequest): Promise<$_model.CreateFigureClustersMergingTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFigureClustersMergingTaskWithOptions(request, runtime);
  }

  /**
   * Creates a file packing task.
   * 
   * @remarks
   * >  The operation is in public preview. For any inquires, join our DingTalk group (ID: 88490020073) and share your questions with us.
   * >  The operation supports file packing only. Compression support will be added later.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   A call to the operation can pack up to 80,000 objects into a package.
   * *   The total size of all objects to be packed into a package cannot exceed 200 GB.
   * *   The operation can pack only Standard objects in Object Storage Service (OSS). To pack an object in another storage class, you must first [convert the storage class of the object](https://help.aliyun.com/document_detail/90090.html).
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateFileCompressionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileCompressionTaskResponse
   */
  async createFileCompressionTaskWithOptions(tmpReq: $_model.CreateFileCompressionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileCompressionTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFileCompressionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    let query = { };
    if (!$dara.isNull(request.compressedFormat)) {
      query["CompressedFormat"] = request.compressedFormat;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceManifestURI)) {
      query["SourceManifestURI"] = request.sourceManifestURI;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileCompressionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileCompressionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileCompressionTaskResponse({}));
  }

  /**
   * Creates a file packing task.
   * 
   * @remarks
   * >  The operation is in public preview. For any inquires, join our DingTalk group (ID: 88490020073) and share your questions with us.
   * >  The operation supports file packing only. Compression support will be added later.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   A call to the operation can pack up to 80,000 objects into a package.
   * *   The total size of all objects to be packed into a package cannot exceed 200 GB.
   * *   The operation can pack only Standard objects in Object Storage Service (OSS). To pack an object in another storage class, you must first [convert the storage class of the object](https://help.aliyun.com/document_detail/90090.html).
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateFileCompressionTaskRequest
   * @returns CreateFileCompressionTaskResponse
   */
  async createFileCompressionTask(request: $_model.CreateFileCompressionTaskRequest): Promise<$_model.CreateFileCompressionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileCompressionTaskWithOptions(request, runtime);
  }

  /**
   * Extracts the specified files from a ZIP, RAR, or 7z package to the specified directory or decompresses the entire package.
   * 
   * @remarks
   * >  The operation is in public preview. For any inquires, join our DingTalk group (ID: 88490020073) and share your questions with us.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The operation supports a package that contains up to 80,000 files.
   * *   The operation supports ZIP or RAR packages up to 200 GB in size, or 7z packages up to 50 GB in size.
   * *   The operation extracts files in streams to the specified directory. If the file extraction task is interrupted by a corrupt file, files that have been extracted are not deleted.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateFileUncompressionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileUncompressionTaskResponse
   */
  async createFileUncompressionTaskWithOptions(tmpReq: $_model.CreateFileUncompressionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileUncompressionTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFileUncompressionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.selectedFiles)) {
      request.selectedFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedFiles, "SelectedFiles", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.selectedFilesShrink)) {
      query["SelectedFiles"] = request.selectedFilesShrink;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFileUncompressionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileUncompressionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileUncompressionTaskResponse({}));
  }

  /**
   * Extracts the specified files from a ZIP, RAR, or 7z package to the specified directory or decompresses the entire package.
   * 
   * @remarks
   * >  The operation is in public preview. For any inquires, join our DingTalk group (ID: 88490020073) and share your questions with us.
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The operation supports a package that contains up to 80,000 files.
   * *   The operation supports ZIP or RAR packages up to 200 GB in size, or 7z packages up to 50 GB in size.
   * *   The operation extracts files in streams to the specified directory. If the file extraction task is interrupted by a corrupt file, files that have been extracted are not deleted.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateFileUncompressionTaskRequest
   * @returns CreateFileUncompressionTaskResponse
   */
  async createFileUncompressionTask(request: $_model.CreateFileUncompressionTaskRequest): Promise<$_model.CreateFileUncompressionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileUncompressionTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image moderation task to ensure image content compliance. You can call this operation to identify inappropriate content, such as pornography, violence, terrorism, politically sensitive content, undesirable scenes, unauthorized logos, and non-compliant ads.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The image for which you want to create a content moderation task must meet the following requirements:
   *     *   The image URL uses the HTTP or HTTPS protocol.
   *     *   The image is in one of the following formats: PNG, JPG, JPEG, BMP, GIF, and WebP
   *     *   The image size is limited to 20 MB for synchronous and asynchronous calls, with a maximum height or width of 30,000 pixels. The total number of pixels in the image cannot exceed 250 million. GIF images are limited to 4,194,304 pixels, with a maximum height or width of 30,000 pixels.
   *     *   The image download time is limited to 3 seconds. If the download takes longer, a timeout error occurs.
   *     *   To ensure effective moderation, we recommend that you submit an image with dimensions of at least 256 × 256 pixels.
   *     *   The response time of the CreateImageModerationTask operation varies based on the duration of the image download. Make sure that the image is stored in a stable and reliable service. We recommend that you store images on Alibaba Cloud Object Storage Service (OSS) or cache them on Alibaba Cloud CDN.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can also obtain information about the task based on notifications.
   * >  The detection result is sent as an asynchronous notification. The Suggestion field of the notification can have one of the following values:
   * *   pass: No non-compliant content is found.
   * *   block: Non-compliant content is detected. The Categories field value indicates the non-compliance categories. For more information, see Content moderation results.
   * *   review: A manual review is needed. After the manual review is completed, an asynchronous notification is sent to inform you of the result. >
   * 
   * @param tmpReq - CreateImageModerationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageModerationTaskResponse
   */
  async createImageModerationTaskWithOptions(tmpReq: $_model.CreateImageModerationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageModerationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateImageModerationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.scenes)) {
      request.scenesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scenes, "Scenes", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.maxFrames)) {
      query["MaxFrames"] = request.maxFrames;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.scenesShrink)) {
      query["Scenes"] = request.scenesShrink;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageModerationTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageModerationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageModerationTaskResponse({}));
  }

  /**
   * Creates an image moderation task to ensure image content compliance. You can call this operation to identify inappropriate content, such as pornography, violence, terrorism, politically sensitive content, undesirable scenes, unauthorized logos, and non-compliant ads.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The image for which you want to create a content moderation task must meet the following requirements:
   *     *   The image URL uses the HTTP or HTTPS protocol.
   *     *   The image is in one of the following formats: PNG, JPG, JPEG, BMP, GIF, and WebP
   *     *   The image size is limited to 20 MB for synchronous and asynchronous calls, with a maximum height or width of 30,000 pixels. The total number of pixels in the image cannot exceed 250 million. GIF images are limited to 4,194,304 pixels, with a maximum height or width of 30,000 pixels.
   *     *   The image download time is limited to 3 seconds. If the download takes longer, a timeout error occurs.
   *     *   To ensure effective moderation, we recommend that you submit an image with dimensions of at least 256 × 256 pixels.
   *     *   The response time of the CreateImageModerationTask operation varies based on the duration of the image download. Make sure that the image is stored in a stable and reliable service. We recommend that you store images on Alibaba Cloud Object Storage Service (OSS) or cache them on Alibaba Cloud CDN.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can also obtain information about the task based on notifications.
   * >  The detection result is sent as an asynchronous notification. The Suggestion field of the notification can have one of the following values:
   * *   pass: No non-compliant content is found.
   * *   block: Non-compliant content is detected. The Categories field value indicates the non-compliance categories. For more information, see Content moderation results.
   * *   review: A manual review is needed. After the manual review is completed, an asynchronous notification is sent to inform you of the result. >
   * 
   * @param request - CreateImageModerationTaskRequest
   * @returns CreateImageModerationTaskResponse
   */
  async createImageModerationTask(request: $_model.CreateImageModerationTaskRequest): Promise<$_model.CreateImageModerationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageModerationTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image splicing task. You can call this operation to splice multiple images into one based on a given rule and save the final image into an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * *   You can call this operation to merge up to 10 images. Each side of an image cannot exceed 32,876 pixels, and the total number of pixels of the image cannot exceed 1 billion.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateImageSplicingTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageSplicingTaskResponse
   */
  async createImageSplicingTaskWithOptions(tmpReq: $_model.CreateImageSplicingTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageSplicingTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateImageSplicingTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.align)) {
      query["Align"] = request.align;
    }

    if (!$dara.isNull(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.imageFormat)) {
      query["ImageFormat"] = request.imageFormat;
    }

    if (!$dara.isNull(request.margin)) {
      query["Margin"] = request.margin;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.padding)) {
      query["Padding"] = request.padding;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.quality)) {
      query["Quality"] = request.quality;
    }

    if (!$dara.isNull(request.scaleType)) {
      query["ScaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageSplicingTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageSplicingTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageSplicingTaskResponse({}));
  }

  /**
   * Creates an image splicing task. You can call this operation to splice multiple images into one based on a given rule and save the final image into an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * *   You can call this operation to merge up to 10 images. Each side of an image cannot exceed 32,876 pixels, and the total number of pixels of the image cannot exceed 1 billion.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateImageSplicingTaskRequest
   * @returns CreateImageSplicingTaskResponse
   */
  async createImageSplicingTask(request: $_model.CreateImageSplicingTaskRequest): Promise<$_model.CreateImageSplicingTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageSplicingTaskWithOptions(request, runtime);
  }

  /**
   * Converts multiple images into one single PDF file and stores the PDF file to the specified path in Object Storage Service (OSS).
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * *   You can specify up to 100 images in a call to the operation.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateImageToPDFTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageToPDFTaskResponse
   */
  async createImageToPDFTaskWithOptions(tmpReq: $_model.CreateImageToPDFTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageToPDFTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateImageToPDFTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageToPDFTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageToPDFTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageToPDFTaskResponse({}));
  }

  /**
   * Converts multiple images into one single PDF file and stores the PDF file to the specified path in Object Storage Service (OSS).
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * *   You can specify up to 100 images in a call to the operation.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateImageToPDFTaskRequest
   * @returns CreateImageToPDFTaskResponse
   */
  async createImageToPDFTask(request: $_model.CreateImageToPDFTaskRequest): Promise<$_model.CreateImageToPDFTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageToPDFTaskWithOptions(request, runtime);
  }

  /**
   * Creates a spatiotemporal clustering task to cluster photos and videos based on geolocation and time information. Spatiotemporal clustering allows you to group photos and videos taken during a travel or at different places by their spatial and temporal similarity. Based on spatiotemporal clustering, you can develop media capabilities such as media file categorization, photo collections, and image and video-based stories.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Each call to the operation incrementally processes metadata in the dataset.****`` You can regularly call this operation to process incremental files.
   * *   After a spatiotemporal clustering task is complete, you can call the [QueryLocationDateClusters](https://help.aliyun.com/document_detail/478189.html) operation to query the spatiotemporal clustering result.
   * *   Removing metadata from a dataset does not affect existing spatiotemporal clusters for the dataset. To delete a spatiotemporal cluster, call the [DeleteLocationDateCluster](https://help.aliyun.com/document_detail/478191.html) operation.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateLocationDateClusteringTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLocationDateClusteringTaskResponse
   */
  async createLocationDateClusteringTaskWithOptions(tmpReq: $_model.CreateLocationDateClusteringTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLocationDateClusteringTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLocationDateClusteringTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dateOptions)) {
      request.dateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dateOptions, "DateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.locationOptions)) {
      request.locationOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationOptions, "LocationOptions", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.dateOptionsShrink)) {
      query["DateOptions"] = request.dateOptionsShrink;
    }

    if (!$dara.isNull(request.locationOptionsShrink)) {
      query["LocationOptions"] = request.locationOptionsShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLocationDateClusteringTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLocationDateClusteringTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateLocationDateClusteringTaskResponse({}));
  }

  /**
   * Creates a spatiotemporal clustering task to cluster photos and videos based on geolocation and time information. Spatiotemporal clustering allows you to group photos and videos taken during a travel or at different places by their spatial and temporal similarity. Based on spatiotemporal clustering, you can develop media capabilities such as media file categorization, photo collections, and image and video-based stories.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Each call to the operation incrementally processes metadata in the dataset.****`` You can regularly call this operation to process incremental files.
   * *   After a spatiotemporal clustering task is complete, you can call the [QueryLocationDateClusters](https://help.aliyun.com/document_detail/478189.html) operation to query the spatiotemporal clustering result.
   * *   Removing metadata from a dataset does not affect existing spatiotemporal clusters for the dataset. To delete a spatiotemporal cluster, call the [DeleteLocationDateCluster](https://help.aliyun.com/document_detail/478191.html) operation.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateLocationDateClusteringTaskRequest
   * @returns CreateLocationDateClusteringTaskResponse
   */
  async createLocationDateClusteringTask(request: $_model.CreateLocationDateClusteringTaskRequest): Promise<$_model.CreateLocationDateClusteringTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLocationDateClusteringTaskWithOptions(request, runtime);
  }

  /**
   * Create Transcoding Service
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/88317.html) of the Intelligent Media Management product before using this interface.**
   * - Before calling this interface, make sure that there is an available project (Project) in the current Region. For more details, see [Project Management](https://help.aliyun.com/document_detail/478152.html).
   * >Notice: Asynchronous tasks do not guarantee timeliness.
   * - When using this interface for media transcoding, by default, only one video/audio/subtitle stream is processed, but you can also configure the number of video/audio/subtitle streams to be processed.
   * - When using this interface for media concatenation, a maximum of 11 media files are supported. In this case, the configured transcoding, frame extraction, and other parameters will apply to the concatenated media data.
   * - This is an asynchronous interface. After the task starts, the task information is retained for 7 days. If it exceeds 7 days, the information cannot be retrieved. Call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) interface to get the returned `TaskId` and view the task information. You can also set the [Notification](https://help.aliyun.com/document_detail/2743997.html) message notification parameter to obtain task information through message notifications.
   * 
   * @param tmpReq - CreateMediaConvertTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMediaConvertTaskResponse
   */
  async createMediaConvertTaskWithOptions(tmpReq: $_model.CreateMediaConvertTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMediaConvertTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMediaConvertTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!$dara.isNull(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alignmentIndex)) {
      query["AlignmentIndex"] = request.alignmentIndex;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMediaConvertTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMediaConvertTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateMediaConvertTaskResponse({}));
  }

  /**
   * Create Transcoding Service
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/88317.html) of the Intelligent Media Management product before using this interface.**
   * - Before calling this interface, make sure that there is an available project (Project) in the current Region. For more details, see [Project Management](https://help.aliyun.com/document_detail/478152.html).
   * >Notice: Asynchronous tasks do not guarantee timeliness.
   * - When using this interface for media transcoding, by default, only one video/audio/subtitle stream is processed, but you can also configure the number of video/audio/subtitle streams to be processed.
   * - When using this interface for media concatenation, a maximum of 11 media files are supported. In this case, the configured transcoding, frame extraction, and other parameters will apply to the concatenated media data.
   * - This is an asynchronous interface. After the task starts, the task information is retained for 7 days. If it exceeds 7 days, the information cannot be retrieved. Call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) interface to get the returned `TaskId` and view the task information. You can also set the [Notification](https://help.aliyun.com/document_detail/2743997.html) message notification parameter to obtain task information through message notifications.
   * 
   * @param request - CreateMediaConvertTaskRequest
   * @returns CreateMediaConvertTaskResponse
   */
  async createMediaConvertTask(request: $_model.CreateMediaConvertTaskRequest): Promise<$_model.CreateMediaConvertTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMediaConvertTaskWithOptions(request, runtime);
  }

  /**
   * Creates a document format conversion task to convert the format of a document stored in an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   Supported input formats:
   *     *   Text documents: doc, docx, wps, wpss, docm, dotm, dot, dotx, and html
   *     *   Presentation documents: pptx, ppt, pot, potx, pps, ppsx, dps, dpt, pptm, potm, ppsm, and dpss
   *     *   Spreadsheet documents: xls, xlt, et, ett, xlsx, xltx, csv, xlsb, xlsm, xltm, and ets
   *     *   PDF documents: pdf
   * *   Supported output formats:
   *     *   Image files: png and jpg
   *     *   Text files: txt
   *     *   PDF files: pdf
   * *   Each input document can be up to 200 MB in size. The upper limit cannot be adjusted.
   * *   If the document size is large or the content is complex, the conversion task may time out.
   * *   The limit on the number of requests per second for a single user is 50.
   * *   The operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can use one of the following methods to query the task information in a timely manner:
   *     *   Call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.``
   *     *   In the region in which the IMM project is located, configure a Simple Message Queue (SMQ) subscription to receive task information notifications. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html). For information about SMQ SDKs, see [Use queues](https://help.aliyun.com/document_detail/32449.html).
   *     *   In the region in which the IMM project is located, create an ApsaraMQ for RocketMQ 4.0 instance, a topic, and a group to receive task notifications. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html). For more information about how to use ApsaraMQ for RocketMQ, see [Call HTTP SDKs to send and subscribe to messages](https://help.aliyun.com/document_detail/169009.html).
   *     *   In the region in which the IMM project is located, use [EventBridge](https://www.aliyun.com/product/aliware/eventbridge) to receive task information notifications. For more information, see [IMM events](https://help.aliyun.com/document_detail/205730.html).
   * 
   * @param tmpReq - CreateOfficeConversionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOfficeConversionTaskResponse
   */
  async createOfficeConversionTaskWithOptions(tmpReq: $_model.CreateOfficeConversionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOfficeConversionTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOfficeConversionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!$dara.isNull(tmpReq.trimPolicy)) {
      request.trimPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trimPolicy, "TrimPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.endPage)) {
      query["EndPage"] = request.endPage;
    }

    if (!$dara.isNull(request.firstPage)) {
      query["FirstPage"] = request.firstPage;
    }

    if (!$dara.isNull(request.fitToHeight)) {
      query["FitToHeight"] = request.fitToHeight;
    }

    if (!$dara.isNull(request.fitToWidth)) {
      query["FitToWidth"] = request.fitToWidth;
    }

    if (!$dara.isNull(request.holdLineFeed)) {
      query["HoldLineFeed"] = request.holdLineFeed;
    }

    if (!$dara.isNull(request.imageDPI)) {
      query["ImageDPI"] = request.imageDPI;
    }

    if (!$dara.isNull(request.longPicture)) {
      query["LongPicture"] = request.longPicture;
    }

    if (!$dara.isNull(request.longText)) {
      query["LongText"] = request.longText;
    }

    if (!$dara.isNull(request.maxSheetColumn)) {
      query["MaxSheetColumn"] = request.maxSheetColumn;
    }

    if (!$dara.isNull(request.maxSheetRow)) {
      query["MaxSheetRow"] = request.maxSheetRow;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.pages)) {
      query["Pages"] = request.pages;
    }

    if (!$dara.isNull(request.paperHorizontal)) {
      query["PaperHorizontal"] = request.paperHorizontal;
    }

    if (!$dara.isNull(request.paperSize)) {
      query["PaperSize"] = request.paperSize;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.quality)) {
      query["Quality"] = request.quality;
    }

    if (!$dara.isNull(request.scalePercentage)) {
      query["ScalePercentage"] = request.scalePercentage;
    }

    if (!$dara.isNull(request.sheetCount)) {
      query["SheetCount"] = request.sheetCount;
    }

    if (!$dara.isNull(request.sheetIndex)) {
      query["SheetIndex"] = request.sheetIndex;
    }

    if (!$dara.isNull(request.showComments)) {
      query["ShowComments"] = request.showComments;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.startPage)) {
      query["StartPage"] = request.startPage;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!$dara.isNull(request.targetURIPrefix)) {
      query["TargetURIPrefix"] = request.targetURIPrefix;
    }

    if (!$dara.isNull(request.trimPolicyShrink)) {
      query["TrimPolicy"] = request.trimPolicyShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourcesShrink)) {
      body["Sources"] = request.sourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOfficeConversionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOfficeConversionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOfficeConversionTaskResponse({}));
  }

  /**
   * Creates a document format conversion task to convert the format of a document stored in an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   Supported input formats:
   *     *   Text documents: doc, docx, wps, wpss, docm, dotm, dot, dotx, and html
   *     *   Presentation documents: pptx, ppt, pot, potx, pps, ppsx, dps, dpt, pptm, potm, ppsm, and dpss
   *     *   Spreadsheet documents: xls, xlt, et, ett, xlsx, xltx, csv, xlsb, xlsm, xltm, and ets
   *     *   PDF documents: pdf
   * *   Supported output formats:
   *     *   Image files: png and jpg
   *     *   Text files: txt
   *     *   PDF files: pdf
   * *   Each input document can be up to 200 MB in size. The upper limit cannot be adjusted.
   * *   If the document size is large or the content is complex, the conversion task may time out.
   * *   The limit on the number of requests per second for a single user is 50.
   * *   The operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can use one of the following methods to query the task information in a timely manner:
   *     *   Call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.``
   *     *   In the region in which the IMM project is located, configure a Simple Message Queue (SMQ) subscription to receive task information notifications. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html). For information about SMQ SDKs, see [Use queues](https://help.aliyun.com/document_detail/32449.html).
   *     *   In the region in which the IMM project is located, create an ApsaraMQ for RocketMQ 4.0 instance, a topic, and a group to receive task notifications. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html). For more information about how to use ApsaraMQ for RocketMQ, see [Call HTTP SDKs to send and subscribe to messages](https://help.aliyun.com/document_detail/169009.html).
   *     *   In the region in which the IMM project is located, use [EventBridge](https://www.aliyun.com/product/aliware/eventbridge) to receive task information notifications. For more information, see [IMM events](https://help.aliyun.com/document_detail/205730.html).
   * 
   * @param request - CreateOfficeConversionTaskRequest
   * @returns CreateOfficeConversionTaskResponse
   */
  async createOfficeConversionTask(request: $_model.CreateOfficeConversionTaskRequest): Promise<$_model.CreateOfficeConversionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOfficeConversionTaskWithOptions(request, runtime);
  }

  /**
   * Creates a project.
   * 
   * @remarks
   *   The name of a project must be unique in a region.
   * *   By default, you can create up to 100 projects in a region. If you want to request a quota increase to create more projects, submit a ticket or join the DingTalk chat group (ID: 88490020073).
   * *   After you create a project, you can create other Intelligent Media Management (IMM) resources in the project. For more information, see the following links:
   *     *   [CreateDataset](https://help.aliyun.com/document_detail/478160.html)
   *     *   [CreateTrigger](https://help.aliyun.com/document_detail/479912.html)
   *     *   [CreateBatch](https://help.aliyun.com/document_detail/606694.html)
   *     *   [CreateBinding](https://help.aliyun.com/document_detail/478202.html)
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!$dara.isNull(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!$dara.isNull(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!$dara.isNull(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!$dara.isNull(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectMaxDatasetCount)) {
      query["ProjectMaxDatasetCount"] = request.projectMaxDatasetCount;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.serviceRole)) {
      query["ServiceRole"] = request.serviceRole;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Creates a project.
   * 
   * @remarks
   *   The name of a project must be unique in a region.
   * *   By default, you can create up to 100 projects in a region. If you want to request a quota increase to create more projects, submit a ticket or join the DingTalk chat group (ID: 88490020073).
   * *   After you create a project, you can create other Intelligent Media Management (IMM) resources in the project. For more information, see the following links:
   *     *   [CreateDataset](https://help.aliyun.com/document_detail/478160.html)
   *     *   [CreateTrigger](https://help.aliyun.com/document_detail/479912.html)
   *     *   [CreateBatch](https://help.aliyun.com/document_detail/606694.html)
   *     *   [CreateBinding](https://help.aliyun.com/document_detail/478202.html)
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * Clusters images indexed into a dataset by similarity. Image clustering is suitable for image deduplication and selection. For example, you can use image clustering to filter photos in your album that are taken in continuous shooting mode.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note that** Asynchronous processing does not guarantee timely task completion.
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Each call to the operation incrementally processes metadata in the dataset.****`` You can regularly call this operation to process incremental files.
   * *   After clustering is completed, you can call the [QuerySimilarImageClusters](https://help.aliyun.com/document_detail/611304.html) operation to query image clustering results.
   * *   An image cluster contains at lest two images. Removing similar images from the dataset affects existing image clusters. If image deletion reduces the number of images in a cluster to less than 2, the cluster is automatically deleted.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateSimilarImageClusteringTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimilarImageClusteringTaskResponse
   */
  async createSimilarImageClusteringTaskWithOptions(tmpReq: $_model.CreateSimilarImageClusteringTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSimilarImageClusteringTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSimilarImageClusteringTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimilarImageClusteringTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSimilarImageClusteringTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSimilarImageClusteringTaskResponse({}));
  }

  /**
   * Clusters images indexed into a dataset by similarity. Image clustering is suitable for image deduplication and selection. For example, you can use image clustering to filter photos in your album that are taken in continuous shooting mode.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note that** Asynchronous processing does not guarantee timely task completion.
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Each call to the operation incrementally processes metadata in the dataset.****`` You can regularly call this operation to process incremental files.
   * *   After clustering is completed, you can call the [QuerySimilarImageClusters](https://help.aliyun.com/document_detail/611304.html) operation to query image clustering results.
   * *   An image cluster contains at lest two images. Removing similar images from the dataset affects existing image clusters. If image deletion reduces the number of images in a cluster to less than 2, the cluster is automatically deleted.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateSimilarImageClusteringTaskRequest
   * @returns CreateSimilarImageClusteringTaskResponse
   */
  async createSimilarImageClusteringTask(request: $_model.CreateSimilarImageClusteringTaskRequest): Promise<$_model.CreateSimilarImageClusteringTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSimilarImageClusteringTaskWithOptions(request, runtime);
  }

  /**
   * Creates a story.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) to query information about the task. If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateStoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStoryResponse
   */
  async createStoryWithOptions(tmpReq: $_model.CreateStoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStoryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.address)) {
      request.addressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.address, "Address", "json");
    }

    if (!$dara.isNull(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressShrink)) {
      body["Address"] = request.addressShrink;
    }

    if (!$dara.isNull(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!$dara.isNull(request.customLabelsShrink)) {
      body["CustomLabels"] = request.customLabelsShrink;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxFileCount)) {
      body["MaxFileCount"] = request.maxFileCount;
    }

    if (!$dara.isNull(request.minFileCount)) {
      body["MinFileCount"] = request.minFileCount;
    }

    if (!$dara.isNull(request.notifyTopicName)) {
      body["NotifyTopicName"] = request.notifyTopicName;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.storyEndTime)) {
      body["StoryEndTime"] = request.storyEndTime;
    }

    if (!$dara.isNull(request.storyName)) {
      body["StoryName"] = request.storyName;
    }

    if (!$dara.isNull(request.storyStartTime)) {
      body["StoryStartTime"] = request.storyStartTime;
    }

    if (!$dara.isNull(request.storySubType)) {
      body["StorySubType"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      body["StoryType"] = request.storyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateStoryResponse({}));
  }

  /**
   * Creates a story.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The operation is an asynchronous operation. After a task is executed, the task information is saved only for seven days. When the retention period ends, the task information can no longer be retrieved. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) to query information about the task. If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateStoryRequest
   * @returns CreateStoryResponse
   */
  async createStory(request: $_model.CreateStoryRequest): Promise<$_model.CreateStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStoryWithOptions(request, runtime);
  }

  /**
   * Creates a trigger. A trigger can trigger Intelligent Media Management (IMM) based on events such as events in Object Storage Service (OSS) to process files, such as images, videos, and documents based on data processing templates.
   * 
   * @remarks
   * If you want to create a trigger to process data in [OSS](https://help.aliyun.com/document_detail/99372.html), make sure that you have bound the dataset to the OSS bucket where the data is stored. For more information about how to bind a dataset to a bucket, see [AttachOSSBucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param tmpReq - CreateTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTriggerResponse
   */
  async createTriggerWithOptions(tmpReq: $_model.CreateTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTriggerResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTriggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      body["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.serviceRole)) {
      body["ServiceRole"] = request.serviceRole;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTriggerResponse>(await this.callApi(params, req, runtime), new $_model.CreateTriggerResponse({}));
  }

  /**
   * Creates a trigger. A trigger can trigger Intelligent Media Management (IMM) based on events such as events in Object Storage Service (OSS) to process files, such as images, videos, and documents based on data processing templates.
   * 
   * @remarks
   * If you want to create a trigger to process data in [OSS](https://help.aliyun.com/document_detail/99372.html), make sure that you have bound the dataset to the OSS bucket where the data is stored. For more information about how to bind a dataset to a bucket, see [AttachOSSBucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param request - CreateTriggerRequest
   * @returns CreateTriggerResponse
   */
  async createTrigger(request: $_model.CreateTriggerRequest): Promise<$_model.CreateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTriggerWithOptions(request, runtime);
  }

  /**
   * Detects the scene, object, and event tag information of video content. Scene information includes categories such as natural landscapes, life scenes, and disaster scenes. Event information includes categories such as talent shows, office events, performances, and production events. Object information includes categories such as tableware, electronic products, furniture, and transportation. Video tag detection supports more than 30 tag categories and thousands of tags.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/2747104.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that an IMM project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   For more information about video label detection, see [Video label detection](https://help.aliyun.com/document_detail/477189.html).
   * *   This operation supports multiple video formats, such as MP4, MPEG-TS, MKV, MOV, AVI, FLV, and M3U8.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param tmpReq - CreateVideoLabelClassificationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoLabelClassificationTaskResponse
   */
  async createVideoLabelClassificationTaskWithOptions(tmpReq: $_model.CreateVideoLabelClassificationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVideoLabelClassificationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVideoLabelClassificationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoLabelClassificationTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVideoLabelClassificationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVideoLabelClassificationTaskResponse({}));
  }

  /**
   * Detects the scene, object, and event tag information of video content. Scene information includes categories such as natural landscapes, life scenes, and disaster scenes. Event information includes categories such as talent shows, office events, performances, and production events. Object information includes categories such as tableware, electronic products, furniture, and transportation. Video tag detection supports more than 30 tag categories and thousands of tags.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/2747104.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that an IMM project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   For more information about video label detection, see [Video label detection](https://help.aliyun.com/document_detail/477189.html).
   * *   This operation supports multiple video formats, such as MP4, MPEG-TS, MKV, MOV, AVI, FLV, and M3U8.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications.
   * 
   * @param request - CreateVideoLabelClassificationTaskRequest
   * @returns CreateVideoLabelClassificationTaskResponse
   */
  async createVideoLabelClassificationTask(request: $_model.CreateVideoLabelClassificationTaskRequest): Promise<$_model.CreateVideoLabelClassificationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVideoLabelClassificationTaskWithOptions(request, runtime);
  }

  /**
   * Detects risky or non-compliant content from videos. You can use this operation in scenarios such as intelligent pornography detection, terrorist content and political bias detection, ad violation detection, and logo detection.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The detection result is sent as an asynchronous notification. The Suggestion parameter in asynchronous notifications supports the following values:
   *     *   pass: No non-compliant content is found.
   *     *   block: Non-compliant content is detected. The Categories field value indicates the non-compliance category. For more information, see [Content moderation results](https://help.aliyun.com/document_detail/2743995.html).
   *     *   review: A manual review is needed. After the manual review is completed, an asynchronous notification is sent to inform you about the result.
   * *   The following video frame requirements apply:
   *     *   The URLs for video frames must use HTTP or HTTPS.
   *     *   Video frames must be in PNG, JPG, JPEG, BMP, GIF, or WebP format.
   *     *   The size of a video frame cannot exceed 10 MB.
   *     *   The resolution for video frames is not lower than 256 × 256 pixels. A frame resolution lower than this recommended resolution may affect detection accuracy.
   *     *   The response time of the operation varies based on the amount of time required to download frames. Make sure that video frames to be detected are stored in a reliable and stable service. We recommend that you store video frames in OSS or cache video frames on Alibaba Cloud CDN.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications. >
   * 
   * @param tmpReq - CreateVideoModerationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoModerationTaskResponse
   */
  async createVideoModerationTaskWithOptions(tmpReq: $_model.CreateVideoModerationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVideoModerationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVideoModerationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.scenes)) {
      request.scenesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scenes, "Scenes", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.maxFrames)) {
      query["MaxFrames"] = request.maxFrames;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.scenesShrink)) {
      query["Scenes"] = request.scenesShrink;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoModerationTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVideoModerationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVideoModerationTaskResponse({}));
  }

  /**
   * Detects risky or non-compliant content from videos. You can use this operation in scenarios such as intelligent pornography detection, terrorist content and political bias detection, ad violation detection, and logo detection.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   *     **
   *     **Note** Asynchronous processing does not guarantee timely task completion.
   * *   The detection result is sent as an asynchronous notification. The Suggestion parameter in asynchronous notifications supports the following values:
   *     *   pass: No non-compliant content is found.
   *     *   block: Non-compliant content is detected. The Categories field value indicates the non-compliance category. For more information, see [Content moderation results](https://help.aliyun.com/document_detail/2743995.html).
   *     *   review: A manual review is needed. After the manual review is completed, an asynchronous notification is sent to inform you about the result.
   * *   The following video frame requirements apply:
   *     *   The URLs for video frames must use HTTP or HTTPS.
   *     *   Video frames must be in PNG, JPG, JPEG, BMP, GIF, or WebP format.
   *     *   The size of a video frame cannot exceed 10 MB.
   *     *   The resolution for video frames is not lower than 256 × 256 pixels. A frame resolution lower than this recommended resolution may affect detection accuracy.
   *     *   The response time of the operation varies based on the amount of time required to download frames. Make sure that video frames to be detected are stored in a reliable and stable service. We recommend that you store video frames in OSS or cache video frames on Alibaba Cloud CDN.
   * *   This operation is an asynchronous operation. After a task is executed, the task information is retained only for seven days and cannot be retrieved when the retention period elapses. You can call the [GetTask](https://help.aliyun.com/document_detail/478241.html) or [ListTasks](https://help.aliyun.com/document_detail/478242.html) operation to query information about the task.`` If you specify [Notification](https://help.aliyun.com/document_detail/2743997.html), you can obtain information about the task based on notifications. >
   * 
   * @param request - CreateVideoModerationTaskRequest
   * @returns CreateVideoModerationTaskResponse
   */
  async createVideoModerationTask(request: $_model.CreateVideoModerationTaskRequest): Promise<$_model.CreateVideoModerationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVideoModerationTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a batch processing task.
   * 
   * @remarks
   *   You can delete only a batch processing task that is in one of the following states: Ready, Failed, Suspended, and Succeeded.
   * *   Before you delete a batch processing task, you can call the [GetBatch](https://help.aliyun.com/document_detail/479922.html) operation to query the task status. This ensures a successful deletion.
   * 
   * @param request - DeleteBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBatchResponse
   */
  async deleteBatchWithOptions(request: $_model.DeleteBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBatchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBatchResponse({}));
  }

  /**
   * Deletes a batch processing task.
   * 
   * @remarks
   *   You can delete only a batch processing task that is in one of the following states: Ready, Failed, Suspended, and Succeeded.
   * *   Before you delete a batch processing task, you can call the [GetBatch](https://help.aliyun.com/document_detail/479922.html) operation to query the task status. This ensures a successful deletion.
   * 
   * @param request - DeleteBatchRequest
   * @returns DeleteBatchResponse
   */
  async deleteBatch(request: $_model.DeleteBatchRequest): Promise<$_model.DeleteBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBatchWithOptions(request, runtime);
  }

  /**
   * Deletes the binding between a dataset and an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   If you delete a binding, new changes in the OSS bucket are not synchronized to the dataset. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBindingResponse
   */
  async deleteBindingWithOptions(request: $_model.DeleteBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBindingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBindingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBindingResponse({}));
  }

  /**
   * Deletes the binding between a dataset and an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   If you delete a binding, new changes in the OSS bucket are not synchronized to the dataset. Exercise caution when you perform this operation.
   * 
   * @param request - DeleteBindingRequest
   * @returns DeleteBindingResponse
   */
  async deleteBinding(request: $_model.DeleteBindingRequest): Promise<$_model.DeleteBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBindingWithOptions(request, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @remarks
   *   Before you delete a dataset, make sure that you have deleted all indexes in the dataset. For more information about how to delete indexes, see [DeleteFileMeta](https://help.aliyun.com/document_detail/478172.html) and [BatchDeleteFileMeta](https://help.aliyun.com/document_detail/478173.html).
   * *   Before you [delete a dataset](https://help.aliyun.com/document_detail/478160.html), make sure that you have deleted all bindings between the dataset and Object Storage Service (OSS) buckets. For more information about how to delete a binding, see [DeleteBinding](https://help.aliyun.com/document_detail/478205.html). The [DeleteBinding](https://help.aliyun.com/document_detail/478205.html) operation does not delete an index that is manually created, even if you set the `Cleanup` parameter to `true`. To delete indexes that are manually created, you must call the [DeleteFileMeta](https://help.aliyun.com/document_detail/478172.html) or [BatchDeleteFileMeta](https://help.aliyun.com/document_detail/478173.html) operation. For more information about the differences between automatically and manually created indexes, see [Create a metadata index](https://help.aliyun.com/document_detail/478166.html).
   * 
   * @param request - DeleteDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(request: $_model.DeleteDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetResponse({}));
  }

  /**
   * Deletes a dataset.
   * 
   * @remarks
   *   Before you delete a dataset, make sure that you have deleted all indexes in the dataset. For more information about how to delete indexes, see [DeleteFileMeta](https://help.aliyun.com/document_detail/478172.html) and [BatchDeleteFileMeta](https://help.aliyun.com/document_detail/478173.html).
   * *   Before you [delete a dataset](https://help.aliyun.com/document_detail/478160.html), make sure that you have deleted all bindings between the dataset and Object Storage Service (OSS) buckets. For more information about how to delete a binding, see [DeleteBinding](https://help.aliyun.com/document_detail/478205.html). The [DeleteBinding](https://help.aliyun.com/document_detail/478205.html) operation does not delete an index that is manually created, even if you set the `Cleanup` parameter to `true`. To delete indexes that are manually created, you must call the [DeleteFileMeta](https://help.aliyun.com/document_detail/478172.html) or [BatchDeleteFileMeta](https://help.aliyun.com/document_detail/478173.html) operation. For more information about the differences between automatically and manually created indexes, see [Create a metadata index](https://help.aliyun.com/document_detail/478166.html).
   * 
   * @param request - DeleteDatasetRequest
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(request: $_model.DeleteDatasetRequest): Promise<$_model.DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  /**
   * Removes the metadata of a file from a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   A successful deletion message is returned regardless of whether the metadata of the file exists in the dataset.
   * > 
   * *   The objects stored in Object Storage Service (OSS) or Photo and Drive Service are **not** deleted if you delete metadata from a dataset. If you want to delete the file, call the corresponding operations of OSS and Photo and Drive Service.
   * *   When you delete file metadata, the corresponding face clustering group information and story (if any) are changed, but the spatiotemporal clustering is not changed.
   * 
   * @param request - DeleteFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileMetaResponse
   */
  async deleteFileMetaWithOptions(request: $_model.DeleteFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileMetaResponse({}));
  }

  /**
   * Removes the metadata of a file from a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   A successful deletion message is returned regardless of whether the metadata of the file exists in the dataset.
   * > 
   * *   The objects stored in Object Storage Service (OSS) or Photo and Drive Service are **not** deleted if you delete metadata from a dataset. If you want to delete the file, call the corresponding operations of OSS and Photo and Drive Service.
   * *   When you delete file metadata, the corresponding face clustering group information and story (if any) are changed, but the spatiotemporal clustering is not changed.
   * 
   * @param request - DeleteFileMetaRequest
   * @returns DeleteFileMetaResponse
   */
  async deleteFileMeta(request: $_model.DeleteFileMetaRequest): Promise<$_model.DeleteFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileMetaWithOptions(request, runtime);
  }

  /**
   * Deletes a spatiotemporal cluster.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.****
   * *   Before you call this operation, you must call the [CreateLocationDateClusteringTask](https://help.aliyun.com/document_detail/478188.html) operation to perform spatiotemporal clustering.
   * *   A successful deletion is returned regardless of whether a spatiotemporal clustering group ID exists.
   * 
   * @param request - DeleteLocationDateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLocationDateClusterResponse
   */
  async deleteLocationDateClusterWithOptions(request: $_model.DeleteLocationDateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLocationDateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLocationDateCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLocationDateClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLocationDateClusterResponse({}));
  }

  /**
   * Deletes a spatiotemporal cluster.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.****
   * *   Before you call this operation, you must call the [CreateLocationDateClusteringTask](https://help.aliyun.com/document_detail/478188.html) operation to perform spatiotemporal clustering.
   * *   A successful deletion is returned regardless of whether a spatiotemporal clustering group ID exists.
   * 
   * @param request - DeleteLocationDateClusterRequest
   * @returns DeleteLocationDateClusterResponse
   */
  async deleteLocationDateCluster(request: $_model.DeleteLocationDateClusterRequest): Promise<$_model.DeleteLocationDateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLocationDateClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a project.
   * 
   * @remarks
   *   Before you delete a project, make sure that all resources in the project, such as datasets, bindings, batch processing tasks, and triggers, are deleted. For more information, see [DeleteDataset](https://help.aliyun.com/document_detail/478164.html), [DeleteBatch](https://help.aliyun.com/document_detail/479918.html), and [DeleteTrigger](https://help.aliyun.com/document_detail/479915.html).
   * *   After a project is deleted, all resources used by the project are recycled, and all related data is lost and cannot be recovered.
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: $_model.DeleteProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * Deletes a project.
   * 
   * @remarks
   *   Before you delete a project, make sure that all resources in the project, such as datasets, bindings, batch processing tasks, and triggers, are deleted. For more information, see [DeleteDataset](https://help.aliyun.com/document_detail/478164.html), [DeleteBatch](https://help.aliyun.com/document_detail/479918.html), and [DeleteTrigger](https://help.aliyun.com/document_detail/479915.html).
   * *   After a project is deleted, all resources used by the project are recycled, and all related data is lost and cannot be recovered.
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * Deletes a story.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Before you call this operation, make sure that you have called the [CreateStory](https://help.aliyun.com/document_detail/478193.html) or [CreateCustomizedStory](https://help.aliyun.com/document_detail/478196.html) operation to create a story.
   * 
   * @param request - DeleteStoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStoryResponse
   */
  async deleteStoryWithOptions(request: $_model.DeleteStoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStoryResponse({}));
  }

  /**
   * Deletes a story.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Before you call this operation, make sure that you have called the [CreateStory](https://help.aliyun.com/document_detail/478193.html) or [CreateCustomizedStory](https://help.aliyun.com/document_detail/478196.html) operation to create a story.
   * 
   * @param request - DeleteStoryRequest
   * @returns DeleteStoryResponse
   */
  async deleteStory(request: $_model.DeleteStoryRequest): Promise<$_model.DeleteStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStoryWithOptions(request, runtime);
  }

  /**
   * Deletes a trigger.
   * 
   * @remarks
   * You can delete a trigger only if the trigger is in one of the following states: Ready, Failed, Suspended, and Succeeded. You cannot delete a trigger that is in the Running state.
   * 
   * @param request - DeleteTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTriggerResponse
   */
  async deleteTriggerWithOptions(request: $_model.DeleteTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTriggerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTriggerResponse({}));
  }

  /**
   * Deletes a trigger.
   * 
   * @remarks
   * You can delete a trigger only if the trigger is in one of the following states: Ready, Failed, Suspended, and Succeeded. You cannot delete a trigger that is in the Running state.
   * 
   * @param request - DeleteTriggerRequest
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(request: $_model.DeleteTriggerRequest): Promise<$_model.DeleteTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTriggerWithOptions(request, runtime);
  }

  /**
   * Unbinds an Object Storage Service (OSS) bucket from the corresponding project.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that the project is bound to a bucket. For more information, see [AttachOSSBucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param request - DetachOSSBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachOSSBucketResponse
   */
  async detachOSSBucketWithOptions(request: $_model.DetachOSSBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachOSSBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachOSSBucket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachOSSBucketResponse>(await this.callApi(params, req, runtime), new $_model.DetachOSSBucketResponse({}));
  }

  /**
   * Unbinds an Object Storage Service (OSS) bucket from the corresponding project.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that the project is bound to a bucket. For more information, see [AttachOSSBucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param request - DetachOSSBucketRequest
   * @returns DetachOSSBucketResponse
   */
  async detachOSSBucket(request: $_model.DetachOSSBucketRequest): Promise<$_model.DetachOSSBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachOSSBucketWithOptions(request, runtime);
  }

  /**
   * Detects human body information, such as the confidence level and body bounding box, in an image.
   * 
   * @remarks
   *   Before you call this operation, make sure that an Intelligent Media Management (IMM) project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   For information about the image encoding formats supported by this operation, see [Limits on images](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param tmpReq - DetectImageBodiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageBodiesResponse
   */
  async detectImageBodiesWithOptions(tmpReq: $_model.DetectImageBodiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageBodiesResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageBodiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sensitivity)) {
      query["Sensitivity"] = request.sensitivity;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageBodies",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageBodiesResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageBodiesResponse({}));
  }

  /**
   * Detects human body information, such as the confidence level and body bounding box, in an image.
   * 
   * @remarks
   *   Before you call this operation, make sure that an Intelligent Media Management (IMM) project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   For information about the image encoding formats supported by this operation, see [Limits on images](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param request - DetectImageBodiesRequest
   * @returns DetectImageBodiesResponse
   */
  async detectImageBodies(request: $_model.DetectImageBodiesRequest): Promise<$_model.DetectImageBodiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageBodiesWithOptions(request, runtime);
  }

  /**
   * Detects the outline data, attributes, and license plate information of vehicles in an image. The vehicle attributes include the vehicle color (CarColor) and vehicle type (CarType). The license plate information includes the recognition content (Content) and plate frame (Boundary).
   * 
   * @remarks
   *   For information about the image encoding formats supported by this operation, see [Limits](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param tmpReq - DetectImageCarsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageCarsResponse
   */
  async detectImageCarsWithOptions(tmpReq: $_model.DetectImageCarsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageCarsResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageCarsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageCars",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageCarsResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageCarsResponse({}));
  }

  /**
   * Detects the outline data, attributes, and license plate information of vehicles in an image. The vehicle attributes include the vehicle color (CarColor) and vehicle type (CarType). The license plate information includes the recognition content (Content) and plate frame (Boundary).
   * 
   * @remarks
   *   For information about the image encoding formats supported by this operation, see [Limits](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param request - DetectImageCarsRequest
   * @returns DetectImageCarsResponse
   */
  async detectImageCars(request: $_model.DetectImageCarsRequest): Promise<$_model.DetectImageCarsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageCarsWithOptions(request, runtime);
  }

  /**
   * Detects barcodes and QR codes in an image.
   * 
   * @remarks
   *   For information about the image encoding formats supported by this operation, see [Limits on images](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param tmpReq - DetectImageCodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageCodesResponse
   */
  async detectImageCodesWithOptions(tmpReq: $_model.DetectImageCodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageCodesResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageCodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageCodes",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageCodesResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageCodesResponse({}));
  }

  /**
   * Detects barcodes and QR codes in an image.
   * 
   * @remarks
   *   For information about the image encoding formats supported by this operation, see [Limits on images](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param request - DetectImageCodesRequest
   * @returns DetectImageCodesResponse
   */
  async detectImageCodes(request: $_model.DetectImageCodesRequest): Promise<$_model.DetectImageCodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageCodesWithOptions(request, runtime);
  }

  /**
   * Detects the cropping area that produces the optimal visual effect based on a given image ratio by using AI model capabilities.
   * 
   * @param tmpReq - DetectImageCroppingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageCroppingResponse
   */
  async detectImageCroppingWithOptions(tmpReq: $_model.DetectImageCroppingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageCroppingResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageCroppingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aspectRatios)) {
      query["AspectRatios"] = request.aspectRatios;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageCropping",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageCroppingResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageCroppingResponse({}));
  }

  /**
   * Detects the cropping area that produces the optimal visual effect based on a given image ratio by using AI model capabilities.
   * 
   * @param request - DetectImageCroppingRequest
   * @returns DetectImageCroppingResponse
   */
  async detectImageCropping(request: $_model.DetectImageCroppingRequest): Promise<$_model.DetectImageCroppingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageCroppingWithOptions(request, runtime);
  }

  /**
   * Detects faces from an image, including face boundary information, attributes, and quality. The boundary information includes the distance from the y-coordinate of the vertex to the top edge (Top), distance from the x-coordinate of the vertex to the left edge (Left), height (Height), and width (Width). Face attributes include the age (Age), age standard deviation (AgeSD), gender (Gender), emotion (Emotion), mouth opening (Mouth), beard (Beard), hat wearing (Hat), mask wearing (Mask), glasses wearing (Glasses), head orientation (HeadPose), attractiveness (Attractive), and confidence levels for preceding attributes. Quality information includes the face quality score (FaceQuality) and face resolution (Sharpness).
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   For information about the image encoding formats supported by this operation, see [Limits](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param tmpReq - DetectImageFacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageFacesResponse
   */
  async detectImageFacesWithOptions(tmpReq: $_model.DetectImageFacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageFacesResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageFacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageFaces",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageFacesResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageFacesResponse({}));
  }

  /**
   * Detects faces from an image, including face boundary information, attributes, and quality. The boundary information includes the distance from the y-coordinate of the vertex to the top edge (Top), distance from the x-coordinate of the vertex to the left edge (Left), height (Height), and width (Width). Face attributes include the age (Age), age standard deviation (AgeSD), gender (Gender), emotion (Emotion), mouth opening (Mouth), beard (Beard), hat wearing (Hat), mask wearing (Mask), glasses wearing (Glasses), head orientation (HeadPose), attractiveness (Attractive), and confidence levels for preceding attributes. Quality information includes the face quality score (FaceQuality) and face resolution (Sharpness).
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   For information about the image encoding formats supported by this operation, see [Limits](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param request - DetectImageFacesRequest
   * @returns DetectImageFacesResponse
   */
  async detectImageFaces(request: $_model.DetectImageFacesRequest): Promise<$_model.DetectImageFacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageFacesWithOptions(request, runtime);
  }

  /**
   * Detects scene, object, and event information in an image. Scene information includes natural landscapes, daily life, and disasters. Event information includes talent shows, office events, performances, and production events. Object information includes tableware, electronics, furniture, and transportation. The DetectImageLabels operation supports more than 30 different categories and thousands of labels.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Make sure that an IMM [project](https://help.aliyun.com/document_detail/478273.html) is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   For more information about the features of this operation, see [Image label detection](https://help.aliyun.com/document_detail/477179.html).
   * *   For more information about the input images supported by this operation, see [Limits on images](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param tmpReq - DetectImageLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageLabelsResponse
   */
  async detectImageLabelsWithOptions(tmpReq: $_model.DetectImageLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageLabelsResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageLabelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageLabels",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageLabelsResponse({}));
  }

  /**
   * Detects scene, object, and event information in an image. Scene information includes natural landscapes, daily life, and disasters. Event information includes talent shows, office events, performances, and production events. Object information includes tableware, electronics, furniture, and transportation. The DetectImageLabels operation supports more than 30 different categories and thousands of labels.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Make sure that an IMM [project](https://help.aliyun.com/document_detail/478273.html) is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   For more information about the features of this operation, see [Image label detection](https://help.aliyun.com/document_detail/477179.html).
   * *   For more information about the input images supported by this operation, see [Limits on images](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param request - DetectImageLabelsRequest
   * @returns DetectImageLabelsResponse
   */
  async detectImageLabels(request: $_model.DetectImageLabelsRequest): Promise<$_model.DetectImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageLabelsWithOptions(request, runtime);
  }

  /**
   * Calculates the aesthetics quality score of an image based on metrics such as the composition, brightness, contrast, color, and resolution. The operation returns a score within the range from 0 to 1. A higher score indicates better image quality.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478273.html).[](~~478152~~)
   * *   For information about the image encoding formats supported by this operation, see [Limits](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param tmpReq - DetectImageScoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageScoreResponse
   */
  async detectImageScoreWithOptions(tmpReq: $_model.DetectImageScoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageScoreResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageScoreShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageScore",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageScoreResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageScoreResponse({}));
  }

  /**
   * Calculates the aesthetics quality score of an image based on metrics such as the composition, brightness, contrast, color, and resolution. The operation returns a score within the range from 0 to 1. A higher score indicates better image quality.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478273.html).[](~~478152~~)
   * *   For information about the image encoding formats supported by this operation, see [Limits](https://help.aliyun.com/document_detail/475569.html).
   * 
   * @param request - DetectImageScoreRequest
   * @returns DetectImageScoreResponse
   */
  async detectImageScore(request: $_model.DetectImageScoreRequest): Promise<$_model.DetectImageScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageScoreWithOptions(request, runtime);
  }

  /**
   * Recognizes and extracts text content from an image.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   The size of the image cannot exceed 20 MB.
   * *   The shortest side of the image is not less than 20 px, and the longest side is not more than 30,000 px.
   * *   The aspect ratio of the image is less than 1:2.
   * *   We recommend that you do not use an image that is smaller than 15 px × 15 px in size. Otherwise, the recognition rate is low.
   * 
   * @param tmpReq - DetectImageTextsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectImageTextsResponse
   */
  async detectImageTextsWithOptions(tmpReq: $_model.DetectImageTextsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectImageTextsResponse> {
    tmpReq.validate();
    let request = new $_model.DetectImageTextsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectImageTexts",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectImageTextsResponse>(await this.callApi(params, req, runtime), new $_model.DetectImageTextsResponse({}));
  }

  /**
   * Recognizes and extracts text content from an image.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   The size of the image cannot exceed 20 MB.
   * *   The shortest side of the image is not less than 20 px, and the longest side is not more than 30,000 px.
   * *   The aspect ratio of the image is less than 1:2.
   * *   We recommend that you do not use an image that is smaller than 15 px × 15 px in size. Otherwise, the recognition rate is low.
   * 
   * @param request - DetectImageTextsRequest
   * @returns DetectImageTextsResponse
   */
  async detectImageTexts(request: $_model.DetectImageTextsRequest): Promise<$_model.DetectImageTextsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectImageTextsWithOptions(request, runtime);
  }

  /**
   * Queries media metadata, including the media format and stream information.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * 
   * @param tmpReq - DetectMediaMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectMediaMetaResponse
   */
  async detectMediaMetaWithOptions(tmpReq: $_model.DetectMediaMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectMediaMetaResponse> {
    tmpReq.validate();
    let request = new $_model.DetectMediaMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectMediaMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectMediaMetaResponse>(await this.callApi(params, req, runtime), new $_model.DetectMediaMetaResponse({}));
  }

  /**
   * Queries media metadata, including the media format and stream information.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Make sure that the specified project exists in the current region. For more information, see [Project management](https://help.aliyun.com/document_detail/478152.html).
   * 
   * @param request - DetectMediaMetaRequest
   * @returns DetectMediaMetaResponse
   */
  async detectMediaMeta(request: $_model.DetectMediaMetaRequest): Promise<$_model.DetectMediaMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectMediaMetaWithOptions(request, runtime);
  }

  /**
   * Detects whether specified text contains anomalies, such as pornography, advertisements, excessive junk content, politically sensitive content, and abuse.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * >  The text compliance detection feature only supports Chinese characters.
   * 
   * @param request - DetectTextAnomalyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectTextAnomalyResponse
   */
  async detectTextAnomalyWithOptions(request: $_model.DetectTextAnomalyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectTextAnomalyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectTextAnomaly",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectTextAnomalyResponse>(await this.callApi(params, req, runtime), new $_model.DetectTextAnomalyResponse({}));
  }

  /**
   * Detects whether specified text contains anomalies, such as pornography, advertisements, excessive junk content, politically sensitive content, and abuse.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * >  The text compliance detection feature only supports Chinese characters.
   * 
   * @param request - DetectTextAnomalyRequest
   * @returns DetectTextAnomalyResponse
   */
  async detectTextAnomaly(request: $_model.DetectTextAnomalyRequest): Promise<$_model.DetectTextAnomalyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectTextAnomalyWithOptions(request, runtime);
  }

  /**
   * Embeds specific textual information into an image as watermarks. These watermarks are visually imperceptible and do not affect the aesthetics of the image or the integrity of the original data. The watermarks can be extracted by using the CreateDecodeBlindWatermarkTask operation.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of Intelligent Media Management (IMM).
   * *   Make sure that an IMM project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   You can embed only text as blind watermarks to an image.
   * *   The format of the output image is the same as that of the input image.
   * *   A blind watermark can still be extracted even if attacks, such as compression, scaling, cropping, and color transformation, are performed on the image.
   * *   Pure black and white images and images with low resolution (roughly less than 200 px × 200 px,) are not supported.
   * 
   * @param request - EncodeBlindWatermarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncodeBlindWatermarkResponse
   */
  async encodeBlindWatermarkWithOptions(request: $_model.EncodeBlindWatermarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EncodeBlindWatermarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.imageQuality)) {
      query["ImageQuality"] = request.imageQuality;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.strengthLevel)) {
      query["StrengthLevel"] = request.strengthLevel;
    }

    if (!$dara.isNull(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EncodeBlindWatermark",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EncodeBlindWatermarkResponse>(await this.callApi(params, req, runtime), new $_model.EncodeBlindWatermarkResponse({}));
  }

  /**
   * Embeds specific textual information into an image as watermarks. These watermarks are visually imperceptible and do not affect the aesthetics of the image or the integrity of the original data. The watermarks can be extracted by using the CreateDecodeBlindWatermarkTask operation.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the billing of Intelligent Media Management (IMM).
   * *   Make sure that an IMM project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   You can embed only text as blind watermarks to an image.
   * *   The format of the output image is the same as that of the input image.
   * *   A blind watermark can still be extracted even if attacks, such as compression, scaling, cropping, and color transformation, are performed on the image.
   * *   Pure black and white images and images with low resolution (roughly less than 200 px × 200 px,) are not supported.
   * 
   * @param request - EncodeBlindWatermarkRequest
   * @returns EncodeBlindWatermarkResponse
   */
  async encodeBlindWatermark(request: $_model.EncodeBlindWatermarkRequest): Promise<$_model.EncodeBlindWatermarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encodeBlindWatermarkWithOptions(request, runtime);
  }

  /**
   * Extract text from the document
   * 
   * @remarks
   * - **Before using this interface, please make sure you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/88317.html) of the Intelligent Media Management product.**
   * - Before calling this interface, ensure that there is an available project ([Project](https://help.aliyun.com/document_detail/478273.html)) in the current Region. For more details, see [Project Management](https://help.aliyun.com/document_detail/478152.html).
   * - Supports common Word, Excel, PPT, PDF, and TXT documents.
   * - The file size must not exceed 200 MB. The extracted plain text file size should not exceed 2 MB (approximately 600,000 Chinese characters).
   * >Notice: If the document format is complex or the text volume is too large, a timeout error may occur. In such scenarios, it is recommended to use the [CreateOfficeConversionTask](478228) interface and specify the output format as txt to achieve similar functionality.
   * 
   * @param tmpReq - ExtractDocumentTextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExtractDocumentTextResponse
   */
  async extractDocumentTextWithOptions(tmpReq: $_model.ExtractDocumentTextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExtractDocumentTextResponse> {
    tmpReq.validate();
    let request = new $_model.ExtractDocumentTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExtractDocumentText",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExtractDocumentTextResponse>(await this.callApi(params, req, runtime), new $_model.ExtractDocumentTextResponse({}));
  }

  /**
   * Extract text from the document
   * 
   * @remarks
   * - **Before using this interface, please make sure you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/88317.html) of the Intelligent Media Management product.**
   * - Before calling this interface, ensure that there is an available project ([Project](https://help.aliyun.com/document_detail/478273.html)) in the current Region. For more details, see [Project Management](https://help.aliyun.com/document_detail/478152.html).
   * - Supports common Word, Excel, PPT, PDF, and TXT documents.
   * - The file size must not exceed 200 MB. The extracted plain text file size should not exceed 2 MB (approximately 600,000 Chinese characters).
   * >Notice: If the document format is complex or the text volume is too large, a timeout error may occur. In such scenarios, it is recommended to use the [CreateOfficeConversionTask](478228) interface and specify the output format as txt to achieve similar functionality.
   * 
   * @param request - ExtractDocumentTextRequest
   * @returns ExtractDocumentTextResponse
   */
  async extractDocumentText(request: $_model.ExtractDocumentTextRequest): Promise<$_model.ExtractDocumentTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.extractDocumentTextWithOptions(request, runtime);
  }

  /**
   * Queries the extracted file metadata, including the file name, labels, path, custom tags, text, and other fields. If the value of a metadata field of a file matches the specified string, the metadata of the file is returned.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, join the DingTalk chat group (ID: 88490020073) and share your questions with us.
   * *   For information about the fields that you can use as query conditions, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * @param tmpReq - FuzzyQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FuzzyQueryResponse
   */
  async fuzzyQueryWithOptions(tmpReq: $_model.FuzzyQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FuzzyQueryResponse> {
    tmpReq.validate();
    let request = new $_model.FuzzyQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.withFields)) {
      request.withFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.withFields, "WithFields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.withFieldsShrink)) {
      query["WithFields"] = request.withFieldsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FuzzyQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FuzzyQueryResponse>(await this.callApi(params, req, runtime), new $_model.FuzzyQueryResponse({}));
  }

  /**
   * Queries the extracted file metadata, including the file name, labels, path, custom tags, text, and other fields. If the value of a metadata field of a file matches the specified string, the metadata of the file is returned.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, join the DingTalk chat group (ID: 88490020073) and share your questions with us.
   * *   For information about the fields that you can use as query conditions, see [Supported fields and operators](https://help.aliyun.com/document_detail/2743991.html).
   * 
   * @param request - FuzzyQueryRequest
   * @returns FuzzyQueryResponse
   */
  async fuzzyQuery(request: $_model.FuzzyQueryRequest): Promise<$_model.FuzzyQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fuzzyQueryWithOptions(request, runtime);
  }

  /**
   * Generates a live transcoding playlist and converts video files into M3U8 files. After a playlist is generated, the videos in the playlist are immediately played and the video files are transcoded based on the playback progress. Compared with offline transcoding, online transcoding significantly reduces the time spent in waiting for the videos to be transcoded and reduces transcoding and storage costs.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).**
   * *   Make sure that the project that you want to use is available in the current region. For more information, see [Project Management](https://help.aliyun.com/document_detail/478152.html).
   * *   By default, you can call this operation to process only one video, audio, or subtitle track. You can specify the number of the video, audio, or subtitle tracks that you want to process.
   * *   You can call this operation to generate a media playlist and a master playlist. For more information, see the parameter description.
   * *   This operation is a synchronous operation. Synchronous or asynchronous transcoding is triggered only during playback or pre-transcoding. You can configure the [Notification](https://help.aliyun.com/document_detail/2743997.html) parameter to obtain the transcoding task result.
   * *   For information about the feature description of this operation, see [Live transcoding](https://help.aliyun.com/document_detail/477192.html).
   * *   The data processing capability of Object Storage Service (OSS) also provides the playlist generation feature. However, this feature can generate only a media playlist, and related parameters are simplified.
   * 
   * @param tmpReq - GenerateVideoPlaylistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateVideoPlaylistResponse
   */
  async generateVideoPlaylistWithOptions(tmpReq: $_model.GenerateVideoPlaylistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateVideoPlaylistResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateVideoPlaylistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.sourceSubtitles)) {
      request.sourceSubtitlesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSubtitles, "SourceSubtitles", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!$dara.isNull(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.masterURI)) {
      query["MasterURI"] = request.masterURI;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.overwritePolicy)) {
      query["OverwritePolicy"] = request.overwritePolicy;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceDuration)) {
      query["SourceDuration"] = request.sourceDuration;
    }

    if (!$dara.isNull(request.sourceStartTime)) {
      query["SourceStartTime"] = request.sourceStartTime;
    }

    if (!$dara.isNull(request.sourceSubtitlesShrink)) {
      query["SourceSubtitles"] = request.sourceSubtitlesShrink;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateVideoPlaylist",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateVideoPlaylistResponse>(await this.callApi(params, req, runtime), new $_model.GenerateVideoPlaylistResponse({}));
  }

  /**
   * Generates a live transcoding playlist and converts video files into M3U8 files. After a playlist is generated, the videos in the playlist are immediately played and the video files are transcoded based on the playback progress. Compared with offline transcoding, online transcoding significantly reduces the time spent in waiting for the videos to be transcoded and reduces transcoding and storage costs.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).**
   * *   Make sure that the project that you want to use is available in the current region. For more information, see [Project Management](https://help.aliyun.com/document_detail/478152.html).
   * *   By default, you can call this operation to process only one video, audio, or subtitle track. You can specify the number of the video, audio, or subtitle tracks that you want to process.
   * *   You can call this operation to generate a media playlist and a master playlist. For more information, see the parameter description.
   * *   This operation is a synchronous operation. Synchronous or asynchronous transcoding is triggered only during playback or pre-transcoding. You can configure the [Notification](https://help.aliyun.com/document_detail/2743997.html) parameter to obtain the transcoding task result.
   * *   For information about the feature description of this operation, see [Live transcoding](https://help.aliyun.com/document_detail/477192.html).
   * *   The data processing capability of Object Storage Service (OSS) also provides the playlist generation feature. However, this feature can generate only a media playlist, and related parameters are simplified.
   * 
   * @param request - GenerateVideoPlaylistRequest
   * @returns GenerateVideoPlaylistResponse
   */
  async generateVideoPlaylist(request: $_model.GenerateVideoPlaylistRequest): Promise<$_model.GenerateVideoPlaylistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateVideoPlaylistWithOptions(request, runtime);
  }

  /**
   * Generates an access token for document preview or editing.
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - The access token expires in 30 minutes, and the refresh token expires in 1 day.
   * - The returned expiration time is in UTC, which has an 8-hour difference from Beijing Time.
   * - Supported input file formats:
   *     - Word documents: doc, docx, txt, dot, wps, wpt, dotx, docm, dotm, rtf.
   *     - Presentation documents (PPT): ppt, pptx, pptm, ppsx, ppsm, pps, potx, potm, dpt, dps.
   *     - Spreadsheet documents (Excel): et, xls, xlt, xlsx, xlsm, xltx, xltm, csv
   *     - PDF documents: pdf.
   * - Supports files up to 200MB.
   * - Supports documents with a maximum of 5000 pages.
   * - Projects created before 2023-12-01 are billed based on the number of document openings. Currently, billing is based on the number of API calls. To switch to the new billing model, simply create a new project. Note that one API call can only be used by one user; if reused, only the last user will have normal access, and the access rights of other users will be revoked.
   * - In the same region as the Intelligent Media Management, activate MNS service, create topics and queues, and configure subscription relationships. You can pass the MNS topic name through the NotifyTopicName parameter to receive message notifications for file saves. For more information about the MNS SDK, see [Receiving and Deleting Messages](https://help.aliyun.com/document_detail/32449.html).
   * For an example of the JSON format of the Message field in file save message notifications, refer to [WebOffice Message Notification Format](https://help.aliyun.com/document_detail/2743999.html).
   * > To use the multi-version feature, you must first enable the multi-version feature in OSS, then set the \\"History\\" parameter to true.
   * >
   * 
   * @param tmpReq - GenerateWebofficeTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateWebofficeTokenResponse
   */
  async generateWebofficeTokenWithOptions(tmpReq: $_model.GenerateWebofficeTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateWebofficeTokenResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateWebofficeTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.permission)) {
      request.permissionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permission, "Permission", "json");
    }

    if (!$dara.isNull(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    if (!$dara.isNull(tmpReq.watermark)) {
      request.watermarkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.watermark, "Watermark", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cachePreview)) {
      query["CachePreview"] = request.cachePreview;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.externalUploaded)) {
      query["ExternalUploaded"] = request.externalUploaded;
    }

    if (!$dara.isNull(request.filename)) {
      query["Filename"] = request.filename;
    }

    if (!$dara.isNull(request.hidecmb)) {
      query["Hidecmb"] = request.hidecmb;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.notifyTopicName)) {
      query["NotifyTopicName"] = request.notifyTopicName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.permissionShrink)) {
      query["Permission"] = request.permissionShrink;
    }

    if (!$dara.isNull(request.previewPages)) {
      query["PreviewPages"] = request.previewPages;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.referer)) {
      query["Referer"] = request.referer;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!$dara.isNull(request.userShrink)) {
      query["User"] = request.userShrink;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.watermarkShrink)) {
      query["Watermark"] = request.watermarkShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateWebofficeToken",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateWebofficeTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateWebofficeTokenResponse({}));
  }

  /**
   * Generates an access token for document preview or editing.
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - The access token expires in 30 minutes, and the refresh token expires in 1 day.
   * - The returned expiration time is in UTC, which has an 8-hour difference from Beijing Time.
   * - Supported input file formats:
   *     - Word documents: doc, docx, txt, dot, wps, wpt, dotx, docm, dotm, rtf.
   *     - Presentation documents (PPT): ppt, pptx, pptm, ppsx, ppsm, pps, potx, potm, dpt, dps.
   *     - Spreadsheet documents (Excel): et, xls, xlt, xlsx, xlsm, xltx, xltm, csv
   *     - PDF documents: pdf.
   * - Supports files up to 200MB.
   * - Supports documents with a maximum of 5000 pages.
   * - Projects created before 2023-12-01 are billed based on the number of document openings. Currently, billing is based on the number of API calls. To switch to the new billing model, simply create a new project. Note that one API call can only be used by one user; if reused, only the last user will have normal access, and the access rights of other users will be revoked.
   * - In the same region as the Intelligent Media Management, activate MNS service, create topics and queues, and configure subscription relationships. You can pass the MNS topic name through the NotifyTopicName parameter to receive message notifications for file saves. For more information about the MNS SDK, see [Receiving and Deleting Messages](https://help.aliyun.com/document_detail/32449.html).
   * For an example of the JSON format of the Message field in file save message notifications, refer to [WebOffice Message Notification Format](https://help.aliyun.com/document_detail/2743999.html).
   * > To use the multi-version feature, you must first enable the multi-version feature in OSS, then set the \\"History\\" parameter to true.
   * >
   * 
   * @param request - GenerateWebofficeTokenRequest
   * @returns GenerateWebofficeTokenResponse
   */
  async generateWebofficeToken(request: $_model.GenerateWebofficeTokenRequest): Promise<$_model.GenerateWebofficeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateWebofficeTokenWithOptions(request, runtime);
  }

  /**
   * Queries the information about a batch processing task.
   * 
   * @param request - GetBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBatchResponse
   */
  async getBatchWithOptions(request: $_model.GetBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBatchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBatchResponse>(await this.callApi(params, req, runtime), new $_model.GetBatchResponse({}));
  }

  /**
   * Queries the information about a batch processing task.
   * 
   * @param request - GetBatchRequest
   * @returns GetBatchResponse
   */
  async getBatch(request: $_model.GetBatchRequest): Promise<$_model.GetBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBatchWithOptions(request, runtime);
  }

  /**
   * Queries the binding relationship between a specific dataset and an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**
   * *   Make sure that the binding relationship that you want to query exists. For information about how to create a binding relationship, see [CreateBinding](https://help.aliyun.com/document_detail/478202.html).
   * 
   * @param request - GetBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBindingResponse
   */
  async getBindingWithOptions(request: $_model.GetBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBindingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBindingResponse>(await this.callApi(params, req, runtime), new $_model.GetBindingResponse({}));
  }

  /**
   * Queries the binding relationship between a specific dataset and an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**
   * *   Make sure that the binding relationship that you want to query exists. For information about how to create a binding relationship, see [CreateBinding](https://help.aliyun.com/document_detail/478202.html).
   * 
   * @param request - GetBindingRequest
   * @returns GetBindingResponse
   */
  async getBinding(request: $_model.GetBindingRequest): Promise<$_model.GetBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBindingWithOptions(request, runtime);
  }

  /**
   * drmlicense获取
   * 
   * @deprecated OpenAPI GetDRMLicense is deprecated
   * 
   * @param request - GetDRMLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDRMLicenseResponse
   */
  async getDRMLicenseWithOptions(request: $_model.GetDRMLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDRMLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.notifyEndpoint)) {
      query["NotifyEndpoint"] = request.notifyEndpoint;
    }

    if (!$dara.isNull(request.notifyTopicName)) {
      query["NotifyTopicName"] = request.notifyTopicName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.protectionSystem)) {
      query["ProtectionSystem"] = request.protectionSystem;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDRMLicense",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDRMLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetDRMLicenseResponse({}));
  }

  /**
   * drmlicense获取
   * 
   * @deprecated OpenAPI GetDRMLicense is deprecated
   * 
   * @param request - GetDRMLicenseRequest
   * @returns GetDRMLicenseResponse
   */
  // Deprecated
  async getDRMLicense(request: $_model.GetDRMLicenseRequest): Promise<$_model.GetDRMLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDRMLicenseWithOptions(request, runtime);
  }

  /**
   * Queries a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   The GetDataset operation supports real-time retrieval of file statistics. You can specify WithStatistics to enable real-time retrieval of file statistics.
   * 
   * @param request - GetDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(request: $_model.GetDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.withStatistics)) {
      query["WithStatistics"] = request.withStatistics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetResponse({}));
  }

  /**
   * Queries a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   The GetDataset operation supports real-time retrieval of file statistics. You can specify WithStatistics to enable real-time retrieval of file statistics.
   * 
   * @param request - GetDatasetRequest
   * @returns GetDatasetResponse
   */
  async getDataset(request: $_model.GetDatasetRequest): Promise<$_model.GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  /**
   * Queries the result of an invisible watermark parsing task.
   * 
   * @remarks
   *   Before you call this operation, make sure that an Intelligent Media Management (IMM) project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   Before you call this operation, make sure that an invisible watermark task is created and the task ID is obtained.``
   * 
   * @param request - GetDecodeBlindWatermarkResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDecodeBlindWatermarkResultResponse
   */
  async getDecodeBlindWatermarkResultWithOptions(request: $_model.GetDecodeBlindWatermarkResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDecodeBlindWatermarkResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDecodeBlindWatermarkResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDecodeBlindWatermarkResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDecodeBlindWatermarkResultResponse({}));
  }

  /**
   * Queries the result of an invisible watermark parsing task.
   * 
   * @remarks
   *   Before you call this operation, make sure that an Intelligent Media Management (IMM) project is created. For information about how to create a project, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   Before you call this operation, make sure that an invisible watermark task is created and the task ID is obtained.``
   * 
   * @param request - GetDecodeBlindWatermarkResultRequest
   * @returns GetDecodeBlindWatermarkResultResponse
   */
  async getDecodeBlindWatermarkResult(request: $_model.GetDecodeBlindWatermarkResultRequest): Promise<$_model.GetDecodeBlindWatermarkResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDecodeBlindWatermarkResultWithOptions(request, runtime);
  }

  /**
   * Obtains basic information about face clustering, including the creation time, number of images, and cover.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**
   * *   Before you call this operation, make sure that a face clustering task is created to group all faces in a dataset. For information about how to create a face clustering task, see [CreateFigureClusteringTask](~~CreateFigureClusteringTask~~). For information about how to create a dataset, see [CreateDataset](~~CreateDataset~~).
   * 
   * @param request - GetFigureClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFigureClusterResponse
   */
  async getFigureClusterWithOptions(request: $_model.GetFigureClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFigureClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFigureClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetFigureClusterResponse({}));
  }

  /**
   * Obtains basic information about face clustering, including the creation time, number of images, and cover.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**
   * *   Before you call this operation, make sure that a face clustering task is created to group all faces in a dataset. For information about how to create a face clustering task, see [CreateFigureClusteringTask](~~CreateFigureClusteringTask~~). For information about how to create a dataset, see [CreateDataset](~~CreateDataset~~).
   * 
   * @param request - GetFigureClusterRequest
   * @returns GetFigureClusterResponse
   */
  async getFigureCluster(request: $_model.GetFigureClusterRequest): Promise<$_model.GetFigureClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFigureClusterWithOptions(request, runtime);
  }

  /**
   * Queries metadata of a file whose metadata is indexed into the dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, join the DingTalk chat group (ID: 31690030817) and share your questions with us.
   * 
   * @param tmpReq - GetFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileMetaResponse
   */
  async getFileMetaWithOptions(tmpReq: $_model.GetFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.GetFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.withFields)) {
      request.withFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.withFields, "WithFields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    if (!$dara.isNull(request.withFieldsShrink)) {
      query["WithFields"] = request.withFieldsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetFileMetaResponse({}));
  }

  /**
   * Queries metadata of a file whose metadata is indexed into the dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, join the DingTalk chat group (ID: 31690030817) and share your questions with us.
   * 
   * @param request - GetFileMetaRequest
   * @returns GetFileMetaResponse
   */
  async getFileMeta(request: $_model.GetFileMetaRequest): Promise<$_model.GetFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileMetaWithOptions(request, runtime);
  }

  /**
   * Queries an image compliance detection task.
   * 
   * @param request - GetImageModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageModerationResultResponse
   */
  async getImageModerationResultWithOptions(request: $_model.GetImageModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageModerationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageModerationResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetImageModerationResultResponse({}));
  }

  /**
   * Queries an image compliance detection task.
   * 
   * @param request - GetImageModerationResultRequest
   * @returns GetImageModerationResultResponse
   */
  async getImageModerationResult(request: $_model.GetImageModerationResultRequest): Promise<$_model.GetImageModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageModerationResultWithOptions(request, runtime);
  }

  /**
   * Queries the name of the project bound to an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**
   * *   Before you call this operation, make sure that [the project whose name you want to query is bound to the specified OSS bucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param request - GetOSSBucketAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSBucketAttachmentResponse
   */
  async getOSSBucketAttachmentWithOptions(request: $_model.GetOSSBucketAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSBucketAttachmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSBucketAttachment",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSBucketAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.GetOSSBucketAttachmentResponse({}));
  }

  /**
   * Queries the name of the project bound to an Object Storage Service (OSS) bucket.
   * 
   * @remarks
   *   **Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**
   * *   Before you call this operation, make sure that [the project whose name you want to query is bound to the specified OSS bucket](https://help.aliyun.com/document_detail/478206.html).
   * 
   * @param request - GetOSSBucketAttachmentRequest
   * @returns GetOSSBucketAttachmentResponse
   */
  async getOSSBucketAttachment(request: $_model.GetOSSBucketAttachmentRequest): Promise<$_model.GetOSSBucketAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOSSBucketAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries the basic information, datasets, and file statistics of a project.
   * 
   * @remarks
   * When you call this operation, you can enable the real-time retrieval of file statistics based on your business requirements. For more information, see the "Request parameters" section of this topic.
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: $_model.GetProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.withStatistics)) {
      query["WithStatistics"] = request.withStatistics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Queries the basic information, datasets, and file statistics of a project.
   * 
   * @remarks
   * When you call this operation, you can enable the real-time retrieval of file statistics based on your business requirements. For more information, see the "Request parameters" section of this topic.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * Queries a story.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Before you call this operation, make sure that you have called the [CreateStory](https://help.aliyun.com/document_detail/478193.html) or [CreateCustomizedStory](https://help.aliyun.com/document_detail/478196.html) operation to create a story.
   * 
   * @param request - GetStoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoryResponse
   */
  async getStoryWithOptions(request: $_model.GetStoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStoryResponse>(await this.callApi(params, req, runtime), new $_model.GetStoryResponse({}));
  }

  /**
   * Queries a story.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Before you call this operation, make sure that you have called the [CreateStory](https://help.aliyun.com/document_detail/478193.html) or [CreateCustomizedStory](https://help.aliyun.com/document_detail/478196.html) operation to create a story.
   * 
   * @param request - GetStoryRequest
   * @returns GetStoryResponse
   */
  async getStory(request: $_model.GetStoryRequest): Promise<$_model.GetStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStoryWithOptions(request, runtime);
  }

  /**
   * Queries information about an asynchronous task. Intelligent Media Management (IMM) has multiple asynchronous data processing capabilities, each of which has its own operation for creating tasks. For example, you can call the CreateFigureClusteringTask operation to create a face clustering task and the CreateFileCompressionTask operation to create a file compression task. The GetTask operation is a general operation. You can call this operation to query information about asynchronous tasks by task ID or type.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.
   * 
   * @param request - GetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(request: $_model.GetTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.requestDefinition)) {
      query["RequestDefinition"] = request.requestDefinition;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Queries information about an asynchronous task. Intelligent Media Management (IMM) has multiple asynchronous data processing capabilities, each of which has its own operation for creating tasks. For example, you can call the CreateFigureClusteringTask operation to create a face clustering task and the CreateFileCompressionTask operation to create a file compression task. The GetTask operation is a general operation. You can call this operation to query information about asynchronous tasks by task ID or type.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(request: $_model.GetTaskRequest): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
   * Queries the information about a trigger.
   * 
   * @param request - GetTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTriggerResponse
   */
  async getTriggerWithOptions(request: $_model.GetTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTriggerResponse>(await this.callApi(params, req, runtime), new $_model.GetTriggerResponse({}));
  }

  /**
   * Queries the information about a trigger.
   * 
   * @param request - GetTriggerRequest
   * @returns GetTriggerResponse
   */
  async getTrigger(request: $_model.GetTriggerRequest): Promise<$_model.GetTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTriggerWithOptions(request, runtime);
  }

  /**
   * Queries the results of a video label detection task.
   * 
   * @remarks
   *   Before you call this operation, make sure that a [project](https://help.aliyun.com/document_detail/478273.html) is created on Intelligent Media Management (IMM). For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   Before you call this operation, make sure that a video label detection task is created and the `TaskId` of the task is obtained. For more information, see [CreateVideoLabelClassificationTask](https://help.aliyun.com/document_detail/478223.html).
   * 
   * @param request - GetVideoLabelClassificationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoLabelClassificationResultResponse
   */
  async getVideoLabelClassificationResultWithOptions(request: $_model.GetVideoLabelClassificationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoLabelClassificationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoLabelClassificationResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoLabelClassificationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoLabelClassificationResultResponse({}));
  }

  /**
   * Queries the results of a video label detection task.
   * 
   * @remarks
   *   Before you call this operation, make sure that a [project](https://help.aliyun.com/document_detail/478273.html) is created on Intelligent Media Management (IMM). For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * *   Before you call this operation, make sure that a video label detection task is created and the `TaskId` of the task is obtained. For more information, see [CreateVideoLabelClassificationTask](https://help.aliyun.com/document_detail/478223.html).
   * 
   * @param request - GetVideoLabelClassificationResultRequest
   * @returns GetVideoLabelClassificationResultResponse
   */
  async getVideoLabelClassificationResult(request: $_model.GetVideoLabelClassificationResultRequest): Promise<$_model.GetVideoLabelClassificationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoLabelClassificationResultWithOptions(request, runtime);
  }

  /**
   * Queries the result of a video moderation task.
   * 
   * @param request - GetVideoModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoModerationResultResponse
   */
  async getVideoModerationResultWithOptions(request: $_model.GetVideoModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoModerationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoModerationResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoModerationResultResponse({}));
  }

  /**
   * Queries the result of a video moderation task.
   * 
   * @param request - GetVideoModerationResultRequest
   * @returns GetVideoModerationResultResponse
   */
  async getVideoModerationResult(request: $_model.GetVideoModerationResultRequest): Promise<$_model.GetVideoModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoModerationResultWithOptions(request, runtime);
  }

  /**
   * Creates an index from metadata extracted by using techniques such as label recognition, face detection, and location detection from input files. You can retrieve data from the same dataset by using multiple methods.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   For information about how to create indexes from metadata, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * *   For information about the limits on the maximum number and size of index files that you can create, see the "Limits on datasets" section of the [Limits](https://help.aliyun.com/document_detail/475569.html) topic. For information about how to create a dataset, see the "CreateDataset" topic.
   * *   For information about the regions in which you can create index files from metadata, see the "Datasets and indexes" section of the [Limits](https://help.aliyun.com/document_detail/475569.html) topic.
   * *   After you create an index from metadata, you can try [simple query](https://help.aliyun.com/document_detail/478175.html) to retrieve data. For information about other query capabilities, see [Query and statistics](https://help.aliyun.com/document_detail/2402363.html). You can also [create a face clustering task](https://help.aliyun.com/document_detail/478180.html) to group faces. For information about other clustering capabilities, see [Intelligent management](https://help.aliyun.com/document_detail/2402365.html).
   * **
   * **Usage notes**
   * *   The IndexFileMeta operation is asynchronous, indicating that it takes some time to process the data after a request is submitted. After the processing is complete, the metadata is stored in your dataset. The amount of time it takes for this process varies based on [the workflow template, the operator](https://help.aliyun.com/document_detail/466304.html), and the content of the file, ranging from several seconds to several minutes or even longer. You can subscribe to [Simple Message Service](https://help.aliyun.com/document_detail/2743997.html) for task completion notifications.
   * 
   * @param tmpReq - IndexFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IndexFileMetaResponse
   */
  async indexFileMetaWithOptions(tmpReq: $_model.IndexFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IndexFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.IndexFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.file)) {
      request.fileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.file, "File", "json");
    }

    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.fileShrink)) {
      query["File"] = request.fileShrink;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IndexFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IndexFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.IndexFileMetaResponse({}));
  }

  /**
   * Creates an index from metadata extracted by using techniques such as label recognition, face detection, and location detection from input files. You can retrieve data from the same dataset by using multiple methods.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   For information about how to create indexes from metadata, see [Workflow templates and operators](https://help.aliyun.com/document_detail/466304.html).
   * *   For information about the limits on the maximum number and size of index files that you can create, see the "Limits on datasets" section of the [Limits](https://help.aliyun.com/document_detail/475569.html) topic. For information about how to create a dataset, see the "CreateDataset" topic.
   * *   For information about the regions in which you can create index files from metadata, see the "Datasets and indexes" section of the [Limits](https://help.aliyun.com/document_detail/475569.html) topic.
   * *   After you create an index from metadata, you can try [simple query](https://help.aliyun.com/document_detail/478175.html) to retrieve data. For information about other query capabilities, see [Query and statistics](https://help.aliyun.com/document_detail/2402363.html). You can also [create a face clustering task](https://help.aliyun.com/document_detail/478180.html) to group faces. For information about other clustering capabilities, see [Intelligent management](https://help.aliyun.com/document_detail/2402365.html).
   * **
   * **Usage notes**
   * *   The IndexFileMeta operation is asynchronous, indicating that it takes some time to process the data after a request is submitted. After the processing is complete, the metadata is stored in your dataset. The amount of time it takes for this process varies based on [the workflow template, the operator](https://help.aliyun.com/document_detail/466304.html), and the content of the file, ranging from several seconds to several minutes or even longer. You can subscribe to [Simple Message Service](https://help.aliyun.com/document_detail/2743997.html) for task completion notifications.
   * 
   * @param request - IndexFileMetaRequest
   * @returns IndexFileMetaResponse
   */
  async indexFileMeta(request: $_model.IndexFileMetaRequest): Promise<$_model.IndexFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.indexFileMetaWithOptions(request, runtime);
  }

  /**
   * List bound attachments
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/88317.html) of the Intelligent Media Management product before using this interface.**
   * - Ensure that you have called [Bind Object Storage Bucket](～～478206～～) to bind the OSS Bucket to the project.
   * 
   * @param request - ListAttachedOSSBucketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAttachedOSSBucketsResponse
   */
  async listAttachedOSSBucketsWithOptions(request: $_model.ListAttachedOSSBucketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAttachedOSSBucketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAttachedOSSBuckets",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAttachedOSSBucketsResponse>(await this.callApi(params, req, runtime), new $_model.ListAttachedOSSBucketsResponse({}));
  }

  /**
   * List bound attachments
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/88317.html) of the Intelligent Media Management product before using this interface.**
   * - Ensure that you have called [Bind Object Storage Bucket](～～478206～～) to bind the OSS Bucket to the project.
   * 
   * @param request - ListAttachedOSSBucketsRequest
   * @returns ListAttachedOSSBucketsResponse
   */
  async listAttachedOSSBuckets(request: $_model.ListAttachedOSSBucketsRequest): Promise<$_model.ListAttachedOSSBucketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAttachedOSSBucketsWithOptions(request, runtime);
  }

  /**
   * Queries batch processing tasks. You can query batch processing tasks based on conditions such task tags and status. The results can be sorted.
   * 
   * @param request - ListBatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBatchesResponse
   */
  async listBatchesWithOptions(request: $_model.ListBatchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBatchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tagSelector)) {
      query["TagSelector"] = request.tagSelector;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBatches",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBatchesResponse>(await this.callApi(params, req, runtime), new $_model.ListBatchesResponse({}));
  }

  /**
   * Queries batch processing tasks. You can query batch processing tasks based on conditions such task tags and status. The results can be sorted.
   * 
   * @param request - ListBatchesRequest
   * @returns ListBatchesResponse
   */
  async listBatches(request: $_model.ListBatchesRequest): Promise<$_model.ListBatchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBatchesWithOptions(request, runtime);
  }

  /**
   * Queries bindings between a dataset and Object Storage Service (OSS) buckets.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).
   * 
   * @param request - ListBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindingsResponse
   */
  async listBindingsWithOptions(request: $_model.ListBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBindings",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListBindingsResponse({}));
  }

  /**
   * Queries bindings between a dataset and Object Storage Service (OSS) buckets.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).
   * 
   * @param request - ListBindingsRequest
   * @returns ListBindingsResponse
   */
  async listBindings(request: $_model.ListBindingsRequest): Promise<$_model.ListBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  /**
   * Queries a list of datasets. You can query the list by dataset prefix.
   * 
   * @param request - ListDatasetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(request: $_model.ListDatasetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasets",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetsResponse({}));
  }

  /**
   * Queries a list of datasets. You can query the list by dataset prefix.
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(request: $_model.ListDatasetsRequest): Promise<$_model.ListDatasetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  /**
   * Queries projects. You can call this operation to query the basic information, datasets, and file statistics of multiple projects at the same time.
   * 
   * @remarks
   * The ListProjects operation supports pagination. When you call this operation, you must specify the token that is obtained from the previous query as the value of NextToken. You must also specify MaxResults to limit the number of entries to return.
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * Queries projects. You can call this operation to query the basic information, datasets, and file statistics of multiple projects at the same time.
   * 
   * @remarks
   * The ListProjects operation supports pagination. When you call this operation, you must specify the token that is obtained from the previous query as the value of NextToken. You must also specify MaxResults to limit the number of entries to return.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * Get the list of regions
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: $_model.ListRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Get the list of regions
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Lists tasks based on specific conditions, such as by time range and by tag.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).
   * 
   * @param tmpReq - ListTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: $_model.ListTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endTimeRange)) {
      request.endTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endTimeRange, "EndTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.startTimeRange)) {
      request.startTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTimeRange, "StartTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.taskTypes)) {
      request.taskTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypes, "TaskTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endTimeRangeShrink)) {
      query["EndTimeRange"] = request.endTimeRangeShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.requestDefinition)) {
      query["RequestDefinition"] = request.requestDefinition;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.startTimeRangeShrink)) {
      query["StartTimeRange"] = request.startTimeRangeShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagSelector)) {
      query["TagSelector"] = request.tagSelector;
    }

    if (!$dara.isNull(request.taskTypesShrink)) {
      query["TaskTypes"] = request.taskTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * Lists tasks based on specific conditions, such as by time range and by tag.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
   * Queries triggers by tag or status.
   * 
   * @param request - ListTriggersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTriggersResponse
   */
  async listTriggersWithOptions(request: $_model.ListTriggersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTriggersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.tagSelector)) {
      query["TagSelector"] = request.tagSelector;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTriggers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTriggersResponse>(await this.callApi(params, req, runtime), new $_model.ListTriggersResponse({}));
  }

  /**
   * Queries triggers by tag or status.
   * 
   * @param request - ListTriggersRequest
   * @returns ListTriggersResponse
   */
  async listTriggers(request: $_model.ListTriggersRequest): Promise<$_model.ListTriggersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTriggersWithOptions(request, runtime);
  }

  /**
   * Queries face groups based on given conditions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that a face clustering task is created to group all faces in a dataset. For information about how to create a face clustering task, see [CreateFigureClusteringTask](~~CreateFigureClusteringTask~~). For information about how to create a dataset, see [CreateDataset](~~CreateDataset~~).
   * 
   * @param tmpReq - QueryFigureClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryFigureClustersResponse
   */
  async queryFigureClustersWithOptions(tmpReq: $_model.QueryFigureClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryFigureClustersResponse> {
    tmpReq.validate();
    let request = new $_model.QueryFigureClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createTimeRange)) {
      request.createTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimeRange, "CreateTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.updateTimeRange)) {
      request.updateTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateTimeRange, "UpdateTimeRange", "json");
    }

    let query = { };
    if (!$dara.isNull(request.createTimeRangeShrink)) {
      query["CreateTimeRange"] = request.createTimeRangeShrink;
    }

    if (!$dara.isNull(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.updateTimeRangeShrink)) {
      query["UpdateTimeRange"] = request.updateTimeRangeShrink;
    }

    if (!$dara.isNull(request.withTotalCount)) {
      query["WithTotalCount"] = request.withTotalCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryFigureClusters",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryFigureClustersResponse>(await this.callApi(params, req, runtime), new $_model.QueryFigureClustersResponse({}));
  }

  /**
   * Queries face groups based on given conditions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that a face clustering task is created to group all faces in a dataset. For information about how to create a face clustering task, see [CreateFigureClusteringTask](~~CreateFigureClusteringTask~~). For information about how to create a dataset, see [CreateDataset](~~CreateDataset~~).
   * 
   * @param request - QueryFigureClustersRequest
   * @returns QueryFigureClustersResponse
   */
  async queryFigureClusters(request: $_model.QueryFigureClustersRequest): Promise<$_model.QueryFigureClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryFigureClustersWithOptions(request, runtime);
  }

  /**
   * Queries a list of spatiotemporal clusters based on the specified conditions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.****
   * *   Before you call this operation, make sure that you have called the [CreateLocationDateClusteringTask](https://help.aliyun.com/document_detail/478188.html) operation to create spatiotemporal clusters in the project.
   * 
   * @param tmpReq - QueryLocationDateClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLocationDateClustersResponse
   */
  async queryLocationDateClustersWithOptions(tmpReq: $_model.QueryLocationDateClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLocationDateClustersResponse> {
    tmpReq.validate();
    let request = new $_model.QueryLocationDateClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.address)) {
      request.addressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.address, "Address", "json");
    }

    if (!$dara.isNull(tmpReq.createTimeRange)) {
      request.createTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimeRange, "CreateTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.locationDateClusterEndTimeRange)) {
      request.locationDateClusterEndTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDateClusterEndTimeRange, "LocationDateClusterEndTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.locationDateClusterLevels)) {
      request.locationDateClusterLevelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDateClusterLevels, "LocationDateClusterLevels", "json");
    }

    if (!$dara.isNull(tmpReq.locationDateClusterStartTimeRange)) {
      request.locationDateClusterStartTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDateClusterStartTimeRange, "LocationDateClusterStartTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.updateTimeRange)) {
      request.updateTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateTimeRange, "UpdateTimeRange", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addressShrink)) {
      query["Address"] = request.addressShrink;
    }

    if (!$dara.isNull(request.createTimeRangeShrink)) {
      query["CreateTimeRange"] = request.createTimeRangeShrink;
    }

    if (!$dara.isNull(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.locationDateClusterEndTimeRangeShrink)) {
      query["LocationDateClusterEndTimeRange"] = request.locationDateClusterEndTimeRangeShrink;
    }

    if (!$dara.isNull(request.locationDateClusterLevelsShrink)) {
      query["LocationDateClusterLevels"] = request.locationDateClusterLevelsShrink;
    }

    if (!$dara.isNull(request.locationDateClusterStartTimeRangeShrink)) {
      query["LocationDateClusterStartTimeRange"] = request.locationDateClusterStartTimeRangeShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.updateTimeRangeShrink)) {
      query["UpdateTimeRange"] = request.updateTimeRangeShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLocationDateClusters",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLocationDateClustersResponse>(await this.callApi(params, req, runtime), new $_model.QueryLocationDateClustersResponse({}));
  }

  /**
   * Queries a list of spatiotemporal clusters based on the specified conditions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of IMM.****
   * *   Before you call this operation, make sure that you have called the [CreateLocationDateClusteringTask](https://help.aliyun.com/document_detail/478188.html) operation to create spatiotemporal clusters in the project.
   * 
   * @param request - QueryLocationDateClustersRequest
   * @returns QueryLocationDateClustersResponse
   */
  async queryLocationDateClusters(request: $_model.QueryLocationDateClustersRequest): Promise<$_model.QueryLocationDateClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLocationDateClustersWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the list of similar image clusters.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, you must call the [CreateSimilarImageClusteringTask](https://help.aliyun.com/document_detail/611302.html) operation to cluster similar images in the dataset.
   * 
   * @param request - QuerySimilarImageClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySimilarImageClustersResponse
   */
  async querySimilarImageClustersWithOptions(request: $_model.QuerySimilarImageClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySimilarImageClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySimilarImageClusters",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySimilarImageClustersResponse>(await this.callApi(params, req, runtime), new $_model.QuerySimilarImageClustersResponse({}));
  }

  /**
   * You can call this operation to query the list of similar image clusters.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, you must call the [CreateSimilarImageClusteringTask](https://help.aliyun.com/document_detail/611302.html) operation to cluster similar images in the dataset.
   * 
   * @param request - QuerySimilarImageClustersRequest
   * @returns QuerySimilarImageClustersResponse
   */
  async querySimilarImageClusters(request: $_model.QuerySimilarImageClustersRequest): Promise<$_model.QuerySimilarImageClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySimilarImageClustersWithOptions(request, runtime);
  }

  /**
   * Queries stories based on the specified conditions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Before you call this operation, make sure that you have called the [CreateStory](https://help.aliyun.com/document_detail/478193.html) or [CreateCustomizedStory](https://help.aliyun.com/document_detail/478196.html) operation to create a story.
   * 
   * @param tmpReq - QueryStoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStoriesResponse
   */
  async queryStoriesWithOptions(tmpReq: $_model.QueryStoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStoriesResponse> {
    tmpReq.validate();
    let request = new $_model.QueryStoriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createTimeRange)) {
      request.createTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimeRange, "CreateTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.figureClusterIds)) {
      request.figureClusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.figureClusterIds, "FigureClusterIds", "json");
    }

    if (!$dara.isNull(tmpReq.storyEndTimeRange)) {
      request.storyEndTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storyEndTimeRange, "StoryEndTimeRange", "json");
    }

    if (!$dara.isNull(tmpReq.storyStartTimeRange)) {
      request.storyStartTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storyStartTimeRange, "StoryStartTimeRange", "json");
    }

    let query = { };
    if (!$dara.isNull(request.createTimeRangeShrink)) {
      query["CreateTimeRange"] = request.createTimeRangeShrink;
    }

    if (!$dara.isNull(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.figureClusterIdsShrink)) {
      query["FigureClusterIds"] = request.figureClusterIdsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.storyEndTimeRangeShrink)) {
      query["StoryEndTimeRange"] = request.storyEndTimeRangeShrink;
    }

    if (!$dara.isNull(request.storyName)) {
      query["StoryName"] = request.storyName;
    }

    if (!$dara.isNull(request.storyStartTimeRangeShrink)) {
      query["StoryStartTimeRange"] = request.storyStartTimeRangeShrink;
    }

    if (!$dara.isNull(request.storySubType)) {
      query["StorySubType"] = request.storySubType;
    }

    if (!$dara.isNull(request.storyType)) {
      query["StoryType"] = request.storyType;
    }

    if (!$dara.isNull(request.withEmptyStories)) {
      query["WithEmptyStories"] = request.withEmptyStories;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStories",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStoriesResponse>(await this.callApi(params, req, runtime), new $_model.QueryStoriesResponse({}));
  }

  /**
   * Queries stories based on the specified conditions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   Before you call this operation, make sure that you have called the [CreateStory](https://help.aliyun.com/document_detail/478193.html) or [CreateCustomizedStory](https://help.aliyun.com/document_detail/478196.html) operation to create a story.
   * 
   * @param request - QueryStoriesRequest
   * @returns QueryStoriesResponse
   */
  async queryStories(request: $_model.QueryStoriesRequest): Promise<$_model.QueryStoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStoriesWithOptions(request, runtime);
  }

  /**
   * Refresh Document Preview and Editing Token
   * 
   * @remarks
   * *Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - For detailed billing information, refer to the [WebOffice Billing Instructions](https://help.aliyun.com/document_detail/2639703.html).
   * - The access token expires after 30 minutes. You must open the preview before the access token expires; otherwise, you will not be able to preview.
   * - The refresh token expires after 1 day. You need to call the refresh interface before the refresh token expires; otherwise, the token will become invalid.
   * - The expiration time returned is in UTC, which has an 8-hour difference from Beijing Time.
   * > The access token is used for actual preview session access, while the refresh token is used to reduce the parameters required for users to refresh tokens. You can use the refresh token to directly obtain a new token based on previous configurations.
   * >
   * 
   * @param tmpReq - RefreshWebofficeTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshWebofficeTokenResponse
   */
  async refreshWebofficeTokenWithOptions(tmpReq: $_model.RefreshWebofficeTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshWebofficeTokenResponse> {
    tmpReq.validate();
    let request = new $_model.RefreshWebofficeTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.refreshToken)) {
      query["RefreshToken"] = request.refreshToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshWebofficeToken",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshWebofficeTokenResponse>(await this.callApi(params, req, runtime), new $_model.RefreshWebofficeTokenResponse({}));
  }

  /**
   * Refresh Document Preview and Editing Token
   * 
   * @remarks
   * *Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - For detailed billing information, refer to the [WebOffice Billing Instructions](https://help.aliyun.com/document_detail/2639703.html).
   * - The access token expires after 30 minutes. You must open the preview before the access token expires; otherwise, you will not be able to preview.
   * - The refresh token expires after 1 day. You need to call the refresh interface before the refresh token expires; otherwise, the token will become invalid.
   * - The expiration time returned is in UTC, which has an 8-hour difference from Beijing Time.
   * > The access token is used for actual preview session access, while the refresh token is used to reduce the parameters required for users to refresh tokens. You can use the refresh token to directly obtain a new token based on previous configurations.
   * >
   * 
   * @param request - RefreshWebofficeTokenRequest
   * @returns RefreshWebofficeTokenResponse
   */
  async refreshWebofficeToken(request: $_model.RefreshWebofficeTokenRequest): Promise<$_model.RefreshWebofficeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshWebofficeTokenWithOptions(request, runtime);
  }

  /**
   * Deletes files from a story.
   * 
   * @param tmpReq - RemoveStoryFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveStoryFilesResponse
   */
  async removeStoryFilesWithOptions(tmpReq: $_model.RemoveStoryFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveStoryFilesResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveStoryFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveStoryFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveStoryFilesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveStoryFilesResponse({}));
  }

  /**
   * Deletes files from a story.
   * 
   * @param request - RemoveStoryFilesRequest
   * @returns RemoveStoryFilesResponse
   */
  async removeStoryFiles(request: $_model.RemoveStoryFilesRequest): Promise<$_model.RemoveStoryFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeStoryFilesWithOptions(request, runtime);
  }

  /**
   * Resumes a batch processing task that is in the Suspended or Failed state.
   * 
   * @remarks
   * You can resume a batch processing task only when the task is in the Suspended or Failed state. A batch processing task continues to provide services after you resume the task.
   * 
   * @param request - ResumeBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeBatchResponse
   */
  async resumeBatchWithOptions(request: $_model.ResumeBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeBatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeBatchResponse>(await this.callApi(params, req, runtime), new $_model.ResumeBatchResponse({}));
  }

  /**
   * Resumes a batch processing task that is in the Suspended or Failed state.
   * 
   * @remarks
   * You can resume a batch processing task only when the task is in the Suspended or Failed state. A batch processing task continues to provide services after you resume the task.
   * 
   * @param request - ResumeBatchRequest
   * @returns ResumeBatchResponse
   */
  async resumeBatch(request: $_model.ResumeBatchRequest): Promise<$_model.ResumeBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeBatchWithOptions(request, runtime);
  }

  /**
   * Resumes a trigger that is in the Suspended or Failed state.
   * 
   * @remarks
   * You can resume only a trigger that is in the Suspended or Failed state. After you resume a trigger, the trigger continues to provide services as expected.
   * 
   * @param request - ResumeTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTriggerResponse
   */
  async resumeTriggerWithOptions(request: $_model.ResumeTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeTriggerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeTriggerResponse>(await this.callApi(params, req, runtime), new $_model.ResumeTriggerResponse({}));
  }

  /**
   * Resumes a trigger that is in the Suspended or Failed state.
   * 
   * @remarks
   * You can resume only a trigger that is in the Suspended or Failed state. After you resume a trigger, the trigger continues to provide services as expected.
   * 
   * @param request - ResumeTriggerRequest
   * @returns ResumeTriggerResponse
   */
  async resumeTrigger(request: $_model.ResumeTriggerRequest): Promise<$_model.ResumeTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeTriggerWithOptions(request, runtime);
  }

  /**
   * Queries face clusters that contain a specific face in an image. Each face cluster contains information such as bounding boxes and similarity.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have created a face clustering task by calling the [CreateFigureClusteringTask](https://help.aliyun.com/document_detail/478180.html) operation to cluster all faces in the dataset.
   * 
   * @param tmpReq - SearchImageFigureClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchImageFigureClusterResponse
   */
  async searchImageFigureClusterWithOptions(tmpReq: $_model.SearchImageFigureClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchImageFigureClusterResponse> {
    tmpReq.validate();
    let request = new $_model.SearchImageFigureClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchImageFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchImageFigureClusterResponse>(await this.callApi(params, req, runtime), new $_model.SearchImageFigureClusterResponse({}));
  }

  /**
   * Queries face clusters that contain a specific face in an image. Each face cluster contains information such as bounding boxes and similarity.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/88317.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have created a face clustering task by calling the [CreateFigureClusteringTask](https://help.aliyun.com/document_detail/478180.html) operation to cluster all faces in the dataset.
   * 
   * @param request - SearchImageFigureClusterRequest
   * @returns SearchImageFigureClusterResponse
   */
  async searchImageFigureCluster(request: $_model.SearchImageFigureClusterRequest): Promise<$_model.SearchImageFigureClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchImageFigureClusterWithOptions(request, runtime);
  }

  /**
   * Queries metadata in a dataset by inputting natural language.
   * 
   * @remarks
   * ### [](#)Precautions
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**** Each time you call this operation, you are charged for semantic understanding and query fees.
   * *   Before you call this operation, make sure that the file that you want to use is indexed into the dataset that you use. To index a file into a dataset, you can call one of the following operations: [CreateBinding](https://help.aliyun.com/document_detail/478202.html), [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html), and [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html).
   * *   The response provided in this example is for reference only. The categories and content of metadata vary based on configurations of [workflow templates](https://help.aliyun.com/document_detail/466304.html). If you have questions, search for and join the DingTalk group numbered 21714099.
   * ### [](#)Usage limits
   * *   Each time you call this operation, up to 1,000 metadata files are returned.
   * *   Pagination is not supported.
   * *   The natural language processing capability may not always produce completely accurate results.
   * ### [](#)Usage methods
   * You can query files within a dataset by using natural language keywords. Key information supported for understanding includes labels (Labels.LabelName), time (ProduceTime), and location (Address.AddressLine). For example, if you use `2023 Hangzhou scenery` as the query criterion, the operation intelligently breaks the query criterion down into the following sub-criteria, and returns the files that meet all the sub-criteria:
   * *   ProduceTime: 00:00 on January 1, 2023 to 00:00 on December 31, 2023.
   * *   Address.AddressLine: `Hangzhou`
   * *   Labels.LabelName: `scenery`.
   * When you call this operation, you can configure a [workflow template](https://help.aliyun.com/document_detail/466304.html) that includes the `ImageEmbeddingExtraction` operator. This allows the operation to return image content when the query you input matches the image content, thereby achieving intelligent image retrieval.``
   * 
   * @param tmpReq - SemanticQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SemanticQueryResponse
   */
  async semanticQueryWithOptions(tmpReq: $_model.SemanticQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SemanticQueryResponse> {
    tmpReq.validate();
    let request = new $_model.SemanticQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.mediaTypes)) {
      request.mediaTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mediaTypes, "MediaTypes", "json");
    }

    if (!$dara.isNull(tmpReq.withFields)) {
      request.withFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.withFields, "WithFields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mediaTypesShrink)) {
      query["MediaTypes"] = request.mediaTypesShrink;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.withFieldsShrink)) {
      query["WithFields"] = request.withFieldsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SemanticQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SemanticQueryResponse>(await this.callApi(params, req, runtime), new $_model.SemanticQueryResponse({}));
  }

  /**
   * Queries metadata in a dataset by inputting natural language.
   * 
   * @remarks
   * ### [](#)Precautions
   * *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).**** Each time you call this operation, you are charged for semantic understanding and query fees.
   * *   Before you call this operation, make sure that the file that you want to use is indexed into the dataset that you use. To index a file into a dataset, you can call one of the following operations: [CreateBinding](https://help.aliyun.com/document_detail/478202.html), [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html), and [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html).
   * *   The response provided in this example is for reference only. The categories and content of metadata vary based on configurations of [workflow templates](https://help.aliyun.com/document_detail/466304.html). If you have questions, search for and join the DingTalk group numbered 21714099.
   * ### [](#)Usage limits
   * *   Each time you call this operation, up to 1,000 metadata files are returned.
   * *   Pagination is not supported.
   * *   The natural language processing capability may not always produce completely accurate results.
   * ### [](#)Usage methods
   * You can query files within a dataset by using natural language keywords. Key information supported for understanding includes labels (Labels.LabelName), time (ProduceTime), and location (Address.AddressLine). For example, if you use `2023 Hangzhou scenery` as the query criterion, the operation intelligently breaks the query criterion down into the following sub-criteria, and returns the files that meet all the sub-criteria:
   * *   ProduceTime: 00:00 on January 1, 2023 to 00:00 on December 31, 2023.
   * *   Address.AddressLine: `Hangzhou`
   * *   Labels.LabelName: `scenery`.
   * When you call this operation, you can configure a [workflow template](https://help.aliyun.com/document_detail/466304.html) that includes the `ImageEmbeddingExtraction` operator. This allows the operation to return image content when the query you input matches the image content, thereby achieving intelligent image retrieval.``
   * 
   * @param request - SemanticQueryRequest
   * @returns SemanticQueryResponse
   */
  async semanticQuery(request: $_model.SemanticQueryRequest): Promise<$_model.SemanticQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.semanticQueryWithOptions(request, runtime);
  }

  /**
   * Queries files in a dataset by performing a simple query operation. The operation supports logical expressions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, join the DingTalk chat group (ID: 31690030817) and share your questions with us.
   * **Limits**
   * *   Each query returns information about up to 100 files.
   * *   Each query returns up to 2,000 aggregations.
   * *   A subquery supports up to 100 conditions.
   * *   A subquery can have a maximum nesting depth of 5 levels.
   * **Example query conditions**
   * *   Retrieve JPEG images larger than 1,000 pixels:
   * <!---->
   *     {
   *       "SubQueries":[
   *         {
   *           "Field":"ContentType",
   *           "Value": "image/jpeg",
   *           "Operation":"eq"
   *         },         
   *         {
   *           "Field":"ImageWidth",
   *           "Value":"1000",
   *           "Operation":"gt"
   *         }
   *       ],
   *       "Operation":"and"
   *     }
   * *   Search `oss://examplebucket/path/` for objects that have the `TV` or `Stereo` label and are larger than 10 MB in size:
   * >  This query requires matching files to have the `TV` or `Stereo` label. The two labels are specified as separate objects in the `Labels` fields.
   * ```
   * {
   *   "SubQueries": [
   *     {
   *       "Field": "URI",
   *       "Value": "oss://examplebucket/path/",
   *       "Operation": "prefix"
   *     },
   *     {
   *       "Field": "Size",
   *       "Value": "1048576",
   *       "Operation": "gt"
   *     },
   *     {
   *       "SubQueries": [
   *         {
   *           "Field": "Labels.LabelName",
   *           "Value": "TV",
   *           "Operation": "eq"
   *         },
   *         {
   *           "Field": "Labels.LabelName",
   *           "Value": "Stereo",
   *           "Operation": "eq"
   *         }
   *       ],
   *       "Operation": "or"
   *     }
   *   ],
   *   "Operation": "and"
   * }
   *         
   * ```
   * *   Exclude images that contain a face of a male over the age of 36:
   * >  In this example query, an image will be excluded from the query results if it contains a face of a male over the age of 36. This query is different from excluding an image that contains a male face or a face of a person over the age of 36. In this query, you need to use the `nested` operator to specify that the conditions are met on the same element.
   *     {
   *     	"Operation": "not",
   *     	"SubQueries": [{
   *     		"Operation": "nested",
   *     		"SubQueries": [{
   *     			"Operation": "and",
   *     			"SubQueries": [{
   *     				"Field": "Figures.Age",
   *     				"Operation": "gt",
   *     				"Value": "36"
   *     			}, {
   *     				"Field": "Figures.Gender",
   *     				"Operation": "eq",
   *     				"Value": "male"
   *     			}]
   *     		}]
   *     	}]
   *     }
   * *   Query JPEG images that have both custom labels and system labels:
   * <!---->
   *     {
   *       "SubQueries":[
   *         {
   *           "Field":"ContentType",
   *           "Value": "image/jpeg",
   *           "Operation":"eq"
   *         },         
   *         {
   *           "Field":"CustomLabels.test",
   *           "Operation":"exist"
   *         },         
   *         {
   *           "Field":"Labels.LabelName",
   *           "Operation":"exist"
   *         }
   *       ],
   *       "Operation":"and"
   *     }
   * You can also perform aggregate operations to collect and analyze different data based on the specified conditions. For example, you can calculate the sum, count, average value, or maximum value of all files that meet the query conditions. You can also calculate the size distribution of images that meet the query conditions.
   * 
   * @param tmpReq - SimpleQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SimpleQueryResponse
   */
  async simpleQueryWithOptions(tmpReq: $_model.SimpleQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SimpleQueryResponse> {
    tmpReq.validate();
    let request = new $_model.SimpleQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aggregations)) {
      request.aggregationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregations, "Aggregations", "json");
    }

    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.withFields)) {
      request.withFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.withFields, "WithFields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregationsShrink)) {
      query["Aggregations"] = request.aggregationsShrink;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.withFieldsShrink)) {
      query["WithFields"] = request.withFieldsShrink;
    }

    if (!$dara.isNull(request.withoutTotalHits)) {
      query["WithoutTotalHits"] = request.withoutTotalHits;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SimpleQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SimpleQueryResponse>(await this.callApi(params, req, runtime), new $_model.SimpleQueryResponse({}));
  }

  /**
   * Queries files in a dataset by performing a simple query operation. The operation supports logical expressions.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have indexed file metadata into the dataset automatically by calling the [CreateBinding](https://help.aliyun.com/document_detail/478202.html) operation or manually by calling the [IndexFileMeta](https://help.aliyun.com/document_detail/478166.html) or [BatchIndexFileMeta](https://help.aliyun.com/document_detail/478167.html) operation.
   * *   The sample response is provided for reference only. The metadata type and content in your response may differ based on factors such as the [workflow template configurations](https://help.aliyun.com/document_detail/466304.html). For any inquiries, join the DingTalk chat group (ID: 31690030817) and share your questions with us.
   * **Limits**
   * *   Each query returns information about up to 100 files.
   * *   Each query returns up to 2,000 aggregations.
   * *   A subquery supports up to 100 conditions.
   * *   A subquery can have a maximum nesting depth of 5 levels.
   * **Example query conditions**
   * *   Retrieve JPEG images larger than 1,000 pixels:
   * <!---->
   *     {
   *       "SubQueries":[
   *         {
   *           "Field":"ContentType",
   *           "Value": "image/jpeg",
   *           "Operation":"eq"
   *         },         
   *         {
   *           "Field":"ImageWidth",
   *           "Value":"1000",
   *           "Operation":"gt"
   *         }
   *       ],
   *       "Operation":"and"
   *     }
   * *   Search `oss://examplebucket/path/` for objects that have the `TV` or `Stereo` label and are larger than 10 MB in size:
   * >  This query requires matching files to have the `TV` or `Stereo` label. The two labels are specified as separate objects in the `Labels` fields.
   * ```
   * {
   *   "SubQueries": [
   *     {
   *       "Field": "URI",
   *       "Value": "oss://examplebucket/path/",
   *       "Operation": "prefix"
   *     },
   *     {
   *       "Field": "Size",
   *       "Value": "1048576",
   *       "Operation": "gt"
   *     },
   *     {
   *       "SubQueries": [
   *         {
   *           "Field": "Labels.LabelName",
   *           "Value": "TV",
   *           "Operation": "eq"
   *         },
   *         {
   *           "Field": "Labels.LabelName",
   *           "Value": "Stereo",
   *           "Operation": "eq"
   *         }
   *       ],
   *       "Operation": "or"
   *     }
   *   ],
   *   "Operation": "and"
   * }
   *         
   * ```
   * *   Exclude images that contain a face of a male over the age of 36:
   * >  In this example query, an image will be excluded from the query results if it contains a face of a male over the age of 36. This query is different from excluding an image that contains a male face or a face of a person over the age of 36. In this query, you need to use the `nested` operator to specify that the conditions are met on the same element.
   *     {
   *     	"Operation": "not",
   *     	"SubQueries": [{
   *     		"Operation": "nested",
   *     		"SubQueries": [{
   *     			"Operation": "and",
   *     			"SubQueries": [{
   *     				"Field": "Figures.Age",
   *     				"Operation": "gt",
   *     				"Value": "36"
   *     			}, {
   *     				"Field": "Figures.Gender",
   *     				"Operation": "eq",
   *     				"Value": "male"
   *     			}]
   *     		}]
   *     	}]
   *     }
   * *   Query JPEG images that have both custom labels and system labels:
   * <!---->
   *     {
   *       "SubQueries":[
   *         {
   *           "Field":"ContentType",
   *           "Value": "image/jpeg",
   *           "Operation":"eq"
   *         },         
   *         {
   *           "Field":"CustomLabels.test",
   *           "Operation":"exist"
   *         },         
   *         {
   *           "Field":"Labels.LabelName",
   *           "Operation":"exist"
   *         }
   *       ],
   *       "Operation":"and"
   *     }
   * You can also perform aggregate operations to collect and analyze different data based on the specified conditions. For example, you can calculate the sum, count, average value, or maximum value of all files that meet the query conditions. You can also calculate the size distribution of images that meet the query conditions.
   * 
   * @param request - SimpleQueryRequest
   * @returns SimpleQueryResponse
   */
  async simpleQuery(request: $_model.SimpleQueryRequest): Promise<$_model.SimpleQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.simpleQueryWithOptions(request, runtime);
  }

  /**
   * Suspends a batch processing task.
   * 
   * @remarks
   * You can suspend a batch processing task that is in the Running state. You can call the [ResumeBatch](https://help.aliyun.com/document_detail/479914.html) operation to resume a batch processing task that is suspended.
   * 
   * @param request - SuspendBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendBatchResponse
   */
  async suspendBatchWithOptions(request: $_model.SuspendBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendBatchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendBatchResponse>(await this.callApi(params, req, runtime), new $_model.SuspendBatchResponse({}));
  }

  /**
   * Suspends a batch processing task.
   * 
   * @remarks
   * You can suspend a batch processing task that is in the Running state. You can call the [ResumeBatch](https://help.aliyun.com/document_detail/479914.html) operation to resume a batch processing task that is suspended.
   * 
   * @param request - SuspendBatchRequest
   * @returns SuspendBatchResponse
   */
  async suspendBatch(request: $_model.SuspendBatchRequest): Promise<$_model.SuspendBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendBatchWithOptions(request, runtime);
  }

  /**
   * Suspends a running trigger.
   * 
   * @remarks
   * The operation can be used to suspend a trigger only in the Running state. If you want to resume a suspended trigger, call the [ResumeTrigger](https://help.aliyun.com/document_detail/479919.html) operation.
   * 
   * @param request - SuspendTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendTriggerResponse
   */
  async suspendTriggerWithOptions(request: $_model.SuspendTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendTriggerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendTriggerResponse>(await this.callApi(params, req, runtime), new $_model.SuspendTriggerResponse({}));
  }

  /**
   * Suspends a running trigger.
   * 
   * @remarks
   * The operation can be used to suspend a trigger only in the Running state. If you want to resume a suspended trigger, call the [ResumeTrigger](https://help.aliyun.com/document_detail/479919.html) operation.
   * 
   * @param request - SuspendTriggerRequest
   * @returns SuspendTriggerResponse
   */
  async suspendTrigger(request: $_model.SuspendTriggerRequest): Promise<$_model.SuspendTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendTriggerWithOptions(request, runtime);
  }

  /**
   * Updates information about a batch processing task, including the input data source, data processing settings, and tags.
   * 
   * @remarks
   *   You can update only a batch processing task that is in the Ready or Failed state. The update operation does not change the status of the batch processing task.
   * *   If you update a batch processing task that is in progress, the task is not automatically resumed after the update is complete. You must call the [ResumeBatch](https://help.aliyun.com/document_detail/479914.html) operation to resume the task.
   * 
   * @param tmpReq - UpdateBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBatchResponse
   */
  async updateBatchWithOptions(tmpReq: $_model.UpdateBatchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBatchResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBatchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBatchResponse({}));
  }

  /**
   * Updates information about a batch processing task, including the input data source, data processing settings, and tags.
   * 
   * @remarks
   *   You can update only a batch processing task that is in the Ready or Failed state. The update operation does not change the status of the batch processing task.
   * *   If you update a batch processing task that is in progress, the task is not automatically resumed after the update is complete. You must call the [ResumeBatch](https://help.aliyun.com/document_detail/479914.html) operation to resume the task.
   * 
   * @param request - UpdateBatchRequest
   * @returns UpdateBatchResponse
   */
  async updateBatch(request: $_model.UpdateBatchRequest): Promise<$_model.UpdateBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBatchWithOptions(request, runtime);
  }

  /**
   * Update Media Set
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - When updating dataset information, make sure the dataset has been successfully created. For creating a dataset, please refer to the request parameter description.
   * - When updating dataset information, only fill in the fields that need to be updated; unfilled fields will not change.
   * - The update of the dataset will not take effect immediately and may require up to 5 minutes to become effective.
   * 
   * @param tmpReq - UpdateDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(tmpReq: $_model.UpdateDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workflowParameters)) {
      request.workflowParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workflowParameters, "WorkflowParameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!$dara.isNull(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!$dara.isNull(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!$dara.isNull(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!$dara.isNull(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.workflowParametersShrink)) {
      query["WorkflowParameters"] = request.workflowParametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetResponse({}));
  }

  /**
   * Update Media Set
   * 
   * @remarks
   * - **Please ensure that you fully understand the billing method and [pricing](https://help.aliyun.com/document_detail/477042.html) of the Intelligent Media Management product before using this interface.**
   * - When updating dataset information, make sure the dataset has been successfully created. For creating a dataset, please refer to the request parameter description.
   * - When updating dataset information, only fill in the fields that need to be updated; unfilled fields will not change.
   * - The update of the dataset will not take effect immediately and may require up to 5 minutes to become effective.
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(request: $_model.UpdateDatasetRequest): Promise<$_model.UpdateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  /**
   * Updates information about a face cluster, such as the cluster name and labels.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have called the [CreateFigureClusteringTask](https://help.aliyun.com/document_detail/478180.html) operation to cluster all faces in the dataset.
   * *   The operation updates only the cover image, cluster name, and tags.
   * *   After the operation is successful, you can call the [GetFigureCluster](https://help.aliyun.com/document_detail/478182.html) or [BatchGetFigureCluster](https://help.aliyun.com/document_detail/2248450.html) operation to query the updated cluster.
   * 
   * @param tmpReq - UpdateFigureClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFigureClusterResponse
   */
  async updateFigureClusterWithOptions(tmpReq: $_model.UpdateFigureClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFigureClusterResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFigureClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.figureCluster)) {
      request.figureClusterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.figureCluster, "FigureCluster", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.figureClusterShrink)) {
      query["FigureCluster"] = request.figureClusterShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFigureClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFigureClusterResponse({}));
  }

  /**
   * Updates information about a face cluster, such as the cluster name and labels.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have called the [CreateFigureClusteringTask](https://help.aliyun.com/document_detail/478180.html) operation to cluster all faces in the dataset.
   * *   The operation updates only the cover image, cluster name, and tags.
   * *   After the operation is successful, you can call the [GetFigureCluster](https://help.aliyun.com/document_detail/478182.html) or [BatchGetFigureCluster](https://help.aliyun.com/document_detail/2248450.html) operation to query the updated cluster.
   * 
   * @param request - UpdateFigureClusterRequest
   * @returns UpdateFigureClusterResponse
   */
  async updateFigureCluster(request: $_model.UpdateFigureClusterRequest): Promise<$_model.UpdateFigureClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFigureClusterWithOptions(request, runtime);
  }

  /**
   * Updates the partial metadata of the indexed files in a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   You cannot call this operation to update all metadata. You can update only metadata specified by CustomLabels, CustomId, and Figures. For more information, see the "Request parameters" section of this topic.
   * 
   * @param tmpReq - UpdateFileMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileMetaResponse
   */
  async updateFileMetaWithOptions(tmpReq: $_model.UpdateFileMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileMetaResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.file)) {
      request.fileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.file, "File", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.fileShrink)) {
      query["File"] = request.fileShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileMetaResponse({}));
  }

  /**
   * Updates the partial metadata of the indexed files in a dataset.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   You cannot call this operation to update all metadata. You can update only metadata specified by CustomLabels, CustomId, and Figures. For more information, see the "Request parameters" section of this topic.
   * 
   * @param request - UpdateFileMetaRequest
   * @returns UpdateFileMetaResponse
   */
  async updateFileMeta(request: $_model.UpdateFileMetaRequest): Promise<$_model.UpdateFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileMetaWithOptions(request, runtime);
  }

  /**
   * Updates a spatiotemporal cluster.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have called the [CreateLocationDateClusteringTask](https://help.aliyun.com/document_detail/478188.html) operation to create spatiotemporal clusters in the project.
   * 
   * @param tmpReq - UpdateLocationDateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLocationDateClusterResponse
   */
  async updateLocationDateClusterWithOptions(tmpReq: $_model.UpdateLocationDateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLocationDateClusterResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLocationDateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customId)) {
      query["CustomId"] = request.customId;
    }

    if (!$dara.isNull(request.customLabelsShrink)) {
      query["CustomLabels"] = request.customLabelsShrink;
    }

    if (!$dara.isNull(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLocationDateCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLocationDateClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLocationDateClusterResponse({}));
  }

  /**
   * Updates a spatiotemporal cluster.
   * 
   * @remarks
   *   Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/477042.html) of Intelligent Media Management (IMM).****
   * *   Before you call this operation, make sure that you have called the [CreateLocationDateClusteringTask](https://help.aliyun.com/document_detail/478188.html) operation to create spatiotemporal clusters in the project.
   * 
   * @param request - UpdateLocationDateClusterRequest
   * @returns UpdateLocationDateClusterResponse
   */
  async updateLocationDateCluster(request: $_model.UpdateLocationDateClusterRequest): Promise<$_model.UpdateLocationDateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLocationDateClusterWithOptions(request, runtime);
  }

  /**
   * Updates information about a project.
   * 
   * @remarks
   *   Before you call this operation, make sure that the project exists. For information about how to create a project, see "CreateProject".
   * *   When you call this operation, you need to specify only the parameters that you want to update. The parameters that you do not specify remain unchanged after you call this operation.
   * *   Wait for up to 5 minutes for the update to take effect.
   * 
   * @param tmpReq - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(tmpReq: $_model.UpdateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!$dara.isNull(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!$dara.isNull(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!$dara.isNull(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!$dara.isNull(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.projectMaxDatasetCount)) {
      query["ProjectMaxDatasetCount"] = request.projectMaxDatasetCount;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.serviceRole)) {
      query["ServiceRole"] = request.serviceRole;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * Updates information about a project.
   * 
   * @remarks
   *   Before you call this operation, make sure that the project exists. For information about how to create a project, see "CreateProject".
   * *   When you call this operation, you need to specify only the parameters that you want to update. The parameters that you do not specify remain unchanged after you call this operation.
   * *   Wait for up to 5 minutes for the update to take effect.
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  /**
   * Updates the information about a story, such as the story name and cover image.
   * 
   * @param tmpReq - UpdateStoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStoryResponse
   */
  async updateStoryWithOptions(tmpReq: $_model.UpdateStoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStoryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cover)) {
      request.coverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cover, "Cover", "json");
    }

    if (!$dara.isNull(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coverShrink)) {
      body["Cover"] = request.coverShrink;
    }

    if (!$dara.isNull(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!$dara.isNull(request.customLabelsShrink)) {
      body["CustomLabels"] = request.customLabelsShrink;
    }

    if (!$dara.isNull(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.storyName)) {
      body["StoryName"] = request.storyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStoryResponse({}));
  }

  /**
   * Updates the information about a story, such as the story name and cover image.
   * 
   * @param request - UpdateStoryRequest
   * @returns UpdateStoryResponse
   */
  async updateStory(request: $_model.UpdateStoryRequest): Promise<$_model.UpdateStoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStoryWithOptions(request, runtime);
  }

  /**
   * Updates information about a trigger, such as the input data source, data processing settings, and tags.
   * 
   * @remarks
   *   You can update only a trigger that is in the Ready or Failed state. The update operation does not change the trigger status.
   * *   After you update a trigger, the uncompleted tasks under the original trigger are no longer executed. You can call the [ResumeTrigger](https://help.aliyun.com/document_detail/479916.html) operation to resume the execution of the trigger.
   * 
   * @param tmpReq - UpdateTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTriggerResponse
   */
  async updateTriggerWithOptions(tmpReq: $_model.UpdateTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTriggerResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTriggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTriggerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTriggerResponse({}));
  }

  /**
   * Updates information about a trigger, such as the input data source, data processing settings, and tags.
   * 
   * @remarks
   *   You can update only a trigger that is in the Ready or Failed state. The update operation does not change the trigger status.
   * *   After you update a trigger, the uncompleted tasks under the original trigger are no longer executed. You can call the [ResumeTrigger](https://help.aliyun.com/document_detail/479916.html) operation to resume the execution of the trigger.
   * 
   * @param request - UpdateTriggerRequest
   * @returns UpdateTriggerResponse
   */
  async updateTrigger(request: $_model.UpdateTriggerRequest): Promise<$_model.UpdateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTriggerWithOptions(request, runtime);
  }

}
