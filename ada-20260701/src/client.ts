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
    this._endpoint = this.getEndpoint("ada", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an Agent.
   * 
   * @remarks
   * - `Name` is the unique identifier of the Agent within the current tenant. It can contain only letters, digits, underscores, and hyphens, and must be 1 to 128 characters in length. The name cannot be modified after creation.
   * - Each Agent can be associated with only one knowledge base.
   * 
   * @param request - CreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResponse
   */
  async createAgentWithOptions(request: $_model.CreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.knowledgeBases)) {
      body["KnowledgeBases"] = request.knowledgeBases;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.skills)) {
      body["Skills"] = request.skills;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      body["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.tools)) {
      body["Tools"] = request.tools;
    }

    if (!$dara.isNull(request.visibility)) {
      body["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgent",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentResponse({}));
  }

  /**
   * Creates an Agent.
   * 
   * @remarks
   * - `Name` is the unique identifier of the Agent within the current tenant. It can contain only letters, digits, underscores, and hyphens, and must be 1 to 128 characters in length. The name cannot be modified after creation.
   * - Each Agent can be associated with only one knowledge base.
   * 
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * Creates a Skill.
   * 
   * @remarks
   * - Creation rules:
   *   - `Name` must be unique within the current tenant and cannot share a name with an official Skill.
   *   - `Description` and `Metadata` are required. `Metadata` must contain exactly one valid content source. Different sources cannot be mixed.
   *   - After the Skill is created, you can modify it by calling `UpdateSkill`.
   * - Content sources:
   *   - `skillMd`: Directly provide the Markdown body without a YAML header. Specify the name and description by using `Name` and `Description`.
   *   - `transitId`: Upload and confirm a ZIP file through Transit. Call the operations in the following order:
   *     1. Call `CreateTransitUploadPolicy` with `FileShowName` to obtain `TransitId`, `FilePath`, and `PolicyInfo`.
   *     2. Upload the ZIP file to object storage by using `PolicyInfo` and `FilePath`.
   *     3. Call `ConfirmTransitUpload` with `TransitId`. Proceed with creation only when the response returns `Confirmed=true`.
   *     4. Call `CreateSkill` and pass the confirmed `TransitId` in `Metadata.transitId`.
   *   - `bundleUrl`: Provide a public HTTPS direct link to a ZIP file. The platform downloads the file and saves it as an Artifact. The original URL is not persisted or returned in responses.
   * 
   * @param request - CreateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillResponse
   */
  async createSkillWithOptions(request: $_model.CreateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.visibility)) {
      body["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSkill",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSkillResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillResponse({}));
  }

  /**
   * Creates a Skill.
   * 
   * @remarks
   * - Creation rules:
   *   - `Name` must be unique within the current tenant and cannot share a name with an official Skill.
   *   - `Description` and `Metadata` are required. `Metadata` must contain exactly one valid content source. Different sources cannot be mixed.
   *   - After the Skill is created, you can modify it by calling `UpdateSkill`.
   * - Content sources:
   *   - `skillMd`: Directly provide the Markdown body without a YAML header. Specify the name and description by using `Name` and `Description`.
   *   - `transitId`: Upload and confirm a ZIP file through Transit. Call the operations in the following order:
   *     1. Call `CreateTransitUploadPolicy` with `FileShowName` to obtain `TransitId`, `FilePath`, and `PolicyInfo`.
   *     2. Upload the ZIP file to object storage by using `PolicyInfo` and `FilePath`.
   *     3. Call `ConfirmTransitUpload` with `TransitId`. Proceed with creation only when the response returns `Confirmed=true`.
   *     4. Call `CreateSkill` and pass the confirmed `TransitId` in `Metadata.transitId`.
   *   - `bundleUrl`: Provide a public HTTPS direct link to a ZIP file. The platform downloads the file and saves it as an Artifact. The original URL is not persisted or returned in responses.
   * 
   * @param request - CreateSkillRequest
   * @returns CreateSkillResponse
   */
  async createSkill(request: $_model.CreateSkillRequest): Promise<$_model.CreateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillWithOptions(request, runtime);
  }

  /**
   * Generates a credential for direct file upload. The caller can use the returned upload policy to upload a file directly to object storage.
   * 
   * @remarks
   * - `Network` can be set to `public` or `internal` to generate a public or same-region internal upload address. Default value: `public`.
   * - The maximum size of a single file is 50 MiB.
   * - `PolicyInfo` contains short-term upload authorization information intended only for the current file upload. Do not log it, persist it long-term, or forward it to other users.
   * - `ExpireMs` controls the validity period of the upload policy and the Transit record, in milliseconds. It is not an absolute timestamp. The default and maximum value is `604800000` (7 days), and the minimum value is `1000` (1 second). The validity period is rounded down to the nearest whole second. For example, 1500 milliseconds takes effect as 1 second.
   * - Call `GetTransitMeta` and read `ExpireAt` to obtain the expiration time of the Transit record. Confirming the upload or querying the record does not extend the validity period.
   * 
   * @param request - CreateTransitUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTransitUploadPolicyResponse
   */
  async createTransitUploadPolicyWithOptions(request: $_model.CreateTransitUploadPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTransitUploadPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireMs)) {
      body["ExpireMs"] = request.expireMs;
    }

    if (!$dara.isNull(request.fileShowName)) {
      body["FileShowName"] = request.fileShowName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.pathPrefix)) {
      body["PathPrefix"] = request.pathPrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTransitUploadPolicy",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTransitUploadPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateTransitUploadPolicyResponse({}));
  }

  /**
   * Generates a credential for direct file upload. The caller can use the returned upload policy to upload a file directly to object storage.
   * 
   * @remarks
   * - `Network` can be set to `public` or `internal` to generate a public or same-region internal upload address. Default value: `public`.
   * - The maximum size of a single file is 50 MiB.
   * - `PolicyInfo` contains short-term upload authorization information intended only for the current file upload. Do not log it, persist it long-term, or forward it to other users.
   * - `ExpireMs` controls the validity period of the upload policy and the Transit record, in milliseconds. It is not an absolute timestamp. The default and maximum value is `604800000` (7 days), and the minimum value is `1000` (1 second). The validity period is rounded down to the nearest whole second. For example, 1500 milliseconds takes effect as 1 second.
   * - Call `GetTransitMeta` and read `ExpireAt` to obtain the expiration time of the Transit record. Confirming the upload or querying the record does not extend the validity period.
   * 
   * @param request - CreateTransitUploadPolicyRequest
   * @returns CreateTransitUploadPolicyResponse
   */
  async createTransitUploadPolicy(request: $_model.CreateTransitUploadPolicyRequest): Promise<$_model.CreateTransitUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitUploadPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a specified Agent.
   * 
   * @remarks
   * - Creators can delete Agents that they created.
   * - After deletion, the Agent can no longer be queried, updated, or run.
   * 
   * @param request - DeleteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentResponse
   */
  async deleteAgentWithOptions(request: $_model.DeleteAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgent",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentResponse({}));
  }

  /**
   * Deletes a specified Agent.
   * 
   * @remarks
   * - Creators can delete Agents that they created.
   * - After deletion, the Agent can no longer be queried, updated, or run.
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * Soft-deletes a Skill that the current caller has permission to modify.
   * 
   * @remarks
   * - Deletion permissions:
   *   - You can only delete custom Skills that the current caller has permission to modify.
   *   - The caller must be the Skill creator or the tenant root account that has permission to manage the tenant-level Skill. Official Skills cannot be deleted.
   * - Deletion results:
   *   - Deletion uses soft delete. After successful deletion, `GetSkill` and `ListSkills` no longer return the Skill, and you can create a new Skill with the same name.
   *   - Recovery is not supported. You cannot delete a Skill that has already been deleted or does not exist.
   * 
   * @param request - DeleteSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillResponse
   */
  async deleteSkillWithOptions(request: $_model.DeleteSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSkill",
      version: "2026-07-01",
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
   * Soft-deletes a Skill that the current caller has permission to modify.
   * 
   * @remarks
   * - Deletion permissions:
   *   - You can only delete custom Skills that the current caller has permission to modify.
   *   - The caller must be the Skill creator or the tenant root account that has permission to manage the tenant-level Skill. Official Skills cannot be deleted.
   * - Deletion results:
   *   - Deletion uses soft delete. After successful deletion, `GetSkill` and `ListSkills` no longer return the Skill, and you can create a new Skill with the same name.
   *   - Recovery is not supported. You cannot delete a Skill that has already been deleted or does not exist.
   * 
   * @param request - DeleteSkillRequest
   * @returns DeleteSkillResponse
   */
  async deleteSkill(request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillWithOptions(request, runtime);
  }

  /**
   * Queries an agent visible to the current identity by name.
   * 
   * @remarks
   * - You can retrieve agents that you created, agents visible within the current tenant, and official agents provided by the platform.
   * 
   * @param request - GetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: $_model.GetAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentResponse({}));
  }

  /**
   * Queries an agent visible to the current identity by name.
   * 
   * @remarks
   * - You can retrieve agents that you created, agents visible within the current tenant, and official agents provided by the platform.
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * Queries a Skill by name that is visible to the current caller.
   * 
   * @remarks
   * - Query target:
   *   - Queries by `Name`. Querying by `SkillId` is not supported.
   *   - Returns the Skill with the matching name that is visible to the current caller under the current tenant first. If no visible record exists, queries the official Skill with the same name.
   *   - If `SkillVersion` is omitted, the current Skill is returned. This parameter is omitted by default.
   * - Download URL:
   *   - `Network` supports `public` and `internal`. If omitted, no download URL is generated.
   *   - If the Skill has an accessible Artifact, a temporary `DownloadUrl` and the corresponding `DownloadUrlNetwork` are returned.
   *   - If the Artifact does not exist, is inaccessible, or the URL generation fails, the Skill query still succeeds, but download URL-related fields may not be returned.
   *   - The original `bundleUrl` used during creation is not stored and is not returned by this operation.
   * 
   * @param request - GetSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillResponse
   */
  async getSkillWithOptions(request: $_model.GetSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.skillVersion)) {
      query["SkillVersion"] = request.skillVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSkill",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSkillResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillResponse({}));
  }

  /**
   * Queries a Skill by name that is visible to the current caller.
   * 
   * @remarks
   * - Query target:
   *   - Queries by `Name`. Querying by `SkillId` is not supported.
   *   - Returns the Skill with the matching name that is visible to the current caller under the current tenant first. If no visible record exists, queries the official Skill with the same name.
   *   - If `SkillVersion` is omitted, the current Skill is returned. This parameter is omitted by default.
   * - Download URL:
   *   - `Network` supports `public` and `internal`. If omitted, no download URL is generated.
   *   - If the Skill has an accessible Artifact, a temporary `DownloadUrl` and the corresponding `DownloadUrlNetwork` are returned.
   *   - If the Artifact does not exist, is inaccessible, or the URL generation fails, the Skill query still succeeds, but download URL-related fields may not be returned.
   *   - The original `bundleUrl` used during creation is not stored and is not returned by this operation.
   * 
   * @param request - GetSkillRequest
   * @returns GetSkillResponse
   */
  async getSkill(request: $_model.GetSkillRequest): Promise<$_model.GetSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a Transit file, including the upload status, file size, and expiration time, and optionally generates a temporary download URL.
   * 
   * @remarks
   * - Specify at least one of `TransitId` and `FilePath`. If both are specified, `TransitId` takes precedence.
   * - Use the `TransitId` returned by `CreateTransitUploadPolicy` to query the file. `TransitId` is a temporary capability identifier used during the file upload process. Do not share it with unauthorized users.
   * - `FilePath` is an opaque object path returned by `CreateTransitUploadPolicy`. Use it as-is. Do not parse, modify, or construct it manually.
   * - When you query by `FilePath`, an error is returned if the record does not exist or is not accessible to the caller.
   * - `ExpireMs` specifies the validity period of the download URL in milliseconds. Default value: `900000` (15 minutes). The validity period is rounded down to the nearest whole second. For example, 1500 milliseconds is rounded down to 1 second.
   * - `ExpireAt` is the expiration time of the Transit record, not the expiration time of the download URL. Querying, generating a download URL, and confirming the upload do not extend the record validity period.
   * 
   * @param request - GetTransitMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTransitMetaResponse
   */
  async getTransitMetaWithOptions(request: $_model.GetTransitMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTransitMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expireMs)) {
      query["ExpireMs"] = request.expireMs;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.network)) {
      query["Network"] = request.network;
    }

    if (!$dara.isNull(request.transitId)) {
      query["TransitId"] = request.transitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTransitMeta",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTransitMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetTransitMetaResponse({}));
  }

  /**
   * Queries the metadata of a Transit file, including the upload status, file size, and expiration time, and optionally generates a temporary download URL.
   * 
   * @remarks
   * - Specify at least one of `TransitId` and `FilePath`. If both are specified, `TransitId` takes precedence.
   * - Use the `TransitId` returned by `CreateTransitUploadPolicy` to query the file. `TransitId` is a temporary capability identifier used during the file upload process. Do not share it with unauthorized users.
   * - `FilePath` is an opaque object path returned by `CreateTransitUploadPolicy`. Use it as-is. Do not parse, modify, or construct it manually.
   * - When you query by `FilePath`, an error is returned if the record does not exist or is not accessible to the caller.
   * - `ExpireMs` specifies the validity period of the download URL in milliseconds. Default value: `900000` (15 minutes). The validity period is rounded down to the nearest whole second. For example, 1500 milliseconds is rounded down to 1 second.
   * - `ExpireAt` is the expiration time of the Transit record, not the expiration time of the download URL. Querying, generating a download URL, and confirming the upload do not extend the record validity period.
   * 
   * @param request - GetTransitMetaRequest
   * @returns GetTransitMetaResponse
   */
  async getTransitMeta(request: $_model.GetTransitMetaRequest): Promise<$_model.GetTransitMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTransitMetaWithOptions(request, runtime);
  }

  /**
   * Queries agents visible to the current identity by paging.
   * 
   * @remarks
   * - By default, returns official platform agents and tenant agents visible to the current identity.
   * - Set `Scope=SYSTEM` to query only official agents, or `Scope=CUSTOM` to query only custom agents.
   * - Both cursor-based pagination and page number-based pagination are supported. When using cursor-based pagination, pass the `NextToken` value from the previous response to the next request, and keep the caller identity, filter conditions, and `MaxResults` unchanged.
   * 
   * @param request - ListAgentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: $_model.ListAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creatorId)) {
      query["CreatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.q)) {
      query["Q"] = request.q;
    }

    if (!$dara.isNull(request.requiredRuntime)) {
      query["RequiredRuntime"] = request.requiredRuntime;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgents",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentsResponse({}));
  }

  /**
   * Queries agents visible to the current identity by paging.
   * 
   * @remarks
   * - By default, returns official platform agents and tenant agents visible to the current identity.
   * - Set `Scope=SYSTEM` to query only official agents, or `Scope=CUSTOM` to query only custom agents.
   * - Both cursor-based pagination and page number-based pagination are supported. When using cursor-based pagination, pass the `NextToken` value from the previous response to the next request, and keep the caller identity, filter conditions, and `MaxResults` unchanged.
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: $_model.ListAgentsRequest): Promise<$_model.ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentsWithOptions(request, runtime);
  }

  /**
   * Queries Skills visible to the current caller by paging.
   * 
   * @remarks
   * - Query and filtering: 
   *     - Set `Scope=SYSTEM` to query only official Skills, or `Scope=CUSTOM` to query only custom Skills. If omitted, both official and custom Skills are queried.
   *     - Custom Skills with `user` visibility are visible only to the creator. Skills with `tenant` visibility are visible to the current tenant.
   *     - Filtering by `CreatorId`, `Q`, and `Visibility` is supported. `Q` performs a fuzzy match on the Skill name or description.
   *     - Results are sorted by update time in descending order by default.
   * - Pagination: 
   *     - For cursor-based pagination, use `MaxResults` and `NextToken`. Do not pass `NextToken` for the first query. For subsequent pages, use the token returned in the previous response. When using `NextToken` for subsequent pages, `CreatorId`, `Q`, `Visibility`, `Scope`, and `MaxResults` must remain the same as the previous page. If you change the query conditions, start over from the first page.
   *     - For page-number-based pagination, use `PageNumber` and `PageSize`. If `MaxResults` is explicitly specified, cursor-based pagination takes precedence. If `NextToken` is specified, `PageNumber` is ignored.
   * - Response content: 
   *     - This operation returns only Skill summaries and does not generate Bundle download URLs. To obtain download URLs, call `GetSkill` and specify `Network`.
   * 
   * @param request - ListSkillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillsResponse
   */
  async listSkillsWithOptions(request: $_model.ListSkillsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creatorId)) {
      query["CreatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.q)) {
      query["Q"] = request.q;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSkills",
      version: "2026-07-01",
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
   * Queries Skills visible to the current caller by paging.
   * 
   * @remarks
   * - Query and filtering: 
   *     - Set `Scope=SYSTEM` to query only official Skills, or `Scope=CUSTOM` to query only custom Skills. If omitted, both official and custom Skills are queried.
   *     - Custom Skills with `user` visibility are visible only to the creator. Skills with `tenant` visibility are visible to the current tenant.
   *     - Filtering by `CreatorId`, `Q`, and `Visibility` is supported. `Q` performs a fuzzy match on the Skill name or description.
   *     - Results are sorted by update time in descending order by default.
   * - Pagination: 
   *     - For cursor-based pagination, use `MaxResults` and `NextToken`. Do not pass `NextToken` for the first query. For subsequent pages, use the token returned in the previous response. When using `NextToken` for subsequent pages, `CreatorId`, `Q`, `Visibility`, `Scope`, and `MaxResults` must remain the same as the previous page. If you change the query conditions, start over from the first page.
   *     - For page-number-based pagination, use `PageNumber` and `PageSize`. If `MaxResults` is explicitly specified, cursor-based pagination takes precedence. If `NextToken` is specified, `PageNumber` is ignored.
   * - Response content: 
   *     - This operation returns only Skill summaries and does not generate Bundle download URLs. To obtain download URLs, call `GetSkill` and specify `Network`.
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillsWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of an Agent.
   * 
   * @remarks
   * - `Name` is used only to locate the Agent and cannot be modified after creation.
   * - Each Agent can be bindded to only one knowledge base.
   * - `Tools` is updated according to the rules below. If `Skills` or `KnowledgeBases` is not specified, the existing value is retained. A non-empty array replaces the entire value. An empty array removes the corresponding binddings. Other optional fields retain their existing values if not specified.
   * 
   * @param request - UpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentResponse
   */
  async updateAgentWithOptions(request: $_model.UpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.expectedVersion)) {
      body["ExpectedVersion"] = request.expectedVersion;
    }

    if (!$dara.isNull(request.knowledgeBases)) {
      body["KnowledgeBases"] = request.knowledgeBases;
    }

    if (!$dara.isNull(request.skills)) {
      body["Skills"] = request.skills;
    }

    if (!$dara.isNull(request.systemPrompt)) {
      body["SystemPrompt"] = request.systemPrompt;
    }

    if (!$dara.isNull(request.tools)) {
      body["Tools"] = request.tools;
    }

    if (!$dara.isNull(request.visibility)) {
      body["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgent",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentResponse({}));
  }

  /**
   * Updates the configuration of an Agent.
   * 
   * @remarks
   * - `Name` is used only to locate the Agent and cannot be modified after creation.
   * - Each Agent can be bindded to only one knowledge base.
   * - `Tools` is updated according to the rules below. If `Skills` or `KnowledgeBases` is not specified, the existing value is retained. A non-empty array replaces the entire value. An empty array removes the corresponding binddings. Other optional fields retain their existing values if not specified.
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * Updates a Skill.
   * 
   * @remarks
   * - Update rules:
   *   - `Name` is used only to locate the Skill and cannot be modified.
   *   - The caller must be the Skill creator or the tenant root account that has permissions to manage the tenant-level Skill.
   * - Replacement rules:
   *   - `Description` and `Visibility` retain their original values when omitted. Passing `null` is treated the same as omitting the field and cannot be used to clear the original value.
   *   - `Metadata` is replaced as a whole, not merged incrementally. Omitting `Metadata` preserves the original content. When provided, any old fields not included in the new object are deleted.
   *   - When modifying only `Description` or `Visibility`, do not pass `Metadata` or an empty object `{}`. An empty object replaces the entire original Metadata with an empty value.
   * - Content source:
   *   - When replacing the body or bundle, specify exactly one of `skillMd`, `transitId`, or `bundleUrl`.
   *   - For field formats, the Transit upload confirmation process, and `bundleUrl` restrictions of the three sources, refer to CreateSkill. Pass the selected source in `UpdateSkill.Metadata`.
   * 
   * @param request - UpdateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillResponse
   */
  async updateSkillWithOptions(request: $_model.UpdateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.expectedVersion)) {
      body["ExpectedVersion"] = request.expectedVersion;
    }

    if (!$dara.isNull(request.metadata)) {
      body["Metadata"] = request.metadata;
    }

    if (!$dara.isNull(request.visibility)) {
      body["Visibility"] = request.visibility;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSkill",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSkillResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillResponse({}));
  }

  /**
   * Updates a Skill.
   * 
   * @remarks
   * - Update rules:
   *   - `Name` is used only to locate the Skill and cannot be modified.
   *   - The caller must be the Skill creator or the tenant root account that has permissions to manage the tenant-level Skill.
   * - Replacement rules:
   *   - `Description` and `Visibility` retain their original values when omitted. Passing `null` is treated the same as omitting the field and cannot be used to clear the original value.
   *   - `Metadata` is replaced as a whole, not merged incrementally. Omitting `Metadata` preserves the original content. When provided, any old fields not included in the new object are deleted.
   *   - When modifying only `Description` or `Visibility`, do not pass `Metadata` or an empty object `{}`. An empty object replaces the entire original Metadata with an empty value.
   * - Content source:
   *   - When replacing the body or bundle, specify exactly one of `skillMd`, `transitId`, or `bundleUrl`.
   *   - For field formats, the Transit upload confirmation process, and `bundleUrl` restrictions of the three sources, refer to CreateSkill. Pass the selected source in `UpdateSkill.Metadata`.
   * 
   * @param request - UpdateSkillRequest
   * @returns UpdateSkillResponse
   */
  async updateSkill(request: $_model.UpdateSkillRequest): Promise<$_model.UpdateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillWithOptions(request, runtime);
  }

}
