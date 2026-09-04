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
      'ap-southeast-1': "notifications-intl.aliyuncs.com",
      'cn-zhangjiakou': "notifications.aliyuncs.com",
    };
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
   * Creates a webhook contact.
   * 
   * @param request - CreateWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebhookContactResponse
   */
  async createWebhookContactWithOptions(request: $_model.CreateWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebhookContactResponse> {
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

    if (!$dara.isNull(request.botSecurityToken)) {
      body["BotSecurityToken"] = request.botSecurityToken;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.serverUrl)) {
      body["ServerUrl"] = request.serverUrl;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    if (!$dara.isNull(request.verificationCode)) {
      body["VerificationCode"] = request.verificationCode;
    }

    if (!$dara.isNull(request.webhookType)) {
      body["WebhookType"] = request.webhookType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebhookContact",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebhookContactResponse({}));
  }

  /**
   * Creates a webhook contact.
   * 
   * @param request - CreateWebhookContactRequest
   * @returns CreateWebhookContactResponse
   */
  async createWebhookContact(request: $_model.CreateWebhookContactRequest): Promise<$_model.CreateWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWebhookContactWithOptions(request, runtime);
  }

  /**
   * Deletes a message.
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
   * Deletes a message.
   * 
   * @param request - DelMessageRequest
   * @returns DelMessageResponse
   */
  async delMessage(request: $_model.DelMessageRequest): Promise<$_model.DelMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delMessageWithOptions(request, runtime);
  }

  /**
   * Deletes all in-app messages (logical deletion).
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
   * Deletes all in-app messages (logical deletion).
   * 
   * @param request - DeleteAllMessageRequest
   * @returns DeleteAllMessageResponse
   */
  async deleteAllMessage(request: $_model.DeleteAllMessageRequest): Promise<$_model.DeleteAllMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAllMessageWithOptions(request, runtime);
  }

  /**
   * Deletes a webhook contact.
   * 
   * @param request - DeleteWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebhookContactResponse
   */
  async deleteWebhookContactWithOptions(request: $_model.DeleteWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebhookContactResponse> {
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

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
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
      action: "DeleteWebhookContact",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebhookContactResponse({}));
  }

  /**
   * Deletes a webhook contact.
   * 
   * @param request - DeleteWebhookContactRequest
   * @returns DeleteWebhookContactResponse
   */
  async deleteWebhookContact(request: $_model.DeleteWebhookContactRequest): Promise<$_model.DeleteWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebhookContactWithOptions(request, runtime);
  }

  /**
   * Retrieves all common contacts across accounts.
   * 
   * @param request - ReadAllCommonContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadAllCommonContactsResponse
   */
  async readAllCommonContactsWithOptions(request: $_model.ReadAllCommonContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadAllCommonContactsResponse> {
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
      action: "ReadAllCommonContacts",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadAllCommonContactsResponse>(await this.callApi(params, req, runtime), new $_model.ReadAllCommonContactsResponse({}));
  }

  /**
   * Retrieves all common contacts across accounts.
   * 
   * @param request - ReadAllCommonContactsRequest
   * @returns ReadAllCommonContactsResponse
   */
  async readAllCommonContacts(request: $_model.ReadAllCommonContactsRequest): Promise<$_model.ReadAllCommonContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readAllCommonContactsWithOptions(request, runtime);
  }

  /**
   * Retrieves all marketing preference configurations.
   * 
   * @param request - ReadAllMarketingPreferencesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadAllMarketingPreferencesResponse
   */
  async readAllMarketingPreferencesWithOptions(request: $_model.ReadAllMarketingPreferencesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadAllMarketingPreferencesResponse> {
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
      action: "ReadAllMarketingPreferences",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadAllMarketingPreferencesResponse>(await this.callApi(params, req, runtime), new $_model.ReadAllMarketingPreferencesResponse({}));
  }

  /**
   * Retrieves all marketing preference configurations.
   * 
   * @param request - ReadAllMarketingPreferencesRequest
   * @returns ReadAllMarketingPreferencesResponse
   */
  async readAllMarketingPreferences(request: $_model.ReadAllMarketingPreferencesRequest): Promise<$_model.ReadAllMarketingPreferencesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readAllMarketingPreferencesWithOptions(request, runtime);
  }

  /**
   * Marks all messages as read. If no category is specified, all messages are marked as read.
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
   * Marks all messages as read. If no category is specified, all messages are marked as read.
   * 
   * @param request - ReadAllMessageRequest
   * @returns ReadAllMessageResponse
   */
  async readAllMessage(request: $_model.ReadAllMessageRequest): Promise<$_model.ReadAllMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readAllMessageWithOptions(request, runtime);
  }

  /**
   * Retrieves the full list of webhooks.
   * 
   * @param request - ReadAllWebhookContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadAllWebhookContactsResponse
   */
  async readAllWebhookContactsWithOptions(request: $_model.ReadAllWebhookContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadAllWebhookContactsResponse> {
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
      action: "ReadAllWebhookContacts",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadAllWebhookContactsResponse>(await this.callApi(params, req, runtime), new $_model.ReadAllWebhookContactsResponse({}));
  }

  /**
   * Retrieves the full list of webhooks.
   * 
   * @param request - ReadAllWebhookContactsRequest
   * @returns ReadAllWebhookContactsResponse
   */
  async readAllWebhookContacts(request: $_model.ReadAllWebhookContactsRequest): Promise<$_model.ReadAllWebhookContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readAllWebhookContactsWithOptions(request, runtime);
  }

  /**
   * Get category group list
   * 
   * @param request - ReadCategoryGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadCategoryGroupListResponse
   */
  async readCategoryGroupListWithOptions(request: $_model.ReadCategoryGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadCategoryGroupListResponse> {
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

    if (!$dara.isNull(request.channelGroupCode)) {
      body["ChannelGroupCode"] = request.channelGroupCode;
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
      action: "ReadCategoryGroupList",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadCategoryGroupListResponse>(await this.callApi(params, req, runtime), new $_model.ReadCategoryGroupListResponse({}));
  }

  /**
   * Get category group list
   * 
   * @param request - ReadCategoryGroupListRequest
   * @returns ReadCategoryGroupListResponse
   */
  async readCategoryGroupList(request: $_model.ReadCategoryGroupListRequest): Promise<$_model.ReadCategoryGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readCategoryGroupListWithOptions(request, runtime);
  }

  /**
   * Retrieves the number of read messages for each category.
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
   * Retrieves the number of read messages for each category.
   * 
   * @param request - ReadClassNameRequest
   * @returns ReadClassNameResponse
   */
  async readClassName(request: $_model.ReadClassNameRequest): Promise<$_model.ReadClassNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readClassNameWithOptions(request, runtime);
  }

  /**
   * Retrieves a general contact.
   * 
   * @param request - ReadCommonContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadCommonContactResponse
   */
  async readCommonContactWithOptions(request: $_model.ReadCommonContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadCommonContactResponse> {
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

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
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
      action: "ReadCommonContact",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadCommonContactResponse>(await this.callApi(params, req, runtime), new $_model.ReadCommonContactResponse({}));
  }

  /**
   * Retrieves a general contact.
   * 
   * @param request - ReadCommonContactRequest
   * @returns ReadCommonContactResponse
   */
  async readCommonContact(request: $_model.ReadCommonContactRequest): Promise<$_model.ReadCommonContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readCommonContactWithOptions(request, runtime);
  }

  /**
   * 获取用户营销偏好
   * 
   * @param request - ReadMarketingPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMarketingPreferenceResponse
   */
  async readMarketingPreferenceWithOptions(request: $_model.ReadMarketingPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMarketingPreferenceResponse> {
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

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
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
      action: "ReadMarketingPreference",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMarketingPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.ReadMarketingPreferenceResponse({}));
  }

  /**
   * 获取用户营销偏好
   * 
   * @param request - ReadMarketingPreferenceRequest
   * @returns ReadMarketingPreferenceResponse
   */
  async readMarketingPreference(request: $_model.ReadMarketingPreferenceRequest): Promise<$_model.ReadMarketingPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMarketingPreferenceWithOptions(request, runtime);
  }

  /**
   * Marks a message as read.
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
   * Marks a message as read.
   * 
   * @param request - ReadMessageRequest
   * @returns ReadMessageResponse
   */
  async readMessage(request: $_model.ReadMessageRequest): Promise<$_model.ReadMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageWithOptions(request, runtime);
  }

  /**
   * Retrieves the body of a message.
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
   * Retrieves the body of a message.
   * 
   * @param request - ReadMessageContentRequest
   * @returns ReadMessageContentResponse
   */
  async readMessageContent(request: $_model.ReadMessageContentRequest): Promise<$_model.ReadMessageContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageContentWithOptions(request, runtime);
  }

  /**
   * Retrieves the message language.
   * 
   * @param request - ReadMessageLanguageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadMessageLanguageResponse
   */
  async readMessageLanguageWithOptions(request: $_model.ReadMessageLanguageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadMessageLanguageResponse> {
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

    if (!$dara.isNull(request.returnDefaultLang)) {
      body["ReturnDefaultLang"] = request.returnDefaultLang;
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
      action: "ReadMessageLanguage",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadMessageLanguageResponse>(await this.callApi(params, req, runtime), new $_model.ReadMessageLanguageResponse({}));
  }

  /**
   * Retrieves the message language.
   * 
   * @param request - ReadMessageLanguageRequest
   * @returns ReadMessageLanguageResponse
   */
  async readMessageLanguage(request: $_model.ReadMessageLanguageRequest): Promise<$_model.ReadMessageLanguageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageLanguageWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of messages.
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
   * Retrieves a list of messages.
   * 
   * @param request - ReadMessageListRequest
   * @returns ReadMessageListResponse
   */
  async readMessageList(request: $_model.ReadMessageListRequest): Promise<$_model.ReadMessageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageListWithOptions(request, runtime);
  }

  /**
   * Retrieves the total number of unread messages.
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
   * Retrieves the total number of unread messages.
   * 
   * @param request - ReadMessageNewTotalRequest
   * @returns ReadMessageNewTotalResponse
   */
  async readMessageNewTotal(request: $_model.ReadMessageNewTotalRequest): Promise<$_model.ReadMessageNewTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readMessageNewTotalWithOptions(request, runtime);
  }

  /**
   * Retrieves the count of read messages for each category.
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
   * Retrieves the count of read messages for each category.
   * 
   * @param request - ReadNumGroupByClassRequest
   * @returns ReadNumGroupByClassResponse
   */
  async readNumGroupByClass(request: $_model.ReadNumGroupByClassRequest): Promise<$_model.ReadNumGroupByClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readNumGroupByClassWithOptions(request, runtime);
  }

  /**
   * Method description: Get information under all categories
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
   * Method description: Get information under all categories
   * 
   * @param request - ReadNumGroupTotalRequest
   * @returns ReadNumGroupTotalResponse
   */
  async readNumGroupTotal(request: $_model.ReadNumGroupTotalRequest): Promise<$_model.ReadNumGroupTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readNumGroupTotalWithOptions(request, runtime);
  }

  /**
   * Retrieves revision records.
   * 
   * @param tmpReq - ReadRevisionHistoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadRevisionHistoryListResponse
   */
  async readRevisionHistoryListWithOptions(tmpReq: $_model.ReadRevisionHistoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadRevisionHistoryListResponse> {
    tmpReq.validate();
    let request = new $_model.ReadRevisionHistoryListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pageInfo)) {
      request.pageInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageInfo, "PageInfo", "json");
    }

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

    if (!$dara.isNull(request.categoryCode)) {
      body["CategoryCode"] = request.categoryCode;
    }

    if (!$dara.isNull(request.channelGroupCode)) {
      body["ChannelGroupCode"] = request.channelGroupCode;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.pageInfoShrink)) {
      body["PageInfo"] = request.pageInfoShrink;
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
      action: "ReadRevisionHistoryList",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadRevisionHistoryListResponse>(await this.callApi(params, req, runtime), new $_model.ReadRevisionHistoryListResponse({}));
  }

  /**
   * Retrieves revision records.
   * 
   * @param request - ReadRevisionHistoryListRequest
   * @returns ReadRevisionHistoryListResponse
   */
  async readRevisionHistoryList(request: $_model.ReadRevisionHistoryListRequest): Promise<$_model.ReadRevisionHistoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readRevisionHistoryListWithOptions(request, runtime);
  }

  /**
   * 获取用户订阅列表
   * 
   * @param request - ReadUserSubscriptionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadUserSubscriptionListResponse
   */
  async readUserSubscriptionListWithOptions(request: $_model.ReadUserSubscriptionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadUserSubscriptionListResponse> {
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

    if (!$dara.isNull(request.categoryGroupCode)) {
      body["CategoryGroupCode"] = request.categoryGroupCode;
    }

    if (!$dara.isNull(request.channelGroupCode)) {
      body["ChannelGroupCode"] = request.channelGroupCode;
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
      action: "ReadUserSubscriptionList",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadUserSubscriptionListResponse>(await this.callApi(params, req, runtime), new $_model.ReadUserSubscriptionListResponse({}));
  }

  /**
   * 获取用户订阅列表
   * 
   * @param request - ReadUserSubscriptionListRequest
   * @returns ReadUserSubscriptionListResponse
   */
  async readUserSubscriptionList(request: $_model.ReadUserSubscriptionListRequest): Promise<$_model.ReadUserSubscriptionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readUserSubscriptionListWithOptions(request, runtime);
  }

  /**
   * Retrieves a webhook contact.
   * 
   * @param request - ReadWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadWebhookContactResponse
   */
  async readWebhookContactWithOptions(request: $_model.ReadWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadWebhookContactResponse> {
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

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
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
      action: "ReadWebhookContact",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.ReadWebhookContactResponse({}));
  }

  /**
   * Retrieves a webhook contact.
   * 
   * @param request - ReadWebhookContactRequest
   * @returns ReadWebhookContactResponse
   */
  async readWebhookContact(request: $_model.ReadWebhookContactRequest): Promise<$_model.ReadWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readWebhookContactWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of webhook send templates.
   * 
   * @param request - ReadWebhookContactSendTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadWebhookContactSendTemplateListResponse
   */
  async readWebhookContactSendTemplateListWithOptions(request: $_model.ReadWebhookContactSendTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadWebhookContactSendTemplateListResponse> {
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

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
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
      action: "ReadWebhookContactSendTemplateList",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadWebhookContactSendTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.ReadWebhookContactSendTemplateListResponse({}));
  }

  /**
   * Retrieves the list of webhook send templates.
   * 
   * @param request - ReadWebhookContactSendTemplateListRequest
   * @returns ReadWebhookContactSendTemplateListResponse
   */
  async readWebhookContactSendTemplateList(request: $_model.ReadWebhookContactSendTemplateListRequest): Promise<$_model.ReadWebhookContactSendTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readWebhookContactSendTemplateListWithOptions(request, runtime);
  }

  /**
   * Resets user subscriptions.
   * 
   * @param tmpReq - ResetUserSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserSubscriptionResponse
   */
  async resetUserSubscriptionWithOptions(tmpReq: $_model.ResetUserSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserSubscriptionResponse> {
    tmpReq.validate();
    let request = new $_model.ResetUserSubscriptionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categoryCodes)) {
      request.categoryCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categoryCodes, "CategoryCodes", "json");
    }

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

    if (!$dara.isNull(request.categoryCodesShrink)) {
      body["CategoryCodes"] = request.categoryCodesShrink;
    }

    if (!$dara.isNull(request.channelGroupCode)) {
      body["ChannelGroupCode"] = request.channelGroupCode;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.remarks)) {
      body["Remarks"] = request.remarks;
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
      action: "ResetUserSubscription",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetUserSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.ResetUserSubscriptionResponse({}));
  }

  /**
   * Resets user subscriptions.
   * 
   * @param request - ResetUserSubscriptionRequest
   * @returns ResetUserSubscriptionResponse
   */
  async resetUserSubscription(request: $_model.ResetUserSubscriptionRequest): Promise<$_model.ResetUserSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetUserSubscriptionWithOptions(request, runtime);
  }

  /**
   * Tests a webhook.
   * 
   * @param request - TestWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestWebhookContactResponse
   */
  async testWebhookContactWithOptions(request: $_model.TestWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestWebhookContactResponse> {
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

    if (!$dara.isNull(request.botSecurityToken)) {
      body["BotSecurityToken"] = request.botSecurityToken;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.serverUrl)) {
      body["ServerUrl"] = request.serverUrl;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    if (!$dara.isNull(request.webhookType)) {
      body["WebhookType"] = request.webhookType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestWebhookContact",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.TestWebhookContactResponse({}));
  }

  /**
   * Tests a webhook.
   * 
   * @param request - TestWebhookContactRequest
   * @returns TestWebhookContactResponse
   */
  async testWebhookContact(request: $_model.TestWebhookContactRequest): Promise<$_model.TestWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testWebhookContactWithOptions(request, runtime);
  }

  /**
   * 更新营销偏好
   * 
   * @param request - UpdateMarketingPreferenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMarketingPreferenceResponse
   */
  async updateMarketingPreferenceWithOptions(request: $_model.UpdateMarketingPreferenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMarketingPreferenceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.allowMarketing)) {
      body["AllowMarketing"] = request.allowMarketing;
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

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
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
      action: "UpdateMarketingPreference",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMarketingPreferenceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMarketingPreferenceResponse({}));
  }

  /**
   * 更新营销偏好
   * 
   * @param request - UpdateMarketingPreferenceRequest
   * @returns UpdateMarketingPreferenceResponse
   */
  async updateMarketingPreference(request: $_model.UpdateMarketingPreferenceRequest): Promise<$_model.UpdateMarketingPreferenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMarketingPreferenceWithOptions(request, runtime);
  }

  /**
   * Updates the message language.
   * 
   * @param request - UpdateMessageLanguageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMessageLanguageResponse
   */
  async updateMessageLanguageWithOptions(request: $_model.UpdateMessageLanguageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMessageLanguageResponse> {
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

    if (!$dara.isNull(request.preferLang)) {
      body["PreferLang"] = request.preferLang;
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
      action: "UpdateMessageLanguage",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMessageLanguageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMessageLanguageResponse({}));
  }

  /**
   * Updates the message language.
   * 
   * @param request - UpdateMessageLanguageRequest
   * @returns UpdateMessageLanguageResponse
   */
  async updateMessageLanguage(request: $_model.UpdateMessageLanguageRequest): Promise<$_model.UpdateMessageLanguageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMessageLanguageWithOptions(request, runtime);
  }

  /**
   * Modifies a webhook contact.
   * 
   * @param request - UpdateWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebhookContactResponse
   */
  async updateWebhookContactWithOptions(request: $_model.UpdateWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebhookContactResponse> {
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

    if (!$dara.isNull(request.botSecurityToken)) {
      body["BotSecurityToken"] = request.botSecurityToken;
    }

    if (!$dara.isNull(request.callerProtocol)) {
      body["CallerProtocol"] = request.callerProtocol;
    }

    if (!$dara.isNull(request.clientSource)) {
      body["ClientSource"] = request.clientSource;
    }

    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.cookies)) {
      body["Cookies"] = request.cookies;
    }

    if (!$dara.isNull(request.securityToken)) {
      body["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.serverUrl)) {
      body["ServerUrl"] = request.serverUrl;
    }

    if (!$dara.isNull(request.srcUrl)) {
      body["SrcUrl"] = request.srcUrl;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.tenantCode)) {
      body["TenantCode"] = request.tenantCode;
    }

    if (!$dara.isNull(request.uidType)) {
      body["UidType"] = request.uidType;
    }

    if (!$dara.isNull(request.verificationCode)) {
      body["VerificationCode"] = request.verificationCode;
    }

    if (!$dara.isNull(request.webhookType)) {
      body["WebhookType"] = request.webhookType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebhookContact",
      version: "2024-12-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebhookContactResponse({}));
  }

  /**
   * Modifies a webhook contact.
   * 
   * @param request - UpdateWebhookContactRequest
   * @returns UpdateWebhookContactResponse
   */
  async updateWebhookContact(request: $_model.UpdateWebhookContactRequest): Promise<$_model.UpdateWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWebhookContactWithOptions(request, runtime);
  }

}
