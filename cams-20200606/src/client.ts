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
      'ap-southeast-1': "cams.ap-southeast-1.aliyuncs.com",
    };
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
   * 申请：变更目的地/恢复/暂停
   * 
   * @param tmpReq - AddAddressRecoverSuspendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAddressRecoverSuspendResponse
   */
  async addAddressRecoverSuspendWithOptions(tmpReq: $_model.AddAddressRecoverSuspendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAddressRecoverSuspendResponse> {
    tmpReq.validate();
    let request = new $_model.AddAddressRecoverSuspendShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.auditRecord)) {
      request.auditRecordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.auditRecord, "AuditRecord", "json");
    }

    let query = { };
    if (!$dara.isNull(request.auditRecordShrink)) {
      query["AuditRecord"] = request.auditRecordShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.requestType)) {
      query["RequestType"] = request.requestType;
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
      action: "AddAddressRecoverSuspend",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAddressRecoverSuspendResponse>(await this.callApi(params, req, runtime), new $_model.AddAddressRecoverSuspendResponse({}));
  }

  /**
   * 申请：变更目的地/恢复/暂停
   * 
   * @param request - AddAddressRecoverSuspendRequest
   * @returns AddAddressRecoverSuspendResponse
   */
  async addAddressRecoverSuspend(request: $_model.AddAddressRecoverSuspendRequest): Promise<$_model.AddAddressRecoverSuspendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAddressRecoverSuspendWithOptions(request, runtime);
  }

  /**
   * Signs up for a Viber account.
   * 
   * @param tmpReq - AddAuditViberOpenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAuditViberOpenResponse
   */
  async addAuditViberOpenWithOptions(tmpReq: $_model.AddAuditViberOpenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAuditViberOpenResponse> {
    tmpReq.validate();
    let request = new $_model.AddAuditViberOpenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.auditRecord)) {
      request.auditRecordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.auditRecord, "AuditRecord", "json");
    }

    let query = { };
    if (!$dara.isNull(request.auditRecordShrink)) {
      query["AuditRecord"] = request.auditRecordShrink;
    }

    if (!$dara.isNull(request.auditResult)) {
      query["AuditResult"] = request.auditResult;
    }

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
      action: "AddAuditViberOpen",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAuditViberOpenResponse>(await this.callApi(params, req, runtime), new $_model.AddAuditViberOpenResponse({}));
  }

  /**
   * Signs up for a Viber account.
   * 
   * @param request - AddAuditViberOpenRequest
   * @returns AddAuditViberOpenResponse
   */
  async addAuditViberOpen(request: $_model.AddAuditViberOpenRequest): Promise<$_model.AddAuditViberOpenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAuditViberOpenWithOptions(request, runtime);
  }

  /**
   * Creates an IM group.
   * 
   * @remarks
   * >Notice: 
   * Creating IM groups via the API is a feature in closed beta testing by Meta. Please contact your account manager to be added to the allowlist.
   * - You can only create an IM group by calling this API.
   * - After creating an IM group, you can call the [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) API to generate an invite link.
   * - For the WhatsApp channel type, an IM group is limited to eight members.
   * 
   * @param request - AddChatGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddChatGroupResponse
   */
  async addChatGroupWithOptions(request: $_model.AddChatGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddChatGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupLink)) {
      query["GroupLink"] = request.groupLink;
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

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddChatGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddChatGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddChatGroupResponse({}));
  }

  /**
   * Creates an IM group.
   * 
   * @remarks
   * >Notice: 
   * Creating IM groups via the API is a feature in closed beta testing by Meta. Please contact your account manager to be added to the allowlist.
   * - You can only create an IM group by calling this API.
   * - After creating an IM group, you can call the [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) API to generate an invite link.
   * - For the WhatsApp channel type, an IM group is limited to eight members.
   * 
   * @param request - AddChatGroupRequest
   * @returns AddChatGroupResponse
   */
  async addChatGroup(request: $_model.AddChatGroupRequest): Promise<$_model.AddChatGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addChatGroupWithOptions(request, runtime);
  }

  /**
   * Adds an invite link for an Instant Messaging (IM) group.
   * 
   * @remarks
   * >Notice: 
   * The API for adding invite links to IM groups is in beta testing on Meta. Contact your account manager to add your account to the allowlist.
   * - Before you call this operation, make sure that an IM group has been created.
   * - If you do not have an IM group, call the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) operation to create one.
   * - After you add an invite link by calling this operation, you can use the link to invite members to the group.
   * - Currently, members can join an IM group only using an invite link.
   * - A WhatsApp group can have a maximum of 8 members.
   * 
   * @param request - AddChatGroupInviteLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddChatGroupInviteLinkResponse
   */
  async addChatGroupInviteLinkWithOptions(request: $_model.AddChatGroupInviteLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddChatGroupInviteLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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
      action: "AddChatGroupInviteLink",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddChatGroupInviteLinkResponse>(await this.callApi(params, req, runtime), new $_model.AddChatGroupInviteLinkResponse({}));
  }

  /**
   * Adds an invite link for an Instant Messaging (IM) group.
   * 
   * @remarks
   * >Notice: 
   * The API for adding invite links to IM groups is in beta testing on Meta. Contact your account manager to add your account to the allowlist.
   * - Before you call this operation, make sure that an IM group has been created.
   * - If you do not have an IM group, call the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) operation to create one.
   * - After you add an invite link by calling this operation, you can use the link to invite members to the group.
   * - Currently, members can join an IM group only using an invite link.
   * - A WhatsApp group can have a maximum of 8 members.
   * 
   * @param request - AddChatGroupInviteLinkRequest
   * @returns AddChatGroupInviteLinkResponse
   */
  async addChatGroupInviteLink(request: $_model.AddChatGroupInviteLinkRequest): Promise<$_model.AddChatGroupInviteLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addChatGroupInviteLinkWithOptions(request, runtime);
  }

  /**
   * Adds a phone number to a WhatsApp Business Account (WABA).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Adds a phone number to a WhatsApp Business Account (WABA).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - AddChatappPhoneNumberRequest
   * @returns AddChatappPhoneNumberResponse
   */
  async addChatappPhoneNumber(request: $_model.AddChatappPhoneNumberRequest): Promise<$_model.AddChatappPhoneNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addChatappPhoneNumberWithOptions(request, runtime);
  }

  /**
   * 编辑联系人-新增联系人
   * 
   * @param tmpReq - AddContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddContactsResponse
   */
  async addContactsWithOptions(tmpReq: $_model.AddContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddContactsResponse> {
    tmpReq.validate();
    let request = new $_model.AddContactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.contactDetails)) {
      query["ContactDetails"] = request.contactDetails;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.groups)) {
      query["Groups"] = request.groups;
    }

    if (!$dara.isNull(request.needUpdate)) {
      query["NeedUpdate"] = request.needUpdate;
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
      action: "AddContacts",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddContactsResponse>(await this.callApi(params, req, runtime), new $_model.AddContactsResponse({}));
  }

  /**
   * 编辑联系人-新增联系人
   * 
   * @param request - AddContactsRequest
   * @returns AddContactsResponse
   */
  async addContacts(request: $_model.AddContactsRequest): Promise<$_model.AddContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addContactsWithOptions(request, runtime);
  }

  /**
   * Adds users to a custom audience.
   * 
   * @remarks
   * After users are submitted to a custom audience, Meta matches them. If fewer than 100 users are matched, Meta discards the data. This prevents phone numbers from being linked directly to user tokens. Each API call supports up to 10,000 user records.
   * 
   * @param tmpReq - AddCustomAudienceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAudienceUserResponse
   */
  async addCustomAudienceUserWithOptions(tmpReq: $_model.AddCustomAudienceUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomAudienceUserResponse> {
    tmpReq.validate();
    let request = new $_model.AddCustomAudienceUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.users)) {
      request.usersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.users, "Users", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.batchLastFlag)) {
      query["BatchLastFlag"] = request.batchLastFlag;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.customAudienceId)) {
      query["CustomAudienceId"] = request.customAudienceId;
    }

    if (!$dara.isNull(request.estimatedNumTotal)) {
      query["EstimatedNumTotal"] = request.estimatedNumTotal;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.usersShrink)) {
      query["Users"] = request.usersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAudienceUser",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomAudienceUserResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomAudienceUserResponse({}));
  }

  /**
   * Adds users to a custom audience.
   * 
   * @remarks
   * After users are submitted to a custom audience, Meta matches them. If fewer than 100 users are matched, Meta discards the data. This prevents phone numbers from being linked directly to user tokens. Each API call supports up to 10,000 user records.
   * 
   * @param request - AddCustomAudienceUserRequest
   * @returns AddCustomAudienceUserResponse
   */
  async addCustomAudienceUser(request: $_model.AddCustomAudienceUserRequest): Promise<$_model.AddCustomAudienceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAudienceUserWithOptions(request, runtime);
  }

  /**
   * 添加群组
   * 
   * @param tmpReq - AddGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGroupResponse
   */
  async addGroupWithOptions(tmpReq: $_model.AddGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGroupResponse> {
    tmpReq.validate();
    let request = new $_model.AddGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.contactDetails)) {
      query["ContactDetails"] = request.contactDetails;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "AddGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGroupResponse>(await this.callApi(params, req, runtime), new $_model.AddGroupResponse({}));
  }

  /**
   * 添加群组
   * 
   * @param request - AddGroupRequest
   * @returns AddGroupResponse
   */
  async addGroup(request: $_model.AddGroupRequest): Promise<$_model.AddGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGroupWithOptions(request, runtime);
  }

  /**
   * 新增营销活动
   * 
   * @param tmpReq - AddMarketingFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMarketingFlowResponse
   */
  async addMarketingFlowWithOptions(tmpReq: $_model.AddMarketingFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMarketingFlowResponse> {
    tmpReq.validate();
    let request = new $_model.AddMarketingFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let query = { };
    if (!$dara.isNull(request.activityDesc)) {
      query["ActivityDesc"] = request.activityDesc;
    }

    if (!$dara.isNull(request.activityName)) {
      query["ActivityName"] = request.activityName;
    }

    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.executionType)) {
      query["ExecutionType"] = request.executionType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paramFlag)) {
      query["ParamFlag"] = request.paramFlag;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["Params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.relatedFlowCode)) {
      query["RelatedFlowCode"] = request.relatedFlowCode;
    }

    if (!$dara.isNull(request.relatedFlowName)) {
      query["RelatedFlowName"] = request.relatedFlowName;
    }

    if (!$dara.isNull(request.relatedGroupId)) {
      query["RelatedGroupId"] = request.relatedGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMarketingFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMarketingFlowResponse>(await this.callApi(params, req, runtime), new $_model.AddMarketingFlowResponse({}));
  }

  /**
   * 新增营销活动
   * 
   * @param request - AddMarketingFlowRequest
   * @returns AddMarketingFlowResponse
   */
  async addMarketingFlow(request: $_model.AddMarketingFlowRequest): Promise<$_model.AddMarketingFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMarketingFlowWithOptions(request, runtime);
  }

  /**
   * 绑定DM账号
   * 
   * @param tmpReq - BindDmAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDmAccountResponse
   */
  async bindDmAccountWithOptions(tmpReq: $_model.BindDmAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindDmAccountResponse> {
    tmpReq.validate();
    let request = new $_model.BindDmAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extendAttr)) {
      request.extendAttrShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendAttr, "ExtendAttr", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountCode)) {
      query["AccountCode"] = request.accountCode;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.extendAttrShrink)) {
      query["ExtendAttr"] = request.extendAttrShrink;
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
      action: "BindDmAccount",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindDmAccountResponse>(await this.callApi(params, req, runtime), new $_model.BindDmAccountResponse({}));
  }

  /**
   * 绑定DM账号
   * 
   * @param request - BindDmAccountRequest
   * @returns BindDmAccountResponse
   */
  async bindDmAccount(request: $_model.BindDmAccountRequest): Promise<$_model.BindDmAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDmAccountWithOptions(request, runtime);
  }

  /**
   * 绑定ins的page
   * 
   * @param request - BindInstagramPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindInstagramPageResponse
   */
  async bindInstagramPageWithOptions(request: $_model.BindInstagramPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindInstagramPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "BindInstagramPage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindInstagramPageResponse>(await this.callApi(params, req, runtime), new $_model.BindInstagramPageResponse({}));
  }

  /**
   * 绑定ins的page
   * 
   * @param request - BindInstagramPageRequest
   * @returns BindInstagramPageResponse
   */
  async bindInstagramPage(request: $_model.BindInstagramPageRequest): Promise<$_model.BindInstagramPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindInstagramPageWithOptions(request, runtime);
  }

  /**
   * 绑定选择的pageId
   * 
   * @param request - BindMessengerPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindMessengerPageResponse
   */
  async bindMessengerPageWithOptions(request: $_model.BindMessengerPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindMessengerPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "BindMessengerPage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindMessengerPageResponse>(await this.callApi(params, req, runtime), new $_model.BindMessengerPageResponse({}));
  }

  /**
   * 绑定选择的pageId
   * 
   * @param request - BindMessengerPageRequest
   * @returns BindMessengerPageResponse
   */
  async bindMessengerPage(request: $_model.BindMessengerPageRequest): Promise<$_model.BindMessengerPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindMessengerPageWithOptions(request, runtime);
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * 资源转组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Binds a WhatsApp Business Account (WABA).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Binds a WhatsApp Business Account (WABA).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - ChatappBindWabaRequest
   * @returns ChatappBindWabaResponse
   */
  async chatappBindWaba(request: $_model.ChatappBindWabaRequest): Promise<$_model.ChatappBindWabaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappBindWabaWithOptions(request, runtime);
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
   * Verifies a phone number for migration.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Verifies a phone number for migration.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - ChatappMigrationVerifiedRequest
   * @returns ChatappMigrationVerifiedResponse
   */
  async chatappMigrationVerified(request: $_model.ChatappMigrationVerifiedRequest): Promise<$_model.ChatappMigrationVerifiedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappMigrationVerifiedWithOptions(request, runtime);
  }

  /**
   * Deregisters a phone number from a WhatsApp Business Account (WABA).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled, which may affect your business. Call this API at a reasonable rate.
   * 
   * @param request - ChatappPhoneNumberDeregisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatappPhoneNumberDeregisterResponse
   */
  async chatappPhoneNumberDeregisterWithOptions(request: $_model.ChatappPhoneNumberDeregisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChatappPhoneNumberDeregisterResponse> {
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
   * Deregisters a phone number from a WhatsApp Business Account (WABA).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) per user. If you exceed this limit, API calls are throttled, which may affect your business. Call this API at a reasonable rate.
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
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * This operation allows a maximum of 10 requests per second (RPS) per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second (RPS) per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - ChatappVerifyAndRegisterRequest
   * @returns ChatappVerifyAndRegisterResponse
   */
  async chatappVerifyAndRegister(request: $_model.ChatappVerifyAndRegisterRequest): Promise<$_model.ChatappVerifyAndRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.chatappVerifyAndRegisterWithOptions(request, runtime);
  }

  /**
   * Validates direct message content for WhatsApp.
   * 
   * @param tmpReq - CheckDirectSendMessageSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDirectSendMessageSampleResponse
   */
  async checkDirectSendMessageSampleWithOptions(tmpReq: $_model.CheckDirectSendMessageSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDirectSendMessageSampleResponse> {
    tmpReq.validate();
    let request = new $_model.CheckDirectSendMessageSampleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interactive)) {
      request.interactiveShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interactive, "Interactive", "json");
    }

    if (!$dara.isNull(tmpReq.text)) {
      request.textShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.text, "Text", "json");
    }

    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.interactiveShrink)) {
      query["Interactive"] = request.interactiveShrink;
    }

    if (!$dara.isNull(request.textShrink)) {
      query["Text"] = request.textShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDirectSendMessageSample",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDirectSendMessageSampleResponse>(await this.callApi(params, req, runtime), new $_model.CheckDirectSendMessageSampleResponse({}));
  }

  /**
   * Validates direct message content for WhatsApp.
   * 
   * @param request - CheckDirectSendMessageSampleRequest
   * @returns CheckDirectSendMessageSampleResponse
   */
  async checkDirectSendMessageSample(request: $_model.CheckDirectSendMessageSampleRequest): Promise<$_model.CheckDirectSendMessageSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDirectSendMessageSampleWithOptions(request, runtime);
  }

  /**
   * 复制模板
   * 
   * @param request - CopyTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyTemplateResponse
   */
  async copyTemplateWithOptions(request: $_model.CopyTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyTemplateResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.sceneTemplateCode)) {
      query["SceneTemplateCode"] = request.sceneTemplateCode;
    }

    if (!$dara.isNull(request.sceneTemplateName)) {
      query["SceneTemplateName"] = request.sceneTemplateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CopyTemplateResponse({}));
  }

  /**
   * 复制模板
   * 
   * @param request - CopyTemplateRequest
   * @returns CopyTemplateResponse
   */
  async copyTemplate(request: $_model.CopyTemplateRequest): Promise<$_model.CopyTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyTemplateWithOptions(request, runtime);
  }

  /**
   * 创建Chatflow
   * 
   * @param tmpReq - CreateChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatFlowResponse
   */
  async createChatFlowWithOptions(tmpReq: $_model.CreateChatFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatFlowResponse> {
    tmpReq.validate();
    let request = new $_model.CreateChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowTriggerType)) {
      query["FlowTriggerType"] = request.flowTriggerType;
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

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatFlowResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatFlowResponse({}));
  }

  /**
   * 创建Chatflow
   * 
   * @param request - CreateChatFlowRequest
   * @returns CreateChatFlowResponse
   */
  async createChatFlow(request: $_model.CreateChatFlowRequest): Promise<$_model.CreateChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatFlowWithOptions(request, runtime);
  }

  /**
   * 导入并创建flow
   * 
   * @param tmpReq - CreateChatFlowByImportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatFlowByImportResponse
   */
  async createChatFlowByImportWithOptions(tmpReq: $_model.CreateChatFlowByImportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatFlowByImportResponse> {
    tmpReq.validate();
    let request = new $_model.CreateChatFlowByImportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowViewModel)) {
      query["FlowViewModel"] = request.flowViewModel;
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

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatFlowByImport",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatFlowByImportResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatFlowByImportResponse({}));
  }

  /**
   * 导入并创建flow
   * 
   * @param request - CreateChatFlowByImportRequest
   * @returns CreateChatFlowByImportResponse
   */
  async createChatFlowByImport(request: $_model.CreateChatFlowByImportRequest): Promise<$_model.CreateChatFlowByImportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatFlowByImportWithOptions(request, runtime);
  }

  /**
   * 创建chatFlow日志设置
   * 
   * @param request - CreateChatFlowLogSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatFlowLogSettingResponse
   */
  async createChatFlowLogSettingWithOptions(request: $_model.CreateChatFlowLogSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatFlowLogSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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
      action: "CreateChatFlowLogSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatFlowLogSettingResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatFlowLogSettingResponse({}));
  }

  /**
   * 创建chatFlow日志设置
   * 
   * @param request - CreateChatFlowLogSettingRequest
   * @returns CreateChatFlowLogSettingResponse
   */
  async createChatFlowLogSetting(request: $_model.CreateChatFlowLogSettingRequest): Promise<$_model.CreateChatFlowLogSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatFlowLogSettingWithOptions(request, runtime);
  }

  /**
   * Initiates the migration of a phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Initiates the migration of a phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - CreateChatappMigrationInitiateRequest
   * @returns CreateChatappMigrationInitiateResponse
   */
  async createChatappMigrationInitiate(request: $_model.CreateChatappMigrationInitiateRequest): Promise<$_model.CreateChatappMigrationInitiateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatappMigrationInitiateWithOptions(request, runtime);
  }

  /**
   * Creates a message template. After a template is approved, you can use it to send messages.
   * 
   * @remarks
   * ### QPS limit
   * The queries per second (QPS) limit for this API operation is 50 for a single user. If you exceed the limit, API calls are rate-limited, which may affect your business. We recommend that you call this operation at a reasonable frequency.
   * ### Status change
   * You can monitor template status and quality changes using Message Service (MNS) or HTTP. For more information, see [Message receipts](https://help.aliyun.com/document_detail/421545.html).
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
   * Creates a message template. After a template is approved, you can use it to send messages.
   * 
   * @remarks
   * ### QPS limit
   * The queries per second (QPS) limit for this API operation is 50 for a single user. If you exceed the limit, API calls are rate-limited, which may affect your business. We recommend that you call this operation at a reasonable frequency.
   * ### Status change
   * You can monitor template status and quality changes using Message Service (MNS) or HTTP. For more information, see [Message receipts](https://help.aliyun.com/document_detail/421545.html).
   * 
   * @param request - CreateChatappTemplateRequest
   * @returns CreateChatappTemplateResponse
   */
  async createChatappTemplate(request: $_model.CreateChatappTemplateRequest): Promise<$_model.CreateChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a custom audience.
   * 
   * @param request - CreateCustomAudienceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomAudienceResponse
   */
  async createCustomAudienceWithOptions(request: $_model.CreateCustomAudienceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAudienceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.uploadType)) {
      query["UploadType"] = request.uploadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomAudience",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomAudienceResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomAudienceResponse({}));
  }

  /**
   * Creates a custom audience.
   * 
   * @param request - CreateCustomAudienceRequest
   * @returns CreateCustomAudienceResponse
   */
  async createCustomAudience(request: $_model.CreateCustomAudienceRequest): Promise<$_model.CreateCustomAudienceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomAudienceWithOptions(request, runtime);
  }

  /**
   * Creates a flow.
   * 
   * @remarks
   * The queries per second (QPS) limit for this operation is 5 for each user. API calls that exceed this limit are throttled. Because throttling may affect your business, we recommend that you call this operation at a reasonable rate.
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

    let query = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      query["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.endpointUri)) {
      query["EndpointUri"] = request.endpointUri;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
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
   * Creates a flow.
   * 
   * @remarks
   * The queries per second (QPS) limit for this operation is 5 for each user. API calls that exceed this limit are throttled. Because throttling may affect your business, we recommend that you call this operation at a reasonable rate.
   * 
   * @param request - CreateFlowRequest
   * @returns CreateFlowResponse
   */
  async createFlow(request: $_model.CreateFlowRequest): Promise<$_model.CreateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  /**
   * CreateFlowVersion
   * 
   * @param tmpReq - CreateFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlowVersionResponse
   */
  async createFlowVersionWithOptions(tmpReq: $_model.CreateFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersionCopyFrom)) {
      query["FlowVersionCopyFrom"] = request.flowVersionCopyFrom;
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
      action: "CreateFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlowVersionResponse({}));
  }

  /**
   * CreateFlowVersion
   * 
   * @param request - CreateFlowVersionRequest
   * @returns CreateFlowVersionResponse
   */
  async createFlowVersion(request: $_model.CreateFlowVersionRequest): Promise<$_model.CreateFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlowVersionWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.contactMail)) {
      query["ContactMail"] = request.contactMail;
    }

    if (!$dara.isNull(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!$dara.isNull(request.facebookBmId)) {
      query["FacebookBmId"] = request.facebookBmId;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isConfirmAudit)) {
      query["IsConfirmAudit"] = request.isConfirmAudit;
    }

    if (!$dara.isNull(request.isvTerms)) {
      query["IsvTerms"] = request.isvTerms;
    }

    if (!$dara.isNull(request.officeAddress)) {
      query["OfficeAddress"] = request.officeAddress;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a budget.
   * 
   * @param request - CreateMessageCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessageCampaignResponse
   */
  async createMessageCampaignWithOptions(request: $_model.CreateMessageCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMessageCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.budget)) {
      query["Budget"] = request.budget;
    }

    if (!$dara.isNull(request.budgetType)) {
      query["BudgetType"] = request.budgetType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "CreateMessageCampaign",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMessageCampaignResponse>(await this.callApi(params, req, runtime), new $_model.CreateMessageCampaignResponse({}));
  }

  /**
   * Creates a budget.
   * 
   * @param request - CreateMessageCampaignRequest
   * @returns CreateMessageCampaignResponse
   */
  async createMessageCampaign(request: $_model.CreateMessageCampaignRequest): Promise<$_model.CreateMessageCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMessageCampaignWithOptions(request, runtime);
  }

  /**
   * 嵌入式授权messenger
   * 
   * @param tmpReq - CreateMessengerPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMessengerPageResponse
   */
  async createMessengerPageWithOptions(tmpReq: $_model.CreateMessengerPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMessengerPageResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMessengerPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.adAccountIds)) {
      request.adAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.adAccountIds, "AdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adAccountIdsShrink)) {
      query["AdAccountIds"] = request.adAccountIdsShrink;
    }

    if (!$dara.isNull(request.authenticationCode)) {
      query["AuthenticationCode"] = request.authenticationCode;
    }

    if (!$dara.isNull(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "CreateMessengerPage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMessengerPageResponse>(await this.callApi(params, req, runtime), new $_model.CreateMessengerPageResponse({}));
  }

  /**
   * 嵌入式授权messenger
   * 
   * @param request - CreateMessengerPageRequest
   * @returns CreateMessengerPageResponse
   */
  async createMessengerPage(request: $_model.CreateMessengerPageRequest): Promise<$_model.CreateMessengerPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMessengerPageWithOptions(request, runtime);
  }

  /**
   * Creates a message QR code.
   * 
   * @remarks
   * - After a QR code is created, users can scan it with WhatsApp to start a chat with your business number.
   * - Before calling this API, make sure you have a WhatsApp channel.
   * - If you do not have a WhatsApp channel, create one on the
   *   <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - CreatePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdlWithOptions(request: $_model.CreatePhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePhoneMessageQrdlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.generateQrImage)) {
      query["GenerateQrImage"] = request.generateQrImage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prefilledMessage)) {
      query["PrefilledMessage"] = request.prefilledMessage;
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
   * Creates a message QR code.
   * 
   * @remarks
   * - After a QR code is created, users can scan it with WhatsApp to start a chat with your business number.
   * - Before calling this API, make sure you have a WhatsApp channel.
   * - If you do not have a WhatsApp channel, create one on the
   *   <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - CreatePhoneMessageQrdlRequest
   * @returns CreatePhoneMessageQrdlResponse
   */
  async createPhoneMessageQrdl(request: $_model.CreatePhoneMessageQrdlRequest): Promise<$_model.CreatePhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * 根据嵌入式code获取pageId入库
   * 
   * @param tmpReq - CreateWhatsappConversionApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWhatsappConversionApiResponse
   */
  async createWhatsappConversionApiWithOptions(tmpReq: $_model.CreateWhatsappConversionApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWhatsappConversionApiResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWhatsappConversionApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      query["Permissions"] = request.permissionsShrink;
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
      action: "CreateWhatsappConversionApi",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWhatsappConversionApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateWhatsappConversionApiResponse({}));
  }

  /**
   * 根据嵌入式code获取pageId入库
   * 
   * @param request - CreateWhatsappConversionApiRequest
   * @returns CreateWhatsappConversionApiResponse
   */
  async createWhatsappConversionApi(request: $_model.CreateWhatsappConversionApiRequest): Promise<$_model.CreateWhatsappConversionApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWhatsappConversionApiWithOptions(request, runtime);
  }

  /**
   * 删除流程
   * 
   * @param tmpReq - DeleteChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatFlowResponse
   */
  async deleteChatFlowWithOptions(tmpReq: $_model.DeleteChatFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatFlowResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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
      action: "DeleteChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatFlowResponse({}));
  }

  /**
   * 删除流程
   * 
   * @param request - DeleteChatFlowRequest
   * @returns DeleteChatFlowResponse
   */
  async deleteChatFlow(request: $_model.DeleteChatFlowRequest): Promise<$_model.DeleteChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChatFlowWithOptions(request, runtime);
  }

  /**
   * Deletes an Instant Messaging (IM) group.
   * 
   * @remarks
   * >Notice: 
   * This API is in beta testing for Meta. Contact your account manager to be added to the allowlist before using this endpoint.
   * - Before you call this API, ensure that you have created an IM group.
   * - If you have not created one, create one by calling the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) operation.
   * - After an IM group is deleted, it cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteChatGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatGroupResponse
   */
  async deleteChatGroupWithOptions(request: $_model.DeleteChatGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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
      action: "DeleteChatGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatGroupResponse({}));
  }

  /**
   * Deletes an Instant Messaging (IM) group.
   * 
   * @remarks
   * >Notice: 
   * This API is in beta testing for Meta. Contact your account manager to be added to the allowlist before using this endpoint.
   * - Before you call this API, ensure that you have created an IM group.
   * - If you have not created one, create one by calling the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) operation.
   * - After an IM group is deleted, it cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteChatGroupRequest
   * @returns DeleteChatGroupResponse
   */
  async deleteChatGroup(request: $_model.DeleteChatGroupRequest): Promise<$_model.DeleteChatGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChatGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an IM group invitation link.
   * 
   * @remarks
   * >Notice: 
   * Deleting an IM group invitation link via the API is a feature in beta testing for Meta. To use this feature, contact your account manager to be added to the allowlist.
   * - Before calling this operation, ensure an invitation link has been added to your IM group.
   * - If you do not have an IM group, call the [AddChatGroup](https://help.aliyun.com/document_detail/2998429.html) and [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) operations to create one and add an invitation link.
   * - After deleting the invitation link, you can no longer invite members to the IM group. Proceed with caution.
   * 
   * @param request - DeleteChatGroupInviteLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatGroupInviteLinkResponse
   */
  async deleteChatGroupInviteLinkWithOptions(request: $_model.DeleteChatGroupInviteLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatGroupInviteLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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
      action: "DeleteChatGroupInviteLink",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatGroupInviteLinkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatGroupInviteLinkResponse({}));
  }

  /**
   * Deletes an IM group invitation link.
   * 
   * @remarks
   * >Notice: 
   * Deleting an IM group invitation link via the API is a feature in beta testing for Meta. To use this feature, contact your account manager to be added to the allowlist.
   * - Before calling this operation, ensure an invitation link has been added to your IM group.
   * - If you do not have an IM group, call the [AddChatGroup](https://help.aliyun.com/document_detail/2998429.html) and [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) operations to create one and add an invitation link.
   * - After deleting the invitation link, you can no longer invite members to the IM group. Proceed with caution.
   * 
   * @param request - DeleteChatGroupInviteLinkRequest
   * @returns DeleteChatGroupInviteLinkResponse
   */
  async deleteChatGroupInviteLink(request: $_model.DeleteChatGroupInviteLinkRequest): Promise<$_model.DeleteChatGroupInviteLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChatGroupInviteLinkWithOptions(request, runtime);
  }

  /**
   * Removes members from an IM group.
   * 
   * @remarks
   * >Notice: 
   * This operation is a beta feature from Meta. Contact your account manager to add your account to the allowlist before use.
   * - This operation requires an existing IM group that members have joined via an invitation link.
   * - To create an IM group and add an invitation link, call the [AddChatGroup](https://help.aliyun.com/document_detail/2998429.html) and [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) operations.
   * - Removed members no longer receive messages from the group. Use this operation with caution.
   * 
   * @param tmpReq - DeleteChatGroupParticipantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChatGroupParticipantsResponse
   */
  async deleteChatGroupParticipantsWithOptions(tmpReq: $_model.DeleteChatGroupParticipantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChatGroupParticipantsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteChatGroupParticipantsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.list)) {
      request.listShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.list, "List", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.listShrink)) {
      query["List"] = request.listShrink;
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
      action: "DeleteChatGroupParticipants",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChatGroupParticipantsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChatGroupParticipantsResponse({}));
  }

  /**
   * Removes members from an IM group.
   * 
   * @remarks
   * >Notice: 
   * This operation is a beta feature from Meta. Contact your account manager to add your account to the allowlist before use.
   * - This operation requires an existing IM group that members have joined via an invitation link.
   * - To create an IM group and add an invitation link, call the [AddChatGroup](https://help.aliyun.com/document_detail/2998429.html) and [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) operations.
   * - Removed members no longer receive messages from the group. Use this operation with caution.
   * 
   * @param request - DeleteChatGroupParticipantsRequest
   * @returns DeleteChatGroupParticipantsResponse
   */
  async deleteChatGroupParticipants(request: $_model.DeleteChatGroupParticipantsRequest): Promise<$_model.DeleteChatGroupParticipantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChatGroupParticipantsWithOptions(request, runtime);
  }

  /**
   * Deletes a message template.
   * 
   * @remarks
   * ### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - DeleteChatappTemplateRequest
   * @returns DeleteChatappTemplateResponse
   */
  async deleteChatappTemplate(request: $_model.DeleteChatappTemplateRequest): Promise<$_model.DeleteChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChatappTemplateWithOptions(request, runtime);
  }

  /**
   * 编辑联系人-删除联系人
   * 
   * @param tmpReq - DeleteContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactsResponse
   */
  async deleteContactsWithOptions(tmpReq: $_model.DeleteContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactsResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteContactsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.contactDetails)) {
      query["ContactDetails"] = request.contactDetails;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
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
      action: "DeleteContacts",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactsResponse({}));
  }

  /**
   * 编辑联系人-删除联系人
   * 
   * @param request - DeleteContactsRequest
   * @returns DeleteContactsResponse
   */
  async deleteContacts(request: $_model.DeleteContactsRequest): Promise<$_model.DeleteContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactsWithOptions(request, runtime);
  }

  /**
   * 删除联系人(选择后删除)
   * 
   * @param request - DeleteContactsByIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactsByIdsResponse
   */
  async deleteContactsByIdsWithOptions(request: $_model.DeleteContactsByIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactsByIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contacts)) {
      query["Contacts"] = request.contacts;
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
      action: "DeleteContactsByIds",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactsByIdsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactsByIdsResponse({}));
  }

  /**
   * 删除联系人(选择后删除)
   * 
   * @param request - DeleteContactsByIdsRequest
   * @returns DeleteContactsByIdsResponse
   */
  async deleteContactsByIds(request: $_model.DeleteContactsByIdsRequest): Promise<$_model.DeleteContactsByIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactsByIdsWithOptions(request, runtime);
  }

  /**
   * Deletes a WhatsApp flow. Only flows in the draft state can be deleted.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - DeleteFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowResponse
   */
  async deleteFlowWithOptions(request: $_model.DeleteFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Deletes a WhatsApp flow. Only flows in the draft state can be deleted.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - DeleteFlowRequest
   * @returns DeleteFlowResponse
   */
  async deleteFlow(request: $_model.DeleteFlowRequest): Promise<$_model.DeleteFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  /**
   * 删除流程版本
   * 
   * @param tmpReq - DeleteFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlowVersionResponse
   */
  async deleteFlowVersionWithOptions(tmpReq: $_model.DeleteFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
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
      action: "DeleteFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlowVersionResponse({}));
  }

  /**
   * 删除流程版本
   * 
   * @param request - DeleteFlowVersionRequest
   * @returns DeleteFlowVersionResponse
   */
  async deleteFlowVersion(request: $_model.DeleteFlowVersionRequest): Promise<$_model.DeleteFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlowVersionWithOptions(request, runtime);
  }

  /**
   * 删除群组
   * 
   * @param request - DeleteGroupByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupByIdResponse
   */
  async deleteGroupByIdWithOptions(request: $_model.DeleteGroupByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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
      action: "DeleteGroupById",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupByIdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupByIdResponse({}));
  }

  /**
   * 删除群组
   * 
   * @param request - DeleteGroupByIdRequest
   * @returns DeleteGroupByIdResponse
   */
  async deleteGroupById(request: $_model.DeleteGroupByIdRequest): Promise<$_model.DeleteGroupByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupByIdWithOptions(request, runtime);
  }

  /**
   * 删除ins的page
   * 
   * @param request - DeleteInstagramPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstagramPageResponse
   */
  async deleteInstagramPageWithOptions(request: $_model.DeleteInstagramPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstagramPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "DeleteInstagramPage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstagramPageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstagramPageResponse({}));
  }

  /**
   * 删除ins的page
   * 
   * @param request - DeleteInstagramPageRequest
   * @returns DeleteInstagramPageResponse
   */
  async deleteInstagramPage(request: $_model.DeleteInstagramPageRequest): Promise<$_model.DeleteInstagramPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstagramPageWithOptions(request, runtime);
  }

  /**
   * Deletes the specified instance.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes the specified instance.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 删除营销活动
   * 
   * @param request - DeleteMarketingFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMarketingFlowResponse
   */
  async deleteMarketingFlowWithOptions(request: $_model.DeleteMarketingFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMarketingFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityCode)) {
      query["ActivityCode"] = request.activityCode;
    }

    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
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
      action: "DeleteMarketingFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMarketingFlowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMarketingFlowResponse({}));
  }

  /**
   * 删除营销活动
   * 
   * @param request - DeleteMarketingFlowRequest
   * @returns DeleteMarketingFlowResponse
   */
  async deleteMarketingFlow(request: $_model.DeleteMarketingFlowRequest): Promise<$_model.DeleteMarketingFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMarketingFlowWithOptions(request, runtime);
  }

  /**
   * Deletes the budget for a marketing campaign.
   * 
   * @param request - DeleteMessageCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessageCampaignResponse
   */
  async deleteMessageCampaignWithOptions(request: $_model.DeleteMessageCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessageCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "DeleteMessageCampaign",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessageCampaignResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessageCampaignResponse({}));
  }

  /**
   * Deletes the budget for a marketing campaign.
   * 
   * @param request - DeleteMessageCampaignRequest
   * @returns DeleteMessageCampaignResponse
   */
  async deleteMessageCampaign(request: $_model.DeleteMessageCampaignRequest): Promise<$_model.DeleteMessageCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessageCampaignWithOptions(request, runtime);
  }

  /**
   * 删除messenger的page
   * 
   * @param request - DeleteMessengerPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMessengerPageResponse
   */
  async deleteMessengerPageWithOptions(request: $_model.DeleteMessengerPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMessengerPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "DeleteMessengerPage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMessengerPageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMessengerPageResponse({}));
  }

  /**
   * 删除messenger的page
   * 
   * @param request - DeleteMessengerPageRequest
   * @returns DeleteMessengerPageResponse
   */
  async deleteMessengerPage(request: $_model.DeleteMessengerPageRequest): Promise<$_model.DeleteMessengerPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMessengerPageWithOptions(request, runtime);
  }

  /**
   * Deletes a message QR code.
   * 
   * @remarks
   * - After a message QR code is deleted, users can no longer scan the QR code to start a chat with your business number. Proceed with caution.
   * - If you have not created a message QR code, call the [CreatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638749.html) API to create one.
   * #### QPS limits
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - DeletePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdlWithOptions(request: $_model.DeletePhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePhoneMessageQrdlResponse> {
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

    if (!$dara.isNull(request.qrdlCode)) {
      query["QrdlCode"] = request.qrdlCode;
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
   * Deletes a message QR code.
   * 
   * @remarks
   * - After a message QR code is deleted, users can no longer scan the QR code to start a chat with your business number. Proceed with caution.
   * - If you have not created a message QR code, call the [CreatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638749.html) API to create one.
   * #### QPS limits
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - DeletePhoneMessageQrdlRequest
   * @returns DeletePhoneMessageQrdlResponse
   */
  async deletePhoneMessageQrdl(request: $_model.DeletePhoneMessageQrdlRequest): Promise<$_model.DeletePhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Deprecates a WhatsApp flow.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - DeprecateFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeprecateFlowResponse
   */
  async deprecateFlowWithOptions(request: $_model.DeprecateFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeprecateFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Deprecates a WhatsApp flow.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - DeprecateFlowRequest
   * @returns DeprecateFlowResponse
   */
  async deprecateFlow(request: $_model.DeprecateFlowRequest): Promise<$_model.DeprecateFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deprecateFlowWithOptions(request, runtime);
  }

  /**
   * Enables statistics for WhatsApp metrics.
   * 
   * @remarks
   * - Before retrieving metrics for messages sent through WhatsApp channels or for Marketing templates, call this operation to enable statistics for WhatsApp Return on Investment (ROI) metrics.
   * - After you enable statistics for WhatsApp ROI metrics, it takes at least one day for data to become available. Metrics for messages sent and for Marketing templates used before you enabled this feature are not collected.
   * - After you enable it, you can call the [GetChatappPhoneNumberMetric](https://help.aliyun.com/document_detail/2557788.html) operation to query metrics for messages sent from a phone number, or the [GetChatappTemplateMetric](https://help.aliyun.com/document_detail/2557790.html) operation to query metrics for Marketing templates.
   * ### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Enables statistics for WhatsApp metrics.
   * 
   * @remarks
   * - Before retrieving metrics for messages sent through WhatsApp channels or for Marketing templates, call this operation to enable statistics for WhatsApp Return on Investment (ROI) metrics.
   * - After you enable statistics for WhatsApp ROI metrics, it takes at least one day for data to become available. Metrics for messages sent and for Marketing templates used before you enabled this feature are not collected.
   * - After you enable it, you can call the [GetChatappPhoneNumberMetric](https://help.aliyun.com/document_detail/2557788.html) operation to query metrics for messages sent from a phone number, or the [GetChatappTemplateMetric](https://help.aliyun.com/document_detail/2557790.html) operation to query metrics for Marketing templates.
   * ### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - EnableWhatsappROIMetricRequest
   * @returns EnableWhatsappROIMetricResponse
   */
  async enableWhatsappROIMetric(request: $_model.EnableWhatsappROIMetricRequest): Promise<$_model.EnableWhatsappROIMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableWhatsappROIMetricWithOptions(request, runtime);
  }

  /**
   * flow绑定号码
   * 
   * @param tmpReq - FlowBindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlowBindPhoneResponse
   */
  async flowBindPhoneWithOptions(tmpReq: $_model.FlowBindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlowBindPhoneResponse> {
    tmpReq.validate();
    let request = new $_model.FlowBindPhoneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phoneNumbers)) {
      request.phoneNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumbers, "PhoneNumbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.channelCode)) {
      query["ChannelCode"] = request.channelCode;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbersShrink)) {
      query["PhoneNumbers"] = request.phoneNumbersShrink;
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
      action: "FlowBindPhone",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlowBindPhoneResponse>(await this.callApi(params, req, runtime), new $_model.FlowBindPhoneResponse({}));
  }

  /**
   * flow绑定号码
   * 
   * @param request - FlowBindPhoneRequest
   * @returns FlowBindPhoneResponse
   */
  async flowBindPhone(request: $_model.FlowBindPhoneRequest): Promise<$_model.FlowBindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flowBindPhoneWithOptions(request, runtime);
  }

  /**
   * flow重绑定手机号
   * 
   * @param tmpReq - FlowRebindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlowRebindPhoneResponse
   */
  async flowRebindPhoneWithOptions(tmpReq: $_model.FlowRebindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlowRebindPhoneResponse> {
    tmpReq.validate();
    let request = new $_model.FlowRebindPhoneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phoneNumbers)) {
      request.phoneNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumbers, "PhoneNumbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.channelCode)) {
      query["ChannelCode"] = request.channelCode;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbersShrink)) {
      query["PhoneNumbers"] = request.phoneNumbersShrink;
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
      action: "FlowRebindPhone",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlowRebindPhoneResponse>(await this.callApi(params, req, runtime), new $_model.FlowRebindPhoneResponse({}));
  }

  /**
   * flow重绑定手机号
   * 
   * @param request - FlowRebindPhoneRequest
   * @returns FlowRebindPhoneResponse
   */
  async flowRebindPhone(request: $_model.FlowRebindPhoneRequest): Promise<$_model.FlowRebindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flowRebindPhoneWithOptions(request, runtime);
  }

  /**
   * flow解绑手机号
   * 
   * @param tmpReq - FlowUnbindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlowUnbindPhoneResponse
   */
  async flowUnbindPhoneWithOptions(tmpReq: $_model.FlowUnbindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlowUnbindPhoneResponse> {
    tmpReq.validate();
    let request = new $_model.FlowUnbindPhoneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phoneNumbers)) {
      request.phoneNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumbers, "PhoneNumbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumbersShrink)) {
      query["PhoneNumbers"] = request.phoneNumbersShrink;
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
      action: "FlowUnbindPhone",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlowUnbindPhoneResponse>(await this.callApi(params, req, runtime), new $_model.FlowUnbindPhoneResponse({}));
  }

  /**
   * flow解绑手机号
   * 
   * @param request - FlowUnbindPhoneRequest
   * @returns FlowUnbindPhoneResponse
   */
  async flowUnbindPhone(request: $_model.FlowUnbindPhoneRequest): Promise<$_model.FlowUnbindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flowUnbindPhoneWithOptions(request, runtime);
  }

  /**
   * 获取临时的URL
   * 
   * @param request - GeneratePresignedUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GeneratePresignedUrlResponse
   */
  async generatePresignedUrlWithOptions(request: $_model.GeneratePresignedUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GeneratePresignedUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
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
      action: "GeneratePresignedUrl",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GeneratePresignedUrlResponse>(await this.callApi(params, req, runtime), new $_model.GeneratePresignedUrlResponse({}));
  }

  /**
   * 获取临时的URL
   * 
   * @param request - GeneratePresignedUrlRequest
   * @returns GeneratePresignedUrlResponse
   */
  async generatePresignedUrl(request: $_model.GeneratePresignedUrlRequest): Promise<$_model.GeneratePresignedUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generatePresignedUrlWithOptions(request, runtime);
  }

  /**
   * 通过类型查询出个人待审核的单子
   * 
   * @param request - GetAuditRequestByTypeUnAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditRequestByTypeUnAuditResponse
   */
  async getAuditRequestByTypeUnAuditWithOptions(request: $_model.GetAuditRequestByTypeUnAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditRequestByTypeUnAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.requestType)) {
      query["RequestType"] = request.requestType;
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
      action: "GetAuditRequestByTypeUnAudit",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditRequestByTypeUnAuditResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditRequestByTypeUnAuditResponse({}));
  }

  /**
   * 通过类型查询出个人待审核的单子
   * 
   * @param request - GetAuditRequestByTypeUnAuditRequest
   * @returns GetAuditRequestByTypeUnAuditResponse
   */
  async getAuditRequestByTypeUnAudit(request: $_model.GetAuditRequestByTypeUnAuditRequest): Promise<$_model.GetAuditRequestByTypeUnAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditRequestByTypeUnAuditWithOptions(request, runtime);
  }

  /**
   * Retrieves auto-generated templates.
   * 
   * @param request - GetAutoGeneratedTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoGeneratedTemplateResponse
   */
  async getAutoGeneratedTemplateWithOptions(request: $_model.GetAutoGeneratedTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoGeneratedTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoGeneratedTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoGeneratedTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoGeneratedTemplateResponse({}));
  }

  /**
   * Retrieves auto-generated templates.
   * 
   * @param request - GetAutoGeneratedTemplateRequest
   * @returns GetAutoGeneratedTemplateResponse
   */
  async getAutoGeneratedTemplate(request: $_model.GetAutoGeneratedTemplateRequest): Promise<$_model.GetAutoGeneratedTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoGeneratedTemplateWithOptions(request, runtime);
  }

  /**
   * 获取ChatFlow运行数据
   * 
   * @param tmpReq - GetChatFlowMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatFlowMetricResponse
   */
  async getChatFlowMetricWithOptions(tmpReq: $_model.GetChatFlowMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatFlowMetricResponse> {
    tmpReq.validate();
    let request = new $_model.GetChatFlowMetricShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    if (!$dara.isNull(tmpReq.metricParam)) {
      request.metricParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricParam, "MetricParam", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricParamShrink)) {
      query["MetricParam"] = request.metricParamShrink;
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

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatFlowMetric",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatFlowMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetChatFlowMetricResponse({}));
  }

  /**
   * 获取ChatFlow运行数据
   * 
   * @param request - GetChatFlowMetricRequest
   * @returns GetChatFlowMetricResponse
   */
  async getChatFlowMetric(request: $_model.GetChatFlowMetricRequest): Promise<$_model.GetChatFlowMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatFlowMetricWithOptions(request, runtime);
  }

  /**
   * 查询chatFlow模板
   * 
   * @param request - GetChatFlowTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatFlowTemplateResponse
   */
  async getChatFlowTemplateWithOptions(request: $_model.GetChatFlowTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatFlowTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "GetChatFlowTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatFlowTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetChatFlowTemplateResponse({}));
  }

  /**
   * 查询chatFlow模板
   * 
   * @param request - GetChatFlowTemplateRequest
   * @returns GetChatFlowTemplateResponse
   */
  async getChatFlowTemplate(request: $_model.GetChatFlowTemplateRequest): Promise<$_model.GetChatFlowTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatFlowTemplateWithOptions(request, runtime);
  }

  /**
   * 查询ChatApp开通状态
   * 
   * @param request - GetChatappOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappOpenStatusResponse
   */
  async getChatappOpenStatusWithOptions(request: $_model.GetChatappOpenStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappOpenStatusResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatappOpenStatus",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappOpenStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappOpenStatusResponse({}));
  }

  /**
   * 查询ChatApp开通状态
   * 
   * @param request - GetChatappOpenStatusRequest
   * @returns GetChatappOpenStatusResponse
   */
  async getChatappOpenStatus(request: $_model.GetChatappOpenStatusRequest): Promise<$_model.GetChatappOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappOpenStatusWithOptions(request, runtime);
  }

  /**
   * Queries the message sending metrics for a phone number in a WhatsApp channel.
   * 
   * @remarks
   * - You can call this operation to query message sending metrics. Alternatively, you can query the metrics in the ChatApp console by choosing <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Daily Statistics Reports for Customers**.
   * - Before you call this operation, call the [EnableWhatsAppROIMetric](https://help.aliyun.com/document_detail/2557789.html) operation to enable return on investment (ROI) metric collection for WhatsApp. Statistics are available at least one day after you enable this feature. Message sending metrics generated before you enable the feature are not collected.
   * - After you enable ROI metric collection for WhatsApp, make sure that messages are successfully sent from your channel. To send messages, go to the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page, select a WhatsApp channel, and choose **Message Sending**. You can also call [SendChatappMessage](https://help.aliyun.com/document_detail/432208.html) or [SendChatappMassMessage](https://help.aliyun.com/document_detail/447926.html).
   * ### QPS limit
   * This operation allows a maximum of 50 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * Queries the message sending metrics for a phone number in a WhatsApp channel.
   * 
   * @remarks
   * - You can call this operation to query message sending metrics. Alternatively, you can query the metrics in the ChatApp console by choosing <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Daily Statistics Reports for Customers**.
   * - Before you call this operation, call the [EnableWhatsAppROIMetric](https://help.aliyun.com/document_detail/2557789.html) operation to enable return on investment (ROI) metric collection for WhatsApp. Statistics are available at least one day after you enable this feature. Message sending metrics generated before you enable the feature are not collected.
   * - After you enable ROI metric collection for WhatsApp, make sure that messages are successfully sent from your channel. To send messages, go to the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page, select a WhatsApp channel, and choose **Message Sending**. You can also call [SendChatappMessage](https://help.aliyun.com/document_detail/432208.html) or [SendChatappMassMessage](https://help.aliyun.com/document_detail/447926.html).
   * ### QPS limit
   * This operation allows a maximum of 50 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetChatappPhoneNumberMetricRequest
   * @returns GetChatappPhoneNumberMetricResponse
   */
  async getChatappPhoneNumberMetric(request: $_model.GetChatappPhoneNumberMetricRequest): Promise<$_model.GetChatappPhoneNumberMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappPhoneNumberMetricWithOptions(request, runtime);
  }

  /**
   * 获取Chatapp号码其它控制
   * 
   * @param request - GetChatappPhoneNumberSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatappPhoneNumberSettingResponse
   */
  async getChatappPhoneNumberSettingWithOptions(request: $_model.GetChatappPhoneNumberSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatappPhoneNumberSettingResponse> {
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
      action: "GetChatappPhoneNumberSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatappPhoneNumberSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetChatappPhoneNumberSettingResponse({}));
  }

  /**
   * 获取Chatapp号码其它控制
   * 
   * @param request - GetChatappPhoneNumberSettingRequest
   * @returns GetChatappPhoneNumberSettingResponse
   */
  async getChatappPhoneNumberSetting(request: $_model.GetChatappPhoneNumberSettingRequest): Promise<$_model.GetChatappPhoneNumberSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappPhoneNumberSettingWithOptions(request, runtime);
  }

  /**
   * Queries the details of a message template.
   * 
   * @remarks
   * ### QPS limit
   * This operation allows a maximum of 5 requests per second (RPS) per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * Queries the details of a message template.
   * 
   * @remarks
   * ### QPS limit
   * This operation allows a maximum of 5 requests per second (RPS) per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetChatappTemplateDetailRequest
   * @returns GetChatappTemplateDetailResponse
   */
  async getChatappTemplateDetail(request: $_model.GetChatappTemplateDetailRequest): Promise<$_model.GetChatappTemplateDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappTemplateDetailWithOptions(request, runtime);
  }

  /**
   * Queries the metrics for a marketing template.
   * 
   * @remarks
   * - This API queries metrics only for marketing templates of WhatsApp channels.
   * - Before you call this operation, call [EnableWhatsAppROIMetric](https://help.aliyun.com/document_detail/2557789.html) to enable metric statistics for WhatsApp Return on Investment (ROI). It takes at least one day for the data to become available after you enable this feature. Metrics are not collected for marketing templates that were used before this feature was enabled.
   * - After you enable metric statistics for WhatsApp ROI, ensure that messages have been sent using the marketing templates of your channels. To send messages, go to the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page, select a WhatsApp channel, and choose **Message Sending**. You can also call [SendChatappMessage](https://help.aliyun.com/document_detail/432208.html) or [SendChatappMassMessage](https://help.aliyun.com/document_detail/447926.html).
   * ### QPS limits
   * This API is limited to 50 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
   * Queries the metrics for a marketing template.
   * 
   * @remarks
   * - This API queries metrics only for marketing templates of WhatsApp channels.
   * - Before you call this operation, call [EnableWhatsAppROIMetric](https://help.aliyun.com/document_detail/2557789.html) to enable metric statistics for WhatsApp Return on Investment (ROI). It takes at least one day for the data to become available after you enable this feature. Metrics are not collected for marketing templates that were used before this feature was enabled.
   * - After you enable metric statistics for WhatsApp ROI, ensure that messages have been sent using the marketing templates of your channels. To send messages, go to the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page, select a WhatsApp channel, and choose **Message Sending**. You can also call [SendChatappMessage](https://help.aliyun.com/document_detail/432208.html) or [SendChatappMassMessage](https://help.aliyun.com/document_detail/447926.html).
   * ### QPS limits
   * This API is limited to 50 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetChatappUploadAuthorizationRequest
   * @returns GetChatappUploadAuthorizationResponse
   */
  async getChatappUploadAuthorization(request: $_model.GetChatappUploadAuthorizationRequest): Promise<$_model.GetChatappUploadAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChatappUploadAuthorizationWithOptions(request, runtime);
  }

  /**
   * Requests a verification code to be sent to the specified phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Requests a verification code to be sent to the specified phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetCommerceSettingRequest
   * @returns GetCommerceSettingResponse
   */
  async getCommerceSetting(request: $_model.GetCommerceSettingRequest): Promise<$_model.GetCommerceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommerceSettingWithOptions(request, runtime);
  }

  /**
   * Queries the conversational automation settings for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * This operation retrieves data directly from Meta. Meta imposes its own rate limits on the total number of calls. Stay within the specified limit.
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
   * Queries the conversational automation settings for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * This operation retrieves data directly from Meta. Meta imposes its own rate limits on the total number of calls. Stay within the specified limit.
   * 
   * @param request - GetConversationalAutomationRequest
   * @returns GetConversationalAutomationResponse
   */
  async getConversationalAutomation(request: $_model.GetConversationalAutomationRequest): Promise<$_model.GetConversationalAutomationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * 查询客户来源站点
   * 
   * @param request - GetCustomerSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomerSiteResponse
   */
  async getCustomerSiteWithOptions(request: $_model.GetCustomerSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomerSiteResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomerSite",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCustomerSiteResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomerSiteResponse({}));
  }

  /**
   * 查询客户来源站点
   * 
   * @param request - GetCustomerSiteRequest
   * @returns GetCustomerSiteResponse
   */
  async getCustomerSite(request: $_model.GetCustomerSiteRequest): Promise<$_model.GetCustomerSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCustomerSiteWithOptions(request, runtime);
  }

  /**
   * 下载excel数据
   * 
   * @param tmpReq - GetDownloadExcelListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDownloadExcelListResponse
   */
  async getDownloadExcelListWithOptions(tmpReq: $_model.GetDownloadExcelListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDownloadExcelListResponse> {
    tmpReq.validate();
    let request = new $_model.GetDownloadExcelListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    if (!$dara.isNull(tmpReq.countryNames)) {
      request.countryNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.countryNames, "CountryNames", "json");
    }

    if (!$dara.isNull(tmpReq.groupIds)) {
      request.groupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.groupIds, "GroupIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.countryNamesShrink)) {
      query["CountryNames"] = request.countryNamesShrink;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupIdsShrink)) {
      query["GroupIds"] = request.groupIdsShrink;
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

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDownloadExcelList",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDownloadExcelListResponse>(await this.callApi(params, req, runtime), new $_model.GetDownloadExcelListResponse({}));
  }

  /**
   * 下载excel数据
   * 
   * @param request - GetDownloadExcelListRequest
   * @returns GetDownloadExcelListResponse
   */
  async getDownloadExcelList(request: $_model.GetDownloadExcelListRequest): Promise<$_model.GetDownloadExcelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDownloadExcelListWithOptions(request, runtime);
  }

  /**
   * 获取ins的page列表
   * 
   * @param request - GetFbInstagramPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFbInstagramPagesResponse
   */
  async getFbInstagramPagesWithOptions(request: $_model.GetFbInstagramPagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFbInstagramPagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "GetFbInstagramPages",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFbInstagramPagesResponse>(await this.callApi(params, req, runtime), new $_model.GetFbInstagramPagesResponse({}));
  }

  /**
   * 获取ins的page列表
   * 
   * @param request - GetFbInstagramPagesRequest
   * @returns GetFbInstagramPagesResponse
   */
  async getFbInstagramPages(request: $_model.GetFbInstagramPagesRequest): Promise<$_model.GetFbInstagramPagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFbInstagramPagesWithOptions(request, runtime);
  }

  /**
   * 获取facebook的pageId列表
   * 
   * @param request - GetFbMessengerPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFbMessengerPagesResponse
   */
  async getFbMessengerPagesWithOptions(request: $_model.GetFbMessengerPagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFbMessengerPagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "GetFbMessengerPages",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFbMessengerPagesResponse>(await this.callApi(params, req, runtime), new $_model.GetFbMessengerPagesResponse({}));
  }

  /**
   * 获取facebook的pageId列表
   * 
   * @param request - GetFbMessengerPagesRequest
   * @returns GetFbMessengerPagesResponse
   */
  async getFbMessengerPages(request: $_model.GetFbMessengerPagesRequest): Promise<$_model.GetFbMessengerPagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFbMessengerPagesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a WhatsApp flow, including its status, name, categories, and preview URL.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have created a WhatsApp flow.
   * - If you have not created a WhatsApp flow, call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) API to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - GetFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowResponse
   */
  async getFlowWithOptions(request: $_model.GetFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Queries the details of a WhatsApp flow, including its status, name, categories, and preview URL.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have created a WhatsApp flow.
   * - If you have not created a WhatsApp flow, call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) API to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - GetFlowRequest
   * @returns GetFlowResponse
   */
  async getFlow(request: $_model.GetFlowRequest): Promise<$_model.GetFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowWithOptions(request, runtime);
  }

  /**
   * Queries the JSON content of a WhatsApp flow.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have created a WhatsApp flow.
   * - If you have not created a WhatsApp flow, call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) API to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - GetFlowJSONAssestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowJSONAssestResponse
   */
  async getFlowJSONAssestWithOptions(request: $_model.GetFlowJSONAssestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowJSONAssestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Queries the JSON content of a WhatsApp flow.
   * 
   * @remarks
   * - Before calling this operation, make sure that you have created a WhatsApp flow.
   * - If you have not created a WhatsApp flow, call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) API to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - GetFlowJSONAssestRequest
   * @returns GetFlowJSONAssestResponse
   */
  async getFlowJSONAssest(request: $_model.GetFlowJSONAssestRequest): Promise<$_model.GetFlowJSONAssestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowJSONAssestWithOptions(request, runtime);
  }

  /**
   * Generates a temporary preview URL for a WhatsApp flow.
   * 
   * @remarks
   * - After you create a WhatsApp flow, call this operation to generate a temporary preview URL for the flow.
   * - Before you call this operation, make sure that you have created a WhatsApp flow.
   * - If you do not have a WhatsApp flow, you can call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) API to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - GetFlowPreviewUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrlWithOptions(request: $_model.GetFlowPreviewUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFlowPreviewUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Generates a temporary preview URL for a WhatsApp flow.
   * 
   * @remarks
   * - After you create a WhatsApp flow, call this operation to generate a temporary preview URL for the flow.
   * - Before you call this operation, make sure that you have created a WhatsApp flow.
   * - If you do not have a WhatsApp flow, you can call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) API to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - GetFlowPreviewUrlRequest
   * @returns GetFlowPreviewUrlResponse
   */
  async getFlowPreviewUrl(request: $_model.GetFlowPreviewUrlRequest): Promise<$_model.GetFlowPreviewUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFlowPreviewUrlWithOptions(request, runtime);
  }

  /**
   * 查询群组是否重名
   * 
   * @param tmpReq - GetGroupExistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupExistResponse
   */
  async getGroupExistWithOptions(tmpReq: $_model.GetGroupExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupExistResponse> {
    tmpReq.validate();
    let request = new $_model.GetGroupExistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "GetGroupExist",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupExistResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupExistResponse({}));
  }

  /**
   * 查询群组是否重名
   * 
   * @param request - GetGroupExistRequest
   * @returns GetGroupExistResponse
   */
  async getGroupExist(request: $_model.GetGroupExistRequest): Promise<$_model.GetGroupExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGroupExistWithOptions(request, runtime);
  }

  /**
   * Retrieves campaign metrics.
   * 
   * @param request - GetMessageCampaignInsightsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageCampaignInsightsResponse
   */
  async getMessageCampaignInsightsWithOptions(request: $_model.GetMessageCampaignInsightsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageCampaignInsightsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "GetMessageCampaignInsights",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageCampaignInsightsResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageCampaignInsightsResponse({}));
  }

  /**
   * Retrieves campaign metrics.
   * 
   * @param request - GetMessageCampaignInsightsRequest
   * @returns GetMessageCampaignInsightsResponse
   */
  async getMessageCampaignInsights(request: $_model.GetMessageCampaignInsightsRequest): Promise<$_model.GetMessageCampaignInsightsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMessageCampaignInsightsWithOptions(request, runtime);
  }

  /**
   * Gets the verification code for phone number migration.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Gets the verification code for phone number migration.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - GetMigrationVerifyCodeRequest
   * @returns GetMigrationVerifyCodeResponse
   */
  async getMigrationVerifyCode(request: $_model.GetMigrationVerifyCodeRequest): Promise<$_model.GetMigrationVerifyCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMigrationVerifyCodeWithOptions(request, runtime);
  }

  /**
   * Gets permissions using the code obtained from the embeded signup flow.
   * 
   * @remarks
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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

    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      query["Permissions"] = request.permissionsShrink;
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
   * Gets permissions using the code obtained from the embeded signup flow.
   * 
   * @remarks
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - GetPermissionByCodeRequest
   * @returns GetPermissionByCodeResponse
   */
  async getPermissionByCode(request: $_model.GetPermissionByCodeRequest): Promise<$_model.GetPermissionByCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPermissionByCodeWithOptions(request, runtime);
  }

  /**
   * Retrieves the public key for a phone number.
   * 
   * @remarks
   * - Before calling this API, make sure that you have added a verified phone number to your WhatsApp Business Account (WABA).
   * - If no phone number is added to your WABA, call the [GetChatappVerifyCode](https://help.aliyun.com/document_detail/600746.html) and [ChatappVerifyAndRegister](https://help.aliyun.com/document_detail/600770.html) APIs to get a verification code to register and verify the phone number.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - GetPhoneEncryptionPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKeyWithOptions(request: $_model.GetPhoneEncryptionPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneEncryptionPublicKeyResponse> {
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
   * Retrieves the public key for a phone number.
   * 
   * @remarks
   * - Before calling this API, make sure that you have added a verified phone number to your WhatsApp Business Account (WABA).
   * - If no phone number is added to your WABA, call the [GetChatappVerifyCode](https://help.aliyun.com/document_detail/600746.html) and [ChatappVerifyAndRegister](https://help.aliyun.com/document_detail/600770.html) APIs to get a verification code to register and verify the phone number.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - GetPhoneEncryptionPublicKeyRequest
   * @returns GetPhoneEncryptionPublicKeyResponse
   */
  async getPhoneEncryptionPublicKey(request: $_model.GetPhoneEncryptionPublicKeyRequest): Promise<$_model.GetPhoneEncryptionPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * Retrieves the verification status of a phone number.
   * 
   * @remarks
   * - You can call this operation to retrieve the verification status of a phone number. You can also view the status on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Phone Number Management** page.
   * - Before calling this operation, add a phone number to your WhatsApp Business Account (WABA) and submit it for verification.
   * - If you have not added a phone number to your WABA, call the [GetChatappVerifyCode](https://help.aliyun.com/document_detail/600746.html) and [ChatappVerifyAndRegister](https://help.aliyun.com/document_detail/600770.html) APIs to obtain a verification code and register the number.
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetPhoneNumberVerificationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatusWithOptions(request: $_model.GetPhoneNumberVerificationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPhoneNumberVerificationStatusResponse> {
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
   * Retrieves the verification status of a phone number.
   * 
   * @remarks
   * - You can call this operation to retrieve the verification status of a phone number. You can also view the status on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Phone Number Management** page.
   * - Before calling this operation, add a phone number to your WhatsApp Business Account (WABA) and submit it for verification.
   * - If you have not added a phone number to your WABA, call the [GetChatappVerifyCode](https://help.aliyun.com/document_detail/600746.html) and [ChatappVerifyAndRegister](https://help.aliyun.com/document_detail/600770.html) APIs to obtain a verification code and register the number.
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetPhoneNumberVerificationStatusRequest
   * @returns GetPhoneNumberVerificationStatusResponse
   */
  async getPhoneNumberVerificationStatus(request: $_model.GetPhoneNumberVerificationStatusRequest): Promise<$_model.GetPhoneNumberVerificationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPhoneNumberVerificationStatusWithOptions(request, runtime);
  }

  /**
   * 下载保证函模板的地址
   * 
   * @param request - GetPledgeTemplateAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPledgeTemplateAddressResponse
   */
  async getPledgeTemplateAddressWithOptions(request: $_model.GetPledgeTemplateAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPledgeTemplateAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.industryType)) {
      query["IndustryType"] = request.industryType;
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
      action: "GetPledgeTemplateAddress",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPledgeTemplateAddressResponse>(await this.callApi(params, req, runtime), new $_model.GetPledgeTemplateAddressResponse({}));
  }

  /**
   * 下载保证函模板的地址
   * 
   * @param request - GetPledgeTemplateAddressRequest
   * @returns GetPledgeTemplateAddressResponse
   */
  async getPledgeTemplateAddress(request: $_model.GetPledgeTemplateAddressRequest): Promise<$_model.GetPledgeTemplateAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPledgeTemplateAddressWithOptions(request, runtime);
  }

  /**
   * Gets the ID for a pre-validated phone number. Use this ID to select the number in the Embedded Signup flow without obtaining a new verification code.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Gets the ID for a pre-validated phone number. Use this ID to select the number in the Embedded Signup flow without obtaining a new verification code.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - GetPreValidatePhoneIdRequest
   * @returns GetPreValidatePhoneIdResponse
   */
  async getPreValidatePhoneId(request: $_model.GetPreValidatePhoneIdRequest): Promise<$_model.GetPreValidatePhoneIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPreValidatePhoneIdWithOptions(request, runtime);
  }

  /**
   * Retrieves the application by its requestNo.
   * 
   * @param request - GetViberByRequestNoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetViberByRequestNoResponse
   */
  async getViberByRequestNoWithOptions(request: $_model.GetViberByRequestNoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetViberByRequestNoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.requestNo)) {
      query["RequestNo"] = request.requestNo;
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
      action: "GetViberByRequestNo",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetViberByRequestNoResponse>(await this.callApi(params, req, runtime), new $_model.GetViberByRequestNoResponse({}));
  }

  /**
   * Retrieves the application by its requestNo.
   * 
   * @param request - GetViberByRequestNoRequest
   * @returns GetViberByRequestNoResponse
   */
  async getViberByRequestNo(request: $_model.GetViberByRequestNoRequest): Promise<$_model.GetViberByRequestNoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getViberByRequestNoWithOptions(request, runtime);
  }

  /**
   * 可以申请暂停的次数
   * 
   * @param request - GetViberPauseTimesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetViberPauseTimesResponse
   */
  async getViberPauseTimesWithOptions(request: $_model.GetViberPauseTimesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetViberPauseTimesResponse> {
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
      action: "GetViberPauseTimes",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetViberPauseTimesResponse>(await this.callApi(params, req, runtime), new $_model.GetViberPauseTimesResponse({}));
  }

  /**
   * 可以申请暂停的次数
   * 
   * @param request - GetViberPauseTimesRequest
   * @returns GetViberPauseTimesResponse
   */
  async getViberPauseTimes(request: $_model.GetViberPauseTimesRequest): Promise<$_model.GetViberPauseTimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getViberPauseTimesWithOptions(request, runtime);
  }

  /**
   * Queries the product catalogs that are associated with a WhatsApp Business account (WABA).
   * 
   * @remarks
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - GetWhatsappConnectionCatalogRequest
   * @returns GetWhatsappConnectionCatalogResponse
   */
  async getWhatsappConnectionCatalog(request: $_model.GetWhatsappConnectionCatalogRequest): Promise<$_model.GetWhatsappConnectionCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWhatsappConnectionCatalogWithOptions(request, runtime);
  }

  /**
   * 获取嵌入式授权page
   * 
   * @param request - GetWhatsappConversionApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWhatsappConversionApiResponse
   */
  async getWhatsappConversionApiWithOptions(request: $_model.GetWhatsappConversionApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWhatsappConversionApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "GetWhatsappConversionApi",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWhatsappConversionApiResponse>(await this.callApi(params, req, runtime), new $_model.GetWhatsappConversionApiResponse({}));
  }

  /**
   * 获取嵌入式授权page
   * 
   * @param request - GetWhatsappConversionApiRequest
   * @returns GetWhatsappConversionApiResponse
   */
  async getWhatsappConversionApi(request: $_model.GetWhatsappConversionApiRequest): Promise<$_model.GetWhatsappConversionApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWhatsappConversionApiWithOptions(request, runtime);
  }

  /**
   * Queries the messaging health status of different types of nodes.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * This operation retrieves data directly from Meta. Meta imposes its own rate limits on the total number of calls. Stay within the specified limit.
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
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * This operation retrieves data directly from Meta. Meta imposes its own rate limits on the total number of calls. Stay within the specified limit.
   * 
   * @param request - GetWhatsappHealthStatusRequest
   * @returns GetWhatsappHealthStatusResponse
   */
  async getWhatsappHealthStatus(request: $_model.GetWhatsappHealthStatusRequest): Promise<$_model.GetWhatsappHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWhatsappHealthStatusWithOptions(request, runtime);
  }

  /**
   * Gets the App ID for an Independent Software Vendor (ISV).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - IsvGetAppIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsvGetAppIdResponse
   */
  async isvGetAppIdWithOptions(request: $_model.IsvGetAppIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IsvGetAppIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.intlVersion)) {
      query["IntlVersion"] = request.intlVersion;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Gets the App ID for an Independent Software Vendor (ISV).
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - IsvGetAppIdRequest
   * @returns IsvGetAppIdResponse
   */
  async isvGetAppId(request: $_model.IsvGetAppIdRequest): Promise<$_model.IsvGetAppIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.isvGetAppIdWithOptions(request, runtime);
  }

  /**
   * 查询群组列表
   * 
   * @param tmpReq - ListAllGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllGroupsResponse
   */
  async listAllGroupsWithOptions(tmpReq: $_model.ListAllGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAllGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
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
      action: "ListAllGroups",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAllGroupsResponse({}));
  }

  /**
   * 查询群组列表
   * 
   * @param request - ListAllGroupsRequest
   * @returns ListAllGroupsResponse
   */
  async listAllGroups(request: $_model.ListAllGroupsRequest): Promise<$_model.ListAllGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllGroupsWithOptions(request, runtime);
  }

  /**
   * 查询绑定的dm账号
   * 
   * @param request - ListBindDmAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindDmAccountResponse
   */
  async listBindDmAccountWithOptions(request: $_model.ListBindDmAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindDmAccountResponse> {
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
      action: "ListBindDmAccount",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindDmAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListBindDmAccountResponse({}));
  }

  /**
   * 查询绑定的dm账号
   * 
   * @param request - ListBindDmAccountRequest
   * @returns ListBindDmAccountResponse
   */
  async listBindDmAccount(request: $_model.ListBindDmAccountRequest): Promise<$_model.ListBindDmAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindDmAccountWithOptions(request, runtime);
  }

  /**
   * 根据flowCode查询已绑定列表
   * 
   * @param request - ListBindingRelationsForFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindingRelationsForFlowVersionResponse
   */
  async listBindingRelationsForFlowVersionWithOptions(request: $_model.ListBindingRelationsForFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindingRelationsForFlowVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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
      action: "ListBindingRelationsForFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindingRelationsForFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.ListBindingRelationsForFlowVersionResponse({}));
  }

  /**
   * 根据flowCode查询已绑定列表
   * 
   * @param request - ListBindingRelationsForFlowVersionRequest
   * @returns ListBindingRelationsForFlowVersionResponse
   */
  async listBindingRelationsForFlowVersion(request: $_model.ListBindingRelationsForFlowVersionRequest): Promise<$_model.ListBindingRelationsForFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindingRelationsForFlowVersionWithOptions(request, runtime);
  }

  /**
   * 列举流程
   * 
   * @param tmpReq - ListChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatFlowResponse
   */
  async listChatFlowWithOptions(tmpReq: $_model.ListChatFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatFlowResponse> {
    tmpReq.validate();
    let request = new $_model.ListChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowTriggerType)) {
      query["FlowTriggerType"] = request.flowTriggerType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.returnWithOnlineVersion)) {
      query["ReturnWithOnlineVersion"] = request.returnWithOnlineVersion;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatFlowResponse>(await this.callApi(params, req, runtime), new $_model.ListChatFlowResponse({}));
  }

  /**
   * 列举流程
   * 
   * @param request - ListChatFlowRequest
   * @returns ListChatFlowResponse
   */
  async listChatFlow(request: $_model.ListChatFlowRequest): Promise<$_model.ListChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatFlowWithOptions(request, runtime);
  }

  /**
   * chatFlow模板列表
   * 
   * @param request - ListChatFlowTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatFlowTemplateResponse
   */
  async listChatFlowTemplateWithOptions(request: $_model.ListChatFlowTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatFlowTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatFlowTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatFlowTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListChatFlowTemplateResponse({}));
  }

  /**
   * chatFlow模板列表
   * 
   * @param request - ListChatFlowTemplateRequest
   * @returns ListChatFlowTemplateResponse
   */
  async listChatFlowTemplate(request: $_model.ListChatFlowTemplateRequest): Promise<$_model.ListChatFlowTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatFlowTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of IM groups.
   * 
   * @remarks
   * >Notice: 
   * Retrieving the IM group list via the API is a beta feature. Contact your account manager to be added to the allowlist.
   * - You must have an IM group before you call this operation.
   * - If you do not have an IM group, you can only create one by calling the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) API.
   * - The optional parameters for this operation filter the IM group list. If you do not specify any filters, the operation returns the complete IM group list.
   * 
   * @param tmpReq - ListChatGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatGroupResponse
   */
  async listChatGroupWithOptions(tmpReq: $_model.ListChatGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ListChatGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.groupLink)) {
      query["GroupLink"] = request.groupLink;
    }

    if (!$dara.isNull(request.groupStatus)) {
      query["GroupStatus"] = request.groupStatus;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
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

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListChatGroupResponse({}));
  }

  /**
   * Retrieves a list of IM groups.
   * 
   * @remarks
   * >Notice: 
   * Retrieving the IM group list via the API is a beta feature. Contact your account manager to be added to the allowlist.
   * - You must have an IM group before you call this operation.
   * - If you do not have an IM group, you can only create one by calling the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) API.
   * - The optional parameters for this operation filter the IM group list. If you do not specify any filters, the operation returns the complete IM group list.
   * 
   * @param request - ListChatGroupRequest
   * @returns ListChatGroupResponse
   */
  async listChatGroup(request: $_model.ListChatGroupRequest): Promise<$_model.ListChatGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatGroupWithOptions(request, runtime);
  }

  /**
   * Lists the members of an IM group.
   * 
   * @remarks
   * >Notice: 
   * This operation is an internal preview feature. Contact your account manager to request access.
   * - Before calling this operation, ensure you have created an IM group with an invitation link, and that members have joined by using that link.
   * - To create an IM group and add an invitation link, call the [AddChatGroup](https://help.aliyun.com/document_detail/2998429.html) and [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) operations.
   * 
   * @param tmpReq - ListChatGroupParticipantsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatGroupParticipantsResponse
   */
  async listChatGroupParticipantsWithOptions(tmpReq: $_model.ListChatGroupParticipantsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatGroupParticipantsResponse> {
    tmpReq.validate();
    let request = new $_model.ListChatGroupParticipantsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatGroupParticipants",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatGroupParticipantsResponse>(await this.callApi(params, req, runtime), new $_model.ListChatGroupParticipantsResponse({}));
  }

  /**
   * Lists the members of an IM group.
   * 
   * @remarks
   * >Notice: 
   * This operation is an internal preview feature. Contact your account manager to request access.
   * - Before calling this operation, ensure you have created an IM group with an invitation link, and that members have joined by using that link.
   * - To create an IM group and add an invitation link, call the [AddChatGroup](https://help.aliyun.com/document_detail/2998429.html) and [AddChatGroupInviteLink](https://help.aliyun.com/document_detail/3019211.html) operations.
   * 
   * @param request - ListChatGroupParticipantsRequest
   * @returns ListChatGroupParticipantsResponse
   */
  async listChatGroupParticipants(request: $_model.ListChatGroupParticipantsRequest): Promise<$_model.ListChatGroupParticipantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatGroupParticipantsWithOptions(request, runtime);
  }

  /**
   * 查询消息列表
   * 
   * @param tmpReq - ListChatappMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatappMessageResponse
   */
  async listChatappMessageWithOptions(tmpReq: $_model.ListChatappMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatappMessageResponse> {
    tmpReq.validate();
    let request = new $_model.ListChatappMessageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.clientAcceptStatus)) {
      query["ClientAcceptStatus"] = request.clientAcceptStatus;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeStr)) {
      query["EndTimeStr"] = request.endTimeStr;
    }

    if (!$dara.isNull(request.eventAction)) {
      query["EventAction"] = request.eventAction;
    }

    if (!$dara.isNull(request.groupMessageId)) {
      query["GroupMessageId"] = request.groupMessageId;
    }

    if (!$dara.isNull(request.messageStatus)) {
      query["MessageStatus"] = request.messageStatus;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeStr)) {
      query["StartTimeStr"] = request.startTimeStr;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.userNumber)) {
      query["UserNumber"] = request.userNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatappMessage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatappMessageResponse>(await this.callApi(params, req, runtime), new $_model.ListChatappMessageResponse({}));
  }

  /**
   * 查询消息列表
   * 
   * @param request - ListChatappMessageRequest
   * @returns ListChatappMessageResponse
   */
  async listChatappMessage(request: $_model.ListChatappMessageRequest): Promise<$_model.ListChatappMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatappMessageWithOptions(request, runtime);
  }

  /**
   * Queries message templates.
   * 
   * @remarks
   * ### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - ListChatappTemplateRequest
   * @returns ListChatappTemplateResponse
   */
  async listChatappTemplate(request: $_model.ListChatappTemplateRequest): Promise<$_model.ListChatappTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatappTemplateWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom audiences.
   * 
   * @param tmpReq - ListCustomAudienceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomAudienceResponse
   */
  async listCustomAudienceWithOptions(tmpReq: $_model.ListCustomAudienceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAudienceResponse> {
    tmpReq.validate();
    let request = new $_model.ListCustomAudienceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.customAudienceId)) {
      query["CustomAudienceId"] = request.customAudienceId;
    }

    if (!$dara.isNull(request.customAudienceName)) {
      query["CustomAudienceName"] = request.customAudienceName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomAudience",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomAudienceResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomAudienceResponse({}));
  }

  /**
   * Queries a list of custom audiences.
   * 
   * @param request - ListCustomAudienceRequest
   * @returns ListCustomAudienceResponse
   */
  async listCustomAudience(request: $_model.ListCustomAudienceRequest): Promise<$_model.ListCustomAudienceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomAudienceWithOptions(request, runtime);
  }

  /**
   * 查询账号下的Dm账号
   * 
   * @param request - ListDmAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDmAccountResponse
   */
  async listDmAccountWithOptions(request: $_model.ListDmAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDmAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDmAccount",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDmAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListDmAccountResponse({}));
  }

  /**
   * 查询账号下的Dm账号
   * 
   * @param request - ListDmAccountRequest
   * @returns ListDmAccountResponse
   */
  async listDmAccount(request: $_model.ListDmAccountRequest): Promise<$_model.ListDmAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDmAccountWithOptions(request, runtime);
  }

  /**
   * 查询DM的tag
   * 
   * @param request - ListDmTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDmTagResponse
   */
  async listDmTagWithOptions(request: $_model.ListDmTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDmTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "ListDmTag",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDmTagResponse>(await this.callApi(params, req, runtime), new $_model.ListDmTagResponse({}));
  }

  /**
   * 查询DM的tag
   * 
   * @param request - ListDmTagRequest
   * @returns ListDmTagResponse
   */
  async listDmTag(request: $_model.ListDmTagRequest): Promise<$_model.ListDmTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDmTagWithOptions(request, runtime);
  }

  /**
   * 查询facebook帖子列表
   * 
   * @param request - ListFacebookPostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFacebookPostsResponse
   */
  async listFacebookPostsWithOptions(request: $_model.ListFacebookPostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFacebookPostsResponse> {
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
      action: "ListFacebookPosts",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFacebookPostsResponse>(await this.callApi(params, req, runtime), new $_model.ListFacebookPostsResponse({}));
  }

  /**
   * 查询facebook帖子列表
   * 
   * @param request - ListFacebookPostsRequest
   * @returns ListFacebookPostsResponse
   */
  async listFacebookPosts(request: $_model.ListFacebookPostsRequest): Promise<$_model.ListFacebookPostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFacebookPostsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of WhatsApp flows.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second (RPS) per account. Excess requests are throttled and may result in service interruptions.
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

    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Retrieves a list of WhatsApp flows.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second (RPS) per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - ListFlowRequest
   * @returns ListFlowResponse
   */
  async listFlow(request: $_model.ListFlowRequest): Promise<$_model.ListFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  /**
   * ListFlowNodeGroup
   * 
   * @param request - ListFlowNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowNodeGroupResponse
   */
  async listFlowNodeGroupWithOptions(request: $_model.ListFlowNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowNodeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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
      action: "ListFlowNodeGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowNodeGroupResponse({}));
  }

  /**
   * ListFlowNodeGroup
   * 
   * @param request - ListFlowNodeGroupRequest
   * @returns ListFlowNodeGroupResponse
   */
  async listFlowNodeGroup(request: $_model.ListFlowNodeGroupRequest): Promise<$_model.ListFlowNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowNodeGroupWithOptions(request, runtime);
  }

  /**
   * ListFlowNodePrototypeV2
   * 
   * @param request - ListFlowNodePrototypeV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowNodePrototypeV2Response
   */
  async listFlowNodePrototypeV2WithOptions(request: $_model.ListFlowNodePrototypeV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowNodePrototypeV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.groupCode)) {
      query["GroupCode"] = request.groupCode;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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
      action: "ListFlowNodePrototypeV2",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowNodePrototypeV2Response>(await this.callApi(params, req, runtime), new $_model.ListFlowNodePrototypeV2Response({}));
  }

  /**
   * ListFlowNodePrototypeV2
   * 
   * @param request - ListFlowNodePrototypeV2Request
   * @returns ListFlowNodePrototypeV2Response
   */
  async listFlowNodePrototypeV2(request: $_model.ListFlowNodePrototypeV2Request): Promise<$_model.ListFlowNodePrototypeV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowNodePrototypeV2WithOptions(request, runtime);
  }

  /**
   * 列举流程版本
   * 
   * @param tmpReq - ListFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlowVersionResponse
   */
  async listFlowVersionWithOptions(tmpReq: $_model.ListFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.ListFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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
      action: "ListFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.ListFlowVersionResponse({}));
  }

  /**
   * 列举流程版本
   * 
   * @param request - ListFlowVersionRequest
   * @returns ListFlowVersionResponse
   */
  async listFlowVersion(request: $_model.ListFlowVersionRequest): Promise<$_model.ListFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlowVersionWithOptions(request, runtime);
  }

  /**
   * 获取ins的page
   * 
   * @param request - ListInstagramPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstagramPageResponse
   */
  async listInstagramPageWithOptions(request: $_model.ListInstagramPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstagramPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListInstagramPage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstagramPageResponse>(await this.callApi(params, req, runtime), new $_model.ListInstagramPageResponse({}));
  }

  /**
   * 获取ins的page
   * 
   * @param request - ListInstagramPageRequest
   * @returns ListInstagramPageResponse
   */
  async listInstagramPage(request: $_model.ListInstagramPageRequest): Promise<$_model.ListInstagramPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstagramPageWithOptions(request, runtime);
  }

  /**
   * 查询instagram帖子列表
   * 
   * @param request - ListInstagramPostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstagramPostsResponse
   */
  async listInstagramPostsWithOptions(request: $_model.ListInstagramPostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstagramPostsResponse> {
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
      action: "ListInstagramPosts",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstagramPostsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstagramPostsResponse({}));
  }

  /**
   * 查询instagram帖子列表
   * 
   * @param request - ListInstagramPostsRequest
   * @returns ListInstagramPostsResponse
   */
  async listInstagramPosts(request: $_model.ListInstagramPostsRequest): Promise<$_model.ListInstagramPostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstagramPostsWithOptions(request, runtime);
  }

  /**
   * Lists instances.
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: $_model.ListInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.filterStr)) {
      query["FilterStr"] = request.filterStr;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.submitTime)) {
      query["SubmitTime"] = request.submitTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstance",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResponse({}));
  }

  /**
   * Lists instances.
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: $_model.ListInstanceRequest): Promise<$_model.ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * 查询活动列表
   * 
   * @param tmpReq - ListMarketingFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMarketingFlowResponse
   */
  async listMarketingFlowWithOptions(tmpReq: $_model.ListMarketingFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMarketingFlowResponse> {
    tmpReq.validate();
    let request = new $_model.ListMarketingFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.activityCode)) {
      query["ActivityCode"] = request.activityCode;
    }

    if (!$dara.isNull(request.activityName)) {
      query["ActivityName"] = request.activityName;
    }

    if (!$dara.isNull(request.activityStatus)) {
      query["ActivityStatus"] = request.activityStatus;
    }

    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.relatedFlowCode)) {
      query["RelatedFlowCode"] = request.relatedFlowCode;
    }

    if (!$dara.isNull(request.relatedGroupId)) {
      query["RelatedGroupId"] = request.relatedGroupId;
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
      action: "ListMarketingFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMarketingFlowResponse>(await this.callApi(params, req, runtime), new $_model.ListMarketingFlowResponse({}));
  }

  /**
   * 查询活动列表
   * 
   * @param request - ListMarketingFlowRequest
   * @returns ListMarketingFlowResponse
   */
  async listMarketingFlow(request: $_model.ListMarketingFlowRequest): Promise<$_model.ListMarketingFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMarketingFlowWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of budgets.
   * 
   * @param tmpReq - ListMessageCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessageCampaignResponse
   */
  async listMessageCampaignWithOptions(tmpReq: $_model.ListMessageCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessageCampaignResponse> {
    tmpReq.validate();
    let request = new $_model.ListMessageCampaignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.page)) {
      request.pageShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.page, "Page", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.campaignName)) {
      query["CampaignName"] = request.campaignName;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageShrink)) {
      query["Page"] = request.pageShrink;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "ListMessageCampaign",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessageCampaignResponse>(await this.callApi(params, req, runtime), new $_model.ListMessageCampaignResponse({}));
  }

  /**
   * Retrieves a list of budgets.
   * 
   * @param request - ListMessageCampaignRequest
   * @returns ListMessageCampaignResponse
   */
  async listMessageCampaign(request: $_model.ListMessageCampaignRequest): Promise<$_model.ListMessageCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMessageCampaignWithOptions(request, runtime);
  }

  /**
   * Queries custom audiences and subscription tokens.
   * 
   * @param request - ListMessengerSubscriptionTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessengerSubscriptionTokenResponse
   */
  async listMessengerSubscriptionTokenWithOptions(request: $_model.ListMessengerSubscriptionTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessengerSubscriptionTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.customAudienceId)) {
      query["CustomAudienceId"] = request.customAudienceId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.pageKey)) {
      query["PageKey"] = request.pageKey;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessengerSubscriptionToken",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessengerSubscriptionTokenResponse>(await this.callApi(params, req, runtime), new $_model.ListMessengerSubscriptionTokenResponse({}));
  }

  /**
   * Queries custom audiences and subscription tokens.
   * 
   * @param request - ListMessengerSubscriptionTokenRequest
   * @returns ListMessengerSubscriptionTokenResponse
   */
  async listMessengerSubscriptionToken(request: $_model.ListMessengerSubscriptionTokenRequest): Promise<$_model.ListMessengerSubscriptionTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMessengerSubscriptionTokenWithOptions(request, runtime);
  }

  /**
   * 查询Page绑定的广告账户列表
   * 
   * @param request - ListPageAdAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPageAdAccountResponse
   */
  async listPageAdAccountWithOptions(request: $_model.ListPageAdAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPageAdAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "ListPageAdAccount",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPageAdAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListPageAdAccountResponse({}));
  }

  /**
   * 查询Page绑定的广告账户列表
   * 
   * @param request - ListPageAdAccountRequest
   * @returns ListPageAdAccountResponse
   */
  async listPageAdAccount(request: $_model.ListPageAdAccountRequest): Promise<$_model.ListPageAdAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPageAdAccountWithOptions(request, runtime);
  }

  /**
   * Queries message QR codes.
   * 
   * @remarks
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - ListPhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdlWithOptions(request: $_model.ListPhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPhoneMessageQrdlResponse> {
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
   * Queries message QR codes.
   * 
   * @remarks
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - ListPhoneMessageQrdlRequest
   * @returns ListPhoneMessageQrdlResponse
   */
  async listPhoneMessageQrdl(request: $_model.ListPhoneMessageQrdlRequest): Promise<$_model.ListPhoneMessageQrdlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPhoneMessageQrdlWithOptions(request, runtime);
  }

  /**
   * Retrieves products in a catalog.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Retrieves products in a catalog.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * This operation allows a maximum of 10 requests per second (RPS) per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second (RPS) per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - ListProductCatalogRequest
   * @returns ListProductCatalogResponse
   */
  async listProductCatalog(request: $_model.ListProductCatalogRequest): Promise<$_model.ListProductCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductCatalogWithOptions(request, runtime);
  }

  /**
   * 展示viber申请单服务号卡片
   * 
   * @param request - ListViberServiceMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListViberServiceMessageResponse
   */
  async listViberServiceMessageWithOptions(request: $_model.ListViberServiceMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListViberServiceMessageResponse> {
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
      action: "ListViberServiceMessage",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListViberServiceMessageResponse>(await this.callApi(params, req, runtime), new $_model.ListViberServiceMessageResponse({}));
  }

  /**
   * 展示viber申请单服务号卡片
   * 
   * @param request - ListViberServiceMessageRequest
   * @returns ListViberServiceMessageResponse
   */
  async listViberServiceMessage(request: $_model.ListViberServiceMessageRequest): Promise<$_model.ListViberServiceMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listViberServiceMessageWithOptions(request, runtime);
  }

  /**
   * Lists message templates.
   * 
   * @param request - ListWhatAppTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWhatAppTemplateResponse
   */
  async listWhatAppTemplateWithOptions(request: $_model.ListWhatAppTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWhatAppTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.hetuParams)) {
      query["HetuParams"] = request.hetuParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWhatAppTemplate",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWhatAppTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListWhatAppTemplateResponse({}));
  }

  /**
   * Lists message templates.
   * 
   * @param request - ListWhatAppTemplateRequest
   * @returns ListWhatAppTemplateResponse
   */
  async listWhatAppTemplate(request: $_model.ListWhatAppTemplateRequest): Promise<$_model.ListWhatAppTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWhatAppTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies a message template. You can modify only templates that are unreviewed or have been rejected.
   * 
   * @remarks
   * ### QPS limits
   * The queries per second (QPS) limit for this API is 50 calls per second for each user. If you exceed this limit, your API calls are subject to rate limiting. This may affect your business. Make sure that you call this API within the specified limit.
   * ### Status changes
   * You can monitor changes in template status and quality through MNS or HTTP. For more information, see [Receipt messages](https://help.aliyun.com/document_detail/421545.html).
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
   * Modifies a message template. You can modify only templates that are unreviewed or have been rejected.
   * 
   * @remarks
   * ### QPS limits
   * The queries per second (QPS) limit for this API is 50 calls per second for each user. If you exceed this limit, your API calls are subject to rate limiting. This may affect your business. Make sure that you call this API within the specified limit.
   * ### Status changes
   * You can monitor changes in template status and quality through MNS or HTTP. For more information, see [Receipt messages](https://help.aliyun.com/document_detail/421545.html).
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
   * Modifies a flow.
   * 
   * @remarks
   * This API is limited to 5 queries per second (QPS) per account. Calls that exceed this limit trigger flow control, which can affect your business. Plan your API calls accordingly.
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

    let query = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      query["Categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.endpointUri)) {
      query["EndpointUri"] = request.endpointUri;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.flowName)) {
      query["FlowName"] = request.flowName;
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
   * Modifies a flow.
   * 
   * @remarks
   * This API is limited to 5 queries per second (QPS) per account. Calls that exceed this limit trigger flow control, which can affect your business. Plan your API calls accordingly.
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
   * 联系人变更群组
   * 
   * @param tmpReq - MoveContactToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveContactToGroupResponse
   */
  async moveContactToGroupWithOptions(tmpReq: $_model.MoveContactToGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveContactToGroupResponse> {
    tmpReq.validate();
    let request = new $_model.MoveContactToGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.contacts)) {
      query["Contacts"] = request.contacts;
    }

    if (!$dara.isNull(request.linkExistGroups)) {
      query["LinkExistGroups"] = request.linkExistGroups;
    }

    if (!$dara.isNull(request.linkNewGroups)) {
      query["LinkNewGroups"] = request.linkNewGroups;
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
      action: "MoveContactToGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveContactToGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveContactToGroupResponse({}));
  }

  /**
   * 联系人变更群组
   * 
   * @param request - MoveContactToGroupRequest
   * @returns MoveContactToGroupResponse
   */
  async moveContactToGroup(request: $_model.MoveContactToGroupRequest): Promise<$_model.MoveContactToGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveContactToGroupWithOptions(request, runtime);
  }

  /**
   * 下线流程版本
   * 
   * @param tmpReq - OfflineFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineFlowVersionResponse
   */
  async offlineFlowVersionWithOptions(tmpReq: $_model.OfflineFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.OfflineFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
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
      action: "OfflineFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.OfflineFlowVersionResponse({}));
  }

  /**
   * 下线流程版本
   * 
   * @param request - OfflineFlowVersionRequest
   * @returns OfflineFlowVersionResponse
   */
  async offlineFlowVersion(request: $_model.OfflineFlowVersionRequest): Promise<$_model.OfflineFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineFlowVersionWithOptions(request, runtime);
  }

  /**
   * 上线流程版本
   * 
   * @param tmpReq - OnlineFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineFlowVersionResponse
   */
  async onlineFlowVersionWithOptions(tmpReq: $_model.OnlineFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.OnlineFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
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
      action: "OnlineFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.OnlineFlowVersionResponse({}));
  }

  /**
   * 上线流程版本
   * 
   * @param request - OnlineFlowVersionRequest
   * @returns OnlineFlowVersionResponse
   */
  async onlineFlowVersion(request: $_model.OnlineFlowVersionRequest): Promise<$_model.OnlineFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onlineFlowVersionWithOptions(request, runtime);
  }

  /**
   * 开通Chatapp服务
   * 
   * @param request - OpenChatappServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenChatappServiceResponse
   */
  async openChatappServiceWithOptions(request: $_model.OpenChatappServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenChatappServiceResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenChatappService",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenChatappServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenChatappServiceResponse({}));
  }

  /**
   * 开通Chatapp服务
   * 
   * @param request - OpenChatappServiceRequest
   * @returns OpenChatappServiceResponse
   */
  async openChatappService(request: $_model.OpenChatappServiceRequest): Promise<$_model.OpenChatappServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openChatappServiceWithOptions(request, runtime);
  }

  /**
   * 暂停服务
   * 
   * @param request - PauseMarketingFLowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseMarketingFLowResponse
   */
  async pauseMarketingFLowWithOptions(request: $_model.PauseMarketingFLowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseMarketingFLowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityCode)) {
      query["ActivityCode"] = request.activityCode;
    }

    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
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
      action: "PauseMarketingFLow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseMarketingFLowResponse>(await this.callApi(params, req, runtime), new $_model.PauseMarketingFLowResponse({}));
  }

  /**
   * 暂停服务
   * 
   * @param request - PauseMarketingFLowRequest
   * @returns PauseMarketingFLowResponse
   */
  async pauseMarketingFLow(request: $_model.PauseMarketingFLowRequest): Promise<$_model.PauseMarketingFLowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseMarketingFLowWithOptions(request, runtime);
  }

  /**
   * Publishes a WhatsApp flow.
   * 
   * @remarks
   * - Before you call this operation, ensure that you have created a WhatsApp flow.
   * - If you have not created a WhatsApp flow, call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) operation to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - PublishFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFlowResponse
   */
  async publishFlowWithOptions(request: $_model.PublishFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishFlowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Publishes a WhatsApp flow.
   * 
   * @remarks
   * - Before you call this operation, ensure that you have created a WhatsApp flow.
   * - If you have not created a WhatsApp flow, call the [CreateFlow](https://help.aliyun.com/document_detail/2638742.html) operation to create one.
   * #### QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - PublishFlowRequest
   * @returns PublishFlowResponse
   */
  async publishFlow(request: $_model.PublishFlowRequest): Promise<$_model.PublishFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishFlowWithOptions(request, runtime);
  }

  /**
   * Queries the WhatsApp Business Account (WABA) that is bound to a customer account.
   * 
   * @remarks
   * This API has a per-user QPS limit of 10. Calls that exceed this limit are subject to flow control, which may impact your business. Make API calls at a reasonable rate.
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
   * Queries the WhatsApp Business Account (WABA) that is bound to a customer account.
   * 
   * @remarks
   * This API has a per-user QPS limit of 10. Calls that exceed this limit are subject to flow control, which may impact your business. Make API calls at a reasonable rate.
   * 
   * @param request - QueryChatappBindWabaRequest
   * @returns QueryChatappBindWabaResponse
   */
  async queryChatappBindWaba(request: $_model.QueryChatappBindWabaRequest): Promise<$_model.QueryChatappBindWabaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryChatappBindWabaWithOptions(request, runtime);
  }

  /**
   * Queries all phone numbers used for sending messages and their statuses for a customer.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Queries all phone numbers used for sending messages and their statuses for a customer.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - QueryChatappPhoneNumbersRequest
   * @returns QueryChatappPhoneNumbersResponse
   */
  async queryChatappPhoneNumbers(request: $_model.QueryChatappPhoneNumbersRequest): Promise<$_model.QueryChatappPhoneNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryChatappPhoneNumbersWithOptions(request, runtime);
  }

  /**
   * Gets the details of a specified instance.
   * 
   * @param request - QueryInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceResponse
   */
  async queryInstanceWithOptions(request: $_model.QueryInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstance",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceResponse({}));
  }

  /**
   * Gets the details of a specified instance.
   * 
   * @param request - QueryInstanceRequest
   * @returns QueryInstanceResponse
   */
  async queryInstance(request: $_model.QueryInstanceRequest): Promise<$_model.QueryInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceWithOptions(request, runtime);
  }

  /**
   * 查询营销消息是否生效
   * 
   * @param request - QueryMMLActiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMMLActiveResponse
   */
  async queryMMLActiveWithOptions(request: $_model.QueryMMLActiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMMLActiveResponse> {
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
      action: "QueryMMLActive",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMMLActiveResponse>(await this.callApi(params, req, runtime), new $_model.QueryMMLActiveResponse({}));
  }

  /**
   * 查询营销消息是否生效
   * 
   * @param request - QueryMMLActiveRequest
   * @returns QueryMMLActiveResponse
   */
  async queryMMLActive(request: $_model.QueryMMLActiveRequest): Promise<$_model.QueryMMLActiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMMLActiveWithOptions(request, runtime);
  }

  /**
   * Queries the business information of a phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Queries the business information of a phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - QueryWabaBusinessInfoRequest
   * @returns QueryWabaBusinessInfoResponse
   */
  async queryWabaBusinessInfo(request: $_model.QueryWabaBusinessInfoRequest): Promise<$_model.QueryWabaBusinessInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWabaBusinessInfoWithOptions(request, runtime);
  }

  /**
   * 获取流程
   * 
   * @param tmpReq - ReadChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadChatFlowResponse
   */
  async readChatFlowWithOptions(tmpReq: $_model.ReadChatFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadChatFlowResponse> {
    tmpReq.validate();
    let request = new $_model.ReadChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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
      action: "ReadChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadChatFlowResponse>(await this.callApi(params, req, runtime), new $_model.ReadChatFlowResponse({}));
  }

  /**
   * 获取流程
   * 
   * @param request - ReadChatFlowRequest
   * @returns ReadChatFlowResponse
   */
  async readChatFlow(request: $_model.ReadChatFlowRequest): Promise<$_model.ReadChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readChatFlowWithOptions(request, runtime);
  }

  /**
   * 查看chatFlow日志设置
   * 
   * @param request - ReadChatFlowLogSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadChatFlowLogSettingResponse
   */
  async readChatFlowLogSettingWithOptions(request: $_model.ReadChatFlowLogSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadChatFlowLogSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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
      action: "ReadChatFlowLogSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadChatFlowLogSettingResponse>(await this.callApi(params, req, runtime), new $_model.ReadChatFlowLogSettingResponse({}));
  }

  /**
   * 查看chatFlow日志设置
   * 
   * @param request - ReadChatFlowLogSettingRequest
   * @returns ReadChatFlowLogSettingResponse
   */
  async readChatFlowLogSetting(request: $_model.ReadChatFlowLogSettingRequest): Promise<$_model.ReadChatFlowLogSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readChatFlowLogSettingWithOptions(request, runtime);
  }

  /**
   * 获取流程版本
   * 
   * @param tmpReq - ReadFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadFlowVersionResponse
   */
  async readFlowVersionWithOptions(tmpReq: $_model.ReadFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.ReadFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
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
      action: "ReadFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.ReadFlowVersionResponse({}));
  }

  /**
   * 获取流程版本
   * 
   * @param request - ReadFlowVersionRequest
   * @returns ReadFlowVersionResponse
   */
  async readFlowVersion(request: $_model.ReadFlowVersionRequest): Promise<$_model.ReadFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readFlowVersionWithOptions(request, runtime);
  }

  /**
   * 当前群组移除单个联系人
   * 
   * @param request - RemoveContactByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveContactByIdResponse
   */
  async removeContactByIdWithOptions(request: $_model.RemoveContactByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveContactByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
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
      action: "RemoveContactById",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveContactByIdResponse>(await this.callApi(params, req, runtime), new $_model.RemoveContactByIdResponse({}));
  }

  /**
   * 当前群组移除单个联系人
   * 
   * @param request - RemoveContactByIdRequest
   * @returns RemoveContactByIdResponse
   */
  async removeContactById(request: $_model.RemoveContactByIdRequest): Promise<$_model.RemoveContactByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeContactByIdWithOptions(request, runtime);
  }

  /**
   * Sends a request to the WhatsApp Conversions API.
   * 
   * @remarks
   * The China-specific QPS limit for a single user of this API operation is 100 calls per second. If this limit is exceeded, API calls are throttled, which may affect your business. Call this operation as needed.
   * 
   * @param tmpReq - RequestWhatsappConversionApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequestWhatsappConversionApiResponse
   */
  async requestWhatsappConversionApiWithOptions(tmpReq: $_model.RequestWhatsappConversionApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RequestWhatsappConversionApiResponse> {
    tmpReq.validate();
    let request = new $_model.RequestWhatsappConversionApiShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.requestData)) {
      request.requestDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestData, "RequestData", "json");
    }

    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.requestDataShrink)) {
      query["RequestData"] = request.requestDataShrink;
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
      action: "RequestWhatsappConversionApi",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RequestWhatsappConversionApiResponse>(await this.callApi(params, req, runtime), new $_model.RequestWhatsappConversionApiResponse({}));
  }

  /**
   * Sends a request to the WhatsApp Conversions API.
   * 
   * @remarks
   * The China-specific QPS limit for a single user of this API operation is 100 calls per second. If this limit is exceeded, API calls are throttled, which may affect your business. Call this operation as needed.
   * 
   * @param request - RequestWhatsappConversionApiRequest
   * @returns RequestWhatsappConversionApiResponse
   */
  async requestWhatsappConversionApi(request: $_model.RequestWhatsappConversionApiRequest): Promise<$_model.RequestWhatsappConversionApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requestWhatsappConversionApiWithOptions(request, runtime);
  }

  /**
   * Sends bulk messages to multiple recipients.
   * 
   * @remarks
   * - You can call this operation to send messages in bulk. You can also send messages in the console. To do so, go to the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList), click a channel, and then choose **Message Sending**.
   * - Before you call this operation, make sure that you have created a channel and have an approved template.
   * - For a WhatsApp channel, you must [register and bind a WABA](t2012827.xdita#) and [add a phone number](t2012827.xdita#).
   * - For a Messenger channel, you must [connect to a Facebook Page](t2746072.xdita#).
   * - For an Instagram channel, you must [connect to an Instagram professional account](t2746079.xdita#).
   * <props="intl">
   * - For a Viber channel, you must [connect to an Instagram professional account](t2746079.xdita#).
   * ### QPS limits
   * - This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * - A single request supports a maximum of 1,000 numbers.
   * ### Status changes
   * Message sending status can be monitored via Simple Message Service or HTTP callback. For details, see [Message receipts](https://help.aliyun.com/document_detail/421545.html).
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

    let query = { };
    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.fallBackContent)) {
      query["FallBackContent"] = request.fallBackContent;
    }

    if (!$dara.isNull(request.fallBackDuration)) {
      query["FallBackDuration"] = request.fallBackDuration;
    }

    if (!$dara.isNull(request.fallBackId)) {
      query["FallBackId"] = request.fallBackId;
    }

    if (!$dara.isNull(request.fallBackRule)) {
      query["FallBackRule"] = request.fallBackRule;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
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

    if (!$dara.isNull(request.senderListShrink)) {
      query["SenderList"] = request.senderListShrink;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Sends bulk messages to multiple recipients.
   * 
   * @remarks
   * - You can call this operation to send messages in bulk. You can also send messages in the console. To do so, go to the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList), click a channel, and then choose **Message Sending**.
   * - Before you call this operation, make sure that you have created a channel and have an approved template.
   * - For a WhatsApp channel, you must [register and bind a WABA](t2012827.xdita#) and [add a phone number](t2012827.xdita#).
   * - For a Messenger channel, you must [connect to a Facebook Page](t2746072.xdita#).
   * - For an Instagram channel, you must [connect to an Instagram professional account](t2746079.xdita#).
   * <props="intl">
   * - For a Viber channel, you must [connect to an Instagram professional account](t2746079.xdita#).
   * ### QPS limits
   * - This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * - A single request supports a maximum of 1,000 numbers.
   * ### Status changes
   * Message sending status can be monitored via Simple Message Service or HTTP callback. For details, see [Message receipts](https://help.aliyun.com/document_detail/421545.html).
   * 
   * @param request - SendChatappMassMessageRequest
   * @returns SendChatappMassMessageResponse
   */
  async sendChatappMassMessage(request: $_model.SendChatappMassMessageRequest): Promise<$_model.SendChatappMassMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendChatappMassMessageWithOptions(request, runtime);
  }

  /**
   * Sends a ChatApp message.
   * 
   * @remarks
   * - Call this operation to send messages. You can also send messages manually in the console at <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Message Sending**.
   * - Before calling this operation, you must create a channel and have an approved template.
   * - For a WhatsApp channel, you must [register and bind a WABA](https://help.aliyun.com/document_detail/172335.html) and [add a phone number](https://help.aliyun.com/document_detail/2656131.html).
   * - For a Messenger channel, you must [connect to a Facebook Page](https://help.aliyun.com/document_detail/2837713.html).
   * - For an Instagram channel, you must [connect to an Instagram professional account](https://help.aliyun.com/document_detail/2837720.html).
   * <props="intl">
   * - For a Viber channel, you must [apply for a service ID](https://help.aliyun.com/document_detail/2807995.html).
   * ### QPS limit
   * The QPS limit for this operation is 250 per user. API calls that exceed this limit are throttled. To prevent service disruptions, ensure your calls stay within this limit.
   * ### Status changes
   * You can receive notifications about message status changes by using MNS or HTTP callbacks. For more information, see [message receipts](https://help.aliyun.com/document_detail/421545.html).
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
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.contextMessageId)) {
      query["ContextMessageId"] = request.contextMessageId;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.custWabaId)) {
      query["CustWabaId"] = request.custWabaId;
    }

    if (!$dara.isNull(request.fallBackContent)) {
      query["FallBackContent"] = request.fallBackContent;
    }

    if (!$dara.isNull(request.fallBackDuration)) {
      query["FallBackDuration"] = request.fallBackDuration;
    }

    if (!$dara.isNull(request.fallBackId)) {
      query["FallBackId"] = request.fallBackId;
    }

    if (!$dara.isNull(request.fallBackRule)) {
      query["FallBackRule"] = request.fallBackRule;
    }

    if (!$dara.isNull(request.flowActionShrink)) {
      query["FlowAction"] = request.flowActionShrink;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.isvCode)) {
      query["IsvCode"] = request.isvCode;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.messageCampaignId)) {
      query["MessageCampaignId"] = request.messageCampaignId;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payloadShrink)) {
      query["Payload"] = request.payloadShrink;
    }

    if (!$dara.isNull(request.productActionShrink)) {
      query["ProductAction"] = request.productActionShrink;
    }

    if (!$dara.isNull(request.recipientType)) {
      query["RecipientType"] = request.recipientType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateParamsShrink)) {
      query["TemplateParams"] = request.templateParamsShrink;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    if (!$dara.isNull(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    if (!$dara.isNull(request.trackingData)) {
      query["TrackingData"] = request.trackingData;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Sends a ChatApp message.
   * 
   * @remarks
   * - Call this operation to send messages. You can also send messages manually in the console at <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Message Sending**.
   * - Before calling this operation, you must create a channel and have an approved template.
   * - For a WhatsApp channel, you must [register and bind a WABA](https://help.aliyun.com/document_detail/172335.html) and [add a phone number](https://help.aliyun.com/document_detail/2656131.html).
   * - For a Messenger channel, you must [connect to a Facebook Page](https://help.aliyun.com/document_detail/2837713.html).
   * - For an Instagram channel, you must [connect to an Instagram professional account](https://help.aliyun.com/document_detail/2837720.html).
   * <props="intl">
   * - For a Viber channel, you must [apply for a service ID](https://help.aliyun.com/document_detail/2807995.html).
   * ### QPS limit
   * The QPS limit for this operation is 250 per user. API calls that exceed this limit are throttled. To prevent service disruptions, ensure your calls stay within this limit.
   * ### Status changes
   * You can receive notifications about message status changes by using MNS or HTTP callbacks. For more information, see [message receipts](https://help.aliyun.com/document_detail/421545.html).
   * 
   * @param request - SendChatappMessageRequest
   * @returns SendChatappMessageResponse
   */
  async sendChatappMessage(request: $_model.SendChatappMessageRequest): Promise<$_model.SendChatappMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendChatappMessageWithOptions(request, runtime);
  }

  /**
   * Submits the result of a verification code check.
   * 
   * @param request - SubmitVerifyCodeResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVerifyCodeResultResponse
   */
  async submitVerifyCodeResultWithOptions(request: $_model.SubmitVerifyCodeResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVerifyCodeResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.result)) {
      query["Result"] = request.result;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVerifyCodeResult",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVerifyCodeResultResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVerifyCodeResultResponse({}));
  }

  /**
   * Submits the result of a verification code check.
   * 
   * @param request - SubmitVerifyCodeResultRequest
   * @returns SubmitVerifyCodeResultResponse
   */
  async submitVerifyCodeResult(request: $_model.SubmitVerifyCodeResultRequest): Promise<$_model.SubmitVerifyCodeResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVerifyCodeResultWithOptions(request, runtime);
  }

  /**
   * Synchronizes the business app history.
   * 
   * @remarks
   * - Before you call this operation, you must configure a webhook for messages and receipts by calling [UpdatePhoneWebhook](https://help.aliyun.com/document_detail/600763.html) and [UpdateAccountWebhook](https://help.aliyun.com/document_detail/600765.html). Otherwise, history synchronization will fail because the system cannot find the configured webhook URL.
   * - This is a one-time operation. Subsequent calls have no effect.
   * 
   * @param request - SyncBusinessAppHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncBusinessAppHistoryResponse
   */
  async syncBusinessAppHistoryWithOptions(request: $_model.SyncBusinessAppHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncBusinessAppHistoryResponse> {
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
      action: "SyncBusinessAppHistory",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncBusinessAppHistoryResponse>(await this.callApi(params, req, runtime), new $_model.SyncBusinessAppHistoryResponse({}));
  }

  /**
   * Synchronizes the business app history.
   * 
   * @remarks
   * - Before you call this operation, you must configure a webhook for messages and receipts by calling [UpdatePhoneWebhook](https://help.aliyun.com/document_detail/600763.html) and [UpdateAccountWebhook](https://help.aliyun.com/document_detail/600765.html). Otherwise, history synchronization will fail because the system cannot find the configured webhook URL.
   * - This is a one-time operation. Subsequent calls have no effect.
   * 
   * @param request - SyncBusinessAppHistoryRequest
   * @returns SyncBusinessAppHistoryResponse
   */
  async syncBusinessAppHistory(request: $_model.SyncBusinessAppHistoryRequest): Promise<$_model.SyncBusinessAppHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncBusinessAppHistoryWithOptions(request, runtime);
  }

  /**
   * 同步flow
   * 
   * @param request - SyncFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncFlowResponse
   */
  async syncFlowWithOptions(request: $_model.SyncFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncFlowResponse> {
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
      action: "SyncFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncFlowResponse>(await this.callApi(params, req, runtime), new $_model.SyncFlowResponse({}));
  }

  /**
   * 同步flow
   * 
   * @param request - SyncFlowRequest
   * @returns SyncFlowResponse
   */
  async syncFlow(request: $_model.SyncFlowRequest): Promise<$_model.SyncFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncFlowWithOptions(request, runtime);
  }

  /**
   * Synchronously queries the budget.
   * 
   * @param request - SyncMessageCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncMessageCampaignResponse
   */
  async syncMessageCampaignWithOptions(request: $_model.SyncMessageCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncMessageCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adAccountId)) {
      query["AdAccountId"] = request.adAccountId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
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
      action: "SyncMessageCampaign",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncMessageCampaignResponse>(await this.callApi(params, req, runtime), new $_model.SyncMessageCampaignResponse({}));
  }

  /**
   * Synchronously queries the budget.
   * 
   * @param request - SyncMessageCampaignRequest
   * @returns SyncMessageCampaignResponse
   */
  async syncMessageCampaign(request: $_model.SyncMessageCampaignRequest): Promise<$_model.SyncMessageCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncMessageCampaignWithOptions(request, runtime);
  }

  /**
   * Retrieves the Messenger subscription token.
   * 
   * @param request - SyncMessengerSubscriptionTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncMessengerSubscriptionTokenResponse
   */
  async syncMessengerSubscriptionTokenWithOptions(request: $_model.SyncMessengerSubscriptionTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncMessengerSubscriptionTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.customAudienceId)) {
      query["CustomAudienceId"] = request.customAudienceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageId)) {
      query["PageId"] = request.pageId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncMessengerSubscriptionToken",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncMessengerSubscriptionTokenResponse>(await this.callApi(params, req, runtime), new $_model.SyncMessengerSubscriptionTokenResponse({}));
  }

  /**
   * Retrieves the Messenger subscription token.
   * 
   * @param request - SyncMessengerSubscriptionTokenRequest
   * @returns SyncMessengerSubscriptionTokenResponse
   */
  async syncMessengerSubscriptionToken(request: $_model.SyncMessengerSubscriptionTokenRequest): Promise<$_model.SyncMessengerSubscriptionTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncMessengerSubscriptionTokenWithOptions(request, runtime);
  }

  /**
   * Triggers an online chat flow that has a manual trigger.
   * 
   * @remarks
   * - You can call this operation to trigger a published version of a flow that has a manual trigger. You can also trigger the flow from the [Marketing Campaign Management](https://chatapp.console.aliyun.com/MarketingActivityManagement) page if the flow is associated with a marketing campaign.
   * - Before you call this operation, make sure that the flow has a manual trigger and is published.
   * - If a flow with a manual trigger does not have a published version, you must publish it. In [Chat Flow](https://chatapp.console.aliyun.com/ChatFlowBuilder), you can click the flow name to open the canvas and publish the version. Alternatively, you can call the [OnlineFlowVersion](https://help.aliyun.com/document_detail/2937203.html) API to publish the version.
   * - If your flow contains components that incur costs, such as message sending or function invocations, make sure that you understand the billing methods and pricing for these products before you trigger the flow.
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
   * Triggers an online chat flow that has a manual trigger.
   * 
   * @remarks
   * - You can call this operation to trigger a published version of a flow that has a manual trigger. You can also trigger the flow from the [Marketing Campaign Management](https://chatapp.console.aliyun.com/MarketingActivityManagement) page if the flow is associated with a marketing campaign.
   * - Before you call this operation, make sure that the flow has a manual trigger and is published.
   * - If a flow with a manual trigger does not have a published version, you must publish it. In [Chat Flow](https://chatapp.console.aliyun.com/ChatFlowBuilder), you can click the flow name to open the canvas and publish the version. Alternatively, you can call the [OnlineFlowVersion](https://help.aliyun.com/document_detail/2937203.html) API to publish the version.
   * - If your flow contains components that incur costs, such as message sending or function invocations, make sure that you understand the billing methods and pricing for these products before you trigger the flow.
   * 
   * @param request - TriggerChatFlowRequest
   * @returns TriggerChatFlowResponse
   */
  async triggerChatFlow(request: $_model.TriggerChatFlowRequest): Promise<$_model.TriggerChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerChatFlowWithOptions(request, runtime);
  }

  /**
   * 解绑邮件账号
   * 
   * @param request - UnbindDmAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDmAccountResponse
   */
  async unbindDmAccountWithOptions(request: $_model.UnbindDmAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDmAccountResponse> {
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
      action: "UnbindDmAccount",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDmAccountResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDmAccountResponse({}));
  }

  /**
   * 解绑邮件账号
   * 
   * @param request - UnbindDmAccountRequest
   * @returns UnbindDmAccountResponse
   */
  async unbindDmAccount(request: $_model.UnbindDmAccountRequest): Promise<$_model.UnbindDmAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDmAccountWithOptions(request, runtime);
  }

  /**
   * Modifies the callback URL of an account.
   * 
   * @remarks
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queueFlag)) {
      query["QueueFlag"] = request.queueFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
   * This operation allows a maximum of 10 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * 
   * @param request - UpdateAccountWebhookRequest
   * @returns UpdateAccountWebhookResponse
   */
  async updateAccountWebhook(request: $_model.UpdateAccountWebhookRequest): Promise<$_model.UpdateAccountWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAccountWebhookWithOptions(request, runtime);
  }

  /**
   * Modifies a Viber application.
   * 
   * @param tmpReq - UpdateAuditRequestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAuditRequestResponse
   */
  async updateAuditRequestWithOptions(tmpReq: $_model.UpdateAuditRequestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAuditRequestResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAuditRequestShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.auditRecord)) {
      request.auditRecordShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.auditRecord, "AuditRecord", "json");
    }

    let query = { };
    if (!$dara.isNull(request.auditRecordShrink)) {
      query["AuditRecord"] = request.auditRecordShrink;
    }

    if (!$dara.isNull(request.auditResult)) {
      query["AuditResult"] = request.auditResult;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.requestNo)) {
      query["RequestNo"] = request.requestNo;
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
      action: "UpdateAuditRequest",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAuditRequestResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAuditRequestResponse({}));
  }

  /**
   * Modifies a Viber application.
   * 
   * @param request - UpdateAuditRequestRequest
   * @returns UpdateAuditRequestResponse
   */
  async updateAuditRequest(request: $_model.UpdateAuditRequestRequest): Promise<$_model.UpdateAuditRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAuditRequestWithOptions(request, runtime);
  }

  /**
   * 获取流程
   * 
   * @param tmpReq - UpdateChatFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChatFlowResponse
   */
  async updateChatFlowWithOptions(tmpReq: $_model.UpdateChatFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChatFlowResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateChatFlowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
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

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChatFlow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChatFlowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChatFlowResponse({}));
  }

  /**
   * 获取流程
   * 
   * @param request - UpdateChatFlowRequest
   * @returns UpdateChatFlowResponse
   */
  async updateChatFlow(request: $_model.UpdateChatFlowRequest): Promise<$_model.UpdateChatFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChatFlowWithOptions(request, runtime);
  }

  /**
   * 修改chatFlow日志设置
   * 
   * @param request - UpdateChatFlowLogSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChatFlowLogSettingResponse
   */
  async updateChatFlowLogSettingWithOptions(request: $_model.UpdateChatFlowLogSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChatFlowLogSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
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
      action: "UpdateChatFlowLogSetting",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChatFlowLogSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChatFlowLogSettingResponse({}));
  }

  /**
   * 修改chatFlow日志设置
   * 
   * @param request - UpdateChatFlowLogSettingRequest
   * @returns UpdateChatFlowLogSettingResponse
   */
  async updateChatFlowLogSetting(request: $_model.UpdateChatFlowLogSettingRequest): Promise<$_model.UpdateChatFlowLogSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChatFlowLogSettingWithOptions(request, runtime);
  }

  /**
   * Updates the information for an Instant Messaging (IM) group.
   * 
   * @remarks
   * >Notice: 
   * This operation is in beta testing for Meta. Contact your account manager to be added to the allowlist before using this endpoint.
   * - Before you call this operation, ensure that you have created an IM group.
   * - If you do not have an IM group, call the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) operation to create one.
   * 
   * @param request - UpdateChatGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChatGroupResponse
   */
  async updateChatGroupWithOptions(request: $_model.UpdateChatGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChatGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.channelType)) {
      query["ChannelType"] = request.channelType;
    }

    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.profilePictureFile)) {
      query["ProfilePictureFile"] = request.profilePictureFile;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChatGroup",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChatGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChatGroupResponse({}));
  }

  /**
   * Updates the information for an Instant Messaging (IM) group.
   * 
   * @remarks
   * >Notice: 
   * This operation is in beta testing for Meta. Contact your account manager to be added to the allowlist before using this endpoint.
   * - Before you call this operation, ensure that you have created an IM group.
   * - If you do not have an IM group, call the [AddChatGroup](https://help.aliyun.com/document_detail/2932518.html) operation to create one.
   * 
   * @param request - UpdateChatGroupRequest
   * @returns UpdateChatGroupResponse
   */
  async updateChatGroup(request: $_model.UpdateChatGroupRequest): Promise<$_model.UpdateChatGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChatGroupWithOptions(request, runtime);
  }

  /**
   * Updates the commerce settings for a phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * Updates the commerce settings for a phone number.
   * 
   * @remarks
   * This API is limited to 10 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - UpdateCommerceSettingRequest
   * @returns UpdateCommerceSettingResponse
   */
  async updateCommerceSetting(request: $_model.UpdateCommerceSettingRequest): Promise<$_model.UpdateCommerceSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCommerceSettingWithOptions(request, runtime);
  }

  /**
   * 修改联系人
   * 
   * @param tmpReq - UpdateContactByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContactByIdResponse
   */
  async updateContactByIdWithOptions(tmpReq: $_model.UpdateContactByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContactByIdResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateContactByIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.contactDetails)) {
      query["ContactDetails"] = request.contactDetails;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.country)) {
      query["Country"] = request.country;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
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
      action: "UpdateContactById",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContactByIdResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContactByIdResponse({}));
  }

  /**
   * 修改联系人
   * 
   * @param request - UpdateContactByIdRequest
   * @returns UpdateContactByIdResponse
   */
  async updateContactById(request: $_model.UpdateContactByIdRequest): Promise<$_model.UpdateContactByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContactByIdWithOptions(request, runtime);
  }

  /**
   * Modifies welcoming messages, opening remarks, and commands for a phone number.
   * 
   * @remarks
   * ### [](#qps-)QPS limit
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * This operation retrieves data directly from Meta. Meta imposes its own rate limits on the total number of calls. Stay within the specified limit.
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
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled, which may affect your business. Stay within the specified limit.
   * This operation retrieves data directly from Meta. Meta imposes its own rate limits on the total number of calls. Stay within the specified limit.
   * 
   * @param request - UpdateConversationalAutomationRequest
   * @returns UpdateConversationalAutomationResponse
   */
  async updateConversationalAutomation(request: $_model.UpdateConversationalAutomationRequest): Promise<$_model.UpdateConversationalAutomationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConversationalAutomationWithOptions(request, runtime);
  }

  /**
   * Updates the content of a WhatsApp flow by using a JSON definition.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - UpdateFlowJSONAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAssetWithOptions(request: $_model.UpdateFlowJSONAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowJSONAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
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
   * Updates the content of a WhatsApp flow by using a JSON definition.
   * 
   * @remarks
   * This operation allows a maximum of 5 requests per second per account. Excess requests are throttled and may result in service interruptions.
   * 
   * @param request - UpdateFlowJSONAssetRequest
   * @returns UpdateFlowJSONAssetResponse
   */
  async updateFlowJSONAsset(request: $_model.UpdateFlowJSONAssetRequest): Promise<$_model.UpdateFlowJSONAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowJSONAssetWithOptions(request, runtime);
  }

  /**
   * 更新流程版本，用于画布更新流程dsl
   * 
   * @param tmpReq - UpdateFlowVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlowVersionResponse
   */
  async updateFlowVersionWithOptions(tmpReq: $_model.UpdateFlowVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlowVersionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFlowVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.bizExtend)) {
      request.bizExtendShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizExtend, "BizExtend", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizCode)) {
      query["BizCode"] = request.bizCode;
    }

    if (!$dara.isNull(request.bizExtendShrink)) {
      query["BizExtend"] = request.bizExtendShrink;
    }

    if (!$dara.isNull(request.flowCode)) {
      query["FlowCode"] = request.flowCode;
    }

    if (!$dara.isNull(request.flowVersion)) {
      query["FlowVersion"] = request.flowVersion;
    }

    if (!$dara.isNull(request.flowViewModel)) {
      query["FlowViewModel"] = request.flowViewModel;
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
      action: "UpdateFlowVersion",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlowVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlowVersionResponse({}));
  }

  /**
   * 更新流程版本，用于画布更新流程dsl
   * 
   * @param request - UpdateFlowVersionRequest
   * @returns UpdateFlowVersionResponse
   */
  async updateFlowVersion(request: $_model.UpdateFlowVersionRequest): Promise<$_model.UpdateFlowVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlowVersionWithOptions(request, runtime);
  }

  /**
   * 群组改名
   * 
   * @param request - UpdateGroupNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupNameResponse
   */
  async updateGroupNameWithOptions(request: $_model.UpdateGroupNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "UpdateGroupName",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupNameResponse({}));
  }

  /**
   * 群组改名
   * 
   * @param request - UpdateGroupNameRequest
   * @returns UpdateGroupNameResponse
   */
  async updateGroupName(request: $_model.UpdateGroupNameRequest): Promise<$_model.UpdateGroupNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGroupNameWithOptions(request, runtime);
  }

  /**
   * Updates the specified instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactMail)) {
      query["ContactMail"] = request.contactMail;
    }

    if (!$dara.isNull(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!$dara.isNull(request.facebookBmId)) {
      query["FacebookBmId"] = request.facebookBmId;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isConfirmAudit)) {
      query["IsConfirmAudit"] = request.isConfirmAudit;
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
      action: "UpdateInstance",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates the specified instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * 修改营销活动
   * 
   * @param tmpReq - UpdateMarketingFLowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMarketingFLowResponse
   */
  async updateMarketingFLowWithOptions(tmpReq: $_model.UpdateMarketingFLowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMarketingFLowResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMarketingFLowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let query = { };
    if (!$dara.isNull(request.activityCode)) {
      query["ActivityCode"] = request.activityCode;
    }

    if (!$dara.isNull(request.activityDesc)) {
      query["ActivityDesc"] = request.activityDesc;
    }

    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.activityName)) {
      query["ActivityName"] = request.activityName;
    }

    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.executionType)) {
      query["ExecutionType"] = request.executionType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paramFlag)) {
      query["ParamFlag"] = request.paramFlag;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["Params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.relatedFlowCode)) {
      query["RelatedFlowCode"] = request.relatedFlowCode;
    }

    if (!$dara.isNull(request.relatedFlowName)) {
      query["RelatedFlowName"] = request.relatedFlowName;
    }

    if (!$dara.isNull(request.relatedGroupId)) {
      query["RelatedGroupId"] = request.relatedGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMarketingFLow",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMarketingFLowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMarketingFLowResponse({}));
  }

  /**
   * 修改营销活动
   * 
   * @param request - UpdateMarketingFLowRequest
   * @returns UpdateMarketingFLowResponse
   */
  async updateMarketingFLow(request: $_model.UpdateMarketingFLowRequest): Promise<$_model.UpdateMarketingFLowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMarketingFLowWithOptions(request, runtime);
  }

  /**
   * Updates the encryption key for a phone number.
   * 
   * @remarks
   * - Before you call this API, you must add and verify a phone number for your WhatsApp Business Account (WABA).
   * - If you do not have a phone number for your WABA, call the [GetChatappVerifyCode](https://help.aliyun.com/document_detail/600746.html) and [ChatappVerifyAndRegister](https://help.aliyun.com/document_detail/600770.html) APIs to obtain a verification code and verifythe phone number.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - UpdatePhoneEncryptionPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKeyWithOptions(request: $_model.UpdatePhoneEncryptionPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePhoneEncryptionPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.encryptionPublicKey)) {
      query["EncryptionPublicKey"] = request.encryptionPublicKey;
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
   * Updates the encryption key for a phone number.
   * 
   * @remarks
   * - Before you call this API, you must add and verify a phone number for your WhatsApp Business Account (WABA).
   * - If you do not have a phone number for your WABA, call the [GetChatappVerifyCode](https://help.aliyun.com/document_detail/600746.html) and [ChatappVerifyAndRegister](https://help.aliyun.com/document_detail/600770.html) APIs to obtain a verification code and verifythe phone number.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - UpdatePhoneEncryptionPublicKeyRequest
   * @returns UpdatePhoneEncryptionPublicKeyResponse
   */
  async updatePhoneEncryptionPublicKey(request: $_model.UpdatePhoneEncryptionPublicKeyRequest): Promise<$_model.UpdatePhoneEncryptionPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePhoneEncryptionPublicKeyWithOptions(request, runtime);
  }

  /**
   * Updates a message QR code.
   * 
   * @remarks
   * - After you update a message QR code, users can no longer scan the original QR code to start a chat with the associated business phone number. Use this operation with caution.
   * - If you have not created a message QR code, call the [CreatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638749.html) API to create one.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
   * 
   * @param request - UpdatePhoneMessageQrdlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePhoneMessageQrdlResponse
   */
  async updatePhoneMessageQrdlWithOptions(request: $_model.UpdatePhoneMessageQrdlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePhoneMessageQrdlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.custSpaceId)) {
      query["CustSpaceId"] = request.custSpaceId;
    }

    if (!$dara.isNull(request.generateQrImage)) {
      query["GenerateQrImage"] = request.generateQrImage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.prefilledMessage)) {
      query["PrefilledMessage"] = request.prefilledMessage;
    }

    if (!$dara.isNull(request.qrdlCode)) {
      query["QrdlCode"] = request.qrdlCode;
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
   * Updates a message QR code.
   * 
   * @remarks
   * - After you update a message QR code, users can no longer scan the original QR code to start a chat with the associated business phone number. Use this operation with caution.
   * - If you have not created a message QR code, call the [CreatePhoneMessageQrdl](https://help.aliyun.com/document_detail/2638749.html) API to create one.
   * #### QPS limit
   * This API is limited to 5 queries per second (QPS) for each user. If you exceed this limit, API calls are throttled, which can affect your business. Call this API within the specified limit.
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
   * \\\\* A value of OK indicates that the call is successful.
   * \\\\* Other values indicate that the call fails. For more information, see \\[Error codes]\\\\(~~196974~~).
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.queueFlag)) {
      query["QueueFlag"] = request.queueFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
   * \\\\* A value of OK indicates that the call is successful.
   * \\\\* Other values indicate that the call fails. For more information, see \\[Error codes]\\\\(~~196974~~).
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

  /**
   * 更新waba的mml状态
   * 
   * @param request - UpdateWabaMmlStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWabaMmlStatusResponse
   */
  async updateWabaMmlStatusWithOptions(request: $_model.UpdateWabaMmlStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWabaMmlStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

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
      action: "UpdateWabaMmlStatus",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWabaMmlStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWabaMmlStatusResponse({}));
  }

  /**
   * 更新waba的mml状态
   * 
   * @param request - UpdateWabaMmlStatusRequest
   * @returns UpdateWabaMmlStatusResponse
   */
  async updateWabaMmlStatus(request: $_model.UpdateWabaMmlStatusRequest): Promise<$_model.UpdateWabaMmlStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWabaMmlStatusWithOptions(request, runtime);
  }

  /**
   * Places, answers, or ends WhatsApp voice calls.
   * 
   * @param tmpReq - WhatsappCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WhatsappCallResponse
   */
  async whatsappCallWithOptions(tmpReq: $_model.WhatsappCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.WhatsappCallResponse> {
    tmpReq.validate();
    let request = new $_model.WhatsappCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.session)) {
      request.sessionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.session, "Session", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessNumber)) {
      query["BusinessNumber"] = request.businessNumber;
    }

    if (!$dara.isNull(request.callAction)) {
      query["CallAction"] = request.callAction;
    }

    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

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

    if (!$dara.isNull(request.sessionShrink)) {
      query["Session"] = request.sessionShrink;
    }

    if (!$dara.isNull(request.userNumber)) {
      query["UserNumber"] = request.userNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WhatsappCall",
      version: "2020-06-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.WhatsappCallResponse>(await this.callApi(params, req, runtime), new $_model.WhatsappCallResponse({}));
  }

  /**
   * Places, answers, or ends WhatsApp voice calls.
   * 
   * @param request - WhatsappCallRequest
   * @returns WhatsappCallResponse
   */
  async whatsappCall(request: $_model.WhatsappCallRequest): Promise<$_model.WhatsappCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.whatsappCallWithOptions(request, runtime);
  }

}
