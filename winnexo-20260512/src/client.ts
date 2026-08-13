// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
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
   * 服务健康检查
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
   * 服务健康检查
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
   * 创建会话
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
   * 创建会话
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
   * 注册纯自定义组织
   * 
   * @remarks
   * 注册一个纯自定义组织，用于后续通过 syncOrgStructure 推送部门树。
   *     注册逻辑：
   *     1. 校验 corpId 格式（小写字母/数字开头，3-64 位，允许中划线）
   *     2. 委托 OrgSyncAuthorizedService 执行注册（内含权限校验 + 租户内唯一性检查）
   *     3. 返回注册结果
   *     注意：纯自定义组织仅支持部门树同步，不支持成员关系同步。
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
   * 注册纯自定义组织
   * 
   * @remarks
   * 注册一个纯自定义组织，用于后续通过 syncOrgStructure 推送部门树。
   *     注册逻辑：
   *     1. 校验 corpId 格式（小写字母/数字开头，3-64 位，允许中划线）
   *     2. 委托 OrgSyncAuthorizedService 执行注册（内含权限校验 + 租户内唯一性检查）
   *     3. 返回注册结果
   *     注意：纯自定义组织仅支持部门树同步，不支持成员关系同步。
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
   * 将阿里钉在线文档上传到企业知识库，需管理权限。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于将阿里钉在线文档添加到指定的企业知识库中。
   * - 调用者必须具备`DEVELOPMENT_KB_MANAGE`功能权限。
   * - `source_type`固定为`ONLINE_DOC`，`platform`固定为`ALI_DING`，`scope`固定为`TENANT`。
   * - 如果不提供`directoryId`，则默认绑定到当前数字员工的根目录；若提供，则必须是当前租户下的有效目录ID。
   * - `filePublicUrl`参数是必需的，表示要上传的阿里钉在线文档的公开访问URL。
   * - 可选参数包括`operatingObjectName`（数字员工名称）、`description`（资源描述）、`knowledgeId`（知识库ID）和`sourceTags`（资源标签）等。
   * - 成功响应会返回新创建资源的相关信息，如`sourceId`、`name`、`status`、`directoryId`及创建时间等。
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
   * 将阿里钉在线文档上传到企业知识库，需管理权限。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于将阿里钉在线文档添加到指定的企业知识库中。
   * - 调用者必须具备`DEVELOPMENT_KB_MANAGE`功能权限。
   * - `source_type`固定为`ONLINE_DOC`，`platform`固定为`ALI_DING`，`scope`固定为`TENANT`。
   * - 如果不提供`directoryId`，则默认绑定到当前数字员工的根目录；若提供，则必须是当前租户下的有效目录ID。
   * - `filePublicUrl`参数是必需的，表示要上传的阿里钉在线文档的公开访问URL。
   * - 可选参数包括`operatingObjectName`（数字员工名称）、`description`（资源描述）、`knowledgeId`（知识库ID）和`sourceTags`（资源标签）等。
   * - 成功响应会返回新创建资源的相关信息，如`sourceId`、`name`、`status`、`directoryId`及创建时间等。
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
   * 用于在企业知识库中创建新的分类目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口允许具有`DEVELOPMENT_KB_MANAGE`权限的用户为企业知识库创建新的分类。
   * - 创建时可指定父分类ID，若未指定，则新分类将直接挂载于企业知识库根目录下。
   * - 系统会自动检查同名冲突及目录深度限制等问题。
   * - `tenant_id`和`user_id`仅通过鉴权身份获取，请求体中即使提供也会被忽略。
   * - 需要确保提供的`parentDirectoryId`（如果有的话）属于当前租户。
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
   * 用于在企业知识库中创建新的分类目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口允许具有`DEVELOPMENT_KB_MANAGE`权限的用户为企业知识库创建新的分类。
   * - 创建时可指定父分类ID，若未指定，则新分类将直接挂载于企业知识库根目录下。
   * - 系统会自动检查同名冲突及目录深度限制等问题。
   * - `tenant_id`和`user_id`仅通过鉴权身份获取，请求体中即使提供也会被忽略。
   * - 需要确保提供的`parentDirectoryId`（如果有的话）属于当前租户。
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
   * 将指定文件上传至企业知识库，需具备管理权限。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于向企业知识库中上传文件。
   * - 需要拥有`DEVELOPMENT_KB_MANAGE`功能权限才能调用此API。
   * - 文件上传时必须提供文件的OSS持久化地址(`filePath`)。
   * - 可选参数包括文件公开访问URL、原始文件名等，以增强文件信息的完整性。
   * - 如果指定了`directoryId`，则文件会被放置在对应的企业知识库目录下；否则，默认绑定到当前数字员工默认根目录。
   * - 支持通过`sourceTags`为资源添加标签，便于后续管理和检索。
   * - 本操作会启动计费账单（UNSTRUCTURED_PARSE），请确保账户余额充足。
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
   * 将指定文件上传至企业知识库，需具备管理权限。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于向企业知识库中上传文件。
   * - 需要拥有`DEVELOPMENT_KB_MANAGE`功能权限才能调用此API。
   * - 文件上传时必须提供文件的OSS持久化地址(`filePath`)。
   * - 可选参数包括文件公开访问URL、原始文件名等，以增强文件信息的完整性。
   * - 如果指定了`directoryId`，则文件会被放置在对应的企业知识库目录下；否则，默认绑定到当前数字员工默认根目录。
   * - 支持通过`sourceTags`为资源添加标签，便于后续管理和检索。
   * - 本操作会启动计费账单（UNSTRUCTURED_PARSE），请确保账户余额充足。
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
   * 将纯文本内容添加至指定的企业知识库中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于向企业知识库上传纯文本信息，要求调用者具备相应的管理权限。
   * - `textContent`字段为必填项，代表要上传的纯文本内容。
   * - 可选参数包括数字员工名称(`operatingObjectName`)、资源描述(`description`)等，允许用户自定义更多细节。
   * - 如果提供了`directoryId`，则会将上传的文本绑定到指定的知识库目录下；若未提供，则默认绑定到当前数字员工的根目录。
   * - 支持通过`sourceTags`给资源打标签，方便后续管理和检索。
   * - 调用此接口前，请确保已正确配置身份验证方式（支持AK、BearerToken及APP认证）并拥有`DEVELOPMENT_KB_MANAGE`权限。
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
   * 将纯文本内容添加至指定的企业知识库中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于向企业知识库上传纯文本信息，要求调用者具备相应的管理权限。
   * - `textContent`字段为必填项，代表要上传的纯文本内容。
   * - 可选参数包括数字员工名称(`operatingObjectName`)、资源描述(`description`)等，允许用户自定义更多细节。
   * - 如果提供了`directoryId`，则会将上传的文本绑定到指定的知识库目录下；若未提供，则默认绑定到当前数字员工的根目录。
   * - 支持通过`sourceTags`给资源打标签，方便后续管理和检索。
   * - 调用此接口前，请确保已正确配置身份验证方式（支持AK、BearerToken及APP认证）并拥有`DEVELOPMENT_KB_MANAGE`权限。
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
   * 将阿里钉会议文件上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将阿里钉会议相关资料（如音视频、闪记链接等）上传至指定数字员工的“我的资源”中。
   * - `source_type` 固定为 `ALI_DING_MEETING`，且作用范围 `scope` 固定为 `PERSONAL`。
   * - 必须提供公开的音视频OSS地址 (`ossUrl`) 和原始的闪记链接 (`shanjiUrl`)。
   * - 可选地，可以指定目标个人目录ID (`directoryId`)；若未指定，则自动绑定到当前数字员工默认根目录。
   * - 支持添加资源描述 (`description`) 和会议笔记内容 (`notes`)，其中会议笔记可用于辅助分析。
   * - 此操作需要相应的权限认证，支持AK、BearerToken和APP三种认证方式之一。
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
   * 将阿里钉会议文件上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将阿里钉会议相关资料（如音视频、闪记链接等）上传至指定数字员工的“我的资源”中。
   * - `source_type` 固定为 `ALI_DING_MEETING`，且作用范围 `scope` 固定为 `PERSONAL`。
   * - 必须提供公开的音视频OSS地址 (`ossUrl`) 和原始的闪记链接 (`shanjiUrl`)。
   * - 可选地，可以指定目标个人目录ID (`directoryId`)；若未指定，则自动绑定到当前数字员工默认根目录。
   * - 支持添加资源描述 (`description`) 和会议笔记内容 (`notes`)，其中会议笔记可用于辅助分析。
   * - 此操作需要相应的权限认证，支持AK、BearerToken和APP三种认证方式之一。
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
   * 将阿里钉在线文档上传至当前数字员工的个人资源中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将阿里钉在线文档添加到指定数字员工的"我的资源"中。
   * - 固定参数包括 `source_type=ONLINE_DOC`、`platform=ALI_DING` 和 `scope=PERSONAL`。
   * - 如果未提供`directoryId`，则默认绑定到当前数字员工的根目录；若提供了，则需确保该目录属于当前用户且在当前数字员工下存在。
   * - 调用过程中会启动计量并记录相关操作日志。
   * - 安全性方面，`tenant_id`和`user_id`仅从鉴权身份获取，调用方提供的这些字段值将被忽略。
   * - 任何校验或执行失败都会通过服务抛出异常，并转换为POP错误码返回给调用者。
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
   * 将阿里钉在线文档上传至当前数字员工的个人资源中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将阿里钉在线文档添加到指定数字员工的"我的资源"中。
   * - 固定参数包括 `source_type=ONLINE_DOC`、`platform=ALI_DING` 和 `scope=PERSONAL`。
   * - 如果未提供`directoryId`，则默认绑定到当前数字员工的根目录；若提供了，则需确保该目录属于当前用户且在当前数字员工下存在。
   * - 调用过程中会启动计量并记录相关操作日志。
   * - 安全性方面，`tenant_id`和`user_id`仅从鉴权身份获取，调用方提供的这些字段值将被忽略。
   * - 任何校验或执行失败都会通过服务抛出异常，并转换为POP错误码返回给调用者。
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
   * 将阿里钉整体知识库添加到当前数字员工的个人资源中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于创建一个阿里钉知识库，并将其挂载到指定数字员工的个人资源目录下。
   * - `platform`固定为`ALI_DING`，`directory_type`固定为`PERSONAL`。
   * - 如果提供了`directoryId`，则会验证该目录是否存在且属于当前租户和个人类型。
   * - 创建过程中会初始化知识库根目录（状态设置为`RUNNING`），并根据提供的同步配置派发后台任务以拉取远程目录树和创建子节点。
   * - 安全性方面，`tenant_id`与`user_id`仅从鉴权身份获取，请求体中的这些字段会被忽略。
   * - 同步配置可选，若启用需提供cron表达式；未传或禁用时，默认不进行定时同步。
   * - 知识库名称可以自定义，如果不提供，则会在后台同步后自动填充。
   * - 支持多值对象绑定，相关信息将被序列化并存储于知识库元数据中。
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
   * 将阿里钉整体知识库添加到当前数字员工的个人资源中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于创建一个阿里钉知识库，并将其挂载到指定数字员工的个人资源目录下。
   * - `platform`固定为`ALI_DING`，`directory_type`固定为`PERSONAL`。
   * - 如果提供了`directoryId`，则会验证该目录是否存在且属于当前租户和个人类型。
   * - 创建过程中会初始化知识库根目录（状态设置为`RUNNING`），并根据提供的同步配置派发后台任务以拉取远程目录树和创建子节点。
   * - 安全性方面，`tenant_id`与`user_id`仅从鉴权身份获取，请求体中的这些字段会被忽略。
   * - 同步配置可选，若启用需提供cron表达式；未传或禁用时，默认不进行定时同步。
   * - 知识库名称可以自定义，如果不提供，则会在后台同步后自动填充。
   * - 支持多值对象绑定，相关信息将被序列化并存储于知识库元数据中。
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
   * 将钉钉会议上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于将钉钉会议作为资源上传到指定数字员工的“我的资源”中。
   * - `source_type` 固定为 `DINGTALK_MEETING`，`scope` 固定为 `PERSONAL`。
   * - 如果不提供 `credentialId`，则使用系统默认配置。
   * - 当未指定 `directoryId` 时，资源将自动绑定到当前数字员工的默认根目录下；若指定，则必须是调用者在该数字员工下的已有个人目录。
   * - 可选参数 `description` 和 `notes` 分别用于描述资源和记录会议笔记，其中 `notes` 会参与辅助分析。
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
   * 将钉钉会议上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于将钉钉会议作为资源上传到指定数字员工的“我的资源”中。
   * - `source_type` 固定为 `DINGTALK_MEETING`，`scope` 固定为 `PERSONAL`。
   * - 如果不提供 `credentialId`，则使用系统默认配置。
   * - 当未指定 `directoryId` 时，资源将自动绑定到当前数字员工的默认根目录下；若指定，则必须是调用者在该数字员工下的已有个人目录。
   * - 可选参数 `description` 和 `notes` 分别用于描述资源和记录会议笔记，其中 `notes` 会参与辅助分析。
   * 
   * @param request - CreatePersonalDingtalkMeetingRequest
   * @returns CreatePersonalDingtalkMeetingResponse
   */
  async createPersonalDingtalkMeeting(request: $_model.CreatePersonalDingtalkMeetingRequest): Promise<$_model.CreatePersonalDingtalkMeetingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPersonalDingtalkMeetingWithOptions(request, headers, runtime);
  }

  /**
   * 在我的资源下创建个人目录（分类）
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于在“我的资源”下创建个人目录（分类）。
   * - 若未传 `parentDirectoryId`，系统将自动使用或创建当前数字员工的默认根目录作为父目录。
   * - 若传入 `parentDirectoryId`，则必须是当前用户在当前数字员工下的已有个人目录。
   * - `tenant_id` 和 `user_id` 仅来自鉴权身份，调用方在请求体中传入这些字段会被忽略。
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
   * 在我的资源下创建个人目录（分类）
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于在“我的资源”下创建个人目录（分类）。
   * - 若未传 `parentDirectoryId`，系统将自动使用或创建当前数字员工的默认根目录作为父目录。
   * - 若传入 `parentDirectoryId`，则必须是当前用户在当前数字员工下的已有个人目录。
   * - `tenant_id` 和 `user_id` 仅来自鉴权身份，调用方在请求体中传入这些字段会被忽略。
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
   * 将飞书妙记会议文件上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于将飞书妙记中的会议记录上传至指定数字员工的"我的资源"中。通过提供必要的参数，如飞书妙记的唯一标识符（`minuteToken`）和凭证 ID（`credentialId`），可以实现会议内容的迁移与保存。若未指定目标目录，则默认绑定到当前数字员工下的根目录。
   * - `operatingObjectName`：执行操作的数字员工名称。
   * - `name`：上传后资源在系统内的显示名称。
   * - `minuteToken`：来自飞书妙记平台的会议唯一标识符。
   * - `credentialId`：关联到特定认证信息的ID，用于验证请求合法性。
   * - `directoryId`（可选）：指定要存放资源的目标个人目录ID；如果省略此字段，则资源将被自动放置于默认位置。
   * - `description`（可选）：对所上传资源的简短描述或备注。
   * 注意事项：
   * - 确保提供的 `minuteToken` 和 `credentialId` 的有效性。
   * - 当指定了 `directoryId` 时，请确认其属于调用者在当前数字员工环境下的可用个人目录之一。
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
   * 将飞书妙记会议文件上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于将飞书妙记中的会议记录上传至指定数字员工的"我的资源"中。通过提供必要的参数，如飞书妙记的唯一标识符（`minuteToken`）和凭证 ID（`credentialId`），可以实现会议内容的迁移与保存。若未指定目标目录，则默认绑定到当前数字员工下的根目录。
   * - `operatingObjectName`：执行操作的数字员工名称。
   * - `name`：上传后资源在系统内的显示名称。
   * - `minuteToken`：来自飞书妙记平台的会议唯一标识符。
   * - `credentialId`：关联到特定认证信息的ID，用于验证请求合法性。
   * - `directoryId`（可选）：指定要存放资源的目标个人目录ID；如果省略此字段，则资源将被自动放置于默认位置。
   * - `description`（可选）：对所上传资源的简短描述或备注。
   * 注意事项：
   * - 确保提供的 `minuteToken` 和 `credentialId` 的有效性。
   * - 当指定了 `directoryId` 时，请确认其属于调用者在当前数字员工环境下的可用个人目录之一。
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
   * 将文件上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将文件上传到指定数字员工的"我的资源"中。
   * - `source_type` 固定为 `FILE`，`scope` 固定为 `PERSONAL`，`platform` 固定为 `LOCAL`。
   * - 文件必须提供OSS持久化地址 (`filePath`)，其他如公开访问URL、原始文件名等信息可选提供。
   * - 如果不指定目标目录ID (`directoryId`)，则文件会被自动绑定到当前数字员工默认根目录下；如果指定，则需确保该目录属于调用者的个人目录。
   * - 支持通过多种认证方式（AK、BearerToken、APP）进行安全验证。
   * - 操作类型为写入(`write`)，并记录操作日志以供后续审计使用。
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
   * 将文件上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将文件上传到指定数字员工的"我的资源"中。
   * - `source_type` 固定为 `FILE`，`scope` 固定为 `PERSONAL`，`platform` 固定为 `LOCAL`。
   * - 文件必须提供OSS持久化地址 (`filePath`)，其他如公开访问URL、原始文件名等信息可选提供。
   * - 如果不指定目标目录ID (`directoryId`)，则文件会被自动绑定到当前数字员工默认根目录下；如果指定，则需确保该目录属于调用者的个人目录。
   * - 支持通过多种认证方式（AK、BearerToken、APP）进行安全验证。
   * - 操作类型为写入(`write`)，并记录操作日志以供后续审计使用。
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
   * 将纯文本内容上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于向指定数字员工的个人资源中添加纯文本内容。
   * - `source_type` 固定为 `TEXT`，`scope` 固定为 `PERSONAL`。
   * - 如果不提供`directoryId`，则默认绑定到当前数字员工的根目录；若提供，则必须是调用者在该数字员工下的已有个人目录。
   * - `tenant_id` 和 `user_id` 只能来自鉴权身份信息，通过请求体传递这些参数将被忽略。
   * - 调用过程中会启动计量并生成相应的`billing_id`。
   * - 文本内容将被写入`unstructured_docs`，并生成初始资源记录。
   * - 任何校验或执行失败都将抛出`RobjectException`异常，并由全局中间件转换为POP错误码返回给调用方。
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
   * 将纯文本内容上传至当前数字员工的个人资源库。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于向指定数字员工的个人资源中添加纯文本内容。
   * - `source_type` 固定为 `TEXT`，`scope` 固定为 `PERSONAL`。
   * - 如果不提供`directoryId`，则默认绑定到当前数字员工的根目录；若提供，则必须是调用者在该数字员工下的已有个人目录。
   * - `tenant_id` 和 `user_id` 只能来自鉴权身份信息，通过请求体传递这些参数将被忽略。
   * - 调用过程中会启动计量并生成相应的`billing_id`。
   * - 文本内容将被写入`unstructured_docs`，并生成初始资源记录。
   * - 任何校验或执行失败都将抛出`RobjectException`异常，并由全局中间件转换为POP错误码返回给调用方。
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
   * 将离线会议音频文件上传至当前数字员工的个人资源中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将离线会议的音频文件上传到指定数字员工的“我的资源”中。
   * - `source_type`固定为`VOICE_MEETING`，`scope`固定为`PERSONAL`，且`voice_meeting_type`固定为`OFFLINE`。
   * - 如果请求体中未提供`directoryId`，则资源将自动绑定到默认根目录；若提供了`directoryId`，则必须是当前用户在当前数字员工下的已有个人目录。
   * - 调用此接口会启动一个后台流程来处理音频文件转写，并返回新建资源的相关信息。
   * - 安全性方面，`tenant_id`和`user_id`仅从鉴权身份获取，即使请求体中包含这些字段也会被忽略。
   * - 任何校验或执行失败都会抛出`RobjectException`，并通过全局中间件转换为POP错误码。
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
   * 将离线会议音频文件上传至当前数字员工的个人资源中。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将离线会议的音频文件上传到指定数字员工的“我的资源”中。
   * - `source_type`固定为`VOICE_MEETING`，`scope`固定为`PERSONAL`，且`voice_meeting_type`固定为`OFFLINE`。
   * - 如果请求体中未提供`directoryId`，则资源将自动绑定到默认根目录；若提供了`directoryId`，则必须是当前用户在当前数字员工下的已有个人目录。
   * - 调用此接口会启动一个后台流程来处理音频文件转写，并返回新建资源的相关信息。
   * - 安全性方面，`tenant_id`和`user_id`仅从鉴权身份获取，即使请求体中包含这些字段也会被忽略。
   * - 任何校验或执行失败都会抛出`RobjectException`，并通过全局中间件转换为POP错误码。
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
   * 创建定时任务
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
   * 创建定时任务
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
   * 使用租户和用户信息创建企业知识库目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于在指定租户下创建新的企业知识库目录。
   * - 可以通过设置 `parentId` 参数来指定新目录的父目录，如果不传则默认创建为根目录。
   * - `path` 参数可选，不提供时系统会根据父目录自动计算路径。
   * - 调用此接口需要具备相应的权限，并且支持多种认证方式包括 AK、BearerToken 和 APP 认证。
   * - 创建成功后返回新目录的相关信息，如目录 ID、名称等。
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
   * 使用租户和用户信息创建企业知识库目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于在指定租户下创建新的企业知识库目录。
   * - 可以通过设置 `parentId` 参数来指定新目录的父目录，如果不传则默认创建为根目录。
   * - `path` 参数可选，不提供时系统会根据父目录自动计算路径。
   * - 调用此接口需要具备相应的权限，并且支持多种认证方式包括 AK、BearerToken 和 APP 认证。
   * - 创建成功后返回新目录的相关信息，如目录 ID、名称等。
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
   * 创建用户并加入租户
   * 
   * @remarks
   * OpenAPI 创建用户。
   *     业务编排：
   *     1. 解析 roleCodes → role_ids（系统角色枚举校验）
   *     2. 判断用户是否已存在（用于返回 isNewUser 标记）
   *     3. 调用 UserManagementService.add_tenant_member 完成创建/加入（密码由调用方强制传入 RSA 密文）
   *     4. 返回创建结果（含 isNewUser 标记）
   *     错误码：
   *     - ERR.User.DeactivatedInTenant: 用户在租户中已停用，请使用 updateUser 恢复
   *     - ERR.User.AlreadyInTenant: 用户已是租户活跃成员
   *     - ERR.User.DisplayNameDuplicateInTenant: 租户内显示名重复
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
   * 创建用户并加入租户
   * 
   * @remarks
   * OpenAPI 创建用户。
   *     业务编排：
   *     1. 解析 roleCodes → role_ids（系统角色枚举校验）
   *     2. 判断用户是否已存在（用于返回 isNewUser 标记）
   *     3. 调用 UserManagementService.add_tenant_member 完成创建/加入（密码由调用方强制传入 RSA 密文）
   *     4. 返回创建结果（含 isNewUser 标记）
   *     错误码：
   *     - ERR.User.DeactivatedInTenant: 用户在租户中已停用，请使用 updateUser 恢复
   *     - ERR.User.AlreadyInTenant: 用户已是租户活跃成员
   *     - ERR.User.DisplayNameDuplicateInTenant: 租户内显示名重复
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
   * 删除会话
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
   * 删除会话
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
   * 删除当前租户内的指定资源（知识）。
   * 
   * @remarks
   * ## 请求说明
   * - `tenantId` 仅来自鉴权身份；调用方传入会被忽略。
   * - `sourceId` 通过 body 传递，注册路径为扁平的 `/openapi/deleteSource`，不含 `{sourceId}` 路径模板；请勿以路径段形式追加资源 ID，网关按扁平 URI 精确路由，会回 `InvalidAction.NotFound`。
   * - 删除为不可逆操作，资源关联的解析结果与绑定关系会一并失效。
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
   * 删除当前租户内的指定资源（知识）。
   * 
   * @remarks
   * ## 请求说明
   * - `tenantId` 仅来自鉴权身份；调用方传入会被忽略。
   * - `sourceId` 通过 body 传递，注册路径为扁平的 `/openapi/deleteSource`，不含 `{sourceId}` 路径模板；请勿以路径段形式追加资源 ID，网关按扁平 URI 精确路由，会回 `InvalidAction.NotFound`。
   * - 删除为不可逆操作，资源关联的解析结果与绑定关系会一并失效。
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
   * 用于删除指定的企业知识库目录，支持不同删除模式。
   * 
   * @remarks
   * ## 请求说明
   * - 该API允许用户删除特定的企业知识库目录。
   * - 用户可以通过设置`deleteMode`参数来选择不同的删除策略，包括拒绝删除（reject）、递归删除（recursive）或将目录移动到根目录（move_to_root）。
   * - 如果不提供`deleteMode`，默认行为是拒绝删除。
   * - 删除操作前会校验企业目录边界。
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
   * 用于删除指定的企业知识库目录，支持不同删除模式。
   * 
   * @remarks
   * ## 请求说明
   * - 该API允许用户删除特定的企业知识库目录。
   * - 用户可以通过设置`deleteMode`参数来选择不同的删除策略，包括拒绝删除（reject）、递归删除（recursive）或将目录移动到根目录（move_to_root）。
   * - 如果不提供`deleteMode`，默认行为是拒绝删除。
   * - 删除操作前会校验企业目录边界。
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
   * 关闭 API Token
   * 
   * @remarks
   * 关闭用户的 INSTANCE Token。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 调用 disable_token（ACTIVE → INACTIVE）
   *     4. 返回 disabled=True
   *     幂等性：若当前无 ACTIVE Token，deactivate_all 影响 0 行，不报错。
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
   * 关闭 API Token
   * 
   * @remarks
   * 关闭用户的 INSTANCE Token。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 调用 disable_token（ACTIVE → INACTIVE）
   *     4. 返回 disabled=True
   *     幂等性：若当前无 ACTIVE Token，deactivate_all 影响 0 行，不报错。
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
   * 开启 API Token
   * 
   * @remarks
   * 开启用户的 INSTANCE Token（幂等）。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 调用 enable_token：
   *        - 已有 ACTIVE → 幂等返回（仅脱敏值，不重复下发明文）
   *        - 有 INACTIVE → 重新激活（返回明文）
   *        - 都没有 → 新建（返回明文）
   *     安全约束：Token 明文仅在首次开启时返回一次，后续幂等调用不再下发明文。
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
   * 开启 API Token
   * 
   * @remarks
   * 开启用户的 INSTANCE Token（幂等）。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 调用 enable_token：
   *        - 已有 ACTIVE → 幂等返回（仅脱敏值，不重复下发明文）
   *        - 有 INACTIVE → 重新激活（返回明文）
   *        - 都没有 → 新建（返回明文）
   *     安全约束：Token 明文仅在首次开启时返回一次，后续幂等调用不再下发明文。
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
   * 获取会话详情
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
   * 获取会话详情
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
   * 获取当前用户可读的 active Graph Schema
   * 
   * @remarks
   * 读取 active schema_content，并按 Token 用户的语义资源 READ 权限安全裁剪。
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
   * 获取当前用户可读的 active Graph Schema
   * 
   * @remarks
   * 读取 active schema_content，并按 Token 用户的语义资源 READ 权限安全裁剪。
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
   * 查询租户最新创建的标准包实例的过期时间。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于查询指定租户下最新创建的标准包实例的过期时间。
   * - 如果未找到相关标准包实例，`found` 字段将返回 `False`。
   * - 支持通过 `tenantId` 参数指定查询的租户ID，默认使用调用方的租户ID。
   * - 请求方法为 POST，且需要通过 HTTPS 协议进行调用。
   * - 需要提供有效的认证信息（如 AK、BearerToken 或 APP）以完成请求。
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
   * 查询租户最新创建的标准包实例的过期时间。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于查询指定租户下最新创建的标准包实例的过期时间。
   * - 如果未找到相关标准包实例，`found` 字段将返回 `False`。
   * - 支持通过 `tenantId` 参数指定查询的租户ID，默认使用调用方的租户ID。
   * - 请求方法为 POST，且需要通过 HTTPS 协议进行调用。
   * - 需要提供有效的认证信息（如 AK、BearerToken 或 APP）以完成请求。
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
   * 查询指定知识在企业知识库中的详细信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于获取企业知识库下特定知识的详情。
   * - 调用此接口需要具备 `DEVELOPMENT_KB_VIEW` 功能权限。
   * - 知识详情包括但不限于知识类型、名称、描述等。
   * - 请求时必须提供 `sourceId` 参数，标识要查询的知识。
   * - `tenantId` 是可选参数，默认使用调用方的租户ID。
   * - 支持通过 `AK`、`BearerToken` 或 `APP` 方式进行鉴权。
   * - 安全约束：`tenant_id` 和 `user_id` 只能来自鉴权身份。
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
   * 查询指定知识在企业知识库中的详细信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于获取企业知识库下特定知识的详情。
   * - 调用此接口需要具备 `DEVELOPMENT_KB_VIEW` 功能权限。
   * - 知识详情包括但不限于知识类型、名称、描述等。
   * - 请求时必须提供 `sourceId` 参数，标识要查询的知识。
   * - `tenantId` 是可选参数，默认使用调用方的租户ID。
   * - 支持通过 `AK`、`BearerToken` 或 `APP` 方式进行鉴权。
   * - 安全约束：`tenant_id` 和 `user_id` 只能来自鉴权身份。
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
   * 获取定时任务执行详情
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
   * 获取定时任务执行详情
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
   * 获取定时任务执行记录
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
   * 获取定时任务执行记录
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
   * 获取定时任务理解详情
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
   * 获取定时任务理解详情
   * 
   * @param request - GetScheduledTaskUnderstandDetailRequest
   * @returns GetScheduledTaskUnderstandDetailResponse
   */
  async getScheduledTaskUnderstandDetail(request: $_model.GetScheduledTaskUnderstandDetailRequest): Promise<$_model.GetScheduledTaskUnderstandDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledTaskUnderstandDetailWithOptions(request, headers, runtime);
  }

  /**
   * 获取技能详情。
   * 
   * @remarks
   * ## 请求说明
   * 根据 SkillCode 或 SkillName 查询技能详情，包括元数据、入参 Schema、SKILL.md 摘要等。
   * - **TenantId**：可选公共参数，由网关透传到后端 Header；不传时使用当前调用方的默认租户。
   * - **SkillCode**：与 SkillName 二选一；同时传入时 SkillCode 优先。
   * - **SkillName**：与 SkillCode 二选一；租户内不唯一时返回 `ERR.SkillHub.SkillNameAmbiguous`。
   * - **ViewMode**：可选，`draft`（草稿/编辑视角）或 `published`（已发布视角，默认）。
   * - **IncludeSkillFiles**：可选，是否返回完整技能文件树（SKILL.md / scripts / templates），默认 `false`。
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
   * 获取技能详情。
   * 
   * @remarks
   * ## 请求说明
   * 根据 SkillCode 或 SkillName 查询技能详情，包括元数据、入参 Schema、SKILL.md 摘要等。
   * - **TenantId**：可选公共参数，由网关透传到后端 Header；不传时使用当前调用方的默认租户。
   * - **SkillCode**：与 SkillName 二选一；同时传入时 SkillCode 优先。
   * - **SkillName**：与 SkillCode 二选一；租户内不唯一时返回 `ERR.SkillHub.SkillNameAmbiguous`。
   * - **ViewMode**：可选，`draft`（草稿/编辑视角）或 `published`（已发布视角，默认）。
   * - **IncludeSkillFiles**：可选，是否返回完整技能文件树（SKILL.md / scripts / templates），默认 `false`。
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
   * 查询技能执行结果。
   * 
   * @remarks
   * ## 请求说明
   * 通过 `RunId` 查询异步任务的当前状态与结果。
   * - **状态机**：Running（PENDING/RUNNING）→ Succeeded / Failed / Cancelled
   * - **TenantId**：可选公共参数，由网关透传；后端会校验 RunId 必须属于当前租户，否则统一返回 `ERR.SkillHub.RunNotFound`（避免泄漏存在性）。
   * - **IncludeLogs**：可选，是否返回执行日志，默认 `false`。
   * 执行成功时 `Result.Content[]` 为 MCP 风格 Content 块数组（Text / File / Image）。
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
   * 查询技能执行结果。
   * 
   * @remarks
   * ## 请求说明
   * 通过 `RunId` 查询异步任务的当前状态与结果。
   * - **状态机**：Running（PENDING/RUNNING）→ Succeeded / Failed / Cancelled
   * - **TenantId**：可选公共参数，由网关透传；后端会校验 RunId 必须属于当前租户，否则统一返回 `ERR.SkillHub.RunNotFound`（避免泄漏存在性）。
   * - **IncludeLogs**：可选，是否返回执行日志，默认 `false`。
   * 执行成功时 `Result.Content[]` 为 MCP 风格 Content 块数组（Text / File / Image）。
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
   * 查询指定资源（知识）的详细信息，支持按需返回大体积明细字段。
   * 
   * @remarks
   * ## 请求说明
   * - `tenant_id` 仅来自鉴权身份；调用方在 body 中传入会被忽略。
   * - 出参不暴露 `creator` / `modifier` 等审计字段；`unstructured_docs[ ].content` 默认不返回，以避免大体积响应。
   * - 通过设置 `includeDetails` 参数为 `True` 可以获取包括 `settings`, `notes`, `structuredTables`, 和 `unstructuredDocs` 在内的更多细节信息。
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
   * 查询指定资源（知识）的详细信息，支持按需返回大体积明细字段。
   * 
   * @remarks
   * ## 请求说明
   * - `tenant_id` 仅来自鉴权身份；调用方在 body 中传入会被忽略。
   * - 出参不暴露 `creator` / `modifier` 等审计字段；`unstructured_docs[ ].content` 默认不返回，以避免大体积响应。
   * - 通过设置 `includeDetails` 参数为 `True` 可以获取包括 `settings`, `notes`, `structuredTables`, 和 `unstructuredDocs` 在内的更多细节信息。
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
   * 生成用于直接上传文件到OSS的签名URL。
   * 
   * @remarks
   * ## 请求说明
   * 该API允许调用方根据提供的文件名等信息，获取一个可用于直接上传文件至阿里云OSS（对象存储服务）的签名URL。通过此URL，用户可以将文件直接上传至指定的OSS位置而无需经过中间服务器转发，从而提高效率和安全性。
   * - **安全约束**：`tenant_id`/`user_id`仅来自鉴权身份，即使在请求体中提供也会被忽略。
   * - **默认值**：如果未指定`expires`参数，则默认过期时间为3600秒（即1小时）。
   * - **Content-Type**：如果不提供`contentType`，系统会尝试自动推断文件类型。
   * - **归属范围**：通过`scope`参数定义数据源是属于个人还是企业知识库，默认情况下可能不需要设置。
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
   * 生成用于直接上传文件到OSS的签名URL。
   * 
   * @remarks
   * ## 请求说明
   * 该API允许调用方根据提供的文件名等信息，获取一个可用于直接上传文件至阿里云OSS（对象存储服务）的签名URL。通过此URL，用户可以将文件直接上传至指定的OSS位置而无需经过中间服务器转发，从而提高效率和安全性。
   * - **安全约束**：`tenant_id`/`user_id`仅来自鉴权身份，即使在请求体中提供也会被忽略。
   * - **默认值**：如果未指定`expires`参数，则默认过期时间为3600秒（即1小时）。
   * - **Content-Type**：如果不提供`contentType`，系统会尝试自动推断文件类型。
   * - **归属范围**：通过`scope`参数定义数据源是属于个人还是企业知识库，默认情况下可能不需要设置。
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
   * 查询用户的 Token 状态
   * 
   * @remarks
   * 查询用户的 INSTANCE Token 状态。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 查询 ACTIVE INSTANCE Token
   *     4. 存在 → 返回 enabled=True + 脱敏值 + 创建时间
   *     5. 不存在 → 返回 enabled=False
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
   * 查询用户的 Token 状态
   * 
   * @remarks
   * 查询用户的 INSTANCE Token 状态。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 查询 ACTIVE INSTANCE Token
   *     4. 存在 → 返回 enabled=True + 脱敏值 + 创建时间
   *     5. 不存在 → 返回 enabled=False
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
   * 查询用户详情
   * 
   * @remarks
   * OpenAPI 查询用户详情。
   *     业务编排：
   *     1. 按 wnUserId 或 accountId 定位用户
   *     2. 查询用户在当前租户的映射信息（状态、加入时间、最后登录）
   *     3. 查询用户在当前租户的角色列表
   *     4. 查询用户在当前租户的用户组列表
   *     5. 组装响应
   *     错误码：
   *     - ERR.User.NotFound: 用户不存在
   *     - ERR.User.NotInTenant: 用户不在当前租户下
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
   * 查询用户详情
   * 
   * @remarks
   * OpenAPI 查询用户详情。
   *     业务编排：
   *     1. 按 wnUserId 或 accountId 定位用户
   *     2. 查询用户在当前租户的映射信息（状态、加入时间、最后登录）
   *     3. 查询用户在当前租户的角色列表
   *     4. 查询用户在当前租户的用户组列表
   *     5. 组装响应
   *     错误码：
   *     - ERR.User.NotFound: 用户不存在
   *     - ERR.User.NotInTenant: 用户不在当前租户下
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
   * 查询当前登录用户的实时信用消耗、限额及剩余情况。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取当前登录用户的信用使用详情，包括信用限额、已消耗的信用额度以及剩余信用额度。
   * - 数据来源于Redis实时缓存，确保了信息的即时性。
   * - 支持通过租户ID来指定查询特定租户下的用户信用使用情况，默认情况下将使用调用方的默认租户。
   * - 请求时可选择提供`RequestId`作为请求标识符，但这不是必需的。
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
   * 查询当前登录用户的实时信用消耗、限额及剩余情况。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取当前登录用户的信用使用详情，包括信用限额、已消耗的信用额度以及剩余信用额度。
   * - 数据来源于Redis实时缓存，确保了信息的即时性。
   * - 支持通过租户ID来指定查询特定租户下的用户信用使用情况，默认情况下将使用调用方的默认租户。
   * - 请求时可选择提供`RequestId`作为请求标识符，但这不是必需的。
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
   * 通过OpenAPI获取鉴权用户的完整信息，包括基本信息、租户列表等。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于返回当前鉴权用户的详细信息。
   * - 当租户信息失效时，将返回对应的错误信息。
   * - `tenantId`为可选参数，若未提供，则使用调用方默认的租户ID。
   * - 支持多种认证方式：AK、BearerToken和APP认证。
   * - 返回的数据中包含了用户的个人资料（如用户名、头像链接）、角色偏好设置以及所属的所有租户详情。
   * - 特别注意，如果当前登录的租户是系统租户（即`tenantId=10000`），则会在响应中明确标识出来。
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
   * 通过OpenAPI获取鉴权用户的完整信息，包括基本信息、租户列表等。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于返回当前鉴权用户的详细信息。
   * - 当租户信息失效时，将返回对应的错误信息。
   * - `tenantId`为可选参数，若未提供，则使用调用方默认的租户ID。
   * - 支持多种认证方式：AK、BearerToken和APP认证。
   * - 返回的数据中包含了用户的个人资料（如用户名、头像链接）、角色偏好设置以及所属的所有租户详情。
   * - 特别注意，如果当前登录的租户是系统租户（即`tenantId=10000`），则会在响应中明确标识出来。
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
   * 授权用户/用户组使用数字员工
   * 
   * @remarks
   * 授权用户或用户组使用指定数字员工。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 请求体互斥校验：userIds / userGroupIds 二选一
   *     3. 委托 AgentAuthorizationAuthorizedService.grant_authorization 执行
   *     4. 前置校验：MANAGE 权限 + agent 存在性（由 AuthorizedService 层执行，先鉴权后暴露存在性）
   *     5. 已存在的授权记录会被更新（expire_date / permissions）
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
   * 授权用户/用户组使用数字员工
   * 
   * @remarks
   * 授权用户或用户组使用指定数字员工。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 请求体互斥校验：userIds / userGroupIds 二选一
   *     3. 委托 AgentAuthorizationAuthorizedService.grant_authorization 执行
   *     4. 前置校验：MANAGE 权限 + agent 存在性（由 AuthorizedService 层执行，先鉴权后暴露存在性）
   *     5. 已存在的授权记录会被更新（expire_date / permissions）
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
   * 用于查询或下钻查看租户的企业知识库列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 支持两种模式：当 `directoryId` 为空或为 'root' 时，返回知识库的顶层列表；当 `directoryId` 有具体值时，则进行下钻操作，返回指定目录下的子目录和资源。
   * - `tenantId` 作为公共参数，若未提供则默认使用调用方的租户 ID。
   * - 在下钻模式下（即 `directoryId` 非空），可以通过 `sourceTypes` 参数来过滤特定类型的资源。
   * - 排序字段 (`sortField`) 和排序方向 (`sortOrder`) 可以自定义，但非法值将被重置为默认设置。
   * - 搜索功能仅在获取顶层列表时有效，并且只支持模糊匹配名称或描述。
   * - 安全性方面，`tenant_id` 严格从鉴权身份中获取，不允许通过请求体传递。
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
   * 用于查询或下钻查看租户的企业知识库列表。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 支持两种模式：当 `directoryId` 为空或为 'root' 时，返回知识库的顶层列表；当 `directoryId` 有具体值时，则进行下钻操作，返回指定目录下的子目录和资源。
   * - `tenantId` 作为公共参数，若未提供则默认使用调用方的租户 ID。
   * - 在下钻模式下（即 `directoryId` 非空），可以通过 `sourceTypes` 参数来过滤特定类型的资源。
   * - 排序字段 (`sortField`) 和排序方向 (`sortOrder`) 可以自定义，但非法值将被重置为默认设置。
   * - 搜索功能仅在获取顶层列表时有效，并且只支持模糊匹配名称或描述。
   * - 安全性方面，`tenant_id` 严格从鉴权身份中获取，不允许通过请求体传递。
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
   * 查询租户全量数字员工列表
   * 
   * @remarks
   * 查询租户下全部数字员工列表（含停用）。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.list_agents 完成权限校验（APPLICATION_AGENT_VIEW）
   *     3. 返回租户全量数字员工的富字段（operatingObjectName / displayName / authMode / isActive）
   *     4. 系统级 Token 通过 ctx.skip_permission 自动放行
   *     与 listAuthorizedAgents 区别：本接口返回租户全量（含停用、不做授权过滤），
   *     并携带 displayName / isActive 等富字段，供管理端展示。
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
   * 查询租户全量数字员工列表
   * 
   * @remarks
   * 查询租户下全部数字员工列表（含停用）。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.list_agents 完成权限校验（APPLICATION_AGENT_VIEW）
   *     3. 返回租户全量数字员工的富字段（operatingObjectName / displayName / authMode / isActive）
   *     4. 系统级 Token 通过 ctx.skip_permission 自动放行
   *     与 listAuthorizedAgents 区别：本接口返回租户全量（含停用、不做授权过滤），
   *     并携带 displayName / isActive 等富字段，供管理端展示。
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
   * 查询调用方有指定权限的数字员工名称列表
   * 
   * @remarks
   * 查询当前调用方（或指定目标用户）拥有指定权限（USE/MANAGE）的数字员工名称列表。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.list_authorized_agents 执行查询
   *     3. skip_permission=True 时返回租户全量活跃 agent
   *     4. 普通用户根据授权记录 + auth_mode 过滤
   *     5. 传入 targetUserId（代查他人）时需 APPLICATION_AGENT_VIEW 门控，查询限定本租户；
   *        目标用户非本租户成员时抛 USER_NOT_IN_TENANT（不静默返回空列表）
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
   * 查询调用方有指定权限的数字员工名称列表
   * 
   * @remarks
   * 查询当前调用方（或指定目标用户）拥有指定权限（USE/MANAGE）的数字员工名称列表。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.list_authorized_agents 执行查询
   *     3. skip_permission=True 时返回租户全量活跃 agent
   *     4. 普通用户根据授权记录 + auth_mode 过滤
   *     5. 传入 targetUserId（代查他人）时需 APPLICATION_AGENT_VIEW 门控，查询限定本租户；
   *        目标用户非本租户成员时抛 USER_NOT_IN_TENANT（不静默返回空列表）
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
   * 查询数字员工已授权的用户/用户组列表
   * 
   * @remarks
   * 查询某数字员工已授权的用户/用户组列表。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.list_authorized_users 执行查询
   *     3. 权限校验由 AuthorizedService 层 @require_permission(APPLICATION_AGENT_VIEW) 完成
   *     4. auth_mode=ALL_USERS 时仅展示有 MANAGE 权限的记录
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
   * 查询数字员工已授权的用户/用户组列表
   * 
   * @remarks
   * 查询某数字员工已授权的用户/用户组列表。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.list_authorized_users 执行查询
   *     3. 权限校验由 AuthorizedService 层 @require_permission(APPLICATION_AGENT_VIEW) 完成
   *     4. auth_mode=ALL_USERS 时仅展示有 MANAGE 权限的记录
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
   * 枚举可用的组织同步配置
   * 
   * @remarks
   * 枚举当前租户下所有可用的组织同步配置。
   *     返回统一格式的 configs 列表，涵盖四种平台类型：
   *     - **wecom**：从 SsoProviderRegistry 获取活跃的企微 SSO 配置
   *     - **saml**：从 SsoProviderRegistry 获取活跃的 SAML SSO 配置，corpId 取 idpEntityId
   *     - **oauth2**：从 SsoProviderRegistry 获取活跃的 OAuth2 SSO 配置，corpId 取 clientId
   *     - **custom**：从数据库查询该租户已注册的纯自定义组织
   *     客户端根据返回的 platformType 区分处理逻辑，corpId 为后续同步接口的必传参数。
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
   * 枚举可用的组织同步配置
   * 
   * @remarks
   * 枚举当前租户下所有可用的组织同步配置。
   *     返回统一格式的 configs 列表，涵盖四种平台类型：
   *     - **wecom**：从 SsoProviderRegistry 获取活跃的企微 SSO 配置
   *     - **saml**：从 SsoProviderRegistry 获取活跃的 SAML SSO 配置，corpId 取 idpEntityId
   *     - **oauth2**：从 SsoProviderRegistry 获取活跃的 OAuth2 SSO 配置，corpId 取 clientId
   *     - **custom**：从数据库查询该租户已注册的纯自定义组织
   *     客户端根据返回的 platformType 区分处理逻辑，corpId 为后续同步接口的必传参数。
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
   * 通过OpenAPI查询并筛选账单列表，支持多种条件过滤。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询指定条件下的账单列表。
   * - 支持按租户、用户、操作类型、状态、时间范围、业务来源等条件进行筛选。
   * - 分页返回账单数据，默认每页显示20条记录。
   * - 可选择是否过滤掉credit消耗为0的账单，默认过滤。
   * - 请求时需提供必要的认证信息（如AK、BearerToken或APP认证）。
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
   * 通过OpenAPI查询并筛选账单列表，支持多种条件过滤。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询指定条件下的账单列表。
   * - 支持按租户、用户、操作类型、状态、时间范围、业务来源等条件进行筛选。
   * - 分页返回账单数据，默认每页显示20条记录。
   * - 可选择是否过滤掉credit消耗为0的账单，默认过滤。
   * - 请求时需提供必要的认证信息（如AK、BearerToken或APP认证）。
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
   * 按创建时间倒序列出当前用户的聊天会话。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 支持通过多种参数进行过滤和排序，包括租户 ID、分页大小、分页令牌、关键词搜索、数字员工名称以及更新时间区间。
   * - 默认情况下，结果将按照 `UpdatedAt` 字段降序排列。
   * - 如果提供了无效的 `NextToken` 或者 `PageSize` 超出了允许范围（1-100），API 将返回 400 错误。
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
   * 按创建时间倒序列出当前用户的聊天会话。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 支持通过多种参数进行过滤和排序，包括租户 ID、分页大小、分页令牌、关键词搜索、数字员工名称以及更新时间区间。
   * - 默认情况下，结果将按照 `UpdatedAt` 字段降序排列。
   * - 如果提供了无效的 `NextToken` 或者 `PageSize` 超出了允许范围（1-100），API 将返回 400 错误。
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
   * 查询租户可用于语义查询的图谱列表
   * 
   * @remarks
   * 列出身份租户下的已发布图谱。
   *     CLI 映射为 ``winnexo graph list``；``tenantId`` 是必传公共参数，不进入请求体。
   *     返回的 ``graphName`` 可直接用于 ``querySemanticKnowledge``。该查询与现有前台
   *     图谱列表保持一致，不做数字员工权限过滤；具体语义查询仍会校验 agent USE 权限。
   *     数据库异常直接进入统一 5xx 错误处理，不会伪装为成功空列表。
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
   * 查询租户可用于语义查询的图谱列表
   * 
   * @remarks
   * 列出身份租户下的已发布图谱。
   *     CLI 映射为 ``winnexo graph list``；``tenantId`` 是必传公共参数，不进入请求体。
   *     返回的 ``graphName`` 可直接用于 ``querySemanticKnowledge``。该查询与现有前台
   *     图谱列表保持一致，不做数字员工权限过滤；具体语义查询仍会校验 agent USE 权限。
   *     数据库异常直接进入统一 5xx 错误处理，不会伪装为成功空列表。
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
   * 查询企业知识库的分类目录树，支持按指定字段排序。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于获取企业知识库的分类列表（子目录树），需要具备知识库查看权限。
   * - 如果未提供 `directoryId` 参数，则返回企业知识库根目录下的所有分类树；如果提供了 `directoryId`，则以该目录为根返回其子目录树。
   * - 支持通过 `sortField` 和 `sortOrder` 参数对结果进行排序，默认按照创建时间降序排列。
   * - 安全约束：`tenant_id` 和 `user_id` 仅来自鉴权身份，并且调用者必须拥有 `DEVELOPMENT_KB_VIEW` 功能权限。
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
   * 查询企业知识库的分类目录树，支持按指定字段排序。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于获取企业知识库的分类列表（子目录树），需要具备知识库查看权限。
   * - 如果未提供 `directoryId` 参数，则返回企业知识库根目录下的所有分类树；如果提供了 `directoryId`，则以该目录为根返回其子目录树。
   * - 支持通过 `sortField` 和 `sortOrder` 参数对结果进行排序，默认按照创建时间降序排列。
   * - 安全约束：`tenant_id` 和 `user_id` 仅来自鉴权身份，并且调用者必须拥有 `DEVELOPMENT_KB_VIEW` 功能权限。
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
   * 查询当前用户的产出列表，支持按条件过滤和分页。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于查询当前登录用户的产出列表。
   * - `tenantId`作为公共参数，缺省时使用调用方默认租户。
   * - 支持通过`operatingObjectName`、`itemType`、`keyword`等参数进行过滤查询。
   * - 可以设置`sharedOnly`为`true`来仅展示开启分享的产出。
   * - 分页信息通过`page`（页码）和`pageSize`（每页数量）控制，默认从第1页开始，每页显示20条记录。
   * - 默认按更新时间倒序排列。
   * - 调用者在请求体中传入的`tenant_id`或`user_id`将被忽略，这些信息仅来自鉴权身份。
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
   * 查询当前用户的产出列表，支持按条件过滤和分页。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于查询当前登录用户的产出列表。
   * - `tenantId`作为公共参数，缺省时使用调用方默认租户。
   * - 支持通过`operatingObjectName`、`itemType`、`keyword`等参数进行过滤查询。
   * - 可以设置`sharedOnly`为`true`来仅展示开启分享的产出。
   * - 分页信息通过`page`（页码）和`pageSize`（每页数量）控制，默认从第1页开始，每页显示20条记录。
   * - 默认按更新时间倒序排列。
   * - 调用者在请求体中传入的`tenant_id`或`user_id`将被忽略，这些信息仅来自鉴权身份。
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
   * 查询指定数字员工资源目录下的子目录与资源。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于下钻查询"我的资源"目录下的子目录与资源。
   * - 当 `directoryId` 设置为 'root' 时，服务将自动解析并返回当前数字员工默认根目录下的内容；若提供具体的目录 ID，则返回该目录下的子目录和资源。
   * - 安全约束：`tenant_id` 和 `user_id` 只能来自鉴权身份信息，调用方在请求体中提供的这些字段将被忽略。
   * - 支持通过 `sourceTypes` 参数筛选特定类型的资源，当此参数有值时，仅返回符合类型条件的资源而不包含子目录。
   * - 排序支持按名称 (`name`)、创建时间 (`gmt_create`) 或修改时间 (`gmt_modified`) 进行升序或降序排列。
   * - 分页功能允许用户自定义每页显示的数量（最大100）及当前查看的页码。
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
   * 查询指定数字员工资源目录下的子目录与资源。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 用于下钻查询"我的资源"目录下的子目录与资源。
   * - 当 `directoryId` 设置为 'root' 时，服务将自动解析并返回当前数字员工默认根目录下的内容；若提供具体的目录 ID，则返回该目录下的子目录和资源。
   * - 安全约束：`tenant_id` 和 `user_id` 只能来自鉴权身份信息，调用方在请求体中提供的这些字段将被忽略。
   * - 支持通过 `sourceTypes` 参数筛选特定类型的资源，当此参数有值时，仅返回符合类型条件的资源而不包含子目录。
   * - 排序支持按名称 (`name`)、创建时间 (`gmt_create`) 或修改时间 (`gmt_modified`) 进行升序或降序排列。
   * - 分页功能允许用户自定义每页显示的数量（最大100）及当前查看的页码。
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
   * 查询系统内置角色列表
   * 
   * @remarks
   * 查询系统内置角色列表。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 UserManagementAuthorizedService.list_system_roles 完成权限校验（PLATFORM_USER_VIEW）
   *     3. 按请求 Accept-Language 渲染角色名称与说明
   *     4. 返回固定的 7 个系统内置角色
   *     返回字段 roleCode 可直接用于 createUser / updateUser 的 roleCodes 参数。
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
   * 查询系统内置角色列表
   * 
   * @remarks
   * 查询系统内置角色列表。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 UserManagementAuthorizedService.list_system_roles 完成权限校验（PLATFORM_USER_VIEW）
   *     3. 按请求 Accept-Language 渲染角色名称与说明
   *     4. 返回固定的 7 个系统内置角色
   *     返回字段 roleCode 可直接用于 createUser / updateUser 的 roleCodes 参数。
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
   * 获取定时任务列表
   * 
   * @param request - ListScheduledTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledTasksResponse
   */
  async listScheduledTasksWithOptions(request: $_model.ListScheduledTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collaborationGroupId)) {
      query["collaborationGroupId"] = request.collaborationGroupId;
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
   * 获取定时任务列表
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
   * 列出当前租户可见的技能。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于获取当前租户下所有可见的技能列表。支持按数字员工绑定关系、技能来源、标签、关键词等条件进行过滤，并支持分页。
   * ### 入参
   * - **TenantId**：可选，公共参数，由网关透传到后端 Header；不传时使用当前调用方所属的默认租户。
   * - **FilterType**：可选，技能筛选维度。可选值：`ALL`(全部已发布)、`BUILTIN`(内置已发布)、`CUSTOM`(自定义已发布)、`DRAFT`(草稿箱，含未发布修改的已发布技能)。默认 `ALL`。
   * - **Tags**：可选，按标签过滤，数组任一命中即匹配。
   * - **Keyword**：可选，按技能名称或描述模糊匹配。
   * - **Page**：可选，页码，最小 1，默认 1。
   * - **PageSize**：可选，每页数量，范围 1~100，默认 20。
   * - **OperatingObjectName**：可选，数字员工名称，传入时按绑定关系过滤；必须配合 `BindStatus` 使用。
   * - **BindStatus**：可选，绑定状态。可选值：`BOUND`(已绑定)、`UNBOUND`(未绑定的全局技能)。
   * ### 出参
   * 响应包含技能列表 `items`、总数 `total`、当前页 `page` 与每页数量 `pageSize`。
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
   * 列出当前租户可见的技能。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于获取当前租户下所有可见的技能列表。支持按数字员工绑定关系、技能来源、标签、关键词等条件进行过滤，并支持分页。
   * ### 入参
   * - **TenantId**：可选，公共参数，由网关透传到后端 Header；不传时使用当前调用方所属的默认租户。
   * - **FilterType**：可选，技能筛选维度。可选值：`ALL`(全部已发布)、`BUILTIN`(内置已发布)、`CUSTOM`(自定义已发布)、`DRAFT`(草稿箱，含未发布修改的已发布技能)。默认 `ALL`。
   * - **Tags**：可选，按标签过滤，数组任一命中即匹配。
   * - **Keyword**：可选，按技能名称或描述模糊匹配。
   * - **Page**：可选，页码，最小 1，默认 1。
   * - **PageSize**：可选，每页数量，范围 1~100，默认 20。
   * - **OperatingObjectName**：可选，数字员工名称，传入时按绑定关系过滤；必须配合 `BindStatus` 使用。
   * - **BindStatus**：可选，绑定状态。可选值：`BOUND`(已绑定)、`UNBOUND`(未绑定的全局技能)。
   * ### 出参
   * 响应包含技能列表 `items`、总数 `total`、当前页 `page` 与每页数量 `pageSize`。
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
   * 按管理端口径分页查询企业知识库目录与资源。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于分页查询企业知识库中的目录内容和资源。
   * - 支持通过多种参数进行过滤和排序，如`directoryId`、`page`、`pageSize`、`sortField`、`sortOrder`等。
   * - `sourceTypes`参数允许用户根据资源类型进行过滤，多个类型使用逗号分隔。
   * - 当不传或传入`root`作为`directoryId`时，默认查询知识库根目录列表。
   * - 默认的排序字段为`name`，默认排序方向为升序（`asc`）。
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
   * 按管理端口径分页查询企业知识库目录与资源。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于分页查询企业知识库中的目录内容和资源。
   * - 支持通过多种参数进行过滤和排序，如`directoryId`、`page`、`pageSize`、`sortField`、`sortOrder`等。
   * - `sourceTypes`参数允许用户根据资源类型进行过滤，多个类型使用逗号分隔。
   * - 当不传或传入`root`作为`directoryId`时，默认查询知识库根目录列表。
   * - 默认的排序字段为`name`，默认排序方向为升序（`asc`）。
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
   * 查询当前 OpenAPI 用户可见知识库目录内容。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口按企业知识库前台口径返回指定目录的子目录和 READY 资源。
   * - 用户身份与目录可见范围均来自 OpenAPI 鉴权上下文。
   * - `sourceTypes` 有值时仅返回资源；`keyword` 仅搜索当前目录层级。
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
   * 查询当前 OpenAPI 用户可见知识库目录内容。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口按企业知识库前台口径返回指定目录的子目录和 READY 资源。
   * - 用户身份与目录可见范围均来自 OpenAPI 鉴权上下文。
   * - `sourceTypes` 有值时仅返回资源；`keyword` 仅搜索当前目录层级。
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
   * 查询当前 OpenAPI 用户可见的企业知识库列表。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口按 OpenAPI 鉴权身份映射的平台用户查询其可见企业知识库。
   * - 租户和用户身份均由鉴权上下文确定，调用方不能通过业务参数扩大可见范围。
   * - `tenantId` 为可选公共参数；`keyword` 可按知识库名称或描述过滤。
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
   * 查询当前 OpenAPI 用户可见的企业知识库列表。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口按 OpenAPI 鉴权身份映射的平台用户查询其可见企业知识库。
   * - 租户和用户身份均由鉴权上下文确定，调用方不能通过业务参数扩大可见范围。
   * - `tenantId` 为可选公共参数；`keyword` 可按知识库名称或描述过滤。
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
   * 分页查询租户成员列表
   * 
   * @remarks
   * OpenAPI 分页查询租户成员列表。
   *     业务编排：
   *     1. 解析筛选条件（roleCodes → role_ids）
   *     2. 调用 UserTenantMappingRepository.query_paged_tenant_members 分页查询
   *     3. 将结果中的 role_id 转为 roleCode 并组装响应
   *     错误码：
   *     - 非法 roleCode 参数时抛出错误
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
   * 分页查询租户成员列表
   * 
   * @remarks
   * OpenAPI 分页查询租户成员列表。
   *     业务编排：
   *     1. 解析筛选条件（roleCodes → role_ids）
   *     2. 调用 UserTenantMappingRepository.query_paged_tenant_members 分页查询
   *     3. 将结果中的 role_id 转为 roleCode 并组装响应
   *     错误码：
   *     - 非法 roleCode 参数时抛出错误
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
   * 下钻查询指定数字员工可见的知识库目录下的子目录与资源。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于查询特定数字员工在指定知识库目录下的所有子目录和资源。
   * - 用户需拥有对目标数字员工的USE权限，且该数字员工必须有权访问请求中指定的目录及其子目录。
   * - 请求时需要提供数字员工名称（`operatingObjectName`）及要查询的目录ID（`directoryId`），其他参数如分页信息、排序方式等为可选项。
   * - 接口返回结果包括目录下的子目录和资源列表，并支持按页码分页显示。
   * - `sourceStatus`字段固定过滤值为`READY`状态的资源。
   * - 安全性方面，`tenant_id`与`user_id`仅从鉴权身份获取，调用方即使在请求体中传递也会被忽略。
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
   * 下钻查询指定数字员工可见的知识库目录下的子目录与资源。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于查询特定数字员工在指定知识库目录下的所有子目录和资源。
   * - 用户需拥有对目标数字员工的USE权限，且该数字员工必须有权访问请求中指定的目录及其子目录。
   * - 请求时需要提供数字员工名称（`operatingObjectName`）及要查询的目录ID（`directoryId`），其他参数如分页信息、排序方式等为可选项。
   * - 接口返回结果包括目录下的子目录和资源列表，并支持按页码分页显示。
   * - `sourceStatus`字段固定过滤值为`READY`状态的资源。
   * - 安全性方面，`tenant_id`与`user_id`仅从鉴权身份获取，调用方即使在请求体中传递也会被忽略。
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
   * 查询数字员工可访问的企业知识库顶层目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定数字员工（运营对象）在企业内可见的知识库顶层目录列表。
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
   * 查询数字员工可访问的企业知识库顶层目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定数字员工（运营对象）在企业内可见的知识库顶层目录列表。
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
   * 在企业知识库目录间移动指定资源，需具备管理权限。
   * 
   * @remarks
   * ## 请求说明
   * - **鉴权流程**：
   *   1. 基础鉴权由根 router 统一完成（`request.state.openapi_identity`）。
   *   2. 本 handler 校验 `DEVELOPMENT_KB_MANAGE` 功能权限。
   * - **操作步骤**：
   *   1. 检查源目录与目标目录不能相同。
   *   2. 确认目标目录存在。
   *   3. 验证待移动的资源确实位于源目录中。
   *   4. 更新资源的目录绑定关系。
   *   5. 尽力更新 `source.settings["knowledge_id"]` 为目标知识库 ID。
   *   6. 尽力通知 DocumentAgent 同步 `knowledge_id` 和 `update_time`。
   * - **安全约束**：
   *   - `tenant_id` 和 `user_id` 必须来自鉴权身份。
   *   - 调用者需要拥有 KB 管理权限。
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
   * 在企业知识库目录间移动指定资源，需具备管理权限。
   * 
   * @remarks
   * ## 请求说明
   * - **鉴权流程**：
   *   1. 基础鉴权由根 router 统一完成（`request.state.openapi_identity`）。
   *   2. 本 handler 校验 `DEVELOPMENT_KB_MANAGE` 功能权限。
   * - **操作步骤**：
   *   1. 检查源目录与目标目录不能相同。
   *   2. 确认目标目录存在。
   *   3. 验证待移动的资源确实位于源目录中。
   *   4. 更新资源的目录绑定关系。
   *   5. 尽力更新 `source.settings["knowledge_id"]` 为目标知识库 ID。
   *   6. 尽力通知 DocumentAgent 同步 `knowledge_id` 和 `update_time`。
   * - **安全约束**：
   *   - `tenant_id` 和 `user_id` 必须来自鉴权身份。
   *   - 调用者需要拥有 KB 管理权限。
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
   * 在用户的个人目录之间移动指定资源。
   * 
   * @remarks
   * ## 请求说明
   * - **源目录与目标目录不能相同**，否则将返回 `ERR.Robject.UserDirectory.InvalidOperation` 错误。
   * - **目标目录必须存在**，如果不存在则会返回 `ERR.Robject.UserDirectory.DirectoryNotFound` 错误。
   * - **待移动的资源必须存在于源目录中**，若不在源目录中，则会收到 `ERR.Robject.UserDirectory.ResourceNotInDirectory` 错误。
   * - 成功移动后，系统会尝试通知 DocumentAgent 更新资源的新路径 (`source_path`)，但此步骤为尽力而为（best-effort），即使失败也不会影响整体操作的成功状态，仅记录错误日志。
   * - 安全性方面，`tenant_id` 的值只能来源于鉴权身份信息。
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
   * 在用户的个人目录之间移动指定资源。
   * 
   * @remarks
   * ## 请求说明
   * - **源目录与目标目录不能相同**，否则将返回 `ERR.Robject.UserDirectory.InvalidOperation` 错误。
   * - **目标目录必须存在**，如果不存在则会返回 `ERR.Robject.UserDirectory.DirectoryNotFound` 错误。
   * - **待移动的资源必须存在于源目录中**，若不在源目录中，则会收到 `ERR.Robject.UserDirectory.ResourceNotInDirectory` 错误。
   * - 成功移动后，系统会尝试通知 DocumentAgent 更新资源的新路径 (`source_path`)，但此步骤为尽力而为（best-effort），即使失败也不会影响整体操作的成功状态，仅记录错误日志。
   * - 安全性方面，`tenant_id` 的值只能来源于鉴权身份信息。
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
   * 预览指定企业知识库下的知识内容
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于预览企业知识库下指定知识的内容。
   * - 需要具备`DEVELOPMENT_KB_VIEW`功能权限才能调用此API。
   * - `sourceId`是必需参数，用来标识要预览的知识条目。
   * - 可选参数`tenantId`允许指定租户ID；若未提供，则使用调用方默认的租户ID。
   * - 支持多种类型的预览，包括但不限于图片、音频、视频及文本等。
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
   * 预览指定企业知识库下的知识内容
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于预览企业知识库下指定知识的内容。
   * - 需要具备`DEVELOPMENT_KB_VIEW`功能权限才能调用此API。
   * - `sourceId`是必需参数，用来标识要预览的知识条目。
   * - 可选参数`tenantId`允许指定租户ID；若未提供，则使用调用方默认的租户ID。
   * - 支持多种类型的预览，包括但不限于图片、音频、视频及文本等。
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
   * 允许用户预览其个人目录下的指定知识内容。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口仅允许用户预览属于自己的个人目录下的资源。
   * - 鉴权流程包括基础鉴权和数据源归属校验，确保请求者只能访问其个人目录中的知识。
   * - 请求时需提供知识的唯一标识 `sourceId`，系统将根据此ID及用户的租户信息查询并返回相应的预览信息。
   * - 支持多种类型的预览，如图片、音频、视频等，并根据不同类型返回对应的预览URL或直接的内容展示。
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
   * 允许用户预览其个人目录下的指定知识内容。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口仅允许用户预览属于自己的个人目录下的资源。
   * - 鉴权流程包括基础鉴权和数据源归属校验，确保请求者只能访问其个人目录中的知识。
   * - 请求时需提供知识的唯一标识 `sourceId`，系统将根据此ID及用户的租户信息查询并返回相应的预览信息。
   * - 支持多种类型的预览，如图片、音频、视频等，并根据不同类型返回对应的预览URL或直接的内容展示。
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
   * 通过运营对象名称分页查询主对象数据，支持过滤和搜索。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于根据给定的运营对象名称（如 `customer_1`）分页查询相关的主对象数据。
   * - 支持通过关键字进行搜索，并且可以设置是否仅返回被标记为关注的对象。
   * - 可以使用复杂的过滤条件来进一步筛选结果，包括但不限于等于、不等于、大于、小于等逻辑操作符。
   * - 如果没有配置主对象类型，则会返回一个空的结果集。
   * - 请求中包含的数据将经过鉴权与过滤处理，确保安全性和准确性。
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
   * 通过运营对象名称分页查询主对象数据，支持过滤和搜索。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于根据给定的运营对象名称（如 `customer_1`）分页查询相关的主对象数据。
   * - 支持通过关键字进行搜索，并且可以设置是否仅返回被标记为关注的对象。
   * - 可以使用复杂的过滤条件来进一步筛选结果，包括但不限于等于、不等于、大于、小于等逻辑操作符。
   * - 如果没有配置主对象类型，则会返回一个空的结果集。
   * - 请求中包含的数据将经过鉴权与过滤处理，确保安全性和准确性。
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
   * 查询与用户问题相关的语义知识
   * 
   * @remarks
   * 仅开放 smart-query 的 schema_knowledge 语义召回能力。
   *     CLI 映射为 ``winnexo semantic query``。``tenantId`` 由公共参数传入，``userId``
   *     仅从 Token 身份读取，禁止请求体覆盖。服务会校验 ``graphName + agentName`` 归属、
   *     active graph、数字员工启用状态及当前用户 USE 权限；跨图同名 agent 会失败关闭，
   *     随后固定 ``outputs=[schema_knowledge]``。
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
   * 查询与用户问题相关的语义知识
   * 
   * @remarks
   * 仅开放 smart-query 的 schema_knowledge 语义召回能力。
   *     CLI 映射为 ``winnexo semantic query``。``tenantId`` 由公共参数传入，``userId``
   *     仅从 Token 身份读取，禁止请求体覆盖。服务会校验 ``graphName + agentName`` 归属、
   *     active graph、数字员工启用状态及当前用户 USE 权限；跨图同名 agent 会失败关闭，
   *     随后固定 ``outputs=[schema_knowledge]``。
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
   * 查询组织同步结果
   * 
   * @remarks
   * 根据 taskId 查询组织同步任务的执行状态和结果。
   *     任务状态流转：PENDING → RUNNING → COMPLETED / FAILED / TIMEOUT / CANCELED
   *     建议客户端轮询间隔：3-5 秒。
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
   * 查询组织同步结果
   * 
   * @remarks
   * 根据 taskId 查询组织同步任务的执行状态和结果。
   *     任务状态流转：PENDING → RUNNING → COMPLETED / FAILED / TIMEOUT / CANCELED
   *     建议客户端轮询间隔：3-5 秒。
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
   * 从租户移除用户
   * 
   * @remarks
   * OpenAPI 从租户移除用户。
   *     业务编排：
   *     1. 从 identity 获取 tenant_id
   *     2. 调用 delete_user_from_tenant（内部含最后超管保护）
   *     3. 返回成功
   *     该操作会：
   *     - 移除用户在租户下的所有角色关联
   *     - 移除用户在租户下的所有用户组关联
   *     - 撤销用户在租户下的全部数字员工使用授权
   *     - 删除用户-租户映射
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
   * 从租户移除用户
   * 
   * @remarks
   * OpenAPI 从租户移除用户。
   *     业务编排：
   *     1. 从 identity 获取 tenant_id
   *     2. 调用 delete_user_from_tenant（内部含最后超管保护）
   *     3. 返回成功
   *     该操作会：
   *     - 移除用户在租户下的所有角色关联
   *     - 移除用户在租户下的所有用户组关联
   *     - 撤销用户在租户下的全部数字员工使用授权
   *     - 删除用户-租户映射
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
   * 用于更改指定企业知识库内数据源的名称。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口允许具有相应权限的用户修改企业知识库中的特定数据源名称。
   * - 需要提供待修改的数据源ID(``sourceId``)及新的名称(``newName``)。
   * - 修改操作仅更新数据源的名字字段，不会触发其他处理流程。
   * - 成功执行后，系统会发布``SOURCE_CHANGED``事件以供前端刷新显示，并尝试通知DocumentAgent同步最新的source_name信息，但此步骤失败不会影响主流程的完成状态。
   * - 如果提供的``sourceId``不存在，则返回错误码``ERR.Robject.Source.NotFound``。
   * - 此API调用需具备``DEVELOPMENT_KB_MANAGE``功能权限。
   * - 支持通过AK、BearerToken或APP方式进行身份验证。
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
   * 用于更改指定企业知识库内数据源的名称。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口允许具有相应权限的用户修改企业知识库中的特定数据源名称。
   * - 需要提供待修改的数据源ID(``sourceId``)及新的名称(``newName``)。
   * - 修改操作仅更新数据源的名字字段，不会触发其他处理流程。
   * - 成功执行后，系统会发布``SOURCE_CHANGED``事件以供前端刷新显示，并尝试通知DocumentAgent同步最新的source_name信息，但此步骤失败不会影响主流程的完成状态。
   * - 如果提供的``sourceId``不存在，则返回错误码``ERR.Robject.Source.NotFound``。
   * - 此API调用需具备``DEVELOPMENT_KB_MANAGE``功能权限。
   * - 支持通过AK、BearerToken或APP方式进行身份验证。
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
   * 用于更改指定数据源的名称，支持轻量级操作。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 仅更新数据源的 `name` 字段，不会触发 `process_source`。
   * - 成功后会发布 `SOURCE_CHANGED` 事件供前端刷新显示。
   * - 将尽力通知 DocumentAgent 同步新的 `source_name`，即使同步失败也不会阻断主流程。
   * - 如果指定的数据源不存在，则抛出 `ERR.Robject.Source.NotFound` 错误，并由全局中间件统一转换为 POP 错误码。
   * - 安全约束：`tenant_id` 和 `user_id` 必须来自鉴权身份。
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
   * 用于更改指定数据源的名称，支持轻量级操作。
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 仅更新数据源的 `name` 字段，不会触发 `process_source`。
   * - 成功后会发布 `SOURCE_CHANGED` 事件供前端刷新显示。
   * - 将尽力通知 DocumentAgent 同步新的 `source_name`，即使同步失败也不会阻断主流程。
   * - 如果指定的数据源不存在，则抛出 `ERR.Robject.Source.NotFound` 错误，并由全局中间件统一转换为 POP 错误码。
   * - 安全约束：`tenant_id` 和 `user_id` 必须来自鉴权身份。
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
   * 重新解析当前租户内的指定数据源。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于重新解析指定的数据源，支持同步或异步执行。请求时需提供数据源 ID，并可选择是否同步等待解析完成，默认为异步入队处理。此外，可以通过 `tenantId` 参数指定租户ID，但此参数非必填。
   * - **forceSync**：若设置为 `true`，则会同步等待重新解析操作完成；默认值为 `false`，表示以异步方式处理请求。
   * - 当服务返回 `None` 时，将被转换成 `SourceNotFound` 异常；其他异常情况将由 OpenAPI 的全局异常链进行处理。
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
   * 重新解析当前租户内的指定数据源。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于重新解析指定的数据源，支持同步或异步执行。请求时需提供数据源 ID，并可选择是否同步等待解析完成，默认为异步入队处理。此外，可以通过 `tenantId` 参数指定租户ID，但此参数非必填。
   * - **forceSync**：若设置为 `true`，则会同步等待重新解析操作完成；默认值为 `false`，表示以异步方式处理请求。
   * - 当服务返回 `None` 时，将被转换成 `SourceNotFound` 异常；其他异常情况将由 OpenAPI 的全局异常链进行处理。
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
   * 用于替换指定的企业知识库中的FILE资源并触发重新解析。
   * 
   * @remarks
   * ## 请求说明
   * 该API允许用户更新企业自建知识库中特定的FILE类型的数据源，并通过提供新的文件路径和公开访问URL来触发系统对该数据源的重新解析。支持同步或异步模式下的操作执行，其中同步模式下客户端将等待直到解析过程完成。
   * - **forceSync** 参数控制是否采用同步方式处理请求，默认为 `false`，即以异步方式进行。
   * - 当不提供 **fileName** 或其值为空时，新上传的文件将保留原有的文件名。
   * - 必须确保提供的 **filePath** 和 **filePublicUrl** 是有效的且指向同一个文件实体。
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
   * 用于替换指定的企业知识库中的FILE资源并触发重新解析。
   * 
   * @remarks
   * ## 请求说明
   * 该API允许用户更新企业自建知识库中特定的FILE类型的数据源，并通过提供新的文件路径和公开访问URL来触发系统对该数据源的重新解析。支持同步或异步模式下的操作执行，其中同步模式下客户端将等待直到解析过程完成。
   * - **forceSync** 参数控制是否采用同步方式处理请求，默认为 `false`，即以异步方式进行。
   * - 当不提供 **fileName** 或其值为空时，新上传的文件将保留原有的文件名。
   * - 必须确保提供的 **filePath** 和 **filePublicUrl** 是有效的且指向同一个文件实体。
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
   * 用于全量替换指定数据源下的对象绑定信息。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于全量替换特定数据源的对象绑定（先删除现有绑定，再插入新的绑定）。如果传入空列表，则表示清空所有绑定。
   * - **安全约束**：`tenant_id` 和 `user_id` 必须来自鉴权身份。
   * - **错误处理**：若指定的数据源不存在，将抛出 `ERR.Robject.InvalidParameter` 错误，并由全局中间件转换为 POP 错误码。
   * - **同步通知**：替换成功后会尽力同步通知 DocumentAgent 更新 `semantics.object_bindings`，但失败仅记录日志，不会阻断主流程。
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
   * 用于全量替换指定数据源下的对象绑定信息。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于全量替换特定数据源的对象绑定（先删除现有绑定，再插入新的绑定）。如果传入空列表，则表示清空所有绑定。
   * - **安全约束**：`tenant_id` 和 `user_id` 必须来自鉴权身份。
   * - **错误处理**：若指定的数据源不存在，将抛出 `ERR.Robject.InvalidParameter` 错误，并由全局中间件转换为 POP 错误码。
   * - **同步通知**：替换成功后会尽力同步通知 DocumentAgent 更新 `semantics.object_bindings`，但失败仅记录日志，不会阻断主流程。
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
   * 允许用户替换其创建的个人文件资源，并触发系统重新解析该文件。
   * 
   * @remarks
   * ## 请求说明
   * - 此 API 用于替换当前平台用户创建的个人 FILE 资源，并触发系统对该文件的重新解析。
   * - `tenant_id`、操作人和创建者约束只读取鉴权身份。缺少平台用户时请求将被拒绝，以防止绕过所有权校验。
   * - 如果服务端返回 `None`，则会被转换为 `NotFound` 异常；其他异常由 OpenAPI 全局异常链处理。
   * - 该接口支持同步或异步等待重新解析完成，默认为异步入队（通过设置 `forceSync` 参数控制）。
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
   * 允许用户替换其创建的个人文件资源，并触发系统重新解析该文件。
   * 
   * @remarks
   * ## 请求说明
   * - 此 API 用于替换当前平台用户创建的个人 FILE 资源，并触发系统对该文件的重新解析。
   * - `tenant_id`、操作人和创建者约束只读取鉴权身份。缺少平台用户时请求将被拒绝，以防止绕过所有权校验。
   * - 如果服务端返回 `None`，则会被转换为 `NotFound` 异常；其他异常由 OpenAPI 全局异常链处理。
   * - 该接口支持同步或异步等待重新解析完成，默认为异步入队（通过设置 `forceSync` 参数控制）。
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
   * 重置用户密码
   * 
   * @remarks
   * OpenAPI 重置用户密码。
   *     业务编排：
   *     1. 调用 UserManagementService.reset_member_password 传入 password_encrypted（必填）
   *        → service 内部完成 RSA 解密 + 复杂度校验 + bcrypt hash + 写入
   *     2. 返回重置结果
   *     错误码：
   *     - ERR.User.NotFound: 用户不存在
   *     - ERR.User.NotInTenant: 用户不在当前租户下
   *     - ERR.User.WinnexoPasswordRequired: 用户无密码凭证（非 WINNEXO 类型）
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
   * 重置用户密码
   * 
   * @remarks
   * OpenAPI 重置用户密码。
   *     业务编排：
   *     1. 调用 UserManagementService.reset_member_password 传入 password_encrypted（必填）
   *        → service 内部完成 RSA 解密 + 复杂度校验 + bcrypt hash + 写入
   *     2. 返回重置结果
   *     错误码：
   *     - ERR.User.NotFound: 用户不存在
   *     - ERR.User.NotInTenant: 用户不在当前租户下
   *     - ERR.User.WinnexoPasswordRequired: 用户无密码凭证（非 WINNEXO 类型）
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
   * 重置 API Token
   * 
   * @remarks
   * 重置用户的 INSTANCE Token。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 调用 reset_token：
   *        - 旧 ACTIVE Token → RESET（永久失效）
   *        - 生成新 ACTIVE Token
   *     4. 返回新 Token 明文 + 脱敏值
   *     注意：重置后旧 Token 永久失效且不可恢复。新 Token 明文仅在本次响应中返回。
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
   * 重置 API Token
   * 
   * @remarks
   * 重置用户的 INSTANCE Token。
   *     业务逻辑：
   *     1. 从 identity 取 user_id（强制 caller_type=user）
   *     2. 构造 AuthContext，委托 UserTokenAuthorizedService 完成权限校验
   *     3. 调用 reset_token：
   *        - 旧 ACTIVE Token → RESET（永久失效）
   *        - 生成新 ACTIVE Token
   *     4. 返回新 Token 明文 + 脱敏值
   *     注意：重置后旧 Token 永久失效且不可恢复。新 Token 明文仅在本次响应中返回。
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
   * 批量重试指定目录及其子目录下的所有失败数据源。
   * 
   * @remarks
   * ## 请求说明
   * 该API用于获取并重试指定用户个人目录（包括其所有子目录）中状态为FAILED的数据源。请求将立即返回，实际的重试任务将在后台异步执行。请注意，只有当前登录用户有权访问且属于其创建的资源才能被重试。
   * ### 安全与权限
   * - 此操作需要适当的RAM权限。
   * - 只能对当前用户所属租户内的资源进行操作。
   * - 确保`tenantId`和`userId`来自经过验证的身份信息。
   * ### 注意事项
   * - `directoryId`是必需参数，指定了要检查和重试失败数据源的目标目录。
   * - 如果没有提供`tenantId`，则默认使用调用方的租户ID。
   * - API支持多种认证方式，包括AK、BearerToken以及APP认证。
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
   * 批量重试指定目录及其子目录下的所有失败数据源。
   * 
   * @remarks
   * ## 请求说明
   * 该API用于获取并重试指定用户个人目录（包括其所有子目录）中状态为FAILED的数据源。请求将立即返回，实际的重试任务将在后台异步执行。请注意，只有当前登录用户有权访问且属于其创建的资源才能被重试。
   * ### 安全与权限
   * - 此操作需要适当的RAM权限。
   * - 只能对当前用户所属租户内的资源进行操作。
   * - 确保`tenantId`和`userId`来自经过验证的身份信息。
   * ### 注意事项
   * - `directoryId`是必需参数，指定了要检查和重试失败数据源的目标目录。
   * - 如果没有提供`tenantId`，则默认使用调用方的租户ID。
   * - API支持多种认证方式，包括AK、BearerToken以及APP认证。
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
   * 批量重试指定目录下所有失败状态的数据源
   * 
   * @remarks
   * ## 请求说明
   * 该API用于获取并重试指定企业知识库目录（包括其子目录）下的所有处于FAILED状态的数据源。请求将立即返回，实际的重试操作将在后台异步执行。
   * - **鉴权**：除了基础鉴权外，还需具备`DEVELOPMENT_KB_MANAGE`权限。
   * - **安全约束**：仅允许具有相应租户和用户身份的调用者访问，并且需要KB管理权限；管理员可以对任何用户的失败资源发起重试。
   * - **参数**：
   *   - `directoryId` (必填)：指定要检查和重试失败数据源的企业知识库目录ID。
   *   - `tenantId` (可选)：指定租户ID，默认使用调用方的默认租户。
   * - **响应**：成功时返回已入队等待重试的数据源数量及详情等信息。
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
   * 批量重试指定目录下所有失败状态的数据源
   * 
   * @remarks
   * ## 请求说明
   * 该API用于获取并重试指定企业知识库目录（包括其子目录）下的所有处于FAILED状态的数据源。请求将立即返回，实际的重试操作将在后台异步执行。
   * - **鉴权**：除了基础鉴权外，还需具备`DEVELOPMENT_KB_MANAGE`权限。
   * - **安全约束**：仅允许具有相应租户和用户身份的调用者访问，并且需要KB管理权限；管理员可以对任何用户的失败资源发起重试。
   * - **参数**：
   *   - `directoryId` (必填)：指定要检查和重试失败数据源的企业知识库目录ID。
   *   - `tenantId` (可选)：指定租户ID，默认使用调用方的默认租户。
   * - **响应**：成功时返回已入队等待重试的数据源数量及详情等信息。
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
   * 撤销用户/用户组的数字员工使用权限
   * 
   * @remarks
   * 撤销用户或用户组对指定数字员工的使用权限。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 请求体互斥校验：userIds / userGroupIds 二选一
   *     3. 委托 AgentAuthorizationAuthorizedService.revoke_authorization 执行
   *     4. 前置校验：MANAGE 权限 + agent 存在性（由 AuthorizedService 层执行，先鉴权后暴露存在性）
   *     5. 撤销用户直接授权后，用户可能仍通过用户组获得授权
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
   * 撤销用户/用户组的数字员工使用权限
   * 
   * @remarks
   * 撤销用户或用户组对指定数字员工的使用权限。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 请求体互斥校验：userIds / userGroupIds 二选一
   *     3. 委托 AgentAuthorizationAuthorizedService.revoke_authorization 执行
   *     4. 前置校验：MANAGE 权限 + agent 存在性（由 AuthorizedService 层执行，先鉴权后暴露存在性）
   *     5. 撤销用户直接授权后，用户可能仍通过用户组获得授权
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
   * 异步触发技能执行，立即返回 RunId。
   * 
   * @remarks
   * ## 请求说明
   * 本接口仅支持异步模式：提交后立即返回 `RunId` 和 `Status=Running`，客户端通过 `GetSkillRun` 轮询最终结果。
   * - **TenantId**：可选公共参数，由网关透传到后端 Header。
   * - **SkillCode** / **SkillName**：二选一；SkillCode 优先；SkillName 不唯一时返回 `ERR.SkillHub.SkillNameAmbiguous`。
   * - **Arguments**：必填，技能入参对象，结构由 `GetSkill` 返回的 inputConfig 描述。
   * - **ClientToken**：可选幂等键；当前版本仅记录到任务元数据，不做强幂等去重。
   * 注意：同步模式（Async=false）、Stream、CallbackUrl 一期不支持，将在后续版本提供。
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
   * 异步触发技能执行，立即返回 RunId。
   * 
   * @remarks
   * ## 请求说明
   * 本接口仅支持异步模式：提交后立即返回 `RunId` 和 `Status=Running`，客户端通过 `GetSkillRun` 轮询最终结果。
   * - **TenantId**：可选公共参数，由网关透传到后端 Header。
   * - **SkillCode** / **SkillName**：二选一；SkillCode 优先；SkillName 不唯一时返回 `ERR.SkillHub.SkillNameAmbiguous`。
   * - **Arguments**：必填，技能入参对象，结构由 `GetSkill` 返回的 inputConfig 描述。
   * - **ClientToken**：可选幂等键；当前版本仅记录到任务元数据，不做强幂等去重。
   * 注意：同步模式（Async=false）、Stream、CallbackUrl 一期不支持，将在后续版本提供。
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
   * 将产出明细批量保存为个人资源，支持链接或复制模式。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将一批产出明细保存为用户的个人资源。
   * - 支持两种保存方式：`link`（链接）和`copy`（复制）。选择`link`时，编辑产出会同步到资源；选择`copy`则创建快照，不限次数。
   * - `tenant_id` 和 `user_id` 仅来自鉴权身份。
   * - 如果批内 `operating_object` 不一致且未传 `directoryId`，则整批请求前置失败。
   * - 单条记录的处理结果不会影响其他记录的结果，单条失败信息会在响应中返回。
   * - 批量操作最多支持50条记录。
   * - 整批前置失败的情况由全局异常中间件统一返回POP兼容错误格式。
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
   * 将产出明细批量保存为个人资源，支持链接或复制模式。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于将一批产出明细保存为用户的个人资源。
   * - 支持两种保存方式：`link`（链接）和`copy`（复制）。选择`link`时，编辑产出会同步到资源；选择`copy`则创建快照，不限次数。
   * - `tenant_id` 和 `user_id` 仅来自鉴权身份。
   * - 如果批内 `operating_object` 不一致且未传 `directoryId`，则整批请求前置失败。
   * - 单条记录的处理结果不会影响其他记录的结果，单条失败信息会在响应中返回。
   * - 批量操作最多支持50条记录。
   * - 整批前置失败的情况由全局异常中间件统一返回POP兼容错误格式。
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
   * 异步发送会话消息
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
   * 异步发送会话消息
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
   * 发送消息
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
   * 发送消息
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
   * 发送消息
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
   * 停止对话生成
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
   * 停止对话生成
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
   * 订阅会话消息流
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
   * 订阅会话消息流
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
   * 订阅会话消息流
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
   * 推送组织架构同步
   * 
   * @remarks
   * 接收客户端推送的部门树和成员关系，创建异步同步任务。
   *     处理流程：
   *     1. 校验 platformType（仅允许 saml / oauth2 / custom）
   *     2. 校验数据量限制（departments + members <= 50000）
   *     3. 校验 syncMembers 与 platformType 的兼容性
   *     4. SAML/OAuth2 场景：解析或自动推导 ssoSettingsId
   *     5. Custom 场景：校验 corpId 已通过 createCustomOrg 注册
   *     6. 委托 OrgSyncAuthorizedService 创建任务（内含权限校验）
   *     7. 返回 taskId 供轮询
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
   * 推送组织架构同步
   * 
   * @remarks
   * 接收客户端推送的部门树和成员关系，创建异步同步任务。
   *     处理流程：
   *     1. 校验 platformType（仅允许 saml / oauth2 / custom）
   *     2. 校验数据量限制（departments + members <= 50000）
   *     3. 校验 syncMembers 与 platformType 的兼容性
   *     4. SAML/OAuth2 场景：解析或自动推导 ssoSettingsId
   *     5. Custom 场景：校验 corpId 已通过 createCustomOrg 注册
   *     6. 委托 OrgSyncAuthorizedService 创建任务（内含权限校验）
   *     7. 返回 taskId 供轮询
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
   * 通过此API可以对指定的主对象执行关注或取消关注操作。
   * 
   * @remarks
   * ## 请求说明
   * - **Precheck**:
   *   1. 添加关注时：系统会检查是否已对该主对象进行了关注以防止重复，并且会验证该主对象是否存在。
   *   2. 取消关注时：这是一个幂等操作，无论用户之前是否已经关注了该对象，都会返回 `success=true`。
   * - **安全性**：支持AK、BearerToken和APP三种认证方式。
   * - **请求频率限制**：每秒最多可发送100次请求。
   * - **响应日志**：开启响应日志记录功能。
   * - **租户相关性**：此API与特定租户相关联，默认使用调用方的租户ID。
   * - **操作类型**：属于写入型操作。
   * - **后端服务**：请求将被转发至内部服务进行处理，超时时间为3秒。
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
   * 通过此API可以对指定的主对象执行关注或取消关注操作。
   * 
   * @remarks
   * ## 请求说明
   * - **Precheck**:
   *   1. 添加关注时：系统会检查是否已对该主对象进行了关注以防止重复，并且会验证该主对象是否存在。
   *   2. 取消关注时：这是一个幂等操作，无论用户之前是否已经关注了该对象，都会返回 `success=true`。
   * - **安全性**：支持AK、BearerToken和APP三种认证方式。
   * - **请求频率限制**：每秒最多可发送100次请求。
   * - **响应日志**：开启响应日志记录功能。
   * - **租户相关性**：此API与特定租户相关联，默认使用调用方的租户ID。
   * - **操作类型**：属于写入型操作。
   * - **后端服务**：请求将被转发至内部服务进行处理，超时时间为3秒。
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
   * 更新数字员工使用权限授权模式
   * 
   * @remarks
   * 切换数字员工的使用权限授权模式。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.update_auth_mode 执行
   *     3. 前置校验：MANAGE 权限 + agent 存在性（由 AuthorizedService 层执行，先鉴权后暴露存在性）
   *     4. SPECIFIED_USERS：需显式授权才能使用
   *     5. ALL_USERS：所有用户无需授权即可使用（管理权限不受影响）
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
   * 更新数字员工使用权限授权模式
   * 
   * @remarks
   * 切换数字员工的使用权限授权模式。
   *     业务逻辑：
   *     1. 从 identity 构造 AuthContext
   *     2. 委托 AgentAuthorizationAuthorizedService.update_auth_mode 执行
   *     3. 前置校验：MANAGE 权限 + agent 存在性（由 AuthorizedService 层执行，先鉴权后暴露存在性）
   *     4. SPECIFIED_USERS：需显式授权才能使用
   *     5. ALL_USERS：所有用户无需授权即可使用（管理权限不受影响）
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
   * 更新会话
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
   * 更新会话
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
   * 用于更新用户的个人目录基础信息。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于更新指定用户的个人目录信息，包括名称、描述、父目录等。请求时需确保提供的 `directoryId` 对应的目录存在且属于当前用户。此外，如果更改了目录的 `name` 或 `path`，系统将自动递归更新所有子目录的路径以保持一致性。特别注意，在调整父目录时，必须保证新父目录的有效性（即非自身或不会导致循环引用）。
   * - **安全约束**：`tenant_id` 和 `user_id` 必须来自于鉴权身份。
   * - **权限要求**：执行此操作需要相应的 RAM 权限。
   * - **输入参数**：
   *   - `directoryId`：必填，表示要更新的目录唯一标识。
   *   - `name`：选填，设置新的目录名称。
   *   - `description`：选填，提供新的目录描述。
   *   - `parentId`：选填，指定新的父目录ID。
   *   - `path`：选填，当传入时会级联更新当前及所有子目录的路径。
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
   * 用于更新用户的个人目录基础信息。
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于更新指定用户的个人目录信息，包括名称、描述、父目录等。请求时需确保提供的 `directoryId` 对应的目录存在且属于当前用户。此外，如果更改了目录的 `name` 或 `path`，系统将自动递归更新所有子目录的路径以保持一致性。特别注意，在调整父目录时，必须保证新父目录的有效性（即非自身或不会导致循环引用）。
   * - **安全约束**：`tenant_id` 和 `user_id` 必须来自于鉴权身份。
   * - **权限要求**：执行此操作需要相应的 RAM 权限。
   * - **输入参数**：
   *   - `directoryId`：必填，表示要更新的目录唯一标识。
   *   - `name`：选填，设置新的目录名称。
   *   - `description`：选填，提供新的目录描述。
   *   - `parentId`：选填，指定新的父目录ID。
   *   - `path`：选填，当传入时会级联更新当前及所有子目录的路径。
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
   * 更新指定的企业知识库分类信息，包括名称、描述及父目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于修改企业知识库中的某个分类。
   * - 需要具有`DEVELOPMENT_KB_MANAGE`功能权限才能调用此API。
   * - `tenantId`参数为可选，若未提供，则默认使用调用者的租户ID。
   * - 必须提供待修改的`directoryId`，而`name`、`description`和`parentDirectoryId`均为可选项，不提供则表示这些字段保持不变。
   * - 当指定了新的`parentDirectoryId`时，系统会检查新父目录是否属于当前租户，并且不会导致循环引用问题。
   * - 安全性方面，本API支持多种认证方式（AK、BearerToken、APP），并启用了RAM权限控制与操作审计。
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
   * 更新指定的企业知识库分类信息，包括名称、描述及父目录。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于修改企业知识库中的某个分类。
   * - 需要具有`DEVELOPMENT_KB_MANAGE`功能权限才能调用此API。
   * - `tenantId`参数为可选，若未提供，则默认使用调用者的租户ID。
   * - 必须提供待修改的`directoryId`，而`name`、`description`和`parentDirectoryId`均为可选项，不提供则表示这些字段保持不变。
   * - 当指定了新的`parentDirectoryId`时，系统会检查新父目录是否属于当前租户，并且不会导致循环引用问题。
   * - 安全性方面，本API支持多种认证方式（AK、BearerToken、APP），并启用了RAM权限控制与操作审计。
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
   * 用于编辑企业自建知识库中的资源正文并触发重新解析。
   * 
   * @remarks
   * ## 请求说明
   * 本接口允许用户更新指定的企业知识库数据源的正文内容，并可选择是否同步等待解析完成。通过设置`forceSync`参数，可以控制解析过程是同步还是异步执行，默认为异步处理。
   * - **注意**：当`content`字段为空字符串时，表示清空原有内容。
   * - **权限要求**：调用此接口需要具备相应的RAM操作权限（`winnexo:UpdateKnowledgeBaseSourceContent`）。
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
   * 用于编辑企业自建知识库中的资源正文并触发重新解析。
   * 
   * @remarks
   * ## 请求说明
   * 本接口允许用户更新指定的企业知识库数据源的正文内容，并可选择是否同步等待解析完成。通过设置`forceSync`参数，可以控制解析过程是同步还是异步执行，默认为异步处理。
   * - **注意**：当`content`字段为空字符串时，表示清空原有内容。
   * - **权限要求**：调用此接口需要具备相应的RAM操作权限（`winnexo:UpdateKnowledgeBaseSourceContent`）。
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
   * 更新指定企业知识库数据源的资源标签。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于更新企业知识库中特定数据源的标签。
   * - 需要具备知识库管理权限才能调用此接口。
   * - `sourceTags` 参数接受 JSON 字符串列表形式，例如 `["tagA", "tagB"]`；若传入 `null` 则表示清空所有现有标签。
   * - 更新操作仅影响 `sourceTags` 和 `gmt_modified` 字段，并不会触发 `process_source` 流程。
   * - 如果指定的数据源不存在，则会抛出 `ERR.Robject.Source.NotFound` 错误。
   * - 接口支持通过 AK、BearerToken 或 APP 方式进行身份验证。
   * - 调用时需确保 `tenant_id` 和 `user_id` 来自有效的鉴权身份信息。
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
   * 更新指定企业知识库数据源的资源标签。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于更新企业知识库中特定数据源的标签。
   * - 需要具备知识库管理权限才能调用此接口。
   * - `sourceTags` 参数接受 JSON 字符串列表形式，例如 `["tagA", "tagB"]`；若传入 `null` 则表示清空所有现有标签。
   * - 更新操作仅影响 `sourceTags` 和 `gmt_modified` 字段，并不会触发 `process_source` 流程。
   * - 如果指定的数据源不存在，则会抛出 `ERR.Robject.Source.NotFound` 错误。
   * - 接口支持通过 AK、BearerToken 或 APP 方式进行身份验证。
   * - 调用时需确保 `tenant_id` 和 `user_id` 来自有效的鉴权身份信息。
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
   * 更新定时任务
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
   * 更新定时任务
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
   * 更新租户内可编辑数据源的正文并触发重新解析。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于更新指定租户内的数据源内容，并根据需要触发同步或异步的数据源重新解析。
   * - `tenant_id` 和 `user_id` 仅用于鉴权，不参与实际业务逻辑处理。
   * - 当提供的正文为空字符串时，系统将按照现有服务契约执行操作。
   * - 如果指定的数据源不存在，则返回标准的NotFound错误；其他异常情况则由全局异常链处理。
   * - 可通过设置`forceSync`参数来决定是否等待解析过程完成（默认为异步入队）。
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
   * 更新租户内可编辑数据源的正文并触发重新解析。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于更新指定租户内的数据源内容，并根据需要触发同步或异步的数据源重新解析。
   * - `tenant_id` 和 `user_id` 仅用于鉴权，不参与实际业务逻辑处理。
   * - 当提供的正文为空字符串时，系统将按照现有服务契约执行操作。
   * - 如果指定的数据源不存在，则返回标准的NotFound错误；其他异常情况则由全局异常链处理。
   * - 可通过设置`forceSync`参数来决定是否等待解析过程完成（默认为异步入队）。
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
   * 用于更新指定的企业知识库目录信息。
   * 
   * @remarks
   * ## 请求说明
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
   * 用于更新指定的企业知识库目录信息。
   * 
   * @remarks
   * ## 请求说明
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
   * 修改用户信息（含启停用）
   * 
   * @remarks
   * OpenAPI 修改用户信息。
   *     业务编排：
   *     1. 解析 roleCodes → role_ids
   *     2. 若 isActive 有变更，先执行状态切换（含最后超管保护）
   *     3. 调用 update_tenant_member 修改其他字段（displayName / roleCodes / userGroupIds）
   *     4. 全部成功返回 HTTP 200
   *     执行顺序说明：
   *     - isActive 状态变更先于其他字段写入。两步不在同一事务中。
   *     - 校验失败（如最后超管保护）→ 抛出异常，后续步骤不执行。
   *     - 若 isActive 变更已落库但后续步骤异常，isActive 不会回滚。
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
   * 修改用户信息（含启停用）
   * 
   * @remarks
   * OpenAPI 修改用户信息。
   *     业务编排：
   *     1. 解析 roleCodes → role_ids
   *     2. 若 isActive 有变更，先执行状态切换（含最后超管保护）
   *     3. 调用 update_tenant_member 修改其他字段（displayName / roleCodes / userGroupIds）
   *     4. 全部成功返回 HTTP 200
   *     执行顺序说明：
   *     - isActive 状态变更先于其他字段写入。两步不在同一事务中。
   *     - 校验失败（如最后超管保护）→ 抛出异常，后续步骤不执行。
   *     - 若 isActive 变更已落库但后续步骤异常，isActive 不会回滚。
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
   * 支持部分字段更新当前用户信息，并返回完整用户信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该API允许调用者更新指定用户的部分或全部可选字段，未提供的字段将保持原有值。
   * - 支持通过`tenantId`参数指定租户ID；若省略，则默认使用调用方的默认租户。
   * - 更新成功后，响应体中会包含完整的用户信息对象。
   * - 此接口要求认证，支持AK、BearerToken和APP三种安全方案。
   * - 接口消费类型为JSON格式，且仅在HTTPS协议下可用。
   * - 特别注意：`profileRoleInfo`字段仅当用户角色设置为Others时有效，用于描述用户的具体角色信息。
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
   * 支持部分字段更新当前用户信息，并返回完整用户信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该API允许调用者更新指定用户的部分或全部可选字段，未提供的字段将保持原有值。
   * - 支持通过`tenantId`参数指定租户ID；若省略，则默认使用调用方的默认租户。
   * - 更新成功后，响应体中会包含完整的用户信息对象。
   * - 此接口要求认证，支持AK、BearerToken和APP三种安全方案。
   * - 接口消费类型为JSON格式，且仅在HTTPS协议下可用。
   * - 特别注意：`profileRoleInfo`字段仅当用户角色设置为Others时有效，用于描述用户的具体角色信息。
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
   * 会话上传本地文件
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于上传会话临时文件，采用**文件中转上传**模式（`fileTransfer`）：文件二进制不经本 API 的请求体传输，而是先落到 OSS，再把 OSS 地址通过 `FileUrl` 入参交给后端；后端从该地址取回字节并写入自己的 OSS，创建会话临时文件记录。
   * ### 调用方式
   * - **推荐**：使用 SDK 生成的 `UploadChatFileAdvance` 方法，传入本地文件流，SDK 自动完成中转上传并回填 `FileUrl`。
   * - **直传**：自行将文件上传到可被服务端访问的 OSS 地址，然后直接调用本 API 并传入 `FileUrl`。
   * ### 入参
   * - **FileUrl**：必填，文件的 OSS 地址。使用 Advance 方法时由 SDK 自动回填，无需手动赋值。
   * - **FileName**：必填，原始文件名（含后缀，如 `report.pdf`）。中转生成的 OSS 地址不携带原始文件名，后端据此确定文件后缀与展示名，因此必须显式传入。
   * - **ContentType**：可选，文件 MIME 类型；不传时按 `application/octet-stream` 处理。
   * - **OperatingObjectName**：可选，Agent 命名空间标识，决定文件入库路径。
   * ### 出参
   * 返回 OSS 对象路径 `objectName`、入库地址 `fileUrl`、公开访问地址 `filePublicUrl`（有效期 1 小时）、文件记录 ID `fileRecordId` 等；`uploadSignatureUrl` 在本模式下恒为空。
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
   * 会话上传本地文件
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于上传会话临时文件，采用**文件中转上传**模式（`fileTransfer`）：文件二进制不经本 API 的请求体传输，而是先落到 OSS，再把 OSS 地址通过 `FileUrl` 入参交给后端；后端从该地址取回字节并写入自己的 OSS，创建会话临时文件记录。
   * ### 调用方式
   * - **推荐**：使用 SDK 生成的 `UploadChatFileAdvance` 方法，传入本地文件流，SDK 自动完成中转上传并回填 `FileUrl`。
   * - **直传**：自行将文件上传到可被服务端访问的 OSS 地址，然后直接调用本 API 并传入 `FileUrl`。
   * ### 入参
   * - **FileUrl**：必填，文件的 OSS 地址。使用 Advance 方法时由 SDK 自动回填，无需手动赋值。
   * - **FileName**：必填，原始文件名（含后缀，如 `report.pdf`）。中转生成的 OSS 地址不携带原始文件名，后端据此确定文件后缀与展示名，因此必须显式传入。
   * - **ContentType**：可选，文件 MIME 类型；不传时按 `application/octet-stream` 处理。
   * - **OperatingObjectName**：可选，Agent 命名空间标识，决定文件入库路径。
   * ### 出参
   * 返回 OSS 对象路径 `objectName`、入库地址 `fileUrl`、公开访问地址 `filePublicUrl`（有效期 1 小时）、文件记录 ID `fileRecordId` 等；`uploadSignatureUrl` 在本模式下恒为空。
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
