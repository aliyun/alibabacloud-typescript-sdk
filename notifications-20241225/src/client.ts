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
    this._endpoint = this.getEndpoint("notifications", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 方法描述：删除消息
   * 
   * @param request - DelMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelMessageResponse
   */
  async delMessageWithOptions(request: $_model.DelMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DelMessage",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelMessageResponse>(await this.callApi(params, req, runtime), new $_model.DelMessageResponse({}));
  }

  /**
   * 方法描述：删除消息
   * 
   * @param request - DelMessageRequest
   * @returns DelMessageResponse
   */
  async delMessage(request: $_model.DelMessageRequest): Promise<$_model.DelMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delMessageWithOptions(request, runtime);
  }

  /**
   * 方法描述：站内信全部删除（逻辑删除）
   * 
   * @param request - DeleteAllMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAllMessageResponse
   */
  async deleteAllMessageWithOptions(request: $_model.DeleteAllMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAllMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.groupCode)) {
      body["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAllMessage",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAllMessageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAllMessageResponse({}));
  }

  /**
   * 方法描述：站内信全部删除（逻辑删除）
   * 
   * @param request - DeleteAllMessageRequest
   * @returns DeleteAllMessageResponse
   */
  async deleteAllMessage(request: $_model.DeleteAllMessageRequest): Promise<$_model.DeleteAllMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAllMessageWithOptions(request, runtime);
  }

  /**
   * 方法描述：分类全部标记为已读，不填则全部标记
   * 
   * @param request - ReadAllMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadAllMessageResponse
   */
  async readAllMessageWithOptions(request: $_model.ReadAllMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadAllMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.groupCode)) {
      body["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadAllMessage",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadAllMessageResponse>(await this.callApi(params, req, runtime), new $_model.ReadAllMessageResponse({}));
  }

  /**
   * 方法描述：分类全部标记为已读，不填则全部标记
   * 
   * @param request - ReadAllMessageRequest
   * @returns ReadAllMessageResponse
   */
  async readAllMessage(request: $_model.ReadAllMessageRequest): Promise<$_model.ReadAllMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readAllMessageWithOptions(request, runtime);
  }

  /**
   * 方法描述：获取各分类已读消息数
   * 
   * @param request - ReadClassNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadClassNameResponse
   */
  async readClassNameWithOptions(request: $_model.ReadClassNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadClassNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadClassName",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadClassNameResponse>(await this.callApi(params, req, runtime), new $_model.ReadClassNameResponse({}));
  }

  /**
   * 方法描述：获取各分类已读消息数
   * 
   * @param request - ReadClassNameRequest
   * @returns ReadClassNameResponse
   */
  async readClassName(request: $_model.ReadClassNameRequest): Promise<$_model.ReadClassNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readClassNameWithOptions(request, runtime);
  }

  /**
   * 方法描述：消息标记为已读
   * 
   * @param request - ReadMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMessageResponse
   */
  async readMessageWithOptions(request: $_model.ReadMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadMessage",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMessageResponse>(await this.callApi(params, req, runtime), new $_model.ReadMessageResponse({}));
  }

  /**
   * 方法描述：消息标记为已读
   * 
   * @param request - ReadMessageRequest
   * @returns ReadMessageResponse
   */
  async readMessage(request: $_model.ReadMessageRequest): Promise<$_model.ReadMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageWithOptions(request, runtime);
  }

  /**
   * 方法描述：获取消息正文
   * 
   * @param request - ReadMessageContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMessageContentResponse
   */
  async readMessageContentWithOptions(request: $_model.ReadMessageContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMessageContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.groupCode)) {
      body["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.history)) {
      body["History"] = request.history;
    }

    if (!$dara.isNull(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadMessageContent",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMessageContentResponse>(await this.callApi(params, req, runtime), new $_model.ReadMessageContentResponse({}));
  }

  /**
   * 方法描述：获取消息正文
   * 
   * @param request - ReadMessageContentRequest
   * @returns ReadMessageContentResponse
   */
  async readMessageContent(request: $_model.ReadMessageContentRequest): Promise<$_model.ReadMessageContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageContentWithOptions(request, runtime);
  }

  /**
   * 方法描述：获取消息列表
   * 
   * @param request - ReadMessageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMessageListResponse
   */
  async readMessageListWithOptions(request: $_model.ReadMessageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMessageListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.classId)) {
      body["ClassId"] = request.classId;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.groupCode)) {
      body["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.history)) {
      body["History"] = request.history;
    }

    if (!$dara.isNull(request.loc)) {
      body["Loc"] = request.loc;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      body["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadMessageList",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMessageListResponse>(await this.callApi(params, req, runtime), new $_model.ReadMessageListResponse({}));
  }

  /**
   * 方法描述：获取消息列表
   * 
   * @param request - ReadMessageListRequest
   * @returns ReadMessageListResponse
   */
  async readMessageList(request: $_model.ReadMessageListRequest): Promise<$_model.ReadMessageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageListWithOptions(request, runtime);
  }

  /**
   * 方法描述：获取未读消息总数
   * 
   * @param request - ReadMessageNewTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMessageNewTotalResponse
   */
  async readMessageNewTotalWithOptions(request: $_model.ReadMessageNewTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMessageNewTotalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadMessageNewTotal",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMessageNewTotalResponse>(await this.callApi(params, req, runtime), new $_model.ReadMessageNewTotalResponse({}));
  }

  /**
   * 方法描述：获取未读消息总数
   * 
   * @param request - ReadMessageNewTotalRequest
   * @returns ReadMessageNewTotalResponse
   */
  async readMessageNewTotal(request: $_model.ReadMessageNewTotalRequest): Promise<$_model.ReadMessageNewTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageNewTotalWithOptions(request, runtime);
  }

  /**
   * 方法描述：获取各分类已读消息数
   * 
   * @param request - ReadNumGroupByClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadNumGroupByClassResponse
   */
  async readNumGroupByClassWithOptions(request: $_model.ReadNumGroupByClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadNumGroupByClassResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadNumGroupByClass",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadNumGroupByClassResponse>(await this.callApi(params, req, runtime), new $_model.ReadNumGroupByClassResponse({}));
  }

  /**
   * 方法描述：获取各分类已读消息数
   * 
   * @param request - ReadNumGroupByClassRequest
   * @returns ReadNumGroupByClassResponse
   */
  async readNumGroupByClass(request: $_model.ReadNumGroupByClassRequest): Promise<$_model.ReadNumGroupByClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readNumGroupByClassWithOptions(request, runtime);
  }

  /**
   * 方法描述：获取所有分类下的信息
   * 
   * @param request - ReadNumGroupTotalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadNumGroupTotalResponse
   */
  async readNumGroupTotalWithOptions(request: $_model.ReadNumGroupTotalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadNumGroupTotalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadNumGroupTotal",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadNumGroupTotalResponse>(await this.callApi(params, req, runtime), new $_model.ReadNumGroupTotalResponse({}));
  }

  /**
   * 方法描述：获取所有分类下的信息
   * 
   * @param request - ReadNumGroupTotalRequest
   * @returns ReadNumGroupTotalResponse
   */
  async readNumGroupTotal(request: $_model.ReadNumGroupTotalRequest): Promise<$_model.ReadNumGroupTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readNumGroupTotalWithOptions(request, runtime);
  }

}
