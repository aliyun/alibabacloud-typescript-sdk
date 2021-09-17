// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class WakeUpAppHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeUpAppRequest extends $tea.Model {
  path?: string;
  genieAppId?: string;
  targetInfo?: WakeUpAppRequestTargetInfo;
  isDebug?: boolean;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      genieAppId: 'GenieAppId',
      targetInfo: 'TargetInfo',
      isDebug: 'IsDebug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      genieAppId: 'string',
      targetInfo: WakeUpAppRequestTargetInfo,
      isDebug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeUpAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequest extends $tea.Model {
  notificationUnicastRequest?: PushNotificationsRequestNotificationUnicastRequest;
  tenantInfo?: PushNotificationsRequestTenantInfo;
  static names(): { [key: string]: string } {
    return {
      notificationUnicastRequest: 'NotificationUnicastRequest',
      tenantInfo: 'TenantInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationUnicastRequest: PushNotificationsRequestNotificationUnicastRequest,
      tenantInfo: PushNotificationsRequestTenantInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsShrinkRequest extends $tea.Model {
  notificationUnicastRequestShrink?: string;
  tenantInfoShrink?: string;
  static names(): { [key: string]: string } {
    return {
      notificationUnicastRequestShrink: 'NotificationUnicastRequest',
      tenantInfoShrink: 'TenantInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationUnicastRequestShrink: 'string',
      tenantInfoShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WakeUpAppRequestTargetInfo extends $tea.Model {
  targetType?: string;
  targetIdentity?: string;
  organizationId?: string;
  encodeType?: string;
  encodeKey?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'TargetType',
      targetIdentity: 'TargetIdentity',
      organizationId: 'OrganizationId',
      encodeType: 'EncodeType',
      encodeKey: 'EncodeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      targetIdentity: 'string',
      organizationId: 'string',
      encodeType: 'string',
      encodeKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequestNotificationUnicastRequestSendTarget extends $tea.Model {
  targetType?: string;
  targetIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'TargetType',
      targetIdentity: 'TargetIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      targetIdentity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequestNotificationUnicastRequest extends $tea.Model {
  sendTarget?: PushNotificationsRequestNotificationUnicastRequestSendTarget;
  messageTemplateId?: string;
  placeHolder?: { [key: string]: any };
  encodeType?: string;
  encodeKey?: string;
  organizationId?: string;
  isDebug?: boolean;
  static names(): { [key: string]: string } {
    return {
      sendTarget: 'SendTarget',
      messageTemplateId: 'MessageTemplateId',
      placeHolder: 'PlaceHolder',
      encodeType: 'EncodeType',
      encodeKey: 'EncodeKey',
      organizationId: 'OrganizationId',
      isDebug: 'IsDebug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sendTarget: PushNotificationsRequestNotificationUnicastRequestSendTarget,
      messageTemplateId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      encodeType: 'string',
      encodeKey: 'string',
      organizationId: 'string',
      isDebug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNotificationsRequestTenantInfo extends $tea.Model {
  genieAppId?: string;
  static names(): { [key: string]: string } {
    return {
      genieAppId: 'GenieAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      genieAppId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async wakeUpApp(request: WakeUpAppRequest): Promise<WakeUpAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new WakeUpAppHeaders({ });
    return await this.wakeUpAppWithOptions(request, headers, runtime);
  }

  async wakeUpAppWithOptions(request: WakeUpAppRequest, headers: WakeUpAppHeaders, runtime: $Util.RuntimeOptions): Promise<WakeUpAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.genieAppId)) {
      body["GenieAppId"] = request.genieAppId;
    }

    if (!Util.isUnset($tea.toMap(request.targetInfo))) {
      body["TargetInfo"] = request.targetInfo;
    }

    if (!Util.isUnset(request.isDebug)) {
      body["IsDebug"] = request.isDebug;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = headers.xAcsAligenieAccessToken;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = headers.authorization;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "WakeUpApp",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/wakeup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<WakeUpAppResponse>(await this.callApi(params, req, runtime), new WakeUpAppResponse({}));
  }

  async pushNotifications(request: PushNotificationsRequest): Promise<PushNotificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PushNotificationsHeaders({ });
    return await this.pushNotificationsWithOptions(request, headers, runtime);
  }

  async pushNotificationsWithOptions(tmpReq: PushNotificationsRequest, headers: PushNotificationsHeaders, runtime: $Util.RuntimeOptions): Promise<PushNotificationsResponse> {
    Util.validateModel(tmpReq);
    let request = new PushNotificationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.notificationUnicastRequest))) {
      request.notificationUnicastRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.notificationUnicastRequest), "NotificationUnicastRequest", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.tenantInfo))) {
      request.tenantInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.tenantInfo), "TenantInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.notificationUnicastRequestShrink)) {
      body["NotificationUnicastRequest"] = request.notificationUnicastRequestShrink;
    }

    if (!Util.isUnset(request.tenantInfoShrink)) {
      body["TenantInfo"] = request.tenantInfoShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = headers.xAcsAligenieAccessToken;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = headers.authorization;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushNotifications",
      version: "iap_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/iap/notifications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<PushNotificationsResponse>(await this.callApi(params, req, runtime), new PushNotificationsResponse({}));
  }

}
