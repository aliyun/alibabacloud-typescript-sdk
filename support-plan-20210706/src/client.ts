// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EnterpriseDingtalkGroupMember extends $tea.Model {
  isAdmin?: boolean;
  mobile?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      mobile: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersRequest extends $tea.Model {
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  message?: string;
  code?: string;
  data?: EnterpriseDingtalkGroupMember[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': EnterpriseDingtalkGroupMember },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupCustomerMembersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEnterpriseDingtalkGroupCustomerMembersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnterpriseDingtalkGroupCustomerMembersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  message?: string;
  code?: string;
  data?: ListEnterpriseDingtalkGroupsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListEnterpriseDingtalkGroupsResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEnterpriseDingtalkGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEnterpriseDingtalkGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberRequest extends $tea.Model {
  openGroupId?: string;
  mobiles?: string[];
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
      mobiles: 'Mobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
      mobiles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberShrinkRequest extends $tea.Model {
  openGroupId?: string;
  mobilesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
      mobilesShrink: 'Mobiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
      mobilesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  message?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseDingtalkGroupCustomerMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteEnterpriseDingtalkGroupCustomerMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberRequest extends $tea.Model {
  openGroupId?: string;
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
      mobile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  message?: string;
  code?: string;
  data?: EnterpriseDingtalkGroupMember;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      code: 'string',
      data: EnterpriseDingtalkGroupMember,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupCustomerMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEnterpriseDingtalkGroupCustomerMemberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEnterpriseDingtalkGroupCustomerMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupRequest extends $tea.Model {
  openGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  message?: string;
  data?: GetEnterpriseDingtalkGroupResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      message: 'Message',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      message: 'string',
      data: GetEnterpriseDingtalkGroupResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEnterpriseDingtalkGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEnterpriseDingtalkGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnterpriseDingtalkGroupsResponseBodyData extends $tea.Model {
  openGroupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnterpriseDingtalkGroupResponseBodyData extends $tea.Model {
  openGroupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      openGroupId: 'OpenGroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openGroupId: 'string',
      groupName: 'string',
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
    this._endpoint = this.getEndpoint("support-plan", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async listEnterpriseDingtalkGroupCustomerMembersWithOptions(request: ListEnterpriseDingtalkGroupCustomerMembersRequest, runtime: $Util.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEnterpriseDingtalkGroupCustomerMembersResponse>(await this.doRPCRequest("ListEnterpriseDingtalkGroupCustomerMembers", "2021-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListEnterpriseDingtalkGroupCustomerMembersResponse({}));
  }

  async listEnterpriseDingtalkGroupCustomerMembers(request: ListEnterpriseDingtalkGroupCustomerMembersRequest): Promise<ListEnterpriseDingtalkGroupCustomerMembersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupCustomerMembersWithOptions(request, runtime);
  }

  async listEnterpriseDingtalkGroupsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListEnterpriseDingtalkGroupsResponse>(await this.doRPCRequest("ListEnterpriseDingtalkGroups", "2021-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new ListEnterpriseDingtalkGroupsResponse({}));
  }

  async listEnterpriseDingtalkGroups(): Promise<ListEnterpriseDingtalkGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnterpriseDingtalkGroupsWithOptions(runtime);
  }

  async deleteEnterpriseDingtalkGroupCustomerMemberWithOptions(tmpReq: DeleteEnterpriseDingtalkGroupCustomerMemberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteEnterpriseDingtalkGroupCustomerMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.mobiles)) {
      request.mobilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mobiles, "Mobiles", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteEnterpriseDingtalkGroupCustomerMemberResponse>(await this.doRPCRequest("DeleteEnterpriseDingtalkGroupCustomerMember", "2021-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteEnterpriseDingtalkGroupCustomerMemberResponse({}));
  }

  async deleteEnterpriseDingtalkGroupCustomerMember(request: DeleteEnterpriseDingtalkGroupCustomerMemberRequest): Promise<DeleteEnterpriseDingtalkGroupCustomerMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseDingtalkGroupCustomerMemberWithOptions(request, runtime);
  }

  async getEnterpriseDingtalkGroupCustomerMemberWithOptions(request: GetEnterpriseDingtalkGroupCustomerMemberRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEnterpriseDingtalkGroupCustomerMemberResponse>(await this.doRPCRequest("GetEnterpriseDingtalkGroupCustomerMember", "2021-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetEnterpriseDingtalkGroupCustomerMemberResponse({}));
  }

  async getEnterpriseDingtalkGroupCustomerMember(request: GetEnterpriseDingtalkGroupCustomerMemberRequest): Promise<GetEnterpriseDingtalkGroupCustomerMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDingtalkGroupCustomerMemberWithOptions(request, runtime);
  }

  async getEnterpriseDingtalkGroupWithOptions(request: GetEnterpriseDingtalkGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetEnterpriseDingtalkGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEnterpriseDingtalkGroupResponse>(await this.doRPCRequest("GetEnterpriseDingtalkGroup", "2021-07-06", "HTTPS", "POST", "AK", "json", req, runtime), new GetEnterpriseDingtalkGroupResponse({}));
  }

  async getEnterpriseDingtalkGroup(request: GetEnterpriseDingtalkGroupRequest): Promise<GetEnterpriseDingtalkGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnterpriseDingtalkGroupWithOptions(request, runtime);
  }

}
