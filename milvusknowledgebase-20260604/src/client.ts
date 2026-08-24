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
    this._endpoint = this.getEndpoint("milvusknowledgebase", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Registers files that are uploaded to the knowledge base storage as knowledge base documents and **automatically triggers parsing** (chunking and embedding). Two import types are supported:
   * - `LOCAL_UPLOAD`: Works with the `GetKnowledgeBasePreSignedUrl` direct upload flow. This operation only registers the file and does not verify whether the file is actually uploaded. Therefore, you must complete the PUT upload before calling this operation.
   * - `OSS_IMPORT`: Imports files from an external OSS bucket. The operation creates an asynchronous import task and returns a `knowledge_import_task_id`. The system downloads and registers the files in the background.
   * A maximum of 100 files can be registered in a single request.
   * 
   * @param request - AddDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDocumentsResponse
   */
  async addDocumentsWithOptions(datasetId: string, request: $_model.AddDocumentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddDocumentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dedup)) {
      body["Dedup"] = request.dedup;
    }

    if (!$dara.isNull(request.documents)) {
      body["Documents"] = request.documents;
    }

    if (!$dara.isNull(request.importType)) {
      body["ImportType"] = request.importType;
    }

    if (!$dara.isNull(request.knowledgeBaseId)) {
      body["KnowledgeBaseId"] = request.knowledgeBaseId;
    }

    if (!$dara.isNull(request.metaFields)) {
      body["MetaFields"] = request.metaFields;
    }

    if (!$dara.isNull(request.strategyId)) {
      body["StrategyId"] = request.strategyId;
    }

    if (!$dara.isNull(request.dingTalkConfiguration)) {
      body["dingTalkConfiguration"] = request.dingTalkConfiguration;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDocuments",
      version: "2026-06-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(datasetId)}/documents/addDocuments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.AddDocumentsResponse({}));
  }

  /**
   * Registers files that are uploaded to the knowledge base storage as knowledge base documents and **automatically triggers parsing** (chunking and embedding). Two import types are supported:
   * - `LOCAL_UPLOAD`: Works with the `GetKnowledgeBasePreSignedUrl` direct upload flow. This operation only registers the file and does not verify whether the file is actually uploaded. Therefore, you must complete the PUT upload before calling this operation.
   * - `OSS_IMPORT`: Imports files from an external OSS bucket. The operation creates an asynchronous import task and returns a `knowledge_import_task_id`. The system downloads and registers the files in the background.
   * A maximum of 100 files can be registered in a single request.
   * 
   * @param request - AddDocumentsRequest
   * @returns AddDocumentsResponse
   */
  async addDocuments(datasetId: string, request: $_model.AddDocumentsRequest): Promise<$_model.AddDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDocumentsWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Generates an **OSS pre-signed PUT URL** pointing to the knowledge base dedicated storage for each file in `Documents`. The caller uses the URL to upload file content directly to Object Storage Service (OSS), and then calls `AddDocuments` to register the files. A maximum of 100 files can be processed per request.
   * 
   * @param request - GetKnowledgeBasePreSignedUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeBasePreSignedUrlResponse
   */
  async getKnowledgeBasePreSignedUrlWithOptions(datasetId: string, request: $_model.GetKnowledgeBasePreSignedUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKnowledgeBasePreSignedUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documents)) {
      body["Documents"] = request.documents;
    }

    if (!$dara.isNull(request.expiresIn)) {
      body["ExpiresIn"] = request.expiresIn;
    }

    if (!$dara.isNull(request.knowledgeBaseId)) {
      body["KnowledgeBaseId"] = request.knowledgeBaseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKnowledgeBasePreSignedUrl",
      version: "2026-06-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(datasetId)}/getKnowledgeBasePreSignedUrl`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKnowledgeBasePreSignedUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetKnowledgeBasePreSignedUrlResponse({}));
  }

  /**
   * Generates an **OSS pre-signed PUT URL** pointing to the knowledge base dedicated storage for each file in `Documents`. The caller uses the URL to upload file content directly to Object Storage Service (OSS), and then calls `AddDocuments` to register the files. A maximum of 100 files can be processed per request.
   * 
   * @param request - GetKnowledgeBasePreSignedUrlRequest
   * @returns GetKnowledgeBasePreSignedUrlResponse
   */
  async getKnowledgeBasePreSignedUrl(datasetId: string, request: $_model.GetKnowledgeBasePreSignedUrlRequest): Promise<$_model.GetKnowledgeBasePreSignedUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeBasePreSignedUrlWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Retrieves documents from a knowledge base.
   * 
   * @remarks
   * Retrieves documents from a specified knowledge base by question or image. Use DRAFT, LATEST_PUBLISHED, or vN display names for the version. Pass tag filter conditions using the actual backend operators.
   * 
   * @param request - SearchKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchKnowledgeBaseResponse
   */
  async searchKnowledgeBaseWithOptions(knowledgeBaseId: string, request: $_model.SearchKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchKnowledgeBaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentIds)) {
      body["documentIds"] = request.documentIds;
    }

    if (!$dara.isNull(request.enableKnowledgeGraph)) {
      body["enableKnowledgeGraph"] = request.enableKnowledgeGraph;
    }

    if (!$dara.isNull(request.image)) {
      body["image"] = request.image;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.rerankModelId)) {
      body["rerankModelId"] = request.rerankModelId;
    }

    if (!$dara.isNull(request.rerankModelName)) {
      body["rerankModelName"] = request.rerankModelName;
    }

    if (!$dara.isNull(request.retrievalConfig)) {
      body["retrievalConfig"] = request.retrievalConfig;
    }

    if (!$dara.isNull(request.tagFilter)) {
      body["tagFilter"] = request.tagFilter;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchKnowledgeBase",
      version: "2026-06-04",
      protocol: "HTTPS",
      pathname: `/api/v1/knowledge-bases/${$dara.URL.percentEncode(knowledgeBaseId)}/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.SearchKnowledgeBaseResponse({}));
  }

  /**
   * Retrieves documents from a knowledge base.
   * 
   * @remarks
   * Retrieves documents from a specified knowledge base by question or image. Use DRAFT, LATEST_PUBLISHED, or vN display names for the version. Pass tag filter conditions using the actual backend operators.
   * 
   * @param request - SearchKnowledgeBaseRequest
   * @returns SearchKnowledgeBaseResponse
   */
  async searchKnowledgeBase(knowledgeBaseId: string, request: $_model.SearchKnowledgeBaseRequest): Promise<$_model.SearchKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchKnowledgeBaseWithOptions(knowledgeBaseId, request, headers, runtime);
  }

}
