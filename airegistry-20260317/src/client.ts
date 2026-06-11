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
    this._endpoint = this.getEndpoint("airegistry", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建 AI Registry 命名空间
   * 
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.scanPolicy)) {
      query["ScanPolicy"] = request.scanPolicy;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2026-03-17",
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
   * 创建 AI Registry 命名空间
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * 创建 Prompt
   * 
   * @param request - CreatePromptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePromptResponse
   */
  async createPromptWithOptions(request: $_model.CreatePromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePromptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizTags)) {
      query["BizTags"] = request.bizTags;
    }

    if (!$dara.isNull(request.commitMsg)) {
      query["CommitMsg"] = request.commitMsg;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    if (!$dara.isNull(request.variables)) {
      query["Variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrompt",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePromptResponse>(await this.callApi(params, req, runtime), new $_model.CreatePromptResponse({}));
  }

  /**
   * 创建 Prompt
   * 
   * @param request - CreatePromptRequest
   * @returns CreatePromptResponse
   */
  async createPrompt(request: $_model.CreatePromptRequest): Promise<$_model.CreatePromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPromptWithOptions(request, runtime);
  }

  /**
   * 创建 Prompt 草稿版本。Prompt 必须已存在，且当前没有正在编辑的草稿。只对草稿版本生效。
   * 
   * @param request - CreatePromptVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePromptVersionResponse
   */
  async createPromptVersionWithOptions(request: $_model.CreatePromptVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePromptVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basedOnVersion)) {
      query["BasedOnVersion"] = request.basedOnVersion;
    }

    if (!$dara.isNull(request.commitMsg)) {
      query["CommitMsg"] = request.commitMsg;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    if (!$dara.isNull(request.variables)) {
      query["Variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePromptVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePromptVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreatePromptVersionResponse({}));
  }

  /**
   * 创建 Prompt 草稿版本。Prompt 必须已存在，且当前没有正在编辑的草稿。只对草稿版本生效。
   * 
   * @param request - CreatePromptVersionRequest
   * @returns CreatePromptVersionResponse
   */
  async createPromptVersion(request: $_model.CreatePromptVersionRequest): Promise<$_model.CreatePromptVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPromptVersionWithOptions(request, runtime);
  }

  /**
   * 创建 Skill 草稿版本
   * 
   * @param request - CreateSkillDraftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillDraftResponse
   */
  async createSkillDraftWithOptions(request: $_model.CreateSkillDraftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillDraftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.basedOnVersion)) {
      query["BasedOnVersion"] = request.basedOnVersion;
    }

    if (!$dara.isNull(request.commitMsg)) {
      query["CommitMsg"] = request.commitMsg;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillCard)) {
      query["SkillCard"] = request.skillCard;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkillDraft",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillDraftResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillDraftResponse({}));
  }

  /**
   * 创建 Skill 草稿版本
   * 
   * @param request - CreateSkillDraftRequest
   * @returns CreateSkillDraftResponse
   */
  async createSkillDraft(request: $_model.CreateSkillDraftRequest): Promise<$_model.CreateSkillDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillDraftWithOptions(request, runtime);
  }

  /**
   * 删除命名空间
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2026-03-17",
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
   * 删除命名空间
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * 删除 Prompt
   * 
   * @param request - DeletePromptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePromptResponse
   */
  async deletePromptWithOptions(request: $_model.DeletePromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePromptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrompt",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePromptResponse>(await this.callApi(params, req, runtime), new $_model.DeletePromptResponse({}));
  }

  /**
   * 删除 Prompt
   * 
   * @param request - DeletePromptRequest
   * @returns DeletePromptResponse
   */
  async deletePrompt(request: $_model.DeletePromptRequest): Promise<$_model.DeletePromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePromptWithOptions(request, runtime);
  }

  /**
   * 删除 Skill
   * 
   * @param request - DeleteSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillResponse
   */
  async deleteSkillWithOptions(request: $_model.DeleteSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkill",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillResponse({}));
  }

  /**
   * 删除 Skill
   * 
   * @param request - DeleteSkillRequest
   * @returns DeleteSkillResponse
   */
  async deleteSkill(request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillWithOptions(request, runtime);
  }

  /**
   * 通过 OSS 下载 Skill 版本 - 返回 OSS 下载 URL
   * 
   * @param request - DownloadSkillVersionViaOssRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadSkillVersionViaOssResponse
   */
  async downloadSkillVersionViaOssWithOptions(request: $_model.DownloadSkillVersionViaOssRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadSkillVersionViaOssResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadSkillVersionViaOss",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadSkillVersionViaOssResponse>(await this.callApi(params, req, runtime), new $_model.DownloadSkillVersionViaOssResponse({}));
  }

  /**
   * 通过 OSS 下载 Skill 版本 - 返回 OSS 下载 URL
   * 
   * @param request - DownloadSkillVersionViaOssRequest
   * @returns DownloadSkillVersionViaOssResponse
   */
  async downloadSkillVersionViaOss(request: $_model.DownloadSkillVersionViaOssRequest): Promise<$_model.DownloadSkillVersionViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadSkillVersionViaOssWithOptions(request, runtime);
  }

  /**
   * 强制发布版本
   * 
   * @param request - ForcePublishSkillVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForcePublishSkillVersionResponse
   */
  async forcePublishSkillVersionWithOptions(request: $_model.ForcePublishSkillVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ForcePublishSkillVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    if (!$dara.isNull(request.updateLatestLabel)) {
      query["UpdateLatestLabel"] = request.updateLatestLabel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ForcePublishSkillVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForcePublishSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.ForcePublishSkillVersionResponse({}));
  }

  /**
   * 强制发布版本
   * 
   * @param request - ForcePublishSkillVersionRequest
   * @returns ForcePublishSkillVersionResponse
   */
  async forcePublishSkillVersion(request: $_model.ForcePublishSkillVersionRequest): Promise<$_model.ForcePublishSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.forcePublishSkillVersionWithOptions(request, runtime);
  }

  /**
   * 获取命名空间详细信息
   * 
   * @param request - GetNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNamespaceResponse
   */
  async getNamespaceWithOptions(request: $_model.GetNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNamespace",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetNamespaceResponse({}));
  }

  /**
   * 获取命名空间详细信息
   * 
   * @param request - GetNamespaceRequest
   * @returns GetNamespaceResponse
   */
  async getNamespace(request: $_model.GetNamespaceRequest): Promise<$_model.GetNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNamespaceWithOptions(request, runtime);
  }

  /**
   * 获取 Prompt 详情信息
   * 
   * @param request - GetPromptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptResponse
   */
  async getPromptWithOptions(request: $_model.GetPromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPromptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrompt",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPromptResponse>(await this.callApi(params, req, runtime), new $_model.GetPromptResponse({}));
  }

  /**
   * 获取 Prompt 详情信息
   * 
   * @param request - GetPromptRequest
   * @returns GetPromptResponse
   */
  async getPrompt(request: $_model.GetPromptRequest): Promise<$_model.GetPromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPromptWithOptions(request, runtime);
  }

  /**
   * 获取 Prompt 某个版本的信息
   * 
   * @param request - GetPromptVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptVersionResponse
   */
  async getPromptVersionWithOptions(request: $_model.GetPromptVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPromptVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    if (!$dara.isNull(request.promptVersion)) {
      query["PromptVersion"] = request.promptVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPromptVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPromptVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetPromptVersionResponse({}));
  }

  /**
   * 获取 Prompt 某个版本的信息
   * 
   * @param request - GetPromptVersionRequest
   * @returns GetPromptVersionResponse
   */
  async getPromptVersion(request: $_model.GetPromptVersionRequest): Promise<$_model.GetPromptVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPromptVersionWithOptions(request, runtime);
  }

  /**
   * 获取 Skill 详情
   * 
   * @param request - GetSkillDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillDetailResponse
   */
  async getSkillDetailWithOptions(request: $_model.GetSkillDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillDetail",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillDetailResponse({}));
  }

  /**
   * 获取 Skill 详情
   * 
   * @param request - GetSkillDetailRequest
   * @returns GetSkillDetailResponse
   */
  async getSkillDetail(request: $_model.GetSkillDetailRequest): Promise<$_model.GetSkillDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillDetailWithOptions(request, runtime);
  }

  /**
   * 获取 Skill 导入用 OSS 上传 URL。客户端使用返回的 uploadUrl 执行 PUT 上传后，
   * 
   * @param request - GetSkillImportFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillImportFileUrlResponse
   */
  async getSkillImportFileUrlWithOptions(request: $_model.GetSkillImportFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillImportFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillImportFileUrl",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillImportFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillImportFileUrlResponse({}));
  }

  /**
   * 获取 Skill 导入用 OSS 上传 URL。客户端使用返回的 uploadUrl 执行 PUT 上传后，
   * 
   * @param request - GetSkillImportFileUrlRequest
   * @returns GetSkillImportFileUrlResponse
   */
  async getSkillImportFileUrl(request: $_model.GetSkillImportFileUrlRequest): Promise<$_model.GetSkillImportFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillImportFileUrlWithOptions(request, runtime);
  }

  /**
   * 获取指定版本详情
   * 
   * @param request - GetSkillVersionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillVersionDetailResponse
   */
  async getSkillVersionDetailWithOptions(request: $_model.GetSkillVersionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillVersionDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkillVersionDetail",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillVersionDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillVersionDetailResponse({}));
  }

  /**
   * 获取指定版本详情
   * 
   * @param request - GetSkillVersionDetailRequest
   * @returns GetSkillVersionDetailResponse
   */
  async getSkillVersionDetail(request: $_model.GetSkillVersionDetailRequest): Promise<$_model.GetSkillVersionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillVersionDetailWithOptions(request, runtime);
  }

  /**
   * 获取命名空间列表
   * 
   * @param request - ListNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacesResponse
   */
  async listNamespacesWithOptions(request: $_model.ListNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespaces",
      version: "2026-03-17",
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
   * 获取命名空间列表
   * 
   * @param request - ListNamespacesRequest
   * @returns ListNamespacesResponse
   */
  async listNamespaces(request: $_model.ListNamespacesRequest): Promise<$_model.ListNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * 列出Prompt版本列表
   * 
   * @param request - ListPromptVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromptVersionsResponse
   */
  async listPromptVersionsWithOptions(request: $_model.ListPromptVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromptVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPromptVersions",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromptVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPromptVersionsResponse({}));
  }

  /**
   * 列出Prompt版本列表
   * 
   * @param request - ListPromptVersionsRequest
   * @returns ListPromptVersionsResponse
   */
  async listPromptVersions(request: $_model.ListPromptVersionsRequest): Promise<$_model.ListPromptVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPromptVersionsWithOptions(request, runtime);
  }

  /**
   * 获取Prompt列表
   * 
   * @param request - ListPromptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPromptsResponse
   */
  async listPromptsWithOptions(request: $_model.ListPromptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPromptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizTags)) {
      query["BizTags"] = request.bizTags;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrompts",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPromptsResponse>(await this.callApi(params, req, runtime), new $_model.ListPromptsResponse({}));
  }

  /**
   * 获取Prompt列表
   * 
   * @param request - ListPromptsRequest
   * @returns ListPromptsResponse
   */
  async listPrompts(request: $_model.ListPromptsRequest): Promise<$_model.ListPromptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPromptsWithOptions(request, runtime);
  }

  /**
   * 列出 Skills
   * 
   * @param request - ListSkillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillsResponse
   */
  async listSkillsWithOptions(request: $_model.ListSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkills",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillsResponse({}));
  }

  /**
   * 列出 Skills
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillsWithOptions(request, runtime);
  }

  /**
   * 下线版本
   * 
   * @param request - OfflineSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineSkillResponse
   */
  async offlineSkillWithOptions(request: $_model.OfflineSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineSkill",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineSkillResponse>(await this.callApi(params, req, runtime), new $_model.OfflineSkillResponse({}));
  }

  /**
   * 下线版本
   * 
   * @param request - OfflineSkillRequest
   * @returns OfflineSkillResponse
   */
  async offlineSkill(request: $_model.OfflineSkillRequest): Promise<$_model.OfflineSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineSkillWithOptions(request, runtime);
  }

  /**
   * 上线 Skill
   * 
   * @param request - OnlineSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineSkillResponse
   */
  async onlineSkillWithOptions(request: $_model.OnlineSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineSkill",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineSkillResponse>(await this.callApi(params, req, runtime), new $_model.OnlineSkillResponse({}));
  }

  /**
   * 上线 Skill
   * 
   * @param request - OnlineSkillRequest
   * @returns OnlineSkillResponse
   */
  async onlineSkill(request: $_model.OnlineSkillRequest): Promise<$_model.OnlineSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onlineSkillWithOptions(request, runtime);
  }

  /**
   * 发布版本
   * 
   * @param request - PublishSkillVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishSkillVersionResponse
   */
  async publishSkillVersionWithOptions(request: $_model.PublishSkillVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishSkillVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    if (!$dara.isNull(request.updateLatestLabel)) {
      query["UpdateLatestLabel"] = request.updateLatestLabel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishSkillVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishSkillVersionResponse({}));
  }

  /**
   * 发布版本
   * 
   * @param request - PublishSkillVersionRequest
   * @returns PublishSkillVersionResponse
   */
  async publishSkillVersion(request: $_model.PublishSkillVersionRequest): Promise<$_model.PublishSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishSkillVersionWithOptions(request, runtime);
  }

  /**
   * 提交 Prompt 版本, 将 Prompt 的草稿版本转化为正式版本
   * 
   * @param request - SubmitPromptVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPromptVersionResponse
   */
  async submitPromptVersionWithOptions(request: $_model.SubmitPromptVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitPromptVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    if (!$dara.isNull(request.promptVersion)) {
      query["PromptVersion"] = request.promptVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPromptVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitPromptVersionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitPromptVersionResponse({}));
  }

  /**
   * 提交 Prompt 版本, 将 Prompt 的草稿版本转化为正式版本
   * 
   * @param request - SubmitPromptVersionRequest
   * @returns SubmitPromptVersionResponse
   */
  async submitPromptVersion(request: $_model.SubmitPromptVersionRequest): Promise<$_model.SubmitPromptVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPromptVersionWithOptions(request, runtime);
  }

  /**
   * 提交 Skill Draft 审核
   * 
   * @param request - SubmitSkillVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSkillVersionResponse
   */
  async submitSkillVersionWithOptions(request: $_model.SubmitSkillVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSkillVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSkillVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSkillVersionResponse({}));
  }

  /**
   * 提交 Skill Draft 审核
   * 
   * @param request - SubmitSkillVersionRequest
   * @returns SubmitSkillVersionResponse
   */
  async submitSkillVersion(request: $_model.SubmitSkillVersionRequest): Promise<$_model.SubmitSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSkillVersionWithOptions(request, runtime);
  }

  /**
   * 更新命名空间信息
   * 
   * @param request - UpdateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: $_model.UpdateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.scanPolicy)) {
      query["ScanPolicy"] = request.scanPolicy;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespace",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceResponse({}));
  }

  /**
   * 更新命名空间信息
   * 
   * @param request - UpdateNamespaceRequest
   * @returns UpdateNamespaceResponse
   */
  async updateNamespace(request: $_model.UpdateNamespaceRequest): Promise<$_model.UpdateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  /**
   * 更新 Prompt 元数据，支持同时更新 description、bizTags、labels。
   * 
   * @param tmpReq - UpdatePromptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePromptResponse
   */
  async updatePromptWithOptions(tmpReq: $_model.UpdatePromptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePromptResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePromptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizTags)) {
      request.bizTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizTags, "BizTags", "json");
    }

    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizTagsShrink)) {
      query["BizTags"] = request.bizTagsShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrompt",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePromptResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePromptResponse({}));
  }

  /**
   * 更新 Prompt 元数据，支持同时更新 description、bizTags、labels。
   * 
   * @param request - UpdatePromptRequest
   * @returns UpdatePromptResponse
   */
  async updatePrompt(request: $_model.UpdatePromptRequest): Promise<$_model.UpdatePromptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePromptWithOptions(request, runtime);
  }

  /**
   * 更新 Prompt 草稿版本内容。只对草稿版本生效，已发布的版本不可修改。
   * 
   * @param request - UpdatePromptVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePromptVersionResponse
   */
  async updatePromptVersionWithOptions(request: $_model.UpdatePromptVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePromptVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commitMsg)) {
      query["CommitMsg"] = request.commitMsg;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.promptKey)) {
      query["PromptKey"] = request.promptKey;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    if (!$dara.isNull(request.variables)) {
      query["Variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePromptVersion",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePromptVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePromptVersionResponse({}));
  }

  /**
   * 更新 Prompt 草稿版本内容。只对草稿版本生效，已发布的版本不可修改。
   * 
   * @param request - UpdatePromptVersionRequest
   * @returns UpdatePromptVersionResponse
   */
  async updatePromptVersion(request: $_model.UpdatePromptVersionRequest): Promise<$_model.UpdatePromptVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePromptVersionWithOptions(request, runtime);
  }

  /**
   * 更新业务标签
   * 
   * @param request - UpdateSkillBizTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillBizTagsResponse
   */
  async updateSkillBizTagsWithOptions(request: $_model.UpdateSkillBizTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillBizTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizTags)) {
      query["BizTags"] = request.bizTags;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillBizTags",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillBizTagsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillBizTagsResponse({}));
  }

  /**
   * 更新业务标签
   * 
   * @param request - UpdateSkillBizTagsRequest
   * @returns UpdateSkillBizTagsResponse
   */
  async updateSkillBizTags(request: $_model.UpdateSkillBizTagsRequest): Promise<$_model.UpdateSkillBizTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillBizTagsWithOptions(request, runtime);
  }

  /**
   * 更新 Draft
   * 
   * @param request - UpdateSkillDraftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillDraftResponse
   */
  async updateSkillDraftWithOptions(request: $_model.UpdateSkillDraftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillDraftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commitMsg)) {
      query["CommitMsg"] = request.commitMsg;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillCard)) {
      query["SkillCard"] = request.skillCard;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillDraft",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillDraftResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillDraftResponse({}));
  }

  /**
   * 更新 Draft
   * 
   * @param request - UpdateSkillDraftRequest
   * @returns UpdateSkillDraftResponse
   */
  async updateSkillDraft(request: $_model.UpdateSkillDraftRequest): Promise<$_model.UpdateSkillDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillDraftWithOptions(request, runtime);
  }

  /**
   * 更新版本标签
   * 
   * @param request - UpdateSkillLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillLabelsResponse
   */
  async updateSkillLabelsWithOptions(request: $_model.UpdateSkillLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillLabelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillLabels",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillLabelsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillLabelsResponse({}));
  }

  /**
   * 更新版本标签
   * 
   * @param request - UpdateSkillLabelsRequest
   * @returns UpdateSkillLabelsResponse
   */
  async updateSkillLabels(request: $_model.UpdateSkillLabelsRequest): Promise<$_model.UpdateSkillLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillLabelsWithOptions(request, runtime);
  }

  /**
   * 更新可见性
   * 
   * @param request - UpdateSkillScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillScopeResponse
   */
  async updateSkillScopeWithOptions(request: $_model.UpdateSkillScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.skillName)) {
      query["SkillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkillScope",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillScopeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillScopeResponse({}));
  }

  /**
   * 更新可见性
   * 
   * @param request - UpdateSkillScopeRequest
   * @returns UpdateSkillScopeResponse
   */
  async updateSkillScope(request: $_model.UpdateSkillScopeRequest): Promise<$_model.UpdateSkillScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillScopeWithOptions(request, runtime);
  }

  /**
   * 通过 OSS 上传 Skill (ZIP) - 从 OSS 拉取文件内容后上传到 Nacos
   * 
   * @param request - UploadSkillViaOssRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadSkillViaOssResponse
   */
  async uploadSkillViaOssWithOptions(request: $_model.UploadSkillViaOssRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadSkillViaOssResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commitMsg)) {
      query["CommitMsg"] = request.commitMsg;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadSkillViaOss",
      version: "2026-03-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadSkillViaOssResponse>(await this.callApi(params, req, runtime), new $_model.UploadSkillViaOssResponse({}));
  }

  /**
   * 通过 OSS 上传 Skill (ZIP) - 从 OSS 拉取文件内容后上传到 Nacos
   * 
   * @param request - UploadSkillViaOssRequest
   * @returns UploadSkillViaOssResponse
   */
  async uploadSkillViaOss(request: $_model.UploadSkillViaOssRequest): Promise<$_model.UploadSkillViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadSkillViaOssWithOptions(request, runtime);
  }

}
