// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAddressRequest extends $tea.Model {
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  addressInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      addressInfo: 'AddressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
      addressInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  addressId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      addressId: 'AddressId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      addressId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemLimitRuleRequest extends $tea.Model {
  bizId?: string;
  subBizCode?: string;
  lmActivityId?: number;
  lmItemId?: string;
  itemId?: number;
  upperNum?: number;
  ruleType?: number;
  beginTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizCode: 'SubBizCode',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      upperNum: 'UpperNum',
      ruleType: 'RuleType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizCode: 'string',
      lmActivityId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      upperNum: 'number',
      ruleType: 'number',
      beginTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemLimitRuleResponseBody extends $tea.Model {
  code?: string;
  model?: number;
  message?: string;
  requestId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      model: 'Model',
      message: 'Message',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      model: 'number',
      message: 'string',
      requestId: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemLimitRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddItemLimitRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddItemLimitRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemToSubBizsRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  subBizIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      subBizIds: 'SubBizIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
      subBizIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemToSubBizsShrinkRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  subBizIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      subBizIdsShrink: 'SubBizIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
      subBizIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemToSubBizsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemToSubBizsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddItemToSubBizsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddItemToSubBizsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSupplierNewItemsRequest extends $tea.Model {
  bizId?: string;
  itemList?: AddSupplierNewItemsRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemList: { 'type': 'array', 'itemType': AddSupplierNewItemsRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSupplierNewItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSupplierNewItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSupplierNewItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSupplierNewItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  subLmOrderId?: string;
  bizClaimType?: number;
  applyRefundFee?: number;
  applyRefundCount?: number;
  applyReasonTextId?: number;
  leaveMessage?: string;
  goodsStatus?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  leavePictureList?: ApplyRefundRequestLeavePictureList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      subLmOrderId: 'SubLmOrderId',
      bizClaimType: 'BizClaimType',
      applyRefundFee: 'ApplyRefundFee',
      applyRefundCount: 'ApplyRefundCount',
      applyReasonTextId: 'ApplyReasonTextId',
      leaveMessage: 'LeaveMessage',
      goodsStatus: 'GoodsStatus',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
      leavePictureList: 'LeavePictureList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      subLmOrderId: 'string',
      bizClaimType: 'number',
      applyRefundFee: 'number',
      applyRefundCount: 'number',
      applyReasonTextId: 'number',
      leaveMessage: 'string',
      goodsStatus: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
      leavePictureList: { 'type': 'array', 'itemType': ApplyRefundRequestLeavePictureList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  refundApplicationData?: ApplyRefundResponseBodyRefundApplicationData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      refundApplicationData: 'RefundApplicationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      refundApplicationData: ApplyRefundResponseBodyRefundApplicationData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyRefundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegistAnonymousTbAccountRequest extends $tea.Model {
  bizId?: string;
  idJsonList?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      idJsonList: 'IdJsonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      idJsonList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegistAnonymousTbAccountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      batchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegistAnonymousTbAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchRegistAnonymousTbAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchRegistAnonymousTbAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: string;
  accountType?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      accountType: 'AccountType',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'string',
      accountType: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  subLmOrderId?: string;
  disputeId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      subLmOrderId: 'SubLmOrderId',
      disputeId: 'DisputeId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      subLmOrderId: 'string',
      disputeId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  refundApplicationData?: CancelRefundResponseBodyRefundApplicationData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      refundApplicationData: 'RefundApplicationData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      refundApplicationData: CancelRefundResponseBodyRefundApplicationData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelRefundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfirmDisburseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfirmDisburseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  outTradeId?: string;
  lockSeatAppKey?: string;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      outTradeId: 'OutTradeId',
      lockSeatAppKey: 'LockSeatAppKey',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      outTradeId: 'string',
      lockSeatAppKey: 'string',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: CreateMovieTicketOrderResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: CreateMovieTicketOrderResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMovieTicketOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMovieTicketOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  outTradeId?: string;
  itemId?: number;
  quantity?: number;
  totalAmount?: number;
  extJson?: string;
  deliveryAddress?: string;
  orderExpireTime?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  lmItemId?: string;
  buyerMessageMap?: string;
  itemList?: CreateOrderRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      outTradeId: 'OutTradeId',
      itemId: 'ItemId',
      quantity: 'Quantity',
      totalAmount: 'TotalAmount',
      extJson: 'ExtJson',
      deliveryAddress: 'DeliveryAddress',
      orderExpireTime: 'OrderExpireTime',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
      lmItemId: 'LmItemId',
      buyerMessageMap: 'BuyerMessageMap',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      outTradeId: 'string',
      itemId: 'number',
      quantity: 'number',
      totalAmount: 'number',
      extJson: 'string',
      deliveryAddress: 'string',
      orderExpireTime: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
      lmItemId: 'string',
      buyerMessageMap: 'string',
      itemList: { 'type': 'array', 'itemType': CreateOrderRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: CreateOrderResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: CreateOrderResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2Request extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  outTradeId?: string;
  itemId?: number;
  quantity?: number;
  totalAmount?: number;
  extJson?: string;
  deliveryAddress?: string;
  orderExpireTime?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  lmItemId?: string;
  buyerMessageMap?: string;
  itemList?: CreateOrderV2RequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      outTradeId: 'OutTradeId',
      itemId: 'ItemId',
      quantity: 'Quantity',
      totalAmount: 'TotalAmount',
      extJson: 'ExtJson',
      deliveryAddress: 'DeliveryAddress',
      orderExpireTime: 'OrderExpireTime',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
      lmItemId: 'LmItemId',
      buyerMessageMap: 'BuyerMessageMap',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      outTradeId: 'string',
      itemId: 'number',
      quantity: 'number',
      totalAmount: 'number',
      extJson: 'string',
      deliveryAddress: 'string',
      orderExpireTime: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
      lmItemId: 'string',
      buyerMessageMap: 'string',
      itemList: { 'type': 'array', 'itemType': CreateOrderV2RequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: CreateOrderV2ResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: CreateOrderV2ResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrderV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrderV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  buyInfo?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      buyInfo: 'BuyInfo',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      buyInfo: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  model?: CreatePayUrlResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      model: CreatePayUrlResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePayUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePayUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  outTradeId?: string;
  itemId?: number;
  quantity?: number;
  totalAmount?: number;
  extJson?: string;
  deliveryAddress?: string;
  orderExpireTime?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  lmItemId?: string;
  itemList?: CreateVirtualProductOrderRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      outTradeId: 'OutTradeId',
      itemId: 'ItemId',
      quantity: 'Quantity',
      totalAmount: 'TotalAmount',
      extJson: 'ExtJson',
      deliveryAddress: 'DeliveryAddress',
      orderExpireTime: 'OrderExpireTime',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
      lmItemId: 'LmItemId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      outTradeId: 'string',
      itemId: 'number',
      quantity: 'number',
      totalAmount: 'number',
      extJson: 'string',
      deliveryAddress: 'string',
      orderExpireTime: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
      lmItemId: 'string',
      itemList: { 'type': 'array', 'itemType': CreateVirtualProductOrderRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: CreateVirtualProductOrderResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: CreateVirtualProductOrderResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVirtualProductOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVirtualProductOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWithholdTradeRequest extends $tea.Model {
  outRequestNo?: string;
  outTradeNo?: string;
  subject?: string;
  buyerId?: string;
  merchantId?: string;
  totalAmount?: string;
  body?: string;
  goodsDetail?: string;
  agreementNo?: string;
  settleMode?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      subject: 'Subject',
      buyerId: 'BuyerId',
      merchantId: 'MerchantId',
      totalAmount: 'TotalAmount',
      body: 'Body',
      goodsDetail: 'GoodsDetail',
      agreementNo: 'AgreementNo',
      settleMode: 'SettleMode',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      outTradeNo: 'string',
      subject: 'string',
      buyerId: 'string',
      merchantId: 'string',
      totalAmount: 'string',
      body: 'string',
      goodsDetail: 'string',
      agreementNo: 'string',
      settleMode: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWithholdTradeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  withholdTradeResponse?: CreateWithholdTradeResponseBodyWithholdTradeResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      withholdTradeResponse: 'WithholdTradeResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      withholdTradeResponse: CreateWithholdTradeResponseBodyWithholdTradeResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWithholdTradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWithholdTradeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWithholdTradeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizItemsRequest extends $tea.Model {
  bizId?: string;
  subBizId?: string;
  itemIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizId: 'SubBizId',
      itemIdList: 'ItemIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizId: 'string',
      itemIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBizItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemLimitRuleRequest extends $tea.Model {
  bizId?: string;
  subBizCode?: string;
  lmActivityId?: number;
  lmItemId?: string;
  itemId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizCode: 'SubBizCode',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizCode: 'string',
      lmActivityId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemLimitRuleResponseBody extends $tea.Model {
  code?: string;
  model?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      model: 'Model',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      model: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemLimitRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteItemLimitRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteItemLimitRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  outTradeId?: string;
  lmOrderId?: string;
  extJson?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      outTradeId: 'OutTradeId',
      lmOrderId: 'LmOrderId',
      extJson: 'ExtJson',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      outTradeId: 'string',
      lmOrderId: 'string',
      extJson: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: EnableOrderResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: EnableOrderResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeRequest extends $tea.Model {
  processInstanceId?: string;
  processId?: string;
  nodeInstanceId?: string;
  nodeId?: string;
  requestData?: string;
  static names(): { [key: string]: string } {
    return {
      processInstanceId: 'ProcessInstanceId',
      processId: 'ProcessId',
      nodeInstanceId: 'NodeInstanceId',
      nodeId: 'NodeId',
      requestData: 'RequestData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processInstanceId: 'string',
      processId: 'string',
      nodeInstanceId: 'string',
      nodeId: 'string',
      requestData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: ExecuteNodeResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: ExecuteNodeResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryChainRequest extends $tea.Model {
  bizId?: string;
  categoryId?: number;
  itemId?: number;
  lmItemId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      categoryId: 'CategoryId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      categoryId: 'number',
      itemId: 'number',
      lmItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryChainResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  categoryList?: GetCategoryChainResponseBodyCategoryList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      categoryList: 'CategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      categoryList: { 'type': 'array', 'itemType': GetCategoryChainResponseBodyCategoryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCategoryChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCategoryChainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListRequest extends $tea.Model {
  bizId?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  categoryList?: GetCategoryListResponseBodyCategoryList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      categoryList: 'CategoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      categoryList: GetCategoryListResponseBodyCategoryList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCategoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCategoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomServiceUrlRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  sellerId?: string;
  cuid?: string;
  nick?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      sellerId: 'SellerId',
      cuid: 'Cuid',
      nick: 'Nick',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      sellerId: 'string',
      cuid: 'string',
      nick: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomServiceUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  urlData?: GetCustomServiceUrlResponseBodyUrlData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      urlData: 'UrlData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      urlData: GetCustomServiceUrlResponseBodyUrlData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomServiceUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomServiceUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomServiceUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuidePageRequest extends $tea.Model {
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuidePageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  miniShopInfo?: GetGuidePageResponseBodyMiniShopInfo[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      miniShopInfo: 'MiniShopInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      miniShopInfo: { 'type': 'array', 'itemType': GetGuidePageResponseBodyMiniShopInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuidePageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGuidePageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGuidePageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPromotionRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPromotionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  itemPromotionModel?: GetItemPromotionResponseBodyItemPromotionModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      itemPromotionModel: 'ItemPromotionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      itemPromotionModel: GetItemPromotionResponseBodyItemPromotionModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPromotionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetItemPromotionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetItemPromotionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPageRequest extends $tea.Model {
  bizId?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  targetUrl?: string;
  failUrl?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      targetUrl: 'TargetUrl',
      failUrl: 'FailUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      targetUrl: 'string',
      failUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  urlData?: GetLoginPageResponseBodyUrlData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      urlData: 'UrlData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      urlData: GetLoginPageResponseBodyUrlData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLoginPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLoginPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchUrlRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  url?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      url: 'Url',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      url: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchUrlResponseBody extends $tea.Model {
  code?: string;
  url?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      url: 'Url',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      url: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSwitchUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSwitchUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoRequest extends $tea.Model {
  bizId?: string;
  userFlag?: string;
  appName?: string;
  queryJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      userFlag: 'UserFlag',
      appName: 'AppName',
      queryJson: 'QueryJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      userFlag: 'string',
      appName: 'string',
      queryJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  loginResult?: GetUserInfoResponseBodyLoginResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      loginResult: 'LoginResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      loginResult: GetUserInfoResponseBodyLoginResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWithholdSignPageUrlRequest extends $tea.Model {
  outRequestNo?: string;
  externalAgreementNo?: string;
  merchantId?: string;
  merchantServiceName?: string;
  merchantServiceDescription?: string;
  identityParameters?: string;
  returnUrl?: string;
  notifyUrl?: string;
  deviceType?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      externalAgreementNo: 'ExternalAgreementNo',
      merchantId: 'MerchantId',
      merchantServiceName: 'MerchantServiceName',
      merchantServiceDescription: 'MerchantServiceDescription',
      identityParameters: 'IdentityParameters',
      returnUrl: 'ReturnUrl',
      notifyUrl: 'NotifyUrl',
      deviceType: 'DeviceType',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      externalAgreementNo: 'string',
      merchantId: 'string',
      merchantServiceName: 'string',
      merchantServiceDescription: 'string',
      identityParameters: 'string',
      returnUrl: 'string',
      notifyUrl: 'string',
      deviceType: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWithholdSignPageUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  withholdSignResponse?: GetWithholdSignPageUrlResponseBodyWithholdSignResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      withholdSignResponse: 'WithholdSignResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      withholdSignResponse: GetWithholdSignPageUrlResponseBodyWithholdSignResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWithholdSignPageUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWithholdSignPageUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWithholdSignPageUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  subLmOrderId?: string;
  bizClaimType?: number;
  goodsStatus?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      subLmOrderId: 'SubLmOrderId',
      bizClaimType: 'BizClaimType',
      goodsStatus: 'GoodsStatus',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      subLmOrderId: 'string',
      bizClaimType: 'number',
      goodsStatus: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  subLmOrderId?: string;
  requestId?: string;
  initApplyRefundData?: InitApplyRefundResponseBodyInitApplyRefundData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      subLmOrderId: 'SubLmOrderId',
      requestId: 'RequestId',
      initApplyRefundData: 'InitApplyRefundData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      subLmOrderId: 'string',
      requestId: 'string',
      initApplyRefundData: InitApplyRefundResponseBodyInitApplyRefundData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitApplyRefundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitApplyRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesRequest extends $tea.Model {
  bizId?: string;
  lmItemIds?: { [key: string]: any };
  itemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIds: 'LmItemIds',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesShrinkRequest extends $tea.Model {
  bizId?: string;
  lmItemIdsShrink?: string;
  itemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIdsShrink: 'LmItemIds',
      itemIdsShrink: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIdsShrink: 'string',
      itemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  lmItemActivityModelList?: ListItemActivitiesResponseBodyLmItemActivityModelList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      lmItemActivityModelList: 'LmItemActivityModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      lmItemActivityModelList: ListItemActivitiesResponseBodyLmItemActivityModelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListItemActivitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListItemActivitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsRequest extends $tea.Model {
  bizId?: string;
  subBizId?: string;
  itemList?: ModifyBasicAndBizItemsRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizId: 'SubBizId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizId: 'string',
      itemList: { 'type': 'array', 'itemType': ModifyBasicAndBizItemsRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  failedItemList?: ModifyBasicAndBizItemsResponseBodyFailedItemList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      failedItemList: 'FailedItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      failedItemList: ModifyBasicAndBizItemsResponseBodyFailedItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBasicAndBizItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBasicAndBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsRequest extends $tea.Model {
  bizId?: string;
  subBizId?: string;
  itemList?: ModifyBizItemsRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizId: 'SubBizId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizId: 'string',
      itemList: { 'type': 'array', 'itemType': ModifyBizItemsRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  failedItemList?: ModifyBizItemsResponseBodyFailedItemList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      failedItemList: 'FailedItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      failedItemList: ModifyBizItemsResponseBodyFailedItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBizItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemLimitRuleRequest extends $tea.Model {
  bizId?: string;
  subBizCode?: string;
  lmActivityId?: number;
  lmItemId?: string;
  itemId?: number;
  upperNum?: number;
  ruleId?: number;
  ruleType?: number;
  beginTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizCode: 'SubBizCode',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      upperNum: 'UpperNum',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizCode: 'string',
      lmActivityId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      upperNum: 'number',
      ruleId: 'number',
      ruleType: 'number',
      beginTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemLimitRuleResponseBody extends $tea.Model {
  code?: string;
  model?: boolean;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      model: 'Model',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      model: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemLimitRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyItemLimitRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyItemLimitRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyPayOrderStatusRequest extends $tea.Model {
  channelId?: string;
  requestId?: string;
  operationDate?: string;
  payTypes?: string;
  amount?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      requestId: 'RequestId',
      operationDate: 'OperationDate',
      payTypes: 'PayTypes',
      amount: 'Amount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      requestId: 'string',
      operationDate: 'string',
      payTypes: 'string',
      amount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyPayOrderStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyPayOrderStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: NotifyPayOrderStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: NotifyPayOrderStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyWithholdFundRequest extends $tea.Model {
  channelId?: string;
  requestId?: string;
  operationDate?: string;
  payTypes?: string;
  amount?: number;
  tenantOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      requestId: 'RequestId',
      operationDate: 'OperationDate',
      payTypes: 'PayTypes',
      amount: 'Amount',
      tenantOrderId: 'TenantOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      requestId: 'string',
      operationDate: 'string',
      payTypes: 'string',
      amount: 'number',
      tenantOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyWithholdFundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyWithholdFundResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: NotifyWithholdFundResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: NotifyWithholdFundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsRequest extends $tea.Model {
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  lmActivityId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      lmActivityId: 'LmActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      lmActivityId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  lmActivityItemModelList?: QueryActivityItemsResponseBodyLmActivityItemModelList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      lmActivityItemModelList: 'LmActivityItemModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      lmActivityItemModelList: QueryActivityItemsResponseBodyLmActivityItemModelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryActivityItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryActivityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressRequest extends $tea.Model {
  bizId?: string;
  ip?: string;
  divisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      ip: 'Ip',
      divisionCode: 'DivisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      ip: 'string',
      divisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  divisionAddress?: QueryAddressResponseBodyDivisionAddress;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      divisionAddress: 'DivisionAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      divisionAddress: QueryAddressResponseBodyDivisionAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailRequest extends $tea.Model {
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  addressInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      addressInfo: 'AddressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
      addressInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  deliveryAddress?: QueryAddressDetailResponseBodyDeliveryAddress;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      deliveryAddress: 'DeliveryAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      deliveryAddress: QueryAddressDetailResponseBodyDeliveryAddress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAddressDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAddressDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressListRequest extends $tea.Model {
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  addressList?: QueryAddressListResponseBodyAddressList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      addressList: 'AddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      addressList: { 'type': 'array', 'itemType': QueryAddressListResponseBodyAddressList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAddressListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAddressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoRequest extends $tea.Model {
  mediaSettleDetailId?: string;
  channelId?: string;
  settleNo?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      mediaSettleDetailId: 'MediaSettleDetailId',
      channelId: 'ChannelId',
      settleNo: 'SettleNo',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaSettleDetailId: 'string',
      channelId: 'string',
      settleNo: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: QueryAdvertisementSettleInfoResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: QueryAdvertisementSettleInfoResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAdvertisementSettleInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAdvertisementSettleInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementRequest extends $tea.Model {
  externalAgreementNo?: string;
  merchantId?: string;
  agreementNo?: string;
  static names(): { [key: string]: string } {
    return {
      externalAgreementNo: 'ExternalAgreementNo',
      merchantId: 'MerchantId',
      agreementNo: 'AgreementNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalAgreementNo: 'string',
      merchantId: 'string',
      agreementNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  queryAgreementResponse?: QueryAgreementResponseBodyQueryAgreementResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      queryAgreementResponse: 'QueryAgreementResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      queryAgreementResponse: QueryAgreementResponseBodyQueryAgreementResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAgreementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAgreementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasRequest extends $tea.Model {
  bizId?: string;
  cityCode?: number;
  pageNumber?: number;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cityCode: 'CityCode',
      pageNumber: 'PageNumber',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cityCode: 'number',
      pageNumber: 'number',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  cinemas?: QueryAllCinemasResponseBodyCinemas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      cinemas: 'Cinemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      cinemas: QueryAllCinemasResponseBodyCinemas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAllCinemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAllCinemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesRequest extends $tea.Model {
  bizId?: string;
  extJson?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesShrinkRequest extends $tea.Model {
  bizId?: string;
  extJsonShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJsonShrink: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJsonShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  cities?: QueryAllCitiesResponseBodyCities;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      cities: 'Cities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      cities: QueryAllCitiesResponseBodyCities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAllCitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAllCitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultRequest extends $tea.Model {
  bizId?: string;
  batchId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      batchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultResponseBody extends $tea.Model {
  status?: string;
  code?: string;
  message?: string;
  requestId?: string;
  batchId?: string;
  failIds?: QueryBatchRegistAnonymousTbAccountResultResponseBodyFailIds;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      batchId: 'BatchId',
      failIds: 'FailIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      batchId: 'string',
      failIds: QueryBatchRegistAnonymousTbAccountResultResponseBodyFailIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBatchRegistAnonymousTbAccountResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBatchRegistAnonymousTbAccountResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsRequest extends $tea.Model {
  bizId?: string;
  lmItemIds?: { [key: string]: any };
  itemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIds: 'LmItemIds',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsShrinkRequest extends $tea.Model {
  bizId?: string;
  lmItemIdsShrink?: string;
  itemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIdsShrink: 'LmItemIds',
      itemIdsShrink: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIdsShrink: 'string',
      itemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  lmItemActivitySessionModelList?: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      lmItemActivitySessionModelList: 'LmItemActivitySessionModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      lmItemActivitySessionModelList: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBestSession4ItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBestSession4ItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListRequest extends $tea.Model {
  bizId?: string;
  subBizId?: string;
  pageSize?: number;
  pageNumber?: number;
  userId?: string;
  lmItemIds?: { [key: string]: any };
  itemIds?: { [key: string]: any };
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizId: 'SubBizId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      userId: 'UserId',
      lmItemIds: 'LmItemIds',
      itemIds: 'ItemIds',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      userId: 'string',
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListShrinkRequest extends $tea.Model {
  bizId?: string;
  subBizId?: string;
  pageSize?: number;
  pageNumber?: number;
  userId?: string;
  lmItemIdsShrink?: string;
  itemIdsShrink?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizId: 'SubBizId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      userId: 'UserId',
      lmItemIdsShrink: 'LmItemIds',
      itemIdsShrink: 'ItemIds',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      userId: 'string',
      lmItemIdsShrink: 'string',
      itemIdsShrink: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  itemList?: QueryBizItemListResponseBodyItemList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      itemList: QueryBizItemListResponseBodyItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBizItemListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBizItemListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsRequest extends $tea.Model {
  bizId?: string;
  subBizId?: string;
  pageSize?: number;
  pageNumber?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subBizId: 'SubBizId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subBizId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsResponseBody extends $tea.Model {
  model?: string;
  requestId?: string;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBizItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityRequest extends $tea.Model {
  bizId?: string;
  lmItemIds?: { [key: string]: any };
  itemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIds: 'LmItemIds',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityShrinkRequest extends $tea.Model {
  bizId?: string;
  lmItemIdsShrink?: string;
  itemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIdsShrink: 'LmItemIds',
      itemIdsShrink: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIdsShrink: 'string',
      itemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  itemList?: QueryBizItemsWithActivityResponseBodyItemList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      itemList: QueryBizItemsWithActivityResponseBodyItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryBizItemsWithActivityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryBizItemsWithActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupRequest extends $tea.Model {
  bizId?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  guideItemGroup?: QueryGuideItemGroupResponseBodyGuideItemGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      guideItemGroup: 'GuideItemGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      guideItemGroup: QueryGuideItemGroupResponseBodyGuideItemGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryGuideItemGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryGuideItemGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryRequest extends $tea.Model {
  groupId?: string;
  pageSize?: number;
  pageNumber?: number;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  itemList?: QueryGuideItemGroupWithOutInventoryResponseBodyItemList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      itemList: { 'type': 'array', 'itemType': QueryGuideItemGroupWithOutInventoryResponseBodyItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryGuideItemGroupWithOutInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryGuideItemGroupWithOutInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesRequest extends $tea.Model {
  bizId?: string;
  cityCode?: number;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cityCode: 'CityCode',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cityCode: 'number',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  movies?: QueryHotMoviesResponseBodyMovies;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      movies: 'Movies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      movies: QueryHotMoviesResponseBodyMovies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryHotMoviesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryHotMoviesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupRequest extends $tea.Model {
  bizId?: string;
  divisionCode?: string;
  itemIds?: { [key: string]: any };
  lmItemIds?: { [key: string]: any };
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      divisionCode: 'DivisionCode',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      divisionCode: 'string',
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      subBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupShrinkRequest extends $tea.Model {
  bizId?: string;
  divisionCode?: string;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      divisionCode: 'DivisionCode',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      divisionCode: 'string',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
      subBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  itemList?: QueryInventoryOfItemsInBizItemGroupResponseBodyItemList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      itemList: { 'type': 'array', 'itemType': QueryInventoryOfItemsInBizItemGroupResponseBodyItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryInventoryOfItemsInBizItemGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryInventoryOfItemsInBizItemGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  item?: QueryItemDetailResponseBodyItem;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      item: QueryItemDetailResponseBodyItem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryItemDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryItemDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  bizUid?: string;
  divisionCode?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      bizUid: 'BizUid',
      divisionCode: 'DivisionCode',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      bizUid: 'string',
      divisionCode: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  item?: QueryItemDetailInnerResponseBodyItem;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      item: QueryItemDetailInnerResponseBodyItem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryItemDetailInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryItemDetailInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  subBizIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      subBizIds: 'SubBizIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
      subBizIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsShrinkRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmItemId?: string;
  subBizIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      subBizIdsShrink: 'SubBizIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmItemId: 'string',
      subBizIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  itemBizList?: QueryItemInSubBizsResponseBodyItemBizList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      itemBizList: 'ItemBizList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      itemBizList: { 'type': 'array', 'itemType': QueryItemInSubBizsResponseBodyItemBizList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryItemInSubBizsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryItemInSubBizsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryRequest extends $tea.Model {
  bizId?: string;
  divisionCode?: string;
  ip?: string;
  itemList?: QueryItemInventoryRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      divisionCode: 'DivisionCode',
      ip: 'Ip',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      divisionCode: 'string',
      ip: 'string',
      itemList: { 'type': 'array', 'itemType': QueryItemInventoryRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  itemList?: QueryItemInventoryResponseBodyItemList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      itemList: QueryItemInventoryResponseBodyItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryItemInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryItemInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  data?: QueryLogisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: QueryLogisticsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryLogisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoRequest extends $tea.Model {
  mediaName?: string;
  channelId?: string;
  settleNo?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      mediaName: 'MediaName',
      channelId: 'ChannelId',
      settleNo: 'SettleNo',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaName: 'string',
      channelId: 'string',
      settleNo: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: QueryMediaSettleInfoResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: QueryMediaSettleInfoResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMediaSettleInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMediaSettleInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesRequest extends $tea.Model {
  bizId?: string;
  topic?: string;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      topic: 'Topic',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      topic: 'string',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  subCode?: string;
  message?: string;
  logsId?: string;
  bizMessages?: QueryMessagesResponseBodyBizMessages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      subCode: 'SubCode',
      message: 'Message',
      logsId: 'LogsId',
      bizMessages: 'BizMessages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      subCode: 'string',
      message: 'string',
      logsId: 'string',
      bizMessages: QueryMessagesResponseBodyBizMessages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsRequest extends $tea.Model {
  bizId?: string;
  movieId?: number;
  pageNumber?: number;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      movieId: 'MovieId',
      pageNumber: 'PageNumber',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      movieId: 'number',
      pageNumber: 'number',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  count?: number;
  commentList?: QueryMovieCommentsResponseBodyCommentList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      count: 'Count',
      commentList: 'CommentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      count: 'number',
      commentList: QueryMovieCommentsResponseBodyCommentList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMovieCommentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMovieCommentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSchedulesRequest extends $tea.Model {
  bizId?: string;
  cinemaId?: number;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cinemaId: 'CinemaId',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cinemaId: 'number',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSchedulesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  schedules?: QueryMovieSchedulesResponseBodySchedules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      schedules: QueryMovieSchedulesResponseBodySchedules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSchedulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMovieSchedulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMovieSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsRequest extends $tea.Model {
  bizId?: string;
  scheduleId?: number;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      scheduleId: 'ScheduleId',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      scheduleId: 'number',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  seatMap?: QueryMovieSeatsResponseBodySeatMap;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      seatMap: 'SeatMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      seatMap: QueryMovieSeatsResponseBodySeatMap,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMovieSeatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMovieSeatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  orderId?: string;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      orderId: 'OrderId',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      orderId: 'string',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  subCode?: string;
  message?: string;
  logsId?: string;
  movieTicket?: QueryMovieTicketsResponseBodyMovieTicket;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      subCode: 'SubCode',
      message: 'Message',
      logsId: 'LogsId',
      movieTicket: 'MovieTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      subCode: 'string',
      message: 'string',
      logsId: 'string',
      movieTicket: QueryMovieTicketsResponseBodyMovieTicket,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryMovieTicketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryMovieTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  pageSize?: number;
  pageNumber?: number;
  filterOption?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      filterOption: 'FilterOption',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      filterOption: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  postFee?: QueryOrderAndPaymentListResponseBodyPostFee;
  lmOrderList?: QueryOrderAndPaymentListResponseBodyLmOrderList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      postFee: 'PostFee',
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      postFee: QueryOrderAndPaymentListResponseBodyPostFee,
      lmOrderList: QueryOrderAndPaymentListResponseBodyLmOrderList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderAndPaymentListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderAndPaymentListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  commissionModels?: QueryOrderCommissionRateResponseBodyCommissionModels[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      commissionModels: 'CommissionModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      commissionModels: { 'type': 'array', 'itemType': QueryOrderCommissionRateResponseBodyCommissionModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderCommissionRateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderCommissionRateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  filterOption?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      filterOption: 'FilterOption',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      filterOption: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  model?: QueryOrderDetailInnerResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      model: QueryOrderDetailInnerResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderDetailInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderDetailInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  paymentId?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      paymentId: 'PaymentId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      paymentId: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  lmOrderIds?: QueryOrderIdByPayIdResponseBodyLmOrderIds;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      lmOrderIds: 'LmOrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      lmOrderIds: QueryOrderIdByPayIdResponseBodyLmOrderIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderIdByPayIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderIdByPayIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleRequest extends $tea.Model {
  bizId?: string;
  channelUserId?: string;
  lmOrderId?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channelUserId: 'ChannelUserId',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channelUserId: 'string',
      lmOrderId: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  model?: QueryOrderInfoAfterSaleResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      model: QueryOrderInfoAfterSaleResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderInfoAfterSaleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderInfoAfterSaleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  paymentId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      paymentId: 'PaymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      paymentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  lmOrderList?: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      lmOrderList: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  pageSize?: number;
  pageNumber?: number;
  filterOption?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      filterOption: 'FilterOption',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      filterOption: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  postFee?: QueryOrderListResponseBodyPostFee;
  lmOrderList?: QueryOrderListResponseBodyLmOrderList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      postFee: 'PostFee',
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      postFee: QueryOrderListResponseBodyPostFee,
      lmOrderList: QueryOrderListResponseBodyLmOrderList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  orderLogistics?: QueryOrderLogisticsResponseBodyOrderLogistics;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      orderLogistics: 'OrderLogistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      orderLogistics: QueryOrderLogisticsResponseBodyOrderLogistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryOrderLogisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryOrderLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  subLmOrderId?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      subLmOrderId: 'SubLmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      subLmOrderId: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  refundApplicationDetail?: QueryRefundApplicationDetailResponseBodyRefundApplicationDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      refundApplicationDetail: 'RefundApplicationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      refundApplicationDetail: QueryRefundApplicationDetailResponseBodyRefundApplicationDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryRefundApplicationDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryRefundApplicationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsRequest extends $tea.Model {
  tenantId?: string;
  payeeIds?: string;
  settleNoes?: string;
  startTime?: string;
  endTime?: string;
  pageSize?: number;
  pageNumber?: number;
  settleStatus?: string;
  settleType?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      payeeIds: 'PayeeIds',
      settleNoes: 'SettleNoes',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      settleStatus: 'SettleStatus',
      settleType: 'SettleType',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      payeeIds: 'string',
      settleNoes: 'string',
      startTime: 'string',
      endTime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      settleStatus: 'string',
      settleType: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: QueryStatementsResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: QueryStatementsResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryStatementsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryStatementsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesRequest extends $tea.Model {
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  lmActivityModelExtList?: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      lmActivityModelExtList: 'LmActivityModelExtList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      lmActivityModelExtList: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUnfinishedActivitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryUnfinishedActivitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessionsRequest extends $tea.Model {
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  queryTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessionsResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  lmActivitySessionModelList?: QueryUnfinishedSessionsResponseBodyLmActivitySessionModelList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      lmActivitySessionModelList: 'LmActivitySessionModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      lmActivitySessionModelList: QueryUnfinishedSessionsResponseBodyLmActivitySessionModelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUnfinishedSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryUnfinishedSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsRequest extends $tea.Model {
  bizId?: string;
  lmItemIds?: { [key: string]: any };
  itemIds?: { [key: string]: any };
  queryTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIds: 'LmItemIds',
      itemIds: 'ItemIds',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      queryTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsShrinkRequest extends $tea.Model {
  bizId?: string;
  lmItemIdsShrink?: string;
  itemIdsShrink?: string;
  queryTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIdsShrink: 'LmItemIds',
      itemIdsShrink: 'ItemIds',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIdsShrink: 'string',
      itemIdsShrink: 'string',
      queryTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  lmItemActivitySessionModelListList?: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      lmItemActivitySessionModelListList: 'LmItemActivitySessionModelListList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      lmItemActivitySessionModelListList: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUnfinishedSessions4ItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryUnfinishedSessions4ItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesRequest extends $tea.Model {
  bizId?: string;
  cityCode?: number;
  extJson?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cityCode: 'CityCode',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cityCode: 'number',
      extJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesShrinkRequest extends $tea.Model {
  bizId?: string;
  cityCode?: number;
  extJsonShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cityCode: 'CityCode',
      extJsonShrink: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cityCode: 'number',
      extJsonShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  movies?: QueryUpcomingMoviesResponseBodyMovies;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      movies: 'Movies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      movies: QueryUpcomingMoviesResponseBodyMovies,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUpcomingMoviesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryUpcomingMoviesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeRequest extends $tea.Model {
  tradeNo?: string;
  outTradeNo?: string;
  merchantId?: string;
  static names(): { [key: string]: string } {
    return {
      tradeNo: 'TradeNo',
      outTradeNo: 'OutTradeNo',
      merchantId: 'MerchantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tradeNo: 'string',
      outTradeNo: 'string',
      merchantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  queryWithholdTradeResponse?: QueryWithholdTradeResponseBodyQueryWithholdTradeResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      queryWithholdTradeResponse: 'QueryWithholdTradeResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      queryWithholdTradeResponse: QueryWithholdTradeResponseBodyQueryWithholdTradeResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryWithholdTradeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryWithholdTradeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderRequest extends $tea.Model {
  outRequestNo?: string;
  outTradeNo?: string;
  tradeNo?: string;
  refundReason?: string;
  refundAmount?: string;
  refundRoyaltyParameters?: string;
  extInfo?: string;
  merchantId?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      tradeNo: 'TradeNo',
      refundReason: 'RefundReason',
      refundAmount: 'RefundAmount',
      refundRoyaltyParameters: 'RefundRoyaltyParameters',
      extInfo: 'ExtInfo',
      merchantId: 'MerchantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      outTradeNo: 'string',
      tradeNo: 'string',
      refundReason: 'string',
      refundAmount: 'string',
      refundRoyaltyParameters: 'string',
      extInfo: 'string',
      merchantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  refundResponse?: RefundOrderResponseBodyRefundResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      refundResponse: 'RefundResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      refundResponse: RefundOrderResponseBodyRefundResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefundOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefundOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundPointRequest extends $tea.Model {
  bizId?: string;
  sellerId?: string;
  lmOrderId?: string;
  reason?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      sellerId: 'SellerId',
      lmOrderId: 'LmOrderId',
      reason: 'Reason',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      sellerId: 'string',
      lmOrderId: 'string',
      reason: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefundPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefundPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseMerchantSyncTaskRequest extends $tea.Model {
  bizId?: string;
  taskId?: string;
  sellerNick?: string;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      taskId: 'TaskId',
      sellerNick: 'SellerNick',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      taskId: 'string',
      sellerNick: 'string',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseMerchantSyncTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseMerchantSyncTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefuseMerchantSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefuseMerchantSyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistAnonymousTbAccountRequest extends $tea.Model {
  bizId?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistAnonymousTbAccountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistAnonymousTbAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegistAnonymousTbAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegistAnonymousTbAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatRequest extends $tea.Model {
  bizId?: string;
  lockSeatApplyKey?: string;
  bizUid?: string;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lockSeatApplyKey: 'LockSeatApplyKey',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lockSeatApplyKey: 'string',
      bizUid: 'string',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  actionResult?: ReleaseMovieSeatResponseBodyActionResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      actionResult: 'ActionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      actionResult: ReleaseMovieSeatResponseBodyActionResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseMovieSeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseMovieSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAddressRequest extends $tea.Model {
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  addressInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      addressInfo: 'AddressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
      addressInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAddressResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesRequest extends $tea.Model {
  bizId?: string;
  messageIds?: string;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      messageIds: 'MessageIds',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      messageIds: 'string',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  subCode?: string;
  message?: string;
  logsId?: string;
  actionResult?: RemoveMessagesResponseBodyActionResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      subCode: 'SubCode',
      message: 'Message',
      logsId: 'LogsId',
      actionResult: 'ActionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      subCode: 'string',
      message: 'string',
      logsId: 'string',
      actionResult: RemoveMessagesResponseBodyActionResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  buyOrderRequestModel?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      buyOrderRequestModel: 'BuyOrderRequestModel',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      buyOrderRequestModel: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: RenderH5OrderResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: RenderH5OrderResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenderH5OrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenderH5OrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  extJson?: string;
  deliveryAddress?: string;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  lmItemId?: string;
  accountType?: string;
  itemList?: RenderOrderRequestItemList[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      deliveryAddress: 'DeliveryAddress',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      lmItemId: 'LmItemId',
      accountType: 'AccountType',
      itemList: 'ItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      deliveryAddress: 'string',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      lmItemId: 'string',
      accountType: 'string',
      itemList: { 'type': 'array', 'itemType': RenderOrderRequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: RenderOrderResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: RenderOrderResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenderOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenderOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayForPayUrlRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayForPayUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  model?: RepayForPayUrlResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      model: RepayForPayUrlResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayForPayUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RepayForPayUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RepayForPayUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RepayOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RepayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatRequest extends $tea.Model {
  bizId?: string;
  scheduleId?: number;
  seatIds?: string;
  seatNames?: string;
  bizUid?: string;
  mobile?: string;
  extJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      scheduleId: 'ScheduleId',
      seatIds: 'SeatIds',
      seatNames: 'SeatNames',
      bizUid: 'BizUid',
      mobile: 'Mobile',
      extJson: 'ExtJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      scheduleId: 'number',
      seatIds: 'string',
      seatNames: 'string',
      bizUid: 'string',
      mobile: 'string',
      extJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  logsId?: string;
  reservedSeat?: ReserveMovieSeatResponseBodyReservedSeat;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      logsId: 'LogsId',
      reservedSeat: 'ReservedSeat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      logsId: 'string',
      reservedSeat: ReserveMovieSeatResponseBodyReservedSeat,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReserveMovieSeatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReserveMovieSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SettleOrderRequest extends $tea.Model {
  outRequestNo?: string;
  tradeNo?: string;
  royaltyParameters?: string;
  extInfo?: string;
  outTradeNo?: string;
  merchantId?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      tradeNo: 'TradeNo',
      royaltyParameters: 'RoyaltyParameters',
      extInfo: 'ExtInfo',
      outTradeNo: 'OutTradeNo',
      merchantId: 'MerchantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      tradeNo: 'string',
      royaltyParameters: 'string',
      extInfo: 'string',
      outTradeNo: 'string',
      merchantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SettleOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  tradeOrderSettleResponse?: SettleOrderResponseBodyTradeOrderSettleResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tradeOrderSettleResponse: 'TradeOrderSettleResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tradeOrderSettleResponse: SettleOrderResponseBodyTradeOrderSettleResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SettleOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SettleOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SettleOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  logisticsNo?: string;
  cpCode?: string;
  subLmOrderId?: string;
  disputeId?: number;
  useAnonymousTbAccount?: boolean;
  thirdPartyUserId?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      logisticsNo: 'LogisticsNo',
      cpCode: 'CpCode',
      subLmOrderId: 'SubLmOrderId',
      disputeId: 'DisputeId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      thirdPartyUserId: 'ThirdPartyUserId',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      logisticsNo: 'string',
      cpCode: 'string',
      subLmOrderId: 'string',
      disputeId: 'number',
      useAnonymousTbAccount: 'boolean',
      thirdPartyUserId: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitReturnGoodLogisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitReturnGoodLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoRequest extends $tea.Model {
  bizId?: string;
  taskId?: string;
  sellerNick?: string;
  itemList?: string;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      taskId: 'TaskId',
      sellerNick: 'SellerNick',
      itemList: 'ItemList',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      taskId: 'string',
      sellerNick: 'string',
      itemList: 'string',
      timeStamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  model?: SyncMerchantInfoResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      model: SyncMerchantInfoResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncMerchantInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncMerchantInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsignWithholdAgreementRequest extends $tea.Model {
  outRequestNo?: string;
  externalAgreementNo?: string;
  merchantId?: string;
  agreementNo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      externalAgreementNo: 'ExternalAgreementNo',
      merchantId: 'MerchantId',
      agreementNo: 'AgreementNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      externalAgreementNo: 'string',
      merchantId: 'string',
      agreementNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsignWithholdAgreementResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  withholdSignResponse?: UnsignWithholdAgreementResponseBodyWithholdSignResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      withholdSignResponse: 'WithholdSignResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      withholdSignResponse: UnsignWithholdAgreementResponseBodyWithholdSignResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsignWithholdAgreementResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnsignWithholdAgreementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnsignWithholdAgreementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAddressRequest extends $tea.Model {
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  addressInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
      addressInfo: 'AddressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
      addressInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAddressResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTaobaoAccountRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  extJson?: string;
  tbUserNick?: string;
  mobileNo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      tbUserNick: 'TbUserNick',
      mobileNo: 'MobileNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      tbUserNick: 'string',
      mobileNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTaobaoAccountResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  subMessage?: string;
  code?: string;
  message?: string;
  subCode?: string;
  totalCount?: number;
  logsId?: string;
  model?: ValidateTaobaoAccountResponseBodyModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      subMessage: 'SubMessage',
      code: 'Code',
      message: 'Message',
      subCode: 'SubCode',
      totalCount: 'TotalCount',
      logsId: 'LogsId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      subMessage: 'string',
      code: 'string',
      message: 'string',
      subCode: 'string',
      totalCount: 'number',
      logsId: 'string',
      model: ValidateTaobaoAccountResponseBodyModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTaobaoAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateTaobaoAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateTaobaoAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSupplierNewItemsRequestItemList extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuList?: number[];
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundRequestLeavePictureList extends $tea.Model {
  picture?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      picture: 'Picture',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picture: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundResponseBodyRefundApplicationData extends $tea.Model {
  disputeType?: number;
  subLmOrderId?: string;
  disputeStatus?: number;
  static names(): { [key: string]: string } {
    return {
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
      disputeStatus: 'DisputeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeType: 'number',
      subLmOrderId: 'string',
      disputeStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundResponseBodyRefundApplicationData extends $tea.Model {
  disputeType?: number;
  subLmOrderId?: string;
  disputeStatus?: number;
  static names(): { [key: string]: string } {
    return {
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
      disputeStatus: 'DisputeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeType: 'number',
      subLmOrderId: 'string',
      disputeStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponseBodyModelPayTradeIds extends $tea.Model {
  payTradeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      payTradeIds: 'PayTradeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponseBodyModelOrderIds extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponseBodyModel extends $tea.Model {
  redirectUrl?: string;
  payTradeIds?: CreateMovieTicketOrderResponseBodyModelPayTradeIds;
  orderIds?: CreateMovieTicketOrderResponseBodyModelOrderIds;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      payTradeIds: 'PayTradeIds',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      payTradeIds: CreateMovieTicketOrderResponseBodyModelPayTradeIds,
      orderIds: CreateMovieTicketOrderResponseBodyModelOrderIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequestItemList extends $tea.Model {
  skuId?: number;
  lmItemId?: string;
  itemId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyModelLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyModelLmOrderList extends $tea.Model {
  lmOrderList?: CreateOrderResponseBodyModelLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': CreateOrderResponseBodyModelLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyModelPayTradeIds extends $tea.Model {
  payTradeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      payTradeIds: 'PayTradeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyModelOrderIds extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBodyModel extends $tea.Model {
  redirectUrl?: string;
  lmOrderList?: CreateOrderResponseBodyModelLmOrderList;
  payTradeIds?: CreateOrderResponseBodyModelPayTradeIds;
  orderIds?: CreateOrderResponseBodyModelOrderIds;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      lmOrderList: 'LmOrderList',
      payTradeIds: 'PayTradeIds',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      lmOrderList: CreateOrderResponseBodyModelLmOrderList,
      payTradeIds: CreateOrderResponseBodyModelPayTradeIds,
      orderIds: CreateOrderResponseBodyModelOrderIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2RequestItemList extends $tea.Model {
  skuId?: number;
  lmItemId?: string;
  itemId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBodyModelLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBodyModelLmOrderList extends $tea.Model {
  lmOrderList?: CreateOrderV2ResponseBodyModelLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': CreateOrderV2ResponseBodyModelLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBodyModelPayTradeIds extends $tea.Model {
  payTradeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      payTradeIds: 'PayTradeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBodyModelOrderIds extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBodyModel extends $tea.Model {
  redirectUrl?: string;
  lmOrderList?: CreateOrderV2ResponseBodyModelLmOrderList;
  payTradeIds?: CreateOrderV2ResponseBodyModelPayTradeIds;
  orderIds?: CreateOrderV2ResponseBodyModelOrderIds;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      lmOrderList: 'LmOrderList',
      payTradeIds: 'PayTradeIds',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      lmOrderList: CreateOrderV2ResponseBodyModelLmOrderList,
      payTradeIds: CreateOrderV2ResponseBodyModelPayTradeIds,
      orderIds: CreateOrderV2ResponseBodyModelOrderIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlResponseBodyModel extends $tea.Model {
  redirectUrl?: string;
  payTradeIds?: string[];
  lmOrderList?: string[];
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      payTradeIds: 'PayTradeIds',
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
      lmOrderList: { 'type': 'array', 'itemType': 'string' },
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderRequestItemList extends $tea.Model {
  skuId?: number;
  lmItemId?: string;
  itemId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBodyModelLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBodyModelLmOrderList extends $tea.Model {
  lmOrderList?: CreateVirtualProductOrderResponseBodyModelLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': CreateVirtualProductOrderResponseBodyModelLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBodyModelPayTradeIds extends $tea.Model {
  payTradeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      payTradeIds: 'PayTradeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBodyModelOrderIds extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBodyModel extends $tea.Model {
  redirectUrl?: string;
  lmOrderList?: CreateVirtualProductOrderResponseBodyModelLmOrderList;
  payTradeIds?: CreateVirtualProductOrderResponseBodyModelPayTradeIds;
  orderIds?: CreateVirtualProductOrderResponseBodyModelOrderIds;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      lmOrderList: 'LmOrderList',
      payTradeIds: 'PayTradeIds',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      lmOrderList: CreateVirtualProductOrderResponseBodyModelLmOrderList,
      payTradeIds: CreateVirtualProductOrderResponseBodyModelPayTradeIds,
      orderIds: CreateVirtualProductOrderResponseBodyModelOrderIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWithholdTradeResponseBodyWithholdTradeResponse extends $tea.Model {
  paymentDate?: string;
  tradeNo?: string;
  outRequestNo?: string;
  outTradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      paymentDate: 'PaymentDate',
      tradeNo: 'TradeNo',
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paymentDate: 'string',
      tradeNo: 'string',
      outRequestNo: 'string',
      outTradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBodyModelLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBodyModelLmOrderList extends $tea.Model {
  lmOrderList?: EnableOrderResponseBodyModelLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': EnableOrderResponseBodyModelLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBodyModelPayTradeIds extends $tea.Model {
  payTradeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      payTradeIds: 'PayTradeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBodyModelOrderIds extends $tea.Model {
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBodyModel extends $tea.Model {
  redirectUrl?: string;
  lmOrderList?: EnableOrderResponseBodyModelLmOrderList;
  payTradeIds?: EnableOrderResponseBodyModelPayTradeIds;
  orderIds?: EnableOrderResponseBodyModelOrderIds;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      lmOrderList: 'LmOrderList',
      payTradeIds: 'PayTradeIds',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      lmOrderList: EnableOrderResponseBodyModelLmOrderList,
      payTradeIds: EnableOrderResponseBodyModelPayTradeIds,
      orderIds: EnableOrderResponseBodyModelOrderIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeResponseBodyModel extends $tea.Model {
  responseData?: { [key: string]: any };
  processInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      responseData: 'ResponseData',
      processInstanceId: 'ProcessInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      responseData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryChainResponseBodyCategoryList extends $tea.Model {
  name?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListResponseBodyCategoryListCategory extends $tea.Model {
  name?: string;
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      categoryId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListResponseBodyCategoryList extends $tea.Model {
  category?: GetCategoryListResponseBodyCategoryListCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': GetCategoryListResponseBodyCategoryListCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomServiceUrlResponseBodyUrlData extends $tea.Model {
  returnUrl?: string;
  static names(): { [key: string]: string } {
    return {
      returnUrl: 'ReturnUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuidePageResponseBodyMiniShopInfo extends $tea.Model {
  liteShopId?: string;
  src?: string;
  bizId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      liteShopId: 'LiteShopId',
      src: 'Src',
      bizId: 'BizId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liteShopId: 'string',
      src: 'string',
      bizId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPromotionResponseBodyItemPromotionModel extends $tea.Model {
  endTime?: string;
  startTime?: string;
  skuPromotion?: { [key: string]: any };
  promotionFlag?: boolean;
  promotionName?: string;
  lmItemId?: string;
  promotionDesc?: string;
  itemId?: number;
  promotionId?: string;
  extInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      skuPromotion: 'SkuPromotion',
      promotionFlag: 'PromotionFlag',
      promotionName: 'PromotionName',
      lmItemId: 'LmItemId',
      promotionDesc: 'PromotionDesc',
      itemId: 'ItemId',
      promotionId: 'PromotionId',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      skuPromotion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      promotionFlag: 'boolean',
      promotionName: 'string',
      lmItemId: 'string',
      promotionDesc: 'string',
      itemId: 'number',
      promotionId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPageResponseBodyUrlData extends $tea.Model {
  returnUrl?: string;
  static names(): { [key: string]: string } {
    return {
      returnUrl: 'ReturnUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBodyLoginResult extends $tea.Model {
  returnUrl?: string;
  bizUserName?: string;
  bizUid?: string;
  bizId?: string;
  lmUserId?: number;
  extInfo?: { [key: string]: any };
  subBizId?: string[];
  static names(): { [key: string]: string } {
    return {
      returnUrl: 'ReturnUrl',
      bizUserName: 'BizUserName',
      bizUid: 'BizUid',
      bizId: 'BizId',
      lmUserId: 'LmUserId',
      extInfo: 'ExtInfo',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnUrl: 'string',
      bizUserName: 'string',
      bizUid: 'string',
      bizId: 'string',
      lmUserId: 'number',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      subBizId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWithholdSignPageUrlResponseBodyWithholdSignResponse extends $tea.Model {
  pageUrl?: string;
  outRequestNo?: string;
  static names(): { [key: string]: string } {
    return {
      pageUrl: 'PageUrl',
      outRequestNo: 'OutRequestNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageUrl: 'string',
      outRequestNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList extends $tea.Model {
  reasonTextId?: number;
  reasonTips?: string;
  proofRequired?: boolean;
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
      proofRequired: 'ProofRequired',
      refundDescRequired: 'RefundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonTextId: 'number',
      reasonTips: 'string',
      proofRequired: 'boolean',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonList extends $tea.Model {
  refundReasonList?: InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList[];
  static names(): { [key: string]: string } {
    return {
      refundReasonList: 'RefundReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundReasonList: { 'type': 'array', 'itemType': InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData extends $tea.Model {
  maxRefundFee?: number;
  minRefundFee?: number;
  static names(): { [key: string]: string } {
    return {
      maxRefundFee: 'MaxRefundFee',
      minRefundFee: 'MinRefundFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRefundFee: 'number',
      minRefundFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponseBodyInitApplyRefundData extends $tea.Model {
  mainOrderRefund?: boolean;
  bizClaimType?: number;
  refundReasonList?: InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonList;
  maxRefundFeeData?: InitApplyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData;
  static names(): { [key: string]: string } {
    return {
      mainOrderRefund: 'MainOrderRefund',
      bizClaimType: 'BizClaimType',
      refundReasonList: 'RefundReasonList',
      maxRefundFeeData: 'MaxRefundFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainOrderRefund: 'boolean',
      bizClaimType: 'number',
      refundReasonList: InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonList,
      maxRefundFeeData: InitApplyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModelLmActivityPopModel extends $tea.Model {
  subBizCode?: string;
  endDate?: string;
  displayDate?: string;
  bizId?: string;
  startDate?: string;
  title?: string;
  extInfo?: { [key: string]: any };
  id?: number;
  static names(): { [key: string]: string } {
    return {
      subBizCode: 'SubBizCode',
      endDate: 'EndDate',
      displayDate: 'DisplayDate',
      bizId: 'BizId',
      startDate: 'StartDate',
      title: 'Title',
      extInfo: 'ExtInfo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subBizCode: 'string',
      endDate: 'string',
      displayDate: 'string',
      bizId: 'string',
      startDate: 'string',
      title: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModel extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  lmActivityPopModel?: ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModelLmActivityPopModel;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      lmActivityPopModel: 'LmActivityPopModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      lmActivityPopModel: ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModelLmActivityPopModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBodyLmItemActivityModelList extends $tea.Model {
  lmItemActivityModel?: ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModel[];
  static names(): { [key: string]: string } {
    return {
      lmItemActivityModel: 'LmItemActivityModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemActivityModel: { 'type': 'array', 'itemType': ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsRequestItemListSkuList extends $tea.Model {
  statusAction?: number;
  priceCent?: number;
  supplierPrice?: number;
  skuId?: number;
  points?: number;
  pointsAmount?: number;
  benefitId?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      statusAction: 'StatusAction',
      priceCent: 'PriceCent',
      supplierPrice: 'SupplierPrice',
      skuId: 'SkuId',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      benefitId: 'BenefitId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusAction: 'number',
      priceCent: 'number',
      supplierPrice: 'number',
      skuId: 'number',
      points: 'number',
      pointsAmount: 'number',
      benefitId: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsRequestItemList extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuList?: ModifyBasicAndBizItemsRequestItemListSkuList[];
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuList: { 'type': 'array', 'itemType': ModifyBasicAndBizItemsRequestItemListSkuList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponseBodyFailedItemListItemSkuIdList extends $tea.Model {
  sku?: string[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponseBodyFailedItemListItem extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuIdList?: ModifyBasicAndBizItemsResponseBodyFailedItemListItemSkuIdList;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuIdList: ModifyBasicAndBizItemsResponseBodyFailedItemListItemSkuIdList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponseBodyFailedItemList extends $tea.Model {
  item?: ModifyBasicAndBizItemsResponseBodyFailedItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ModifyBasicAndBizItemsResponseBodyFailedItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsRequestItemListSkuList extends $tea.Model {
  statusAction?: number;
  priceCent?: number;
  skuId?: number;
  points?: number;
  pointsAmount?: number;
  benefitId?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      statusAction: 'StatusAction',
      priceCent: 'PriceCent',
      skuId: 'SkuId',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      benefitId: 'BenefitId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusAction: 'number',
      priceCent: 'number',
      skuId: 'number',
      points: 'number',
      pointsAmount: 'number',
      benefitId: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsRequestItemList extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuList?: ModifyBizItemsRequestItemListSkuList[];
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuList: { 'type': 'array', 'itemType': ModifyBizItemsRequestItemListSkuList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponseBodyFailedItemListItemSkuIdList extends $tea.Model {
  sku?: string[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponseBodyFailedItemListItem extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuIdList?: ModifyBizItemsResponseBodyFailedItemListItemSkuIdList;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuIdList: ModifyBizItemsResponseBodyFailedItemListItemSkuIdList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponseBodyFailedItemList extends $tea.Model {
  item?: ModifyBizItemsResponseBodyFailedItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ModifyBizItemsResponseBodyFailedItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelListLmActivityItemSkuModel extends $tea.Model {
  reservedPrice?: number;
  tips?: string;
  lmItemId?: string;
  skuId?: number;
  lmActivityId?: number;
  activityStatus?: string;
  bizId?: string;
  itemId?: number;
  skuPicUrl?: string;
  activityPrice?: number;
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      reservedPrice: 'ReservedPrice',
      tips: 'Tips',
      lmItemId: 'LmItemId',
      skuId: 'SkuId',
      lmActivityId: 'LmActivityId',
      activityStatus: 'ActivityStatus',
      bizId: 'BizId',
      itemId: 'ItemId',
      skuPicUrl: 'SkuPicUrl',
      activityPrice: 'ActivityPrice',
      skuTitle: 'SkuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPrice: 'number',
      tips: 'string',
      lmItemId: 'string',
      skuId: 'number',
      lmActivityId: 'number',
      activityStatus: 'string',
      bizId: 'string',
      itemId: 'number',
      skuPicUrl: 'string',
      activityPrice: 'number',
      skuTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelList extends $tea.Model {
  lmActivityItemSkuModel?: QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelListLmActivityItemSkuModel[];
  static names(): { [key: string]: string } {
    return {
      lmActivityItemSkuModel: 'LmActivityItemSkuModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmActivityItemSkuModel: { 'type': 'array', 'itemType': QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelListLmActivityItemSkuModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModel extends $tea.Model {
  itemTitle?: string;
  tbSellerId?: number;
  sellableQuantity?: number;
  tbShopId?: number;
  lmItemId?: string;
  tbShopName?: string;
  itemActivityQuantity?: number;
  lmActivityId?: number;
  canSell?: boolean;
  itemId?: number;
  mainPicUrl?: string;
  tips?: string;
  lmShopId?: string;
  itemActivityStatus?: string;
  skuModelList?: QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelList;
  static names(): { [key: string]: string } {
    return {
      itemTitle: 'ItemTitle',
      tbSellerId: 'TbSellerId',
      sellableQuantity: 'SellableQuantity',
      tbShopId: 'TbShopId',
      lmItemId: 'LmItemId',
      tbShopName: 'TbShopName',
      itemActivityQuantity: 'ItemActivityQuantity',
      lmActivityId: 'LmActivityId',
      canSell: 'CanSell',
      itemId: 'ItemId',
      mainPicUrl: 'MainPicUrl',
      tips: 'Tips',
      lmShopId: 'LmShopId',
      itemActivityStatus: 'ItemActivityStatus',
      skuModelList: 'SkuModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTitle: 'string',
      tbSellerId: 'number',
      sellableQuantity: 'number',
      tbShopId: 'number',
      lmItemId: 'string',
      tbShopName: 'string',
      itemActivityQuantity: 'number',
      lmActivityId: 'number',
      canSell: 'boolean',
      itemId: 'number',
      mainPicUrl: 'string',
      tips: 'string',
      lmShopId: 'string',
      itemActivityStatus: 'string',
      skuModelList: QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyLmActivityItemModelList extends $tea.Model {
  lmActivityItemModel?: QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModel[];
  static names(): { [key: string]: string } {
    return {
      lmActivityItemModel: 'LmActivityItemModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmActivityItemModel: { 'type': 'array', 'itemType': QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressResponseBodyDivisionAddressDivisionAddress extends $tea.Model {
  parentId?: number;
  divisionCode?: number;
  divisionLevel?: number;
  divisionName?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      divisionCode: 'DivisionCode',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'number',
      divisionCode: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressResponseBodyDivisionAddress extends $tea.Model {
  divisionAddress?: QueryAddressResponseBodyDivisionAddressDivisionAddress[];
  static names(): { [key: string]: string } {
    return {
      divisionAddress: 'DivisionAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionAddress: { 'type': 'array', 'itemType': QueryAddressResponseBodyDivisionAddressDivisionAddress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailResponseBodyDeliveryAddress extends $tea.Model {
  status?: number;
  postCode?: string;
  fullName?: string;
  addressDetail?: string;
  city?: string;
  addressId?: number;
  divisionCode?: string;
  mobile?: string;
  country?: string;
  area?: string;
  townDivisionCode?: string;
  town?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      postCode: 'PostCode',
      fullName: 'FullName',
      addressDetail: 'AddressDetail',
      city: 'City',
      addressId: 'AddressId',
      divisionCode: 'DivisionCode',
      mobile: 'Mobile',
      country: 'Country',
      area: 'Area',
      townDivisionCode: 'TownDivisionCode',
      town: 'Town',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      postCode: 'string',
      fullName: 'string',
      addressDetail: 'string',
      city: 'string',
      addressId: 'number',
      divisionCode: 'string',
      mobile: 'string',
      country: 'string',
      area: 'string',
      townDivisionCode: 'string',
      town: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressListResponseBodyAddressList extends $tea.Model {
  status?: number;
  postCode?: string;
  fullName?: string;
  addressDetail?: string;
  city?: string;
  addressId?: number;
  divisionCode?: string;
  mobile?: string;
  country?: string;
  area?: string;
  townDivisionCode?: string;
  town?: string;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      postCode: 'PostCode',
      fullName: 'FullName',
      addressDetail: 'AddressDetail',
      city: 'City',
      addressId: 'AddressId',
      divisionCode: 'DivisionCode',
      mobile: 'Mobile',
      country: 'Country',
      area: 'Area',
      townDivisionCode: 'TownDivisionCode',
      town: 'Town',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      postCode: 'string',
      fullName: 'string',
      addressDetail: 'string',
      city: 'string',
      addressId: 'number',
      divisionCode: 'string',
      mobile: 'string',
      country: 'string',
      area: 'string',
      townDivisionCode: 'string',
      town: 'string',
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponseBodyModelAdvertiseSettleInfoList extends $tea.Model {
  advertiseSettleDetailId?: string;
  createDate?: string;
  mediaSettleDetailId?: string;
  extInfo?: string;
  endTime?: string;
  startTime?: string;
  settleNo?: string;
  advertiseSettleAmount?: string;
  settleStatus?: string;
  advertiseName?: string;
  channelId?: string;
  modifiedDate?: string;
  static names(): { [key: string]: string } {
    return {
      advertiseSettleDetailId: 'AdvertiseSettleDetailId',
      createDate: 'CreateDate',
      mediaSettleDetailId: 'MediaSettleDetailId',
      extInfo: 'ExtInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
      settleNo: 'SettleNo',
      advertiseSettleAmount: 'AdvertiseSettleAmount',
      settleStatus: 'SettleStatus',
      advertiseName: 'AdvertiseName',
      channelId: 'ChannelId',
      modifiedDate: 'ModifiedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advertiseSettleDetailId: 'string',
      createDate: 'string',
      mediaSettleDetailId: 'string',
      extInfo: 'string',
      endTime: 'string',
      startTime: 'string',
      settleNo: 'string',
      advertiseSettleAmount: 'string',
      settleStatus: 'string',
      advertiseName: 'string',
      channelId: 'string',
      modifiedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponseBodyModel extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  advertiseSettleInfoList?: QueryAdvertisementSettleInfoResponseBodyModelAdvertiseSettleInfoList[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      advertiseSettleInfoList: 'AdvertiseSettleInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      advertiseSettleInfoList: { 'type': 'array', 'itemType': QueryAdvertisementSettleInfoResponseBodyModelAdvertiseSettleInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementResponseBodyQueryAgreementResponse extends $tea.Model {
  status?: string;
  externalAgreementNo?: string;
  validTime?: string;
  invalidTime?: string;
  agreementNo?: string;
  signTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      externalAgreementNo: 'ExternalAgreementNo',
      validTime: 'ValidTime',
      invalidTime: 'InvalidTime',
      agreementNo: 'AgreementNo',
      signTime: 'SignTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      externalAgreementNo: 'string',
      validTime: 'string',
      invalidTime: 'string',
      agreementNo: 'string',
      signTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponseBodyCinemasCinema extends $tea.Model {
  standardId?: string;
  scheduleCloseTime?: number;
  cityId?: number;
  cinemaName?: string;
  cityName?: string;
  address?: string;
  longitude?: string;
  latitude?: string;
  phone?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      standardId: 'StandardId',
      scheduleCloseTime: 'ScheduleCloseTime',
      cityId: 'CityId',
      cinemaName: 'CinemaName',
      cityName: 'CityName',
      address: 'Address',
      longitude: 'Longitude',
      latitude: 'Latitude',
      phone: 'Phone',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardId: 'string',
      scheduleCloseTime: 'number',
      cityId: 'number',
      cinemaName: 'string',
      cityName: 'string',
      address: 'string',
      longitude: 'string',
      latitude: 'string',
      phone: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponseBodyCinemas extends $tea.Model {
  cinema?: QueryAllCinemasResponseBodyCinemasCinema[];
  static names(): { [key: string]: string } {
    return {
      cinema: 'Cinema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cinema: { 'type': 'array', 'itemType': QueryAllCinemasResponseBodyCinemasCinema },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesResponseBodyCitiesCity extends $tea.Model {
  cityCode?: number;
  parentId?: number;
  name?: string;
  pinYin?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      parentId: 'ParentId',
      name: 'Name',
      pinYin: 'PinYin',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      parentId: 'number',
      name: 'string',
      pinYin: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesResponseBodyCities extends $tea.Model {
  city?: QueryAllCitiesResponseBodyCitiesCity[];
  static names(): { [key: string]: string } {
    return {
      city: 'City',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: { 'type': 'array', 'itemType': QueryAllCitiesResponseBodyCitiesCity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultResponseBodyFailIds extends $tea.Model {
  failId?: string[];
  static names(): { [key: string]: string } {
    return {
      failId: 'FailId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModelLmActivitySessionModel extends $tea.Model {
  subBizCode?: string;
  endDate?: string;
  displayDate?: string;
  lmSessionId?: number;
  description?: string;
  startDate?: string;
  lmActivityId?: number;
  bizId?: string;
  name?: string;
  extInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      subBizCode: 'SubBizCode',
      endDate: 'EndDate',
      displayDate: 'DisplayDate',
      lmSessionId: 'LmSessionId',
      description: 'Description',
      startDate: 'StartDate',
      lmActivityId: 'LmActivityId',
      bizId: 'BizId',
      name: 'Name',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subBizCode: 'string',
      endDate: 'string',
      displayDate: 'string',
      lmSessionId: 'number',
      description: 'string',
      startDate: 'string',
      lmActivityId: 'number',
      bizId: 'string',
      name: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModel extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  lmActivitySessionModel?: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModelLmActivitySessionModel;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      lmActivitySessionModel: 'LmActivitySessionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      lmActivitySessionModel: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModelLmActivitySessionModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelList extends $tea.Model {
  lmItemActivitySessionModel?: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModel[];
  static names(): { [key: string]: string } {
    return {
      lmItemActivitySessionModel: 'LmItemActivitySessionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemActivitySessionModel: { 'type': 'array', 'itemType': QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList extends $tea.Model {
  userLabelList?: string[];
  static names(): { [key: string]: string } {
    return {
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userLabelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModel extends $tea.Model {
  recommend?: boolean;
  showName?: string;
  priceCent?: number;
  icon?: string;
  pointPrice?: number;
  exclusive?: boolean;
  characteristicName?: string;
  accessUrl?: string;
  subBizCode?: string;
  characteristicCode?: string;
  canBuy?: boolean;
  points?: number;
  pointsAmount?: number;
  userLabelList?: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList;
  static names(): { [key: string]: string } {
    return {
      recommend: 'Recommend',
      showName: 'ShowName',
      priceCent: 'PriceCent',
      icon: 'Icon',
      pointPrice: 'PointPrice',
      exclusive: 'Exclusive',
      characteristicName: 'CharacteristicName',
      accessUrl: 'AccessUrl',
      subBizCode: 'SubBizCode',
      characteristicCode: 'CharacteristicCode',
      canBuy: 'CanBuy',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommend: 'boolean',
      showName: 'string',
      priceCent: 'number',
      icon: 'string',
      pointPrice: 'number',
      exclusive: 'boolean',
      characteristicName: 'string',
      accessUrl: 'string',
      subBizCode: 'string',
      characteristicCode: 'string',
      canBuy: 'boolean',
      points: 'number',
      pointsAmount: 'number',
      userLabelList: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModels extends $tea.Model {
  gradePriceModel?: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModel[];
  static names(): { [key: string]: string } {
    return {
      gradePriceModel: 'GradePriceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gradePriceModel: { 'type': 'array', 'itemType': QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItemSkuListSkuUserLabelList extends $tea.Model {
  userLabelList?: string[];
  static names(): { [key: string]: string } {
    return {
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userLabelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItemSkuListSku extends $tea.Model {
  priceCent?: number;
  skuId?: number;
  taoBaoCurrentPrice?: number;
  canSell?: boolean;
  skuPicUrl?: string;
  points?: number;
  skuTitle?: string;
  pointsAmount?: number;
  benefitId?: string;
  customizedAttributeMap?: { [key: string]: any };
  gradePriceModels?: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModels;
  userLabelList?: QueryBizItemListResponseBodyItemListItemSkuListSkuUserLabelList;
  static names(): { [key: string]: string } {
    return {
      priceCent: 'PriceCent',
      skuId: 'SkuId',
      taoBaoCurrentPrice: 'TaoBaoCurrentPrice',
      canSell: 'CanSell',
      skuPicUrl: 'SkuPicUrl',
      points: 'Points',
      skuTitle: 'SkuTitle',
      pointsAmount: 'PointsAmount',
      benefitId: 'BenefitId',
      customizedAttributeMap: 'CustomizedAttributeMap',
      gradePriceModels: 'GradePriceModels',
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceCent: 'number',
      skuId: 'number',
      taoBaoCurrentPrice: 'number',
      canSell: 'boolean',
      skuPicUrl: 'string',
      points: 'number',
      skuTitle: 'string',
      pointsAmount: 'number',
      benefitId: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gradePriceModels: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModels,
      userLabelList: QueryBizItemListResponseBodyItemListItemSkuListSkuUserLabelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItemSkuList extends $tea.Model {
  sku?: QueryBizItemListResponseBodyItemListItemSkuListSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryBizItemListResponseBodyItemListItemSkuListSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemListItem extends $tea.Model {
  extJson?: string;
  mainPicUrl?: string;
  itemTitle?: string;
  lmItemId?: string;
  sellerId?: number;
  categoryId?: number;
  canSell?: boolean;
  customizedItemName?: string;
  itemId?: number;
  reservePrice?: number;
  taobaoShopName?: string;
  skuList?: QueryBizItemListResponseBodyItemListItemSkuList;
  static names(): { [key: string]: string } {
    return {
      extJson: 'ExtJson',
      mainPicUrl: 'MainPicUrl',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      sellerId: 'SellerId',
      categoryId: 'CategoryId',
      canSell: 'CanSell',
      customizedItemName: 'CustomizedItemName',
      itemId: 'ItemId',
      reservePrice: 'ReservePrice',
      taobaoShopName: 'TaobaoShopName',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extJson: 'string',
      mainPicUrl: 'string',
      itemTitle: 'string',
      lmItemId: 'string',
      sellerId: 'number',
      categoryId: 'number',
      canSell: 'boolean',
      customizedItemName: 'string',
      itemId: 'number',
      reservePrice: 'number',
      taobaoShopName: 'string',
      skuList: QueryBizItemListResponseBodyItemListItemSkuList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBodyItemList extends $tea.Model {
  item?: QueryBizItemListResponseBodyItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBizItemListResponseBodyItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemSkuListSku extends $tea.Model {
  status?: number;
  priceCent?: number;
  pointsInfo?: string;
  maxAllowedCount?: number;
  pointsKey?: string;
  skuId?: number;
  points?: number;
  pointsAmount?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      priceCent: 'PriceCent',
      pointsInfo: 'PointsInfo',
      maxAllowedCount: 'MaxAllowedCount',
      pointsKey: 'PointsKey',
      skuId: 'SkuId',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      priceCent: 'number',
      pointsInfo: 'string',
      maxAllowedCount: 'number',
      pointsKey: 'string',
      skuId: 'number',
      points: 'number',
      pointsAmount: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemSkuList extends $tea.Model {
  sku?: QueryBizItemsWithActivityResponseBodyItemListItemSkuListSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryBizItemsWithActivityResponseBodyItemListItemSkuListSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItemActivitySessionItemSkuList extends $tea.Model {
  skuId?: number;
  priceCent?: number;
  points?: number;
  pointsAmount?: number;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      priceCent: 'PriceCent',
      points: 'Points',
      pointsAmount: 'PointsAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      priceCent: 'number',
      points: 'number',
      pointsAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItem extends $tea.Model {
  sessionQuantity?: number;
  limitQuantityForPerson?: number;
  saleableQuantity?: number;
  activitySessionItemSkuList?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItemActivitySessionItemSkuList;
  static names(): { [key: string]: string } {
    return {
      sessionQuantity: 'SessionQuantity',
      limitQuantityForPerson: 'LimitQuantityForPerson',
      saleableQuantity: 'SaleableQuantity',
      activitySessionItemSkuList: 'ActivitySessionItemSkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionQuantity: 'number',
      limitQuantityForPerson: 'number',
      saleableQuantity: 'number',
      activitySessionItemSkuList: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItemActivitySessionItemSkuList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySession extends $tea.Model {
  subBizCode?: string;
  endDate?: number;
  displayDate?: number;
  lmSessionId?: number;
  description?: string;
  startDate?: number;
  title?: string;
  activitySessionItem?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItem;
  static names(): { [key: string]: string } {
    return {
      subBizCode: 'SubBizCode',
      endDate: 'EndDate',
      displayDate: 'DisplayDate',
      lmSessionId: 'LmSessionId',
      description: 'Description',
      startDate: 'StartDate',
      title: 'Title',
      activitySessionItem: 'ActivitySessionItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subBizCode: 'string',
      endDate: 'number',
      displayDate: 'number',
      lmSessionId: 'number',
      description: 'string',
      startDate: 'number',
      title: 'string',
      activitySessionItem: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessions extends $tea.Model {
  activitySession?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySession[];
  static names(): { [key: string]: string } {
    return {
      activitySession: 'ActivitySession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activitySession: { 'type': 'array', 'itemType': QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySession },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuListActivityItemSku extends $tea.Model {
  activityPrice?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      activityPrice: 'ActivityPrice',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityPrice: 'number',
      skuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuList extends $tea.Model {
  activityItemSku?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuListActivityItemSku[];
  static names(): { [key: string]: string } {
    return {
      activityItemSku: 'ActivityItemSku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityItemSku: { 'type': 'array', 'itemType': QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuListActivityItemSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItem extends $tea.Model {
  activityQuantity?: number;
  limitQuantityForPerson?: number;
  activityItemSkuList?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuList;
  static names(): { [key: string]: string } {
    return {
      activityQuantity: 'ActivityQuantity',
      limitQuantityForPerson: 'LimitQuantityForPerson',
      activityItemSkuList: 'ActivityItemSkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityQuantity: 'number',
      limitQuantityForPerson: 'number',
      activityItemSkuList: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivity extends $tea.Model {
  startDate?: number;
  lmActivityId?: number;
  endDate?: number;
  title?: string;
  description?: string;
  activitySessions?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessions;
  activityItem?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItem;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      lmActivityId: 'LmActivityId',
      endDate: 'EndDate',
      title: 'Title',
      description: 'Description',
      activitySessions: 'ActivitySessions',
      activityItem: 'ActivityItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'number',
      lmActivityId: 'number',
      endDate: 'number',
      title: 'string',
      description: 'string',
      activitySessions: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessions,
      activityItem: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItem,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivities extends $tea.Model {
  activity?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivity[];
  static names(): { [key: string]: string } {
    return {
      activity: 'Activity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: { 'type': 'array', 'itemType': QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItem extends $tea.Model {
  picUrl?: string;
  totalSoldQuantity?: number;
  itemTitle?: string;
  maxAllowedCount?: number;
  sellerId?: number;
  lmItemId?: string;
  categoryId?: number;
  itemId?: number;
  reservePrice?: number;
  quantity?: number;
  taobaoShopName?: string;
  skuList?: QueryBizItemsWithActivityResponseBodyItemListItemSkuList;
  activities?: QueryBizItemsWithActivityResponseBodyItemListItemActivities;
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      totalSoldQuantity: 'TotalSoldQuantity',
      itemTitle: 'ItemTitle',
      maxAllowedCount: 'MaxAllowedCount',
      sellerId: 'SellerId',
      lmItemId: 'LmItemId',
      categoryId: 'CategoryId',
      itemId: 'ItemId',
      reservePrice: 'ReservePrice',
      quantity: 'Quantity',
      taobaoShopName: 'TaobaoShopName',
      skuList: 'SkuList',
      activities: 'Activities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      totalSoldQuantity: 'number',
      itemTitle: 'string',
      maxAllowedCount: 'number',
      sellerId: 'number',
      lmItemId: 'string',
      categoryId: 'number',
      itemId: 'number',
      reservePrice: 'number',
      quantity: 'number',
      taobaoShopName: 'string',
      skuList: QueryBizItemsWithActivityResponseBodyItemListItemSkuList,
      activities: QueryBizItemsWithActivityResponseBodyItemListItemActivities,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemList extends $tea.Model {
  item?: QueryBizItemsWithActivityResponseBodyItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBizItemsWithActivityResponseBodyItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponseBodyGuideItemGroupItemInfo extends $tea.Model {
  priceCent?: number;
  mainPicUrl?: string;
  itemTitle?: string;
  lmItemId?: string;
  pointPrice?: number;
  itemId?: number;
  points?: number;
  pointsAmount?: number;
  reservePrice?: string;
  itemUrl?: string;
  static names(): { [key: string]: string } {
    return {
      priceCent: 'PriceCent',
      mainPicUrl: 'MainPicUrl',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      itemId: 'ItemId',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      reservePrice: 'ReservePrice',
      itemUrl: 'ItemUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceCent: 'number',
      mainPicUrl: 'string',
      itemTitle: 'string',
      lmItemId: 'string',
      pointPrice: 'number',
      itemId: 'number',
      points: 'number',
      pointsAmount: 'number',
      reservePrice: 'string',
      itemUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponseBodyGuideItemGroup extends $tea.Model {
  itemInfo?: QueryGuideItemGroupResponseBodyGuideItemGroupItemInfo[];
  static names(): { [key: string]: string } {
    return {
      itemInfo: 'ItemInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemInfo: { 'type': 'array', 'itemType': QueryGuideItemGroupResponseBodyGuideItemGroupItemInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryResponseBodyItemList extends $tea.Model {
  itemTitle?: string;
  priceCent?: number;
  lmItemId?: string;
  pointPrice?: number;
  itemId?: string;
  whitePicUrl?: string;
  mainPicUrl?: string;
  points?: number;
  itemUrl?: string;
  pointsAmount?: number;
  reservePrice?: string;
  customizedAttributeMap?: { [key: string]: any };
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      itemTitle: 'ItemTitle',
      priceCent: 'PriceCent',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      itemId: 'ItemId',
      whitePicUrl: 'WhitePicUrl',
      mainPicUrl: 'MainPicUrl',
      points: 'Points',
      itemUrl: 'ItemUrl',
      pointsAmount: 'PointsAmount',
      reservePrice: 'ReservePrice',
      customizedAttributeMap: 'CustomizedAttributeMap',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTitle: 'string',
      priceCent: 'number',
      lmItemId: 'string',
      pointPrice: 'number',
      itemId: 'string',
      whitePicUrl: 'string',
      mainPicUrl: 'string',
      points: 'number',
      itemUrl: 'string',
      pointsAmount: 'number',
      reservePrice: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponseBodyMoviesMovieMovieTypeList extends $tea.Model {
  movieTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      movieTypeList: 'MovieTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      movieTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponseBodyMoviesMovieTrailerList extends $tea.Model {
  trailerList?: string[];
  static names(): { [key: string]: string } {
    return {
      trailerList: 'TrailerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trailerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponseBodyMoviesMovie extends $tea.Model {
  type?: string;
  movieVersion?: string;
  backgroundPicture?: string;
  remark?: string;
  openDay?: string;
  highlight?: string;
  language?: string;
  openTime?: string;
  director?: string;
  poster?: string;
  movieName?: string;
  description?: string;
  country?: string;
  duration?: number;
  movieNameEn?: string;
  leadingRole?: string;
  id?: number;
  movieTypeList?: QueryHotMoviesResponseBodyMoviesMovieMovieTypeList;
  trailerList?: QueryHotMoviesResponseBodyMoviesMovieTrailerList;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      movieVersion: 'MovieVersion',
      backgroundPicture: 'BackgroundPicture',
      remark: 'Remark',
      openDay: 'OpenDay',
      highlight: 'Highlight',
      language: 'Language',
      openTime: 'OpenTime',
      director: 'Director',
      poster: 'Poster',
      movieName: 'MovieName',
      description: 'Description',
      country: 'Country',
      duration: 'Duration',
      movieNameEn: 'MovieNameEn',
      leadingRole: 'LeadingRole',
      id: 'Id',
      movieTypeList: 'MovieTypeList',
      trailerList: 'TrailerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      movieVersion: 'string',
      backgroundPicture: 'string',
      remark: 'string',
      openDay: 'string',
      highlight: 'string',
      language: 'string',
      openTime: 'string',
      director: 'string',
      poster: 'string',
      movieName: 'string',
      description: 'string',
      country: 'string',
      duration: 'number',
      movieNameEn: 'string',
      leadingRole: 'string',
      id: 'number',
      movieTypeList: QueryHotMoviesResponseBodyMoviesMovieMovieTypeList,
      trailerList: QueryHotMoviesResponseBodyMoviesMovieTrailerList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponseBodyMovies extends $tea.Model {
  movie?: QueryHotMoviesResponseBodyMoviesMovie[];
  static names(): { [key: string]: string } {
    return {
      movie: 'Movie',
    };
  }

  static types(): { [key: string]: any } {
    return {
      movie: { 'type': 'array', 'itemType': QueryHotMoviesResponseBodyMoviesMovie },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupResponseBodyItemListSkuList extends $tea.Model {
  skuId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupResponseBodyItemList extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  quantity?: number;
  skuList?: QueryInventoryOfItemsInBizItemGroupResponseBodyItemListSkuList[];
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      quantity: 'Quantity',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      quantity: 'number',
      skuList: { 'type': 'array', 'itemType': QueryInventoryOfItemsInBizItemGroupResponseBodyItemListSkuList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBodyItemSkusSku extends $tea.Model {
  priceCent?: number;
  lmItemId?: string;
  pointPrice?: number;
  canSell?: boolean;
  itemId?: number;
  skuTitle?: string;
  skuPropertiesJson?: string;
  extJson?: string;
  skuProperties?: string;
  skuId?: number;
  skuPicUrl?: string;
  points?: number;
  reservePrice?: number;
  pointsAmount?: number;
  quantity?: number;
  customizedAttributeMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      priceCent: 'PriceCent',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      canSell: 'CanSell',
      itemId: 'ItemId',
      skuTitle: 'SkuTitle',
      skuPropertiesJson: 'SkuPropertiesJson',
      extJson: 'ExtJson',
      skuProperties: 'SkuProperties',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      points: 'Points',
      reservePrice: 'ReservePrice',
      pointsAmount: 'PointsAmount',
      quantity: 'Quantity',
      customizedAttributeMap: 'CustomizedAttributeMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceCent: 'number',
      lmItemId: 'string',
      pointPrice: 'number',
      canSell: 'boolean',
      itemId: 'number',
      skuTitle: 'string',
      skuPropertiesJson: 'string',
      extJson: 'string',
      skuProperties: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      points: 'number',
      reservePrice: 'number',
      pointsAmount: 'number',
      quantity: 'number',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBodyItemSkus extends $tea.Model {
  sku?: QueryItemDetailResponseBodyItemSkusSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryItemDetailResponseBodyItemSkusSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBodyItemItemImages extends $tea.Model {
  itemImage?: string[];
  static names(): { [key: string]: string } {
    return {
      itemImage: 'ItemImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemImage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBodyItem extends $tea.Model {
  itemTitle?: string;
  minPoints?: number;
  descOption?: string;
  videoPicUrl?: string;
  extJson?: string;
  isSellerPayPostfee?: boolean;
  lmItemCategory?: string;
  sellerPayPostfee?: boolean;
  reservePrice?: number;
  quantity?: number;
  videoUrl?: string;
  customizedAttributeMap?: { [key: string]: any };
  iforestPropsJson?: string;
  propertiesJson?: string;
  iforestProps?: string;
  lmItemId?: string;
  sellerId?: number;
  tbShopName?: string;
  itemId?: number;
  canSell?: boolean;
  centerInventory?: boolean;
  sellerType?: number;
  totalSoldQuantity?: number;
  mainPicUrl?: string;
  minPrice?: number;
  isCanSell?: boolean;
  categoryId?: number;
  descPath?: string;
  properties?: string;
  skus?: QueryItemDetailResponseBodyItemSkus;
  itemImages?: QueryItemDetailResponseBodyItemItemImages;
  static names(): { [key: string]: string } {
    return {
      itemTitle: 'ItemTitle',
      minPoints: 'MinPoints',
      descOption: 'DescOption',
      videoPicUrl: 'VideoPicUrl',
      extJson: 'ExtJson',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      lmItemCategory: 'LmItemCategory',
      sellerPayPostfee: 'SellerPayPostfee',
      reservePrice: 'ReservePrice',
      quantity: 'Quantity',
      videoUrl: 'VideoUrl',
      customizedAttributeMap: 'CustomizedAttributeMap',
      iforestPropsJson: 'IforestPropsJson',
      propertiesJson: 'PropertiesJson',
      iforestProps: 'IforestProps',
      lmItemId: 'LmItemId',
      sellerId: 'SellerId',
      tbShopName: 'TbShopName',
      itemId: 'ItemId',
      canSell: 'CanSell',
      centerInventory: 'CenterInventory',
      sellerType: 'SellerType',
      totalSoldQuantity: 'TotalSoldQuantity',
      mainPicUrl: 'MainPicUrl',
      minPrice: 'MinPrice',
      isCanSell: 'IsCanSell',
      categoryId: 'CategoryId',
      descPath: 'DescPath',
      properties: 'Properties',
      skus: 'Skus',
      itemImages: 'ItemImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTitle: 'string',
      minPoints: 'number',
      descOption: 'string',
      videoPicUrl: 'string',
      extJson: 'string',
      isSellerPayPostfee: 'boolean',
      lmItemCategory: 'string',
      sellerPayPostfee: 'boolean',
      reservePrice: 'number',
      quantity: 'number',
      videoUrl: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      iforestPropsJson: 'string',
      propertiesJson: 'string',
      iforestProps: 'string',
      lmItemId: 'string',
      sellerId: 'number',
      tbShopName: 'string',
      itemId: 'number',
      canSell: 'boolean',
      centerInventory: 'boolean',
      sellerType: 'number',
      totalSoldQuantity: 'number',
      mainPicUrl: 'string',
      minPrice: 'number',
      isCanSell: 'boolean',
      categoryId: 'number',
      descPath: 'string',
      properties: 'string',
      skus: QueryItemDetailResponseBodyItemSkus,
      itemImages: QueryItemDetailResponseBodyItemItemImages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItemSkus extends $tea.Model {
  status?: number;
  priceCent?: number;
  skuPvs?: string;
  lmItemId?: string;
  pointPrice?: number;
  itemId?: number;
  skuTitle?: string;
  extJson?: string;
  skuId?: number;
  skuPicUrl?: string;
  points?: number;
  pointsAmount?: number;
  reservePrice?: number;
  skuDesc?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      priceCent: 'PriceCent',
      skuPvs: 'SkuPvs',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      itemId: 'ItemId',
      skuTitle: 'SkuTitle',
      extJson: 'ExtJson',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      reservePrice: 'ReservePrice',
      skuDesc: 'SkuDesc',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      priceCent: 'number',
      skuPvs: 'string',
      lmItemId: 'string',
      pointPrice: 'number',
      itemId: 'number',
      skuTitle: 'string',
      extJson: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      points: 'number',
      pointsAmount: 'number',
      reservePrice: 'number',
      skuDesc: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItemSkuPropertysValues extends $tea.Model {
  text?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItemSkuPropertys extends $tea.Model {
  text?: string;
  id?: number;
  values?: QueryItemDetailInnerResponseBodyItemSkuPropertysValues[];
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      id: 'Id',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      id: 'number',
      values: { 'type': 'array', 'itemType': QueryItemDetailInnerResponseBodyItemSkuPropertysValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItem extends $tea.Model {
  itemTitle?: string;
  city?: string;
  minPoints?: number;
  descOption?: string;
  isSellerPayPostfee?: boolean;
  lmItemCategory?: string;
  sellerPayPostfee?: boolean;
  reservePrice?: number;
  quantity?: number;
  sellerId?: number;
  tbShopName?: string;
  itemId?: number;
  canSell?: boolean;
  centerInventory?: boolean;
  totalSoldQuantity?: number;
  mainPicUrl?: string;
  minPrice?: number;
  isCanSell?: boolean;
  lmShopId?: number;
  categoryId?: number;
  sellerNick?: string;
  descPath?: string;
  properties?: { [key: string]: any };
  province?: string;
  skus?: QueryItemDetailInnerResponseBodyItemSkus[];
  skuPropertys?: QueryItemDetailInnerResponseBodyItemSkuPropertys[];
  categoryIds?: number[];
  iforestProps?: { [key: string]: any }[];
  itemImages?: string[];
  static names(): { [key: string]: string } {
    return {
      itemTitle: 'ItemTitle',
      city: 'City',
      minPoints: 'MinPoints',
      descOption: 'DescOption',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      lmItemCategory: 'LmItemCategory',
      sellerPayPostfee: 'SellerPayPostfee',
      reservePrice: 'ReservePrice',
      quantity: 'Quantity',
      sellerId: 'SellerId',
      tbShopName: 'TbShopName',
      itemId: 'ItemId',
      canSell: 'CanSell',
      centerInventory: 'CenterInventory',
      totalSoldQuantity: 'TotalSoldQuantity',
      mainPicUrl: 'MainPicUrl',
      minPrice: 'MinPrice',
      isCanSell: 'IsCanSell',
      lmShopId: 'LmShopId',
      categoryId: 'CategoryId',
      sellerNick: 'SellerNick',
      descPath: 'DescPath',
      properties: 'Properties',
      province: 'Province',
      skus: 'Skus',
      skuPropertys: 'SkuPropertys',
      categoryIds: 'CategoryIds',
      iforestProps: 'IforestProps',
      itemImages: 'ItemImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTitle: 'string',
      city: 'string',
      minPoints: 'number',
      descOption: 'string',
      isSellerPayPostfee: 'boolean',
      lmItemCategory: 'string',
      sellerPayPostfee: 'boolean',
      reservePrice: 'number',
      quantity: 'number',
      sellerId: 'number',
      tbShopName: 'string',
      itemId: 'number',
      canSell: 'boolean',
      centerInventory: 'boolean',
      totalSoldQuantity: 'number',
      mainPicUrl: 'string',
      minPrice: 'number',
      isCanSell: 'boolean',
      lmShopId: 'number',
      categoryId: 'number',
      sellerNick: 'string',
      descPath: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      province: 'string',
      skus: { 'type': 'array', 'itemType': QueryItemDetailInnerResponseBodyItemSkus },
      skuPropertys: { 'type': 'array', 'itemType': QueryItemDetailInnerResponseBodyItemSkuPropertys },
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      iforestProps: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      itemImages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponseBodyItemBizListSkuList extends $tea.Model {
  priceCent?: number;
  pointPrice?: number;
  canSell?: boolean;
  skuTitle?: string;
  skuPropertiesJson?: string;
  skuProperties?: string;
  skuId?: number;
  skuPicUrl?: string;
  points?: number;
  pointsAmount?: number;
  reservePrice?: number;
  benefitId?: string;
  customizedAttributeMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      priceCent: 'PriceCent',
      pointPrice: 'PointPrice',
      canSell: 'CanSell',
      skuTitle: 'SkuTitle',
      skuPropertiesJson: 'SkuPropertiesJson',
      skuProperties: 'SkuProperties',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      reservePrice: 'ReservePrice',
      benefitId: 'BenefitId',
      customizedAttributeMap: 'CustomizedAttributeMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceCent: 'number',
      pointPrice: 'number',
      canSell: 'boolean',
      skuTitle: 'string',
      skuPropertiesJson: 'string',
      skuProperties: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      points: 'number',
      pointsAmount: 'number',
      reservePrice: 'number',
      benefitId: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponseBodyItemBizList extends $tea.Model {
  itemTitle?: string;
  propertiesJson?: string;
  lmItemId?: string;
  sellerId?: number;
  tbShopName?: string;
  canSell?: boolean;
  itemId?: number;
  descOption?: string;
  mainPicUrl?: string;
  categoryId?: number;
  subBizId?: string;
  reservePrice?: number;
  quantity?: number;
  skuList?: QueryItemInSubBizsResponseBodyItemBizListSkuList[];
  itemImages?: string[];
  static names(): { [key: string]: string } {
    return {
      itemTitle: 'ItemTitle',
      propertiesJson: 'PropertiesJson',
      lmItemId: 'LmItemId',
      sellerId: 'SellerId',
      tbShopName: 'TbShopName',
      canSell: 'CanSell',
      itemId: 'ItemId',
      descOption: 'DescOption',
      mainPicUrl: 'MainPicUrl',
      categoryId: 'CategoryId',
      subBizId: 'SubBizId',
      reservePrice: 'ReservePrice',
      quantity: 'Quantity',
      skuList: 'SkuList',
      itemImages: 'ItemImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemTitle: 'string',
      propertiesJson: 'string',
      lmItemId: 'string',
      sellerId: 'number',
      tbShopName: 'string',
      canSell: 'boolean',
      itemId: 'number',
      descOption: 'string',
      mainPicUrl: 'string',
      categoryId: 'number',
      subBizId: 'string',
      reservePrice: 'number',
      quantity: 'number',
      skuList: { 'type': 'array', 'itemType': QueryItemInSubBizsResponseBodyItemBizListSkuList },
      itemImages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryRequestItemList extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponseBodyItemListItemSkuListSkuInventory extends $tea.Model {
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponseBodyItemListItemSkuListSku extends $tea.Model {
  skuId?: number;
  inventory?: QueryItemInventoryResponseBodyItemListItemSkuListSkuInventory;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      inventory: 'Inventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      inventory: QueryItemInventoryResponseBodyItemListItemSkuListSkuInventory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponseBodyItemListItemSkuList extends $tea.Model {
  sku?: QueryItemInventoryResponseBodyItemListItemSkuListSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryItemInventoryResponseBodyItemListItemSkuListSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponseBodyItemListItem extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  skuList?: QueryItemInventoryResponseBodyItemListItemSkuList;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      skuList: QueryItemInventoryResponseBodyItemListItemSkuList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponseBodyItemList extends $tea.Model {
  item?: QueryItemInventoryResponseBodyItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryItemInventoryResponseBodyItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyDataDataLogisticsDetailListLogisticsDetailList extends $tea.Model {
  ocurrTimeStr?: string;
  standerdDesc?: string;
  static names(): { [key: string]: string } {
    return {
      ocurrTimeStr: 'OcurrTimeStr',
      standerdDesc: 'StanderdDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ocurrTimeStr: 'string',
      standerdDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyDataDataLogisticsDetailList extends $tea.Model {
  logisticsDetailList?: QueryLogisticsResponseBodyDataDataLogisticsDetailListLogisticsDetailList[];
  static names(): { [key: string]: string } {
    return {
      logisticsDetailList: 'LogisticsDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsDetailList: { 'type': 'array', 'itemType': QueryLogisticsResponseBodyDataDataLogisticsDetailListLogisticsDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyDataDataGoodsGoods extends $tea.Model {
  itemId?: number;
  goodName?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      goodName: 'GoodName',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      goodName: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyDataDataGoods extends $tea.Model {
  goods?: QueryLogisticsResponseBodyDataDataGoodsGoods[];
  static names(): { [key: string]: string } {
    return {
      goods: 'Goods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goods: { 'type': 'array', 'itemType': QueryLogisticsResponseBodyDataDataGoodsGoods },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyDataData extends $tea.Model {
  logisticsCompanyCode?: string;
  mailNo?: string;
  logisticsCompanyName?: string;
  dataProvider?: string;
  dataProviderTitle?: string;
  logisticsDetailList?: QueryLogisticsResponseBodyDataDataLogisticsDetailList;
  goods?: QueryLogisticsResponseBodyDataDataGoods;
  static names(): { [key: string]: string } {
    return {
      logisticsCompanyCode: 'LogisticsCompanyCode',
      mailNo: 'MailNo',
      logisticsCompanyName: 'LogisticsCompanyName',
      dataProvider: 'DataProvider',
      dataProviderTitle: 'DataProviderTitle',
      logisticsDetailList: 'LogisticsDetailList',
      goods: 'Goods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsCompanyCode: 'string',
      mailNo: 'string',
      logisticsCompanyName: 'string',
      dataProvider: 'string',
      dataProviderTitle: 'string',
      logisticsDetailList: QueryLogisticsResponseBodyDataDataLogisticsDetailList,
      goods: QueryLogisticsResponseBodyDataDataGoods,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyData extends $tea.Model {
  data?: QueryLogisticsResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryLogisticsResponseBodyDataData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponseBodyModelMediaSettleInfoList extends $tea.Model {
  endTime?: string;
  startTime?: string;
  mediaSettleAmount?: string;
  settleNo?: string;
  settleStatus?: string;
  channelId?: string;
  mediaName?: string;
  mediaSettleDetailId?: string;
  modifiedDate?: string;
  createDate?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      mediaSettleAmount: 'MediaSettleAmount',
      settleNo: 'SettleNo',
      settleStatus: 'SettleStatus',
      channelId: 'ChannelId',
      mediaName: 'MediaName',
      mediaSettleDetailId: 'MediaSettleDetailId',
      modifiedDate: 'ModifiedDate',
      createDate: 'CreateDate',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      mediaSettleAmount: 'string',
      settleNo: 'string',
      settleStatus: 'string',
      channelId: 'string',
      mediaName: 'string',
      mediaSettleDetailId: 'string',
      modifiedDate: 'string',
      createDate: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponseBodyModel extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  mediaSettleInfoList?: QueryMediaSettleInfoResponseBodyModelMediaSettleInfoList[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      mediaSettleInfoList: 'MediaSettleInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      mediaSettleInfoList: { 'type': 'array', 'itemType': QueryMediaSettleInfoResponseBodyModelMediaSettleInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponseBodyBizMessagesBizMessage extends $tea.Model {
  contentMapJson?: string;
  pubTime?: string;
  dataId?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      contentMapJson: 'ContentMapJson',
      pubTime: 'PubTime',
      dataId: 'DataId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMapJson: 'string',
      pubTime: 'string',
      dataId: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponseBodyBizMessages extends $tea.Model {
  bizMessage?: QueryMessagesResponseBodyBizMessagesBizMessage[];
  static names(): { [key: string]: string } {
    return {
      bizMessage: 'BizMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizMessage: { 'type': 'array', 'itemType': QueryMessagesResponseBodyBizMessagesBizMessage },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsResponseBodyCommentListComment extends $tea.Model {
  remark?: number;
  favorCount?: number;
  subject?: string;
  movieId?: number;
  nickName?: string;
  content?: string;
  id?: number;
  commentTime?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      favorCount: 'FavorCount',
      subject: 'Subject',
      movieId: 'MovieId',
      nickName: 'NickName',
      content: 'Content',
      id: 'Id',
      commentTime: 'CommentTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'number',
      favorCount: 'number',
      subject: 'string',
      movieId: 'number',
      nickName: 'string',
      content: 'string',
      id: 'number',
      commentTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsResponseBodyCommentList extends $tea.Model {
  comment?: QueryMovieCommentsResponseBodyCommentListComment[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: { 'type': 'array', 'itemType': QueryMovieCommentsResponseBodyCommentListComment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSchedulesResponseBodySchedulesSchedule extends $tea.Model {
  movieVersion?: string;
  sessionEndingTime?: string;
  maxCanBuy?: number;
  movieId?: number;
  scheduleArea?: string;
  hallName?: string;
  isExpired?: boolean;
  sessionStartingTime?: string;
  price?: number;
  sectionId?: string;
  releaseDate?: string;
  cinemaId?: number;
  serviceFee?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      movieVersion: 'MovieVersion',
      sessionEndingTime: 'SessionEndingTime',
      maxCanBuy: 'MaxCanBuy',
      movieId: 'MovieId',
      scheduleArea: 'ScheduleArea',
      hallName: 'HallName',
      isExpired: 'IsExpired',
      sessionStartingTime: 'SessionStartingTime',
      price: 'Price',
      sectionId: 'SectionId',
      releaseDate: 'ReleaseDate',
      cinemaId: 'CinemaId',
      serviceFee: 'ServiceFee',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      movieVersion: 'string',
      sessionEndingTime: 'string',
      maxCanBuy: 'number',
      movieId: 'number',
      scheduleArea: 'string',
      hallName: 'string',
      isExpired: 'boolean',
      sessionStartingTime: 'string',
      price: 'number',
      sectionId: 'string',
      releaseDate: 'string',
      cinemaId: 'number',
      serviceFee: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSchedulesResponseBodySchedules extends $tea.Model {
  schedule?: QueryMovieSchedulesResponseBodySchedulesSchedule[];
  static names(): { [key: string]: string } {
    return {
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedule: { 'type': 'array', 'itemType': QueryMovieSchedulesResponseBodySchedulesSchedule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponseBodySeatMapSeatsSeat extends $tea.Model {
  status?: number;
  flag?: number;
  extId?: string;
  rowName?: string;
  topPx?: number;
  area?: string;
  name?: string;
  leftPx?: number;
  column?: number;
  row?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      flag: 'Flag',
      extId: 'ExtId',
      rowName: 'RowName',
      topPx: 'TopPx',
      area: 'Area',
      name: 'Name',
      leftPx: 'LeftPx',
      column: 'Column',
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      flag: 'number',
      extId: 'string',
      rowName: 'string',
      topPx: 'number',
      area: 'string',
      name: 'string',
      leftPx: 'number',
      column: 'number',
      row: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponseBodySeatMapSeats extends $tea.Model {
  seat?: QueryMovieSeatsResponseBodySeatMapSeatsSeat[];
  static names(): { [key: string]: string } {
    return {
      seat: 'Seat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seat: { 'type': 'array', 'itemType': QueryMovieSeatsResponseBodySeatMapSeatsSeat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponseBodySeatMap extends $tea.Model {
  maxCanBuy?: number;
  tipMessage?: string;
  maxRow?: number;
  minColumn?: number;
  minTopPx?: number;
  notice?: string;
  maxColumn?: number;
  regular?: boolean;
  maxTopPx?: number;
  maxLeftPx?: number;
  soldCount?: number;
  minRow?: number;
  seatCount?: number;
  minLeftPx?: number;
  seats?: QueryMovieSeatsResponseBodySeatMapSeats;
  static names(): { [key: string]: string } {
    return {
      maxCanBuy: 'MaxCanBuy',
      tipMessage: 'TipMessage',
      maxRow: 'MaxRow',
      minColumn: 'MinColumn',
      minTopPx: 'MinTopPx',
      notice: 'Notice',
      maxColumn: 'MaxColumn',
      regular: 'Regular',
      maxTopPx: 'MaxTopPx',
      maxLeftPx: 'MaxLeftPx',
      soldCount: 'SoldCount',
      minRow: 'MinRow',
      seatCount: 'SeatCount',
      minLeftPx: 'MinLeftPx',
      seats: 'Seats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCanBuy: 'number',
      tipMessage: 'string',
      maxRow: 'number',
      minColumn: 'number',
      minTopPx: 'number',
      notice: 'string',
      maxColumn: 'number',
      regular: 'boolean',
      maxTopPx: 'number',
      maxLeftPx: 'number',
      soldCount: 'number',
      minRow: 'number',
      seatCount: 'number',
      minLeftPx: 'number',
      seats: QueryMovieSeatsResponseBodySeatMapSeats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsResponseBodyMovieTicket extends $tea.Model {
  status?: string;
  tbOrderId?: string;
  ticketContents?: string;
  returnMessage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tbOrderId: 'TbOrderId',
      ticketContents: 'TicketContents',
      returnMessage: 'ReturnMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tbOrderId: 'string',
      ticketContents: 'string',
      returnMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyPostFee extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModels extends $tea.Model {
  fundStructureModels?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels[];
  static names(): { [key: string]: string } {
    return {
      fundStructureModels: 'FundStructureModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundStructureModels: { 'type': 'array', 'itemType': QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList extends $tea.Model {
  itemPriceList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList[];
  static names(): { [key: string]: string } {
    return {
      itemPriceList: 'ItemPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemPriceList: { 'type': 'array', 'itemType': QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderList extends $tea.Model {
  lmOrderId?: number;
  enableStatus?: number;
  itemTitle?: string;
  orderStatus?: number;
  skuName?: string;
  lmItemId?: string;
  skuId?: number;
  number?: number;
  tbOrderId?: number;
  itemPic?: string;
  itemId?: number;
  itemPriceList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      enableStatus: 'EnableStatus',
      itemTitle: 'ItemTitle',
      orderStatus: 'OrderStatus',
      skuName: 'SkuName',
      lmItemId: 'LmItemId',
      skuId: 'SkuId',
      number: 'Number',
      tbOrderId: 'TbOrderId',
      itemPic: 'ItemPic',
      itemId: 'ItemId',
      itemPriceList: 'ItemPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      enableStatus: 'number',
      itemTitle: 'string',
      orderStatus: 'number',
      skuName: 'string',
      lmItemId: 'string',
      skuId: 'number',
      number: 'number',
      tbOrderId: 'number',
      itemPic: 'string',
      itemId: 'number',
      itemPriceList: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderList extends $tea.Model {
  subOrderList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderList[];
  static names(): { [key: string]: string } {
    return {
      subOrderList: 'SubOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrderList: { 'type': 'array', 'itemType': QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListPostFee extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: number;
  enableStatus?: number;
  extJson?: string;
  orderStatus?: number;
  lmPaymentId?: string;
  shopName?: string;
  tbOrderId?: number;
  orderAmount?: number;
  logisticsStatus?: number;
  createDate?: string;
  fundStructureModels?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModels;
  subOrderList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderList;
  postFee?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListPostFee;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      enableStatus: 'EnableStatus',
      extJson: 'ExtJson',
      orderStatus: 'OrderStatus',
      lmPaymentId: 'LmPaymentId',
      shopName: 'ShopName',
      tbOrderId: 'TbOrderId',
      orderAmount: 'OrderAmount',
      logisticsStatus: 'LogisticsStatus',
      createDate: 'CreateDate',
      fundStructureModels: 'FundStructureModels',
      subOrderList: 'SubOrderList',
      postFee: 'PostFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      enableStatus: 'number',
      extJson: 'string',
      orderStatus: 'number',
      lmPaymentId: 'string',
      shopName: 'string',
      tbOrderId: 'number',
      orderAmount: 'number',
      logisticsStatus: 'number',
      createDate: 'string',
      fundStructureModels: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModels,
      subOrderList: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderList,
      postFee: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListPostFee,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderList extends $tea.Model {
  lmOrderList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfigConfigs extends $tea.Model {
  valueUnit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      valueUnit: 'ValueUnit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueUnit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfig extends $tea.Model {
  configs?: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfigConfigs[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfigConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfo extends $tea.Model {
  rateType?: string;
  rateConfig?: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfig;
  static names(): { [key: string]: string } {
    return {
      rateType: 'RateType',
      rateConfig: 'RateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rateType: 'string',
      rateConfig: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBodyCommissionModels extends $tea.Model {
  lmOrderId?: number;
  commissionInfo?: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfo;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      commissionInfo: 'CommissionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      commissionInfo: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceListItemPrice extends $tea.Model {
  fundAmount?: number;
  tbOrderId?: number;
  fundType?: string;
  fundAmountMoney?: number;
  tbSubOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      tbOrderId: 'TbOrderId',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
      tbSubOrderId: 'TbSubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      tbOrderId: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
      tbSubOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceList extends $tea.Model {
  itemPrice?: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceListItemPrice[];
  static names(): { [key: string]: string } {
    return {
      itemPrice: 'ItemPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemPrice: { 'type': 'array', 'itemType': QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceListItemPrice },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrder extends $tea.Model {
  lmOrderId?: number;
  itemPriceInfo?: string;
  itemTitle?: string;
  tbSubOrderId?: number;
  lmItemId?: string;
  totalPaymentInfo?: string;
  itemPic?: string;
  itemId?: number;
  channelCode?: string;
  payStatus?: number;
  skuName?: string;
  number?: number;
  skuId?: number;
  itemPriceList?: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceList;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      itemPriceInfo: 'ItemPriceInfo',
      itemTitle: 'ItemTitle',
      tbSubOrderId: 'TbSubOrderId',
      lmItemId: 'LmItemId',
      totalPaymentInfo: 'TotalPaymentInfo',
      itemPic: 'ItemPic',
      itemId: 'ItemId',
      channelCode: 'ChannelCode',
      payStatus: 'PayStatus',
      skuName: 'SkuName',
      number: 'Number',
      skuId: 'SkuId',
      itemPriceList: 'ItemPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      itemPriceInfo: 'string',
      itemTitle: 'string',
      tbSubOrderId: 'number',
      lmItemId: 'string',
      totalPaymentInfo: 'string',
      itemPic: 'string',
      itemId: 'number',
      channelCode: 'string',
      payStatus: 'number',
      skuName: 'string',
      number: 'number',
      skuId: 'number',
      itemPriceList: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderList extends $tea.Model {
  subItemOrder?: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrder[];
  static names(): { [key: string]: string } {
    return {
      subItemOrder: 'SubItemOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subItemOrder: { 'type': 'array', 'itemType': QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrder },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderFundStructureModelsFundStructure extends $tea.Model {
  fundAmount?: number;
  lmOrderId?: number;
  fundType?: string;
  fundAmountMoney?: number;
  tbSubOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      lmOrderId: 'LmOrderId',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
      tbSubOrderId: 'TbSubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      lmOrderId: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
      tbSubOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderFundStructureModels extends $tea.Model {
  fundStructure?: QueryOrderDetailInnerResponseBodyModelOrderFundStructureModelsFundStructure[];
  static names(): { [key: string]: string } {
    return {
      fundStructure: 'FundStructure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundStructure: { 'type': 'array', 'itemType': QueryOrderDetailInnerResponseBodyModelOrderFundStructureModelsFundStructure },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderPostFee extends $tea.Model {
  fundAmount?: number;
  lmOrderId?: number;
  fundType?: string;
  fundAmountMoney?: number;
  tbSubOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      lmOrderId: 'LmOrderId',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
      tbSubOrderId: 'TbSubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      lmOrderId: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
      tbSubOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrder extends $tea.Model {
  eticket?: boolean;
  createDate?: string;
  logisticsCompName?: string;
  channelCode?: string;
  logisticsMobilePhone?: string;
  resExtInfo?: string;
  enableStatus?: number;
  channelBizType?: string;
  shipping?: string;
  orderPayInfo?: string;
  logisticsStatusDesc?: string;
  tbOrderId?: string;
  logisticsStatus?: number;
  lmOrderId?: number;
  sellerId?: number;
  shopName?: string;
  orderAmount?: number;
  extInfo?: { [key: string]: any };
  endTime?: number;
  payStatus?: number;
  logisticsNo?: string;
  logisticsUserName?: string;
  logisticsAddress?: string;
  payWaterStatus?: number;
  refundStatus?: number;
  sellerNick?: string;
  channelOrderId?: string;
  subItemOrderList?: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderList;
  fundStructureModels?: QueryOrderDetailInnerResponseBodyModelOrderFundStructureModels;
  postFee?: QueryOrderDetailInnerResponseBodyModelOrderPostFee;
  static names(): { [key: string]: string } {
    return {
      eticket: 'Eticket',
      createDate: 'CreateDate',
      logisticsCompName: 'LogisticsCompName',
      channelCode: 'ChannelCode',
      logisticsMobilePhone: 'LogisticsMobilePhone',
      resExtInfo: 'ResExtInfo',
      enableStatus: 'EnableStatus',
      channelBizType: 'ChannelBizType',
      shipping: 'Shipping',
      orderPayInfo: 'OrderPayInfo',
      logisticsStatusDesc: 'LogisticsStatusDesc',
      tbOrderId: 'TbOrderId',
      logisticsStatus: 'LogisticsStatus',
      lmOrderId: 'LmOrderId',
      sellerId: 'SellerId',
      shopName: 'ShopName',
      orderAmount: 'OrderAmount',
      extInfo: 'ExtInfo',
      endTime: 'EndTime',
      payStatus: 'PayStatus',
      logisticsNo: 'LogisticsNo',
      logisticsUserName: 'LogisticsUserName',
      logisticsAddress: 'LogisticsAddress',
      payWaterStatus: 'PayWaterStatus',
      refundStatus: 'RefundStatus',
      sellerNick: 'SellerNick',
      channelOrderId: 'ChannelOrderId',
      subItemOrderList: 'SubItemOrderList',
      fundStructureModels: 'FundStructureModels',
      postFee: 'PostFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eticket: 'boolean',
      createDate: 'string',
      logisticsCompName: 'string',
      channelCode: 'string',
      logisticsMobilePhone: 'string',
      resExtInfo: 'string',
      enableStatus: 'number',
      channelBizType: 'string',
      shipping: 'string',
      orderPayInfo: 'string',
      logisticsStatusDesc: 'string',
      tbOrderId: 'string',
      logisticsStatus: 'number',
      lmOrderId: 'number',
      sellerId: 'number',
      shopName: 'string',
      orderAmount: 'number',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endTime: 'number',
      payStatus: 'number',
      logisticsNo: 'string',
      logisticsUserName: 'string',
      logisticsAddress: 'string',
      payWaterStatus: 'number',
      refundStatus: 'number',
      sellerNick: 'string',
      channelOrderId: 'string',
      subItemOrderList: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderList,
      fundStructureModels: QueryOrderDetailInnerResponseBodyModelOrderFundStructureModels,
      postFee: QueryOrderDetailInnerResponseBodyModelOrderPostFee,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModel extends $tea.Model {
  order?: QueryOrderDetailInnerResponseBodyModelOrder;
  static names(): { [key: string]: string } {
    return {
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: QueryOrderDetailInnerResponseBodyModelOrder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdResponseBodyLmOrderIdsLmOrderIds extends $tea.Model {
  lmOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdResponseBodyLmOrderIds extends $tea.Model {
  lmOrderIds?: QueryOrderIdByPayIdResponseBodyLmOrderIdsLmOrderIds[];
  static names(): { [key: string]: string } {
    return {
      lmOrderIds: 'LmOrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderIds: { 'type': 'array', 'itemType': QueryOrderIdByPayIdResponseBodyLmOrderIdsLmOrderIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponseBodyModelLogisticsListLogistics extends $tea.Model {
  logisticsCompanyCode?: string;
  logisticsNo?: string;
  logisticsStatus?: string;
  logisticsCompanyName?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsCompanyCode: 'LogisticsCompanyCode',
      logisticsNo: 'LogisticsNo',
      logisticsStatus: 'LogisticsStatus',
      logisticsCompanyName: 'LogisticsCompanyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsCompanyCode: 'string',
      logisticsNo: 'string',
      logisticsStatus: 'string',
      logisticsCompanyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponseBodyModelLogisticsList extends $tea.Model {
  logistics?: QueryOrderInfoAfterSaleResponseBodyModelLogisticsListLogistics[];
  static names(): { [key: string]: string } {
    return {
      logistics: 'Logistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logistics: { 'type': 'array', 'itemType': QueryOrderInfoAfterSaleResponseBodyModelLogisticsListLogistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponseBodyModel extends $tea.Model {
  lmOrderId?: number;
  shopServiceTelephone?: string;
  refundAmount?: number;
  xiaomiCode?: string;
  shopName?: string;
  createDate?: string;
  refundRate?: string;
  extJson?: string;
  orderStatus?: string;
  refundPoints?: number;
  tbOrderId?: number;
  points?: number;
  refundStatus?: string;
  pointsAmount?: number;
  cashAmount?: string;
  logisticsList?: QueryOrderInfoAfterSaleResponseBodyModelLogisticsList;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      shopServiceTelephone: 'ShopServiceTelephone',
      refundAmount: 'RefundAmount',
      xiaomiCode: 'XiaomiCode',
      shopName: 'ShopName',
      createDate: 'CreateDate',
      refundRate: 'RefundRate',
      extJson: 'ExtJson',
      orderStatus: 'OrderStatus',
      refundPoints: 'RefundPoints',
      tbOrderId: 'TbOrderId',
      points: 'Points',
      refundStatus: 'RefundStatus',
      pointsAmount: 'PointsAmount',
      cashAmount: 'CashAmount',
      logisticsList: 'LogisticsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      shopServiceTelephone: 'string',
      refundAmount: 'number',
      xiaomiCode: 'string',
      shopName: 'string',
      createDate: 'string',
      refundRate: 'string',
      extJson: 'string',
      orderStatus: 'string',
      refundPoints: 'number',
      tbOrderId: 'number',
      points: 'number',
      refundStatus: 'string',
      pointsAmount: 'number',
      cashAmount: 'string',
      logisticsList: QueryOrderInfoAfterSaleResponseBodyModelLogisticsList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: number;
  itemName?: string;
  skuName?: string;
  skuId?: number;
  lmItemId?: string;
  itemId?: number;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      itemName: 'ItemName',
      skuName: 'SkuName',
      skuId: 'SkuId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      itemName: 'string',
      skuName: 'string',
      skuId: 'number',
      lmItemId: 'string',
      itemId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderList extends $tea.Model {
  lmOrderList?: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyPostFee extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModels extends $tea.Model {
  fundStructureModels?: QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels[];
  static names(): { [key: string]: string } {
    return {
      fundStructureModels: 'FundStructureModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundStructureModels: { 'type': 'array', 'itemType': QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList extends $tea.Model {
  itemPriceList?: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList[];
  static names(): { [key: string]: string } {
    return {
      itemPriceList: 'ItemPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemPriceList: { 'type': 'array', 'itemType': QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderList extends $tea.Model {
  lmOrderId?: number;
  enableStatus?: number;
  itemTitle?: string;
  orderStatus?: number;
  skuName?: string;
  lmItemId?: string;
  skuId?: number;
  number?: number;
  tbOrderId?: number;
  itemPic?: string;
  itemId?: number;
  itemPriceList?: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      enableStatus: 'EnableStatus',
      itemTitle: 'ItemTitle',
      orderStatus: 'OrderStatus',
      skuName: 'SkuName',
      lmItemId: 'LmItemId',
      skuId: 'SkuId',
      number: 'Number',
      tbOrderId: 'TbOrderId',
      itemPic: 'ItemPic',
      itemId: 'ItemId',
      itemPriceList: 'ItemPriceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      enableStatus: 'number',
      itemTitle: 'string',
      orderStatus: 'number',
      skuName: 'string',
      lmItemId: 'string',
      skuId: 'number',
      number: 'number',
      tbOrderId: 'number',
      itemPic: 'string',
      itemId: 'number',
      itemPriceList: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderList extends $tea.Model {
  subOrderList?: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderList[];
  static names(): { [key: string]: string } {
    return {
      subOrderList: 'SubOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subOrderList: { 'type': 'array', 'itemType': QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListPostFee extends $tea.Model {
  fundAmount?: number;
  fundType?: string;
  fundAmountMoney?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundType: 'FundType',
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundType: 'string',
      fundAmountMoney: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderList extends $tea.Model {
  lmOrderId?: number;
  enableStatus?: number;
  extJson?: string;
  orderStatus?: number;
  shopName?: string;
  tbOrderId?: number;
  orderAmount?: number;
  logisticsStatus?: number;
  createDate?: string;
  fundStructureModels?: QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModels;
  subOrderList?: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderList;
  postFee?: QueryOrderListResponseBodyLmOrderListLmOrderListPostFee;
  static names(): { [key: string]: string } {
    return {
      lmOrderId: 'LmOrderId',
      enableStatus: 'EnableStatus',
      extJson: 'ExtJson',
      orderStatus: 'OrderStatus',
      shopName: 'ShopName',
      tbOrderId: 'TbOrderId',
      orderAmount: 'OrderAmount',
      logisticsStatus: 'LogisticsStatus',
      createDate: 'CreateDate',
      fundStructureModels: 'FundStructureModels',
      subOrderList: 'SubOrderList',
      postFee: 'PostFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderId: 'number',
      enableStatus: 'number',
      extJson: 'string',
      orderStatus: 'number',
      shopName: 'string',
      tbOrderId: 'number',
      orderAmount: 'number',
      logisticsStatus: 'number',
      createDate: 'string',
      fundStructureModels: QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModels,
      subOrderList: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderList,
      postFee: QueryOrderListResponseBodyLmOrderListLmOrderListPostFee,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderList extends $tea.Model {
  lmOrderList?: QueryOrderListResponseBodyLmOrderListLmOrderList[];
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': QueryOrderListResponseBodyLmOrderListLmOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailListLogisticsDetailList extends $tea.Model {
  ocurrTimeStr?: string;
  standerdDesc?: string;
  statusIcon?: string;
  static names(): { [key: string]: string } {
    return {
      ocurrTimeStr: 'OcurrTimeStr',
      standerdDesc: 'StanderdDesc',
      statusIcon: 'StatusIcon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ocurrTimeStr: 'string',
      standerdDesc: 'string',
      statusIcon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailList extends $tea.Model {
  logisticsDetailList?: QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailListLogisticsDetailList[];
  static names(): { [key: string]: string } {
    return {
      logisticsDetailList: 'LogisticsDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsDetailList: { 'type': 'array', 'itemType': QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailListLogisticsDetailList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBodyOrderLogisticsReceiver extends $tea.Model {
  address?: string;
  name?: string;
  phoneNumber?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      phoneNumber: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBodyOrderLogisticsFetcher extends $tea.Model {
  address?: string;
  name?: string;
  phoneNumber?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      phoneNumber: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBodyOrderLogistics extends $tea.Model {
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  dataProvider?: string;
  dataProviderTitle?: string;
  logisticsDetailList?: QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailList;
  receiver?: QueryOrderLogisticsResponseBodyOrderLogisticsReceiver;
  fetcher?: QueryOrderLogisticsResponseBodyOrderLogisticsFetcher;
  static names(): { [key: string]: string } {
    return {
      logisticsCompanyCode: 'LogisticsCompanyCode',
      logisticsCompanyName: 'LogisticsCompanyName',
      dataProvider: 'DataProvider',
      dataProviderTitle: 'DataProviderTitle',
      logisticsDetailList: 'LogisticsDetailList',
      receiver: 'Receiver',
      fetcher: 'Fetcher',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      dataProvider: 'string',
      dataProviderTitle: 'string',
      logisticsDetailList: QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailList,
      receiver: QueryOrderLogisticsResponseBodyOrderLogisticsReceiver,
      fetcher: QueryOrderLogisticsResponseBodyOrderLogisticsFetcher,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponseBodyRefundApplicationDetailMaxRefundFeeData extends $tea.Model {
  maxRefundFee?: number;
  minRefundFee?: number;
  static names(): { [key: string]: string } {
    return {
      maxRefundFee: 'MaxRefundFee',
      minRefundFee: 'MinRefundFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRefundFee: 'number',
      minRefundFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponseBodyRefundApplicationDetailApplyReasonText extends $tea.Model {
  reasonTips?: string;
  reasonTextId?: number;
  static names(): { [key: string]: string } {
    return {
      reasonTips: 'ReasonTips',
      reasonTextId: 'ReasonTextId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonTips: 'string',
      reasonTextId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponseBodyRefundApplicationDetail extends $tea.Model {
  disputeType?: number;
  lmOrderId?: string;
  refunderName?: string;
  sellerAgreeMsg?: string;
  returnGoodLogisticsStatus?: number;
  disputeDesc?: string;
  refunderAddress?: string;
  returnGoodCount?: number;
  disputeId?: number;
  disputeEndTime?: string;
  orderLogisticsStatus?: number;
  bizClaimType?: number;
  realRefundFee?: number;
  refundFee?: number;
  sellerRefuseAgreementMessage?: string;
  disputeCreateTime?: string;
  refunderTel?: string;
  sellerRefuseReason?: string;
  subLmOrderId?: string;
  applyDisputeDesc?: string;
  disputeStatus?: number;
  refunderZipCode?: string;
  maxRefundFeeData?: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailMaxRefundFeeData;
  applyReasonText?: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailApplyReasonText;
  static names(): { [key: string]: string } {
    return {
      disputeType: 'DisputeType',
      lmOrderId: 'LmOrderId',
      refunderName: 'RefunderName',
      sellerAgreeMsg: 'SellerAgreeMsg',
      returnGoodLogisticsStatus: 'ReturnGoodLogisticsStatus',
      disputeDesc: 'DisputeDesc',
      refunderAddress: 'RefunderAddress',
      returnGoodCount: 'ReturnGoodCount',
      disputeId: 'DisputeId',
      disputeEndTime: 'DisputeEndTime',
      orderLogisticsStatus: 'OrderLogisticsStatus',
      bizClaimType: 'BizClaimType',
      realRefundFee: 'RealRefundFee',
      refundFee: 'RefundFee',
      sellerRefuseAgreementMessage: 'SellerRefuseAgreementMessage',
      disputeCreateTime: 'DisputeCreateTime',
      refunderTel: 'RefunderTel',
      sellerRefuseReason: 'SellerRefuseReason',
      subLmOrderId: 'SubLmOrderId',
      applyDisputeDesc: 'ApplyDisputeDesc',
      disputeStatus: 'DisputeStatus',
      refunderZipCode: 'RefunderZipCode',
      maxRefundFeeData: 'MaxRefundFeeData',
      applyReasonText: 'ApplyReasonText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeType: 'number',
      lmOrderId: 'string',
      refunderName: 'string',
      sellerAgreeMsg: 'string',
      returnGoodLogisticsStatus: 'number',
      disputeDesc: 'string',
      refunderAddress: 'string',
      returnGoodCount: 'number',
      disputeId: 'number',
      disputeEndTime: 'string',
      orderLogisticsStatus: 'number',
      bizClaimType: 'number',
      realRefundFee: 'number',
      refundFee: 'number',
      sellerRefuseAgreementMessage: 'string',
      disputeCreateTime: 'string',
      refunderTel: 'string',
      sellerRefuseReason: 'string',
      subLmOrderId: 'string',
      applyDisputeDesc: 'string',
      disputeStatus: 'number',
      refunderZipCode: 'string',
      maxRefundFeeData: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailMaxRefundFeeData,
      applyReasonText: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailApplyReasonText,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponseBodyModelStatementList extends $tea.Model {
  payeeAccountName?: string;
  payeeId?: string;
  payeeAccountNo?: string;
  createDate?: string;
  extInfo?: string;
  endTime?: string;
  startTime?: string;
  settleNo?: string;
  attributes?: string;
  settleStatus?: string;
  payeeName?: string;
  settleAmount?: string;
  payeeAccountId?: string;
  modifiedDate?: string;
  statusMessage?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      payeeAccountName: 'PayeeAccountName',
      payeeId: 'PayeeId',
      payeeAccountNo: 'PayeeAccountNo',
      createDate: 'CreateDate',
      extInfo: 'ExtInfo',
      endTime: 'EndTime',
      startTime: 'StartTime',
      settleNo: 'SettleNo',
      attributes: 'Attributes',
      settleStatus: 'SettleStatus',
      payeeName: 'PayeeName',
      settleAmount: 'SettleAmount',
      payeeAccountId: 'PayeeAccountId',
      modifiedDate: 'ModifiedDate',
      statusMessage: 'StatusMessage',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payeeAccountName: 'string',
      payeeId: 'string',
      payeeAccountNo: 'string',
      createDate: 'string',
      extInfo: 'string',
      endTime: 'string',
      startTime: 'string',
      settleNo: 'string',
      attributes: 'string',
      settleStatus: 'string',
      payeeName: 'string',
      settleAmount: 'string',
      payeeAccountId: 'string',
      modifiedDate: 'string',
      statusMessage: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponseBodyModel extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  statementList?: QueryStatementsResponseBodyModelStatementList[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      statementList: 'StatementList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      statementList: { 'type': 'array', 'itemType': QueryStatementsResponseBodyModelStatementList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModelsLmActivitySessionModel extends $tea.Model {
  subBizCode?: string;
  endDate?: string;
  displayDate?: string;
  description?: string;
  lmSessionId?: number;
  startDate?: string;
  bizId?: string;
  lmActivityId?: number;
  name?: string;
  extInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      subBizCode: 'SubBizCode',
      endDate: 'EndDate',
      displayDate: 'DisplayDate',
      description: 'Description',
      lmSessionId: 'LmSessionId',
      startDate: 'StartDate',
      bizId: 'BizId',
      lmActivityId: 'LmActivityId',
      name: 'Name',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subBizCode: 'string',
      endDate: 'string',
      displayDate: 'string',
      description: 'string',
      lmSessionId: 'number',
      startDate: 'string',
      bizId: 'string',
      lmActivityId: 'number',
      name: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModels extends $tea.Model {
  lmActivitySessionModel?: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModelsLmActivitySessionModel[];
  static names(): { [key: string]: string } {
    return {
      lmActivitySessionModel: 'LmActivitySessionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmActivitySessionModel: { 'type': 'array', 'itemType': QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModelsLmActivitySessionModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2Ext extends $tea.Model {
  endDate?: string;
  description?: string;
  startDate?: string;
  lmActivityId?: number;
  bizId?: string;
  activityPicUrl?: string;
  name?: string;
  lmActivitySessionModels?: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModels;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      description: 'Description',
      startDate: 'StartDate',
      lmActivityId: 'LmActivityId',
      bizId: 'BizId',
      activityPicUrl: 'ActivityPicUrl',
      name: 'Name',
      lmActivitySessionModels: 'LmActivitySessionModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      description: 'string',
      startDate: 'string',
      lmActivityId: 'number',
      bizId: 'string',
      activityPicUrl: 'string',
      name: 'string',
      lmActivitySessionModels: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponseBodyLmActivityModelExtList extends $tea.Model {
  lmActivityModelV2Ext?: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2Ext[];
  static names(): { [key: string]: string } {
    return {
      lmActivityModelV2Ext: 'LmActivityModelV2Ext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmActivityModelV2Ext: { 'type': 'array', 'itemType': QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2Ext },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessionsResponseBodyLmActivitySessionModelListLmActivitySessionModel extends $tea.Model {
  subBizCode?: string;
  displayDate?: string;
  endDate?: string;
  description?: string;
  lmSessionId?: number;
  bizId?: string;
  lmActivityId?: number;
  startDate?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      subBizCode: 'SubBizCode',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      description: 'Description',
      lmSessionId: 'LmSessionId',
      bizId: 'BizId',
      lmActivityId: 'LmActivityId',
      startDate: 'StartDate',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subBizCode: 'string',
      displayDate: 'string',
      endDate: 'string',
      description: 'string',
      lmSessionId: 'number',
      bizId: 'string',
      lmActivityId: 'number',
      startDate: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessionsResponseBodyLmActivitySessionModelList extends $tea.Model {
  lmActivitySessionModel?: QueryUnfinishedSessionsResponseBodyLmActivitySessionModelListLmActivitySessionModel[];
  static names(): { [key: string]: string } {
    return {
      lmActivitySessionModel: 'LmActivitySessionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmActivitySessionModel: { 'type': 'array', 'itemType': QueryUnfinishedSessionsResponseBodyLmActivitySessionModelListLmActivitySessionModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModelsLmActivitySessionModel extends $tea.Model {
  subBizCode?: string;
  endDate?: string;
  displayDate?: string;
  lmSessionId?: number;
  description?: string;
  startDate?: string;
  lmActivityId?: number;
  bizId?: string;
  name?: string;
  extInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      subBizCode: 'SubBizCode',
      endDate: 'EndDate',
      displayDate: 'DisplayDate',
      lmSessionId: 'LmSessionId',
      description: 'Description',
      startDate: 'StartDate',
      lmActivityId: 'LmActivityId',
      bizId: 'BizId',
      name: 'Name',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subBizCode: 'string',
      endDate: 'string',
      displayDate: 'string',
      lmSessionId: 'number',
      description: 'string',
      startDate: 'string',
      lmActivityId: 'number',
      bizId: 'string',
      name: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModels extends $tea.Model {
  lmActivitySessionModel?: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModelsLmActivitySessionModel[];
  static names(): { [key: string]: string } {
    return {
      lmActivitySessionModel: 'LmActivitySessionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmActivitySessionModel: { 'type': 'array', 'itemType': QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModelsLmActivitySessionModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelList extends $tea.Model {
  lmItemId?: string;
  itemId?: number;
  lmActivitySessionModels?: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModels;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      lmActivitySessionModels: 'LmActivitySessionModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      itemId: 'number',
      lmActivitySessionModels: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListList extends $tea.Model {
  lmItemActivitySessionModelList?: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelList[];
  static names(): { [key: string]: string } {
    return {
      lmItemActivitySessionModelList: 'LmItemActivitySessionModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemActivitySessionModelList: { 'type': 'array', 'itemType': QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesResponseBodyMoviesMovie extends $tea.Model {
  type?: string;
  movieVersion?: string;
  backgroundPicture?: string;
  remark?: string;
  openDay?: string;
  highlight?: string;
  movieTypeList?: string;
  language?: string;
  director?: string;
  openTime?: string;
  poster?: string;
  movieName?: string;
  description?: string;
  country?: string;
  duration?: number;
  movieNameEn?: string;
  leadingRole?: string;
  id?: number;
  trailerList?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      movieVersion: 'MovieVersion',
      backgroundPicture: 'BackgroundPicture',
      remark: 'Remark',
      openDay: 'OpenDay',
      highlight: 'Highlight',
      movieTypeList: 'MovieTypeList',
      language: 'Language',
      director: 'Director',
      openTime: 'OpenTime',
      poster: 'Poster',
      movieName: 'MovieName',
      description: 'Description',
      country: 'Country',
      duration: 'Duration',
      movieNameEn: 'MovieNameEn',
      leadingRole: 'LeadingRole',
      id: 'Id',
      trailerList: 'TrailerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      movieVersion: 'string',
      backgroundPicture: 'string',
      remark: 'string',
      openDay: 'string',
      highlight: 'string',
      movieTypeList: 'string',
      language: 'string',
      director: 'string',
      openTime: 'string',
      poster: 'string',
      movieName: 'string',
      description: 'string',
      country: 'string',
      duration: 'number',
      movieNameEn: 'string',
      leadingRole: 'string',
      id: 'number',
      trailerList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesResponseBodyMovies extends $tea.Model {
  movie?: QueryUpcomingMoviesResponseBodyMoviesMovie[];
  static names(): { [key: string]: string } {
    return {
      movie: 'Movie',
    };
  }

  static types(): { [key: string]: any } {
    return {
      movie: { 'type': 'array', 'itemType': QueryUpcomingMoviesResponseBodyMoviesMovie },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeResponseBodyQueryWithholdTradeResponse extends $tea.Model {
  settleStatus?: string;
  tradeStatus?: string;
  totalAmount?: string;
  tradeNo?: string;
  paymentDate?: string;
  outTradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      settleStatus: 'SettleStatus',
      tradeStatus: 'TradeStatus',
      totalAmount: 'TotalAmount',
      tradeNo: 'TradeNo',
      paymentDate: 'PaymentDate',
      outTradeNo: 'OutTradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settleStatus: 'string',
      tradeStatus: 'string',
      totalAmount: 'string',
      tradeNo: 'string',
      paymentDate: 'string',
      outTradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResponseBodyRefundResponse extends $tea.Model {
  fundChange?: string;
  gmtRefundPay?: string;
  tradeNo?: string;
  outTradeNo?: string;
  outRequestNo?: string;
  static names(): { [key: string]: string } {
    return {
      fundChange: 'FundChange',
      gmtRefundPay: 'GmtRefundPay',
      tradeNo: 'TradeNo',
      outTradeNo: 'OutTradeNo',
      outRequestNo: 'OutRequestNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundChange: 'string',
      gmtRefundPay: 'string',
      tradeNo: 'string',
      outTradeNo: 'string',
      outRequestNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatResponseBodyActionResult extends $tea.Model {
  returnCode?: string;
  returnValue?: string;
  returnMessage?: string;
  static names(): { [key: string]: string } {
    return {
      returnCode: 'ReturnCode',
      returnValue: 'ReturnValue',
      returnMessage: 'ReturnMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnCode: 'string',
      returnValue: 'string',
      returnMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponseBodyActionResult extends $tea.Model {
  returnCode?: string;
  returnValue?: string;
  returnMessage?: string;
  static names(): { [key: string]: string } {
    return {
      returnCode: 'ReturnCode',
      returnValue: 'ReturnValue',
      returnMessage: 'ReturnMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnCode: 'string',
      returnValue: 'string',
      returnMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelLmItemInfoList extends $tea.Model {
  tbShopName?: string;
  sellerId?: number;
  lmItemId?: string;
  message?: string;
  canSell?: boolean;
  cash?: number;
  itemId?: number;
  virtualItemType?: string;
  itemName?: string;
  actualPrice?: number;
  skuName?: string;
  skuId?: number;
  points?: number;
  itemUrl?: string;
  sellerNick?: string;
  quantity?: number;
  features?: { [key: string]: any };
  itemPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      tbShopName: 'TbShopName',
      sellerId: 'SellerId',
      lmItemId: 'LmItemId',
      message: 'Message',
      canSell: 'CanSell',
      cash: 'Cash',
      itemId: 'ItemId',
      virtualItemType: 'VirtualItemType',
      itemName: 'ItemName',
      actualPrice: 'ActualPrice',
      skuName: 'SkuName',
      skuId: 'SkuId',
      points: 'Points',
      itemUrl: 'ItemUrl',
      sellerNick: 'SellerNick',
      quantity: 'Quantity',
      features: 'Features',
      itemPicUrl: 'ItemPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tbShopName: 'string',
      sellerId: 'number',
      lmItemId: 'string',
      message: 'string',
      canSell: 'boolean',
      cash: 'number',
      itemId: 'number',
      virtualItemType: 'string',
      itemName: 'string',
      actualPrice: 'number',
      skuName: 'string',
      skuId: 'number',
      points: 'number',
      itemUrl: 'string',
      sellerNick: 'string',
      quantity: 'number',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemPicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelDeliveryInfoList extends $tea.Model {
  displayName?: string;
  postFee?: number;
  serviceType?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      postFee: 'PostFee',
      serviceType: 'ServiceType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      postFee: 'number',
      serviceType: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelAddressInfoList extends $tea.Model {
  divisionCode?: string;
  receiver?: string;
  addressDetail?: string;
  default?: boolean;
  addressId?: number;
  receiverPhone?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'DivisionCode',
      receiver: 'Receiver',
      addressDetail: 'AddressDetail',
      default: 'Default',
      addressId: 'AddressId',
      receiverPhone: 'ReceiverPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      receiver: 'string',
      addressDetail: 'string',
      default: 'boolean',
      addressId: 'number',
      receiverPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelInvoiceInfo extends $tea.Model {
  type?: string;
  desc?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      desc: 'Desc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      desc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModel extends $tea.Model {
  extInfo?: { [key: string]: any };
  buyerCurrentPoints?: number;
  lmItemInfoList?: RenderH5OrderResponseBodyModelLmItemInfoList[];
  deliveryInfoList?: RenderH5OrderResponseBodyModelDeliveryInfoList[];
  addressInfoList?: RenderH5OrderResponseBodyModelAddressInfoList[];
  invoiceInfo?: RenderH5OrderResponseBodyModelInvoiceInfo;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      buyerCurrentPoints: 'BuyerCurrentPoints',
      lmItemInfoList: 'LmItemInfoList',
      deliveryInfoList: 'DeliveryInfoList',
      addressInfoList: 'AddressInfoList',
      invoiceInfo: 'InvoiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      buyerCurrentPoints: 'number',
      lmItemInfoList: { 'type': 'array', 'itemType': RenderH5OrderResponseBodyModelLmItemInfoList },
      deliveryInfoList: { 'type': 'array', 'itemType': RenderH5OrderResponseBodyModelDeliveryInfoList },
      addressInfoList: { 'type': 'array', 'itemType': RenderH5OrderResponseBodyModelAddressInfoList },
      invoiceInfo: RenderH5OrderResponseBodyModelInvoiceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderRequestItemList extends $tea.Model {
  skuId?: number;
  lmItemId?: string;
  itemId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      skuId: 'SkuId',
      lmItemId: 'LmItemId',
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuId: 'number',
      lmItemId: 'string',
      itemId: 'number',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfosLmItemInfos extends $tea.Model {
  lmItemId?: string;
  sellerId?: number;
  message?: string;
  itemId?: number;
  canSell?: boolean;
  cash?: number;
  itemName?: string;
  actualPrice?: number;
  skuName?: string;
  skuId?: number;
  points?: number;
  sellerNick?: string;
  quantity?: number;
  itemPicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmItemId: 'LmItemId',
      sellerId: 'SellerId',
      message: 'Message',
      itemId: 'ItemId',
      canSell: 'CanSell',
      cash: 'Cash',
      itemName: 'ItemName',
      actualPrice: 'ActualPrice',
      skuName: 'SkuName',
      skuId: 'SkuId',
      points: 'Points',
      sellerNick: 'SellerNick',
      quantity: 'Quantity',
      itemPicUrl: 'ItemPicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemId: 'string',
      sellerId: 'number',
      message: 'string',
      itemId: 'number',
      canSell: 'boolean',
      cash: 'number',
      itemName: 'string',
      actualPrice: 'number',
      skuName: 'string',
      skuId: 'number',
      points: 'number',
      sellerNick: 'string',
      quantity: 'number',
      itemPicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfos extends $tea.Model {
  lmItemInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfosLmItemInfos[];
  static names(): { [key: string]: string } {
    return {
      lmItemInfos: 'LmItemInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmItemInfos: { 'type': 'array', 'itemType': RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfosLmItemInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfosDeliveryInfos extends $tea.Model {
  displayName?: string;
  postFee?: number;
  serviceType?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      postFee: 'PostFee',
      serviceType: 'ServiceType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      postFee: 'number',
      serviceType: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfos extends $tea.Model {
  deliveryInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfosDeliveryInfos[];
  static names(): { [key: string]: string } {
    return {
      deliveryInfos: 'DeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryInfos: { 'type': 'array', 'itemType': RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfosDeliveryInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfos extends $tea.Model {
  extInfo?: { [key: string]: any };
  lmItemInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfos;
  deliveryInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfos;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      lmItemInfos: 'LmItemInfos',
      deliveryInfos: 'DeliveryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemInfos: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfos,
      deliveryInfos: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfos extends $tea.Model {
  renderOrderInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfos[];
  static names(): { [key: string]: string } {
    return {
      renderOrderInfos: 'RenderOrderInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderOrderInfos: { 'type': 'array', 'itemType': RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModel extends $tea.Model {
  renderOrderInfos?: RenderOrderResponseBodyModelRenderOrderInfos;
  static names(): { [key: string]: string } {
    return {
      renderOrderInfos: 'RenderOrderInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderOrderInfos: RenderOrderResponseBodyModelRenderOrderInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayForPayUrlResponseBodyModel extends $tea.Model {
  frontUrl?: string;
  static names(): { [key: string]: string } {
    return {
      frontUrl: 'FrontUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatResponseBodyReservedSeat extends $tea.Model {
  status?: string;
  reservedTime?: number;
  applyKey?: string;
  defaultLockSecond?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      reservedTime: 'ReservedTime',
      applyKey: 'ApplyKey',
      defaultLockSecond: 'DefaultLockSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      reservedTime: 'number',
      applyKey: 'string',
      defaultLockSecond: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SettleOrderResponseBodyTradeOrderSettleResponse extends $tea.Model {
  tradeNo?: string;
  outRequestNo?: string;
  static names(): { [key: string]: string } {
    return {
      tradeNo: 'TradeNo',
      outRequestNo: 'OutRequestNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tradeNo: 'string',
      outRequestNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoResponseBodyModel extends $tea.Model {
  status?: string;
  url?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      url: 'Url',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      url: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsignWithholdAgreementResponseBodyWithholdSignResponse extends $tea.Model {
  outRequestNo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTaobaoAccountResponseBodyModel extends $tea.Model {
  match?: boolean;
  static names(): { [key: string]: string } {
    return {
      match: 'Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: 'boolean',
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
      'cn-hangzhou': "linkedmall.aliyuncs.com",
      'cn-shanghai': "linkedmall.aliyuncs.com",
      'ap-northeast-1': "linkedmall.aliyuncs.com",
      'ap-northeast-2-pop': "linkedmall.aliyuncs.com",
      'ap-south-1': "linkedmall.aliyuncs.com",
      'ap-southeast-1': "linkedmall.aliyuncs.com",
      'ap-southeast-2': "linkedmall.aliyuncs.com",
      'ap-southeast-3': "linkedmall.aliyuncs.com",
      'ap-southeast-5': "linkedmall.aliyuncs.com",
      'cn-beijing': "linkedmall.aliyuncs.com",
      'cn-beijing-finance-1': "linkedmall.aliyuncs.com",
      'cn-beijing-finance-pop': "linkedmall.aliyuncs.com",
      'cn-beijing-gov-1': "linkedmall.aliyuncs.com",
      'cn-beijing-nu16-b01': "linkedmall.aliyuncs.com",
      'cn-chengdu': "linkedmall.aliyuncs.com",
      'cn-edge-1': "linkedmall.aliyuncs.com",
      'cn-fujian': "linkedmall.aliyuncs.com",
      'cn-haidian-cm12-c01': "linkedmall.aliyuncs.com",
      'cn-hangzhou-bj-b01': "linkedmall.aliyuncs.com",
      'cn-hangzhou-finance': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "linkedmall.aliyuncs.com",
      'cn-hangzhou-test-306': "linkedmall.aliyuncs.com",
      'cn-hongkong': "linkedmall.aliyuncs.com",
      'cn-hongkong-finance-pop': "linkedmall.aliyuncs.com",
      'cn-huhehaote': "linkedmall.aliyuncs.com",
      'cn-north-2-gov-1': "linkedmall.aliyuncs.com",
      'cn-qingdao': "linkedmall.aliyuncs.com",
      'cn-qingdao-nebula': "linkedmall.aliyuncs.com",
      'cn-shanghai-et15-b01': "linkedmall.aliyuncs.com",
      'cn-shanghai-et2-b01': "linkedmall.aliyuncs.com",
      'cn-shanghai-finance-1': "linkedmall.aliyuncs.com",
      'cn-shanghai-inner': "linkedmall.aliyuncs.com",
      'cn-shanghai-internal-test-1': "linkedmall.aliyuncs.com",
      'cn-shenzhen': "linkedmall.aliyuncs.com",
      'cn-shenzhen-finance-1': "linkedmall.aliyuncs.com",
      'cn-shenzhen-inner': "linkedmall.aliyuncs.com",
      'cn-shenzhen-st4-d01': "linkedmall.aliyuncs.com",
      'cn-shenzhen-su18-b01': "linkedmall.aliyuncs.com",
      'cn-wuhan': "linkedmall.aliyuncs.com",
      'cn-yushanfang': "linkedmall.aliyuncs.com",
      'cn-zhangbei-na61-b01': "linkedmall.aliyuncs.com",
      'cn-zhangjiakou': "linkedmall.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "linkedmall.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "linkedmall.aliyuncs.com",
      'eu-central-1': "linkedmall.aliyuncs.com",
      'eu-west-1': "linkedmall.aliyuncs.com",
      'eu-west-1-oxs': "linkedmall.aliyuncs.com",
      'me-east-1': "linkedmall.aliyuncs.com",
      'rus-west-1-pop': "linkedmall.aliyuncs.com",
      'us-east-1': "linkedmall.aliyuncs.com",
      'us-west-1': "linkedmall.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkedmall", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAddressWithOptions(request: AddAddressRequest, runtime: $Util.RuntimeOptions): Promise<AddAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAddressResponse>(await this.doRPCRequest("AddAddress", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new AddAddressResponse({}));
  }

  async addAddress(request: AddAddressRequest): Promise<AddAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAddressWithOptions(request, runtime);
  }

  async addItemLimitRuleWithOptions(request: AddItemLimitRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddItemLimitRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddItemLimitRuleResponse>(await this.doRPCRequest("AddItemLimitRule", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new AddItemLimitRuleResponse({}));
  }

  async addItemLimitRule(request: AddItemLimitRuleRequest): Promise<AddItemLimitRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addItemLimitRuleWithOptions(request, runtime);
  }

  async addItemToSubBizsWithOptions(tmpReq: AddItemToSubBizsRequest, runtime: $Util.RuntimeOptions): Promise<AddItemToSubBizsResponse> {
    Util.validateModel(tmpReq);
    let request = new AddItemToSubBizsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subBizIds)) {
      request.subBizIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subBizIds, "SubBizIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddItemToSubBizsResponse>(await this.doRPCRequest("AddItemToSubBizs", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new AddItemToSubBizsResponse({}));
  }

  async addItemToSubBizs(request: AddItemToSubBizsRequest): Promise<AddItemToSubBizsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addItemToSubBizsWithOptions(request, runtime);
  }

  async addSupplierNewItemsWithOptions(request: AddSupplierNewItemsRequest, runtime: $Util.RuntimeOptions): Promise<AddSupplierNewItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddSupplierNewItemsResponse>(await this.doRPCRequest("AddSupplierNewItems", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new AddSupplierNewItemsResponse({}));
  }

  async addSupplierNewItems(request: AddSupplierNewItemsRequest): Promise<AddSupplierNewItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSupplierNewItemsWithOptions(request, runtime);
  }

  async applyRefundWithOptions(request: ApplyRefundRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRefundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ApplyRefundResponse>(await this.doRPCRequest("ApplyRefund", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ApplyRefundResponse({}));
  }

  async applyRefund(request: ApplyRefundRequest): Promise<ApplyRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRefundWithOptions(request, runtime);
  }

  async batchRegistAnonymousTbAccountWithOptions(request: BatchRegistAnonymousTbAccountRequest, runtime: $Util.RuntimeOptions): Promise<BatchRegistAnonymousTbAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchRegistAnonymousTbAccountResponse>(await this.doRPCRequest("BatchRegistAnonymousTbAccount", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new BatchRegistAnonymousTbAccountResponse({}));
  }

  async batchRegistAnonymousTbAccount(request: BatchRegistAnonymousTbAccountRequest): Promise<BatchRegistAnonymousTbAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRegistAnonymousTbAccountWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOrderResponse>(await this.doRPCRequest("CancelOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async cancelRefundWithOptions(request: CancelRefundRequest, runtime: $Util.RuntimeOptions): Promise<CancelRefundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelRefundResponse>(await this.doRPCRequest("CancelRefund", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CancelRefundResponse({}));
  }

  async cancelRefund(request: CancelRefundRequest): Promise<CancelRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRefundWithOptions(request, runtime);
  }

  async confirmDisburseWithOptions(request: ConfirmDisburseRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmDisburseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfirmDisburseResponse>(await this.doRPCRequest("ConfirmDisburse", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ConfirmDisburseResponse({}));
  }

  async confirmDisburse(request: ConfirmDisburseRequest): Promise<ConfirmDisburseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmDisburseWithOptions(request, runtime);
  }

  async createMovieTicketOrderWithOptions(request: CreateMovieTicketOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateMovieTicketOrderResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<CreateMovieTicketOrderResponse>(await this.doRPCRequest("CreateMovieTicketOrder", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new CreateMovieTicketOrderResponse({}));
  }

  async createMovieTicketOrder(request: CreateMovieTicketOrderRequest): Promise<CreateMovieTicketOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMovieTicketOrderWithOptions(request, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOrderResponse>(await this.doRPCRequest("CreateOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async createOrderV2WithOptions(request: CreateOrderV2Request, runtime: $Util.RuntimeOptions): Promise<CreateOrderV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOrderV2Response>(await this.doRPCRequest("CreateOrderV2", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOrderV2Response({}));
  }

  async createOrderV2(request: CreateOrderV2Request): Promise<CreateOrderV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderV2WithOptions(request, runtime);
  }

  async createPayUrlWithOptions(request: CreatePayUrlRequest, runtime: $Util.RuntimeOptions): Promise<CreatePayUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePayUrlResponse>(await this.doRPCRequest("CreatePayUrl", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePayUrlResponse({}));
  }

  async createPayUrl(request: CreatePayUrlRequest): Promise<CreatePayUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPayUrlWithOptions(request, runtime);
  }

  async createVirtualProductOrderWithOptions(request: CreateVirtualProductOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualProductOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVirtualProductOrderResponse>(await this.doRPCRequest("CreateVirtualProductOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVirtualProductOrderResponse({}));
  }

  async createVirtualProductOrder(request: CreateVirtualProductOrderRequest): Promise<CreateVirtualProductOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualProductOrderWithOptions(request, runtime);
  }

  async createWithholdTradeWithOptions(request: CreateWithholdTradeRequest, runtime: $Util.RuntimeOptions): Promise<CreateWithholdTradeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWithholdTradeResponse>(await this.doRPCRequest("CreateWithholdTrade", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWithholdTradeResponse({}));
  }

  async createWithholdTrade(request: CreateWithholdTradeRequest): Promise<CreateWithholdTradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWithholdTradeWithOptions(request, runtime);
  }

  async deleteBizItemsWithOptions(request: DeleteBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBizItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBizItemsResponse>(await this.doRPCRequest("DeleteBizItems", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBizItemsResponse({}));
  }

  async deleteBizItems(request: DeleteBizItemsRequest): Promise<DeleteBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBizItemsWithOptions(request, runtime);
  }

  async deleteItemLimitRuleWithOptions(request: DeleteItemLimitRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteItemLimitRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteItemLimitRuleResponse>(await this.doRPCRequest("DeleteItemLimitRule", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteItemLimitRuleResponse({}));
  }

  async deleteItemLimitRule(request: DeleteItemLimitRuleRequest): Promise<DeleteItemLimitRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteItemLimitRuleWithOptions(request, runtime);
  }

  async enableOrderWithOptions(request: EnableOrderRequest, runtime: $Util.RuntimeOptions): Promise<EnableOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableOrderResponse>(await this.doRPCRequest("EnableOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new EnableOrderResponse({}));
  }

  async enableOrder(request: EnableOrderRequest): Promise<EnableOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableOrderWithOptions(request, runtime);
  }

  async executeNodeWithOptions(request: ExecuteNodeRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteNodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteNodeResponse>(await this.doRPCRequest("ExecuteNode", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteNodeResponse({}));
  }

  async executeNode(request: ExecuteNodeRequest): Promise<ExecuteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeNodeWithOptions(request, runtime);
  }

  async getCategoryChainWithOptions(request: GetCategoryChainRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoryChainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCategoryChainResponse>(await this.doRPCRequest("GetCategoryChain", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetCategoryChainResponse({}));
  }

  async getCategoryChain(request: GetCategoryChainRequest): Promise<GetCategoryChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoryChainWithOptions(request, runtime);
  }

  async getCategoryListWithOptions(request: GetCategoryListRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoryListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCategoryListResponse>(await this.doRPCRequest("GetCategoryList", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetCategoryListResponse({}));
  }

  async getCategoryList(request: GetCategoryListRequest): Promise<GetCategoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoryListWithOptions(request, runtime);
  }

  async getCustomServiceUrlWithOptions(request: GetCustomServiceUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomServiceUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCustomServiceUrlResponse>(await this.doRPCRequest("GetCustomServiceUrl", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetCustomServiceUrlResponse({}));
  }

  async getCustomServiceUrl(request: GetCustomServiceUrlRequest): Promise<GetCustomServiceUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomServiceUrlWithOptions(request, runtime);
  }

  async getGuidePageWithOptions(request: GetGuidePageRequest, runtime: $Util.RuntimeOptions): Promise<GetGuidePageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetGuidePageResponse>(await this.doRPCRequest("GetGuidePage", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new GetGuidePageResponse({}));
  }

  async getGuidePage(request: GetGuidePageRequest): Promise<GetGuidePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGuidePageWithOptions(request, runtime);
  }

  async getItemPromotionWithOptions(request: GetItemPromotionRequest, runtime: $Util.RuntimeOptions): Promise<GetItemPromotionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetItemPromotionResponse>(await this.doRPCRequest("GetItemPromotion", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetItemPromotionResponse({}));
  }

  async getItemPromotion(request: GetItemPromotionRequest): Promise<GetItemPromotionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getItemPromotionWithOptions(request, runtime);
  }

  async getLoginPageWithOptions(request: GetLoginPageRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLoginPageResponse>(await this.doRPCRequest("GetLoginPage", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetLoginPageResponse({}));
  }

  async getLoginPage(request: GetLoginPageRequest): Promise<GetLoginPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginPageWithOptions(request, runtime);
  }

  async getSwitchUrlWithOptions(request: GetSwitchUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetSwitchUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSwitchUrlResponse>(await this.doRPCRequest("GetSwitchUrl", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetSwitchUrlResponse({}));
  }

  async getSwitchUrl(request: GetSwitchUrlRequest): Promise<GetSwitchUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSwitchUrlWithOptions(request, runtime);
  }

  async getUserInfoWithOptions(request: GetUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserInfoResponse>(await this.doRPCRequest("GetUserInfo", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserInfoResponse({}));
  }

  async getUserInfo(request: GetUserInfoRequest): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserInfoWithOptions(request, runtime);
  }

  async getWithholdSignPageUrlWithOptions(request: GetWithholdSignPageUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetWithholdSignPageUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWithholdSignPageUrlResponse>(await this.doRPCRequest("GetWithholdSignPageUrl", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new GetWithholdSignPageUrlResponse({}));
  }

  async getWithholdSignPageUrl(request: GetWithholdSignPageUrlRequest): Promise<GetWithholdSignPageUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWithholdSignPageUrlWithOptions(request, runtime);
  }

  async initApplyRefundWithOptions(request: InitApplyRefundRequest, runtime: $Util.RuntimeOptions): Promise<InitApplyRefundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitApplyRefundResponse>(await this.doRPCRequest("InitApplyRefund", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new InitApplyRefundResponse({}));
  }

  async initApplyRefund(request: InitApplyRefundRequest): Promise<InitApplyRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initApplyRefundWithOptions(request, runtime);
  }

  async listItemActivitiesWithOptions(tmpReq: ListItemActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListItemActivitiesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListItemActivitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListItemActivitiesResponse>(await this.doRPCRequest("ListItemActivities", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ListItemActivitiesResponse({}));
  }

  async listItemActivities(request: ListItemActivitiesRequest): Promise<ListItemActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listItemActivitiesWithOptions(request, runtime);
  }

  async modifyBasicAndBizItemsWithOptions(request: ModifyBasicAndBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBasicAndBizItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBasicAndBizItemsResponse>(await this.doRPCRequest("ModifyBasicAndBizItems", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBasicAndBizItemsResponse({}));
  }

  async modifyBasicAndBizItems(request: ModifyBasicAndBizItemsRequest): Promise<ModifyBasicAndBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBasicAndBizItemsWithOptions(request, runtime);
  }

  async modifyBizItemsWithOptions(request: ModifyBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBizItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBizItemsResponse>(await this.doRPCRequest("ModifyBizItems", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBizItemsResponse({}));
  }

  async modifyBizItems(request: ModifyBizItemsRequest): Promise<ModifyBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBizItemsWithOptions(request, runtime);
  }

  async modifyItemLimitRuleWithOptions(request: ModifyItemLimitRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyItemLimitRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyItemLimitRuleResponse>(await this.doRPCRequest("ModifyItemLimitRule", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyItemLimitRuleResponse({}));
  }

  async modifyItemLimitRule(request: ModifyItemLimitRuleRequest): Promise<ModifyItemLimitRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyItemLimitRuleWithOptions(request, runtime);
  }

  async notifyPayOrderStatusWithOptions(request: NotifyPayOrderStatusRequest, runtime: $Util.RuntimeOptions): Promise<NotifyPayOrderStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<NotifyPayOrderStatusResponse>(await this.doRPCRequest("NotifyPayOrderStatus", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new NotifyPayOrderStatusResponse({}));
  }

  async notifyPayOrderStatus(request: NotifyPayOrderStatusRequest): Promise<NotifyPayOrderStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyPayOrderStatusWithOptions(request, runtime);
  }

  async notifyWithholdFundWithOptions(request: NotifyWithholdFundRequest, runtime: $Util.RuntimeOptions): Promise<NotifyWithholdFundResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<NotifyWithholdFundResponse>(await this.doRPCRequest("NotifyWithholdFund", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new NotifyWithholdFundResponse({}));
  }

  async notifyWithholdFund(request: NotifyWithholdFundRequest): Promise<NotifyWithholdFundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyWithholdFundWithOptions(request, runtime);
  }

  async queryActivityItemsWithOptions(request: QueryActivityItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryActivityItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryActivityItemsResponse>(await this.doRPCRequest("QueryActivityItems", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryActivityItemsResponse({}));
  }

  async queryActivityItems(request: QueryActivityItemsRequest): Promise<QueryActivityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryActivityItemsWithOptions(request, runtime);
  }

  async queryAddressWithOptions(request: QueryAddressRequest, runtime: $Util.RuntimeOptions): Promise<QueryAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAddressResponse>(await this.doRPCRequest("QueryAddress", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAddressResponse({}));
  }

  async queryAddress(request: QueryAddressRequest): Promise<QueryAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAddressWithOptions(request, runtime);
  }

  async queryAddressDetailWithOptions(request: QueryAddressDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryAddressDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAddressDetailResponse>(await this.doRPCRequest("QueryAddressDetail", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAddressDetailResponse({}));
  }

  async queryAddressDetail(request: QueryAddressDetailRequest): Promise<QueryAddressDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAddressDetailWithOptions(request, runtime);
  }

  async queryAddressListWithOptions(request: QueryAddressListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAddressListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAddressListResponse>(await this.doRPCRequest("QueryAddressList", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAddressListResponse({}));
  }

  async queryAddressList(request: QueryAddressListRequest): Promise<QueryAddressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAddressListWithOptions(request, runtime);
  }

  async queryAdvertisementSettleInfoWithOptions(request: QueryAdvertisementSettleInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryAdvertisementSettleInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAdvertisementSettleInfoResponse>(await this.doRPCRequest("QueryAdvertisementSettleInfo", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAdvertisementSettleInfoResponse({}));
  }

  async queryAdvertisementSettleInfo(request: QueryAdvertisementSettleInfoRequest): Promise<QueryAdvertisementSettleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAdvertisementSettleInfoWithOptions(request, runtime);
  }

  async queryAgreementWithOptions(request: QueryAgreementRequest, runtime: $Util.RuntimeOptions): Promise<QueryAgreementResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAgreementResponse>(await this.doRPCRequest("QueryAgreement", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAgreementResponse({}));
  }

  async queryAgreement(request: QueryAgreementRequest): Promise<QueryAgreementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAgreementWithOptions(request, runtime);
  }

  async queryAllCinemasWithOptions(request: QueryAllCinemasRequest, runtime: $Util.RuntimeOptions): Promise<QueryAllCinemasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAllCinemasResponse>(await this.doRPCRequest("QueryAllCinemas", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAllCinemasResponse({}));
  }

  async queryAllCinemas(request: QueryAllCinemasRequest): Promise<QueryAllCinemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAllCinemasWithOptions(request, runtime);
  }

  async queryAllCitiesWithOptions(tmpReq: QueryAllCitiesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAllCitiesResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryAllCitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extJson)) {
      request.extJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extJson, "ExtJson", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAllCitiesResponse>(await this.doRPCRequest("QueryAllCities", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAllCitiesResponse({}));
  }

  async queryAllCities(request: QueryAllCitiesRequest): Promise<QueryAllCitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAllCitiesWithOptions(request, runtime);
  }

  async queryBatchRegistAnonymousTbAccountResultWithOptions(request: QueryBatchRegistAnonymousTbAccountResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryBatchRegistAnonymousTbAccountResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBatchRegistAnonymousTbAccountResultResponse>(await this.doRPCRequest("QueryBatchRegistAnonymousTbAccountResult", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBatchRegistAnonymousTbAccountResultResponse({}));
  }

  async queryBatchRegistAnonymousTbAccountResult(request: QueryBatchRegistAnonymousTbAccountResultRequest): Promise<QueryBatchRegistAnonymousTbAccountResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBatchRegistAnonymousTbAccountResultWithOptions(request, runtime);
  }

  async queryBestSession4ItemsWithOptions(tmpReq: QueryBestSession4ItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBestSession4ItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBestSession4ItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBestSession4ItemsResponse>(await this.doRPCRequest("QueryBestSession4Items", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBestSession4ItemsResponse({}));
  }

  async queryBestSession4Items(request: QueryBestSession4ItemsRequest): Promise<QueryBestSession4ItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBestSession4ItemsWithOptions(request, runtime);
  }

  async queryBizItemListWithOptions(tmpReq: QueryBizItemListRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemListResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBizItemListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBizItemListResponse>(await this.doRPCRequest("QueryBizItemList", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBizItemListResponse({}));
  }

  async queryBizItemList(request: QueryBizItemListRequest): Promise<QueryBizItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemListWithOptions(request, runtime);
  }

  async queryBizItemsWithOptions(request: QueryBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryBizItemsResponse>(await this.doRPCRequest("QueryBizItems", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryBizItemsResponse({}));
  }

  async queryBizItems(request: QueryBizItemsRequest): Promise<QueryBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemsWithOptions(request, runtime);
  }

  async queryBizItemsWithActivityWithOptions(tmpReq: QueryBizItemsWithActivityRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemsWithActivityResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBizItemsWithActivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryBizItemsWithActivityResponse>(await this.doRPCRequest("QueryBizItemsWithActivity", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new QueryBizItemsWithActivityResponse({}));
  }

  async queryBizItemsWithActivity(request: QueryBizItemsWithActivityRequest): Promise<QueryBizItemsWithActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemsWithActivityWithOptions(request, runtime);
  }

  async queryGuideItemGroupWithOptions(request: QueryGuideItemGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryGuideItemGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryGuideItemGroupResponse>(await this.doRPCRequest("QueryGuideItemGroup", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryGuideItemGroupResponse({}));
  }

  async queryGuideItemGroup(request: QueryGuideItemGroupRequest): Promise<QueryGuideItemGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGuideItemGroupWithOptions(request, runtime);
  }

  async queryGuideItemGroupWithOutInventoryWithOptions(request: QueryGuideItemGroupWithOutInventoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryGuideItemGroupWithOutInventoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryGuideItemGroupWithOutInventoryResponse>(await this.doRPCRequest("QueryGuideItemGroupWithOutInventory", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new QueryGuideItemGroupWithOutInventoryResponse({}));
  }

  async queryGuideItemGroupWithOutInventory(request: QueryGuideItemGroupWithOutInventoryRequest): Promise<QueryGuideItemGroupWithOutInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGuideItemGroupWithOutInventoryWithOptions(request, runtime);
  }

  async queryHotMoviesWithOptions(request: QueryHotMoviesRequest, runtime: $Util.RuntimeOptions): Promise<QueryHotMoviesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryHotMoviesResponse>(await this.doRPCRequest("QueryHotMovies", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryHotMoviesResponse({}));
  }

  async queryHotMovies(request: QueryHotMoviesRequest): Promise<QueryHotMoviesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryHotMoviesWithOptions(request, runtime);
  }

  async queryInventoryOfItemsInBizItemGroupWithOptions(tmpReq: QueryInventoryOfItemsInBizItemGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryInventoryOfItemsInBizItemGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryInventoryOfItemsInBizItemGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryInventoryOfItemsInBizItemGroupResponse>(await this.doRPCRequest("QueryInventoryOfItemsInBizItemGroup", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new QueryInventoryOfItemsInBizItemGroupResponse({}));
  }

  async queryInventoryOfItemsInBizItemGroup(request: QueryInventoryOfItemsInBizItemGroupRequest): Promise<QueryInventoryOfItemsInBizItemGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInventoryOfItemsInBizItemGroupWithOptions(request, runtime);
  }

  async queryItemDetailWithOptions(request: QueryItemDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryItemDetailResponse>(await this.doRPCRequest("QueryItemDetail", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryItemDetailResponse({}));
  }

  async queryItemDetail(request: QueryItemDetailRequest): Promise<QueryItemDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemDetailWithOptions(request, runtime);
  }

  async queryItemDetailInnerWithOptions(request: QueryItemDetailInnerRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailInnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryItemDetailInnerResponse>(await this.doRPCRequest("QueryItemDetailInner", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryItemDetailInnerResponse({}));
  }

  async queryItemDetailInner(request: QueryItemDetailInnerRequest): Promise<QueryItemDetailInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemDetailInnerWithOptions(request, runtime);
  }

  async queryItemInSubBizsWithOptions(tmpReq: QueryItemInSubBizsRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemInSubBizsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryItemInSubBizsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subBizIds)) {
      request.subBizIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subBizIds, "SubBizIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryItemInSubBizsResponse>(await this.doRPCRequest("QueryItemInSubBizs", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new QueryItemInSubBizsResponse({}));
  }

  async queryItemInSubBizs(request: QueryItemInSubBizsRequest): Promise<QueryItemInSubBizsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemInSubBizsWithOptions(request, runtime);
  }

  async queryItemInventoryWithOptions(request: QueryItemInventoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemInventoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryItemInventoryResponse>(await this.doRPCRequest("QueryItemInventory", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryItemInventoryResponse({}));
  }

  async queryItemInventory(request: QueryItemInventoryRequest): Promise<QueryItemInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemInventoryWithOptions(request, runtime);
  }

  async queryLogisticsWithOptions(request: QueryLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryLogisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryLogisticsResponse>(await this.doRPCRequest("QueryLogistics", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryLogisticsResponse({}));
  }

  async queryLogistics(request: QueryLogisticsRequest): Promise<QueryLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLogisticsWithOptions(request, runtime);
  }

  async queryMediaSettleInfoWithOptions(request: QueryMediaSettleInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaSettleInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMediaSettleInfoResponse>(await this.doRPCRequest("QueryMediaSettleInfo", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMediaSettleInfoResponse({}));
  }

  async queryMediaSettleInfo(request: QueryMediaSettleInfoRequest): Promise<QueryMediaSettleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaSettleInfoWithOptions(request, runtime);
  }

  async queryMessagesWithOptions(request: QueryMessagesRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMessagesResponse>(await this.doRPCRequest("QueryMessages", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMessagesResponse({}));
  }

  async queryMessages(request: QueryMessagesRequest): Promise<QueryMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessagesWithOptions(request, runtime);
  }

  async queryMovieCommentsWithOptions(request: QueryMovieCommentsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieCommentsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMovieCommentsResponse>(await this.doRPCRequest("QueryMovieComments", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMovieCommentsResponse({}));
  }

  async queryMovieComments(request: QueryMovieCommentsRequest): Promise<QueryMovieCommentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieCommentsWithOptions(request, runtime);
  }

  async queryMovieSchedulesWithOptions(request: QueryMovieSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieSchedulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMovieSchedulesResponse>(await this.doRPCRequest("QueryMovieSchedules", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMovieSchedulesResponse({}));
  }

  async queryMovieSchedules(request: QueryMovieSchedulesRequest): Promise<QueryMovieSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieSchedulesWithOptions(request, runtime);
  }

  async queryMovieSeatsWithOptions(request: QueryMovieSeatsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieSeatsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryMovieSeatsResponse>(await this.doRPCRequest("QueryMovieSeats", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryMovieSeatsResponse({}));
  }

  async queryMovieSeats(request: QueryMovieSeatsRequest): Promise<QueryMovieSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieSeatsWithOptions(request, runtime);
  }

  async queryMovieTicketsWithOptions(request: QueryMovieTicketsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieTicketsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryMovieTicketsResponse>(await this.doRPCRequest("QueryMovieTickets", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new QueryMovieTicketsResponse({}));
  }

  async queryMovieTickets(request: QueryMovieTicketsRequest): Promise<QueryMovieTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieTicketsWithOptions(request, runtime);
  }

  async queryOrderAndPaymentListWithOptions(request: QueryOrderAndPaymentListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderAndPaymentListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderAndPaymentListResponse>(await this.doRPCRequest("QueryOrderAndPaymentList", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderAndPaymentListResponse({}));
  }

  async queryOrderAndPaymentList(request: QueryOrderAndPaymentListRequest): Promise<QueryOrderAndPaymentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderAndPaymentListWithOptions(request, runtime);
  }

  async queryOrderCommissionRateWithOptions(request: QueryOrderCommissionRateRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderCommissionRateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderCommissionRateResponse>(await this.doRPCRequest("QueryOrderCommissionRate", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderCommissionRateResponse({}));
  }

  async queryOrderCommissionRate(request: QueryOrderCommissionRateRequest): Promise<QueryOrderCommissionRateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderCommissionRateWithOptions(request, runtime);
  }

  async queryOrderDetailInnerWithOptions(request: QueryOrderDetailInnerRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderDetailInnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderDetailInnerResponse>(await this.doRPCRequest("QueryOrderDetailInner", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderDetailInnerResponse({}));
  }

  async queryOrderDetailInner(request: QueryOrderDetailInnerRequest): Promise<QueryOrderDetailInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderDetailInnerWithOptions(request, runtime);
  }

  async queryOrderIdByPayIdWithOptions(request: QueryOrderIdByPayIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderIdByPayIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderIdByPayIdResponse>(await this.doRPCRequest("QueryOrderIdByPayId", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderIdByPayIdResponse({}));
  }

  async queryOrderIdByPayId(request: QueryOrderIdByPayIdRequest): Promise<QueryOrderIdByPayIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderIdByPayIdWithOptions(request, runtime);
  }

  async queryOrderInfoAfterSaleWithOptions(request: QueryOrderInfoAfterSaleRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderInfoAfterSaleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<QueryOrderInfoAfterSaleResponse>(await this.doRPCRequest("QueryOrderInfoAfterSale", "2018-01-16", "HTTPS", "GET", "AK", "json", req, runtime), new QueryOrderInfoAfterSaleResponse({}));
  }

  async queryOrderInfoAfterSale(request: QueryOrderInfoAfterSaleRequest): Promise<QueryOrderInfoAfterSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderInfoAfterSaleWithOptions(request, runtime);
  }

  async queryOrderItemInfoByPaymentIdForAiZhanYouWithOptions(request: QueryOrderItemInfoByPaymentIdForAiZhanYouRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderItemInfoByPaymentIdForAiZhanYouResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderItemInfoByPaymentIdForAiZhanYouResponse>(await this.doRPCRequest("QueryOrderItemInfoByPaymentIdForAiZhanYou", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderItemInfoByPaymentIdForAiZhanYouResponse({}));
  }

  async queryOrderItemInfoByPaymentIdForAiZhanYou(request: QueryOrderItemInfoByPaymentIdForAiZhanYouRequest): Promise<QueryOrderItemInfoByPaymentIdForAiZhanYouResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderItemInfoByPaymentIdForAiZhanYouWithOptions(request, runtime);
  }

  async queryOrderListWithOptions(request: QueryOrderListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderListResponse>(await this.doRPCRequest("QueryOrderList", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderListResponse({}));
  }

  async queryOrderList(request: QueryOrderListRequest): Promise<QueryOrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderListWithOptions(request, runtime);
  }

  async queryOrderLogisticsWithOptions(request: QueryOrderLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderLogisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryOrderLogisticsResponse>(await this.doRPCRequest("QueryOrderLogistics", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryOrderLogisticsResponse({}));
  }

  async queryOrderLogistics(request: QueryOrderLogisticsRequest): Promise<QueryOrderLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderLogisticsWithOptions(request, runtime);
  }

  async queryRefundApplicationDetailWithOptions(request: QueryRefundApplicationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRefundApplicationDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryRefundApplicationDetailResponse>(await this.doRPCRequest("QueryRefundApplicationDetail", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryRefundApplicationDetailResponse({}));
  }

  async queryRefundApplicationDetail(request: QueryRefundApplicationDetailRequest): Promise<QueryRefundApplicationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRefundApplicationDetailWithOptions(request, runtime);
  }

  async queryStatementsWithOptions(request: QueryStatementsRequest, runtime: $Util.RuntimeOptions): Promise<QueryStatementsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryStatementsResponse>(await this.doRPCRequest("QueryStatements", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryStatementsResponse({}));
  }

  async queryStatements(request: QueryStatementsRequest): Promise<QueryStatementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStatementsWithOptions(request, runtime);
  }

  async queryUnfinishedActivitiesWithOptions(request: QueryUnfinishedActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<QueryUnfinishedActivitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryUnfinishedActivitiesResponse>(await this.doRPCRequest("QueryUnfinishedActivities", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryUnfinishedActivitiesResponse({}));
  }

  async queryUnfinishedActivities(request: QueryUnfinishedActivitiesRequest): Promise<QueryUnfinishedActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUnfinishedActivitiesWithOptions(request, runtime);
  }

  async queryUnfinishedSessionsWithOptions(request: QueryUnfinishedSessionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryUnfinishedSessionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryUnfinishedSessionsResponse>(await this.doRPCRequest("QueryUnfinishedSessions", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryUnfinishedSessionsResponse({}));
  }

  async queryUnfinishedSessions(request: QueryUnfinishedSessionsRequest): Promise<QueryUnfinishedSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUnfinishedSessionsWithOptions(request, runtime);
  }

  async queryUnfinishedSessions4ItemsWithOptions(tmpReq: QueryUnfinishedSessions4ItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryUnfinishedSessions4ItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryUnfinishedSessions4ItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryUnfinishedSessions4ItemsResponse>(await this.doRPCRequest("QueryUnfinishedSessions4Items", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryUnfinishedSessions4ItemsResponse({}));
  }

  async queryUnfinishedSessions4Items(request: QueryUnfinishedSessions4ItemsRequest): Promise<QueryUnfinishedSessions4ItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUnfinishedSessions4ItemsWithOptions(request, runtime);
  }

  async queryUpcomingMoviesWithOptions(tmpReq: QueryUpcomingMoviesRequest, runtime: $Util.RuntimeOptions): Promise<QueryUpcomingMoviesResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryUpcomingMoviesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extJson)) {
      request.extJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extJson, "ExtJson", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryUpcomingMoviesResponse>(await this.doRPCRequest("QueryUpcomingMovies", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryUpcomingMoviesResponse({}));
  }

  async queryUpcomingMovies(request: QueryUpcomingMoviesRequest): Promise<QueryUpcomingMoviesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUpcomingMoviesWithOptions(request, runtime);
  }

  async queryWithholdTradeWithOptions(request: QueryWithholdTradeRequest, runtime: $Util.RuntimeOptions): Promise<QueryWithholdTradeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryWithholdTradeResponse>(await this.doRPCRequest("QueryWithholdTrade", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new QueryWithholdTradeResponse({}));
  }

  async queryWithholdTrade(request: QueryWithholdTradeRequest): Promise<QueryWithholdTradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWithholdTradeWithOptions(request, runtime);
  }

  async refundOrderWithOptions(request: RefundOrderRequest, runtime: $Util.RuntimeOptions): Promise<RefundOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefundOrderResponse>(await this.doRPCRequest("RefundOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RefundOrderResponse({}));
  }

  async refundOrder(request: RefundOrderRequest): Promise<RefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundOrderWithOptions(request, runtime);
  }

  async refundPointWithOptions(request: RefundPointRequest, runtime: $Util.RuntimeOptions): Promise<RefundPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefundPointResponse>(await this.doRPCRequest("RefundPoint", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RefundPointResponse({}));
  }

  async refundPoint(request: RefundPointRequest): Promise<RefundPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundPointWithOptions(request, runtime);
  }

  async refuseMerchantSyncTaskWithOptions(request: RefuseMerchantSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<RefuseMerchantSyncTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefuseMerchantSyncTaskResponse>(await this.doRPCRequest("RefuseMerchantSyncTask", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RefuseMerchantSyncTaskResponse({}));
  }

  async refuseMerchantSyncTask(request: RefuseMerchantSyncTaskRequest): Promise<RefuseMerchantSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseMerchantSyncTaskWithOptions(request, runtime);
  }

  async registAnonymousTbAccountWithOptions(request: RegistAnonymousTbAccountRequest, runtime: $Util.RuntimeOptions): Promise<RegistAnonymousTbAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RegistAnonymousTbAccountResponse>(await this.doRPCRequest("RegistAnonymousTbAccount", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RegistAnonymousTbAccountResponse({}));
  }

  async registAnonymousTbAccount(request: RegistAnonymousTbAccountRequest): Promise<RegistAnonymousTbAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registAnonymousTbAccountWithOptions(request, runtime);
  }

  async releaseMovieSeatWithOptions(request: ReleaseMovieSeatRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseMovieSeatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseMovieSeatResponse>(await this.doRPCRequest("ReleaseMovieSeat", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseMovieSeatResponse({}));
  }

  async releaseMovieSeat(request: ReleaseMovieSeatRequest): Promise<ReleaseMovieSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseMovieSeatWithOptions(request, runtime);
  }

  async removeAddressWithOptions(request: RemoveAddressRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveAddressResponse>(await this.doRPCRequest("RemoveAddress", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveAddressResponse({}));
  }

  async removeAddress(request: RemoveAddressRequest): Promise<RemoveAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAddressWithOptions(request, runtime);
  }

  async removeMessagesWithOptions(request: RemoveMessagesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveMessagesResponse>(await this.doRPCRequest("RemoveMessages", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveMessagesResponse({}));
  }

  async removeMessages(request: RemoveMessagesRequest): Promise<RemoveMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMessagesWithOptions(request, runtime);
  }

  async renderH5OrderWithOptions(request: RenderH5OrderRequest, runtime: $Util.RuntimeOptions): Promise<RenderH5OrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenderH5OrderResponse>(await this.doRPCRequest("RenderH5Order", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RenderH5OrderResponse({}));
  }

  async renderH5Order(request: RenderH5OrderRequest): Promise<RenderH5OrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderH5OrderWithOptions(request, runtime);
  }

  async renderOrderWithOptions(request: RenderOrderRequest, runtime: $Util.RuntimeOptions): Promise<RenderOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenderOrderResponse>(await this.doRPCRequest("RenderOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RenderOrderResponse({}));
  }

  async renderOrder(request: RenderOrderRequest): Promise<RenderOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderOrderWithOptions(request, runtime);
  }

  async repayForPayUrlWithOptions(request: RepayForPayUrlRequest, runtime: $Util.RuntimeOptions): Promise<RepayForPayUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RepayForPayUrlResponse>(await this.doRPCRequest("RepayForPayUrl", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RepayForPayUrlResponse({}));
  }

  async repayForPayUrl(request: RepayForPayUrlRequest): Promise<RepayForPayUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.repayForPayUrlWithOptions(request, runtime);
  }

  async repayOrderWithOptions(request: RepayOrderRequest, runtime: $Util.RuntimeOptions): Promise<RepayOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RepayOrderResponse>(await this.doRPCRequest("RepayOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new RepayOrderResponse({}));
  }

  async repayOrder(request: RepayOrderRequest): Promise<RepayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.repayOrderWithOptions(request, runtime);
  }

  async reserveMovieSeatWithOptions(request: ReserveMovieSeatRequest, runtime: $Util.RuntimeOptions): Promise<ReserveMovieSeatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReserveMovieSeatResponse>(await this.doRPCRequest("ReserveMovieSeat", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ReserveMovieSeatResponse({}));
  }

  async reserveMovieSeat(request: ReserveMovieSeatRequest): Promise<ReserveMovieSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reserveMovieSeatWithOptions(request, runtime);
  }

  async settleOrderWithOptions(request: SettleOrderRequest, runtime: $Util.RuntimeOptions): Promise<SettleOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SettleOrderResponse>(await this.doRPCRequest("SettleOrder", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new SettleOrderResponse({}));
  }

  async settleOrder(request: SettleOrderRequest): Promise<SettleOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.settleOrderWithOptions(request, runtime);
  }

  async submitReturnGoodLogisticsWithOptions(request: SubmitReturnGoodLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReturnGoodLogisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitReturnGoodLogisticsResponse>(await this.doRPCRequest("SubmitReturnGoodLogistics", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitReturnGoodLogisticsResponse({}));
  }

  async submitReturnGoodLogistics(request: SubmitReturnGoodLogisticsRequest): Promise<SubmitReturnGoodLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReturnGoodLogisticsWithOptions(request, runtime);
  }

  async syncMerchantInfoWithOptions(request: SyncMerchantInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncMerchantInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SyncMerchantInfoResponse>(await this.doRPCRequest("SyncMerchantInfo", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new SyncMerchantInfoResponse({}));
  }

  async syncMerchantInfo(request: SyncMerchantInfoRequest): Promise<SyncMerchantInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncMerchantInfoWithOptions(request, runtime);
  }

  async unsignWithholdAgreementWithOptions(request: UnsignWithholdAgreementRequest, runtime: $Util.RuntimeOptions): Promise<UnsignWithholdAgreementResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnsignWithholdAgreementResponse>(await this.doRPCRequest("UnsignWithholdAgreement", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new UnsignWithholdAgreementResponse({}));
  }

  async unsignWithholdAgreement(request: UnsignWithholdAgreementRequest): Promise<UnsignWithholdAgreementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsignWithholdAgreementWithOptions(request, runtime);
  }

  async updateAddressWithOptions(request: UpdateAddressRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAddressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAddressResponse>(await this.doRPCRequest("UpdateAddress", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAddressResponse({}));
  }

  async updateAddress(request: UpdateAddressRequest): Promise<UpdateAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAddressWithOptions(request, runtime);
  }

  async validateTaobaoAccountWithOptions(request: ValidateTaobaoAccountRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTaobaoAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateTaobaoAccountResponse>(await this.doRPCRequest("ValidateTaobaoAccount", "2018-01-16", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateTaobaoAccountResponse({}));
  }

  async validateTaobaoAccount(request: ValidateTaobaoAccountRequest): Promise<ValidateTaobaoAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTaobaoAccountWithOptions(request, runtime);
  }

}
