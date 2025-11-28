// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "gpdb.aliyuncs.com",
      'cn-hangzhou': "gpdb.aliyuncs.com",
      'cn-shanghai': "gpdb.aliyuncs.com",
      'cn-shenzhen': "gpdb.aliyuncs.com",
      'cn-hongkong': "gpdb.aliyuncs.com",
      'ap-southeast-1': "gpdb.aliyuncs.com",
      'us-west-1': "gpdb.aliyuncs.com",
      'us-east-1': "gpdb.aliyuncs.com",
      'cn-hangzhou-finance': "gpdb.aliyuncs.com",
      'cn-shanghai-finance-1': "gpdb.aliyuncs.com",
      'cn-shenzhen-finance-1': "gpdb.aliyuncs.com",
      'cn-qingdao': "gpdb.aliyuncs.com",
      'cn-north-2-gov-1': "gpdb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("gpdb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}, runtime: $dara.RuntimeOptions): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      key: runtime.key || this._key,
      cert: runtime.cert || this._cert,
      ca: runtime.ca || this._ca,
      readTimeout: runtime.readTimeout || this._readTimeout,
      connectTimeout: runtime.connectTimeout || this._connectTimeout,
      httpProxy: runtime.httpProxy || this._httpProxy,
      httpsProxy: runtime.httpsProxy || this._httpsProxy,
      noProxy: runtime.noProxy || this._noProxy,
      socks5Proxy: runtime.socks5Proxy || this._socks5Proxy,
      socks5NetWork: runtime.socks5NetWork || this._socks5NetWork,
      maxIdleConns: runtime.maxIdleConns || this._maxIdleConns,
      retryOptions: this._retryOptions,
      ignoreSSL: runtime.ignoreSSL || false,
      tlsMinVersion: this._tlsMinVersion,
    }

    let _retriesAttempted = 0;
    let _lastRequest = null, _lastResponse = null;
    let _context = new $dara.RetryPolicyContext({
      retriesAttempted: _retriesAttempted,
    });
    while ($dara.shouldRetry(_runtime['retryOptions'], _context)) {
      if (_retriesAttempted > 0) {
        let _backoffTime = $dara.getBackoffDelay(_runtime['retryOptions'], _context);
        if (_backoffTime > 0) {
          await $dara.sleep(_backoffTime);
        }
      }

      _retriesAttempted = _retriesAttempted + 1;
      try {
        let request_ = new $dara.Request();
        let boundary = $dara.Form.getBoundary();
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: String(form["host"]),
          date: OpenApiUtil.getDateUTCString(),
          'user-agent': OpenApiUtil.getUserAgent(""),
        };
        request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
        request_.body = $dara.Form.toFileForm(form, boundary);
        _lastRequest = request_;
        let response_ = await $dara.doAction(request_, _runtime);
        _lastResponse = response_;

        let respMap : {[key: string]: any} = null;
        let bodyStr = await $dara.Stream.readAsString(response_.body);
        if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
          respMap = $dara.XML.parseXml(bodyStr, null);
          let err = respMap["Error"];
          throw new $OpenApi.ClientError({
            code: String(err["Code"]),
            message: String(err["Message"]),
            data: {
              httpCode: response_.statusCode,
              requestId: String(err["RequestId"]),
              hostId: String(err["HostId"]),
            },
          });
        }

        respMap = $dara.XML.parseXml(bodyStr, null);
        return {
          ...respMap,
        };
      } catch (ex) {
        _context = new $dara.RetryPolicyContext({
          retriesAttempted : _retriesAttempted,
          httpRequest : _lastRequest,
          httpResponse : _lastResponse,
          exception : ex,
        });
        continue;
      }
    }

    throw $dara.newUnretryableError(_context);
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
   * Adds AI nodes to the cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This operation is used to add an AINode node.
   * ## [](#qps-)QPS limit
   * You can call this operation up to 1,000 times per second per account. Exceeding the limit will trigger API rate limiting, which may impact your business. Please call the API responsibly.
   * 
   * @param request - AddAINodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAINodeResponse
   */
  async addAINodeWithOptions(request: $_model.AddAINodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAINodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AINodePoolId)) {
      query["AINodePoolId"] = request.AINodePoolId;
    }

    if (!$dara.isNull(request.AINodeSpecInfos)) {
      query["AINodeSpecInfos"] = request.AINodeSpecInfos;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAINode",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAINodeResponse>(await this.callApi(params, req, runtime), new $_model.AddAINodeResponse({}));
  }

  /**
   * Adds AI nodes to the cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This operation is used to add an AINode node.
   * ## [](#qps-)QPS limit
   * You can call this operation up to 1,000 times per second per account. Exceeding the limit will trigger API rate limiting, which may impact your business. Please call the API responsibly.
   * 
   * @param request - AddAINodeRequest
   * @returns AddAINodeResponse
   */
  async addAINode(request: $_model.AddAINodeRequest): Promise<$_model.AddAINodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAINodeWithOptions(request, runtime);
  }

  /**
   * Allocates a public endpoint for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to apply for a public endpoint for an AnalyticDB for PostgreSQL instance. Both the primary and instance endpoints of an AnalyticDB for PostgreSQL instance can be public endpoints. For more information, see [Endpoints of an instance and its primary coordinator node](https://help.aliyun.com/document_detail/204879.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnectionWithOptions(request: $_model.AllocateInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
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
      action: "AllocateInstancePublicConnection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocateInstancePublicConnectionResponse({}));
  }

  /**
   * Allocates a public endpoint for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to apply for a public endpoint for an AnalyticDB for PostgreSQL instance. Both the primary and instance endpoints of an AnalyticDB for PostgreSQL instance can be public endpoints. For more information, see [Endpoints of an instance and its primary coordinator node](https://help.aliyun.com/document_detail/204879.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AllocateInstancePublicConnectionRequest
   * @returns AllocateInstancePublicConnectionResponse
   */
  async allocateInstancePublicConnection(request: $_model.AllocateInstancePublicConnectionRequest): Promise<$_model.AllocateInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Binds a resource group to a database role.
   * 
   * @param tmpReq - BindDBResourceGroupWithRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourceGroupWithRoleResponse
   */
  async bindDBResourceGroupWithRoleWithOptions(tmpReq: $_model.BindDBResourceGroupWithRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindDBResourceGroupWithRoleResponse> {
    tmpReq.validate();
    let request = new $_model.BindDBResourceGroupWithRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleList)) {
      request.roleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleList, "RoleList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.roleListShrink)) {
      query["RoleList"] = request.roleListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindDBResourceGroupWithRole",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindDBResourceGroupWithRoleResponse>(await this.callApi(params, req, runtime), new $_model.BindDBResourceGroupWithRoleResponse({}));
  }

  /**
   * Binds a resource group to a database role.
   * 
   * @param request - BindDBResourceGroupWithRoleRequest
   * @returns BindDBResourceGroupWithRoleResponse
   */
  async bindDBResourceGroupWithRole(request: $_model.BindDBResourceGroupWithRoleRequest): Promise<$_model.BindDBResourceGroupWithRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDBResourceGroupWithRoleWithOptions(request, runtime);
  }

  /**
   * Cancels an index creation job.
   * 
   * @param request - CancelCreateIndexJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCreateIndexJobResponse
   */
  async cancelCreateIndexJobWithOptions(request: $_model.CancelCreateIndexJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCreateIndexJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCreateIndexJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCreateIndexJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelCreateIndexJobResponse({}));
  }

  /**
   * Cancels an index creation job.
   * 
   * @param request - CancelCreateIndexJobRequest
   * @returns CancelCreateIndexJobResponse
   */
  async cancelCreateIndexJob(request: $_model.CancelCreateIndexJobRequest): Promise<$_model.CancelCreateIndexJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCreateIndexJobWithOptions(request, runtime);
  }

  /**
   * Cancels an asynchronous document upload job based on the job ID.
   * 
   * @remarks
   * This operation is related to the UploadDocumentAsync operation. You can call this operation to cancel a document upload job.
   * >  If the canceling operation is complete, failed, or is canceled, you cannot call the operation again. The canceling operation only interrupts the document upload job. To remove the uploaded data, you must manually remove it or call the DeleteCollectionData operation. You can also call the document upload operation to overwrite the data by using the same FileName parameter.
   * 
   * @param request - CancelUploadDocumentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelUploadDocumentJobResponse
   */
  async cancelUploadDocumentJobWithOptions(request: $_model.CancelUploadDocumentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelUploadDocumentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelUploadDocumentJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelUploadDocumentJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelUploadDocumentJobResponse({}));
  }

  /**
   * Cancels an asynchronous document upload job based on the job ID.
   * 
   * @remarks
   * This operation is related to the UploadDocumentAsync operation. You can call this operation to cancel a document upload job.
   * >  If the canceling operation is complete, failed, or is canceled, you cannot call the operation again. The canceling operation only interrupts the document upload job. To remove the uploaded data, you must manually remove it or call the DeleteCollectionData operation. You can also call the document upload operation to overwrite the data by using the same FileName parameter.
   * 
   * @param request - CancelUploadDocumentJobRequest
   * @returns CancelUploadDocumentJobResponse
   */
  async cancelUploadDocumentJob(request: $_model.CancelUploadDocumentJobRequest): Promise<$_model.CancelUploadDocumentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelUploadDocumentJobWithOptions(request, runtime);
  }

  /**
   * Cancels an asynchronous vector data upload job by using a job ID.
   * 
   * @remarks
   * This operation is related to the `UpsertCollectionDataAsync` operation. You can call this operation to cancel an upload job.
   * >  If the canceling operation is complete, failed, or is canceled, you cannot call the operation again. The canceling operation only interrupts the upload job. To remove the uploaded data, you must manually remove it or call the DeleteCollectionData operation.
   * 
   * @param request - CancelUpsertCollectionDataJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelUpsertCollectionDataJobResponse
   */
  async cancelUpsertCollectionDataJobWithOptions(request: $_model.CancelUpsertCollectionDataJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelUpsertCollectionDataJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelUpsertCollectionDataJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelUpsertCollectionDataJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelUpsertCollectionDataJobResponse({}));
  }

  /**
   * Cancels an asynchronous vector data upload job by using a job ID.
   * 
   * @remarks
   * This operation is related to the `UpsertCollectionDataAsync` operation. You can call this operation to cancel an upload job.
   * >  If the canceling operation is complete, failed, or is canceled, you cannot call the operation again. The canceling operation only interrupts the upload job. To remove the uploaded data, you must manually remove it or call the DeleteCollectionData operation.
   * 
   * @param request - CancelUpsertCollectionDataJobRequest
   * @returns CancelUpsertCollectionDataJobResponse
   */
  async cancelUpsertCollectionDataJob(request: $_model.CancelUpsertCollectionDataJobRequest): Promise<$_model.CancelUpsertCollectionDataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelUpsertCollectionDataJobWithOptions(request, runtime);
  }

  /**
   * Provides intelligent question-and-answer services by combining a knowledge base with a large language model.
   * 
   * @remarks
   * This API enables users to query a large language model with answers grounded in a specified knowledge base collection. You can configure multiple parameters to customize requests, including but not limited to database instance IDs, knowledge retrieval parameters, and model inference parameters. In addition, a default system prompt template is provided and users are allowed to customize the system prompt.
   * *   **DBInstanceId**: Required. This parameter specifies the ID of the database instance.
   * *   **KnowledgeParams**: optional. It contains parameters related to knowledge retrieval, such as retrieval content and merge policy.
   * *   **ModelParams**: required. It contains parameters related to model inference, such as the message list and the name of the model.
   * *   **PromptTemplate**: optional. It is used to customize the system prompt template.
   * 
   * @param tmpReq - ChatWithKnowledgeBaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatWithKnowledgeBaseResponse
   */
  async chatWithKnowledgeBaseWithOptions(tmpReq: $_model.ChatWithKnowledgeBaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatWithKnowledgeBaseResponse> {
    tmpReq.validate();
    let request = new $_model.ChatWithKnowledgeBaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.knowledgeParams)) {
      request.knowledgeParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.knowledgeParams, "KnowledgeParams", "json");
    }

    if (!$dara.isNull(tmpReq.modelParams)) {
      request.modelParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelParams, "ModelParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.includeKnowledgeBaseResults)) {
      query["IncludeKnowledgeBaseResults"] = request.includeKnowledgeBaseResults;
    }

    if (!$dara.isNull(request.knowledgeParamsShrink)) {
      query["KnowledgeParams"] = request.knowledgeParamsShrink;
    }

    if (!$dara.isNull(request.modelParamsShrink)) {
      query["ModelParams"] = request.modelParamsShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promptParams)) {
      query["PromptParams"] = request.promptParams;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatWithKnowledgeBase",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatWithKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.ChatWithKnowledgeBaseResponse({}));
  }

  /**
   * Provides intelligent question-and-answer services by combining a knowledge base with a large language model.
   * 
   * @remarks
   * This API enables users to query a large language model with answers grounded in a specified knowledge base collection. You can configure multiple parameters to customize requests, including but not limited to database instance IDs, knowledge retrieval parameters, and model inference parameters. In addition, a default system prompt template is provided and users are allowed to customize the system prompt.
   * *   **DBInstanceId**: Required. This parameter specifies the ID of the database instance.
   * *   **KnowledgeParams**: optional. It contains parameters related to knowledge retrieval, such as retrieval content and merge policy.
   * *   **ModelParams**: required. It contains parameters related to model inference, such as the message list and the name of the model.
   * *   **PromptTemplate**: optional. It is used to customize the system prompt template.
   * 
   * @param request - ChatWithKnowledgeBaseRequest
   * @returns ChatWithKnowledgeBaseResponse
   */
  async chatWithKnowledgeBase(request: $_model.ChatWithKnowledgeBaseRequest): Promise<$_model.ChatWithKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithKnowledgeBaseWithOptions(request, runtime);
  }

  /**
   * Provides intelligent question-and-answer services by combining a knowledge base with a large language model. A streaming API, which is called by using the SSE or the Java asynchronous SDK.
   * 
   * @remarks
   * This API enables users to query a large language model with answers grounded in a specified knowledge base collection. You can configure multiple parameters to customize requests, including but not limited to database instance IDs, knowledge retrieval parameters, and model inference parameters. In addition, a default system prompt template is provided and users are allowed to customize the system prompt.
   * *   DBInstanceId: required. This parameter specifies the ID of the database instance.
   * *   KnowledgeParams: optional. It contains parameters related to knowledge retrieval, such as retrieval content and merge policy.
   * *   ModelParams: required. It contains parameters related to model inference, such as the message list and the name of the model.
   * *   PromptTemplate: optional. It is used to customize a system prompt template.
   * 
   * @param tmpReq - ChatWithKnowledgeBaseStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatWithKnowledgeBaseStreamResponse
   */
  async *chatWithKnowledgeBaseStreamWithSSE(tmpReq: $_model.ChatWithKnowledgeBaseStreamRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ChatWithKnowledgeBaseStreamResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.ChatWithKnowledgeBaseStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.knowledgeParams)) {
      request.knowledgeParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.knowledgeParams, "KnowledgeParams", "json");
    }

    if (!$dara.isNull(tmpReq.modelParams)) {
      request.modelParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelParams, "ModelParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.includeKnowledgeBaseResults)) {
      query["IncludeKnowledgeBaseResults"] = request.includeKnowledgeBaseResults;
    }

    if (!$dara.isNull(request.knowledgeParamsShrink)) {
      query["KnowledgeParams"] = request.knowledgeParamsShrink;
    }

    if (!$dara.isNull(request.modelParamsShrink)) {
      query["ModelParams"] = request.modelParamsShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promptParams)) {
      query["PromptParams"] = request.promptParams;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatWithKnowledgeBaseStream",
      version: "2016-05-03",
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
      yield $dara.cast<$_model.ChatWithKnowledgeBaseStreamResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.ChatWithKnowledgeBaseStreamResponse({}));
    }
  }

  /**
   * Provides intelligent question-and-answer services by combining a knowledge base with a large language model. A streaming API, which is called by using the SSE or the Java asynchronous SDK.
   * 
   * @remarks
   * This API enables users to query a large language model with answers grounded in a specified knowledge base collection. You can configure multiple parameters to customize requests, including but not limited to database instance IDs, knowledge retrieval parameters, and model inference parameters. In addition, a default system prompt template is provided and users are allowed to customize the system prompt.
   * *   DBInstanceId: required. This parameter specifies the ID of the database instance.
   * *   KnowledgeParams: optional. It contains parameters related to knowledge retrieval, such as retrieval content and merge policy.
   * *   ModelParams: required. It contains parameters related to model inference, such as the message list and the name of the model.
   * *   PromptTemplate: optional. It is used to customize a system prompt template.
   * 
   * @param tmpReq - ChatWithKnowledgeBaseStreamRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatWithKnowledgeBaseStreamResponse
   */
  async chatWithKnowledgeBaseStreamWithOptions(tmpReq: $_model.ChatWithKnowledgeBaseStreamRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatWithKnowledgeBaseStreamResponse> {
    tmpReq.validate();
    let request = new $_model.ChatWithKnowledgeBaseStreamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.knowledgeParams)) {
      request.knowledgeParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.knowledgeParams, "KnowledgeParams", "json");
    }

    if (!$dara.isNull(tmpReq.modelParams)) {
      request.modelParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelParams, "ModelParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.includeKnowledgeBaseResults)) {
      query["IncludeKnowledgeBaseResults"] = request.includeKnowledgeBaseResults;
    }

    if (!$dara.isNull(request.knowledgeParamsShrink)) {
      query["KnowledgeParams"] = request.knowledgeParamsShrink;
    }

    if (!$dara.isNull(request.modelParamsShrink)) {
      query["ModelParams"] = request.modelParamsShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.promptParams)) {
      query["PromptParams"] = request.promptParams;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatWithKnowledgeBaseStream",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatWithKnowledgeBaseStreamResponse>(await this.callApi(params, req, runtime), new $_model.ChatWithKnowledgeBaseStreamResponse({}));
  }

  /**
   * Provides intelligent question-and-answer services by combining a knowledge base with a large language model. A streaming API, which is called by using the SSE or the Java asynchronous SDK.
   * 
   * @remarks
   * This API enables users to query a large language model with answers grounded in a specified knowledge base collection. You can configure multiple parameters to customize requests, including but not limited to database instance IDs, knowledge retrieval parameters, and model inference parameters. In addition, a default system prompt template is provided and users are allowed to customize the system prompt.
   * *   DBInstanceId: required. This parameter specifies the ID of the database instance.
   * *   KnowledgeParams: optional. It contains parameters related to knowledge retrieval, such as retrieval content and merge policy.
   * *   ModelParams: required. It contains parameters related to model inference, such as the message list and the name of the model.
   * *   PromptTemplate: optional. It is used to customize a system prompt template.
   * 
   * @param request - ChatWithKnowledgeBaseStreamRequest
   * @returns ChatWithKnowledgeBaseStreamResponse
   */
  async chatWithKnowledgeBaseStream(request: $_model.ChatWithKnowledgeBaseStreamRequest): Promise<$_model.ChatWithKnowledgeBaseStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatWithKnowledgeBaseStreamWithOptions(request, runtime);
  }

  /**
   * Checks the configurations of a Hadoop data source.
   * 
   * @param request - CheckHadoopDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckHadoopDataSourceResponse
   */
  async checkHadoopDataSourceWithOptions(request: $_model.CheckHadoopDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckHadoopDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkDir)) {
      query["CheckDir"] = request.checkDir;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckHadoopDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckHadoopDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CheckHadoopDataSourceResponse({}));
  }

  /**
   * Checks the configurations of a Hadoop data source.
   * 
   * @param request - CheckHadoopDataSourceRequest
   * @returns CheckHadoopDataSourceResponse
   */
  async checkHadoopDataSource(request: $_model.CheckHadoopDataSourceRequest): Promise<$_model.CheckHadoopDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkHadoopDataSourceWithOptions(request, runtime);
  }

  /**
   * Check Hadoop Cluster Network Connectivity
   * 
   * @param request - CheckHadoopNetConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckHadoopNetConnectionResponse
   */
  async checkHadoopNetConnectionWithOptions(request: $_model.CheckHadoopNetConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckHadoopNetConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.emrInstanceId)) {
      query["EmrInstanceId"] = request.emrInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckHadoopNetConnection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckHadoopNetConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CheckHadoopNetConnectionResponse({}));
  }

  /**
   * Check Hadoop Cluster Network Connectivity
   * 
   * @param request - CheckHadoopNetConnectionRequest
   * @returns CheckHadoopNetConnectionResponse
   */
  async checkHadoopNetConnection(request: $_model.CheckHadoopNetConnectionRequest): Promise<$_model.CheckHadoopNetConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkHadoopNetConnectionWithOptions(request, runtime);
  }

  /**
   * Check the network connectivity of the JDBC connection string
   * 
   * @param request - CheckJDBCSourceNetConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckJDBCSourceNetConnectionResponse
   */
  async checkJDBCSourceNetConnectionWithOptions(request: $_model.CheckJDBCSourceNetConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckJDBCSourceNetConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.jdbcConnectionString)) {
      query["JdbcConnectionString"] = request.jdbcConnectionString;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckJDBCSourceNetConnection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckJDBCSourceNetConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CheckJDBCSourceNetConnectionResponse({}));
  }

  /**
   * Check the network connectivity of the JDBC connection string
   * 
   * @param request - CheckJDBCSourceNetConnectionRequest
   * @returns CheckJDBCSourceNetConnectionResponse
   */
  async checkJDBCSourceNetConnection(request: $_model.CheckJDBCSourceNetConnectionRequest): Promise<$_model.CheckJDBCSourceNetConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkJDBCSourceNetConnectionWithOptions(request, runtime);
  }

  /**
   * Queries whether a service-linked role is created.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRoleWithOptions(request: $_model.CheckServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRole",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceLinkedRoleResponse({}));
  }

  /**
   * Queries whether a service-linked role is created.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Restores data to a new AnalyticDB for PostgreSQL instance.
   * 
   * @param request - CloneDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneDBInstanceResponse
   */
  async cloneDBInstanceWithOptions(request: $_model.CloneDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.srcDbInstanceName)) {
      query["SrcDbInstanceName"] = request.srcDbInstanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CloneDBInstanceResponse({}));
  }

  /**
   * Restores data to a new AnalyticDB for PostgreSQL instance.
   * 
   * @param request - CloneDBInstanceRequest
   * @returns CloneDBInstanceResponse
   */
  async cloneDBInstance(request: $_model.CloneDBInstanceRequest): Promise<$_model.CloneDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneDBInstanceWithOptions(request, runtime);
  }

  /**
   * Creates an initial account for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   Before you can use an AnalyticDB for PostgreSQL instance, you must create an initial account for the instance.
   * *   You can call this operation to create only initial accounts. For information about how to create other types of accounts, see [Create a database account](https://help.aliyun.com/document_detail/50206.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountResponse({}));
  }

  /**
   * Creates an initial account for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   Before you can use an AnalyticDB for PostgreSQL instance, you must create an initial account for the instance.
   * *   You can call this operation to create only initial accounts. For information about how to create other types of accounts, see [Create a database account](https://help.aliyun.com/document_detail/50206.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a backup set.
   * 
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBackup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupResponse({}));
  }

  /**
   * Creates a backup set.
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Creates a vector collection.
   * 
   * @param tmpReq - CreateCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCollectionResponse
   */
  async createCollectionWithOptions(tmpReq: $_model.CreateCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCollectionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCollectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sparseVectorIndexConfig)) {
      request.sparseVectorIndexConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sparseVectorIndexConfig, "SparseVectorIndexConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.externalStorage)) {
      query["ExternalStorage"] = request.externalStorage;
    }

    if (!$dara.isNull(request.fullTextRetrievalFields)) {
      query["FullTextRetrievalFields"] = request.fullTextRetrievalFields;
    }

    if (!$dara.isNull(request.hnswEfConstruction)) {
      query["HnswEfConstruction"] = request.hnswEfConstruction;
    }

    if (!$dara.isNull(request.hnswM)) {
      query["HnswM"] = request.hnswM;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.metadata)) {
      query["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.metadataIndices)) {
      query["MetadataIndices"] = request.metadataIndices;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parser)) {
      query["Parser"] = request.parser;
    }

    if (!$dara.isNull(request.pqEnable)) {
      query["PqEnable"] = request.pqEnable;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sparseVectorIndexConfigShrink)) {
      query["SparseVectorIndexConfig"] = request.sparseVectorIndexConfigShrink;
    }

    if (!$dara.isNull(request.supportSparse)) {
      query["SupportSparse"] = request.supportSparse;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCollectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateCollectionResponse({}));
  }

  /**
   * Creates a vector collection.
   * 
   * @param request - CreateCollectionRequest
   * @returns CreateCollectionResponse
   */
  async createCollection(request: $_model.CreateCollectionRequest): Promise<$_model.CreateCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCollectionWithOptions(request, runtime);
  }

  /**
   * Create Instance
   * 
   * @remarks
   * Before using this interface, please make sure you have fully understood the [billing method](https://help.aliyun.com/document_detail/35406.html) and <props="china">[pricing](https://www.aliyun.com/price/product#/gpdb/detail/GreenplumPost)<props="intl">[pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing) of the AnalyticDB for PostgreSQL product.
   * 
   * @param request - CreateDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceResponse
   */
  async createDBInstanceWithOptions(request: $_model.CreateDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AINodeSpecInfos)) {
      query["AINodeSpecInfos"] = request.AINodeSpecInfos;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.cacheStorageSize)) {
      query["CacheStorageSize"] = request.cacheStorageSize;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createSampleData)) {
      query["CreateSampleData"] = request.createSampleData;
    }

    if (!$dara.isNull(request.DBInstanceCategory)) {
      query["DBInstanceCategory"] = request.DBInstanceCategory;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceGroupCount)) {
      query["DBInstanceGroupCount"] = request.DBInstanceGroupCount;
    }

    if (!$dara.isNull(request.DBInstanceMode)) {
      query["DBInstanceMode"] = request.DBInstanceMode;
    }

    if (!$dara.isNull(request.deployMode)) {
      query["DeployMode"] = request.deployMode;
    }

    if (!$dara.isNull(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
    }

    if (!$dara.isNull(request.encryptionType)) {
      query["EncryptionType"] = request.encryptionType;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!$dara.isNull(request.idleTime)) {
      query["IdleTime"] = request.idleTime;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.masterAISpec)) {
      query["MasterAISpec"] = request.masterAISpec;
    }

    if (!$dara.isNull(request.masterCU)) {
      query["MasterCU"] = request.masterCU;
    }

    if (!$dara.isNull(request.masterNodeNum)) {
      query["MasterNodeNum"] = request.masterNodeNum;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.prodType)) {
      query["ProdType"] = request.prodType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.segDiskPerformanceLevel)) {
      query["SegDiskPerformanceLevel"] = request.segDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.segNodeNum)) {
      query["SegNodeNum"] = request.segNodeNum;
    }

    if (!$dara.isNull(request.segStorageType)) {
      query["SegStorageType"] = request.segStorageType;
    }

    if (!$dara.isNull(request.serverlessMode)) {
      query["ServerlessMode"] = request.serverlessMode;
    }

    if (!$dara.isNull(request.serverlessResource)) {
      query["ServerlessResource"] = request.serverlessResource;
    }

    if (!$dara.isNull(request.srcDbInstanceName)) {
      query["SrcDbInstanceName"] = request.srcDbInstanceName;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vectorConfigurationStatus)) {
      query["VectorConfigurationStatus"] = request.vectorConfigurationStatus;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceResponse({}));
  }

  /**
   * Create Instance
   * 
   * @remarks
   * Before using this interface, please make sure you have fully understood the [billing method](https://help.aliyun.com/document_detail/35406.html) and <props="china">[pricing](https://www.aliyun.com/price/product#/gpdb/detail/GreenplumPost)<props="intl">[pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing) of the AnalyticDB for PostgreSQL product.
   * 
   * @param request - CreateDBInstanceRequest
   * @returns CreateDBInstanceResponse
   */
  async createDBInstance(request: $_model.CreateDBInstanceRequest): Promise<$_model.CreateDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceWithOptions(request, runtime);
  }

  /**
   * Adds an IP whitelist group.
   * 
   * @param tmpReq - CreateDBInstanceIPArrayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstanceIPArrayResponse
   */
  async createDBInstanceIPArrayWithOptions(tmpReq: $_model.CreateDBInstanceIPArrayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstanceIPArrayResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBInstanceIPArrayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.securityIPList)) {
      request.securityIPListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityIPList, "SecurityIPList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.IPArrayAttribute)) {
      query["IPArrayAttribute"] = request.IPArrayAttribute;
    }

    if (!$dara.isNull(request.IPArrayName)) {
      query["IPArrayName"] = request.IPArrayName;
    }

    if (!$dara.isNull(request.securityIPListShrink)) {
      query["SecurityIPList"] = request.securityIPListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstanceIPArray",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstanceIPArrayResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstanceIPArrayResponse({}));
  }

  /**
   * Adds an IP whitelist group.
   * 
   * @param request - CreateDBInstanceIPArrayRequest
   * @returns CreateDBInstanceIPArrayResponse
   */
  async createDBInstanceIPArray(request: $_model.CreateDBInstanceIPArrayRequest): Promise<$_model.CreateDBInstanceIPArrayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstanceIPArrayWithOptions(request, runtime);
  }

  /**
   * Creates a plan for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   The plan management feature is supported only for pay-as-you-go instances.
   * *   When you change the compute node specifications or change the number of compute nodes, transient connections may occur. We recommend that you perform these operations during off-peak hours.
   * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * 
   * @param request - CreateDBInstancePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBInstancePlanResponse
   */
  async createDBInstancePlanWithOptions(request: $_model.CreateDBInstancePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBInstancePlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.planConfig)) {
      query["PlanConfig"] = request.planConfig;
    }

    if (!$dara.isNull(request.planDesc)) {
      query["PlanDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planEndDate)) {
      query["PlanEndDate"] = request.planEndDate;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.planScheduleType)) {
      query["PlanScheduleType"] = request.planScheduleType;
    }

    if (!$dara.isNull(request.planStartDate)) {
      query["PlanStartDate"] = request.planStartDate;
    }

    if (!$dara.isNull(request.planType)) {
      query["PlanType"] = request.planType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBInstancePlan",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBInstancePlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBInstancePlanResponse({}));
  }

  /**
   * Creates a plan for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   The plan management feature is supported only for pay-as-you-go instances.
   * *   When you change the compute node specifications or change the number of compute nodes, transient connections may occur. We recommend that you perform these operations during off-peak hours.
   * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * 
   * @param request - CreateDBInstancePlanRequest
   * @returns CreateDBInstancePlanResponse
   */
  async createDBInstancePlan(request: $_model.CreateDBInstancePlanRequest): Promise<$_model.CreateDBInstancePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBInstancePlanWithOptions(request, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroupWithOptions(request: $_model.CreateDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupConfig)) {
      query["ResourceGroupConfig"] = request.resourceGroupConfig;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBResourceGroupResponse({}));
  }

  /**
   * Creates a resource group.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroup(request: $_model.CreateDBResourceGroupRequest): Promise<$_model.CreateDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a database.
   * 
   * @param request - CreateDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.characterSetName)) {
      query["CharacterSetName"] = request.characterSetName;
    }

    if (!$dara.isNull(request.collate)) {
      query["Collate"] = request.collate;
    }

    if (!$dara.isNull(request.ctype)) {
      query["Ctype"] = request.ctype;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabase",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * Creates a database.
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * Creates a document collection.
   * 
   * @param tmpReq - CreateDocumentCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocumentCollectionResponse
   */
  async createDocumentCollectionWithOptions(tmpReq: $_model.CreateDocumentCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocumentCollectionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDocumentCollectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entityTypes)) {
      request.entityTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityTypes, "EntityTypes", "json");
    }

    if (!$dara.isNull(tmpReq.relationshipTypes)) {
      request.relationshipTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relationshipTypes, "RelationshipTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.embeddingModel)) {
      query["EmbeddingModel"] = request.embeddingModel;
    }

    if (!$dara.isNull(request.enableGraph)) {
      query["EnableGraph"] = request.enableGraph;
    }

    if (!$dara.isNull(request.entityTypesShrink)) {
      query["EntityTypes"] = request.entityTypesShrink;
    }

    if (!$dara.isNull(request.externalStorage)) {
      query["ExternalStorage"] = request.externalStorage;
    }

    if (!$dara.isNull(request.fullTextRetrievalFields)) {
      query["FullTextRetrievalFields"] = request.fullTextRetrievalFields;
    }

    if (!$dara.isNull(request.hnswEfConstruction)) {
      query["HnswEfConstruction"] = request.hnswEfConstruction;
    }

    if (!$dara.isNull(request.hnswM)) {
      query["HnswM"] = request.hnswM;
    }

    if (!$dara.isNull(request.LLMModel)) {
      query["LLMModel"] = request.LLMModel;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.metadata)) {
      query["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.metadataIndices)) {
      query["MetadataIndices"] = request.metadataIndices;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parser)) {
      query["Parser"] = request.parser;
    }

    if (!$dara.isNull(request.pqEnable)) {
      query["PqEnable"] = request.pqEnable;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relationshipTypesShrink)) {
      query["RelationshipTypes"] = request.relationshipTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocumentCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocumentCollectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDocumentCollectionResponse({}));
  }

  /**
   * Creates a document collection.
   * 
   * @param request - CreateDocumentCollectionRequest
   * @returns CreateDocumentCollectionResponse
   */
  async createDocumentCollection(request: $_model.CreateDocumentCollectionRequest): Promise<$_model.CreateDocumentCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDocumentCollectionWithOptions(request, runtime);
  }

  /**
   * Install extensions.
   * 
   * @param request - CreateExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExtensionsResponse
   */
  async createExtensionsWithOptions(request: $_model.CreateExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNames)) {
      query["DBNames"] = request.DBNames;
    }

    if (!$dara.isNull(request.extensions)) {
      query["Extensions"] = request.extensions;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExtensions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.CreateExtensionsResponse({}));
  }

  /**
   * Install extensions.
   * 
   * @param request - CreateExtensionsRequest
   * @returns CreateExtensionsResponse
   */
  async createExtensions(request: $_model.CreateExtensionsRequest): Promise<$_model.CreateExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExtensionsWithOptions(request, runtime);
  }

  /**
   * Create External Data Service
   * 
   * @param request - CreateExternalDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExternalDataServiceResponse
   */
  async createExternalDataServiceWithOptions(request: $_model.CreateExternalDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      query["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExternalDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExternalDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateExternalDataServiceResponse({}));
  }

  /**
   * Create External Data Service
   * 
   * @param request - CreateExternalDataServiceRequest
   * @returns CreateExternalDataServiceResponse
   */
  async createExternalDataService(request: $_model.CreateExternalDataServiceRequest): Promise<$_model.CreateExternalDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExternalDataServiceWithOptions(request, runtime);
  }

  /**
   * Create Hadoop data source configuration
   * 
   * @param request - CreateHadoopDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHadoopDataSourceResponse
   */
  async createHadoopDataSourceWithOptions(request: $_model.CreateHadoopDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHadoopDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceDescription)) {
      query["DataSourceDescription"] = request.dataSourceDescription;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.emrInstanceId)) {
      query["EmrInstanceId"] = request.emrInstanceId;
    }

    if (!$dara.isNull(request.HDFSConf)) {
      query["HDFSConf"] = request.HDFSConf;
    }

    if (!$dara.isNull(request.hadoopCoreConf)) {
      query["HadoopCoreConf"] = request.hadoopCoreConf;
    }

    if (!$dara.isNull(request.hadoopCreateType)) {
      query["HadoopCreateType"] = request.hadoopCreateType;
    }

    if (!$dara.isNull(request.hadoopHostsAddress)) {
      query["HadoopHostsAddress"] = request.hadoopHostsAddress;
    }

    if (!$dara.isNull(request.hiveConf)) {
      query["HiveConf"] = request.hiveConf;
    }

    if (!$dara.isNull(request.mapReduceConf)) {
      query["MapReduceConf"] = request.mapReduceConf;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.yarnConf)) {
      query["YarnConf"] = request.yarnConf;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHadoopDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHadoopDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateHadoopDataSourceResponse({}));
  }

  /**
   * Create Hadoop data source configuration
   * 
   * @param request - CreateHadoopDataSourceRequest
   * @returns CreateHadoopDataSourceResponse
   */
  async createHadoopDataSource(request: $_model.CreateHadoopDataSourceRequest): Promise<$_model.CreateHadoopDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHadoopDataSourceWithOptions(request, runtime);
  }

  /**
   * Creates an index. Note: 1. Only scalar indexes are supported. 2. The table is write-locked during index creation. 3. When creating an index on a table with a large volume of data, the process consumes significant CPU and I/O resources of the instance. If this impacts instance availability, call CancelCreateIndexJob to cancel the index creation.
   * 
   * @param request - CreateIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
   */
  async createIndexWithOptions(request: $_model.CreateIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.indexConfig)) {
      query["IndexConfig"] = request.indexConfig;
    }

    if (!$dara.isNull(request.indexField)) {
      query["IndexField"] = request.indexField;
    }

    if (!$dara.isNull(request.indexName)) {
      query["IndexName"] = request.indexName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndexResponse({}));
  }

  /**
   * Creates an index. Note: 1. Only scalar indexes are supported. 2. The table is write-locked during index creation. 3. When creating an index on a table with a large volume of data, the process consumes significant CPU and I/O resources of the instance. If this impacts instance availability, call CancelCreateIndexJob to cancel the index creation.
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(request: $_model.CreateIndexRequest): Promise<$_model.CreateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIndexWithOptions(request, runtime);
  }

  /**
   * Creates a JDBC data source.
   * 
   * @param request - CreateJDBCDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJDBCDataSourceResponse
   */
  async createJDBCDataSourceWithOptions(request: $_model.CreateJDBCDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJDBCDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceDescription)) {
      query["DataSourceDescription"] = request.dataSourceDescription;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.JDBCConnectionString)) {
      query["JDBCConnectionString"] = request.JDBCConnectionString;
    }

    if (!$dara.isNull(request.JDBCPassword)) {
      query["JDBCPassword"] = request.JDBCPassword;
    }

    if (!$dara.isNull(request.JDBCUserName)) {
      query["JDBCUserName"] = request.JDBCUserName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJDBCDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJDBCDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateJDBCDataSourceResponse({}));
  }

  /**
   * Creates a JDBC data source.
   * 
   * @param request - CreateJDBCDataSourceRequest
   * @returns CreateJDBCDataSourceResponse
   */
  async createJDBCDataSource(request: $_model.CreateJDBCDataSourceRequest): Promise<$_model.CreateJDBCDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJDBCDataSourceWithOptions(request, runtime);
  }

  /**
   * Creates a model service.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the [billing methods](https://help.aliyun.com/document_detail/35406.html) and [pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing) of AnalyticDB for PostgreSQL.
   * 
   * @param tmpReq - CreateModelServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelServiceResponse
   */
  async createModelServiceWithOptions(tmpReq: $_model.CreateModelServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelServiceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateModelServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aiNodes)) {
      request.aiNodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aiNodes, "AiNodes", "json");
    }

    if (!$dara.isNull(tmpReq.modelParams)) {
      request.modelParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelParams, "ModelParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aiNodesShrink)) {
      query["AiNodes"] = request.aiNodesShrink;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enablePublicConnection)) {
      query["EnablePublicConnection"] = request.enablePublicConnection;
    }

    if (!$dara.isNull(request.inferenceEngine)) {
      query["InferenceEngine"] = request.inferenceEngine;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelParamsShrink)) {
      query["ModelParams"] = request.modelParamsShrink;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelServiceResponse({}));
  }

  /**
   * Creates a model service.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the [billing methods](https://help.aliyun.com/document_detail/35406.html) and [pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing) of AnalyticDB for PostgreSQL.
   * 
   * @param request - CreateModelServiceRequest
   * @returns CreateModelServiceResponse
   */
  async createModelService(request: $_model.CreateModelServiceRequest): Promise<$_model.CreateModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelServiceWithOptions(request, runtime);
  }

  /**
   * Creates a vector namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * Creates a vector namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Create Homogeneous Data Source
   * 
   * @param request - CreateRemoteADBDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRemoteADBDataSourceResponse
   */
  async createRemoteADBDataSourceWithOptions(request: $_model.CreateRemoteADBDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRemoteADBDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.localDBInstanceId)) {
      query["LocalDBInstanceId"] = request.localDBInstanceId;
    }

    if (!$dara.isNull(request.localDatabase)) {
      query["LocalDatabase"] = request.localDatabase;
    }

    if (!$dara.isNull(request.managerUserName)) {
      query["ManagerUserName"] = request.managerUserName;
    }

    if (!$dara.isNull(request.managerUserPassword)) {
      query["ManagerUserPassword"] = request.managerUserPassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remoteDBInstanceId)) {
      query["RemoteDBInstanceId"] = request.remoteDBInstanceId;
    }

    if (!$dara.isNull(request.remoteDatabase)) {
      query["RemoteDatabase"] = request.remoteDatabase;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPassword)) {
      query["UserPassword"] = request.userPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRemoteADBDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRemoteADBDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRemoteADBDataSourceResponse({}));
  }

  /**
   * Create Homogeneous Data Source
   * 
   * @param request - CreateRemoteADBDataSourceRequest
   * @returns CreateRemoteADBDataSourceResponse
   */
  async createRemoteADBDataSource(request: $_model.CreateRemoteADBDataSourceRequest): Promise<$_model.CreateRemoteADBDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRemoteADBDataSourceWithOptions(request, runtime);
  }

  /**
   * Creates a sample dataset for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   You can call this operation to create a sample dataset for an AnalyticDB for PostgreSQL instance. Then, you can execute query statements on the sample dataset to experience or test your instance. For more information about query statements, see [Dataset information and query examples](https://help.aliyun.com/document_detail/452277.html).
   * *   This operation is supported only for AnalyticDB for PostgreSQL V6.3.8.8 to 6.3.8.x, V6.3.10.3, and later.
   * *   Versions from V6.3.9.0 to V6.3.10.2 are not supported.
   * 
   * @param request - CreateSampleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSampleDataResponse
   */
  async createSampleDataWithOptions(request: $_model.CreateSampleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSampleDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSampleData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSampleDataResponse>(await this.callApi(params, req, runtime), new $_model.CreateSampleDataResponse({}));
  }

  /**
   * Creates a sample dataset for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   You can call this operation to create a sample dataset for an AnalyticDB for PostgreSQL instance. Then, you can execute query statements on the sample dataset to experience or test your instance. For more information about query statements, see [Dataset information and query examples](https://help.aliyun.com/document_detail/452277.html).
   * *   This operation is supported only for AnalyticDB for PostgreSQL V6.3.8.8 to 6.3.8.x, V6.3.10.3, and later.
   * *   Versions from V6.3.9.0 to V6.3.10.2 are not supported.
   * 
   * @param request - CreateSampleDataRequest
   * @returns CreateSampleDataResponse
   */
  async createSampleData(request: $_model.CreateSampleDataRequest): Promise<$_model.CreateSampleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSampleDataWithOptions(request, runtime);
  }

  /**
   * Creates an access credential for an AnalyticDB for PostgreSQL instance by using the name and password of a database account.
   * 
   * @param request - CreateSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretResponse
   */
  async createSecretWithOptions(request: $_model.CreateSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.testConnection)) {
      query["TestConnection"] = request.testConnection;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecret",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretResponse({}));
  }

  /**
   * Creates an access credential for an AnalyticDB for PostgreSQL instance by using the name and password of a database account.
   * 
   * @param request - CreateSecretRequest
   * @returns CreateSecretResponse
   */
  async createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecretWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceLinkedRoleResponse({}));
  }

  /**
   * Creates a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - CreateStreamingDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamingDataServiceResponse
   */
  async createStreamingDataServiceWithOptions(request: $_model.CreateStreamingDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamingDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      query["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamingDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamingDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamingDataServiceResponse({}));
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - CreateStreamingDataServiceRequest
   * @returns CreateStreamingDataServiceResponse
   */
  async createStreamingDataService(request: $_model.CreateStreamingDataServiceRequest): Promise<$_model.CreateStreamingDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamingDataServiceWithOptions(request, runtime);
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - CreateStreamingDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamingDataSourceResponse
   */
  async createStreamingDataSourceWithOptions(request: $_model.CreateStreamingDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamingDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceConfig)) {
      query["DataSourceConfig"] = request.dataSourceConfig;
    }

    if (!$dara.isNull(request.dataSourceDescription)) {
      query["DataSourceDescription"] = request.dataSourceDescription;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamingDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamingDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamingDataSourceResponse({}));
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - CreateStreamingDataSourceRequest
   * @returns CreateStreamingDataSourceResponse
   */
  async createStreamingDataSource(request: $_model.CreateStreamingDataSourceRequest): Promise<$_model.CreateStreamingDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamingDataSourceWithOptions(request, runtime);
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param tmpReq - CreateStreamingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStreamingJobResponse
   */
  async createStreamingJobWithOptions(tmpReq: $_model.CreateStreamingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStreamingJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStreamingJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destColumns)) {
      request.destColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destColumns, "DestColumns", "json");
    }

    if (!$dara.isNull(tmpReq.matchColumns)) {
      request.matchColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchColumns, "MatchColumns", "json");
    }

    if (!$dara.isNull(tmpReq.srcColumns)) {
      request.srcColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcColumns, "SrcColumns", "json");
    }

    if (!$dara.isNull(tmpReq.updateColumns)) {
      request.updateColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateColumns, "UpdateColumns", "json");
    }

    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.consistency)) {
      query["Consistency"] = request.consistency;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.destColumnsShrink)) {
      query["DestColumns"] = request.destColumnsShrink;
    }

    if (!$dara.isNull(request.destDatabase)) {
      query["DestDatabase"] = request.destDatabase;
    }

    if (!$dara.isNull(request.destSchema)) {
      query["DestSchema"] = request.destSchema;
    }

    if (!$dara.isNull(request.destTable)) {
      query["DestTable"] = request.destTable;
    }

    if (!$dara.isNull(request.errorLimitCount)) {
      query["ErrorLimitCount"] = request.errorLimitCount;
    }

    if (!$dara.isNull(request.fallbackOffset)) {
      query["FallbackOffset"] = request.fallbackOffset;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.jobConfig)) {
      query["JobConfig"] = request.jobConfig;
    }

    if (!$dara.isNull(request.jobDescription)) {
      query["JobDescription"] = request.jobDescription;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.matchColumnsShrink)) {
      query["MatchColumns"] = request.matchColumnsShrink;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.srcColumnsShrink)) {
      query["SrcColumns"] = request.srcColumnsShrink;
    }

    if (!$dara.isNull(request.tryRun)) {
      query["TryRun"] = request.tryRun;
    }

    if (!$dara.isNull(request.updateColumnsShrink)) {
      query["UpdateColumns"] = request.updateColumnsShrink;
    }

    if (!$dara.isNull(request.writeMode)) {
      query["WriteMode"] = request.writeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStreamingJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStreamingJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateStreamingJobResponse({}));
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - CreateStreamingJobRequest
   * @returns CreateStreamingJobResponse
   */
  async createStreamingJob(request: $_model.CreateStreamingJobRequest): Promise<$_model.CreateStreamingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStreamingJobWithOptions(request, runtime);
  }

  /**
   * Creates a Supabase project.
   * 
   * @remarks
   *   You can call this operation to create a Supabase project.
   * 
   * @param request - CreateSupabaseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSupabaseProjectResponse
   */
  async createSupabaseProjectWithOptions(request: $_model.CreateSupabaseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSupabaseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskPerformanceLevel)) {
      query["DiskPerformanceLevel"] = request.diskPerformanceLevel;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.projectSpec)) {
      query["ProjectSpec"] = request.projectSpec;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSupabaseProject",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSupabaseProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateSupabaseProjectResponse({}));
  }

  /**
   * Creates a Supabase project.
   * 
   * @remarks
   *   You can call this operation to create a Supabase project.
   * 
   * @param request - CreateSupabaseProjectRequest
   * @returns CreateSupabaseProjectResponse
   */
  async createSupabaseProject(request: $_model.CreateSupabaseProjectRequest): Promise<$_model.CreateSupabaseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSupabaseProjectWithOptions(request, runtime);
  }

  /**
   * Create Vector Index
   * 
   * @param request - CreateVectorIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVectorIndexResponse
   */
  async createVectorIndexWithOptions(request: $_model.CreateVectorIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVectorIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.externalStorage)) {
      query["ExternalStorage"] = request.externalStorage;
    }

    if (!$dara.isNull(request.hnswEfConstruction)) {
      query["HnswEfConstruction"] = request.hnswEfConstruction;
    }

    if (!$dara.isNull(request.hnswM)) {
      query["HnswM"] = request.hnswM;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pqEnable)) {
      query["PqEnable"] = request.pqEnable;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVectorIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVectorIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateVectorIndexResponse({}));
  }

  /**
   * Create Vector Index
   * 
   * @param request - CreateVectorIndexRequest
   * @returns CreateVectorIndexResponse
   */
  async createVectorIndex(request: $_model.CreateVectorIndexRequest): Promise<$_model.CreateVectorIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVectorIndexWithOptions(request, runtime);
  }

  /**
   * Delete AI Node
   * 
   * @remarks
   *   Subscription instances cannot be manually released. They are automatically released when they expire.
   * *   You can call this operation to release pay-as-you-go instances only when they are in the **Running** state.
   * 
   * @param request - DeleteAINodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAINodeResponse
   */
  async deleteAINodeWithOptions(request: $_model.DeleteAINodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAINodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.AINodeNum)) {
      query["AINodeNum"] = request.AINodeNum;
    }

    if (!$dara.isNull(request.AINodePoolId)) {
      query["AINodePoolId"] = request.AINodePoolId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAINode",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAINodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAINodeResponse({}));
  }

  /**
   * Delete AI Node
   * 
   * @remarks
   *   Subscription instances cannot be manually released. They are automatically released when they expire.
   * *   You can call this operation to release pay-as-you-go instances only when they are in the **Running** state.
   * 
   * @param request - DeleteAINodeRequest
   * @returns DeleteAINodeResponse
   */
  async deleteAINode(request: $_model.DeleteAINodeRequest): Promise<$_model.DeleteAINodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAINodeWithOptions(request, runtime);
  }

  /**
   * 删除数据库账号
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccountResponse({}));
  }

  /**
   * 删除数据库账号
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a backup set. You can call this operation to delete only physical backup sets that are manually backed up.
   * 
   * @param request - DeleteBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupResponse
   */
  async deleteBackupWithOptions(request: $_model.DeleteBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupResponse({}));
  }

  /**
   * Deletes a backup set. You can call this operation to delete only physical backup sets that are manually backed up.
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * Deletes a vector collection.
   * 
   * @param request - DeleteCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCollectionResponse
   */
  async deleteCollectionWithOptions(request: $_model.DeleteCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCollectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCollectionResponse({}));
  }

  /**
   * Deletes a vector collection.
   * 
   * @param request - DeleteCollectionRequest
   * @returns DeleteCollectionResponse
   */
  async deleteCollection(request: $_model.DeleteCollectionRequest): Promise<$_model.DeleteCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCollectionWithOptions(request, runtime);
  }

  /**
   * Deletes vector data.
   * 
   * @param request - DeleteCollectionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCollectionDataResponse
   */
  async deleteCollectionDataWithOptions(request: $_model.DeleteCollectionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCollectionDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.collectionData)) {
      query["CollectionData"] = request.collectionData;
    }

    if (!$dara.isNull(request.collectionDataFilter)) {
      query["CollectionDataFilter"] = request.collectionDataFilter;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCollectionData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCollectionDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCollectionDataResponse({}));
  }

  /**
   * Deletes vector data.
   * 
   * @param request - DeleteCollectionDataRequest
   * @returns DeleteCollectionDataResponse
   */
  async deleteCollectionData(request: $_model.DeleteCollectionDataRequest): Promise<$_model.DeleteCollectionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCollectionDataWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   Subscription instances cannot be manually released. They are automatically released when they expire.
   * *   You can call this operation to release pay-as-you-go instances only when they are in the **Running** state.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstanceWithOptions(request: $_model.DeleteDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceResponse({}));
  }

  /**
   * Releases a pay-as-you-go AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   Subscription instances cannot be manually released. They are automatically released when they expire.
   * *   You can call this operation to release pay-as-you-go instances only when they are in the **Running** state.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDBInstanceRequest
   * @returns DeleteDBInstanceResponse
   */
  async deleteDBInstance(request: $_model.DeleteDBInstanceRequest): Promise<$_model.DeleteDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceWithOptions(request, runtime);
  }

  /**
   * 删除IP分组
   * 
   * @param request - DeleteDBInstanceIPArrayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstanceIPArrayResponse
   */
  async deleteDBInstanceIPArrayWithOptions(request: $_model.DeleteDBInstanceIPArrayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstanceIPArrayResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.IPArrayName)) {
      query["IPArrayName"] = request.IPArrayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstanceIPArray",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstanceIPArrayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstanceIPArrayResponse({}));
  }

  /**
   * 删除IP分组
   * 
   * @param request - DeleteDBInstanceIPArrayRequest
   * @returns DeleteDBInstanceIPArrayResponse
   */
  async deleteDBInstanceIPArray(request: $_model.DeleteDBInstanceIPArrayRequest): Promise<$_model.DeleteDBInstanceIPArrayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstanceIPArrayWithOptions(request, runtime);
  }

  /**
   * Deletes a plan from an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * If you no longer need a plan, you can call this operation to delete the plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDBInstancePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBInstancePlanResponse
   */
  async deleteDBInstancePlanWithOptions(request: $_model.DeleteDBInstancePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBInstancePlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBInstancePlan",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBInstancePlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBInstancePlanResponse({}));
  }

  /**
   * Deletes a plan from an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * If you no longer need a plan, you can call this operation to delete the plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteDBInstancePlanRequest
   * @returns DeleteDBInstancePlanResponse
   */
  async deleteDBInstancePlan(request: $_model.DeleteDBInstancePlanRequest): Promise<$_model.DeleteDBInstancePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBInstancePlanWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group.
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroupWithOptions(request: $_model.DeleteDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBResourceGroupResponse({}));
  }

  /**
   * Deletes a resource group.
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroup(request: $_model.DeleteDBResourceGroupRequest): Promise<$_model.DeleteDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * 删除数据库
   * 
   * @param request - DeleteDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabaseWithOptions(request: $_model.DeleteDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatabase",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatabaseResponse({}));
  }

  /**
   * 删除数据库
   * 
   * @param request - DeleteDatabaseRequest
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabase(request: $_model.DeleteDatabaseRequest): Promise<$_model.DeleteDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  /**
   * Delete Document
   * 
   * @param request - DeleteDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentResponse
   */
  async deleteDocumentWithOptions(request: $_model.DeleteDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocument",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentResponse({}));
  }

  /**
   * Delete Document
   * 
   * @param request - DeleteDocumentRequest
   * @returns DeleteDocumentResponse
   */
  async deleteDocument(request: $_model.DeleteDocumentRequest): Promise<$_model.DeleteDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentWithOptions(request, runtime);
  }

  /**
   * Delete Knowledge Base
   * 
   * @param request - DeleteDocumentCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDocumentCollectionResponse
   */
  async deleteDocumentCollectionWithOptions(request: $_model.DeleteDocumentCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDocumentCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDocumentCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDocumentCollectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDocumentCollectionResponse({}));
  }

  /**
   * Delete Knowledge Base
   * 
   * @param request - DeleteDocumentCollectionRequest
   * @returns DeleteDocumentCollectionResponse
   */
  async deleteDocumentCollection(request: $_model.DeleteDocumentCollectionRequest): Promise<$_model.DeleteDocumentCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDocumentCollectionWithOptions(request, runtime);
  }

  /**
   * Uninstall an extension.
   * 
   * @param request - DeleteExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExtensionResponse
   */
  async deleteExtensionWithOptions(request: $_model.DeleteExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBNames)) {
      query["DBNames"] = request.DBNames;
    }

    if (!$dara.isNull(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExtension",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExtensionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExtensionResponse({}));
  }

  /**
   * Uninstall an extension.
   * 
   * @param request - DeleteExtensionRequest
   * @returns DeleteExtensionResponse
   */
  async deleteExtension(request: $_model.DeleteExtensionRequest): Promise<$_model.DeleteExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExtensionWithOptions(request, runtime);
  }

  /**
   * Delete External Data Service
   * 
   * @param request - DeleteExternalDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExternalDataServiceResponse
   */
  async deleteExternalDataServiceWithOptions(request: $_model.DeleteExternalDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExternalDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExternalDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExternalDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExternalDataServiceResponse({}));
  }

  /**
   * Delete External Data Service
   * 
   * @param request - DeleteExternalDataServiceRequest
   * @returns DeleteExternalDataServiceResponse
   */
  async deleteExternalDataService(request: $_model.DeleteExternalDataServiceRequest): Promise<$_model.DeleteExternalDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExternalDataServiceWithOptions(request, runtime);
  }

  /**
   * 删除hadoop数据源
   * 
   * @param request - DeleteHadoopDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHadoopDataSourceResponse
   */
  async deleteHadoopDataSourceWithOptions(request: $_model.DeleteHadoopDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHadoopDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHadoopDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHadoopDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHadoopDataSourceResponse({}));
  }

  /**
   * 删除hadoop数据源
   * 
   * @param request - DeleteHadoopDataSourceRequest
   * @returns DeleteHadoopDataSourceResponse
   */
  async deleteHadoopDataSource(request: $_model.DeleteHadoopDataSourceRequest): Promise<$_model.DeleteHadoopDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHadoopDataSourceWithOptions(request, runtime);
  }

  /**
   * Deletes an index.
   * 
   * @param request - DeleteIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
   */
  async deleteIndexWithOptions(request: $_model.DeleteIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.indexName)) {
      query["IndexName"] = request.indexName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexResponse({}));
  }

  /**
   * Deletes an index.
   * 
   * @param request - DeleteIndexRequest
   * @returns DeleteIndexResponse
   */
  async deleteIndex(request: $_model.DeleteIndexRequest): Promise<$_model.DeleteIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIndexWithOptions(request, runtime);
  }

  /**
   * Delete JDBC data source
   * 
   * @param request - DeleteJDBCDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJDBCDataSourceResponse
   */
  async deleteJDBCDataSourceWithOptions(request: $_model.DeleteJDBCDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJDBCDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJDBCDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJDBCDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJDBCDataSourceResponse({}));
  }

  /**
   * Delete JDBC data source
   * 
   * @param request - DeleteJDBCDataSourceRequest
   * @returns DeleteJDBCDataSourceResponse
   */
  async deleteJDBCDataSource(request: $_model.DeleteJDBCDataSourceRequest): Promise<$_model.DeleteJDBCDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteJDBCDataSourceWithOptions(request, runtime);
  }

  /**
   * Delete Model Service
   * 
   * @remarks
   * Deletes a model service.
   * 
   * @param request - DeleteModelServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelServiceResponse
   */
  async deleteModelServiceWithOptions(request: $_model.DeleteModelServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.modelServiceId)) {
      query["ModelServiceId"] = request.modelServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelServiceResponse({}));
  }

  /**
   * Delete Model Service
   * 
   * @remarks
   * Deletes a model service.
   * 
   * @param request - DeleteModelServiceRequest
   * @returns DeleteModelServiceResponse
   */
  async deleteModelService(request: $_model.DeleteModelServiceRequest): Promise<$_model.DeleteModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace.
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * Deletes a namespace.
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * 关闭私有RAG服务
   * 
   * @param request - DeletePrivateRAGServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateRAGServiceResponse
   */
  async deletePrivateRAGServiceWithOptions(request: $_model.DeletePrivateRAGServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrivateRAGServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrivateRAGService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrivateRAGServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrivateRAGServiceResponse({}));
  }

  /**
   * 关闭私有RAG服务
   * 
   * @param request - DeletePrivateRAGServiceRequest
   * @returns DeletePrivateRAGServiceResponse
   */
  async deletePrivateRAGService(request: $_model.DeletePrivateRAGServiceRequest): Promise<$_model.DeletePrivateRAGServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrivateRAGServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a remote AnalyticDB data source.
   * 
   * @param request - DeleteRemoteADBDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRemoteADBDataSourceResponse
   */
  async deleteRemoteADBDataSourceWithOptions(request: $_model.DeleteRemoteADBDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRemoteADBDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.localDBInstanceId)) {
      query["LocalDBInstanceId"] = request.localDBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRemoteADBDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRemoteADBDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRemoteADBDataSourceResponse({}));
  }

  /**
   * Deletes a remote AnalyticDB data source.
   * 
   * @param request - DeleteRemoteADBDataSourceRequest
   * @returns DeleteRemoteADBDataSourceResponse
   */
  async deleteRemoteADBDataSource(request: $_model.DeleteRemoteADBDataSourceRequest): Promise<$_model.DeleteRemoteADBDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRemoteADBDataSourceWithOptions(request, runtime);
  }

  /**
   * Deletes the access credentials of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DeleteSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretResponse
   */
  async deleteSecretWithOptions(request: $_model.DeleteSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecret",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretResponse({}));
  }

  /**
   * Deletes the access credentials of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DeleteSecretRequest
   * @returns DeleteSecretResponse
   */
  async deleteSecret(request: $_model.DeleteSecretRequest): Promise<$_model.DeleteSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecretWithOptions(request, runtime);
  }

  /**
   * Deletes a real-time data service.
   * 
   * @param request - DeleteStreamingDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStreamingDataServiceResponse
   */
  async deleteStreamingDataServiceWithOptions(request: $_model.DeleteStreamingDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStreamingDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStreamingDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStreamingDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStreamingDataServiceResponse({}));
  }

  /**
   * Deletes a real-time data service.
   * 
   * @param request - DeleteStreamingDataServiceRequest
   * @returns DeleteStreamingDataServiceResponse
   */
  async deleteStreamingDataService(request: $_model.DeleteStreamingDataServiceRequest): Promise<$_model.DeleteStreamingDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamingDataServiceWithOptions(request, runtime);
  }

  /**
   * Deletes a real-time data source.
   * 
   * @param request - DeleteStreamingDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStreamingDataSourceResponse
   */
  async deleteStreamingDataSourceWithOptions(request: $_model.DeleteStreamingDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStreamingDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStreamingDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStreamingDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStreamingDataSourceResponse({}));
  }

  /**
   * Deletes a real-time data source.
   * 
   * @param request - DeleteStreamingDataSourceRequest
   * @returns DeleteStreamingDataSourceResponse
   */
  async deleteStreamingDataSource(request: $_model.DeleteStreamingDataSourceRequest): Promise<$_model.DeleteStreamingDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamingDataSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a real-time data service job.
   * 
   * @param request - DeleteStreamingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStreamingJobResponse
   */
  async deleteStreamingJobWithOptions(request: $_model.DeleteStreamingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStreamingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStreamingJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStreamingJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStreamingJobResponse({}));
  }

  /**
   * Deletes a real-time data service job.
   * 
   * @param request - DeleteStreamingJobRequest
   * @returns DeleteStreamingJobResponse
   */
  async deleteStreamingJob(request: $_model.DeleteStreamingJobRequest): Promise<$_model.DeleteStreamingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStreamingJobWithOptions(request, runtime);
  }

  /**
   * Deletes a Supabase project.
   * 
   * @remarks
   *   You can call this operation to delete a Supabase project.
   * 
   * @param request - DeleteSupabaseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSupabaseProjectResponse
   */
  async deleteSupabaseProjectWithOptions(request: $_model.DeleteSupabaseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSupabaseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSupabaseProject",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSupabaseProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSupabaseProjectResponse({}));
  }

  /**
   * Deletes a Supabase project.
   * 
   * @remarks
   *   You can call this operation to delete a Supabase project.
   * 
   * @param request - DeleteSupabaseProjectRequest
   * @returns DeleteSupabaseProjectResponse
   */
  async deleteSupabaseProject(request: $_model.DeleteSupabaseProjectRequest): Promise<$_model.DeleteSupabaseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSupabaseProjectWithOptions(request, runtime);
  }

  /**
   * Deletes a vector index.
   * 
   * @param request - DeleteVectorIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVectorIndexResponse
   */
  async deleteVectorIndexWithOptions(request: $_model.DeleteVectorIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVectorIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVectorIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVectorIndexResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVectorIndexResponse({}));
  }

  /**
   * Deletes a vector index.
   * 
   * @param request - DeleteVectorIndexRequest
   * @returns DeleteVectorIndexResponse
   */
  async deleteVectorIndex(request: $_model.DeleteVectorIndexRequest): Promise<$_model.DeleteVectorIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVectorIndexWithOptions(request, runtime);
  }

  /**
   * 部署私有RAG服务
   * 
   * @param request - DeployPrivateRAGServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployPrivateRAGServiceResponse
   */
  async deployPrivateRAGServiceWithOptions(request: $_model.DeployPrivateRAGServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployPrivateRAGServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployPrivateRAGService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployPrivateRAGServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeployPrivateRAGServiceResponse({}));
  }

  /**
   * 部署私有RAG服务
   * 
   * @param request - DeployPrivateRAGServiceRequest
   * @returns DeployPrivateRAGServiceResponse
   */
  async deployPrivateRAGService(request: $_model.DeployPrivateRAGServiceRequest): Promise<$_model.DeployPrivateRAGServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployPrivateRAGServiceWithOptions(request, runtime);
  }

  /**
   * Queries the information about database accounts for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is called to query the information of the privileged account in an AnalyticDB for PostgreSQL instance, such as its state, description, and the instance.
   * ## Limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountsResponse({}));
  }

  /**
   * Queries the information about database accounts for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is called to query the information of the privileged account in an AnalyticDB for PostgreSQL instance, such as its state, description, and the instance.
   * ## Limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries active SQL records.
   * 
   * @param request - DescribeActiveSQLRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveSQLRecordsResponse
   */
  async describeActiveSQLRecordsWithOptions(request: $_model.DescribeActiveSQLRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveSQLRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxDuration)) {
      query["MaxDuration"] = request.maxDuration;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveSQLRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveSQLRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveSQLRecordsResponse({}));
  }

  /**
   * Queries active SQL records.
   * 
   * @param request - DescribeActiveSQLRecordsRequest
   * @returns DescribeActiveSQLRecordsResponse
   */
  async describeActiveSQLRecords(request: $_model.DescribeActiveSQLRecordsRequest): Promise<$_model.DescribeActiveSQLRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveSQLRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the information about available resources of AnalyticDB for PostgreSQL.
   * 
   * @remarks
   * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available resources within a zone.
   * 
   * @param request - DescribeAvailableResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourcesResponse
   */
  async describeAvailableResourcesWithOptions(request: $_model.DescribeAvailableResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableResourcesResponse({}));
  }

  /**
   * Queries the information about available resources of AnalyticDB for PostgreSQL.
   * 
   * @remarks
   * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available resources within a zone.
   * 
   * @param request - DescribeAvailableResourcesRequest
   * @returns DescribeAvailableResourcesResponse
   */
  async describeAvailableResources(request: $_model.DescribeAvailableResourcesRequest): Promise<$_model.DescribeAvailableResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a backup job.
   * 
   * @param request - DescribeBackupJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupJobResponse
   */
  async describeBackupJobWithOptions(request: $_model.DescribeBackupJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupJobId)) {
      query["BackupJobId"] = request.backupJobId;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupJobResponse({}));
  }

  /**
   * Queries the information about a backup job.
   * 
   * @param request - DescribeBackupJobRequest
   * @returns DescribeBackupJobResponse
   */
  async describeBackupJob(request: $_model.DescribeBackupJobRequest): Promise<$_model.DescribeBackupJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupJobWithOptions(request, runtime);
  }

  /**
   * Queries the backup policy of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the backup settings of an AnalyticDB for PostgreSQL instance in elastic storage mode. Periodically backing data can prevent data loss. For more information about how to modify backup policies, see [ModifyBackupPolicy](https://help.aliyun.com/document_detail/210095.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPolicyResponse({}));
  }

  /**
   * Queries the backup policy of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the backup settings of an AnalyticDB for PostgreSQL instance in elastic storage mode. Periodically backing data can prevent data loss. For more information about how to modify backup policies, see [ModifyBackupPolicy](https://help.aliyun.com/document_detail/210095.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a vector collection.
   * 
   * @param request - DescribeCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCollectionResponse
   */
  async describeCollectionWithOptions(request: $_model.DescribeCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCollectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCollectionResponse({}));
  }

  /**
   * Queries the information about a vector collection.
   * 
   * @param request - DescribeCollectionRequest
   * @returns DescribeCollectionResponse
   */
  async describeCollection(request: $_model.DescribeCollectionRequest): Promise<$_model.DescribeCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCollectionWithOptions(request, runtime);
  }

  /**
   * Queries the information about an index creation job.
   * 
   * @param request - DescribeCreateIndexJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCreateIndexJobResponse
   */
  async describeCreateIndexJobWithOptions(request: $_model.DescribeCreateIndexJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreateIndexJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCreateIndexJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCreateIndexJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCreateIndexJobResponse({}));
  }

  /**
   * Queries the information about an index creation job.
   * 
   * @param request - DescribeCreateIndexJobRequest
   * @returns DescribeCreateIndexJobResponse
   */
  async describeCreateIndexJob(request: $_model.DescribeCreateIndexJobRequest): Promise<$_model.DescribeCreateIndexJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreateIndexJobWithOptions(request, runtime);
  }

  /**
   * Queries a list of nodes in an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * ##
   * You can call this operation to query the information about coordinator and compute nodes in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBClusterNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterNodeResponse
   */
  async describeDBClusterNodeWithOptions(request: $_model.DescribeDBClusterNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterNode",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterNodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterNodeResponse({}));
  }

  /**
   * Queries a list of nodes in an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * ##
   * You can call this operation to query the information about coordinator and compute nodes in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBClusterNodeRequest
   * @returns DescribeDBClusterNodeResponse
   */
  async describeDBClusterNode(request: $_model.DescribeDBClusterNodeRequest): Promise<$_model.DescribeDBClusterNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterNodeWithOptions(request, runtime);
  }

  /**
   * Queries the information about performance metrics of an AnalyticDB for PostgreSQL instance within a time range.
   * 
   * @remarks
   * You can query monitoring information only within the last 30 days.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformanceWithOptions(request: $_model.DescribeDBClusterPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.nodes)) {
      query["Nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterPerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterPerformanceResponse({}));
  }

  /**
   * Queries the information about performance metrics of an AnalyticDB for PostgreSQL instance within a time range.
   * 
   * @remarks
   * You can query monitoring information only within the last 30 days.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: $_model.DescribeDBClusterPerformanceRequest): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Query detailed information about the instance.
   * 
   * @remarks
   * ## Usage Instructions
   * This interface is generally used to view information such as the specifications, network type, and instance status of AnalyticDB for PostgreSQL instances.
   * ## QPS Limitation
   * The default single-user QPS limit for this interface is 1000 times/second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please use it reasonably.
   * <props="china">The QPS in this document is only a default reference value. For accurate information, please refer to the [API Rate Quota List](https://quotas.console.aliyun.com/flow-control-products/gpdb/quotas).
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttributeWithOptions(request: $_model.DescribeDBInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceAttribute",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceAttributeResponse({}));
  }

  /**
   * Query detailed information about the instance.
   * 
   * @remarks
   * ## Usage Instructions
   * This interface is generally used to view information such as the specifications, network type, and instance status of AnalyticDB for PostgreSQL instances.
   * ## QPS Limitation
   * The default single-user QPS limit for this interface is 1000 times/second. If the limit is exceeded, API calls will be throttled, which may affect your business. Please use it reasonably.
   * <props="china">The QPS in this document is only a default reference value. For accurate information, please refer to the [API Rate Quota List](https://quotas.console.aliyun.com/flow-control-products/gpdb/quotas).
   * 
   * @param request - DescribeDBInstanceAttributeRequest
   * @returns DescribeDBInstanceAttributeResponse
   */
  async describeDBInstanceAttribute(request: $_model.DescribeDBInstanceAttributeRequest): Promise<$_model.DescribeDBInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the information about data bloat for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of data bloat on an AnalyticDB for PostgreSQL instance in elastic storage mode. The minor version of the instance must be V6.3.10.1 or later. For more information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceDataBloatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceDataBloatResponse
   */
  async describeDBInstanceDataBloatWithOptions(request: $_model.DescribeDBInstanceDataBloatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceDataBloatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceDataBloat",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceDataBloatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceDataBloatResponse({}));
  }

  /**
   * Queries the information about data bloat for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of data bloat on an AnalyticDB for PostgreSQL instance in elastic storage mode. The minor version of the instance must be V6.3.10.1 or later. For more information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceDataBloatRequest
   * @returns DescribeDBInstanceDataBloatResponse
   */
  async describeDBInstanceDataBloat(request: $_model.DescribeDBInstanceDataBloatRequest): Promise<$_model.DescribeDBInstanceDataBloatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceDataBloatWithOptions(request, runtime);
  }

  /**
   * Queries the information about data skew for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To prevent data skew from affecting your database service, you can call this operation to query the details about data skew on an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceDataSkewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceDataSkewResponse
   */
  async describeDBInstanceDataSkewWithOptions(request: $_model.DescribeDBInstanceDataSkewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceDataSkewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceDataSkew",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceDataSkewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceDataSkewResponse({}));
  }

  /**
   * Queries the information about data skew for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To prevent data skew from affecting your database service, you can call this operation to query the details about data skew on an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceDataSkewRequest
   * @returns DescribeDBInstanceDataSkewResponse
   */
  async describeDBInstanceDataSkew(request: $_model.DescribeDBInstanceDataSkewRequest): Promise<$_model.DescribeDBInstanceDataSkewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceDataSkewWithOptions(request, runtime);
  }

  /**
   * Queries the information about nodes in an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the distribution and states of coordinator and compute nodes in an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBInstanceDiagnosisSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceDiagnosisSummaryResponse
   */
  async describeDBInstanceDiagnosisSummaryWithOptions(request: $_model.DescribeDBInstanceDiagnosisSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceDiagnosisSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.rolePreferd)) {
      query["RolePreferd"] = request.rolePreferd;
    }

    if (!$dara.isNull(request.startStatus)) {
      query["StartStatus"] = request.startStatus;
    }

    if (!$dara.isNull(request.syncMode)) {
      query["SyncMode"] = request.syncMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceDiagnosisSummary",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceDiagnosisSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceDiagnosisSummaryResponse({}));
  }

  /**
   * Queries the information about nodes in an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the distribution and states of coordinator and compute nodes in an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBInstanceDiagnosisSummaryRequest
   * @returns DescribeDBInstanceDiagnosisSummaryResponse
   */
  async describeDBInstanceDiagnosisSummary(request: $_model.DescribeDBInstanceDiagnosisSummaryRequest): Promise<$_model.DescribeDBInstanceDiagnosisSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceDiagnosisSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the error logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the error logs of an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceErrorLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceErrorLogResponse
   */
  async describeDBInstanceErrorLogWithOptions(request: $_model.DescribeDBInstanceErrorLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceErrorLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.logLevel)) {
      query["LogLevel"] = request.logLevel;
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

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceErrorLog",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceErrorLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceErrorLogResponse({}));
  }

  /**
   * Queries the error logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the error logs of an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceErrorLogRequest
   * @returns DescribeDBInstanceErrorLogResponse
   */
  async describeDBInstanceErrorLog(request: $_model.DescribeDBInstanceErrorLogRequest): Promise<$_model.DescribeDBInstanceErrorLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceErrorLogWithOptions(request, runtime);
  }

  /**
   * Queries the whitelists of IP addresses that are allowed to access an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the whitelists of IP addresses that are allowed to access an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceIPArrayListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceIPArrayListResponse
   */
  async describeDBInstanceIPArrayListWithOptions(request: $_model.DescribeDBInstanceIPArrayListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceIPArrayListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceIPArrayName)) {
      query["DBInstanceIPArrayName"] = request.DBInstanceIPArrayName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceIPArrayList",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceIPArrayListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceIPArrayListResponse({}));
  }

  /**
   * Queries the whitelists of IP addresses that are allowed to access an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the whitelists of IP addresses that are allowed to access an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstanceIPArrayListRequest
   * @returns DescribeDBInstanceIPArrayListResponse
   */
  async describeDBInstanceIPArrayList(request: $_model.DescribeDBInstanceIPArrayListRequest): Promise<$_model.DescribeDBInstanceIPArrayListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceIPArrayListWithOptions(request, runtime);
  }

  /**
   * Queries the index usage of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * Appropriate indexes can accelerate database queries. You can call this operation to query the index usage of an AnalyticDB for PostgreSQL instance.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * 
   * @param request - DescribeDBInstanceIndexUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceIndexUsageResponse
   */
  async describeDBInstanceIndexUsageWithOptions(request: $_model.DescribeDBInstanceIndexUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceIndexUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceIndexUsage",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceIndexUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceIndexUsageResponse({}));
  }

  /**
   * Queries the index usage of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * Appropriate indexes can accelerate database queries. You can call this operation to query the index usage of an AnalyticDB for PostgreSQL instance.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * 
   * @param request - DescribeDBInstanceIndexUsageRequest
   * @returns DescribeDBInstanceIndexUsageResponse
   */
  async describeDBInstanceIndexUsage(request: $_model.DescribeDBInstanceIndexUsageRequest): Promise<$_model.DescribeDBInstanceIndexUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceIndexUsageWithOptions(request, runtime);
  }

  /**
   * Queries the connection information of an instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfoWithOptions(request: $_model.DescribeDBInstanceNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceNetInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceNetInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceNetInfoResponse({}));
  }

  /**
   * Queries the connection information of an instance.
   * 
   * @param request - DescribeDBInstanceNetInfoRequest
   * @returns DescribeDBInstanceNetInfoResponse
   */
  async describeDBInstanceNetInfo(request: $_model.DescribeDBInstanceNetInfoRequest): Promise<$_model.DescribeDBInstanceNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about performance metrics of an AnalyticDB for PostgreSQL instance within a time range.
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformanceWithOptions(request: $_model.DescribeDBInstancePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstancePerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancePerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancePerformanceResponse({}));
  }

  /**
   * Queries the information about performance metrics of an AnalyticDB for PostgreSQL instance within a time range.
   * 
   * @param request - DescribeDBInstancePerformanceRequest
   * @returns DescribeDBInstancePerformanceResponse
   */
  async describeDBInstancePerformance(request: $_model.DescribeDBInstancePerformanceRequest): Promise<$_model.DescribeDBInstancePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancePerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about plans for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of plans for an AnalyticDB for PostgreSQL instance in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstancePlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancePlansResponse
   */
  async describeDBInstancePlansWithOptions(request: $_model.DescribeDBInstancePlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancePlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.planCreateDate)) {
      query["PlanCreateDate"] = request.planCreateDate;
    }

    if (!$dara.isNull(request.planDesc)) {
      query["PlanDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planScheduleType)) {
      query["PlanScheduleType"] = request.planScheduleType;
    }

    if (!$dara.isNull(request.planType)) {
      query["PlanType"] = request.planType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstancePlans",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancePlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancePlansResponse({}));
  }

  /**
   * Queries the information about plans for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of plans for an AnalyticDB for PostgreSQL instance in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstancePlansRequest
   * @returns DescribeDBInstancePlansResponse
   */
  async describeDBInstancePlans(request: $_model.DescribeDBInstancePlansRequest): Promise<$_model.DescribeDBInstancePlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancePlansWithOptions(request, runtime);
  }

  /**
   * Queries the SSL information about an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSLWithOptions(request: $_model.DescribeDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceSSL",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceSSLResponse({}));
  }

  /**
   * Queries the SSL information about an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBInstanceSSLRequest
   * @returns DescribeDBInstanceSSLResponse
   */
  async describeDBInstanceSSL(request: $_model.DescribeDBInstanceSSLRequest): Promise<$_model.DescribeDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Queries the maximum performance of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBInstanceSupportMaxPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstanceSupportMaxPerformanceResponse
   */
  async describeDBInstanceSupportMaxPerformanceWithOptions(request: $_model.DescribeDBInstanceSupportMaxPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstanceSupportMaxPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstanceSupportMaxPerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstanceSupportMaxPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstanceSupportMaxPerformanceResponse({}));
  }

  /**
   * Queries the maximum performance of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBInstanceSupportMaxPerformanceRequest
   * @returns DescribeDBInstanceSupportMaxPerformanceResponse
   */
  async describeDBInstanceSupportMaxPerformance(request: $_model.DescribeDBInstanceSupportMaxPerformanceRequest): Promise<$_model.DescribeDBInstanceSupportMaxPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstanceSupportMaxPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries a list of AnalyticDB for PostgreSQL instances.
   * 
   * @remarks
   * ##
   * You can call this operation to query the instance types, network types, and states of AnalyticDB for PostgreSQL instances within a region.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - DescribeDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstancesWithOptions(tmpReq: $_model.DescribeDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeDBInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.DBInstanceCategories)) {
      request.DBInstanceCategoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceCategories, "DBInstanceCategories", "simple");
    }

    if (!$dara.isNull(tmpReq.DBInstanceModes)) {
      request.DBInstanceModesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceModes, "DBInstanceModes", "simple");
    }

    if (!$dara.isNull(tmpReq.DBInstanceStatuses)) {
      request.DBInstanceStatusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceStatuses, "DBInstanceStatuses", "simple");
    }

    if (!$dara.isNull(tmpReq.instanceDeployTypes)) {
      request.instanceDeployTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceDeployTypes, "InstanceDeployTypes", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceCategoriesShrink)) {
      query["DBInstanceCategories"] = request.DBInstanceCategoriesShrink;
    }

    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!$dara.isNull(request.DBInstanceModesShrink)) {
      query["DBInstanceModes"] = request.DBInstanceModesShrink;
    }

    if (!$dara.isNull(request.DBInstanceStatusesShrink)) {
      query["DBInstanceStatuses"] = request.DBInstanceStatusesShrink;
    }

    if (!$dara.isNull(request.instanceDeployTypesShrink)) {
      query["InstanceDeployTypes"] = request.instanceDeployTypesShrink;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBInstances",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInstancesResponse({}));
  }

  /**
   * Queries a list of AnalyticDB for PostgreSQL instances.
   * 
   * @remarks
   * ##
   * You can call this operation to query the instance types, network types, and states of AnalyticDB for PostgreSQL instances within a region.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDBInstancesRequest
   * @returns DescribeDBInstancesResponse
   */
  async describeDBInstances(request: $_model.DescribeDBInstancesRequest): Promise<$_model.DescribeDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource groups.
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroupWithOptions(request: $_model.DescribeDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBResourceGroupResponse({}));
  }

  /**
   * Queries the information about resource groups.
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroup(request: $_model.DescribeDBResourceGroupRequest): Promise<$_model.DescribeDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the resource management mode of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBResourceManagementModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourceManagementModeResponse
   */
  async describeDBResourceManagementModeWithOptions(request: $_model.DescribeDBResourceManagementModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBResourceManagementModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBResourceManagementMode",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBResourceManagementModeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBResourceManagementModeResponse({}));
  }

  /**
   * Queries the resource management mode of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeDBResourceManagementModeRequest
   * @returns DescribeDBResourceManagementModeResponse
   */
  async describeDBResourceManagementMode(request: $_model.DescribeDBResourceManagementModeRequest): Promise<$_model.DescribeDBResourceManagementModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBResourceManagementModeWithOptions(request, runtime);
  }

  /**
   * Queries the information about minor versions of AnalyticDB for PostgreSQL instances.
   * 
   * @param request - DescribeDBVersionInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBVersionInfosResponse
   */
  async describeDBVersionInfosWithOptions(request: $_model.DescribeDBVersionInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBVersionInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceMode)) {
      query["DBInstanceMode"] = request.DBInstanceMode;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBVersionInfos",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBVersionInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBVersionInfosResponse({}));
  }

  /**
   * Queries the information about minor versions of AnalyticDB for PostgreSQL instances.
   * 
   * @param request - DescribeDBVersionInfosRequest
   * @returns DescribeDBVersionInfosResponse
   */
  async describeDBVersionInfos(request: $_model.DescribeDBVersionInfosRequest): Promise<$_model.DescribeDBVersionInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBVersionInfosWithOptions(request, runtime);
  }

  /**
   * Queries a list of backup sets of full backup or point-in-time backup for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query a list of backup sets and backup details only for instances in elastic storage mode.
   * 
   * @param request - DescribeDataBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataBackupsResponse
   */
  async describeDataBackupsWithOptions(request: $_model.DescribeDataBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
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
      action: "DescribeDataBackups",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataBackupsResponse({}));
  }

  /**
   * Queries a list of backup sets of full backup or point-in-time backup for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query a list of backup sets and backup details only for instances in elastic storage mode.
   * 
   * @param request - DescribeDataBackupsRequest
   * @returns DescribeDataBackupsResponse
   */
  async describeDataBackups(request: $_model.DescribeDataBackupsRequest): Promise<$_model.DescribeDataBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the data redistribution information about an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
   * 
   * @param request - DescribeDataReDistributeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataReDistributeInfoResponse
   */
  async describeDataReDistributeInfoWithOptions(request: $_model.DescribeDataReDistributeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataReDistributeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataReDistributeInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataReDistributeInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataReDistributeInfoResponse({}));
  }

  /**
   * Queries the data redistribution information about an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
   * 
   * @param request - DescribeDataReDistributeInfoRequest
   * @returns DescribeDataReDistributeInfoResponse
   */
  async describeDataReDistributeInfo(request: $_model.DescribeDataReDistributeInfoRequest): Promise<$_model.DescribeDataReDistributeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataReDistributeInfoWithOptions(request, runtime);
  }

  /**
   * Queries the state of data sharing for AnalyticDB for PostgreSQL instances.
   * 
   * @remarks
   * Data sharing is supported only for instances in Serverless mode.
   * 
   * @param request - DescribeDataShareInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataShareInstancesResponse
   */
  async describeDataShareInstancesWithOptions(request: $_model.DescribeDataShareInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataShareInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataShareInstances",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataShareInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataShareInstancesResponse({}));
  }

  /**
   * Queries the state of data sharing for AnalyticDB for PostgreSQL instances.
   * 
   * @remarks
   * Data sharing is supported only for instances in Serverless mode.
   * 
   * @param request - DescribeDataShareInstancesRequest
   * @returns DescribeDataShareInstancesResponse
   */
  async describeDataShareInstances(request: $_model.DescribeDataShareInstancesRequest): Promise<$_model.DescribeDataShareInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataShareInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the information about data sharing performance metrics.
   * 
   * @remarks
   * You can call this operation to query the details of data sharing performance metrics for an AnalyticDB for PostgreSQL instance in Serverless mode, such as the number of shared topics and the amount of data shared.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataSharePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSharePerformanceResponse
   */
  async describeDataSharePerformanceWithOptions(request: $_model.DescribeDataSharePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataSharePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataSharePerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataSharePerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataSharePerformanceResponse({}));
  }

  /**
   * Queries the information about data sharing performance metrics.
   * 
   * @remarks
   * You can call this operation to query the details of data sharing performance metrics for an AnalyticDB for PostgreSQL instance in Serverless mode, such as the number of shared topics and the amount of data shared.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDataSharePerformanceRequest
   * @returns DescribeDataSharePerformanceResponse
   */
  async describeDataSharePerformance(request: $_model.DescribeDataSharePerformanceRequest): Promise<$_model.DescribeDataSharePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSharePerformanceWithOptions(request, runtime);
  }

  /**
   * 描述数据库
   * 
   * @param request - DescribeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseResponse
   */
  async describeDatabaseWithOptions(request: $_model.DescribeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabase",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabaseResponse({}));
  }

  /**
   * 描述数据库
   * 
   * @param request - DescribeDatabaseRequest
   * @returns DescribeDatabaseResponse
   */
  async describeDatabase(request: $_model.DescribeDatabaseRequest): Promise<$_model.DescribeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries all databases and database accounts for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To facilitate management, you can call this operation to query all databases and database accounts on an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensionsWithOptions(request: $_model.DescribeDiagnosisDimensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisDimensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisDimensions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisDimensionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisDimensionsResponse({}));
  }

  /**
   * Queries all databases and database accounts for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To facilitate management, you can call this operation to query all databases and database accounts on an AnalyticDB for PostgreSQL instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensions(request: $_model.DescribeDiagnosisDimensionsRequest): Promise<$_model.DescribeDiagnosisDimensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the details of query execution on an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of query execution on an AnalyticDB for PostgreSQL instance in elastic storage mode within a specified time range.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDiagnosisMonitorPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformanceWithOptions(request: $_model.DescribeDiagnosisMonitorPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisMonitorPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisMonitorPerformance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisMonitorPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisMonitorPerformanceResponse({}));
  }

  /**
   * Queries the details of query execution on an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of query execution on an AnalyticDB for PostgreSQL instance in elastic storage mode within a specified time range.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDiagnosisMonitorPerformanceRequest
   * @returns DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformance(request: $_model.DescribeDiagnosisMonitorPerformanceRequest): Promise<$_model.DescribeDiagnosisMonitorPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisMonitorPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about SQL queries for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of SQL queries on an AnalyticDB for PostgreSQL instance within a specified time range.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecordsWithOptions(request: $_model.DescribeDiagnosisRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisRecordsResponse({}));
  }

  /**
   * Queries the information about SQL queries for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of SQL queries on an AnalyticDB for PostgreSQL instance within a specified time range.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecords(request: $_model.DescribeDiagnosisRecordsRequest): Promise<$_model.DescribeDiagnosisRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a query for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the information about a query for an AnalyticDB for PostgreSQL instance, including the SQL statement, execution plan text, and execution plan tree.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfoWithOptions(request: $_model.DescribeDiagnosisSQLInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisSQLInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.queryID)) {
      query["QueryID"] = request.queryID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisSQLInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisSQLInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisSQLInfoResponse({}));
  }

  /**
   * Queries the information about a query for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the information about a query for an AnalyticDB for PostgreSQL instance, including the SQL statement, execution plan text, and execution plan tree.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfo(request: $_model.DescribeDiagnosisSQLInfoRequest): Promise<$_model.DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about a document.
   * 
   * @param request - DescribeDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDocumentResponse
   */
  async describeDocumentWithOptions(request: $_model.DescribeDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDocumentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDocument",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDocumentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDocumentResponse({}));
  }

  /**
   * Queries the information about a document.
   * 
   * @param request - DescribeDocumentRequest
   * @returns DescribeDocumentResponse
   */
  async describeDocument(request: $_model.DescribeDocumentRequest): Promise<$_model.DescribeDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDocumentWithOptions(request, runtime);
  }

  /**
   * Queries the download records of query diagnostic information for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You must call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/447700.html) operation to download the query diagnostic information before you can call this operation to query the download records and download URLs.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecordsWithOptions(request: $_model.DescribeDownloadRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.downloadTaskType)) {
      query["DownloadTaskType"] = request.downloadTaskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadRecordsResponse({}));
  }

  /**
   * Queries the download records of query diagnostic information for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You must call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/447700.html) operation to download the query diagnostic information before you can call this operation to query the download records and download URLs.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For information about how to view and update the minor version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecords(request: $_model.DescribeDownloadRecordsRequest): Promise<$_model.DescribeDownloadRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  /**
   * Get download records
   * 
   * @param request - DescribeDownloadSQLLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadSQLLogsResponse
   */
  async describeDownloadSQLLogsWithOptions(request: $_model.DescribeDownloadSQLLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadSQLLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadSQLLogs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadSQLLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadSQLLogsResponse({}));
  }

  /**
   * Get download records
   * 
   * @param request - DescribeDownloadSQLLogsRequest
   * @returns DescribeDownloadSQLLogsResponse
   */
  async describeDownloadSQLLogs(request: $_model.DescribeDownloadSQLLogsRequest): Promise<$_model.DescribeDownloadSQLLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadSQLLogsWithOptions(request, runtime);
  }

  /**
   * 获取安装在某个数据库上的插件信息
   * 
   * @param request - DescribeExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExtensionResponse
   */
  async describeExtensionWithOptions(request: $_model.DescribeExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.extensionName)) {
      query["ExtensionName"] = request.extensionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExtension",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExtensionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExtensionResponse({}));
  }

  /**
   * 获取安装在某个数据库上的插件信息
   * 
   * @param request - DescribeExtensionRequest
   * @returns DescribeExtensionResponse
   */
  async describeExtension(request: $_model.DescribeExtensionRequest): Promise<$_model.DescribeExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExtensionWithOptions(request, runtime);
  }

  /**
   * Queries the information about an external data service.
   * 
   * @param request - DescribeExternalDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExternalDataServiceResponse
   */
  async describeExternalDataServiceWithOptions(request: $_model.DescribeExternalDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExternalDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExternalDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExternalDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExternalDataServiceResponse({}));
  }

  /**
   * Queries the information about an external data service.
   * 
   * @param request - DescribeExternalDataServiceRequest
   * @returns DescribeExternalDataServiceResponse
   */
  async describeExternalDataService(request: $_model.DescribeExternalDataServiceRequest): Promise<$_model.DescribeExternalDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExternalDataServiceWithOptions(request, runtime);
  }

  /**
   * Queries E-MapReduce (EMR) Hadoop clusters in a specific virtual private cloud (VPC).
   * 
   * @param request - DescribeHadoopClustersInSameNetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHadoopClustersInSameNetResponse
   */
  async describeHadoopClustersInSameNetWithOptions(request: $_model.DescribeHadoopClustersInSameNetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHadoopClustersInSameNetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHadoopClustersInSameNet",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHadoopClustersInSameNetResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHadoopClustersInSameNetResponse({}));
  }

  /**
   * Queries E-MapReduce (EMR) Hadoop clusters in a specific virtual private cloud (VPC).
   * 
   * @param request - DescribeHadoopClustersInSameNetRequest
   * @returns DescribeHadoopClustersInSameNetResponse
   */
  async describeHadoopClustersInSameNet(request: $_model.DescribeHadoopClustersInSameNetRequest): Promise<$_model.DescribeHadoopClustersInSameNetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHadoopClustersInSameNetWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information about a Hadoop cluster.
   * 
   * @param request - DescribeHadoopConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHadoopConfigsResponse
   */
  async describeHadoopConfigsWithOptions(request: $_model.DescribeHadoopConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHadoopConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configName)) {
      query["ConfigName"] = request.configName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.emrInstanceId)) {
      query["EmrInstanceId"] = request.emrInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHadoopConfigs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHadoopConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHadoopConfigsResponse({}));
  }

  /**
   * Queries the configuration information about a Hadoop cluster.
   * 
   * @param request - DescribeHadoopConfigsRequest
   * @returns DescribeHadoopConfigsResponse
   */
  async describeHadoopConfigs(request: $_model.DescribeHadoopConfigsRequest): Promise<$_model.DescribeHadoopConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHadoopConfigsWithOptions(request, runtime);
  }

  /**
   * Obtains the configurations of a Hadoop data source.
   * 
   * @param request - DescribeHadoopDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHadoopDataSourceResponse
   */
  async describeHadoopDataSourceWithOptions(request: $_model.DescribeHadoopDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHadoopDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHadoopDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHadoopDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHadoopDataSourceResponse({}));
  }

  /**
   * Obtains the configurations of a Hadoop data source.
   * 
   * @param request - DescribeHadoopDataSourceRequest
   * @returns DescribeHadoopDataSourceResponse
   */
  async describeHadoopDataSource(request: $_model.DescribeHadoopDataSourceRequest): Promise<$_model.DescribeHadoopDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHadoopDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the health status of an AnalyticDB for PostgreSQL instance and its nodes.
   * 
   * @remarks
   * This operation is called to query the health status of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode and its coordinator and compute nodes.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthStatusResponse
   */
  async describeHealthStatusWithOptions(request: $_model.DescribeHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthStatus",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHealthStatusResponse({}));
  }

  /**
   * Queries the health status of an AnalyticDB for PostgreSQL instance and its nodes.
   * 
   * @remarks
   * This operation is called to query the health status of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode and its coordinator and compute nodes.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeHealthStatusRequest
   * @returns DescribeHealthStatusResponse
   */
  async describeHealthStatus(request: $_model.DescribeHealthStatusRequest): Promise<$_model.DescribeHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about real-time materialized views of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeIMVInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIMVInfosResponse
   */
  async describeIMVInfosWithOptions(request: $_model.DescribeIMVInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIMVInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.MVName)) {
      query["MVName"] = request.MVName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIMVInfos",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIMVInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIMVInfosResponse({}));
  }

  /**
   * Queries the information about real-time materialized views of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeIMVInfosRequest
   * @returns DescribeIMVInfosResponse
   */
  async describeIMVInfos(request: $_model.DescribeIMVInfosRequest): Promise<$_model.DescribeIMVInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIMVInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves the information about an index.
   * 
   * @param request - DescribeIndexRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIndexResponse
   */
  async describeIndexWithOptions(request: $_model.DescribeIndexRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIndexResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.indexName)) {
      query["IndexName"] = request.indexName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIndex",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIndexResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIndexResponse({}));
  }

  /**
   * Retrieves the information about an index.
   * 
   * @param request - DescribeIndexRequest
   * @returns DescribeIndexResponse
   */
  async describeIndex(request: $_model.DescribeIndexRequest): Promise<$_model.DescribeIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIndexWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a Java Database Connectivity (JDBC) data source.
   * 
   * @param request - DescribeJDBCDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJDBCDataSourceResponse
   */
  async describeJDBCDataSourceWithOptions(request: $_model.DescribeJDBCDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJDBCDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJDBCDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJDBCDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJDBCDataSourceResponse({}));
  }

  /**
   * Queries the configurations of a Java Database Connectivity (JDBC) data source.
   * 
   * @param request - DescribeJDBCDataSourceRequest
   * @returns DescribeJDBCDataSourceResponse
   */
  async describeJDBCDataSource(request: $_model.DescribeJDBCDataSourceRequest): Promise<$_model.DescribeJDBCDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJDBCDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries a list of log backups.
   * 
   * @param request - DescribeLogBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogBackupsResponse
   */
  async describeLogBackupsWithOptions(request: $_model.DescribeLogBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "DescribeLogBackups",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogBackupsResponse({}));
  }

  /**
   * Queries a list of log backups.
   * 
   * @param request - DescribeLogBackupsRequest
   * @returns DescribeLogBackupsResponse
   */
  async describeLogBackups(request: $_model.DescribeLogBackupsRequest): Promise<$_model.DescribeLogBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a model service.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This interface is used to view the details of a model service.
   * ## [](#qps-)QPS limit
   * You can call this operation up to 1,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions.We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DescribeModelServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelServiceResponse
   */
  async describeModelServiceWithOptions(request: $_model.DescribeModelServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.modelServiceId)) {
      query["ModelServiceId"] = request.modelServiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelServiceResponse({}));
  }

  /**
   * Queries the information about a model service.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This interface is used to view the details of a model service.
   * ## [](#qps-)QPS limit
   * You can call this operation up to 1,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions.We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - DescribeModelServiceRequest
   * @returns DescribeModelServiceResponse
   */
  async describeModelService(request: $_model.DescribeModelServiceRequest): Promise<$_model.DescribeModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelServiceWithOptions(request, runtime);
  }

  /**
   * Queries the parameter modification logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeModifyParameterLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModifyParameterLogResponse
   */
  async describeModifyParameterLogWithOptions(request: $_model.DescribeModifyParameterLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModifyParameterLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModifyParameterLog",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModifyParameterLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModifyParameterLogResponse({}));
  }

  /**
   * Queries the parameter modification logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeModifyParameterLogRequest
   * @returns DescribeModifyParameterLogResponse
   */
  async describeModifyParameterLog(request: $_model.DescribeModifyParameterLogRequest): Promise<$_model.DescribeModifyParameterLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModifyParameterLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - DescribeNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespaceResponse
   */
  async describeNamespaceWithOptions(request: $_model.DescribeNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespace",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespaceResponse({}));
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - DescribeNamespaceRequest
   * @returns DescribeNamespaceResponse
   */
  async describeNamespace(request: $_model.DescribeNamespaceRequest): Promise<$_model.DescribeNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the information about configuration parameters for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation can be called to query the details of parameters in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParametersResponse
   */
  async describeParametersWithOptions(request: $_model.DescribeParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeParameters",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParametersResponse({}));
  }

  /**
   * Queries the information about configuration parameters for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation can be called to query the details of parameters in an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeParametersRequest
   * @returns DescribeParametersResponse
   */
  async describeParameters(request: $_model.DescribeParametersRequest): Promise<$_model.DescribeParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * 获取私有RAG服务详情
   * 
   * @param request - DescribePrivateRAGServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrivateRAGServiceResponse
   */
  async describePrivateRAGServiceWithOptions(request: $_model.DescribePrivateRAGServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrivateRAGServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrivateRAGService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrivateRAGServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrivateRAGServiceResponse({}));
  }

  /**
   * 获取私有RAG服务详情
   * 
   * @param request - DescribePrivateRAGServiceRequest
   * @returns DescribePrivateRAGServiceResponse
   */
  async describePrivateRAGService(request: $_model.DescribePrivateRAGServiceRequest): Promise<$_model.DescribePrivateRAGServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrivateRAGServiceWithOptions(request, runtime);
  }

  /**
   * Queries a list of vSwitches.
   * 
   * @remarks
   * When you create AnalyticDB for PostgreSQL instances, you can call this operation to query the details of vSwitches within a specified region or zone.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRdsVSwitchsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsVSwitchsResponse
   */
  async describeRdsVSwitchsWithOptions(request: $_model.DescribeRdsVSwitchsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsVSwitchsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsVSwitchs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsVSwitchsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsVSwitchsResponse({}));
  }

  /**
   * Queries a list of vSwitches.
   * 
   * @remarks
   * When you create AnalyticDB for PostgreSQL instances, you can call this operation to query the details of vSwitches within a specified region or zone.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRdsVSwitchsRequest
   * @returns DescribeRdsVSwitchsResponse
   */
  async describeRdsVSwitchs(request: $_model.DescribeRdsVSwitchsRequest): Promise<$_model.DescribeRdsVSwitchsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsVSwitchsWithOptions(request, runtime);
  }

  /**
   * Queries a list of VPCs.
   * 
   * @remarks
   * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available VPCs within a specified region or zone.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRdsVpcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsVpcsResponse
   */
  async describeRdsVpcsWithOptions(request: $_model.DescribeRdsVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsVpcsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsVpcs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsVpcsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsVpcsResponse({}));
  }

  /**
   * Queries a list of VPCs.
   * 
   * @remarks
   * When you create an AnalyticDB for PostgreSQL instance, you can call this operation to query the available VPCs within a specified region or zone.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRdsVpcsRequest
   * @returns DescribeRdsVpcsResponse
   */
  async describeRdsVpcs(request: $_model.DescribeRdsVpcsRequest): Promise<$_model.DescribeRdsVpcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsVpcsWithOptions(request, runtime);
  }

  /**
   * 描述一个实例是否处于平衡状态
   * 
   * @param request - DescribeRebalanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRebalanceStatusResponse
   */
  async describeRebalanceStatusWithOptions(request: $_model.DescribeRebalanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRebalanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRebalanceStatus",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRebalanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRebalanceStatusResponse({}));
  }

  /**
   * 描述一个实例是否处于平衡状态
   * 
   * @param request - DescribeRebalanceStatusRequest
   * @returns DescribeRebalanceStatusResponse
   */
  async describeRebalanceStatus(request: $_model.DescribeRebalanceStatusRequest): Promise<$_model.DescribeRebalanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRebalanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions and zones where AnalyticDB for PostgreSQL is available.
   * 
   * @remarks
   * Before you create an AnalyticDB for PostgreSQL instance, you must call this operation to query available regions and zones.
   * ## Limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries a list of regions and zones where AnalyticDB for PostgreSQL is available.
   * 
   * @remarks
   * Before you create an AnalyticDB for PostgreSQL instance, you must call this operation to query available regions and zones.
   * ## Limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of roles.
   * 
   * @param request - DescribeRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRolesResponse
   */
  async describeRolesWithOptions(request: $_model.DescribeRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRoles",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRolesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRolesResponse({}));
  }

  /**
   * Queries a list of roles.
   * 
   * @param request - DescribeRolesRequest
   * @returns DescribeRolesResponse
   */
  async describeRoles(request: $_model.DescribeRolesRequest): Promise<$_model.DescribeRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRolesWithOptions(request, runtime);
  }

  /**
   * Queries the number of audit logs for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not available for instances in reserved storage mode.
   * 
   * @param request - DescribeSQLLogCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLLogCountResponse
   */
  async describeSQLLogCountWithOptions(request: $_model.DescribeSQLLogCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!$dara.isNull(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!$dara.isNull(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!$dara.isNull(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!$dara.isNull(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!$dara.isNull(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLLogCount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLLogCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLLogCountResponse({}));
  }

  /**
   * Queries the number of audit logs for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not available for instances in reserved storage mode.
   * 
   * @param request - DescribeSQLLogCountRequest
   * @returns DescribeSQLLogCountResponse
   */
  async describeSQLLogCount(request: $_model.DescribeSQLLogCountRequest): Promise<$_model.DescribeSQLLogCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLLogCountWithOptions(request, runtime);
  }

  /**
   * Queries the SQL execution logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * > This operation is no longer used. To query SQL execution logs, call the [DescribeSQLLogsV2](https://help.aliyun.com/document_detail/453722.html) operation.
   * 
   * @param request - DescribeSQLLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLLogsResponse
   */
  async describeSQLLogsWithOptions(request: $_model.DescribeSQLLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!$dara.isNull(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!$dara.isNull(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!$dara.isNull(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!$dara.isNull(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!$dara.isNull(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLLogs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLLogsResponse({}));
  }

  /**
   * Queries the SQL execution logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * > This operation is no longer used. To query SQL execution logs, call the [DescribeSQLLogsV2](https://help.aliyun.com/document_detail/453722.html) operation.
   * 
   * @param request - DescribeSQLLogsRequest
   * @returns DescribeSQLLogsResponse
   */
  async describeSQLLogs(request: $_model.DescribeSQLLogsRequest): Promise<$_model.DescribeSQLLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLLogsWithOptions(request, runtime);
  }

  /**
   * Queries SQL logs within a specific time range.
   * 
   * @remarks
   * You can call this operation to query SQL logs of an AnalyticDB for PostgreSQL instance within a specific time range.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSQLLogsV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLLogsV2Response
   */
  async describeSQLLogsV2WithOptions(request: $_model.DescribeSQLLogsV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLLogsV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!$dara.isNull(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!$dara.isNull(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!$dara.isNull(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!$dara.isNull(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLLogsV2",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLLogsV2Response>(await this.callApi(params, req, runtime), new $_model.DescribeSQLLogsV2Response({}));
  }

  /**
   * Queries SQL logs within a specific time range.
   * 
   * @remarks
   * You can call this operation to query SQL logs of an AnalyticDB for PostgreSQL instance within a specific time range.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSQLLogsV2Request
   * @returns DescribeSQLLogsV2Response
   */
  async describeSQLLogsV2(request: $_model.DescribeSQLLogsV2Request): Promise<$_model.DescribeSQLLogsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLLogsV2WithOptions(request, runtime);
  }

  /**
   * Queries whether a sample dataset is loaded to an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSampleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSampleDataResponse
   */
  async describeSampleDataWithOptions(request: $_model.DescribeSampleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSampleDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSampleData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSampleDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSampleDataResponse({}));
  }

  /**
   * Queries whether a sample dataset is loaded to an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeSampleDataRequest
   * @returns DescribeSampleDataResponse
   */
  async describeSampleData(request: $_model.DescribeSampleDataRequest): Promise<$_model.DescribeSampleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSampleDataWithOptions(request, runtime);
  }

  /**
   * Queries a real-time data service.
   * 
   * @param request - DescribeStreamingDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamingDataServiceResponse
   */
  async describeStreamingDataServiceWithOptions(request: $_model.DescribeStreamingDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamingDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamingDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamingDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamingDataServiceResponse({}));
  }

  /**
   * Queries a real-time data service.
   * 
   * @param request - DescribeStreamingDataServiceRequest
   * @returns DescribeStreamingDataServiceResponse
   */
  async describeStreamingDataService(request: $_model.DescribeStreamingDataServiceRequest): Promise<$_model.DescribeStreamingDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamingDataServiceWithOptions(request, runtime);
  }

  /**
   * Get external data source configuration information
   * 
   * @param request - DescribeStreamingDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamingDataSourceResponse
   */
  async describeStreamingDataSourceWithOptions(request: $_model.DescribeStreamingDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamingDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamingDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamingDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamingDataSourceResponse({}));
  }

  /**
   * Get external data source configuration information
   * 
   * @param request - DescribeStreamingDataSourceRequest
   * @returns DescribeStreamingDataSourceResponse
   */
  async describeStreamingDataSource(request: $_model.DescribeStreamingDataSourceRequest): Promise<$_model.DescribeStreamingDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamingDataSourceWithOptions(request, runtime);
  }

  /**
   * Delete External Data Source Configuration
   * 
   * @param request - DescribeStreamingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStreamingJobResponse
   */
  async describeStreamingJobWithOptions(request: $_model.DescribeStreamingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStreamingJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStreamingJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStreamingJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStreamingJobResponse({}));
  }

  /**
   * Delete External Data Source Configuration
   * 
   * @param request - DescribeStreamingJobRequest
   * @returns DescribeStreamingJobResponse
   */
  async describeStreamingJob(request: $_model.DescribeStreamingJobRequest): Promise<$_model.DescribeStreamingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStreamingJobWithOptions(request, runtime);
  }

  /**
   * Queries the features that are supported by an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeSupportFeaturesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSupportFeaturesResponse
   */
  async describeSupportFeaturesWithOptions(request: $_model.DescribeSupportFeaturesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSupportFeaturesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSupportFeatures",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSupportFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSupportFeaturesResponse({}));
  }

  /**
   * Queries the features that are supported by an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DescribeSupportFeaturesRequest
   * @returns DescribeSupportFeaturesResponse
   */
  async describeSupportFeatures(request: $_model.DescribeSupportFeaturesRequest): Promise<$_model.DescribeSupportFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSupportFeaturesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a table.
   * 
   * @param request - DescribeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableResponse
   */
  async describeTableWithOptions(request: $_model.DescribeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    if (!$dara.isNull(request.table)) {
      query["Table"] = request.table;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTable",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableResponse({}));
  }

  /**
   * Queries the information about a table.
   * 
   * @param request - DescribeTableRequest
   * @returns DescribeTableResponse
   */
  async describeTable(request: $_model.DescribeTableRequest): Promise<$_model.DescribeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags for AnalyticDB for PostgreSQL instances.
   * 
   * @param request - DescribeTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsResponse({}));
  }

  /**
   * Queries a list of tags for AnalyticDB for PostgreSQL instances.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  /**
   * Queries a list of Key Management Service (KMS) keys.
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: $_model.DescribeUserEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserEncryptionKeyListResponse({}));
  }

  /**
   * Queries a list of Key Management Service (KMS) keys.
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyList(request: $_model.DescribeUserEncryptionKeyListRequest): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a lock-waiting query for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of a lock-waiting query only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWaitingSQLInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWaitingSQLInfoResponse
   */
  async describeWaitingSQLInfoWithOptions(request: $_model.DescribeWaitingSQLInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWaitingSQLInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.PID)) {
      query["PID"] = request.PID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWaitingSQLInfo",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWaitingSQLInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWaitingSQLInfoResponse({}));
  }

  /**
   * Queries the information about a lock-waiting query for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the details of a lock-waiting query only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWaitingSQLInfoRequest
   * @returns DescribeWaitingSQLInfoResponse
   */
  async describeWaitingSQLInfo(request: $_model.DescribeWaitingSQLInfoRequest): Promise<$_model.DescribeWaitingSQLInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWaitingSQLInfoWithOptions(request, runtime);
  }

  /**
   * Queries the lock diagnostic records of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the lock diagnostics records only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWaitingSQLRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWaitingSQLRecordsResponse
   */
  async describeWaitingSQLRecordsWithOptions(request: $_model.DescribeWaitingSQLRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWaitingSQLRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWaitingSQLRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWaitingSQLRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWaitingSQLRecordsResponse({}));
  }

  /**
   * Queries the lock diagnostic records of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to query the lock diagnostics records only for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeWaitingSQLRecordsRequest
   * @returns DescribeWaitingSQLRecordsResponse
   */
  async describeWaitingSQLRecords(request: $_model.DescribeWaitingSQLRecordsRequest): Promise<$_model.DescribeWaitingSQLRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWaitingSQLRecordsWithOptions(request, runtime);
  }

  /**
   * 获取私有RAG服务可部署可用区
   * 
   * @param request - DescribeZonesPrivateRAGServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesPrivateRAGServiceResponse
   */
  async describeZonesPrivateRAGServiceWithOptions(request: $_model.DescribeZonesPrivateRAGServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesPrivateRAGServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZonesPrivateRAGService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesPrivateRAGServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesPrivateRAGServiceResponse({}));
  }

  /**
   * 获取私有RAG服务可部署可用区
   * 
   * @param request - DescribeZonesPrivateRAGServiceRequest
   * @returns DescribeZonesPrivateRAGServiceResponse
   */
  async describeZonesPrivateRAGService(request: $_model.DescribeZonesPrivateRAGServiceRequest): Promise<$_model.DescribeZonesPrivateRAGServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesPrivateRAGServiceWithOptions(request, runtime);
  }

  /**
   * Disables resource group management for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode. After you disable resource group management, the resource management method of the instance switches from resource group management to resource queue management.
   * 
   * @remarks
   *   You can call this operation only for AnalyticDB for PostgreSQL V6.0 instances in elastic storage mode whose minor version is V6.6.1.0 or later.
   * *   You can call this operation to disable resource group management only for AnalyticDB for PostgreSQL instances that are in the **Running** state.
   * *   **Note: When the resource management method is switched, your AnalyticDB for PostgreSQL instance restarts and becomes unavailable for approximately 5 minutes. To prevent your business from being affected, call this operation during off-peak hours.
   * 
   * @param request - DisableDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDBResourceGroupResponse
   */
  async disableDBResourceGroupWithOptions(request: $_model.DisableDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableDBResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DisableDBResourceGroupResponse({}));
  }

  /**
   * Disables resource group management for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode. After you disable resource group management, the resource management method of the instance switches from resource group management to resource queue management.
   * 
   * @remarks
   *   You can call this operation only for AnalyticDB for PostgreSQL V6.0 instances in elastic storage mode whose minor version is V6.6.1.0 or later.
   * *   You can call this operation to disable resource group management only for AnalyticDB for PostgreSQL instances that are in the **Running** state.
   * *   **Note: When the resource management method is switched, your AnalyticDB for PostgreSQL instance restarts and becomes unavailable for approximately 5 minutes. To prevent your business from being affected, call this operation during off-peak hours.
   * 
   * @param request - DisableDBResourceGroupRequest
   * @returns DisableDBResourceGroupResponse
   */
  async disableDBResourceGroup(request: $_model.DisableDBResourceGroupRequest): Promise<$_model.DisableDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Downloads the query diagnostic information of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to download the query diagnostic information of an AnalyticDB for PostgreSQL instance. After the download is complete, you can call the [DescribeDownloadRecords](https://help.aliyun.com/document_detail/447712.html) operation to query download records and download URLs.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecordsWithOptions(request: $_model.DownloadDiagnosisRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadDiagnosisRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadDiagnosisRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DownloadDiagnosisRecordsResponse({}));
  }

  /**
   * Downloads the query diagnostic information of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to download the query diagnostic information of an AnalyticDB for PostgreSQL instance. After the download is complete, you can call the [DescribeDownloadRecords](https://help.aliyun.com/document_detail/447712.html) operation to query download records and download URLs.
   * This operation is available only for instances of V6.3.10.1 or later in elastic storage mode. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecords(request: $_model.DownloadDiagnosisRecordsRequest): Promise<$_model.DownloadDiagnosisRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Download the slow query logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DownloadSQLLogsRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadSQLLogsRecordsResponse
   */
  async downloadSQLLogsRecordsWithOptions(request: $_model.DownloadSQLLogsRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadSQLLogsRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeCost)) {
      query["ExecuteCost"] = request.executeCost;
    }

    if (!$dara.isNull(request.executeState)) {
      query["ExecuteState"] = request.executeState;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxExecuteCost)) {
      query["MaxExecuteCost"] = request.maxExecuteCost;
    }

    if (!$dara.isNull(request.minExecuteCost)) {
      query["MinExecuteCost"] = request.minExecuteCost;
    }

    if (!$dara.isNull(request.operationClass)) {
      query["OperationClass"] = request.operationClass;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryKeywords)) {
      query["QueryKeywords"] = request.queryKeywords;
    }

    if (!$dara.isNull(request.sourceIP)) {
      query["SourceIP"] = request.sourceIP;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadSQLLogsRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadSQLLogsRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DownloadSQLLogsRecordsResponse({}));
  }

  /**
   * Download the slow query logs of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - DownloadSQLLogsRecordsRequest
   * @returns DownloadSQLLogsRecordsResponse
   */
  async downloadSQLLogsRecords(request: $_model.DownloadSQLLogsRecordsRequest): Promise<$_model.DownloadSQLLogsRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadSQLLogsRecordsWithOptions(request, runtime);
  }

  /**
   * Downloads slow SQL records.
   * 
   * @param request - DownloadSlowSQLRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadSlowSQLRecordsResponse
   */
  async downloadSlowSQLRecordsWithOptions(request: $_model.DownloadSlowSQLRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadSlowSQLRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxDuration)) {
      query["MaxDuration"] = request.maxDuration;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadSlowSQLRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadSlowSQLRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DownloadSlowSQLRecordsResponse({}));
  }

  /**
   * Downloads slow SQL records.
   * 
   * @param request - DownloadSlowSQLRecordsRequest
   * @returns DownloadSlowSQLRecordsResponse
   */
  async downloadSlowSQLRecords(request: $_model.DownloadSlowSQLRecordsRequest): Promise<$_model.DownloadSlowSQLRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadSlowSQLRecordsWithOptions(request, runtime);
  }

  /**
   * Enables knowledge graph construction for the knowledge base.
   * 
   * @param tmpReq - EnableCollectionGraphRAGRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCollectionGraphRAGResponse
   */
  async enableCollectionGraphRAGWithOptions(tmpReq: $_model.EnableCollectionGraphRAGRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCollectionGraphRAGResponse> {
    tmpReq.validate();
    let request = new $_model.EnableCollectionGraphRAGShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entityTypes)) {
      request.entityTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityTypes, "EntityTypes", "json");
    }

    if (!$dara.isNull(tmpReq.relationshipTypes)) {
      request.relationshipTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relationshipTypes, "RelationshipTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.entityTypesShrink)) {
      query["EntityTypes"] = request.entityTypesShrink;
    }

    if (!$dara.isNull(request.LLMModel)) {
      query["LLMModel"] = request.LLMModel;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relationshipTypesShrink)) {
      query["RelationshipTypes"] = request.relationshipTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCollectionGraphRAG",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCollectionGraphRAGResponse>(await this.callApi(params, req, runtime), new $_model.EnableCollectionGraphRAGResponse({}));
  }

  /**
   * Enables knowledge graph construction for the knowledge base.
   * 
   * @param request - EnableCollectionGraphRAGRequest
   * @returns EnableCollectionGraphRAGResponse
   */
  async enableCollectionGraphRAG(request: $_model.EnableCollectionGraphRAGRequest): Promise<$_model.EnableCollectionGraphRAGResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCollectionGraphRAGWithOptions(request, runtime);
  }

  /**
   * Enables resource group management for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode. After resource group management is enabled, the resource management mode of the instance is changed from resource queue to resource group.
   * 
   * @remarks
   *   You can call this operation only for AnalyticDB for PostgreSQL V6.0 instances in elastic storage mode whose minor version is V6.6.1.0 or later.
   * *   You can call this operation to enable resource group management only for AnalyticDB for PostgreSQL instances that are in the **Running** state.
   * *   **Note: When the resource management mode is changed, your AnalyticDB for PostgreSQL instance is restarted and remains unavailable within 5 minutes. To prevent your business from being affected, call this operation during off-peak hours.
   * 
   * @param request - EnableDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDBResourceGroupResponse
   */
  async enableDBResourceGroupWithOptions(request: $_model.EnableDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDBResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.EnableDBResourceGroupResponse({}));
  }

  /**
   * Enables resource group management for an AnalyticDB for PostgreSQL V6.0 instance in elastic storage mode. After resource group management is enabled, the resource management mode of the instance is changed from resource queue to resource group.
   * 
   * @remarks
   *   You can call this operation only for AnalyticDB for PostgreSQL V6.0 instances in elastic storage mode whose minor version is V6.6.1.0 or later.
   * *   You can call this operation to enable resource group management only for AnalyticDB for PostgreSQL instances that are in the **Running** state.
   * *   **Note: When the resource management mode is changed, your AnalyticDB for PostgreSQL instance is restarted and remains unavailable within 5 minutes. To prevent your business from being affected, call this operation during off-peak hours.
   * 
   * @param request - EnableDBResourceGroupRequest
   * @returns EnableDBResourceGroupResponse
   */
  async enableDBResourceGroup(request: $_model.EnableDBResourceGroupRequest): Promise<$_model.EnableDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Executes SQL statements.
   * 
   * @param tmpReq - ExecuteStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteStatementResponse
   */
  async executeStatementWithOptions(tmpReq: $_model.ExecuteStatementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteStatementResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteStatementShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    if (!$dara.isNull(tmpReq.ragWorkspaceCollection)) {
      request.ragWorkspaceCollectionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ragWorkspaceCollection, "RagWorkspaceCollection", "json");
    }

    if (!$dara.isNull(tmpReq.sqls)) {
      request.sqlsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sqls, "Sqls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ragWorkspaceCollectionShrink)) {
      query["RagWorkspaceCollection"] = request.ragWorkspaceCollectionShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.runType)) {
      query["RunType"] = request.runType;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    if (!$dara.isNull(request.statementName)) {
      query["StatementName"] = request.statementName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.sql)) {
      body["Sql"] = request.sql;
    }

    if (!$dara.isNull(request.sqlsShrink)) {
      body["Sqls"] = request.sqlsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteStatement",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteStatementResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteStatementResponse({}));
  }

  /**
   * Executes SQL statements.
   * 
   * @param request - ExecuteStatementRequest
   * @returns ExecuteStatementResponse
   */
  async executeStatement(request: $_model.ExecuteStatementRequest): Promise<$_model.ExecuteStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeStatementWithOptions(request, runtime);
  }

  /**
   * 获取特定的账号信息
   * 
   * @param request - GetAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountResponse
   */
  async getAccountWithOptions(request: $_model.GetAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountResponse({}));
  }

  /**
   * 获取特定的账号信息
   * 
   * @param request - GetAccountRequest
   * @returns GetAccountResponse
   */
  async getAccount(request: $_model.GetAccountRequest): Promise<$_model.GetAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountWithOptions(request, runtime);
  }

  /**
   * Retrieves a task to build a knowledge graph.
   * 
   * @param request - GetGraphRAGJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGraphRAGJobResponse
   */
  async getGraphRAGJobWithOptions(request: $_model.GetGraphRAGJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGraphRAGJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGraphRAGJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGraphRAGJobResponse>(await this.callApi(params, req, runtime), new $_model.GetGraphRAGJobResponse({}));
  }

  /**
   * Retrieves a task to build a knowledge graph.
   * 
   * @param request - GetGraphRAGJobRequest
   * @returns GetGraphRAGJobResponse
   */
  async getGraphRAGJob(request: $_model.GetGraphRAGJobRequest): Promise<$_model.GetGraphRAGJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGraphRAGJobWithOptions(request, runtime);
  }

  /**
   * Queries the information about an access credential.
   * 
   * @param request - GetSecretValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretValueResponse
   */
  async getSecretValueWithOptions(request: $_model.GetSecretValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecretValue",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretValueResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretValueResponse({}));
  }

  /**
   * Queries the information about an access credential.
   * 
   * @param request - GetSecretValueRequest
   * @returns GetSecretValueResponse
   */
  async getSecretValue(request: $_model.GetSecretValueRequest): Promise<$_model.GetSecretValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretValueWithOptions(request, runtime);
  }

  /**
   * Get Asynchronous SQL Execution Result
   * 
   * @param request - GetStatementResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStatementResultResponse
   */
  async getStatementResultWithOptions(request: $_model.GetStatementResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStatementResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStatementResult",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStatementResultResponse>(await this.callApi(params, req, runtime), new $_model.GetStatementResultResponse({}));
  }

  /**
   * Get Asynchronous SQL Execution Result
   * 
   * @param request - GetStatementResultRequest
   * @returns GetStatementResultResponse
   */
  async getStatementResult(request: $_model.GetStatementResultRequest): Promise<$_model.GetStatementResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStatementResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the detailed configuration and status information for a specific Supabase instance.
   * 
   * @remarks
   * This interface is used to query the details of a Supabase instance.
   * 
   * @param request - GetSupabaseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupabaseProjectResponse
   */
  async getSupabaseProjectWithOptions(request: $_model.GetSupabaseProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupabaseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupabaseProject",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupabaseProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetSupabaseProjectResponse({}));
  }

  /**
   * Retrieves the detailed configuration and status information for a specific Supabase instance.
   * 
   * @remarks
   * This interface is used to query the details of a Supabase instance.
   * 
   * @param request - GetSupabaseProjectRequest
   * @returns GetSupabaseProjectResponse
   */
  async getSupabaseProject(request: $_model.GetSupabaseProjectRequest): Promise<$_model.GetSupabaseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupabaseProjectWithOptions(request, runtime);
  }

  /**
   * Queries a list of API keys for a Supabase project.
   * 
   * @remarks
   * You can call this operation to query a list of API keys for a Supabase project.
   * 
   * @param request - GetSupabaseProjectApiKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupabaseProjectApiKeysResponse
   */
  async getSupabaseProjectApiKeysWithOptions(request: $_model.GetSupabaseProjectApiKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupabaseProjectApiKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupabaseProjectApiKeys",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupabaseProjectApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.GetSupabaseProjectApiKeysResponse({}));
  }

  /**
   * Queries a list of API keys for a Supabase project.
   * 
   * @remarks
   * You can call this operation to query a list of API keys for a Supabase project.
   * 
   * @param request - GetSupabaseProjectApiKeysRequest
   * @returns GetSupabaseProjectApiKeysResponse
   */
  async getSupabaseProjectApiKeys(request: $_model.GetSupabaseProjectApiKeysRequest): Promise<$_model.GetSupabaseProjectApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupabaseProjectApiKeysWithOptions(request, runtime);
  }

  /**
   * Retrieves the username and password for the dashboard of a specific Supabase project.
   * 
   * @remarks
   * Query Supabase Project Dashboard Account Information
   * 
   * @param request - GetSupabaseProjectDashboardAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSupabaseProjectDashboardAccountResponse
   */
  async getSupabaseProjectDashboardAccountWithOptions(request: $_model.GetSupabaseProjectDashboardAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSupabaseProjectDashboardAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSupabaseProjectDashboardAccount",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSupabaseProjectDashboardAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetSupabaseProjectDashboardAccountResponse({}));
  }

  /**
   * Retrieves the username and password for the dashboard of a specific Supabase project.
   * 
   * @remarks
   * Query Supabase Project Dashboard Account Information
   * 
   * @param request - GetSupabaseProjectDashboardAccountRequest
   * @returns GetSupabaseProjectDashboardAccountResponse
   */
  async getSupabaseProjectDashboardAccount(request: $_model.GetSupabaseProjectDashboardAccountRequest): Promise<$_model.GetSupabaseProjectDashboardAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSupabaseProjectDashboardAccountWithOptions(request, runtime);
  }

  /**
   * Queries the progress and result of an asynchronous document upload job based on the job ID.
   * 
   * @remarks
   * This operation is related to the UploadDocumentAsync operation. You can call the UploadDocumentAsync operation to create an upload job and get the job ID, and then call the GetUploadDocumentJob operation to query the execution information of the job.
   * > Suggestions
   * *   Based on document complexity and the number of resulting vector chunks, the timeout is estimated and typically does not exceed 2 hours.
   * 
   * @param request - GetUploadDocumentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadDocumentJobResponse
   */
  async getUploadDocumentJobWithOptions(request: $_model.GetUploadDocumentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadDocumentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadDocumentJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadDocumentJobResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadDocumentJobResponse({}));
  }

  /**
   * Queries the progress and result of an asynchronous document upload job based on the job ID.
   * 
   * @remarks
   * This operation is related to the UploadDocumentAsync operation. You can call the UploadDocumentAsync operation to create an upload job and get the job ID, and then call the GetUploadDocumentJob operation to query the execution information of the job.
   * > Suggestions
   * *   Based on document complexity and the number of resulting vector chunks, the timeout is estimated and typically does not exceed 2 hours.
   * 
   * @param request - GetUploadDocumentJobRequest
   * @returns GetUploadDocumentJobResponse
   */
  async getUploadDocumentJob(request: $_model.GetUploadDocumentJobRequest): Promise<$_model.GetUploadDocumentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadDocumentJobWithOptions(request, runtime);
  }

  /**
   * Queries the progress and result of an asynchronous vector data upload job by using a job ID.
   * 
   * @remarks
   * This operation is related to the `UpsertCollectionDataAsync` operation. You can call the `UpsertCollectionDataAsync` operation to create an upload job and obtain a job ID, and then call the GetUpsertCollectionDataJob operation to query the execution information of the job.
   * >  We recommend that you evaluate the amount of time required for the upload job based on 1,000 data entries every second, and then query the job progress every 5 seconds. The timeout period can be set to 30 minutes after the evaluated amount of time.
   * 
   * @param request - GetUpsertCollectionDataJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUpsertCollectionDataJobResponse
   */
  async getUpsertCollectionDataJobWithOptions(request: $_model.GetUpsertCollectionDataJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUpsertCollectionDataJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUpsertCollectionDataJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUpsertCollectionDataJobResponse>(await this.callApi(params, req, runtime), new $_model.GetUpsertCollectionDataJobResponse({}));
  }

  /**
   * Queries the progress and result of an asynchronous vector data upload job by using a job ID.
   * 
   * @remarks
   * This operation is related to the `UpsertCollectionDataAsync` operation. You can call the `UpsertCollectionDataAsync` operation to create an upload job and obtain a job ID, and then call the GetUpsertCollectionDataJob operation to query the execution information of the job.
   * >  We recommend that you evaluate the amount of time required for the upload job based on 1,000 data entries every second, and then query the job progress every 5 seconds. The timeout period can be set to 30 minutes after the evaluated amount of time.
   * 
   * @param request - GetUpsertCollectionDataJobRequest
   * @returns GetUpsertCollectionDataJobResponse
   */
  async getUpsertCollectionDataJob(request: $_model.GetUpsertCollectionDataJobRequest): Promise<$_model.GetUpsertCollectionDataJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUpsertCollectionDataJobWithOptions(request, runtime);
  }

  /**
   * Grants vector collection permissions to a namespace.
   * 
   * @param request - GrantCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantCollectionResponse
   */
  async grantCollectionWithOptions(request: $_model.GrantCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.grantToNamespace)) {
      query["GrantToNamespace"] = request.grantToNamespace;
    }

    if (!$dara.isNull(request.grantType)) {
      query["GrantType"] = request.grantType;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantCollectionResponse>(await this.callApi(params, req, runtime), new $_model.GrantCollectionResponse({}));
  }

  /**
   * Grants vector collection permissions to a namespace.
   * 
   * @param request - GrantCollectionRequest
   * @returns GrantCollectionResponse
   */
  async grantCollection(request: $_model.GrantCollectionRequest): Promise<$_model.GrantCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantCollectionWithOptions(request, runtime);
  }

  /**
   * Processes active queries.
   * 
   * @param request - HandleActiveSQLRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HandleActiveSQLRecordResponse
   */
  async handleActiveSQLRecordWithOptions(request: $_model.HandleActiveSQLRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HandleActiveSQLRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.pids)) {
      query["Pids"] = request.pids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HandleActiveSQLRecord",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HandleActiveSQLRecordResponse>(await this.callApi(params, req, runtime), new $_model.HandleActiveSQLRecordResponse({}));
  }

  /**
   * Processes active queries.
   * 
   * @param request - HandleActiveSQLRecordRequest
   * @returns HandleActiveSQLRecordResponse
   */
  async handleActiveSQLRecord(request: $_model.HandleActiveSQLRecordRequest): Promise<$_model.HandleActiveSQLRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleActiveSQLRecordWithOptions(request, runtime);
  }

  /**
   * Initializes vector databases.
   * 
   * @param request - InitVectorDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitVectorDatabaseResponse
   */
  async initVectorDatabaseWithOptions(request: $_model.InitVectorDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitVectorDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitVectorDatabase",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitVectorDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.InitVectorDatabaseResponse({}));
  }

  /**
   * Initializes vector databases.
   * 
   * @param request - InitVectorDatabaseRequest
   * @returns InitVectorDatabaseResponse
   */
  async initVectorDatabase(request: $_model.InitVectorDatabaseRequest): Promise<$_model.InitVectorDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initVectorDatabaseWithOptions(request, runtime);
  }

  /**
   * Queries a list of AI nodes.
   * 
   * @remarks
   *   This operation queries a list of AI nodes.
   * 
   * @param request - ListAINodePoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAINodePoolsResponse
   */
  async listAINodePoolsWithOptions(request: $_model.ListAINodePoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAINodePoolsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAINodePools",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAINodePoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListAINodePoolsResponse({}));
  }

  /**
   * Queries a list of AI nodes.
   * 
   * @remarks
   *   This operation queries a list of AI nodes.
   * 
   * @param request - ListAINodePoolsRequest
   * @returns ListAINodePoolsResponse
   */
  async listAINodePools(request: $_model.ListAINodePoolsRequest): Promise<$_model.ListAINodePoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAINodePoolsWithOptions(request, runtime);
  }

  /**
   * Queries a list of backup jobs.
   * 
   * @param request - ListBackupJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackupJobsResponse
   */
  async listBackupJobsWithOptions(request: $_model.ListBackupJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBackupJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBackupJobs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBackupJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListBackupJobsResponse({}));
  }

  /**
   * Queries a list of backup jobs.
   * 
   * @param request - ListBackupJobsRequest
   * @returns ListBackupJobsResponse
   */
  async listBackupJobs(request: $_model.ListBackupJobsRequest): Promise<$_model.ListBackupJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBackupJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of vector collections.
   * 
   * @param request - ListCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectionsResponse
   */
  async listCollectionsWithOptions(request: $_model.ListCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCollectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCollections",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListCollectionsResponse({}));
  }

  /**
   * Queries a list of vector collections.
   * 
   * @param request - ListCollectionsRequest
   * @returns ListCollectionsResponse
   */
  async listCollections(request: $_model.ListCollectionsRequest): Promise<$_model.ListCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCollectionsWithOptions(request, runtime);
  }

  /**
   * 获取安装在某个数据库上的所有插件信息
   * 
   * @param request - ListDatabaseExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabaseExtensionsResponse
   */
  async listDatabaseExtensionsWithOptions(request: $_model.ListDatabaseExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabaseExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabaseExtensions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabaseExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabaseExtensionsResponse({}));
  }

  /**
   * 获取安装在某个数据库上的所有插件信息
   * 
   * @param request - ListDatabaseExtensionsRequest
   * @returns ListDatabaseExtensionsResponse
   */
  async listDatabaseExtensions(request: $_model.ListDatabaseExtensionsRequest): Promise<$_model.ListDatabaseExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabaseExtensionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases.
   * 
   * @param request - ListDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(request: $_model.ListDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * Queries a list of databases.
   * 
   * @param request - ListDatabasesRequest
   * @returns ListDatabasesResponse
   */
  async listDatabases(request: $_model.ListDatabasesRequest): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries a list of document collections.
   * 
   * @param request - ListDocumentCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocumentCollectionsResponse
   */
  async listDocumentCollectionsWithOptions(request: $_model.ListDocumentCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDocumentCollectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDocumentCollections",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDocumentCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDocumentCollectionsResponse({}));
  }

  /**
   * Queries a list of document collections.
   * 
   * @param request - ListDocumentCollectionsRequest
   * @returns ListDocumentCollectionsResponse
   */
  async listDocumentCollections(request: $_model.ListDocumentCollectionsRequest): Promise<$_model.ListDocumentCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocumentCollectionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of documents in a collection.
   * 
   * @param request - ListDocumentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDocumentsResponse
   */
  async listDocumentsWithOptions(request: $_model.ListDocumentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDocumentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDocuments",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDocumentsResponse({}));
  }

  /**
   * Queries a list of documents in a collection.
   * 
   * @param request - ListDocumentsRequest
   * @returns ListDocumentsResponse
   */
  async listDocuments(request: $_model.ListDocumentsRequest): Promise<$_model.ListDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDocumentsWithOptions(request, runtime);
  }

  /**
   * Queries a list of external data services.
   * 
   * @param request - ListExternalDataServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalDataServicesResponse
   */
  async listExternalDataServicesWithOptions(request: $_model.ListExternalDataServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalDataServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExternalDataServices",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExternalDataServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListExternalDataServicesResponse({}));
  }

  /**
   * Queries a list of external data services.
   * 
   * @param request - ListExternalDataServicesRequest
   * @returns ListExternalDataServicesResponse
   */
  async listExternalDataServices(request: $_model.ListExternalDataServicesRequest): Promise<$_model.ListExternalDataServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExternalDataServicesWithOptions(request, runtime);
  }

  /**
   * 获取实例外表配置列表
   * 
   * @param request - ListExternalDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalDataSourcesResponse
   */
  async listExternalDataSourcesWithOptions(request: $_model.ListExternalDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExternalDataSources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExternalDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListExternalDataSourcesResponse({}));
  }

  /**
   * 获取实例外表配置列表
   * 
   * @param request - ListExternalDataSourcesRequest
   * @returns ListExternalDataSourcesResponse
   */
  async listExternalDataSources(request: $_model.ListExternalDataSourcesRequest): Promise<$_model.ListExternalDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExternalDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of indexes.
   * 
   * @param request - ListIndicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
   */
  async listIndicesWithOptions(request: $_model.ListIndicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndices",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndicesResponse({}));
  }

  /**
   * Queries a list of indexes.
   * 
   * @param request - ListIndicesRequest
   * @returns ListIndicesResponse
   */
  async listIndices(request: $_model.ListIndicesRequest): Promise<$_model.ListIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIndicesWithOptions(request, runtime);
  }

  /**
   * 列举数据库
   * 
   * @param request - ListInstanceDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceDatabasesResponse
   */
  async listInstanceDatabasesWithOptions(request: $_model.ListInstanceDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
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
      action: "ListInstanceDatabases",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceDatabasesResponse({}));
  }

  /**
   * 列举数据库
   * 
   * @param request - ListInstanceDatabasesRequest
   * @returns ListInstanceDatabasesResponse
   */
  async listInstanceDatabases(request: $_model.ListInstanceDatabasesRequest): Promise<$_model.ListInstanceDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries a list of extensions.
   * 
   * @param request - ListInstanceExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceExtensionsResponse
   */
  async listInstanceExtensionsWithOptions(request: $_model.ListInstanceExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!$dara.isNull(request.installStatus)) {
      query["InstallStatus"] = request.installStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceExtensions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceExtensionsResponse({}));
  }

  /**
   * Queries a list of extensions.
   * 
   * @param request - ListInstanceExtensionsRequest
   * @returns ListInstanceExtensionsResponse
   */
  async listInstanceExtensions(request: $_model.ListInstanceExtensionsRequest): Promise<$_model.ListInstanceExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceExtensionsWithOptions(request, runtime);
  }

  /**
   * Queries all model services.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This interface is used to view all model service information.
   * ## [](#qps-)QPS limit
   * You can call this operation up to 1,000 times per second per account. Exceeding the limit will trigger API rate limiting, which may impact your business. Please call the API responsibly.
   * 
   * @param request - ListModelServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelServicesResponse
   */
  async listModelServicesWithOptions(request: $_model.ListModelServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelServices",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelServicesResponse({}));
  }

  /**
   * Queries all model services.
   * 
   * @remarks
   * ## [](#)Usage notes
   * This interface is used to view all model service information.
   * ## [](#qps-)QPS limit
   * You can call this operation up to 1,000 times per second per account. Exceeding the limit will trigger API rate limiting, which may impact your business. Please call the API responsibly.
   * 
   * @param request - ListModelServicesRequest
   * @returns ListModelServicesResponse
   */
  async listModelServices(request: $_model.ListModelServicesRequest): Promise<$_model.ListModelServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelServicesWithOptions(request, runtime);
  }

  /**
   * Queries a list of namespaces.
   * 
   * @param request - ListNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacesResponse
   */
  async listNamespacesWithOptions(request: $_model.ListNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.managerAccount)) {
      query["ManagerAccount"] = request.managerAccount;
    }

    if (!$dara.isNull(request.managerAccountPassword)) {
      query["ManagerAccountPassword"] = request.managerAccountPassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespaces",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespacesResponse({}));
  }

  /**
   * Queries a list of namespaces.
   * 
   * @param request - ListNamespacesRequest
   * @returns ListNamespacesResponse
   */
  async listNamespaces(request: $_model.ListNamespacesRequest): Promise<$_model.ListNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * Get Homogeneous Data Source
   * 
   * @param request - ListRemoteADBDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRemoteADBDataSourcesResponse
   */
  async listRemoteADBDataSourcesWithOptions(request: $_model.ListRemoteADBDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRemoteADBDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRemoteADBDataSources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRemoteADBDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListRemoteADBDataSourcesResponse({}));
  }

  /**
   * Get Homogeneous Data Source
   * 
   * @param request - ListRemoteADBDataSourcesRequest
   * @returns ListRemoteADBDataSourcesResponse
   */
  async listRemoteADBDataSources(request: $_model.ListRemoteADBDataSourcesRequest): Promise<$_model.ListRemoteADBDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemoteADBDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of schemas.
   * 
   * @param request - ListSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemasResponse
   */
  async listSchemasWithOptions(request: $_model.ListSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaPattern)) {
      query["SchemaPattern"] = request.schemaPattern;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemas",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListSchemasResponse({}));
  }

  /**
   * Queries a list of schemas.
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(request: $_model.ListSchemasRequest): Promise<$_model.ListSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemasWithOptions(request, runtime);
  }

  /**
   * Queries a list of access credentials.
   * 
   * @param request - ListSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretsResponse
   */
  async listSecretsWithOptions(request: $_model.ListSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecrets",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretsResponse({}));
  }

  /**
   * Queries a list of access credentials.
   * 
   * @param request - ListSecretsRequest
   * @returns ListSecretsResponse
   */
  async listSecrets(request: $_model.ListSecretsRequest): Promise<$_model.ListSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

  /**
   * Queries slow SQL queries.
   * 
   * @param request - ListSlowSQLRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlowSQLRecordsResponse
   */
  async listSlowSQLRecordsWithOptions(request: $_model.ListSlowSQLRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSlowSQLRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxDuration)) {
      query["MaxDuration"] = request.maxDuration;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSlowSQLRecords",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSlowSQLRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListSlowSQLRecordsResponse({}));
  }

  /**
   * Queries slow SQL queries.
   * 
   * @param request - ListSlowSQLRecordsRequest
   * @returns ListSlowSQLRecordsResponse
   */
  async listSlowSQLRecords(request: $_model.ListSlowSQLRecordsRequest): Promise<$_model.ListSlowSQLRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSlowSQLRecordsWithOptions(request, runtime);
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - ListStreamingDataServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStreamingDataServicesResponse
   */
  async listStreamingDataServicesWithOptions(request: $_model.ListStreamingDataServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStreamingDataServicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStreamingDataServices",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStreamingDataServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListStreamingDataServicesResponse({}));
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - ListStreamingDataServicesRequest
   * @returns ListStreamingDataServicesResponse
   */
  async listStreamingDataServices(request: $_model.ListStreamingDataServicesRequest): Promise<$_model.ListStreamingDataServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStreamingDataServicesWithOptions(request, runtime);
  }

  /**
   * Queries real-time service data sources.
   * 
   * @param request - ListStreamingDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStreamingDataSourcesResponse
   */
  async listStreamingDataSourcesWithOptions(request: $_model.ListStreamingDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStreamingDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStreamingDataSources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStreamingDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListStreamingDataSourcesResponse({}));
  }

  /**
   * Queries real-time service data sources.
   * 
   * @param request - ListStreamingDataSourcesRequest
   * @returns ListStreamingDataSourcesResponse
   */
  async listStreamingDataSources(request: $_model.ListStreamingDataSourcesRequest): Promise<$_model.ListStreamingDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStreamingDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries real-time data synchronization jobs.
   * 
   * @param request - ListStreamingJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStreamingJobsResponse
   */
  async listStreamingJobsWithOptions(request: $_model.ListStreamingJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStreamingJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStreamingJobs",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStreamingJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListStreamingJobsResponse({}));
  }

  /**
   * Queries real-time data synchronization jobs.
   * 
   * @param request - ListStreamingJobsRequest
   * @returns ListStreamingJobsResponse
   */
  async listStreamingJobs(request: $_model.ListStreamingJobsRequest): Promise<$_model.ListStreamingJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStreamingJobsWithOptions(request, runtime);
  }

  /**
   * Retrieves a paginated list of Supabase instances in your account. You can filter the list by region.
   * 
   * @remarks
   *   You can call this operation to query Supabase instances.
   * 
   * @param request - ListSupabaseProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupabaseProjectsResponse
   */
  async listSupabaseProjectsWithOptions(request: $_model.ListSupabaseProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSupabaseProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSupabaseProjects",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupabaseProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListSupabaseProjectsResponse({}));
  }

  /**
   * Retrieves a paginated list of Supabase instances in your account. You can filter the list by region.
   * 
   * @remarks
   *   You can call this operation to query Supabase instances.
   * 
   * @param request - ListSupabaseProjectsRequest
   * @returns ListSupabaseProjectsResponse
   */
  async listSupabaseProjects(request: $_model.ListSupabaseProjectsRequest): Promise<$_model.ListSupabaseProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupabaseProjectsWithOptions(request, runtime);
  }

  /**
   * Get the list of supported models
   * 
   * @remarks
   *   This API is used to query the list of supported models.
   * 
   * @param request - ListSupportModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupportModelsResponse
   */
  async listSupportModelsWithOptions(request: $_model.ListSupportModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSupportModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSupportModels",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupportModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListSupportModelsResponse({}));
  }

  /**
   * Get the list of supported models
   * 
   * @remarks
   *   This API is used to query the list of supported models.
   * 
   * @param request - ListSupportModelsRequest
   * @returns ListSupportModelsResponse
   */
  async listSupportModels(request: $_model.ListSupportModelsRequest): Promise<$_model.ListSupportModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupportModelsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables in a database.
   * 
   * @param request - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(request: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.secretArn)) {
      query["SecretArn"] = request.secretArn;
    }

    if (!$dara.isNull(request.tablePattern)) {
      query["TablePattern"] = request.tablePattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * Queries a list of tables in a database.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags that are added to AnalyticDB for PostgreSQL instances.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries a list of tags that are added to AnalyticDB for PostgreSQL instances.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountDescriptionResponse({}));
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Configures the backup policy of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.enableRecoveryPoint)) {
      query["EnableRecoveryPoint"] = request.enableRecoveryPoint;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!$dara.isNull(request.recoveryPointPeriod)) {
      query["RecoveryPointPeriod"] = request.recoveryPointPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupPolicyResponse({}));
  }

  /**
   * Configures the backup policy of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Updates a collection.
   * 
   * @param request - ModifyCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCollectionResponse
   */
  async modifyCollectionWithOptions(request: $_model.ModifyCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.metadata)) {
      query["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCollection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCollectionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCollectionResponse({}));
  }

  /**
   * Updates a collection.
   * 
   * @param request - ModifyCollectionRequest
   * @returns ModifyCollectionResponse
   */
  async modifyCollection(request: $_model.ModifyCollectionRequest): Promise<$_model.ModifyCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCollectionWithOptions(request, runtime);
  }

  /**
   * Changes the threshold of computing resources and the wait period of idle resources for an AnalyticDB for PostgreSQL instance in Serverless automatic scheduling mode.
   * 
   * @param request - ModifyDBInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConfigResponse
   */
  async modifyDBInstanceConfigWithOptions(request: $_model.ModifyDBInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.idleTime)) {
      query["IdleTime"] = request.idleTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessResource)) {
      query["ServerlessResource"] = request.serverlessResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConfig",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceConfigResponse({}));
  }

  /**
   * Changes the threshold of computing resources and the wait period of idle resources for an AnalyticDB for PostgreSQL instance in Serverless automatic scheduling mode.
   * 
   * @param request - ModifyDBInstanceConfigRequest
   * @returns ModifyDBInstanceConfigResponse
   */
  async modifyDBInstanceConfig(request: $_model.ModifyDBInstanceConfigRequest): Promise<$_model.ModifyDBInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Changes the endpoint of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionStringWithOptions(request: $_model.ModifyDBInstanceConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceConnectionString",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceConnectionStringResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceConnectionStringResponse({}));
  }

  /**
   * Changes the endpoint of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyDBInstanceConnectionStringRequest
   * @returns ModifyDBInstanceConnectionStringResponse
   */
  async modifyDBInstanceConnectionString(request: $_model.ModifyDBInstanceConnectionStringRequest): Promise<$_model.ModifyDBInstanceConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceConnectionStringWithOptions(request, runtime);
  }

  /**
   * Changes the development mode of an instance.
   * 
   * @param request - ModifyDBInstanceDeploymentModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDeploymentModeResponse
   */
  async modifyDBInstanceDeploymentModeWithOptions(request: $_model.ModifyDBInstanceDeploymentModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDeploymentModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.deployMode)) {
      query["DeployMode"] = request.deployMode;
    }

    if (!$dara.isNull(request.standbyVSwitchId)) {
      query["StandbyVSwitchId"] = request.standbyVSwitchId;
    }

    if (!$dara.isNull(request.standbyZoneId)) {
      query["StandbyZoneId"] = request.standbyZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceDeploymentMode",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceDeploymentModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceDeploymentModeResponse({}));
  }

  /**
   * Changes the development mode of an instance.
   * 
   * @param request - ModifyDBInstanceDeploymentModeRequest
   * @returns ModifyDBInstanceDeploymentModeResponse
   */
  async modifyDBInstanceDeploymentMode(request: $_model.ModifyDBInstanceDeploymentModeRequest): Promise<$_model.ModifyDBInstanceDeploymentModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDeploymentModeWithOptions(request, runtime);
  }

  /**
   * Changes the description of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To make it easy to identify AnalyticDB for PostgreSQL instances, you can call this operation to modify the description of instances.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescriptionWithOptions(request: $_model.ModifyDBInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceDescription",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceDescriptionResponse({}));
  }

  /**
   * Changes the description of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To make it easy to identify AnalyticDB for PostgreSQL instances, you can call this operation to modify the description of instances.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDBInstanceDescriptionRequest
   * @returns ModifyDBInstanceDescriptionResponse
   */
  async modifyDBInstanceDescription(request: $_model.ModifyDBInstanceDescriptionRequest): Promise<$_model.ModifyDBInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * The system maintains AnalyticDB for PostgreSQL instances during the maintenance window that you specify. We recommend that you set the maintenance window to off-peak hours to minimize the impact on your business.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTimeWithOptions(request: $_model.ModifyDBInstanceMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceMaintainTime",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceMaintainTimeResponse({}));
  }

  /**
   * Modifies the maintenance window of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * The system maintains AnalyticDB for PostgreSQL instances during the maintenance window that you specify. We recommend that you set the maintenance window to off-peak hours to minimize the impact on your business.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDBInstanceMaintainTimeRequest
   * @returns ModifyDBInstanceMaintainTimeResponse
   */
  async modifyDBInstanceMaintainTime(request: $_model.ModifyDBInstanceMaintainTimeRequest): Promise<$_model.ModifyDBInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Changes the network type of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * ##
   * This operation is available only for AnalyticDB for PostgreSQL instances in reserved storage mode.
   * ## QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkTypeWithOptions(request: $_model.ModifyDBInstanceNetworkTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceNetworkTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instanceNetworkType)) {
      query["InstanceNetworkType"] = request.instanceNetworkType;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceNetworkType",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceNetworkTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceNetworkTypeResponse({}));
  }

  /**
   * Changes the network type of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * ##
   * This operation is available only for AnalyticDB for PostgreSQL instances in reserved storage mode.
   * ## QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyDBInstanceNetworkTypeRequest
   * @returns ModifyDBInstanceNetworkTypeResponse
   */
  async modifyDBInstanceNetworkType(request: $_model.ModifyDBInstanceNetworkTypeRequest): Promise<$_model.ModifyDBInstanceNetworkTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceNetworkTypeWithOptions(request, runtime);
  }

  /**
   * 包年包月/按量付费转换改造
   * 
   * @param request - ModifyDBInstancePayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstancePayTypeResponse
   */
  async modifyDBInstancePayTypeWithOptions(request: $_model.ModifyDBInstancePayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstancePayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstancePayType",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstancePayTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstancePayTypeResponse({}));
  }

  /**
   * 包年包月/按量付费转换改造
   * 
   * @param request - ModifyDBInstancePayTypeRequest
   * @returns ModifyDBInstancePayTypeResponse
   */
  async modifyDBInstancePayType(request: $_model.ModifyDBInstancePayTypeRequest): Promise<$_model.ModifyDBInstancePayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstancePayTypeWithOptions(request, runtime);
  }

  /**
   * Moves an AnalyticDB for PostgreSQL instance to a resource group.
   * 
   * @remarks
   * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyDBInstanceResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceResourceGroupResponse
   */
  async modifyDBInstanceResourceGroupWithOptions(request: $_model.ModifyDBInstanceResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "ModifyDBInstanceResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceResourceGroupResponse({}));
  }

  /**
   * Moves an AnalyticDB for PostgreSQL instance to a resource group.
   * 
   * @remarks
   * Resource Management allows you to build an organizational structure for resources based on your business requirements. You can use resource directories, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ModifyDBInstanceResourceGroupRequest
   * @returns ModifyDBInstanceResourceGroupResponse
   */
  async modifyDBInstanceResourceGroup(request: $_model.ModifyDBInstanceResourceGroupRequest): Promise<$_model.ModifyDBInstanceResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceResourceGroupWithOptions(request, runtime);
  }

  /**
   * Enables, disables, or updates SSL encryption for an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSLWithOptions(request: $_model.ModifyDBInstanceSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBInstanceSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBInstanceSSL",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBInstanceSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBInstanceSSLResponse({}));
  }

  /**
   * Enables, disables, or updates SSL encryption for an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyDBInstanceSSLRequest
   * @returns ModifyDBInstanceSSLResponse
   */
  async modifyDBInstanceSSL(request: $_model.ModifyDBInstanceSSLRequest): Promise<$_model.ModifyDBInstanceSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBInstanceSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a resource group.
   * 
   * @param tmpReq - ModifyDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroupWithOptions(tmpReq: $_model.ModifyDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceGroupItems)) {
      request.resourceGroupItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceGroupItems, "ResourceGroupItems", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupItemsShrink)) {
      query["ResourceGroupItems"] = request.resourceGroupItemsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBResourceGroup",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBResourceGroupResponse({}));
  }

  /**
   * Modifies the configurations of a resource group.
   * 
   * @param request - ModifyDBResourceGroupRequest
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroup(request: $_model.ModifyDBResourceGroupRequest): Promise<$_model.ModifyDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modify External Data Service
   * 
   * @param request - ModifyExternalDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyExternalDataServiceResponse
   */
  async modifyExternalDataServiceWithOptions(request: $_model.ModifyExternalDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyExternalDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      query["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyExternalDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyExternalDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyExternalDataServiceResponse({}));
  }

  /**
   * Modify External Data Service
   * 
   * @param request - ModifyExternalDataServiceRequest
   * @returns ModifyExternalDataServiceResponse
   */
  async modifyExternalDataService(request: $_model.ModifyExternalDataServiceRequest): Promise<$_model.ModifyExternalDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyExternalDataServiceWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a Hadoop data source.
   * 
   * @param request - ModifyHadoopDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHadoopDataSourceResponse
   */
  async modifyHadoopDataSourceWithOptions(request: $_model.ModifyHadoopDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHadoopDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceDescription)) {
      query["DataSourceDescription"] = request.dataSourceDescription;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.emrInstanceId)) {
      query["EmrInstanceId"] = request.emrInstanceId;
    }

    if (!$dara.isNull(request.HDFSConf)) {
      query["HDFSConf"] = request.HDFSConf;
    }

    if (!$dara.isNull(request.hadoopCoreConf)) {
      query["HadoopCoreConf"] = request.hadoopCoreConf;
    }

    if (!$dara.isNull(request.hadoopCreateType)) {
      query["HadoopCreateType"] = request.hadoopCreateType;
    }

    if (!$dara.isNull(request.hadoopHostsAddress)) {
      query["HadoopHostsAddress"] = request.hadoopHostsAddress;
    }

    if (!$dara.isNull(request.hiveConf)) {
      query["HiveConf"] = request.hiveConf;
    }

    if (!$dara.isNull(request.mapReduceConf)) {
      query["MapReduceConf"] = request.mapReduceConf;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.yarnConf)) {
      query["YarnConf"] = request.yarnConf;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHadoopDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHadoopDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHadoopDataSourceResponse({}));
  }

  /**
   * Modifies the configurations of a Hadoop data source.
   * 
   * @param request - ModifyHadoopDataSourceRequest
   * @returns ModifyHadoopDataSourceResponse
   */
  async modifyHadoopDataSource(request: $_model.ModifyHadoopDataSourceRequest): Promise<$_model.ModifyHadoopDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHadoopDataSourceWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a Java Database Connectivity (JDBC) data source.
   * 
   * @param request - ModifyJDBCDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyJDBCDataSourceResponse
   */
  async modifyJDBCDataSourceWithOptions(request: $_model.ModifyJDBCDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyJDBCDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceDescription)) {
      query["DataSourceDescription"] = request.dataSourceDescription;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.JDBCConnectionString)) {
      query["JDBCConnectionString"] = request.JDBCConnectionString;
    }

    if (!$dara.isNull(request.JDBCPassword)) {
      query["JDBCPassword"] = request.JDBCPassword;
    }

    if (!$dara.isNull(request.JDBCUserName)) {
      query["JDBCUserName"] = request.JDBCUserName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyJDBCDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyJDBCDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyJDBCDataSourceResponse({}));
  }

  /**
   * Modifies the configurations of a Java Database Connectivity (JDBC) data source.
   * 
   * @param request - ModifyJDBCDataSourceRequest
   * @returns ModifyJDBCDataSourceResponse
   */
  async modifyJDBCDataSource(request: $_model.ModifyJDBCDataSourceRequest): Promise<$_model.ModifyJDBCDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyJDBCDataSourceWithOptions(request, runtime);
  }

  /**
   * Changes the specifications of coordinator node resources for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not available for instances in reserved storage mode.
   * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * 
   * @param request - ModifyMasterSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMasterSpecResponse
   */
  async modifyMasterSpecWithOptions(request: $_model.ModifyMasterSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMasterSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceDescription)) {
      query["DBInstanceDescription"] = request.DBInstanceDescription;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.masterAISpec)) {
      query["MasterAISpec"] = request.masterAISpec;
    }

    if (!$dara.isNull(request.masterCU)) {
      query["MasterCU"] = request.masterCU;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMasterSpec",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMasterSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMasterSpecResponse({}));
  }

  /**
   * Changes the specifications of coordinator node resources for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not available for instances in reserved storage mode.
   * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * 
   * @param request - ModifyMasterSpecRequest
   * @returns ModifyMasterSpecResponse
   */
  async modifyMasterSpec(request: $_model.ModifyMasterSpecRequest): Promise<$_model.ModifyMasterSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMasterSpecWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration parameters of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation can be called to modify parameters of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyParametersResponse
   */
  async modifyParametersWithOptions(request: $_model.ModifyParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.forceRestartInstance)) {
      query["ForceRestartInstance"] = request.forceRestartInstance;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyParameters",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyParametersResponse({}));
  }

  /**
   * Modifies the configuration parameters of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation can be called to modify parameters of an AnalyticDB for PostgreSQL instance in elastic storage mode or Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyParametersRequest
   * @returns ModifyParametersResponse
   */
  async modifyParameters(request: $_model.ModifyParametersRequest): Promise<$_model.ModifyParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  /**
   * Modify Homogeneous Data Source
   * 
   * @param request - ModifyRemoteADBDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRemoteADBDataSourceResponse
   */
  async modifyRemoteADBDataSourceWithOptions(request: $_model.ModifyRemoteADBDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRemoteADBDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.localDBInstanceId)) {
      query["LocalDBInstanceId"] = request.localDBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userPassword)) {
      query["UserPassword"] = request.userPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRemoteADBDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRemoteADBDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRemoteADBDataSourceResponse({}));
  }

  /**
   * Modify Homogeneous Data Source
   * 
   * @param request - ModifyRemoteADBDataSourceRequest
   * @returns ModifyRemoteADBDataSourceResponse
   */
  async modifyRemoteADBDataSource(request: $_model.ModifyRemoteADBDataSourceRequest): Promise<$_model.ModifyRemoteADBDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRemoteADBDataSourceWithOptions(request, runtime);
  }

  /**
   * Enables or disables the SQL Explorer feature for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   You can call this operation only for AnalyticDB for PostgreSQL instances in reserved storage mode.
   * *   You can call this operation only for AnalyticDB for PostgreSQL instances in Serverless automatic scheduling mode.
   * 
   * @param request - ModifySQLCollectorPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySQLCollectorPolicyResponse
   */
  async modifySQLCollectorPolicyWithOptions(request: $_model.ModifySQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQLCollectorPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.SQLCollectorStatus)) {
      query["SQLCollectorStatus"] = request.SQLCollectorStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySQLCollectorPolicy",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySQLCollectorPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifySQLCollectorPolicyResponse({}));
  }

  /**
   * Enables or disables the SQL Explorer feature for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   *   You can call this operation only for AnalyticDB for PostgreSQL instances in reserved storage mode.
   * *   You can call this operation only for AnalyticDB for PostgreSQL instances in Serverless automatic scheduling mode.
   * 
   * @param request - ModifySQLCollectorPolicyRequest
   * @returns ModifySQLCollectorPolicyResponse
   */
  async modifySQLCollectorPolicy(request: $_model.ModifySQLCollectorPolicyRequest): Promise<$_model.ModifySQLCollectorPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySQLCollectorPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To ensure the security and stability of AnalyticDB for PostgreSQL instances, the system denies all external IP addresses to access AnalyticDB for PostgreSQL instances by default. Before you can use an AnalyticDB for PostgreSQL instance, you must add the IP address or CIDR block of your client to the IP address whitelist of the instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifySecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: $_model.ModifySecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceIPArrayAttribute)) {
      query["DBInstanceIPArrayAttribute"] = request.DBInstanceIPArrayAttribute;
    }

    if (!$dara.isNull(request.DBInstanceIPArrayName)) {
      query["DBInstanceIPArrayName"] = request.DBInstanceIPArrayName;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecurityIps",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecurityIpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecurityIpsResponse({}));
  }

  /**
   * Modifies the IP address whitelist of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * To ensure the security and stability of AnalyticDB for PostgreSQL instances, the system denies all external IP addresses to access AnalyticDB for PostgreSQL instances by default. Before you can use an AnalyticDB for PostgreSQL instance, you must add the IP address or CIDR block of your client to the IP address whitelist of the instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifySecurityIpsRequest
   * @returns ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: $_model.ModifySecurityIpsRequest): Promise<$_model.ModifySecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * Modifies a real-time data service.
   * 
   * @param request - ModifyStreamingDataServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyStreamingDataServiceResponse
   */
  async modifyStreamingDataServiceWithOptions(request: $_model.ModifyStreamingDataServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyStreamingDataServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceDescription)) {
      query["ServiceDescription"] = request.serviceDescription;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      query["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyStreamingDataService",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyStreamingDataServiceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyStreamingDataServiceResponse({}));
  }

  /**
   * Modifies a real-time data service.
   * 
   * @param request - ModifyStreamingDataServiceRequest
   * @returns ModifyStreamingDataServiceResponse
   */
  async modifyStreamingDataService(request: $_model.ModifyStreamingDataServiceRequest): Promise<$_model.ModifyStreamingDataServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyStreamingDataServiceWithOptions(request, runtime);
  }

  /**
   * Modifies a real-time service data source.
   * 
   * @param request - ModifyStreamingDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyStreamingDataSourceResponse
   */
  async modifyStreamingDataSourceWithOptions(request: $_model.ModifyStreamingDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyStreamingDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dataSourceConfig)) {
      query["DataSourceConfig"] = request.dataSourceConfig;
    }

    if (!$dara.isNull(request.dataSourceDescription)) {
      query["DataSourceDescription"] = request.dataSourceDescription;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyStreamingDataSource",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyStreamingDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyStreamingDataSourceResponse({}));
  }

  /**
   * Modifies a real-time service data source.
   * 
   * @param request - ModifyStreamingDataSourceRequest
   * @returns ModifyStreamingDataSourceResponse
   */
  async modifyStreamingDataSource(request: $_model.ModifyStreamingDataSourceRequest): Promise<$_model.ModifyStreamingDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyStreamingDataSourceWithOptions(request, runtime);
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param tmpReq - ModifyStreamingJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyStreamingJobResponse
   */
  async modifyStreamingJobWithOptions(tmpReq: $_model.ModifyStreamingJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyStreamingJobResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyStreamingJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destColumns)) {
      request.destColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destColumns, "DestColumns", "json");
    }

    if (!$dara.isNull(tmpReq.matchColumns)) {
      request.matchColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchColumns, "MatchColumns", "json");
    }

    if (!$dara.isNull(tmpReq.srcColumns)) {
      request.srcColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcColumns, "SrcColumns", "json");
    }

    if (!$dara.isNull(tmpReq.updateColumns)) {
      request.updateColumnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateColumns, "UpdateColumns", "json");
    }

    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.consistency)) {
      query["Consistency"] = request.consistency;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.destColumnsShrink)) {
      query["DestColumns"] = request.destColumnsShrink;
    }

    if (!$dara.isNull(request.destDatabase)) {
      query["DestDatabase"] = request.destDatabase;
    }

    if (!$dara.isNull(request.destSchema)) {
      query["DestSchema"] = request.destSchema;
    }

    if (!$dara.isNull(request.destTable)) {
      query["DestTable"] = request.destTable;
    }

    if (!$dara.isNull(request.errorLimitCount)) {
      query["ErrorLimitCount"] = request.errorLimitCount;
    }

    if (!$dara.isNull(request.fallbackOffset)) {
      query["FallbackOffset"] = request.fallbackOffset;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.jobConfig)) {
      query["JobConfig"] = request.jobConfig;
    }

    if (!$dara.isNull(request.jobDescription)) {
      query["JobDescription"] = request.jobDescription;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.matchColumnsShrink)) {
      query["MatchColumns"] = request.matchColumnsShrink;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.srcColumnsShrink)) {
      query["SrcColumns"] = request.srcColumnsShrink;
    }

    if (!$dara.isNull(request.tryRun)) {
      query["TryRun"] = request.tryRun;
    }

    if (!$dara.isNull(request.updateColumnsShrink)) {
      query["UpdateColumns"] = request.updateColumnsShrink;
    }

    if (!$dara.isNull(request.writeMode)) {
      query["WriteMode"] = request.writeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyStreamingJob",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyStreamingJobResponse>(await this.callApi(params, req, runtime), new $_model.ModifyStreamingJobResponse({}));
  }

  /**
   * Create External Data Source Configuration
   * 
   * @param request - ModifyStreamingJobRequest
   * @returns ModifyStreamingJobResponse
   */
  async modifyStreamingJob(request: $_model.ModifyStreamingJobRequest): Promise<$_model.ModifyStreamingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyStreamingJobWithOptions(request, runtime);
  }

  /**
   * Sets or replaces the IP address whitelist for a specified Supabase project.
   * 
   * @remarks
   * Before you can connect to a Supabase project, you must add your client\\"s IP address or CIDR block to the project\\"s whitelist.
   * 
   * @param request - ModifySupabaseProjectSecurityIpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySupabaseProjectSecurityIpsResponse
   */
  async modifySupabaseProjectSecurityIpsWithOptions(request: $_model.ModifySupabaseProjectSecurityIpsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySupabaseProjectSecurityIpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySupabaseProjectSecurityIps",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySupabaseProjectSecurityIpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifySupabaseProjectSecurityIpsResponse({}));
  }

  /**
   * Sets or replaces the IP address whitelist for a specified Supabase project.
   * 
   * @remarks
   * Before you can connect to a Supabase project, you must add your client\\"s IP address or CIDR block to the project\\"s whitelist.
   * 
   * @param request - ModifySupabaseProjectSecurityIpsRequest
   * @returns ModifySupabaseProjectSecurityIpsResponse
   */
  async modifySupabaseProjectSecurityIps(request: $_model.ModifySupabaseProjectSecurityIpsRequest): Promise<$_model.ModifySupabaseProjectSecurityIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySupabaseProjectSecurityIpsWithOptions(request, runtime);
  }

  /**
   * Modifies the vector engine optimization configuration of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyVectorConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyVectorConfigurationResponse
   */
  async modifyVectorConfigurationWithOptions(request: $_model.ModifyVectorConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyVectorConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.vectorConfigurationStatus)) {
      query["VectorConfigurationStatus"] = request.vectorConfigurationStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyVectorConfiguration",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyVectorConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyVectorConfigurationResponse({}));
  }

  /**
   * Modifies the vector engine optimization configuration of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ModifyVectorConfigurationRequest
   * @returns ModifyVectorConfigurationResponse
   */
  async modifyVectorConfiguration(request: $_model.ModifyVectorConfigurationRequest): Promise<$_model.ModifyVectorConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyVectorConfigurationWithOptions(request, runtime);
  }

  /**
   * Pauses data redistribution.
   * 
   * @param request - PauseDataRedistributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseDataRedistributeResponse
   */
  async pauseDataRedistributeWithOptions(request: $_model.PauseDataRedistributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseDataRedistributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseDataRedistribute",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseDataRedistributeResponse>(await this.callApi(params, req, runtime), new $_model.PauseDataRedistributeResponse({}));
  }

  /**
   * Pauses data redistribution.
   * 
   * @param request - PauseDataRedistributeRequest
   * @returns PauseDataRedistributeResponse
   */
  async pauseDataRedistribute(request: $_model.PauseDataRedistributeRequest): Promise<$_model.PauseDataRedistributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseDataRedistributeWithOptions(request, runtime);
  }

  /**
   * Pauses an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to pause an AnalyticDB for PostgreSQL instance that is in the **Running** state.
   * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PauseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseInstanceResponse
   */
  async pauseInstanceWithOptions(request: $_model.PauseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.PauseInstanceResponse({}));
  }

  /**
   * Pauses an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to pause an AnalyticDB for PostgreSQL instance that is in the **Running** state.
   * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PauseInstanceRequest
   * @returns PauseInstanceResponse
   */
  async pauseInstance(request: $_model.PauseInstanceRequest): Promise<$_model.PauseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseInstanceWithOptions(request, runtime);
  }

  /**
   * Query Vector Data
   * 
   * @param tmpReq - QueryCollectionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCollectionDataResponse
   */
  async queryCollectionDataWithOptions(tmpReq: $_model.QueryCollectionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCollectionDataResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCollectionDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hybridSearchArgs)) {
      request.hybridSearchArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hybridSearchArgs, "HybridSearchArgs", "json");
    }

    if (!$dara.isNull(tmpReq.relationalTableFilter)) {
      request.relationalTableFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.relationalTableFilter, "RelationalTableFilter", "json");
    }

    if (!$dara.isNull(tmpReq.sparseVector)) {
      request.sparseVectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sparseVector, "SparseVector", "json");
    }

    if (!$dara.isNull(tmpReq.vector)) {
      request.vectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vector, "Vector", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.hybridSearch)) {
      query["HybridSearch"] = request.hybridSearch;
    }

    if (!$dara.isNull(request.hybridSearchArgsShrink)) {
      query["HybridSearchArgs"] = request.hybridSearchArgsShrink;
    }

    if (!$dara.isNull(request.includeMetadataFields)) {
      query["IncludeMetadataFields"] = request.includeMetadataFields;
    }

    if (!$dara.isNull(request.includeSparseValues)) {
      query["IncludeSparseValues"] = request.includeSparseValues;
    }

    if (!$dara.isNull(request.includeValues)) {
      query["IncludeValues"] = request.includeValues;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relationalTableFilterShrink)) {
      query["RelationalTableFilter"] = request.relationalTableFilterShrink;
    }

    if (!$dara.isNull(request.sparseVectorShrink)) {
      query["SparseVector"] = request.sparseVectorShrink;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.vectorShrink)) {
      query["Vector"] = request.vectorShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCollectionData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCollectionDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryCollectionDataResponse({}));
  }

  /**
   * Query Vector Data
   * 
   * @param request - QueryCollectionDataRequest
   * @returns QueryCollectionDataResponse
   */
  async queryCollectionData(request: $_model.QueryCollectionDataRequest): Promise<$_model.QueryCollectionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCollectionDataWithOptions(request, runtime);
  }

  /**
   * Query
   * 
   * @param tmpReq - QueryContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContentResponse
   */
  async queryContentWithOptions(tmpReq: $_model.QueryContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContentResponse> {
    tmpReq.validate();
    let request = new $_model.QueryContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.graphSearchArgs)) {
      request.graphSearchArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.graphSearchArgs, "GraphSearchArgs", "json");
    }

    if (!$dara.isNull(tmpReq.hybridSearchArgs)) {
      request.hybridSearchArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hybridSearchArgs, "HybridSearchArgs", "json");
    }

    if (!$dara.isNull(tmpReq.recallWindow)) {
      request.recallWindowShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recallWindow, "RecallWindow", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.graphEnhance)) {
      query["GraphEnhance"] = request.graphEnhance;
    }

    if (!$dara.isNull(request.graphSearchArgsShrink)) {
      query["GraphSearchArgs"] = request.graphSearchArgsShrink;
    }

    if (!$dara.isNull(request.hybridSearch)) {
      query["HybridSearch"] = request.hybridSearch;
    }

    if (!$dara.isNull(request.hybridSearchArgsShrink)) {
      query["HybridSearchArgs"] = request.hybridSearchArgsShrink;
    }

    if (!$dara.isNull(request.includeFileUrl)) {
      query["IncludeFileUrl"] = request.includeFileUrl;
    }

    if (!$dara.isNull(request.includeMetadataFields)) {
      query["IncludeMetadataFields"] = request.includeMetadataFields;
    }

    if (!$dara.isNull(request.includeVector)) {
      query["IncludeVector"] = request.includeVector;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recallWindowShrink)) {
      query["RecallWindow"] = request.recallWindowShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rerankFactor)) {
      query["RerankFactor"] = request.rerankFactor;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.urlExpiration)) {
      query["UrlExpiration"] = request.urlExpiration;
    }

    if (!$dara.isNull(request.useFullTextRetrieval)) {
      query["UseFullTextRetrieval"] = request.useFullTextRetrieval;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryContent",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContentResponse>(await this.callApi(params, req, runtime), new $_model.QueryContentResponse({}));
  }

  /**
   * Query
   * 
   * @param request - QueryContentRequest
   * @returns QueryContentResponse
   */
  async queryContent(request: $_model.QueryContentRequest): Promise<$_model.QueryContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContentWithOptions(request, runtime);
  }

  async queryContentAdvance(request: $_model.QueryContentAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContentResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "gpdb",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let queryContentReq = new $_model.QueryContentRequest({ });
    OpenApiUtil.convert(request, queryContentReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      queryContentReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let queryContentResp = await this.queryContentWithOptions(queryContentReq, runtime);
    return queryContentResp;
  }

  /**
   * Retrieves vectors and metadata from multiple specified document collections using natural language queries, then merge and return the results from all retrieval paths.
   * 
   * @param tmpReq - QueryKnowledgeBasesContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryKnowledgeBasesContentResponse
   */
  async queryKnowledgeBasesContentWithOptions(tmpReq: $_model.QueryKnowledgeBasesContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryKnowledgeBasesContentResponse> {
    tmpReq.validate();
    let request = new $_model.QueryKnowledgeBasesContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.mergeMethodArgs)) {
      request.mergeMethodArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mergeMethodArgs, "MergeMethodArgs", "json");
    }

    if (!$dara.isNull(tmpReq.sourceCollection)) {
      request.sourceCollectionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCollection, "SourceCollection", "json");
    }

    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.mergeMethod)) {
      query["MergeMethod"] = request.mergeMethod;
    }

    if (!$dara.isNull(request.mergeMethodArgsShrink)) {
      query["MergeMethodArgs"] = request.mergeMethodArgsShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rerankFactor)) {
      query["RerankFactor"] = request.rerankFactor;
    }

    if (!$dara.isNull(request.sourceCollectionShrink)) {
      query["SourceCollection"] = request.sourceCollectionShrink;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryKnowledgeBasesContent",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryKnowledgeBasesContentResponse>(await this.callApi(params, req, runtime), new $_model.QueryKnowledgeBasesContentResponse({}));
  }

  /**
   * Retrieves vectors and metadata from multiple specified document collections using natural language queries, then merge and return the results from all retrieval paths.
   * 
   * @param request - QueryKnowledgeBasesContentRequest
   * @returns QueryKnowledgeBasesContentResponse
   */
  async queryKnowledgeBasesContent(request: $_model.QueryKnowledgeBasesContentRequest): Promise<$_model.QueryKnowledgeBasesContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryKnowledgeBasesContentWithOptions(request, runtime);
  }

  /**
   * Rebalances an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - RebalanceDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebalanceDBInstanceResponse
   */
  async rebalanceDBInstanceWithOptions(request: $_model.RebalanceDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebalanceDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebalanceDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebalanceDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RebalanceDBInstanceResponse({}));
  }

  /**
   * Rebalances an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - RebalanceDBInstanceRequest
   * @returns RebalanceDBInstanceResponse
   */
  async rebalanceDBInstance(request: $_model.RebalanceDBInstanceRequest): Promise<$_model.RebalanceDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebalanceDBInstanceWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnectionWithOptions(request: $_model.ReleaseInstancePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstancePublicConnection",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstancePublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstancePublicConnectionResponse({}));
  }

  /**
   * Releases the public endpoint of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ReleaseInstancePublicConnectionRequest
   * @returns ReleaseInstancePublicConnectionResponse
   */
  async releaseInstancePublicConnection(request: $_model.ReleaseInstancePublicConnectionRequest): Promise<$_model.ReleaseInstancePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstancePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Score and re-order documents using a model
   * 
   * @param tmpReq - RerankRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RerankResponse
   */
  async rerankWithOptions(tmpReq: $_model.RerankRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RerankResponse> {
    tmpReq.validate();
    let request = new $_model.RerankShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.documents)) {
      request.documentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documents, "Documents", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.documentsShrink)) {
      body["Documents"] = request.documentsShrink;
    }

    if (!$dara.isNull(request.maxChunksPerDoc)) {
      body["MaxChunksPerDoc"] = request.maxChunksPerDoc;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.returnDocuments)) {
      body["ReturnDocuments"] = request.returnDocuments;
    }

    if (!$dara.isNull(request.topK)) {
      body["TopK"] = request.topK;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Rerank",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RerankResponse>(await this.callApi(params, req, runtime), new $_model.RerankResponse({}));
  }

  /**
   * Score and re-order documents using a model
   * 
   * @param request - RerankRequest
   * @returns RerankResponse
   */
  async rerank(request: $_model.RerankRequest): Promise<$_model.RerankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rerankWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountPasswordResponse({}));
  }

  /**
   * Resets the password of a database account for an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Resets the IMV statistics.
   * 
   * @param request - ResetIMVMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetIMVMonitorDataResponse
   */
  async resetIMVMonitorDataWithOptions(request: $_model.ResetIMVMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetIMVMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetIMVMonitorData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetIMVMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.ResetIMVMonitorDataResponse({}));
  }

  /**
   * Resets the IMV statistics.
   * 
   * @param request - ResetIMVMonitorDataRequest
   * @returns ResetIMVMonitorDataResponse
   */
  async resetIMVMonitorData(request: $_model.ResetIMVMonitorDataRequest): Promise<$_model.ResetIMVMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetIMVMonitorDataWithOptions(request, runtime);
  }

  /**
   * Reset the password of a Supabase database
   * 
   * @remarks
   * Call this API to reset the password of the Supabase database.
   * 
   * @param request - ResetSupabaseProjectPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSupabaseProjectPasswordResponse
   */
  async resetSupabaseProjectPasswordWithOptions(request: $_model.ResetSupabaseProjectPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetSupabaseProjectPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSupabaseProjectPassword",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetSupabaseProjectPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetSupabaseProjectPasswordResponse({}));
  }

  /**
   * Reset the password of a Supabase database
   * 
   * @remarks
   * Call this API to reset the password of the Supabase database.
   * 
   * @param request - ResetSupabaseProjectPasswordRequest
   * @returns ResetSupabaseProjectPasswordResponse
   */
  async resetSupabaseProjectPassword(request: $_model.ResetSupabaseProjectPasswordRequest): Promise<$_model.ResetSupabaseProjectPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSupabaseProjectPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * A restart takes about 3 to 30 minutes. During the restart, services are unavailable. We recommend that you restart the instance during off-peak hours. After the instance is restarted and enters the running state, you can access the instance.
   * ## Limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RestartDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstanceWithOptions(request: $_model.RestartDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartDBInstanceResponse({}));
  }

  /**
   * Restarts an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * A restart takes about 3 to 30 minutes. During the restart, services are unavailable. We recommend that you restart the instance during off-peak hours. After the instance is restarted and enters the running state, you can access the instance.
   * ## Limit
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered and may affect your business. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - RestartDBInstanceRequest
   * @returns RestartDBInstanceResponse
   */
  async restartDBInstance(request: $_model.RestartDBInstanceRequest): Promise<$_model.RestartDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBInstanceWithOptions(request, runtime);
  }

  /**
   * Resumes data redistribution.
   * 
   * @param request - ResumeDataRedistributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeDataRedistributeResponse
   */
  async resumeDataRedistributeWithOptions(request: $_model.ResumeDataRedistributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeDataRedistributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeDataRedistribute",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeDataRedistributeResponse>(await this.callApi(params, req, runtime), new $_model.ResumeDataRedistributeResponse({}));
  }

  /**
   * Resumes data redistribution.
   * 
   * @param request - ResumeDataRedistributeRequest
   * @returns ResumeDataRedistributeResponse
   */
  async resumeDataRedistribute(request: $_model.ResumeDataRedistributeRequest): Promise<$_model.ResumeDataRedistributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeDataRedistributeWithOptions(request, runtime);
  }

  /**
   * Resumes an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to resume an AnalyticDB for PostgreSQL instance that is in the **Paused** state.
   * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ResumeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(request: $_model.ResumeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeInstanceResponse({}));
  }

  /**
   * Resumes an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to resume an AnalyticDB for PostgreSQL instance that is in the **Paused** state.
   * This operation is available only for AnalyticDB for PostgreSQL instances in Serverless mode that run V1.0.2.1 or later. For more information about how to view and update the minor engine version of an instance, see [View the minor engine version](https://help.aliyun.com/document_detail/277424.html) and [Update the minor engine version](https://help.aliyun.com/document_detail/139271.html).
   * >  Before you call this operation, make sure that you are familiar with the billing methods and pricing of AnalyticDB for PostgreSQL instances. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ResumeInstanceRequest
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(request: $_model.ResumeInstanceRequest): Promise<$_model.ResumeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  /**
   * Enables or disables a plan for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to enable or disable a specified plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SetDBInstancePlanStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDBInstancePlanStatusResponse
   */
  async setDBInstancePlanStatusWithOptions(request: $_model.SetDBInstancePlanStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDBInstancePlanStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planStatus)) {
      query["PlanStatus"] = request.planStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDBInstancePlanStatus",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDBInstancePlanStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDBInstancePlanStatusResponse({}));
  }

  /**
   * Enables or disables a plan for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to enable or disable a specified plan. The plan management feature is supported only for AnalyticDB for PostgreSQL instances in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SetDBInstancePlanStatusRequest
   * @returns SetDBInstancePlanStatusResponse
   */
  async setDBInstancePlanStatus(request: $_model.SetDBInstancePlanStatusRequest): Promise<$_model.SetDBInstancePlanStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDBInstancePlanStatusWithOptions(request, runtime);
  }

  /**
   * Enables or disables data sharing for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is called to enable or disable data sharing for an AnalyticDB for PostgreSQL instance in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param tmpReq - SetDataShareInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataShareInstanceResponse
   */
  async setDataShareInstanceWithOptions(tmpReq: $_model.SetDataShareInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDataShareInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.SetDataShareInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataShareInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDataShareInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SetDataShareInstanceResponse({}));
  }

  /**
   * Enables or disables data sharing for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is called to enable or disable data sharing for an AnalyticDB for PostgreSQL instance in Serverless mode.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. Requests that exceed this limit are dropped and you will experience service interruptions. We recommend that you take note of this limit when you call this operation.
   * 
   * @param request - SetDataShareInstanceRequest
   * @returns SetDataShareInstanceResponse
   */
  async setDataShareInstance(request: $_model.SetDataShareInstanceRequest): Promise<$_model.SetDataShareInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataShareInstanceWithOptions(request, runtime);
  }

  /**
   * Switches between the internal and public endpoints of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not supported for AnalyticDB for PostgreSQL instances in elastic storage mode or Serverless mode.
   * 
   * @param request - SwitchDBInstanceNetTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchDBInstanceNetTypeResponse
   */
  async switchDBInstanceNetTypeWithOptions(request: $_model.SwitchDBInstanceNetTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchDBInstanceNetTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchDBInstanceNetType",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchDBInstanceNetTypeResponse>(await this.callApi(params, req, runtime), new $_model.SwitchDBInstanceNetTypeResponse({}));
  }

  /**
   * Switches between the internal and public endpoints of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not supported for AnalyticDB for PostgreSQL instances in elastic storage mode or Serverless mode.
   * 
   * @param request - SwitchDBInstanceNetTypeRequest
   * @returns SwitchDBInstanceNetTypeResponse
   */
  async switchDBInstanceNetType(request: $_model.SwitchDBInstanceNetTypeRequest): Promise<$_model.SwitchDBInstanceNetTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchDBInstanceNetTypeWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to AnalyticDB for PostgreSQL instances.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Creates and adds tags to AnalyticDB for PostgreSQL instances.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Generates text embeddings using an embedding model.
   * 
   * @param tmpReq - TextEmbeddingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextEmbeddingResponse
   */
  async textEmbeddingWithOptions(tmpReq: $_model.TextEmbeddingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TextEmbeddingResponse> {
    tmpReq.validate();
    let request = new $_model.TextEmbeddingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextEmbedding",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextEmbeddingResponse>(await this.callApi(params, req, runtime), new $_model.TextEmbeddingResponse({}));
  }

  /**
   * Generates text embeddings using an embedding model.
   * 
   * @param request - TextEmbeddingRequest
   * @returns TextEmbeddingResponse
   */
  async textEmbedding(request: $_model.TextEmbeddingRequest): Promise<$_model.TextEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textEmbeddingWithOptions(request, runtime);
  }

  /**
   * Unbinds database roles from a resource group.
   * 
   * @param tmpReq - UnbindDBResourceGroupWithRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourceGroupWithRoleResponse
   */
  async unbindDBResourceGroupWithRoleWithOptions(tmpReq: $_model.UnbindDBResourceGroupWithRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDBResourceGroupWithRoleResponse> {
    tmpReq.validate();
    let request = new $_model.UnbindDBResourceGroupWithRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleList)) {
      request.roleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleList, "RoleList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.roleListShrink)) {
      query["RoleList"] = request.roleListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDBResourceGroupWithRole",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDBResourceGroupWithRoleResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDBResourceGroupWithRoleResponse({}));
  }

  /**
   * Unbinds database roles from a resource group.
   * 
   * @param request - UnbindDBResourceGroupWithRoleRequest
   * @returns UnbindDBResourceGroupWithRoleResponse
   */
  async unbindDBResourceGroupWithRole(request: $_model.UnbindDBResourceGroupWithRoleRequest): Promise<$_model.UnbindDBResourceGroupWithRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDBResourceGroupWithRoleWithOptions(request, runtime);
  }

  /**
   * Releases a sample dataset from an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to release a sample dataset from an AnalyticDB for PostgreSQL instance. You must have already loaded the sample dataset.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnloadSampleDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnloadSampleDataResponse
   */
  async unloadSampleDataWithOptions(request: $_model.UnloadSampleDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnloadSampleDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnloadSampleData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnloadSampleDataResponse>(await this.callApi(params, req, runtime), new $_model.UnloadSampleDataResponse({}));
  }

  /**
   * Releases a sample dataset from an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to release a sample dataset from an AnalyticDB for PostgreSQL instance. You must have already loaded the sample dataset.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnloadSampleDataRequest
   * @returns UnloadSampleDataResponse
   */
  async unloadSampleData(request: $_model.UnloadSampleDataRequest): Promise<$_model.UnloadSampleDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unloadSampleDataWithOptions(request, runtime);
  }

  /**
   * Remove resource tags
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Remove resource tags
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Update Metadata of Collection Data
   * 
   * @param tmpReq - UpdateCollectionDataMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCollectionDataMetadataResponse
   */
  async updateCollectionDataMetadataWithOptions(tmpReq: $_model.UpdateCollectionDataMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCollectionDataMetadataResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCollectionDataMetadataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    if (!$dara.isNull(tmpReq.metadata)) {
      request.metadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metadata, "Metadata", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.metadataShrink)) {
      query["Metadata"] = request.metadataShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCollectionDataMetadata",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCollectionDataMetadataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCollectionDataMetadataResponse({}));
  }

  /**
   * Update Metadata of Collection Data
   * 
   * @param request - UpdateCollectionDataMetadataRequest
   * @returns UpdateCollectionDataMetadataResponse
   */
  async updateCollectionDataMetadata(request: $_model.UpdateCollectionDataMetadataRequest): Promise<$_model.UpdateCollectionDataMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCollectionDataMetadataWithOptions(request, runtime);
  }

  /**
   * Modifies a plan for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to modify a plan for an AnalyticDB for PostgreSQL instance in Serverless mode. For example, you can modify a plan for periodically pausing and resuming an instance or scaling an instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateDBInstancePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDBInstancePlanResponse
   */
  async updateDBInstancePlanWithOptions(request: $_model.UpdateDBInstancePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDBInstancePlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.planConfig)) {
      query["PlanConfig"] = request.planConfig;
    }

    if (!$dara.isNull(request.planDesc)) {
      query["PlanDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planEndDate)) {
      query["PlanEndDate"] = request.planEndDate;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.planStartDate)) {
      query["PlanStartDate"] = request.planStartDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDBInstancePlan",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDBInstancePlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDBInstancePlanResponse({}));
  }

  /**
   * Modifies a plan for an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * You can call this operation to modify a plan for an AnalyticDB for PostgreSQL instance in Serverless mode. For example, you can modify a plan for periodically pausing and resuming an instance or scaling an instance.
   * ## Limits
   * You can call this operation up to 1,000 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateDBInstancePlanRequest
   * @returns UpdateDBInstancePlanResponse
   */
  async updateDBInstancePlan(request: $_model.UpdateDBInstancePlanRequest): Promise<$_model.UpdateDBInstancePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDBInstancePlanWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not available for instances in reserved storage mode.
   * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * 
   * @param request - UpgradeDBInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBInstanceResponse
   */
  async upgradeDBInstanceWithOptions(request: $_model.UpgradeDBInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheStorageSize)) {
      query["CacheStorageSize"] = request.cacheStorageSize;
    }

    if (!$dara.isNull(request.DBInstanceClass)) {
      query["DBInstanceClass"] = request.DBInstanceClass;
    }

    if (!$dara.isNull(request.DBInstanceGroupCount)) {
      query["DBInstanceGroupCount"] = request.DBInstanceGroupCount;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.masterNodeNum)) {
      query["MasterNodeNum"] = request.masterNodeNum;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.segDiskPerformanceLevel)) {
      query["SegDiskPerformanceLevel"] = request.segDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.segNodeNum)) {
      query["SegNodeNum"] = request.segNodeNum;
    }

    if (!$dara.isNull(request.segStorageType)) {
      query["SegStorageType"] = request.segStorageType;
    }

    if (!$dara.isNull(request.serverlessResource)) {
      query["ServerlessResource"] = request.serverlessResource;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBInstance",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBInstanceResponse({}));
  }

  /**
   * Changes the configurations of an AnalyticDB for PostgreSQL instance.
   * 
   * @remarks
   * This operation is not available for instances in reserved storage mode.
   * Before you call this operation, make sure that you are familiar with the billing of AnalyticDB for PostgreSQL. For more information, see [Billing methods](https://help.aliyun.com/document_detail/35406.html) and [AnalyticDB for PostgreSQL pricing](https://www.alibabacloud.com/zh/product/hybriddb-postgresql/pricing).
   * 
   * @param request - UpgradeDBInstanceRequest
   * @returns UpgradeDBInstanceResponse
   */
  async upgradeDBInstance(request: $_model.UpgradeDBInstanceRequest): Promise<$_model.UpgradeDBInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBInstanceWithOptions(request, runtime);
  }

  /**
   * Upgrades the minor version of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - UpgradeDBVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBVersionResponse
   */
  async upgradeDBVersionWithOptions(request: $_model.UpgradeDBVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.majorVersion)) {
      query["MajorVersion"] = request.majorVersion;
    }

    if (!$dara.isNull(request.minorVersion)) {
      query["MinorVersion"] = request.minorVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBVersion",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBVersionResponse({}));
  }

  /**
   * Upgrades the minor version of an AnalyticDB for PostgreSQL instance.
   * 
   * @param request - UpgradeDBVersionRequest
   * @returns UpgradeDBVersionResponse
   */
  async upgradeDBVersion(request: $_model.UpgradeDBVersionRequest): Promise<$_model.UpgradeDBVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBVersionWithOptions(request, runtime);
  }

  /**
   * Updates extensions.
   * 
   * @param request - UpgradeExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeExtensionsResponse
   */
  async upgradeExtensionsWithOptions(request: $_model.UpgradeExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeExtensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.extensions)) {
      query["Extensions"] = request.extensions;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeExtensions",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeExtensionsResponse({}));
  }

  /**
   * Updates extensions.
   * 
   * @param request - UpgradeExtensionsRequest
   * @returns UpgradeExtensionsResponse
   */
  async upgradeExtensions(request: $_model.UpgradeExtensionsRequest): Promise<$_model.UpgradeExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeExtensionsWithOptions(request, runtime);
  }

  /**
   * Asynchronous Document Upload
   * 
   * @remarks
   * The server loads and chunks a document based on the file extension, performs vectorization by using the embedding model that is specified when you call the CreateDocumentCollection operation, and then writes the document to the specified document collection. This operation supports multi-modal embedding for various formats of text and images.
   * Related operations:
   * *   You can call the GetUploadDocumentJob operation to query the progress and result of a document upload job.
   * *   You can call the CancelUploadDocumentJob operation to cancel a document upload job.
   * > 
   * *   After a document upload request is submitted, the request is queued for processing. Up to 20 documents in the Pending and Running states can be processed within a Resource Access Management (RAM) user or Alibaba Cloud account.
   * *   A text document can be split into up to 100,000 chunks.
   * *   If a document collection uses the OnePeace model, each RAM user or Alibaba Cloud account can upload and query up to 10,000 images.
   * 
   * @param tmpReq - UploadDocumentAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadDocumentAsyncResponse
   */
  async uploadDocumentAsyncWithOptions(tmpReq: $_model.UploadDocumentAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDocumentAsyncResponse> {
    tmpReq.validate();
    let request = new $_model.UploadDocumentAsyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metadata)) {
      request.metadataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metadata, "Metadata", "json");
    }

    if (!$dara.isNull(tmpReq.separators)) {
      request.separatorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.separators, "Separators", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkOverlap)) {
      body["ChunkOverlap"] = request.chunkOverlap;
    }

    if (!$dara.isNull(request.chunkSize)) {
      body["ChunkSize"] = request.chunkSize;
    }

    if (!$dara.isNull(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.documentLoaderName)) {
      body["DocumentLoaderName"] = request.documentLoaderName;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.metadataShrink)) {
      body["Metadata"] = request.metadataShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.separatorsShrink)) {
      body["Separators"] = request.separatorsShrink;
    }

    if (!$dara.isNull(request.splitterModel)) {
      body["SplitterModel"] = request.splitterModel;
    }

    if (!$dara.isNull(request.textSplitterName)) {
      body["TextSplitterName"] = request.textSplitterName;
    }

    if (!$dara.isNull(request.vlEnhance)) {
      body["VlEnhance"] = request.vlEnhance;
    }

    if (!$dara.isNull(request.zhTitleEnhance)) {
      body["ZhTitleEnhance"] = request.zhTitleEnhance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadDocumentAsync",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadDocumentAsyncResponse>(await this.callApi(params, req, runtime), new $_model.UploadDocumentAsyncResponse({}));
  }

  /**
   * Asynchronous Document Upload
   * 
   * @remarks
   * The server loads and chunks a document based on the file extension, performs vectorization by using the embedding model that is specified when you call the CreateDocumentCollection operation, and then writes the document to the specified document collection. This operation supports multi-modal embedding for various formats of text and images.
   * Related operations:
   * *   You can call the GetUploadDocumentJob operation to query the progress and result of a document upload job.
   * *   You can call the CancelUploadDocumentJob operation to cancel a document upload job.
   * > 
   * *   After a document upload request is submitted, the request is queued for processing. Up to 20 documents in the Pending and Running states can be processed within a Resource Access Management (RAM) user or Alibaba Cloud account.
   * *   A text document can be split into up to 100,000 chunks.
   * *   If a document collection uses the OnePeace model, each RAM user or Alibaba Cloud account can upload and query up to 10,000 images.
   * 
   * @param request - UploadDocumentAsyncRequest
   * @returns UploadDocumentAsyncResponse
   */
  async uploadDocumentAsync(request: $_model.UploadDocumentAsyncRequest): Promise<$_model.UploadDocumentAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadDocumentAsyncWithOptions(request, runtime);
  }

  async uploadDocumentAsyncAdvance(request: $_model.UploadDocumentAsyncAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadDocumentAsyncResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "gpdb",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let uploadDocumentAsyncReq = new $_model.UploadDocumentAsyncRequest({ });
    OpenApiUtil.convert(request, uploadDocumentAsyncReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      uploadDocumentAsyncReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let uploadDocumentAsyncResp = await this.uploadDocumentAsyncWithOptions(uploadDocumentAsyncReq, runtime);
    return uploadDocumentAsyncResp;
  }

  /**
   * Splits a document into chunks and uploads the vectorized chunks to a document collection.
   * 
   * @remarks
   * The vector algorithm that is used for the document is specified when you call the CreateDocumentCollection operation.
   * 
   * @param tmpReq - UpsertChunksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertChunksResponse
   */
  async upsertChunksWithOptions(tmpReq: $_model.UpsertChunksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertChunksResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertChunksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.textChunks)) {
      request.textChunksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textChunks, "TextChunks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.allowInsertWithFilter)) {
      query["AllowInsertWithFilter"] = request.allowInsertWithFilter;
    }

    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shouldReplaceFile)) {
      query["ShouldReplaceFile"] = request.shouldReplaceFile;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.textChunksShrink)) {
      body["TextChunks"] = request.textChunksShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertChunks",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertChunksResponse>(await this.callApi(params, req, runtime), new $_model.UpsertChunksResponse({}));
  }

  /**
   * Splits a document into chunks and uploads the vectorized chunks to a document collection.
   * 
   * @remarks
   * The vector algorithm that is used for the document is specified when you call the CreateDocumentCollection operation.
   * 
   * @param request - UpsertChunksRequest
   * @returns UpsertChunksResponse
   */
  async upsertChunks(request: $_model.UpsertChunksRequest): Promise<$_model.UpsertChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertChunksWithOptions(request, runtime);
  }

  /**
   * Uploads vector data to a vector collection.
   * 
   * @param tmpReq - UpsertCollectionDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertCollectionDataResponse
   */
  async upsertCollectionDataWithOptions(tmpReq: $_model.UpsertCollectionDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertCollectionDataResponse> {
    tmpReq.validate();
    let request = new $_model.UpsertCollectionDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rows)) {
      request.rowsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rows, "Rows", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collection)) {
      query["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      query["NamespacePassword"] = request.namespacePassword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rowsShrink)) {
      body["Rows"] = request.rowsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertCollectionData",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertCollectionDataResponse>(await this.callApi(params, req, runtime), new $_model.UpsertCollectionDataResponse({}));
  }

  /**
   * Uploads vector data to a vector collection.
   * 
   * @param request - UpsertCollectionDataRequest
   * @returns UpsertCollectionDataResponse
   */
  async upsertCollectionData(request: $_model.UpsertCollectionDataRequest): Promise<$_model.UpsertCollectionDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertCollectionDataWithOptions(request, runtime);
  }

  /**
   * Uploads vector data in an asynchronous manner by using an on-premises file or a password-free Internet-accessible file URL. The vector data can be up to 200 MB in size.
   * 
   * @remarks
   * This operation is the asynchronous operation of `UpsertCollectionData`. The `UpsertCollectionData` operation supports up to 10 MB of data, and this operation supports up to 200 MB of data.
   * >  Related operations:
   * *   You can call the GetUpsertCollectionDataJob operation to query the progress and result of an upload job.
   * *   You can call the CancelUpsertCollectionDataJob operation to cancel an upload job.
   * > You can upload data for the same collection only in a serial manner.
   * 
   * @param request - UpsertCollectionDataAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertCollectionDataAsyncResponse
   */
  async upsertCollectionDataAsyncWithOptions(request: $_model.UpsertCollectionDataAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertCollectionDataAsyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collection)) {
      body["Collection"] = request.collection;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespacePassword)) {
      body["NamespacePassword"] = request.namespacePassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertCollectionDataAsync",
      version: "2016-05-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertCollectionDataAsyncResponse>(await this.callApi(params, req, runtime), new $_model.UpsertCollectionDataAsyncResponse({}));
  }

  /**
   * Uploads vector data in an asynchronous manner by using an on-premises file or a password-free Internet-accessible file URL. The vector data can be up to 200 MB in size.
   * 
   * @remarks
   * This operation is the asynchronous operation of `UpsertCollectionData`. The `UpsertCollectionData` operation supports up to 10 MB of data, and this operation supports up to 200 MB of data.
   * >  Related operations:
   * *   You can call the GetUpsertCollectionDataJob operation to query the progress and result of an upload job.
   * *   You can call the CancelUpsertCollectionDataJob operation to cancel an upload job.
   * > You can upload data for the same collection only in a serial manner.
   * 
   * @param request - UpsertCollectionDataAsyncRequest
   * @returns UpsertCollectionDataAsyncResponse
   */
  async upsertCollectionDataAsync(request: $_model.UpsertCollectionDataAsyncRequest): Promise<$_model.UpsertCollectionDataAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upsertCollectionDataAsyncWithOptions(request, runtime);
  }

  async upsertCollectionDataAsyncAdvance(request: $_model.UpsertCollectionDataAsyncAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertCollectionDataAsyncResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "gpdb",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let upsertCollectionDataAsyncReq = new $_model.UpsertCollectionDataAsyncRequest({ });
    OpenApiUtil.convert(request, upsertCollectionDataAsyncReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      upsertCollectionDataAsyncReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let upsertCollectionDataAsyncResp = await this.upsertCollectionDataAsyncWithOptions(upsertCollectionDataAsyncReq, runtime);
    return upsertCollectionDataAsyncResp;
  }

}
