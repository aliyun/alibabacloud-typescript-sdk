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
    this._productId = "Yike";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yike", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds members to a project.
   * 
   * @remarks
   * Adds users under the same Alibaba Cloud account to a specified project in the default workspace of the Alibaba Cloud account, and grants the Edit permission by default. ProjectId specifies the project ID. YikeUserIds specifies a comma-separated list of Yike user IDs, which are not Alibaba Cloud UIDs. Currently, only the default workspace of the Alibaba Cloud account is supported, and projects in newly created workspaces are not supported. This operation follows the behavior of the original member API operation: adding an existing member resets the project permissions. Regular members are assigned the Edit permission, and SuperAdmins of the default workspace retain the Manage permission. Only Alibaba Cloud accounts that have activated ProductionOpenAPI are supported. Default Alibaba Cloud account projects (pd_Alibaba Cloud account ID) are not supported.
   * 
   * @param request - AddProjectMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddProjectMembersResponse
   */
  async addProjectMembersWithOptions(request: $_model.AddProjectMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddProjectMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.yikeUserIds)) {
      query["YikeUserIds"] = request.yikeUserIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddProjectMembers",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddProjectMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddProjectMembersResponse({}));
  }

  /**
   * Adds members to a project.
   * 
   * @remarks
   * Adds users under the same Alibaba Cloud account to a specified project in the default workspace of the Alibaba Cloud account, and grants the Edit permission by default. ProjectId specifies the project ID. YikeUserIds specifies a comma-separated list of Yike user IDs, which are not Alibaba Cloud UIDs. Currently, only the default workspace of the Alibaba Cloud account is supported, and projects in newly created workspaces are not supported. This operation follows the behavior of the original member API operation: adding an existing member resets the project permissions. Regular members are assigned the Edit permission, and SuperAdmins of the default workspace retain the Manage permission. Only Alibaba Cloud accounts that have activated ProductionOpenAPI are supported. Default Alibaba Cloud account projects (pd_Alibaba Cloud account ID) are not supported.
   * 
   * @param request - AddProjectMembersRequest
   * @returns AddProjectMembersResponse
   */
  async addProjectMembers(request: $_model.AddProjectMembersRequest): Promise<$_model.AddProjectMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addProjectMembersWithOptions(request, runtime);
  }

  /**
   * Retrieves the information of multiple media assets.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media asset content understanding jobs.
   * 
   * @param request - BatchGetMediasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetMediasResponse
   */
  async batchGetMediasWithOptions(request: $_model.BatchGetMediasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetMediasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.bizConfig)) {
      query["BizConfig"] = request.bizConfig;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    if (!$dara.isNull(request.returnDynamicMeta)) {
      query["ReturnDynamicMeta"] = request.returnDynamicMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetMedias",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetMediasResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetMediasResponse({}));
  }

  /**
   * Retrieves the information of multiple media assets.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media asset content understanding jobs.
   * 
   * @param request - BatchGetMediasRequest
   * @returns BatchGetMediasResponse
   */
  async batchGetMedias(request: $_model.BatchGetMediasRequest): Promise<$_model.BatchGetMediasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetMediasWithOptions(request, runtime);
  }

  /**
   * Queries multiple video character replacement jobs.
   * 
   * @remarks
   * Queries the status and results of multiple video character replacement jobs. JobIds is a comma-separated string of job IDs. The response includes a JobList. The input parameters for each job are located in the AppInputConfig field. For the single query operation GetVideoCharacterReplaceJob, the corresponding field is AppParams. When the Status is Finished, you can retrieve the output media assets from the Result field.
   * 
   * @param request - BatchGetVideoCharacterReplaceJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetVideoCharacterReplaceJobsResponse
   */
  async batchGetVideoCharacterReplaceJobsWithOptions(request: $_model.BatchGetVideoCharacterReplaceJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetVideoCharacterReplaceJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetVideoCharacterReplaceJobs",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetVideoCharacterReplaceJobsResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetVideoCharacterReplaceJobsResponse({}));
  }

  /**
   * Queries multiple video character replacement jobs.
   * 
   * @remarks
   * Queries the status and results of multiple video character replacement jobs. JobIds is a comma-separated string of job IDs. The response includes a JobList. The input parameters for each job are located in the AppInputConfig field. For the single query operation GetVideoCharacterReplaceJob, the corresponding field is AppParams. When the Status is Finished, you can retrieve the output media assets from the Result field.
   * 
   * @param request - BatchGetVideoCharacterReplaceJobsRequest
   * @returns BatchGetVideoCharacterReplaceJobsResponse
   */
  async batchGetVideoCharacterReplaceJobs(request: $_model.BatchGetVideoCharacterReplaceJobsRequest): Promise<$_model.BatchGetVideoCharacterReplaceJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetVideoCharacterReplaceJobsWithOptions(request, runtime);
  }

  /**
   * Cancels a generation task.
   * 
   * @param request - CancelGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelGenerationJobResponse
   */
  async cancelGenerationJobWithOptions(request: $_model.CancelGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.CancelGenerationJobResponse({}));
  }

  /**
   * Cancels a generation task.
   * 
   * @param request - CancelGenerationJobRequest
   * @returns CancelGenerationJobResponse
   */
  async cancelGenerationJob(request: $_model.CancelGenerationJobRequest): Promise<$_model.CancelGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelGenerationJobWithOptions(request, runtime);
  }

  /**
   * Creates a media asset category.
   * 
   * @remarks
   * Categories support up to three levels of hierarchy, and each level supports up to 100 subcategories.
   * 
   * @param request - CreateAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssetCategoryResponse
   */
  async createAssetCategoryWithOptions(request: $_model.CreateAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateAssetCategoryResponse({}));
  }

  /**
   * Creates a media asset category.
   * 
   * @remarks
   * Categories support up to three levels of hierarchy, and each level supports up to 100 subcategories.
   * 
   * @param request - CreateAssetCategoryRequest
   * @returns CreateAssetCategoryResponse
   */
  async createAssetCategory(request: $_model.CreateAssetCategoryRequest): Promise<$_model.CreateAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAssetCategoryWithOptions(request, runtime);
  }

  /**
   * Creates an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - CreateInfiniteCanvasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInfiniteCanvasResponse
   */
  async createInfiniteCanvasWithOptions(request: $_model.CreateInfiniteCanvasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInfiniteCanvasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverUrl)) {
      query["CoverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInfiniteCanvas",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInfiniteCanvasResponse>(await this.callApi(params, req, runtime), new $_model.CreateInfiniteCanvasResponse({}));
  }

  /**
   * Creates an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - CreateInfiniteCanvasRequest
   * @returns CreateInfiniteCanvasResponse
   */
  async createInfiniteCanvas(request: $_model.CreateInfiniteCanvasRequest): Promise<$_model.CreateInfiniteCanvasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInfiniteCanvasWithOptions(request, runtime);
  }

  /**
   * Creates a project.
   * 
   * @remarks
   * Creates a project in a specified workspace and returns the project ID. If WorkspaceId is not specified, the default workspace of the current account is used. After the project is created, you can call GetProject to query the details or call ListProjects to list projects.
   * 
   * @param request - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2026-07-07",
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
   * Creates a project in a specified workspace and returns the project ID. If WorkspaceId is not specified, the default workspace of the current account is used. After the project is created, you can call GetProject to query the details or call ListProjects to list projects.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * Creates a studio.
   * 
   * @remarks
   * Creates a studio and triggers the automatic creation of a default project for the studio. Returns the WorkspaceId and the ProjectId of the default project. You can use the ProjectId directly without creating the default project again.
   * 
   * @param request - CreateWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userCountLimit)) {
      query["UserCountLimit"] = request.userCountLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a studio.
   * 
   * @remarks
   * Creates a studio and triggers the automatic creation of a default project for the studio. Returns the WorkspaceId and the ProjectId of the default project. You can use the ProjectId directly without creating the default project again.
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes a media asset category.
   * 
   * @remarks
   * This operation also deletes its subcategories, including level-2 and level-3 subcategories. Proceed with caution.
   * 
   * @param request - DeleteAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssetCategoryResponse
   */
  async deleteAssetCategoryWithOptions(request: $_model.DeleteAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAssetCategoryResponse({}));
  }

  /**
   * Deletes a media asset category.
   * 
   * @remarks
   * This operation also deletes its subcategories, including level-2 and level-3 subcategories. Proceed with caution.
   * 
   * @param request - DeleteAssetCategoryRequest
   * @returns DeleteAssetCategoryResponse
   */
  async deleteAssetCategory(request: $_model.DeleteAssetCategoryRequest): Promise<$_model.DeleteAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAssetCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media asset content understanding jobs.
   * 
   * @param request - DeleteInfiniteCanvasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInfiniteCanvasResponse
   */
  async deleteInfiniteCanvasWithOptions(request: $_model.DeleteInfiniteCanvasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInfiniteCanvasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.canvasId)) {
      query["CanvasId"] = request.canvasId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInfiniteCanvas",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInfiniteCanvasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInfiniteCanvasResponse({}));
  }

  /**
   * Deletes an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media asset content understanding jobs.
   * 
   * @param request - DeleteInfiniteCanvasRequest
   * @returns DeleteInfiniteCanvasResponse
   */
  async deleteInfiniteCanvas(request: $_model.DeleteInfiniteCanvasRequest): Promise<$_model.DeleteInfiniteCanvasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInfiniteCanvasWithOptions(request, runtime);
  }

  /**
   * Deletes media asset information.
   * 
   * @param request - DeleteMediasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediasResponse
   */
  async deleteMediasWithOptions(request: $_model.DeleteMediasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizConfig)) {
      query["BizConfig"] = request.bizConfig;
    }

    if (!$dara.isNull(request.deletePhysicalFiles)) {
      query["DeletePhysicalFiles"] = request.deletePhysicalFiles;
    }

    if (!$dara.isNull(request.inputURLs)) {
      query["InputURLs"] = request.inputURLs;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMedias",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediasResponse({}));
  }

  /**
   * Deletes media asset information.
   * 
   * @param request - DeleteMediasRequest
   * @returns DeleteMediasResponse
   */
  async deleteMedias(request: $_model.DeleteMediasRequest): Promise<$_model.DeleteMediasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediasWithOptions(request, runtime);
  }

  /**
   * Deletes a project.
   * 
   * @remarks
   * Deletes a project by ProjectId. The caller must have project management permissions.
   * Default projects cannot be deleted. If you attempt to delete a default project, DefaultProductionNotSupported is returned. This operation marks the project as deleted and does not physically delete all assets in the project.
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: $_model.DeleteProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2026-07-07",
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
   * Deletes a project by ProjectId. The caller must have project management permissions.
   * Default projects cannot be deleted. If you attempt to delete a default project, DefaultProductionNotSupported is returned. This operation marks the project as deleted and does not physically delete all assets in the project.
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * Retrieves the logon token for an enterprise account.
   * 
   * @remarks
   * >Notice:  The AI generation-related API operations in the current 2026-03-19 API version will be retired soon. Upgrade to the 2026-07-07 API version.
   * 
   * @param request - GenerateYikeLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateYikeLoginTokenResponse
   */
  async generateYikeLoginTokenWithOptions(request: $_model.GenerateYikeLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateYikeLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateProduction)) {
      query["AutoCreateProduction"] = request.autoCreateProduction;
    }

    if (!$dara.isNull(request.expires)) {
      query["Expires"] = request.expires;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.productionAuth)) {
      query["ProductionAuth"] = request.productionAuth;
    }

    if (!$dara.isNull(request.subUserCredit)) {
      query["SubUserCredit"] = request.subUserCredit;
    }

    if (!$dara.isNull(request.tenant)) {
      query["Tenant"] = request.tenant;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateYikeLoginToken",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateYikeLoginTokenResponse>(await this.callApi(params, req, runtime), new $_model.GenerateYikeLoginTokenResponse({}));
  }

  /**
   * Retrieves the logon token for an enterprise account.
   * 
   * @remarks
   * >Notice:  The AI generation-related API operations in the current 2026-03-19 API version will be retired soon. Upgrade to the 2026-07-07 API version.
   * 
   * @param request - GenerateYikeLoginTokenRequest
   * @returns GenerateYikeLoginTokenResponse
   */
  async generateYikeLoginToken(request: $_model.GenerateYikeLoginTokenRequest): Promise<$_model.GenerateYikeLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateYikeLoginTokenWithOptions(request, runtime);
  }

  /**
   * Queries an asynchronous task of the agent node.
   * 
   * @param request - GetAgentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentJobResponse
   */
  async getAgentJobWithOptions(request: $_model.GetAgentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentJobResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentJobResponse({}));
  }

  /**
   * Queries an asynchronous task of the agent node.
   * 
   * @param request - GetAgentJobRequest
   * @returns GetAgentJobResponse
   */
  async getAgentJob(request: $_model.GetAgentJobRequest): Promise<$_model.GetAgentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentJobWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a specified category and a list of its subcategories.
   * 
   * @param request - GetAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssetCategoryResponse
   */
  async getAssetCategoryWithOptions(request: $_model.GetAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetAssetCategoryResponse({}));
  }

  /**
   * Retrieves the details of a specified category and a list of its subcategories.
   * 
   * @param request - GetAssetCategoryRequest
   * @returns GetAssetCategoryResponse
   */
  async getAssetCategory(request: $_model.GetAssetCategoryRequest): Promise<$_model.GetAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAssetCategoryWithOptions(request, runtime);
  }

  /**
   * Queries an image generation task.
   * 
   * @param request - GetImageGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageGenerationJobResponse
   */
  async getImageGenerationJobWithOptions(request: $_model.GetImageGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetImageGenerationJobResponse({}));
  }

  /**
   * Queries an image generation task.
   * 
   * @param request - GetImageGenerationJobRequest
   * @returns GetImageGenerationJobResponse
   */
  async getImageGenerationJob(request: $_model.GetImageGenerationJobRequest): Promise<$_model.GetImageGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageGenerationJobWithOptions(request, runtime);
  }

  /**
   * Queries an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - GetInfiniteCanvasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInfiniteCanvasResponse
   */
  async getInfiniteCanvasWithOptions(request: $_model.GetInfiniteCanvasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInfiniteCanvasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.canvasId)) {
      query["CanvasId"] = request.canvasId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInfiniteCanvas",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInfiniteCanvasResponse>(await this.callApi(params, req, runtime), new $_model.GetInfiniteCanvasResponse({}));
  }

  /**
   * Queries an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - GetInfiniteCanvasRequest
   * @returns GetInfiniteCanvasResponse
   */
  async getInfiniteCanvas(request: $_model.GetInfiniteCanvasRequest): Promise<$_model.GetInfiniteCanvasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInfiniteCanvasWithOptions(request, runtime);
  }

  /**
   * Queries media assets.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media asset content understanding jobs.
   * 
   * @param request - GetMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaResponse
   */
  async getMediaWithOptions(request: $_model.GetMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.bizConfig)) {
      query["BizConfig"] = request.bizConfig;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaResponse({}));
  }

  /**
   * Queries media assets.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media asset content understanding jobs.
   * 
   * @param request - GetMediaRequest
   * @returns GetMediaResponse
   */
  async getMedia(request: $_model.GetMediaRequest): Promise<$_model.GetMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaWithOptions(request, runtime);
  }

  /**
   * Queries media content comprehension jobs.
   * 
   * @remarks
   * ## Request description
   * This operation queries media content comprehension jobs.
   * 
   * @param request - GetMediaComprehensionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaComprehensionJobResponse
   */
  async getMediaComprehensionJobWithOptions(request: $_model.GetMediaComprehensionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaComprehensionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaComprehensionJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaComprehensionJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaComprehensionJobResponse({}));
  }

  /**
   * Queries media content comprehension jobs.
   * 
   * @remarks
   * ## Request description
   * This operation queries media content comprehension jobs.
   * 
   * @param request - GetMediaComprehensionJobRequest
   * @returns GetMediaComprehensionJobResponse
   */
  async getMediaComprehensionJob(request: $_model.GetMediaComprehensionJobRequest): Promise<$_model.GetMediaComprehensionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaComprehensionJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of a project.
   * 
   * @remarks
   * Queries the basic information of a project and the permissions of the current caller on the project based on the ProjectId. The project information is contained in the Project object of the response and does not include the list of project assets.
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: $_model.GetProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2026-07-07",
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
   * Queries the details of a project.
   * 
   * @remarks
   * Queries the basic information of a project and the permissions of the current caller on the project based on the ProjectId. The project information is contained in the Project object of the response and does not include the list of project assets.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * Queries a creative script generation task.
   * 
   * @param request - GetRemakeScriptJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRemakeScriptJobResponse
   */
  async getRemakeScriptJobWithOptions(request: $_model.GetRemakeScriptJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRemakeScriptJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRemakeScriptJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRemakeScriptJobResponse>(await this.callApi(params, req, runtime), new $_model.GetRemakeScriptJobResponse({}));
  }

  /**
   * Queries a creative script generation task.
   * 
   * @param request - GetRemakeScriptJobRequest
   * @returns GetRemakeScriptJobResponse
   */
  async getRemakeScriptJob(request: $_model.GetRemakeScriptJobRequest): Promise<$_model.GetRemakeScriptJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRemakeScriptJobWithOptions(request, runtime);
  }

  /**
   * Queries a video character replacement task.
   * 
   * @remarks
   * Queries the status and result of a single task by using the JobId returned by the submit operation. When the Status is Finished, you can read the output media assets in Result. Executing indicates that the task is still running.
   * This operation uses AppParams to return the task input parameters. The corresponding field name in the batch query operation is AppInputConfig. The output results are categorized into ImageResult, VideoResult, and AudioResult. Each category contains MediaId and OutputUrl.
   * 
   * @param request - GetVideoCharacterReplaceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoCharacterReplaceJobResponse
   */
  async getVideoCharacterReplaceJobWithOptions(request: $_model.GetVideoCharacterReplaceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoCharacterReplaceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoCharacterReplaceJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoCharacterReplaceJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoCharacterReplaceJobResponse({}));
  }

  /**
   * Queries a video character replacement task.
   * 
   * @remarks
   * Queries the status and result of a single task by using the JobId returned by the submit operation. When the Status is Finished, you can read the output media assets in Result. Executing indicates that the task is still running.
   * This operation uses AppParams to return the task input parameters. The corresponding field name in the batch query operation is AppInputConfig. The output results are categorized into ImageResult, VideoResult, and AudioResult. Each category contains MediaId and OutputUrl.
   * 
   * @param request - GetVideoCharacterReplaceJobRequest
   * @returns GetVideoCharacterReplaceJobResponse
   */
  async getVideoCharacterReplaceJob(request: $_model.GetVideoCharacterReplaceJobRequest): Promise<$_model.GetVideoCharacterReplaceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoCharacterReplaceJobWithOptions(request, runtime);
  }

  /**
   * Queries video creative generation jobs.
   * 
   * @param request - GetVideoCreativeGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoCreativeGenerationJobResponse
   */
  async getVideoCreativeGenerationJobWithOptions(request: $_model.GetVideoCreativeGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoCreativeGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoCreativeGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoCreativeGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoCreativeGenerationJobResponse({}));
  }

  /**
   * Queries video creative generation jobs.
   * 
   * @param request - GetVideoCreativeGenerationJobRequest
   * @returns GetVideoCreativeGenerationJobResponse
   */
  async getVideoCreativeGenerationJob(request: $_model.GetVideoCreativeGenerationJobRequest): Promise<$_model.GetVideoCreativeGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoCreativeGenerationJobWithOptions(request, runtime);
  }

  /**
   * Queries the status, input parameters, and video results of a video text removal job.
   * 
   * @remarks
   * Queries the status, input, parameters, and final results of a video text removal job based on the `JobId`.
   * 
   * @param request - GetVideoDetextJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoDetextJobResponse
   */
  async getVideoDetextJobWithOptions(request: $_model.GetVideoDetextJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoDetextJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoDetextJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoDetextJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoDetextJobResponse({}));
  }

  /**
   * Queries the status, input parameters, and video results of a video text removal job.
   * 
   * @remarks
   * Queries the status, input, parameters, and final results of a video text removal job based on the `JobId`.
   * 
   * @param request - GetVideoDetextJobRequest
   * @returns GetVideoDetextJobResponse
   */
  async getVideoDetextJob(request: $_model.GetVideoDetextJobRequest): Promise<$_model.GetVideoDetextJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoDetextJobWithOptions(request, runtime);
  }

  /**
   * Queries a video generation job.
   * 
   * @param request - GetVideoGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoGenerationJobResponse
   */
  async getVideoGenerationJobWithOptions(request: $_model.GetVideoGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoGenerationJobResponse({}));
  }

  /**
   * Queries a video generation job.
   * 
   * @param request - GetVideoGenerationJobRequest
   * @returns GetVideoGenerationJobResponse
   */
  async getVideoGenerationJob(request: $_model.GetVideoGenerationJobRequest): Promise<$_model.GetVideoGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoGenerationJobWithOptions(request, runtime);
  }

  /**
   * Queries a content understanding and creative script generation task.
   * 
   * @remarks
   * Queries the task status based on the JobId returned by SubmitVideoRemakeJob. Upon completion, returns the download URLs of the JSON files for the video content understanding results and the creative script. If the task fails, returns ErrorCode and ErrorMessage.
   * 
   * @param request - GetVideoRemakeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoRemakeJobResponse
   */
  async getVideoRemakeJobWithOptions(request: $_model.GetVideoRemakeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoRemakeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoRemakeJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoRemakeJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoRemakeJobResponse({}));
  }

  /**
   * Queries a content understanding and creative script generation task.
   * 
   * @remarks
   * Queries the task status based on the JobId returned by SubmitVideoRemakeJob. Upon completion, returns the download URLs of the JSON files for the video content understanding results and the creative script. If the task fails, returns ErrorCode and ErrorMessage.
   * 
   * @param request - GetVideoRemakeJobRequest
   * @returns GetVideoRemakeJobResponse
   */
  async getVideoRemakeJob(request: $_model.GetVideoRemakeJobRequest): Promise<$_model.GetVideoRemakeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoRemakeJobWithOptions(request, runtime);
  }

  /**
   * Submits a video rendering and compositing job.
   * 
   * @param request - GetVideoRenderJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoRenderJobResponse
   */
  async getVideoRenderJobWithOptions(request: $_model.GetVideoRenderJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoRenderJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoRenderJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoRenderJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoRenderJobResponse({}));
  }

  /**
   * Submits a video rendering and compositing job.
   * 
   * @param request - GetVideoRenderJobRequest
   * @returns GetVideoRenderJobResponse
   */
  async getVideoRenderJob(request: $_model.GetVideoRenderJobRequest): Promise<$_model.GetVideoRenderJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoRenderJobWithOptions(request, runtime);
  }

  /**
   * Queries the status, input parameters, and multilingual outputs of a video translation job.
   * 
   * @remarks
   * Queries the status, input, parameters, and final results of a video translation job based on JobId.
   * 
   * @param request - GetVideoTranslationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoTranslationJobResponse
   */
  async getVideoTranslationJobWithOptions(request: $_model.GetVideoTranslationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoTranslationJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoTranslationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoTranslationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoTranslationJobResponse({}));
  }

  /**
   * Queries the status, input parameters, and multilingual outputs of a video translation job.
   * 
   * @remarks
   * Queries the status, input, parameters, and final results of a video translation job based on JobId.
   * 
   * @param request - GetVideoTranslationJobRequest
   * @returns GetVideoTranslationJobResponse
   */
  async getVideoTranslationJob(request: $_model.GetVideoTranslationJobRequest): Promise<$_model.GetVideoTranslationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoTranslationJobWithOptions(request, runtime);
  }

  /**
   * Retrieves the membership plan and credit information of the Yike main account.
   * 
   * @param request - GetYikeAccountCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeAccountCreditResponse
   */
  async getYikeAccountCreditWithOptions(request: $_model.GetYikeAccountCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeAccountCreditResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeAccountCredit",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeAccountCreditResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeAccountCreditResponse({}));
  }

  /**
   * Retrieves the membership plan and credit information of the Yike main account.
   * 
   * @param request - GetYikeAccountCreditRequest
   * @returns GetYikeAccountCreditResponse
   */
  async getYikeAccountCredit(request: $_model.GetYikeAccountCreditRequest): Promise<$_model.GetYikeAccountCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAccountCreditWithOptions(request, runtime);
  }

  /**
   * Queries the actual credits consumed by a task.
   * 
   * @param request - GetYikeJobCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeJobCreditResponse
   */
  async getYikeJobCreditWithOptions(request: $_model.GetYikeJobCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeJobCreditResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeJobCredit",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeJobCreditResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeJobCreditResponse({}));
  }

  /**
   * Queries the actual credits consumed by a task.
   * 
   * @param request - GetYikeJobCreditRequest
   * @returns GetYikeJobCreditResponse
   */
  async getYikeJobCredit(request: $_model.GetYikeJobCreditRequest): Promise<$_model.GetYikeJobCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeJobCreditWithOptions(request, runtime);
  }

  /**
   * Imports media assets.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media content understanding jobs.
   * 
   * @param request - ImportMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportMediaResponse
   */
  async importMediaWithOptions(request: $_model.ImportMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizConfig)) {
      query["BizConfig"] = request.bizConfig;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicMetaData)) {
      query["DynamicMetaData"] = request.dynamicMetaData;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.importSource)) {
      query["ImportSource"] = request.importSource;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.registerConfig)) {
      query["RegisterConfig"] = request.registerConfig;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.yikeAssetConfig)) {
      query["YikeAssetConfig"] = request.yikeAssetConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportMediaResponse>(await this.callApi(params, req, runtime), new $_model.ImportMediaResponse({}));
  }

  /**
   * Imports media assets.
   * 
   * @remarks
   * ## Request description
   * This API operation queries media content understanding jobs.
   * 
   * @param request - ImportMediaRequest
   * @returns ImportMediaResponse
   */
  async importMedia(request: $_model.ImportMediaRequest): Promise<$_model.ImportMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importMediaWithOptions(request, runtime);
  }

  /**
   * Retrieves a paginated list of categories.
   * 
   * @param request - ListAssetCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssetCategoriesResponse
   */
  async listAssetCategoriesWithOptions(request: $_model.ListAssetCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAssetCategoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAssetCategories",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAssetCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListAssetCategoriesResponse({}));
  }

  /**
   * Retrieves a paginated list of categories.
   * 
   * @param request - ListAssetCategoriesRequest
   * @returns ListAssetCategoriesResponse
   */
  async listAssetCategories(request: $_model.ListAssetCategoriesRequest): Promise<$_model.ListAssetCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssetCategoriesWithOptions(request, runtime);
  }

  /**
   * Queries the list of infinite canvases.
   * 
   * @remarks
   * ## Request description
   * This operation queries media asset content understanding jobs.
   * 
   * @param request - ListInfiniteCanvasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInfiniteCanvasesResponse
   */
  async listInfiniteCanvasesWithOptions(request: $_model.ListInfiniteCanvasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInfiniteCanvasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInfiniteCanvases",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInfiniteCanvasesResponse>(await this.callApi(params, req, runtime), new $_model.ListInfiniteCanvasesResponse({}));
  }

  /**
   * Queries the list of infinite canvases.
   * 
   * @remarks
   * ## Request description
   * This operation queries media asset content understanding jobs.
   * 
   * @param request - ListInfiniteCanvasesRequest
   * @returns ListInfiniteCanvasesResponse
   */
  async listInfiniteCanvases(request: $_model.ListInfiniteCanvasesRequest): Promise<$_model.ListInfiniteCanvasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInfiniteCanvasesWithOptions(request, runtime);
  }

  /**
   * Queries the list of projects.
   * 
   * @remarks
   * Queries the list of projects accessible to the current caller. You can use WorkspaceId to filter projects by workspace. For pagination, specify both PageNo and PageSize as positive integers starting from 1. If valid values are not provided for both parameters, the query defaults to page 1 with 10 entries per page. The response includes ProjectList but does not include TotalCount. MaxResults and NextToken are retained for backward compatibility and are not used for pagination.
   * 
   * @param request - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(request: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2026-07-07",
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
   * Queries the list of projects.
   * 
   * @remarks
   * Queries the list of projects accessible to the current caller. You can use WorkspaceId to filter projects by workspace. For pagination, specify both PageNo and PageSize as positive integers starting from 1. If valid values are not provided for both parameters, the query defaults to page 1 with 10 entries per page. The response includes ProjectList but does not include TotalCount. MaxResults and NextToken are retained for backward compatibility and are not used for pagination.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * Queries a list of workspaces.
   * 
   * @remarks
   * Queries the list of workspaces accessible to the current caller. You can use PageNo and PageSize to paginate the results. The default page number is 1, and the default page size is 10. The response includes WorkspaceList and TotalCount. The ID of the default project for a workspace is returned in the DefaultProjectId field.
   * 
   * @param request - ListWorkspacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Queries a list of workspaces.
   * 
   * @remarks
   * Queries the list of workspaces accessible to the current caller. You can use PageNo and PageSize to paginate the results. The default page number is 1, and the default page size is 10. The response includes WorkspaceList and TotalCount. The ID of the default project for a workspace is returned in the DefaultProjectId field.
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkspacesWithOptions(request, runtime);
  }

  /**
   * Pre-validates a video character replacement task.
   * 
   * @remarks
   * Before submitting a task, validates the input materials for a specified application. AppParams is a JSON-serialized string. The field names must match the input definition of the application corresponding to the AppId. Image, audio, and video materials must match the input types and be accessible.
   * If Status is Success, the validation passes and Result is an empty array. If Status is Failed, Result returns the failed parameter keys and error codes for each item. This operation does not create a task. After the validation passes, call SubmitVideoCharacterReplaceJob to submit the task.
   * 
   * @param request - PrecheckVideoCharacterReplaceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrecheckVideoCharacterReplaceJobResponse
   */
  async precheckVideoCharacterReplaceJobWithOptions(request: $_model.PrecheckVideoCharacterReplaceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckVideoCharacterReplaceJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appParams)) {
      query["AppParams"] = request.appParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrecheckVideoCharacterReplaceJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrecheckVideoCharacterReplaceJobResponse>(await this.callApi(params, req, runtime), new $_model.PrecheckVideoCharacterReplaceJobResponse({}));
  }

  /**
   * Pre-validates a video character replacement task.
   * 
   * @remarks
   * Before submitting a task, validates the input materials for a specified application. AppParams is a JSON-serialized string. The field names must match the input definition of the application corresponding to the AppId. Image, audio, and video materials must match the input types and be accessible.
   * If Status is Success, the validation passes and Result is an empty array. If Status is Failed, Result returns the failed parameter keys and error codes for each item. This operation does not create a task. After the validation passes, call SubmitVideoCharacterReplaceJob to submit the task.
   * 
   * @param request - PrecheckVideoCharacterReplaceJobRequest
   * @returns PrecheckVideoCharacterReplaceJobResponse
   */
  async precheckVideoCharacterReplaceJob(request: $_model.PrecheckVideoCharacterReplaceJobRequest): Promise<$_model.PrecheckVideoCharacterReplaceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.precheckVideoCharacterReplaceJobWithOptions(request, runtime);
  }

  /**
   * Retrieves media asset information that matches the specified parameters.
   * 
   * @param request - SearchMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaResponse
   */
  async searchMediaWithOptions(request: $_model.SearchMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizConfig)) {
      query["BizConfig"] = request.bizConfig;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.match)) {
      query["Match"] = request.match;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.scrollToken)) {
      query["ScrollToken"] = request.scrollToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaResponse({}));
  }

  /**
   * Retrieves media asset information that matches the specified parameters.
   * 
   * @param request - SearchMediaRequest
   * @returns SearchMediaResponse
   */
  async searchMedia(request: $_model.SearchMediaRequest): Promise<$_model.SearchMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  /**
   * Submits an asynchronous task for an agent node.
   * 
   * @param request - SubmitAgentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAgentJobResponse
   */
  async submitAgentJobWithOptions(request: $_model.SubmitAgentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAgentJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.notifyUrl)) {
      query["NotifyUrl"] = request.notifyUrl;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.skill)) {
      query["Skill"] = request.skill;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAgentJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAgentJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAgentJobResponse({}));
  }

  /**
   * Submits an asynchronous task for an agent node.
   * 
   * @param request - SubmitAgentJobRequest
   * @returns SubmitAgentJobResponse
   */
  async submitAgentJob(request: $_model.SubmitAgentJobRequest): Promise<$_model.SubmitAgentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitAgentJobWithOptions(request, runtime);
  }

  /**
   * Submits an image generation task.
   * 
   * @param request - SubmitImageGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImageGenerationJobResponse
   */
  async submitImageGenerationJobWithOptions(request: $_model.SubmitImageGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitImageGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["AspectRatio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      query["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      query["N"] = request.n;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitImageGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitImageGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitImageGenerationJobResponse({}));
  }

  /**
   * Submits an image generation task.
   * 
   * @param request - SubmitImageGenerationJobRequest
   * @returns SubmitImageGenerationJobResponse
   */
  async submitImageGenerationJob(request: $_model.SubmitImageGenerationJobRequest): Promise<$_model.SubmitImageGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitImageGenerationJobWithOptions(request, runtime);
  }

  /**
   * Submits a media content understanding job.
   * 
   * @remarks
   * ## Request description
   * This API operation performs content understanding based on provided media files, such as video URLs. Additionally, you can pass custom parameters through the `UserData` field, which are returned as-is in the callback.
   * 
   * @param request - SubmitMediaComprehensionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaComprehensionJobResponse
   */
  async submitMediaComprehensionJobWithOptions(request: $_model.SubmitMediaComprehensionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaComprehensionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaComprehensionJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaComprehensionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaComprehensionJobResponse({}));
  }

  /**
   * Submits a media content understanding job.
   * 
   * @remarks
   * ## Request description
   * This API operation performs content understanding based on provided media files, such as video URLs. Additionally, you can pass custom parameters through the `UserData` field, which are returned as-is in the callback.
   * 
   * @param request - SubmitMediaComprehensionJobRequest
   * @returns SubmitMediaComprehensionJobResponse
   */
  async submitMediaComprehensionJob(request: $_model.SubmitMediaComprehensionJobRequest): Promise<$_model.SubmitMediaComprehensionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaComprehensionJobWithOptions(request, runtime);
  }

  /**
   * Submits a creative script generation task.
   * 
   * @remarks
   * This API generates a new voiceover script based on content understanding results and new product or avatar information. It also supports passing custom parameters through the UserData field, which are returned as-is in the callback.
   * 
   * @param request - SubmitRemakeScriptJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitRemakeScriptJobResponse
   */
  async submitRemakeScriptJobWithOptions(request: $_model.SubmitRemakeScriptJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitRemakeScriptJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.remakeParams)) {
      query["RemakeParams"] = request.remakeParams;
    }

    if (!$dara.isNull(request.remakeType)) {
      query["RemakeType"] = request.remakeType;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitRemakeScriptJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitRemakeScriptJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitRemakeScriptJobResponse({}));
  }

  /**
   * Submits a creative script generation task.
   * 
   * @remarks
   * This API generates a new voiceover script based on content understanding results and new product or avatar information. It also supports passing custom parameters through the UserData field, which are returned as-is in the callback.
   * 
   * @param request - SubmitRemakeScriptJobRequest
   * @returns SubmitRemakeScriptJobResponse
   */
  async submitRemakeScriptJob(request: $_model.SubmitRemakeScriptJobRequest): Promise<$_model.SubmitRemakeScriptJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitRemakeScriptJobWithOptions(request, runtime);
  }

  /**
   * Submits a video character replacement job.
   * 
   * @remarks
   * Performs an asynchronous commit for a video character replacement node. First, call PrecheckVideoCharacterReplaceJob with the same AppId and AppParams to check the input materials.
   * A returned JobId only indicates that the node has been submitted, not that it has been completed. Use GetVideoCharacterReplaceJob or BatchGetVideoCharacterReplaceJobs to query the status and output results. ProjectId is used to specify a project, and FolderId is used to specify a file folder.
   * 
   * @param request - SubmitVideoCharacterReplaceJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoCharacterReplaceJobResponse
   */
  async submitVideoCharacterReplaceJobWithOptions(request: $_model.SubmitVideoCharacterReplaceJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoCharacterReplaceJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appParams)) {
      body["AppParams"] = request.appParams;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoCharacterReplaceJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoCharacterReplaceJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoCharacterReplaceJobResponse({}));
  }

  /**
   * Submits a video character replacement job.
   * 
   * @remarks
   * Performs an asynchronous commit for a video character replacement node. First, call PrecheckVideoCharacterReplaceJob with the same AppId and AppParams to check the input materials.
   * A returned JobId only indicates that the node has been submitted, not that it has been completed. Use GetVideoCharacterReplaceJob or BatchGetVideoCharacterReplaceJobs to query the status and output results. ProjectId is used to specify a project, and FolderId is used to specify a file folder.
   * 
   * @param request - SubmitVideoCharacterReplaceJobRequest
   * @returns SubmitVideoCharacterReplaceJobResponse
   */
  async submitVideoCharacterReplaceJob(request: $_model.SubmitVideoCharacterReplaceJobRequest): Promise<$_model.SubmitVideoCharacterReplaceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoCharacterReplaceJobWithOptions(request, runtime);
  }

  /**
   * Submits a video creative generation job.
   * 
   * @param request - SubmitVideoCreativeGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoCreativeGenerationJobResponse
   */
  async submitVideoCreativeGenerationJobWithOptions(request: $_model.SubmitVideoCreativeGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoCreativeGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["AspectRatio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.avatarData)) {
      query["AvatarData"] = request.avatarData;
    }

    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.outputLanguages)) {
      query["OutputLanguages"] = request.outputLanguages;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.userMaterials)) {
      query["UserMaterials"] = request.userMaterials;
    }

    if (!$dara.isNull(request.withSubtitles)) {
      query["WithSubtitles"] = request.withSubtitles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoCreativeGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoCreativeGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoCreativeGenerationJobResponse({}));
  }

  /**
   * Submits a video creative generation job.
   * 
   * @param request - SubmitVideoCreativeGenerationJobRequest
   * @returns SubmitVideoCreativeGenerationJobResponse
   */
  async submitVideoCreativeGenerationJob(request: $_model.SubmitVideoCreativeGenerationJobRequest): Promise<$_model.SubmitVideoCreativeGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoCreativeGenerationJobWithOptions(request, runtime);
  }

  /**
   * Submits an asynchronous video text erasure task that supports full-area erasure, time ranges, and specified regions.
   * 
   * @remarks
   * Submits an asynchronous video text erasure task. The input can be an accessible video URL or a Yike video media asset ID. You can configure the erasure time range and text region.
   * 
   * @param request - SubmitVideoDetextJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoDetextJobResponse
   */
  async submitVideoDetextJobWithOptions(request: $_model.SubmitVideoDetextJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoDetextJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      body["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.output)) {
      body["Output"] = request.output;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoDetextJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoDetextJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoDetextJobResponse({}));
  }

  /**
   * Submits an asynchronous video text erasure task that supports full-area erasure, time ranges, and specified regions.
   * 
   * @remarks
   * Submits an asynchronous video text erasure task. The input can be an accessible video URL or a Yike video media asset ID. You can configure the erasure time range and text region.
   * 
   * @param request - SubmitVideoDetextJobRequest
   * @returns SubmitVideoDetextJobResponse
   */
  async submitVideoDetextJob(request: $_model.SubmitVideoDetextJobRequest): Promise<$_model.SubmitVideoDetextJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoDetextJobWithOptions(request, runtime);
  }

  /**
   * Submits a video generation task.
   * 
   * @param request - SubmitVideoGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoGenerationJobResponse
   */
  async submitVideoGenerationJobWithOptions(request: $_model.SubmitVideoGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["AspectRatio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      query["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      query["N"] = request.n;
    }

    if (!$dara.isNull(request.output)) {
      query["Output"] = request.output;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoGenerationJobResponse({}));
  }

  /**
   * Submits a video generation task.
   * 
   * @param request - SubmitVideoGenerationJobRequest
   * @returns SubmitVideoGenerationJobResponse
   */
  async submitVideoGenerationJob(request: $_model.SubmitVideoGenerationJobRequest): Promise<$_model.SubmitVideoGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoGenerationJobWithOptions(request, runtime);
  }

  /**
   * Submits a content understanding and creative script generation task.
   * 
   * @remarks
   * Submits the original video and remake information such as new products and characters to asynchronously complete video content understanding and creative script generation. Uses the returned JobId to call GetVideoRemakeJob to query the progress and outputs. Video rendering requires a separate call to SubmitVideoRenderJob.
   * 
   * @param request - SubmitVideoRemakeJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoRemakeJobResponse
   */
  async submitVideoRemakeJobWithOptions(request: $_model.SubmitVideoRemakeJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoRemakeJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.remakeParams)) {
      query["RemakeParams"] = request.remakeParams;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoRemakeJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoRemakeJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoRemakeJobResponse({}));
  }

  /**
   * Submits a content understanding and creative script generation task.
   * 
   * @remarks
   * Submits the original video and remake information such as new products and characters to asynchronously complete video content understanding and creative script generation. Uses the returned JobId to call GetVideoRemakeJob to query the progress and outputs. Video rendering requires a separate call to SubmitVideoRenderJob.
   * 
   * @param request - SubmitVideoRemakeJobRequest
   * @returns SubmitVideoRemakeJobResponse
   */
  async submitVideoRemakeJob(request: $_model.SubmitVideoRemakeJobRequest): Promise<$_model.SubmitVideoRemakeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoRemakeJobWithOptions(request, runtime);
  }

  /**
   * Submits a video rendering and compositing task.
   * 
   * @param request - SubmitVideoRenderJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoRenderJobResponse
   */
  async submitVideoRenderJobWithOptions(request: $_model.SubmitVideoRenderJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoRenderJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.script)) {
      query["Script"] = request.script;
    }

    if (!$dara.isNull(request.settings)) {
      query["Settings"] = request.settings;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoRenderJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoRenderJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoRenderJobResponse({}));
  }

  /**
   * Submits a video rendering and compositing task.
   * 
   * @param request - SubmitVideoRenderJobRequest
   * @returns SubmitVideoRenderJobResponse
   */
  async submitVideoRenderJob(request: $_model.SubmitVideoRenderJobRequest): Promise<$_model.SubmitVideoRenderJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoRenderJobWithOptions(request, runtime);
  }

  /**
   * Submits an asynchronous video translation task that supports subtitle translation, voice translation, primary subtitle removal, and on-screen text translation.
   * 
   * @remarks
   * Submits an asynchronous video translation task. The input supports a media URL or a Yike media asset ID. The task parameters are used to select the source language, target language, and the translation capabilities to be enabled.
   * 
   * @param request - SubmitVideoTranslationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoTranslationJobResponse
   */
  async submitVideoTranslationJobWithOptions(request: $_model.SubmitVideoTranslationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoTranslationJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      body["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.output)) {
      body["Output"] = request.output;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoTranslationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoTranslationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoTranslationJobResponse({}));
  }

  /**
   * Submits an asynchronous video translation task that supports subtitle translation, voice translation, primary subtitle removal, and on-screen text translation.
   * 
   * @remarks
   * Submits an asynchronous video translation task. The input supports a media URL or a Yike media asset ID. The task parameters are used to select the source language, target language, and the translation capabilities to be enabled.
   * 
   * @param request - SubmitVideoTranslationJobRequest
   * @returns SubmitVideoTranslationJobResponse
   */
  async submitVideoTranslationJob(request: $_model.SubmitVideoTranslationJobRequest): Promise<$_model.SubmitVideoTranslationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoTranslationJobWithOptions(request, runtime);
  }

  /**
   * Updates a media asset category.
   * 
   * @remarks
   * After you create a media asset category, you can call this operation to update the name of the category by specifying its ID.
   * 
   * @param request - UpdateAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssetCategoryResponse
   */
  async updateAssetCategoryWithOptions(request: $_model.UpdateAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAssetCategoryResponse({}));
  }

  /**
   * Updates a media asset category.
   * 
   * @remarks
   * After you create a media asset category, you can call this operation to update the name of the category by specifying its ID.
   * 
   * @param request - UpdateAssetCategoryRequest
   * @returns UpdateAssetCategoryResponse
   */
  async updateAssetCategory(request: $_model.UpdateAssetCategoryRequest): Promise<$_model.UpdateAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssetCategoryWithOptions(request, runtime);
  }

  /**
   * Updates the information of an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - UpdateInfiniteCanvasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInfiniteCanvasResponse
   */
  async updateInfiniteCanvasWithOptions(request: $_model.UpdateInfiniteCanvasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInfiniteCanvasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.canvasId)) {
      query["CanvasId"] = request.canvasId;
    }

    if (!$dara.isNull(request.coverUrl)) {
      query["CoverUrl"] = request.coverUrl;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInfiniteCanvas",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInfiniteCanvasResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInfiniteCanvasResponse({}));
  }

  /**
   * Updates the information of an infinite canvas.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - UpdateInfiniteCanvasRequest
   * @returns UpdateInfiniteCanvasResponse
   */
  async updateInfiniteCanvas(request: $_model.UpdateInfiniteCanvasRequest): Promise<$_model.UpdateInfiniteCanvasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInfiniteCanvasWithOptions(request, runtime);
  }

  /**
   * Updates media asset information.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - UpdateMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaResponse
   */
  async updateMediaWithOptions(request: $_model.UpdateMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appendTags)) {
      query["AppendTags"] = request.appendTags;
    }

    if (!$dara.isNull(request.bizConfig)) {
      query["BizConfig"] = request.bizConfig;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicMetaData)) {
      query["DynamicMetaData"] = request.dynamicMetaData;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaResponse({}));
  }

  /**
   * Updates media asset information.
   * 
   * @remarks
   * ## Request description
   * This API queries media asset content understanding jobs.
   * 
   * @param request - UpdateMediaRequest
   * @returns UpdateMediaResponse
   */
  async updateMedia(request: $_model.UpdateMediaRequest): Promise<$_model.UpdateMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaWithOptions(request, runtime);
  }

  /**
   * Updates the name of a project.
   * 
   * @remarks
   * Updates the name of a project based on the ProjectId and uses Title to specify the new name. This operation only supports modifying the name and does not support modifying the description or cover image. The caller must have edit permissions for the project.
   * 
   * @param request - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: $_model.UpdateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2026-07-07",
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
   * Updates the name of a project.
   * 
   * @remarks
   * Updates the name of a project based on the ProjectId and uses Title to specify the new name. This operation only supports modifying the name and does not support modifying the description or cover image. The caller must have edit permissions for the project.
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

}
