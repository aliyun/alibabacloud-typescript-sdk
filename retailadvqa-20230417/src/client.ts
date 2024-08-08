// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddMemberBasicInfoRequest extends $tea.Model {
  body?: AddMemberBasicInfoRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AddMemberBasicInfoRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberBasicInfoShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberBasicInfoResponseBody extends $tea.Model {
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * WMS_36606164948078_23218019
   */
  outerMemberId?: string;
  /**
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      outerMemberId: 'OuterMemberId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      outerMemberId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMemberBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddMemberBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveOrderPopRequest extends $tea.Model {
  orders?: BatchSaveOrderPopRequestOrders[];
  static names(): { [key: string]: string } {
    return {
      orders: 'Orders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orders: { 'type': 'array', 'itemType': BatchSaveOrderPopRequestOrders },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveOrderPopShrinkRequest extends $tea.Model {
  ordersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ordersShrink: 'Orders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ordersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveOrderPopResponseBody extends $tea.Model {
  /**
   * @example
   * testErrorCode
   */
  errorCode?: string;
  /**
   * @example
   * testErrorMessage
   */
  errorMessage?: string;
  /**
   * @example
   * 200/400...
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveOrderPopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchSaveOrderPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchSaveOrderPopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateMemberLevelRequest extends $tea.Model {
  body?: CalculateMemberLevelRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CalculateMemberLevelRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateMemberLevelShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateMemberLevelResponseBody extends $tea.Model {
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 1
   */
  grade?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  message?: string;
  /**
   * @example
   * 6062f9067f170700a2e7ef5a
   */
  outerMemberId?: string;
  /**
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      grade: 'Grade',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      outerMemberId: 'OuterMemberId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      grade: 'string',
      httpStatusCode: 'string',
      message: 'string',
      outerMemberId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateMemberLevelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CalculateMemberLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CalculateMemberLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditMemberBasicInfoRequest extends $tea.Model {
  body?: EditMemberBasicInfoRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: EditMemberBasicInfoRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditMemberBasicInfoShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditMemberBasicInfoResponseBody extends $tea.Model {
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditMemberBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditMemberBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditMemberBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountDetailPageQueryRequest extends $tea.Model {
  body?: MemberAccountDetailPageQueryRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MemberAccountDetailPageQueryRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountDetailPageQueryShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountDetailPageQueryResponseBody extends $tea.Model {
  data?: MemberAccountDetailPageQueryResponseBodyData[];
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 5000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': MemberAccountDetailPageQueryResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountDetailPageQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MemberAccountDetailPageQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MemberAccountDetailPageQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberPointChangeRequest extends $tea.Model {
  body?: MemberPointChangeRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MemberPointChangeRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberPointChangeShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberPointChangeResponseBody extends $tea.Model {
  accountBalance?: string;
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  levelName?: string;
  /**
   * @example
   * B2CD5682-12C0-51A7-82FC-1D36091CADAD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accountBalance: 'AccountBalance',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      levelName: 'LevelName',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBalance: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      levelName: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberPointChangeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MemberPointChangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MemberPointChangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemberBasicInfoRequest extends $tea.Model {
  body?: QueryMemberBasicInfoRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: QueryMemberBasicInfoRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemberBasicInfoShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemberBasicInfoResponseBody extends $tea.Model {
  data?: QueryMemberBasicInfoResponseBodyData;
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryMemberBasicInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemberBasicInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMemberBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryMemberBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoRequest extends $tea.Model {
  body?: SyncCardInfoRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SyncCardInfoRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoResponseBody extends $tea.Model {
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  message?: string;
  /**
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncCardInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncCardInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMemberBehaviorInfoRequest extends $tea.Model {
  body?: SyncMemberBehaviorInfoRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SyncMemberBehaviorInfoRequestBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMemberBehaviorInfoShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMemberBehaviorInfoResponseBody extends $tea.Model {
  /**
   * @example
   * Lydaas.QuickMember.SystemError
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * 1DEFC4F1-AF11-5A3C-93B9-2880768DA218
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMemberBehaviorInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncMemberBehaviorInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncMemberBehaviorInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberBasicInfoRequestBodyChannels extends $tea.Model {
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  channelCode?: string;
  channelOpenId?: string;
  channelUnionId?: string;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelCode: 'ChannelCode',
      channelOpenId: 'ChannelOpenId',
      channelUnionId: 'ChannelUnionId',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelCode: 'string',
      channelOpenId: 'string',
      channelUnionId: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberBasicInfoRequestBody extends $tea.Model {
  area?: string;
  avatar?: string;
  /**
   * @example
   * 2022-09-08
   */
  birthday?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  channels?: AddMemberBasicInfoRequestBodyChannels[];
  city?: string;
  country?: string;
  email?: string;
  /**
   * @example
   * ""
   */
  extra?: string;
  gmtCreate?: string;
  memberName?: string;
  memberNickName?: string;
  mixMobile?: string;
  /**
   * @example
   * 17716699087
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  platFormType?: string;
  province?: string;
  sex?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      avatar: 'Avatar',
      birthday: 'Birthday',
      channels: 'Channels',
      city: 'City',
      country: 'Country',
      email: 'Email',
      extra: 'Extra',
      gmtCreate: 'GmtCreate',
      memberName: 'MemberName',
      memberNickName: 'MemberNickName',
      mixMobile: 'MixMobile',
      mobile: 'Mobile',
      openMerchantId: 'OpenMerchantId',
      platFormType: 'PlatFormType',
      province: 'Province',
      sex: 'Sex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      avatar: 'string',
      birthday: 'string',
      channels: { 'type': 'array', 'itemType': AddMemberBasicInfoRequestBodyChannels },
      city: 'string',
      country: 'string',
      email: 'string',
      extra: 'string',
      gmtCreate: 'string',
      memberName: 'string',
      memberNickName: 'string',
      mixMobile: 'string',
      mobile: 'string',
      openMerchantId: 'string',
      platFormType: 'string',
      province: 'string',
      sex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveOrderPopRequestOrdersSubOrderModelList extends $tea.Model {
  feature?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSubOrderId
   */
  openSubOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  orderPayment?: string;
  outProductId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productAmount?: string;
  productId?: string;
  productName?: string;
  refundStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TRADE_FINISHED
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  totalFee?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      openSubOrderId: 'OpenSubOrderId',
      orderPayment: 'OrderPayment',
      outProductId: 'OutProductId',
      productAmount: 'ProductAmount',
      productId: 'ProductId',
      productName: 'ProductName',
      refundStatus: 'RefundStatus',
      status: 'Status',
      totalFee: 'TotalFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
      openSubOrderId: 'string',
      orderPayment: 'string',
      outProductId: 'string',
      productAmount: 'string',
      productId: 'string',
      productName: 'string',
      refundStatus: 'string',
      status: 'string',
      totalFee: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSaveOrderPopRequestOrders extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * doudian
   */
  channelCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1699b2b974d444e3aa489f96457ef204
   */
  channelOpenId?: string;
  endTime?: string;
  feature?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testOpenMerchantId
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testOpenOrderId
   */
  openOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-12-20 12:12:12
   */
  orderCreateTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  orderPayment?: string;
  payTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DOUDIAN
   */
  platformType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testShopId
   */
  shopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TRADE_FINISHED
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subOrderModelList?: BatchSaveOrderPopRequestOrdersSubOrderModelList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  totalFee?: string;
  buyerOpenUid?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'ChannelCode',
      channelOpenId: 'ChannelOpenId',
      endTime: 'EndTime',
      feature: 'Feature',
      openMerchantId: 'OpenMerchantId',
      openOrderId: 'OpenOrderId',
      orderCreateTime: 'OrderCreateTime',
      orderPayment: 'OrderPayment',
      payTime: 'PayTime',
      platformType: 'PlatformType',
      shopId: 'ShopId',
      status: 'Status',
      subOrderModelList: 'SubOrderModelList',
      totalFee: 'TotalFee',
      buyerOpenUid: 'buyerOpenUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCode: 'string',
      channelOpenId: 'string',
      endTime: 'string',
      feature: 'string',
      openMerchantId: 'string',
      openOrderId: 'string',
      orderCreateTime: 'string',
      orderPayment: 'string',
      payTime: 'string',
      platformType: 'string',
      shopId: 'string',
      status: 'string',
      subOrderModelList: { 'type': 'array', 'itemType': BatchSaveOrderPopRequestOrdersSubOrderModelList },
      totalFee: 'string',
      buyerOpenUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateMemberLevelRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentGrade?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  currentGradeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4000006009418358
   */
  memberId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1230094
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TAOBAO
   */
  platformType?: string;
  /**
   * @example
   * 0
   */
  score?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0235b7f20a11de9e2bf4c3494b6d998d
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      currentGrade: 'CurrentGrade',
      currentGradeName: 'CurrentGradeName',
      memberId: 'MemberId',
      openMerchantId: 'OpenMerchantId',
      platformType: 'PlatformType',
      score: 'Score',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentGrade: 'number',
      currentGradeName: 'string',
      memberId: 'string',
      openMerchantId: 'string',
      platformType: 'string',
      score: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditMemberBasicInfoRequestBody extends $tea.Model {
  area?: string;
  /**
   * @example
   * xxx.jpg
   */
  avatar?: string;
  /**
   * @example
   * 2024-06-20
   */
  birthday?: string;
  city?: string;
  country?: string;
  /**
   * @example
   * xxx.com
   */
  email?: string;
  memberName?: string;
  /**
   * @example
   * xxxx
   */
  memberNickName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***********
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1230094
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TAOBAO
   */
  platformType?: string;
  province?: string;
  sex?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      avatar: 'Avatar',
      birthday: 'Birthday',
      city: 'City',
      country: 'Country',
      email: 'Email',
      memberName: 'MemberName',
      memberNickName: 'MemberNickName',
      mobile: 'Mobile',
      openMerchantId: 'OpenMerchantId',
      platformType: 'PlatformType',
      province: 'Province',
      sex: 'Sex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      avatar: 'string',
      birthday: 'string',
      city: 'string',
      country: 'string',
      email: 'string',
      memberName: 'string',
      memberNickName: 'string',
      mobile: 'string',
      openMerchantId: 'string',
      platformType: 'string',
      province: 'string',
      sex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountDetailPageQueryRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  accountType?: number;
  /**
   * @example
   * 2011-09-02 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 750cff00c3e0996d220ac2861dafdfadsf
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WMS_36606164948078_23218019
   */
  outerMemberId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  platFormType?: string;
  /**
   * @example
   * 2011-09-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      endTime: 'EndTime',
      openMerchantId: 'OpenMerchantId',
      outerMemberId: 'OuterMemberId',
      page: 'Page',
      pageSize: 'PageSize',
      platFormType: 'PlatFormType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'number',
      endTime: 'string',
      openMerchantId: 'string',
      outerMemberId: 'string',
      page: 'number',
      pageSize: 'number',
      platFormType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberAccountDetailPageQueryResponseBodyData extends $tea.Model {
  /**
   * @example
   * 100
   */
  accountBalance?: string;
  /**
   * @example
   * 20
   */
  accountType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  activityType?: string;
  channelCode?: string;
  /**
   * @example
   * 20
   */
  detailValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ...
   */
  extra?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @example
   * 750cff00c3e0996d220ac2861dafdfadsf
   */
  openMerchantId?: string;
  /**
   * @example
   * 1
   */
  operateType?: string;
  /**
   * @example
   * MEMBER_fc498a12edd84dafd
   */
  outerMemberId?: string;
  /**
   * @example
   * ...
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      accountBalance: 'AccountBalance',
      accountType: 'AccountType',
      activityType: 'ActivityType',
      channelCode: 'ChannelCode',
      detailValue: 'DetailValue',
      extra: 'Extra',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      openMerchantId: 'OpenMerchantId',
      operateType: 'OperateType',
      outerMemberId: 'OuterMemberId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBalance: 'string',
      accountType: 'number',
      activityType: 'string',
      channelCode: 'string',
      detailValue: 'string',
      extra: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      openMerchantId: 'string',
      operateType: 'string',
      outerMemberId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MemberPointChangeRequestBody extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountType?: string;
  channelCode?: string;
  /**
   * @example
   * ""
   */
  extra?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 750cff00c3e0996d220ac2861dafdfadsf
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  operateType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WMS_36606164948078_23218019
   */
  outerMemberId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  platFormType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4LJDNJH9JUX48L41
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      channelCode: 'ChannelCode',
      extra: 'Extra',
      openMerchantId: 'OpenMerchantId',
      operateType: 'OperateType',
      outerMemberId: 'OuterMemberId',
      platFormType: 'PlatFormType',
      quantity: 'Quantity',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      channelCode: 'string',
      extra: 'string',
      openMerchantId: 'string',
      operateType: 'string',
      outerMemberId: 'string',
      platFormType: 'string',
      quantity: 'string',
      serialNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemberBasicInfoRequestBody extends $tea.Model {
  channelCode?: string;
  channelOpenId?: string;
  /**
   * @example
   * 18888889999
   */
  mobile?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 750cff00c3e0996d220ac2861dafdfadsf
   */
  openMerchantId?: string;
  /**
   * @example
   * WMS_36606164948078_23218019
   */
  outerMemberId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  platFormType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'ChannelCode',
      channelOpenId: 'ChannelOpenId',
      mobile: 'Mobile',
      openMerchantId: 'OpenMerchantId',
      outerMemberId: 'OuterMemberId',
      platFormType: 'PlatFormType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCode: 'string',
      channelOpenId: 'string',
      mobile: 'string',
      openMerchantId: 'string',
      outerMemberId: 'string',
      platFormType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemberBasicInfoResponseBodyData extends $tea.Model {
  area?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  avatar?: string;
  birthday?: string;
  city?: string;
  country?: string;
  email?: string;
  extra?: string;
  levelName?: string;
  levelNum?: string;
  memberName?: string;
  memberNickName?: string;
  mobile?: string;
  nearExpiredScore?: string;
  openMerchantId?: string;
  outerMemberId?: string;
  points?: string;
  province?: string;
  score?: string;
  sex?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      avatar: 'Avatar',
      birthday: 'Birthday',
      city: 'City',
      country: 'Country',
      email: 'Email',
      extra: 'Extra',
      levelName: 'LevelName',
      levelNum: 'LevelNum',
      memberName: 'MemberName',
      memberNickName: 'MemberNickName',
      mobile: 'Mobile',
      nearExpiredScore: 'NearExpiredScore',
      openMerchantId: 'OpenMerchantId',
      outerMemberId: 'OuterMemberId',
      points: 'Points',
      province: 'Province',
      score: 'Score',
      sex: 'Sex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      avatar: 'string',
      birthday: 'string',
      city: 'string',
      country: 'string',
      email: 'string',
      extra: 'string',
      levelName: 'string',
      levelNum: 'string',
      memberName: 'string',
      memberNickName: 'string',
      mobile: 'string',
      nearExpiredScore: 'string',
      openMerchantId: 'string',
      outerMemberId: 'string',
      points: 'string',
      province: 'string',
      score: 'string',
      sex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoRequestBodyGifters extends $tea.Model {
  /**
   * @example
   * https://xxx/2.jpg
   */
  headerImg?: string;
  /**
   * @example
   * 1000030820003
   */
  id?: string;
  nickname?: string;
  /**
   * @remarks
   * openId
   * 
   * @example
   * 82ace612cd377134d597e32e91562caf
   */
  openId?: string;
  /**
   * @example
   * 13277778888
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      headerImg: 'HeaderImg',
      id: 'Id',
      nickname: 'Nickname',
      openId: 'OpenId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerImg: 'string',
      id: 'string',
      nickname: 'string',
      openId: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoRequestBodyPresentDetail extends $tea.Model {
  count?: number;
  itemId?: string;
  name?: string;
  price?: number;
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      itemId: 'ItemId',
      name: 'Name',
      price: 'Price',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      itemId: 'string',
      name: 'string',
      price: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoRequestBodyRecipient extends $tea.Model {
  /**
   * @example
   * https://xxx/1.jpg
   */
  headerImg?: string;
  /**
   * @example
   * 1000030855004
   */
  id?: string;
  nickname?: string;
  /**
   * @remarks
   * openId
   * 
   * @example
   * 1179ead68b3833fea61a802ddb1dd3ac
   */
  openId?: string;
  /**
   * @example
   * 18899998888
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      headerImg: 'HeaderImg',
      id: 'Id',
      nickname: 'Nickname',
      openId: 'OpenId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerImg: 'string',
      id: 'string',
      nickname: 'string',
      openId: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncCardInfoRequestBody extends $tea.Model {
  /**
   * @example
   * 1236437142867408
   */
  buyerId?: string;
  /**
   * @example
   * ""
   */
  extra?: string;
  gifters?: SyncCardInfoRequestBodyGifters;
  /**
   * @example
   * 2023-05-12 00:00:00
   */
  occurredAt?: string;
  /**
   * @example
   * 750cff00c3e0996d220ac2861dafdfadsf
   */
  openMerchantId?: string;
  /**
   * @example
   * 223332140970453
   */
  orderId?: string;
  presentDetail?: SyncCardInfoRequestBodyPresentDetail[];
  /**
   * @example
   * 2023-05-12 00:00:00
   */
  receivedAt?: string;
  recipient?: SyncCardInfoRequestBodyRecipient;
  /**
   * @example
   * success
   */
  status?: string;
  theme?: string;
  /**
   * @example
   * 3eecd2b8a6f946ca
   */
  transferId?: string;
  /**
   * @example
   * 2023-05-12 00:00:00
   */
  transferredAt?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      extra: 'Extra',
      gifters: 'Gifters',
      occurredAt: 'OccurredAt',
      openMerchantId: 'OpenMerchantId',
      orderId: 'OrderId',
      presentDetail: 'PresentDetail',
      receivedAt: 'ReceivedAt',
      recipient: 'Recipient',
      status: 'Status',
      theme: 'Theme',
      transferId: 'TransferId',
      transferredAt: 'TransferredAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      extra: 'string',
      gifters: SyncCardInfoRequestBodyGifters,
      occurredAt: 'string',
      openMerchantId: 'string',
      orderId: 'string',
      presentDetail: { 'type': 'array', 'itemType': SyncCardInfoRequestBodyPresentDetail },
      receivedAt: 'string',
      recipient: SyncCardInfoRequestBodyRecipient,
      status: 'string',
      theme: 'string',
      transferId: 'string',
      transferredAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMemberBehaviorInfoRequestBody extends $tea.Model {
  actionDuration?: string;
  actionEndDate?: string;
  actionResult?: boolean;
  actionStartDate?: string;
  actionSubType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  actionType?: string;
  extra?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  openMerchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outerMemberId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  platFormType?: string;
  static names(): { [key: string]: string } {
    return {
      actionDuration: 'ActionDuration',
      actionEndDate: 'ActionEndDate',
      actionResult: 'ActionResult',
      actionStartDate: 'ActionStartDate',
      actionSubType: 'ActionSubType',
      actionType: 'ActionType',
      extra: 'Extra',
      openMerchantId: 'OpenMerchantId',
      outerMemberId: 'OuterMemberId',
      platFormType: 'PlatFormType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionDuration: 'string',
      actionEndDate: 'string',
      actionResult: 'boolean',
      actionStartDate: 'string',
      actionSubType: 'string',
      actionType: 'string',
      extra: 'string',
      openMerchantId: 'string',
      outerMemberId: 'string',
      platFormType: 'string',
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
    this._endpoint = this.getEndpoint("retailadvqa", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 开放平台同步会员基础信息
   * 
   * @param tmpReq - AddMemberBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemberBasicInfoResponse
   */
  async addMemberBasicInfoWithOptions(tmpReq: AddMemberBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<AddMemberBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new AddMemberBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddMemberBasicInfo",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMemberBasicInfoResponse>(await this.callApi(params, req, runtime), new AddMemberBasicInfoResponse({}));
  }

  /**
   * 开放平台同步会员基础信息
   * 
   * @param request - AddMemberBasicInfoRequest
   * @returns AddMemberBasicInfoResponse
   */
  async addMemberBasicInfo(request: AddMemberBasicInfoRequest): Promise<AddMemberBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMemberBasicInfoWithOptions(request, runtime);
  }

  /**
   * 批量保存订单信息
   * 
   * @param tmpReq - BatchSaveOrderPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSaveOrderPopResponse
   */
  async batchSaveOrderPopWithOptions(tmpReq: BatchSaveOrderPopRequest, runtime: $Util.RuntimeOptions): Promise<BatchSaveOrderPopResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchSaveOrderPopShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.orders)) {
      request.ordersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orders, "Orders", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ordersShrink)) {
      query["Orders"] = request.ordersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchSaveOrderPop",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchSaveOrderPopResponse>(await this.callApi(params, req, runtime), new BatchSaveOrderPopResponse({}));
  }

  /**
   * 批量保存订单信息
   * 
   * @param request - BatchSaveOrderPopRequest
   * @returns BatchSaveOrderPopResponse
   */
  async batchSaveOrderPop(request: BatchSaveOrderPopRequest): Promise<BatchSaveOrderPopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSaveOrderPopWithOptions(request, runtime);
  }

  /**
   * 会员等级初始化
   * 
   * @param tmpReq - CalculateMemberLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CalculateMemberLevelResponse
   */
  async calculateMemberLevelWithOptions(tmpReq: CalculateMemberLevelRequest, runtime: $Util.RuntimeOptions): Promise<CalculateMemberLevelResponse> {
    Util.validateModel(tmpReq);
    let request = new CalculateMemberLevelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CalculateMemberLevel",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CalculateMemberLevelResponse>(await this.callApi(params, req, runtime), new CalculateMemberLevelResponse({}));
  }

  /**
   * 会员等级初始化
   * 
   * @param request - CalculateMemberLevelRequest
   * @returns CalculateMemberLevelResponse
   */
  async calculateMemberLevel(request: CalculateMemberLevelRequest): Promise<CalculateMemberLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.calculateMemberLevelWithOptions(request, runtime);
  }

  /**
   * 会员信息编辑API
   * 
   * @param tmpReq - EditMemberBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditMemberBasicInfoResponse
   */
  async editMemberBasicInfoWithOptions(tmpReq: EditMemberBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<EditMemberBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new EditMemberBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["Body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditMemberBasicInfo",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditMemberBasicInfoResponse>(await this.callApi(params, req, runtime), new EditMemberBasicInfoResponse({}));
  }

  /**
   * 会员信息编辑API
   * 
   * @param request - EditMemberBasicInfoRequest
   * @returns EditMemberBasicInfoResponse
   */
  async editMemberBasicInfo(request: EditMemberBasicInfoRequest): Promise<EditMemberBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editMemberBasicInfoWithOptions(request, runtime);
  }

  /**
   * 开放平台会员积分明细查询
   * 
   * @param tmpReq - MemberAccountDetailPageQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MemberAccountDetailPageQueryResponse
   */
  async memberAccountDetailPageQueryWithOptions(tmpReq: MemberAccountDetailPageQueryRequest, runtime: $Util.RuntimeOptions): Promise<MemberAccountDetailPageQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new MemberAccountDetailPageQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MemberAccountDetailPageQuery",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MemberAccountDetailPageQueryResponse>(await this.callApi(params, req, runtime), new MemberAccountDetailPageQueryResponse({}));
  }

  /**
   * 开放平台会员积分明细查询
   * 
   * @param request - MemberAccountDetailPageQueryRequest
   * @returns MemberAccountDetailPageQueryResponse
   */
  async memberAccountDetailPageQuery(request: MemberAccountDetailPageQueryRequest): Promise<MemberAccountDetailPageQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.memberAccountDetailPageQueryWithOptions(request, runtime);
  }

  /**
   * 会员积分变更
   * 
   * @param tmpReq - MemberPointChangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MemberPointChangeResponse
   */
  async memberPointChangeWithOptions(tmpReq: MemberPointChangeRequest, runtime: $Util.RuntimeOptions): Promise<MemberPointChangeResponse> {
    Util.validateModel(tmpReq);
    let request = new MemberPointChangeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MemberPointChange",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MemberPointChangeResponse>(await this.callApi(params, req, runtime), new MemberPointChangeResponse({}));
  }

  /**
   * 会员积分变更
   * 
   * @param request - MemberPointChangeRequest
   * @returns MemberPointChangeResponse
   */
  async memberPointChange(request: MemberPointChangeRequest): Promise<MemberPointChangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.memberPointChangeWithOptions(request, runtime);
  }

  /**
   * 查询会员基础信息
   * 
   * @param tmpReq - QueryMemberBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMemberBasicInfoResponse
   */
  async queryMemberBasicInfoWithOptions(tmpReq: QueryMemberBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryMemberBasicInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryMemberBasicInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMemberBasicInfo",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMemberBasicInfoResponse>(await this.callApi(params, req, runtime), new QueryMemberBasicInfoResponse({}));
  }

  /**
   * 查询会员基础信息
   * 
   * @param request - QueryMemberBasicInfoRequest
   * @returns QueryMemberBasicInfoResponse
   */
  async queryMemberBasicInfo(request: QueryMemberBasicInfoRequest): Promise<QueryMemberBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMemberBasicInfoWithOptions(request, runtime);
  }

  /**
   * 卡券信息同步
   * 
   * @param tmpReq - SyncCardInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncCardInfoResponse
   */
  async syncCardInfoWithOptions(tmpReq: SyncCardInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncCardInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new SyncCardInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncCardInfo",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncCardInfoResponse>(await this.callApi(params, req, runtime), new SyncCardInfoResponse({}));
  }

  /**
   * 卡券信息同步
   * 
   * @param request - SyncCardInfoRequest
   * @returns SyncCardInfoResponse
   */
  async syncCardInfo(request: SyncCardInfoRequest): Promise<SyncCardInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncCardInfoWithOptions(request, runtime);
  }

  /**
   * 开放平台会员行为信息同步
   * 
   * @param tmpReq - SyncMemberBehaviorInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncMemberBehaviorInfoResponse
   */
  async syncMemberBehaviorInfoWithOptions(tmpReq: SyncMemberBehaviorInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncMemberBehaviorInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new SyncMemberBehaviorInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncMemberBehaviorInfo",
      version: "2023-04-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncMemberBehaviorInfoResponse>(await this.callApi(params, req, runtime), new SyncMemberBehaviorInfoResponse({}));
  }

  /**
   * 开放平台会员行为信息同步
   * 
   * @param request - SyncMemberBehaviorInfoRequest
   * @returns SyncMemberBehaviorInfoResponse
   */
  async syncMemberBehaviorInfo(request: SyncMemberBehaviorInfoRequest): Promise<SyncMemberBehaviorInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncMemberBehaviorInfoWithOptions(request, runtime);
  }

}
