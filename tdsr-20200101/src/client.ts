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
      'cn-hangzhou': "lyj.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tdsr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 保存模型文件
   * 
   * @param request - AddHotspotFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddHotspotFileResponse
   */
  async addHotspotFileWithOptions(request: $_model.AddHotspotFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddHotspotFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddHotspotFile",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddHotspotFileResponse>(await this.callApi(params, req, runtime), new $_model.AddHotspotFileResponse({}));
  }

  /**
   * 保存模型文件
   * 
   * @param request - AddHotspotFileRequest
   * @returns AddHotspotFileResponse
   */
  async addHotspotFile(request: $_model.AddHotspotFileRequest): Promise<$_model.AddHotspotFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addHotspotFileWithOptions(request, runtime);
  }

  /**
   * 打马赛克
   * 
   * @param request - AddMosaicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMosaicsResponse
   */
  async addMosaicsWithOptions(request: $_model.AddMosaicsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMosaicsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.markPosition)) {
      query["MarkPosition"] = request.markPosition;
    }

    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMosaics",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMosaicsResponse>(await this.callApi(params, req, runtime), new $_model.AddMosaicsResponse({}));
  }

  /**
   * 打马赛克
   * 
   * @param request - AddMosaicsRequest
   * @returns AddMosaicsResponse
   */
  async addMosaics(request: $_model.AddMosaicsRequest): Promise<$_model.AddMosaicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMosaicsWithOptions(request, runtime);
  }

  /**
   * 添加项目
   * 
   * @param request - AddProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddProjectResponse
   */
  async addProjectWithOptions(request: $_model.AddProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddProjectResponse>(await this.callApi(params, req, runtime), new $_model.AddProjectResponse({}));
  }

  /**
   * 添加项目
   * 
   * @param request - AddProjectRequest
   * @returns AddProjectResponse
   */
  async addProject(request: $_model.AddProjectRequest): Promise<$_model.AddProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addProjectWithOptions(request, runtime);
  }

  /**
   * 添加相对位置
   * 
   * @deprecated OpenAPI AddRelativePosition is deprecated
   * 
   * @param request - AddRelativePositionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRelativePositionResponse
   */
  async addRelativePositionWithOptions(request: $_model.AddRelativePositionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRelativePositionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.relativePosition)) {
      query["RelativePosition"] = request.relativePosition;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRelativePosition",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRelativePositionResponse>(await this.callApi(params, req, runtime), new $_model.AddRelativePositionResponse({}));
  }

  /**
   * 添加相对位置
   * 
   * @deprecated OpenAPI AddRelativePosition is deprecated
   * 
   * @param request - AddRelativePositionRequest
   * @returns AddRelativePositionResponse
   */
  // Deprecated
  async addRelativePosition(request: $_model.AddRelativePositionRequest): Promise<$_model.AddRelativePositionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRelativePositionWithOptions(request, runtime);
  }

  /**
   * 移动端添加rooms.json
   * 
   * @param request - AddRoomPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRoomPlanResponse
   */
  async addRoomPlanWithOptions(request: $_model.AddRoomPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRoomPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRoomPlan",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRoomPlanResponse>(await this.callApi(params, req, runtime), new $_model.AddRoomPlanResponse({}));
  }

  /**
   * 移动端添加rooms.json
   * 
   * @param request - AddRoomPlanRequest
   * @returns AddRoomPlanResponse
   */
  async addRoomPlan(request: $_model.AddRoomPlanRequest): Promise<$_model.AddRoomPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRoomPlanWithOptions(request, runtime);
  }

  /**
   * 添加主场景
   * 
   * @param request - AddSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSceneResponse
   */
  async addSceneWithOptions(request: $_model.AddSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerUid)) {
      query["CustomerUid"] = request.customerUid;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSceneResponse>(await this.callApi(params, req, runtime), new $_model.AddSceneResponse({}));
  }

  /**
   * 添加主场景
   * 
   * @param request - AddSceneRequest
   * @returns AddSceneResponse
   */
  async addScene(request: $_model.AddSceneRequest): Promise<$_model.AddSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSceneWithOptions(request, runtime);
  }

  /**
   * 创建子场景
   * 
   * @param request - AddSubSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSubSceneResponse
   */
  async addSubSceneWithOptions(request: $_model.AddSubSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSubSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSubSceneResponse>(await this.callApi(params, req, runtime), new $_model.AddSubSceneResponse({}));
  }

  /**
   * 创建子场景
   * 
   * @param request - AddSubSceneRequest
   * @returns AddSubSceneResponse
   */
  async addSubScene(request: $_model.AddSubSceneRequest): Promise<$_model.AddSubSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSubSceneWithOptions(request, runtime);
  }

  /**
   * 检查指定uid用户属性
   * 
   * @param request - CheckUserPropertyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUserPropertyResponse
   */
  async checkUserPropertyWithOptions(request: $_model.CheckUserPropertyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUserPropertyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUserProperty",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUserPropertyResponse>(await this.callApi(params, req, runtime), new $_model.CheckUserPropertyResponse({}));
  }

  /**
   * 检查指定uid用户属性
   * 
   * @param request - CheckUserPropertyRequest
   * @returns CheckUserPropertyResponse
   */
  async checkUserProperty(request: $_model.CheckUserPropertyRequest): Promise<$_model.CheckUserPropertyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUserPropertyWithOptions(request, runtime);
  }

  /**
   * 复制主场景
   * 
   * @param request - CopySceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopySceneResponse
   */
  async copySceneWithOptions(request: $_model.CopySceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopySceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sceneName)) {
      query["SceneName"] = request.sceneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopySceneResponse>(await this.callApi(params, req, runtime), new $_model.CopySceneResponse({}));
  }

  /**
   * 复制主场景
   * 
   * @param request - CopySceneRequest
   * @returns CopySceneResponse
   */
  async copyScene(request: $_model.CopySceneRequest): Promise<$_model.CopySceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copySceneWithOptions(request, runtime);
  }

  /**
   * 获取OSS授权
   * 
   * @param request - CreateUploadPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUploadPolicyResponse
   */
  async createUploadPolicyWithOptions(request: $_model.CreateUploadPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUploadPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUploadPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUploadPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateUploadPolicyResponse({}));
  }

  /**
   * 获取OSS授权
   * 
   * @param request - CreateUploadPolicyRequest
   * @returns CreateUploadPolicyResponse
   */
  async createUploadPolicy(request: $_model.CreateUploadPolicyRequest): Promise<$_model.CreateUploadPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUploadPolicyWithOptions(request, runtime);
  }

  /**
   * 查询项目详情
   * 
   * @param request - DetailProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailProjectResponse
   */
  async detailProjectWithOptions(request: $_model.DetailProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetailProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetailProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetailProjectResponse>(await this.callApi(params, req, runtime), new $_model.DetailProjectResponse({}));
  }

  /**
   * 查询项目详情
   * 
   * @param request - DetailProjectRequest
   * @returns DetailProjectResponse
   */
  async detailProject(request: $_model.DetailProjectRequest): Promise<$_model.DetailProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailProjectWithOptions(request, runtime);
  }

  /**
   * 主场景详细
   * 
   * @param request - DetailSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailSceneResponse
   */
  async detailSceneWithOptions(request: $_model.DetailSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetailSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetailScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetailSceneResponse>(await this.callApi(params, req, runtime), new $_model.DetailSceneResponse({}));
  }

  /**
   * 主场景详细
   * 
   * @param request - DetailSceneRequest
   * @returns DetailSceneResponse
   */
  async detailScene(request: $_model.DetailSceneRequest): Promise<$_model.DetailSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailSceneWithOptions(request, runtime);
  }

  /**
   * 查询子场景详情
   * 
   * @param request - DetailSubSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailSubSceneResponse
   */
  async detailSubSceneWithOptions(request: $_model.DetailSubSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetailSubSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetailSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetailSubSceneResponse>(await this.callApi(params, req, runtime), new $_model.DetailSubSceneResponse({}));
  }

  /**
   * 查询子场景详情
   * 
   * @param request - DetailSubSceneRequest
   * @returns DetailSubSceneResponse
   */
  async detailSubScene(request: $_model.DetailSubSceneRequest): Promise<$_model.DetailSubSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailSubSceneWithOptions(request, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - DropProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropProjectResponse
   */
  async dropProjectWithOptions(request: $_model.DropProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DropProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DropProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DropProjectResponse>(await this.callApi(params, req, runtime), new $_model.DropProjectResponse({}));
  }

  /**
   * 删除项目
   * 
   * @param request - DropProjectRequest
   * @returns DropProjectResponse
   */
  async dropProject(request: $_model.DropProjectRequest): Promise<$_model.DropProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dropProjectWithOptions(request, runtime);
  }

  /**
   * 删除主场景
   * 
   * @param request - DropSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropSceneResponse
   */
  async dropSceneWithOptions(request: $_model.DropSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DropSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DropScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DropSceneResponse>(await this.callApi(params, req, runtime), new $_model.DropSceneResponse({}));
  }

  /**
   * 删除主场景
   * 
   * @param request - DropSceneRequest
   * @returns DropSceneResponse
   */
  async dropScene(request: $_model.DropSceneRequest): Promise<$_model.DropSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dropSceneWithOptions(request, runtime);
  }

  /**
   * 删除子场景
   * 
   * @param request - DropSubSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropSubSceneResponse
   */
  async dropSubSceneWithOptions(request: $_model.DropSubSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DropSubSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DropSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DropSubSceneResponse>(await this.callApi(params, req, runtime), new $_model.DropSubSceneResponse({}));
  }

  /**
   * 删除子场景
   * 
   * @param request - DropSubSceneRequest
   * @returns DropSubSceneResponse
   */
  async dropSubScene(request: $_model.DropSubSceneRequest): Promise<$_model.DropSubSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dropSubSceneWithOptions(request, runtime);
  }

  /**
   * 查询关联数据
   * 
   * @param request - GetConnDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnDataResponse
   */
  async getConnDataWithOptions(request: $_model.GetConnDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnDataResponse>(await this.callApi(params, req, runtime), new $_model.GetConnDataResponse({}));
  }

  /**
   * 查询关联数据
   * 
   * @param request - GetConnDataRequest
   * @returns GetConnDataResponse
   */
  async getConnData(request: $_model.GetConnDataRequest): Promise<$_model.GetConnDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnDataWithOptions(request, runtime);
  }

  /**
   * 复制场景任务状态查询
   * 
   * @param request - GetCopySceneTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCopySceneTaskStatusResponse
   */
  async getCopySceneTaskStatusWithOptions(request: $_model.GetCopySceneTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCopySceneTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCopySceneTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCopySceneTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetCopySceneTaskStatusResponse({}));
  }

  /**
   * 复制场景任务状态查询
   * 
   * @param request - GetCopySceneTaskStatusRequest
   * @returns GetCopySceneTaskStatusResponse
   */
  async getCopySceneTaskStatus(request: $_model.GetCopySceneTaskStatusRequest): Promise<$_model.GetCopySceneTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCopySceneTaskStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotspotConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotConfigResponse
   */
  async getHotspotConfigWithOptions(request: $_model.GetHotspotConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotConfigResponse({}));
  }

  /**
   * @param request - GetHotspotConfigRequest
   * @returns GetHotspotConfigResponse
   */
  async getHotspotConfig(request: $_model.GetHotspotConfigRequest): Promise<$_model.GetHotspotConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotspotConfigWithOptions(request, runtime);
  }

  /**
   * 查询后处理场景信息
   * 
   * @param request - GetHotspotSceneDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotSceneDataResponse
   */
  async getHotspotSceneDataWithOptions(request: $_model.GetHotspotSceneDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotSceneDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotSceneData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotSceneDataResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotSceneDataResponse({}));
  }

  /**
   * 查询后处理场景信息
   * 
   * @param request - GetHotspotSceneDataRequest
   * @returns GetHotspotSceneDataResponse
   */
  async getHotspotSceneData(request: $_model.GetHotspotSceneDataRequest): Promise<$_model.GetHotspotSceneDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotspotSceneDataWithOptions(request, runtime);
  }

  /**
   * @param request - GetHotspotTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotTagResponse
   */
  async getHotspotTagWithOptions(request: $_model.GetHotspotTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotspotTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!$dara.isNull(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotTag",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotspotTagResponse>(await this.callApi(params, req, runtime), new $_model.GetHotspotTagResponse({}));
  }

  /**
   * @param request - GetHotspotTagRequest
   * @returns GetHotspotTagResponse
   */
  async getHotspotTag(request: $_model.GetHotspotTagRequest): Promise<$_model.GetHotspotTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotspotTagWithOptions(request, runtime);
  }

  /**
   * 获取标注数据
   * 
   * @param request - GetLayoutDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayoutDataResponse
   */
  async getLayoutDataWithOptions(request: $_model.GetLayoutDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLayoutDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayoutData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLayoutDataResponse>(await this.callApi(params, req, runtime), new $_model.GetLayoutDataResponse({}));
  }

  /**
   * 获取标注数据
   * 
   * @param request - GetLayoutDataRequest
   * @returns GetLayoutDataResponse
   */
  async getLayoutData(request: $_model.GetLayoutDataRequest): Promise<$_model.GetLayoutDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLayoutDataWithOptions(request, runtime);
  }

  /**
   * 获取算法自动标注数据
   * 
   * @param request - GetOriginLayoutDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginLayoutDataResponse
   */
  async getOriginLayoutDataWithOptions(request: $_model.GetOriginLayoutDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginLayoutDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginLayoutData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginLayoutDataResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginLayoutDataResponse({}));
  }

  /**
   * 获取算法自动标注数据
   * 
   * @param request - GetOriginLayoutDataRequest
   * @returns GetOriginLayoutDataResponse
   */
  async getOriginLayoutData(request: $_model.GetOriginLayoutDataRequest): Promise<$_model.GetOriginLayoutDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginLayoutDataWithOptions(request, runtime);
  }

  /**
   * 获取OSS授权
   * 
   * @param request - GetOssPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssPolicyResponse
   */
  async getOssPolicyWithOptions(request: $_model.GetOssPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssPolicy",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetOssPolicyResponse({}));
  }

  /**
   * 获取OSS授权
   * 
   * @param request - GetOssPolicyRequest
   * @returns GetOssPolicyResponse
   */
  async getOssPolicy(request: $_model.GetOssPolicyRequest): Promise<$_model.GetOssPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssPolicyWithOptions(request, runtime);
  }

  /**
   * 打包场景任务状态查询
   * 
   * @param request - GetPackSceneTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPackSceneTaskStatusResponse
   */
  async getPackSceneTaskStatusWithOptions(request: $_model.GetPackSceneTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPackSceneTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPackSceneTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPackSceneTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetPackSceneTaskStatusResponse({}));
  }

  /**
   * 打包场景任务状态查询
   * 
   * @param request - GetPackSceneTaskStatusRequest
   * @returns GetPackSceneTaskStatusResponse
   */
  async getPackSceneTaskStatus(request: $_model.GetPackSceneTaskStatusRequest): Promise<$_model.GetPackSceneTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPackSceneTaskStatusWithOptions(request, runtime);
  }

  /**
   * 查询矫正后图片
   * 
   * @param request - GetRectifyImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRectifyImageResponse
   */
  async getRectifyImageWithOptions(request: $_model.GetRectifyImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRectifyImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRectifyImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRectifyImageResponse>(await this.callApi(params, req, runtime), new $_model.GetRectifyImageResponse({}));
  }

  /**
   * 查询矫正后图片
   * 
   * @param request - GetRectifyImageRequest
   * @returns GetRectifyImageResponse
   */
  async getRectifyImage(request: $_model.GetRectifyImageRequest): Promise<$_model.GetRectifyImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRectifyImageWithOptions(request, runtime);
  }

  /**
   * 查看场景下重建任务
   * 
   * @param request - GetSceneBuildTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSceneBuildTaskStatusResponse
   */
  async getSceneBuildTaskStatusWithOptions(request: $_model.GetSceneBuildTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSceneBuildTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSceneBuildTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSceneBuildTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSceneBuildTaskStatusResponse({}));
  }

  /**
   * 查看场景下重建任务
   * 
   * @param request - GetSceneBuildTaskStatusRequest
   * @returns GetSceneBuildTaskStatusResponse
   */
  async getSceneBuildTaskStatus(request: $_model.GetSceneBuildTaskStatusRequest): Promise<$_model.GetSceneBuildTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSceneBuildTaskStatusWithOptions(request, runtime);
  }

  /**
   * 获取场景的打包地址
   * 
   * @param request - GetScenePackUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScenePackUrlResponse
   */
  async getScenePackUrlWithOptions(request: $_model.GetScenePackUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScenePackUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScenePackUrl",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScenePackUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetScenePackUrlResponse({}));
  }

  /**
   * 获取场景的打包地址
   * 
   * @param request - GetScenePackUrlRequest
   * @returns GetScenePackUrlResponse
   */
  async getScenePackUrl(request: $_model.GetScenePackUrlRequest): Promise<$_model.GetScenePackUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScenePackUrlWithOptions(request, runtime);
  }

  /**
   * 查询模型数据
   * 
   * @param request - GetScenePreviewDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScenePreviewDataResponse
   */
  async getScenePreviewDataWithOptions(request: $_model.GetScenePreviewDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScenePreviewDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    if (!$dara.isNull(request.showTag)) {
      query["ShowTag"] = request.showTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScenePreviewData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScenePreviewDataResponse>(await this.callApi(params, req, runtime), new $_model.GetScenePreviewDataResponse({}));
  }

  /**
   * 查询模型数据
   * 
   * @param request - GetScenePreviewDataRequest
   * @returns GetScenePreviewDataResponse
   */
  async getScenePreviewData(request: $_model.GetScenePreviewDataRequest): Promise<$_model.GetScenePreviewDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScenePreviewDataWithOptions(request, runtime);
  }

  /**
   * 查询模型预览信息
   * 
   * @param request - GetScenePreviewInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScenePreviewInfoResponse
   */
  async getScenePreviewInfoWithOptions(request: $_model.GetScenePreviewInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScenePreviewInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.modelToken)) {
      query["ModelToken"] = request.modelToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScenePreviewInfo",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScenePreviewInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetScenePreviewInfoResponse({}));
  }

  /**
   * 查询模型预览信息
   * 
   * @param request - GetScenePreviewInfoRequest
   * @returns GetScenePreviewInfoResponse
   */
  async getScenePreviewInfo(request: $_model.GetScenePreviewInfoRequest): Promise<$_model.GetScenePreviewInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScenePreviewInfoWithOptions(request, runtime);
  }

  /**
   * 获取模型预览数据
   * 
   * @param request - GetScenePreviewResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScenePreviewResourceResponse
   */
  async getScenePreviewResourceWithOptions(request: $_model.GetScenePreviewResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScenePreviewResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draft)) {
      query["Draft"] = request.draft;
    }

    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScenePreviewResource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScenePreviewResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetScenePreviewResourceResponse({}));
  }

  /**
   * 获取模型预览数据
   * 
   * @param request - GetScenePreviewResourceRequest
   * @returns GetScenePreviewResourceResponse
   */
  async getScenePreviewResource(request: $_model.GetScenePreviewResourceRequest): Promise<$_model.GetScenePreviewResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScenePreviewResourceWithOptions(request, runtime);
  }

  /**
   * 查询单场景关联数据
   * 
   * @param request - GetSingleConnDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSingleConnDataResponse
   */
  async getSingleConnDataWithOptions(request: $_model.GetSingleConnDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSingleConnDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSingleConnData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSingleConnDataResponse>(await this.callApi(params, req, runtime), new $_model.GetSingleConnDataResponse({}));
  }

  /**
   * 查询单场景关联数据
   * 
   * @param request - GetSingleConnDataRequest
   * @returns GetSingleConnDataResponse
   */
  async getSingleConnData(request: $_model.GetSingleConnDataRequest): Promise<$_model.GetSingleConnDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSingleConnDataWithOptions(request, runtime);
  }

  /**
   * 打包58数据状态检查
   * 
   * @param request - GetSourcePackStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourcePackStatusResponse
   */
  async getSourcePackStatusWithOptions(request: $_model.GetSourcePackStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourcePackStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSourcePackStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourcePackStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSourcePackStatusResponse({}));
  }

  /**
   * 打包58数据状态检查
   * 
   * @param request - GetSourcePackStatusRequest
   * @returns GetSourcePackStatusResponse
   */
  async getSourcePackStatus(request: $_model.GetSourcePackStatusRequest): Promise<$_model.GetSourcePackStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSourcePackStatusWithOptions(request, runtime);
  }

  /**
   * 查看子场景下预处理及切图任务
   * 
   * @param request - GetSubSceneTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubSceneTaskStatusResponse
   */
  async getSubSceneTaskStatusWithOptions(request: $_model.GetSubSceneTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubSceneTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubSceneTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubSceneTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetSubSceneTaskStatusResponse({}));
  }

  /**
   * 查看子场景下预处理及切图任务
   * 
   * @param request - GetSubSceneTaskStatusRequest
   * @returns GetSubSceneTaskStatusResponse
   */
  async getSubSceneTaskStatus(request: $_model.GetSubSceneTaskStatusRequest): Promise<$_model.GetSubSceneTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubSceneTaskStatusWithOptions(request, runtime);
  }

  /**
   * 查看任务状态
   * 
   * @param request - GetTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(request: $_model.GetTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatusResponse({}));
  }

  /**
   * 查看任务状态
   * 
   * @param request - GetTaskStatusRequest
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(request: $_model.GetTaskStatusRequest): Promise<$_model.GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetWindowConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWindowConfigResponse
   */
  async getWindowConfigWithOptions(request: $_model.GetWindowConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWindowConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWindowConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWindowConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetWindowConfigResponse({}));
  }

  /**
   * @param request - GetWindowConfigRequest
   * @returns GetWindowConfigResponse
   */
  async getWindowConfig(request: $_model.GetWindowConfigRequest): Promise<$_model.GetWindowConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWindowConfigWithOptions(request, runtime);
  }

  /**
   * 重建
   * 
   * @param request - LabelBuildRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LabelBuildResponse
   */
  async labelBuildWithOptions(request: $_model.LabelBuildRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LabelBuildResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.modelStyle)) {
      query["ModelStyle"] = request.modelStyle;
    }

    if (!$dara.isNull(request.optimizeWallWidth)) {
      query["OptimizeWallWidth"] = request.optimizeWallWidth;
    }

    if (!$dara.isNull(request.planStyle)) {
      query["PlanStyle"] = request.planStyle;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.wallHeight)) {
      query["WallHeight"] = request.wallHeight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LabelBuild",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LabelBuildResponse>(await this.callApi(params, req, runtime), new $_model.LabelBuildResponse({}));
  }

  /**
   * 重建
   * 
   * @param request - LabelBuildRequest
   * @returns LabelBuildResponse
   */
  async labelBuild(request: $_model.LabelBuildRequest): Promise<$_model.LabelBuildResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.labelBuildWithOptions(request, runtime);
  }

  /**
   * 关联图片
   * 
   * @param request - LinkImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LinkImageResponse
   */
  async linkImageWithOptions(request: $_model.LinkImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LinkImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cameraHeight)) {
      query["CameraHeight"] = request.cameraHeight;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LinkImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LinkImageResponse>(await this.callApi(params, req, runtime), new $_model.LinkImageResponse({}));
  }

  /**
   * 关联图片
   * 
   * @param request - LinkImageRequest
   * @returns LinkImageResponse
   */
  async linkImage(request: $_model.LinkImageRequest): Promise<$_model.LinkImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.linkImageWithOptions(request, runtime);
  }

  /**
   * 分页查询项目列表
   * 
   * @param request - ListProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(request: $_model.ListProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectResponse({}));
  }

  /**
   * 分页查询项目列表
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: $_model.ListProjectRequest): Promise<$_model.ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectWithOptions(request, runtime);
  }

  /**
   * 分页查询主场景列表
   * 
   * @param request - ListSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSceneResponse
   */
  async listSceneWithOptions(request: $_model.ListSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSceneResponse>(await this.callApi(params, req, runtime), new $_model.ListSceneResponse({}));
  }

  /**
   * 分页查询主场景列表
   * 
   * @param request - ListSceneRequest
   * @returns ListSceneResponse
   */
  async listScene(request: $_model.ListSceneRequest): Promise<$_model.ListSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSceneWithOptions(request, runtime);
  }

  /**
   * 查询子场景列表
   * 
   * @param request - ListSubSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubSceneResponse
   */
  async listSubSceneWithOptions(request: $_model.ListSubSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.showLayoutData)) {
      query["ShowLayoutData"] = request.showLayoutData;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubSceneResponse>(await this.callApi(params, req, runtime), new $_model.ListSubSceneResponse({}));
  }

  /**
   * 查询子场景列表
   * 
   * @param request - ListSubSceneRequest
   * @returns ListSubSceneResponse
   */
  async listSubScene(request: $_model.ListSubSceneRequest): Promise<$_model.ListSubSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSubSceneWithOptions(request, runtime);
  }

  /**
   * 直角优化
   * 
   * @param request - OptimizeRightAngleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OptimizeRightAngleResponse
   */
  async optimizeRightAngleWithOptions(request: $_model.OptimizeRightAngleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OptimizeRightAngleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OptimizeRightAngle",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OptimizeRightAngleResponse>(await this.callApi(params, req, runtime), new $_model.OptimizeRightAngleResponse({}));
  }

  /**
   * 直角优化
   * 
   * @param request - OptimizeRightAngleRequest
   * @returns OptimizeRightAngleResponse
   */
  async optimizeRightAngle(request: $_model.OptimizeRightAngleRequest): Promise<$_model.OptimizeRightAngleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.optimizeRightAngleWithOptions(request, runtime);
  }

  /**
   * 打包场景
   * 
   * @param request - PackSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PackSceneResponse
   */
  async packSceneWithOptions(request: $_model.PackSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PackSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PackScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PackSceneResponse>(await this.callApi(params, req, runtime), new $_model.PackSceneResponse({}));
  }

  /**
   * 打包场景
   * 
   * @param request - PackSceneRequest
   * @returns PackSceneResponse
   */
  async packScene(request: $_model.PackSceneRequest): Promise<$_model.PackSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.packSceneWithOptions(request, runtime);
  }

  /**
   * 打包场景
   * 
   * @param request - PackSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PackSourceResponse
   */
  async packSourceWithOptions(request: $_model.PackSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PackSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PackSource",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PackSourceResponse>(await this.callApi(params, req, runtime), new $_model.PackSourceResponse({}));
  }

  /**
   * 打包场景
   * 
   * @param request - PackSourceRequest
   * @returns PackSourceResponse
   */
  async packSource(request: $_model.PackSourceRequest): Promise<$_model.PackSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.packSourceWithOptions(request, runtime);
  }

  /**
   * 预处理
   * 
   * @param request - PredImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PredImageResponse
   */
  async predImageWithOptions(request: $_model.PredImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PredImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.correctVertical)) {
      query["CorrectVertical"] = request.correctVertical;
    }

    if (!$dara.isNull(request.countDetectDoor)) {
      query["CountDetectDoor"] = request.countDetectDoor;
    }

    if (!$dara.isNull(request.detectDoor)) {
      query["DetectDoor"] = request.detectDoor;
    }

    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PredImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PredImageResponse>(await this.callApi(params, req, runtime), new $_model.PredImageResponse({}));
  }

  /**
   * 预处理
   * 
   * @param request - PredImageRequest
   * @returns PredImageResponse
   */
  async predImage(request: $_model.PredImageRequest): Promise<$_model.PredImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.predImageWithOptions(request, runtime);
  }

  /**
   * 墙线预测
   * 
   * @param request - PredictionWallLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PredictionWallLineResponse
   */
  async predictionWallLineWithOptions(request: $_model.PredictionWallLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PredictionWallLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cameraHeight)) {
      query["CameraHeight"] = request.cameraHeight;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PredictionWallLine",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PredictionWallLineResponse>(await this.callApi(params, req, runtime), new $_model.PredictionWallLineResponse({}));
  }

  /**
   * 墙线预测
   * 
   * @param request - PredictionWallLineRequest
   * @returns PredictionWallLineResponse
   */
  async predictionWallLine(request: $_model.PredictionWallLineRequest): Promise<$_model.PredictionWallLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.predictionWallLineWithOptions(request, runtime);
  }

  /**
   * @param request - PublishHotspotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishHotspotResponse
   */
  async publishHotspotWithOptions(request: $_model.PublishHotspotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishHotspotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramTag)) {
      query["ParamTag"] = request.paramTag;
    }

    if (!$dara.isNull(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishHotspot",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishHotspotResponse>(await this.callApi(params, req, runtime), new $_model.PublishHotspotResponse({}));
  }

  /**
   * @param request - PublishHotspotRequest
   * @returns PublishHotspotResponse
   */
  async publishHotspot(request: $_model.PublishHotspotRequest): Promise<$_model.PublishHotspotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishHotspotWithOptions(request, runtime);
  }

  /**
   * 保存扩展配置
   * 
   * @param request - PublishHotspotConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishHotspotConfigResponse
   */
  async publishHotspotConfigWithOptions(request: $_model.PublishHotspotConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishHotspotConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishHotspotConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishHotspotConfigResponse>(await this.callApi(params, req, runtime), new $_model.PublishHotspotConfigResponse({}));
  }

  /**
   * 保存扩展配置
   * 
   * @param request - PublishHotspotConfigRequest
   * @returns PublishHotspotConfigResponse
   */
  async publishHotspotConfig(request: $_model.PublishHotspotConfigRequest): Promise<$_model.PublishHotspotConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishHotspotConfigWithOptions(request, runtime);
  }

  /**
   * 发布
   * 
   * @param request - PublishSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishSceneResponse
   */
  async publishSceneWithOptions(request: $_model.PublishSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishSceneResponse>(await this.callApi(params, req, runtime), new $_model.PublishSceneResponse({}));
  }

  /**
   * 发布
   * 
   * @param request - PublishSceneRequest
   * @returns PublishSceneResponse
   */
  async publishScene(request: $_model.PublishSceneRequest): Promise<$_model.PublishSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishSceneWithOptions(request, runtime);
  }

  /**
   * 发布
   * 
   * @param request - PublishStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishStatusResponse
   */
  async publishStatusWithOptions(request: $_model.PublishStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishStatusResponse>(await this.callApi(params, req, runtime), new $_model.PublishStatusResponse({}));
  }

  /**
   * 发布
   * 
   * @param request - PublishStatusRequest
   * @returns PublishStatusResponse
   */
  async publishStatus(request: $_model.PublishStatusRequest): Promise<$_model.PublishStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishStatusWithOptions(request, runtime);
  }

  /**
   * 恢复原图
   * 
   * @param request - RecoveryOriginImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoveryOriginImageResponse
   */
  async recoveryOriginImageWithOptions(request: $_model.RecoveryOriginImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoveryOriginImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoveryOriginImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoveryOriginImageResponse>(await this.callApi(params, req, runtime), new $_model.RecoveryOriginImageResponse({}));
  }

  /**
   * 恢复原图
   * 
   * @param request - RecoveryOriginImageRequest
   * @returns RecoveryOriginImageResponse
   */
  async recoveryOriginImage(request: $_model.RecoveryOriginImageRequest): Promise<$_model.RecoveryOriginImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoveryOriginImageWithOptions(request, runtime);
  }

  /**
   * 手动矫正
   * 
   * @param request - RectVerticalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RectVerticalResponse
   */
  async rectVerticalWithOptions(request: $_model.RectVerticalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RectVerticalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.countDetectDoor)) {
      query["CountDetectDoor"] = request.countDetectDoor;
    }

    if (!$dara.isNull(request.detectDoor)) {
      query["DetectDoor"] = request.detectDoor;
    }

    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    if (!$dara.isNull(request.verticalRect)) {
      query["VerticalRect"] = request.verticalRect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RectVertical",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RectVerticalResponse>(await this.callApi(params, req, runtime), new $_model.RectVerticalResponse({}));
  }

  /**
   * 手动矫正
   * 
   * @param request - RectVerticalRequest
   * @returns RectVerticalResponse
   */
  async rectVertical(request: $_model.RectVerticalRequest): Promise<$_model.RectVerticalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rectVerticalWithOptions(request, runtime);
  }

  /**
   * 图片矫正
   * 
   * @param request - RectifyImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RectifyImageResponse
   */
  async rectifyImageWithOptions(request: $_model.RectifyImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RectifyImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cameraHeight)) {
      query["CameraHeight"] = request.cameraHeight;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RectifyImage",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RectifyImageResponse>(await this.callApi(params, req, runtime), new $_model.RectifyImageResponse({}));
  }

  /**
   * 图片矫正
   * 
   * @param request - RectifyImageRequest
   * @returns RectifyImageResponse
   */
  async rectifyImage(request: $_model.RectifyImageRequest): Promise<$_model.RectifyImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rectifyImageWithOptions(request, runtime);
  }

  /**
   * 恢复子场景
   * 
   * @param request - RollbackSubSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackSubSceneResponse
   */
  async rollbackSubSceneWithOptions(request: $_model.RollbackSubSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackSubSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackSubSceneResponse>(await this.callApi(params, req, runtime), new $_model.RollbackSubSceneResponse({}));
  }

  /**
   * 恢复子场景
   * 
   * @param request - RollbackSubSceneRequest
   * @returns RollbackSubSceneResponse
   */
  async rollbackSubScene(request: $_model.RollbackSubSceneRequest): Promise<$_model.RollbackSubSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackSubSceneWithOptions(request, runtime);
  }

  /**
   * @param request - SaveHotspotConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveHotspotConfigResponse
   */
  async saveHotspotConfigWithOptions(request: $_model.SaveHotspotConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveHotspotConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramTag)) {
      query["ParamTag"] = request.paramTag;
    }

    if (!$dara.isNull(request.previewToken)) {
      query["PreviewToken"] = request.previewToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveHotspotConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveHotspotConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveHotspotConfigResponse({}));
  }

  /**
   * @param request - SaveHotspotConfigRequest
   * @returns SaveHotspotConfigResponse
   */
  async saveHotspotConfig(request: $_model.SaveHotspotConfigRequest): Promise<$_model.SaveHotspotConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveHotspotConfigWithOptions(request, runtime);
  }

  /**
   * @param request - SaveHotspotTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveHotspotTagResponse
   */
  async saveHotspotTagWithOptions(request: $_model.SaveHotspotTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveHotspotTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramTag)) {
      query["ParamTag"] = request.paramTag;
    }

    if (!$dara.isNull(request.subSceneUuid)) {
      query["SubSceneUuid"] = request.subSceneUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveHotspotTag",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveHotspotTagResponse>(await this.callApi(params, req, runtime), new $_model.SaveHotspotTagResponse({}));
  }

  /**
   * @param request - SaveHotspotTagRequest
   * @returns SaveHotspotTagResponse
   */
  async saveHotspotTag(request: $_model.SaveHotspotTagRequest): Promise<$_model.SaveHotspotTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveHotspotTagWithOptions(request, runtime);
  }

  /**
   * 保存热点
   * 
   * @param request - SaveHotspotTagListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveHotspotTagListResponse
   */
  async saveHotspotTagListWithOptions(request: $_model.SaveHotspotTagListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveHotspotTagListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hotspotListJson)) {
      query["HotspotListJson"] = request.hotspotListJson;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveHotspotTagList",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveHotspotTagListResponse>(await this.callApi(params, req, runtime), new $_model.SaveHotspotTagListResponse({}));
  }

  /**
   * 保存热点
   * 
   * @param request - SaveHotspotTagListRequest
   * @returns SaveHotspotTagListResponse
   */
  async saveHotspotTagList(request: $_model.SaveHotspotTagListRequest): Promise<$_model.SaveHotspotTagListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveHotspotTagListWithOptions(request, runtime);
  }

  /**
   * 保存小地图数据
   * 
   * @param request - SaveMinimapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveMinimapResponse
   */
  async saveMinimapWithOptions(request: $_model.SaveMinimapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveMinimapResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveMinimap",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveMinimapResponse>(await this.callApi(params, req, runtime), new $_model.SaveMinimapResponse({}));
  }

  /**
   * 保存小地图数据
   * 
   * @param request - SaveMinimapRequest
   * @returns SaveMinimapResponse
   */
  async saveMinimap(request: $_model.SaveMinimapRequest): Promise<$_model.SaveMinimapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveMinimapWithOptions(request, runtime);
  }

  /**
   * 保存模型文件
   * 
   * @param request - SaveModelConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveModelConfigResponse
   */
  async saveModelConfigWithOptions(request: $_model.SaveModelConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveModelConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveModelConfig",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveModelConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveModelConfigResponse({}));
  }

  /**
   * 保存模型文件
   * 
   * @param request - SaveModelConfigRequest
   * @returns SaveModelConfigResponse
   */
  async saveModelConfig(request: $_model.SaveModelConfigRequest): Promise<$_model.SaveModelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveModelConfigWithOptions(request, runtime);
  }

  /**
   * 发布
   * 
   * @param request - ScenePublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScenePublishResponse
   */
  async scenePublishWithOptions(request: $_model.ScenePublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScenePublishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScenePublish",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScenePublishResponse>(await this.callApi(params, req, runtime), new $_model.ScenePublishResponse({}));
  }

  /**
   * 发布
   * 
   * @param request - ScenePublishRequest
   * @returns ScenePublishResponse
   */
  async scenePublish(request: $_model.ScenePublishRequest): Promise<$_model.ScenePublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scenePublishWithOptions(request, runtime);
  }

  /**
   * 预览
   * 
   * @param request - TempPreviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TempPreviewResponse
   */
  async tempPreviewWithOptions(request: $_model.TempPreviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempPreviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TempPreview",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TempPreviewResponse>(await this.callApi(params, req, runtime), new $_model.TempPreviewResponse({}));
  }

  /**
   * 预览
   * 
   * @param request - TempPreviewRequest
   * @returns TempPreviewResponse
   */
  async tempPreview(request: $_model.TempPreviewRequest): Promise<$_model.TempPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempPreviewWithOptions(request, runtime);
  }

  /**
   * 查询预览任务处理状态
   * 
   * @param request - TempPreviewStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TempPreviewStatusResponse
   */
  async tempPreviewStatusWithOptions(request: $_model.TempPreviewStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempPreviewStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TempPreviewStatus",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TempPreviewStatusResponse>(await this.callApi(params, req, runtime), new $_model.TempPreviewStatusResponse({}));
  }

  /**
   * 查询预览任务处理状态
   * 
   * @param request - TempPreviewStatusRequest
   * @returns TempPreviewStatusResponse
   */
  async tempPreviewStatus(request: $_model.TempPreviewStatusRequest): Promise<$_model.TempPreviewStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempPreviewStatusWithOptions(request, runtime);
  }

  /**
   * 更新关联数据
   * 
   * @param request - UpdateConnDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnDataResponse
   */
  async updateConnDataWithOptions(request: $_model.UpdateConnDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connData)) {
      query["ConnData"] = request.connData;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConnData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConnDataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnDataResponse({}));
  }

  /**
   * 更新关联数据
   * 
   * @param request - UpdateConnDataRequest
   * @returns UpdateConnDataResponse
   */
  async updateConnData(request: $_model.UpdateConnDataRequest): Promise<$_model.UpdateConnDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConnDataWithOptions(request, runtime);
  }

  /**
   * 更新标注数据
   * 
   * @param request - UpdateLayoutDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLayoutDataResponse
   */
  async updateLayoutDataWithOptions(request: $_model.UpdateLayoutDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLayoutDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.layoutData)) {
      query["LayoutData"] = request.layoutData;
    }

    if (!$dara.isNull(request.subSceneId)) {
      query["SubSceneId"] = request.subSceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLayoutData",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLayoutDataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLayoutDataResponse({}));
  }

  /**
   * 更新标注数据
   * 
   * @param request - UpdateLayoutDataRequest
   * @returns UpdateLayoutDataResponse
   */
  async updateLayoutData(request: $_model.UpdateLayoutDataRequest): Promise<$_model.UpdateLayoutDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLayoutDataWithOptions(request, runtime);
  }

  /**
   * 变更项目信息
   * 
   * @param request - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: $_model.UpdateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2020-01-01",
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
   * 变更项目信息
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  /**
   * 更新主场景
   * 
   * @param request - UpdateSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSceneResponse
   */
  async updateSceneWithOptions(request: $_model.UpdateSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSceneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSceneResponse({}));
  }

  /**
   * 更新主场景
   * 
   * @param request - UpdateSceneRequest
   * @returns UpdateSceneResponse
   */
  async updateScene(request: $_model.UpdateSceneRequest): Promise<$_model.UpdateSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSceneWithOptions(request, runtime);
  }

  /**
   * 更新子场景
   * 
   * @param tmpReq - UpdateSubSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubSceneResponse
   */
  async updateSubSceneWithOptions(tmpReq: $_model.UpdateSubSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubSceneResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSubSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.viewPoint)) {
      request.viewPointShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewPoint, "ViewPoint", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.viewPointShrink)) {
      query["ViewPoint"] = request.viewPointShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubScene",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubSceneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubSceneResponse({}));
  }

  /**
   * 更新子场景
   * 
   * @param request - UpdateSubSceneRequest
   * @returns UpdateSubSceneResponse
   */
  async updateSubScene(request: $_model.UpdateSubSceneRequest): Promise<$_model.UpdateSubSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubSceneWithOptions(request, runtime);
  }

  /**
   * 更新子场景顺序
   * 
   * @param tmpReq - UpdateSubSceneSeqRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubSceneSeqResponse
   */
  async updateSubSceneSeqWithOptions(tmpReq: $_model.UpdateSubSceneSeqRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubSceneSeqResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSubSceneSeqShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sortSubSceneIds)) {
      request.sortSubSceneIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortSubSceneIds, "SortSubSceneIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sortSubSceneIdsShrink)) {
      query["SortSubSceneIds"] = request.sortSubSceneIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubSceneSeq",
      version: "2020-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubSceneSeqResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubSceneSeqResponse({}));
  }

  /**
   * 更新子场景顺序
   * 
   * @param request - UpdateSubSceneSeqRequest
   * @returns UpdateSubSceneSeqResponse
   */
  async updateSubSceneSeq(request: $_model.UpdateSubSceneSeqRequest): Promise<$_model.UpdateSubSceneSeqResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubSceneSeqWithOptions(request, runtime);
  }

}
