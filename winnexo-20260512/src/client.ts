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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("winnexo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
        let tmp = String(form["host"]);
        let host = `${bucketName}.${tmp}`;
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: host,
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
   * Performs a service health check.
   * 
   * @param request - CheckHealthRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckHealthResponse
   */
  async checkHealthWithOptions(request: $_model.CheckHealthRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckHealthResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckHealth",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/checkHealth`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckHealthResponse>(await this.callApi(params, req, runtime), new $_model.CheckHealthResponse({}));
  }

  /**
   * Performs a service health check.
   * 
   * @param request - CheckHealthRequest
   * @returns CheckHealthResponse
   */
  async checkHealth(request: $_model.CheckHealthRequest): Promise<$_model.CheckHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkHealthWithOptions(request, headers, runtime);
  }

  /**
   * Creates a session.
   * 
   * @param tmpReq - CreateConversationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConversationResponse
   */
  async createConversationWithOptions(tmpReq: $_model.CreateConversationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConversationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateConversationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operatingObjectName)) {
      request.operatingObjectNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operatingObjectName, "operatingObjectName", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metadata)) {
      body["metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.objectId)) {
      body["objectId"] = request.objectId;
    }

    if (!$dara.isNull(request.operatingObjectNameShrink)) {
      body["operatingObjectName"] = request.operatingObjectNameShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConversation",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createConversation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConversationResponse>(await this.callApi(params, req, runtime), new $_model.CreateConversationResponse({}));
  }

  /**
   * Creates a session.
   * 
   * @param request - CreateConversationRequest
   * @returns CreateConversationResponse
   */
  async createConversation(request: $_model.CreateConversationRequest): Promise<$_model.CreateConversationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConversationWithOptions(request, headers, runtime);
  }

  /**
   * Registers a custom-only organization.
   * 
   * @remarks
   * Registers a custom-only organization for subsequent department tree push through syncOrgStructure.
   *     Registration logic:
   *     1. Validates the corpId format (must start with a lowercase letter or digit, 3-64 characters, hyphens allowed).
   *     2. Delegates to OrgSyncAuthorizedService to execute registration (includes permission verification and tenant-level uniqueness check).
   *     3. Returns the registration result.
   *     Note: Custom-only organizations support only department tree synchronization. Member relationship synchronization is not supported.
   * 
   * @param request - CreateCustomOrgRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomOrgResponse
   */
  async createCustomOrgWithOptions(request: $_model.CreateCustomOrgRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomOrgResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!$dara.isNull(request.corpName)) {
      body["corpName"] = request.corpName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomOrg",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createCustomOrg`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomOrgResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomOrgResponse({}));
  }

  /**
   * Registers a custom-only organization.
   * 
   * @remarks
   * Registers a custom-only organization for subsequent department tree push through syncOrgStructure.
   *     Registration logic:
   *     1. Validates the corpId format (must start with a lowercase letter or digit, 3-64 characters, hyphens allowed).
   *     2. Delegates to OrgSyncAuthorizedService to execute registration (includes permission verification and tenant-level uniqueness check).
   *     3. Returns the registration result.
   *     Note: Custom-only organizations support only department tree synchronization. Member relationship synchronization is not supported.
   * 
   * @param request - CreateCustomOrgRequest
   * @returns CreateCustomOrgResponse
   */
  async createCustomOrg(request: $_model.CreateCustomOrgRequest): Promise<$_model.CreateCustomOrgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomOrgWithOptions(request, headers, runtime);
  }

  /**
   * Creates a DingTalk group chat knowledge resource in a group.
   * 
   * @remarks
   * ## Operation description
   * - Connects a specified DingTalk group chat to a group knowledge base that the caller has joined.
   * - The resource type is fixed to ALI_DING, the scope is fixed to GROUP, and the owning user is resolved from the gateway authentication identity.
   * - groupId, chatId, and historyStartTime are required.
   * - updateFrequency can be configured by using a preset or a five-field cron expression for subsequent synchronization frequency.
   * - The server verifies the caller\\"s group membership, the target group directory permissions, and the uniqueness of chatId within the scope.
   * 
   * @param tmpReq - CreateGroupAliDingChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupAliDingChatResponse
   */
  async createGroupAliDingChatWithOptions(tmpReq: $_model.CreateGroupAliDingChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupAliDingChatResponse> {
    tmpReq.validate();
    let request = new $_model.CreateGroupAliDingChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateFrequency)) {
      request.updateFrequencyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateFrequency, "updateFrequency", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.chatName)) {
      body["chatName"] = request.chatName;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.groupId)) {
      body["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.historyStartTime)) {
      body["historyStartTime"] = request.historyStartTime;
    }

    if (!$dara.isNull(request.notes)) {
      body["notes"] = request.notes;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    if (!$dara.isNull(request.updateFrequencyShrink)) {
      body["updateFrequency"] = request.updateFrequencyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroupAliDingChat",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createGroupAliDingChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupAliDingChatResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupAliDingChatResponse({}));
  }

  /**
   * Creates a DingTalk group chat knowledge resource in a group.
   * 
   * @remarks
   * ## Operation description
   * - Connects a specified DingTalk group chat to a group knowledge base that the caller has joined.
   * - The resource type is fixed to ALI_DING, the scope is fixed to GROUP, and the owning user is resolved from the gateway authentication identity.
   * - groupId, chatId, and historyStartTime are required.
   * - updateFrequency can be configured by using a preset or a five-field cron expression for subsequent synchronization frequency.
   * - The server verifies the caller\\"s group membership, the target group directory permissions, and the uniqueness of chatId within the scope.
   * 
   * @param request - CreateGroupAliDingChatRequest
   * @returns CreateGroupAliDingChatResponse
   */
  async createGroupAliDingChat(request: $_model.CreateGroupAliDingChatRequest): Promise<$_model.CreateGroupAliDingChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupAliDingChatWithOptions(request, headers, runtime);
  }

  /**
   * Uploads an AliDing online document to the enterprise knowledge base. Management permissions are required.
   * 
   * @remarks
   * ## Request description
   * - This operation adds an AliDing online document to a specified enterprise knowledge base.
   * - The caller must have the `DEVELOPMENT_KB_MANAGE` permission.
   * - `source_type` is fixed to `ONLINE_DOC`, `platform` is fixed to `ALI_DING`, and `scope` is fixed to `TENANT`.
   * - If `directoryId` is not provided, the document is bound to the root directory of the current digital employee by default. If provided, it must be a valid directory ID under the current tenant.
   * - The `filePublicUrl` parameter is required and specifies the publicly accessible URL of the AliDing online document to upload.
   * - Optional parameters include `operatingObjectName` (digital employee name), `description` (resource description), `knowledgeId` (knowledge base ID), and `sourceTags` (resource tags).
   * - A successful response returns information about the newly created resource, such as `sourceId`, `name`, `status`, `directoryId`, and creation time.
   * 
   * @param request - CreateKnowledgeBaseAliDingDocRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseAliDingDocResponse
   */
  async createKnowledgeBaseAliDingDocWithOptions(request: $_model.CreateKnowledgeBaseAliDingDocRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseAliDingDocResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filePublicUrl)) {
      body["filePublicUrl"] = request.filePublicUrl;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      body["knowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBaseAliDingDoc",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createKnowledgeBaseAlidingDoc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseAliDingDocResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseAliDingDocResponse({}));
  }

  /**
   * Uploads an AliDing online document to the enterprise knowledge base. Management permissions are required.
   * 
   * @remarks
   * ## Request description
   * - This operation adds an AliDing online document to a specified enterprise knowledge base.
   * - The caller must have the `DEVELOPMENT_KB_MANAGE` permission.
   * - `source_type` is fixed to `ONLINE_DOC`, `platform` is fixed to `ALI_DING`, and `scope` is fixed to `TENANT`.
   * - If `directoryId` is not provided, the document is bound to the root directory of the current digital employee by default. If provided, it must be a valid directory ID under the current tenant.
   * - The `filePublicUrl` parameter is required and specifies the publicly accessible URL of the AliDing online document to upload.
   * - Optional parameters include `operatingObjectName` (digital employee name), `description` (resource description), `knowledgeId` (knowledge base ID), and `sourceTags` (resource tags).
   * - A successful response returns information about the newly created resource, such as `sourceId`, `name`, `status`, `directoryId`, and creation time.
   * 
   * @param request - CreateKnowledgeBaseAliDingDocRequest
   * @returns CreateKnowledgeBaseAliDingDocResponse
   */
  async createKnowledgeBaseAliDingDoc(request: $_model.CreateKnowledgeBaseAliDingDocRequest): Promise<$_model.CreateKnowledgeBaseAliDingDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseAliDingDocWithOptions(request, headers, runtime);
  }

  /**
   * Creates a category directory in the enterprise knowledge base.
   * 
   * @remarks
   * ## Request description
   * - This operation allows users with the `DEVELOPMENT_KB_MANAGE` permission to create a category for the enterprise knowledge base.
   * - You can specify a parent category ID when creating a category. If no parent category ID is specified, the new category is mounted directly under the root directory of the enterprise knowledge base.
   * - The system automatically checks for name conflicts and directory depth limits.
   * - `tenant_id` and `user_id` are obtained only through authentication. These parameters are ignored even if they are provided in the request body.
   * - Ensure that the specified `parentDirectoryId` (if any) belongs to the current tenant.
   * 
   * @param request - CreateKnowledgeBaseDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseDirectoryResponse
   */
  async createKnowledgeBaseDirectoryWithOptions(request: $_model.CreateKnowledgeBaseDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      body["parentDirectoryId"] = request.parentDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBaseDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createKnowledgeBaseDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseDirectoryResponse({}));
  }

  /**
   * Creates a category directory in the enterprise knowledge base.
   * 
   * @remarks
   * ## Request description
   * - This operation allows users with the `DEVELOPMENT_KB_MANAGE` permission to create a category for the enterprise knowledge base.
   * - You can specify a parent category ID when creating a category. If no parent category ID is specified, the new category is mounted directly under the root directory of the enterprise knowledge base.
   * - The system automatically checks for name conflicts and directory depth limits.
   * - `tenant_id` and `user_id` are obtained only through authentication. These parameters are ignored even if they are provided in the request body.
   * - Ensure that the specified `parentDirectoryId` (if any) belongs to the current tenant.
   * 
   * @param request - CreateKnowledgeBaseDirectoryRequest
   * @returns CreateKnowledgeBaseDirectoryResponse
   */
  async createKnowledgeBaseDirectory(request: $_model.CreateKnowledgeBaseDirectoryRequest): Promise<$_model.CreateKnowledgeBaseDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a specified file to the enterprise knowledge base. Management permissions are required.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to the enterprise knowledge base.
   * - The `DEVELOPMENT_KB_MANAGE` permission is required to call this operation.
   * - You must provide the Object Storage Service (OSS) persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can use `sourceTags` to add labels to resources for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Ensure that your account balance is sufficient.
   * 
   * @param request - CreateKnowledgeBaseFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseFileResponse
   */
  async createKnowledgeBaseFileWithOptions(request: $_model.CreateKnowledgeBaseFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileExt)) {
      body["fileExt"] = request.fileExt;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.filePublicUrl)) {
      body["filePublicUrl"] = request.filePublicUrl;
    }

    if (!$dara.isNull(request.fileRecordId)) {
      body["fileRecordId"] = request.fileRecordId;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      body["knowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBaseFile",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createKnowledgeBaseFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseFileResponse({}));
  }

  /**
   * Uploads a specified file to the enterprise knowledge base. Management permissions are required.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to the enterprise knowledge base.
   * - The `DEVELOPMENT_KB_MANAGE` permission is required to call this operation.
   * - You must provide the Object Storage Service (OSS) persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can use `sourceTags` to add labels to resources for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Ensure that your account balance is sufficient.
   * 
   * @param request - CreateKnowledgeBaseFileRequest
   * @returns CreateKnowledgeBaseFileResponse
   */
  async createKnowledgeBaseFile(request: $_model.CreateKnowledgeBaseFileRequest): Promise<$_model.CreateKnowledgeBaseFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseFileWithOptions(request, headers, runtime);
  }

  /**
   * Adds plain text content to a specified enterprise knowledge base.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to upload plain text information to an enterprise knowledge base. The caller must have the required management permissions.
   * - The `textContent` field is required and represents the plain text content to upload.
   * - Optional parameters include the digital employee name (`operatingObjectName`) and resource description (`description`), which allow users to customize additional details.
   * - If `directoryId` is provided, the uploaded text is attached to the specified knowledge base folder. If not provided, the text is attached to the root folder of the current digital employee by default.
   * - You can use `sourceTags` to add labels to resources for easier management and retrieval.
   * - Before invoking this operation, make sure that you have correctly configured the authentication method (AK, BearerToken, and APP authentication are supported) and have the `DEVELOPMENT_KB_MANAGE` permission.
   * 
   * @param request - CreateKnowledgeBaseTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseTextResponse
   */
  async createKnowledgeBaseTextWithOptions(request: $_model.CreateKnowledgeBaseTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseTextResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      body["knowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    if (!$dara.isNull(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBaseText",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createKnowledgeBaseText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseTextResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseTextResponse({}));
  }

  /**
   * Adds plain text content to a specified enterprise knowledge base.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to upload plain text information to an enterprise knowledge base. The caller must have the required management permissions.
   * - The `textContent` field is required and represents the plain text content to upload.
   * - Optional parameters include the digital employee name (`operatingObjectName`) and resource description (`description`), which allow users to customize additional details.
   * - If `directoryId` is provided, the uploaded text is attached to the specified knowledge base folder. If not provided, the text is attached to the root folder of the current digital employee by default.
   * - You can use `sourceTags` to add labels to resources for easier management and retrieval.
   * - Before invoking this operation, make sure that you have correctly configured the authentication method (AK, BearerToken, and APP authentication are supported) and have the `DEVELOPMENT_KB_MANAGE` permission.
   * 
   * @param request - CreateKnowledgeBaseTextRequest
   * @returns CreateKnowledgeBaseTextResponse
   */
  async createKnowledgeBaseText(request: $_model.CreateKnowledgeBaseTextRequest): Promise<$_model.CreateKnowledgeBaseTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseTextWithOptions(request, headers, runtime);
  }

  /**
   * Creates a personal AliDing group chat knowledge resource.
   * 
   * @remarks
   * ## Request description
   * - Connects the specified AliDing group chat to the current user\\"s personal knowledge base.
   * - The resource type is fixed to ALI_DING, the scope is fixed to PERSONAL, and the owning user is parsed from the gateway authentication identity.
   * - historyStartTime is required and supports YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
   * - updateFrequency can be configured with a preset or a five-field cron expression for subsequent synchronization frequency.
   * - chatId must be unique within the target personal scope.
   * 
   * @param tmpReq - CreatePersonalAliDingChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalAliDingChatResponse
   */
  async createPersonalAliDingChatWithOptions(tmpReq: $_model.CreatePersonalAliDingChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalAliDingChatResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePersonalAliDingChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateFrequency)) {
      request.updateFrequencyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateFrequency, "updateFrequency", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.chatName)) {
      body["chatName"] = request.chatName;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.historyStartTime)) {
      body["historyStartTime"] = request.historyStartTime;
    }

    if (!$dara.isNull(request.notes)) {
      body["notes"] = request.notes;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    if (!$dara.isNull(request.updateFrequencyShrink)) {
      body["updateFrequency"] = request.updateFrequencyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalAliDingChat",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalAliDingChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalAliDingChatResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalAliDingChatResponse({}));
  }

  /**
   * Creates a personal AliDing group chat knowledge resource.
   * 
   * @remarks
   * ## Request description
   * - Connects the specified AliDing group chat to the current user\\"s personal knowledge base.
   * - The resource type is fixed to ALI_DING, the scope is fixed to PERSONAL, and the owning user is parsed from the gateway authentication identity.
   * - historyStartTime is required and supports YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
   * - updateFrequency can be configured with a preset or a five-field cron expression for subsequent synchronization frequency.
   * - chatId must be unique within the target personal scope.
   * 
   * @param request - CreatePersonalAliDingChatRequest
   * @returns CreatePersonalAliDingChatResponse
   */
  async createPersonalAliDingChat(request: $_model.CreatePersonalAliDingChatRequest): Promise<$_model.CreatePersonalAliDingChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalAliDingChatWithOptions(request, headers, runtime);
  }

  /**
   * Uploads an AliDing meeting file to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API uploads AliDing meeting materials (such as audio/video files and Shanji links) to the "My Resources" section of a specified digital employee.
   * - The `source_type` is fixed to `ALI_DING_MEETING`, and the `scope` is fixed to `PERSONAL`.
   * - You must provide a public audio/video OSS URL (`ossUrl`) and the original Shanji link (`shanjiUrl`).
   * - Optionally, you can specify a target personal directory ID (`directoryId`). If not specified, the resource is automatically bound to the default root directory of the current digital employee.
   * - You can add a resource description (`description`) and meeting notes (`notes`). The meeting notes can be used for auxiliary analysis.
   * - This operation requires authentication. AK, BearerToken, and APP authentication methods are supported.
   * 
   * @param request - CreatePersonalAliDingMeetingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalAliDingMeetingResponse
   */
  async createPersonalAliDingMeetingWithOptions(request: $_model.CreatePersonalAliDingMeetingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalAliDingMeetingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notes)) {
      body["notes"] = request.notes;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.shanjiUrl)) {
      body["shanjiUrl"] = request.shanjiUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalAliDingMeeting",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalAliDingMeeting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalAliDingMeetingResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalAliDingMeetingResponse({}));
  }

  /**
   * Uploads an AliDing meeting file to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API uploads AliDing meeting materials (such as audio/video files and Shanji links) to the "My Resources" section of a specified digital employee.
   * - The `source_type` is fixed to `ALI_DING_MEETING`, and the `scope` is fixed to `PERSONAL`.
   * - You must provide a public audio/video OSS URL (`ossUrl`) and the original Shanji link (`shanjiUrl`).
   * - Optionally, you can specify a target personal directory ID (`directoryId`). If not specified, the resource is automatically bound to the default root directory of the current digital employee.
   * - You can add a resource description (`description`) and meeting notes (`notes`). The meeting notes can be used for auxiliary analysis.
   * - This operation requires authentication. AK, BearerToken, and APP authentication methods are supported.
   * 
   * @param request - CreatePersonalAliDingMeetingRequest
   * @returns CreatePersonalAliDingMeetingResponse
   */
  async createPersonalAliDingMeeting(request: $_model.CreatePersonalAliDingMeetingRequest): Promise<$_model.CreatePersonalAliDingMeetingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalAliDingMeetingWithOptions(request, headers, runtime);
  }

  /**
   * Uploads an AliDing online document to the personal resources of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API is used to add an AliDing online document to the "My Resources" section of a specified digital employee.
   * - Fixed parameters include `source_type=ONLINE_DOC`, `platform=ALI_DING`, and `scope=PERSONAL`.
   * - If `directoryId` is not provided, the document is attached to the root folder of the current digital employee by default. If provided, ensure that the folder belongs to the current user and exists under the current digital employee.
   * - During the invoke process, metering is started and related operation logs are recorded.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authentication identity. Values provided by the caller for these fields are ignored.
   * - Any validation or execute failure is thrown as an exception by the service and transformed into a POP error code returned to the caller.
   * 
   * @param request - CreatePersonalAlidingDocRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalAlidingDocResponse
   */
  async createPersonalAlidingDocWithOptions(request: $_model.CreatePersonalAlidingDocRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalAlidingDocResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.filePublicUrl)) {
      body["filePublicUrl"] = request.filePublicUrl;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalAlidingDoc",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalAliDingDoc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalAlidingDocResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalAlidingDocResponse({}));
  }

  /**
   * Uploads an AliDing online document to the personal resources of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API is used to add an AliDing online document to the "My Resources" section of a specified digital employee.
   * - Fixed parameters include `source_type=ONLINE_DOC`, `platform=ALI_DING`, and `scope=PERSONAL`.
   * - If `directoryId` is not provided, the document is attached to the root folder of the current digital employee by default. If provided, ensure that the folder belongs to the current user and exists under the current digital employee.
   * - During the invoke process, metering is started and related operation logs are recorded.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authentication identity. Values provided by the caller for these fields are ignored.
   * - Any validation or execute failure is thrown as an exception by the service and transformed into a POP error code returned to the caller.
   * 
   * @param request - CreatePersonalAlidingDocRequest
   * @returns CreatePersonalAlidingDocResponse
   */
  async createPersonalAlidingDoc(request: $_model.CreatePersonalAlidingDocRequest): Promise<$_model.CreatePersonalAlidingDocResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalAlidingDocWithOptions(request, headers, runtime);
  }

  /**
   * Adds an AliDing knowledge base to the personal resources of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API creates an AliDing knowledge base and mounts it to the personal resource directory of the specified digital employee.
   * - `platform` is fixed to `ALI_DING`, and `directory_type` is fixed to `PERSONAL`.
   * - If `directoryId` is provided, the system verifies that the directory exists and belongs to the current tenant and is of the personal type.
   * - During creation, the knowledge base root directory is initialized (with the status set to `RUNNING`), and background tasks are dispatched based on the provided synchronization configuration to pull the remote directory tree and create child nodes.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authenticated identity. These fields in the request body are ignored.
   * - The synchronization configuration is optional. If enabled, a cron expression must be provided. If not provided or disabled, scheduled synchronization is not performed by default.
   * - The knowledge base name can be customized. If not provided, it is automatically populated after background synchronization.
   * - Multi-value object binding is supported. Related information is serialized and stored in the knowledge base metadata.
   * 
   * @param tmpReq - CreatePersonalAlidingKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalAlidingKnowledgeBaseResponse
   */
  async createPersonalAlidingKnowledgeBaseWithOptions(tmpReq: $_model.CreatePersonalAlidingKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalAlidingKnowledgeBaseResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePersonalAlidingKnowledgeBaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.objectBindings)) {
      request.objectBindingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectBindings, "objectBindings", "json");
    }

    if (!$dara.isNull(tmpReq.syncConfig)) {
      request.syncConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.syncConfig, "syncConfig", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.kbName)) {
      body["kbName"] = request.kbName;
    }

    if (!$dara.isNull(request.kbUrl)) {
      body["kbUrl"] = request.kbUrl;
    }

    if (!$dara.isNull(request.objectBindingsShrink)) {
      body["objectBindings"] = request.objectBindingsShrink;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.syncConfigShrink)) {
      body["syncConfig"] = request.syncConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalAlidingKnowledgeBase",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalAliDingKnowledgeBase`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalAlidingKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalAlidingKnowledgeBaseResponse({}));
  }

  /**
   * Adds an AliDing knowledge base to the personal resources of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API creates an AliDing knowledge base and mounts it to the personal resource directory of the specified digital employee.
   * - `platform` is fixed to `ALI_DING`, and `directory_type` is fixed to `PERSONAL`.
   * - If `directoryId` is provided, the system verifies that the directory exists and belongs to the current tenant and is of the personal type.
   * - During creation, the knowledge base root directory is initialized (with the status set to `RUNNING`), and background tasks are dispatched based on the provided synchronization configuration to pull the remote directory tree and create child nodes.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authenticated identity. These fields in the request body are ignored.
   * - The synchronization configuration is optional. If enabled, a cron expression must be provided. If not provided or disabled, scheduled synchronization is not performed by default.
   * - The knowledge base name can be customized. If not provided, it is automatically populated after background synchronization.
   * - Multi-value object binding is supported. Related information is serialized and stored in the knowledge base metadata.
   * 
   * @param request - CreatePersonalAlidingKnowledgeBaseRequest
   * @returns CreatePersonalAlidingKnowledgeBaseResponse
   */
  async createPersonalAlidingKnowledgeBase(request: $_model.CreatePersonalAlidingKnowledgeBaseRequest): Promise<$_model.CreatePersonalAlidingKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalAlidingKnowledgeBaseWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a DingTalk meeting to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This operation uploads a DingTalk meeting as a resource to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `DINGTALK_MEETING`, and `scope` is fixed to `PERSONAL`.
   * - If `credentialId` is not provided, the system default configurations are used.
   * - If `directoryId` is not specified, the resource is automatically attached to the default root folder of the current digital employee. If specified, it must be an existing personal folder of the invoker under the digital employee.
   * - The optional parameters `description` and `notes` are used to describe the resource and record meeting notes, respectively. The `notes` value is used for auxiliary analysis.
   * 
   * @deprecated OpenAPI CreatePersonalDingtalkMeeting is deprecated
   * 
   * @param request - CreatePersonalDingtalkMeetingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalDingtalkMeetingResponse
   */
  async createPersonalDingtalkMeetingWithOptions(request: $_model.CreatePersonalDingtalkMeetingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalDingtalkMeetingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialId)) {
      body["credentialId"] = request.credentialId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notes)) {
      body["notes"] = request.notes;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.roomCode)) {
      body["roomCode"] = request.roomCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalDingtalkMeeting",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalDingtalkMeeting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalDingtalkMeetingResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalDingtalkMeetingResponse({}));
  }

  /**
   * Uploads a DingTalk meeting to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This operation uploads a DingTalk meeting as a resource to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `DINGTALK_MEETING`, and `scope` is fixed to `PERSONAL`.
   * - If `credentialId` is not provided, the system default configurations are used.
   * - If `directoryId` is not specified, the resource is automatically attached to the default root folder of the current digital employee. If specified, it must be an existing personal folder of the invoker under the digital employee.
   * - The optional parameters `description` and `notes` are used to describe the resource and record meeting notes, respectively. The `notes` value is used for auxiliary analysis.
   * 
   * @deprecated OpenAPI CreatePersonalDingtalkMeeting is deprecated
   * 
   * @param request - CreatePersonalDingtalkMeetingRequest
   * @returns CreatePersonalDingtalkMeetingResponse
   */
  // Deprecated
  async createPersonalDingtalkMeeting(request: $_model.CreatePersonalDingtalkMeetingRequest): Promise<$_model.CreatePersonalDingtalkMeetingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalDingtalkMeetingWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a meeting to the current user\\"s personal knowledge base by using a standard DingTalk Shanji URL.
   * 
   * @remarks
   * ## Request description
   * - This API creates a meeting resource by using a standard DingTalk Shanji link. The collection method is fixed to the DWS corresponding to personal OAuth.
   * - `source_type` is fixed to `DINGTALK_MEETING`, and `scope` is fixed to `PERSONAL`.
   * - You must provide a standard DingTalk Shanji link or taskUuid (`shanjiUrl`).
   * - Optionally specify a target personal directory ID (`directoryId`). If not specified, the default root directory of the current digital employee is used.
   * - You can add a resource description (`description`) and meeting notes (`notes`).
   * - This operation supports one of the following authentication methods: AK, BearerToken, or APP.
   * 
   * @param request - CreatePersonalDingtalkMinutesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalDingtalkMinutesResponse
   */
  async createPersonalDingtalkMinutesWithOptions(request: $_model.CreatePersonalDingtalkMinutesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalDingtalkMinutesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notes)) {
      body["notes"] = request.notes;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.shanjiUrl)) {
      body["shanjiUrl"] = request.shanjiUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalDingtalkMinutes",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalDingtalkMinutes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalDingtalkMinutesResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalDingtalkMinutesResponse({}));
  }

  /**
   * Uploads a meeting to the current user\\"s personal knowledge base by using a standard DingTalk Shanji URL.
   * 
   * @remarks
   * ## Request description
   * - This API creates a meeting resource by using a standard DingTalk Shanji link. The collection method is fixed to the DWS corresponding to personal OAuth.
   * - `source_type` is fixed to `DINGTALK_MEETING`, and `scope` is fixed to `PERSONAL`.
   * - You must provide a standard DingTalk Shanji link or taskUuid (`shanjiUrl`).
   * - Optionally specify a target personal directory ID (`directoryId`). If not specified, the default root directory of the current digital employee is used.
   * - You can add a resource description (`description`) and meeting notes (`notes`).
   * - This operation supports one of the following authentication methods: AK, BearerToken, or APP.
   * 
   * @param request - CreatePersonalDingtalkMinutesRequest
   * @returns CreatePersonalDingtalkMinutesResponse
   */
  async createPersonalDingtalkMinutes(request: $_model.CreatePersonalDingtalkMinutesRequest): Promise<$_model.CreatePersonalDingtalkMinutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalDingtalkMinutesWithOptions(request, headers, runtime);
  }

  /**
   * Creates a personal folder (category) under My Resources.
   * 
   * @remarks
   * ## Request description
   * - This API is used to create a personal folder (category) under "My Resources".
   * - If `parentDirectoryId` is not specified, the system automatically uses or creates the default root folder of the current digital human as the parent folder.
   * - If `parentDirectoryId` is specified, it must be an existing personal folder of the current user under the current digital human.
   * - `tenant_id` and `user_id` are derived from the authentication identity only. These fields are ignored if included in the request body.
   * 
   * @param request - CreatePersonalDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalDirectoryResponse
   */
  async createPersonalDirectoryWithOptions(request: $_model.CreatePersonalDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      body["parentDirectoryId"] = request.parentDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalDirectoryResponse({}));
  }

  /**
   * Creates a personal folder (category) under My Resources.
   * 
   * @remarks
   * ## Request description
   * - This API is used to create a personal folder (category) under "My Resources".
   * - If `parentDirectoryId` is not specified, the system automatically uses or creates the default root folder of the current digital human as the parent folder.
   * - If `parentDirectoryId` is specified, it must be an existing personal folder of the current user under the current digital human.
   * - `tenant_id` and `user_id` are derived from the authentication identity only. These fields are ignored if included in the request body.
   * 
   * @param request - CreatePersonalDirectoryRequest
   * @returns CreatePersonalDirectoryResponse
   */
  async createPersonalDirectory(request: $_model.CreatePersonalDirectoryRequest): Promise<$_model.CreatePersonalDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a personal knowledge resource from a single Lark group chat using the current user\\"s Lark authorization.
   * 
   * @remarks
   * ## Request description
   * This API uses the Lark application connection managed by the user corresponding to the current OpenAPI identity. It pulls the name and historical messages of the specified group chat through the built-in CLI of the project and creates a knowledge resource in the user\\"s personal knowledge base.
   * - `chatId`: The Lark group chat ID. Must start with `oc_`.
   * - `directoryId` (optional): The target personal directory ID. If omitted, the current user\\"s default personal root directory is used.
   * - `historyStartTime` (optional): The start time for historical messages. Supports `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS`.
   * - `updateFrequency` (optional): The Source-level scheduled synchronization configuration. Supports preset frequencies or five-field cron expressions.
   * - `description`, `operatingObjectName`, `notes`, `sourceTags`: Optional Source metadata.
   * Security constraints: The Source Type is fixed to FEISHU, and the knowledge scope is fixed to PERSONAL. The Lark connector user is determined by the POP trusted identity. Credentials or user IDs passed by the caller are not accepted.
   * 
   * @param tmpReq - CreatePersonalFeishuChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalFeishuChatResponse
   */
  async createPersonalFeishuChatWithOptions(tmpReq: $_model.CreatePersonalFeishuChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalFeishuChatResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePersonalFeishuChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.updateFrequency)) {
      request.updateFrequencyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateFrequency, "updateFrequency", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatId)) {
      body["chatId"] = request.chatId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.historyStartTime)) {
      body["historyStartTime"] = request.historyStartTime;
    }

    if (!$dara.isNull(request.notes)) {
      body["notes"] = request.notes;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    if (!$dara.isNull(request.updateFrequencyShrink)) {
      body["updateFrequency"] = request.updateFrequencyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalFeishuChat",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalFeishuChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalFeishuChatResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalFeishuChatResponse({}));
  }

  /**
   * Creates a personal knowledge resource from a single Lark group chat using the current user\\"s Lark authorization.
   * 
   * @remarks
   * ## Request description
   * This API uses the Lark application connection managed by the user corresponding to the current OpenAPI identity. It pulls the name and historical messages of the specified group chat through the built-in CLI of the project and creates a knowledge resource in the user\\"s personal knowledge base.
   * - `chatId`: The Lark group chat ID. Must start with `oc_`.
   * - `directoryId` (optional): The target personal directory ID. If omitted, the current user\\"s default personal root directory is used.
   * - `historyStartTime` (optional): The start time for historical messages. Supports `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS`.
   * - `updateFrequency` (optional): The Source-level scheduled synchronization configuration. Supports preset frequencies or five-field cron expressions.
   * - `description`, `operatingObjectName`, `notes`, `sourceTags`: Optional Source metadata.
   * Security constraints: The Source Type is fixed to FEISHU, and the knowledge scope is fixed to PERSONAL. The Lark connector user is determined by the POP trusted identity. Credentials or user IDs passed by the caller are not accepted.
   * 
   * @param request - CreatePersonalFeishuChatRequest
   * @returns CreatePersonalFeishuChatResponse
   */
  async createPersonalFeishuChat(request: $_model.CreatePersonalFeishuChatRequest): Promise<$_model.CreatePersonalFeishuChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalFeishuChatWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a Lark Minutes meeting file to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * This API uploads a meeting record from Lark Minutes to the "My Resources" section of a specified digital employee. By providing the required parameters, such as the unique identifier of the Lark Minutes record (`minuteToken`) and the credential ID (`credentialId`), you can migrate and save meeting content. If no target directory is specified, the resource is bound to the root directory of the current digital employee by default.
   * - `operatingObjectName`: The name of the digital employee that performs the operation.
   * - `name`: The display name of the uploaded resource in the system.
   * - `minuteToken`: The unique identifier of the meeting from the Lark Minutes platform.
   * - `credentialId`: The ID associated with specific authentication information, used to verify the validity of the request.
   * - `directoryId` (optional): The ID of the target personal directory where the resource is stored. If this field is omitted, the resource is automatically placed in the default location.
   * - `description` (optional): A brief description or note about the uploaded resource.
   * Precautions:
   * - Ensure that the provided `minuteToken` and `credentialId` are valid.
   * - If `directoryId` is specified, confirm that it belongs to one of the available personal directories of the caller in the current digital employee environment.
   * 
   * @param request - CreatePersonalFeishuMinuteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalFeishuMinuteResponse
   */
  async createPersonalFeishuMinuteWithOptions(request: $_model.CreatePersonalFeishuMinuteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalFeishuMinuteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credentialId)) {
      body["credentialId"] = request.credentialId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.minuteToken)) {
      body["minuteToken"] = request.minuteToken;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalFeishuMinute",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalFeishuMinute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalFeishuMinuteResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalFeishuMinuteResponse({}));
  }

  /**
   * Uploads a Lark Minutes meeting file to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * This API uploads a meeting record from Lark Minutes to the "My Resources" section of a specified digital employee. By providing the required parameters, such as the unique identifier of the Lark Minutes record (`minuteToken`) and the credential ID (`credentialId`), you can migrate and save meeting content. If no target directory is specified, the resource is bound to the root directory of the current digital employee by default.
   * - `operatingObjectName`: The name of the digital employee that performs the operation.
   * - `name`: The display name of the uploaded resource in the system.
   * - `minuteToken`: The unique identifier of the meeting from the Lark Minutes platform.
   * - `credentialId`: The ID associated with specific authentication information, used to verify the validity of the request.
   * - `directoryId` (optional): The ID of the target personal directory where the resource is stored. If this field is omitted, the resource is automatically placed in the default location.
   * - `description` (optional): A brief description or note about the uploaded resource.
   * Precautions:
   * - Ensure that the provided `minuteToken` and `credentialId` are valid.
   * - If `directoryId` is specified, confirm that it belongs to one of the available personal directories of the caller in the current digital employee environment.
   * 
   * @param request - CreatePersonalFeishuMinuteRequest
   * @returns CreatePersonalFeishuMinuteResponse
   */
  async createPersonalFeishuMinute(request: $_model.CreatePersonalFeishuMinuteRequest): Promise<$_model.CreatePersonalFeishuMinuteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalFeishuMinuteWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a file to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - The file must include an OSS persistent address (`filePath`). Other information such as the public access URL and original file name is optional.
   * - If the target folder ID (`directoryId`) is not specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the personal folder of the caller.
   * - Security authentication is supported through multiple authentication methods (AK, BearerToken, and APP) to authenticate requests.
   * - The operation type is write (`write`), and operation logs are recorded for subsequent auditing.
   * To invoke this operation, you can use AK, BearerToken, or APP authentication.
   * 
   * @param request - CreatePersonalFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalFileResponse
   */
  async createPersonalFileWithOptions(request: $_model.CreatePersonalFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileExt)) {
      body["fileExt"] = request.fileExt;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.filePublicUrl)) {
      body["filePublicUrl"] = request.filePublicUrl;
    }

    if (!$dara.isNull(request.fileRecordId)) {
      body["fileRecordId"] = request.fileRecordId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalFile",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalFileResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalFileResponse({}));
  }

  /**
   * Uploads a file to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - The file must include an OSS persistent address (`filePath`). Other information such as the public access URL and original file name is optional.
   * - If the target folder ID (`directoryId`) is not specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the personal folder of the caller.
   * - Security authentication is supported through multiple authentication methods (AK, BearerToken, and APP) to authenticate requests.
   * - The operation type is write (`write`), and operation logs are recorded for subsequent auditing.
   * To invoke this operation, you can use AK, BearerToken, or APP authentication.
   * 
   * @param request - CreatePersonalFileRequest
   * @returns CreatePersonalFileResponse
   */
  async createPersonalFile(request: $_model.CreatePersonalFileRequest): Promise<$_model.CreatePersonalFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalFileWithOptions(request, headers, runtime);
  }

  /**
   * Uploads plain text content to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to add plain text content to the personal resources of a specified digital employee.
   * - `source_type` is fixed to `TEXT`, and `scope` is fixed to `PERSONAL`.
   * - If `directoryId` is not provided, the content is bound to the root directory of the current digital employee by default. If provided, it must be an existing personal directory of the caller under the digital employee.
   * - `tenant_id` and `user_id` can only be obtained from the authentication identity information. These parameters are ignored if passed in the request body.
   * - The call initiates metering and generates a corresponding `billing_id`.
   * - The text content is written to `unstructured_docs`, and an initial resource record is generated.
   * - Any validation or execution failure throws a `RobjectException`, which is converted to a POP error code by the global middleware and returned to the caller.
   * 
   * @param request - CreatePersonalTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalTextResponse
   */
  async createPersonalTextWithOptions(request: $_model.CreatePersonalTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalTextResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.textContent)) {
      body["textContent"] = request.textContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalText",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalText`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalTextResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalTextResponse({}));
  }

  /**
   * Uploads plain text content to the personal resource library of the current digital employee.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to add plain text content to the personal resources of a specified digital employee.
   * - `source_type` is fixed to `TEXT`, and `scope` is fixed to `PERSONAL`.
   * - If `directoryId` is not provided, the content is bound to the root directory of the current digital employee by default. If provided, it must be an existing personal directory of the caller under the digital employee.
   * - `tenant_id` and `user_id` can only be obtained from the authentication identity information. These parameters are ignored if passed in the request body.
   * - The call initiates metering and generates a corresponding `billing_id`.
   * - The text content is written to `unstructured_docs`, and an initial resource record is generated.
   * - Any validation or execution failure throws a `RobjectException`, which is converted to a POP error code by the global middleware and returned to the caller.
   * 
   * @param request - CreatePersonalTextRequest
   * @returns CreatePersonalTextResponse
   */
  async createPersonalText(request: $_model.CreatePersonalTextRequest): Promise<$_model.CreatePersonalTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalTextWithOptions(request, headers, runtime);
  }

  /**
   * Uploads an offline meeting audio file to the personal resources of the current digital employee.
   * 
   * @remarks
   * ## Operation description
   * - This API operation uploads an offline meeting audio file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `VOICE_MEETING`, `scope` is fixed to `PERSONAL`, and `voice_meeting_type` is fixed to `OFFLINE`.
   * - If `directoryId` is not provided in the request body, the resource is automatically bound to the default root directory. If `directoryId` is provided, it must be an existing personal directory of the current user under the current digital employee.
   * - Calling this operation starts a background process to transcribe the audio file and returns information about the newly created resource.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authenticated identity. These fields are ignored even if they are included in the request body.
   * - Any validation or execution failure throws a `RobjectException`, which is converted to a POP error code through the global middleware.
   * 
   * @param request - CreatePersonalVoiceMeetingRequest
   * @param headers - CreatePersonalVoiceMeetingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePersonalVoiceMeetingResponse
   */
  async createPersonalVoiceMeetingWithOptions(request: $_model.CreatePersonalVoiceMeetingRequest, headers: $_model.CreatePersonalVoiceMeetingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePersonalVoiceMeetingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.requestId)) {
      realHeaders["requestId"] = String(headers.requestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePersonalVoiceMeeting",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createPersonalVoiceMeeting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePersonalVoiceMeetingResponse>(await this.callApi(params, req, runtime), new $_model.CreatePersonalVoiceMeetingResponse({}));
  }

  /**
   * Uploads an offline meeting audio file to the personal resources of the current digital employee.
   * 
   * @remarks
   * ## Operation description
   * - This API operation uploads an offline meeting audio file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `VOICE_MEETING`, `scope` is fixed to `PERSONAL`, and `voice_meeting_type` is fixed to `OFFLINE`.
   * - If `directoryId` is not provided in the request body, the resource is automatically bound to the default root directory. If `directoryId` is provided, it must be an existing personal directory of the current user under the current digital employee.
   * - Calling this operation starts a background process to transcribe the audio file and returns information about the newly created resource.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authenticated identity. These fields are ignored even if they are included in the request body.
   * - Any validation or execution failure throws a `RobjectException`, which is converted to a POP error code through the global middleware.
   * 
   * @param request - CreatePersonalVoiceMeetingRequest
   * @returns CreatePersonalVoiceMeetingResponse
   */
  async createPersonalVoiceMeeting(request: $_model.CreatePersonalVoiceMeetingRequest): Promise<$_model.CreatePersonalVoiceMeetingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreatePersonalVoiceMeetingHeaders({ });
    return await this.createPersonalVoiceMeetingWithOptions(request, headers, runtime);
  }

  /**
   * Creates a scheduled task.
   * 
   * @remarks
   * ## Operation description
   * - This operation is used to upload files to an enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL of the file and the original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee by default.
   * - You can add tags to resources by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Make sure that your account balance is sufficient.
   * 
   * @param tmpReq - CreateScheduledTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTaskWithOptions(tmpReq: $_model.CreateScheduledTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScheduledTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.description)) {
      request.descriptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.description, "description", "json");
    }

    if (!$dara.isNull(tmpReq.digitalEmployeeName)) {
      request.digitalEmployeeNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.digitalEmployeeName, "digitalEmployeeName", "json");
    }

    if (!$dara.isNull(tmpReq.segments)) {
      request.segmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.segments, "segments", "json");
    }

    if (!$dara.isNull(tmpReq.taskDetail)) {
      request.taskDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDetail, "taskDetail", "json");
    }

    if (!$dara.isNull(tmpReq.triggerConfig)) {
      request.triggerConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConfig, "triggerConfig", "json");
    }

    if (!$dara.isNull(tmpReq.visibleMemberUserIds)) {
      request.visibleMemberUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.visibleMemberUserIds, "visibleMemberUserIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collaborationGroupId)) {
      body["collaborationGroupId"] = request.collaborationGroupId;
    }

    if (!$dara.isNull(request.descriptionShrink)) {
      body["description"] = request.descriptionShrink;
    }

    if (!$dara.isNull(request.digitalEmployeeNameShrink)) {
      body["digitalEmployeeName"] = request.digitalEmployeeNameShrink;
    }

    if (!$dara.isNull(request.isOpen)) {
      body["isOpen"] = request.isOpen;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.segmentsShrink)) {
      body["segments"] = request.segmentsShrink;
    }

    if (!$dara.isNull(request.taskDetailShrink)) {
      body["taskDetail"] = request.taskDetailShrink;
    }

    if (!$dara.isNull(request.triggerConfigShrink)) {
      body["triggerConfig"] = request.triggerConfigShrink;
    }

    if (!$dara.isNull(request.visibility)) {
      body["visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.visibleMemberUserIdsShrink)) {
      body["visibleMemberUserIds"] = request.visibleMemberUserIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledTask",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createScheduledTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledTaskResponse({}));
  }

  /**
   * Creates a scheduled task.
   * 
   * @remarks
   * ## Operation description
   * - This operation is used to upload files to an enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL of the file and the original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee by default.
   * - You can add tags to resources by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Make sure that your account balance is sufficient.
   * 
   * @param request - CreateScheduledTaskRequest
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTask(request: $_model.CreateScheduledTaskRequest): Promise<$_model.CreateScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledTaskWithOptions(request, headers, runtime);
  }

  /**
   * Adds a knowledge base and knowledge base categories.
   * 
   * @remarks
   * ## Request description
   * - This API is used to create a new enterprise knowledge base directory under a specified tenant.
   * - You can specify the parent directory of the new directory by setting the `parentId` parameter. If this parameter is not specified, the directory is created as a root directory by default.
   * - The `path` parameter is optional. If this parameter is not specified, the system automatically calculates the path based on the parent directory.
   * - Calling this operation requires the corresponding permissions. Multiple authentication methods are supported, including AK, BearerToken, and APP authentication.
   * - After the directory is created, the related information of the new directory is returned, such as the directory ID and name.
   * 
   * @param request - CreateTenantDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTenantDirectoryResponse
   */
  async createTenantDirectoryWithOptions(request: $_model.CreateTenantDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTenantDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTenantDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createTenantDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTenantDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateTenantDirectoryResponse({}));
  }

  /**
   * Adds a knowledge base and knowledge base categories.
   * 
   * @remarks
   * ## Request description
   * - This API is used to create a new enterprise knowledge base directory under a specified tenant.
   * - You can specify the parent directory of the new directory by setting the `parentId` parameter. If this parameter is not specified, the directory is created as a root directory by default.
   * - The `path` parameter is optional. If this parameter is not specified, the system automatically calculates the path based on the parent directory.
   * - Calling this operation requires the corresponding permissions. Multiple authentication methods are supported, including AK, BearerToken, and APP authentication.
   * - After the directory is created, the related information of the new directory is returned, such as the directory ID and name.
   * 
   * @param request - CreateTenantDirectoryRequest
   * @returns CreateTenantDirectoryResponse
   */
  async createTenantDirectory(request: $_model.CreateTenantDirectoryRequest): Promise<$_model.CreateTenantDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTenantDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Creates a user and adds the user to a tenant.
   * 
   * @remarks
   * Creates a user by using OpenAPI.
   *     Business orchestration:
   *     1. Parses roleCodes → role_ids (validates against system role enumerations).
   *     2. Checks whether the user already exists (used to return the isNewUser flag).
   *     3. Calls UserManagementService.add_tenant_member to create or add the user (the password must be passed in as an RSA ciphertext by the caller).
   *     4. Returns the creation result (including the isNewUser flag).
   *     Error codes:
   *     - ERR.User.DeactivatedInTenant: The user is deactivated in the tenant. Use updateUser to resume the user.
   *     - ERR.User.AlreadyInTenant: The user is already an active member of the tenant.
   *     - ERR.User.DisplayNameDuplicateInTenant: The display name is duplicate within the tenant.
   * 
   * @param tmpReq - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(tmpReq: $_model.CreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "roleCodes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.passwordEncrypted)) {
      body["passwordEncrypted"] = request.passwordEncrypted;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["roleCodes"] = request.roleCodesShrink;
    }

    if (!$dara.isNull(request.wnAccountId)) {
      body["wnAccountId"] = request.wnAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/createUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Creates a user and adds the user to a tenant.
   * 
   * @remarks
   * Creates a user by using OpenAPI.
   *     Business orchestration:
   *     1. Parses roleCodes → role_ids (validates against system role enumerations).
   *     2. Checks whether the user already exists (used to return the isNewUser flag).
   *     3. Calls UserManagementService.add_tenant_member to create or add the user (the password must be passed in as an RSA ciphertext by the caller).
   *     4. Returns the creation result (including the isNewUser flag).
   *     Error codes:
   *     - ERR.User.DeactivatedInTenant: The user is deactivated in the tenant. Use updateUser to resume the user.
   *     - ERR.User.AlreadyInTenant: The user is already an active member of the tenant.
   *     - ERR.User.DisplayNameDuplicateInTenant: The display name is duplicate within the tenant.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a session.
   * 
   * @remarks
   * ## Request description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - The file must include an OSS persistent address (`filePath`). Other information such as the public access URL and original file name is optional.
   * - If the target directory ID (`directoryId`) is not specified, the file is automatically attached to the default root directory of the current digital employee. If specified, ensure that the directory belongs to the personal directory of the caller.
   * - Security authentication is supported through multiple methods (AK, BearerToken, APP).
   * - The operation type is write (`write`), and operation logs are recorded for subsequent auditing.
   * 
   * @param request - DeleteChatSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatSessionResponse
   */
  async deleteChatSessionWithOptions(request: $_model.DeleteChatSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChatSession",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/deleteChatSession`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatSessionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatSessionResponse({}));
  }

  /**
   * Deletes a session.
   * 
   * @remarks
   * ## Request description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - The file must include an OSS persistent address (`filePath`). Other information such as the public access URL and original file name is optional.
   * - If the target directory ID (`directoryId`) is not specified, the file is automatically attached to the default root directory of the current digital employee. If specified, ensure that the directory belongs to the personal directory of the caller.
   * - Security authentication is supported through multiple methods (AK, BearerToken, APP).
   * - The operation type is write (`write`), and operation logs are recorded for subsequent auditing.
   * 
   * @param request - DeleteChatSessionRequest
   * @returns DeleteChatSessionResponse
   */
  async deleteChatSession(request: $_model.DeleteChatSessionRequest): Promise<$_model.DeleteChatSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteChatSessionWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a specified source.
   * 
   * @remarks
   * ## Operation description
   * - `tenantId` is derived from the authenticated identity only. Any value passed by the caller is ignored.
   * - `sourceId` is passed through the request body. The registration path is the flat URI `/openapi/deleteSource` and does not contain a `{sourceId}` path template. Do not append the resource ID as a path segment. The gateway performs exact routing based on the flat URI and returns `InvalidAction.NotFound` if the path does not match.
   * - Deletion is irreversible. The parsing results and bindings associated with the resource are invalidated.
   * 
   * @param request - DeleteSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceResponse
   */
  async deleteSourceWithOptions(request: $_model.DeleteSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/deleteSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceResponse({}));
  }

  /**
   * Deletes a specified source.
   * 
   * @remarks
   * ## Operation description
   * - `tenantId` is derived from the authenticated identity only. Any value passed by the caller is ignored.
   * - `sourceId` is passed through the request body. The registration path is the flat URI `/openapi/deleteSource` and does not contain a `{sourceId}` path template. Do not append the resource ID as a path segment. The gateway performs exact routing based on the flat URI and returns `InvalidAction.NotFound` if the path does not match.
   * - Deletion is irreversible. The parsing results and bindings associated with the resource are invalidated.
   * 
   * @param request - DeleteSourceRequest
   * @returns DeleteSourceResponse
   */
  async deleteSource(request: $_model.DeleteSourceRequest): Promise<$_model.DeleteSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSourceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an enterprise knowledge base and its subdirectories.
   * 
   * @remarks
   * ## Request description
   * - This API allows you to delete a specific enterprise knowledge base directory.
   * - Set the `deleteMode` parameter to select different deletion strategies, including reject deletion (reject), recursive deletion (recursive), or move the directory to the root directory (move_to_root).
   * - If `deleteMode` is not provided, the default behavior is to reject deletion.
   * - The enterprise directory boundary is validated before the deletion operation.
   * 
   * @param request - DeleteTenantDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTenantDirectoryResponse
   */
  async deleteTenantDirectoryWithOptions(request: $_model.DeleteTenantDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTenantDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteMode)) {
      body["deleteMode"] = request.deleteMode;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTenantDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/deleteTenantDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTenantDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTenantDirectoryResponse({}));
  }

  /**
   * Deletes an enterprise knowledge base and its subdirectories.
   * 
   * @remarks
   * ## Request description
   * - This API allows you to delete a specific enterprise knowledge base directory.
   * - Set the `deleteMode` parameter to select different deletion strategies, including reject deletion (reject), recursive deletion (recursive), or move the directory to the root directory (move_to_root).
   * - If `deleteMode` is not provided, the default behavior is to reject deletion.
   * - The enterprise directory boundary is validated before the deletion operation.
   * 
   * @param request - DeleteTenantDirectoryRequest
   * @returns DeleteTenantDirectoryResponse
   */
  async deleteTenantDirectory(request: $_model.DeleteTenantDirectoryRequest): Promise<$_model.DeleteTenantDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTenantDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Disables an API token.
   * 
   * @remarks
   * Disables the INSTANCE token of a user.
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is enforced).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Calls disable_token (ACTIVE → INACTIVE).
   *     4. Returns disabled=True.
   *     Idempotence: If no ACTIVE token exists, deactivate_all affects 0 rows and does not return an error.
   * 
   * @param request - DisableTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableTokenResponse
   */
  async disableTokenWithOptions(request: $_model.DisableTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableToken",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/disableToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableTokenResponse>(await this.callApi(params, req, runtime), new $_model.DisableTokenResponse({}));
  }

  /**
   * Disables an API token.
   * 
   * @remarks
   * Disables the INSTANCE token of a user.
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is enforced).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Calls disable_token (ACTIVE → INACTIVE).
   *     4. Returns disabled=True.
   *     Idempotence: If no ACTIVE token exists, deactivate_all affects 0 rows and does not return an error.
   * 
   * @param request - DisableTokenRequest
   * @returns DisableTokenResponse
   */
  async disableToken(request: $_model.DisableTokenRequest): Promise<$_model.DisableTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableTokenWithOptions(request, headers, runtime);
  }

  /**
   * Enables an API token.
   * 
   * @remarks
   * Enables the INSTANCE token for a user (idempotent).
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is required).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Calls enable_token:
   *        - If an ACTIVE token exists, returns idempotently (only the masked value is returned, and the plaintext is not issued again).
   *        - If an INACTIVE token exists, reactivates it (returns the plaintext).
   *        - If no token exists, creates one (returns the plaintext).
   *     Security constraint: The token plaintext is returned only once when the token is first enabled. Subsequent idempotent calls do not return the plaintext.
   * 
   * @param request - EnableTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableTokenResponse
   */
  async enableTokenWithOptions(request: $_model.EnableTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableToken",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/enableToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableTokenResponse>(await this.callApi(params, req, runtime), new $_model.EnableTokenResponse({}));
  }

  /**
   * Enables an API token.
   * 
   * @remarks
   * Enables the INSTANCE token for a user (idempotent).
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is required).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Calls enable_token:
   *        - If an ACTIVE token exists, returns idempotently (only the masked value is returned, and the plaintext is not issued again).
   *        - If an INACTIVE token exists, reactivates it (returns the plaintext).
   *        - If no token exists, creates one (returns the plaintext).
   *     Security constraint: The token plaintext is returned only once when the token is first enabled. Subsequent idempotent calls do not return the plaintext.
   * 
   * @param request - EnableTokenRequest
   * @returns EnableTokenResponse
   */
  async enableToken(request: $_model.EnableTokenRequest): Promise<$_model.EnableTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableTokenWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves session details.
   * 
   * @remarks
   * ## Request description
   * - This API uploads a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - The file must include an OSS persistent address (`filePath`). Other information such as the public access URL and original file name is optional.
   * - If no target folder ID (`directoryId`) is specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the invoker\\"s personal folder.
   * - Security verification is supported through multiple authenticate methods (AK, BearerToken, APP).
   * - The operation type is write (`write`), and operation logs are recorded for subsequent auditing.
   * 
   * @param request - GetChatSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatSessionResponse
   */
  async getChatSessionWithOptions(request: $_model.GetChatSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatSession",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getChatSession`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetChatSessionResponse({}));
  }

  /**
   * Retrieves session details.
   * 
   * @remarks
   * ## Request description
   * - This API uploads a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - The file must include an OSS persistent address (`filePath`). Other information such as the public access URL and original file name is optional.
   * - If no target folder ID (`directoryId`) is specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the invoker\\"s personal folder.
   * - Security verification is supported through multiple authenticate methods (AK, BearerToken, APP).
   * - The operation type is write (`write`), and operation logs are recorded for subsequent auditing.
   * 
   * @param request - GetChatSessionRequest
   * @returns GetChatSessionResponse
   */
  async getChatSession(request: $_model.GetChatSessionRequest): Promise<$_model.GetChatSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatSessionWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the active Graph Schema that is readable by the current user.
   * 
   * @remarks
   * Reads the active schema_content and securely trims it based on the token user\\"s semantic resource READ permissions.
   * 
   * @param request - GetGraphSchemaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGraphSchemaResponse
   */
  async getGraphSchemaWithOptions(request: $_model.GetGraphSchemaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGraphSchemaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.graphName)) {
      body["graphName"] = request.graphName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGraphSchema",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getGraphSchema`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGraphSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetGraphSchemaResponse({}));
  }

  /**
   * Retrieves the active Graph Schema that is readable by the current user.
   * 
   * @remarks
   * Reads the active schema_content and securely trims it based on the token user\\"s semantic resource READ permissions.
   * 
   * @param request - GetGraphSchemaRequest
   * @returns GetGraphSchemaResponse
   */
  async getGraphSchema(request: $_model.GetGraphSchemaRequest): Promise<$_model.GetGraphSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGraphSchemaWithOptions(request, headers, runtime);
  }

  /**
   * Queries the expiration time of the most recently created standard package instance for a tenant.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries the expiration time of the most recently created standard package instance for a specified tenant.
   * - If no standard package instance is found, the `found` field returns `False`.
   * - You can use the `tenantId` parameter to specify the tenant ID. By default, the tenant ID of the caller is used.
   * - The request method is POST and must be called over HTTPS.
   * - Valid authentication information (such as AK, BearerToken, or APP) is required to complete the request.
   * 
   * @param request - GetInstanceExpireTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceExpireTimeResponse
   */
  async getInstanceExpireTimeWithOptions(request: $_model.GetInstanceExpireTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceExpireTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceExpireTime",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getInstanceExpireTime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceExpireTimeResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceExpireTimeResponse({}));
  }

  /**
   * Queries the expiration time of the most recently created standard package instance for a tenant.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries the expiration time of the most recently created standard package instance for a specified tenant.
   * - If no standard package instance is found, the `found` field returns `False`.
   * - You can use the `tenantId` parameter to specify the tenant ID. By default, the tenant ID of the caller is used.
   * - The request method is POST and must be called over HTTPS.
   * - Valid authentication information (such as AK, BearerToken, or APP) is required to complete the request.
   * 
   * @param request - GetInstanceExpireTimeRequest
   * @returns GetInstanceExpireTimeResponse
   */
  async getInstanceExpireTime(request: $_model.GetInstanceExpireTimeRequest): Promise<$_model.GetInstanceExpireTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceExpireTimeWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of a specified knowledge item in the enterprise knowledge base.
   * 
   * @remarks
   * ## Operation description
   * - This API operation retrieves the details of a specific knowledge item in the enterprise knowledge base.
   * - Calling this operation requires the `DEVELOPMENT_KB_VIEW` feature permission.
   * - Knowledge details include but are not limited to the knowledge type, name, and description.
   * - The `sourceId` parameter is required to identify the knowledge item to query.
   * - `tenantId` is an optional parameter. The tenant ID of the caller is used by default.
   * - Authentication is supported through `AK`, `BearerToken`, or `APP` methods.
   * - Security constraint: `tenant_id` and `user_id` can only be derived from the authenticated identity.
   * 
   * @param request - GetKnowledgeBaseSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeBaseSourceResponse
   */
  async getKnowledgeBaseSourceWithOptions(request: $_model.GetKnowledgeBaseSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKnowledgeBaseSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKnowledgeBaseSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getKnowledgeBaseSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKnowledgeBaseSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetKnowledgeBaseSourceResponse({}));
  }

  /**
   * Queries the details of a specified knowledge item in the enterprise knowledge base.
   * 
   * @remarks
   * ## Operation description
   * - This API operation retrieves the details of a specific knowledge item in the enterprise knowledge base.
   * - Calling this operation requires the `DEVELOPMENT_KB_VIEW` feature permission.
   * - Knowledge details include but are not limited to the knowledge type, name, and description.
   * - The `sourceId` parameter is required to identify the knowledge item to query.
   * - `tenantId` is an optional parameter. The tenant ID of the caller is used by default.
   * - Authentication is supported through `AK`, `BearerToken`, or `APP` methods.
   * - Security constraint: `tenant_id` and `user_id` can only be derived from the authenticated identity.
   * 
   * @param request - GetKnowledgeBaseSourceRequest
   * @returns GetKnowledgeBaseSourceResponse
   */
  async getKnowledgeBaseSource(request: $_model.GetKnowledgeBaseSourceRequest): Promise<$_model.GetKnowledgeBaseSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeBaseSourceWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the execution details of a scheduled task.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to an enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Make sure your account balance is sufficient.
   * 
   * @param request - GetScheduledTaskExecutionDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledTaskExecutionDetailResponse
   */
  async getScheduledTaskExecutionDetailWithOptions(request: $_model.GetScheduledTaskExecutionDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledTaskExecutionDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executionId)) {
      query["executionId"] = request.executionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledTaskExecutionDetail",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getScheduledTaskExecutionDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledTaskExecutionDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledTaskExecutionDetailResponse({}));
  }

  /**
   * Retrieves the execution details of a scheduled task.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to an enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Make sure your account balance is sufficient.
   * 
   * @param request - GetScheduledTaskExecutionDetailRequest
   * @returns GetScheduledTaskExecutionDetailResponse
   */
  async getScheduledTaskExecutionDetail(request: $_model.GetScheduledTaskExecutionDetailRequest): Promise<$_model.GetScheduledTaskExecutionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledTaskExecutionDetailWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves execution records of scheduled tasks.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to the enterprise knowledge base.
   * - The `DEVELOPMENT_KB_MANAGE` feature permission is required to call this API.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Ensure that your account balance is sufficient.
   * 
   * @param request - GetScheduledTaskExecutionRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledTaskExecutionRecordsResponse
   */
  async getScheduledTaskExecutionRecordsWithOptions(request: $_model.GetScheduledTaskExecutionRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledTaskExecutionRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collaborationGroupId)) {
      query["collaborationGroupId"] = request.collaborationGroupId;
    }

    if (!$dara.isNull(request.initiatorUserId)) {
      query["initiatorUserId"] = request.initiatorUserId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledTaskExecutionRecords",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getScheduledTaskExecutionRecords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledTaskExecutionRecordsResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledTaskExecutionRecordsResponse({}));
  }

  /**
   * Retrieves execution records of scheduled tasks.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to the enterprise knowledge base.
   * - The `DEVELOPMENT_KB_MANAGE` feature permission is required to call this API.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Ensure that your account balance is sufficient.
   * 
   * @param request - GetScheduledTaskExecutionRecordsRequest
   * @returns GetScheduledTaskExecutionRecordsResponse
   */
  async getScheduledTaskExecutionRecords(request: $_model.GetScheduledTaskExecutionRecordsRequest): Promise<$_model.GetScheduledTaskExecutionRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledTaskExecutionRecordsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of scheduled task understanding.
   * 
   * @remarks
   * ## Request description
   * - This operation uploads a file to the enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL of the file and the original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee by default.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Ensure that your account balance is sufficient.
   * 
   * @deprecated OpenAPI GetScheduledTaskUnderstandDetail is deprecated
   * 
   * @param tmpReq - GetScheduledTaskUnderstandDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledTaskUnderstandDetailResponse
   */
  async getScheduledTaskUnderstandDetailWithOptions(tmpReq: $_model.GetScheduledTaskUnderstandDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledTaskUnderstandDetailResponse> {
    tmpReq.validate();
    let request = new $_model.GetScheduledTaskUnderstandDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.digitalEmployeeName)) {
      request.digitalEmployeeNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.digitalEmployeeName, "digitalEmployeeName", "json");
    }

    if (!$dara.isNull(tmpReq.segments)) {
      request.segmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.segments, "segments", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collaborationGroupId)) {
      query["collaborationGroupId"] = request.collaborationGroupId;
    }

    if (!$dara.isNull(request.digitalEmployeeNameShrink)) {
      query["digitalEmployeeName"] = request.digitalEmployeeNameShrink;
    }

    if (!$dara.isNull(request.segmentsShrink)) {
      query["segments"] = request.segmentsShrink;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.userInput)) {
      query["userInput"] = request.userInput;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledTaskUnderstandDetail",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getScheduledTaskUnderstandDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledTaskUnderstandDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledTaskUnderstandDetailResponse({}));
  }

  /**
   * Retrieves the details of scheduled task understanding.
   * 
   * @remarks
   * ## Request description
   * - This operation uploads a file to the enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL of the file and the original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee by default.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Ensure that your account balance is sufficient.
   * 
   * @deprecated OpenAPI GetScheduledTaskUnderstandDetail is deprecated
   * 
   * @param request - GetScheduledTaskUnderstandDetailRequest
   * @returns GetScheduledTaskUnderstandDetailResponse
   */
  // Deprecated
  async getScheduledTaskUnderstandDetail(request: $_model.GetScheduledTaskUnderstandDetailRequest): Promise<$_model.GetScheduledTaskUnderstandDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledTaskUnderstandDetailWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves skill details.
   * 
   * @remarks
   * ## Request description
   * Queries skill details by SkillCode or SkillName, including metadata, input parameter schema, and SKILL.md summary.
   * - **TenantId**: Optional common parameter passed through by the gateway to the backend header. If not specified, the default tenant of the current caller is used.
   * - **SkillCode**: Mutually exclusive with SkillName. If both are specified, SkillCode takes precedence.
   * - **SkillName**: Mutually exclusive with SkillCode. If the name is not unique within the tenant, `ERR.SkillHub.SkillNameAmbiguous` is returned.
   * - **ViewMode**: Optional. Valid values: `draft` (draft/editing view) or `published` (published view, default).
   * - **IncludeSkillFiles**: Optional. Specifies whether to return the complete skill file tree (SKILL.md / scripts / templates). Default value: `false`.
   * 
   * @param request - GetSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillResponse
   */
  async getSkillWithOptions(request: $_model.GetSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includeSkillFiles)) {
      body["includeSkillFiles"] = request.includeSkillFiles;
    }

    if (!$dara.isNull(request.skillCode)) {
      body["skillCode"] = request.skillCode;
    }

    if (!$dara.isNull(request.skillName)) {
      body["skillName"] = request.skillName;
    }

    if (!$dara.isNull(request.viewMode)) {
      body["viewMode"] = request.viewMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkill",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getSkill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillResponse({}));
  }

  /**
   * Retrieves skill details.
   * 
   * @remarks
   * ## Request description
   * Queries skill details by SkillCode or SkillName, including metadata, input parameter schema, and SKILL.md summary.
   * - **TenantId**: Optional common parameter passed through by the gateway to the backend header. If not specified, the default tenant of the current caller is used.
   * - **SkillCode**: Mutually exclusive with SkillName. If both are specified, SkillCode takes precedence.
   * - **SkillName**: Mutually exclusive with SkillCode. If the name is not unique within the tenant, `ERR.SkillHub.SkillNameAmbiguous` is returned.
   * - **ViewMode**: Optional. Valid values: `draft` (draft/editing view) or `published` (published view, default).
   * - **IncludeSkillFiles**: Optional. Specifies whether to return the complete skill file tree (SKILL.md / scripts / templates). Default value: `false`.
   * 
   * @param request - GetSkillRequest
   * @returns GetSkillResponse
   */
  async getSkill(request: $_model.GetSkillRequest): Promise<$_model.GetSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSkillWithOptions(request, headers, runtime);
  }

  /**
   * Queries the execution result of a skill.
   * 
   * @remarks
   * ## Request description
   * Queries the current status and result of an asynchronous task by `RunId`.
   * - **State machine**: Running (PENDING/RUNNING) → Succeeded / Failed / Cancelled
   * - **TenantId**: An optional common parameter passed through by the gateway. The backend verifies that the RunId belongs to the current tenant. Otherwise, `ERR.SkillHub.RunNotFound` is returned to avoid exposing existence information.
   * - **IncludeLogs**: Optional. Specifies whether to return execution logs. Default value: `false`.
   * When execution succeeds, `Result.Content[]` is an MCP-style Content block array (Text / File / Image).
   * 
   * @param request - GetSkillRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillRunResponse
   */
  async getSkillRunWithOptions(request: $_model.GetSkillRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includeLogs)) {
      body["includeLogs"] = request.includeLogs;
    }

    if (!$dara.isNull(request.runId)) {
      body["runId"] = request.runId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillRun",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getSkillRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillRunResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillRunResponse({}));
  }

  /**
   * Queries the execution result of a skill.
   * 
   * @remarks
   * ## Request description
   * Queries the current status and result of an asynchronous task by `RunId`.
   * - **State machine**: Running (PENDING/RUNNING) → Succeeded / Failed / Cancelled
   * - **TenantId**: An optional common parameter passed through by the gateway. The backend verifies that the RunId belongs to the current tenant. Otherwise, `ERR.SkillHub.RunNotFound` is returned to avoid exposing existence information.
   * - **IncludeLogs**: Optional. Specifies whether to return execution logs. Default value: `false`.
   * When execution succeeds, `Result.Content[]` is an MCP-style Content block array (Text / File / Image).
   * 
   * @param request - GetSkillRunRequest
   * @returns GetSkillRunResponse
   */
  async getSkillRun(request: $_model.GetSkillRunRequest): Promise<$_model.GetSkillRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSkillRunWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of a specified resource (knowledge), with support for returning large detail fields on demand.
   * 
   * @remarks
   * ## Operation description
   * - `tenant_id` is derived from the authenticated identity only. Any value passed in the body is ignored.
   * - Response parameters do not expose audit fields such as `creator` or `modifier`. The `unstructured_docs[ ].content` field is not returned by default to avoid large responses.
   * - Set the `includeDetails` parameter to `True` to retrieve additional details including `settings`, `notes`, `structuredTables`, and `unstructuredDocs`.
   * 
   * @param request - GetSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourceResponse
   */
  async getSourceWithOptions(request: $_model.GetSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includeDetails)) {
      body["includeDetails"] = request.includeDetails;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetSourceResponse({}));
  }

  /**
   * Queries the details of a specified resource (knowledge), with support for returning large detail fields on demand.
   * 
   * @remarks
   * ## Operation description
   * - `tenant_id` is derived from the authenticated identity only. Any value passed in the body is ignored.
   * - Response parameters do not expose audit fields such as `creator` or `modifier`. The `unstructured_docs[ ].content` field is not returned by default to avoid large responses.
   * - Set the `includeDetails` parameter to `True` to retrieve additional details including `settings`, `notes`, `structuredTables`, and `unstructuredDocs`.
   * 
   * @param request - GetSourceRequest
   * @returns GetSourceResponse
   */
  async getSource(request: $_model.GetSourceRequest): Promise<$_model.GetSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSourceWithOptions(request, headers, runtime);
  }

  /**
   * Generates a signed URL for directly uploading files to OSS.
   * 
   * @remarks
   * ## Operation description
   * This API allows callers to obtain a signed URL for directly uploading files to Alibaba Cloud Object Storage Service (OSS) based on the provided file name and other information. With this URL, users can upload files directly to the specified OSS location without routing through an intermediate server, which improves efficiency and security.
   * - **Security constraint**: `tenant_id`/`user_id` are derived only from the authenticated identity. Values provided in the request body are ignored.
   * - **Default value**: If the `expires` parameter is not specified, the default expiration time is 3600 seconds (1 hour).
   * - **Content-Type**: If `contentType` is not provided, the system attempts to automatically infer the file type.
   * - **Scope**: The `scope` parameter defines whether the data source belongs to a personal or enterprise knowledge base. In most cases, this does not need to be set.
   * 
   * @param request - GetSourceUploadSignatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourceUploadSignatureResponse
   */
  async getSourceUploadSignatureWithOptions(request: $_model.GetSourceUploadSignatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourceUploadSignatureResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.expires)) {
      body["expires"] = request.expires;
    }

    if (!$dara.isNull(request.filename)) {
      body["filename"] = request.filename;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.scope)) {
      body["scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSourceUploadSignature",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getSourceUploadSignature`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourceUploadSignatureResponse>(await this.callApi(params, req, runtime), new $_model.GetSourceUploadSignatureResponse({}));
  }

  /**
   * Generates a signed URL for directly uploading files to OSS.
   * 
   * @remarks
   * ## Operation description
   * This API allows callers to obtain a signed URL for directly uploading files to Alibaba Cloud Object Storage Service (OSS) based on the provided file name and other information. With this URL, users can upload files directly to the specified OSS location without routing through an intermediate server, which improves efficiency and security.
   * - **Security constraint**: `tenant_id`/`user_id` are derived only from the authenticated identity. Values provided in the request body are ignored.
   * - **Default value**: If the `expires` parameter is not specified, the default expiration time is 3600 seconds (1 hour).
   * - **Content-Type**: If `contentType` is not provided, the system attempts to automatically infer the file type.
   * - **Scope**: The `scope` parameter defines whether the data source belongs to a personal or enterprise knowledge base. In most cases, this does not need to be set.
   * 
   * @param request - GetSourceUploadSignatureRequest
   * @returns GetSourceUploadSignatureResponse
   */
  async getSourceUploadSignature(request: $_model.GetSourceUploadSignatureRequest): Promise<$_model.GetSourceUploadSignatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSourceUploadSignatureWithOptions(request, headers, runtime);
  }

  /**
   * Queries the token status of a user.
   * 
   * @remarks
   * Queries the INSTANCE token status of a user.
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is required).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Queries the ACTIVE INSTANCE token.
   *     4. If the token exists, returns enabled=True with the masked value and creation time.
   *     5. If the token does not exist, returns enabled=False.
   * 
   * @param request - GetTokenInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenInfoResponse
   */
  async getTokenInfoWithOptions(request: $_model.GetTokenInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTokenInfo",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getTokenInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenInfoResponse({}));
  }

  /**
   * Queries the token status of a user.
   * 
   * @remarks
   * Queries the INSTANCE token status of a user.
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is required).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Queries the ACTIVE INSTANCE token.
   *     4. If the token exists, returns enabled=True with the masked value and creation time.
   *     5. If the token does not exist, returns enabled=False.
   * 
   * @param request - GetTokenInfoRequest
   * @returns GetTokenInfoResponse
   */
  async getTokenInfo(request: $_model.GetTokenInfoRequest): Promise<$_model.GetTokenInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries user details.
   * 
   * @remarks
   * Queries user details through OpenAPI.
   *     Business orchestration:
   *     1. Locate the user by wnUserId or accountId.
   *     2. Query the user mapping information in the current tenant (status, join time, and last logon time).
   *     3. Query the role list of the user in the current tenant.
   *     4. Query the user group list of the user in the current tenant.
   *     5. Assemble the response.
   *     Error codes:
   *     - ERR.User.NotFound: The user does not exist.
   *     - ERR.User.NotInTenant: The user does not belong to the current tenant.
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.wnAccountId)) {
      query["wnAccountId"] = request.wnAccountId;
    }

    if (!$dara.isNull(request.wnUserId)) {
      query["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Queries user details.
   * 
   * @remarks
   * Queries user details through OpenAPI.
   *     Business orchestration:
   *     1. Locate the user by wnUserId or accountId.
   *     2. Query the user mapping information in the current tenant (status, join time, and last logon time).
   *     3. Query the role list of the user in the current tenant.
   *     4. Query the user group list of the user in the current tenant.
   *     5. Assemble the response.
   *     Error codes:
   *     - ERR.User.NotFound: The user does not exist.
   *     - ERR.User.NotInTenant: The user does not belong to the current tenant.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * Queries the real-time credit consumption, limit, and remaining balance of the current logged-on user.
   * 
   * @remarks
   * ## Request description
   * - This API is used to retrieve the credit usage details of the current logged-on user, including the credit limit, consumed credits, and remaining credits.
   * - Data is sourced from a real-time Redis cache, ensuring information immediacy.
   * - You can specify a tenant ID to query the credit usage of a user under a specific tenant. By default, the caller\\"s default tenant is used.
   * - You can optionally provide a `RequestId` as a request identifier, but this is not required.
   * 
   * @param request - GetUserCreditUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserCreditUsageResponse
   */
  async getUserCreditUsageWithOptions(request: $_model.GetUserCreditUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserCreditUsageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserCreditUsage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getUserCreditUsage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserCreditUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetUserCreditUsageResponse({}));
  }

  /**
   * Queries the real-time credit consumption, limit, and remaining balance of the current logged-on user.
   * 
   * @remarks
   * ## Request description
   * - This API is used to retrieve the credit usage details of the current logged-on user, including the credit limit, consumed credits, and remaining credits.
   * - Data is sourced from a real-time Redis cache, ensuring information immediacy.
   * - You can specify a tenant ID to query the credit usage of a user under a specific tenant. By default, the caller\\"s default tenant is used.
   * - You can optionally provide a `RequestId` as a request identifier, but this is not required.
   * 
   * @param request - GetUserCreditUsageRequest
   * @returns GetUserCreditUsageResponse
   */
  async getUserCreditUsage(request: $_model.GetUserCreditUsageRequest): Promise<$_model.GetUserCreditUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserCreditUsageWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the complete information of the authenticated user through OpenAPI, including basic information and tenant list.
   * 
   * @remarks
   * ## Request description
   * - This operation returns the detailed information of the current authenticated user.
   * - If the tenant information is invalid, the corresponding error message is returned.
   * - `tenantId` is an optional parameter. If not provided, the default tenant ID of the caller is used.
   * - Multiple authentication methods are supported: AK, BearerToken, and APP authentication.
   * - The returned data includes the user profile (such as username and profile picture URL), role preference settings, and details of all tenants to which the user belongs.
   * - If the current logon tenant is the system tenant (that is, `tenantId=10000`), this is explicitly indicated in the response.
   * 
   * @param request - GetUserInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserInfoResponse
   */
  async getUserInfoWithOptions(request: $_model.GetUserInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserInfo",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/getUserInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetUserInfoResponse({}));
  }

  /**
   * Retrieves the complete information of the authenticated user through OpenAPI, including basic information and tenant list.
   * 
   * @remarks
   * ## Request description
   * - This operation returns the detailed information of the current authenticated user.
   * - If the tenant information is invalid, the corresponding error message is returned.
   * - `tenantId` is an optional parameter. If not provided, the default tenant ID of the caller is used.
   * - Multiple authentication methods are supported: AK, BearerToken, and APP authentication.
   * - The returned data includes the user profile (such as username and profile picture URL), role preference settings, and details of all tenants to which the user belongs.
   * - If the current logon tenant is the system tenant (that is, `tenantId=10000`), this is explicitly indicated in the response.
   * 
   * @param request - GetUserInfoRequest
   * @returns GetUserInfoResponse
   */
  async getUserInfo(request: $_model.GetUserInfoRequest): Promise<$_model.GetUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * Grants authorization to authorized users or user groups to use a digital human.
   * 
   * @remarks
   * Grants authorization to authorized users or user groups to use a specified digital human.
   *     Business logic:
   *     1. Constructs an AuthContext from identity.
   *     2. Performs mutual exclusion validation on the request body: specify either userIds or userGroupIds.
   *     3. Delegates to AgentAuthorizationAuthorizedService.grant_authorization to execute.
   *     4. Pre-validation: verifies MANAGE permission and agent existence (performed at the AuthorizedService layer, which performs authentication first before it exposes existence).
   *     5. Existing authorization records are updated (expire_date / permissions).
   * 
   * @param tmpReq - GrantAgentUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantAgentUsersResponse
   */
  async grantAgentUsersWithOptions(tmpReq: $_model.GrantAgentUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantAgentUsersResponse> {
    tmpReq.validate();
    let request = new $_model.GrantAgentUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "permissions", "json");
    }

    if (!$dara.isNull(tmpReq.userGroupIds)) {
      request.userGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userGroupIds, "userGroupIds", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "userIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireDate)) {
      body["expireDate"] = request.expireDate;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      body["permissions"] = request.permissionsShrink;
    }

    if (!$dara.isNull(request.userGroupIdsShrink)) {
      body["userGroupIds"] = request.userGroupIdsShrink;
    }

    if (!$dara.isNull(request.userIdsShrink)) {
      body["userIds"] = request.userIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantAgentUsers",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/grantAgentUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantAgentUsersResponse>(await this.callApi(params, req, runtime), new $_model.GrantAgentUsersResponse({}));
  }

  /**
   * Grants authorization to authorized users or user groups to use a digital human.
   * 
   * @remarks
   * Grants authorization to authorized users or user groups to use a specified digital human.
   *     Business logic:
   *     1. Constructs an AuthContext from identity.
   *     2. Performs mutual exclusion validation on the request body: specify either userIds or userGroupIds.
   *     3. Delegates to AgentAuthorizationAuthorizedService.grant_authorization to execute.
   *     4. Pre-validation: verifies MANAGE permission and agent existence (performed at the AuthorizedService layer, which performs authentication first before it exposes existence).
   *     5. Existing authorization records are updated (expire_date / permissions).
   * 
   * @param request - GrantAgentUsersRequest
   * @returns GrantAgentUsersResponse
   */
  async grantAgentUsers(request: $_model.GrantAgentUsersRequest): Promise<$_model.GrantAgentUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantAgentUsersWithOptions(request, headers, runtime);
  }

  /**
   * Queries or drills down into the enterprise knowledge base list of a tenant.
   * 
   * @remarks
   * ## Operation description
   * - This API supports two modes: when `directoryId` is empty or set to \\"root\\", the top-level knowledge base list is returned. When `directoryId` has a specific value, a drill-down operation is performed to return subdirectories and resources under the specified directory.
   * - `tenantId` is a common parameter. If not provided, the caller\\"s tenant ID is used by default.
   * - In drill-down mode (when `directoryId` is not empty), use the `sourceTypes` parameter to filter resources by specific types.
   * - The sort field (`sortField`) and sort order (`sortOrder`) can be customized. Invalid values are reset to default settings.
   * - The search feature is only effective when retrieving the top-level list and supports only fuzzy matching on names or descriptions.
   * - For security purposes, `tenant_id` is strictly obtained from the authenticated identity and cannot be passed through the request body.
   * 
   * @param tmpReq - ListAdminKnowledgeBasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAdminKnowledgeBasesResponse
   */
  async listAdminKnowledgeBasesWithOptions(tmpReq: $_model.ListAdminKnowledgeBasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAdminKnowledgeBasesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAdminKnowledgeBasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceTypes)) {
      request.sourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTypes, "sourceTypes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortField)) {
      body["sortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["sortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.sourceTypesShrink)) {
      body["sourceTypes"] = request.sourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAdminKnowledgeBases",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listAdminKnowledgeBases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAdminKnowledgeBasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAdminKnowledgeBasesResponse({}));
  }

  /**
   * Queries or drills down into the enterprise knowledge base list of a tenant.
   * 
   * @remarks
   * ## Operation description
   * - This API supports two modes: when `directoryId` is empty or set to \\"root\\", the top-level knowledge base list is returned. When `directoryId` has a specific value, a drill-down operation is performed to return subdirectories and resources under the specified directory.
   * - `tenantId` is a common parameter. If not provided, the caller\\"s tenant ID is used by default.
   * - In drill-down mode (when `directoryId` is not empty), use the `sourceTypes` parameter to filter resources by specific types.
   * - The sort field (`sortField`) and sort order (`sortOrder`) can be customized. Invalid values are reset to default settings.
   * - The search feature is only effective when retrieving the top-level list and supports only fuzzy matching on names or descriptions.
   * - For security purposes, `tenant_id` is strictly obtained from the authenticated identity and cannot be passed through the request body.
   * 
   * @param request - ListAdminKnowledgeBasesRequest
   * @returns ListAdminKnowledgeBasesResponse
   */
  async listAdminKnowledgeBases(request: $_model.ListAdminKnowledgeBasesRequest): Promise<$_model.ListAdminKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdminKnowledgeBasesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the full list of digital employees for a tenant.
   * 
   * @remarks
   * Queries the full list of digital employees under a tenant, including deactivated ones.
   *     Business logic:
   *     1. Constructs AuthContext from identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.list_agents to complete permission verification (APPLICATION_AGENT_VIEW).
   *     3. Returns rich fields for all digital employees of the tenant (operatingObjectName / displayName / authMode / isActive).
   *     4. System-level tokens are automatically allowed through ctx.skip_permission.
   *     Difference from listAuthorizedAgents: This operation returns all digital employees of the tenant (including deactivated ones, without authorization filtering) and includes rich fields such as displayName and isActive for management console display.
   * 
   * @param request - ListAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: $_model.ListAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgents",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listAgents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentsResponse({}));
  }

  /**
   * Queries the full list of digital employees for a tenant.
   * 
   * @remarks
   * Queries the full list of digital employees under a tenant, including deactivated ones.
   *     Business logic:
   *     1. Constructs AuthContext from identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.list_agents to complete permission verification (APPLICATION_AGENT_VIEW).
   *     3. Returns rich fields for all digital employees of the tenant (operatingObjectName / displayName / authMode / isActive).
   *     4. System-level tokens are automatically allowed through ctx.skip_permission.
   *     Difference from listAuthorizedAgents: This operation returns all digital employees of the tenant (including deactivated ones, without authorization filtering) and includes rich fields such as displayName and isActive for management console display.
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: $_model.ListAgentsRequest): Promise<$_model.ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of digital human names for which the caller has specified permissions.
   * 
   * @remarks
   * Queries the list of digital human names for which the current caller (or a specified target user) has specified permissions (USE/MANAGE).
   *     Business logic:
   *     1. Constructs an AuthContext from the identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.list_authorized_agents to execute the query.
   *     3. When skip_permission=True, returns all active agents for the tenant.
   *     4. Regular users are filtered based on authorization records and auth_mode.
   *     5. When targetUserId is specified (querying on behalf of another user), the APPLICATION_AGENT_VIEW gate is required, and the query is restricted to the current tenant. If the target user is not a member of the current tenant, a USER_NOT_IN_TENANT error is thrown (an empty list is not silently returned).
   * 
   * @param request - ListAuthorizedAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedAgentsResponse
   */
  async listAuthorizedAgentsWithOptions(request: $_model.ListAuthorizedAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.permission)) {
      body["permission"] = request.permission;
    }

    if (!$dara.isNull(request.targetUserId)) {
      body["targetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedAgents",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listAuthorizedAgents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedAgentsResponse({}));
  }

  /**
   * Queries the list of digital human names for which the caller has specified permissions.
   * 
   * @remarks
   * Queries the list of digital human names for which the current caller (or a specified target user) has specified permissions (USE/MANAGE).
   *     Business logic:
   *     1. Constructs an AuthContext from the identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.list_authorized_agents to execute the query.
   *     3. When skip_permission=True, returns all active agents for the tenant.
   *     4. Regular users are filtered based on authorization records and auth_mode.
   *     5. When targetUserId is specified (querying on behalf of another user), the APPLICATION_AGENT_VIEW gate is required, and the query is restricted to the current tenant. If the target user is not a member of the current tenant, a USER_NOT_IN_TENANT error is thrown (an empty list is not silently returned).
   * 
   * @param request - ListAuthorizedAgentsRequest
   * @returns ListAuthorizedAgentsResponse
   */
  async listAuthorizedAgents(request: $_model.ListAuthorizedAgentsRequest): Promise<$_model.ListAuthorizedAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorizedAgentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of authorized users or user groups for a digital employee.
   * 
   * @remarks
   * Queries the list of authorized users or user groups for a specified digital employee.
   *     Business logic:
   *     1. Constructs an AuthContext from the identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.list_authorized_users to execute the query.
   *     3. Permission verification is performed at the AuthorizedService layer by @require_permission(APPLICATION_AGENT_VIEW).
   *     4. When auth_mode=ALL_USERS, only records with MANAGE permissions are displayed.
   * 
   * @param request - ListAuthorizedUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedUsersResponse
   */
  async listAuthorizedUsersWithOptions(request: $_model.ListAuthorizedUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.granteeType)) {
      body["granteeType"] = request.granteeType;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.permission)) {
      body["permission"] = request.permission;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedUsers",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listAuthorizedUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedUsersResponse({}));
  }

  /**
   * Queries the list of authorized users or user groups for a digital employee.
   * 
   * @remarks
   * Queries the list of authorized users or user groups for a specified digital employee.
   *     Business logic:
   *     1. Constructs an AuthContext from the identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.list_authorized_users to execute the query.
   *     3. Permission verification is performed at the AuthorizedService layer by @require_permission(APPLICATION_AGENT_VIEW).
   *     4. When auth_mode=ALL_USERS, only records with MANAGE permissions are displayed.
   * 
   * @param request - ListAuthorizedUsersRequest
   * @returns ListAuthorizedUsersResponse
   */
  async listAuthorizedUsers(request: $_model.ListAuthorizedUsersRequest): Promise<$_model.ListAuthorizedUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorizedUsersWithOptions(request, headers, runtime);
  }

  /**
   * Enumerates available organization synchronization configurations.
   * 
   * @remarks
   * Enumerates all available organization synchronization configurations under the current tenant.
   *     Returns a unified configs list covering four platform types:
   *     - **wecom**: Retrieves active WeCom SSO configurations from SsoProviderRegistry.
   *     - **saml**: Retrieves active SAML SSO configurations from SsoProviderRegistry. The corpId is set to idpEntityId.
   *     - **oauth2**: Retrieves active OAuth2 SSO configurations from SsoProviderRegistry. The corpId is set to clientId.
   *     - **custom**: Queries the database for pure custom organizations registered under the tenant.
   *     The client distinguishes processing logic based on the returned platformType. The corpId is a required parameter for subsequent synchronization operations.
   * 
   * @param request - ListAvailableConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableConfigsResponse
   */
  async listAvailableConfigsWithOptions(request: $_model.ListAvailableConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableConfigs",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listAvailableConfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableConfigsResponse({}));
  }

  /**
   * Enumerates available organization synchronization configurations.
   * 
   * @remarks
   * Enumerates all available organization synchronization configurations under the current tenant.
   *     Returns a unified configs list covering four platform types:
   *     - **wecom**: Retrieves active WeCom SSO configurations from SsoProviderRegistry.
   *     - **saml**: Retrieves active SAML SSO configurations from SsoProviderRegistry. The corpId is set to idpEntityId.
   *     - **oauth2**: Retrieves active OAuth2 SSO configurations from SsoProviderRegistry. The corpId is set to clientId.
   *     - **custom**: Queries the database for pure custom organizations registered under the tenant.
   *     The client distinguishes processing logic based on the returned platformType. The corpId is a required parameter for subsequent synchronization operations.
   * 
   * @param request - ListAvailableConfigsRequest
   * @returns ListAvailableConfigsResponse
   */
  async listAvailableConfigs(request: $_model.ListAvailableConfigsRequest): Promise<$_model.ListAvailableConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Queries and filters the bill list through OpenAPI with support for multiple filter conditions.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries the bill list based on specified conditions.
   * - Supports filtering by tenant, user, operation type, status, time range, business source, and other conditions.
   * - Returns bill data in pages. The default page size is 20 records.
   * - You can choose whether to filter out bills with zero credit consumption. By default, such bills are filtered out.
   * - Authentication information (such as AK, BearerToken, or APP authentication) is required in the request.
   * 
   * @param request - ListBillingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBillingResponse
   */
  async listBillingWithOptions(request: $_model.ListBillingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBillingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      body["bizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ignoreZero)) {
      body["ignoreZero"] = request.ignoreZero;
    }

    if (!$dara.isNull(request.operation)) {
      body["operation"] = request.operation;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBilling",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listBilling`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBillingResponse>(await this.callApi(params, req, runtime), new $_model.ListBillingResponse({}));
  }

  /**
   * Queries and filters the bill list through OpenAPI with support for multiple filter conditions.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries the bill list based on specified conditions.
   * - Supports filtering by tenant, user, operation type, status, time range, business source, and other conditions.
   * - Returns bill data in pages. The default page size is 20 records.
   * - You can choose whether to filter out bills with zero credit consumption. By default, such bills are filtered out.
   * - Authentication information (such as AK, BearerToken, or APP authentication) is required in the request.
   * 
   * @param request - ListBillingRequest
   * @returns ListBillingResponse
   */
  async listBilling(request: $_model.ListBillingRequest): Promise<$_model.ListBillingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBillingWithOptions(request, headers, runtime);
  }

  /**
   * Lists chat sessions of the current user in reverse chronological order by creation time.
   * 
   * @remarks
   * ## Operation description
   * - This API supports filtering and sorting by multiple parameters, including tenant ID, page size, pagination token, keyword search, digital employee name, and update time range.
   * - By default, results are sorted in descending order by the `UpdatedAt` field.
   * - If an invalid `NextToken` is provided or `PageSize` exceeds the allowed range (1-100), the API returns a 400 error.
   * 
   * @param request - ListChatSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatSessionsResponse
   */
  async listChatSessionsWithOptions(request: $_model.ListChatSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatSessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.digitalEmployeeName)) {
      query["digitalEmployeeName"] = request.digitalEmployeeName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatSessions",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listChatSessions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListChatSessionsResponse({}));
  }

  /**
   * Lists chat sessions of the current user in reverse chronological order by creation time.
   * 
   * @remarks
   * ## Operation description
   * - This API supports filtering and sorting by multiple parameters, including tenant ID, page size, pagination token, keyword search, digital employee name, and update time range.
   * - By default, results are sorted in descending order by the `UpdatedAt` field.
   * - If an invalid `NextToken` is provided or `PageSize` exceeds the allowed range (1-100), the API returns a 400 error.
   * 
   * @param request - ListChatSessionsRequest
   * @returns ListChatSessionsResponse
   */
  async listChatSessions(request: $_model.ListChatSessionsRequest): Promise<$_model.ListChatSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChatSessionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of knowledge graphs available for semantic queries under a tenant.
   * 
   * @remarks
   * Lists published knowledge graphs under an identity tenant.
   *     CLI mapping: ``winnexo graph list``. ``tenantId`` is a required common parameter and is not included in the request body.
   *     The returned ``graphName`` can be used directly in ``querySemanticKnowledge``. This query is consistent with the existing frontend knowledge graph list and does not apply digital worker permission filtering. Specific semantic queries still verify agent USE permissions.
   *     Database exceptions go directly into unified 5xx error handling and are not disguised as a successful empty list.
   * 
   * @param request - ListGraphsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGraphsResponse
   */
  async listGraphsWithOptions(request: $_model.ListGraphsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGraphsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGraphs",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listGraphs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGraphsResponse>(await this.callApi(params, req, runtime), new $_model.ListGraphsResponse({}));
  }

  /**
   * Queries the list of knowledge graphs available for semantic queries under a tenant.
   * 
   * @remarks
   * Lists published knowledge graphs under an identity tenant.
   *     CLI mapping: ``winnexo graph list``. ``tenantId`` is a required common parameter and is not included in the request body.
   *     The returned ``graphName`` can be used directly in ``querySemanticKnowledge``. This query is consistent with the existing frontend knowledge graph list and does not apply digital worker permission filtering. Specific semantic queries still verify agent USE permissions.
   *     Database exceptions go directly into unified 5xx error handling and are not disguised as a successful empty list.
   * 
   * @param request - ListGraphsRequest
   * @returns ListGraphsResponse
   */
  async listGraphs(request: $_model.ListGraphsRequest): Promise<$_model.ListGraphsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGraphsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the category directory tree of an enterprise knowledge base, with support for sorting by a specified field.
   * 
   * @remarks
   * ## Request description
   * - This API retrieves the category list (subdirectory tree) of an enterprise knowledge base. You must have the knowledge base view permission.
   * - If the `directoryId` parameter is not provided, the API returns all category trees under the root directory of the enterprise knowledge base. If `directoryId` is provided, the API returns the subdirectory tree rooted at the specified directory.
   * - You can sort results by using the `sortField` and `sortOrder` parameters. By default, results are sorted by creation time in descending order.
   * - Security constraints: `tenant_id` and `user_id` are derived only from the authenticated identity, and the caller must have the `DEVELOPMENT_KB_VIEW` feature permission.
   * 
   * @param request - ListKnowledgeBaseDirectoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBaseDirectoriesResponse
   */
  async listKnowledgeBaseDirectoriesWithOptions(request: $_model.ListKnowledgeBaseDirectoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBaseDirectoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.sortField)) {
      body["sortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["sortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKnowledgeBaseDirectories",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listKnowledgeBaseDirectories`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBaseDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBaseDirectoriesResponse({}));
  }

  /**
   * Queries the category directory tree of an enterprise knowledge base, with support for sorting by a specified field.
   * 
   * @remarks
   * ## Request description
   * - This API retrieves the category list (subdirectory tree) of an enterprise knowledge base. You must have the knowledge base view permission.
   * - If the `directoryId` parameter is not provided, the API returns all category trees under the root directory of the enterprise knowledge base. If `directoryId` is provided, the API returns the subdirectory tree rooted at the specified directory.
   * - You can sort results by using the `sortField` and `sortOrder` parameters. By default, results are sorted by creation time in descending order.
   * - Security constraints: `tenant_id` and `user_id` are derived only from the authenticated identity, and the caller must have the `DEVELOPMENT_KB_VIEW` feature permission.
   * 
   * @param request - ListKnowledgeBaseDirectoriesRequest
   * @returns ListKnowledgeBaseDirectoriesResponse
   */
  async listKnowledgeBaseDirectories(request: $_model.ListKnowledgeBaseDirectoriesRequest): Promise<$_model.ListKnowledgeBaseDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBaseDirectoriesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the output list of the current user with support for conditional filtering and pagination.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries the output list of the current logon user.
   * - `tenantId` is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * - You can filter results by using parameters such as `operatingObjectName`, `itemType`, and `keyword`.
   * - Set `sharedOnly` to `true` to display only shared outputs.
   * - Pagination is controlled by `page` (page number) and `pageSize` (number of entries per page). By default, the first page is returned with 20 records per page.
   * - Results are sorted by update time in descending order by default.
   * - The `tenant_id` or `user_id` values passed in the request body are ignored. This information is obtained only from the authenticated identity.
   * 
   * @param request - ListOutputFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOutputFilesResponse
   */
  async listOutputFilesWithOptions(request: $_model.ListOutputFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOutputFilesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.itemType)) {
      body["itemType"] = request.itemType;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sharedOnly)) {
      body["sharedOnly"] = request.sharedOnly;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOutputFiles",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listOutputFiles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOutputFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListOutputFilesResponse({}));
  }

  /**
   * Queries the output list of the current user with support for conditional filtering and pagination.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries the output list of the current logon user.
   * - `tenantId` is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * - You can filter results by using parameters such as `operatingObjectName`, `itemType`, and `keyword`.
   * - Set `sharedOnly` to `true` to display only shared outputs.
   * - Pagination is controlled by `page` (page number) and `pageSize` (number of entries per page). By default, the first page is returned with 20 records per page.
   * - Results are sorted by update time in descending order by default.
   * - The `tenant_id` or `user_id` values passed in the request body are ignored. This information is obtained only from the authenticated identity.
   * 
   * @param request - ListOutputFilesRequest
   * @returns ListOutputFilesResponse
   */
  async listOutputFiles(request: $_model.ListOutputFilesRequest): Promise<$_model.ListOutputFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOutputFilesWithOptions(request, headers, runtime);
  }

  /**
   * Queries subdirectories and resources under a specified digital employee resource directory.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to drill down and query subdirectories and resources under the "My Resources" directory.
   * - When `directoryId` is set to \\"root\\", the service automatically resolves and returns the content under the current digital employee\\"s default root directory. If a specific directory ID is provided, the subdirectories and resources under that directory are returned.
   * - Security constraint: `tenant_id` and `user_id` can only come from the authenticated identity information. These fields provided by the caller in the request body are ignored.
   * - You can use the `sourceTypes` parameter to filter resources of specific types. When this parameter has a value, only resources that match the type condition are returned, and subdirectories are not included.
   * - Sorting supports ascending or descending order by name (`name`), creation time (`gmt_create`), or modification time (`gmt_modified`).
   * - The pagination feature allows you to customize the number of items displayed per page (maximum 100) and the current page number.
   * 
   * @param tmpReq - ListPersonalDirectoryContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPersonalDirectoryContentsResponse
   */
  async listPersonalDirectoryContentsWithOptions(tmpReq: $_model.ListPersonalDirectoryContentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPersonalDirectoryContentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListPersonalDirectoryContentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceTypes)) {
      request.sourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTypes, "sourceTypes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortField)) {
      body["sortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["sortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.sourceTypesShrink)) {
      body["sourceTypes"] = request.sourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPersonalDirectoryContents",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listPersonalDirectoryContents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPersonalDirectoryContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListPersonalDirectoryContentsResponse({}));
  }

  /**
   * Queries subdirectories and resources under a specified digital employee resource directory.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to drill down and query subdirectories and resources under the "My Resources" directory.
   * - When `directoryId` is set to \\"root\\", the service automatically resolves and returns the content under the current digital employee\\"s default root directory. If a specific directory ID is provided, the subdirectories and resources under that directory are returned.
   * - Security constraint: `tenant_id` and `user_id` can only come from the authenticated identity information. These fields provided by the caller in the request body are ignored.
   * - You can use the `sourceTypes` parameter to filter resources of specific types. When this parameter has a value, only resources that match the type condition are returned, and subdirectories are not included.
   * - Sorting supports ascending or descending order by name (`name`), creation time (`gmt_create`), or modification time (`gmt_modified`).
   * - The pagination feature allows you to customize the number of items displayed per page (maximum 100) and the current page number.
   * 
   * @param request - ListPersonalDirectoryContentsRequest
   * @returns ListPersonalDirectoryContentsResponse
   */
  async listPersonalDirectoryContents(request: $_model.ListPersonalDirectoryContentsRequest): Promise<$_model.ListPersonalDirectoryContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPersonalDirectoryContentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of system built-in roles.
   * 
   * @remarks
   * Queries the list of system built-in roles.
   *     Business logic:
   *     1. Constructs AuthContext from identity.
   *     2. Delegates to UserManagementAuthorizedService.list_system_roles for permission verification (PLATFORM_USER_VIEW).
   *     3. Renders role names and descriptions based on the request Accept-Language header.
   *     4. Returns a fixed set of 7 system built-in roles.
   *     The returned roleCode field can be directly used as the roleCodes parameter for createUser or updateUser.
   * 
   * @param request - ListRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: $_model.ListRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listRoles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * Queries the list of system built-in roles.
   * 
   * @remarks
   * Queries the list of system built-in roles.
   *     Business logic:
   *     1. Constructs AuthContext from identity.
   *     2. Delegates to UserManagementAuthorizedService.list_system_roles for permission verification (PLATFORM_USER_VIEW).
   *     3. Renders role names and descriptions based on the request Accept-Language header.
   *     4. Returns a fixed set of 7 system built-in roles.
   *     The returned roleCode field can be directly used as the roleCodes parameter for createUser or updateUser.
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of scheduled tasks.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to an enterprise knowledge base.
   * - The `DEVELOPMENT_KB_MANAGE` permission is required to call this API.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Make sure your account balance is sufficient.
   * 
   * @param tmpReq - ListScheduledTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasksWithOptions(tmpReq: $_model.ListScheduledTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListScheduledTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.visibilities)) {
      request.visibilitiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.visibilities, "visibilities", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collaborationGroupId)) {
      query["collaborationGroupId"] = request.collaborationGroupId;
    }

    if (!$dara.isNull(request.creatorOnly)) {
      query["creatorOnly"] = request.creatorOnly;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.visibilitiesShrink)) {
      query["visibilities"] = request.visibilitiesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledTasks",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listScheduledTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledTasksResponse({}));
  }

  /**
   * Retrieves a list of scheduled tasks.
   * 
   * @remarks
   * ## Operation description
   * - This operation uploads a file to an enterprise knowledge base.
   * - The `DEVELOPMENT_KB_MANAGE` permission is required to call this API.
   * - You must provide the OSS persistent address (`filePath`) of the file when uploading.
   * - Optional parameters include the public access URL and original file name to enhance the completeness of file information.
   * - If `directoryId` is specified, the file is placed in the corresponding enterprise knowledge base directory. Otherwise, the file is bound to the default root directory of the current digital employee.
   * - You can add tags to the resource by using `sourceTags` for subsequent management and retrieval.
   * - This operation initiates a billing item (UNSTRUCTURED_PARSE). Make sure your account balance is sufficient.
   * 
   * @param request - ListScheduledTasksRequest
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasks(request: $_model.ListScheduledTasksRequest): Promise<$_model.ListScheduledTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledTasksWithOptions(request, headers, runtime);
  }

  /**
   * Lists the skills visible to the current tenant.
   * 
   * @remarks
   * ## Request description
   * This API retrieves all visible skills under the current tenant. It supports filtering by digital employee binding relationship, skill source, tags, keywords, and other conditions, and supports pagination.
   * ### Request parameters
   * - **TenantId**: Optional. A common parameter passed through by the gateway to the backend header. If not specified, the default tenant of the current caller is used.
   * - **FilterType**: Optional. The skill filtering dimension. Valid values: `ALL` (all published), `BUILTIN` (built-in published), `CUSTOM` (custom published), `DRAFT` (drafts, including published skills with unpublished modifications). Default value: `ALL`.
   * - **Tags**: Optional. Filters by tags. A match occurs if any tag in the array is hit.
   * - **Keyword**: Optional. Performs fuzzy matching by skill name or description.
   * - **Page**: Optional. The page number. Minimum value: 1. Default value: 1.
   * - **PageSize**: Optional. The number of entries per page. Value range: 1 to 100. Default value: 20.
   * - **OperatingObjectName**: Optional. The digital employee name. If specified, filters by binding relationship. Must be used together with `BindStatus`.
   * - **BindStatus**: Optional. The binding status. Valid values: `BOUND` (bound), `UNBOUND` (unbound global skills).
   * ### Response parameters
   * The response contains the skill list `items`, total count `total`, current page `page`, and page size `pageSize`.
   * 
   * @param tmpReq - ListSkillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillsResponse
   */
  async listSkillsWithOptions(tmpReq: $_model.ListSkillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse> {
    tmpReq.validate();
    let request = new $_model.ListSkillsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bindStatus)) {
      body["bindStatus"] = request.bindStatus;
    }

    if (!$dara.isNull(request.filterType)) {
      body["filterType"] = request.filterType;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkills",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listSkills`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillsResponse({}));
  }

  /**
   * Lists the skills visible to the current tenant.
   * 
   * @remarks
   * ## Request description
   * This API retrieves all visible skills under the current tenant. It supports filtering by digital employee binding relationship, skill source, tags, keywords, and other conditions, and supports pagination.
   * ### Request parameters
   * - **TenantId**: Optional. A common parameter passed through by the gateway to the backend header. If not specified, the default tenant of the current caller is used.
   * - **FilterType**: Optional. The skill filtering dimension. Valid values: `ALL` (all published), `BUILTIN` (built-in published), `CUSTOM` (custom published), `DRAFT` (drafts, including published skills with unpublished modifications). Default value: `ALL`.
   * - **Tags**: Optional. Filters by tags. A match occurs if any tag in the array is hit.
   * - **Keyword**: Optional. Performs fuzzy matching by skill name or description.
   * - **Page**: Optional. The page number. Minimum value: 1. Default value: 1.
   * - **PageSize**: Optional. The number of entries per page. Value range: 1 to 100. Default value: 20.
   * - **OperatingObjectName**: Optional. The digital employee name. If specified, filters by binding relationship. Must be used together with `BindStatus`.
   * - **BindStatus**: Optional. The binding status. Valid values: `BOUND` (bound), `UNBOUND` (unbound global skills).
   * ### Response parameters
   * The response contains the skill list `items`, total count `total`, current page `page`, and page size `pageSize`.
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSkillsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of knowledge bases.
   * 
   * @remarks
   * ## Request description
   * - This API is used to perform a paging query on the folder content and resources in an enterprise knowledge base.
   * - Multiple parameters are supported for filtering and sorting, such as `directoryId`, `page`, `pageSize`, `sortField`, `sortOrder`, and others.
   * - The `sourceTypes` parameter allows you to filter by resource type. Separate multiple types with commas.
   * - When `directoryId` is not specified or set to `root`, the root folder list of the knowledge base is queried by default.
   * - The default sort field is `name`, and the default sort order is ascending (`asc`).
   * 
   * @param request - ListTenantDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantDirectoryResponse
   */
  async listTenantDirectoryWithOptions(request: $_model.ListTenantDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortField)) {
      body["sortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["sortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      body["sourceTypes"] = request.sourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listTenantDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantDirectoryResponse({}));
  }

  /**
   * Retrieves the list of knowledge bases.
   * 
   * @remarks
   * ## Request description
   * - This API is used to perform a paging query on the folder content and resources in an enterprise knowledge base.
   * - Multiple parameters are supported for filtering and sorting, such as `directoryId`, `page`, `pageSize`, `sortField`, `sortOrder`, and others.
   * - The `sourceTypes` parameter allows you to filter by resource type. Separate multiple types with commas.
   * - When `directoryId` is not specified or set to `root`, the root folder list of the knowledge base is queried by default.
   * - The default sort field is `name`, and the default sort order is ascending (`asc`).
   * 
   * @param request - ListTenantDirectoryRequest
   * @returns ListTenantDirectoryResponse
   */
  async listTenantDirectory(request: $_model.ListTenantDirectoryRequest): Promise<$_model.ListTenantDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTenantDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Queries the knowledge base directory content visible to the current OpenAPI user.
   * 
   * @remarks
   * ## Operation description
   * - This operation returns subdirectories and READY resources under the specified directory based on the enterprise knowledge base frontend scope.
   * - The user identity and directory visibility scope are derived from the OpenAPI authentication context.
   * - When `sourceTypes` has a value, only resources are returned. `keyword` searches only the current directory level.
   * 
   * @param request - ListUserVisibleKnowledgeBaseContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserVisibleKnowledgeBaseContentsResponse
   */
  async listUserVisibleKnowledgeBaseContentsWithOptions(request: $_model.ListUserVisibleKnowledgeBaseContentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserVisibleKnowledgeBaseContentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortField)) {
      body["sortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["sortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      body["sourceTypes"] = request.sourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserVisibleKnowledgeBaseContents",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listUserVisibleKnowledgeBaseContents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserVisibleKnowledgeBaseContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserVisibleKnowledgeBaseContentsResponse({}));
  }

  /**
   * Queries the knowledge base directory content visible to the current OpenAPI user.
   * 
   * @remarks
   * ## Operation description
   * - This operation returns subdirectories and READY resources under the specified directory based on the enterprise knowledge base frontend scope.
   * - The user identity and directory visibility scope are derived from the OpenAPI authentication context.
   * - When `sourceTypes` has a value, only resources are returned. `keyword` searches only the current directory level.
   * 
   * @param request - ListUserVisibleKnowledgeBaseContentsRequest
   * @returns ListUserVisibleKnowledgeBaseContentsResponse
   */
  async listUserVisibleKnowledgeBaseContents(request: $_model.ListUserVisibleKnowledgeBaseContentsRequest): Promise<$_model.ListUserVisibleKnowledgeBaseContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserVisibleKnowledgeBaseContentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of enterprise knowledge bases visible to the current OpenAPI user.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries the enterprise knowledge bases visible to the platform user mapped from the OpenAPI authentication identity.
   * - Both the tenant and user identities are determined by the authentication context. Callers cannot expand the visible scope through business parameters.
   * - `tenantId` is an optional common parameter. `keyword` can filter by knowledge base name or description.
   * 
   * @param request - ListUserVisibleKnowledgeBasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserVisibleKnowledgeBasesResponse
   */
  async listUserVisibleKnowledgeBasesWithOptions(request: $_model.ListUserVisibleKnowledgeBasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserVisibleKnowledgeBasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserVisibleKnowledgeBases",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listUserVisibleKnowledgeBases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserVisibleKnowledgeBasesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserVisibleKnowledgeBasesResponse({}));
  }

  /**
   * Queries the list of enterprise knowledge bases visible to the current OpenAPI user.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries the enterprise knowledge bases visible to the platform user mapped from the OpenAPI authentication identity.
   * - Both the tenant and user identities are determined by the authentication context. Callers cannot expand the visible scope through business parameters.
   * - `tenantId` is an optional common parameter. `keyword` can filter by knowledge base name or description.
   * 
   * @param request - ListUserVisibleKnowledgeBasesRequest
   * @returns ListUserVisibleKnowledgeBasesResponse
   */
  async listUserVisibleKnowledgeBases(request: $_model.ListUserVisibleKnowledgeBasesRequest): Promise<$_model.ListUserVisibleKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserVisibleKnowledgeBasesWithOptions(request, headers, runtime);
  }

  /**
   * Queries tenant members by paging.
   * 
   * @remarks
   * Queries a paged list of tenant members by using OpenAPI.
   *     Business orchestration:
   *     1. Parse filter conditions (roleCodes → role_ids).
   *     2. Call UserTenantMappingRepository.query_paged_tenant_members to perform a paged query.
   *     3. Convert role_id in the results to roleCode and assemble the response.
   *     Error codes:
   *     - An error is thrown when an invalid roleCode parameter is specified.
   * 
   * @param tmpReq - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(tmpReq: $_model.ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    tmpReq.validate();
    let request = new $_model.ListUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "accountIds", "json");
    }

    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "roleCodes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      body["accountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.isActive)) {
      body["isActive"] = request.isActive;
    }

    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["roleCodes"] = request.roleCodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Queries tenant members by paging.
   * 
   * @remarks
   * Queries a paged list of tenant members by using OpenAPI.
   *     Business orchestration:
   *     1. Parse filter conditions (roleCodes → role_ids).
   *     2. Call UserTenantMappingRepository.query_paged_tenant_members to perform a paged query.
   *     3. Convert role_id in the results to roleCode and assemble the response.
   *     Error codes:
   *     - An error is thrown when an invalid roleCode parameter is specified.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  /**
   * Drills down to query subdirectories and resources under a specified knowledge base directory visible to a specified digital employee.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries all subdirectories and resources under a specified knowledge base directory for a specific digital employee.
   * - The user must have the USE permission on the target digital employee, and the digital employee must have access to the directory and its subdirectories specified in the request.
   * - You must provide the digital employee name (`operatingObjectName`) and the directory ID (`directoryId`) to query. Other parameters such as pagination information and sorting method are optional.
   * - The response includes the list of subdirectories and resources under the directory, and supports pagination.
   * - The `sourceStatus` field filters only resources in the `READY` state.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authenticated identity. Values passed in the request body by the caller are ignored.
   * 
   * @param tmpReq - ListVisibleKnowledgeBaseContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVisibleKnowledgeBaseContentsResponse
   */
  async listVisibleKnowledgeBaseContentsWithOptions(tmpReq: $_model.ListVisibleKnowledgeBaseContentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVisibleKnowledgeBaseContentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListVisibleKnowledgeBaseContentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceTypes)) {
      request.sourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTypes, "sourceTypes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortField)) {
      body["sortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      body["sortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.sourceTypesShrink)) {
      body["sourceTypes"] = request.sourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVisibleKnowledgeBaseContents",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listVisibleKnowledgeBaseContents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVisibleKnowledgeBaseContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListVisibleKnowledgeBaseContentsResponse({}));
  }

  /**
   * Drills down to query subdirectories and resources under a specified knowledge base directory visible to a specified digital employee.
   * 
   * @remarks
   * ## Operation description
   * - This operation queries all subdirectories and resources under a specified knowledge base directory for a specific digital employee.
   * - The user must have the USE permission on the target digital employee, and the digital employee must have access to the directory and its subdirectories specified in the request.
   * - You must provide the digital employee name (`operatingObjectName`) and the directory ID (`directoryId`) to query. Other parameters such as pagination information and sorting method are optional.
   * - The response includes the list of subdirectories and resources under the directory, and supports pagination.
   * - The `sourceStatus` field filters only resources in the `READY` state.
   * - For security purposes, `tenant_id` and `user_id` are obtained only from the authenticated identity. Values passed in the request body by the caller are ignored.
   * 
   * @param request - ListVisibleKnowledgeBaseContentsRequest
   * @returns ListVisibleKnowledgeBaseContentsResponse
   */
  async listVisibleKnowledgeBaseContents(request: $_model.ListVisibleKnowledgeBaseContentsRequest): Promise<$_model.ListVisibleKnowledgeBaseContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVisibleKnowledgeBaseContentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the top-level directories of enterprise knowledge bases accessible to a digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API operation retrieves the list of top-level knowledge base directories visible to a specified digital employee (operating object) within the enterprise.
   * 
   * @param request - ListVisibleKnowledgeBasesRequest
   * @param headers - ListVisibleKnowledgeBasesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVisibleKnowledgeBasesResponse
   */
  async listVisibleKnowledgeBasesWithOptions(request: $_model.ListVisibleKnowledgeBasesRequest, headers: $_model.ListVisibleKnowledgeBasesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListVisibleKnowledgeBasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.requestId)) {
      realHeaders["requestId"] = String(headers.requestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVisibleKnowledgeBases",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/listVisibleKnowledgeBases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVisibleKnowledgeBasesResponse>(await this.callApi(params, req, runtime), new $_model.ListVisibleKnowledgeBasesResponse({}));
  }

  /**
   * Queries the top-level directories of enterprise knowledge bases accessible to a digital employee.
   * 
   * @remarks
   * ## Request description
   * - This API operation retrieves the list of top-level knowledge base directories visible to a specified digital employee (operating object) within the enterprise.
   * 
   * @param request - ListVisibleKnowledgeBasesRequest
   * @returns ListVisibleKnowledgeBasesResponse
   */
  async listVisibleKnowledgeBases(request: $_model.ListVisibleKnowledgeBasesRequest): Promise<$_model.ListVisibleKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListVisibleKnowledgeBasesHeaders({ });
    return await this.listVisibleKnowledgeBasesWithOptions(request, headers, runtime);
  }

  /**
   * Moves a specified resource between enterprise knowledge base directories. Management permissions are required.
   * 
   * @remarks
   * ## Operation description
   * - **Authentication flow**:
   *   1. Basic authentication is performed by the root router (`request.state.openapi_identity`).
   *   2. This handler checks the `DEVELOPMENT_KB_MANAGE` feature permission.
   * - **Procedure**:
   *   1. Check that the source directory and target directory are not the same.
   *   2. Confirm that the target directory exists.
   *   3. Verify that the resource to be moved is in the source directory.
   *   4. Update the directory binding of the resource.
   *   5. Best-effort update of `source.settings["knowledge_id"]` to the target knowledge base ID.
   *   6. Best-effort notification to DocumentAgent to sync `knowledge_id` and `update_time`.
   * - **Security constraints**:
   *   - `tenant_id` and `user_id` must come from the authenticated identity.
   *   - The caller must have KB management permissions.
   * 
   * @param request - MoveKnowledgeBaseResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveKnowledgeBaseResourceResponse
   */
  async moveKnowledgeBaseResourceWithOptions(request: $_model.MoveKnowledgeBaseResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MoveKnowledgeBaseResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.knowledgeId)) {
      body["knowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.sourceDirectoryId)) {
      body["sourceDirectoryId"] = request.sourceDirectoryId;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.targetDirectoryId)) {
      body["targetDirectoryId"] = request.targetDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveKnowledgeBaseResource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/moveKnowledgeBaseResource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveKnowledgeBaseResourceResponse>(await this.callApi(params, req, runtime), new $_model.MoveKnowledgeBaseResourceResponse({}));
  }

  /**
   * Moves a specified resource between enterprise knowledge base directories. Management permissions are required.
   * 
   * @remarks
   * ## Operation description
   * - **Authentication flow**:
   *   1. Basic authentication is performed by the root router (`request.state.openapi_identity`).
   *   2. This handler checks the `DEVELOPMENT_KB_MANAGE` feature permission.
   * - **Procedure**:
   *   1. Check that the source directory and target directory are not the same.
   *   2. Confirm that the target directory exists.
   *   3. Verify that the resource to be moved is in the source directory.
   *   4. Update the directory binding of the resource.
   *   5. Best-effort update of `source.settings["knowledge_id"]` to the target knowledge base ID.
   *   6. Best-effort notification to DocumentAgent to sync `knowledge_id` and `update_time`.
   * - **Security constraints**:
   *   - `tenant_id` and `user_id` must come from the authenticated identity.
   *   - The caller must have KB management permissions.
   * 
   * @param request - MoveKnowledgeBaseResourceRequest
   * @returns MoveKnowledgeBaseResourceResponse
   */
  async moveKnowledgeBaseResource(request: $_model.MoveKnowledgeBaseResourceRequest): Promise<$_model.MoveKnowledgeBaseResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveKnowledgeBaseResourceWithOptions(request, headers, runtime);
  }

  /**
   * Moves a specified resource between personal directories of a user.
   * 
   * @remarks
   * ## Request description
   * - **The source directory and target directory cannot be the same**. Otherwise, the `ERR.Robject.UserDirectory.InvalidOperation` error is returned.
   * - **The target directory must exist**. If it does not exist, the `ERR.Robject.UserDirectory.DirectoryNotFound` error is returned.
   * - **The resource to be moved must exist in the source directory**. If it is not in the source directory, the `ERR.Robject.UserDirectory.ResourceNotInDirectory` error is returned.
   * - After a successful move, the system attempts to notify DocumentAgent to update the new path (`source_path`) of the resource. This step is best-effort. Even if it fails, the overall operation success status is not affected. Only an error log is recorded.
   * - For security purposes, the value of `tenant_id` can only be derived from the authenticated identity information.
   * 
   * @param request - MoveResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceResponse
   */
  async moveResourceWithOptions(request: $_model.MoveResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceDirectoryId)) {
      body["sourceDirectoryId"] = request.sourceDirectoryId;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.targetDirectoryId)) {
      body["targetDirectoryId"] = request.targetDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/moveResource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceResponse({}));
  }

  /**
   * Moves a specified resource between personal directories of a user.
   * 
   * @remarks
   * ## Request description
   * - **The source directory and target directory cannot be the same**. Otherwise, the `ERR.Robject.UserDirectory.InvalidOperation` error is returned.
   * - **The target directory must exist**. If it does not exist, the `ERR.Robject.UserDirectory.DirectoryNotFound` error is returned.
   * - **The resource to be moved must exist in the source directory**. If it is not in the source directory, the `ERR.Robject.UserDirectory.ResourceNotInDirectory` error is returned.
   * - After a successful move, the system attempts to notify DocumentAgent to update the new path (`source_path`) of the resource. This step is best-effort. Even if it fails, the overall operation success status is not affected. Only an error log is recorded.
   * - For security purposes, the value of `tenant_id` can only be derived from the authenticated identity information.
   * 
   * @param request - MoveResourceRequest
   * @returns MoveResourceResponse
   */
  async moveResource(request: $_model.MoveResourceRequest): Promise<$_model.MoveResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveResourceWithOptions(request, headers, runtime);
  }

  /**
   * Previews the knowledge content in a specified enterprise knowledge base.
   * 
   * @remarks
   * ## Operation description
   * - This operation previews the content of a specified knowledge entry in an enterprise knowledge base.
   * - The `DEVELOPMENT_KB_VIEW` permission is required to call this API.
   * - `sourceId` is a required parameter that identifies the knowledge entry to preview.
   * - The optional parameter `tenantId` specifies the tenant ID. If not provided, the default tenant ID of the caller is used.
   * - Multiple preview types are supported, including but not limited to images, audio, video, and text.
   * 
   * @param request - PreviewKnowledgeBaseSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewKnowledgeBaseSourceResponse
   */
  async previewKnowledgeBaseSourceWithOptions(request: $_model.PreviewKnowledgeBaseSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewKnowledgeBaseSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewKnowledgeBaseSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/previewKnowledgeBaseSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewKnowledgeBaseSourceResponse>(await this.callApi(params, req, runtime), new $_model.PreviewKnowledgeBaseSourceResponse({}));
  }

  /**
   * Previews the knowledge content in a specified enterprise knowledge base.
   * 
   * @remarks
   * ## Operation description
   * - This operation previews the content of a specified knowledge entry in an enterprise knowledge base.
   * - The `DEVELOPMENT_KB_VIEW` permission is required to call this API.
   * - `sourceId` is a required parameter that identifies the knowledge entry to preview.
   * - The optional parameter `tenantId` specifies the tenant ID. If not provided, the default tenant ID of the caller is used.
   * - Multiple preview types are supported, including but not limited to images, audio, video, and text.
   * 
   * @param request - PreviewKnowledgeBaseSourceRequest
   * @returns PreviewKnowledgeBaseSourceResponse
   */
  async previewKnowledgeBaseSource(request: $_model.PreviewKnowledgeBaseSourceRequest): Promise<$_model.PreviewKnowledgeBaseSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewKnowledgeBaseSourceWithOptions(request, headers, runtime);
  }

  /**
   * Allows a user to preview specified knowledge content in their personal directory.
   * 
   * @remarks
   * ## Request description
   * - This operation only allows a user to preview resources in their own personal directory.
   * - The authentication process includes basic authentication and data source ownership verification to ensure that the requester can only access knowledge in their personal directory.
   * - You must provide the unique identifier `sourceId` of the knowledge content in the request. The system queries and returns the corresponding preview information based on this ID and the user\\"s tenant information.
   * - Multiple preview types are supported, such as image, audio, and video. The system returns the corresponding preview URL or direct content display based on the type.
   * 
   * @param request - PreviewPersonalSourceRequest
   * @param headers - PreviewPersonalSourceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewPersonalSourceResponse
   */
  async previewPersonalSourceWithOptions(request: $_model.PreviewPersonalSourceRequest, headers: $_model.PreviewPersonalSourceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewPersonalSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.requestId)) {
      realHeaders["requestId"] = String(headers.requestId);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewPersonalSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/previewPersonalSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewPersonalSourceResponse>(await this.callApi(params, req, runtime), new $_model.PreviewPersonalSourceResponse({}));
  }

  /**
   * Allows a user to preview specified knowledge content in their personal directory.
   * 
   * @remarks
   * ## Request description
   * - This operation only allows a user to preview resources in their own personal directory.
   * - The authentication process includes basic authentication and data source ownership verification to ensure that the requester can only access knowledge in their personal directory.
   * - You must provide the unique identifier `sourceId` of the knowledge content in the request. The system queries and returns the corresponding preview information based on this ID and the user\\"s tenant information.
   * - Multiple preview types are supported, such as image, audio, and video. The system returns the corresponding preview URL or direct content display based on the type.
   * 
   * @param request - PreviewPersonalSourceRequest
   * @returns PreviewPersonalSourceResponse
   */
  async previewPersonalSource(request: $_model.PreviewPersonalSourceRequest): Promise<$_model.PreviewPersonalSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PreviewPersonalSourceHeaders({ });
    return await this.previewPersonalSourceWithOptions(request, headers, runtime);
  }

  /**
   * Queries primary object data by operating object name with paging support, including filtering and search.
   * 
   * @remarks
   * ## Operation description
   * - This API queries primary object data by a specified operating object name (such as `customer_1`) with paging.
   * - Keyword-based search is supported. You can set whether to return only objects marked as favorites in Settings.
   * - Complex filter conditions can be used to further narrow results, including but not limited to equal to, not equal to, greater than, and less than operators.
   * - If no primary object type is configured, an empty result set is returned.
   * - Data in the request undergoes authentication and filtering to ensure security and accuracy.
   * 
   * @param request - QueryPrimaryObjectDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPrimaryObjectDataResponse
   */
  async queryPrimaryObjectDataWithOptions(request: $_model.QueryPrimaryObjectDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPrimaryObjectDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.onlyFavorites)) {
      body["onlyFavorites"] = request.onlyFavorites;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPrimaryObjectData",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/queryPrimaryObjectData`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPrimaryObjectDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryPrimaryObjectDataResponse({}));
  }

  /**
   * Queries primary object data by operating object name with paging support, including filtering and search.
   * 
   * @remarks
   * ## Operation description
   * - This API queries primary object data by a specified operating object name (such as `customer_1`) with paging.
   * - Keyword-based search is supported. You can set whether to return only objects marked as favorites in Settings.
   * - Complex filter conditions can be used to further narrow results, including but not limited to equal to, not equal to, greater than, and less than operators.
   * - If no primary object type is configured, an empty result set is returned.
   * - Data in the request undergoes authentication and filtering to ensure security and accuracy.
   * 
   * @param request - QueryPrimaryObjectDataRequest
   * @returns QueryPrimaryObjectDataResponse
   */
  async queryPrimaryObjectData(request: $_model.QueryPrimaryObjectDataRequest): Promise<$_model.QueryPrimaryObjectDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPrimaryObjectDataWithOptions(request, headers, runtime);
  }

  /**
   * Queries semantic knowledge related to a user question.
   * 
   * @remarks
   * Exposes only the schema_knowledge semantic recall capability of smart-query.
   *     CLI mapping: ``winnexo semantic query``. ``tenantId`` is passed through common parameters. ``userId``
   *     is read only from the Token identity and cannot be overridden by the request body. The service validates
   *     the ownership of ``graphName + agentName``, active graph status, digital human enablement status, and
   *     the current user\\"s USE permission. A cross-graph agent with the same name will fail and be closed.
   *     Then ``outputs=[schema_knowledge]`` is fixed.
   * 
   * @param request - QuerySemanticKnowledgeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySemanticKnowledgeResponse
   */
  async querySemanticKnowledgeWithOptions(request: $_model.QuerySemanticKnowledgeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySemanticKnowledgeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentName)) {
      body["agentName"] = request.agentName;
    }

    if (!$dara.isNull(request.graphName)) {
      body["graphName"] = request.graphName;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySemanticKnowledge",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/querySemanticKnowledge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySemanticKnowledgeResponse>(await this.callApi(params, req, runtime), new $_model.QuerySemanticKnowledgeResponse({}));
  }

  /**
   * Queries semantic knowledge related to a user question.
   * 
   * @remarks
   * Exposes only the schema_knowledge semantic recall capability of smart-query.
   *     CLI mapping: ``winnexo semantic query``. ``tenantId`` is passed through common parameters. ``userId``
   *     is read only from the Token identity and cannot be overridden by the request body. The service validates
   *     the ownership of ``graphName + agentName``, active graph status, digital human enablement status, and
   *     the current user\\"s USE permission. A cross-graph agent with the same name will fail and be closed.
   *     Then ``outputs=[schema_knowledge]`` is fixed.
   * 
   * @param request - QuerySemanticKnowledgeRequest
   * @returns QuerySemanticKnowledgeResponse
   */
  async querySemanticKnowledge(request: $_model.QuerySemanticKnowledgeRequest): Promise<$_model.QuerySemanticKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySemanticKnowledgeWithOptions(request, headers, runtime);
  }

  /**
   * Queries the result of an organization synchronization task.
   * 
   * @remarks
   * Queries the execution status and result of an organization synchronization task based on the task ID.
   *     Task status transitions: PENDING → RUNNING → COMPLETED / FAILED / TIMEOUT / CANCELED
   *     Recommended client polling interval: 3 to 5 seconds.
   * 
   * @param request - QuerySyncResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySyncResultResponse
   */
  async querySyncResultWithOptions(request: $_model.QuerySyncResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySyncResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySyncResult",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/querySyncResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySyncResultResponse>(await this.callApi(params, req, runtime), new $_model.QuerySyncResultResponse({}));
  }

  /**
   * Queries the result of an organization synchronization task.
   * 
   * @remarks
   * Queries the execution status and result of an organization synchronization task based on the task ID.
   *     Task status transitions: PENDING → RUNNING → COMPLETED / FAILED / TIMEOUT / CANCELED
   *     Recommended client polling interval: 3 to 5 seconds.
   * 
   * @param request - QuerySyncResultRequest
   * @returns QuerySyncResultResponse
   */
  async querySyncResult(request: $_model.QuerySyncResultRequest): Promise<$_model.QuerySyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySyncResultWithOptions(request, headers, runtime);
  }

  /**
   * Generates next-step recommendations for a session.
   * 
   * @remarks
   * ## Request description
   * Based on the most recent N messages in a session and the skills attached to the agent, this operation invokes an LLM to generate 0 to 3 next-step recommendations (follow-up questions or recommended skills to execute).
   * - `sessionId`: The session ID. Required. Only sessions that the currently authenticated user has permission to access are allowed.
   * - `recentMessageCount`: The number of recent messages used to assemble contextual information. Valid values: 1 to 30. Default value: 10 (approximately 5 rounds of user+assistant conversation).
   * - `customPrompt`: A custom recommendation instruction (up to 10,000 characters). This is injected into the default recommendation template as a custom instruction (before the output format constraints). The output is still subject to the JSON format and type constraints of the template.
   * - `outputType`: The output type filter. followUpOnly = follow-up recommendations only (default). skillOnly = skill recommendations only. both = generate both types.
   * Unlike internal endpoints, API calls are not restricted by the next-step recommendation toggle in user personal settings and always execute recommendation generation.
   * 
   * @param request - RecommendNextActionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecommendNextActionsResponse
   */
  async recommendNextActionsWithOptions(request: $_model.RecommendNextActionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecommendNextActionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.outputType)) {
      body["outputType"] = request.outputType;
    }

    if (!$dara.isNull(request.recentMessageCount)) {
      body["recentMessageCount"] = request.recentMessageCount;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecommendNextActions",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/recommendNextActions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecommendNextActionsResponse>(await this.callApi(params, req, runtime), new $_model.RecommendNextActionsResponse({}));
  }

  /**
   * Generates next-step recommendations for a session.
   * 
   * @remarks
   * ## Request description
   * Based on the most recent N messages in a session and the skills attached to the agent, this operation invokes an LLM to generate 0 to 3 next-step recommendations (follow-up questions or recommended skills to execute).
   * - `sessionId`: The session ID. Required. Only sessions that the currently authenticated user has permission to access are allowed.
   * - `recentMessageCount`: The number of recent messages used to assemble contextual information. Valid values: 1 to 30. Default value: 10 (approximately 5 rounds of user+assistant conversation).
   * - `customPrompt`: A custom recommendation instruction (up to 10,000 characters). This is injected into the default recommendation template as a custom instruction (before the output format constraints). The output is still subject to the JSON format and type constraints of the template.
   * - `outputType`: The output type filter. followUpOnly = follow-up recommendations only (default). skillOnly = skill recommendations only. both = generate both types.
   * Unlike internal endpoints, API calls are not restricted by the next-step recommendation toggle in user personal settings and always execute recommendation generation.
   * 
   * @param request - RecommendNextActionsRequest
   * @returns RecommendNextActionsResponse
   */
  async recommendNextActions(request: $_model.RecommendNextActionsRequest): Promise<$_model.RecommendNextActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recommendNextActionsWithOptions(request, headers, runtime);
  }

  /**
   * Removes a user from a tenant.
   * 
   * @remarks
   * Removes a user from a tenant.
   *     Business orchestration:
   *     1. Obtains tenant_id from identity.
   *     2. Calls delete_user_from_tenant (includes last admin protection).
   *     3. Returns success.
   *     This operation:
   *     - Removes all role associations of the user under the tenant.
   *     - Removes all user group associations of the user under the tenant.
   *     - Revokes all digital employee usage authorizations of the user under the tenant.
   *     - Deletes the user-tenant mapping.
   * 
   * @param request - RemoveUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserResponse
   */
  async removeUserWithOptions(request: $_model.RemoveUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveUserResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.wnUserId)) {
      query["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveUser",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/removeUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveUserResponse>(await this.callApi(params, req, runtime), new $_model.RemoveUserResponse({}));
  }

  /**
   * Removes a user from a tenant.
   * 
   * @remarks
   * Removes a user from a tenant.
   *     Business orchestration:
   *     1. Obtains tenant_id from identity.
   *     2. Calls delete_user_from_tenant (includes last admin protection).
   *     3. Returns success.
   *     This operation:
   *     - Removes all role associations of the user under the tenant.
   *     - Removes all user group associations of the user under the tenant.
   *     - Revokes all digital employee usage authorizations of the user under the tenant.
   *     - Deletes the user-tenant mapping.
   * 
   * @param request - RemoveUserRequest
   * @returns RemoveUserResponse
   */
  async removeUser(request: $_model.RemoveUserRequest): Promise<$_model.RemoveUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeUserWithOptions(request, headers, runtime);
  }

  /**
   * Renames a data source in a specified enterprise knowledge base.
   * 
   * @remarks
   * ## Request description
   * - This operation allows users with the required permissions to modify the name of a specific data source in an enterprise knowledge base.
   * - You must provide the ID of the data source to be renamed (sourceId) and the new name (newName).
   * - The rename operation only updates the name field of the data source and does not trigger other processing flows.
   * - After successful execution, the system publishes a `SOURCE_CHANGED` event for frontend display refresh and attempts to notify DocumentAgent to synchronize the latest source_name information. However, if this step fails, it does not affect the completion status of the main flow.
   * - If the specified sourceId does not exist, the error code `ERR.Robject.Source.NotFound` is returned.
   * - To invoke this API, you must have the `DEVELOPMENT_KB_MANAGE` feature permission.
   * - Identity verification is supported through AccessKey, BearerToken, or APP methods to authenticate requests.
   * 
   * @param request - RenameKnowledgeBaseSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameKnowledgeBaseSourceResponse
   */
  async renameKnowledgeBaseSourceWithOptions(request: $_model.RenameKnowledgeBaseSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenameKnowledgeBaseSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newName)) {
      body["newName"] = request.newName;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameKnowledgeBaseSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/renameKnowledgeBaseSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameKnowledgeBaseSourceResponse>(await this.callApi(params, req, runtime), new $_model.RenameKnowledgeBaseSourceResponse({}));
  }

  /**
   * Renames a data source in a specified enterprise knowledge base.
   * 
   * @remarks
   * ## Request description
   * - This operation allows users with the required permissions to modify the name of a specific data source in an enterprise knowledge base.
   * - You must provide the ID of the data source to be renamed (sourceId) and the new name (newName).
   * - The rename operation only updates the name field of the data source and does not trigger other processing flows.
   * - After successful execution, the system publishes a `SOURCE_CHANGED` event for frontend display refresh and attempts to notify DocumentAgent to synchronize the latest source_name information. However, if this step fails, it does not affect the completion status of the main flow.
   * - If the specified sourceId does not exist, the error code `ERR.Robject.Source.NotFound` is returned.
   * - To invoke this API, you must have the `DEVELOPMENT_KB_MANAGE` feature permission.
   * - Identity verification is supported through AccessKey, BearerToken, or APP methods to authenticate requests.
   * 
   * @param request - RenameKnowledgeBaseSourceRequest
   * @returns RenameKnowledgeBaseSourceResponse
   */
  async renameKnowledgeBaseSource(request: $_model.RenameKnowledgeBaseSourceRequest): Promise<$_model.RenameKnowledgeBaseSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameKnowledgeBaseSourceWithOptions(request, headers, runtime);
  }

  /**
   * Renames a specified data source. This is a lightweight operation.
   * 
   * @remarks
   * ## Operation description
   * - This API updates only the `name` field of the data source and does not trigger `process_source`.
   * - After a successful update, a `SOURCE_CHANGED` event is published for the frontend to refresh the display.
   * - The system makes a best-effort attempt to notify DocumentAgent to sync the new `source_name`. Even if the sync fails, the main process is not blocked.
   * - If the specified data source does not exist, the `ERR.Robject.Source.NotFound` error is returned. The global middleware converts this error into a POP error code.
   * - Security constraint: `tenant_id` and `user_id` must be derived from the authenticated identity.
   * 
   * @param request - RenameSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameSourceResponse
   */
  async renameSourceWithOptions(request: $_model.RenameSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenameSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newName)) {
      body["newName"] = request.newName;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/renameSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameSourceResponse>(await this.callApi(params, req, runtime), new $_model.RenameSourceResponse({}));
  }

  /**
   * Renames a specified data source. This is a lightweight operation.
   * 
   * @remarks
   * ## Operation description
   * - This API updates only the `name` field of the data source and does not trigger `process_source`.
   * - After a successful update, a `SOURCE_CHANGED` event is published for the frontend to refresh the display.
   * - The system makes a best-effort attempt to notify DocumentAgent to sync the new `source_name`. Even if the sync fails, the main process is not blocked.
   * - If the specified data source does not exist, the `ERR.Robject.Source.NotFound` error is returned. The global middleware converts this error into a POP error code.
   * - Security constraint: `tenant_id` and `user_id` must be derived from the authenticated identity.
   * 
   * @param request - RenameSourceRequest
   * @returns RenameSourceResponse
   */
  async renameSource(request: $_model.RenameSourceRequest): Promise<$_model.RenameSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameSourceWithOptions(request, headers, runtime);
  }

  /**
   * Re-parses a resource.
   * 
   * @remarks
   * ## Operation description
   * This API operation re-parses a specified data source. You can choose synchronous or asynchronous execution. You must provide the data source ID in the request. You can optionally specify whether to synchronously wait for parsing to complete. By default, the request is processed asynchronously by being added to a queue. You can also use the `tenantId` parameter to specify a tenant ID, but this parameter is optional.
   * - **forceSync**: If set to `true`, the operation synchronously waits for the re-parsing to complete. Default value: `false`, which indicates that the request is processed asynchronously.
   * - When the service returns `None`, it is converted to a `SourceNotFound` exception. Other exceptions are handled by the OpenAPI global exception chain.
   * 
   * @param request - ReparseSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReparseSourceResponse
   */
  async reparseSourceWithOptions(request: $_model.ReparseSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReparseSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceSync)) {
      body["forceSync"] = request.forceSync;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReparseSource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/reparseSource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReparseSourceResponse>(await this.callApi(params, req, runtime), new $_model.ReparseSourceResponse({}));
  }

  /**
   * Re-parses a resource.
   * 
   * @remarks
   * ## Operation description
   * This API operation re-parses a specified data source. You can choose synchronous or asynchronous execution. You must provide the data source ID in the request. You can optionally specify whether to synchronously wait for parsing to complete. By default, the request is processed asynchronously by being added to a queue. You can also use the `tenantId` parameter to specify a tenant ID, but this parameter is optional.
   * - **forceSync**: If set to `true`, the operation synchronously waits for the re-parsing to complete. Default value: `false`, which indicates that the request is processed asynchronously.
   * - When the service returns `None`, it is converted to a `SourceNotFound` exception. Other exceptions are handled by the OpenAPI global exception chain.
   * 
   * @param request - ReparseSourceRequest
   * @returns ReparseSourceResponse
   */
  async reparseSource(request: $_model.ReparseSourceRequest): Promise<$_model.ReparseSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reparseSourceWithOptions(request, headers, runtime);
  }

  /**
   * Replaces a FILE resource in a specified enterprise knowledge base and triggers re-parsing.
   * 
   * @remarks
   * ## Request description
   * This API allows you to update a specific FILE-type data source in a self-built enterprise knowledge base and trigger the system to re-parse the data source by providing a new file path and public access URL. Operations can be performed in synchronous or asynchronous mode. In synchronous mode, the client waits until the parsing process is complete.
   * - The **forceSync** parameter controls whether the request is processed synchronously. The default value is `false`, which indicates asynchronous processing.
   * - If **fileName** is not provided or its value is empty, the newly uploaded file retains the original file name.
   * - Ensure that the provided **filePath** and **filePublicUrl** are valid and point to the same file entity.
   * 
   * @param request - ReplaceKnowledgeBaseSourceFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceKnowledgeBaseSourceFileResponse
   */
  async replaceKnowledgeBaseSourceFileWithOptions(request: $_model.ReplaceKnowledgeBaseSourceFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceKnowledgeBaseSourceFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.filePublicUrl)) {
      body["filePublicUrl"] = request.filePublicUrl;
    }

    if (!$dara.isNull(request.fileRecordId)) {
      body["fileRecordId"] = request.fileRecordId;
    }

    if (!$dara.isNull(request.forceSync)) {
      body["forceSync"] = request.forceSync;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceKnowledgeBaseSourceFile",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/replaceKnowledgeBaseSourceFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceKnowledgeBaseSourceFileResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceKnowledgeBaseSourceFileResponse({}));
  }

  /**
   * Replaces a FILE resource in a specified enterprise knowledge base and triggers re-parsing.
   * 
   * @remarks
   * ## Request description
   * This API allows you to update a specific FILE-type data source in a self-built enterprise knowledge base and trigger the system to re-parse the data source by providing a new file path and public access URL. Operations can be performed in synchronous or asynchronous mode. In synchronous mode, the client waits until the parsing process is complete.
   * - The **forceSync** parameter controls whether the request is processed synchronously. The default value is `false`, which indicates asynchronous processing.
   * - If **fileName** is not provided or its value is empty, the newly uploaded file retains the original file name.
   * - Ensure that the provided **filePath** and **filePublicUrl** are valid and point to the same file entity.
   * 
   * @param request - ReplaceKnowledgeBaseSourceFileRequest
   * @returns ReplaceKnowledgeBaseSourceFileResponse
   */
  async replaceKnowledgeBaseSourceFile(request: $_model.ReplaceKnowledgeBaseSourceFileRequest): Promise<$_model.ReplaceKnowledgeBaseSourceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceKnowledgeBaseSourceFileWithOptions(request, headers, runtime);
  }

  /**
   * Replaces all object binding information under a specified data source.
   * 
   * @remarks
   * ## Operation description
   * This API performs a full replacement of object bindings for a specified data source (deletes existing bindings first, then inserts new bindings). If an empty list is passed, all bindings are cleared.
   * - **Security constraints**: `tenant_id` and `user_id` must come from the authenticated identity.
   * - **Error handling**: If the specified data source does not exist, an `ERR.Robject.InvalidParameter` error is thrown and converted to a POP error code by the global middleware.
   * - **Synchronous notification**: After a successful replacement, the system makes a best-effort synchronous notification to DocumentAgent to update `semantics.object_bindings`. However, failures are only logged and do not block the main process.
   * 
   * @param tmpReq - ReplaceObjectBindingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceObjectBindingsResponse
   */
  async replaceObjectBindingsWithOptions(tmpReq: $_model.ReplaceObjectBindingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceObjectBindingsResponse> {
    tmpReq.validate();
    let request = new $_model.ReplaceObjectBindingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.objectBindings)) {
      request.objectBindingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectBindings, "objectBindings", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectBindingsShrink)) {
      body["objectBindings"] = request.objectBindingsShrink;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceObjectBindings",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/replaceObjectBindings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceObjectBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceObjectBindingsResponse({}));
  }

  /**
   * Replaces all object binding information under a specified data source.
   * 
   * @remarks
   * ## Operation description
   * This API performs a full replacement of object bindings for a specified data source (deletes existing bindings first, then inserts new bindings). If an empty list is passed, all bindings are cleared.
   * - **Security constraints**: `tenant_id` and `user_id` must come from the authenticated identity.
   * - **Error handling**: If the specified data source does not exist, an `ERR.Robject.InvalidParameter` error is thrown and converted to a POP error code by the global middleware.
   * - **Synchronous notification**: After a successful replacement, the system makes a best-effort synchronous notification to DocumentAgent to update `semantics.object_bindings`. However, failures are only logged and do not block the main process.
   * 
   * @param request - ReplaceObjectBindingsRequest
   * @returns ReplaceObjectBindingsResponse
   */
  async replaceObjectBindings(request: $_model.ReplaceObjectBindingsRequest): Promise<$_model.ReplaceObjectBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceObjectBindingsWithOptions(request, headers, runtime);
  }

  /**
   * Allows a user to replace a personal file resource that they created and triggers the system to re-parse the file.
   * 
   * @remarks
   * ## Operation description
   * - This API operation replaces a personal FILE resource created by the current platform user and triggers the system to re-parse the file.
   * - The `tenant_id`, operator, and creator constraints are read only from the authenticated identity. Requests without a platform user are rejected to prevent bypassing ownership verification.
   * - If the server returns `None`, it is converted to a `NotFound` exception. Other exceptions are handled by the OpenAPI global exception chain.
   * - This operation supports synchronous or asynchronous waiting for re-parsing to complete. The default behavior is asynchronous queuing (controlled by the `forceSync` parameter).
   * 
   * @param request - ReplaceSourceFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplaceSourceFileResponse
   */
  async replaceSourceFileWithOptions(request: $_model.ReplaceSourceFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReplaceSourceFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      body["filePath"] = request.filePath;
    }

    if (!$dara.isNull(request.filePublicUrl)) {
      body["filePublicUrl"] = request.filePublicUrl;
    }

    if (!$dara.isNull(request.fileRecordId)) {
      body["fileRecordId"] = request.fileRecordId;
    }

    if (!$dara.isNull(request.forceSync)) {
      body["forceSync"] = request.forceSync;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplaceSourceFile",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/replaceSourceFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplaceSourceFileResponse>(await this.callApi(params, req, runtime), new $_model.ReplaceSourceFileResponse({}));
  }

  /**
   * Allows a user to replace a personal file resource that they created and triggers the system to re-parse the file.
   * 
   * @remarks
   * ## Operation description
   * - This API operation replaces a personal FILE resource created by the current platform user and triggers the system to re-parse the file.
   * - The `tenant_id`, operator, and creator constraints are read only from the authenticated identity. Requests without a platform user are rejected to prevent bypassing ownership verification.
   * - If the server returns `None`, it is converted to a `NotFound` exception. Other exceptions are handled by the OpenAPI global exception chain.
   * - This operation supports synchronous or asynchronous waiting for re-parsing to complete. The default behavior is asynchronous queuing (controlled by the `forceSync` parameter).
   * 
   * @param request - ReplaceSourceFileRequest
   * @returns ReplaceSourceFileResponse
   */
  async replaceSourceFile(request: $_model.ReplaceSourceFileRequest): Promise<$_model.ReplaceSourceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceSourceFileWithOptions(request, headers, runtime);
  }

  /**
   * Resets the password of a user.
   * 
   * @remarks
   * Resets the password of a user through OpenAPI.
   *     Business orchestration:
   *     1. Call UserManagementService.reset_member_password with password_encrypted (required).
   *        The service internally performs RSA decryption, complexity validation, bcrypt hashing, and writes the result.
   *     2. Returns the reset result.
   *     Error codes:
   *     - ERR.User.NotFound: The user does not exist.
   *     - ERR.User.NotInTenant: The user does not belong to the current tenant.
   *     - ERR.User.WinnexoPasswordRequired: The user does not have password credentials (non-WINNEXO type).
   * 
   * @param request - ResetPasswordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetPasswordResponse
   */
  async resetPasswordWithOptions(request: $_model.ResetPasswordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetPasswordResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.passwordEncrypted)) {
      body["passwordEncrypted"] = request.passwordEncrypted;
    }

    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetPassword",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/resetPassword`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetPasswordResponse({}));
  }

  /**
   * Resets the password of a user.
   * 
   * @remarks
   * Resets the password of a user through OpenAPI.
   *     Business orchestration:
   *     1. Call UserManagementService.reset_member_password with password_encrypted (required).
   *        The service internally performs RSA decryption, complexity validation, bcrypt hashing, and writes the result.
   *     2. Returns the reset result.
   *     Error codes:
   *     - ERR.User.NotFound: The user does not exist.
   *     - ERR.User.NotInTenant: The user does not belong to the current tenant.
   *     - ERR.User.WinnexoPasswordRequired: The user does not have password credentials (non-WINNEXO type).
   * 
   * @param request - ResetPasswordRequest
   * @returns ResetPasswordResponse
   */
  async resetPassword(request: $_model.ResetPasswordRequest): Promise<$_model.ResetPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetPasswordWithOptions(request, headers, runtime);
  }

  /**
   * Resets an API token.
   * 
   * @remarks
   * Resets the token of a user.
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is required).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Calls reset_token:
   *        - Changes the old ACTIVE token to RESET (permanently invalidated).
   *        - Generates a new ACTIVE token.
   *     4. Returns the new token in plaintext and the masked value.
   *     Note: After the reset, the old token is permanently invalidated and cannot be recovered. The new token in plaintext is returned only in this response.
   * 
   * @param request - ResetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetTokenResponse
   */
  async resetTokenWithOptions(request: $_model.ResetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetToken",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/resetToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetTokenResponse>(await this.callApi(params, req, runtime), new $_model.ResetTokenResponse({}));
  }

  /**
   * Resets an API token.
   * 
   * @remarks
   * Resets the token of a user.
   *     Business logic:
   *     1. Retrieves user_id from identity (caller_type=user is required).
   *     2. Constructs an AuthContext and delegates permission verification to UserTokenAuthorizedService.
   *     3. Calls reset_token:
   *        - Changes the old ACTIVE token to RESET (permanently invalidated).
   *        - Generates a new ACTIVE token.
   *     4. Returns the new token in plaintext and the masked value.
   *     Note: After the reset, the old token is permanently invalidated and cannot be recovered. The new token in plaintext is returned only in this response.
   * 
   * @param request - ResetTokenRequest
   * @returns ResetTokenResponse
   */
  async resetToken(request: $_model.ResetTokenRequest): Promise<$_model.ResetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetTokenWithOptions(request, headers, runtime);
  }

  /**
   * Retries all failed data sources in a specified folder and its subfolders in batch.
   * 
   * @remarks
   * ## Request description
   * This API retrieves and retries data sources with a FAILED status in the specified personal folder of a user (including all subfolders). The request returns immediately, and the actual retry tasks are executed asynchronously in the background. Only resources that the current logged-in user has access to and that were created by the user can be retried.
   * ### Security and permissions
   * - This operation requires appropriate RAM permissions.
   * - You can only operate on resources within the tenant to which the current user belongs.
   * - Ensure that `tenantId` and `userId` come from verified identity information.
   * ### Precautions
   * - `directoryId` is a required parameter that specifies the target folder in which to check and retry failed data sources.
   * - If `tenantId` is not provided, the tenant ID of the caller is used by default.
   * - The API supports multiple authentication methods, including AccessKey, BearerToken, and APP authentication.
   * 
   * @param request - RetryDirectoryFailedSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryDirectoryFailedSourcesResponse
   */
  async retryDirectoryFailedSourcesWithOptions(request: $_model.RetryDirectoryFailedSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryDirectoryFailedSourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryDirectoryFailedSources",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/retryDirectoryFailedSources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryDirectoryFailedSourcesResponse>(await this.callApi(params, req, runtime), new $_model.RetryDirectoryFailedSourcesResponse({}));
  }

  /**
   * Retries all failed data sources in a specified folder and its subfolders in batch.
   * 
   * @remarks
   * ## Request description
   * This API retrieves and retries data sources with a FAILED status in the specified personal folder of a user (including all subfolders). The request returns immediately, and the actual retry tasks are executed asynchronously in the background. Only resources that the current logged-in user has access to and that were created by the user can be retried.
   * ### Security and permissions
   * - This operation requires appropriate RAM permissions.
   * - You can only operate on resources within the tenant to which the current user belongs.
   * - Ensure that `tenantId` and `userId` come from verified identity information.
   * ### Precautions
   * - `directoryId` is a required parameter that specifies the target folder in which to check and retry failed data sources.
   * - If `tenantId` is not provided, the tenant ID of the caller is used by default.
   * - The API supports multiple authentication methods, including AccessKey, BearerToken, and APP authentication.
   * 
   * @param request - RetryDirectoryFailedSourcesRequest
   * @returns RetryDirectoryFailedSourcesResponse
   */
  async retryDirectoryFailedSources(request: $_model.RetryDirectoryFailedSourcesRequest): Promise<$_model.RetryDirectoryFailedSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryDirectoryFailedSourcesWithOptions(request, headers, runtime);
  }

  /**
   * Retries all data sources in failed status under a specified directory in batch.
   * 
   * @remarks
   * ## Request description
   * This API retrieves and retries all data sources in FAILED status under a specified enterprise knowledge base directory (including its subdirectories). The request returns immediately, and the actual retry operations are executed asynchronously in the background.
   * - **Authentication**: In addition to basic authentication, the `DEVELOPMENT_KB_MANAGE` permission is required.
   * - **Security constraints**: Only callers with the corresponding tenant and user identity are allowed access, and KB management permission is required. Administrators can initiate retries for failed resources of any user.
   * - **Parameters**:
   *   - `directoryId` (required): The ID of the enterprise knowledge base directory for which to check and retry failed data sources.
   *   - `tenantId` (optional): The tenant ID. The default tenant of the caller is used if this parameter is not specified.
   * - **Response**: On success, returns the number of data sources enqueued for retry and related details.
   * 
   * @param request - RetryKnowledgeBaseFailedSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryKnowledgeBaseFailedSourcesResponse
   */
  async retryKnowledgeBaseFailedSourcesWithOptions(request: $_model.RetryKnowledgeBaseFailedSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryKnowledgeBaseFailedSourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryKnowledgeBaseFailedSources",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/retryKnowledgeBaseFailedSources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryKnowledgeBaseFailedSourcesResponse>(await this.callApi(params, req, runtime), new $_model.RetryKnowledgeBaseFailedSourcesResponse({}));
  }

  /**
   * Retries all data sources in failed status under a specified directory in batch.
   * 
   * @remarks
   * ## Request description
   * This API retrieves and retries all data sources in FAILED status under a specified enterprise knowledge base directory (including its subdirectories). The request returns immediately, and the actual retry operations are executed asynchronously in the background.
   * - **Authentication**: In addition to basic authentication, the `DEVELOPMENT_KB_MANAGE` permission is required.
   * - **Security constraints**: Only callers with the corresponding tenant and user identity are allowed access, and KB management permission is required. Administrators can initiate retries for failed resources of any user.
   * - **Parameters**:
   *   - `directoryId` (required): The ID of the enterprise knowledge base directory for which to check and retry failed data sources.
   *   - `tenantId` (optional): The tenant ID. The default tenant of the caller is used if this parameter is not specified.
   * - **Response**: On success, returns the number of data sources enqueued for retry and related details.
   * 
   * @param request - RetryKnowledgeBaseFailedSourcesRequest
   * @returns RetryKnowledgeBaseFailedSourcesResponse
   */
  async retryKnowledgeBaseFailedSources(request: $_model.RetryKnowledgeBaseFailedSourcesRequest): Promise<$_model.RetryKnowledgeBaseFailedSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryKnowledgeBaseFailedSourcesWithOptions(request, headers, runtime);
  }

  /**
   * Revokes the usage permissions of a user or user group on a digital human.
   * 
   * @remarks
   * Revokes the usage permissions of a user or user group on a specified digital human.
   *     Business logic:
   *     1. Constructs an AuthContext from identity.
   *     2. Performs mutual exclusion validation on the request body: either userIds or userGroupIds must be specified.
   *     3. Delegates to AgentAuthorizationAuthorizedService.revoke_authorization for execution.
   *     4. Pre-validation: MANAGE permission + agent existence check (performed by the AuthorizedService layer, which authenticates before exposing existence).
   *     5. After direct user authorization is revoked, the user may still have access through user group authorization.
   * 
   * @param tmpReq - RevokeAgentUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAgentUsersResponse
   */
  async revokeAgentUsersWithOptions(tmpReq: $_model.RevokeAgentUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAgentUsersResponse> {
    tmpReq.validate();
    let request = new $_model.RevokeAgentUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userGroupIds)) {
      request.userGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userGroupIds, "userGroupIds", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "userIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.userGroupIdsShrink)) {
      body["userGroupIds"] = request.userGroupIdsShrink;
    }

    if (!$dara.isNull(request.userIdsShrink)) {
      body["userIds"] = request.userIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeAgentUsers",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/revokeAgentUsers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeAgentUsersResponse>(await this.callApi(params, req, runtime), new $_model.RevokeAgentUsersResponse({}));
  }

  /**
   * Revokes the usage permissions of a user or user group on a digital human.
   * 
   * @remarks
   * Revokes the usage permissions of a user or user group on a specified digital human.
   *     Business logic:
   *     1. Constructs an AuthContext from identity.
   *     2. Performs mutual exclusion validation on the request body: either userIds or userGroupIds must be specified.
   *     3. Delegates to AgentAuthorizationAuthorizedService.revoke_authorization for execution.
   *     4. Pre-validation: MANAGE permission + agent existence check (performed by the AuthorizedService layer, which authenticates before exposing existence).
   *     5. After direct user authorization is revoked, the user may still have access through user group authorization.
   * 
   * @param request - RevokeAgentUsersRequest
   * @returns RevokeAgentUsersResponse
   */
  async revokeAgentUsers(request: $_model.RevokeAgentUsersRequest): Promise<$_model.RevokeAgentUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeAgentUsersWithOptions(request, headers, runtime);
  }

  /**
   * Asynchronously triggers skill execution and immediately returns a RunId.
   * 
   * @remarks
   * ## Request description
   * This operation supports only asynchronous mode. After submission, the operation immediately returns a `RunId` and `Status=Running`. The client polls for the final result by calling `GetSkillRun`.
   * - **TenantId**: An optional common parameter that the gateway passes through to the backend header.
   * - **SkillCode** / **SkillName**: Specify one of the two parameters. SkillCode takes priority. If SkillName is not unique, `ERR.SkillHub.SkillNameAmbiguous` is returned.
   * - **Arguments**: Required. The skill input parameter object. The structure is described by the inputConfig returned by `GetSkill`.
   * - **ClientToken**: An optional idempotency key. In the current version, this value is only recorded in the task metadata and is not used for strict idempotency deduplication.
   * Note: Synchronous mode (Async=false), Stream, and CallbackUrl are not supported in the first release and will be available in later versions.
   * 
   * @param tmpReq - RunSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSkillResponse
   */
  async runSkillWithOptions(tmpReq: $_model.RunSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunSkillResponse> {
    tmpReq.validate();
    let request = new $_model.RunSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.arguments)) {
      request.argumentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arguments, "arguments", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.argumentsShrink)) {
      body["arguments"] = request.argumentsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    if (!$dara.isNull(request.skillCode)) {
      body["skillCode"] = request.skillCode;
    }

    if (!$dara.isNull(request.skillName)) {
      body["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSkill",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/runSkill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSkillResponse>(await this.callApi(params, req, runtime), new $_model.RunSkillResponse({}));
  }

  /**
   * Asynchronously triggers skill execution and immediately returns a RunId.
   * 
   * @remarks
   * ## Request description
   * This operation supports only asynchronous mode. After submission, the operation immediately returns a `RunId` and `Status=Running`. The client polls for the final result by calling `GetSkillRun`.
   * - **TenantId**: An optional common parameter that the gateway passes through to the backend header.
   * - **SkillCode** / **SkillName**: Specify one of the two parameters. SkillCode takes priority. If SkillName is not unique, `ERR.SkillHub.SkillNameAmbiguous` is returned.
   * - **Arguments**: Required. The skill input parameter object. The structure is described by the inputConfig returned by `GetSkill`.
   * - **ClientToken**: An optional idempotency key. In the current version, this value is only recorded in the task metadata and is not used for strict idempotency deduplication.
   * Note: Synchronous mode (Async=false), Stream, and CallbackUrl are not supported in the first release and will be available in later versions.
   * 
   * @param request - RunSkillRequest
   * @returns RunSkillResponse
   */
  async runSkill(request: $_model.RunSkillRequest): Promise<$_model.RunSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runSkillWithOptions(request, headers, runtime);
  }

  /**
   * Saves output details in batch as personal resources. Supports link or copy mode.
   * 
   * @remarks
   * ## Operation description
   * - This API saves a batch of output details as personal resources for the user.
   * - Two save modes are supported: `link` and `copy`. When `link` is selected, edits to the output are synchronized to the resource. When `copy` is selected, a snapshot is created with no limit on the number of copies.
   * - `tenant_id` and `user_id` are derived only from the authenticated identity.
   * - If `operating_object` values are inconsistent within the batch and `directoryId` is not specified, the entire batch fails with a pre-check error.
   * - The processing result of a single record does not affect other records. Failure information for individual records is returned in the response.
   * - A maximum of 50 records are supported per batch operation.
   * - Batch-level pre-check failures are returned in a POP-compatible error format by the global exception middleware.
   * 
   * @param tmpReq - SaveOutputFileToResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveOutputFileToResourceResponse
   */
  async saveOutputFileToResourceWithOptions(tmpReq: $_model.SaveOutputFileToResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SaveOutputFileToResourceResponse> {
    tmpReq.validate();
    let request = new $_model.SaveOutputFileToResourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "itemIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.itemIdsShrink)) {
      body["itemIds"] = request.itemIdsShrink;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveOutputFileToResource",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/saveOutputFileToResource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveOutputFileToResourceResponse>(await this.callApi(params, req, runtime), new $_model.SaveOutputFileToResourceResponse({}));
  }

  /**
   * Saves output details in batch as personal resources. Supports link or copy mode.
   * 
   * @remarks
   * ## Operation description
   * - This API saves a batch of output details as personal resources for the user.
   * - Two save modes are supported: `link` and `copy`. When `link` is selected, edits to the output are synchronized to the resource. When `copy` is selected, a snapshot is created with no limit on the number of copies.
   * - `tenant_id` and `user_id` are derived only from the authenticated identity.
   * - If `operating_object` values are inconsistent within the batch and `directoryId` is not specified, the entire batch fails with a pre-check error.
   * - The processing result of a single record does not affect other records. Failure information for individual records is returned in the response.
   * - A maximum of 50 records are supported per batch operation.
   * - Batch-level pre-check failures are returned in a POP-compatible error format by the global exception middleware.
   * 
   * @param request - SaveOutputFileToResourceRequest
   * @returns SaveOutputFileToResourceResponse
   */
  async saveOutputFileToResource(request: $_model.SaveOutputFileToResourceRequest): Promise<$_model.SaveOutputFileToResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveOutputFileToResourceWithOptions(request, headers, runtime);
  }

  /**
   * Asynchronously sends a session message.
   * 
   * @remarks
   * Asynchronously sends a session message.
   * 
   * @param tmpReq - SendAsyncChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendAsyncChatMessageResponse
   */
  async sendAsyncChatMessageWithOptions(tmpReq: $_model.SendAsyncChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendAsyncChatMessageResponse> {
    tmpReq.validate();
    let request = new $_model.SendAsyncChatMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.digitalEmployeeName)) {
      request.digitalEmployeeNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.digitalEmployeeName, "digitalEmployeeName", "json");
    }

    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "files", "json");
    }

    if (!$dara.isNull(tmpReq.taskExecution)) {
      request.taskExecutionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskExecution, "taskExecution", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.digitalEmployeeNameShrink)) {
      body["digitalEmployeeName"] = request.digitalEmployeeNameShrink;
    }

    if (!$dara.isNull(request.directChat)) {
      body["directChat"] = request.directChat;
    }

    if (!$dara.isNull(request.filesShrink)) {
      body["files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.reuseLastSession)) {
      body["reuseLastSession"] = request.reuseLastSession;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.taskExecutionShrink)) {
      body["taskExecution"] = request.taskExecutionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendAsyncChatMessage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/sendAsyncChatMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendAsyncChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendAsyncChatMessageResponse({}));
  }

  /**
   * Asynchronously sends a session message.
   * 
   * @remarks
   * Asynchronously sends a session message.
   * 
   * @param request - SendAsyncChatMessageRequest
   * @returns SendAsyncChatMessageResponse
   */
  async sendAsyncChatMessage(request: $_model.SendAsyncChatMessageRequest): Promise<$_model.SendAsyncChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendAsyncChatMessageWithOptions(request, headers, runtime);
  }

  /**
   * Sends a message.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - A persistent OSS address (`filePath`) must be provided for the file. Other information such as the public access URL and original file name is optional.
   * - If the target folder ID (`directoryId`) is not specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the invoker\\"s personal folder.
   * - Multiple authentication methods (AK, BearerToken, APP) are supported to authenticate requests.
   * - The operation type is write, and operation logs are recorded for subsequent auditing.
   * 
   * @param tmpReq - SendChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatMessageResponse
   */
  async *sendChatMessageWithSSE(tmpReq: $_model.SendChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.SendChatMessageResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.SendChatMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.digitalEmployeeName)) {
      request.digitalEmployeeNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.digitalEmployeeName, "digitalEmployeeName", "json");
    }

    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "files", "json");
    }

    if (!$dara.isNull(tmpReq.taskExecution)) {
      request.taskExecutionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskExecution, "taskExecution", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.digitalEmployeeNameShrink)) {
      body["digitalEmployeeName"] = request.digitalEmployeeNameShrink;
    }

    if (!$dara.isNull(request.directChat)) {
      body["directChat"] = request.directChat;
    }

    if (!$dara.isNull(request.filesShrink)) {
      body["files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.reuseLastSession)) {
      body["reuseLastSession"] = request.reuseLastSession;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.taskExecutionShrink)) {
      body["taskExecution"] = request.taskExecutionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendChatMessage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/sendChatMessage`,
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
        yield $dara.cast<$_model.SendChatMessageResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.SendChatMessageResponse({}));
      }

    }
  }

  /**
   * Sends a message.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - A persistent OSS address (`filePath`) must be provided for the file. Other information such as the public access URL and original file name is optional.
   * - If the target folder ID (`directoryId`) is not specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the invoker\\"s personal folder.
   * - Multiple authentication methods (AK, BearerToken, APP) are supported to authenticate requests.
   * - The operation type is write, and operation logs are recorded for subsequent auditing.
   * 
   * @param tmpReq - SendChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatMessageResponse
   */
  async sendChatMessageWithOptions(tmpReq: $_model.SendChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendChatMessageResponse> {
    tmpReq.validate();
    let request = new $_model.SendChatMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.digitalEmployeeName)) {
      request.digitalEmployeeNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.digitalEmployeeName, "digitalEmployeeName", "json");
    }

    if (!$dara.isNull(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "files", "json");
    }

    if (!$dara.isNull(tmpReq.taskExecution)) {
      request.taskExecutionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskExecution, "taskExecution", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.digitalEmployeeNameShrink)) {
      body["digitalEmployeeName"] = request.digitalEmployeeNameShrink;
    }

    if (!$dara.isNull(request.directChat)) {
      body["directChat"] = request.directChat;
    }

    if (!$dara.isNull(request.filesShrink)) {
      body["files"] = request.filesShrink;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.reuseLastSession)) {
      body["reuseLastSession"] = request.reuseLastSession;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.taskExecutionShrink)) {
      body["taskExecution"] = request.taskExecutionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendChatMessage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/sendChatMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendChatMessageResponse({}));
  }

  /**
   * Sends a message.
   * 
   * @remarks
   * ## Operation description
   * - This API is used to upload a file to the "My Resources" section of a specified digital employee.
   * - `source_type` is fixed to `FILE`, `scope` is fixed to `PERSONAL`, and `platform` is fixed to `LOCAL`.
   * - A persistent OSS address (`filePath`) must be provided for the file. Other information such as the public access URL and original file name is optional.
   * - If the target folder ID (`directoryId`) is not specified, the file is automatically attached to the default root folder of the current digital employee. If specified, ensure that the folder belongs to the invoker\\"s personal folder.
   * - Multiple authentication methods (AK, BearerToken, APP) are supported to authenticate requests.
   * - The operation type is write, and operation logs are recorded for subsequent auditing.
   * 
   * @param request - SendChatMessageRequest
   * @returns SendChatMessageResponse
   */
  async sendChatMessage(request: $_model.SendChatMessageRequest): Promise<$_model.SendChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendChatMessageWithOptions(request, headers, runtime);
  }

  /**
   * Stops conversation generation.
   * 
   * @param request - StopChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopChatMessageResponse
   */
  async stopChatMessageWithOptions(request: $_model.StopChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopChatMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopChatMessage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/stopChatMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.StopChatMessageResponse({}));
  }

  /**
   * Stops conversation generation.
   * 
   * @param request - StopChatMessageRequest
   * @returns StopChatMessageResponse
   */
  async stopChatMessage(request: $_model.StopChatMessageRequest): Promise<$_model.StopChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopChatMessageWithOptions(request, headers, runtime);
  }

  /**
   * Subscribes to a conversation message stream.
   * 
   * @remarks
   * Subscribes to a conversation message stream.
   * 
   * @param request - StreamChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StreamChatMessageResponse
   */
  async *streamChatMessageWithSSE(messageId: string, request: $_model.StreamChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.StreamChatMessageResponse, any, unknown> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lastEventId)) {
      query["lastEventId"] = request.lastEventId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StreamChatMessage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/streamChatMessage/${$dara.URL.percentEncode(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.StreamChatMessageResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.StreamChatMessageResponse({}));
      }

    }
  }

  /**
   * Subscribes to a conversation message stream.
   * 
   * @remarks
   * Subscribes to a conversation message stream.
   * 
   * @param request - StreamChatMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StreamChatMessageResponse
   */
  async streamChatMessageWithOptions(messageId: string, request: $_model.StreamChatMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StreamChatMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lastEventId)) {
      query["lastEventId"] = request.lastEventId;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StreamChatMessage",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/streamChatMessage/${$dara.URL.percentEncode(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StreamChatMessageResponse>(await this.callApi(params, req, runtime), new $_model.StreamChatMessageResponse({}));
  }

  /**
   * Subscribes to a conversation message stream.
   * 
   * @remarks
   * Subscribes to a conversation message stream.
   * 
   * @param request - StreamChatMessageRequest
   * @returns StreamChatMessageResponse
   */
  async streamChatMessage(messageId: string, request: $_model.StreamChatMessageRequest): Promise<$_model.StreamChatMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.streamChatMessageWithOptions(messageId, request, headers, runtime);
  }

  /**
   * Pushes organizational structure synchronization.
   * 
   * @remarks
   * Accepts a department tree and member relationships pushed from the client and creates an asynchronous synchronization task.
   *     Processing flow:
   *     1. Validates platformType (only saml, oauth2, or custom are allowed).
   *     2. Validates data volume limits (departments + members <= 50000).
   *     3. Validates the compatibility between syncMembers and platformType.
   *     4. SAML/OAuth2 scenario: Parses or automatically derives ssoSettingsId.
   *     5. Custom scenario: Validates that corpId has been registered through createCustomOrg.
   *     6. Delegates to OrgSyncAuthorizedService to create the task (which includes permission verification).
   *     7. Returns taskId for polling.
   * 
   * @param tmpReq - SyncOrgStructureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncOrgStructureResponse
   */
  async syncOrgStructureWithOptions(tmpReq: $_model.SyncOrgStructureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncOrgStructureResponse> {
    tmpReq.validate();
    let request = new $_model.SyncOrgStructureShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.departments)) {
      request.departmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.departments, "departments", "json");
    }

    if (!$dara.isNull(tmpReq.members)) {
      request.membersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.members, "members", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.corpId)) {
      body["corpId"] = request.corpId;
    }

    if (!$dara.isNull(request.departmentsShrink)) {
      body["departments"] = request.departmentsShrink;
    }

    if (!$dara.isNull(request.membersShrink)) {
      body["members"] = request.membersShrink;
    }

    if (!$dara.isNull(request.platformType)) {
      body["platformType"] = request.platformType;
    }

    if (!$dara.isNull(request.ssoSettingsId)) {
      body["ssoSettingsId"] = request.ssoSettingsId;
    }

    if (!$dara.isNull(request.syncMembers)) {
      body["syncMembers"] = request.syncMembers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncOrgStructure",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/syncOrgStructure`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncOrgStructureResponse>(await this.callApi(params, req, runtime), new $_model.SyncOrgStructureResponse({}));
  }

  /**
   * Pushes organizational structure synchronization.
   * 
   * @remarks
   * Accepts a department tree and member relationships pushed from the client and creates an asynchronous synchronization task.
   *     Processing flow:
   *     1. Validates platformType (only saml, oauth2, or custom are allowed).
   *     2. Validates data volume limits (departments + members <= 50000).
   *     3. Validates the compatibility between syncMembers and platformType.
   *     4. SAML/OAuth2 scenario: Parses or automatically derives ssoSettingsId.
   *     5. Custom scenario: Validates that corpId has been registered through createCustomOrg.
   *     6. Delegates to OrgSyncAuthorizedService to create the task (which includes permission verification).
   *     7. Returns taskId for polling.
   * 
   * @param request - SyncOrgStructureRequest
   * @returns SyncOrgStructureResponse
   */
  async syncOrgStructure(request: $_model.SyncOrgStructureRequest): Promise<$_model.SyncOrgStructureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncOrgStructureWithOptions(request, headers, runtime);
  }

  /**
   * Follows or unfollows a specified primary object.
   * 
   * @remarks
   * ## Request description
   * - **Precheck**:
   *   1. When adding a follow: The system checks whether the primary object is already followed to prevent duplicates, and authenticates that the primary object exists.
   *   2. When unfollowing: This is an idempotent operation. Regardless of whether the user has previously followed the object, `success=true` is returned.
   * - **Security**: Three authentication methods are supported: AK, BearerToken, and APP.
   * - **Request frequency limit**: A maximum of 100 requests can be send per second.
   * - **Response log**: The response log record feature is enabled.
   * - **Tenant relevance**: This API is associated with a specific tenant. The tenant ID of the invoker is used by default.
   * - **Operation type**: Write operation.
   * - **Backend service**: Requests are forwarded to an internal service for processing. The timeout period is 3 seconds.
   * 
   * @param tmpReq - TogglePrimaryObjectFavoriteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TogglePrimaryObjectFavoriteResponse
   */
  async togglePrimaryObjectFavoriteWithOptions(tmpReq: $_model.TogglePrimaryObjectFavoriteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TogglePrimaryObjectFavoriteResponse> {
    tmpReq.validate();
    let request = new $_model.TogglePrimaryObjectFavoriteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "objectIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.objectIdsShrink)) {
      body["objectIds"] = request.objectIdsShrink;
    }

    if (!$dara.isNull(request.objectType)) {
      body["objectType"] = request.objectType;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TogglePrimaryObjectFavorite",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/togglePrimaryObjectFavorite`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TogglePrimaryObjectFavoriteResponse>(await this.callApi(params, req, runtime), new $_model.TogglePrimaryObjectFavoriteResponse({}));
  }

  /**
   * Follows or unfollows a specified primary object.
   * 
   * @remarks
   * ## Request description
   * - **Precheck**:
   *   1. When adding a follow: The system checks whether the primary object is already followed to prevent duplicates, and authenticates that the primary object exists.
   *   2. When unfollowing: This is an idempotent operation. Regardless of whether the user has previously followed the object, `success=true` is returned.
   * - **Security**: Three authentication methods are supported: AK, BearerToken, and APP.
   * - **Request frequency limit**: A maximum of 100 requests can be send per second.
   * - **Response log**: The response log record feature is enabled.
   * - **Tenant relevance**: This API is associated with a specific tenant. The tenant ID of the invoker is used by default.
   * - **Operation type**: Write operation.
   * - **Backend service**: Requests are forwarded to an internal service for processing. The timeout period is 3 seconds.
   * 
   * @param request - TogglePrimaryObjectFavoriteRequest
   * @returns TogglePrimaryObjectFavoriteResponse
   */
  async togglePrimaryObjectFavorite(request: $_model.TogglePrimaryObjectFavoriteRequest): Promise<$_model.TogglePrimaryObjectFavoriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.togglePrimaryObjectFavoriteWithOptions(request, headers, runtime);
  }

  /**
   * Updates the authorization mode for digital employee usage permissions.
   * 
   * @remarks
   * Switches the authorization mode for digital employee usage permissions.
   *     Business logic:
   *     1. Constructs an AuthContext from the identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.update_auth_mode for execution.
   *     3. Pre-validation: MANAGE permission + agent existence check (performed by the AuthorizedService layer, which authenticates before exposing existence).
   *     4. SPECIFIED_USERS: Explicit authorization is required before usage.
   *     5. ALL_USERS: All users can use the digital employee without authorization (management permissions are not affected).
   * 
   * @param request - UpdateAgentAuthModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentAuthModeResponse
   */
  async updateAgentAuthModeWithOptions(request: $_model.UpdateAgentAuthModeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentAuthModeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authMode)) {
      body["authMode"] = request.authMode;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgentAuthMode",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateAgentAuthMode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentAuthModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentAuthModeResponse({}));
  }

  /**
   * Updates the authorization mode for digital employee usage permissions.
   * 
   * @remarks
   * Switches the authorization mode for digital employee usage permissions.
   *     Business logic:
   *     1. Constructs an AuthContext from the identity.
   *     2. Delegates to AgentAuthorizationAuthorizedService.update_auth_mode for execution.
   *     3. Pre-validation: MANAGE permission + agent existence check (performed by the AuthorizedService layer, which authenticates before exposing existence).
   *     4. SPECIFIED_USERS: Explicit authorization is required before usage.
   *     5. ALL_USERS: All users can use the digital employee without authorization (management permissions are not affected).
   * 
   * @param request - UpdateAgentAuthModeRequest
   * @returns UpdateAgentAuthModeResponse
   */
  async updateAgentAuthMode(request: $_model.UpdateAgentAuthModeRequest): Promise<$_model.UpdateAgentAuthModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentAuthModeWithOptions(request, headers, runtime);
  }

  /**
   * Updates a session.
   * 
   * @remarks
   * Updates a session.
   * 
   * @param request - UpdateChatSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChatSessionResponse
   */
  async updateChatSessionWithOptions(request: $_model.UpdateChatSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChatSessionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.title)) {
      body["title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChatSession",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateChatSession`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChatSessionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChatSessionResponse({}));
  }

  /**
   * Updates a session.
   * 
   * @remarks
   * Updates a session.
   * 
   * @param request - UpdateChatSessionRequest
   * @returns UpdateChatSessionResponse
   */
  async updateChatSession(request: $_model.UpdateChatSessionRequest): Promise<$_model.UpdateChatSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateChatSessionWithOptions(request, headers, runtime);
  }

  /**
   * Updates the basic information of a user\\"s personal directory.
   * 
   * @remarks
   * ## Operation description
   * This API operation updates the personal directory information of a specified user, including the name, description, and parent directory. Ensure that the directory corresponding to the provided `directoryId` exists and belongs to the current user. If the `name` or `path` of the directory is changed, the system automatically and recursively updates the paths of all subdirectories to maintain consistency. When adjusting the parent directory, ensure the validity of the new parent directory (that is, it is not the directory itself and does not cause a circular dependency).
   * - **Security constraints**: `tenant_id` and `user_id` must be derived from the authenticated identity.
   * - **Permission requirements**: Corresponding RAM permissions are required to perform this operation.
   * - **Input parameters**:
   *   - `directoryId`: Required. The unique identifier of the directory to update.
   *   - `name`: Optional. The new directory name.
   *   - `description`: Optional. The new directory description.
   *   - `parentId`: Optional. The ID of the new parent directory.
   *   - `path`: Optional. When specified, the system cascades the update to the paths of the current directory and all its subdirectories.
   * 
   * @param request - UpdateDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDirectoryResponse
   */
  async updateDirectoryWithOptions(request: $_model.UpdateDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDirectoryResponse({}));
  }

  /**
   * Updates the basic information of a user\\"s personal directory.
   * 
   * @remarks
   * ## Operation description
   * This API operation updates the personal directory information of a specified user, including the name, description, and parent directory. Ensure that the directory corresponding to the provided `directoryId` exists and belongs to the current user. If the `name` or `path` of the directory is changed, the system automatically and recursively updates the paths of all subdirectories to maintain consistency. When adjusting the parent directory, ensure the validity of the new parent directory (that is, it is not the directory itself and does not cause a circular dependency).
   * - **Security constraints**: `tenant_id` and `user_id` must be derived from the authenticated identity.
   * - **Permission requirements**: Corresponding RAM permissions are required to perform this operation.
   * - **Input parameters**:
   *   - `directoryId`: Required. The unique identifier of the directory to update.
   *   - `name`: Optional. The new directory name.
   *   - `description`: Optional. The new directory description.
   *   - `parentId`: Optional. The ID of the new parent directory.
   *   - `path`: Optional. When specified, the system cascades the update to the paths of the current directory and all its subdirectories.
   * 
   * @param request - UpdateDirectoryRequest
   * @returns UpdateDirectoryResponse
   */
  async updateDirectory(request: $_model.UpdateDirectoryRequest): Promise<$_model.UpdateDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Updates the information of a specified enterprise knowledge base directory, including the name, description, and parent directory.
   * 
   * @remarks
   * ## Operation description
   * - This operation modifies a directory in the enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - The `tenantId` parameter is optional. If not provided, the tenant ID of the caller is used by default.
   * - You must specify the `directoryId` of the directory to modify. The `name`, `description`, and `parentDirectoryId` parameters are optional. If not provided, the corresponding fields remain unchanged.
   * - When a new `parentDirectoryId` is specified, the system checks whether the new parent directory belongs to the current tenant and does not cause a circular dependency.
   * - This API operation supports multiple authentication methods (AK, BearerToken, APP) and has RAM permission control and operation auditing enabled.
   * 
   * @param request - UpdateKnowledgeBaseDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseDirectoryResponse
   */
  async updateKnowledgeBaseDirectoryWithOptions(request: $_model.UpdateKnowledgeBaseDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      body["parentDirectoryId"] = request.parentDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBaseDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateKnowledgeBaseDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseDirectoryResponse({}));
  }

  /**
   * Updates the information of a specified enterprise knowledge base directory, including the name, description, and parent directory.
   * 
   * @remarks
   * ## Operation description
   * - This operation modifies a directory in the enterprise knowledge base.
   * - You must have the `DEVELOPMENT_KB_MANAGE` permission to call this API operation.
   * - The `tenantId` parameter is optional. If not provided, the tenant ID of the caller is used by default.
   * - You must specify the `directoryId` of the directory to modify. The `name`, `description`, and `parentDirectoryId` parameters are optional. If not provided, the corresponding fields remain unchanged.
   * - When a new `parentDirectoryId` is specified, the system checks whether the new parent directory belongs to the current tenant and does not cause a circular dependency.
   * - This API operation supports multiple authentication methods (AK, BearerToken, APP) and has RAM permission control and operation auditing enabled.
   * 
   * @param request - UpdateKnowledgeBaseDirectoryRequest
   * @returns UpdateKnowledgeBaseDirectoryResponse
   */
  async updateKnowledgeBaseDirectory(request: $_model.UpdateKnowledgeBaseDirectoryRequest): Promise<$_model.UpdateKnowledgeBaseDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Edits the body content of a resource in an enterprise self-built knowledge base and triggers re-parsing.
   * 
   * @remarks
   * ## Request description
   * This operation allows you to update the body content of a specified enterprise knowledge base data source and optionally wait synchronously for parsing to complete. By setting the `forceSync` parameter, you can control whether the parsing process is executed synchronously or asynchronously. The default is asynchronous processing.
   * - **Note**: When the `content` field is an empty string, the original content is cleared.
   * - **Permission requirement**: Calling this operation requires the corresponding RAM action permission (`winnexo:UpdateKnowledgeBaseSourceContent`).
   * 
   * @param request - UpdateKnowledgeBaseSourceContentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseSourceContentResponse
   */
  async updateKnowledgeBaseSourceContentWithOptions(request: $_model.UpdateKnowledgeBaseSourceContentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseSourceContentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.forceSync)) {
      body["forceSync"] = request.forceSync;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBaseSourceContent",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateKnowledgeBaseSourceContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseSourceContentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseSourceContentResponse({}));
  }

  /**
   * Edits the body content of a resource in an enterprise self-built knowledge base and triggers re-parsing.
   * 
   * @remarks
   * ## Request description
   * This operation allows you to update the body content of a specified enterprise knowledge base data source and optionally wait synchronously for parsing to complete. By setting the `forceSync` parameter, you can control whether the parsing process is executed synchronously or asynchronously. The default is asynchronous processing.
   * - **Note**: When the `content` field is an empty string, the original content is cleared.
   * - **Permission requirement**: Calling this operation requires the corresponding RAM action permission (`winnexo:UpdateKnowledgeBaseSourceContent`).
   * 
   * @param request - UpdateKnowledgeBaseSourceContentRequest
   * @returns UpdateKnowledgeBaseSourceContentResponse
   */
  async updateKnowledgeBaseSourceContent(request: $_model.UpdateKnowledgeBaseSourceContentRequest): Promise<$_model.UpdateKnowledgeBaseSourceContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseSourceContentWithOptions(request, headers, runtime);
  }

  /**
   * Updates the resource tags of a specified data source in an enterprise knowledge base.
   * 
   * @remarks
   * ## Request description
   * - This operation updates the labels of a specific data source in an enterprise knowledge base.
   * - You must have knowledge base management permissions to invoke this operation.
   * - The `sourceTags` parameter accepts a JSON character string list, such as `["tagA", "tagB"]`. If you set this parameter to `null`, all existing labels are cleared.
   * - The update operation affects only the `sourceTags` and `gmt_modified` fields and does not trigger the `process_source` workflow.
   * - If the specified data source does not exist, the `ERR.Robject.Source.NotFound` fault is returned.
   * - This operation supports authentication through AccessKey, BearerToken, or APP methods.
   * - When you invoke this operation, make sure that `tenant_id` and `user_id` are from valid authentication identity information.
   * 
   * @param request - UpdateKnowledgeBaseSourceTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseSourceTagsResponse
   */
  async updateKnowledgeBaseSourceTagsWithOptions(request: $_model.UpdateKnowledgeBaseSourceTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseSourceTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceTags)) {
      body["sourceTags"] = request.sourceTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBaseSourceTags",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateKnowledgeBaseSourceTags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseSourceTagsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseSourceTagsResponse({}));
  }

  /**
   * Updates the resource tags of a specified data source in an enterprise knowledge base.
   * 
   * @remarks
   * ## Request description
   * - This operation updates the labels of a specific data source in an enterprise knowledge base.
   * - You must have knowledge base management permissions to invoke this operation.
   * - The `sourceTags` parameter accepts a JSON character string list, such as `["tagA", "tagB"]`. If you set this parameter to `null`, all existing labels are cleared.
   * - The update operation affects only the `sourceTags` and `gmt_modified` fields and does not trigger the `process_source` workflow.
   * - If the specified data source does not exist, the `ERR.Robject.Source.NotFound` fault is returned.
   * - This operation supports authentication through AccessKey, BearerToken, or APP methods.
   * - When you invoke this operation, make sure that `tenant_id` and `user_id` are from valid authentication identity information.
   * 
   * @param request - UpdateKnowledgeBaseSourceTagsRequest
   * @returns UpdateKnowledgeBaseSourceTagsResponse
   */
  async updateKnowledgeBaseSourceTags(request: $_model.UpdateKnowledgeBaseSourceTagsRequest): Promise<$_model.UpdateKnowledgeBaseSourceTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseSourceTagsWithOptions(request, headers, runtime);
  }

  /**
   * Updates a scheduled task.
   * 
   * @remarks
   * Updates a scheduled task.
   * 
   * @param tmpReq - UpdateScheduledTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledTaskResponse
   */
  async updateScheduledTaskWithOptions(tmpReq: $_model.UpdateScheduledTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduledTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateScheduledTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.description)) {
      request.descriptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.description, "description", "json");
    }

    if (!$dara.isNull(tmpReq.digitalEmployeeName)) {
      request.digitalEmployeeNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.digitalEmployeeName, "digitalEmployeeName", "json");
    }

    if (!$dara.isNull(tmpReq.segments)) {
      request.segmentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.segments, "segments", "json");
    }

    if (!$dara.isNull(tmpReq.taskDetail)) {
      request.taskDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDetail, "taskDetail", "json");
    }

    if (!$dara.isNull(tmpReq.triggerConfig)) {
      request.triggerConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConfig, "triggerConfig", "json");
    }

    if (!$dara.isNull(tmpReq.visibleMemberUserIds)) {
      request.visibleMemberUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.visibleMemberUserIds, "visibleMemberUserIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.descriptionShrink)) {
      body["description"] = request.descriptionShrink;
    }

    if (!$dara.isNull(request.digitalEmployeeNameShrink)) {
      body["digitalEmployeeName"] = request.digitalEmployeeNameShrink;
    }

    if (!$dara.isNull(request.isOpen)) {
      body["isOpen"] = request.isOpen;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.segmentsShrink)) {
      body["segments"] = request.segmentsShrink;
    }

    if (!$dara.isNull(request.taskDetailShrink)) {
      body["taskDetail"] = request.taskDetailShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.triggerConfigShrink)) {
      body["triggerConfig"] = request.triggerConfigShrink;
    }

    if (!$dara.isNull(request.visibility)) {
      body["visibility"] = request.visibility;
    }

    if (!$dara.isNull(request.visibleMemberUserIdsShrink)) {
      body["visibleMemberUserIds"] = request.visibleMemberUserIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduledTask",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateScheduledTask`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduledTaskResponse({}));
  }

  /**
   * Updates a scheduled task.
   * 
   * @remarks
   * Updates a scheduled task.
   * 
   * @param request - UpdateScheduledTaskRequest
   * @returns UpdateScheduledTaskResponse
   */
  async updateScheduledTask(request: $_model.UpdateScheduledTaskRequest): Promise<$_model.UpdateScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateScheduledTaskWithOptions(request, headers, runtime);
  }

  /**
   * Updates the content of an editable data source within a tenant and triggers re-parsing.
   * 
   * @remarks
   * ## Operation description
   * - This API operation updates the content of a data source within a specified tenant and triggers synchronous or asynchronous re-parsing of the data source as needed.
   * - `tenant_id` and `user_id` are used only for authentication and are not involved in actual business logic processing.
   * - When the provided content is an empty string, the system performs the operation according to the existing service contract.
   * - If the specified data source does not exist, a standard NotFound error is returned. Other exceptions are handled by the global exception chain.
   * - Set the `forceSync` parameter to determine whether to wait for the parsing process to complete. The default behavior is asynchronous queuing.
   * 
   * @param request - UpdateSourceContentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSourceContentResponse
   */
  async updateSourceContentWithOptions(request: $_model.UpdateSourceContentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSourceContentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.forceSync)) {
      body["forceSync"] = request.forceSync;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSourceContent",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateSourceContent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSourceContentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSourceContentResponse({}));
  }

  /**
   * Updates the content of an editable data source within a tenant and triggers re-parsing.
   * 
   * @remarks
   * ## Operation description
   * - This API operation updates the content of a data source within a specified tenant and triggers synchronous or asynchronous re-parsing of the data source as needed.
   * - `tenant_id` and `user_id` are used only for authentication and are not involved in actual business logic processing.
   * - When the provided content is an empty string, the system performs the operation according to the existing service contract.
   * - If the specified data source does not exist, a standard NotFound error is returned. Other exceptions are handled by the global exception chain.
   * - Set the `forceSync` parameter to determine whether to wait for the parsing process to complete. The default behavior is asynchronous queuing.
   * 
   * @param request - UpdateSourceContentRequest
   * @returns UpdateSourceContentResponse
   */
  async updateSourceContent(request: $_model.UpdateSourceContentRequest): Promise<$_model.UpdateSourceContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSourceContentWithOptions(request, headers, runtime);
  }

  /**
   * Modifies knowledge base folder information.
   * 
   * @remarks
   * Modifies knowledge base folder information.
   * 
   * @param request - UpdateTenantDirectoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTenantDirectoryResponse
   */
  async updateTenantDirectoryWithOptions(request: $_model.UpdateTenantDirectoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTenantDirectoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["parentId"] = request.parentId;
    }

    if (!$dara.isNull(request.path)) {
      body["path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTenantDirectory",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateTenantDirectory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTenantDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTenantDirectoryResponse({}));
  }

  /**
   * Modifies knowledge base folder information.
   * 
   * @remarks
   * Modifies knowledge base folder information.
   * 
   * @param request - UpdateTenantDirectoryRequest
   * @returns UpdateTenantDirectoryResponse
   */
  async updateTenantDirectory(request: $_model.UpdateTenantDirectoryRequest): Promise<$_model.UpdateTenantDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTenantDirectoryWithOptions(request, headers, runtime);
  }

  /**
   * Modifies user information, including enabling or disabling the user.
   * 
   * @remarks
   * Modifies user information through OpenAPI.
   *     Business orchestration:
   *     1. Parse roleCodes → role_ids
   *     2. If isActive has changed, perform the status switch first (including last super admin protection)
   *     3. Call update_tenant_member to modify other fields (displayName / roleCodes / userGroupIds)
   *     4. Return HTTP 200 if all steps succeed
   *     Execution order notes:
   *     - The isActive status change is performed before other field writes. The two steps are not in the same transaction.
   *     - If validation fails (such as last super admin protection) → an exception is thrown and subsequent steps are not executed.
   *     - If the isActive change has been persisted but a subsequent step fails, the isActive change is not rolled back.
   * 
   * @param tmpReq - UpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(tmpReq: $_model.UpdateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "roleCodes", "json");
    }

    if (!$dara.isNull(tmpReq.userGroupIds)) {
      request.userGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userGroupIds, "userGroupIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.isActive)) {
      body["isActive"] = request.isActive;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["roleCodes"] = request.roleCodesShrink;
    }

    if (!$dara.isNull(request.userGroupIdsShrink)) {
      body["userGroupIds"] = request.userGroupIdsShrink;
    }

    if (!$dara.isNull(request.wnUserId)) {
      body["wnUserId"] = request.wnUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Modifies user information, including enabling or disabling the user.
   * 
   * @remarks
   * Modifies user information through OpenAPI.
   *     Business orchestration:
   *     1. Parse roleCodes → role_ids
   *     2. If isActive has changed, perform the status switch first (including last super admin protection)
   *     3. Call update_tenant_member to modify other fields (displayName / roleCodes / userGroupIds)
   *     4. Return HTTP 200 if all steps succeed
   *     Execution order notes:
   *     - The isActive status change is performed before other field writes. The two steps are not in the same transaction.
   *     - If validation fails (such as last super admin protection) → an exception is thrown and subsequent steps are not executed.
   *     - If the isActive change has been persisted but a subsequent step fails, the isActive change is not rolled back.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(request, headers, runtime);
  }

  /**
   * Updates partial fields of the current user information and returns the complete user information.
   * 
   * @remarks
   * ## Request description
   * - This API allows the caller to update some or all optional fields of a specified user. Fields that are not provided retain their original values.
   * - Use the `tenantId` parameter to specify a tenant ID. If omitted, the default tenant of the caller is used.
   * - After a successful update, the response body contains the complete user information object.
   * - This operation requires authentication and supports AK, BearerToken, and APP security schemes.
   * - The request content type is JSON, and the operation is available only over HTTPS.
   * - Note: The `profileRoleInfo` field is valid only when the user role is set to Others. It describes the specific role information of the user.
   * 
   * @param request - UpdateUserInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserInfoResponse
   */
  async updateUserInfoWithOptions(request: $_model.UpdateUserInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.avatar)) {
      body["avatar"] = request.avatar;
    }

    if (!$dara.isNull(request.languagePreference)) {
      body["languagePreference"] = request.languagePreference;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.offering)) {
      body["offering"] = request.offering;
    }

    if (!$dara.isNull(request.profileRoleInfo)) {
      body["profileRoleInfo"] = request.profileRoleInfo;
    }

    if (!$dara.isNull(request.selfIntroduction)) {
      body["selfIntroduction"] = request.selfIntroduction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserInfo",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/updateUserInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserInfoResponse({}));
  }

  /**
   * Updates partial fields of the current user information and returns the complete user information.
   * 
   * @remarks
   * ## Request description
   * - This API allows the caller to update some or all optional fields of a specified user. Fields that are not provided retain their original values.
   * - Use the `tenantId` parameter to specify a tenant ID. If omitted, the default tenant of the caller is used.
   * - After a successful update, the response body contains the complete user information object.
   * - This operation requires authentication and supports AK, BearerToken, and APP security schemes.
   * - The request content type is JSON, and the operation is available only over HTTPS.
   * - Note: The `profileRoleInfo` field is valid only when the user role is set to Others. It describes the specific role information of the user.
   * 
   * @param request - UpdateUserInfoRequest
   * @returns UpdateUserInfoResponse
   */
  async updateUserInfo(request: $_model.UpdateUserInfoRequest): Promise<$_model.UpdateUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserInfoWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a local file in a session.
   * 
   * @remarks
   * ## Operation description
   * This API is used to upload a session temporary file by using the **file transfer upload** mode (`fileTransfer`). The file binary data is not transmitted through the request body of this API. Instead, the file is first uploaded to Object Storage Service (OSS), and then the OSS address is passed to the backend through the `FileUrl` parameter. The backend retrieves the bytes from that address, writes them to its own OSS, and creates a session temporary file record.
   * ### Call methods
   * - **Recommended**: Use the `UploadChatFileAdvance` method generated by the SDK. Pass in the local file stream, and the SDK automatically completes the transfer upload and populates `FileUrl`.
   * - **Direct upload**: Upload the file to an OSS address accessible by the server, and then directly call this API with the `FileUrl` parameter.
   * ### Request parameters
   * - **FileUrl**: Required. The OSS address of the file. When you use the Advance method, the SDK automatically populates this parameter. You do not need to manually assign a value.
   * - **FileName**: Required. The original file name including the extension, such as `report.pdf`. The OSS address generated during transfer does not carry the original file name. The backend uses this parameter to determine the file extension and display name. Therefore, you must explicitly pass in this parameter.
   * - **ContentType**: Optional. The MIME type of the file. If this parameter is not specified, `application/octet-stream` is used.
   * - **OperatingObjectName**: Optional. The Agent namespace identifier that determines the file storage path.
   * ### Response parameters
   * The response includes the OSS object path `objectName`, the storage address `fileUrl`, the public access address `filePublicUrl` (valid for 1 hour), and the file record ID `fileRecordId`. The `uploadSignatureUrl` parameter is always empty in this mode.
   * 
   * @param request - UploadChatFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadChatFileResponse
   */
  async uploadChatFileWithOptions(request: $_model.UploadChatFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadChatFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      body["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.operatingObjectName)) {
      body["operatingObjectName"] = request.operatingObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadChatFile",
      version: "2026-05-12",
      protocol: "HTTPS",
      pathname: `/openapi/uploadChatFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadChatFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadChatFileResponse({}));
  }

  /**
   * Uploads a local file in a session.
   * 
   * @remarks
   * ## Operation description
   * This API is used to upload a session temporary file by using the **file transfer upload** mode (`fileTransfer`). The file binary data is not transmitted through the request body of this API. Instead, the file is first uploaded to Object Storage Service (OSS), and then the OSS address is passed to the backend through the `FileUrl` parameter. The backend retrieves the bytes from that address, writes them to its own OSS, and creates a session temporary file record.
   * ### Call methods
   * - **Recommended**: Use the `UploadChatFileAdvance` method generated by the SDK. Pass in the local file stream, and the SDK automatically completes the transfer upload and populates `FileUrl`.
   * - **Direct upload**: Upload the file to an OSS address accessible by the server, and then directly call this API with the `FileUrl` parameter.
   * ### Request parameters
   * - **FileUrl**: Required. The OSS address of the file. When you use the Advance method, the SDK automatically populates this parameter. You do not need to manually assign a value.
   * - **FileName**: Required. The original file name including the extension, such as `report.pdf`. The OSS address generated during transfer does not carry the original file name. The backend uses this parameter to determine the file extension and display name. Therefore, you must explicitly pass in this parameter.
   * - **ContentType**: Optional. The MIME type of the file. If this parameter is not specified, `application/octet-stream` is used.
   * - **OperatingObjectName**: Optional. The Agent namespace identifier that determines the file storage path.
   * ### Response parameters
   * The response includes the OSS object path `objectName`, the storage address `fileUrl`, the public access address `filePublicUrl` (valid for 1 hour), and the file record ID `fileRecordId`. The `uploadSignatureUrl` parameter is always empty in this mode.
   * 
   * @param request - UploadChatFileRequest
   * @returns UploadChatFileResponse
   */
  async uploadChatFile(request: $_model.UploadChatFileRequest): Promise<$_model.UploadChatFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadChatFileWithOptions(request, headers, runtime);
  }

  async uploadChatFileAdvance(request: $_model.UploadChatFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadChatFileResponse> {
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
      Product: "WinNexo",
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
    let uploadChatFileReq = new $_model.UploadChatFileRequest({ });
    OpenApiUtil.convert(request, uploadChatFileReq);
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
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      uploadChatFileReq.fileUrl = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let uploadChatFileResp = await this.uploadChatFileWithOptions(uploadChatFileReq, headers, runtime);
    return uploadChatFileResp;
  }

}
