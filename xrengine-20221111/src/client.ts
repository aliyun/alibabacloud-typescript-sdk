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
      'ap-northeast-1': "xrengine-daily.aliyuncs.com",
      'ap-northeast-2-pop': "xrengine-daily.aliyuncs.com",
      'ap-south-1': "xrengine-daily.aliyuncs.com",
      'ap-southeast-1': "xrengine-daily.aliyuncs.com",
      'ap-southeast-2': "xrengine-daily.aliyuncs.com",
      'ap-southeast-3': "xrengine-daily.aliyuncs.com",
      'ap-southeast-5': "xrengine-daily.aliyuncs.com",
      'cn-beijing': "xrengine-daily.aliyuncs.com",
      'cn-beijing-finance-1': "xrengine-daily.aliyuncs.com",
      'cn-beijing-finance-pop': "xrengine-daily.aliyuncs.com",
      'cn-beijing-gov-1': "xrengine-daily.aliyuncs.com",
      'cn-beijing-nu16-b01': "xrengine-daily.aliyuncs.com",
      'cn-chengdu': "xrengine-daily.aliyuncs.com",
      'cn-edge-1': "xrengine-daily.aliyuncs.com",
      'cn-fujian': "xrengine-daily.aliyuncs.com",
      'cn-haidian-cm12-c01': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-bj-b01': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-finance': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "xrengine-daily.aliyuncs.com",
      'cn-hangzhou-test-306': "xrengine-daily.aliyuncs.com",
      'cn-hongkong': "xrengine-daily.aliyuncs.com",
      'cn-hongkong-finance-pop': "xrengine-daily.aliyuncs.com",
      'cn-huhehaote': "xrengine-daily.aliyuncs.com",
      'cn-huhehaote-nebula-1': "xrengine-daily.aliyuncs.com",
      'cn-north-2-gov-1': "xrengine-daily.aliyuncs.com",
      'cn-qingdao': "xrengine-daily.aliyuncs.com",
      'cn-qingdao-nebula': "xrengine-daily.aliyuncs.com",
      'cn-shanghai': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-et15-b01': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-et2-b01': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-finance-1': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-inner': "xrengine-daily.aliyuncs.com",
      'cn-shanghai-internal-test-1': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-finance-1': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-inner': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-st4-d01': "xrengine-daily.aliyuncs.com",
      'cn-shenzhen-su18-b01': "xrengine-daily.aliyuncs.com",
      'cn-wuhan': "xrengine-daily.aliyuncs.com",
      'cn-wulanchabu': "xrengine-daily.aliyuncs.com",
      'cn-yushanfang': "xrengine-daily.aliyuncs.com",
      'cn-zhangbei': "xrengine-daily.aliyuncs.com",
      'cn-zhangbei-na61-b01': "xrengine-daily.aliyuncs.com",
      'cn-zhangjiakou': "xrengine-daily.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "xrengine-daily.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "xrengine-daily.aliyuncs.com",
      'eu-central-1': "xrengine-daily.aliyuncs.com",
      'eu-west-1': "xrengine-daily.aliyuncs.com",
      'eu-west-1-oxs': "xrengine-daily.aliyuncs.com",
      'me-east-1': "xrengine-daily.aliyuncs.com",
      'rus-west-1-pop': "xrengine-daily.aliyuncs.com",
      'us-east-1': "xrengine-daily.aliyuncs.com",
      'us-west-1': "xrengine-daily.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("xrengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 用户签署协议
   * 
   * @param request - AcceptAgreementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptAgreementResponse
   */
  async acceptAgreementWithOptions(request: $_model.AcceptAgreementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptAgreementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptAgreement",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptAgreementResponse>(await this.callApi(params, req, runtime), new $_model.AcceptAgreementResponse({}));
  }

  /**
   * 用户签署协议
   * 
   * @param request - AcceptAgreementRequest
   * @returns AcceptAgreementResponse
   */
  async acceptAgreement(request: $_model.AcceptAgreementRequest): Promise<$_model.AcceptAgreementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptAgreementWithOptions(request, runtime);
  }

  /**
   * 添加白名单（云账号）
   * 
   * @param request - AddWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWhitelistResponse
   */
  async addWhitelistWithOptions(request: $_model.AddWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunUid)) {
      body["AliyunUid"] = request.aliyunUid;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWhitelist",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.AddWhitelistResponse({}));
  }

  /**
   * 添加白名单（云账号）
   * 
   * @param request - AddWhitelistRequest
   * @returns AddWhitelistResponse
   */
  async addWhitelist(request: $_model.AddWhitelistRequest): Promise<$_model.AddWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addWhitelistWithOptions(request, runtime);
  }

  /**
   * 申请ai试衣服务
   * 
   * @param request - ApplyForTryOnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyForTryOnResponse
   */
  async applyForTryOnWithOptions(request: $_model.ApplyForTryOnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyForTryOnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
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
      action: "ApplyForTryOn",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyForTryOnResponse>(await this.callApi(params, req, runtime), new $_model.ApplyForTryOnResponse({}));
  }

  /**
   * 申请ai试衣服务
   * 
   * @param request - ApplyForTryOnRequest
   * @returns ApplyForTryOnResponse
   */
  async applyForTryOn(request: $_model.ApplyForTryOnRequest): Promise<$_model.ApplyForTryOnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyForTryOnWithOptions(request, runtime);
  }

  /**
   * @param request - AuthUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthUserResponse
   */
  async authUserWithOptions(request: $_model.AuthUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthUser",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthUserResponse>(await this.callApi(params, req, runtime), new $_model.AuthUserResponse({}));
  }

  /**
   * @param request - AuthUserRequest
   * @returns AuthUserResponse
   */
  async authUser(request: $_model.AuthUserRequest): Promise<$_model.AuthUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authUserWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - BatchCreateSvcMapBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateSvcMapBindResponse
   */
  async batchCreateSvcMapBindWithOptions(tmpReq: $_model.BatchCreateSvcMapBindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateSvcMapBindResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateSvcMapBindShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.mapIds)) {
      request.mapIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mapIds, "MapIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapIdsShrink)) {
      body["MapIds"] = request.mapIdsShrink;
    }

    if (!$dara.isNull(request.svcId)) {
      body["SvcId"] = request.svcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateSvcMapBind",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateSvcMapBindResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateSvcMapBindResponse({}));
  }

  /**
   * @param request - BatchCreateSvcMapBindRequest
   * @returns BatchCreateSvcMapBindResponse
   */
  async batchCreateSvcMapBind(request: $_model.BatchCreateSvcMapBindRequest): Promise<$_model.BatchCreateSvcMapBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateSvcMapBindWithOptions(request, runtime);
  }

  /**
   * 取消关联
   * 
   * @param tmpReq - BatchDeleteSvcMapBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteSvcMapBindResponse
   */
  async batchDeleteSvcMapBindWithOptions(tmpReq: $_model.BatchDeleteSvcMapBindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteSvcMapBindResponse> {
    tmpReq.validate();
    let request = new $_model.BatchDeleteSvcMapBindShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteSvcMapBind",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteSvcMapBindResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteSvcMapBindResponse({}));
  }

  /**
   * 取消关联
   * 
   * @param request - BatchDeleteSvcMapBindRequest
   * @returns BatchDeleteSvcMapBindResponse
   */
  async batchDeleteSvcMapBind(request: $_model.BatchDeleteSvcMapBindRequest): Promise<$_model.BatchDeleteSvcMapBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteSvcMapBindWithOptions(request, runtime);
  }

  /**
   * 构建项目
   * 
   * @param request - BuildProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuildProjectResponse
   */
  async buildProjectWithOptions(request: $_model.BuildProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BuildProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.videoName)) {
      query["VideoName"] = request.videoName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuildProject",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuildProjectResponse>(await this.callApi(params, req, runtime), new $_model.BuildProjectResponse({}));
  }

  /**
   * 构建项目
   * 
   * @param request - BuildProjectRequest
   * @returns BuildProjectResponse
   */
  async buildProject(request: $_model.BuildProjectRequest): Promise<$_model.BuildProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.buildProjectWithOptions(request, runtime);
  }

  /**
   * 创建，同时创建空白的pai占位
   * 
   * @param request - CreateLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLocationServiceResponse
   */
  async createLocationServiceWithOptions(request: $_model.CreateLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLocationServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.note)) {
      body["Note"] = request.note;
    }

    if (!$dara.isNull(request.qps)) {
      body["Qps"] = request.qps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLocationService",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateLocationServiceResponse({}));
  }

  /**
   * 创建，同时创建空白的pai占位
   * 
   * @param request - CreateLocationServiceRequest
   * @returns CreateLocationServiceResponse
   */
  async createLocationService(request: $_model.CreateLocationServiceRequest): Promise<$_model.CreateLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLocationServiceWithOptions(request, runtime);
  }

  /**
   * 创建项目
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tryOnParams)) {
      request.tryOnParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tryOnParams, "TryOnParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBuild)) {
      body["AutoBuild"] = request.autoBuild;
    }

    if (!$dara.isNull(request.dependencies)) {
      body["Dependencies"] = request.dependencies;
    }

    if (!$dara.isNull(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.gender)) {
      body["Gender"] = request.gender;
    }

    if (!$dara.isNull(request.height)) {
      body["Height"] = request.height;
    }

    if (!$dara.isNull(request.intro)) {
      body["Intro"] = request.intro;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapUuid)) {
      body["MapUuid"] = request.mapUuid;
    }

    if (!$dara.isNull(request.method)) {
      body["Method"] = request.method;
    }

    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.tryOnParamsShrink)) {
      body["TryOnParams"] = request.tryOnParamsShrink;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.weight)) {
      body["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2022-11-11",
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
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * 创建素材上传policy
   * 
   * @param request - CreateSourcePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSourcePolicyResponse
   */
  async createSourcePolicyWithOptions(request: $_model.CreateSourcePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSourcePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSourcePolicy",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSourcePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateSourcePolicyResponse({}));
  }

  /**
   * 创建素材上传policy
   * 
   * @param request - CreateSourcePolicyRequest
   * @returns CreateSourcePolicyResponse
   */
  async createSourcePolicy(request: $_model.CreateSourcePolicyRequest): Promise<$_model.CreateSourcePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSourcePolicyWithOptions(request, runtime);
  }

  /**
   * 删除项目信息
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: $_model.DeleteProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2022-11-11",
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
   * 删除项目信息
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * 删除文件
   * 
   * @param request - DeleteSourceFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceFileResponse
   */
  async deleteSourceFileWithOptions(request: $_model.DeleteSourceFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSourceFile",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceFileResponse({}));
  }

  /**
   * 删除文件
   * 
   * @param request - DeleteSourceFileRequest
   * @returns DeleteSourceFileResponse
   */
  async deleteSourceFile(request: $_model.DeleteSourceFileRequest): Promise<$_model.DeleteSourceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSourceFileWithOptions(request, runtime);
  }

  /**
   * 1校验部署状态，一期不支持二次部署。相关关联记录里状态智能变更
   * 
   * @param request - DeployLocationTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployLocationTreeResponse
   */
  async deployLocationTreeWithOptions(request: $_model.DeployLocationTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployLocationTreeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceUpdate)) {
      body["ForceUpdate"] = request.forceUpdate;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.svcId)) {
      body["SvcId"] = request.svcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployLocationTree",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployLocationTreeResponse>(await this.callApi(params, req, runtime), new $_model.DeployLocationTreeResponse({}));
  }

  /**
   * 1校验部署状态，一期不支持二次部署。相关关联记录里状态智能变更
   * 
   * @param request - DeployLocationTreeRequest
   * @returns DeployLocationTreeResponse
   */
  async deployLocationTree(request: $_model.DeployLocationTreeRequest): Promise<$_model.DeployLocationTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployLocationTreeWithOptions(request, runtime);
  }

  /**
   * 查出绑定记录
   * 
   * @param request - FindSvcMapBindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindSvcMapBindResponse
   */
  async findSvcMapBindWithOptions(request: $_model.FindSvcMapBindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindSvcMapBindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.svcId)) {
      body["SvcId"] = request.svcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindSvcMapBind",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindSvcMapBindResponse>(await this.callApi(params, req, runtime), new $_model.FindSvcMapBindResponse({}));
  }

  /**
   * 查出绑定记录
   * 
   * @param request - FindSvcMapBindRequest
   * @returns FindSvcMapBindResponse
   */
  async findSvcMapBind(request: $_model.FindSvcMapBindRequest): Promise<$_model.FindSvcMapBindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findSvcMapBindWithOptions(request, runtime);
  }

  /**
   * 获取用户申请状态
   * 
   * @param request - GetApplyStatusForTryOnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplyStatusForTryOnResponse
   */
  async getApplyStatusForTryOnWithOptions(request: $_model.GetApplyStatusForTryOnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplyStatusForTryOnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplyStatusForTryOn",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplyStatusForTryOnResponse>(await this.callApi(params, req, runtime), new $_model.GetApplyStatusForTryOnResponse({}));
  }

  /**
   * 获取用户申请状态
   * 
   * @param request - GetApplyStatusForTryOnRequest
   * @returns GetApplyStatusForTryOnResponse
   */
  async getApplyStatusForTryOn(request: $_model.GetApplyStatusForTryOnRequest): Promise<$_model.GetApplyStatusForTryOnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplyStatusForTryOnWithOptions(request, runtime);
  }

  /**
   * @param request - GetArEditCommonMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArEditCommonMaterialResponse
   */
  async getArEditCommonMaterialWithOptions(request: $_model.GetArEditCommonMaterialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArEditCommonMaterialResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArEditCommonMaterial",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArEditCommonMaterialResponse>(await this.callApi(params, req, runtime), new $_model.GetArEditCommonMaterialResponse({}));
  }

  /**
   * @param request - GetArEditCommonMaterialRequest
   * @returns GetArEditCommonMaterialResponse
   */
  async getArEditCommonMaterial(request: $_model.GetArEditCommonMaterialRequest): Promise<$_model.GetArEditCommonMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArEditCommonMaterialWithOptions(request, runtime);
  }

  /**
   * @param request - GetArEditStsAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArEditStsAuthResponse
   */
  async getArEditStsAuthWithOptions(request: $_model.GetArEditStsAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArEditStsAuthResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapId)) {
      body["MapId"] = request.mapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArEditStsAuth",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArEditStsAuthResponse>(await this.callApi(params, req, runtime), new $_model.GetArEditStsAuthResponse({}));
  }

  /**
   * @param request - GetArEditStsAuthRequest
   * @returns GetArEditStsAuthResponse
   */
  async getArEditStsAuth(request: $_model.GetArEditStsAuthRequest): Promise<$_model.GetArEditStsAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArEditStsAuthWithOptions(request, runtime);
  }

  /**
   * @param request - GetArEditUgcMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArEditUgcMaterialResponse
   */
  async getArEditUgcMaterialWithOptions(request: $_model.GetArEditUgcMaterialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArEditUgcMaterialResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapId)) {
      body["MapId"] = request.mapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArEditUgcMaterial",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArEditUgcMaterialResponse>(await this.callApi(params, req, runtime), new $_model.GetArEditUgcMaterialResponse({}));
  }

  /**
   * @param request - GetArEditUgcMaterialRequest
   * @returns GetArEditUgcMaterialResponse
   */
  async getArEditUgcMaterial(request: $_model.GetArEditUgcMaterialRequest): Promise<$_model.GetArEditUgcMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArEditUgcMaterialWithOptions(request, runtime);
  }

  /**
   * 获取项目模型详情
   * 
   * @param request - GetProjectDatasetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectDatasetResponse
   */
  async getProjectDatasetWithOptions(request: $_model.GetProjectDatasetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectDatasetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectDataset",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectDatasetResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectDatasetResponse({}));
  }

  /**
   * 获取项目模型详情
   * 
   * @param request - GetProjectDatasetRequest
   * @returns GetProjectDatasetResponse
   */
  async getProjectDataset(request: $_model.GetProjectDatasetRequest): Promise<$_model.GetProjectDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectDatasetWithOptions(request, runtime);
  }

  /**
   * 调用同步算法
   * 
   * @param tmpReq - InvokeSyncAlgorithmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeSyncAlgorithmResponse
   */
  async invokeSyncAlgorithmWithOptions(tmpReq: $_model.InvokeSyncAlgorithmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InvokeSyncAlgorithmResponse> {
    tmpReq.validate();
    let request = new $_model.InvokeSyncAlgorithmShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeSyncAlgorithm",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InvokeSyncAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.InvokeSyncAlgorithmResponse({}));
  }

  /**
   * 调用同步算法
   * 
   * @param request - InvokeSyncAlgorithmRequest
   * @returns InvokeSyncAlgorithmResponse
   */
  async invokeSyncAlgorithm(request: $_model.InvokeSyncAlgorithmRequest): Promise<$_model.InvokeSyncAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invokeSyncAlgorithmWithOptions(request, runtime);
  }

  /**
   * @param request - ListAreaMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAreaMapResponse
   */
  async listAreaMapWithOptions(request: $_model.ListAreaMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAreaMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAreaMap",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAreaMapResponse>(await this.callApi(params, req, runtime), new $_model.ListAreaMapResponse({}));
  }

  /**
   * @param request - ListAreaMapRequest
   * @returns ListAreaMapResponse
   */
  async listAreaMap(request: $_model.ListAreaMapRequest): Promise<$_model.ListAreaMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAreaMapWithOptions(request, runtime);
  }

  /**
   * 列举服饰类型
   * 
   * @param request - ListClothTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClothTypesResponse
   */
  async listClothTypesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListClothTypesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListClothTypes",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClothTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListClothTypesResponse({}));
  }

  /**
   * 列举服饰类型
   * @returns ListClothTypesResponse
   */
  async listClothTypes(): Promise<$_model.ListClothTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClothTypesWithOptions(runtime);
  }

  /**
   * 列举服饰
   * 
   * @param tmpReq - ListClothesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClothesResponse
   */
  async listClothesWithOptions(tmpReq: $_model.ListClothesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClothesResponse> {
    tmpReq.validate();
    let request = new $_model.ListClothesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let query = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      query["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.clothSize)) {
      query["ClothSize"] = request.clothSize;
    }

    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClothes",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClothesResponse>(await this.callApi(params, req, runtime), new $_model.ListClothesResponse({}));
  }

  /**
   * 列举服饰
   * 
   * @param request - ListClothesRequest
   * @returns ListClothesResponse
   */
  async listClothes(request: $_model.ListClothesRequest): Promise<$_model.ListClothesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClothesWithOptions(request, runtime);
  }

  /**
   * hdr文件目录列表
   * 
   * @param request - ListHdrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHdrResponse
   */
  async listHdrWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListHdrResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListHdr",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHdrResponse>(await this.callApi(params, req, runtime), new $_model.ListHdrResponse({}));
  }

  /**
   * hdr文件目录列表
   * @returns ListHdrResponse
   */
  async listHdr(): Promise<$_model.ListHdrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHdrWithOptions(runtime);
  }

  /**
   * @param request - ListLocationPaiImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLocationPaiImageResponse
   */
  async listLocationPaiImageWithOptions(request: $_model.ListLocationPaiImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLocationPaiImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLocationPaiImage",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLocationPaiImageResponse>(await this.callApi(params, req, runtime), new $_model.ListLocationPaiImageResponse({}));
  }

  /**
   * @param request - ListLocationPaiImageRequest
   * @returns ListLocationPaiImageResponse
   */
  async listLocationPaiImage(request: $_model.ListLocationPaiImageRequest): Promise<$_model.ListLocationPaiImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLocationPaiImageWithOptions(request, runtime);
  }

  /**
   * @param request - ListLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLocationServiceResponse
   */
  async listLocationServiceWithOptions(request: $_model.ListLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLocationServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLocationService",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.ListLocationServiceResponse({}));
  }

  /**
   * @param request - ListLocationServiceRequest
   * @returns ListLocationServiceResponse
   */
  async listLocationService(request: $_model.ListLocationServiceRequest): Promise<$_model.ListLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLocationServiceWithOptions(request, runtime);
  }

  /**
   * 列出当前用户项目列表
   * 
   * @param request - ListProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(request: $_model.ListProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizUsage)) {
      body["BizUsage"] = request.bizUsage;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.excludedBizUsage)) {
      body["ExcludedBizUsage"] = request.excludedBizUsage;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.withSource)) {
      body["WithSource"] = request.withSource;
    }

    if (!$dara.isNull(request.withUser)) {
      body["WithUser"] = request.withUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2022-11-11",
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
   * 列出当前用户项目列表
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: $_model.ListProjectRequest): Promise<$_model.ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectWithOptions(request, runtime);
  }

  /**
   * 根据项目Id查出依赖当前项目的项目
   * 
   * @param request - ListProjectsByDependencyIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsByDependencyIdResponse
   */
  async listProjectsByDependencyIdWithOptions(request: $_model.ListProjectsByDependencyIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsByDependencyIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dependencyProjectId)) {
      body["DependencyProjectId"] = request.dependencyProjectId;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapUuid)) {
      body["MapUuid"] = request.mapUuid;
    }

    if (!$dara.isNull(request.withDataset)) {
      body["WithDataset"] = request.withDataset;
    }

    if (!$dara.isNull(request.withSource)) {
      body["WithSource"] = request.withSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectsByDependencyId",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsByDependencyIdResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsByDependencyIdResponse({}));
  }

  /**
   * 根据项目Id查出依赖当前项目的项目
   * 
   * @param request - ListProjectsByDependencyIdRequest
   * @returns ListProjectsByDependencyIdResponse
   */
  async listProjectsByDependencyId(request: $_model.ListProjectsByDependencyIdRequest): Promise<$_model.ListProjectsByDependencyIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsByDependencyIdWithOptions(request, runtime);
  }

  /**
   * 列举项目中上传的文件列表
   * 
   * @param request - ListSourceFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSourceFileResponse
   */
  async listSourceFileWithOptions(request: $_model.ListSourceFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSourceFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSourceFile",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSourceFileResponse>(await this.callApi(params, req, runtime), new $_model.ListSourceFileResponse({}));
  }

  /**
   * 列举项目中上传的文件列表
   * 
   * @param request - ListSourceFileRequest
   * @returns ListSourceFileResponse
   */
  async listSourceFile(request: $_model.ListSourceFileRequest): Promise<$_model.ListSourceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSourceFileWithOptions(request, runtime);
  }

  /**
   * 列举流水线
   * 
   * @param request - ListWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowResponse
   */
  async listWorkflowWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflow",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowResponse({}));
  }

  /**
   * 列举流水线
   * @returns ListWorkflowResponse
   */
  async listWorkflow(): Promise<$_model.ListWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowWithOptions(runtime);
  }

  /**
   * @param request - LoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoginResponse
   */
  async loginWithOptions(request: $_model.LoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoginResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.empId)) {
      body["EmpId"] = request.empId;
    }

    if (!$dara.isNull(request.empName)) {
      body["EmpName"] = request.empName;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Login",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoginResponse>(await this.callApi(params, req, runtime), new $_model.LoginResponse({}));
  }

  /**
   * @param request - LoginRequest
   * @returns LoginResponse
   */
  async login(request: $_model.LoginRequest): Promise<$_model.LoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loginWithOptions(request, runtime);
  }

  /**
   * 无线端APP登陆
   * 
   * @param request - LoginAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoginAppResponse
   */
  async loginAppWithOptions(request: $_model.LoginAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoginAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.empId)) {
      body["EmpId"] = request.empId;
    }

    if (!$dara.isNull(request.empName)) {
      body["EmpName"] = request.empName;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoginApp",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoginAppResponse>(await this.callApi(params, req, runtime), new $_model.LoginAppResponse({}));
  }

  /**
   * 无线端APP登陆
   * 
   * @param request - LoginAppRequest
   * @returns LoginAppResponse
   */
  async loginApp(request: $_model.LoginAppRequest): Promise<$_model.LoginAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loginAppWithOptions(request, runtime);
  }

  /**
   * @param request - PublishArEditProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishArEditProjectResponse
   */
  async publishArEditProjectWithOptions(request: $_model.PublishArEditProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishArEditProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapId)) {
      body["MapId"] = request.mapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishArEditProject",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishArEditProjectResponse>(await this.callApi(params, req, runtime), new $_model.PublishArEditProjectResponse({}));
  }

  /**
   * @param request - PublishArEditProjectRequest
   * @returns PublishArEditProjectResponse
   */
  async publishArEditProject(request: $_model.PublishArEditProjectRequest): Promise<$_model.PublishArEditProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishArEditProjectWithOptions(request, runtime);
  }

  /**
   * 项目发布
   * 
   * @param request - PublishProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishProjectResponse
   */
  async publishProjectWithOptions(request: $_model.PublishProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishProject",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishProjectResponse>(await this.callApi(params, req, runtime), new $_model.PublishProjectResponse({}));
  }

  /**
   * 项目发布
   * 
   * @param request - PublishProjectRequest
   * @returns PublishProjectResponse
   */
  async publishProject(request: $_model.PublishProjectRequest): Promise<$_model.PublishProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishProjectWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAreaMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAreaMapResponse
   */
  async queryAreaMapWithOptions(request: $_model.QueryAreaMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAreaMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAreaMap",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAreaMapResponse>(await this.callApi(params, req, runtime), new $_model.QueryAreaMapResponse({}));
  }

  /**
   * @param request - QueryAreaMapRequest
   * @returns QueryAreaMapResponse
   */
  async queryAreaMap(request: $_model.QueryAreaMapRequest): Promise<$_model.QueryAreaMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAreaMapWithOptions(request, runtime);
  }

  /**
   * 查找项目构建失败时的信息
   * 
   * @param request - QueryBuildBreakpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBuildBreakpointResponse
   */
  async queryBuildBreakpointWithOptions(request: $_model.QueryBuildBreakpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBuildBreakpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBuildBreakpoint",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBuildBreakpointResponse>(await this.callApi(params, req, runtime), new $_model.QueryBuildBreakpointResponse({}));
  }

  /**
   * 查找项目构建失败时的信息
   * 
   * @param request - QueryBuildBreakpointRequest
   * @returns QueryBuildBreakpointResponse
   */
  async queryBuildBreakpoint(request: $_model.QueryBuildBreakpointRequest): Promise<$_model.QueryBuildBreakpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBuildBreakpointWithOptions(request, runtime);
  }

  /**
   * @param request - QueryLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryLocationServiceResponse
   */
  async queryLocationServiceWithOptions(request: $_model.QueryLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryLocationServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryLocationService",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.QueryLocationServiceResponse({}));
  }

  /**
   * @param request - QueryLocationServiceRequest
   * @returns QueryLocationServiceResponse
   */
  async queryLocationService(request: $_model.QueryLocationServiceRequest): Promise<$_model.QueryLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryLocationServiceWithOptions(request, runtime);
  }

  /**
   * 查询项目构建详情
   * 
   * @param request - QueryProjectBuildDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectBuildDetailResponse
   */
  async queryProjectBuildDetailWithOptions(request: $_model.QueryProjectBuildDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProjectBuildDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProjectBuildDetail",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProjectBuildDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryProjectBuildDetailResponse({}));
  }

  /**
   * 查询项目构建详情
   * 
   * @param request - QueryProjectBuildDetailRequest
   * @returns QueryProjectBuildDetailResponse
   */
  async queryProjectBuildDetail(request: $_model.QueryProjectBuildDetailRequest): Promise<$_model.QueryProjectBuildDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProjectBuildDetailWithOptions(request, runtime);
  }

  /**
   * 查询项目详情
   * 
   * @param request - QueryProjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectDetailResponse
   */
  async queryProjectDetailWithOptions(request: $_model.QueryProjectDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProjectDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryProjectDetail",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProjectDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryProjectDetailResponse({}));
  }

  /**
   * 查询项目详情
   * 
   * @param request - QueryProjectDetailRequest
   * @returns QueryProjectDetailResponse
   */
  async queryProjectDetail(request: $_model.QueryProjectDetailRequest): Promise<$_model.QueryProjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProjectDetailWithOptions(request, runtime);
  }

  /**
   * 该注册接口只用于oneconsole页面的注册
   * 
   * @param request - RegisterUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterUserResponse
   */
  async registerUserWithOptions(request: $_model.RegisterUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterUser",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterUserResponse>(await this.callApi(params, req, runtime), new $_model.RegisterUserResponse({}));
  }

  /**
   * 该注册接口只用于oneconsole页面的注册
   * 
   * @param request - RegisterUserRequest
   * @returns RegisterUserResponse
   */
  async registerUser(request: $_model.RegisterUserRequest): Promise<$_model.RegisterUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerUserWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeLocationServiceResponse
   */
  async resumeLocationServiceWithOptions(request: $_model.ResumeLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeLocationServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeLocationService",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeLocationServiceResponse({}));
  }

  /**
   * @param request - ResumeLocationServiceRequest
   * @returns ResumeLocationServiceResponse
   */
  async resumeLocationService(request: $_model.ResumeLocationServiceRequest): Promise<$_model.ResumeLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeLocationServiceWithOptions(request, runtime);
  }

  /**
   * @param request - SaveArEditProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveArEditProjectResponse
   */
  async saveArEditProjectWithOptions(request: $_model.SaveArEditProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveArEditProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.mapId)) {
      body["MapId"] = request.mapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveArEditProject",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveArEditProjectResponse>(await this.callApi(params, req, runtime), new $_model.SaveArEditProjectResponse({}));
  }

  /**
   * @param request - SaveArEditProjectRequest
   * @returns SaveArEditProjectResponse
   */
  async saveArEditProject(request: $_model.SaveArEditProjectRequest): Promise<$_model.SaveArEditProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveArEditProjectWithOptions(request, runtime);
  }

  /**
   * 保存素材
   * 
   * @param request - SaveSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveSourceResponse
   */
  async saveSourceWithOptions(request: $_model.SaveSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeStatus)) {
      query["ChangeStatus"] = request.changeStatus;
    }

    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.needCheck)) {
      query["NeedCheck"] = request.needCheck;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveSource",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveSourceResponse>(await this.callApi(params, req, runtime), new $_model.SaveSourceResponse({}));
  }

  /**
   * 保存素材
   * 
   * @param request - SaveSourceRequest
   * @returns SaveSourceResponse
   */
  async saveSource(request: $_model.SaveSourceRequest): Promise<$_model.SaveSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveSourceWithOptions(request, runtime);
  }

  /**
   * @param request - SuspendLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendLocationServiceResponse
   */
  async suspendLocationServiceWithOptions(request: $_model.SuspendLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendLocationServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendLocationService",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.SuspendLocationServiceResponse({}));
  }

  /**
   * @param request - SuspendLocationServiceRequest
   * @returns SuspendLocationServiceResponse
   */
  async suspendLocationService(request: $_model.SuspendLocationServiceRequest): Promise<$_model.SuspendLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendLocationServiceWithOptions(request, runtime);
  }

  /**
   * 项目(发布状态改回隐私状态)
   * 
   * @param request - UnPublishProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnPublishProjectResponse
   */
  async unPublishProjectWithOptions(request: $_model.UnPublishProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnPublishProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnPublishProject",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnPublishProjectResponse>(await this.callApi(params, req, runtime), new $_model.UnPublishProjectResponse({}));
  }

  /**
   * 项目(发布状态改回隐私状态)
   * 
   * @param request - UnPublishProjectRequest
   * @returns UnPublishProjectResponse
   */
  async unPublishProject(request: $_model.UnPublishProjectRequest): Promise<$_model.UnPublishProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unPublishProjectWithOptions(request, runtime);
  }

  /**
   * 如果不包含treeConfig则只是简单更新
   * 
   * @param request - UpdateLocationServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLocationServiceResponse
   */
  async updateLocationServiceWithOptions(request: $_model.UpdateLocationServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLocationServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.note)) {
      body["Note"] = request.note;
    }

    if (!$dara.isNull(request.qps)) {
      body["Qps"] = request.qps;
    }

    if (!$dara.isNull(request.svcName)) {
      body["SvcName"] = request.svcName;
    }

    if (!$dara.isNull(request.svcState)) {
      body["SvcState"] = request.svcState;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLocationService",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLocationServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLocationServiceResponse({}));
  }

  /**
   * 如果不包含treeConfig则只是简单更新
   * 
   * @param request - UpdateLocationServiceRequest
   * @returns UpdateLocationServiceResponse
   */
  async updateLocationService(request: $_model.UpdateLocationServiceRequest): Promise<$_model.UpdateLocationServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLocationServiceWithOptions(request, runtime);
  }

  /**
   * 暂存接口比较复杂，单独拎出来
   * 
   * @param request - UpdateLocationTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLocationTreeResponse
   */
  async updateLocationTreeWithOptions(request: $_model.UpdateLocationTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLocationTreeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.jwtToken)) {
      body["JwtToken"] = request.jwtToken;
    }

    if (!$dara.isNull(request.treeConfig)) {
      body["TreeConfig"] = request.treeConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLocationTree",
      version: "2022-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLocationTreeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLocationTreeResponse({}));
  }

  /**
   * 暂存接口比较复杂，单独拎出来
   * 
   * @param request - UpdateLocationTreeRequest
   * @returns UpdateLocationTreeResponse
   */
  async updateLocationTree(request: $_model.UpdateLocationTreeRequest): Promise<$_model.UpdateLocationTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLocationTreeWithOptions(request, runtime);
  }

  /**
   * 更新项目信息
   * 
   * @param tmpReq - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(tmpReq: $_model.UpdateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ext)) {
      request.extShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ext, "Ext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoBuild)) {
      query["AutoBuild"] = request.autoBuild;
    }

    if (!$dara.isNull(request.extShrink)) {
      query["Ext"] = request.extShrink;
    }

    if (!$dara.isNull(request.intro)) {
      query["Intro"] = request.intro;
    }

    if (!$dara.isNull(request.jwtToken)) {
      query["JwtToken"] = request.jwtToken;
    }

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
      version: "2022-11-11",
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
   * 更新项目信息
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

}
