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
      'ap-northeast-1': "cloudpush.aliyuncs.com",
      'ap-northeast-2-pop': "cloudpush.aliyuncs.com",
      'ap-south-1': "cloudpush.aliyuncs.com",
      'ap-southeast-1': "cloudpush.aliyuncs.com",
      'ap-southeast-2': "cloudpush.aliyuncs.com",
      'ap-southeast-3': "cloudpush.aliyuncs.com",
      'ap-southeast-5': "cloudpush.aliyuncs.com",
      'cn-beijing': "cloudpush.aliyuncs.com",
      'cn-beijing-finance-1': "cloudpush.aliyuncs.com",
      'cn-beijing-finance-pop': "cloudpush.aliyuncs.com",
      'cn-beijing-gov-1': "cloudpush.aliyuncs.com",
      'cn-beijing-nu16-b01': "cloudpush.aliyuncs.com",
      'cn-chengdu': "cloudpush.aliyuncs.com",
      'cn-edge-1': "cloudpush.aliyuncs.com",
      'cn-fujian': "cloudpush.aliyuncs.com",
      'cn-haidian-cm12-c01': "cloudpush.aliyuncs.com",
      'cn-hangzhou': "cloudpush.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cloudpush.aliyuncs.com",
      'cn-hangzhou-finance': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cloudpush.aliyuncs.com",
      'cn-hangzhou-test-306': "cloudpush.aliyuncs.com",
      'cn-hongkong': "cloudpush.aliyuncs.com",
      'cn-hongkong-finance-pop': "cloudpush.aliyuncs.com",
      'cn-huhehaote': "cloudpush.aliyuncs.com",
      'cn-north-2-gov-1': "cloudpush.aliyuncs.com",
      'cn-qingdao': "cloudpush.aliyuncs.com",
      'cn-qingdao-nebula': "cloudpush.aliyuncs.com",
      'cn-shanghai': "cloudpush.aliyuncs.com",
      'cn-shanghai-et15-b01': "cloudpush.aliyuncs.com",
      'cn-shanghai-et2-b01': "cloudpush.aliyuncs.com",
      'cn-shanghai-finance-1': "cloudpush.aliyuncs.com",
      'cn-shanghai-inner': "cloudpush.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cloudpush.aliyuncs.com",
      'cn-shenzhen': "cloudpush.aliyuncs.com",
      'cn-shenzhen-finance-1': "cloudpush.aliyuncs.com",
      'cn-shenzhen-inner': "cloudpush.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cloudpush.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cloudpush.aliyuncs.com",
      'cn-wuhan': "cloudpush.aliyuncs.com",
      'cn-yushanfang': "cloudpush.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cloudpush.aliyuncs.com",
      'cn-zhangjiakou': "cloudpush.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cloudpush.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cloudpush.aliyuncs.com",
      'eu-central-1': "cloudpush.aliyuncs.com",
      'eu-west-1': "cloudpush.aliyuncs.com",
      'eu-west-1-oxs': "cloudpush.aliyuncs.com",
      'me-east-1': "cloudpush.aliyuncs.com",
      'rus-west-1-pop': "cloudpush.aliyuncs.com",
      'us-east-1': "cloudpush.aliyuncs.com",
      'us-west-1': "cloudpush.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("push", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Attach an alias to a device.
   * 
   * @remarks
   * You can attach up to 10 aliases in a single request. The attachment takes effect immediately.
   * 
   * @param request - BindAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAliasResponse
   */
  async bindAliasWithOptions(request: $_model.BindAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAlias",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAliasResponse>(await this.callApi(params, req, runtime), new $_model.BindAliasResponse({}));
  }

  /**
   * Attach an alias to a device.
   * 
   * @remarks
   * You can attach up to 10 aliases in a single request. The attachment takes effect immediately.
   * 
   * @param request - BindAliasRequest
   * @returns BindAliasResponse
   */
  async bindAlias(request: $_model.BindAliasRequest): Promise<$_model.BindAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAliasWithOptions(request, runtime);
  }

  /**
   * Attaches a device to a phone number.
   * 
   * @param request - BindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPhoneResponse
   */
  async bindPhoneWithOptions(request: $_model.BindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPhone",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindPhoneResponse>(await this.callApi(params, req, runtime), new $_model.BindPhoneResponse({}));
  }

  /**
   * Attaches a device to a phone number.
   * 
   * @param request - BindPhoneRequest
   * @returns BindPhoneResponse
   */
  async bindPhone(request: $_model.BindPhoneRequest): Promise<$_model.BindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPhoneWithOptions(request, runtime);
  }

  /**
   * Binds tags to specified device targets. Tag bindings take effect within 10 minutes.
   * 
   * @param request - BindTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindTagResponse
   */
  async bindTagWithOptions(request: $_model.BindTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindTag",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindTagResponse>(await this.callApi(params, req, runtime), new $_model.BindTagResponse({}));
  }

  /**
   * Binds tags to specified device targets. Tag bindings take effect within 10 minutes.
   * 
   * @param request - BindTagRequest
   * @returns BindTagResponse
   */
  async bindTag(request: $_model.BindTagRequest): Promise<$_model.BindTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindTagWithOptions(request, runtime);
  }

  /**
   * Cancels a scheduled push task that has not yet been executed.
   * 
   * @param request - CancelPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPushResponse
   */
  async cancelPushWithOptions(request: $_model.CancelPushRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPushResponse>(await this.callApi(params, req, runtime), new $_model.CancelPushResponse({}));
  }

  /**
   * Cancels a scheduled push task that has not yet been executed.
   * 
   * @param request - CancelPushRequest
   * @returns CancelPushResponse
   */
  async cancelPush(request: $_model.CancelPushRequest): Promise<$_model.CancelPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPushWithOptions(request, runtime);
  }

  /**
   * Checks the expiration time and current status of the iOS certificate for a specified app.
   * 
   * @remarks
   * - If the returned ExpireTime value is later than the current timestamp, the certificate is not necessarily valid. Also verify that the Status is OK.
   * - The REVOKED status originates from the Apple Push Notification service (APNs) server. If a certificate has a REVOKED status, at least one push notification to APNs has failed in the corresponding environment.
   * 
   * @param request - CheckCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCertificateResponse
   */
  async checkCertificateWithOptions(request: $_model.CheckCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCertificate",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CheckCertificateResponse({}));
  }

  /**
   * Checks the expiration time and current status of the iOS certificate for a specified app.
   * 
   * @remarks
   * - If the returned ExpireTime value is later than the current timestamp, the certificate is not necessarily valid. Also verify that the Status is OK.
   * - The REVOKED status originates from the Apple Push Notification service (APNs) server. If a certificate has a REVOKED status, at least one push notification to APNs has failed in the corresponding environment.
   * 
   * @param request - CheckCertificateRequest
   * @returns CheckCertificateResponse
   */
  async checkCertificate(request: $_model.CheckCertificateRequest): Promise<$_model.CheckCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCertificateWithOptions(request, runtime);
  }

  /**
   * Validates the specified (device).
   * 
   * @deprecated OpenAPI CheckDevice is deprecated, please use Push::2016-08-01::CheckDevices instead.
   * 
   * @param request - CheckDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDeviceResponse
   */
  async checkDeviceWithOptions(request: $_model.CheckDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDevice",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDeviceResponse>(await this.callApi(params, req, runtime), new $_model.CheckDeviceResponse({}));
  }

  /**
   * Validates the specified (device).
   * 
   * @deprecated OpenAPI CheckDevice is deprecated, please use Push::2016-08-01::CheckDevices instead.
   * 
   * @param request - CheckDeviceRequest
   * @returns CheckDeviceResponse
   */
  // Deprecated
  async checkDevice(request: $_model.CheckDeviceRequest): Promise<$_model.CheckDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDeviceWithOptions(request, runtime);
  }

  /**
   * Validate a specified group of devices.
   * 
   * @param request - CheckDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDevicesResponse
   */
  async checkDevicesWithOptions(request: $_model.CheckDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDevices",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDevicesResponse>(await this.callApi(params, req, runtime), new $_model.CheckDevicesResponse({}));
  }

  /**
   * Validate a specified group of devices.
   * 
   * @param request - CheckDevicesRequest
   * @returns CheckDevicesResponse
   */
  async checkDevices(request: $_model.CheckDevicesRequest): Promise<$_model.CheckDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDevicesWithOptions(request, runtime);
  }

  /**
   * Manually ends a continuous push task.
   * 
   * @remarks
   * If you do not call this operation, the continuous push task automatically ends when it reaches its time-to-live (TTL).
   * 
   * @param request - CompleteContinuouslyPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteContinuouslyPushResponse
   */
  async completeContinuouslyPushWithOptions(request: $_model.CompleteContinuouslyPushRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteContinuouslyPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteContinuouslyPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteContinuouslyPushResponse>(await this.callApi(params, req, runtime), new $_model.CompleteContinuouslyPushResponse({}));
  }

  /**
   * Manually ends a continuous push task.
   * 
   * @remarks
   * If you do not call this operation, the continuous push task automatically ends when it reaches its time-to-live (TTL).
   * 
   * @param request - CompleteContinuouslyPushRequest
   * @returns CompleteContinuouslyPushResponse
   */
  async completeContinuouslyPush(request: $_model.CompleteContinuouslyPushRequest): Promise<$_model.CompleteContinuouslyPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeContinuouslyPushWithOptions(request, runtime);
  }

  /**
   * Executes a predefined continuous push task.
   * 
   * @remarks
   * This API addresses the limitations of the [Push Advanced Push API](https://help.aliyun.com/document_detail/2249916.html), where push-by-device, push-by-account, and push-by-alias operations each have a maximum target count per single call.
   * - You can use continuous push when your scenario requires sending the same message to many devices. In this case, you can call the continuous push API repeatedly, each time specifying a group of targets for aggregation (the current limit is 1,000 targets per call for device, account, or alias pushes). The total number of pushes for the same MessageId is restricted to 10,000. If you need a higher limit, contact technical support to evaluate your specific scenario.
   * - Before using this API, you must first call the Push API with Target set to TBD (To Be Determined) and include your message content. This returns a MessageId from the push system. You can then use this MessageId to repeatedly call the continuous push API, specifying different target groups to deliver the same message.
   * - After calling the Push API with Target set to TBD and obtaining a MessageId, the message is stored in the push system for 24 hours by default. You can use this API to push to specified targets at any time before expiration. Pushes are not allowed after expiration or after reaching the total push limit.
   * - Each call to this API sends the message immediately. Scheduled pushes are not supported.
   * 
   * @param request - ContinuouslyPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuouslyPushResponse
   */
  async continuouslyPushWithOptions(request: $_model.ContinuouslyPushRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinuouslyPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinuouslyPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinuouslyPushResponse>(await this.callApi(params, req, runtime), new $_model.ContinuouslyPushResponse({}));
  }

  /**
   * Executes a predefined continuous push task.
   * 
   * @remarks
   * This API addresses the limitations of the [Push Advanced Push API](https://help.aliyun.com/document_detail/2249916.html), where push-by-device, push-by-account, and push-by-alias operations each have a maximum target count per single call.
   * - You can use continuous push when your scenario requires sending the same message to many devices. In this case, you can call the continuous push API repeatedly, each time specifying a group of targets for aggregation (the current limit is 1,000 targets per call for device, account, or alias pushes). The total number of pushes for the same MessageId is restricted to 10,000. If you need a higher limit, contact technical support to evaluate your specific scenario.
   * - Before using this API, you must first call the Push API with Target set to TBD (To Be Determined) and include your message content. This returns a MessageId from the push system. You can then use this MessageId to repeatedly call the continuous push API, specifying different target groups to deliver the same message.
   * - After calling the Push API with Target set to TBD and obtaining a MessageId, the message is stored in the push system for 24 hours by default. You can use this API to push to specified targets at any time before expiration. Pushes are not allowed after expiration or after reaching the total push limit.
   * - Each call to this API sends the message immediately. Scheduled pushes are not supported.
   * 
   * @param request - ContinuouslyPushRequest
   * @returns ContinuouslyPushResponse
   */
  async continuouslyPush(request: $_model.ContinuouslyPushRequest): Promise<$_model.ContinuouslyPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continuouslyPushWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of all applications associated with your Alibaba Cloud account.
   * 
   * @deprecated OpenAPI ListSummaryApps is deprecated, please use Mhub::2017-08-25::ListApps instead.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSummaryAppsResponse
   */
  // Deprecated
  async listSummaryAppsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListSummaryAppsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListSummaryApps",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSummaryAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListSummaryAppsResponse({}));
  }

  /**
   * Retrieve the list of all applications associated with your Alibaba Cloud account.
   * 
   * @deprecated OpenAPI ListSummaryApps is deprecated, please use Mhub::2017-08-25::ListApps instead.
   * @returns ListSummaryAppsResponse
   */
  // Deprecated
  async listSummaryApps(): Promise<$_model.ListSummaryAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSummaryAppsWithOptions(runtime);
  }

  /**
   * Queries the tags of an app. A maximum of 100 records are returned.
   * 
   * @param request - ListTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: $_model.ListTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTags",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsResponse({}));
  }

  /**
   * Queries the tags of an app. A maximum of 100 records are returned.
   * 
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: $_model.ListTagsRequest): Promise<$_model.ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  /**
   * Sends different messages or notifications to multiple devices in batches.
   * 
   * @remarks
   * *Before you use this API, make sure that you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) of EMAS Mobile Push.**
   * Some business scenarios require you to send many different messages to many devices in a short period. This can generate a high number of Queries Per Second (QPS) and cause requests to exceed the QPS limit for a single source IP address, resulting in push failures.
   * This API is designed to solve this issue. You can include up to 100 independent push tasks in a single call. This request aggregation reduces the QPS and improves the stability and success rate of individual pushes. A single account is limited to 500 batch push calls per second.
   * Each independent push task supports pushes to devices, accounts, or aliases. SMS integration is not supported.
   * > You must upgrade the SDK to version 3.11.0 or later.
   * ## PushTask properties
   * - The format for PushTask properties is PushTask.N.Property. These properties include the following:
   *   - Push target (destination)
   *   - Push configuration (config)
   *   - iOS notification task configuration
   *   - Android notification task configuration
   *   - Android auxiliary pop-up configuration
   *   - HarmonyOS notification task configuration
   *   - Push control
   * - Each PushTask represents an independent push task. A maximum of 100 tasks are supported per call. The push configurations are the same as those for the Push API.
   * - The PushTask.N.Target parameter supports only the DEVICE, ACCOUNT, and ALIAS types.
   * - PushTask does not support SMS filter interaction.
   * - The product of the parent node and child nodes cannot exceed 10,000. If this limit is exceeded, the parameters are considered invalid.
   * 
   * @param request - MassPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MassPushResponse
   */
  async massPushWithOptions(request: $_model.MassPushRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MassPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.idempotentToken)) {
      query["IdempotentToken"] = request.idempotentToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pushTask)) {
      body["PushTask"] = request.pushTask;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MassPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MassPushResponse>(await this.callApi(params, req, runtime), new $_model.MassPushResponse({}));
  }

  /**
   * Sends different messages or notifications to multiple devices in batches.
   * 
   * @remarks
   * *Before you use this API, make sure that you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) of EMAS Mobile Push.**
   * Some business scenarios require you to send many different messages to many devices in a short period. This can generate a high number of Queries Per Second (QPS) and cause requests to exceed the QPS limit for a single source IP address, resulting in push failures.
   * This API is designed to solve this issue. You can include up to 100 independent push tasks in a single call. This request aggregation reduces the QPS and improves the stability and success rate of individual pushes. A single account is limited to 500 batch push calls per second.
   * Each independent push task supports pushes to devices, accounts, or aliases. SMS integration is not supported.
   * > You must upgrade the SDK to version 3.11.0 or later.
   * ## PushTask properties
   * - The format for PushTask properties is PushTask.N.Property. These properties include the following:
   *   - Push target (destination)
   *   - Push configuration (config)
   *   - iOS notification task configuration
   *   - Android notification task configuration
   *   - Android auxiliary pop-up configuration
   *   - HarmonyOS notification task configuration
   *   - Push control
   * - Each PushTask represents an independent push task. A maximum of 100 tasks are supported per call. The push configurations are the same as those for the Push API.
   * - The PushTask.N.Target parameter supports only the DEVICE, ACCOUNT, and ALIAS types.
   * - PushTask does not support SMS filter interaction.
   * - The product of the parent node and child nodes cannot exceed 10,000. If this limit is exceeded, the parameters are considered invalid.
   * 
   * @param request - MassPushRequest
   * @returns MassPushResponse
   */
  async massPush(request: $_model.MassPushRequest): Promise<$_model.MassPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.massPushWithOptions(request, runtime);
  }

  /**
   * Advanced push API v2.
   * 
   * @remarks
   * Before using this API, review the [pricing and billing details](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.
   * 
   * @param tmpReq - MassPushV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MassPushV2Response
   */
  async massPushV2WithOptions(tmpReq: $_model.MassPushV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.MassPushV2Response> {
    tmpReq.validate();
    let request = new $_model.MassPushV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pushTasks)) {
      request.pushTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pushTasks, "PushTasks", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.idempotentToken)) {
      query["IdempotentToken"] = request.idempotentToken;
    }

    if (!$dara.isNull(request.pushTasksShrink)) {
      query["PushTasks"] = request.pushTasksShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MassPushV2",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MassPushV2Response>(await this.callApi(params, req, runtime), new $_model.MassPushV2Response({}));
  }

  /**
   * Advanced push API v2.
   * 
   * @remarks
   * Before using this API, review the [pricing and billing details](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.
   * 
   * @param request - MassPushV2Request
   * @returns MassPushV2Response
   */
  async massPushV2(request: $_model.MassPushV2Request): Promise<$_model.MassPushV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.massPushV2WithOptions(request, runtime);
  }

  /**
   * This advanced push API sends notifications or messages to various devices. It provides a rich set of custom parameters to implement push behaviors for various scenarios.
   * 
   * @remarks
   * *Before you use this API, make sure you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) of EMAS Mobile Push.**
   * This API supports pushes to Android, iOS, and HarmonyOS devices. For each platform, you must provide the corresponding AppKey.
   * 
   * @param tmpReq - PushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResponse
   */
  async pushWithOptions(tmpReq: $_model.PushRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushResponse> {
    tmpReq.validate();
    let request = new $_model.PushShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.androidOppoPrivateContentParameters)) {
      request.androidOppoPrivateContentParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidOppoPrivateContentParameters, "AndroidOppoPrivateContentParameters", "json");
    }

    if (!$dara.isNull(tmpReq.androidOppoPrivateTitleParameters)) {
      request.androidOppoPrivateTitleParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidOppoPrivateTitleParameters, "AndroidOppoPrivateTitleParameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.androidActivity)) {
      query["AndroidActivity"] = request.androidActivity;
    }

    if (!$dara.isNull(request.androidBadgeAddNum)) {
      query["AndroidBadgeAddNum"] = request.androidBadgeAddNum;
    }

    if (!$dara.isNull(request.androidBadgeClass)) {
      query["AndroidBadgeClass"] = request.androidBadgeClass;
    }

    if (!$dara.isNull(request.androidBadgeSetNum)) {
      query["AndroidBadgeSetNum"] = request.androidBadgeSetNum;
    }

    if (!$dara.isNull(request.androidBigBody)) {
      query["AndroidBigBody"] = request.androidBigBody;
    }

    if (!$dara.isNull(request.androidBigPictureUrl)) {
      query["AndroidBigPictureUrl"] = request.androidBigPictureUrl;
    }

    if (!$dara.isNull(request.androidBigTitle)) {
      query["AndroidBigTitle"] = request.androidBigTitle;
    }

    if (!$dara.isNull(request.androidExtParameters)) {
      query["AndroidExtParameters"] = request.androidExtParameters;
    }

    if (!$dara.isNull(request.androidHonorTargetUserType)) {
      query["AndroidHonorTargetUserType"] = request.androidHonorTargetUserType;
    }

    if (!$dara.isNull(request.androidHuaweiBusinessType)) {
      query["AndroidHuaweiBusinessType"] = request.androidHuaweiBusinessType;
    }

    if (!$dara.isNull(request.androidHuaweiLiveNotificationPayload)) {
      query["AndroidHuaweiLiveNotificationPayload"] = request.androidHuaweiLiveNotificationPayload;
    }

    if (!$dara.isNull(request.androidHuaweiReceiptId)) {
      query["AndroidHuaweiReceiptId"] = request.androidHuaweiReceiptId;
    }

    if (!$dara.isNull(request.androidHuaweiTargetUserType)) {
      query["AndroidHuaweiTargetUserType"] = request.androidHuaweiTargetUserType;
    }

    if (!$dara.isNull(request.androidImageUrl)) {
      query["AndroidImageUrl"] = request.androidImageUrl;
    }

    if (!$dara.isNull(request.androidInboxBody)) {
      query["AndroidInboxBody"] = request.androidInboxBody;
    }

    if (!$dara.isNull(request.androidMeizuNoticeMsgType)) {
      query["AndroidMeizuNoticeMsgType"] = request.androidMeizuNoticeMsgType;
    }

    if (!$dara.isNull(request.androidMessageHuaweiCategory)) {
      query["AndroidMessageHuaweiCategory"] = request.androidMessageHuaweiCategory;
    }

    if (!$dara.isNull(request.androidMessageHuaweiUrgency)) {
      query["AndroidMessageHuaweiUrgency"] = request.androidMessageHuaweiUrgency;
    }

    if (!$dara.isNull(request.androidMessageOppoCategory)) {
      query["AndroidMessageOppoCategory"] = request.androidMessageOppoCategory;
    }

    if (!$dara.isNull(request.androidMessageOppoNotifyLevel)) {
      query["AndroidMessageOppoNotifyLevel"] = request.androidMessageOppoNotifyLevel;
    }

    if (!$dara.isNull(request.androidMessageVivoCategory)) {
      query["AndroidMessageVivoCategory"] = request.androidMessageVivoCategory;
    }

    if (!$dara.isNull(request.androidMusic)) {
      query["AndroidMusic"] = request.androidMusic;
    }

    if (!$dara.isNull(request.androidNotificationBarPriority)) {
      query["AndroidNotificationBarPriority"] = request.androidNotificationBarPriority;
    }

    if (!$dara.isNull(request.androidNotificationBarType)) {
      query["AndroidNotificationBarType"] = request.androidNotificationBarType;
    }

    if (!$dara.isNull(request.androidNotificationChannel)) {
      query["AndroidNotificationChannel"] = request.androidNotificationChannel;
    }

    if (!$dara.isNull(request.androidNotificationGroup)) {
      query["AndroidNotificationGroup"] = request.androidNotificationGroup;
    }

    if (!$dara.isNull(request.androidNotificationHonorChannel)) {
      query["AndroidNotificationHonorChannel"] = request.androidNotificationHonorChannel;
    }

    if (!$dara.isNull(request.androidNotificationHuaweiChannel)) {
      query["AndroidNotificationHuaweiChannel"] = request.androidNotificationHuaweiChannel;
    }

    if (!$dara.isNull(request.androidNotificationNotifyId)) {
      query["AndroidNotificationNotifyId"] = request.androidNotificationNotifyId;
    }

    if (!$dara.isNull(request.androidNotificationThreadId)) {
      query["AndroidNotificationThreadId"] = request.androidNotificationThreadId;
    }

    if (!$dara.isNull(request.androidNotificationVivoChannel)) {
      query["AndroidNotificationVivoChannel"] = request.androidNotificationVivoChannel;
    }

    if (!$dara.isNull(request.androidNotificationXiaomiChannel)) {
      query["AndroidNotificationXiaomiChannel"] = request.androidNotificationXiaomiChannel;
    }

    if (!$dara.isNull(request.androidNotifyType)) {
      query["AndroidNotifyType"] = request.androidNotifyType;
    }

    if (!$dara.isNull(request.androidOpenType)) {
      query["AndroidOpenType"] = request.androidOpenType;
    }

    if (!$dara.isNull(request.androidOpenUrl)) {
      query["AndroidOpenUrl"] = request.androidOpenUrl;
    }

    if (!$dara.isNull(request.androidOppoDeleteIntentData)) {
      query["AndroidOppoDeleteIntentData"] = request.androidOppoDeleteIntentData;
    }

    if (!$dara.isNull(request.androidOppoIntelligentIntent)) {
      query["AndroidOppoIntelligentIntent"] = request.androidOppoIntelligentIntent;
    }

    if (!$dara.isNull(request.androidOppoIntentEnv)) {
      query["AndroidOppoIntentEnv"] = request.androidOppoIntentEnv;
    }

    if (!$dara.isNull(request.androidOppoPrivateContentParametersShrink)) {
      query["AndroidOppoPrivateContentParameters"] = request.androidOppoPrivateContentParametersShrink;
    }

    if (!$dara.isNull(request.androidOppoPrivateMsgTemplateId)) {
      query["AndroidOppoPrivateMsgTemplateId"] = request.androidOppoPrivateMsgTemplateId;
    }

    if (!$dara.isNull(request.androidOppoPrivateTitleParametersShrink)) {
      query["AndroidOppoPrivateTitleParameters"] = request.androidOppoPrivateTitleParametersShrink;
    }

    if (!$dara.isNull(request.androidPopupActivity)) {
      query["AndroidPopupActivity"] = request.androidPopupActivity;
    }

    if (!$dara.isNull(request.androidPopupBody)) {
      query["AndroidPopupBody"] = request.androidPopupBody;
    }

    if (!$dara.isNull(request.androidPopupTitle)) {
      query["AndroidPopupTitle"] = request.androidPopupTitle;
    }

    if (!$dara.isNull(request.androidRemind)) {
      query["AndroidRemind"] = request.androidRemind;
    }

    if (!$dara.isNull(request.androidRenderStyle)) {
      query["AndroidRenderStyle"] = request.androidRenderStyle;
    }

    if (!$dara.isNull(request.androidTargetUserType)) {
      query["AndroidTargetUserType"] = request.androidTargetUserType;
    }

    if (!$dara.isNull(request.androidVivoLiveMessage)) {
      query["AndroidVivoLiveMessage"] = request.androidVivoLiveMessage;
    }

    if (!$dara.isNull(request.androidVivoPushMode)) {
      query["AndroidVivoPushMode"] = request.androidVivoPushMode;
    }

    if (!$dara.isNull(request.androidVivoReceiptId)) {
      query["AndroidVivoReceiptId"] = request.androidVivoReceiptId;
    }

    if (!$dara.isNull(request.androidXiaoMiActivity)) {
      query["AndroidXiaoMiActivity"] = request.androidXiaoMiActivity;
    }

    if (!$dara.isNull(request.androidXiaoMiNotifyBody)) {
      query["AndroidXiaoMiNotifyBody"] = request.androidXiaoMiNotifyBody;
    }

    if (!$dara.isNull(request.androidXiaoMiNotifyTitle)) {
      query["AndroidXiaoMiNotifyTitle"] = request.androidXiaoMiNotifyTitle;
    }

    if (!$dara.isNull(request.androidXiaomiBigPictureUrl)) {
      query["AndroidXiaomiBigPictureUrl"] = request.androidXiaomiBigPictureUrl;
    }

    if (!$dara.isNull(request.androidXiaomiFocusParam)) {
      query["AndroidXiaomiFocusParam"] = request.androidXiaomiFocusParam;
    }

    if (!$dara.isNull(request.androidXiaomiFocusPics)) {
      query["AndroidXiaomiFocusPics"] = request.androidXiaomiFocusPics;
    }

    if (!$dara.isNull(request.androidXiaomiImageUrl)) {
      query["AndroidXiaomiImageUrl"] = request.androidXiaomiImageUrl;
    }

    if (!$dara.isNull(request.androidXiaomiTemplateId)) {
      query["AndroidXiaomiTemplateId"] = request.androidXiaomiTemplateId;
    }

    if (!$dara.isNull(request.androidXiaomiTemplateParams)) {
      query["AndroidXiaomiTemplateParams"] = request.androidXiaomiTemplateParams;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.harmonyAction)) {
      query["HarmonyAction"] = request.harmonyAction;
    }

    if (!$dara.isNull(request.harmonyActionType)) {
      query["HarmonyActionType"] = request.harmonyActionType;
    }

    if (!$dara.isNull(request.harmonyBadgeAddNum)) {
      query["HarmonyBadgeAddNum"] = request.harmonyBadgeAddNum;
    }

    if (!$dara.isNull(request.harmonyBadgeSetNum)) {
      query["HarmonyBadgeSetNum"] = request.harmonyBadgeSetNum;
    }

    if (!$dara.isNull(request.harmonyCategory)) {
      query["HarmonyCategory"] = request.harmonyCategory;
    }

    if (!$dara.isNull(request.harmonyExtParameters)) {
      query["HarmonyExtParameters"] = request.harmonyExtParameters;
    }

    if (!$dara.isNull(request.harmonyExtensionExtraData)) {
      query["HarmonyExtensionExtraData"] = request.harmonyExtensionExtraData;
    }

    if (!$dara.isNull(request.harmonyExtensionPush)) {
      query["HarmonyExtensionPush"] = request.harmonyExtensionPush;
    }

    if (!$dara.isNull(request.harmonyImageUrl)) {
      query["HarmonyImageUrl"] = request.harmonyImageUrl;
    }

    if (!$dara.isNull(request.harmonyInboxContent)) {
      query["HarmonyInboxContent"] = request.harmonyInboxContent;
    }

    if (!$dara.isNull(request.harmonyLiveViewPayload)) {
      query["HarmonyLiveViewPayload"] = request.harmonyLiveViewPayload;
    }

    if (!$dara.isNull(request.harmonyNotificationSlotType)) {
      query["HarmonyNotificationSlotType"] = request.harmonyNotificationSlotType;
    }

    if (!$dara.isNull(request.harmonyNotifyId)) {
      query["HarmonyNotifyId"] = request.harmonyNotifyId;
    }

    if (!$dara.isNull(request.harmonyReceiptId)) {
      query["HarmonyReceiptId"] = request.harmonyReceiptId;
    }

    if (!$dara.isNull(request.harmonyRemind)) {
      query["HarmonyRemind"] = request.harmonyRemind;
    }

    if (!$dara.isNull(request.harmonyRemindBody)) {
      query["HarmonyRemindBody"] = request.harmonyRemindBody;
    }

    if (!$dara.isNull(request.harmonyRemindTitle)) {
      query["HarmonyRemindTitle"] = request.harmonyRemindTitle;
    }

    if (!$dara.isNull(request.harmonyRenderStyle)) {
      query["HarmonyRenderStyle"] = request.harmonyRenderStyle;
    }

    if (!$dara.isNull(request.harmonyTestMessage)) {
      query["HarmonyTestMessage"] = request.harmonyTestMessage;
    }

    if (!$dara.isNull(request.harmonyUri)) {
      query["HarmonyUri"] = request.harmonyUri;
    }

    if (!$dara.isNull(request.idempotentToken)) {
      query["IdempotentToken"] = request.idempotentToken;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.pushTime)) {
      query["PushTime"] = request.pushTime;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.sendChannels)) {
      query["SendChannels"] = request.sendChannels;
    }

    if (!$dara.isNull(request.sendSpeed)) {
      query["SendSpeed"] = request.sendSpeed;
    }

    if (!$dara.isNull(request.smsDelaySecs)) {
      query["SmsDelaySecs"] = request.smsDelaySecs;
    }

    if (!$dara.isNull(request.smsParams)) {
      query["SmsParams"] = request.smsParams;
    }

    if (!$dara.isNull(request.smsSendPolicy)) {
      query["SmsSendPolicy"] = request.smsSendPolicy;
    }

    if (!$dara.isNull(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.smsTemplateName)) {
      query["SmsTemplateName"] = request.smsTemplateName;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.trim)) {
      query["Trim"] = request.trim;
    }

    if (!$dara.isNull(request.iOSApnsEnv)) {
      query["iOSApnsEnv"] = request.iOSApnsEnv;
    }

    if (!$dara.isNull(request.iOSBadge)) {
      query["iOSBadge"] = request.iOSBadge;
    }

    if (!$dara.isNull(request.iOSBadgeAutoIncrement)) {
      query["iOSBadgeAutoIncrement"] = request.iOSBadgeAutoIncrement;
    }

    if (!$dara.isNull(request.iOSExtParameters)) {
      query["iOSExtParameters"] = request.iOSExtParameters;
    }

    if (!$dara.isNull(request.iOSInterruptionLevel)) {
      query["iOSInterruptionLevel"] = request.iOSInterruptionLevel;
    }

    if (!$dara.isNull(request.iOSLiveActivityAttributes)) {
      query["iOSLiveActivityAttributes"] = request.iOSLiveActivityAttributes;
    }

    if (!$dara.isNull(request.iOSLiveActivityAttributesType)) {
      query["iOSLiveActivityAttributesType"] = request.iOSLiveActivityAttributesType;
    }

    if (!$dara.isNull(request.iOSLiveActivityContentState)) {
      query["iOSLiveActivityContentState"] = request.iOSLiveActivityContentState;
    }

    if (!$dara.isNull(request.iOSLiveActivityDismissalDate)) {
      query["iOSLiveActivityDismissalDate"] = request.iOSLiveActivityDismissalDate;
    }

    if (!$dara.isNull(request.iOSLiveActivityEvent)) {
      query["iOSLiveActivityEvent"] = request.iOSLiveActivityEvent;
    }

    if (!$dara.isNull(request.iOSLiveActivityId)) {
      query["iOSLiveActivityId"] = request.iOSLiveActivityId;
    }

    if (!$dara.isNull(request.iOSLiveActivityStaleDate)) {
      query["iOSLiveActivityStaleDate"] = request.iOSLiveActivityStaleDate;
    }

    if (!$dara.isNull(request.iOSMusic)) {
      query["iOSMusic"] = request.iOSMusic;
    }

    if (!$dara.isNull(request.iOSMutableContent)) {
      query["iOSMutableContent"] = request.iOSMutableContent;
    }

    if (!$dara.isNull(request.iOSNotificationCategory)) {
      query["iOSNotificationCategory"] = request.iOSNotificationCategory;
    }

    if (!$dara.isNull(request.iOSNotificationCollapseId)) {
      query["iOSNotificationCollapseId"] = request.iOSNotificationCollapseId;
    }

    if (!$dara.isNull(request.iOSNotificationThreadId)) {
      query["iOSNotificationThreadId"] = request.iOSNotificationThreadId;
    }

    if (!$dara.isNull(request.iOSRelevanceScore)) {
      query["iOSRelevanceScore"] = request.iOSRelevanceScore;
    }

    if (!$dara.isNull(request.iOSRemind)) {
      query["iOSRemind"] = request.iOSRemind;
    }

    if (!$dara.isNull(request.iOSRemindBody)) {
      query["iOSRemindBody"] = request.iOSRemindBody;
    }

    if (!$dara.isNull(request.iOSSilentNotification)) {
      query["iOSSilentNotification"] = request.iOSSilentNotification;
    }

    if (!$dara.isNull(request.iOSSubtitle)) {
      query["iOSSubtitle"] = request.iOSSubtitle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Push",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushResponse>(await this.callApi(params, req, runtime), new $_model.PushResponse({}));
  }

  /**
   * This advanced push API sends notifications or messages to various devices. It provides a rich set of custom parameters to implement push behaviors for various scenarios.
   * 
   * @remarks
   * *Before you use this API, make sure you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) of EMAS Mobile Push.**
   * This API supports pushes to Android, iOS, and HarmonyOS devices. For each platform, you must provide the corresponding AppKey.
   * 
   * @param request - PushRequest
   * @returns PushResponse
   */
  async push(request: $_model.PushRequest): Promise<$_model.PushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushWithOptions(request, runtime);
  }

  /**
   * Sends a message to an Android device through the Alibaba Cloud Mobile Push proprietary channel. After the app on the device receives the message, it must handle subsequent actions, such as implementing business logic or displaying a local notification.
   * 
   * @remarks
   * *This operation will be deprecated soon. Use the [advanced push API](https://help.aliyun.com/document_detail/2249916.html), which provides enhanced push capabilities. To achieve the same result, set the `DeviceType` parameter to `ANDROID` and the `PushType` parameter to `MESSAGE` in the advanced push API.**
   * **Before using this operation, review the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * By default, this operation sends messages only to online devices. If a device is offline, set the `StoreOffline` parameter. The push system then stores the message and delivers it automatically when the device comes online.
   * 
   * @param request - PushMessageToAndroidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMessageToAndroidResponse
   */
  async pushMessageToAndroidWithOptions(request: $_model.PushMessageToAndroidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushMessageToAndroidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMessageToAndroid",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushMessageToAndroidResponse>(await this.callApi(params, req, runtime), new $_model.PushMessageToAndroidResponse({}));
  }

  /**
   * Sends a message to an Android device through the Alibaba Cloud Mobile Push proprietary channel. After the app on the device receives the message, it must handle subsequent actions, such as implementing business logic or displaying a local notification.
   * 
   * @remarks
   * *This operation will be deprecated soon. Use the [advanced push API](https://help.aliyun.com/document_detail/2249916.html), which provides enhanced push capabilities. To achieve the same result, set the `DeviceType` parameter to `ANDROID` and the `PushType` parameter to `MESSAGE` in the advanced push API.**
   * **Before using this operation, review the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * By default, this operation sends messages only to online devices. If a device is offline, set the `StoreOffline` parameter. The push system then stores the message and delivers it automatically when the device comes online.
   * 
   * @param request - PushMessageToAndroidRequest
   * @returns PushMessageToAndroidResponse
   */
  async pushMessageToAndroid(request: $_model.PushMessageToAndroidRequest): Promise<$_model.PushMessageToAndroidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMessageToAndroidWithOptions(request, runtime);
  }

  /**
   * Pushes messages to iOS devices. These messages are delivered through the proprietary channel of Alibaba Cloud Mobile Push. After the app on a device receives a message, it must handle subsequent actions, such as implementing business behaviors or creating local notifications.
   * 
   * @remarks
   * *This API is deprecated. Use the [advanced push API](https://help.aliyun.com/document_detail/2249916.html) for more push capabilities. In that API, set the push platform `DeviceType` to `iOS` and the push type `PushType` to `MESSAGE` to achieve the same effect.**
   * **Before you use this API, review the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * By default, this API sends messages only to online devices. If a device is offline, you can set the `StoreOffline` parameter. The push system then saves the message and automatically delivers it when the device comes back online.
   * 
   * @param request - PushMessageToiOSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMessageToiOSResponse
   */
  async pushMessageToiOSWithOptions(request: $_model.PushMessageToiOSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushMessageToiOSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMessageToiOS",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushMessageToiOSResponse>(await this.callApi(params, req, runtime), new $_model.PushMessageToiOSResponse({}));
  }

  /**
   * Pushes messages to iOS devices. These messages are delivered through the proprietary channel of Alibaba Cloud Mobile Push. After the app on a device receives a message, it must handle subsequent actions, such as implementing business behaviors or creating local notifications.
   * 
   * @remarks
   * *This API is deprecated. Use the [advanced push API](https://help.aliyun.com/document_detail/2249916.html) for more push capabilities. In that API, set the push platform `DeviceType` to `iOS` and the push type `PushType` to `MESSAGE` to achieve the same effect.**
   * **Before you use this API, review the [billing methods and pricing](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * By default, this API sends messages only to online devices. If a device is offline, you can set the `StoreOffline` parameter. The push system then saves the message and automatically delivers it when the device comes back online.
   * 
   * @param request - PushMessageToiOSRequest
   * @returns PushMessageToiOSResponse
   */
  async pushMessageToiOS(request: $_model.PushMessageToiOSRequest): Promise<$_model.PushMessageToiOSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMessageToiOSWithOptions(request, runtime);
  }

  /**
   * Sends a notification to Android devices. The notification appears directly in the device’s notification tray and may be delivered through Alibaba Cloud’s proprietary channel or the device manufacturer’s channel, depending on the scenario.
   * 
   * @remarks
   * *This operation is deprecated. Use the [Advanced Push API](https://help.aliyun.com/document_detail/2249916.html) instead. In that API, set the `DeviceType` parameter to `ANDROID` and the `PushType` parameter to `NOTICE`.**
   * **Before using this operation, review the [pricing and billing model](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * 
   * @param request - PushNoticeToAndroidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNoticeToAndroidResponse
   */
  async pushNoticeToAndroidWithOptions(request: $_model.PushNoticeToAndroidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushNoticeToAndroidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.extParameters)) {
      query["ExtParameters"] = request.extParameters;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushNoticeToAndroid",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushNoticeToAndroidResponse>(await this.callApi(params, req, runtime), new $_model.PushNoticeToAndroidResponse({}));
  }

  /**
   * Sends a notification to Android devices. The notification appears directly in the device’s notification tray and may be delivered through Alibaba Cloud’s proprietary channel or the device manufacturer’s channel, depending on the scenario.
   * 
   * @remarks
   * *This operation is deprecated. Use the [Advanced Push API](https://help.aliyun.com/document_detail/2249916.html) instead. In that API, set the `DeviceType` parameter to `ANDROID` and the `PushType` parameter to `NOTICE`.**
   * **Before using this operation, review the [pricing and billing model](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * 
   * @param request - PushNoticeToAndroidRequest
   * @returns PushNoticeToAndroidResponse
   */
  async pushNoticeToAndroid(request: $_model.PushNoticeToAndroidRequest): Promise<$_model.PushNoticeToAndroidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushNoticeToAndroidWithOptions(request, runtime);
  }

  /**
   * Send a notification to iOS devices. The notification uses Apple’s APNs channel and appears directly in the device notification center.
   * 
   * @remarks
   * *This operation is deprecated. Use the [Advanced Push API](https://help.aliyun.com/document_detail/2249916.html) instead. Set the `DeviceType` parameter to `iOS` and the `PushType` parameter to `NOTICE`.**
   * **Before you use this operation, review the [pricing and billing model](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * 
   * @param request - PushNoticeToiOSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNoticeToiOSResponse
   */
  async pushNoticeToiOSWithOptions(request: $_model.PushNoticeToiOSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PushNoticeToiOSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apnsEnv)) {
      query["ApnsEnv"] = request.apnsEnv;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.extParameters)) {
      query["ExtParameters"] = request.extParameters;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushNoticeToiOS",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushNoticeToiOSResponse>(await this.callApi(params, req, runtime), new $_model.PushNoticeToiOSResponse({}));
  }

  /**
   * Send a notification to iOS devices. The notification uses Apple’s APNs channel and appears directly in the device notification center.
   * 
   * @remarks
   * *This operation is deprecated. Use the [Advanced Push API](https://help.aliyun.com/document_detail/2249916.html) instead. Set the `DeviceType` parameter to `iOS` and the `PushType` parameter to `NOTICE`.**
   * **Before you use this operation, review the [pricing and billing model](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * 
   * @param request - PushNoticeToiOSRequest
   * @returns PushNoticeToiOSResponse
   */
  async pushNoticeToiOS(request: $_model.PushNoticeToiOSRequest): Promise<$_model.PushNoticeToiOSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushNoticeToiOSWithOptions(request, runtime);
  }

  /**
   * This is the advanced push API v2.
   * 
   * @remarks
   * *Before using this API, review the [pricing and billing methods](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * This API supports Android, iOS, and HarmonyOS. For each platform, pass its assigned AppKey.
   * 
   * @param tmpReq - PushV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushV2Response
   */
  async pushV2WithOptions(tmpReq: $_model.PushV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.PushV2Response> {
    tmpReq.validate();
    let request = new $_model.PushV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pushTask)) {
      request.pushTaskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pushTask, "PushTask", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.idempotentToken)) {
      query["IdempotentToken"] = request.idempotentToken;
    }

    if (!$dara.isNull(request.pushTaskShrink)) {
      query["PushTask"] = request.pushTaskShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushV2",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushV2Response>(await this.callApi(params, req, runtime), new $_model.PushV2Response({}));
  }

  /**
   * This is the advanced push API v2.
   * 
   * @remarks
   * *Before using this API, review the [pricing and billing methods](https://help.aliyun.com/document_detail/434638.html) for EMAS Mobile Push.**
   * This API supports Android, iOS, and HarmonyOS. For each platform, pass its assigned AppKey.
   * 
   * @param request - PushV2Request
   * @returns PushV2Response
   */
  async pushV2(request: $_model.PushV2Request): Promise<$_model.PushV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushV2WithOptions(request, runtime);
  }

  /**
   * Query the list of aliases attached to a specified device.
   * 
   * @param request - QueryAliasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAliasesResponse
   */
  async queryAliasesWithOptions(request: $_model.QueryAliasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAliasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAliases",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAliasesResponse>(await this.callApi(params, req, runtime), new $_model.QueryAliasesResponse({}));
  }

  /**
   * Query the list of aliases attached to a specified device.
   * 
   * @param request - QueryAliasesRequest
   * @returns QueryAliasesResponse
   */
  async queryAliases(request: $_model.QueryAliasesRequest): Promise<$_model.QueryAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAliasesWithOptions(request, runtime);
  }

  /**
   * Query details of a specified device.
   * 
   * @param request - QueryDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceInfoResponse
   */
  async queryDeviceInfoWithOptions(request: $_model.QueryDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceInfo",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceInfoResponse({}));
  }

  /**
   * Query details of a specified device.
   * 
   * @param request - QueryDeviceInfoRequest
   * @returns QueryDeviceInfoResponse
   */
  async queryDeviceInfo(request: $_model.QueryDeviceInfoRequest): Promise<$_model.QueryDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceInfoWithOptions(request, runtime);
  }

  /**
   * Queries device statistics by application dimension.
   * 
   * @remarks
   * > Currently, this API supports only daily data. The daily dimension lets you query data for up to 31 days. Days are calculated based on UTC+8.
   * 
   * @param request - QueryDeviceStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatResponse
   */
  async queryDeviceStatWithOptions(request: $_model.QueryDeviceStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDeviceStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDeviceStat",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDeviceStatResponse>(await this.callApi(params, req, runtime), new $_model.QueryDeviceStatResponse({}));
  }

  /**
   * Queries device statistics by application dimension.
   * 
   * @remarks
   * > Currently, this API supports only daily data. The daily dimension lets you query data for up to 31 days. Days are calculated based on UTC+8.
   * 
   * @param request - QueryDeviceStatRequest
   * @returns QueryDeviceStatResponse
   */
  async queryDeviceStat(request: $_model.QueryDeviceStatRequest): Promise<$_model.QueryDeviceStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceStatWithOptions(request, runtime);
  }

  /**
   * Retrieve the list of devices associated with an account using the account name.
   * 
   * @param request - QueryDevicesByAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicesByAccountResponse
   */
  async queryDevicesByAccountWithOptions(request: $_model.QueryDevicesByAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDevicesByAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDevicesByAccount",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDevicesByAccountResponse>(await this.callApi(params, req, runtime), new $_model.QueryDevicesByAccountResponse({}));
  }

  /**
   * Retrieve the list of devices associated with an account using the account name.
   * 
   * @param request - QueryDevicesByAccountRequest
   * @returns QueryDevicesByAccountResponse
   */
  async queryDevicesByAccount(request: $_model.QueryDevicesByAccountRequest): Promise<$_model.QueryDevicesByAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicesByAccountWithOptions(request, runtime);
  }

  /**
   * Query the list of devices by alias.
   * 
   * @param request - QueryDevicesByAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicesByAliasResponse
   */
  async queryDevicesByAliasWithOptions(request: $_model.QueryDevicesByAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDevicesByAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDevicesByAlias",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDevicesByAliasResponse>(await this.callApi(params, req, runtime), new $_model.QueryDevicesByAliasResponse({}));
  }

  /**
   * Query the list of devices by alias.
   * 
   * @param request - QueryDevicesByAliasRequest
   * @returns QueryDevicesByAliasResponse
   */
  async queryDevicesByAlias(request: $_model.QueryDevicesByAliasRequest): Promise<$_model.QueryDevicesByAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicesByAliasWithOptions(request, runtime);
  }

  /**
   * You can query push records with pagination and basic filtering.
   * 
   * @param request - QueryPushRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushRecordsResponse
   */
  async queryPushRecordsWithOptions(request: $_model.QueryPushRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushRecords",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushRecordsResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushRecordsResponse({}));
  }

  /**
   * You can query push records with pagination and basic filtering.
   * 
   * @param request - QueryPushRecordsRequest
   * @returns QueryPushRecordsResponse
   */
  async queryPushRecords(request: $_model.QueryPushRecordsRequest): Promise<$_model.QueryPushRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushRecordsWithOptions(request, runtime);
  }

  /**
   * Query push statistics for an app.
   * 
   * @param request - QueryPushStatByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushStatByAppResponse
   */
  async queryPushStatByAppWithOptions(request: $_model.QueryPushStatByAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushStatByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushStatByApp",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushStatByAppResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushStatByAppResponse({}));
  }

  /**
   * Query push statistics for an app.
   * 
   * @param request - QueryPushStatByAppRequest
   * @returns QueryPushStatByAppResponse
   */
  async queryPushStatByApp(request: $_model.QueryPushStatByAppRequest): Promise<$_model.QueryPushStatByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushStatByAppWithOptions(request, runtime);
  }

  /**
   * Queries push statistics for a message.
   * 
   * @param request - QueryPushStatByMsgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushStatByMsgResponse
   */
  async queryPushStatByMsgWithOptions(request: $_model.QueryPushStatByMsgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPushStatByMsgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPushStatByMsg",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPushStatByMsgResponse>(await this.callApi(params, req, runtime), new $_model.QueryPushStatByMsgResponse({}));
  }

  /**
   * Queries push statistics for a message.
   * 
   * @param request - QueryPushStatByMsgRequest
   * @returns QueryPushStatByMsgResponse
   */
  async queryPushStatByMsg(request: $_model.QueryPushStatByMsgRequest): Promise<$_model.QueryPushStatByMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushStatByMsgWithOptions(request, runtime);
  }

  /**
   * Queries tags for a specified object, such as a device, account, or alias.
   * 
   * @param request - QueryTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagsResponse
   */
  async queryTagsWithOptions(request: $_model.QueryTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTags",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTagsResponse>(await this.callApi(params, req, runtime), new $_model.QueryTagsResponse({}));
  }

  /**
   * Queries tags for a specified object, such as a device, account, or alias.
   * 
   * @param request - QueryTagsRequest
   * @returns QueryTagsResponse
   */
  async queryTags(request: $_model.QueryTagsRequest): Promise<$_model.QueryTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagsWithOptions(request, runtime);
  }

  /**
   * Obtain deduplicated device statistics for an app.
   * 
   * @remarks
   * > This operation returns data only at the daily granularity. You can query up to 31 days of data. Deduplicated device counts reset on the first day of each month.
   * 
   * @param request - QueryUniqueDeviceStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUniqueDeviceStatResponse
   */
  async queryUniqueDeviceStatWithOptions(request: $_model.QueryUniqueDeviceStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUniqueDeviceStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUniqueDeviceStat",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUniqueDeviceStatResponse>(await this.callApi(params, req, runtime), new $_model.QueryUniqueDeviceStatResponse({}));
  }

  /**
   * Obtain deduplicated device statistics for an app.
   * 
   * @remarks
   * > This operation returns data only at the daily granularity. You can query up to 31 days of data. Deduplicated device counts reset on the first day of each month.
   * 
   * @param request - QueryUniqueDeviceStatRequest
   * @returns QueryUniqueDeviceStatResponse
   */
  async queryUniqueDeviceStat(request: $_model.QueryUniqueDeviceStatRequest): Promise<$_model.QueryUniqueDeviceStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUniqueDeviceStatWithOptions(request, runtime);
  }

  /**
   * Removes a tag from an app.
   * 
   * @remarks
   * Deleting a tag takes time. The time required depends on the number of tagged resources. Do not immediately recreate a tag with the same name after you delete it. Wait at least 5 minutes before you recreate a tag in the same app. If you delete multiple tags, wait at least 5 minutes for each deleted tag before you recreate them.
   * 
   * @param request - RemoveTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagResponse
   */
  async removeTagWithOptions(request: $_model.RemoveTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTag",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTagResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTagResponse({}));
  }

  /**
   * Removes a tag from an app.
   * 
   * @remarks
   * Deleting a tag takes time. The time required depends on the number of tagged resources. Do not immediately recreate a tag with the same name after you delete it. Wait at least 5 minutes before you recreate a tag in the same app. If you delete multiple tags, wait at least 5 minutes for each deleted tag before you recreate them.
   * 
   * @param request - RemoveTagRequest
   * @returns RemoveTagResponse
   */
  async removeTag(request: $_model.RemoveTagRequest): Promise<$_model.RemoveTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTagWithOptions(request, runtime);
  }

  /**
   * Unbinds an alias. The change takes effect immediately.
   * 
   * @param request - UnbindAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAliasResponse
   */
  async unbindAliasWithOptions(request: $_model.UnbindAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.unbindAll)) {
      query["UnbindAll"] = request.unbindAll;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindAlias",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAliasResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAliasResponse({}));
  }

  /**
   * Unbinds an alias. The change takes effect immediately.
   * 
   * @param request - UnbindAliasRequest
   * @returns UnbindAliasResponse
   */
  async unbindAlias(request: $_model.UnbindAliasRequest): Promise<$_model.UnbindAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAliasWithOptions(request, runtime);
  }

  /**
   * Unbind the mobile phone number from a specified device.
   * 
   * @param request - UnbindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPhoneResponse
   */
  async unbindPhoneWithOptions(request: $_model.UnbindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindPhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindPhone",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindPhoneResponse>(await this.callApi(params, req, runtime), new $_model.UnbindPhoneResponse({}));
  }

  /**
   * Unbind the mobile phone number from a specified device.
   * 
   * @param request - UnbindPhoneRequest
   * @returns UnbindPhoneResponse
   */
  async unbindPhone(request: $_model.UnbindPhoneRequest): Promise<$_model.UnbindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPhoneWithOptions(request, runtime);
  }

  /**
   * Unbinds one or more tags from a specified target.
   * 
   * @param request - UnbindTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindTagResponse
   */
  async unbindTagWithOptions(request: $_model.UnbindTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindTag",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindTagResponse>(await this.callApi(params, req, runtime), new $_model.UnbindTagResponse({}));
  }

  /**
   * Unbinds one or more tags from a specified target.
   * 
   * @param request - UnbindTagRequest
   * @returns UnbindTagResponse
   */
  async unbindTag(request: $_model.UnbindTagRequest): Promise<$_model.UnbindTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindTagWithOptions(request, runtime);
  }

}
