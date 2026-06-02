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
    this._endpoint = this.getEndpoint("wyota", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加终端
   * 
   * @param request - AddTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTerminalResponse
   */
  async addTerminalWithOptions(request: $_model.AddTerminalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTerminalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTerminal",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTerminalResponse>(await this.callApi(params, req, runtime), new $_model.AddTerminalResponse({}));
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalRequest
   * @returns AddTerminalResponse
   */
  async addTerminal(request: $_model.AddTerminalRequest): Promise<$_model.AddTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTerminalWithOptions(request, runtime);
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTerminalsResponse
   */
  async addTerminalsWithOptions(request: $_model.AddTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTerminalsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addTerminalParams)) {
      bodyFlat["AddTerminalParams"] = request.addTerminalParams;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTerminalsResponse>(await this.callApi(params, req, runtime), new $_model.AddTerminalsResponse({}));
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalsRequest
   * @returns AddTerminalsResponse
   */
  async addTerminals(request: $_model.AddTerminalsRequest): Promise<$_model.AddTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTerminalsWithOptions(request, runtime);
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindAccountLessLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountLessLoginUserResponse
   */
  async bindAccountLessLoginUserWithOptions(request: $_model.BindAccountLessLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAccountLessLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAccountLessLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAccountLessLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.BindAccountLessLoginUserResponse({}));
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindAccountLessLoginUserRequest
   * @returns BindAccountLessLoginUserResponse
   */
  async bindAccountLessLoginUser(request: $_model.BindAccountLessLoginUserRequest): Promise<$_model.BindAccountLessLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAccountLessLoginUserWithOptions(request, runtime);
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindPasswordFreeLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPasswordFreeLoginUserResponse
   */
  async bindPasswordFreeLoginUserWithOptions(request: $_model.BindPasswordFreeLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPasswordFreeLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPasswordFreeLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindPasswordFreeLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.BindPasswordFreeLoginUserResponse({}));
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindPasswordFreeLoginUserRequest
   * @returns BindPasswordFreeLoginUserResponse
   */
  async bindPasswordFreeLoginUser(request: $_model.BindPasswordFreeLoginUserRequest): Promise<$_model.BindPasswordFreeLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPasswordFreeLoginUserWithOptions(request, runtime);
  }

  /**
   * 解除桌面端、移动端纳管
   * 
   * @param request - DeleteClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientsResponse
   */
  async deleteClientsWithOptions(request: $_model.DeleteClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerAliUid)) {
      query["CallerAliUid"] = request.callerAliUid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuids)) {
      bodyFlat["Uuids"] = request.uuids;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClients",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientsResponse({}));
  }

  /**
   * 解除桌面端、移动端纳管
   * 
   * @param request - DeleteClientsRequest
   * @returns DeleteClientsResponse
   */
  async deleteClients(request: $_model.DeleteClientsRequest): Promise<$_model.DeleteClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientsWithOptions(request, runtime);
  }

  /**
   * 查询桌面端、移动端详细信息
   * 
   * @param request - DescribeClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClientsResponse
   */
  async describeClientsWithOptions(request: $_model.DescribeClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerAliUid)) {
      query["CallerAliUid"] = request.callerAliUid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.customResourceId)) {
      body["CustomResourceId"] = request.customResourceId;
    }

    if (!$dara.isNull(request.customResourceStatus)) {
      body["CustomResourceStatus"] = request.customResourceStatus;
    }

    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!$dara.isNull(request.includeSubGroups)) {
      body["IncludeSubGroups"] = request.includeSubGroups;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.onlineStatus)) {
      body["OnlineStatus"] = request.onlineStatus;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuids)) {
      bodyFlat["Uuids"] = request.uuids;
    }

    if (!$dara.isNull(request.withBindUser)) {
      body["WithBindUser"] = request.withBindUser;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClients",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClientsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClientsResponse({}));
  }

  /**
   * 查询桌面端、移动端详细信息
   * 
   * @param request - DescribeClientsRequest
   * @returns DescribeClientsResponse
   */
  async describeClients(request: $_model.DescribeClientsRequest): Promise<$_model.DescribeClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClientsWithOptions(request, runtime);
  }

  /**
   * 获取桌面端纳管邀请码
   * 
   * @param request - GetOrCreateInvitationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrCreateInvitationCodeResponse
   */
  async getOrCreateInvitationCodeWithOptions(request: $_model.GetOrCreateInvitationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrCreateInvitationCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireDays)) {
      body["ExpireDays"] = request.expireDays;
    }

    if (!$dara.isNull(request.expireMinutes)) {
      body["ExpireMinutes"] = request.expireMinutes;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrCreateInvitationCode",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrCreateInvitationCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetOrCreateInvitationCodeResponse({}));
  }

  /**
   * 获取桌面端纳管邀请码
   * 
   * @param request - GetOrCreateInvitationCodeRequest
   * @returns GetOrCreateInvitationCodeResponse
   */
  async getOrCreateInvitationCode(request: $_model.GetOrCreateInvitationCodeRequest): Promise<$_model.GetOrCreateInvitationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrCreateInvitationCodeWithOptions(request, runtime);
  }

  /**
   * 查询终端列表
   * 
   * @param request - ListTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerminalResponse
   */
  async listTerminalWithOptions(request: $_model.ListTerminalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTerminalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!$dara.isNull(request.ipv4)) {
      body["Ipv4"] = request.ipv4;
    }

    if (!$dara.isNull(request.locationInfo)) {
      body["LocationInfo"] = request.locationInfo;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerminal",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTerminalResponse>(await this.callApi(params, req, runtime), new $_model.ListTerminalResponse({}));
  }

  /**
   * 查询终端列表
   * 
   * @param request - ListTerminalRequest
   * @returns ListTerminalResponse
   */
  async listTerminal(request: $_model.ListTerminalRequest): Promise<$_model.ListTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTerminalWithOptions(request, runtime);
  }

  /**
   * 向终端发送运维命令
   * 
   * @param request - SendOpsMessageToTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendOpsMessageToTerminalsResponse
   */
  async sendOpsMessageToTerminalsWithOptions(request: $_model.SendOpsMessageToTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendOpsMessageToTerminalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.delay)) {
      query["Delay"] = request.delay;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.msg)) {
      body["Msg"] = request.msg;
    }

    if (!$dara.isNull(request.opsAction)) {
      body["OpsAction"] = request.opsAction;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuids)) {
      bodyFlat["Uuids"] = request.uuids;
    }

    if (!$dara.isNull(request.waitForAck)) {
      body["WaitForAck"] = request.waitForAck;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendOpsMessageToTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendOpsMessageToTerminalsResponse>(await this.callApi(params, req, runtime), new $_model.SendOpsMessageToTerminalsResponse({}));
  }

  /**
   * 向终端发送运维命令
   * 
   * @param request - SendOpsMessageToTerminalsRequest
   * @returns SendOpsMessageToTerminalsResponse
   */
  async sendOpsMessageToTerminals(request: $_model.SendOpsMessageToTerminalsRequest): Promise<$_model.SendOpsMessageToTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendOpsMessageToTerminalsWithOptions(request, runtime);
  }

  /**
   * 解绑免账号登录用户
   * 
   * @param request - UnbindAccountLessLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAccountLessLoginUserResponse
   */
  async unbindAccountLessLoginUserWithOptions(request: $_model.UnbindAccountLessLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAccountLessLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindAccountLessLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAccountLessLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAccountLessLoginUserResponse({}));
  }

  /**
   * 解绑免账号登录用户
   * 
   * @param request - UnbindAccountLessLoginUserRequest
   * @returns UnbindAccountLessLoginUserResponse
   */
  async unbindAccountLessLoginUser(request: $_model.UnbindAccountLessLoginUserRequest): Promise<$_model.UnbindAccountLessLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAccountLessLoginUserWithOptions(request, runtime);
  }

  /**
   * 解绑免密登录用户
   * 
   * @param request - UnbindPasswordFreeLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPasswordFreeLoginUserResponse
   */
  async unbindPasswordFreeLoginUserWithOptions(request: $_model.UnbindPasswordFreeLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindPasswordFreeLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindPasswordFreeLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindPasswordFreeLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindPasswordFreeLoginUserResponse({}));
  }

  /**
   * 解绑免密登录用户
   * 
   * @param request - UnbindPasswordFreeLoginUserRequest
   * @returns UnbindPasswordFreeLoginUserResponse
   */
  async unbindPasswordFreeLoginUser(request: $_model.UnbindPasswordFreeLoginUserRequest): Promise<$_model.UnbindPasswordFreeLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPasswordFreeLoginUserWithOptions(request, runtime);
  }

}
