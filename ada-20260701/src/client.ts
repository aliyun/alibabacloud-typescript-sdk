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
    this._productId = "Ada";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
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
   * Stops a session execution or cancels a specified turn.
   * 
   * @remarks
   * If `Params._meta.promptId` is provided, only that turn is canceled. If omitted, the current execution of the session is canceled. To avoid affecting other turns, use the actual `promptId` obtained from the response stream instead of the request `Id`. A cancellation receipt does not mean the turn has ended, nor does it revoke external operations that have already occurred. After calling this operation, continue reading the original response stream or resume reading through `LoadAgentSession` to confirm the desired state of the target turn. Disconnecting the stream connection cannot replace a cancellation request.
   * 
   * @param tmpReq - CancelAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAgentSessionResponse
   */
  async cancelAgentSessionWithOptions(tmpReq: $_model.CancelAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.CancelAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.CancelAgentSessionResponse({}));
  }

  /**
   * Stops a session execution or cancels a specified turn.
   * 
   * @remarks
   * If `Params._meta.promptId` is provided, only that turn is canceled. If omitted, the current execution of the session is canceled. To avoid affecting other turns, use the actual `promptId` obtained from the response stream instead of the request `Id`. A cancellation receipt does not mean the turn has ended, nor does it revoke external operations that have already occurred. After calling this operation, continue reading the original response stream or resume reading through `LoadAgentSession` to confirm the desired state of the target turn. Disconnecting the stream connection cannot replace a cancellation request.
   * 
   * @param request - CancelAgentSessionRequest
   * @returns CancelAgentSessionResponse
   */
  async cancelAgentSession(request: $_model.CancelAgentSessionRequest): Promise<$_model.CancelAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelAgentSessionWithOptions(request, runtime);
  }

  /**
   * Creates an agent.
   * 
   * @remarks
   * - Name is the unique identifier of the agent within the current tenant. It can contain only letters, digits, underscores, and hyphens, and must be 1 to 128 characters in length. It cannot be modified after creation.
   * - Each agent can be bound to only one knowledge base.
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
   * Creates an agent.
   * 
   * @remarks
   * - Name is the unique identifier of the agent within the current tenant. It can contain only letters, digits, underscores, and hyphens, and must be 1 to 128 characters in length. It cannot be modified after creation.
   * - Each agent can be bound to only one knowledge base.
   * 
   * @param request - CreateAgentRequest
   * @returns CreateAgentResponse
   */
  async createAgent(request: $_model.CreateAgentRequest): Promise<$_model.CreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentWithOptions(request, runtime);
  }

  /**
   * Creates a text session for a specified agent and obtains the session ID required for subsequent calls.
   * 
   * @remarks
   * Before calling this operation, obtain the name of an agent accessible to the current identity. After the session is created, save `JsonRpcResponse.result.sessionId` and use it as `Params.sessionId` for subsequent operations such as `PromptAgentSession` and `LoadAgentSession`.
   * You can set the approval mode during creation. If omitted, the mode defaults to `default`. The availability of `yolo` depends on the target agent. If it is not supported, an error is returned. This mode does not change the caller\\"s permissions or replace business Q&A. To retry the same creation request, reuse the same `clientToken` and the same business parameters.
   * 
   * @param tmpReq - CreateAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentSessionResponse
   */
  async createAgentSessionWithOptions(tmpReq: $_model.CreateAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentSessionResponse({}));
  }

  /**
   * Creates a text session for a specified agent and obtains the session ID required for subsequent calls.
   * 
   * @remarks
   * Before calling this operation, obtain the name of an agent accessible to the current identity. After the session is created, save `JsonRpcResponse.result.sessionId` and use it as `Params.sessionId` for subsequent operations such as `PromptAgentSession` and `LoadAgentSession`.
   * You can set the approval mode during creation. If omitted, the mode defaults to `default`. The availability of `yolo` depends on the target agent. If it is not supported, an error is returned. This mode does not change the caller\\"s permissions or replace business Q&A. To retry the same creation request, reuse the same `clientToken` and the same business parameters.
   * 
   * @param request - CreateAgentSessionRequest
   * @returns CreateAgentSessionResponse
   */
  async createAgentSession(request: $_model.CreateAgentSessionRequest): Promise<$_model.CreateAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAgentSessionWithOptions(request, runtime);
  }

  /**
   * Creates a skill.
   * 
   * @remarks
   * - Creation rules:
   *   - `Name` must be unique within the current tenant and cannot be the same as an official skill.
   *   - `Description` and `Metadata` are required. `Metadata` must contain one and only one valid content source. Different sources cannot be mixed.
   *   - After the skill is created, you can modify it by calling `UpdateSkill`.
   * - Content sources:
   *   - `skillMd`: Directly enter the Markdown body. No YAML front matter is required. Use `Name` and `Description` for the name and description.
   *   - `transitId`: Upload and confirm a ZIP file through Transit. The call sequence is as follows:
   *     1. Call `CreateTransitUploadPolicy` and pass in `FileShowName` to obtain `TransitId`, `FilePath`, and `PolicyInfo`.
   *     2. Use `PolicyInfo` and `FilePath` to upload the ZIP file to Object Storage Service (OSS).
   *     3. Call `ConfirmTransitUpload` and pass in `TransitId`. Proceed with creation only if `Confirmed=true` is returned.
   *     4. Call `CreateSkill` and pass the confirmed `TransitId` in `Metadata.transitId`.
   *   - `bundleUrl`: Pass in a public HTTPS ZIP direct link. The platform downloads the file and saves it as an artifact. The original URL is not saved or echoed.
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
   * Creates a skill.
   * 
   * @remarks
   * - Creation rules:
   *   - `Name` must be unique within the current tenant and cannot be the same as an official skill.
   *   - `Description` and `Metadata` are required. `Metadata` must contain one and only one valid content source. Different sources cannot be mixed.
   *   - After the skill is created, you can modify it by calling `UpdateSkill`.
   * - Content sources:
   *   - `skillMd`: Directly enter the Markdown body. No YAML front matter is required. Use `Name` and `Description` for the name and description.
   *   - `transitId`: Upload and confirm a ZIP file through Transit. The call sequence is as follows:
   *     1. Call `CreateTransitUploadPolicy` and pass in `FileShowName` to obtain `TransitId`, `FilePath`, and `PolicyInfo`.
   *     2. Use `PolicyInfo` and `FilePath` to upload the ZIP file to Object Storage Service (OSS).
   *     3. Call `ConfirmTransitUpload` and pass in `TransitId`. Proceed with creation only if `Confirmed=true` is returned.
   *     4. Call `CreateSkill` and pass the confirmed `TransitId` in `Metadata.transitId`.
   *   - `bundleUrl`: Pass in a public HTTPS ZIP direct link. The platform downloads the file and saves it as an artifact. The original URL is not saved or echoed.
   * 
   * @param request - CreateSkillRequest
   * @returns CreateSkillResponse
   */
  async createSkill(request: $_model.CreateSkillRequest): Promise<$_model.CreateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSkillWithOptions(request, runtime);
  }

  /**
   * Generates credentials for direct file upload. Callers can use the returned upload policy to upload files directly to object storage.
   * 
   * @remarks
   * - The Network parameter can be set to public or internal to generate a public network or same-region internal network upload address, respectively. The default value is public.
   * - The maximum size of a single file is 50 MiB.
   * - PolicyInfo contains short-term upload authorization information and is only used for the current file upload. Do not log, permanently store, or forward it to other users.
   * - ExpireMs specifies the validity period of the upload policy and the transit record in milliseconds, not an absolute timestamp. The default and maximum values are both 604800000 (7 days), and the minimum value is 1000 (1 second). The validity period is rounded down to the nearest whole second. For example, 1500 milliseconds takes effect as 1 second.
   * - You can call GetTransitMeta to read ExpireAt and obtain the expiration time of the transit record. Confirming the upload and querying the record do not extend its validity period.
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
   * Generates credentials for direct file upload. Callers can use the returned upload policy to upload files directly to object storage.
   * 
   * @remarks
   * - The Network parameter can be set to public or internal to generate a public network or same-region internal network upload address, respectively. The default value is public.
   * - The maximum size of a single file is 50 MiB.
   * - PolicyInfo contains short-term upload authorization information and is only used for the current file upload. Do not log, permanently store, or forward it to other users.
   * - ExpireMs specifies the validity period of the upload policy and the transit record in milliseconds, not an absolute timestamp. The default and maximum values are both 604800000 (7 days), and the minimum value is 1000 (1 second). The validity period is rounded down to the nearest whole second. For example, 1500 milliseconds takes effect as 1 second.
   * - You can call GetTransitMeta to read ExpireAt and obtain the expiration time of the transit record. Confirming the upload and querying the record do not extend its validity period.
   * 
   * @param request - CreateTransitUploadPolicyRequest
   * @returns CreateTransitUploadPolicyResponse
   */
  async createTransitUploadPolicy(request: $_model.CreateTransitUploadPolicyRequest): Promise<$_model.CreateTransitUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTransitUploadPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a specified agent.
   * 
   * @remarks
   * - Creators can delete the agents they created.
   * - After deletion, the agent can no longer be queried, updated, or run.
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
   * Deletes a specified agent.
   * 
   * @remarks
   * - Creators can delete the agents they created.
   * - After deletion, the agent can no longer be queried, updated, or run.
   * 
   * @param request - DeleteAgentRequest
   * @returns DeleteAgentResponse
   */
  async deleteAgent(request: $_model.DeleteAgentRequest): Promise<$_model.DeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentWithOptions(request, runtime);
  }

  /**
   * Deletes an idle session that is no longer needed.
   * 
   * @remarks
   * A session cannot be directly deleted while it is being executed or waiting for interaction. You must first call `CancelAgentSession` and continue reading the original response stream, or resume reading through `LoadAgentSession`. Delete the session only after confirming that the target turn has ended.
   * A successful deletion indicates that the session deletion operation is complete, but it does not mean that external operations that have already occurred are rolled back. Deleting a session does not delete the associated agent or assistant.
   * 
   * @param tmpReq - DeleteAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentSessionResponse
   */
  async deleteAgentSessionWithOptions(tmpReq: $_model.DeleteAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentSessionResponse({}));
  }

  /**
   * Deletes an idle session that is no longer needed.
   * 
   * @remarks
   * A session cannot be directly deleted while it is being executed or waiting for interaction. You must first call `CancelAgentSession` and continue reading the original response stream, or resume reading through `LoadAgentSession`. Delete the session only after confirming that the target turn has ended.
   * A successful deletion indicates that the session deletion operation is complete, but it does not mean that external operations that have already occurred are rolled back. Deleting a session does not delete the associated agent or assistant.
   * 
   * @param request - DeleteAgentSessionRequest
   * @returns DeleteAgentSessionResponse
   */
  async deleteAgentSession(request: $_model.DeleteAgentSessionRequest): Promise<$_model.DeleteAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAgentSessionWithOptions(request, runtime);
  }

  /**
   * Soft-deletes a skill that the current caller has permission to modify.
   * 
   * @remarks
   * - Deletion permissions:
   *   - You can delete only custom skills that you have permission to modify.
   *   - You must be the creator of the skill or the root account of the tenant that has permission to manage the tenant-level skill. Official skills cannot be deleted.
   * - Deletion results:
   *   - This operation performs a soft delete. After the skill is deleted, the `GetSkill` and `ListSkills` operations no longer return the skill, and you can create a new skill with the same name.
   *   - Recovery is not supported. You cannot delete a skill multiple times or delete a non-existent skill.
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
   * Soft-deletes a skill that the current caller has permission to modify.
   * 
   * @remarks
   * - Deletion permissions:
   *   - You can delete only custom skills that you have permission to modify.
   *   - You must be the creator of the skill or the root account of the tenant that has permission to manage the tenant-level skill. Official skills cannot be deleted.
   * - Deletion results:
   *   - This operation performs a soft delete. After the skill is deleted, the `GetSkill` and `ListSkills` operations no longer return the skill, and you can create a new skill with the same name.
   *   - Recovery is not supported. You cannot delete a skill multiple times or delete a non-existent skill.
   * 
   * @param request - DeleteSkillRequest
   * @returns DeleteSkillResponse
   */
  async deleteSkill(request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSkillWithOptions(request, runtime);
  }

  /**
   * Queries agents visible to the current identity by name.
   * 
   * @remarks
   * - You can retrieve agents created by yourself, agents visible within the current tenant, and official agents provided by the platform.
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
   * Queries agents visible to the current identity by name.
   * 
   * @remarks
   * - You can retrieve agents created by yourself, agents visible within the current tenant, and official agents provided by the platform.
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: $_model.GetAgentRequest): Promise<$_model.GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentWithOptions(request, runtime);
  }

  /**
   * Queries session details such as the title, associated agent, and core timestamps based on the session ID.
   * 
   * @remarks
   * For `Params.sessionId`, use the session ID returned by `CreateAgentSession` or `ListAgentSessions`. The business result is located in `JsonRpcResponse.result`, which is of type `any`. The fields within the object retain their actual casing.
   * This operation provides a session summary and does not return the complete message history, pending interactions, or the final state of real-time turns. For history and disconnection recovery, use `LoadAgentSession`. For approvals and Q&A, read from the streaming notifications of `PromptAgentSession` or `LoadAgentSession`.
   * 
   * @param tmpReq - GetAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSessionResponse
   */
  async getAgentSessionWithOptions(tmpReq: $_model.GetAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      query["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSessionResponse({}));
  }

  /**
   * Queries session details such as the title, associated agent, and core timestamps based on the session ID.
   * 
   * @remarks
   * For `Params.sessionId`, use the session ID returned by `CreateAgentSession` or `ListAgentSessions`. The business result is located in `JsonRpcResponse.result`, which is of type `any`. The fields within the object retain their actual casing.
   * This operation provides a session summary and does not return the complete message history, pending interactions, or the final state of real-time turns. For history and disconnection recovery, use `LoadAgentSession`. For approvals and Q&A, read from the streaming notifications of `PromptAgentSession` or `LoadAgentSession`.
   * 
   * @param request - GetAgentSessionRequest
   * @returns GetAgentSessionResponse
   */
  async getAgentSession(request: $_model.GetAgentSessionRequest): Promise<$_model.GetAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentSessionWithOptions(request, runtime);
  }

  /**
   * Queries the model and thinking level configurations currently used by the session.
   * 
   * @remarks
   * - Use the `sessionId` returned by CreateAgentSession to query the configurations. This operation does not send messages or replay session history.
   * - Read the current model from `JsonRpcResponse.result.modelId`. To modify it, call SetAgentSessionModel.
   * - The thinking level is an optional advanced configuration. The supported levels and current values are subject to the actual response of this operation, which may vary across different agents, models, and sessions.
   * 
   * @param tmpReq - GetAgentSessionModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSessionModelResponse
   */
  async getAgentSessionModelWithOptions(tmpReq: $_model.GetAgentSessionModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSessionModelResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentSessionModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      query["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentSessionModel",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentSessionModelResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSessionModelResponse({}));
  }

  /**
   * Queries the model and thinking level configurations currently used by the session.
   * 
   * @remarks
   * - Use the `sessionId` returned by CreateAgentSession to query the configurations. This operation does not send messages or replay session history.
   * - Read the current model from `JsonRpcResponse.result.modelId`. To modify it, call SetAgentSessionModel.
   * - The thinking level is an optional advanced configuration. The supported levels and current values are subject to the actual response of this operation, which may vary across different agents, models, and sessions.
   * 
   * @param request - GetAgentSessionModelRequest
   * @returns GetAgentSessionModelResponse
   */
  async getAgentSessionModel(request: $_model.GetAgentSessionModelRequest): Promise<$_model.GetAgentSessionModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentSessionModelWithOptions(request, runtime);
  }

  /**
   * Queries the skills visible to the current caller by name.
   * 
   * @remarks
   * - Query target:
   *   - Queries by `Name`. Querying by `SkillId` is not supported.
   *   - Prioritizes returning skills with the same name that are visible to the caller under the current tenant. If no visible records are found, it queries official skills with the same name.
   *   - If `SkillVersion` is omitted, the current skill is returned. This parameter is omitted by default.
   * - Download URL:
   *   - `Network` supports `public` and `internal`. If omitted, no download URL is generated.
   *   - If the skill has an accessible artifact, a temporary `DownloadUrl` and the corresponding `DownloadUrlNetwork` are returned.
   *   - If the artifact does not exist, access is denied, or URL generation fails, the skill query still succeeds, but the download URL-related fields may not be returned.
   *   - The original `bundleUrl` used during creation is not saved and will not be echoed back through this API.
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
   * Queries the skills visible to the current caller by name.
   * 
   * @remarks
   * - Query target:
   *   - Queries by `Name`. Querying by `SkillId` is not supported.
   *   - Prioritizes returning skills with the same name that are visible to the caller under the current tenant. If no visible records are found, it queries official skills with the same name.
   *   - If `SkillVersion` is omitted, the current skill is returned. This parameter is omitted by default.
   * - Download URL:
   *   - `Network` supports `public` and `internal`. If omitted, no download URL is generated.
   *   - If the skill has an accessible artifact, a temporary `DownloadUrl` and the corresponding `DownloadUrlNetwork` are returned.
   *   - If the artifact does not exist, access is denied, or URL generation fails, the skill query still succeeds, but the download URL-related fields may not be returned.
   *   - The original `bundleUrl` used during creation is not saved and will not be echoed back through this API.
   * 
   * @param request - GetSkillRequest
   * @returns GetSkillResponse
   */
  async getSkill(request: $_model.GetSkillRequest): Promise<$_model.GetSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSkillWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a transit file, such as the upload status, file size, and expiration time, and retrieves a temporary download URL on demand.
   * 
   * @remarks
   * - Specify at least one of TransitId and FilePath. If both are provided, TransitId takes precedence.
   * - Use the TransitId returned by CreateTransitUploadPolicy. TransitId is a temporary capability identifier in the file upload process. Do not forward it to unrelated users.
   * - FilePath is the opaque object path returned by CreateTransitUploadPolicy. Callers must use it as is. Do not parse, modify, or concatenate it.
   * - When you query by FilePath, an error is returned if the record does not exist or is inaccessible to the current caller.
   * - ExpireMs specifies the validity period of the download URL in milliseconds. The default value is 900000, which indicates 15 minutes. The validity period is rounded down to the nearest second. For example, 1500 milliseconds takes effect as 1 second.
   * - ExpireAt is the expiration time of the transit record, not the expiration time of the download URL. Querying, generating a download URL, and confirming the upload do not extend the validity period of the record.
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
   * Queries the metadata of a transit file, such as the upload status, file size, and expiration time, and retrieves a temporary download URL on demand.
   * 
   * @remarks
   * - Specify at least one of TransitId and FilePath. If both are provided, TransitId takes precedence.
   * - Use the TransitId returned by CreateTransitUploadPolicy. TransitId is a temporary capability identifier in the file upload process. Do not forward it to unrelated users.
   * - FilePath is the opaque object path returned by CreateTransitUploadPolicy. Callers must use it as is. Do not parse, modify, or concatenate it.
   * - When you query by FilePath, an error is returned if the record does not exist or is inaccessible to the current caller.
   * - ExpireMs specifies the validity period of the download URL in milliseconds. The default value is 900000, which indicates 15 minutes. The validity period is rounded down to the nearest second. For example, 1500 milliseconds takes effect as 1 second.
   * - ExpireAt is the expiration time of the transit record, not the expiration time of the download URL. Querying, generating a download URL, and confirming the upload do not extend the validity period of the record.
   * 
   * @param request - GetTransitMetaRequest
   * @returns GetTransitMetaResponse
   */
  async getTransitMeta(request: $_model.GetTransitMetaRequest): Promise<$_model.GetTransitMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTransitMetaWithOptions(request, runtime);
  }

  /**
   * Queries the global workflow configuration.
   * 
   * @remarks
   * Queries the global workflow configuration for a tenant and region. The content is sensitive information. In addition to the permissions required for this operation, the ada:DownloadFile permission is also required.
   * 
   * @param request - GetWorkflowGlobalEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowGlobalEnvResponse
   */
  async getWorkflowGlobalEnvWithOptions(request: $_model.GetWorkflowGlobalEnvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowGlobalEnvResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowGlobalEnv",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowGlobalEnvResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowGlobalEnvResponse({}));
  }

  /**
   * Queries the global workflow configuration.
   * 
   * @remarks
   * Queries the global workflow configuration for a tenant and region. The content is sensitive information. In addition to the permissions required for this operation, the ada:DownloadFile permission is also required.
   * 
   * @param request - GetWorkflowGlobalEnvRequest
   * @returns GetWorkflowGlobalEnvResponse
   */
  async getWorkflowGlobalEnv(request: $_model.GetWorkflowGlobalEnvRequest): Promise<$_model.GetWorkflowGlobalEnvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowGlobalEnvWithOptions(request, runtime);
  }

  /**
   * Queries the session summary by paging for the caller to select or resume existing sessions.
   * 
   * @remarks
   * You can filter sessions by agent name. Omit Params.NextToken on the first page. When querying subsequent pages, keep the filter conditions and page size unchanged, and pass the JsonRpcResponse.Result.NextToken returned from the previous page as is to Params.NextToken. Pagination ends when the token is not returned or is empty.
   * The list returns session summaries such as session ID, title, and time, but does not provide the final state of turn execution. After selecting a session, you can use GetAgentSession to query details or LoadAgentSession to load history.
   * Params in the request, and JsonRpcResponse and Result in the response are explicit objects. The pagination field MaxResults is of type integer<int32>, and NextToken is of type string. SessionList retains the any type. For session summary fields, see the supplementary description.
   * 
   * @param tmpReq - ListAgentSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentSessionsResponse
   */
  async listAgentSessionsWithOptions(tmpReq: $_model.ListAgentSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentSessionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAgentSessionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentSessions",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentSessionsResponse({}));
  }

  /**
   * Queries the session summary by paging for the caller to select or resume existing sessions.
   * 
   * @remarks
   * You can filter sessions by agent name. Omit Params.NextToken on the first page. When querying subsequent pages, keep the filter conditions and page size unchanged, and pass the JsonRpcResponse.Result.NextToken returned from the previous page as is to Params.NextToken. Pagination ends when the token is not returned or is empty.
   * The list returns session summaries such as session ID, title, and time, but does not provide the final state of turn execution. After selecting a session, you can use GetAgentSession to query details or LoadAgentSession to load history.
   * Params in the request, and JsonRpcResponse and Result in the response are explicit objects. The pagination field MaxResults is of type integer<int32>, and NextToken is of type string. SessionList retains the any type. For session summary fields, see the supplementary description.
   * 
   * @param request - ListAgentSessionsRequest
   * @returns ListAgentSessionsResponse
   */
  async listAgentSessions(request: $_model.ListAgentSessionsRequest): Promise<$_model.ListAgentSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentSessionsWithOptions(request, runtime);
  }

  /**
   * Queries the agents visible to the current identity by using paging.
   * 
   * @remarks
   * - By default, the API returns the official agents provided by the platform and the tenant agents visible to the current identity.
   * - If Scope is set to SYSTEM, only official agents are queried. If Scope is set to CUSTOM, only custom agents are queried.
   * - Supports both cursor-based pagination and page number-based pagination. When using cursor-based pagination, pass the NextToken value exactly as returned in the next request, and keep the calling identity, filter conditions, and MaxResults unchanged.
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
   * Queries the agents visible to the current identity by using paging.
   * 
   * @remarks
   * - By default, the API returns the official agents provided by the platform and the tenant agents visible to the current identity.
   * - If Scope is set to SYSTEM, only official agents are queried. If Scope is set to CUSTOM, only custom agents are queried.
   * - Supports both cursor-based pagination and page number-based pagination. When using cursor-based pagination, pass the NextToken value exactly as returned in the next request, and keep the calling identity, filter conditions, and MaxResults unchanged.
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: $_model.ListAgentsRequest): Promise<$_model.ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAgentsWithOptions(request, runtime);
  }

  /**
   * Queries the text models visible to the current caller for selection when setting a session model.
   * 
   * @remarks
   * - For text sessions, pass `ModelType=text` and use `MaxResults` and `NextToken` for paging. Obtain the model identifier from `Models[].Id` and pass it as `Params.modelId` to SetAgentSessionModel.
   * - Visibility in the model catalog does not mean the target session supports the model. After setting the model, refer to the return value of SetAgentSessionModel or the query result of GetAgentSessionModel.
   * - `ThinkingLevels` and `ThinkingLevel` are used for optional thinking level configurations and do not affect the integration flow for selecting a model only.
   * 
   * @param request - ListModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(request: $_model.ListModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.modelType)) {
      query["ModelType"] = request.modelType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModels",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelsResponse({}));
  }

  /**
   * Queries the text models visible to the current caller for selection when setting a session model.
   * 
   * @remarks
   * - For text sessions, pass `ModelType=text` and use `MaxResults` and `NextToken` for paging. Obtain the model identifier from `Models[].Id` and pass it as `Params.modelId` to SetAgentSessionModel.
   * - Visibility in the model catalog does not mean the target session supports the model. After setting the model, refer to the return value of SetAgentSessionModel or the query result of GetAgentSessionModel.
   * - `ThinkingLevels` and `ThinkingLevel` are used for optional thinking level configurations and do not affect the integration flow for selecting a model only.
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelsWithOptions(request, runtime);
  }

  /**
   * Performs a paging query for skills visible to the current invoker.
   * 
   * @remarks
   * - Query and filter: 
   *     - `Scope=SYSTEM` queries only official skills, and `Scope=CUSTOM` queries only custom skills. If omitted, both are queried.
   *     - Custom skills with `user` visibility are visible only to the creator, while skills with `tenant` visibility are visible to the current tenant.
   *     - Supports filtering by `CreatorId`, `Q`, and `Visibility`. `Q` performs a fuzzy match on the skill name or description.
   *     - Results are sorted by update time in descending order by default.
   * - Pagination: 
   *     - Cursor-based pagination uses `MaxResults` and `NextToken`. Do not pass `NextToken` for the first query. For subsequent pages, use the token from the previous response. When using `NextToken` for subsequent pages, `CreatorId`, `Q`, `Visibility`, `Scope`, and `MaxResults` must remain the same as the previous page. If you modify the query conditions, you must restart the query from the first page.
   *     - Page number-based pagination uses `PageNumber` and `PageSize`. If `MaxResults` is explicitly passed, cursor-based pagination takes precedence. If `NextToken` is passed, `PageNumber` is ignored.
   * - Returned content: 
   *     - This operation returns only skill summaries and does not generate bundle download URLs. To obtain a download URL, call `GetSkill` and specify `Network`.
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
   * Performs a paging query for skills visible to the current invoker.
   * 
   * @remarks
   * - Query and filter: 
   *     - `Scope=SYSTEM` queries only official skills, and `Scope=CUSTOM` queries only custom skills. If omitted, both are queried.
   *     - Custom skills with `user` visibility are visible only to the creator, while skills with `tenant` visibility are visible to the current tenant.
   *     - Supports filtering by `CreatorId`, `Q`, and `Visibility`. `Q` performs a fuzzy match on the skill name or description.
   *     - Results are sorted by update time in descending order by default.
   * - Pagination: 
   *     - Cursor-based pagination uses `MaxResults` and `NextToken`. Do not pass `NextToken` for the first query. For subsequent pages, use the token from the previous response. When using `NextToken` for subsequent pages, `CreatorId`, `Q`, `Visibility`, `Scope`, and `MaxResults` must remain the same as the previous page. If you modify the query conditions, you must restart the query from the first page.
   *     - Page number-based pagination uses `PageNumber` and `PageSize`. If `MaxResults` is explicitly passed, cursor-based pagination takes precedence. If `NextToken` is passed, `PageNumber` is ignored.
   * - Returned content: 
   *     - This operation returns only skill summaries and does not generate bundle download URLs. To obtain a download URL, call `GetSkill` and specify `Network`.
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSkillsWithOptions(request, runtime);
  }

  /**
   * Loads session history, receives subsequent output, or resumes Server-Sent Events (SSE) from a saved read position.
   * 
   * @remarks
   * - A standard load requires only the session ID. It returns the configuration, history, and output to be continuously received. The response is SSE, not a standard JSON message list.
   * - When resuming from a stream interruption, pass back the actually received cursor, event epoch, and turn ID. History and incremental data may be returned simultaneously. Existing pages should be rebuilt or deduplicated based on the confirmed cursor. Do not directly append all returned data.
   * - During the load process, you may receive pending approvals or questions again. Use the interaction notification that is still valid for this session to call ReplyAgentSession.
   * - For an idle session, `stopReason=end_turn` may only indicate the end of the current load. It cannot be used to determine the success of a previously interrupted turn. You must associate it with the actual desired state of the target turn. If it cannot be determined, keep the result for verification.
   * 
   * @param tmpReq - LoadAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadAgentSessionResponse
   */
  async *loadAgentSessionWithSSE(tmpReq: $_model.LoadAgentSessionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.LoadAgentSessionResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.LoadAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadAgentSession",
      version: "2026-07-01",
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.LoadAgentSessionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.LoadAgentSessionResponse({}));
      }

    }
  }

  /**
   * Loads session history, receives subsequent output, or resumes Server-Sent Events (SSE) from a saved read position.
   * 
   * @remarks
   * - A standard load requires only the session ID. It returns the configuration, history, and output to be continuously received. The response is SSE, not a standard JSON message list.
   * - When resuming from a stream interruption, pass back the actually received cursor, event epoch, and turn ID. History and incremental data may be returned simultaneously. Existing pages should be rebuilt or deduplicated based on the confirmed cursor. Do not directly append all returned data.
   * - During the load process, you may receive pending approvals or questions again. Use the interaction notification that is still valid for this session to call ReplyAgentSession.
   * - For an idle session, `stopReason=end_turn` may only indicate the end of the current load. It cannot be used to determine the success of a previously interrupted turn. You must associate it with the actual desired state of the target turn. If it cannot be determined, keep the result for verification.
   * 
   * @param tmpReq - LoadAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadAgentSessionResponse
   */
  async loadAgentSessionWithOptions(tmpReq: $_model.LoadAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.LoadAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoadAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.LoadAgentSessionResponse({}));
  }

  /**
   * Loads session history, receives subsequent output, or resumes Server-Sent Events (SSE) from a saved read position.
   * 
   * @remarks
   * - A standard load requires only the session ID. It returns the configuration, history, and output to be continuously received. The response is SSE, not a standard JSON message list.
   * - When resuming from a stream interruption, pass back the actually received cursor, event epoch, and turn ID. History and incremental data may be returned simultaneously. Existing pages should be rebuilt or deduplicated based on the confirmed cursor. Do not directly append all returned data.
   * - During the load process, you may receive pending approvals or questions again. Use the interaction notification that is still valid for this session to call ReplyAgentSession.
   * - For an idle session, `stopReason=end_turn` may only indicate the end of the current load. It cannot be used to determine the success of a previously interrupted turn. You must associate it with the actual desired state of the target turn. If it cannot be determined, keep the result for verification.
   * 
   * @param request - LoadAgentSessionRequest
   * @returns LoadAgentSessionResponse
   */
  async loadAgentSession(request: $_model.LoadAgentSessionRequest): Promise<$_model.LoadAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadAgentSessionWithOptions(request, runtime);
  }

  /**
   * Sends text to an existing session and continuously receives agent output over Server-Sent Events (SSE).
   * 
   * @remarks
   * - Pass the session ID returned by CreateAgentSession to Params.sessionId and place the user text in Params.prompt.
   * - When an execution or pending interaction is already in progress, the default call path rejects new prompts. After receiving an approval or Q&A notification, submit your choice or answer through ReplyAgentSession before continuing to read the original stream.
   * - A connection interruption does not cancel the execution. If the result is unknown, call LoadAgentSession to resume reading. Submitting duplicate prompts may generate new messages, and duplicate Id values are not deduplicated.
   * 
   * @param tmpReq - PromptAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromptAgentSessionResponse
   */
  async *promptAgentSessionWithSSE(tmpReq: $_model.PromptAgentSessionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.PromptAgentSessionResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.PromptAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PromptAgentSession",
      version: "2026-07-01",
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.PromptAgentSessionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.PromptAgentSessionResponse({}));
      }

    }
  }

  /**
   * Sends text to an existing session and continuously receives agent output over Server-Sent Events (SSE).
   * 
   * @remarks
   * - Pass the session ID returned by CreateAgentSession to Params.sessionId and place the user text in Params.prompt.
   * - When an execution or pending interaction is already in progress, the default call path rejects new prompts. After receiving an approval or Q&A notification, submit your choice or answer through ReplyAgentSession before continuing to read the original stream.
   * - A connection interruption does not cancel the execution. If the result is unknown, call LoadAgentSession to resume reading. Submitting duplicate prompts may generate new messages, and duplicate Id values are not deduplicated.
   * 
   * @param tmpReq - PromptAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PromptAgentSessionResponse
   */
  async promptAgentSessionWithOptions(tmpReq: $_model.PromptAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PromptAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.PromptAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PromptAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PromptAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.PromptAgentSessionResponse({}));
  }

  /**
   * Sends text to an existing session and continuously receives agent output over Server-Sent Events (SSE).
   * 
   * @remarks
   * - Pass the session ID returned by CreateAgentSession to Params.sessionId and place the user text in Params.prompt.
   * - When an execution or pending interaction is already in progress, the default call path rejects new prompts. After receiving an approval or Q&A notification, submit your choice or answer through ReplyAgentSession before continuing to read the original stream.
   * - A connection interruption does not cancel the execution. If the result is unknown, call LoadAgentSession to resume reading. Submitting duplicate prompts may generate new messages, and duplicate Id values are not deduplicated.
   * 
   * @param request - PromptAgentSessionRequest
   * @returns PromptAgentSessionResponse
   */
  async promptAgentSession(request: $_model.PromptAgentSessionRequest): Promise<$_model.PromptAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.promptAgentSessionWithOptions(request, runtime);
  }

  /**
   * Submits the approval choice or question answer for the current pending interaction.
   * 
   * @remarks
   * - Read `data.sessionId`, `data.requestId`, and `data.options` from the `permission_request` notification of PromptAgentSession or LoadAgentSession. This operation uses the interaction ID, not the tool invocation ID or the server-side RequestId.
   * - When selecting an action, use the `optionId` actually provided in the notification. For Q&A scenarios, you must also write the question key and answer text into `answers`. Do not pass this field for regular tool approvals.
   * - `accepted=true` only indicates that the reply has been accepted. Subsequent output is still read through Prompt/Load. `false` indicates that the reply is not adopted this time. You should reload the current interaction and not automatically change to approve other requests.
   * 
   * @param tmpReq - ReplyAgentSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplyAgentSessionResponse
   */
  async replyAgentSessionWithOptions(tmpReq: $_model.ReplyAgentSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplyAgentSessionResponse> {
    tmpReq.validate();
    let request = new $_model.ReplyAgentSessionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplyAgentSession",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplyAgentSessionResponse>(await this.callApi(params, req, runtime), new $_model.ReplyAgentSessionResponse({}));
  }

  /**
   * Submits the approval choice or question answer for the current pending interaction.
   * 
   * @remarks
   * - Read `data.sessionId`, `data.requestId`, and `data.options` from the `permission_request` notification of PromptAgentSession or LoadAgentSession. This operation uses the interaction ID, not the tool invocation ID or the server-side RequestId.
   * - When selecting an action, use the `optionId` actually provided in the notification. For Q&A scenarios, you must also write the question key and answer text into `answers`. Do not pass this field for regular tool approvals.
   * - `accepted=true` only indicates that the reply has been accepted. Subsequent output is still read through Prompt/Load. `false` indicates that the reply is not adopted this time. You should reload the current interaction and not automatically change to approve other requests.
   * 
   * @param request - ReplyAgentSessionRequest
   * @returns ReplyAgentSessionResponse
   */
  async replyAgentSession(request: $_model.ReplyAgentSessionRequest): Promise<$_model.ReplyAgentSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replyAgentSessionWithOptions(request, runtime);
  }

  /**
   * Saves the global workflow configuration.
   * 
   * @remarks
   * Saves or queries the global workflow configuration by tenant and region. The content is sensitive information.
   * 
   * @param request - SaveWorkflowGlobalEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveWorkflowGlobalEnvResponse
   */
  async saveWorkflowGlobalEnvWithOptions(request: $_model.SaveWorkflowGlobalEnvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveWorkflowGlobalEnvResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveWorkflowGlobalEnv",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveWorkflowGlobalEnvResponse>(await this.callApi(params, req, runtime), new $_model.SaveWorkflowGlobalEnvResponse({}));
  }

  /**
   * Saves the global workflow configuration.
   * 
   * @remarks
   * Saves or queries the global workflow configuration by tenant and region. The content is sensitive information.
   * 
   * @param request - SaveWorkflowGlobalEnvRequest
   * @returns SaveWorkflowGlobalEnvResponse
   */
  async saveWorkflowGlobalEnv(request: $_model.SaveWorkflowGlobalEnvRequest): Promise<$_model.SaveWorkflowGlobalEnvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveWorkflowGlobalEnvWithOptions(request, runtime);
  }

  /**
   * Sets the model used by a session and optionally configures the thinking level.
   * 
   * @remarks
   * - Pass the `sessionId` returned by CreateAgentSession and the `Models[].Id` returned by ListModels as `Params.sessionId` and `Params.modelId`, respectively. The visibility of a model in the model catalog does not mean that the target session supports the model. The final validation is performed by the target session.
   * - `modelId` is required. When you only modify the model, you can omit `thinkingLevel`. For more information about how to configure the thinking level, see the supplementary description of request parameters.
   * - This operation only modifies the target session and does not modify the global default model of the agent or account. The session may deny configuration modifications during execution, and switching during runtime is not guaranteed to be supported.
   * - The model and thinking level settings are applied step by step. If the call fails, the model may have already been changed, and an overall rollback is not guaranteed. You should call GetAgentSessionModel to query the current configuration before deciding on subsequent operations. After a successful call, you can read the actual effective values from the returned result.
   * 
   * @param tmpReq - SetAgentSessionModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAgentSessionModelResponse
   */
  async setAgentSessionModelWithOptions(tmpReq: $_model.SetAgentSessionModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAgentSessionModelResponse> {
    tmpReq.validate();
    let request = new $_model.SetAgentSessionModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jsonrpc)) {
      body["Jsonrpc"] = request.jsonrpc;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAgentSessionModel",
      version: "2026-07-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAgentSessionModelResponse>(await this.callApi(params, req, runtime), new $_model.SetAgentSessionModelResponse({}));
  }

  /**
   * Sets the model used by a session and optionally configures the thinking level.
   * 
   * @remarks
   * - Pass the `sessionId` returned by CreateAgentSession and the `Models[].Id` returned by ListModels as `Params.sessionId` and `Params.modelId`, respectively. The visibility of a model in the model catalog does not mean that the target session supports the model. The final validation is performed by the target session.
   * - `modelId` is required. When you only modify the model, you can omit `thinkingLevel`. For more information about how to configure the thinking level, see the supplementary description of request parameters.
   * - This operation only modifies the target session and does not modify the global default model of the agent or account. The session may deny configuration modifications during execution, and switching during runtime is not guaranteed to be supported.
   * - The model and thinking level settings are applied step by step. If the call fails, the model may have already been changed, and an overall rollback is not guaranteed. You should call GetAgentSessionModel to query the current configuration before deciding on subsequent operations. After a successful call, you can read the actual effective values from the returned result.
   * 
   * @param request - SetAgentSessionModelRequest
   * @returns SetAgentSessionModelResponse
   */
  async setAgentSessionModel(request: $_model.SetAgentSessionModelRequest): Promise<$_model.SetAgentSessionModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAgentSessionModelWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of an agent.
   * 
   * @remarks
   * - `Name` is used only to locate the agent and cannot be modified after creation.
   * - Each agent can be bound to only one knowledge base.
   * - `Tools` is updated according to the rules below. If `Skills` or `KnowledgeBases` is not passed, the original value is retained. If a non-empty array is passed, it replaces the original value entirely. If an empty array is passed, the corresponding binding is removed. Other optional fields retain their original values if not passed.
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
   * Updates the configuration of an agent.
   * 
   * @remarks
   * - `Name` is used only to locate the agent and cannot be modified after creation.
   * - Each agent can be bound to only one knowledge base.
   * - `Tools` is updated according to the rules below. If `Skills` or `KnowledgeBases` is not passed, the original value is retained. If a non-empty array is passed, it replaces the original value entirely. If an empty array is passed, the corresponding binding is removed. Other optional fields retain their original values if not passed.
   * 
   * @param request - UpdateAgentRequest
   * @returns UpdateAgentResponse
   */
  async updateAgent(request: $_model.UpdateAgentRequest): Promise<$_model.UpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentWithOptions(request, runtime);
  }

  /**
   * Updates a skill.
   * 
   * @remarks
   * - Update rules:
   *   - `Name` is used only to locate the skill and cannot be modified.
   *   - The caller must be the creator of the skill or the root account of the tenant that has permissions to manage the tenant-level skill.
   * - Replacement rules:
   *   - If `Description` and `Visibility` are omitted, their original values are retained. Passing `null` is treated as omission and cannot be used to clear the original values.
   *   - `Metadata` is replaced as a whole, not merged incrementally. If `Metadata` is omitted, the original content is retained. If it is passed, old fields not included in the new object are deleted.
   *   - When modifying only `Description` or `Visibility`, do not pass `Metadata` or an empty object `{}`. An empty object replaces the original metadata with an empty object.
   * - Content sources:
   *   - When replacing the body or bundle, you must choose one and only one of `skillMd`, `transitId`, or `bundleUrl`.
   *   - For the field formats of the three sources, the Transit upload confirmation process, and the `bundleUrl` restrictions, refer to CreateSkill. Pass the selected source in `UpdateSkill.Metadata`.
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
   * Updates a skill.
   * 
   * @remarks
   * - Update rules:
   *   - `Name` is used only to locate the skill and cannot be modified.
   *   - The caller must be the creator of the skill or the root account of the tenant that has permissions to manage the tenant-level skill.
   * - Replacement rules:
   *   - If `Description` and `Visibility` are omitted, their original values are retained. Passing `null` is treated as omission and cannot be used to clear the original values.
   *   - `Metadata` is replaced as a whole, not merged incrementally. If `Metadata` is omitted, the original content is retained. If it is passed, old fields not included in the new object are deleted.
   *   - When modifying only `Description` or `Visibility`, do not pass `Metadata` or an empty object `{}`. An empty object replaces the original metadata with an empty object.
   * - Content sources:
   *   - When replacing the body or bundle, you must choose one and only one of `skillMd`, `transitId`, or `bundleUrl`.
   *   - For the field formats of the three sources, the Transit upload confirmation process, and the `bundleUrl` restrictions, refer to CreateSkill. Pass the selected source in `UpdateSkill.Metadata`.
   * 
   * @param request - UpdateSkillRequest
   * @returns UpdateSkillResponse
   */
  async updateSkill(request: $_model.UpdateSkillRequest): Promise<$_model.UpdateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSkillWithOptions(request, runtime);
  }

}
