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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cams", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a phone number for a WhatsApp Business account (WABA).
   * 
   * @param request - AddChatappPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddChatappPhoneNumberResponse
   */
  async addChatappPhoneNumberWithOptions(request: $_model.AddChatappPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddChatappPhoneNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cc)) {
      query["Cc"] = request.cc;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.preValidateId)) {
      query["PreValidateId"] = request.preValidateId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.verifiedName)) {
      query["VerifiedName"] = request.verifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddChatappPhoneNumber",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddChatappPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.AddChatappPhoneNumberResponse({}));
  }

  /**
   * Adds a phone number for a WhatsApp Business account (WABA).
   * 
   * @param request - AddChatappPhoneNumberRequest
   * @returns AddChatappPhoneNumberResponse
   */
  async addChatappPhoneNumber(request: $_model.AddChatappPhoneNumberRequest): Promise<$_model.AddChatappPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addChatappPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Associates FAQs in the knowledge base.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - BeeBotAssociateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeeBotAssociateResponse
   */
  async beeBotAssociateWithOptions(tmpReq: $_model.BeeBotAssociateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BeeBotAssociateResponse> {
    tmpReq.validate();
    let request = new $_model.BeeBotAssociateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatBotInstanceId)) {
      body["ChatBotInstanceId"] = request.chatBotInstanceId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.perspectiveShrink)) {
      body["Perspective"] = request.perspectiveShrink;
    }

    if (!$dara.isNull(request.recommendNum)) {
      body["RecommendNum"] = request.recommendNum;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      body["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeeBotAssociate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BeeBotAssociateResponse>(await this.callApi(params, req, runtime), new $_model.BeeBotAssociateResponse({}));
  }

  /**
   * Associates FAQs in the knowledge base.
   * 
   * @remarks
   * You can call this operation up to 100 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - BeeBotAssociateRequest
   * @returns BeeBotAssociateResponse
   */
  async beeBotAssociate(request: $_model.BeeBotAssociateRequest): Promise<$_model.BeeBotAssociateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beeBotAssociateWithOptions(request, runtime);
  }

  /**
   * Conducts sessions with the bot based on its unique identifier (ID).
   * 
   * @remarks
   * The ID of the session.
   * 
   * @param tmpReq - BeeBotChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeeBotChatResponse
   */
  async beeBotChatWithOptions(tmpReq: $_model.BeeBotChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BeeBotChatResponse> {
    tmpReq.validate();
    let request = new $_model.BeeBotChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.perspective)) {
      request.perspectiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.perspective, "Perspective", "json");
    }

    if (!$dara.isNull(tmpReq.vendorParam)) {
      request.vendorParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vendorParam, "VendorParam", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chatBotInstanceId)) {
      body["ChatBotInstanceId"] = request.chatBotInstanceId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.intentName)) {
      body["IntentName"] = request.intentName;
    }

    if (!$dara.isNull(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.knowledgeId)) {
      body["KnowledgeId"] = request.knowledgeId;
    }

    if (!$dara.isNull(request.perspectiveShrink)) {
      body["Perspective"] = request.perspectiveShrink;
    }

    if (!$dara.isNull(request.senderId)) {
      body["SenderId"] = request.senderId;
    }

    if (!$dara.isNull(request.senderNick)) {
      body["SenderNick"] = request.senderNick;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      body["Utterance"] = request.utterance;
    }

    if (!$dara.isNull(request.vendorParamShrink)) {
      body["VendorParam"] = request.vendorParamShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeeBotChat",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BeeBotChatResponse>(await this.callApi(params, req, runtime), new $_model.BeeBotChatResponse({}));
  }

  /**
   * Conducts sessions with the bot based on its unique identifier (ID).
   * 
   * @remarks
   * The ID of the session.
   * 
   * @param request - BeeBotChatRequest
   * @returns BeeBotChatResponse
   */
  async beeBotChat(request: $_model.BeeBotChatRequest): Promise<$_model.BeeBotChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beeBotChatWithOptions(request, runtime);
  }

  /**
   * Binds the WhatsApp Business account with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappBindWabaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappBindWabaResponse
   */
  async chatappBindWabaWithOptions(request: $_model.ChatappBindWabaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappBindWabaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatappBindWaba",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappBindWabaResponse>(await this.callApi(params, req, runtime), new $_model.ChatappBindWabaResponse({}));
  }

  /**
   * Binds the WhatsApp Business account with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappBindWabaRequest
   * @returns ChatappBindWabaResponse
   */
  async chatappBindWaba(request: $_model.ChatappBindWabaRequest): Promise<$_model.ChatappBindWabaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappBindWabaWithOptions(request, runtime);
  }

  /**
   * Queries WhatsApp Business account (WABA) information after embedded signup. You do not need to call this API operation if you use Version 2 of WhatsApp embedded signup.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappEmbedSignUpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappEmbedSignUpResponse
   */
  async chatappEmbedSignUpWithOptions(request: $_model.ChatappEmbedSignUpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappEmbedSignUpResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputToken)) {
      body["InputToken"] = request.inputToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatappEmbedSignUp",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappEmbedSignUpResponse>(await this.callApi(params, req, runtime), new $_model.ChatappEmbedSignUpResponse({}));
  }

  /**
   * Queries WhatsApp Business account (WABA) information after embedded signup. You do not need to call this API operation if you use Version 2 of WhatsApp embedded signup.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappEmbedSignUpRequest
   * @returns ChatappEmbedSignUpResponse
   */
  async chatappEmbedSignUp(request: $_model.ChatappEmbedSignUpRequest): Promise<$_model.ChatappEmbedSignUpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappEmbedSignUpWithOptions(request, runtime);
  }

  /**
   * Registers a phone number for migration.
   * 
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @param request - ChatappMigrationRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappMigrationRegisterResponse
   */
  async chatappMigrationRegisterWithOptions(request: $_model.ChatappMigrationRegisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappMigrationRegisterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatappMigrationRegister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappMigrationRegisterResponse>(await this.callApi(params, req, runtime), new $_model.ChatappMigrationRegisterResponse({}));
  }

  /**
   * Registers a phone number for migration.
   * 
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @param request - ChatappMigrationRegisterRequest
   * @returns ChatappMigrationRegisterResponse
   */
  async chatappMigrationRegister(request: $_model.ChatappMigrationRegisterRequest): Promise<$_model.ChatappMigrationRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappMigrationRegisterWithOptions(request, runtime);
  }

  /**
   * Verifies a specified phone number for migration.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappMigrationVerifiedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappMigrationVerifiedResponse
   */
  async chatappMigrationVerifiedWithOptions(request: $_model.ChatappMigrationVerifiedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappMigrationVerifiedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatappMigrationVerified",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappMigrationVerifiedResponse>(await this.callApi(params, req, runtime), new $_model.ChatappMigrationVerifiedResponse({}));
  }

  /**
   * Verifies a specified phone number for migration.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappMigrationVerifiedRequest
   * @returns ChatappMigrationVerifiedResponse
   */
  async chatappMigrationVerified(request: $_model.ChatappMigrationVerifiedRequest): Promise<$_model.ChatappMigrationVerifiedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappMigrationVerifiedWithOptions(request, runtime);
  }

  /**
   * Deregisters a phone number from a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberDeregisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappPhoneNumberDeregisterResponse
   */
  async chatappPhoneNumberDeregisterWithOptions(request: $_model.ChatappPhoneNumberDeregisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappPhoneNumberDeregisterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatappPhoneNumberDeregister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappPhoneNumberDeregisterResponse>(await this.callApi(params, req, runtime), new $_model.ChatappPhoneNumberDeregisterResponse({}));
  }

  /**
   * Deregisters a phone number from a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberDeregisterRequest
   * @returns ChatappPhoneNumberDeregisterResponse
   */
  async chatappPhoneNumberDeregister(request: $_model.ChatappPhoneNumberDeregisterRequest): Promise<$_model.ChatappPhoneNumberDeregisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappPhoneNumberDeregisterWithOptions(request, runtime);
  }

  /**
   * Registers a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappPhoneNumberRegisterResponse
   */
  async chatappPhoneNumberRegisterWithOptions(request: $_model.ChatappPhoneNumberRegisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappPhoneNumberRegisterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "ChatappPhoneNumberRegister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappPhoneNumberRegisterResponse>(await this.callApi(params, req, runtime), new $_model.ChatappPhoneNumberRegisterResponse({}));
  }

  /**
   * Registers a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappPhoneNumberRegisterRequest
   * @returns ChatappPhoneNumberRegisterResponse
   */
  async chatappPhoneNumberRegister(request: $_model.ChatappPhoneNumberRegisterRequest): Promise<$_model.ChatappPhoneNumberRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappPhoneNumberRegisterWithOptions(request, runtime);
  }

  /**
   * Synchronizes phone numbers.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappSyncPhoneNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappSyncPhoneNumberResponse
   */
  async chatappSyncPhoneNumberWithOptions(request: $_model.ChatappSyncPhoneNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappSyncPhoneNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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
      action: "ChatappSyncPhoneNumber",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappSyncPhoneNumberResponse>(await this.callApi(params, req, runtime), new $_model.ChatappSyncPhoneNumberResponse({}));
  }

  /**
   * Synchronizes phone numbers.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappSyncPhoneNumberRequest
   * @returns ChatappSyncPhoneNumberResponse
   */
  async chatappSyncPhoneNumber(request: $_model.ChatappSyncPhoneNumberRequest): Promise<$_model.ChatappSyncPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappSyncPhoneNumberWithOptions(request, runtime);
  }

  /**
   * Associates a phone number with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappVerifyAndRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappVerifyAndRegisterResponse
   */
  async chatappVerifyAndRegisterWithOptions(request: $_model.ChatappVerifyAndRegisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappVerifyAndRegisterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChatappVerifyAndRegister",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatappVerifyAndRegisterResponse>(await this.callApi(params, req, runtime), new $_model.ChatappVerifyAndRegisterResponse({}));
  }

  /**
   * Associates a phone number with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ChatappVerifyAndRegisterRequest
   * @returns ChatappVerifyAndRegisterResponse
   */
  async chatappVerifyAndRegister(request: $_model.ChatappVerifyAndRegisterRequest): Promise<$_model.ChatappVerifyAndRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappVerifyAndRegisterWithOptions(request, runtime);
  }

  /**
   * The ID of the number.
   * 
   * @remarks
   * The status of the phone number.
   * 
   * @param request - CreateChatappMigrationInitiateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatappMigrationInitiateResponse
   */
  async createChatappMigrationInitiateWithOptions(request: $_model.CreateChatappMigrationInitiateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatappMigrationInitiateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.countryCode)) {
      query["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatappMigrationInitiate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatappMigrationInitiateResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatappMigrationInitiateResponse({}));
  }

  /**
   * The ID of the number.
   * 
   * @remarks
   * The status of the phone number.
   * 
   * @param request - CreateChatappMigrationInitiateRequest
   * @returns CreateChatappMigrationInitiateResponse
   */
  async createChatappMigrationInitiate(request: $_model.CreateChatappMigrationInitiateRequest): Promise<$_model.CreateChatappMigrationInitiateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatappMigrationInitiateWithOptions(request, runtime);
  }

  /**
   * The HTTP status code.
   * \\\\\\\\*   Example: OK. This parameter indicates that the request is successful.
   * \\\\\\\\*   Other values indicate that the request fails. For more information, see \\\\\\[Error codes]\\\\\\(https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreateChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatappTemplateResponse
   */
  async createChatappTemplateWithOptions(tmpReq: $_model.CreateChatappTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatappTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!$dara.isNull(tmpReq.example)) {
      request.exampleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.example, "Example", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowCategoryChange)) {
      body["AllowCategoryChange"] = request.allowCategoryChange;
    }

    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.categoryChangePaused)) {
      body["CategoryChangePaused"] = request.categoryChangePaused;
    }

    if (!$dara.isNull(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.exampleShrink)) {
      body["Example"] = request.exampleShrink;
    }

    if (!$dara.isNull(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.messageSendTtlSeconds)) {
      body["MessageSendTtlSeconds"] = request.messageSendTtlSeconds;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatappTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatappTemplateResponse({}));
  }

  /**
   * The HTTP status code.
   * \\\\\\\\*   Example: OK. This parameter indicates that the request is successful.
   * \\\\\\\\*   Other values indicate that the request fails. For more information, see \\\\\\[Error codes]\\\\\\(https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateChatappTemplateRequest
   * @returns CreateChatappTemplateResponse
   */
  async createChatappTemplate(request: $_model.CreateChatappTemplateRequest): Promise<$_model.CreateChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - CreateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowResponse
   */
  async createFlowWithOptions(tmpReq: $_model.CreateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowResponse({}));
  }

  /**
   * Creates a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: $_model.CreateFlowRequest): Promise<$_model.CreateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * Creates a quick-response (QR) code that contains a message.
   * 
   * @param request - CreatePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdlWithOptions(request: $_model.CreatePhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePhoneMessageQrdlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.generateQrImage)) {
      body["GenerateQrImage"] = request.generateQrImage;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prefilledMessage)) {
      body["PrefilledMessage"] = request.prefilledMessage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new $_model.CreatePhoneMessageQrdlResponse({}));
  }

  /**
   * Creates a quick-response (QR) code that contains a message.
   * 
   * @param request - CreatePhoneMessageQrdlRequest
   * @returns CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdl(request: $_model.CreatePhoneMessageQrdlRequest): Promise<$_model.CreatePhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatappTemplateResponse
   */
  async deleteChatappTemplateWithOptions(request: $_model.DeleteChatappTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatappTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatappTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatappTemplateResponse({}));
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteChatappTemplateRequest
   * @returns DeleteChatappTemplateResponse
   */
  async deleteChatappTemplate(request: $_model.DeleteChatappTemplateRequest): Promise<$_model.DeleteChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a Flow. Only Flows in the DRAFT state can be deleted.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(request: $_model.DeleteFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowResponse({}));
  }

  /**
   * Deletes a Flow. Only Flows in the DRAFT state can be deleted.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(request: $_model.DeleteFlowRequest): Promise<$_model.DeleteFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * Deletes a quick-response (QR) code that contains a message.
   * 
   * @param request - DeletePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdlWithOptions(request: $_model.DeletePhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePhoneMessageQrdlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.qrdlCode)) {
      body["QrdlCode"] = request.qrdlCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new $_model.DeletePhoneMessageQrdlResponse({}));
  }

  /**
   * Deletes a quick-response (QR) code that contains a message.
   * 
   * @param request - DeletePhoneMessageQrdlRequest
   * @returns DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdl(request: $_model.DeletePhoneMessageQrdlRequest): Promise<$_model.DeletePhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Deprecates a Flow.
   * 
   * @param request - DeprecateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprecateFlowResponse
   */
  async deprecateFlowWithOptions(request: $_model.DeprecateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprecateFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeprecateFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeprecateFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeprecateFlowResponse({}));
  }

  /**
   * Deprecates a Flow.
   * 
   * @param request - DeprecateFlowRequest
   * @returns DeprecateFlowResponse
   */
  async deprecateFlow(request: $_model.DeprecateFlowRequest): Promise<$_model.DeprecateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deprecateFlowWithOptions(request, runtime);
  }

  /**
   * Enables the statistics on the metrics that are related to WhatsApp.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EnableWhatsappROIMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWhatsappROIMetricResponse
   */
  async enableWhatsappROIMetricWithOptions(request: $_model.EnableWhatsappROIMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableWhatsappROIMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableWhatsappROIMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableWhatsappROIMetricResponse>(await this.callApi(params, req, runtime), new $_model.EnableWhatsappROIMetricResponse({}));
  }

  /**
   * Enables the statistics on the metrics that are related to WhatsApp.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - EnableWhatsappROIMetricRequest
   * @returns EnableWhatsappROIMetricResponse
   */
  async enableWhatsappROIMetric(request: $_model.EnableWhatsappROIMetricRequest): Promise<$_model.EnableWhatsappROIMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWhatsappROIMetricWithOptions(request, runtime);
  }

  /**
   * Queries the number of messages that are sent by using a phone number by a specific metric.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappPhoneNumberMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappPhoneNumberMetricResponse
   */
  async getChatappPhoneNumberMetricWithOptions(request: $_model.GetChatappPhoneNumberMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappPhoneNumberMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatappPhoneNumberMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappPhoneNumberMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappPhoneNumberMetricResponse({}));
  }

  /**
   * Queries the number of messages that are sent by using a phone number by a specific metric.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappPhoneNumberMetricRequest
   * @returns GetChatappPhoneNumberMetricResponse
   */
  async getChatappPhoneNumberMetric(request: $_model.GetChatappPhoneNumberMetricRequest): Promise<$_model.GetChatappPhoneNumberMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappPhoneNumberMetricWithOptions(request, runtime);
  }

  /**
   * Queries the information of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this API operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappTemplateDetailResponse
   */
  async getChatappTemplateDetailWithOptions(request: $_model.GetChatappTemplateDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappTemplateDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatappTemplateDetail",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappTemplateDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappTemplateDetailResponse({}));
  }

  /**
   * Queries the information of a message template.
   * 
   * @remarks
   * ### QPS limit
   * You can call this API operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateDetailRequest
   * @returns GetChatappTemplateDetailResponse
   */
  async getChatappTemplateDetail(request: $_model.GetChatappTemplateDetailRequest): Promise<$_model.GetChatappTemplateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappTemplateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the metrics about a marketing template.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappTemplateMetricResponse
   */
  async getChatappTemplateMetricWithOptions(request: $_model.GetChatappTemplateMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappTemplateMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatappTemplateMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappTemplateMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappTemplateMetricResponse({}));
  }

  /**
   * Queries the metrics about a marketing template.
   * 
   * @remarks
   * You can call this operation up to 50 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappTemplateMetricRequest
   * @returns GetChatappTemplateMetricResponse
   */
  async getChatappTemplateMetric(request: $_model.GetChatappTemplateMetricRequest): Promise<$_model.GetChatappTemplateMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappTemplateMetricWithOptions(request, runtime);
  }

  /**
   * Obtains the authentication information that is used to upload a file.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappUploadAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappUploadAuthorizationResponse
   */
  async getChatappUploadAuthorizationWithOptions(request: $_model.GetChatappUploadAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappUploadAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatappUploadAuthorization",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappUploadAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappUploadAuthorizationResponse({}));
  }

  /**
   * Obtains the authentication information that is used to upload a file.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappUploadAuthorizationRequest
   * @returns GetChatappUploadAuthorizationResponse
   */
  async getChatappUploadAuthorization(request: $_model.GetChatappUploadAuthorizationRequest): Promise<$_model.GetChatappUploadAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappUploadAuthorizationWithOptions(request, runtime);
  }

  /**
   * Obtains a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappVerifyCodeResponse
   */
  async getChatappVerifyCodeWithOptions(request: $_model.GetChatappVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappVerifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetChatappVerifyCode",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappVerifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappVerifyCodeResponse({}));
  }

  /**
   * Obtains a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetChatappVerifyCodeRequest
   * @returns GetChatappVerifyCodeResponse
   */
  async getChatappVerifyCode(request: $_model.GetChatappVerifyCodeRequest): Promise<$_model.GetChatappVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Queries the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCommerceSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommerceSettingResponse
   */
  async getCommerceSettingWithOptions(request: $_model.GetCommerceSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCommerceSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetCommerceSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCommerceSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetCommerceSettingResponse({}));
  }

  /**
   * Queries the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetCommerceSettingRequest
   * @returns GetCommerceSettingResponse
   */
  async getCommerceSetting(request: $_model.GetCommerceSettingRequest): Promise<$_model.GetCommerceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommerceSettingWithOptions(request, runtime);
  }

  /**
   * Configures welcoming messages, opening remarks, and commands.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetConversationalAutomationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConversationalAutomationResponse
   */
  async getConversationalAutomationWithOptions(request: $_model.GetConversationalAutomationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConversationalAutomationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "GetConversationalAutomation",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConversationalAutomationResponse>(await this.callApi(params, req, runtime), new $_model.GetConversationalAutomationResponse({}));
  }

  /**
   * Configures welcoming messages, opening remarks, and commands.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetConversationalAutomationRequest
   * @returns GetConversationalAutomationResponse
   */
  async getConversationalAutomation(request: $_model.GetConversationalAutomationRequest): Promise<$_model.GetConversationalAutomationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowResponse
   */
  async getFlowWithOptions(request: $_model.GetFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowResponse({}));
  }

  /**
   * Queries the information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowRequest
   * @returns GetFlowResponse
   */
  async getFlow(request: $_model.GetFlowRequest): Promise<$_model.GetFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowWithOptions(request, runtime);
  }

  /**
   * Queries the JSON content of a Flow.
   * 
   * @param request - GetFlowJSONAssestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowJSONAssestResponse
   */
  async getFlowJSONAssestWithOptions(request: $_model.GetFlowJSONAssestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowJSONAssestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowJSONAssest",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowJSONAssestResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowJSONAssestResponse({}));
  }

  /**
   * Queries the JSON content of a Flow.
   * 
   * @param request - GetFlowJSONAssestRequest
   * @returns GetFlowJSONAssestResponse
   */
  async getFlowJSONAssest(request: $_model.GetFlowJSONAssestRequest): Promise<$_model.GetFlowJSONAssestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowJSONAssestWithOptions(request, runtime);
  }

  /**
   * Obtains the preview URL of a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowPreviewUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrlWithOptions(request: $_model.GetFlowPreviewUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowPreviewUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFlowPreviewUrl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFlowPreviewUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetFlowPreviewUrlResponse({}));
  }

  /**
   * Obtains the preview URL of a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetFlowPreviewUrlRequest
   * @returns GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrl(request: $_model.GetFlowPreviewUrlRequest): Promise<$_model.GetFlowPreviewUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowPreviewUrlWithOptions(request, runtime);
  }

  /**
   * Obtain the verification code for the migration number.
   * 
   * @remarks
   * The single user QPS limit for this interface is 10 times per second. Exceeding the limit may result in restricted API calls, which may affect your business. Please make reasonable calls.
   * 
   * @param request - GetMigrationVerifyCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMigrationVerifyCodeResponse
   */
  async getMigrationVerifyCodeWithOptions(request: $_model.GetMigrationVerifyCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMigrationVerifyCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.locale)) {
      query["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMigrationVerifyCode",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMigrationVerifyCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetMigrationVerifyCodeResponse({}));
  }

  /**
   * Obtain the verification code for the migration number.
   * 
   * @remarks
   * The single user QPS limit for this interface is 10 times per second. Exceeding the limit may result in restricted API calls, which may affect your business. Please make reasonable calls.
   * 
   * @param request - GetMigrationVerifyCodeRequest
   * @returns GetMigrationVerifyCodeResponse
   */
  async getMigrationVerifyCode(request: $_model.GetMigrationVerifyCodeRequest): Promise<$_model.GetMigrationVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMigrationVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Obtains permissions based on the authorization code obtained from embedded signup.
   * 
   * @param tmpReq - GetPermissionByCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionByCodeResponse
   */
  async getPermissionByCodeWithOptions(tmpReq: $_model.GetPermissionByCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPermissionByCodeResponse> {
    tmpReq.validate();
    let request = new $_model.GetPermissionByCodeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      body["Permissions"] = request.permissionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPermissionByCode",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPermissionByCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetPermissionByCodeResponse({}));
  }

  /**
   * Obtains permissions based on the authorization code obtained from embedded signup.
   * 
   * @param request - GetPermissionByCodeRequest
   * @returns GetPermissionByCodeResponse
   */
  async getPermissionByCode(request: $_model.GetPermissionByCodeRequest): Promise<$_model.GetPermissionByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPermissionByCodeWithOptions(request, runtime);
  }

  /**
   * Queries the encryption public key of a phone number.
   * 
   * @param request - GetPhoneEncryptionPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKeyWithOptions(request: $_model.GetPhoneEncryptionPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneEncryptionPublicKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneEncryptionPublicKey",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhoneEncryptionPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetPhoneEncryptionPublicKeyResponse({}));
  }

  /**
   * Queries the encryption public key of a phone number.
   * 
   * @param request - GetPhoneEncryptionPublicKeyRequest
   * @returns GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKey(request: $_model.GetPhoneEncryptionPublicKeyRequest): Promise<$_model.GetPhoneEncryptionPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * Obtains the verification status of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneNumberVerificationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatusWithOptions(request: $_model.GetPhoneNumberVerificationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneNumberVerificationStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPhoneNumberVerificationStatus",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPhoneNumberVerificationStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetPhoneNumberVerificationStatusResponse({}));
  }

  /**
   * Obtains the verification status of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPhoneNumberVerificationStatusRequest
   * @returns GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatus(request: $_model.GetPhoneNumberVerificationStatusRequest): Promise<$_model.GetPhoneNumberVerificationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneNumberVerificationStatusWithOptions(request, runtime);
  }

  /**
   * Obtains the ID of a pre-registered phone number used for embedded signup without the need to re-obtain a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPreValidatePhoneIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPreValidatePhoneIdResponse
   */
  async getPreValidatePhoneIdWithOptions(request: $_model.GetPreValidatePhoneIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPreValidatePhoneIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.verifyCode)) {
      body["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPreValidatePhoneId",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPreValidatePhoneIdResponse>(await this.callApi(params, req, runtime), new $_model.GetPreValidatePhoneIdResponse({}));
  }

  /**
   * Obtains the ID of a pre-registered phone number used for embedded signup without the need to re-obtain a verification code.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetPreValidatePhoneIdRequest
   * @returns GetPreValidatePhoneIdResponse
   */
  async getPreValidatePhoneId(request: $_model.GetPreValidatePhoneIdRequest): Promise<$_model.GetPreValidatePhoneIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPreValidatePhoneIdWithOptions(request, runtime);
  }

  /**
   * Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappConnectionCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWhatsappConnectionCatalogResponse
   */
  async getWhatsappConnectionCatalogWithOptions(request: $_model.GetWhatsappConnectionCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWhatsappConnectionCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!$dara.isNull(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWhatsappConnectionCatalog",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWhatsappConnectionCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetWhatsappConnectionCatalogResponse({}));
  }

  /**
   * Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappConnectionCatalogRequest
   * @returns GetWhatsappConnectionCatalogResponse
   */
  async getWhatsappConnectionCatalog(request: $_model.GetWhatsappConnectionCatalogRequest): Promise<$_model.GetWhatsappConnectionCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWhatsappConnectionCatalogWithOptions(request, runtime);
  }

  /**
   * Queries the messaging health status of different types of nodes.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWhatsappHealthStatusResponse
   */
  async getWhatsappHealthStatusWithOptions(request: $_model.GetWhatsappHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWhatsappHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWhatsappHealthStatus",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWhatsappHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetWhatsappHealthStatusResponse({}));
  }

  /**
   * Queries the messaging health status of different types of nodes.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - GetWhatsappHealthStatusRequest
   * @returns GetWhatsappHealthStatusResponse
   */
  async getWhatsappHealthStatus(request: $_model.GetWhatsappHealthStatusRequest): Promise<$_model.GetWhatsappHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWhatsappHealthStatusWithOptions(request, runtime);
  }

  /**
   * Obtains the application ID under the ISV account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - IsvGetAppIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsvGetAppIdResponse
   */
  async isvGetAppIdWithOptions(request: $_model.IsvGetAppIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IsvGetAppIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.permissions)) {
      body["Permissions"] = request.permissions;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsvGetAppId",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsvGetAppIdResponse>(await this.callApi(params, req, runtime), new $_model.IsvGetAppIdResponse({}));
  }

  /**
   * Obtains the application ID under the ISV account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - IsvGetAppIdRequest
   * @returns IsvGetAppIdResponse
   */
  async isvGetAppId(request: $_model.IsvGetAppIdRequest): Promise<$_model.IsvGetAppIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.isvGetAppIdWithOptions(request, runtime);
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - ListChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatappTemplateResponse
   */
  async listChatappTemplateWithOptions(tmpReq: $_model.ListChatappTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatappTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ListChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatappTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListChatappTemplateResponse({}));
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * ### QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListChatappTemplateRequest
   * @returns ListChatappTemplateResponse
   */
  async listChatappTemplate(request: $_model.ListChatappTemplateRequest): Promise<$_model.ListChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Queries a list of Flows.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - ListFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowResponse
   */
  async listFlowWithOptions(tmpReq: $_model.ListFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowResponse> {
    tmpReq.validate();
    let request = new $_model.ListFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.pageShrink)) {
      body["Page"] = request.pageShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowResponse({}));
  }

  /**
   * Queries a list of Flows.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListFlowRequest
   * @returns ListFlowResponse
   */
  async listFlow(request: $_model.ListFlowRequest): Promise<$_model.ListFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  /**
   * Queries the information about a list of quick-response (QR) codes that contain messages.
   * 
   * @param request - ListPhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdlWithOptions(request: $_model.ListPhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPhoneMessageQrdlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new $_model.ListPhoneMessageQrdlResponse({}));
  }

  /**
   * Queries the information about a list of quick-response (QR) codes that contain messages.
   * 
   * @param request - ListPhoneMessageQrdlRequest
   * @returns ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdl(request: $_model.ListPhoneMessageQrdlRequest): Promise<$_model.ListPhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Queries products in a product catalog.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductResponse
   */
  async listProductWithOptions(request: $_model.ListProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.after)) {
      query["After"] = request.after;
    }

    if (!$dara.isNull(request.before)) {
      query["Before"] = request.before;
    }

    if (!$dara.isNull(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProduct",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductResponse>(await this.callApi(params, req, runtime), new $_model.ListProductResponse({}));
  }

  /**
   * Queries products in a product catalog.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductRequest
   * @returns ListProductResponse
   */
  async listProduct(request: $_model.ListProductRequest): Promise<$_model.ListProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductWithOptions(request, runtime);
  }

  /**
   * Queries the product catalogs on the Business Manager platform of Meta.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductCatalogResponse
   */
  async listProductCatalogWithOptions(request: $_model.ListProductCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.after)) {
      query["After"] = request.after;
    }

    if (!$dara.isNull(request.before)) {
      query["Before"] = request.before;
    }

    if (!$dara.isNull(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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
      action: "ListProductCatalog",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductCatalogResponse>(await this.callApi(params, req, runtime), new $_model.ListProductCatalogResponse({}));
  }

  /**
   * Queries the product catalogs on the Business Manager platform of Meta.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListProductCatalogRequest
   * @returns ListProductCatalogResponse
   */
  async listProductCatalog(request: $_model.ListProductCatalogRequest): Promise<$_model.ListProductCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductCatalogWithOptions(request, runtime);
  }

  /**
   * The code of the message template.
   * 
   * @remarks
   * The name of the message template.
   * 
   * @param tmpReq - ModifyChatappTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyChatappTemplateResponse
   */
  async modifyChatappTemplateWithOptions(tmpReq: $_model.ModifyChatappTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyChatappTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyChatappTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!$dara.isNull(tmpReq.example)) {
      request.exampleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.example, "Example", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["Category"] = request.category;
    }

    if (!$dara.isNull(request.categoryChangePaused)) {
      body["CategoryChangePaused"] = request.categoryChangePaused;
    }

    if (!$dara.isNull(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.exampleShrink)) {
      body["Example"] = request.exampleShrink;
    }

    if (!$dara.isNull(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.messageSendTtlSeconds)) {
      body["MessageSendTtlSeconds"] = request.messageSendTtlSeconds;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyChatappTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyChatappTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyChatappTemplateResponse({}));
  }

  /**
   * The code of the message template.
   * 
   * @remarks
   * The name of the message template.
   * 
   * @param request - ModifyChatappTemplateRequest
   * @returns ModifyChatappTemplateResponse
   */
  async modifyChatappTemplate(request: $_model.ModifyChatappTemplateRequest): Promise<$_model.ModifyChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyChatappTemplateWithOptions(request, runtime);
  }

  /**
   * 修改模板上的一些属性
   * 
   * @param request - ModifyChatappTemplatePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyChatappTemplatePropertiesResponse
   */
  async modifyChatappTemplatePropertiesWithOptions(request: $_model.ModifyChatappTemplatePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyChatappTemplatePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowSend)) {
      query["AllowSend"] = request.allowSend;
    }

    if (!$dara.isNull(request.categoryChangePaused)) {
      query["CategoryChangePaused"] = request.categoryChangePaused;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
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

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyChatappTemplateProperties",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyChatappTemplatePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyChatappTemplatePropertiesResponse({}));
  }

  /**
   * 修改模板上的一些属性
   * 
   * @param request - ModifyChatappTemplatePropertiesRequest
   * @returns ModifyChatappTemplatePropertiesResponse
   */
  async modifyChatappTemplateProperties(request: $_model.ModifyChatappTemplatePropertiesRequest): Promise<$_model.ModifyChatappTemplatePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyChatappTemplatePropertiesWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - ModifyFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFlowResponse
   */
  async modifyFlowWithOptions(tmpReq: $_model.ModifyFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFlowResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "Categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      body["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFlowResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFlowResponse({}));
  }

  /**
   * Modifies the basic information about a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyFlowRequest
   * @returns ModifyFlowResponse
   */
  async modifyFlow(request: $_model.ModifyFlowRequest): Promise<$_model.ModifyFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * ModifyPhoneBusinessProfile
   * 
   * @param tmpReq - ModifyPhoneBusinessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPhoneBusinessProfileResponse
   */
  async modifyPhoneBusinessProfileWithOptions(tmpReq: $_model.ModifyPhoneBusinessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPhoneBusinessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPhoneBusinessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.websites)) {
      request.websitesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.websites, "Websites", "json");
    }

    let query = { };
    if (!$dara.isNull(request.about)) {
      query["About"] = request.about;
    }

    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.profilePictureUrl)) {
      query["ProfilePictureUrl"] = request.profilePictureUrl;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.vertical)) {
      query["Vertical"] = request.vertical;
    }

    if (!$dara.isNull(request.websitesShrink)) {
      query["Websites"] = request.websitesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPhoneBusinessProfile",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPhoneBusinessProfileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPhoneBusinessProfileResponse({}));
  }

  /**
   * The ID of the request.
   * 
   * @remarks
   * ModifyPhoneBusinessProfile
   * 
   * @param request - ModifyPhoneBusinessProfileRequest
   * @returns ModifyPhoneBusinessProfileResponse
   */
  async modifyPhoneBusinessProfile(request: $_model.ModifyPhoneBusinessProfileRequest): Promise<$_model.ModifyPhoneBusinessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPhoneBusinessProfileWithOptions(request, runtime);
  }

  /**
   * Publishes a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PublishFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFlowResponse
   */
  async publishFlowWithOptions(request: $_model.PublishFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishFlowResponse>(await this.callApi(params, req, runtime), new $_model.PublishFlowResponse({}));
  }

  /**
   * Publishes a Flow.
   * 
   * @remarks
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - PublishFlowRequest
   * @returns PublishFlowResponse
   */
  async publishFlow(request: $_model.PublishFlowRequest): Promise<$_model.PublishFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishFlowWithOptions(request, runtime);
  }

  /**
   * Query the WhatsApp Business account you associate with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappBindWabaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChatappBindWabaResponse
   */
  async queryChatappBindWabaWithOptions(request: $_model.QueryChatappBindWabaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryChatappBindWabaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
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
      action: "QueryChatappBindWaba",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryChatappBindWabaResponse>(await this.callApi(params, req, runtime), new $_model.QueryChatappBindWabaResponse({}));
  }

  /**
   * Query the WhatsApp Business account you associate with ChatApp.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappBindWabaRequest
   * @returns QueryChatappBindWabaResponse
   */
  async queryChatappBindWaba(request: $_model.QueryChatappBindWabaRequest): Promise<$_model.QueryChatappBindWabaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryChatappBindWabaWithOptions(request, runtime);
  }

  /**
   * Queries phone numbers that receive messages and statuses of these numbers under a specified user.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappPhoneNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChatappPhoneNumbersResponse
   */
  async queryChatappPhoneNumbersWithOptions(request: $_model.QueryChatappPhoneNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryChatappPhoneNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryChatappPhoneNumbers",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryChatappPhoneNumbersResponse>(await this.callApi(params, req, runtime), new $_model.QueryChatappPhoneNumbersResponse({}));
  }

  /**
   * Queries phone numbers that receive messages and statuses of these numbers under a specified user.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryChatappPhoneNumbersRequest
   * @returns QueryChatappPhoneNumbersResponse
   */
  async queryChatappPhoneNumbers(request: $_model.QueryChatappPhoneNumbersRequest): Promise<$_model.QueryChatappPhoneNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryChatappPhoneNumbersWithOptions(request, runtime);
  }

  /**
   * Queries the business information of the account to which a specified phone number is bound.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneBusinessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPhoneBusinessProfileResponse
   */
  async queryPhoneBusinessProfileWithOptions(request: $_model.QueryPhoneBusinessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPhoneBusinessProfileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "QueryPhoneBusinessProfile",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPhoneBusinessProfileResponse>(await this.callApi(params, req, runtime), new $_model.QueryPhoneBusinessProfileResponse({}));
  }

  /**
   * Queries the business information of the account to which a specified phone number is bound.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryPhoneBusinessProfileRequest
   * @returns QueryPhoneBusinessProfileResponse
   */
  async queryPhoneBusinessProfile(request: $_model.QueryPhoneBusinessProfileRequest): Promise<$_model.QueryPhoneBusinessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPhoneBusinessProfileWithOptions(request, runtime);
  }

  /**
   * Queries the business information about the WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryWabaBusinessInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWabaBusinessInfoResponse
   */
  async queryWabaBusinessInfoWithOptions(request: $_model.QueryWabaBusinessInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWabaBusinessInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
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

    if (!$dara.isNull(request.wabaId)) {
      query["WabaId"] = request.wabaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWabaBusinessInfo",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWabaBusinessInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryWabaBusinessInfoResponse({}));
  }

  /**
   * Queries the business information about the WhatsApp Business account (WABA).
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - QueryWabaBusinessInfoRequest
   * @returns QueryWabaBusinessInfoResponse
   */
  async queryWabaBusinessInfo(request: $_model.QueryWabaBusinessInfoRequest): Promise<$_model.QueryWabaBusinessInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWabaBusinessInfoWithOptions(request, runtime);
  }

  /**
   * Sends a message to multiple phone numbers by using ChatAPP at a time.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * You can send messages to up to 1,000 phone numbers in a single request.
   * 
   * @param tmpReq - SendChatappMassMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatappMassMessageResponse
   */
  async sendChatappMassMessageWithOptions(tmpReq: $_model.SendChatappMassMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendChatappMassMessageResponse> {
    tmpReq.validate();
    let request = new $_model.SendChatappMassMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.senderList)) {
      request.senderListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.senderList, "SenderList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.fallBackContent)) {
      body["FallBackContent"] = request.fallBackContent;
    }

    if (!$dara.isNull(request.fallBackDuration)) {
      body["FallBackDuration"] = request.fallBackDuration;
    }

    if (!$dara.isNull(request.fallBackId)) {
      body["FallBackId"] = request.fallBackId;
    }

    if (!$dara.isNull(request.fallBackRule)) {
      body["FallBackRule"] = request.fallBackRule;
    }

    if (!$dara.isNull(request.from)) {
      body["From"] = request.from;
    }

    if (!$dara.isNull(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.senderListShrink)) {
      body["SenderList"] = request.senderListShrink;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendChatappMassMessage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendChatappMassMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendChatappMassMessageResponse({}));
  }

  /**
   * Sends a message to multiple phone numbers by using ChatAPP at a time.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * You can send messages to up to 1,000 phone numbers in a single request.
   * 
   * @param request - SendChatappMassMessageRequest
   * @returns SendChatappMassMessageResponse
   */
  async sendChatappMassMessage(request: $_model.SendChatappMassMessageRequest): Promise<$_model.SendChatappMassMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendChatappMassMessageWithOptions(request, runtime);
  }

  /**
   * Sends messages by using ChatAPP.
   * 
   * @remarks
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - SendChatappMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendChatappMessageResponse
   */
  async sendChatappMessageWithOptions(tmpReq: $_model.SendChatappMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendChatappMessageResponse> {
    tmpReq.validate();
    let request = new $_model.SendChatappMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.flowAction)) {
      request.flowActionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flowAction, "FlowAction", "json");
    }

    if (!$dara.isNull(tmpReq.payload)) {
      request.payloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.payload, "Payload", "json");
    }

    if (!$dara.isNull(tmpReq.productAction)) {
      request.productActionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productAction, "ProductAction", "json");
    }

    if (!$dara.isNull(tmpReq.templateParams)) {
      request.templateParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.templateParams, "TemplateParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channelType)) {
      body["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.contextMessageId)) {
      body["ContextMessageId"] = request.contextMessageId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      body["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.fallBackContent)) {
      body["FallBackContent"] = request.fallBackContent;
    }

    if (!$dara.isNull(request.fallBackDuration)) {
      body["FallBackDuration"] = request.fallBackDuration;
    }

    if (!$dara.isNull(request.fallBackId)) {
      body["FallBackId"] = request.fallBackId;
    }

    if (!$dara.isNull(request.fallBackRule)) {
      body["FallBackRule"] = request.fallBackRule;
    }

    if (!$dara.isNull(request.flowActionShrink)) {
      body["FlowAction"] = request.flowActionShrink;
    }

    if (!$dara.isNull(request.from)) {
      body["From"] = request.from;
    }

    if (!$dara.isNull(request.isvCode)) {
      body["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.messageType)) {
      body["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.productActionShrink)) {
      body["ProductAction"] = request.productActionShrink;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateParamsShrink)) {
      body["TemplateParams"] = request.templateParamsShrink;
    }

    if (!$dara.isNull(request.to)) {
      body["To"] = request.to;
    }

    if (!$dara.isNull(request.trackingData)) {
      body["TrackingData"] = request.trackingData;
    }

    if (!$dara.isNull(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendChatappMessage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendChatappMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendChatappMessageResponse({}));
  }

  /**
   * Sends messages by using ChatAPP.
   * 
   * @remarks
   * You can call this operation up to 200 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - SendChatappMessageRequest
   * @returns SendChatappMessageResponse
   */
  async sendChatappMessage(request: $_model.SendChatappMessageRequest): Promise<$_model.SendChatappMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendChatappMessageWithOptions(request, runtime);
  }

  /**
   * Submits the agreement information for independent software vendor (ISV) customers.
   * 
   * @remarks
   *   You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * *   After you call the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation to obtain the authentication information for uploading the file to Object Storage Service (OSS), you can use the authentication information to upload the file to the OSS server. To upload the file, you can call the SDK provided by OSS. When you upload the file, set the value of the key to the value of `Dir + "/" + file name`, such as C200293990209/isvTerms.pdf. The value of Dir is obtained from the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation. The value of IsvTerms is obtained from the PutObject operation.
   * 
   * @param request - SubmitIsvCustomerTermsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIsvCustomerTermsResponse
   */
  async submitIsvCustomerTermsWithOptions(request: $_model.SubmitIsvCustomerTermsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIsvCustomerTermsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessDesc)) {
      query["BusinessDesc"] = request.businessDesc;
    }

    if (!$dara.isNull(request.contactMail)) {
      query["ContactMail"] = request.contactMail;
    }

    if (!$dara.isNull(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!$dara.isNull(request.custName)) {
      query["CustName"] = request.custName;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.isvTerms)) {
      query["IsvTerms"] = request.isvTerms;
    }

    if (!$dara.isNull(request.officeAddress)) {
      query["OfficeAddress"] = request.officeAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIsvCustomerTerms",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIsvCustomerTermsResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIsvCustomerTermsResponse({}));
  }

  /**
   * Submits the agreement information for independent software vendor (ISV) customers.
   * 
   * @remarks
   *   You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * *   After you call the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation to obtain the authentication information for uploading the file to Object Storage Service (OSS), you can use the authentication information to upload the file to the OSS server. To upload the file, you can call the SDK provided by OSS. When you upload the file, set the value of the key to the value of `Dir + "/" + file name`, such as C200293990209/isvTerms.pdf. The value of Dir is obtained from the [GetChatappUploadAuthorization](~~GetChatappUploadAuthorization~~) operation. The value of IsvTerms is obtained from the PutObject operation.
   * 
   * @param request - SubmitIsvCustomerTermsRequest
   * @returns SubmitIsvCustomerTermsResponse
   */
  async submitIsvCustomerTerms(request: $_model.SubmitIsvCustomerTermsRequest): Promise<$_model.SubmitIsvCustomerTermsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitIsvCustomerTermsWithOptions(request, runtime);
  }

  /**
   * Trigger an Online ChatFlow
   * 
   * @remarks
   * After triggering an online flow, if your flow contains components that incur costs for cloud products, such as message sending or function calls, please ensure you fully understand the billing methods and prices of the related products before using this interface.
   * 
   * @param tmpReq - TriggerChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerChatFlowResponse
   */
  async triggerChatFlowWithOptions(tmpReq: $_model.TriggerChatFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerChatFlowResponse> {
    tmpReq.validate();
    let request = new $_model.TriggerChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.data)) {
      request.dataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.data, "Data", "json");
    }

    let query = { };
    if (!$dara.isNull(request.claimTimeMillis)) {
      query["ClaimTimeMillis"] = request.claimTimeMillis;
    }

    if (!$dara.isNull(request.dataShrink)) {
      query["Data"] = request.dataShrink;
    }

    if (!$dara.isNull(request.discardTimeMillis)) {
      query["DiscardTimeMillis"] = request.discardTimeMillis;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
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

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerChatFlowResponse>(await this.callApi(params, req, runtime), new $_model.TriggerChatFlowResponse({}));
  }

  /**
   * Trigger an Online ChatFlow
   * 
   * @remarks
   * After triggering an online flow, if your flow contains components that incur costs for cloud products, such as message sending or function calls, please ensure you fully understand the billing methods and prices of the related products before using this interface.
   * 
   * @param request - TriggerChatFlowRequest
   * @returns TriggerChatFlowResponse
   */
  async triggerChatFlow(request: $_model.TriggerChatFlowRequest): Promise<$_model.TriggerChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerChatFlowWithOptions(request, runtime);
  }

  /**
   * Modifies the callback URL of an account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateAccountWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountWebhookResponse
   */
  async updateAccountWebhookWithOptions(request: $_model.UpdateAccountWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccountWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.httpFlag)) {
      query["HttpFlag"] = request.httpFlag;
    }

    if (!$dara.isNull(request.queueFlag)) {
      query["QueueFlag"] = request.queueFlag;
    }

    if (!$dara.isNull(request.statusCallbackUrl)) {
      query["StatusCallbackUrl"] = request.statusCallbackUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccountWebhook",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccountWebhookResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccountWebhookResponse({}));
  }

  /**
   * Modifies the callback URL of an account.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateAccountWebhookRequest
   * @returns UpdateAccountWebhookResponse
   */
  async updateAccountWebhook(request: $_model.UpdateAccountWebhookRequest): Promise<$_model.UpdateAccountWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWebhookWithOptions(request, runtime);
  }

  /**
   * Modifies the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCommerceSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCommerceSettingResponse
   */
  async updateCommerceSettingWithOptions(request: $_model.UpdateCommerceSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCommerceSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cartEnable)) {
      query["CartEnable"] = request.cartEnable;
    }

    if (!$dara.isNull(request.catalogVisible)) {
      query["CatalogVisible"] = request.catalogVisible;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
      action: "UpdateCommerceSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCommerceSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCommerceSettingResponse({}));
  }

  /**
   * Modifies the business settings of a phone number.
   * 
   * @remarks
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateCommerceSettingRequest
   * @returns UpdateCommerceSettingResponse
   */
  async updateCommerceSetting(request: $_model.UpdateCommerceSettingRequest): Promise<$_model.UpdateCommerceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCommerceSettingWithOptions(request, runtime);
  }

  /**
   * Modifies welcoming messages, opening remarks, and commands for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param tmpReq - UpdateConversationalAutomationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConversationalAutomationResponse
   */
  async updateConversationalAutomationWithOptions(tmpReq: $_model.UpdateConversationalAutomationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConversationalAutomationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateConversationalAutomationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commands)) {
      request.commandsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commands, "Commands", "json");
    }

    if (!$dara.isNull(tmpReq.prompts)) {
      request.promptsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.prompts, "Prompts", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandsShrink)) {
      query["Commands"] = request.commandsShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.enableWelcomeMessage)) {
      query["EnableWelcomeMessage"] = request.enableWelcomeMessage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.promptsShrink)) {
      query["Prompts"] = request.promptsShrink;
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
      action: "UpdateConversationalAutomation",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConversationalAutomationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConversationalAutomationResponse({}));
  }

  /**
   * Modifies welcoming messages, opening remarks, and commands for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * You can call this operation up to five times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * This operation will directly obtain data from Facebook, which sets an upper limit on the total number of calls for operations. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - UpdateConversationalAutomationRequest
   * @returns UpdateConversationalAutomationResponse
   */
  async updateConversationalAutomation(request: $_model.UpdateConversationalAutomationRequest): Promise<$_model.UpdateConversationalAutomationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * Updates a Flow by using JSON content.
   * 
   * @param request - UpdateFlowJSONAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAssetWithOptions(request: $_model.UpdateFlowJSONAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowJSONAssetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFlowJSONAsset",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowJSONAssetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowJSONAssetResponse({}));
  }

  /**
   * Updates a Flow by using JSON content.
   * 
   * @param request - UpdateFlowJSONAssetRequest
   * @returns UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAsset(request: $_model.UpdateFlowJSONAssetRequest): Promise<$_model.UpdateFlowJSONAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowJSONAssetWithOptions(request, runtime);
  }

  /**
   * Updates the encryption public key of a phone number.
   * 
   * @param request - UpdatePhoneEncryptionPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKeyWithOptions(request: $_model.UpdatePhoneEncryptionPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePhoneEncryptionPublicKeyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.encryptionPublicKey)) {
      body["EncryptionPublicKey"] = request.encryptionPublicKey;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePhoneEncryptionPublicKey",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePhoneEncryptionPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePhoneEncryptionPublicKeyResponse({}));
  }

  /**
   * Updates the encryption public key of a phone number.
   * 
   * @param request - UpdatePhoneEncryptionPublicKeyRequest
   * @returns UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKey(request: $_model.UpdatePhoneEncryptionPublicKeyRequest): Promise<$_model.UpdatePhoneEncryptionPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * Modifies a quick-response (QR) code that contains a message.
   * 
   * @param request - UpdatePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneMessageQrdlResponse
   */
  async updatePhoneMessageQrdlWithOptions(request: $_model.UpdatePhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePhoneMessageQrdlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.custSpaceId)) {
      body["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.generateQrImage)) {
      body["GenerateQrImage"] = request.generateQrImage;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prefilledMessage)) {
      body["PrefilledMessage"] = request.prefilledMessage;
    }

    if (!$dara.isNull(request.qrdlCode)) {
      body["QrdlCode"] = request.qrdlCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePhoneMessageQrdl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePhoneMessageQrdlResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePhoneMessageQrdlResponse({}));
  }

  /**
   * Modifies a quick-response (QR) code that contains a message.
   * 
   * @param request - UpdatePhoneMessageQrdlRequest
   * @returns UpdatePhoneMessageQrdlResponse
   */
  async updatePhoneMessageQrdl(request: $_model.UpdatePhoneMessageQrdlRequest): Promise<$_model.UpdatePhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * The HTTP status code returned.
   * \\*   A value of OK indicates that the call is successful.
   * \\*   Other values indicate that the call fails. For more information, see [Error codes]\\(~~196974~~).
   * 
   * @remarks
   * The error message returned.
   * 
   * @param request - UpdatePhoneWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneWebhookResponse
   */
  async updatePhoneWebhookWithOptions(request: $_model.UpdatePhoneWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePhoneWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.httpFlag)) {
      query["HttpFlag"] = request.httpFlag;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.queueFlag)) {
      query["QueueFlag"] = request.queueFlag;
    }

    if (!$dara.isNull(request.statusCallbackUrl)) {
      query["StatusCallbackUrl"] = request.statusCallbackUrl;
    }

    if (!$dara.isNull(request.upCallbackUrl)) {
      query["UpCallbackUrl"] = request.upCallbackUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePhoneWebhook",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePhoneWebhookResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePhoneWebhookResponse({}));
  }

  /**
   * The HTTP status code returned.
   * \\*   A value of OK indicates that the call is successful.
   * \\*   Other values indicate that the call fails. For more information, see [Error codes]\\(~~196974~~).
   * 
   * @remarks
   * The error message returned.
   * 
   * @param request - UpdatePhoneWebhookRequest
   * @returns UpdatePhoneWebhookResponse
   */
  async updatePhoneWebhook(request: $_model.UpdatePhoneWebhookRequest): Promise<$_model.UpdatePhoneWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePhoneWebhookWithOptions(request, runtime);
  }

}
