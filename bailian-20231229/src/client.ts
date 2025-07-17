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
    this._endpoint = this.getEndpoint("bailian", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加类目
   * 
   * @param request - AddCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCategoryResponse
   */
  async addCategoryWithOptions(WorkspaceId: string, request: $_model.AddCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/category/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddCategoryResponse({}));
  }

  /**
   * 添加类目
   * 
   * @param request - AddCategoryRequest
   * @returns AddCategoryResponse
   */
  async addCategory(WorkspaceId: string, request: $_model.AddCategoryRequest): Promise<$_model.AddCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addCategoryWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Imports an unstructured document stored in the temporary storage space to Data Management. You cannot use the API to import structured documents. Use the console instead.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have obtained the lease and uploaded the document to the temporary storage space by using the [ApplyFileUploadLease](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. For more information, see [Upload files by calling API](https://www.alibabacloud.com/help/en/model-studio/developer-reference/upload-files-by-calling-api).
   * >  After you call this operation, the used lease ID expires immediately. Do not use the same lease ID to submit new requests.
   * *   You must call this operation within 12 hours after you call the [ApplyFileUploadLease](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. Otherwise, the lease expires and the request fails.
   * *   After you call this operation, the system parses and imports your document. The process takes some time.
   * *   This interface is not idempotent.
   * 
   * @param tmpReq - AddFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFileResponse
   */
  async addFileWithOptions(WorkspaceId: string, tmpReq: $_model.AddFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddFileResponse> {
    tmpReq.validate();
    let request = new $_model.AddFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.leaseId)) {
      body["LeaseId"] = request.leaseId;
    }

    if (!$dara.isNull(request.originalFileUrl)) {
      body["OriginalFileUrl"] = request.originalFileUrl;
    }

    if (!$dara.isNull(request.parser)) {
      body["Parser"] = request.parser;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFileResponse>(await this.callApi(params, req, runtime), new $_model.AddFileResponse({}));
  }

  /**
   * Imports an unstructured document stored in the temporary storage space to Data Management. You cannot use the API to import structured documents. Use the console instead.
   * 
   * @remarks
   *   Before you call this operation, make sure that you have obtained the lease and uploaded the document to the temporary storage space by using the [ApplyFileUploadLease](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. For more information, see [Upload files by calling API](https://www.alibabacloud.com/help/en/model-studio/developer-reference/upload-files-by-calling-api).
   * >  After you call this operation, the used lease ID expires immediately. Do not use the same lease ID to submit new requests.
   * *   You must call this operation within 12 hours after you call the [ApplyFileUploadLease](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation. Otherwise, the lease expires and the request fails.
   * *   After you call this operation, the system parses and imports your document. The process takes some time.
   * *   This interface is not idempotent.
   * 
   * @param request - AddFileRequest
   * @returns AddFileResponse
   */
  async addFile(WorkspaceId: string, request: $_model.AddFileRequest): Promise<$_model.AddFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 将已授权OSS Bucket中的文件添加到百炼应用数据
   * 
   * @param tmpReq - AddFilesFromAuthorizedOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddFilesFromAuthorizedOssResponse
   */
  async addFilesFromAuthorizedOssWithOptions(WorkspaceId: string, tmpReq: $_model.AddFilesFromAuthorizedOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddFilesFromAuthorizedOssResponse> {
    tmpReq.validate();
    let request = new $_model.AddFilesFromAuthorizedOssShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileDetails)) {
      request.fileDetailsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileDetails, "FileDetails", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.fileDetailsShrink)) {
      body["FileDetails"] = request.fileDetailsShrink;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossRegionId)) {
      body["OssRegionId"] = request.ossRegionId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddFilesFromAuthorizedOss",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/fromoss`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddFilesFromAuthorizedOssResponse>(await this.callApi(params, req, runtime), new $_model.AddFilesFromAuthorizedOssResponse({}));
  }

  /**
   * 将已授权OSS Bucket中的文件添加到百炼应用数据
   * 
   * @param request - AddFilesFromAuthorizedOssRequest
   * @returns AddFilesFromAuthorizedOssResponse
   */
  async addFilesFromAuthorizedOss(WorkspaceId: string, request: $_model.AddFilesFromAuthorizedOssRequest): Promise<$_model.AddFilesFromAuthorizedOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addFilesFromAuthorizedOssWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Applies for a document upload lease to upload a document.
   * 
   * @remarks
   *   This operation returns an HTTP URL that can be used to upload an unstructured document (the lease) and parameters required for the upload. Structured documents are not supported.
   * *   The HTTP URL returned by this operation is valid only for minutes. Upload the document before the URL expires.
   * *   After you apply for a lease and upload a document, the document is stored in a temporary storage space for 12 hours. 
   * *   This interface is not idempotent.
   * 
   * @param request - ApplyFileUploadLeaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLeaseWithOptions(CategoryId: string, WorkspaceId: string, request: $_model.ApplyFileUploadLeaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyFileUploadLeaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.md5)) {
      body["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.sizeInBytes)) {
      body["SizeInBytes"] = request.sizeInBytes;
    }

    if (!$dara.isNull(request.useInternalEndpoint)) {
      body["UseInternalEndpoint"] = request.useInternalEndpoint;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyFileUploadLease",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/category/${$dara.URL.percentEncode(CategoryId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyFileUploadLeaseResponse>(await this.callApi(params, req, runtime), new $_model.ApplyFileUploadLeaseResponse({}));
  }

  /**
   * Applies for a document upload lease to upload a document.
   * 
   * @remarks
   *   This operation returns an HTTP URL that can be used to upload an unstructured document (the lease) and parameters required for the upload. Structured documents are not supported.
   * *   The HTTP URL returned by this operation is valid only for minutes. Upload the document before the URL expires.
   * *   After you apply for a lease and upload a document, the document is stored in a temporary storage space for 12 hours. 
   * *   This interface is not idempotent.
   * 
   * @param request - ApplyFileUploadLeaseRequest
   * @returns ApplyFileUploadLeaseResponse
   */
  async applyFileUploadLease(CategoryId: string, WorkspaceId: string, request: $_model.ApplyFileUploadLeaseRequest): Promise<$_model.ApplyFileUploadLeaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyFileUploadLeaseWithOptions(CategoryId, WorkspaceId, request, headers, runtime);
  }

  /**
   * 创建并发布智能体应用
   * 
   * @param tmpReq - CreateAndPulishAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndPulishAgentResponse
   */
  async createAndPulishAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateAndPulishAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndPulishAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAndPulishAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sampleLibrary)) {
      request.sampleLibraryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sampleLibrary, "sampleLibrary", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sampleLibraryShrink)) {
      body["sampleLibrary"] = request.sampleLibraryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndPulishAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndPulishAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndPulishAgentResponse({}));
  }

  /**
   * 创建并发布智能体应用
   * 
   * @param request - CreateAndPulishAgentRequest
   * @returns CreateAndPulishAgentResponse
   */
  async createAndPulishAgent(workspaceId: string, request: $_model.CreateAndPulishAgentRequest): Promise<$_model.CreateAndPulishAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndPulishAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an unstructured knowledge base and imports one or more parsed documents into the knowledge base. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
   * @remarks
   * 1.  You must first upload documents to [Data Management](https://bailian.console.aliyun.com/#/data-center) and obtain the `FileId`. The documents are the knowledge source of the knowledge base. For more information, see [Import Data](https://www.alibabacloud.com/help/en/model-studio/user-guide/data-import-instructions).
   * 2.  This operation only initializes a knowledge base creation job. You must also call the [SubmitIndexJob](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to complete the job.
   * 3.  This interface is not idempotent.
   * 
   * @param tmpReq - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
   */
  async createIndexWithOptions(WorkspaceId: string, tmpReq: $_model.CreateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndexResponse> {
    tmpReq.validate();
    let request = new $_model.CreateIndexShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.columns)) {
      request.columnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columns, "Columns", "json");
    }

    if (!$dara.isNull(tmpReq.dataSource)) {
      request.dataSourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSource, "DataSource", "json");
    }

    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    if (!$dara.isNull(tmpReq.metaExtractColumns)) {
      request.metaExtractColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metaExtractColumns, "metaExtractColumns", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.chunkSize)) {
      query["ChunkSize"] = request.chunkSize;
    }

    if (!$dara.isNull(request.columnsShrink)) {
      query["Columns"] = request.columnsShrink;
    }

    if (!$dara.isNull(request.dataSourceShrink)) {
      query["DataSource"] = request.dataSourceShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.embeddingModelName)) {
      query["EmbeddingModelName"] = request.embeddingModelName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.overlapSize)) {
      query["OverlapSize"] = request.overlapSize;
    }

    if (!$dara.isNull(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!$dara.isNull(request.rerankModelName)) {
      query["RerankModelName"] = request.rerankModelName;
    }

    if (!$dara.isNull(request.separator)) {
      query["Separator"] = request.separator;
    }

    if (!$dara.isNull(request.sinkInstanceId)) {
      query["SinkInstanceId"] = request.sinkInstanceId;
    }

    if (!$dara.isNull(request.sinkRegion)) {
      query["SinkRegion"] = request.sinkRegion;
    }

    if (!$dara.isNull(request.sinkType)) {
      query["SinkType"] = request.sinkType;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.structureType)) {
      query["StructureType"] = request.structureType;
    }

    if (!$dara.isNull(request.chunkMode)) {
      query["chunkMode"] = request.chunkMode;
    }

    if (!$dara.isNull(request.enableHeaders)) {
      query["enableHeaders"] = request.enableHeaders;
    }

    if (!$dara.isNull(request.metaExtractColumnsShrink)) {
      query["metaExtractColumns"] = request.metaExtractColumnsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndexResponse({}));
  }

  /**
   * Creates an unstructured knowledge base and imports one or more parsed documents into the knowledge base. You cannot create a structured knowledge base by calling an API operation. Use the console instead.
   * 
   * @remarks
   * 1.  You must first upload documents to [Data Management](https://bailian.console.aliyun.com/#/data-center) and obtain the `FileId`. The documents are the knowledge source of the knowledge base. For more information, see [Import Data](https://www.alibabacloud.com/help/en/model-studio/user-guide/data-import-instructions).
   * 2.  This operation only initializes a knowledge base creation job. You must also call the [SubmitIndexJob](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to complete the job.
   * 3.  This interface is not idempotent.
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(WorkspaceId: string, request: $_model.CreateIndexRequest): Promise<$_model.CreateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 创建Memory
   * 
   * @param request - CreateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryResponse
   */
  async createMemoryWithOptions(workspaceId: string, request: $_model.CreateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryResponse({}));
  }

  /**
   * 创建Memory
   * 
   * @param request - CreateMemoryRequest
   * @returns CreateMemoryResponse
   */
  async createMemory(workspaceId: string, request: $_model.CreateMemoryRequest): Promise<$_model.CreateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 创建记忆Node
   * 
   * @param request - CreateMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryNodeResponse
   */
  async createMemoryNodeWithOptions(workspaceId: string, memoryId: string, request: $_model.CreateMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryNodeResponse({}));
  }

  /**
   * 创建记忆Node
   * 
   * @param request - CreateMemoryNodeRequest
   * @returns CreateMemoryNodeResponse
   */
  async createMemoryNode(workspaceId: string, memoryId: string, request: $_model.CreateMemoryNodeRequest): Promise<$_model.CreateMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryNodeWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Creates a prompt template.
   * 
   * @param request - CreatePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePromptTemplateResponse
   */
  async createPromptTemplateWithOptions(workspaceId: string, request: $_model.CreatePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePromptTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreatePromptTemplateResponse({}));
  }

  /**
   * Creates a prompt template.
   * 
   * @param request - CreatePromptTemplateRequest
   * @returns CreatePromptTemplateResponse
   */
  async createPromptTemplate(workspaceId: string, request: $_model.CreatePromptTemplateRequest): Promise<$_model.CreatePromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPromptTemplateWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 删除智能体
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(workspaceId: string, appCode: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * 删除智能体
   * @returns DeleteAgentResponse
   */
  async deleteAgent(workspaceId: string, appCode: string): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentWithOptions(workspaceId, appCode, headers, runtime);
  }

  /**
   * 删除类目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCategoryResponse
   */
  async deleteCategoryWithOptions(CategoryId: string, WorkspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCategoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/category/${$dara.URL.percentEncode(CategoryId)}/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCategoryResponse({}));
  }

  /**
   * 删除类目
   * @returns DeleteCategoryResponse
   */
  async deleteCategory(CategoryId: string, WorkspaceId: string): Promise<$_model.DeleteCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCategoryWithOptions(CategoryId, WorkspaceId, headers, runtime);
  }

  /**
   * 删除文档
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(FileId: string, WorkspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/${$dara.URL.percentEncode(FileId)}/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * 删除文档
   * @returns DeleteFileResponse
   */
  async deleteFile(FileId: string, WorkspaceId: string): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFileWithOptions(FileId, WorkspaceId, headers, runtime);
  }

  /**
   * Deletes a specified knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   If a knowledge base is being called by an application, disassociate the knowledge base before you can delete it. To disassociate the knowledge base, you must use the console. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base).
   * *   After you delete a knowledge base, it cannot be recovered. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
   * 
   * @param request - DeleteIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
   */
  async deleteIndexWithOptions(WorkspaceId: string, request: $_model.DeleteIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndex",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexResponse({}));
  }

  /**
   * Deletes a specified knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   If a knowledge base is being called by an application, disassociate the knowledge base before you can delete it. To disassociate the knowledge base, you must use the console. For more information, see [Create a knowledge base](https://www.alibabacloud.com/help/en/model-studio/user-guide/rag-knowledge-base).
   * *   After you delete a knowledge base, it cannot be recovered. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
   * 
   * @param request - DeleteIndexRequest
   * @returns DeleteIndexResponse
   */
  async deleteIndex(WorkspaceId: string, request: $_model.DeleteIndexRequest): Promise<$_model.DeleteIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Deletes one or more documents from a specified unstructured knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   Only documents with the INSERT_ERROR and FINISH states can be deleted. To query the status of documents in a specified knowledge base, call the [ListIndexDocuments](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-listindexdocuments) operation.
   * *   After you delete a document, it cannot be recovered and the [Retrieve](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-retrieve) operation cannot query information about the document. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
   * 
   * @param tmpReq - DeleteIndexDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexDocumentResponse
   */
  async deleteIndexDocumentWithOptions(WorkspaceId: string, tmpReq: $_model.DeleteIndexDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexDocumentResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteIndexDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndexDocument",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/delete_index_document`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexDocumentResponse({}));
  }

  /**
   * Deletes one or more documents from a specified unstructured knowledge base permanently.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   Only documents with the INSERT_ERROR and FINISH states can be deleted. To query the status of documents in a specified knowledge base, call the [ListIndexDocuments](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-listindexdocuments) operation.
   * *   After you delete a document, it cannot be recovered and the [Retrieve](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-retrieve) operation cannot query information about the document. We recommend that you proceed with caution.
   * *   Imported documents are not deleted from the [Data Management](https://bailian.console.aliyun.com/#/data-center) if you call this operation.
   * *   This interface is idempotent.
   * 
   * @param request - DeleteIndexDocumentRequest
   * @returns DeleteIndexDocumentResponse
   */
  async deleteIndexDocument(WorkspaceId: string, request: $_model.DeleteIndexDocumentRequest): Promise<$_model.DeleteIndexDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexDocumentWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除memory
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(workspaceId: string, memoryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
  }

  /**
   * 删除memory
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(workspaceId: string, memoryId: string): Promise<$_model.DeleteMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryWithOptions(workspaceId, memoryId, headers, runtime);
  }

  /**
   * 删除记忆Node
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryNodeResponse
   */
  async deleteMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryNodeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes/${$dara.URL.percentEncode(memoryNodeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryNodeResponse({}));
  }

  /**
   * 删除记忆Node
   * @returns DeleteMemoryNodeResponse
   */
  async deleteMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string): Promise<$_model.DeleteMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, headers, runtime);
  }

  /**
   * Deletes a prompt template based on the template ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePromptTemplateResponse
   */
  async deletePromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePromptTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates/${$dara.URL.percentEncode(promptTemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeletePromptTemplateResponse({}));
  }

  /**
   * Deletes a prompt template based on the template ID.
   * @returns DeletePromptTemplateResponse
   */
  async deletePromptTemplate(workspaceId: string, promptTemplateId: string): Promise<$_model.DeletePromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePromptTemplateWithOptions(workspaceId, promptTemplateId, headers, runtime);
  }

  /**
   * Queries the details of an unstructured document.
   * 
   * @remarks
   * Before you call this API, make sure that your document is uploaded to the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page of Alibaba Cloud Model Studio.
   * *   You can also call this operation to query unstructured documents that you upload on the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page.
   * *   This operation is idempotent.
   * **Throttling:** Make sure that the interval between the two queries is at least 15 seconds. Otherwise, you may trigger system throttling. If throttling is triggered, try again later.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileResponse
   */
  async describeFileWithOptions(WorkspaceId: string, FileId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/${$dara.URL.percentEncode(FileId)}/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileResponse({}));
  }

  /**
   * Queries the details of an unstructured document.
   * 
   * @remarks
   * Before you call this API, make sure that your document is uploaded to the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page of Alibaba Cloud Model Studio.
   * *   You can also call this operation to query unstructured documents that you upload on the [Data Management](https://bailian.console.aliyun.com/knowledge-base#/data-center) page.
   * *   This operation is idempotent.
   * **Throttling:** Make sure that the interval between the two queries is at least 15 seconds. Otherwise, you may trigger system throttling. If throttling is triggered, try again later.
   * @returns DescribeFileResponse
   */
  async describeFile(WorkspaceId: string, FileId: string): Promise<$_model.DescribeFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeFileWithOptions(WorkspaceId, FileId, headers, runtime);
  }

  /**
   * Queries the current status of a specified knowledge base creation or add document job.
   * 
   * @remarks
   * 1.  A knowledge base job is running. You can call the [SubmitIndexJob](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to create a creation job or the [SubmitIndexAddDocumentsJob](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-submitindexadddocumentsjob) operation to create a add document job. Then, obtain the `JobId` returned by the operations.
   * 2.  We recommend that you call this operation at intervals of more than 5 seconds.
   * 3.  This interface is idempotent.
   * 
   * @param request - GetIndexJobStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexJobStatusResponse
   */
  async getIndexJobStatusWithOptions(WorkspaceId: string, request: $_model.GetIndexJobStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexJobStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexJobStatus",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/job/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexJobStatusResponse({}));
  }

  /**
   * Queries the current status of a specified knowledge base creation or add document job.
   * 
   * @remarks
   * 1.  A knowledge base job is running. You can call the [SubmitIndexJob](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-submitindexjob) operation to create a creation job or the [SubmitIndexAddDocumentsJob](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-submitindexadddocumentsjob) operation to create a add document job. Then, obtain the `JobId` returned by the operations.
   * 2.  We recommend that you call this operation at intervals of more than 5 seconds.
   * 3.  This interface is idempotent.
   * 
   * @param request - GetIndexJobStatusRequest
   * @returns GetIndexJobStatusResponse
   */
  async getIndexJobStatus(WorkspaceId: string, request: $_model.GetIndexJobStatusRequest): Promise<$_model.GetIndexJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexJobStatusWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取memory
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryResponse
   */
  async getMemoryWithOptions(workspaceId: string, memoryId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryResponse({}));
  }

  /**
   * 获取memory
   * @returns GetMemoryResponse
   */
  async getMemory(workspaceId: string, memoryId: string): Promise<$_model.GetMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryWithOptions(workspaceId, memoryId, headers, runtime);
  }

  /**
   * 获取记忆Node
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryNodeResponse
   */
  async getMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryNodeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes/${$dara.URL.percentEncode(memoryNodeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryNodeResponse({}));
  }

  /**
   * 获取记忆Node
   * @returns GetMemoryNodeResponse
   */
  async getMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string): Promise<$_model.GetMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, headers, runtime);
  }

  /**
   * Obtains a prompt template based on the template ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptTemplateResponse
   */
  async getPromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPromptTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates/${$dara.URL.percentEncode(promptTemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetPromptTemplateResponse({}));
  }

  /**
   * Obtains a prompt template based on the template ID.
   * @returns GetPromptTemplateResponse
   */
  async getPromptTemplate(workspaceId: string, promptTemplateId: string): Promise<$_model.GetPromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPromptTemplateWithOptions(workspaceId, promptTemplateId, headers, runtime);
  }

  /**
   * 获取发布态智能体应用
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublishedAgentResponse
   */
  async getPublishedAgentWithOptions(workspaceId: string, appCode: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPublishedAgentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPublishedAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPublishedAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetPublishedAgentResponse({}));
  }

  /**
   * 获取发布态智能体应用
   * @returns GetPublishedAgentResponse
   */
  async getPublishedAgent(workspaceId: string, appCode: string): Promise<$_model.GetPublishedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPublishedAgentWithOptions(workspaceId, appCode, headers, runtime);
  }

  /**
   * ListCategory
   * 
   * @param request - ListCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoryResponse
   */
  async listCategoryWithOptions(WorkspaceId: string, request: $_model.ListCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.categoryType)) {
      body["CategoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      body["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/categories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoryResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoryResponse({}));
  }

  /**
   * ListCategory
   * 
   * @param request - ListCategoryRequest
   * @returns ListCategoryResponse
   */
  async listCategory(WorkspaceId: string, request: $_model.ListCategoryRequest): Promise<$_model.ListCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCategoryWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * For unstructured knowledge base, obtains the details of all chunks of a specified document; for structured knowledge base, obtains the details of all chunks.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
   * 
   * @param request - ListChunksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChunksResponse
   */
  async listChunksWithOptions(WorkspaceId: string, request: $_model.ListChunksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChunksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fields)) {
      body["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.filed)) {
      body["Filed"] = request.filed;
    }

    if (!$dara.isNull(request.indexId)) {
      body["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChunks",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_chunks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChunksResponse>(await this.callApi(params, req, runtime), new $_model.ListChunksResponse({}));
  }

  /**
   * For unstructured knowledge base, obtains the details of all chunks of a specified document; for structured knowledge base, obtains the details of all chunks.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
   * 
   * @param request - ListChunksRequest
   * @returns ListChunksResponse
   */
  async listChunks(WorkspaceId: string, request: $_model.ListChunksRequest): Promise<$_model.ListChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChunksWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取文档列表
   * 
   * @param request - ListFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileResponse
   */
  async listFileWithOptions(WorkspaceId: string, request: $_model.ListFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFile",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/files`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileResponse>(await this.callApi(params, req, runtime), new $_model.ListFileResponse({}));
  }

  /**
   * 获取文档列表
   * 
   * @param request - ListFileRequest
   * @returns ListFileResponse
   */
  async listFile(WorkspaceId: string, request: $_model.ListFileRequest): Promise<$_model.ListFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Queries the details of one or more documents in a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
   * 
   * @param request - ListIndexDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexDocumentsResponse
   */
  async listIndexDocumentsWithOptions(WorkspaceId: string, request: $_model.ListIndexDocumentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexDocumentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentName)) {
      query["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.documentStatus)) {
      query["DocumentStatus"] = request.documentStatus;
    }

    if (!$dara.isNull(request.enableNameLike)) {
      query["EnableNameLike"] = request.enableNameLike;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexDocuments",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_index_documents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexDocumentsResponse({}));
  }

  /**
   * Queries the details of one or more documents in a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   This interface is idempotent.
   * 
   * @param request - ListIndexDocumentsRequest
   * @returns ListIndexDocumentsResponse
   */
  async listIndexDocuments(WorkspaceId: string, request: $_model.ListIndexDocumentsRequest): Promise<$_model.ListIndexDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexDocumentsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Lists knowledge bases in a specified workspace.
   * 
   * @remarks
   * This interface is idempotent.
   * 
   * @param request - ListIndicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
   */
  async listIndicesWithOptions(WorkspaceId: string, request: $_model.ListIndicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexName)) {
      query["IndexName"] = request.indexName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndices",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/list_indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndicesResponse({}));
  }

  /**
   * Lists knowledge bases in a specified workspace.
   * 
   * @remarks
   * This interface is idempotent.
   * 
   * @param request - ListIndicesRequest
   * @returns ListIndicesResponse
   */
  async listIndices(WorkspaceId: string, request: $_model.ListIndicesRequest): Promise<$_model.ListIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取memory
   * 
   * @param request - ListMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoriesResponse
   */
  async listMemoriesWithOptions(workspaceId: string, request: $_model.ListMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemories",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoriesResponse({}));
  }

  /**
   * 获取memory
   * 
   * @param request - ListMemoriesRequest
   * @returns ListMemoriesResponse
   */
  async listMemories(workspaceId: string, request: $_model.ListMemoriesRequest): Promise<$_model.ListMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoriesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取记忆Node列表
   * 
   * @param request - ListMemoryNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryNodesResponse
   */
  async listMemoryNodesWithOptions(workspaceId: string, memoryId: string, request: $_model.ListMemoryNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMemoryNodes",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMemoryNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryNodesResponse({}));
  }

  /**
   * 获取记忆Node列表
   * 
   * @param request - ListMemoryNodesRequest
   * @returns ListMemoryNodesResponse
   */
  async listMemoryNodes(workspaceId: string, memoryId: string, request: $_model.ListMemoryNodesRequest): Promise<$_model.ListMemoryNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryNodesWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * Obtains a list of prompt templates.
   * 
   * @param request - ListPromptTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromptTemplatesResponse
   */
  async listPromptTemplatesWithOptions(workspaceId: string, request: $_model.ListPromptTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromptTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPromptTemplates",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromptTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListPromptTemplatesResponse({}));
  }

  /**
   * Obtains a list of prompt templates.
   * 
   * @param request - ListPromptTemplatesRequest
   * @returns ListPromptTemplatesResponse
   */
  async listPromptTemplates(workspaceId: string, request: $_model.ListPromptTemplatesRequest): Promise<$_model.ListPromptTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPromptTemplatesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 查询已发布的智能体应用列表
   * 
   * @param request - ListPublishedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedAgentResponse
   */
  async listPublishedAgentWithOptions(workspaceId: string, request: $_model.ListPublishedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublishedAgentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNo)) {
      query["pageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublishedAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublishedAgentResponse>(await this.callApi(params, req, runtime), new $_model.ListPublishedAgentResponse({}));
  }

  /**
   * 查询已发布的智能体应用列表
   * 
   * @param request - ListPublishedAgentRequest
   * @returns ListPublishedAgentResponse
   */
  async listPublishedAgent(workspaceId: string, request: $_model.ListPublishedAgentRequest): Promise<$_model.ListPublishedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries information from a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   The response time may be long because this operation involves complex retrieval and matching. We recommend that you set appropriate timeout and retry policy for requests.
   * *   This interface is idempotent.
   * 
   * @param tmpReq - RetrieveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveResponse
   */
  async retrieveWithOptions(WorkspaceId: string, tmpReq: $_model.RetrieveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveResponse> {
    tmpReq.validate();
    let request = new $_model.RetrieveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.images)) {
      request.imagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.images, "Images", "simple");
    }

    if (!$dara.isNull(tmpReq.queryHistory)) {
      request.queryHistoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryHistory, "QueryHistory", "json");
    }

    if (!$dara.isNull(tmpReq.rerank)) {
      request.rerankShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rerank, "Rerank", "json");
    }

    if (!$dara.isNull(tmpReq.rewrite)) {
      request.rewriteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rewrite, "Rewrite", "json");
    }

    if (!$dara.isNull(tmpReq.searchFilters)) {
      request.searchFiltersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchFilters, "SearchFilters", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.denseSimilarityTopK)) {
      query["DenseSimilarityTopK"] = request.denseSimilarityTopK;
    }

    if (!$dara.isNull(request.enableReranking)) {
      query["EnableReranking"] = request.enableReranking;
    }

    if (!$dara.isNull(request.enableRewrite)) {
      query["EnableRewrite"] = request.enableRewrite;
    }

    if (!$dara.isNull(request.imagesShrink)) {
      query["Images"] = request.imagesShrink;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.queryHistoryShrink)) {
      query["QueryHistory"] = request.queryHistoryShrink;
    }

    if (!$dara.isNull(request.rerankShrink)) {
      query["Rerank"] = request.rerankShrink;
    }

    if (!$dara.isNull(request.rerankMinScore)) {
      query["RerankMinScore"] = request.rerankMinScore;
    }

    if (!$dara.isNull(request.rerankTopN)) {
      query["RerankTopN"] = request.rerankTopN;
    }

    if (!$dara.isNull(request.rewriteShrink)) {
      query["Rewrite"] = request.rewriteShrink;
    }

    if (!$dara.isNull(request.saveRetrieverHistory)) {
      query["SaveRetrieverHistory"] = request.saveRetrieverHistory;
    }

    if (!$dara.isNull(request.searchFiltersShrink)) {
      query["SearchFilters"] = request.searchFiltersShrink;
    }

    if (!$dara.isNull(request.sparseSimilarityTopK)) {
      query["SparseSimilarityTopK"] = request.sparseSimilarityTopK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Retrieve",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/retrieve`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveResponse({}));
  }

  /**
   * Queries information from a specified knowledge base.
   * 
   * @remarks
   *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   The response time may be long because this operation involves complex retrieval and matching. We recommend that you set appropriate timeout and retry policy for requests.
   * *   This interface is idempotent.
   * 
   * @param request - RetrieveRequest
   * @returns RetrieveResponse
   */
  async retrieve(WorkspaceId: string, request: $_model.RetrieveRequest): Promise<$_model.RetrieveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retrieveWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Adds parsed documents to an unstructured knowledge base.
   * 
   * @remarks
   *   You must first upload documents to [Data Management](https://bailian.console.aliyun.com/#/data-center) and obtain the `FileId`. The documents are the knowledge source of the knowledge base. For more information, see [Import Data](https://www.alibabacloud.com/help/en/model-studio/user-guide/data-import-instructions).
   * *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   After you call this operation, you can call the [GetIndexJobStatus](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation to query the status of the job. More than 20 calls to the GetIndexJobStatus operation per minute may trigger throttling.
   * *   Execution takes a period of time after this operation is called. Do not make new request before the request is returned. This interface is not idempotent.
   * 
   * @param tmpReq - SubmitIndexAddDocumentsJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJobWithOptions(WorkspaceId: string, tmpReq: $_model.SubmitIndexAddDocumentsJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIndexAddDocumentsJobResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitIndexAddDocumentsJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryIds)) {
      request.categoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryIds, "CategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.documentIds)) {
      request.documentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentIds, "DocumentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryIdsShrink)) {
      query["CategoryIds"] = request.categoryIdsShrink;
    }

    if (!$dara.isNull(request.chunkMode)) {
      query["ChunkMode"] = request.chunkMode;
    }

    if (!$dara.isNull(request.chunkSize)) {
      query["ChunkSize"] = request.chunkSize;
    }

    if (!$dara.isNull(request.documentIdsShrink)) {
      query["DocumentIds"] = request.documentIdsShrink;
    }

    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!$dara.isNull(request.overlapSize)) {
      query["OverlapSize"] = request.overlapSize;
    }

    if (!$dara.isNull(request.separator)) {
      query["Separator"] = request.separator;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIndexAddDocumentsJob",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/add_documents_to_index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIndexAddDocumentsJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIndexAddDocumentsJobResponse({}));
  }

  /**
   * Adds parsed documents to an unstructured knowledge base.
   * 
   * @remarks
   *   You must first upload documents to [Data Management](https://bailian.console.aliyun.com/#/data-center) and obtain the `FileId`. The documents are the knowledge source of the knowledge base. For more information, see [Import Data](https://www.alibabacloud.com/help/en/model-studio/user-guide/data-import-instructions).
   * *   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
   * *   After you call this operation, you can call the [GetIndexJobStatus](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation to query the status of the job. More than 20 calls to the GetIndexJobStatus operation per minute may trigger throttling.
   * *   Execution takes a period of time after this operation is called. Do not make new request before the request is returned. This interface is not idempotent.
   * 
   * @param request - SubmitIndexAddDocumentsJobRequest
   * @returns SubmitIndexAddDocumentsJobResponse
   */
  async submitIndexAddDocumentsJob(WorkspaceId: string, request: $_model.SubmitIndexAddDocumentsJobRequest): Promise<$_model.SubmitIndexAddDocumentsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexAddDocumentsJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Submits a specified CreateIndex job to complete knowledge base creation.
   * 
   * @remarks
   * 1.  Before you call this operation, you must call the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation and obtain the `IndexId`.
   * 2.  Execution takes a period of time after this operation is called. Do not make new request before the request is returned.
   * 3.  If you want to query the execution status of the job after you call this operation, call the [GetIndexJobStatus](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation.
   * 4.  This interface is not idempotent.
   * 
   * @param request - SubmitIndexJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIndexJobResponse
   */
  async submitIndexJobWithOptions(WorkspaceId: string, request: $_model.SubmitIndexJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIndexJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIndexJob",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/index/submit_index_job`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIndexJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIndexJobResponse({}));
  }

  /**
   * Submits a specified CreateIndex job to complete knowledge base creation.
   * 
   * @remarks
   * 1.  Before you call this operation, you must call the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation and obtain the `IndexId`.
   * 2.  Execution takes a period of time after this operation is called. Do not make new request before the request is returned.
   * 3.  If you want to query the execution status of the job after you call this operation, call the [GetIndexJobStatus](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-getindexjobstatus) operation.
   * 4.  This interface is not idempotent.
   * 
   * @param request - SubmitIndexJobRequest
   * @returns SubmitIndexJobResponse
   */
  async submitIndexJob(WorkspaceId: string, request: $_model.SubmitIndexJobRequest): Promise<$_model.SubmitIndexJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitIndexJobWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 更新并发布智能体应用
   * 
   * @param tmpReq - UpdateAndPublishAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndPublishAgentResponse
   */
  async updateAndPublishAgentWithOptions(workspaceId: string, appCode: string, tmpReq: $_model.UpdateAndPublishAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAndPublishAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAndPublishAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sampleLibrary)) {
      request.sampleLibraryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sampleLibrary, "sampleLibrary", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sampleLibraryShrink)) {
      body["sampleLibrary"] = request.sampleLibraryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAndPublishAgent",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAndPublishAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAndPublishAgentResponse({}));
  }

  /**
   * 更新并发布智能体应用
   * 
   * @param request - UpdateAndPublishAgentRequest
   * @returns UpdateAndPublishAgentResponse
   */
  async updateAndPublishAgent(workspaceId: string, appCode: string, request: $_model.UpdateAndPublishAgentRequest): Promise<$_model.UpdateAndPublishAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndPublishAgentWithOptions(workspaceId, appCode, request, headers, runtime);
  }

  /**
   * 选择更新并发布智能体应用
   * 
   * @param tmpReq - UpdateAndPublishAgentSelectiveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndPublishAgentSelectiveResponse
   */
  async updateAndPublishAgentSelectiveWithOptions(workspaceId: string, appCode: string, tmpReq: $_model.UpdateAndPublishAgentSelectiveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAndPublishAgentSelectiveResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAndPublishAgentSelectiveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfig)) {
      request.applicationConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfig, "applicationConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sampleLibrary)) {
      request.sampleLibraryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sampleLibrary, "sampleLibrary", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigShrink)) {
      body["applicationConfig"] = request.applicationConfigShrink;
    }

    if (!$dara.isNull(request.instructions)) {
      body["instructions"] = request.instructions;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sampleLibraryShrink)) {
      body["sampleLibrary"] = request.sampleLibraryShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAndPublishAgentSelective",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/application/agents/${$dara.URL.percentEncode(appCode)}/updateAndPublishAgentSelective`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAndPublishAgentSelectiveResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAndPublishAgentSelectiveResponse({}));
  }

  /**
   * 选择更新并发布智能体应用
   * 
   * @param request - UpdateAndPublishAgentSelectiveRequest
   * @returns UpdateAndPublishAgentSelectiveResponse
   */
  async updateAndPublishAgentSelective(workspaceId: string, appCode: string, request: $_model.UpdateAndPublishAgentSelectiveRequest): Promise<$_model.UpdateAndPublishAgentSelectiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndPublishAgentSelectiveWithOptions(workspaceId, appCode, request, headers, runtime);
  }

  /**
   * 更新文档Tag
   * 
   * @param tmpReq - UpdateFileTagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileTagResponse
   */
  async updateFileTagWithOptions(WorkspaceId: string, FileId: string, tmpReq: $_model.UpdateFileTagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileTagResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFileTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFileTag",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/datacenter/file/${$dara.URL.percentEncode(FileId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileTagResponse({}));
  }

  /**
   * 更新文档Tag
   * 
   * @param request - UpdateFileTagRequest
   * @returns UpdateFileTagResponse
   */
  async updateFileTag(WorkspaceId: string, FileId: string, request: $_model.UpdateFileTagRequest): Promise<$_model.UpdateFileTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFileTagWithOptions(WorkspaceId, FileId, request, headers, runtime);
  }

  /**
   * 更新memory
   * 
   * @param request - UpdateMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryResponse
   */
  async updateMemoryWithOptions(workspaceId: string, memoryId: string, request: $_model.UpdateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemory",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
  }

  /**
   * 更新memory
   * 
   * @param request - UpdateMemoryRequest
   * @returns UpdateMemoryResponse
   */
  async updateMemory(workspaceId: string, memoryId: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryWithOptions(workspaceId, memoryId, request, headers, runtime);
  }

  /**
   * 更新记忆Node
   * 
   * @param request - UpdateMemoryNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryNodeResponse
   */
  async updateMemoryNodeWithOptions(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.UpdateMemoryNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMemoryNode",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/memories/${$dara.URL.percentEncode(memoryId)}/memoryNodes/${$dara.URL.percentEncode(memoryNodeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemoryNodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryNodeResponse({}));
  }

  /**
   * 更新记忆Node
   * 
   * @param request - UpdateMemoryNodeRequest
   * @returns UpdateMemoryNodeResponse
   */
  async updateMemoryNode(workspaceId: string, memoryId: string, memoryNodeId: string, request: $_model.UpdateMemoryNodeRequest): Promise<$_model.UpdateMemoryNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryNodeWithOptions(workspaceId, memoryId, memoryNodeId, request, headers, runtime);
  }

  /**
   * Updates a prompt template based on the template ID.
   * 
   * @param request - UpdatePromptTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePromptTemplateResponse
   */
  async updatePromptTemplateWithOptions(workspaceId: string, promptTemplateId: string, request: $_model.UpdatePromptTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePromptTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePromptTemplate",
      version: "2023-12-29",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/promptTemplates/${$dara.URL.percentEncode(promptTemplateId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePromptTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePromptTemplateResponse({}));
  }

  /**
   * Updates a prompt template based on the template ID.
   * 
   * @param request - UpdatePromptTemplateRequest
   * @returns UpdatePromptTemplateResponse
   */
  async updatePromptTemplate(workspaceId: string, promptTemplateId: string, request: $_model.UpdatePromptTemplateRequest): Promise<$_model.UpdatePromptTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePromptTemplateWithOptions(workspaceId, promptTemplateId, request, headers, runtime);
  }

}
