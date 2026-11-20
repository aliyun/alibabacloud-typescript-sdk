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
    this._productId = "Dyplsapi";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dyplsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a tracking number for a private number in the AXN binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAxnTrackNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAxnTrackNoResponse
   */
  async addAxnTrackNoWithOptions(request: $_model.AddAxnTrackNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAxnTrackNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    if (!$dara.isNull(request.trackNo)) {
      query["trackNo"] = request.trackNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAxnTrackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAxnTrackNoResponse>(await this.callApi(params, req, runtime), new $_model.AddAxnTrackNoResponse({}));
  }

  /**
   * Adds a tracking number for a private number in the AXN binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - AddAxnTrackNoRequest
   * @returns AddAxnTrackNoResponse
   */
  async addAxnTrackNo(request: $_model.AddAxnTrackNoRequest): Promise<$_model.AddAxnTrackNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAxnTrackNoWithOptions(request, runtime);
  }

  /**
   * Adds a phone number to the blacklist of a China number pool. Only AXN privacy number, AXN extension number, and 95AXN privacy number pool types support blacklist settings.
   * 
   * @remarks
   * - This operation is not a batch operation. You can add only one pair of **point-to-point blacklist** numbers or one **number pool blacklist** number at a time.
   * - To delete a blacklist entry, call the [DeleteSecretBlacklist](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-deletesecretblacklist) operation.
   * ### Quantity limit
   * The maximum number of blacklist entries per number pool is 2,000,000. If this limit is exceeded, API calls to add blacklist numbers will fail, which may affect your business. If you have special requirements, contact your Alibaba Cloud account manager.
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. If this limit is exceeded, API calls will be throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - AddSecretBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSecretBlacklistResponse
   */
  async addSecretBlacklistWithOptions(request: $_model.AddSecretBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSecretBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!$dara.isNull(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.wayControl)) {
      query["WayControl"] = request.wayControl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSecretBlacklist",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSecretBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.AddSecretBlacklistResponse({}));
  }

  /**
   * Adds a phone number to the blacklist of a China number pool. Only AXN privacy number, AXN extension number, and 95AXN privacy number pool types support blacklist settings.
   * 
   * @remarks
   * - This operation is not a batch operation. You can add only one pair of **point-to-point blacklist** numbers or one **number pool blacklist** number at a time.
   * - To delete a blacklist entry, call the [DeleteSecretBlacklist](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-deletesecretblacklist) operation.
   * ### Quantity limit
   * The maximum number of blacklist entries per number pool is 2,000,000. If this limit is exceeded, API calls to add blacklist numbers will fail, which may affect your business. If you have special requirements, contact your Alibaba Cloud account manager.
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. If this limit is exceeded, API calls will be throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - AddSecretBlacklistRequest
   * @returns AddSecretBlacklistResponse
   */
  async addSecretBlacklist(request: $_model.AddSecretBlacklistRequest): Promise<$_model.AddSecretBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSecretBlacklistWithOptions(request, runtime);
  }

  /**
   * Establishes a call binding relationship (B, X, A) for work number X of employee B on the work number platform to allow employee B to call customer A through work number X.
   * 
   * @param request - BindAXBCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAXBCallResponse
   */
  async bindAXBCallWithOptions(request: $_model.BindAXBCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAXBCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authId)) {
      query["AuthId"] = request.authId;
    }

    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAXBCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAXBCallResponse>(await this.callApi(params, req, runtime), new $_model.BindAXBCallResponse({}));
  }

  /**
   * Establishes a call binding relationship (B, X, A) for work number X of employee B on the work number platform to allow employee B to call customer A through work number X.
   * 
   * @param request - BindAXBCallRequest
   * @returns BindAXBCallResponse
   */
  async bindAXBCall(request: $_model.BindAXBCallRequest): Promise<$_model.BindAXBCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAXBCallWithOptions(request, runtime);
  }

  /**
   * Adds an AXB binding.
   * 
   * @remarks
   * Before you add an AXB binding, we recommend that you specify role A and role B in the AXB device certificate (ProductKey, DeviceName, and DeviceSecret) in your business scenario. For example, in a taxi-hailing scenario, role A is the passenger and role B is the driver.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxbResponse
   */
  async bindAxbWithOptions(request: $_model.BindAxbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!$dara.isNull(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!$dara.isNull(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!$dara.isNull(request.dtmfConfig)) {
      query["DtmfConfig"] = request.dtmfConfig;
    }

    if (!$dara.isNull(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxbResponse>(await this.callApi(params, req, runtime), new $_model.BindAxbResponse({}));
  }

  /**
   * Adds an AXB binding.
   * 
   * @remarks
   * Before you add an AXB binding, we recommend that you specify role A and role B in the AXB device certificate (ProductKey, DeviceName, and DeviceSecret) in your business scenario. For example, in a taxi-hailing scenario, role A is the passenger and role B is the driver.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxbRequest
   * @returns BindAxbResponse
   */
  async bindAxb(request: $_model.BindAxbRequest): Promise<$_model.BindAxbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxbWithOptions(request, runtime);
  }

  /**
   * Binds phone numbers for a 700AXB private number. A 700AXB private number restricts the calling relationship to a one-to-one relationship. User A can contact User B through the intermediate number X that starts with 700, and User B can also contact User A through the same intermediate number X.
   * 
   * @remarks
   * Before invoking this operation, make sure that you have purchased a private number in the console.
   * You can use this operation to attach numbers for a 700AXB private number, or attach A and B numbers for a 700AXB private number on the Number Management page in the console.
   * Before attaching numbers for a 700AXB private number, determine the A role and B role in your business scenario. For example, in a ride-hailing scenario, A is the passenger and B is the driver.
   * The 700AXB private number is mainly used for privacy protection in one-to-one scenarios. You attach number A and number B through the Phone Number Protection service. When A calls X, the call is forwarded to B. When B calls X, the call is forwarded to A. A single X number can be reused by up to 200 binding pairs, such as A1XB1, A2XB2, A3XB3, and so on. As long as the phone numbers of A and B users are unique, a single X number can be bound to 200 groups of phone numbers simultaneously, and calls can also be made simultaneously.
   * QPS limit
   * The single-user QPS limit for this operation is 5,000 calls per second. Exceeding this limit will cause throttling, which may affect your business. Invoke this operation appropriately.
   * 
   * @param request - BindAxb700Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxb700Response
   */
  async bindAxb700WithOptions(request: $_model.BindAxb700Request, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxb700Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!$dara.isNull(request.dtmfConfig)) {
      query["DtmfConfig"] = request.dtmfConfig;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.industrialId)) {
      query["IndustrialId"] = request.industrialId;
    }

    if (!$dara.isNull(request.needAsr)) {
      query["NeedAsr"] = request.needAsr;
    }

    if (!$dara.isNull(request.needRecord)) {
      query["NeedRecord"] = request.needRecord;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.recType)) {
      query["RecType"] = request.recType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxb700",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxb700Response>(await this.callApi(params, req, runtime), new $_model.BindAxb700Response({}));
  }

  /**
   * Binds phone numbers for a 700AXB private number. A 700AXB private number restricts the calling relationship to a one-to-one relationship. User A can contact User B through the intermediate number X that starts with 700, and User B can also contact User A through the same intermediate number X.
   * 
   * @remarks
   * Before invoking this operation, make sure that you have purchased a private number in the console.
   * You can use this operation to attach numbers for a 700AXB private number, or attach A and B numbers for a 700AXB private number on the Number Management page in the console.
   * Before attaching numbers for a 700AXB private number, determine the A role and B role in your business scenario. For example, in a ride-hailing scenario, A is the passenger and B is the driver.
   * The 700AXB private number is mainly used for privacy protection in one-to-one scenarios. You attach number A and number B through the Phone Number Protection service. When A calls X, the call is forwarded to B. When B calls X, the call is forwarded to A. A single X number can be reused by up to 200 binding pairs, such as A1XB1, A2XB2, A3XB3, and so on. As long as the phone numbers of A and B users are unique, a single X number can be bound to 200 groups of phone numbers simultaneously, and calls can also be made simultaneously.
   * QPS limit
   * The single-user QPS limit for this operation is 5,000 calls per second. Exceeding this limit will cause throttling, which may affect your business. Invoke this operation appropriately.
   * 
   * @param request - BindAxb700Request
   * @returns BindAxb700Response
   */
  async bindAxb700(request: $_model.BindAxb700Request): Promise<$_model.BindAxb700Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxb700WithOptions(request, runtime);
  }

  /**
   * Attaches an AXB privacy number to a fixed line to restrict the calling relationship to a one-to-one relationship, allowing User A to contact User B through the fixed-line intermediate number X, and User B to contact User A through the same intermediate number X. Fixed-line privacy numbers are currently available by invitation only. Contact your technical support to activate the service and obtain integration support.
   * 
   * @remarks
   * - Before you invoke this operation, make sure that you have purchased a privacy number in the console. You can use this operation to bind numbers to a fixed-line AXB intermediate number. Currently, you cannot bind Number A and Number B to a fixed-line AXB intermediate number on the Number Management page in the console.
   * - Before binding numbers, we recommend that you clarify the roles of User A and User B in your business scenario. For example, in common scenarios such as ride-hailing, User A is the passenger and User B is the driver.
   * - Fixed-line AXB intermediate numbers are mainly used for privacy protection in one-to-one scenarios. Number A and Number B are bound through the Phone Number Protection service. When User A calls Number X, the call is forwarded to User B. When User B calls Number X, the call is forwarded to User A. A single fixed-line Number X can be reused for N binding relationships, such as A1-X-B1, A2-X-B2, and A3-X-B3. As long as the mobile phone numbers of Users A and B are not duplicated, a single fixed-line Number X can be bound to N pairs of mobile phone numbers simultaneously, and calls can be made concurrently.
   * - The number of times a number can be reused varies based on the number you purchased. You can confirm the specific reuse limit with your technical support when purchasing the number.
   * 
   * @param tmpReq - BindAxbFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxbFixedLineResponse
   */
  async bindAxbFixedLineWithOptions(tmpReq: $_model.BindAxbFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxbFixedLineResponse> {
    tmpReq.validate();
    let request = new $_model.BindAxbFixedLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anucode)) {
      query["Anucode"] = request.anucode;
    }

    if (!$dara.isNull(request.anucodecalled)) {
      query["Anucodecalled"] = request.anucodecalled;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.areacode)) {
      query["Areacode"] = request.areacode;
    }

    if (!$dara.isNull(request.bindType)) {
      query["BindType"] = request.bindType;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extraShrink)) {
      query["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subts)) {
      query["Subts"] = request.subts;
    }

    if (!$dara.isNull(request.TAnucodeConnect)) {
      query["TAnucodeConnect"] = request.TAnucodeConnect;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxbFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxbFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.BindAxbFixedLineResponse({}));
  }

  /**
   * Attaches an AXB privacy number to a fixed line to restrict the calling relationship to a one-to-one relationship, allowing User A to contact User B through the fixed-line intermediate number X, and User B to contact User A through the same intermediate number X. Fixed-line privacy numbers are currently available by invitation only. Contact your technical support to activate the service and obtain integration support.
   * 
   * @remarks
   * - Before you invoke this operation, make sure that you have purchased a privacy number in the console. You can use this operation to bind numbers to a fixed-line AXB intermediate number. Currently, you cannot bind Number A and Number B to a fixed-line AXB intermediate number on the Number Management page in the console.
   * - Before binding numbers, we recommend that you clarify the roles of User A and User B in your business scenario. For example, in common scenarios such as ride-hailing, User A is the passenger and User B is the driver.
   * - Fixed-line AXB intermediate numbers are mainly used for privacy protection in one-to-one scenarios. Number A and Number B are bound through the Phone Number Protection service. When User A calls Number X, the call is forwarded to User B. When User B calls Number X, the call is forwarded to User A. A single fixed-line Number X can be reused for N binding relationships, such as A1-X-B1, A2-X-B2, and A3-X-B3. As long as the mobile phone numbers of Users A and B are not duplicated, a single fixed-line Number X can be bound to N pairs of mobile phone numbers simultaneously, and calls can be made concurrently.
   * - The number of times a number can be reused varies based on the number you purchased. You can confirm the specific reuse limit with your technical support when purchasing the number.
   * 
   * @param request - BindAxbFixedLineRequest
   * @returns BindAxbFixedLineResponse
   */
  async bindAxbFixedLine(request: $_model.BindAxbFixedLineRequest): Promise<$_model.BindAxbFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxbFixedLineWithOptions(request, runtime);
  }

  /**
   * Adds an AXG binding.
   * 
   * @remarks
   * An AXG protection solution can be configured to meet the requirements for grading users, limiting the scope of calls, and restricting order snatching. The letter G represents a phone number group to which you can add phone numbers as needed.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxgResponse
   */
  async bindAxgWithOptions(request: $_model.BindAxgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!$dara.isNull(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!$dara.isNull(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxg",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxgResponse>(await this.callApi(params, req, runtime), new $_model.BindAxgResponse({}));
  }

  /**
   * Adds an AXG binding.
   * 
   * @remarks
   * An AXG protection solution can be configured to meet the requirements for grading users, limiting the scope of calls, and restricting order snatching. The letter G represents a phone number group to which you can add phone numbers as needed.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BindAxgRequest
   * @returns BindAxgResponse
   */
  async bindAxg(request: $_model.BindAxgRequest): Promise<$_model.BindAxgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxgWithOptions(request, runtime);
  }

  /**
   * Adds a binding relationship for an AXN privacy number. An AXN privacy number assigns an exclusive privacy number to User A, allowing any Number N to reach User A by dialing Number X.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have [purchased a privacy number](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * - You can use this operation to bind numbers to an AXN privacy number, or bind Number A and Number B to an AXN privacy number on the [Number Management](https://dyplsnext.console.aliyun.com/number/list?spm=a2c4g.11186623.0.0.64e649bbTzmb6j&resType=1&billId=FC100000165392498) page in the console.
   * - Before binding numbers to an AXN privacy number, clarify the role of User A in your business scenario. For example, in a used car information publishing scenario, User A represents the contact information of the landlord or agent.
   * ### QPS limits
   * The QPS limit per user is 5,000 calls per second. If this limit is exceeded, API calls are throttled, which may affect your services. Call the API at a reasonable frequency.
   * 
   * @param request - BindAxnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxnResponse
   */
  async bindAxnWithOptions(request: $_model.BindAxnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!$dara.isNull(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!$dara.isNull(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!$dara.isNull(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!$dara.isNull(request.noType)) {
      query["NoType"] = request.noType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxn",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxnResponse>(await this.callApi(params, req, runtime), new $_model.BindAxnResponse({}));
  }

  /**
   * Adds a binding relationship for an AXN privacy number. An AXN privacy number assigns an exclusive privacy number to User A, allowing any Number N to reach User A by dialing Number X.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have [purchased a privacy number](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * - You can use this operation to bind numbers to an AXN privacy number, or bind Number A and Number B to an AXN privacy number on the [Number Management](https://dyplsnext.console.aliyun.com/number/list?spm=a2c4g.11186623.0.0.64e649bbTzmb6j&resType=1&billId=FC100000165392498) page in the console.
   * - Before binding numbers to an AXN privacy number, clarify the role of User A in your business scenario. For example, in a used car information publishing scenario, User A represents the contact information of the landlord or agent.
   * ### QPS limits
   * The QPS limit per user is 5,000 calls per second. If this limit is exceeded, API calls are throttled, which may affect your services. Call the API at a reasonable frequency.
   * 
   * @param request - BindAxnRequest
   * @returns BindAxnResponse
   */
  async bindAxn(request: $_model.BindAxnRequest): Promise<$_model.BindAxnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxnWithOptions(request, runtime);
  }

  /**
   * Adds a binding relationship for an AXN extension number. The AXN extension number feature is similar to the AXN privacy number feature but introduces extension numbers to reduce the usage of X numbers. When making a call, the caller dials the X number first and then enters the corresponding extension number after hearing the prompt tone to connect to number A.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have [purchased privacy numbers](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * - You can use this operation to bind numbers to an AXN extension number. You can also bind numbers A and B to an AXN extension number on the [Number Management](https://dyplsnext.console.aliyun.com/number/list?spm=a2c4g.11186623.0.0.64e649bbTzmb6j&resType=1&billId=FC100000165392498) page in the console.
   * - Before binding numbers for an AXN extension number, we recommend that you clarify the roles of A and N in your business scenario. For example, if number A is a customer, number X is the privacy number assigned to the customer. Calls from any other number to number X plus the extension number are forwarded to number A. When A calls X, the call is forwarded to the default number B specified during binding.
   * ### QPS limits
   * The queries per second (QPS) limit for a single user is 5,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * 
   * @param request - BindAxnExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxnExtensionResponse
   */
  async bindAxnExtensionWithOptions(request: $_model.BindAxnExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxnExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!$dara.isNull(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!$dara.isNull(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.expectCity)) {
      query["ExpectCity"] = request.expectCity;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extend)) {
      query["Extend"] = request.extend;
    }

    if (!$dara.isNull(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!$dara.isNull(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxnExtension",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxnExtensionResponse>(await this.callApi(params, req, runtime), new $_model.BindAxnExtensionResponse({}));
  }

  /**
   * Adds a binding relationship for an AXN extension number. The AXN extension number feature is similar to the AXN privacy number feature but introduces extension numbers to reduce the usage of X numbers. When making a call, the caller dials the X number first and then enters the corresponding extension number after hearing the prompt tone to connect to number A.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have [purchased privacy numbers](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * - You can use this operation to bind numbers to an AXN extension number. You can also bind numbers A and B to an AXN extension number on the [Number Management](https://dyplsnext.console.aliyun.com/number/list?spm=a2c4g.11186623.0.0.64e649bbTzmb6j&resType=1&billId=FC100000165392498) page in the console.
   * - Before binding numbers for an AXN extension number, we recommend that you clarify the roles of A and N in your business scenario. For example, if number A is a customer, number X is the privacy number assigned to the customer. Calls from any other number to number X plus the extension number are forwarded to number A. When A calls X, the call is forwarded to the default number B specified during binding.
   * ### QPS limits
   * The queries per second (QPS) limit for a single user is 5,000 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * 
   * @param request - BindAxnExtensionRequest
   * @returns BindAxnExtensionResponse
   */
  async bindAxnExtension(request: $_model.BindAxnExtensionRequest): Promise<$_model.BindAxnExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxnExtensionWithOptions(request, runtime);
  }

  /**
   * The fixed-line AXN extension number introduces extension numbers on top of the fixed-line AXN privacy number, thereby reducing the usage of X numbers. When making a call, first dial the X number, and then enter the corresponding extension number after hearing the prompt tone to be connected to A. The fixed-line AXN extension number service is currently invitation-only. Contact your technical support to activate the service and obtain integration support.
   * 
   * @remarks
   * - Before calling this API, make sure that you have [purchased privacy numbers](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * - You can use this API to bind numbers for the fixed-line AXN extension number. Binding numbers for the fixed-line AXN extension number through the console is not supported.
   * - Before binding numbers, we recommend that you first clarify the A role and N role in your business scenario. For example, if the A number represents the customer, the X number is the privacy number assigned to the customer. Any other number calling the X number plus the extension number will be forwarded to the A number. When A calls X, the call will be forwarded to the default B number specified during binding.
   * 
   * @param tmpReq - BindAxnExtensionFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxnExtensionFixedLineResponse
   */
  async bindAxnExtensionFixedLineWithOptions(tmpReq: $_model.BindAxnExtensionFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxnExtensionFixedLineResponse> {
    tmpReq.validate();
    let request = new $_model.BindAxnExtensionFixedLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extraaxx)) {
      request.extraaxxShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraaxx, "Extraaxx", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anucode)) {
      query["Anucode"] = request.anucode;
    }

    if (!$dara.isNull(request.anucodecalled)) {
      query["Anucodecalled"] = request.anucodecalled;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.areacode)) {
      query["Areacode"] = request.areacode;
    }

    if (!$dara.isNull(request.bindType)) {
      query["BindType"] = request.bindType;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extraaxxShrink)) {
      query["Extraaxx"] = request.extraaxxShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subts)) {
      query["Subts"] = request.subts;
    }

    if (!$dara.isNull(request.TAnucodeConnect)) {
      query["TAnucodeConnect"] = request.TAnucodeConnect;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!$dara.isNull(request.telXext)) {
      query["TelXext"] = request.telXext;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxnExtensionFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxnExtensionFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.BindAxnExtensionFixedLineResponse({}));
  }

  /**
   * The fixed-line AXN extension number introduces extension numbers on top of the fixed-line AXN privacy number, thereby reducing the usage of X numbers. When making a call, first dial the X number, and then enter the corresponding extension number after hearing the prompt tone to be connected to A. The fixed-line AXN extension number service is currently invitation-only. Contact your technical support to activate the service and obtain integration support.
   * 
   * @remarks
   * - Before calling this API, make sure that you have [purchased privacy numbers](https://dyplsnext.console.aliyun.com/numberbuy) in the console.
   * - You can use this API to bind numbers for the fixed-line AXN extension number. Binding numbers for the fixed-line AXN extension number through the console is not supported.
   * - Before binding numbers, we recommend that you first clarify the A role and N role in your business scenario. For example, if the A number represents the customer, the X number is the privacy number assigned to the customer. Any other number calling the X number plus the extension number will be forwarded to the A number. When A calls X, the call will be forwarded to the default B number specified during binding.
   * 
   * @param request - BindAxnExtensionFixedLineRequest
   * @returns BindAxnExtensionFixedLineResponse
   */
  async bindAxnExtensionFixedLine(request: $_model.BindAxnExtensionFixedLineRequest): Promise<$_model.BindAxnExtensionFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxnExtensionFixedLineWithOptions(request, runtime);
  }

  /**
   * Binds a fixed-line AXN privacy number to assign a dedicated privacy number to User A, which allows any number N to be forwarded to User A by dialing number X. Fixed-line privacy numbers are currently available by invitation only. Contact your technical support to activate the service and obtain integration assistance.
   * 
   * @remarks
   * - Before you call this operation, make sure that you have purchased a privacy number in the console. You can use this operation to bind a number to a fixed-line AXN privacy number. The console does not support binding for fixed-line AXN privacy numbers.
   * - Before binding a number, we recommend that you clarify the role of User A in your business scenario. For example, in a used car listing scenario, User A represents the contact information of the property owner or broker.
   * 
   * @param tmpReq - BindAxnFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAxnFixedLineResponse
   */
  async bindAxnFixedLineWithOptions(tmpReq: $_model.BindAxnFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAxnFixedLineResponse> {
    tmpReq.validate();
    let request = new $_model.BindAxnFixedLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anucode)) {
      query["Anucode"] = request.anucode;
    }

    if (!$dara.isNull(request.anucodecalled)) {
      query["Anucodecalled"] = request.anucodecalled;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.areacode)) {
      query["Areacode"] = request.areacode;
    }

    if (!$dara.isNull(request.bindType)) {
      query["BindType"] = request.bindType;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extraShrink)) {
      query["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subts)) {
      query["Subts"] = request.subts;
    }

    if (!$dara.isNull(request.TAnucodeConnect)) {
      query["TAnucodeConnect"] = request.TAnucodeConnect;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAxnFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAxnFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.BindAxnFixedLineResponse({}));
  }

  /**
   * Binds a fixed-line AXN privacy number to assign a dedicated privacy number to User A, which allows any number N to be forwarded to User A by dialing number X. Fixed-line privacy numbers are currently available by invitation only. Contact your technical support to activate the service and obtain integration assistance.
   * 
   * @remarks
   * - Before you call this operation, make sure that you have purchased a privacy number in the console. You can use this operation to bind a number to a fixed-line AXN privacy number. The console does not support binding for fixed-line AXN privacy numbers.
   * - Before binding a number, we recommend that you clarify the role of User A in your business scenario. For example, in a used car listing scenario, User A represents the contact information of the property owner or broker.
   * 
   * @param request - BindAxnFixedLineRequest
   * @returns BindAxnFixedLineResponse
   */
  async bindAxnFixedLine(request: $_model.BindAxnFixedLineRequest): Promise<$_model.BindAxnFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAxnFixedLineWithOptions(request, runtime);
  }

  /**
   * Adds AXG bindings in batches. The AXG model is a Phone Number Protection Solution for scenarios requiring User Tiering, Call Scope Restriction, or Order Grabbing Restriction. In this model, G represents a Number Group, to which you can add phone numbers.
   * 
   * @remarks
   * - Before you bind AXG Numbers, you must purchase X Numbers, create a G Number Group, and add Numbers to the group. To create a G Number Group, see [Set up G Number Group](https://help.aliyun.com/zh/pnp/user-guide/manage-phone-number-pools#section-9bb-xrg-c78) or call the [CreateAxgGroup](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-createaxggroup) API.
   * - Before binding AXG Numbers, define Role A and Role G for your business scenario. For example, on a recruitment platform, Role A can represent job applicants and Role G can represent the hiring team.
   * - When you call this API for Batch Binding of AXG Numbers, a single failed request does not affect others in the batch. The API returns a status code for each binding request.
   * ### QPS limit
   * The QPS limit for this API is 5,000 per user. Exceeding this limit results in throttling. Plan your API calls accordingly to avoid impacting your business.
   * 
   * @param tmpReq - BindBatchAxgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindBatchAxgResponse
   */
  async bindBatchAxgWithOptions(tmpReq: $_model.BindBatchAxgRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindBatchAxgResponse> {
    tmpReq.validate();
    let request = new $_model.BindBatchAxgShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.axgBindList)) {
      request.axgBindListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.axgBindList, "AxgBindList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.axgBindListShrink)) {
      query["AxgBindList"] = request.axgBindListShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindBatchAxg",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindBatchAxgResponse>(await this.callApi(params, req, runtime), new $_model.BindBatchAxgResponse({}));
  }

  /**
   * Adds AXG bindings in batches. The AXG model is a Phone Number Protection Solution for scenarios requiring User Tiering, Call Scope Restriction, or Order Grabbing Restriction. In this model, G represents a Number Group, to which you can add phone numbers.
   * 
   * @remarks
   * - Before you bind AXG Numbers, you must purchase X Numbers, create a G Number Group, and add Numbers to the group. To create a G Number Group, see [Set up G Number Group](https://help.aliyun.com/zh/pnp/user-guide/manage-phone-number-pools#section-9bb-xrg-c78) or call the [CreateAxgGroup](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-createaxggroup) API.
   * - Before binding AXG Numbers, define Role A and Role G for your business scenario. For example, on a recruitment platform, Role A can represent job applicants and Role G can represent the hiring team.
   * - When you call this API for Batch Binding of AXG Numbers, a single failed request does not affect others in the batch. The API returns a status code for each binding request.
   * ### QPS limit
   * The QPS limit for this API is 5,000 per user. Exceeding this limit results in throttling. Plan your API calls accordingly to avoid impacting your business.
   * 
   * @param request - BindBatchAxgRequest
   * @returns BindBatchAxgResponse
   */
  async bindBatchAxg(request: $_model.BindBatchAxgRequest): Promise<$_model.BindBatchAxgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindBatchAxgWithOptions(request, runtime);
  }

  /**
   * Adds a binding relationship for a 700GXB private number. The 700GXB product is a privacy protection solutions designed for scenarios that require user-level classification, call scope restrictions, and order-grabbing restrictions. In this product, G represents a number group, and you can add numbers to the group as needed.
   * 
   * @remarks
   * Before calling this operation, make sure that you have purchased a private number in the console.
   * You can use this operation to bind numbers to a 700GXB private number, or bind numbers on the Number Management page in the console.
   * Before binding numbers for a 700GXB private number, clarify the G role and B role in your business scenario. For example, on a recruitment platform, B is the job applicant and G is the recruitment team.
   * QPS limit
   * The single-user QPS limit for this operation is 5,000 calls per second. If this limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - BindGxb700Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindGxb700Response
   */
  async bindGxb700WithOptions(request: $_model.BindGxb700Request, runtime: $dara.RuntimeOptions): Promise<$_model.BindGxb700Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.callTimeout)) {
      query["CallTimeout"] = request.callTimeout;
    }

    if (!$dara.isNull(request.defaultA)) {
      query["DefaultA"] = request.defaultA;
    }

    if (!$dara.isNull(request.dtmfConfig)) {
      query["DtmfConfig"] = request.dtmfConfig;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.industrialId)) {
      query["IndustrialId"] = request.industrialId;
    }

    if (!$dara.isNull(request.needAsr)) {
      query["NeedAsr"] = request.needAsr;
    }

    if (!$dara.isNull(request.needRecord)) {
      query["NeedRecord"] = request.needRecord;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.outOrderId)) {
      query["OutOrderId"] = request.outOrderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.recType)) {
      query["RecType"] = request.recType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindGxb700",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindGxb700Response>(await this.callApi(params, req, runtime), new $_model.BindGxb700Response({}));
  }

  /**
   * Adds a binding relationship for a 700GXB private number. The 700GXB product is a privacy protection solutions designed for scenarios that require user-level classification, call scope restrictions, and order-grabbing restrictions. In this product, G represents a number group, and you can add numbers to the group as needed.
   * 
   * @remarks
   * Before calling this operation, make sure that you have purchased a private number in the console.
   * You can use this operation to bind numbers to a 700GXB private number, or bind numbers on the Number Management page in the console.
   * Before binding numbers for a 700GXB private number, clarify the G role and B role in your business scenario. For example, on a recruitment platform, B is the job applicant and G is the recruitment team.
   * QPS limit
   * The single-user QPS limit for this operation is 5,000 calls per second. If this limit is exceeded, API calls are throttled, which may affect your business. Call this operation appropriately.
   * 
   * @param request - BindGxb700Request
   * @returns BindGxb700Response
   */
  async bindGxb700(request: $_model.BindGxb700Request): Promise<$_model.BindGxb700Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindGxb700WithOptions(request, runtime);
  }

  /**
   * Establishes a binding relationship between a specified work number X and an employee number B on the work number platform. The binding takes effect only after the employee completes real-name verification for the work number. After the binding succeeds, all calls to the work number are forwarded to the employee number. The platform pushes the binding result to the caller through the asynchronous notification API.
   * 
   * @param request - BindXBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindXBResponse
   */
  async bindXBWithOptions(request: $_model.BindXBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindXBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindXB",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindXBResponse>(await this.callApi(params, req, runtime), new $_model.BindXBResponse({}));
  }

  /**
   * Establishes a binding relationship between a specified work number X and an employee number B on the work number platform. The binding takes effect only after the employee completes real-name verification for the work number. After the binding succeeds, all calls to the work number are forwarded to the employee number. The platform pushes the binding result to the caller through the asynchronous notification API.
   * 
   * @param request - BindXBRequest
   * @returns BindXBResponse
   */
  async bindXB(request: $_model.BindXBRequest): Promise<$_model.BindXBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindXBWithOptions(request, runtime);
  }

  /**
   * Purchases a phone number.
   * 
   * @remarks
   *   After you create a phone number pool in the Phone Number Protection console, the phone number pool is empty by default. You must purchase phone numbers and add them to the phone number pool.
   * *   Before you call this operation, make sure that you are familiar with the [pricing](https://help.aliyun.com/document_detail/59825.html) of Phone Number Protection.
   * *   When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before you call this operation to purchase a phone number, check the quantity of phone numbers available for purchase by using the [QuerySecretNoRemain](https://help.aliyun.com/document_detail/111699.html) operation.
   * *   The account used to purchase a phone number must be an enterprise account that has passed real-name verification. For more information about how to perform real-name verification, see [Enterprise verification FAQs](https://help.aliyun.com/document_detail/37172.html).
   * 
   * @param request - BuySecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuySecretNoResponse
   */
  async buySecretNoWithOptions(request: $_model.BuySecretNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BuySecretNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.displayPool)) {
      query["DisplayPool"] = request.displayPool;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!$dara.isNull(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuySecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuySecretNoResponse>(await this.callApi(params, req, runtime), new $_model.BuySecretNoResponse({}));
  }

  /**
   * Purchases a phone number.
   * 
   * @remarks
   *   After you create a phone number pool in the Phone Number Protection console, the phone number pool is empty by default. You must purchase phone numbers and add them to the phone number pool.
   * *   Before you call this operation, make sure that you are familiar with the [pricing](https://help.aliyun.com/document_detail/59825.html) of Phone Number Protection.
   * *   When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before you call this operation to purchase a phone number, check the quantity of phone numbers available for purchase by using the [QuerySecretNoRemain](https://help.aliyun.com/document_detail/111699.html) operation.
   * *   The account used to purchase a phone number must be an enterprise account that has passed real-name verification. For more information about how to perform real-name verification, see [Enterprise verification FAQs](https://help.aliyun.com/document_detail/37172.html).
   * 
   * @param request - BuySecretNoRequest
   * @returns BuySecretNoResponse
   */
  async buySecretNo(request: $_model.BuySecretNoRequest): Promise<$_model.BuySecretNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.buySecretNoWithOptions(request, runtime);
  }

  /**
   * Cancels a door-to-door delivery order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelPickUpWaybillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPickUpWaybillResponse
   */
  async cancelPickUpWaybillWithOptions(request: $_model.CancelPickUpWaybillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPickUpWaybillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cancelDesc)) {
      query["CancelDesc"] = request.cancelDesc;
    }

    if (!$dara.isNull(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPickUpWaybill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPickUpWaybillResponse>(await this.callApi(params, req, runtime), new $_model.CancelPickUpWaybillResponse({}));
  }

  /**
   * Cancels a door-to-door delivery order.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CancelPickUpWaybillRequest
   * @returns CancelPickUpWaybillResponse
   */
  async cancelPickUpWaybill(request: $_model.CancelPickUpWaybillRequest): Promise<$_model.CancelPickUpWaybillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPickUpWaybillWithOptions(request, runtime);
  }

  /**
   * Configures an X number to independently manage communication features such as voice calls and enterprise business cards for a work number.
   * 
   * @param tmpReq - ConfigXRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigXResponse
   */
  async configXWithOptions(tmpReq: $_model.ConfigXRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigXResponse> {
    tmpReq.validate();
    let request = new $_model.ConfigXShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sequenceCalls)) {
      request.sequenceCallsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sequenceCalls, "SequenceCalls", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callAbility)) {
      query["CallAbility"] = request.callAbility;
    }

    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.GNFlag)) {
      query["GNFlag"] = request.GNFlag;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sequenceCallsShrink)) {
      query["SequenceCalls"] = request.sequenceCallsShrink;
    }

    if (!$dara.isNull(request.sequenceMode)) {
      query["SequenceMode"] = request.sequenceMode;
    }

    if (!$dara.isNull(request.smsAbility)) {
      query["SmsAbility"] = request.smsAbility;
    }

    if (!$dara.isNull(request.smsSignMode)) {
      query["SmsSignMode"] = request.smsSignMode;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigX",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigXResponse>(await this.callApi(params, req, runtime), new $_model.ConfigXResponse({}));
  }

  /**
   * Configures an X number to independently manage communication features such as voice calls and enterprise business cards for a work number.
   * 
   * @param request - ConfigXRequest
   * @returns ConfigXResponse
   */
  async configX(request: $_model.ConfigXRequest): Promise<$_model.ConfigXResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configXWithOptions(request, runtime);
  }

  /**
   * Creates number group G.
   * 
   * @remarks
   * Before you add an AXG binding, you must purchase phone number X, create number group G, and then add phone numbers to number group G. If you do not add phone numbers to number group G after you create number group G, you can call the [OperateAxgGroup](https://help.aliyun.com/document_detail/110252.htm) operation to add phone numbers to number group G.
   * >  Up to 2,000 number groups G can be added for a single phone number pool.
   * 
   * @param request - CreateAxgGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAxgGroupResponse
   */
  async createAxgGroupWithOptions(request: $_model.CreateAxgGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAxgGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numbers)) {
      query["Numbers"] = request.numbers;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAxgGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAxgGroupResponse({}));
  }

  /**
   * Creates number group G.
   * 
   * @remarks
   * Before you add an AXG binding, you must purchase phone number X, create number group G, and then add phone numbers to number group G. If you do not add phone numbers to number group G after you create number group G, you can call the [OperateAxgGroup](https://help.aliyun.com/document_detail/110252.htm) operation to add phone numbers to number group G.
   * >  Up to 2,000 number groups G can be added for a single phone number pool.
   * 
   * @param request - CreateAxgGroupRequest
   * @returns CreateAxgGroupResponse
   */
  async createAxgGroup(request: $_model.CreateAxgGroupRequest): Promise<$_model.CreateAxgGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAxgGroupWithOptions(request, runtime);
  }

  /**
   * Submit Individual Information of a landline number A through an API.
   * 
   * @remarks
   * Before invoking this API, you need to first call [GetDyplsOSSInfoForUploadFile](https://help.aliyun.com/document_detail/2880885.html) to upload the individual\\"s photo information to OSS. For the detailed operation flow, see [Submit Individual Real-name Information for Number A via API](https://help.aliyun.com/document_detail/2880077.html).
   * ### queries per second (QPS) limit
   * The QPS limit for this API is 50 queries per second per user. If this limit is exceeded, Rate Limiting will be applied to your API Call, which may Impact your business. Please invoke the API appropriately.
   * 
   * @param request - CreateFixedNoAReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFixedNoAReportResponse
   */
  async createFixedNoAReportWithOptions(request: $_model.CreateFixedNoAReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFixedNoAReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ANoWhiteGroupId)) {
      query["ANoWhiteGroupId"] = request.ANoWhiteGroupId;
    }

    if (!$dara.isNull(request.custName)) {
      query["CustName"] = request.custName;
    }

    if (!$dara.isNull(request.custPhoneNo)) {
      query["CustPhoneNo"] = request.custPhoneNo;
    }

    if (!$dara.isNull(request.custType)) {
      query["CustType"] = request.custType;
    }

    if (!$dara.isNull(request.documentNumber)) {
      query["DocumentNumber"] = request.documentNumber;
    }

    if (!$dara.isNull(request.documentType)) {
      query["DocumentType"] = request.documentType;
    }

    if (!$dara.isNull(request.fixedLineWorkId)) {
      query["FixedLineWorkId"] = request.fixedLineWorkId;
    }

    if (!$dara.isNull(request.fixedNoA)) {
      query["FixedNoA"] = request.fixedNoA;
    }

    if (!$dara.isNull(request.idCardAlivePhoto)) {
      query["IdCardAlivePhoto"] = request.idCardAlivePhoto;
    }

    if (!$dara.isNull(request.idCardBackPhoto)) {
      query["IdCardBackPhoto"] = request.idCardBackPhoto;
    }

    if (!$dara.isNull(request.idCardFrontPhoto)) {
      query["IdCardFrontPhoto"] = request.idCardFrontPhoto;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFixedNoAReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFixedNoAReportResponse>(await this.callApi(params, req, runtime), new $_model.CreateFixedNoAReportResponse({}));
  }

  /**
   * Submit Individual Information of a landline number A through an API.
   * 
   * @remarks
   * Before invoking this API, you need to first call [GetDyplsOSSInfoForUploadFile](https://help.aliyun.com/document_detail/2880885.html) to upload the individual\\"s photo information to OSS. For the detailed operation flow, see [Submit Individual Real-name Information for Number A via API](https://help.aliyun.com/document_detail/2880077.html).
   * ### queries per second (QPS) limit
   * The QPS limit for this API is 50 queries per second per user. If this limit is exceeded, Rate Limiting will be applied to your API Call, which may Impact your business. Please invoke the API appropriately.
   * 
   * @param request - CreateFixedNoAReportRequest
   * @returns CreateFixedNoAReportResponse
   */
  async createFixedNoAReport(request: $_model.CreateFixedNoAReportRequest): Promise<$_model.CreateFixedNoAReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFixedNoAReportWithOptions(request, runtime);
  }

  /**
   * Submit Individual Information of an A-number mobile phone number through an API.
   * 
   * @remarks
   * Before invoking this API, you must first call [GetDyplsOSSInfoForUploadFile](https://help.aliyun.com/document_detail/2880885.html) to upload the individual\\"s photo information to OSS. For the detailed operation flow, see [Submit Individual Real-name Information of an A-number Mobile Phone Number via API](https://help.aliyun.com/document_detail/2880077.html).
   * ### QPS Limit
   * The queries per second (QPS) limit for this API is 50 requests per second per user. If this limit is exceeded, API calls will be subject to Rate Limiting, which may Impact your business. Please invoke the API appropriately.
   * 
   * @param request - CreatePhoneNoAReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePhoneNoAReportResponse
   */
  async createPhoneNoAReportWithOptions(request: $_model.CreatePhoneNoAReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePhoneNoAReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ANoWhiteGroupId)) {
      query["ANoWhiteGroupId"] = request.ANoWhiteGroupId;
    }

    if (!$dara.isNull(request.custName)) {
      query["CustName"] = request.custName;
    }

    if (!$dara.isNull(request.documentNumber)) {
      query["DocumentNumber"] = request.documentNumber;
    }

    if (!$dara.isNull(request.documentType)) {
      query["DocumentType"] = request.documentType;
    }

    if (!$dara.isNull(request.idCardAlivePhoto)) {
      query["IdCardAlivePhoto"] = request.idCardAlivePhoto;
    }

    if (!$dara.isNull(request.idCardBackPhoto)) {
      query["IdCardBackPhoto"] = request.idCardBackPhoto;
    }

    if (!$dara.isNull(request.idCardFrontPhoto)) {
      query["IdCardFrontPhoto"] = request.idCardFrontPhoto;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePhoneNoAReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePhoneNoAReportResponse>(await this.callApi(params, req, runtime), new $_model.CreatePhoneNoAReportResponse({}));
  }

  /**
   * Submit Individual Information of an A-number mobile phone number through an API.
   * 
   * @remarks
   * Before invoking this API, you must first call [GetDyplsOSSInfoForUploadFile](https://help.aliyun.com/document_detail/2880885.html) to upload the individual\\"s photo information to OSS. For the detailed operation flow, see [Submit Individual Real-name Information of an A-number Mobile Phone Number via API](https://help.aliyun.com/document_detail/2880077.html).
   * ### QPS Limit
   * The queries per second (QPS) limit for this API is 50 requests per second per user. If this limit is exceeded, API calls will be subject to Rate Limiting, which may Impact your business. Please invoke the API appropriately.
   * 
   * @param request - CreatePhoneNoAReportRequest
   * @returns CreatePhoneNoAReportResponse
   */
  async createPhoneNoAReport(request: $_model.CreatePhoneNoAReportRequest): Promise<$_model.CreatePhoneNoAReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPhoneNoAReportWithOptions(request, runtime);
  }

  /**
   * Creates a door-to-door pickup order.
   * 
   * @remarks
   * ### QPS limits
   * The queries per second (QPS) limit for a single user is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your services. Call the API at a reasonable frequency.
   * 
   * @param tmpReq - CreatePickUpWaybillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePickUpWaybillResponse
   */
  async createPickUpWaybillWithOptions(tmpReq: $_model.CreatePickUpWaybillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePickUpWaybillResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePickUpWaybillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.consigneeAddress)) {
      request.consigneeAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.consigneeAddress, "ConsigneeAddress", "json");
    }

    if (!$dara.isNull(tmpReq.goodsInfos)) {
      request.goodsInfosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.goodsInfos, "GoodsInfos", "json");
    }

    if (!$dara.isNull(tmpReq.sendAddress)) {
      request.sendAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendAddress, "SendAddress", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appointGotEndTime)) {
      query["AppointGotEndTime"] = request.appointGotEndTime;
    }

    if (!$dara.isNull(request.appointGotStartTime)) {
      query["AppointGotStartTime"] = request.appointGotStartTime;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.consigneeAddressShrink)) {
      query["ConsigneeAddress"] = request.consigneeAddressShrink;
    }

    if (!$dara.isNull(request.consigneeMobile)) {
      query["ConsigneeMobile"] = request.consigneeMobile;
    }

    if (!$dara.isNull(request.consigneeName)) {
      query["ConsigneeName"] = request.consigneeName;
    }

    if (!$dara.isNull(request.consigneePhone)) {
      query["ConsigneePhone"] = request.consigneePhone;
    }

    if (!$dara.isNull(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!$dara.isNull(request.goodsInfosShrink)) {
      query["GoodsInfos"] = request.goodsInfosShrink;
    }

    if (!$dara.isNull(request.orderChannels)) {
      query["OrderChannels"] = request.orderChannels;
    }

    if (!$dara.isNull(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sendAddressShrink)) {
      query["SendAddress"] = request.sendAddressShrink;
    }

    if (!$dara.isNull(request.sendMobile)) {
      query["SendMobile"] = request.sendMobile;
    }

    if (!$dara.isNull(request.sendName)) {
      query["SendName"] = request.sendName;
    }

    if (!$dara.isNull(request.sendPhone)) {
      query["SendPhone"] = request.sendPhone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePickUpWaybill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePickUpWaybillResponse>(await this.callApi(params, req, runtime), new $_model.CreatePickUpWaybillResponse({}));
  }

  /**
   * Creates a door-to-door pickup order.
   * 
   * @remarks
   * ### QPS limits
   * The queries per second (QPS) limit for a single user is 200 calls per second. If the limit is exceeded, API calls are throttled, which may affect your services. Call the API at a reasonable frequency.
   * 
   * @param request - CreatePickUpWaybillRequest
   * @returns CreatePickUpWaybillResponse
   */
  async createPickUpWaybill(request: $_model.CreatePickUpWaybillRequest): Promise<$_model.CreatePickUpWaybillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPickUpWaybillWithOptions(request, runtime);
  }

  /**
   * Pre-queries shipping order information before placing an order.
   * 
   * @remarks
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. Exceeding this limit will trigger throttling, which may affect your business. Call this operation appropriately.
   * 
   * @param tmpReq - CreatePickUpWaybillPreQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePickUpWaybillPreQueryResponse
   */
  async createPickUpWaybillPreQueryWithOptions(tmpReq: $_model.CreatePickUpWaybillPreQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePickUpWaybillPreQueryResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePickUpWaybillPreQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.consigneeInfo)) {
      request.consigneeInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.consigneeInfo, "ConsigneeInfo", "json");
    }

    if (!$dara.isNull(tmpReq.senderInfo)) {
      request.senderInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.senderInfo, "SenderInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consigneeInfoShrink)) {
      query["ConsigneeInfo"] = request.consigneeInfoShrink;
    }

    if (!$dara.isNull(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!$dara.isNull(request.orderChannels)) {
      query["OrderChannels"] = request.orderChannels;
    }

    if (!$dara.isNull(request.outerOrderCode)) {
      query["OuterOrderCode"] = request.outerOrderCode;
    }

    if (!$dara.isNull(request.preWeight)) {
      query["PreWeight"] = request.preWeight;
    }

    if (!$dara.isNull(request.senderInfoShrink)) {
      query["SenderInfo"] = request.senderInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePickUpWaybillPreQuery",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePickUpWaybillPreQueryResponse>(await this.callApi(params, req, runtime), new $_model.CreatePickUpWaybillPreQueryResponse({}));
  }

  /**
   * Pre-queries shipping order information before placing an order.
   * 
   * @remarks
   * ### QPS limit
   * The single-user QPS limit for this operation is 100 calls per second. Exceeding this limit will trigger throttling, which may affect your business. Call this operation appropriately.
   * 
   * @param request - CreatePickUpWaybillPreQueryRequest
   * @returns CreatePickUpWaybillPreQueryResponse
   */
  async createPickUpWaybillPreQuery(request: $_model.CreatePickUpWaybillPreQueryRequest): Promise<$_model.CreatePickUpWaybillPreQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPickUpWaybillPreQueryWithOptions(request, runtime);
  }

  /**
   * 对客提交号码迁移任务，两侧号池须为同一资质、同一场景且均为开启状态。
   * 
   * @param request - CreateSecretTransferRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretTransferRecordResponse
   */
  async createSecretTransferRecordWithOptions(request: $_model.CreateSecretTransferRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretTransferRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lastPartnerKey)) {
      query["LastPartnerKey"] = request.lastPartnerKey;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.originPartnerKey)) {
      query["OriginPartnerKey"] = request.originPartnerKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecretTransferRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecretTransferRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretTransferRecordResponse({}));
  }

  /**
   * 对客提交号码迁移任务，两侧号池须为同一资质、同一场景且均为开启状态。
   * 
   * @param request - CreateSecretTransferRecordRequest
   * @returns CreateSecretTransferRecordResponse
   */
  async createSecretTransferRecord(request: $_model.CreateSecretTransferRecordRequest): Promise<$_model.CreateSecretTransferRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecretTransferRecordWithOptions(request, runtime);
  }

  /**
   * Generates a text message delivery tag for scenarios where an employee sends a text message to a customer by using a work number. The client calls this operation to obtain the tag and appends it to the end of the message content. The work number platform then parses the actual called number from the tag and delivers the message to the customer.
   * 
   * @param request - CreateSmsSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSmsSignResponse
   */
  async createSmsSignWithOptions(request: $_model.CreateSmsSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSmsSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNo)) {
      query["CalledNo"] = request.calledNo;
    }

    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.callingNo)) {
      query["CallingNo"] = request.callingNo;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSmsSign",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSmsSignResponse>(await this.callApi(params, req, runtime), new $_model.CreateSmsSignResponse({}));
  }

  /**
   * Generates a text message delivery tag for scenarios where an employee sends a text message to a customer by using a work number. The client calls this operation to obtain the tag and appends it to the end of the message content. The work number platform then parses the actual called number from the tag and delivers the message to the customer.
   * 
   * @param request - CreateSmsSignRequest
   * @returns CreateSmsSignResponse
   */
  async createSmsSign(request: $_model.CreateSmsSignRequest): Promise<$_model.CreateSmsSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSmsSignWithOptions(request, runtime);
  }

  /**
   * Unbind a fixed-line AXB privacy number.
   * 
   * @remarks
   * - After unbinding a fixed-line AXB privacy number from an existing binding, your business continuity may be affected. Proceed with caution.
   * - Before releasing a number, you must unbind the number first.
   * - Unbinding a fixed-line AXB privacy number is supported only through this API. Unbinding through the console is currently not supported.
   * 
   * @param request - DeleteAxbBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAxbBindFixedLineResponse
   */
  async deleteAxbBindFixedLineWithOptions(request: $_model.DeleteAxbBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAxbBindFixedLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAxbBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAxbBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAxbBindFixedLineResponse({}));
  }

  /**
   * Unbind a fixed-line AXB privacy number.
   * 
   * @remarks
   * - After unbinding a fixed-line AXB privacy number from an existing binding, your business continuity may be affected. Proceed with caution.
   * - Before releasing a number, you must unbind the number first.
   * - Unbinding a fixed-line AXB privacy number is supported only through this API. Unbinding through the console is currently not supported.
   * 
   * @param request - DeleteAxbBindFixedLineRequest
   * @returns DeleteAxbBindFixedLineResponse
   */
  async deleteAxbBindFixedLine(request: $_model.DeleteAxbBindFixedLineRequest): Promise<$_model.DeleteAxbBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAxbBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Deletes a G group. G groups are supported only in Number Pools designated for the AXG privacy number type.
   * 
   * @remarks
   * - Deleted G groups cannot be recovered. Proceed with caution.
   * - Before calling this operation, verify the G group to be deleted and the Number Pool it belongs to.
   * - You cannot delete a G group that has active bindings. Before you delete the group, you must unbind the associated AXG privacy number. To do this, log on to the Phone Number Privacy Protection [Console](https://dyplsnext.console.aliyun.com/number/list), go to the **Number Management** page, filter by **AXG privacy number**, and click **Details** > Unbind. Alternatively, you can call the [UnbindSubscription](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-unbindsubscription) API to unbind the number.
   * - When you delete a G group, all phone numbers in the group are also deleted.
   * ### QPS limit
   * The single-user QPS limit for this API is 5,000 requests per second. API calls that exceed this limit are subject to throttling. Plan your API calls accordingly to prevent disruptions to your business.
   * 
   * @param request - DeleteAxgGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAxgGroupResponse
   */
  async deleteAxgGroupWithOptions(request: $_model.DeleteAxgGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAxgGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAxgGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAxgGroupResponse({}));
  }

  /**
   * Deletes a G group. G groups are supported only in Number Pools designated for the AXG privacy number type.
   * 
   * @remarks
   * - Deleted G groups cannot be recovered. Proceed with caution.
   * - Before calling this operation, verify the G group to be deleted and the Number Pool it belongs to.
   * - You cannot delete a G group that has active bindings. Before you delete the group, you must unbind the associated AXG privacy number. To do this, log on to the Phone Number Privacy Protection [Console](https://dyplsnext.console.aliyun.com/number/list), go to the **Number Management** page, filter by **AXG privacy number**, and click **Details** > Unbind. Alternatively, you can call the [UnbindSubscription](https://help.aliyun.com/zh/pnp/developer-reference/api-dyplsapi-2017-05-25-unbindsubscription) API to unbind the number.
   * - When you delete a G group, all phone numbers in the group are also deleted.
   * ### QPS limit
   * The single-user QPS limit for this API is 5,000 requests per second. API calls that exceed this limit are subject to throttling. Plan your API calls accordingly to prevent disruptions to your business.
   * 
   * @param request - DeleteAxgGroupRequest
   * @returns DeleteAxgGroupResponse
   */
  async deleteAxgGroup(request: $_model.DeleteAxgGroupRequest): Promise<$_model.DeleteAxgGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAxgGroupWithOptions(request, runtime);
  }

  /**
   * Unbinds a fixed-line AXN private number binding relationship.
   * 
   * @remarks
   * - After you unbind an existing fixed-line AXN private number binding relationship, your service continuity may be affected. Proceed with caution.
   * - Before releasing a number, unbind the number binding relationship.
   * - Unbinding a fixed-line AXN private number binding relationship is supported only through this API operation. The console does not support this operation.
   * 
   * @param request - DeleteAxnBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAxnBindFixedLineResponse
   */
  async deleteAxnBindFixedLineWithOptions(request: $_model.DeleteAxnBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAxnBindFixedLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAxnBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAxnBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAxnBindFixedLineResponse({}));
  }

  /**
   * Unbinds a fixed-line AXN private number binding relationship.
   * 
   * @remarks
   * - After you unbind an existing fixed-line AXN private number binding relationship, your service continuity may be affected. Proceed with caution.
   * - Before releasing a number, unbind the number binding relationship.
   * - Unbinding a fixed-line AXN private number binding relationship is supported only through this API operation. The console does not support this operation.
   * 
   * @param request - DeleteAxnBindFixedLineRequest
   * @returns DeleteAxnBindFixedLineResponse
   */
  async deleteAxnBindFixedLine(request: $_model.DeleteAxnBindFixedLineRequest): Promise<$_model.DeleteAxnBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAxnBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Unbind a fixed-line AXN extension number binding.
   * 
   * @param request - DeleteAxnExtensionBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAxnExtensionBindFixedLineResponse
   */
  async deleteAxnExtensionBindFixedLineWithOptions(request: $_model.DeleteAxnExtensionBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAxnExtensionBindFixedLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAxnExtensionBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAxnExtensionBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAxnExtensionBindFixedLineResponse({}));
  }

  /**
   * Unbind a fixed-line AXN extension number binding.
   * 
   * @param request - DeleteAxnExtensionBindFixedLineRequest
   * @returns DeleteAxnExtensionBindFixedLineResponse
   */
  async deleteAxnExtensionBindFixedLine(request: $_model.DeleteAxnExtensionBindFixedLineRequest): Promise<$_model.DeleteAxnExtensionBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAxnExtensionBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Delete A-number filing data.
   * 
   * @remarks
   * - This API can only delete A-number filing records whose filing status is either "Reviewed and Passed" or "Review Failed." It does not support deleting A-number filing records with a filing status of "Under Review."
   * - After deleting an A-number filing record, the carrier will immediately impose call restrictions or deactivate the number, which may impact your business continuity. Proceed with caution.
   * 
   * @param request - DeleteSecretAPhoneNoToCustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretAPhoneNoToCustResponse
   */
  async deleteSecretAPhoneNoToCustWithOptions(request: $_model.DeleteSecretAPhoneNoToCustRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretAPhoneNoToCustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ANoWhiteGroupId)) {
      query["ANoWhiteGroupId"] = request.ANoWhiteGroupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecretAPhoneNoToCust",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretAPhoneNoToCustResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretAPhoneNoToCustResponse({}));
  }

  /**
   * Delete A-number filing data.
   * 
   * @remarks
   * - This API can only delete A-number filing records whose filing status is either "Reviewed and Passed" or "Review Failed." It does not support deleting A-number filing records with a filing status of "Under Review."
   * - After deleting an A-number filing record, the carrier will immediately impose call restrictions or deactivate the number, which may impact your business continuity. Proceed with caution.
   * 
   * @param request - DeleteSecretAPhoneNoToCustRequest
   * @returns DeleteSecretAPhoneNoToCustResponse
   */
  async deleteSecretAPhoneNoToCust(request: $_model.DeleteSecretAPhoneNoToCustRequest): Promise<$_model.DeleteSecretAPhoneNoToCustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecretAPhoneNoToCustWithOptions(request, runtime);
  }

  /**
   * Deletes the blacklist of a number pool. Only number pools of the AXN privacy number, AXN extension number, and 95AXN privacy number types support blacklists.
   * 
   * @remarks
   * - This operation is not a batch operation. It supports deleting only one pair of point-to-point blacklist numbers or one number pool blacklist number at a time.
   * - To add a blacklist, call the [AddSecretBlacklist](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-addsecretblacklist) operation.
   * ### QPS limit
   * The QPS limit for a single user is 100 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * 
   * @param request - DeleteSecretBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretBlacklistResponse
   */
  async deleteSecretBlacklistWithOptions(request: $_model.DeleteSecretBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretBlacklistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!$dara.isNull(request.blackType)) {
      query["BlackType"] = request.blackType;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.wayControl)) {
      query["WayControl"] = request.wayControl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecretBlacklist",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretBlacklistResponse({}));
  }

  /**
   * Deletes the blacklist of a number pool. Only number pools of the AXN privacy number, AXN extension number, and 95AXN privacy number types support blacklists.
   * 
   * @remarks
   * - This operation is not a batch operation. It supports deleting only one pair of point-to-point blacklist numbers or one number pool blacklist number at a time.
   * - To add a blacklist, call the [AddSecretBlacklist](https://www.alibabacloud.com/help/en/pnp/developer-reference/api-dyplsapi-2017-05-25-addsecretblacklist) operation.
   * ### QPS limit
   * The QPS limit for a single user is 100 calls per second. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * 
   * @param request - DeleteSecretBlacklistRequest
   * @returns DeleteSecretBlacklistResponse
   */
  async deleteSecretBlacklist(request: $_model.DeleteSecretBlacklistRequest): Promise<$_model.DeleteSecretBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecretBlacklistWithOptions(request, runtime);
  }

  /**
   * Obtain OSS resource configuration information. This configuration information will be used for subsequent OSS image upload operations.
   * 
   * @remarks
   * - When uploading personal filing photos for an A-number mobile phone number, you must upload a clear frontal portrait photo with the face unobscured, and optionally select to upload photos of both sides of your ID card. Uploading these photos helps reviewers understand your personal identity information. Supported formats are PNG, JPG, and JPEG. The image size must not exceed 2 MB.
   * - For the specific operation flow when submitting personal real-name filing for an A-number mobile phone number through the API, see [Submit Personal Real-Name Information for an A-Number Mobile Phone Number via API](https://help.aliyun.com/document_detail/2880077.html).
   * 
   * @param request - GetDyplsOSSInfoForUploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDyplsOSSInfoForUploadFileResponse
   */
  async getDyplsOSSInfoForUploadFileWithOptions(request: $_model.GetDyplsOSSInfoForUploadFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDyplsOSSInfoForUploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDyplsOSSInfoForUploadFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDyplsOSSInfoForUploadFileResponse>(await this.callApi(params, req, runtime), new $_model.GetDyplsOSSInfoForUploadFileResponse({}));
  }

  /**
   * Obtain OSS resource configuration information. This configuration information will be used for subsequent OSS image upload operations.
   * 
   * @remarks
   * - When uploading personal filing photos for an A-number mobile phone number, you must upload a clear frontal portrait photo with the face unobscured, and optionally select to upload photos of both sides of your ID card. Uploading these photos helps reviewers understand your personal identity information. Supported formats are PNG, JPG, and JPEG. The image size must not exceed 2 MB.
   * - For the specific operation flow when submitting personal real-name filing for an A-number mobile phone number through the API, see [Submit Personal Real-Name Information for an A-Number Mobile Phone Number via API](https://help.aliyun.com/document_detail/2880077.html).
   * 
   * @param request - GetDyplsOSSInfoForUploadFileRequest
   * @returns GetDyplsOSSInfoForUploadFileResponse
   */
  async getDyplsOSSInfoForUploadFile(request: $_model.GetDyplsOSSInfoForUploadFileRequest): Promise<$_model.GetDyplsOSSInfoForUploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDyplsOSSInfoForUploadFileWithOptions(request, runtime);
  }

  /**
   * Obtains the details of the automatic speech recognition (ASR) result.
   * 
   * @remarks
   * Before you call the GetSecretAsrDetail operation, set the ASRStatus parameter to true in the [BindAxn operation](https://help.aliyun.com/document_detail/400483.html). This ensures that you can obtain the ASR result properly.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSecretAsrDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretAsrDetailResponse
   */
  async getSecretAsrDetailWithOptions(request: $_model.GetSecretAsrDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretAsrDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecretAsrDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretAsrDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretAsrDetailResponse({}));
  }

  /**
   * Obtains the details of the automatic speech recognition (ASR) result.
   * 
   * @remarks
   * Before you call the GetSecretAsrDetail operation, set the ASRStatus parameter to true in the [BindAxn operation](https://help.aliyun.com/document_detail/400483.html). This ensures that you can obtain the ASR result properly.
   * ### [](#qps)QPS limits
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetSecretAsrDetailRequest
   * @returns GetSecretAsrDetailResponse
   */
  async getSecretAsrDetail(request: $_model.GetSecretAsrDetailRequest): Promise<$_model.GetSecretAsrDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretAsrDetailWithOptions(request, runtime);
  }

  /**
   * Obtains the download URL of a recorded ringing tone.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetTotalPublicUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTotalPublicUrlResponse
   */
  async getTotalPublicUrlWithOptions(request: $_model.GetTotalPublicUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTotalPublicUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!$dara.isNull(request.checkSubs)) {
      query["CheckSubs"] = request.checkSubs;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.partnerKey)) {
      query["PartnerKey"] = request.partnerKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTotalPublicUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTotalPublicUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetTotalPublicUrlResponse({}));
  }

  /**
   * Obtains the download URL of a recorded ringing tone.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetTotalPublicUrlRequest
   * @returns GetTotalPublicUrlResponse
   */
  async getTotalPublicUrl(request: $_model.GetTotalPublicUrlRequest): Promise<$_model.GetTotalPublicUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTotalPublicUrlWithOptions(request, runtime);
  }

  /**
   * Retrieves the configuration information of the X number.
   * 
   * @param request - GetXConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetXConfigResponse
   */
  async getXConfigWithOptions(request: $_model.GetXConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetXConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetXConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetXConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetXConfigResponse({}));
  }

  /**
   * Retrieves the configuration information of the X number.
   * 
   * @param request - GetXConfigRequest
   * @returns GetXConfigResponse
   */
  async getXConfig(request: $_model.GetXConfigRequest): Promise<$_model.GetXConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getXConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the default configurations of an X number.
   * 
   * @param request - GetXDefaultConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetXDefaultConfigResponse
   */
  async getXDefaultConfigWithOptions(request: $_model.GetXDefaultConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetXDefaultConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetXDefaultConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetXDefaultConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetXDefaultConfigResponse({}));
  }

  /**
   * Retrieves the default configurations of an X number.
   * 
   * @param request - GetXDefaultConfigRequest
   * @returns GetXDefaultConfigResponse
   */
  async getXDefaultConfig(request: $_model.GetXDefaultConfigRequest): Promise<$_model.GetXDefaultConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getXDefaultConfigWithOptions(request, runtime);
  }

  /**
   * Queries the list of X numbers under a customer account.
   * 
   * @param request - ListXTelephonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListXTelephonesResponse
   */
  async listXTelephonesWithOptions(request: $_model.ListXTelephonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListXTelephonesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListXTelephones",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListXTelephonesResponse>(await this.callApi(params, req, runtime), new $_model.ListXTelephonesResponse({}));
  }

  /**
   * Queries the list of X numbers under a customer account.
   * 
   * @param request - ListXTelephonesRequest
   * @returns ListXTelephonesResponse
   */
  async listXTelephones(request: $_model.ListXTelephonesRequest): Promise<$_model.ListXTelephonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listXTelephonesWithOptions(request, runtime);
  }

  /**
   * Locks a phone number.
   * 
   * @remarks
   * After a phone number is locked, the locked phone number cannot be selected when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - LockSecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LockSecretNoResponse
   */
  async lockSecretNoWithOptions(request: $_model.LockSecretNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LockSecretNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LockSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LockSecretNoResponse>(await this.callApi(params, req, runtime), new $_model.LockSecretNoResponse({}));
  }

  /**
   * Locks a phone number.
   * 
   * @remarks
   * After a phone number is locked, the locked phone number cannot be selected when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - LockSecretNoRequest
   * @returns LockSecretNoResponse
   */
  async lockSecretNo(request: $_model.LockSecretNoRequest): Promise<$_model.LockSecretNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.lockSecretNoWithOptions(request, runtime);
  }

  /**
   * Modifies number group G.
   * 
   * @remarks
   * After you create number group G, you can call the OperateAxgGroup operation to modify number group G. For example, you can add phone numbers to number group G, delete phone numbers from number group G, and replace all phone numbers in number group G.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateAxgGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateAxgGroupResponse
   */
  async operateAxgGroupWithOptions(request: $_model.OperateAxgGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateAxgGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.numbers)) {
      query["Numbers"] = request.numbers;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateAxgGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateAxgGroupResponse>(await this.callApi(params, req, runtime), new $_model.OperateAxgGroupResponse({}));
  }

  /**
   * Modifies number group G.
   * 
   * @remarks
   * After you create number group G, you can call the OperateAxgGroup operation to modify number group G. For example, you can add phone numbers to number group G, delete phone numbers from number group G, and replace all phone numbers in number group G.
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateAxgGroupRequest
   * @returns OperateAxgGroupResponse
   */
  async operateAxgGroup(request: $_model.OperateAxgGroupRequest): Promise<$_model.OperateAxgGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateAxgGroupWithOptions(request, runtime);
  }

  /**
   * Adds a phone number to a blacklist or deletes a phone number from a blacklist.
   * 
   * @remarks
   * The OperateBlackNo operation supports the following number pool types: AXN, AXN extension, and 95AXN.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateBlackNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateBlackNoResponse
   */
  async operateBlackNoWithOptions(request: $_model.OperateBlackNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateBlackNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blackNo)) {
      query["BlackNo"] = request.blackNo;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tips)) {
      query["Tips"] = request.tips;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateBlackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateBlackNoResponse>(await this.callApi(params, req, runtime), new $_model.OperateBlackNoResponse({}));
  }

  /**
   * Adds a phone number to a blacklist or deletes a phone number from a blacklist.
   * 
   * @remarks
   * The OperateBlackNo operation supports the following number pool types: AXN, AXN extension, and 95AXN.
   * ### [](#qps)QPS limits
   * You can call this operation up to 1,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - OperateBlackNoRequest
   * @returns OperateBlackNoResponse
   */
  async operateBlackNo(request: $_model.OperateBlackNoRequest): Promise<$_model.OperateBlackNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateBlackNoWithOptions(request, runtime);
  }

  /**
   * Queries the binding information of an AXB landline privacy number.
   * 
   * @param request - QueryAxbBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAxbBindFixedLineResponse
   */
  async queryAxbBindFixedLineWithOptions(request: $_model.QueryAxbBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAxbBindFixedLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAxbBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAxbBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.QueryAxbBindFixedLineResponse({}));
  }

  /**
   * Queries the binding information of an AXB landline privacy number.
   * 
   * @param request - QueryAxbBindFixedLineRequest
   * @returns QueryAxbBindFixedLineResponse
   */
  async queryAxbBindFixedLine(request: $_model.QueryAxbBindFixedLineRequest): Promise<$_model.QueryAxbBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAxbBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Queries the binding information of an AXN landline privacy number.
   * 
   * @param request - QueryAxnBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAxnBindFixedLineResponse
   */
  async queryAxnBindFixedLineWithOptions(request: $_model.QueryAxnBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAxnBindFixedLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAxnBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAxnBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.QueryAxnBindFixedLineResponse({}));
  }

  /**
   * Queries the binding information of an AXN landline privacy number.
   * 
   * @param request - QueryAxnBindFixedLineRequest
   * @returns QueryAxnBindFixedLineResponse
   */
  async queryAxnBindFixedLine(request: $_model.QueryAxnBindFixedLineRequest): Promise<$_model.QueryAxnBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAxnBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Queries the binding information of a landline AXN extension number.
   * 
   * @param request - QueryAxnExtensionBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAxnExtensionBindFixedLineResponse
   */
  async queryAxnExtensionBindFixedLineWithOptions(request: $_model.QueryAxnExtensionBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAxnExtensionBindFixedLineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAxnExtensionBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAxnExtensionBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.QueryAxnExtensionBindFixedLineResponse({}));
  }

  /**
   * Queries the binding information of a landline AXN extension number.
   * 
   * @param request - QueryAxnExtensionBindFixedLineRequest
   * @returns QueryAxnExtensionBindFixedLineResponse
   */
  async queryAxnExtensionBindFixedLine(request: $_model.QueryAxnExtensionBindFixedLineRequest): Promise<$_model.QueryAxnExtensionBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAxnExtensionBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Queries the details about a tracking number.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneNoAByTrackNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneNoAByTrackNoResponse
   */
  async queryPhoneNoAByTrackNoWithOptions(request: $_model.QueryPhoneNoAByTrackNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPhoneNoAByTrackNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cabinetNo)) {
      query["CabinetNo"] = request.cabinetNo;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.trackNo)) {
      query["trackNo"] = request.trackNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPhoneNoAByTrackNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPhoneNoAByTrackNoResponse>(await this.callApi(params, req, runtime), new $_model.QueryPhoneNoAByTrackNoResponse({}));
  }

  /**
   * Queries the details about a tracking number.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 5,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneNoAByTrackNoRequest
   * @returns QueryPhoneNoAByTrackNoResponse
   */
  async queryPhoneNoAByTrackNo(request: $_model.QueryPhoneNoAByTrackNoRequest): Promise<$_model.QueryPhoneNoAByTrackNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPhoneNoAByTrackNoWithOptions(request, runtime);
  }

  /**
   * Obtains the download URL of a recording file.
   * 
   * @remarks
   * If the recording feature is enabled for a binding, all calls made by the bound phone numbers are recorded. You can obtain the download URL of a recording file by calling the QueryRecordFileDownloadUrl operation and download the recording file.
   * >  We recommend that you subscribe to [the recording status report SecretRecording](https://help.aliyun.com/document_detail/109198.html). The values of the response parameters in SecretRecording can be used as the values of the request parameters for downloading a recording file.
   * ### [](#)Procedure for obtaining a recording file
   * 1.  Specify the request parameter in an update or binding operation to enable the recording feature.
   * 2.  Subscribe to recording message receipts in the Phone Number Protection console.
   * 3.  After a recording message receipt is returned, call the QueryRecordFileDownloadUrl operation to obtain the download URL of the recording file, and download the recording file.
   * > 
   * *   A download URL is valid for 2 hours. Download the recording file as soon as possible after obtaining a download URL.
   * *   The storage period of recording files is 30 days. You can download only the recording files of calls recorded in the last 30 days.
   * 
   * @param request - QueryRecordFileDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecordFileDownloadUrlResponse
   */
  async queryRecordFileDownloadUrlWithOptions(request: $_model.QueryRecordFileDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecordFileDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.callTime)) {
      query["CallTime"] = request.callTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecordFileDownloadUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecordFileDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecordFileDownloadUrlResponse({}));
  }

  /**
   * Obtains the download URL of a recording file.
   * 
   * @remarks
   * If the recording feature is enabled for a binding, all calls made by the bound phone numbers are recorded. You can obtain the download URL of a recording file by calling the QueryRecordFileDownloadUrl operation and download the recording file.
   * >  We recommend that you subscribe to [the recording status report SecretRecording](https://help.aliyun.com/document_detail/109198.html). The values of the response parameters in SecretRecording can be used as the values of the request parameters for downloading a recording file.
   * ### [](#)Procedure for obtaining a recording file
   * 1.  Specify the request parameter in an update or binding operation to enable the recording feature.
   * 2.  Subscribe to recording message receipts in the Phone Number Protection console.
   * 3.  After a recording message receipt is returned, call the QueryRecordFileDownloadUrl operation to obtain the download URL of the recording file, and download the recording file.
   * > 
   * *   A download URL is valid for 2 hours. Download the recording file as soon as possible after obtaining a download URL.
   * *   The storage period of recording files is 30 days. You can download only the recording files of calls recorded in the last 30 days.
   * 
   * @param request - QueryRecordFileDownloadUrlRequest
   * @returns QueryRecordFileDownloadUrlResponse
   */
  async queryRecordFileDownloadUrl(request: $_model.QueryRecordFileDownloadUrlRequest): Promise<$_model.QueryRecordFileDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecordFileDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Query the reporting status of an A number.
   * 
   * @remarks
   * Before you invoke this API to query the reporting status of an A number, you must first submit the real-name information for the mobile or landline A number by calling the [CreatePhoneNoAReport](https://help.aliyun.com/document_detail/2880908.html) or [CreateFixedNoAReport](https://help.aliyun.com/document_detail/2881429.html) API. For detailed instructions, see [Submit real-name information for an A number via API](https://help.aliyun.com/document_detail/2880077.html).
   * 
   * @param request - QuerySecretAPhoneNoToCustRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecretAPhoneNoToCustResponse
   */
  async querySecretAPhoneNoToCustWithOptions(request: $_model.QuerySecretAPhoneNoToCustRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySecretAPhoneNoToCustResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ANoWhiteGroupId)) {
      query["ANoWhiteGroupId"] = request.ANoWhiteGroupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySecretAPhoneNoToCust",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySecretAPhoneNoToCustResponse>(await this.callApi(params, req, runtime), new $_model.QuerySecretAPhoneNoToCustResponse({}));
  }

  /**
   * Query the reporting status of an A number.
   * 
   * @remarks
   * Before you invoke this API to query the reporting status of an A number, you must first submit the real-name information for the mobile or landline A number by calling the [CreatePhoneNoAReport](https://help.aliyun.com/document_detail/2880908.html) or [CreateFixedNoAReport](https://help.aliyun.com/document_detail/2881429.html) API. For detailed instructions, see [Submit real-name information for an A number via API](https://help.aliyun.com/document_detail/2880077.html).
   * 
   * @param request - QuerySecretAPhoneNoToCustRequest
   * @returns QuerySecretAPhoneNoToCustResponse
   */
  async querySecretAPhoneNoToCust(request: $_model.QuerySecretAPhoneNoToCustRequest): Promise<$_model.QuerySecretAPhoneNoToCustResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecretAPhoneNoToCustWithOptions(request, runtime);
  }

  /**
   * Queries the property information of a private number.
   * 
   * @remarks
   * - You can query information about a private number (X number), including the purchase time, carrier, province, city, and status.
   * - Before you call this operation, make sure that you have the private number (X number) that you want to query.
   * ### QPS limit
   * The single-user QPS limit for this operation is 1,000 calls per second. If the limit is exceeded, the API call is throttled. Call this operation properly.
   * 
   * @param request - QuerySecretNoDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecretNoDetailResponse
   */
  async querySecretNoDetailWithOptions(request: $_model.QuerySecretNoDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySecretNoDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySecretNoDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySecretNoDetailResponse>(await this.callApi(params, req, runtime), new $_model.QuerySecretNoDetailResponse({}));
  }

  /**
   * Queries the property information of a private number.
   * 
   * @remarks
   * - You can query information about a private number (X number), including the purchase time, carrier, province, city, and status.
   * - Before you call this operation, make sure that you have the private number (X number) that you want to query.
   * ### QPS limit
   * The single-user QPS limit for this operation is 1,000 calls per second. If the limit is exceeded, the API call is throttled. Call this operation properly.
   * 
   * @param request - QuerySecretNoDetailRequest
   * @returns QuerySecretNoDetailResponse
   */
  async querySecretNoDetail(request: $_model.QuerySecretNoDetailRequest): Promise<$_model.QuerySecretNoDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecretNoDetailWithOptions(request, runtime);
  }

  /**
   * Queries the quantity of remaining phone numbers available for online purchase.
   * 
   * @remarks
   * When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before calling the [BuySecretNo](~~BuySecretNo~~) operation to purchase a phone number, call the [QuerySecretNoRemain](~~QuerySecretNoRemain~~) operation to query the quantity of remaining phone numbers available for online purchase.
   * 
   * @param request - QuerySecretNoRemainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecretNoRemainResponse
   */
  async querySecretNoRemainWithOptions(request: $_model.QuerySecretNoRemainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySecretNoRemainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!$dara.isNull(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySecretNoRemain",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySecretNoRemainResponse>(await this.callApi(params, req, runtime), new $_model.QuerySecretNoRemainResponse({}));
  }

  /**
   * Queries the quantity of remaining phone numbers available for online purchase.
   * 
   * @remarks
   * When purchasing a phone number, specify the home location. If no sufficient phone numbers are available for purchase in the home location, the purchase of the phone number fails. Before calling the [BuySecretNo](~~BuySecretNo~~) operation to purchase a phone number, call the [QuerySecretNoRemain](~~QuerySecretNoRemain~~) operation to query the quantity of remaining phone numbers available for online purchase.
   * 
   * @param request - QuerySecretNoRemainRequest
   * @returns QuerySecretNoRemainResponse
   */
  async querySecretNoRemain(request: $_model.QuerySecretNoRemainRequest): Promise<$_model.QuerySecretNoRemainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecretNoRemainWithOptions(request, runtime);
  }

  /**
   * 对客分页查询指定迁移记录的明细，记录的来源与目标号池须均归属 aliUid。
   * 
   * @param request - QuerySecretTransferDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecretTransferDetailsResponse
   */
  async querySecretTransferDetailsWithOptions(request: $_model.QuerySecretTransferDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySecretTransferDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySecretTransferDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySecretTransferDetailsResponse>(await this.callApi(params, req, runtime), new $_model.QuerySecretTransferDetailsResponse({}));
  }

  /**
   * 对客分页查询指定迁移记录的明细，记录的来源与目标号池须均归属 aliUid。
   * 
   * @param request - QuerySecretTransferDetailsRequest
   * @returns QuerySecretTransferDetailsResponse
   */
  async querySecretTransferDetails(request: $_model.QuerySecretTransferDetailsRequest): Promise<$_model.QuerySecretTransferDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecretTransferDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the downloadable URL of a call recording by call ID.
   * 
   * @param request - QuerySoundRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySoundRecordResponse
   */
  async querySoundRecordWithOptions(request: $_model.QuerySoundRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySoundRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySoundRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySoundRecordResponse>(await this.callApi(params, req, runtime), new $_model.QuerySoundRecordResponse({}));
  }

  /**
   * Queries the downloadable URL of a call recording by call ID.
   * 
   * @param request - QuerySoundRecordRequest
   * @returns QuerySoundRecordResponse
   */
  async querySoundRecord(request: $_model.QuerySoundRecordRequest): Promise<$_model.QuerySoundRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySoundRecordWithOptions(request, runtime);
  }

  /**
   * Queries binding IDs.
   * 
   * @remarks
   * You can query binding IDs by phone number X. In the AXB product, multiple bindings may exist for the same phone number X. In this case, multiple binding IDs may be obtained for the same phone number X.
   * 
   * @param request - QuerySubsIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySubsIdResponse
   */
  async querySubsIdWithOptions(request: $_model.QuerySubsIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySubsIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySubsId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySubsIdResponse>(await this.callApi(params, req, runtime), new $_model.QuerySubsIdResponse({}));
  }

  /**
   * Queries binding IDs.
   * 
   * @remarks
   * You can query binding IDs by phone number X. In the AXB product, multiple bindings may exist for the same phone number X. In this case, multiple binding IDs may be obtained for the same phone number X.
   * 
   * @param request - QuerySubsIdRequest
   * @returns QuerySubsIdResponse
   */
  async querySubsId(request: $_model.QuerySubsIdRequest): Promise<$_model.QuerySubsIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySubsIdWithOptions(request, runtime);
  }

  /**
   * Queries the binding details of a phone number. Retrieves information such as the binding relationship status, extension number, recording status, and ASR status.
   * 
   * @remarks
   * Before you call this operation, make sure that you have the private number (X number) to query and that the number has a binding relationship.
   * ### QPS limit 
   * The queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * ### PoolKey and ProductType limit
   * Specify at least one of the PoolKey and ProductType parameters. If neither parameter is specified, an error is returned.
   * Former Alibaba Dayu users should specify the ProductType parameter, and Alibaba Cloud users should specify the PoolKey parameter.
   * 
   * @param request - QuerySubscriptionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySubscriptionDetailResponse
   */
  async querySubscriptionDetailWithOptions(request: $_model.QuerySubscriptionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySubscriptionDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySubscriptionDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySubscriptionDetailResponse>(await this.callApi(params, req, runtime), new $_model.QuerySubscriptionDetailResponse({}));
  }

  /**
   * Queries the binding details of a phone number. Retrieves information such as the binding relationship status, extension number, recording status, and ASR status.
   * 
   * @remarks
   * Before you call this operation, make sure that you have the private number (X number) to query and that the number has a binding relationship.
   * ### QPS limit 
   * The queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, API calls are throttled, which may affect your business. Call this operation at a reasonable frequency.
   * ### PoolKey and ProductType limit
   * Specify at least one of the PoolKey and ProductType parameters. If neither parameter is specified, an error is returned.
   * Former Alibaba Dayu users should specify the ProductType parameter, and Alibaba Cloud users should specify the PoolKey parameter.
   * 
   * @param request - QuerySubscriptionDetailRequest
   * @returns QuerySubscriptionDetailResponse
   */
  async querySubscriptionDetail(request: $_model.QuerySubscriptionDetailRequest): Promise<$_model.QuerySubscriptionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySubscriptionDetailWithOptions(request, runtime);
  }

  /**
   * Releases a phone number.
   * 
   * @remarks
   *   After a phone number is released, it will no longer be charged from the following month.
   * *   Before you release a phone number, log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) to check whether the phone number is bound to other phone numbers. The phone number can be released only if it is not bound to other phone numbers.
   * 
   * @param request - ReleaseSecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseSecretNoResponse
   */
  async releaseSecretNoWithOptions(request: $_model.ReleaseSecretNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseSecretNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseSecretNoResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseSecretNoResponse({}));
  }

  /**
   * Releases a phone number.
   * 
   * @remarks
   *   After a phone number is released, it will no longer be charged from the following month.
   * *   Before you release a phone number, log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) to check whether the phone number is bound to other phone numbers. The phone number can be released only if it is not bound to other phone numbers.
   * 
   * @param request - ReleaseSecretNoRequest
   * @returns ReleaseSecretNoResponse
   */
  async releaseSecretNo(request: $_model.ReleaseSecretNoRequest): Promise<$_model.ReleaseSecretNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseSecretNoWithOptions(request, runtime);
  }

  /**
   * Dissociates a specified call binding relationship (A, X, and B). After the call binding relationship is dissociated, Employee B cannot call Customer A through Work Number X.
   * 
   * @param request - UnBindAXBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnBindAXBResponse
   */
  async unBindAXBWithOptions(request: $_model.UnBindAXBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnBindAXBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindId)) {
      query["BindId"] = request.bindId;
    }

    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnBindAXB",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnBindAXBResponse>(await this.callApi(params, req, runtime), new $_model.UnBindAXBResponse({}));
  }

  /**
   * Dissociates a specified call binding relationship (A, X, and B). After the call binding relationship is dissociated, Employee B cannot call Customer A through Work Number X.
   * 
   * @param request - UnBindAXBRequest
   * @returns UnBindAXBResponse
   */
  async unBindAXB(request: $_model.UnBindAXBRequest): Promise<$_model.UnBindAXBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unBindAXBWithOptions(request, runtime);
  }

  /**
   * Cancels the binding between work number X and employee number B. After the binding is canceled, calls to X are no longer forwarded to B.
   * 
   * @param request - UnBindXBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnBindXBResponse
   */
  async unBindXBWithOptions(request: $_model.UnBindXBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnBindXBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authId)) {
      query["AuthId"] = request.authId;
    }

    if (!$dara.isNull(request.callerParentId)) {
      query["CallerParentId"] = request.callerParentId;
    }

    if (!$dara.isNull(request.customerPoolKey)) {
      query["CustomerPoolKey"] = request.customerPoolKey;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnBindXB",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnBindXBResponse>(await this.callApi(params, req, runtime), new $_model.UnBindXBResponse({}));
  }

  /**
   * Cancels the binding between work number X and employee number B. After the binding is canceled, calls to X are no longer forwarded to B.
   * 
   * @param request - UnBindXBRequest
   * @returns UnBindXBResponse
   */
  async unBindXB(request: $_model.UnBindXBRequest): Promise<$_model.UnBindXBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unBindXBWithOptions(request, runtime);
  }

  /**
   * Unbinds a 700 number.
   * 
   * @param request - UnbindSubs700Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindSubs700Response
   */
  async unbindSubs700WithOptions(request: $_model.UnbindSubs700Request, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindSubs700Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.industrialId)) {
      query["IndustrialId"] = request.industrialId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindSubs700",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindSubs700Response>(await this.callApi(params, req, runtime), new $_model.UnbindSubs700Response({}));
  }

  /**
   * Unbinds a 700 number.
   * 
   * @param request - UnbindSubs700Request
   * @returns UnbindSubs700Response
   */
  async unbindSubs700(request: $_model.UnbindSubs700Request): Promise<$_model.UnbindSubs700Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindSubs700WithOptions(request, runtime);
  }

  /**
   * Unbinds a phone number.
   * 
   * @remarks
   * Before releasing a phone number, you must call the UnbindSubscription operation to unbind the phone number.
   * 
   * @param request - UnbindSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindSubscriptionResponse
   */
  async unbindSubscriptionWithOptions(request: $_model.UnbindSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    if (!$dara.isNull(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindSubscription",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.UnbindSubscriptionResponse({}));
  }

  /**
   * Unbinds a phone number.
   * 
   * @remarks
   * Before releasing a phone number, you must call the UnbindSubscription operation to unbind the phone number.
   * 
   * @param request - UnbindSubscriptionRequest
   * @returns UnbindSubscriptionResponse
   */
  async unbindSubscription(request: $_model.UnbindSubscriptionRequest): Promise<$_model.UnbindSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindSubscriptionWithOptions(request, runtime);
  }

  /**
   * Unlocks a phone number.
   * 
   * @remarks
   * After a phone number is unlocked, you can reselect the unlocked phone number when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnlockSecretNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockSecretNoResponse
   */
  async unlockSecretNoWithOptions(request: $_model.UnlockSecretNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnlockSecretNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secretNo)) {
      query["SecretNo"] = request.secretNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnlockSecretNo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnlockSecretNoResponse>(await this.callApi(params, req, runtime), new $_model.UnlockSecretNoResponse({}));
  }

  /**
   * Unlocks a phone number.
   * 
   * @remarks
   * After a phone number is unlocked, you can reselect the unlocked phone number when you call an operation to create a binding.
   * ### [](#qps)QPS limits
   * You can call this operation up to 500 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UnlockSecretNoRequest
   * @returns UnlockSecretNoResponse
   */
  async unlockSecretNo(request: $_model.UnlockSecretNoRequest): Promise<$_model.UnlockSecretNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unlockSecretNoWithOptions(request, runtime);
  }

  /**
   * Updates the binding information of an AXB privacy number for landlines.
   * 
   * @remarks
   * When you update an AXB privacy number for landlines, you cannot modify Number A and Number B at the same time. For example, if the original binding relationship is A1 and B1, you can change it to A1 and B2, or A2 and B1.
   * 
   * @param tmpReq - UpdateAxbBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAxbBindFixedLineResponse
   */
  async updateAxbBindFixedLineWithOptions(tmpReq: $_model.UpdateAxbBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAxbBindFixedLineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAxbBindFixedLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anucode)) {
      query["Anucode"] = request.anucode;
    }

    if (!$dara.isNull(request.anucodecalled)) {
      query["Anucodecalled"] = request.anucodecalled;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extraShrink)) {
      query["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.subts)) {
      query["Subts"] = request.subts;
    }

    if (!$dara.isNull(request.TAnucodeConnect)) {
      query["TAnucodeConnect"] = request.TAnucodeConnect;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAxbBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAxbBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAxbBindFixedLineResponse({}));
  }

  /**
   * Updates the binding information of an AXB privacy number for landlines.
   * 
   * @remarks
   * When you update an AXB privacy number for landlines, you cannot modify Number A and Number B at the same time. For example, if the original binding relationship is A1 and B1, you can change it to A1 and B2, or A2 and B1.
   * 
   * @param request - UpdateAxbBindFixedLineRequest
   * @returns UpdateAxbBindFixedLineResponse
   */
  async updateAxbBindFixedLine(request: $_model.UpdateAxbBindFixedLineRequest): Promise<$_model.UpdateAxbBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAxbBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Updates the binding information of a landline AXN privacy number.
   * 
   * @param tmpReq - UpdateAxnBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAxnBindFixedLineResponse
   */
  async updateAxnBindFixedLineWithOptions(tmpReq: $_model.UpdateAxnBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAxnBindFixedLineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAxnBindFixedLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extra)) {
      request.extraShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extra, "Extra", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anucode)) {
      query["Anucode"] = request.anucode;
    }

    if (!$dara.isNull(request.anucodecalled)) {
      query["Anucodecalled"] = request.anucodecalled;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extraShrink)) {
      query["Extra"] = request.extraShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.subts)) {
      query["Subts"] = request.subts;
    }

    if (!$dara.isNull(request.TAnucodeConnect)) {
      query["TAnucodeConnect"] = request.TAnucodeConnect;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAxnBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAxnBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAxnBindFixedLineResponse({}));
  }

  /**
   * Updates the binding information of a landline AXN privacy number.
   * 
   * @param request - UpdateAxnBindFixedLineRequest
   * @returns UpdateAxnBindFixedLineResponse
   */
  async updateAxnBindFixedLine(request: $_model.UpdateAxnBindFixedLineRequest): Promise<$_model.UpdateAxnBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAxnBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Updates the binding relationship of a landline AXN extension number.
   * 
   * @param tmpReq - UpdateAxnExtensionBindFixedLineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAxnExtensionBindFixedLineResponse
   */
  async updateAxnExtensionBindFixedLineWithOptions(tmpReq: $_model.UpdateAxnExtensionBindFixedLineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAxnExtensionBindFixedLineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAxnExtensionBindFixedLineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extraaxx)) {
      request.extraaxxShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extraaxx, "Extraaxx", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anucode)) {
      query["Anucode"] = request.anucode;
    }

    if (!$dara.isNull(request.anucodecalled)) {
      query["Anucodecalled"] = request.anucodecalled;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.extraaxxShrink)) {
      query["Extraaxx"] = request.extraaxxShrink;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subId)) {
      query["SubId"] = request.subId;
    }

    if (!$dara.isNull(request.subts)) {
      query["Subts"] = request.subts;
    }

    if (!$dara.isNull(request.TAnucodeConnect)) {
      query["TAnucodeConnect"] = request.TAnucodeConnect;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.ts)) {
      query["Ts"] = request.ts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAxnExtensionBindFixedLine",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAxnExtensionBindFixedLineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAxnExtensionBindFixedLineResponse({}));
  }

  /**
   * Updates the binding relationship of a landline AXN extension number.
   * 
   * @param request - UpdateAxnExtensionBindFixedLineRequest
   * @returns UpdateAxnExtensionBindFixedLineResponse
   */
  async updateAxnExtensionBindFixedLine(request: $_model.UpdateAxnExtensionBindFixedLineRequest): Promise<$_model.UpdateAxnExtensionBindFixedLineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAxnExtensionBindFixedLineWithOptions(request, runtime);
  }

  /**
   * Modifies the binding relationship of a 700 number.
   * 
   * @param request - UpdateSubs700Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubs700Response
   */
  async updateSubs700WithOptions(request: $_model.UpdateSubs700Request, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubs700Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.audio)) {
      query["Audio"] = request.audio;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.defaultA)) {
      query["DefaultA"] = request.defaultA;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.industrialId)) {
      query["IndustrialId"] = request.industrialId;
    }

    if (!$dara.isNull(request.needAsr)) {
      query["NeedAsr"] = request.needAsr;
    }

    if (!$dara.isNull(request.needRecord)) {
      query["NeedRecord"] = request.needRecord;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    if (!$dara.isNull(request.telA)) {
      query["TelA"] = request.telA;
    }

    if (!$dara.isNull(request.telB)) {
      query["TelB"] = request.telB;
    }

    if (!$dara.isNull(request.telX)) {
      query["TelX"] = request.telX;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubs700",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubs700Response>(await this.callApi(params, req, runtime), new $_model.UpdateSubs700Response({}));
  }

  /**
   * Modifies the binding relationship of a 700 number.
   * 
   * @param request - UpdateSubs700Request
   * @returns UpdateSubs700Response
   */
  async updateSubs700(request: $_model.UpdateSubs700Request): Promise<$_model.UpdateSubs700Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubs700WithOptions(request, runtime);
  }

  /**
   * Modifies a phone number binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 10,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscriptionWithOptions(request: $_model.UpdateSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubscriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ASRModelId)) {
      query["ASRModelId"] = request.ASRModelId;
    }

    if (!$dara.isNull(request.ASRStatus)) {
      query["ASRStatus"] = request.ASRStatus;
    }

    if (!$dara.isNull(request.callDisplayType)) {
      query["CallDisplayType"] = request.callDisplayType;
    }

    if (!$dara.isNull(request.callRestrict)) {
      query["CallRestrict"] = request.callRestrict;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isRecordingEnabled)) {
      query["IsRecordingEnabled"] = request.isRecordingEnabled;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNoA)) {
      query["PhoneNoA"] = request.phoneNoA;
    }

    if (!$dara.isNull(request.phoneNoB)) {
      query["PhoneNoB"] = request.phoneNoB;
    }

    if (!$dara.isNull(request.phoneNoX)) {
      query["PhoneNoX"] = request.phoneNoX;
    }

    if (!$dara.isNull(request.poolKey)) {
      query["PoolKey"] = request.poolKey;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ringConfig)) {
      query["RingConfig"] = request.ringConfig;
    }

    if (!$dara.isNull(request.subsId)) {
      query["SubsId"] = request.subsId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubscription",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubscriptionResponse({}));
  }

  /**
   * Modifies a phone number binding.
   * 
   * @remarks
   * ### [](#qps)QPS limits
   * You can call this operation up to 10,000 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: $_model.UpdateSubscriptionRequest): Promise<$_model.UpdateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

}
