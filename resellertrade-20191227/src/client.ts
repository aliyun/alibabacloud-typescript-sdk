// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCouponTemplateRequest extends $tea.Model {
  activitySite?: number;
  bid?: number;
  certainMoney?: number;
  clientType?: string;
  commodityType?: string;
  controlType?: string;
  couponAmount?: number;
  couponEndTime?: string;
  couponFixedType?: string;
  couponStartTime?: string;
  couponType?: string;
  currency?: CreateCouponTemplateRequestCurrency;
  description?: string;
  discountRate?: number;
  endTime?: string;
  extendsMap?: { [key: string]: string };
  fromApp?: string;
  itemCodeSet?: string[];
  market?: string;
  marketType?: number;
  maxRelease?: number;
  messageId?: string;
  name?: string;
  operator?: string;
  orderTypeSet?: string[];
  perLimitNum?: number;
  promotionId?: number;
  reason?: string;
  relativeSecond?: number;
  requestId?: string;
  selectionIdSet?: string[];
  sellerId?: number;
  site?: string;
  spId?: number;
  startTime?: string;
  type?: string;
  universalType?: string;
  upperLimit?: number;
  usageCount?: number;
  useScene?: string;
  userPkAmount?: string;
  validityType?: string;
  static names(): { [key: string]: string } {
    return {
      activitySite: 'ActivitySite',
      bid: 'Bid',
      certainMoney: 'CertainMoney',
      clientType: 'ClientType',
      commodityType: 'CommodityType',
      controlType: 'ControlType',
      couponAmount: 'CouponAmount',
      couponEndTime: 'CouponEndTime',
      couponFixedType: 'CouponFixedType',
      couponStartTime: 'CouponStartTime',
      couponType: 'CouponType',
      currency: 'Currency',
      description: 'Description',
      discountRate: 'DiscountRate',
      endTime: 'EndTime',
      extendsMap: 'ExtendsMap',
      fromApp: 'FromApp',
      itemCodeSet: 'ItemCodeSet',
      market: 'Market',
      marketType: 'MarketType',
      maxRelease: 'MaxRelease',
      messageId: 'MessageId',
      name: 'Name',
      operator: 'Operator',
      orderTypeSet: 'OrderTypeSet',
      perLimitNum: 'PerLimitNum',
      promotionId: 'PromotionId',
      reason: 'Reason',
      relativeSecond: 'RelativeSecond',
      requestId: 'RequestId',
      selectionIdSet: 'SelectionIdSet',
      sellerId: 'SellerId',
      site: 'Site',
      spId: 'SpId',
      startTime: 'StartTime',
      type: 'Type',
      universalType: 'UniversalType',
      upperLimit: 'UpperLimit',
      usageCount: 'UsageCount',
      useScene: 'UseScene',
      userPkAmount: 'UserPkAmount',
      validityType: 'ValidityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activitySite: 'number',
      bid: 'number',
      certainMoney: 'number',
      clientType: 'string',
      commodityType: 'string',
      controlType: 'string',
      couponAmount: 'number',
      couponEndTime: 'string',
      couponFixedType: 'string',
      couponStartTime: 'string',
      couponType: 'string',
      currency: CreateCouponTemplateRequestCurrency,
      description: 'string',
      discountRate: 'number',
      endTime: 'string',
      extendsMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      fromApp: 'string',
      itemCodeSet: { 'type': 'array', 'itemType': 'string' },
      market: 'string',
      marketType: 'number',
      maxRelease: 'number',
      messageId: 'string',
      name: 'string',
      operator: 'string',
      orderTypeSet: { 'type': 'array', 'itemType': 'string' },
      perLimitNum: 'number',
      promotionId: 'number',
      reason: 'string',
      relativeSecond: 'number',
      requestId: 'string',
      selectionIdSet: { 'type': 'array', 'itemType': 'string' },
      sellerId: 'number',
      site: 'string',
      spId: 'number',
      startTime: 'string',
      type: 'string',
      universalType: 'string',
      upperLimit: 'number',
      usageCount: 'number',
      useScene: 'string',
      userPkAmount: 'string',
      validityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCouponTemplateResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCouponTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCouponTemplateResponseBody;
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
      body: CreateCouponTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscardCouponListRequest extends $tea.Model {
  couponList?: number[];
  static names(): { [key: string]: string } {
    return {
      couponList: 'CouponList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscardCouponListResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiscardCouponListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DiscardCouponListResponseBody;
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
      body: DiscardCouponListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCouponPageRequest extends $tea.Model {
  fromApp?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  sellerId?: number;
  templateId?: number;
  uids?: number[];
  static names(): { [key: string]: string } {
    return {
      fromApp: 'FromApp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sellerId: 'SellerId',
      templateId: 'TemplateId',
      uids: 'Uids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromApp: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sellerId: 'number',
      templateId: 'number',
      uids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCouponPageResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  count?: number;
  data?: GetCouponPageResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      count: 'number',
      data: { 'type': 'array', 'itemType': GetCouponPageResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCouponPageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCouponPageResponseBody;
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
      body: GetCouponPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListRequest extends $tea.Model {
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponseBody extends $tea.Model {
  code?: string;
  data?: GetCustomerListResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomerListResponseBody;
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
      body: GetCustomerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationRequest extends $tea.Model {
  relationTime?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      relationTime: 'RelationTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationTime: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationResponseBody extends $tea.Model {
  class?: string;
  code?: string;
  data?: GetRelationResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      code: 'string',
      data: GetRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRelationResponseBody;
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
      body: GetRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResellerPayOrderRequest extends $tea.Model {
  orderId?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResellerPayOrderResponseBody extends $tea.Model {
  code?: string;
  data?: GetResellerPayOrderResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResellerPayOrderResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResellerPayOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResellerPayOrderResponseBody;
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
      body: GetResellerPayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelPartnerUserRequest extends $tea.Model {
  userPK?: number;
  userTag?: string;
  static names(): { [key: string]: string } {
    return {
      userPK: 'UserPK',
      userTag: 'UserTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPK: 'number',
      userTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelPartnerUserResponseBody extends $tea.Model {
  code?: string;
  data?: LabelPartnerUserResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: LabelPartnerUserResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelPartnerUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LabelPartnerUserResponseBody;
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
      body: LabelPartnerUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateResourceRequest extends $tea.Model {
  actionCode?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateResourceResponseBody extends $tea.Model {
  code?: string;
  data?: MigrateResourceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MigrateResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MigrateResourceResponseBody;
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
      body: MigrateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineActivityRequest extends $tea.Model {
  activityList?: number[];
  bizId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      activityList: 'ActivityList',
      bizId: 'BizId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityList: { 'type': 'array', 'itemType': 'number' },
      bizId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineActivityResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: number[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfflineActivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OfflineActivityResponseBody;
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
      body: OfflineActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayResultCallbackRequest extends $tea.Model {
  orderId?: string;
  payStatus?: string;
  payTime?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      payStatus: 'PayStatus',
      payTime: 'PayTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      payStatus: 'string',
      payTime: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayResultCallbackResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayResultCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PayResultCallbackResponseBody;
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
      body: PayResultCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublicActivityRequest extends $tea.Model {
  activityList?: number[];
  bizId?: string;
  snapType?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      activityList: 'ActivityList',
      bizId: 'BizId',
      snapType: 'SnapType',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityList: { 'type': 'array', 'itemType': 'number' },
      bizId: 'string',
      snapType: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublicActivityResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: number[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublicActivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublicActivityResponseBody;
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
      body: PublicActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityRequest extends $tea.Model {
  activityId?: number;
  bizId?: string;
  snapType?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      bizId: 'BizId',
      snapType: 'SnapType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      bizId: 'string',
      snapType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: QueryActivityResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: QueryActivityResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryActivityResponseBody;
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
      body: QueryActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEcoRelationRequest extends $tea.Model {
  relationTime?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      relationTime: 'RelationTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationTime: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEcoRelationResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: QueryEcoRelationResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: QueryEcoRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEcoRelationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEcoRelationResponseBody;
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
      body: QueryEcoRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityRequest extends $tea.Model {
  activityName?: string;
  bizId?: string;
  blackUidList?: number[];
  description?: string;
  endTime?: string;
  extendMap?: { [key: string]: any };
  fusionPromotionParamList?: SaveActivityRequestFusionPromotionParamList[];
  publishTag?: string;
  startTime?: string;
  testAccountUidList?: number[];
  token?: string;
  whiteUidList?: number[];
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      bizId: 'BizId',
      blackUidList: 'BlackUidList',
      description: 'Description',
      endTime: 'EndTime',
      extendMap: 'ExtendMap',
      fusionPromotionParamList: 'FusionPromotionParamList',
      publishTag: 'PublishTag',
      startTime: 'StartTime',
      testAccountUidList: 'TestAccountUidList',
      token: 'Token',
      whiteUidList: 'WhiteUidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      bizId: 'string',
      blackUidList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      endTime: 'string',
      extendMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fusionPromotionParamList: { 'type': 'array', 'itemType': SaveActivityRequestFusionPromotionParamList },
      publishTag: 'string',
      startTime: 'string',
      testAccountUidList: { 'type': 'array', 'itemType': 'number' },
      token: 'string',
      whiteUidList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityShrinkRequest extends $tea.Model {
  activityName?: string;
  bizId?: string;
  blackUidList?: number[];
  description?: string;
  endTime?: string;
  extendMapShrink?: string;
  fusionPromotionParamList?: SaveActivityShrinkRequestFusionPromotionParamList[];
  publishTag?: string;
  startTime?: string;
  testAccountUidList?: number[];
  token?: string;
  whiteUidList?: number[];
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      bizId: 'BizId',
      blackUidList: 'BlackUidList',
      description: 'Description',
      endTime: 'EndTime',
      extendMapShrink: 'ExtendMap',
      fusionPromotionParamList: 'FusionPromotionParamList',
      publishTag: 'PublishTag',
      startTime: 'StartTime',
      testAccountUidList: 'TestAccountUidList',
      token: 'Token',
      whiteUidList: 'WhiteUidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      bizId: 'string',
      blackUidList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      endTime: 'string',
      extendMapShrink: 'string',
      fusionPromotionParamList: { 'type': 'array', 'itemType': SaveActivityShrinkRequestFusionPromotionParamList },
      publishTag: 'string',
      startTime: 'string',
      testAccountUidList: { 'type': 'array', 'itemType': 'number' },
      token: 'string',
      whiteUidList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  data?: number[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      data: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveActivityResponseBody;
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
      body: SaveActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCouponRequest extends $tea.Model {
  bid?: number;
  fromApp?: string;
  operator?: string;
  requestId?: string;
  sellerId?: number;
  templateId?: number;
  userAmountModelList?: SendCouponRequestUserAmountModelList[];
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      fromApp: 'FromApp',
      operator: 'Operator',
      requestId: 'RequestId',
      sellerId: 'SellerId',
      templateId: 'TemplateId',
      userAmountModelList: 'UserAmountModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      fromApp: 'string',
      operator: 'string',
      requestId: 'string',
      sellerId: 'number',
      templateId: 'number',
      userAmountModelList: { 'type': 'array', 'itemType': SendCouponRequestUserAmountModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCouponResponseBody extends $tea.Model {
  code?: string;
  contextMap?: { [key: string]: any };
  count?: number;
  data?: SendCouponResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contextMap: 'ContextMap',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contextMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      count: 'number',
      data: { 'type': 'array', 'itemType': SendCouponResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCouponResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendCouponResponseBody;
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
      body: SendCouponResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferResourceRequest extends $tea.Model {
  actionCode?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferResourceResponseBody extends $tea.Model {
  code?: string;
  data?: TransferResourceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TransferResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransferResourceResponseBody;
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
      body: TransferResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCouponTemplateRequestCurrency extends $tea.Model {
  currencyCode?: string;
  defaultFractionDigits?: number;
  numericCode?: number;
  static names(): { [key: string]: string } {
    return {
      currencyCode: 'CurrencyCode',
      defaultFractionDigits: 'DefaultFractionDigits',
      numericCode: 'NumericCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currencyCode: 'string',
      defaultFractionDigits: 'number',
      numericCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCouponPageResponseBodyDataCurrency extends $tea.Model {
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currencyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCouponPageResponseBodyData extends $tea.Model {
  amount?: number;
  certainMoney?: number;
  couponId?: number;
  couponType?: string;
  currency?: GetCouponPageResponseBodyDataCurrency;
  description?: string;
  discountRate?: number;
  endTime?: string;
  frozenAmount?: number;
  frozenCount?: number;
  promotionId?: number;
  sellerId?: number;
  startTime?: string;
  status?: string;
  templateId?: number;
  universalType?: string;
  upperLimit?: number;
  usageCount?: number;
  usedAmount?: number;
  usedCount?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      certainMoney: 'CertainMoney',
      couponId: 'CouponId',
      couponType: 'CouponType',
      currency: 'Currency',
      description: 'Description',
      discountRate: 'DiscountRate',
      endTime: 'EndTime',
      frozenAmount: 'FrozenAmount',
      frozenCount: 'FrozenCount',
      promotionId: 'PromotionId',
      sellerId: 'SellerId',
      startTime: 'StartTime',
      status: 'Status',
      templateId: 'TemplateId',
      universalType: 'UniversalType',
      upperLimit: 'UpperLimit',
      usageCount: 'UsageCount',
      usedAmount: 'UsedAmount',
      usedCount: 'UsedCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      certainMoney: 'number',
      couponId: 'number',
      couponType: 'string',
      currency: GetCouponPageResponseBodyDataCurrency,
      description: 'string',
      discountRate: 'number',
      endTime: 'string',
      frozenAmount: 'number',
      frozenCount: 'number',
      promotionId: 'number',
      sellerId: 'number',
      startTime: 'string',
      status: 'string',
      templateId: 'number',
      universalType: 'string',
      upperLimit: 'number',
      usageCount: 'number',
      usedAmount: 'number',
      usedCount: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerListResponseBodyData extends $tea.Model {
  totalSize?: number;
  uidList?: string[];
  static names(): { [key: string]: string } {
    return {
      totalSize: 'TotalSize',
      uidList: 'UidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalSize: 'number',
      uidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationResponseBodyDataResellerProductModeDO extends $tea.Model {
  class?: string;
  isService?: number;
  productCode?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      isService: 'IsService',
      productCode: 'ProductCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      isService: 'number',
      productCode: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationResponseBodyDataResellerProductRuleDO extends $tea.Model {
  class?: string;
  commodityRoute?: boolean;
  multiOrder?: boolean;
  payMode?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'Class',
      commodityRoute: 'CommodityRoute',
      multiOrder: 'MultiOrder',
      payMode: 'PayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      commodityRoute: 'boolean',
      multiOrder: 'boolean',
      payMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRelationResponseBodyData extends $tea.Model {
  canLoginOfficial?: boolean;
  class?: string;
  endTime?: number;
  resellerProductModeDO?: GetRelationResponseBodyDataResellerProductModeDO;
  resellerProductRuleDO?: GetRelationResponseBodyDataResellerProductRuleDO;
  resellerUid?: number;
  startTime?: number;
  status?: string;
  topReseller?: boolean;
  uid?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      canLoginOfficial: 'CanLoginOfficial',
      class: 'Class',
      endTime: 'EndTime',
      resellerProductModeDO: 'ResellerProductModeDO',
      resellerProductRuleDO: 'ResellerProductRuleDO',
      resellerUid: 'ResellerUid',
      startTime: 'StartTime',
      status: 'Status',
      topReseller: 'TopReseller',
      uid: 'Uid',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canLoginOfficial: 'boolean',
      class: 'string',
      endTime: 'number',
      resellerProductModeDO: GetRelationResponseBodyDataResellerProductModeDO,
      resellerProductRuleDO: GetRelationResponseBodyDataResellerProductRuleDO,
      resellerUid: 'number',
      startTime: 'number',
      status: 'string',
      topReseller: 'boolean',
      uid: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResellerPayOrderResponseBodyData extends $tea.Model {
  buyerId?: string;
  orderId?: string;
  orderStatus?: string;
  payAmount?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      payAmount: 'PayAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      orderId: 'string',
      orderStatus: 'string',
      payAmount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LabelPartnerUserResponseBodyData extends $tea.Model {
  userPK?: number;
  userTag?: string;
  static names(): { [key: string]: string } {
    return {
      userPK: 'UserPK',
      userTag: 'UserTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPK: 'number',
      userTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateResourceResponseBodyData extends $tea.Model {
  content?: string;
  procEnvir?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      procEnvir: 'ProcEnvir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      procEnvir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityResponseBodyData extends $tea.Model {
  activityId?: number;
  activityName?: string;
  blackList?: number[];
  commodityCodeList?: string[];
  description?: string;
  endTime?: string;
  extMap?: { [key: string]: string };
  promotionDescription?: string;
  promotionValue?: number;
  regionList?: string[];
  sellerIdList?: number[];
  startTime?: string;
  status?: string;
  testAccountList?: number[];
  whiteList?: number[];
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      blackList: 'BlackList',
      commodityCodeList: 'CommodityCodeList',
      description: 'Description',
      endTime: 'EndTime',
      extMap: 'ExtMap',
      promotionDescription: 'PromotionDescription',
      promotionValue: 'PromotionValue',
      regionList: 'RegionList',
      sellerIdList: 'SellerIdList',
      startTime: 'StartTime',
      status: 'Status',
      testAccountList: 'TestAccountList',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      activityName: 'string',
      blackList: { 'type': 'array', 'itemType': 'number' },
      commodityCodeList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      endTime: 'string',
      extMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      promotionDescription: 'string',
      promotionValue: 'number',
      regionList: { 'type': 'array', 'itemType': 'string' },
      sellerIdList: { 'type': 'array', 'itemType': 'number' },
      startTime: 'string',
      status: 'string',
      testAccountList: { 'type': 'array', 'itemType': 'number' },
      whiteList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEcoRelationResponseBodyDataResellerProductModeDO extends $tea.Model {
  isService?: number;
  productCode?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      isService: 'IsService',
      productCode: 'ProductCode',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isService: 'number',
      productCode: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEcoRelationResponseBodyDataResellerProductRuleDO extends $tea.Model {
  commodityRoute?: boolean;
  multiOrder?: boolean;
  payMode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityRoute: 'CommodityRoute',
      multiOrder: 'MultiOrder',
      payMode: 'PayMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityRoute: 'boolean',
      multiOrder: 'boolean',
      payMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEcoRelationResponseBodyData extends $tea.Model {
  canLoginOfficial?: boolean;
  endTime?: string;
  isTopReseller?: boolean;
  resellerProductModeDO?: QueryEcoRelationResponseBodyDataResellerProductModeDO;
  resellerProductRuleDO?: QueryEcoRelationResponseBodyDataResellerProductRuleDO;
  resellerUid?: number;
  startTime?: string;
  status?: string;
  uid?: number;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      canLoginOfficial: 'CanLoginOfficial',
      endTime: 'EndTime',
      isTopReseller: 'IsTopReseller',
      resellerProductModeDO: 'ResellerProductModeDO',
      resellerProductRuleDO: 'ResellerProductRuleDO',
      resellerUid: 'ResellerUid',
      startTime: 'StartTime',
      status: 'Status',
      uid: 'Uid',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canLoginOfficial: 'boolean',
      endTime: 'string',
      isTopReseller: 'boolean',
      resellerProductModeDO: QueryEcoRelationResponseBodyDataResellerProductModeDO,
      resellerProductRuleDO: QueryEcoRelationResponseBodyDataResellerProductRuleDO,
      resellerUid: 'number',
      startTime: 'string',
      status: 'string',
      uid: 'number',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityRequestFusionPromotionParamListModuleInfoParamList extends $tea.Model {
  componentCode?: string;
  itemCode?: string;
  moduleId?: number;
  moduleKey?: string;
  moduleName?: string;
  moduleValueList?: string[];
  pricePlanId?: number;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'componentCode',
      itemCode: 'itemCode',
      moduleId: 'moduleId',
      moduleKey: 'moduleKey',
      moduleName: 'moduleName',
      moduleValueList: 'moduleValueList',
      pricePlanId: 'pricePlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      itemCode: 'string',
      moduleId: 'number',
      moduleKey: 'string',
      moduleName: 'string',
      moduleValueList: { 'type': 'array', 'itemType': 'string' },
      pricePlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityRequestFusionPromotionParamList extends $tea.Model {
  commodityCodeList?: string[];
  promotionValue?: number;
  restrictedRegionList?: string[];
  moduleInfoParamList?: SaveActivityRequestFusionPromotionParamListModuleInfoParamList[];
  static names(): { [key: string]: string } {
    return {
      commodityCodeList: 'CommodityCodeList',
      promotionValue: 'PromotionValue',
      restrictedRegionList: 'RestrictedRegionList',
      moduleInfoParamList: 'moduleInfoParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCodeList: { 'type': 'array', 'itemType': 'string' },
      promotionValue: 'number',
      restrictedRegionList: { 'type': 'array', 'itemType': 'string' },
      moduleInfoParamList: { 'type': 'array', 'itemType': SaveActivityRequestFusionPromotionParamListModuleInfoParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityShrinkRequestFusionPromotionParamListModuleInfoParamList extends $tea.Model {
  componentCode?: string;
  itemCode?: string;
  moduleId?: number;
  moduleKey?: string;
  moduleName?: string;
  moduleValueList?: string[];
  pricePlanId?: number;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'componentCode',
      itemCode: 'itemCode',
      moduleId: 'moduleId',
      moduleKey: 'moduleKey',
      moduleName: 'moduleName',
      moduleValueList: 'moduleValueList',
      pricePlanId: 'pricePlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      itemCode: 'string',
      moduleId: 'number',
      moduleKey: 'string',
      moduleName: 'string',
      moduleValueList: { 'type': 'array', 'itemType': 'string' },
      pricePlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveActivityShrinkRequestFusionPromotionParamList extends $tea.Model {
  commodityCodeList?: string[];
  promotionValue?: number;
  restrictedRegionList?: string[];
  moduleInfoParamList?: SaveActivityShrinkRequestFusionPromotionParamListModuleInfoParamList[];
  static names(): { [key: string]: string } {
    return {
      commodityCodeList: 'CommodityCodeList',
      promotionValue: 'PromotionValue',
      restrictedRegionList: 'RestrictedRegionList',
      moduleInfoParamList: 'moduleInfoParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCodeList: { 'type': 'array', 'itemType': 'string' },
      promotionValue: 'number',
      restrictedRegionList: { 'type': 'array', 'itemType': 'string' },
      moduleInfoParamList: { 'type': 'array', 'itemType': SaveActivityShrinkRequestFusionPromotionParamListModuleInfoParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCouponRequestUserAmountModelList extends $tea.Model {
  amount?: number;
  uid?: number;
  userId?: number;
  youhuiId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      uid: 'Uid',
      userId: 'UserId',
      youhuiId: 'YouhuiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      uid: 'number',
      userId: 'number',
      youhuiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCouponResponseBodyData extends $tea.Model {
  amount?: number;
  uid?: number;
  userId?: number;
  youhuiId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      uid: 'Uid',
      userId: 'UserId',
      youhuiId: 'YouhuiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      uid: 'number',
      userId: 'number',
      youhuiId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferResourceResponseBodyData extends $tea.Model {
  content?: string;
  procEnv?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      procEnv: 'ProcEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      procEnv: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "resellertrade.aliyuncs.com",
      'ap-northeast-2-pop': "resellertrade.aliyuncs.com",
      'ap-south-1': "resellertrade.aliyuncs.com",
      'ap-southeast-1': "resellertrade.aliyuncs.com",
      'ap-southeast-2': "resellertrade.aliyuncs.com",
      'ap-southeast-3': "resellertrade.aliyuncs.com",
      'ap-southeast-5': "resellertrade.aliyuncs.com",
      'cn-beijing': "resellertrade.aliyuncs.com",
      'cn-beijing-finance-1': "resellertrade.aliyuncs.com",
      'cn-beijing-finance-pop': "resellertrade.aliyuncs.com",
      'cn-beijing-gov-1': "resellertrade.aliyuncs.com",
      'cn-beijing-nu16-b01': "resellertrade.aliyuncs.com",
      'cn-chengdu': "resellertrade.aliyuncs.com",
      'cn-edge-1': "resellertrade.aliyuncs.com",
      'cn-fujian': "resellertrade.aliyuncs.com",
      'cn-haidian-cm12-c01': "resellertrade.aliyuncs.com",
      'cn-hangzhou': "resellertrade.aliyuncs.com",
      'cn-hangzhou-bj-b01': "resellertrade.aliyuncs.com",
      'cn-hangzhou-finance': "resellertrade.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "resellertrade.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "resellertrade.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "resellertrade.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "resellertrade.aliyuncs.com",
      'cn-hangzhou-test-306': "resellertrade.aliyuncs.com",
      'cn-hongkong': "resellertrade.aliyuncs.com",
      'cn-hongkong-finance-pop': "resellertrade.aliyuncs.com",
      'cn-huhehaote': "resellertrade.aliyuncs.com",
      'cn-north-2-gov-1': "resellertrade.aliyuncs.com",
      'cn-qingdao': "resellertrade.aliyuncs.com",
      'cn-qingdao-nebula': "resellertrade.aliyuncs.com",
      'cn-shanghai': "resellertrade.aliyuncs.com",
      'cn-shanghai-et15-b01': "resellertrade.aliyuncs.com",
      'cn-shanghai-et2-b01': "resellertrade.aliyuncs.com",
      'cn-shanghai-finance-1': "resellertrade.aliyuncs.com",
      'cn-shanghai-inner': "resellertrade.aliyuncs.com",
      'cn-shanghai-internal-test-1': "resellertrade.aliyuncs.com",
      'cn-shenzhen': "resellertrade.aliyuncs.com",
      'cn-shenzhen-finance-1': "resellertrade.aliyuncs.com",
      'cn-shenzhen-inner': "resellertrade.aliyuncs.com",
      'cn-shenzhen-st4-d01': "resellertrade.aliyuncs.com",
      'cn-shenzhen-su18-b01': "resellertrade.aliyuncs.com",
      'cn-wuhan': "resellertrade.aliyuncs.com",
      'cn-yushanfang': "resellertrade.aliyuncs.com",
      'cn-zhangbei-na61-b01': "resellertrade.aliyuncs.com",
      'cn-zhangjiakou': "resellertrade.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "resellertrade.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "resellertrade.aliyuncs.com",
      'eu-central-1': "resellertrade.aliyuncs.com",
      'eu-west-1': "resellertrade.aliyuncs.com",
      'eu-west-1-oxs': "resellertrade.aliyuncs.com",
      'me-east-1': "resellertrade.aliyuncs.com",
      'rus-west-1-pop': "resellertrade.aliyuncs.com",
      'us-east-1': "resellertrade.aliyuncs.com",
      'us-west-1': "resellertrade.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("resellertrade", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createCouponTemplateWithOptions(request: CreateCouponTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCouponTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activitySite)) {
      body["ActivitySite"] = request.activitySite;
    }

    if (!Util.isUnset(request.bid)) {
      body["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.certainMoney)) {
      body["CertainMoney"] = request.certainMoney;
    }

    if (!Util.isUnset(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.commodityType)) {
      body["CommodityType"] = request.commodityType;
    }

    if (!Util.isUnset(request.controlType)) {
      body["ControlType"] = request.controlType;
    }

    if (!Util.isUnset(request.couponAmount)) {
      body["CouponAmount"] = request.couponAmount;
    }

    if (!Util.isUnset(request.couponEndTime)) {
      body["CouponEndTime"] = request.couponEndTime;
    }

    if (!Util.isUnset(request.couponFixedType)) {
      body["CouponFixedType"] = request.couponFixedType;
    }

    if (!Util.isUnset(request.couponStartTime)) {
      body["CouponStartTime"] = request.couponStartTime;
    }

    if (!Util.isUnset(request.couponType)) {
      body["CouponType"] = request.couponType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currency)) {
      bodyFlat["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.discountRate)) {
      body["DiscountRate"] = request.discountRate;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.extendsMap)) {
      bodyFlat["ExtendsMap"] = request.extendsMap;
    }

    if (!Util.isUnset(request.fromApp)) {
      body["FromApp"] = request.fromApp;
    }

    if (!Util.isUnset(request.itemCodeSet)) {
      body["ItemCodeSet"] = request.itemCodeSet;
    }

    if (!Util.isUnset(request.market)) {
      body["Market"] = request.market;
    }

    if (!Util.isUnset(request.marketType)) {
      body["MarketType"] = request.marketType;
    }

    if (!Util.isUnset(request.maxRelease)) {
      body["MaxRelease"] = request.maxRelease;
    }

    if (!Util.isUnset(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.orderTypeSet)) {
      body["OrderTypeSet"] = request.orderTypeSet;
    }

    if (!Util.isUnset(request.perLimitNum)) {
      body["PerLimitNum"] = request.perLimitNum;
    }

    if (!Util.isUnset(request.promotionId)) {
      body["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.relativeSecond)) {
      body["RelativeSecond"] = request.relativeSecond;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.selectionIdSet)) {
      body["SelectionIdSet"] = request.selectionIdSet;
    }

    if (!Util.isUnset(request.sellerId)) {
      body["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.site)) {
      body["Site"] = request.site;
    }

    if (!Util.isUnset(request.spId)) {
      body["SpId"] = request.spId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.universalType)) {
      body["UniversalType"] = request.universalType;
    }

    if (!Util.isUnset(request.upperLimit)) {
      body["UpperLimit"] = request.upperLimit;
    }

    if (!Util.isUnset(request.usageCount)) {
      body["UsageCount"] = request.usageCount;
    }

    if (!Util.isUnset(request.useScene)) {
      body["UseScene"] = request.useScene;
    }

    if (!Util.isUnset(request.userPkAmount)) {
      body["UserPkAmount"] = request.userPkAmount;
    }

    if (!Util.isUnset(request.validityType)) {
      body["ValidityType"] = request.validityType;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCouponTemplate",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCouponTemplateResponse>(await this.callApi(params, req, runtime), new CreateCouponTemplateResponse({}));
  }

  async createCouponTemplate(request: CreateCouponTemplateRequest): Promise<CreateCouponTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCouponTemplateWithOptions(request, runtime);
  }

  async discardCouponListWithOptions(request: DiscardCouponListRequest, runtime: $Util.RuntimeOptions): Promise<DiscardCouponListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.couponList)) {
      body["CouponList"] = request.couponList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DiscardCouponList",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DiscardCouponListResponse>(await this.callApi(params, req, runtime), new DiscardCouponListResponse({}));
  }

  async discardCouponList(request: DiscardCouponListRequest): Promise<DiscardCouponListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.discardCouponListWithOptions(request, runtime);
  }

  async getCouponPageWithOptions(request: GetCouponPageRequest, runtime: $Util.RuntimeOptions): Promise<GetCouponPageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCouponPage",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCouponPageResponse>(await this.callApi(params, req, runtime), new GetCouponPageResponse({}));
  }

  async getCouponPage(request: GetCouponPageRequest): Promise<GetCouponPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCouponPageWithOptions(request, runtime);
  }

  async getCustomerListWithOptions(request: GetCustomerListRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomerListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomerList",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomerListResponse>(await this.callApi(params, req, runtime), new GetCustomerListResponse({}));
  }

  async getCustomerList(request: GetCustomerListRequest): Promise<GetCustomerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomerListWithOptions(request, runtime);
  }

  async getRelationWithOptions(request: GetRelationRequest, runtime: $Util.RuntimeOptions): Promise<GetRelationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRelation",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRelationResponse>(await this.callApi(params, req, runtime), new GetRelationResponse({}));
  }

  async getRelation(request: GetRelationRequest): Promise<GetRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRelationWithOptions(request, runtime);
  }

  async getResellerPayOrderWithOptions(request: GetResellerPayOrderRequest, runtime: $Util.RuntimeOptions): Promise<GetResellerPayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResellerPayOrder",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResellerPayOrderResponse>(await this.callApi(params, req, runtime), new GetResellerPayOrderResponse({}));
  }

  async getResellerPayOrder(request: GetResellerPayOrderRequest): Promise<GetResellerPayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResellerPayOrderWithOptions(request, runtime);
  }

  async labelPartnerUserWithOptions(request: LabelPartnerUserRequest, runtime: $Util.RuntimeOptions): Promise<LabelPartnerUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userPK)) {
      body["UserPK"] = request.userPK;
    }

    if (!Util.isUnset(request.userTag)) {
      body["UserTag"] = request.userTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LabelPartnerUser",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LabelPartnerUserResponse>(await this.callApi(params, req, runtime), new LabelPartnerUserResponse({}));
  }

  async labelPartnerUser(request: LabelPartnerUserRequest): Promise<LabelPartnerUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.labelPartnerUserWithOptions(request, runtime);
  }

  async migrateResourceWithOptions(request: MigrateResourceRequest, runtime: $Util.RuntimeOptions): Promise<MigrateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionCode)) {
      body["ActionCode"] = request.actionCode;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MigrateResource",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MigrateResourceResponse>(await this.callApi(params, req, runtime), new MigrateResourceResponse({}));
  }

  async migrateResource(request: MigrateResourceRequest): Promise<MigrateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.migrateResourceWithOptions(request, runtime);
  }

  async offlineActivityWithOptions(request: OfflineActivityRequest, runtime: $Util.RuntimeOptions): Promise<OfflineActivityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activityList)) {
      body["ActivityList"] = request.activityList;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OfflineActivity",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OfflineActivityResponse>(await this.callApi(params, req, runtime), new OfflineActivityResponse({}));
  }

  async offlineActivity(request: OfflineActivityRequest): Promise<OfflineActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.offlineActivityWithOptions(request, runtime);
  }

  async payResultCallbackWithOptions(request: PayResultCallbackRequest, runtime: $Util.RuntimeOptions): Promise<PayResultCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!Util.isUnset(request.payStatus)) {
      query["PayStatus"] = request.payStatus;
    }

    if (!Util.isUnset(request.payTime)) {
      query["PayTime"] = request.payTime;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PayResultCallback",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PayResultCallbackResponse>(await this.callApi(params, req, runtime), new PayResultCallbackResponse({}));
  }

  async payResultCallback(request: PayResultCallbackRequest): Promise<PayResultCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.payResultCallbackWithOptions(request, runtime);
  }

  async publicActivityWithOptions(request: PublicActivityRequest, runtime: $Util.RuntimeOptions): Promise<PublicActivityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activityList)) {
      body["ActivityList"] = request.activityList;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.snapType)) {
      body["SnapType"] = request.snapType;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublicActivity",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublicActivityResponse>(await this.callApi(params, req, runtime), new PublicActivityResponse({}));
  }

  async publicActivity(request: PublicActivityRequest): Promise<PublicActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publicActivityWithOptions(request, runtime);
  }

  async queryActivityWithOptions(request: QueryActivityRequest, runtime: $Util.RuntimeOptions): Promise<QueryActivityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activityId)) {
      body["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.snapType)) {
      body["SnapType"] = request.snapType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryActivity",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryActivityResponse>(await this.callApi(params, req, runtime), new QueryActivityResponse({}));
  }

  async queryActivity(request: QueryActivityRequest): Promise<QueryActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryActivityWithOptions(request, runtime);
  }

  async queryEcoRelationWithOptions(request: QueryEcoRelationRequest, runtime: $Util.RuntimeOptions): Promise<QueryEcoRelationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.relationTime)) {
      body["RelationTime"] = request.relationTime;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryEcoRelation",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEcoRelationResponse>(await this.callApi(params, req, runtime), new QueryEcoRelationResponse({}));
  }

  async queryEcoRelation(request: QueryEcoRelationRequest): Promise<QueryEcoRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEcoRelationWithOptions(request, runtime);
  }

  async saveActivityWithOptions(tmpReq: SaveActivityRequest, runtime: $Util.RuntimeOptions): Promise<SaveActivityResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveActivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendMap)) {
      request.extendMapShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendMap, "ExtendMap", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activityName)) {
      body["ActivityName"] = request.activityName;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.blackUidList)) {
      body["BlackUidList"] = request.blackUidList;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.extendMapShrink)) {
      body["ExtendMap"] = request.extendMapShrink;
    }

    if (!Util.isUnset(request.fusionPromotionParamList)) {
      body["FusionPromotionParamList"] = request.fusionPromotionParamList;
    }

    if (!Util.isUnset(request.publishTag)) {
      body["PublishTag"] = request.publishTag;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.testAccountUidList)) {
      body["TestAccountUidList"] = request.testAccountUidList;
    }

    if (!Util.isUnset(request.token)) {
      body["Token"] = request.token;
    }

    if (!Util.isUnset(request.whiteUidList)) {
      body["WhiteUidList"] = request.whiteUidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveActivity",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveActivityResponse>(await this.callApi(params, req, runtime), new SaveActivityResponse({}));
  }

  async saveActivity(request: SaveActivityRequest): Promise<SaveActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveActivityWithOptions(request, runtime);
  }

  async sendCouponWithOptions(request: SendCouponRequest, runtime: $Util.RuntimeOptions): Promise<SendCouponResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bid)) {
      body["Bid"] = request.bid;
    }

    if (!Util.isUnset(request.fromApp)) {
      body["FromApp"] = request.fromApp;
    }

    if (!Util.isUnset(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.sellerId)) {
      body["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.userAmountModelList)) {
      body["UserAmountModelList"] = request.userAmountModelList;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendCoupon",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendCouponResponse>(await this.callApi(params, req, runtime), new SendCouponResponse({}));
  }

  async sendCoupon(request: SendCouponRequest): Promise<SendCouponResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCouponWithOptions(request, runtime);
  }

  async transferResourceWithOptions(request: TransferResourceRequest, runtime: $Util.RuntimeOptions): Promise<TransferResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionCode)) {
      body["ActionCode"] = request.actionCode;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TransferResource",
      version: "2019-12-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferResourceResponse>(await this.callApi(params, req, runtime), new TransferResourceResponse({}));
  }

  async transferResource(request: TransferResourceRequest): Promise<TransferResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferResourceWithOptions(request, runtime);
  }

}
