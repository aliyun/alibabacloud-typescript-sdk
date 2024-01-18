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
  addressInfo?: string;
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: 'string',
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressResponseBody extends $tea.Model {
  addressId?: number;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddAddressResponseBody;
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
      body: AddAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemLimitRuleRequest extends $tea.Model {
  beginTime?: number;
  bizId?: string;
  endTime?: number;
  itemId?: number;
  lmActivityId?: number;
  lmItemId?: string;
  ruleType?: number;
  subBizCode?: string;
  upperNum?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      bizId: 'BizId',
      endTime: 'EndTime',
      itemId: 'ItemId',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      ruleType: 'RuleType',
      subBizCode: 'SubBizCode',
      upperNum: 'UpperNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      bizId: 'string',
      endTime: 'number',
      itemId: 'number',
      lmActivityId: 'number',
      lmItemId: 'string',
      ruleType: 'number',
      subBizCode: 'string',
      upperNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddItemLimitRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: number;
  requestId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'number',
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
  statusCode: number;
  body: AddItemLimitRuleResponseBody;
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
  statusCode: number;
  body: AddItemToSubBizsResponseBody;
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
  statusCode: number;
  body: AddSupplierNewItemsResponseBody;
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
      body: AddSupplierNewItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundRequest extends $tea.Model {
  accountType?: string;
  applyReasonTextId?: number;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  bizId?: string;
  bizUid?: string;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureList?: ApplyRefundRequestLeavePictureList[];
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      applyReasonTextId: 'ApplyReasonTextId',
      applyRefundCount: 'ApplyRefundCount',
      applyRefundFee: 'ApplyRefundFee',
      bizClaimType: 'BizClaimType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      goodsStatus: 'GoodsStatus',
      leaveMessage: 'LeaveMessage',
      leavePictureList: 'LeavePictureList',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      applyReasonTextId: 'number',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      bizId: 'string',
      bizUid: 'string',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureList: { 'type': 'array', 'itemType': ApplyRefundRequestLeavePictureList },
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  refundApplicationData?: ApplyRefundResponseBodyRefundApplicationData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      refundApplicationData: 'RefundApplicationData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      refundApplicationData: ApplyRefundResponseBodyRefundApplicationData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyRefundResponseBody;
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
      body: ApplyRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  goodsStatus?: number;
  message?: string;
  proofs?: ApplyRefundWithDesignatedTbUidRequestProofs[];
  reasonId?: number;
  refundCode?: number;
  refundCount?: number;
  refundFee?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      goodsStatus: 'GoodsStatus',
      message: 'Message',
      proofs: 'Proofs',
      reasonId: 'ReasonId',
      refundCode: 'RefundCode',
      refundCount: 'RefundCount',
      refundFee: 'RefundFee',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      goodsStatus: 'number',
      message: 'string',
      proofs: { 'type': 'array', 'itemType': ApplyRefundWithDesignatedTbUidRequestProofs },
      reasonId: 'number',
      refundCode: 'number',
      refundCount: 'number',
      refundFee: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundWithDesignatedTbUidShrinkRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  goodsStatus?: number;
  message?: string;
  proofsShrink?: string;
  reasonId?: number;
  refundCode?: number;
  refundCount?: number;
  refundFee?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      goodsStatus: 'GoodsStatus',
      message: 'Message',
      proofsShrink: 'Proofs',
      reasonId: 'ReasonId',
      refundCode: 'RefundCode',
      refundCount: 'RefundCount',
      refundFee: 'RefundFee',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      goodsStatus: 'number',
      message: 'string',
      proofsShrink: 'string',
      reasonId: 'number',
      refundCode: 'number',
      refundCount: 'number',
      refundFee: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ApplyRefundWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: ApplyRefundWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyRefundWithDesignatedTbUidResponseBody;
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
      body: ApplyRefundWithDesignatedTbUidResponseBody,
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
  batchId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRegistAnonymousTbAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchRegistAnonymousTbAccountResponseBody;
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
      body: BatchRegistAnonymousTbAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  lmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelOrderResponseBody;
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
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  lmOrderId?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmOrderId: 'LmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmOrderId: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: { [key: string]: any };
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelOrderWithDesignatedTbUidResponseBody;
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
      body: CancelOrderWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRealTbAccountSupportRequest extends $tea.Model {
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

export class CancelRealTbAccountSupportResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: any;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: 'any',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRealTbAccountSupportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelRealTbAccountSupportResponseBody;
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
      body: CancelRealTbAccountSupportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  disputeId?: number;
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      disputeId: 'DisputeId',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      disputeId: 'number',
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  refundApplicationData?: CancelRefundResponseBodyRefundApplicationData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      refundApplicationData: 'RefundApplicationData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      refundApplicationData: CancelRefundResponseBodyRefundApplicationData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelRefundResponseBody;
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
      body: CancelRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: any;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: 'any',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelRefundWithDesignatedTbUidResponseBody;
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
      body: CancelRefundWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  lmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: ConfirmDisburseResponseBody;
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
      body: ConfirmDisburseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  lmOrderId?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmOrderId: 'LmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmOrderId: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: any;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: 'any',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburseWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfirmDisburseWithDesignatedTbUidResponseBody;
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
      body: ConfirmDisburseWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  extJson?: string;
  lockSeatAppKey?: string;
  outTradeId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      lockSeatAppKey: 'LockSeatAppKey',
      outTradeId: 'OutTradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      lockSeatAppKey: 'string',
      outTradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CreateMovieTicketOrderResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: CreateMovieTicketOrderResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMovieTicketOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMovieTicketOrderResponseBody;
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
      body: CreateMovieTicketOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  buyerMessageMap?: string;
  deliveryAddress?: string;
  extJson?: string;
  itemId?: number;
  itemList?: CreateOrderRequestItemList[];
  lmItemId?: string;
  orderExpireTime?: number;
  outTradeId?: string;
  quantity?: number;
  thirdPartyUserId?: string;
  totalAmount?: number;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      buyerMessageMap: 'BuyerMessageMap',
      deliveryAddress: 'DeliveryAddress',
      extJson: 'ExtJson',
      itemId: 'ItemId',
      itemList: 'ItemList',
      lmItemId: 'LmItemId',
      orderExpireTime: 'OrderExpireTime',
      outTradeId: 'OutTradeId',
      quantity: 'Quantity',
      thirdPartyUserId: 'ThirdPartyUserId',
      totalAmount: 'TotalAmount',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      buyerMessageMap: 'string',
      deliveryAddress: 'string',
      extJson: 'string',
      itemId: 'number',
      itemList: { 'type': 'array', 'itemType': CreateOrderRequestItemList },
      lmItemId: 'string',
      orderExpireTime: 'number',
      outTradeId: 'string',
      quantity: 'number',
      thirdPartyUserId: 'string',
      totalAmount: 'number',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CreateOrderResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: CreateOrderResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderResponseBody;
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
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderPayUrlForOutDiscountRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  buyInfo?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      buyInfo: 'BuyInfo',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      buyInfo: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderPayUrlForOutDiscountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: CreateOrderPayUrlForOutDiscountResponseBodyModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: CreateOrderPayUrlForOutDiscountResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderPayUrlForOutDiscountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderPayUrlForOutDiscountResponseBody;
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
      body: CreateOrderPayUrlForOutDiscountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderTransactionDetailFileRequest extends $tea.Model {
  bizId?: string;
  bizName?: string;
  channelName?: string;
  createEndTime?: string;
  createStartTime?: string;
  itemId?: string;
  lmShopId?: string;
  orderStatus?: string;
  payStatus?: string;
  paymentEndTime?: string;
  paymentStartTime?: string;
  poCode?: string;
  refundEndTime?: string;
  refundStartTime?: string;
  sellerId?: string;
  sellerName?: string;
  settlementNode?: string;
  shopName?: string;
  tbMainOrderId?: string;
  tenantId?: string;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizName: 'BizName',
      channelName: 'ChannelName',
      createEndTime: 'CreateEndTime',
      createStartTime: 'CreateStartTime',
      itemId: 'ItemId',
      lmShopId: 'LmShopId',
      orderStatus: 'OrderStatus',
      payStatus: 'PayStatus',
      paymentEndTime: 'PaymentEndTime',
      paymentStartTime: 'PaymentStartTime',
      poCode: 'PoCode',
      refundEndTime: 'RefundEndTime',
      refundStartTime: 'RefundStartTime',
      sellerId: 'SellerId',
      sellerName: 'SellerName',
      settlementNode: 'SettlementNode',
      shopName: 'ShopName',
      tbMainOrderId: 'TbMainOrderId',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizName: 'string',
      channelName: 'string',
      createEndTime: 'string',
      createStartTime: 'string',
      itemId: 'string',
      lmShopId: 'string',
      orderStatus: 'string',
      payStatus: 'string',
      paymentEndTime: 'string',
      paymentStartTime: 'string',
      poCode: 'string',
      refundEndTime: 'string',
      refundStartTime: 'string',
      sellerId: 'string',
      sellerName: 'string',
      settlementNode: 'string',
      shopName: 'string',
      tbMainOrderId: 'string',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderTransactionDetailFileResponseBody extends $tea.Model {
  bizViewData?: { [key: string]: any };
  code?: string;
  logsId?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  recordId?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizViewData: 'BizViewData',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordId: 'RecordId',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizViewData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      logsId: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recordId: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderTransactionDetailFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderTransactionDetailFileResponseBody;
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
      body: CreateOrderTransactionDetailFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2Request extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  buyerMessageMap?: string;
  deliveryAddress?: string;
  extJson?: string;
  itemId?: number;
  itemList?: CreateOrderV2RequestItemList[];
  lmItemId?: string;
  orderExpireTime?: number;
  outTradeId?: string;
  quantity?: number;
  thirdPartyUserId?: string;
  totalAmount?: number;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      buyerMessageMap: 'BuyerMessageMap',
      deliveryAddress: 'DeliveryAddress',
      extJson: 'ExtJson',
      itemId: 'ItemId',
      itemList: 'ItemList',
      lmItemId: 'LmItemId',
      orderExpireTime: 'OrderExpireTime',
      outTradeId: 'OutTradeId',
      quantity: 'Quantity',
      thirdPartyUserId: 'ThirdPartyUserId',
      totalAmount: 'TotalAmount',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      buyerMessageMap: 'string',
      deliveryAddress: 'string',
      extJson: 'string',
      itemId: 'number',
      itemList: { 'type': 'array', 'itemType': CreateOrderV2RequestItemList },
      lmItemId: 'string',
      orderExpireTime: 'number',
      outTradeId: 'string',
      quantity: 'number',
      thirdPartyUserId: 'string',
      totalAmount: 'number',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2ResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CreateOrderV2ResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: CreateOrderV2ResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderV2ResponseBody;
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
      body: CreateOrderV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  buyerMessages?: string;
  deliveryAddress?: string;
  deliveryInfo?: string;
  extInfo?: string;
  orderExpireTime?: number;
  orderItems?: string;
  outTradeId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      buyerMessages: 'BuyerMessages',
      deliveryAddress: 'DeliveryAddress',
      deliveryInfo: 'DeliveryInfo',
      extInfo: 'ExtInfo',
      orderExpireTime: 'OrderExpireTime',
      orderItems: 'OrderItems',
      outTradeId: 'OutTradeId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      buyerMessages: 'string',
      deliveryAddress: 'string',
      deliveryInfo: 'string',
      extInfo: 'string',
      orderExpireTime: 'number',
      orderItems: 'string',
      outTradeId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CreateOrderWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: CreateOrderWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOrderWithDesignatedTbUidResponseBody;
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
      body: CreateOrderWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutDiscountOrderWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  buyerMessages?: string;
  deliveryAddress?: string;
  deliveryInfo?: string;
  extInfo?: string;
  orderExpireTime?: number;
  orderItems?: string;
  outDiscountInfos?: string;
  outTradeId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      buyerMessages: 'BuyerMessages',
      deliveryAddress: 'DeliveryAddress',
      deliveryInfo: 'DeliveryInfo',
      extInfo: 'ExtInfo',
      orderExpireTime: 'OrderExpireTime',
      orderItems: 'OrderItems',
      outDiscountInfos: 'OutDiscountInfos',
      outTradeId: 'OutTradeId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      buyerMessages: 'string',
      deliveryAddress: 'string',
      deliveryInfo: 'string',
      extInfo: 'string',
      orderExpireTime: 'number',
      orderItems: 'string',
      outDiscountInfos: 'string',
      outTradeId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutDiscountOrderWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CreateOutDiscountOrderWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: CreateOutDiscountOrderWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutDiscountOrderWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOutDiscountOrderWithDesignatedTbUidResponseBody;
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
      body: CreateOutDiscountOrderWithDesignatedTbUidResponseBody,
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
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      buyInfo: 'BuyInfo',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      buyInfo: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: CreatePayUrlResponseBodyModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: CreatePayUrlResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePayUrlResponseBody;
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
      body: CreatePayUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSettleConfirmRequest extends $tea.Model {
  bizId?: string;
  extInfo?: string;
  merchantId?: string;
  outRequestNo?: string;
  outTradeNo?: string;
  settleInfo?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      merchantId: 'MerchantId',
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      settleInfo: 'SettleInfo',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extInfo: 'string',
      merchantId: 'string',
      outRequestNo: 'string',
      outTradeNo: 'string',
      settleInfo: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSettleConfirmResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  tradeSettleConfirmResponse?: CreateSettleConfirmResponseBodyTradeSettleConfirmResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tradeSettleConfirmResponse: 'TradeSettleConfirmResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tradeSettleConfirmResponse: CreateSettleConfirmResponseBodyTradeSettleConfirmResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSettleConfirmResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSettleConfirmResponseBody;
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
      body: CreateSettleConfirmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  deliveryAddress?: string;
  extJson?: string;
  itemId?: number;
  itemList?: CreateVirtualProductOrderRequestItemList[];
  lmItemId?: string;
  orderExpireTime?: number;
  outTradeId?: string;
  quantity?: number;
  thirdPartyUserId?: string;
  totalAmount?: number;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      deliveryAddress: 'DeliveryAddress',
      extJson: 'ExtJson',
      itemId: 'ItemId',
      itemList: 'ItemList',
      lmItemId: 'LmItemId',
      orderExpireTime: 'OrderExpireTime',
      outTradeId: 'OutTradeId',
      quantity: 'Quantity',
      thirdPartyUserId: 'ThirdPartyUserId',
      totalAmount: 'TotalAmount',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      deliveryAddress: 'string',
      extJson: 'string',
      itemId: 'number',
      itemList: { 'type': 'array', 'itemType': CreateVirtualProductOrderRequestItemList },
      lmItemId: 'string',
      orderExpireTime: 'number',
      outTradeId: 'string',
      quantity: 'number',
      thirdPartyUserId: 'string',
      totalAmount: 'number',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CreateVirtualProductOrderResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: CreateVirtualProductOrderResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVirtualProductOrderResponseBody;
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
      body: CreateVirtualProductOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWithholdTradeRequest extends $tea.Model {
  agreementNo?: string;
  body?: string;
  buyerId?: string;
  extInfo?: string;
  goodsDetail?: string;
  merchantId?: string;
  outRequestNo?: string;
  outTradeNo?: string;
  settleMode?: string;
  subject?: string;
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      agreementNo: 'AgreementNo',
      body: 'Body',
      buyerId: 'BuyerId',
      extInfo: 'ExtInfo',
      goodsDetail: 'GoodsDetail',
      merchantId: 'MerchantId',
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      settleMode: 'SettleMode',
      subject: 'Subject',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementNo: 'string',
      body: 'string',
      buyerId: 'string',
      extInfo: 'string',
      goodsDetail: 'string',
      merchantId: 'string',
      outRequestNo: 'string',
      outTradeNo: 'string',
      settleMode: 'string',
      subject: 'string',
      totalAmount: 'string',
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
  statusCode: number;
  body: CreateWithholdTradeResponseBody;
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
      body: CreateWithholdTradeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductUserPointRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfoShrink?: string;
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfoShrink: 'string',
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: DeductUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: DeductUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeductUserPointResponseBody;
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
      body: DeductUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBizItemsRequest extends $tea.Model {
  bizId?: string;
  itemIdList?: number[];
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIdList: 'ItemIdList',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIdList: { 'type': 'array', 'itemType': 'number' },
      subBizId: 'string',
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
  statusCode: number;
  body: DeleteBizItemsResponseBody;
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
      body: DeleteBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemLimitRuleRequest extends $tea.Model {
  bizId?: string;
  itemId?: number;
  lmActivityId?: number;
  lmItemId?: string;
  ruleId?: number;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemId: 'ItemId',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      ruleId: 'RuleId',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemId: 'number',
      lmActivityId: 'number',
      lmItemId: 'string',
      ruleId: 'number',
      subBizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemLimitRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteItemLimitRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteItemLimitRuleResponseBody;
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
      body: DeleteItemLimitRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCpsBillFileRequest extends $tea.Model {
  billId?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCpsBillFileResponseBody extends $tea.Model {
  bizViewData?: { [key: string]: any };
  code?: string;
  logsId?: string;
  message?: string;
  ossUrl?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizViewData: 'BizViewData',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      ossUrl: 'OssUrl',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizViewData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      logsId: 'string',
      message: 'string',
      ossUrl: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCpsBillFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadCpsBillFileResponseBody;
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
      body: DownloadCpsBillFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadItemBillFileRequest extends $tea.Model {
  billId?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadItemBillFileResponseBody extends $tea.Model {
  bizViewData?: { [key: string]: any };
  code?: string;
  logsId?: string;
  message?: string;
  ossUrl?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizViewData: 'BizViewData',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      ossUrl: 'OssUrl',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizViewData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      logsId: 'string',
      message: 'string',
      ossUrl: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadItemBillFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadItemBillFileResponseBody;
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
      body: DownloadItemBillFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadOrderTransactionDetailFileRequest extends $tea.Model {
  bizId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadOrderTransactionDetailFileResponseBody extends $tea.Model {
  bizViewData?: { [key: string]: any };
  code?: string;
  logsId?: string;
  message?: string;
  ossUrl?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizViewData: 'BizViewData',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      ossUrl: 'OssUrl',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizViewData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      logsId: 'string',
      message: 'string',
      ossUrl: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadOrderTransactionDetailFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadOrderTransactionDetailFileResponseBody;
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
      body: DownloadOrderTransactionDetailFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  extJson?: string;
  lmOrderId?: string;
  outTradeId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      lmOrderId: 'LmOrderId',
      outTradeId: 'OutTradeId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      lmOrderId: 'string',
      outTradeId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: EnableOrderResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: EnableOrderResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableOrderResponseBody;
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
      body: EnableOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  lmOrderId?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmOrderId: 'LmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmOrderId: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: EnableOrderWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: EnableOrderWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableOrderWithDesignatedTbUidResponseBody;
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
      body: EnableOrderWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeRequest extends $tea.Model {
  bizId?: string;
  nodeId?: string;
  nodeInstanceId?: string;
  processId?: string;
  processInstanceId?: string;
  requestData?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      nodeId: 'NodeId',
      nodeInstanceId: 'NodeInstanceId',
      processId: 'ProcessId',
      processInstanceId: 'ProcessInstanceId',
      requestData: 'RequestData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      nodeId: 'string',
      nodeInstanceId: 'string',
      processId: 'string',
      processInstanceId: 'string',
      requestData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ExecuteNodeResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: ExecuteNodeResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExecuteNodeResponseBody;
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
      body: ExecuteNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeUserPointRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfoShrink?: string;
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfoShrink: 'string',
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: FreezeUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: FreezeUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FreezeUserPointResponseBody;
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
      body: FreezeUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityGameInfoRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  extInfo?: { [key: string]: any };
  gameId?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      gameId: 'GameId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gameId: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityGameInfoShrinkRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  extInfoShrink?: string;
  gameId?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      gameId: 'GameId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      extInfoShrink: 'string',
      gameId: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityGameInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: GetActivityGameInfoResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: GetActivityGameInfoResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityGameInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetActivityGameInfoResponseBody;
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
      body: GetActivityGameInfoResponseBody,
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
  categoryList?: GetCategoryChainResponseBodyCategoryList[];
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': GetCategoryChainResponseBodyCategoryList },
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryChainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCategoryChainResponseBody;
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
  categoryList?: GetCategoryListResponseBodyCategoryList;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: GetCategoryListResponseBodyCategoryList,
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCategoryListResponseBody;
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
      body: GetCategoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomServiceUrlRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  cuid?: string;
  nick?: string;
  sellerId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      cuid: 'Cuid',
      nick: 'Nick',
      sellerId: 'SellerId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      cuid: 'string',
      nick: 'string',
      sellerId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: GetCustomServiceUrlResponseBody;
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
  miniShopInfo?: GetGuidePageResponseBodyMiniShopInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      miniShopInfo: 'MiniShopInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      miniShopInfo: { 'type': 'array', 'itemType': GetGuidePageResponseBodyMiniShopInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGuidePageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGuidePageResponseBody;
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
  code?: string;
  itemPromotionModel?: GetItemPromotionResponseBodyItemPromotionModel;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemPromotionModel: 'ItemPromotionModel',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemPromotionModel: GetItemPromotionResponseBodyItemPromotionModel,
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPromotionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetItemPromotionResponseBody;
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
      body: GetItemPromotionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPageRequest extends $tea.Model {
  bizId?: string;
  failUrl?: string;
  targetUrl?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      failUrl: 'FailUrl',
      targetUrl: 'TargetUrl',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      failUrl: 'string',
      targetUrl: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: GetLoginPageResponseBody;
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
  thirdPartyUserId?: string;
  url?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      thirdPartyUserId: 'ThirdPartyUserId',
      url: 'Url',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      thirdPartyUserId: 'string',
      url: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSwitchUrlResponseBody;
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
      body: GetSwitchUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoRequest extends $tea.Model {
  appName?: string;
  bizId?: string;
  queryJson?: string;
  userFlag?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      bizId: 'BizId',
      queryJson: 'QueryJson',
      userFlag: 'UserFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      bizId: 'string',
      queryJson: 'string',
      userFlag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $tea.Model {
  code?: string;
  loginResult?: GetUserInfoResponseBodyLoginResult;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      loginResult: 'LoginResult',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      loginResult: GetUserInfoResponseBodyLoginResult,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserInfoResponseBody;
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
      body: GetUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenPageRequest extends $tea.Model {
  bizId?: string;
  expireSeconds?: number;
  extJson?: string;
  thirdPartyUserId?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      expireSeconds: 'ExpireSeconds',
      extJson: 'ExtJson',
      thirdPartyUserId: 'ThirdPartyUserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      expireSeconds: 'number',
      extJson: 'string',
      thirdPartyUserId: 'string',
      userNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenPageResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: GetUserTokenPageResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: GetUserTokenPageResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserTokenPageResponseBody;
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
      body: GetUserTokenPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWithholdSignPageUrlRequest extends $tea.Model {
  deviceType?: string;
  extInfo?: string;
  externalAgreementNo?: string;
  identityParameters?: string;
  merchantId?: string;
  merchantServiceDescription?: string;
  merchantServiceName?: string;
  notifyUrl?: string;
  outRequestNo?: string;
  returnUrl?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      extInfo: 'ExtInfo',
      externalAgreementNo: 'ExternalAgreementNo',
      identityParameters: 'IdentityParameters',
      merchantId: 'MerchantId',
      merchantServiceDescription: 'MerchantServiceDescription',
      merchantServiceName: 'MerchantServiceName',
      notifyUrl: 'NotifyUrl',
      outRequestNo: 'OutRequestNo',
      returnUrl: 'ReturnUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      extInfo: 'string',
      externalAgreementNo: 'string',
      identityParameters: 'string',
      merchantId: 'string',
      merchantServiceDescription: 'string',
      merchantServiceName: 'string',
      notifyUrl: 'string',
      outRequestNo: 'string',
      returnUrl: 'string',
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
  statusCode: number;
  body: GetWithholdSignPageUrlResponseBody;
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
      body: GetWithholdSignPageUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GiveUserPointRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  targetBizUid?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      targetBizUid: 'TargetBizUid',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      targetBizUid: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GiveUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfoShrink?: string;
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  targetBizUid?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      targetBizUid: 'TargetBizUid',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfoShrink: 'string',
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      targetBizUid: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GiveUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: GiveUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: GiveUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GiveUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GiveUserPointResponseBody;
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
      body: GiveUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPromotionToUserRequest extends $tea.Model {
  bizId?: string;
  expireSeconds?: number;
  grantMode?: string;
  grantWay?: string;
  idempotentId?: string;
  promotionId?: string;
  securityCode?: string;
  thirdPartyUserId?: string;
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      expireSeconds: 'ExpireSeconds',
      grantMode: 'GrantMode',
      grantWay: 'GrantWay',
      idempotentId: 'IdempotentId',
      promotionId: 'PromotionId',
      securityCode: 'SecurityCode',
      thirdPartyUserId: 'ThirdPartyUserId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      expireSeconds: 'number',
      grantMode: 'string',
      grantWay: 'string',
      idempotentId: 'string',
      promotionId: 'string',
      securityCode: 'string',
      thirdPartyUserId: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPromotionToUserShrinkRequest extends $tea.Model {
  bizId?: string;
  expireSeconds?: number;
  grantMode?: string;
  grantWay?: string;
  idempotentId?: string;
  promotionId?: string;
  securityCode?: string;
  thirdPartyUserId?: string;
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      expireSeconds: 'ExpireSeconds',
      grantMode: 'GrantMode',
      grantWay: 'GrantWay',
      idempotentId: 'IdempotentId',
      promotionId: 'PromotionId',
      securityCode: 'SecurityCode',
      thirdPartyUserId: 'ThirdPartyUserId',
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      expireSeconds: 'number',
      grantMode: 'string',
      grantWay: 'string',
      idempotentId: 'string',
      promotionId: 'string',
      securityCode: 'string',
      thirdPartyUserId: 'string',
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPromotionToUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: GrantPromotionToUserResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: GrantPromotionToUserResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPromotionToUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantPromotionToUserResponseBody;
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
      body: GrantPromotionToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPointRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfoShrink?: string;
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfoShrink: 'string',
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: GrantUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: GrantUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GrantUserPointResponseBody;
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
      body: GrantUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundRequest extends $tea.Model {
  accountType?: string;
  bizClaimType?: number;
  bizId?: string;
  bizUid?: string;
  goodsStatus?: number;
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizClaimType: 'BizClaimType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      goodsStatus: 'GoodsStatus',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizClaimType: 'number',
      bizId: 'string',
      bizUid: 'string',
      goodsStatus: 'number',
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponseBody extends $tea.Model {
  code?: string;
  initApplyRefundData?: InitApplyRefundResponseBodyInitApplyRefundData;
  message?: string;
  requestId?: string;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      initApplyRefundData: 'InitApplyRefundData',
      message: 'Message',
      requestId: 'RequestId',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      initApplyRefundData: InitApplyRefundResponseBodyInitApplyRefundData,
      message: 'string',
      requestId: 'string',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitApplyRefundResponseBody;
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
      body: InitApplyRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  refundCode?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      refundCode: 'RefundCode',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      refundCode: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: InitApplyRefundWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: InitApplyRefundWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitApplyRefundWithDesignatedTbUidResponseBody;
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
      body: InitApplyRefundWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundRequest extends $tea.Model {
  accountType?: string;
  bizClaimType?: number;
  bizId?: string;
  bizUid?: string;
  disputeId?: number;
  goodsStatus?: number;
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizClaimType: 'BizClaimType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      disputeId: 'DisputeId',
      goodsStatus: 'GoodsStatus',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizClaimType: 'number',
      bizId: 'string',
      bizUid: 'string',
      disputeId: 'number',
      goodsStatus: 'number',
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundResponseBody extends $tea.Model {
  code?: string;
  initApplyRefundData?: InitModifyRefundResponseBodyInitApplyRefundData;
  message?: string;
  requestId?: string;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      initApplyRefundData: 'InitApplyRefundData',
      message: 'Message',
      requestId: 'RequestId',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      initApplyRefundData: InitModifyRefundResponseBodyInitApplyRefundData,
      message: 'string',
      requestId: 'string',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitModifyRefundResponseBody;
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
      body: InitModifyRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  refundCode?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      refundCode: 'RefundCode',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      refundCode: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: InitModifyRefundWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: InitModifyRefundWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InitModifyRefundWithDesignatedTbUidResponseBody;
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
      body: InitModifyRefundWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityAtmosphereRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  gameId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      gameId: 'GameId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      gameId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityAtmosphereResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: ListActivityAtmosphereResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': ListActivityAtmosphereResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityAtmosphereResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListActivityAtmosphereResponseBody;
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
      body: ListActivityAtmosphereResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityGameInfoRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  endTime?: number;
  gameId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  status?: string;
  statuses?: string;
  subType?: string;
  thirdPartyUserId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      endTime: 'EndTime',
      gameId: 'GameId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      statuses: 'Statuses',
      subType: 'SubType',
      thirdPartyUserId: 'ThirdPartyUserId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      endTime: 'number',
      gameId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
      statuses: 'string',
      subType: 'string',
      thirdPartyUserId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityGameInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: ListActivityGameInfoResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': ListActivityGameInfoResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityGameInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListActivityGameInfoResponseBody;
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
      body: ListActivityGameInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesRequest extends $tea.Model {
  bizId?: string;
  itemIds?: { [key: string]: any };
  lmItemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesShrinkRequest extends $tea.Model {
  bizId?: string;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBody extends $tea.Model {
  code?: string;
  lmItemActivityModelList?: ListItemActivitiesResponseBodyLmItemActivityModelList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmItemActivityModelList: 'LmItemActivityModelList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmItemActivityModelList: ListItemActivitiesResponseBodyLmItemActivityModelList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListItemActivitiesResponseBody;
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
      body: ListItemActivitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGameProcessRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  endTime?: number;
  gameId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  status?: string;
  statuses?: string;
  thirdPartyUserId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      endTime: 'EndTime',
      gameId: 'GameId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      statuses: 'Statuses',
      thirdPartyUserId: 'ThirdPartyUserId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      endTime: 'number',
      gameId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
      statuses: 'string',
      thirdPartyUserId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGameProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: ListUserGameProcessResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': ListUserGameProcessResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGameProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserGameProcessResponseBody;
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
      body: ListUserGameProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPointRecordsRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  pointAction?: string;
  pointActions?: string;
  recordId?: string;
  ruleId?: string;
  startTime?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pointAction: 'PointAction',
      pointActions: 'PointActions',
      recordId: 'RecordId',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      pointAction: 'string',
      pointActions: 'string',
      recordId: 'string',
      ruleId: 'string',
      startTime: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPointRecordsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: ListUserPointRecordsResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': ListUserPointRecordsResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPointRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserPointRecordsResponseBody;
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
      body: ListUserPointRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsRequest extends $tea.Model {
  bizId?: string;
  itemList?: ModifyBasicAndBizItemsRequestItemList[];
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemList: 'ItemList',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemList: { 'type': 'array', 'itemType': ModifyBasicAndBizItemsRequestItemList },
      subBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponseBody extends $tea.Model {
  code?: string;
  failedItemList?: ModifyBasicAndBizItemsResponseBodyFailedItemList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedItemList: 'FailedItemList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedItemList: ModifyBasicAndBizItemsResponseBodyFailedItemList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBasicAndBizItemsResponseBody;
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
      body: ModifyBasicAndBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicItemSupplierPriceRequest extends $tea.Model {
  bizId?: string;
  lmItemId?: string;
  lmShopId?: number;
  skuId?: number;
  supplierPrice?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      skuId: 'SkuId',
      supplierPrice: 'SupplierPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemId: 'string',
      lmShopId: 'number',
      skuId: 'number',
      supplierPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicItemSupplierPriceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicItemSupplierPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBasicItemSupplierPriceResponseBody;
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
      body: ModifyBasicItemSupplierPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsRequest extends $tea.Model {
  bizId?: string;
  itemList?: ModifyBizItemsRequestItemList[];
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemList: 'ItemList',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemList: { 'type': 'array', 'itemType': ModifyBizItemsRequestItemList },
      subBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponseBody extends $tea.Model {
  code?: string;
  failedItemList?: ModifyBizItemsResponseBodyFailedItemList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedItemList: 'FailedItemList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedItemList: ModifyBizItemsResponseBodyFailedItemList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBizItemsResponseBody;
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
      body: ModifyBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemLimitRuleRequest extends $tea.Model {
  beginTime?: number;
  bizId?: string;
  endTime?: number;
  itemId?: number;
  lmActivityId?: number;
  lmItemId?: string;
  ruleId?: number;
  ruleType?: number;
  subBizCode?: string;
  upperNum?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      bizId: 'BizId',
      endTime: 'EndTime',
      itemId: 'ItemId',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      subBizCode: 'SubBizCode',
      upperNum: 'UpperNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      bizId: 'string',
      endTime: 'number',
      itemId: 'number',
      lmActivityId: 'number',
      lmItemId: 'string',
      ruleId: 'number',
      ruleType: 'number',
      subBizCode: 'string',
      upperNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemLimitRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyItemLimitRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyItemLimitRuleResponseBody;
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
      body: ModifyItemLimitRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrderDeliveryAddressRequest extends $tea.Model {
  bizId?: string;
  deliveryAddress?: string;
  extJson?: string;
  lmOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deliveryAddress: 'DeliveryAddress',
      extJson: 'ExtJson',
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deliveryAddress: 'string',
      extJson: 'string',
      lmOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrderDeliveryAddressResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ModifyOrderDeliveryAddressResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: ModifyOrderDeliveryAddressResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrderDeliveryAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyOrderDeliveryAddressResponseBody;
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
      body: ModifyOrderDeliveryAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundRequest extends $tea.Model {
  accountType?: string;
  applyReasonTextId?: number;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  bizId?: string;
  bizUid?: string;
  disputeId?: number;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureList?: ModifyRefundRequestLeavePictureList[];
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      applyReasonTextId: 'ApplyReasonTextId',
      applyRefundCount: 'ApplyRefundCount',
      applyRefundFee: 'ApplyRefundFee',
      bizClaimType: 'BizClaimType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      disputeId: 'DisputeId',
      goodsStatus: 'GoodsStatus',
      leaveMessage: 'LeaveMessage',
      leavePictureList: 'LeavePictureList',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      applyReasonTextId: 'number',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      bizId: 'string',
      bizUid: 'string',
      disputeId: 'number',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureList: { 'type': 'array', 'itemType': ModifyRefundRequestLeavePictureList },
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  refundApplicationData?: ModifyRefundResponseBodyRefundApplicationData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      refundApplicationData: 'RefundApplicationData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      refundApplicationData: ModifyRefundResponseBodyRefundApplicationData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyRefundResponseBody;
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
      body: ModifyRefundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  goodsStatus?: number;
  message?: string;
  proofs?: ModifyRefundWithDesignatedTbUidRequestProofs[];
  reasonId?: number;
  refundCode?: number;
  refundCount?: number;
  refundFee?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      goodsStatus: 'GoodsStatus',
      message: 'Message',
      proofs: 'Proofs',
      reasonId: 'ReasonId',
      refundCode: 'RefundCode',
      refundCount: 'RefundCount',
      refundFee: 'RefundFee',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      goodsStatus: 'number',
      message: 'string',
      proofs: { 'type': 'array', 'itemType': ModifyRefundWithDesignatedTbUidRequestProofs },
      reasonId: 'number',
      refundCode: 'number',
      refundCount: 'number',
      refundFee: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundWithDesignatedTbUidShrinkRequest extends $tea.Model {
  bizId?: string;
  disputeId?: number;
  goodsStatus?: number;
  message?: string;
  proofsShrink?: string;
  reasonId?: number;
  refundCode?: number;
  refundCount?: number;
  refundFee?: number;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      disputeId: 'DisputeId',
      goodsStatus: 'GoodsStatus',
      message: 'Message',
      proofsShrink: 'Proofs',
      reasonId: 'ReasonId',
      refundCode: 'RefundCode',
      refundCount: 'RefundCount',
      refundFee: 'RefundFee',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      disputeId: 'number',
      goodsStatus: 'number',
      message: 'string',
      proofsShrink: 'string',
      reasonId: 'number',
      refundCode: 'number',
      refundCount: 'number',
      refundFee: 'number',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ModifyRefundWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: ModifyRefundWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyRefundWithDesignatedTbUidResponseBody;
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
      body: ModifyRefundWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySettleAccountRequest extends $tea.Model {
  accountChannel?: string;
  accountId?: string;
  accountName?: string;
  accountNo?: string;
  accountPayType?: string;
  accountType?: string;
  bizId?: string;
  countryOrAreaCode?: string;
  currency?: string;
  extInfo?: string;
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      accountChannel: 'AccountChannel',
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountNo: 'AccountNo',
      accountPayType: 'AccountPayType',
      accountType: 'AccountType',
      bizId: 'BizId',
      countryOrAreaCode: 'CountryOrAreaCode',
      currency: 'Currency',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountChannel: 'string',
      accountId: 'string',
      accountName: 'string',
      accountNo: 'string',
      accountPayType: 'string',
      accountType: 'string',
      bizId: 'string',
      countryOrAreaCode: 'string',
      currency: 'string',
      extInfo: 'string',
      idempotentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySettleAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ModifySettleAccountResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: ModifySettleAccountResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySettleAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySettleAccountResponseBody;
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
      body: ModifySettleAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySupplierPriceAndPriceCentRequest extends $tea.Model {
  bizId?: string;
  lmItemId?: string;
  lmShopId?: string;
  priceCent?: string;
  skuId?: string;
  supplierPrice?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      priceCent: 'PriceCent',
      skuId: 'SkuId',
      supplierPrice: 'SupplierPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemId: 'string',
      lmShopId: 'string',
      priceCent: 'string',
      skuId: 'string',
      supplierPrice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySupplierPriceAndPriceCentResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySupplierPriceAndPriceCentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySupplierPriceAndPriceCentResponseBody;
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
      body: ModifySupplierPriceAndPriceCentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyPayOrderStatusRequest extends $tea.Model {
  amount?: number;
  channelId?: string;
  operationDate?: string;
  payTypes?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      channelId: 'ChannelId',
      operationDate: 'OperationDate',
      payTypes: 'PayTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      channelId: 'string',
      operationDate: 'string',
      payTypes: 'string',
      requestId: 'string',
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
  statusCode: number;
  body: NotifyPayOrderStatusResponseBody;
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
      body: NotifyPayOrderStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyWithholdFundRequest extends $tea.Model {
  amount?: number;
  channelId?: string;
  operationDate?: string;
  payTypes?: string;
  requestId?: string;
  tenantOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      channelId: 'ChannelId',
      operationDate: 'OperationDate',
      payTypes: 'PayTypes',
      requestId: 'RequestId',
      tenantOrderId: 'TenantOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      channelId: 'string',
      operationDate: 'string',
      payTypes: 'string',
      requestId: 'string',
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
  statusCode: number;
  body: NotifyWithholdFundResponseBody;
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
      body: NotifyWithholdFundResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenRealTbAccountSupportRequest extends $tea.Model {
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

export class OpenRealTbAccountSupportResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: any;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: 'any',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenRealTbAccountSupportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenRealTbAccountSupportResponseBody;
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
      body: OpenRealTbAccountSupportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserGameProcessRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  currentStepId?: string;
  extInfo?: { [key: string]: any };
  processId?: string;
  thirdPartyUserId?: string;
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      currentStepId: 'CurrentStepId',
      extInfo: 'ExtInfo',
      processId: 'ProcessId',
      thirdPartyUserId: 'ThirdPartyUserId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      currentStepId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processId: 'string',
      thirdPartyUserId: 'string',
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserGameProcessShrinkRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  currentStepId?: string;
  extInfoShrink?: string;
  processId?: string;
  thirdPartyUserId?: string;
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      currentStepId: 'CurrentStepId',
      extInfoShrink: 'ExtInfo',
      processId: 'ProcessId',
      thirdPartyUserId: 'ThirdPartyUserId',
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      currentStepId: 'string',
      extInfoShrink: 'string',
      processId: 'string',
      thirdPartyUserId: 'string',
      bodyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserGameProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: PushUserGameProcessResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: PushUserGameProcessResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserGameProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushUserGameProcessResponseBody;
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
      body: PushUserGameProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsRequest extends $tea.Model {
  bizId?: string;
  lmActivityId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmActivityId: 'LmActivityId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmActivityId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBody extends $tea.Model {
  code?: string;
  lmActivityItemModelList?: QueryActivityItemsResponseBodyLmActivityItemModelList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmActivityItemModelList: 'LmActivityItemModelList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmActivityItemModelList: QueryActivityItemsResponseBodyLmActivityItemModelList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryActivityItemsResponseBody;
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
      body: QueryActivityItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressRequest extends $tea.Model {
  bizId?: string;
  divisionCode?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      divisionCode: 'DivisionCode',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      divisionCode: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressResponseBody extends $tea.Model {
  code?: string;
  divisionAddress?: QueryAddressResponseBodyDivisionAddress;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      divisionAddress: 'DivisionAddress',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      divisionAddress: QueryAddressResponseBodyDivisionAddress,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAddressResponseBody;
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
      body: QueryAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailRequest extends $tea.Model {
  addressInfo?: string;
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: 'string',
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailResponseBody extends $tea.Model {
  code?: string;
  deliveryAddress?: QueryAddressDetailResponseBodyDeliveryAddress;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      deliveryAddress: 'DeliveryAddress',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deliveryAddress: QueryAddressDetailResponseBodyDeliveryAddress,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAddressDetailResponseBody;
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
  addressList?: QueryAddressListResponseBodyAddressList[];
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': QueryAddressListResponseBodyAddressList },
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAddressListResponseBody;
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
      body: QueryAddressListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoRequest extends $tea.Model {
  bizId?: string;
  channelId?: string;
  endTime?: string;
  extInfo?: string;
  mediaSettleDetailId?: string;
  pageNumber?: number;
  pageSize?: number;
  settleNo?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      mediaSettleDetailId: 'MediaSettleDetailId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      settleNo: 'SettleNo',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channelId: 'string',
      endTime: 'string',
      extInfo: 'string',
      mediaSettleDetailId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      settleNo: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryAdvertisementSettleInfoResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryAdvertisementSettleInfoResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAdvertisementSettleInfoResponseBody;
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
      body: QueryAdvertisementSettleInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementRequest extends $tea.Model {
  agreementNo?: string;
  externalAgreementNo?: string;
  merchantId?: string;
  static names(): { [key: string]: string } {
    return {
      agreementNo: 'AgreementNo',
      externalAgreementNo: 'ExternalAgreementNo',
      merchantId: 'MerchantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementNo: 'string',
      externalAgreementNo: 'string',
      merchantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  queryAgreementResponse?: QueryAgreementResponseBodyQueryAgreementResponse;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      queryAgreementResponse: 'QueryAgreementResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      queryAgreementResponse: QueryAgreementResponseBodyQueryAgreementResponse,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAgreementResponseBody;
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
  extJson?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cityCode: 'CityCode',
      extJson: 'ExtJson',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cityCode: 'number',
      extJson: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponseBody extends $tea.Model {
  cinemas?: QueryAllCinemasResponseBodyCinemas;
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cinemas: 'Cinemas',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cinemas: QueryAllCinemasResponseBodyCinemas,
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAllCinemasResponseBody;
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
  cities?: QueryAllCitiesResponseBodyCities;
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cities: 'Cities',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: QueryAllCitiesResponseBodyCities,
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAllCitiesResponseBody;
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
      body: QueryAllCitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultRequest extends $tea.Model {
  batchId?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultResponseBody extends $tea.Model {
  batchId?: string;
  code?: string;
  failIds?: QueryBatchRegistAnonymousTbAccountResultResponseBodyFailIds;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      code: 'Code',
      failIds: 'FailIds',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      code: 'string',
      failIds: QueryBatchRegistAnonymousTbAccountResultResponseBodyFailIds,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBatchRegistAnonymousTbAccountResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBatchRegistAnonymousTbAccountResultResponseBody;
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
      body: QueryBatchRegistAnonymousTbAccountResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsRequest extends $tea.Model {
  bizId?: string;
  itemIds?: { [key: string]: any };
  lmItemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsShrinkRequest extends $tea.Model {
  bizId?: string;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponseBody extends $tea.Model {
  code?: string;
  lmItemActivitySessionModelList?: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmItemActivitySessionModelList: 'LmItemActivitySessionModelList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmItemActivitySessionModelList: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBestSession4ItemsResponseBody;
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
      body: QueryBestSession4ItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListRequest extends $tea.Model {
  bizId?: string;
  categoryId?: number;
  itemIds?: { [key: string]: any };
  lmItemIds?: { [key: string]: any };
  pageNumber?: number;
  pageSize?: number;
  subBizId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      categoryId: 'CategoryId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizId: 'SubBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      categoryId: 'number',
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pageNumber: 'number',
      pageSize: 'number',
      subBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListShrinkRequest extends $tea.Model {
  bizId?: string;
  categoryId?: number;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  subBizId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      categoryId: 'CategoryId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizId: 'SubBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      categoryId: 'number',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponseBody extends $tea.Model {
  code?: string;
  itemList?: QueryBizItemListResponseBodyItemList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: QueryBizItemListResponseBodyItemList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBizItemListResponseBody;
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
      body: QueryBizItemListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2Request extends $tea.Model {
  bizId?: string;
  categoryId?: number;
  itemIds?: number[];
  lmItemIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  subBizId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      categoryId: 'CategoryId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizId: 'SubBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      categoryId: 'number',
      itemIds: { 'type': 'array', 'itemType': 'number' },
      lmItemIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      subBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ShrinkRequest extends $tea.Model {
  bizId?: string;
  categoryId?: number;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  subBizId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      categoryId: 'CategoryId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizId: 'SubBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      categoryId: 'number',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ResponseBody extends $tea.Model {
  code?: string;
  itemList?: QueryBizItemListV2ResponseBodyItemList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: QueryBizItemListV2ResponseBodyItemList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBizItemListV2ResponseBody;
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
      body: QueryBizItemListV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListWithCacheRequest extends $tea.Model {
  bizId?: string;
  itemIds?: number[];
  lmItemIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIds: { 'type': 'array', 'itemType': 'number' },
      lmItemIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      subBizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListWithCacheShrinkRequest extends $tea.Model {
  bizId?: string;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subBizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListWithCacheResponseBody extends $tea.Model {
  code?: string;
  itemList?: QueryBizItemListWithCacheResponseBodyItemList[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: { 'type': 'array', 'itemType': QueryBizItemListWithCacheResponseBodyItemList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListWithCacheResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBizItemListWithCacheResponseBody;
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
      body: QueryBizItemListWithCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsRequest extends $tea.Model {
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  subBizId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subBizId: 'SubBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBizItemsResponseBody;
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
      body: QueryBizItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityRequest extends $tea.Model {
  bizId?: string;
  itemIds?: { [key: string]: any };
  lmItemIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityShrinkRequest extends $tea.Model {
  bizId?: string;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBody extends $tea.Model {
  code?: string;
  itemList?: QueryBizItemsWithActivityResponseBodyItemList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: QueryBizItemsWithActivityResponseBodyItemList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBizItemsWithActivityResponseBody;
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
      body: QueryBizItemsWithActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBudgetTicketItemListByBizIdRequest extends $tea.Model {
  bizId?: string;
  budgetTicketNo?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      budgetTicketNo: 'BudgetTicketNo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      budgetTicketNo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBudgetTicketItemListByBizIdResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QueryBudgetTicketItemListByBizIdResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QueryBudgetTicketItemListByBizIdResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBudgetTicketItemListByBizIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryBudgetTicketItemListByBizIdResponseBody;
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
      body: QueryBudgetTicketItemListByBizIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChannelItemBillDownloadUrlRequest extends $tea.Model {
  billId?: string;
  billPeriod?: string;
  billStatus?: string;
  bizId?: string;
  bizName?: string;
  lmShopId?: number;
  lmShopName?: string;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      billPeriod: 'BillPeriod',
      billStatus: 'BillStatus',
      bizId: 'BizId',
      bizName: 'BizName',
      lmShopId: 'LmShopId',
      lmShopName: 'LmShopName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      billPeriod: 'string',
      billStatus: 'string',
      bizId: 'string',
      bizName: 'string',
      lmShopId: 'number',
      lmShopName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChannelItemBillDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryChannelItemBillDownloadUrlResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryChannelItemBillDownloadUrlResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChannelItemBillDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryChannelItemBillDownloadUrlResponseBody;
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
      body: QueryChannelItemBillDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupRequest extends $tea.Model {
  bizId?: string;
  groupId?: string;
  itemState?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      groupId: 'GroupId',
      itemState: 'ItemState',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      groupId: 'string',
      itemState: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponseBody extends $tea.Model {
  code?: string;
  guideItemGroup?: QueryGuideItemGroupResponseBodyGuideItemGroup;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      guideItemGroup: 'GuideItemGroup',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      guideItemGroup: QueryGuideItemGroupResponseBodyGuideItemGroup,
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGuideItemGroupResponseBody;
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
      body: QueryGuideItemGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupForCrowdOperationRequest extends $tea.Model {
  bizId?: string;
  groupId?: string;
  itemState?: string;
  pageNumber?: number;
  pageSize?: number;
  userFlag?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      groupId: 'GroupId',
      itemState: 'ItemState',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userFlag: 'UserFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      groupId: 'string',
      itemState: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userFlag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupForCrowdOperationResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryGuideItemGroupForCrowdOperationResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QueryGuideItemGroupForCrowdOperationResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupForCrowdOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGuideItemGroupForCrowdOperationResponseBody;
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
      body: QueryGuideItemGroupForCrowdOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryRequest extends $tea.Model {
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

export class QueryGuideItemGroupWithOutInventoryResponseBody extends $tea.Model {
  code?: string;
  itemList?: QueryGuideItemGroupWithOutInventoryResponseBodyItemList[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: { 'type': 'array', 'itemType': QueryGuideItemGroupWithOutInventoryResponseBodyItemList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryGuideItemGroupWithOutInventoryResponseBody;
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
  code?: string;
  logsId?: string;
  message?: string;
  movies?: QueryHotMoviesResponseBodyMovies;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      movies: 'Movies',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      movies: QueryHotMoviesResponseBodyMovies,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotMoviesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryHotMoviesResponseBody;
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
  itemIds?: number[];
  lmItemIds?: string[];
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
      itemIds: { 'type': 'array', 'itemType': 'number' },
      lmItemIds: { 'type': 'array', 'itemType': 'string' },
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
  itemList?: QueryInventoryOfItemsInBizItemGroupResponseBodyItemList[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: { 'type': 'array', 'itemType': QueryInventoryOfItemsInBizItemGroupResponseBodyItemList },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryInventoryOfItemsInBizItemGroupResponseBody;
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
  code?: string;
  item?: QueryItemDetailResponseBodyItem;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      item: 'Item',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      item: QueryItemDetailResponseBodyItem,
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemDetailResponseBody;
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
      body: QueryItemDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  divisionCode?: string;
  ip?: string;
  itemId?: number;
  lmItemId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      divisionCode: 'DivisionCode',
      ip: 'Ip',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      divisionCode: 'string',
      ip: 'string',
      itemId: 'number',
      lmItemId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBody extends $tea.Model {
  code?: string;
  item?: QueryItemDetailInnerResponseBodyItem;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      item: 'Item',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      item: QueryItemDetailInnerResponseBodyItem,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemDetailInnerResponseBody;
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
      body: QueryItemDetailInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailTeaRequest extends $tea.Model {
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

export class QueryItemDetailTeaResponseBody extends $tea.Model {
  code?: string;
  item?: QueryItemDetailTeaResponseBodyItem;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      item: 'Item',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      item: QueryItemDetailTeaResponseBodyItem,
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailTeaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemDetailTeaResponseBody;
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
      body: QueryItemDetailTeaResponseBody,
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
  itemBizList?: QueryItemInSubBizsResponseBodyItemBizList[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemBizList: 'ItemBizList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemBizList: { 'type': 'array', 'itemType': QueryItemInSubBizsResponseBodyItemBizList },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemInSubBizsResponseBody;
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
  code?: string;
  itemList?: QueryItemInventoryResponseBodyItemList;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: QueryItemInventoryResponseBodyItemList,
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemInventoryResponseBody;
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
      body: QueryItemInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2Request extends $tea.Model {
  bizId?: string;
  divisionCode?: string;
  ip?: string;
  itemList?: QueryItemInventoryV2RequestItemList[];
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
      itemList: { 'type': 'array', 'itemType': QueryItemInventoryV2RequestItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2ResponseBody extends $tea.Model {
  code?: string;
  itemList?: QueryItemInventoryV2ResponseBodyItemList;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      itemList: 'ItemList',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      itemList: QueryItemInventoryV2ResponseBodyItemList,
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2Response extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemInventoryV2ResponseBody;
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
      body: QueryItemInventoryV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemNextCycleRestrictionRequest extends $tea.Model {
  bizId?: string;
  lmItemId?: string[];
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemId: 'LmItemId',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemId: { 'type': 'array', 'itemType': 'string' },
      subBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemNextCycleRestrictionShrinkRequest extends $tea.Model {
  bizId?: string;
  lmItemIdShrink?: string;
  subBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmItemIdShrink: 'LmItemId',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmItemIdShrink: 'string',
      subBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemNextCycleRestrictionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QueryItemNextCycleRestrictionResponseBodyModel[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QueryItemNextCycleRestrictionResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemNextCycleRestrictionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryItemNextCycleRestrictionResponseBody;
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
      body: QueryItemNextCycleRestrictionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryLogisticsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryLogisticsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryLogisticsResponseBody;
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
      body: QueryLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoRequest extends $tea.Model {
  bizId?: string;
  channelId?: string;
  endTime?: string;
  extInfo?: string;
  mediaName?: string;
  pageNumber?: number;
  pageSize?: number;
  settleNo?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      mediaName: 'MediaName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      settleNo: 'SettleNo',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channelId: 'string',
      endTime: 'string',
      extInfo: 'string',
      mediaName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      settleNo: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryMediaSettleInfoResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryMediaSettleInfoResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMediaSettleInfoResponseBody;
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
      body: QueryMediaSettleInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesRequest extends $tea.Model {
  bizId?: string;
  extJson?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJson: 'ExtJson',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJson: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponseBody extends $tea.Model {
  bizMessages?: QueryMessagesResponseBodyBizMessages;
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizMessages: 'BizMessages',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizMessages: QueryMessagesResponseBodyBizMessages,
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMessagesResponseBody;
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
      body: QueryMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsRequest extends $tea.Model {
  bizId?: string;
  extJson?: string;
  movieId?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJson: 'ExtJson',
      movieId: 'MovieId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJson: 'string',
      movieId: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsResponseBody extends $tea.Model {
  code?: string;
  commentList?: QueryMovieCommentsResponseBodyCommentList;
  count?: number;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      commentList: 'CommentList',
      count: 'Count',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      commentList: QueryMovieCommentsResponseBodyCommentList,
      count: 'number',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieCommentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMovieCommentsResponseBody;
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
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  schedules?: QueryMovieSchedulesResponseBodySchedules;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      schedules: 'Schedules',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      schedules: QueryMovieSchedulesResponseBodySchedules,
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSchedulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMovieSchedulesResponseBody;
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
      body: QueryMovieSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsRequest extends $tea.Model {
  bizId?: string;
  extJson?: string;
  scheduleId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJson: 'ExtJson',
      scheduleId: 'ScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJson: 'string',
      scheduleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  seatMap?: QueryMovieSeatsResponseBodySeatMap;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      seatMap: 'SeatMap',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      seatMap: QueryMovieSeatsResponseBodySeatMap,
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieSeatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMovieSeatsResponseBody;
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
  extJson?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  movieTicket?: QueryMovieTicketsResponseBodyMovieTicket;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      movieTicket: 'MovieTicket',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      movieTicket: QueryMovieTicketsResponseBodyMovieTicket,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMovieTicketsResponseBody;
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
      body: QueryMovieTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  filterOption?: string;
  pageNumber?: number;
  pageSize?: number;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      filterOption: 'FilterOption',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      filterOption: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBody extends $tea.Model {
  code?: string;
  lmOrderList?: QueryOrderAndPaymentListResponseBodyLmOrderList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  postFee?: QueryOrderAndPaymentListResponseBodyPostFee;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmOrderList: 'LmOrderList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      postFee: 'PostFee',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmOrderList: QueryOrderAndPaymentListResponseBodyLmOrderList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      postFee: QueryOrderAndPaymentListResponseBodyPostFee,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderAndPaymentListResponseBody;
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
      body: QueryOrderAndPaymentListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  filterOption?: string;
  pageNumber?: number;
  pageSize?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      filterOption: 'FilterOption',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      filterOption: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderAndPaymentListWithDesignatedTbUidResponseBody;
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
      body: QueryOrderAndPaymentListWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBody extends $tea.Model {
  code?: string;
  commissionModels?: QueryOrderCommissionRateResponseBodyCommissionModels[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      commissionModels: 'CommissionModels',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      commissionModels: { 'type': 'array', 'itemType': QueryOrderCommissionRateResponseBodyCommissionModels },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderCommissionRateResponseBody;
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
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      filterOption: 'FilterOption',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      filterOption: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QueryOrderDetailInnerResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryOrderDetailInnerResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderDetailInnerResponseBody;
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
      body: QueryOrderDetailInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  paymentId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      paymentId: 'PaymentId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      paymentId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdResponseBody extends $tea.Model {
  code?: string;
  lmOrderIds?: QueryOrderIdByPayIdResponseBodyLmOrderIds;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmOrderIds: 'LmOrderIds',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmOrderIds: QueryOrderIdByPayIdResponseBodyLmOrderIds,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderIdByPayIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderIdByPayIdResponseBody;
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
      body: QueryOrderIdByPayIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  channelUserId?: string;
  lmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      channelUserId: 'ChannelUserId',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      channelUserId: 'string',
      lmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QueryOrderInfoAfterSaleResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryOrderInfoAfterSaleResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderInfoAfterSaleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderInfoAfterSaleResponseBody;
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
  lmOrderList?: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmOrderList: 'LmOrderList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmOrderList: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBody;
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
      body: QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  filterOption?: string;
  pageNumber?: number;
  pageSize?: number;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      filterOption: 'FilterOption',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      filterOption: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBody extends $tea.Model {
  code?: string;
  lmOrderList?: QueryOrderListResponseBodyLmOrderList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  postFee?: QueryOrderListResponseBodyPostFee;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmOrderList: 'LmOrderList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      postFee: 'PostFee',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmOrderList: QueryOrderListResponseBodyLmOrderList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      postFee: QueryOrderListResponseBodyPostFee,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderListResponseBody;
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
      body: QueryOrderListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  filterOption?: string;
  pageNumber?: number;
  pageSize?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      filterOption: 'FilterOption',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      filterOption: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryOrderListWithDesignatedTbUidResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QueryOrderListWithDesignatedTbUidResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderListWithDesignatedTbUidResponseBody;
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
      body: QueryOrderListWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  orderLogistics?: QueryOrderLogisticsResponseBodyOrderLogistics;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderLogistics: 'OrderLogistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderLogistics: QueryOrderLogisticsResponseBodyOrderLogistics,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderLogisticsResponseBody;
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
      body: QueryOrderLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  lmOrderId?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmOrderId: 'LmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmOrderId: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModel[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': QueryOrderLogisticsWithDesignatedTbUidResponseBodyModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryOrderLogisticsWithDesignatedTbUidResponseBody;
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
      body: QueryOrderLogisticsWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRealTbAccountSupportRequest extends $tea.Model {
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

export class QueryRealTbAccountSupportResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: boolean;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRealTbAccountSupportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRealTbAccountSupportResponseBody;
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
      body: QueryRealTbAccountSupportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  refundApplicationDetail?: QueryRefundApplicationDetailResponseBodyRefundApplicationDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      refundApplicationDetail: 'RefundApplicationDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      refundApplicationDetail: QueryRefundApplicationDetailResponseBodyRefundApplicationDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRefundApplicationDetailResponseBody;
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
      body: QueryRefundApplicationDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplyWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplyWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryRefundApplyWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryRefundApplyWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplyWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryRefundApplyWithDesignatedTbUidResponseBody;
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
      body: QueryRefundApplyWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySellerLicenseRequest extends $tea.Model {
  bizId?: string;
  sellerId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      sellerId: 'SellerId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      sellerId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySellerLicenseResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QuerySellerLicenseResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QuerySellerLicenseResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySellerLicenseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySellerLicenseResponseBody;
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
      body: QuerySellerLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsRequest extends $tea.Model {
  bizId?: string;
  currency?: string;
  endTime?: string;
  extInfo?: string;
  pageNumber?: number;
  pageSize?: number;
  payeeIds?: string;
  settleNoes?: string;
  settleStatus?: string;
  settleType?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currency: 'Currency',
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payeeIds: 'PayeeIds',
      settleNoes: 'SettleNoes',
      settleStatus: 'SettleStatus',
      settleType: 'SettleType',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currency: 'string',
      endTime: 'string',
      extInfo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      payeeIds: 'string',
      settleNoes: 'string',
      settleStatus: 'string',
      settleType: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryStatementsResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryStatementsResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryStatementsResponseBody;
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
      body: QueryStatementsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierItemBillDownloadUrlRequest extends $tea.Model {
  billId?: string;
  billPeriod?: string;
  billStatus?: string;
  bizId?: string;
  bizName?: string;
  lmShopId?: number;
  lmShopName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      billPeriod: 'BillPeriod',
      billStatus: 'BillStatus',
      bizId: 'BizId',
      bizName: 'BizName',
      lmShopId: 'LmShopId',
      lmShopName: 'LmShopName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      billPeriod: 'string',
      billStatus: 'string',
      bizId: 'string',
      bizName: 'string',
      lmShopId: 'number',
      lmShopName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierItemBillDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QuerySupplierItemBillDownloadUrlResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QuerySupplierItemBillDownloadUrlResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierItemBillDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySupplierItemBillDownloadUrlResponseBody;
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
      body: QuerySupplierItemBillDownloadUrlResponseBody,
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
  code?: string;
  lmActivityModelExtList?: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmActivityModelExtList: 'LmActivityModelExtList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmActivityModelExtList: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUnfinishedActivitiesResponseBody;
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
  code?: string;
  lmActivitySessionModelList?: QueryUnfinishedSessionsResponseBodyLmActivitySessionModelList;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmActivitySessionModelList: 'LmActivitySessionModelList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmActivitySessionModelList: QueryUnfinishedSessionsResponseBodyLmActivitySessionModelList,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUnfinishedSessionsResponseBody;
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
      body: QueryUnfinishedSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsRequest extends $tea.Model {
  bizId?: string;
  itemIds?: { [key: string]: any };
  lmItemIds?: { [key: string]: any };
  queryTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIds: 'ItemIds',
      lmItemIds: 'LmItemIds',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      queryTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsShrinkRequest extends $tea.Model {
  bizId?: string;
  itemIdsShrink?: string;
  lmItemIdsShrink?: string;
  queryTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemIdsShrink: 'ItemIds',
      lmItemIdsShrink: 'LmItemIds',
      queryTime: 'QueryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemIdsShrink: 'string',
      lmItemIdsShrink: 'string',
      queryTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponseBody extends $tea.Model {
  code?: string;
  lmItemActivitySessionModelListList?: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListList;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lmItemActivitySessionModelListList: 'LmItemActivitySessionModelListList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lmItemActivitySessionModelListList: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListList,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedSessions4ItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUnfinishedSessions4ItemsResponseBody;
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
  code?: string;
  logsId?: string;
  message?: string;
  movies?: QueryUpcomingMoviesResponseBodyMovies;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      movies: 'Movies',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      movies: QueryUpcomingMoviesResponseBodyMovies,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUpcomingMoviesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUpcomingMoviesResponseBody;
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
      body: QueryUpcomingMoviesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAccountRequest extends $tea.Model {
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

export class QueryUserAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryUserAccountResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryUserAccountResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserAccountResponseBody;
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
      body: QueryUserAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGameProcessRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  extInfo?: { [key: string]: any };
  processId?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      processId: 'ProcessId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      processId: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGameProcessShrinkRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  extInfoShrink?: string;
  processId?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      processId: 'ProcessId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      extInfoShrink: 'string',
      processId: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGameProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QueryUserGameProcessResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryUserGameProcessResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGameProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserGameProcessResponseBody;
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
      body: QueryUserGameProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserPointRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  extInfo?: { [key: string]: any };
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  extInfoShrink?: string;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      extInfoShrink: 'string',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: QueryUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUserPointResponseBody;
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
      body: QueryUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeRequest extends $tea.Model {
  merchantId?: string;
  outTradeNo?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      merchantId: 'MerchantId',
      outTradeNo: 'OutTradeNo',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merchantId: 'string',
      outTradeNo: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  queryWithholdTradeResponse?: QueryWithholdTradeResponseBodyQueryWithholdTradeResponse;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      queryWithholdTradeResponse: 'QueryWithholdTradeResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      queryWithholdTradeResponse: QueryWithholdTradeResponseBodyQueryWithholdTradeResponse,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryWithholdTradeResponseBody;
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
      body: QueryWithholdTradeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindTbAccountRequest extends $tea.Model {
  bizId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindTbAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RebindTbAccountResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RebindTbAccountResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindTbAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebindTbAccountResponseBody;
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
      body: RebindTbAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshSettlementOrderAccountRequest extends $tea.Model {
  accountId?: string;
  bizId?: string;
  extInfo?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bizId: 'string',
      extInfo: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshSettlementOrderAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RefreshSettlementOrderAccountResponseBodyModel[];
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': RefreshSettlementOrderAccountResponseBodyModel },
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshSettlementOrderAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefreshSettlementOrderAccountResponseBody;
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
      body: RefreshSettlementOrderAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderRequest extends $tea.Model {
  extInfo?: string;
  merchantId?: string;
  outRequestNo?: string;
  outTradeNo?: string;
  refundAmount?: string;
  refundReason?: string;
  refundRoyaltyParameters?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      merchantId: 'MerchantId',
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      refundAmount: 'RefundAmount',
      refundReason: 'RefundReason',
      refundRoyaltyParameters: 'RefundRoyaltyParameters',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      merchantId: 'string',
      outRequestNo: 'string',
      outTradeNo: 'string',
      refundAmount: 'string',
      refundReason: 'string',
      refundRoyaltyParameters: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  refundResponse?: RefundOrderResponseBodyRefundResponse;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      refundResponse: 'RefundResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      refundResponse: RefundOrderResponseBodyRefundResponse,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundOrderResponseBody;
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
      body: RefundOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundPointRequest extends $tea.Model {
  bizId?: string;
  lmOrderId?: string;
  reason?: string;
  sellerId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lmOrderId: 'LmOrderId',
      reason: 'Reason',
      sellerId: 'SellerId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lmOrderId: 'string',
      reason: 'string',
      sellerId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: RefundPointResponseBody;
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
      body: RefundPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundUserPointRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  message?: string;
  originRecordId?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      originRecordId: 'OriginRecordId',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      message: 'string',
      originRecordId: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfoShrink?: string;
  idempotentId?: string;
  message?: string;
  originRecordId?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      originRecordId: 'OriginRecordId',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfoShrink: 'string',
      idempotentId: 'string',
      message: 'string',
      originRecordId: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: RefundUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: RefundUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RefundUserPointResponseBody;
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
      body: RefundUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefuseMerchantSyncTaskRequest extends $tea.Model {
  bizId?: string;
  sellerNick?: string;
  taskId?: string;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      sellerNick: 'SellerNick',
      taskId: 'TaskId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      sellerNick: 'string',
      taskId: 'string',
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
  statusCode: number;
  body: RefuseMerchantSyncTaskResponseBody;
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
  statusCode: number;
  body: RegistAnonymousTbAccountResponseBody;
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
      body: RegistAnonymousTbAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterSettleAccountRequest extends $tea.Model {
  accountChannel?: string;
  accountName?: string;
  accountNo?: string;
  accountPayType?: string;
  accountType?: string;
  bizId?: string;
  countryOrAreaCode?: string;
  currency?: string;
  extInfo?: string;
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      accountChannel: 'AccountChannel',
      accountName: 'AccountName',
      accountNo: 'AccountNo',
      accountPayType: 'AccountPayType',
      accountType: 'AccountType',
      bizId: 'BizId',
      countryOrAreaCode: 'CountryOrAreaCode',
      currency: 'Currency',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountChannel: 'string',
      accountName: 'string',
      accountNo: 'string',
      accountPayType: 'string',
      accountType: 'string',
      bizId: 'string',
      countryOrAreaCode: 'string',
      currency: 'string',
      extInfo: 'string',
      idempotentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterSettleAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RegisterSettleAccountResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RegisterSettleAccountResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterSettleAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterSettleAccountResponseBody;
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
      body: RegisterSettleAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserAccountRequest extends $tea.Model {
  bizId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RegisterUserAccountResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RegisterUserAccountResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterUserAccountResponseBody;
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
      body: RegisterUserAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  extJson?: string;
  lockSeatApplyKey?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      lockSeatApplyKey: 'LockSeatApplyKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      lockSeatApplyKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatResponseBody extends $tea.Model {
  actionResult?: ReleaseMovieSeatResponseBodyActionResult;
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionResult: 'ActionResult',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionResult: ReleaseMovieSeatResponseBodyActionResult,
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseMovieSeatResponseBody;
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
      body: ReleaseMovieSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveAddressRequest extends $tea.Model {
  addressInfo?: string;
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: 'string',
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: RemoveAddressResponseBody;
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
      body: RemoveAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesRequest extends $tea.Model {
  bizId?: string;
  extJson?: string;
  messageIds?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJson: 'ExtJson',
      messageIds: 'MessageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJson: 'string',
      messageIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponseBody extends $tea.Model {
  actionResult?: RemoveMessagesResponseBodyActionResult;
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      actionResult: 'ActionResult',
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionResult: RemoveMessagesResponseBodyActionResult,
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveMessagesResponseBody;
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
      body: RemoveMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  buyOrderRequestModel?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      buyOrderRequestModel: 'BuyOrderRequestModel',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      buyOrderRequestModel: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RenderH5OrderResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RenderH5OrderResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenderH5OrderResponseBody;
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
      body: RenderH5OrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  deliveryAddress?: string;
  extJson?: string;
  itemList?: RenderOrderRequestItemList[];
  lmItemId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      deliveryAddress: 'DeliveryAddress',
      extJson: 'ExtJson',
      itemList: 'ItemList',
      lmItemId: 'LmItemId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      deliveryAddress: 'string',
      extJson: 'string',
      itemList: { 'type': 'array', 'itemType': RenderOrderRequestItemList },
      lmItemId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RenderOrderResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RenderOrderResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenderOrderResponseBody;
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
      body: RenderOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  deliveryAddress?: string;
  itemList?: RenderOrderWithDesignatedTbUidRequestItemList[];
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deliveryAddress: 'DeliveryAddress',
      itemList: 'ItemList',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deliveryAddress: 'string',
      itemList: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidRequestItemList },
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidShrinkRequest extends $tea.Model {
  bizId?: string;
  deliveryAddress?: string;
  itemListShrink?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deliveryAddress: 'DeliveryAddress',
      itemListShrink: 'ItemList',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deliveryAddress: 'string',
      itemListShrink: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RenderOrderWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RenderOrderWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenderOrderWithDesignatedTbUidResponseBody;
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
      body: RenderOrderWithDesignatedTbUidResponseBody,
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
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayForPayUrlResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: RepayForPayUrlResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: RepayForPayUrlResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayForPayUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RepayForPayUrlResponseBody;
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
      body: RepayForPayUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayOrderRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  lmOrderId?: number;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      lmOrderId: 'LmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      lmOrderId: 'number',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: RepayOrderResponseBody;
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
      body: RepayOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  extJson?: string;
  lmOrderId?: number;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extJson: 'ExtJson',
      lmOrderId: 'LmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extJson: 'string',
      lmOrderId: 'number',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RepayWithDesignatedTbUidResponseBodyModel;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: RepayWithDesignatedTbUidResponseBodyModel,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepayWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RepayWithDesignatedTbUidResponseBody;
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
      body: RepayWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatRequest extends $tea.Model {
  bizId?: string;
  bizUid?: string;
  extJson?: string;
  mobile?: string;
  scheduleId?: number;
  seatIds?: string;
  seatNames?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      mobile: 'Mobile',
      scheduleId: 'ScheduleId',
      seatIds: 'SeatIds',
      seatNames: 'SeatNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      mobile: 'string',
      scheduleId: 'number',
      seatIds: 'string',
      seatNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  requestId?: string;
  reservedSeat?: ReserveMovieSeatResponseBodyReservedSeat;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      requestId: 'RequestId',
      reservedSeat: 'ReservedSeat',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      requestId: 'string',
      reservedSeat: ReserveMovieSeatResponseBodyReservedSeat,
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReserveMovieSeatResponseBody;
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
      body: ReserveMovieSeatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SettleOrderRequest extends $tea.Model {
  extInfo?: string;
  merchantId?: string;
  outRequestNo?: string;
  outTradeNo?: string;
  royaltyParameters?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      merchantId: 'MerchantId',
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      royaltyParameters: 'RoyaltyParameters',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      merchantId: 'string',
      outRequestNo: 'string',
      outTradeNo: 'string',
      royaltyParameters: 'string',
      tradeNo: 'string',
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
  statusCode: number;
  body: SettleOrderResponseBody;
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
      body: SettleOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserGameRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  extInfo?: { [key: string]: any };
  gameId?: string;
  routeId?: string;
  thirdPartyUserId?: string;
  userApp?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      gameId: 'GameId',
      routeId: 'RouteId',
      thirdPartyUserId: 'ThirdPartyUserId',
      userApp: 'UserApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gameId: 'string',
      routeId: 'string',
      thirdPartyUserId: 'string',
      userApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserGameShrinkRequest extends $tea.Model {
  accountType?: string;
  activityId?: string;
  bizId?: string;
  extInfoShrink?: string;
  gameId?: string;
  routeId?: string;
  thirdPartyUserId?: string;
  userApp?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      activityId: 'ActivityId',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      gameId: 'GameId',
      routeId: 'RouteId',
      thirdPartyUserId: 'ThirdPartyUserId',
      userApp: 'UserApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      activityId: 'string',
      bizId: 'string',
      extInfoShrink: 'string',
      gameId: 'string',
      routeId: 'string',
      thirdPartyUserId: 'string',
      userApp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserGameResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: StartUserGameResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: StartUserGameResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserGameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartUserGameResponseBody;
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
      body: StartUserGameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsRequest extends $tea.Model {
  accountType?: string;
  bizId?: string;
  bizUid?: string;
  cpCode?: string;
  disputeId?: number;
  logisticsNo?: string;
  subLmOrderId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      bizId: 'BizId',
      bizUid: 'BizUid',
      cpCode: 'CpCode',
      disputeId: 'DisputeId',
      logisticsNo: 'LogisticsNo',
      subLmOrderId: 'SubLmOrderId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      bizId: 'string',
      bizUid: 'string',
      cpCode: 'string',
      disputeId: 'number',
      logisticsNo: 'string',
      subLmOrderId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: SubmitReturnGoodLogisticsResponseBody;
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
      body: SubmitReturnGoodLogisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsWithDesignatedTbUidRequest extends $tea.Model {
  bizId?: string;
  cpCode?: string;
  disputeId?: number;
  logisticsNo?: string;
  subLmOrderId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  thirdPartyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      cpCode: 'CpCode',
      disputeId: 'DisputeId',
      logisticsNo: 'LogisticsNo',
      subLmOrderId: 'SubLmOrderId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
      thirdPartyUserId: 'ThirdPartyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      cpCode: 'string',
      disputeId: 'number',
      logisticsNo: 'string',
      subLmOrderId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
      thirdPartyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsWithDesignatedTbUidResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: any;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: 'any',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogisticsWithDesignatedTbUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitReturnGoodLogisticsWithDesignatedTbUidResponseBody;
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
      body: SubmitReturnGoodLogisticsWithDesignatedTbUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoRequest extends $tea.Model {
  bizId?: string;
  itemList?: string;
  sellerNick?: string;
  taskId?: string;
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      itemList: 'ItemList',
      sellerNick: 'SellerNick',
      taskId: 'TaskId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      itemList: 'string',
      sellerNick: 'string',
      taskId: 'string',
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
  model?: SyncMerchantInfoResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: SyncMerchantInfoResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncMerchantInfoResponseBody;
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
      body: SyncMerchantInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnFreezeUserPointRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnFreezeUserPointShrinkRequest extends $tea.Model {
  accountType?: string;
  amount?: number;
  bizId?: string;
  extInfoShrink?: string;
  idempotentId?: string;
  message?: string;
  ruleId?: string;
  thirdPartyUserId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      amount: 'Amount',
      bizId: 'BizId',
      extInfoShrink: 'ExtInfo',
      idempotentId: 'IdempotentId',
      message: 'Message',
      ruleId: 'RuleId',
      thirdPartyUserId: 'ThirdPartyUserId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      amount: 'number',
      bizId: 'string',
      extInfoShrink: 'string',
      idempotentId: 'string',
      message: 'string',
      ruleId: 'string',
      thirdPartyUserId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnFreezeUserPointResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  model?: UnFreezeUserPointResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: UnFreezeUserPointResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnFreezeUserPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnFreezeUserPointResponseBody;
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
      body: UnFreezeUserPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsignWithholdAgreementRequest extends $tea.Model {
  agreementNo?: string;
  externalAgreementNo?: string;
  merchantId?: string;
  outRequestNo?: string;
  static names(): { [key: string]: string } {
    return {
      agreementNo: 'AgreementNo',
      externalAgreementNo: 'ExternalAgreementNo',
      merchantId: 'MerchantId',
      outRequestNo: 'OutRequestNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementNo: 'string',
      externalAgreementNo: 'string',
      merchantId: 'string',
      outRequestNo: 'string',
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
  statusCode: number;
  body: UnsignWithholdAgreementResponseBody;
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
      body: UnsignWithholdAgreementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAddressRequest extends $tea.Model {
  addressInfo?: string;
  bizId?: string;
  thirdPartyUserId?: string;
  useAnonymousTbAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      bizId: 'BizId',
      thirdPartyUserId: 'ThirdPartyUserId',
      useAnonymousTbAccount: 'UseAnonymousTbAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: 'string',
      bizId: 'string',
      thirdPartyUserId: 'string',
      useAnonymousTbAccount: 'boolean',
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
  statusCode: number;
  body: UpdateAddressResponseBody;
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
  mobileNo?: string;
  tbUserNick?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      extJson: 'ExtJson',
      mobileNo: 'MobileNo',
      tbUserNick: 'TbUserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      extJson: 'string',
      mobileNo: 'string',
      tbUserNick: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTaobaoAccountResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ValidateTaobaoAccountResponseBodyModel;
  requestId?: string;
  subCode?: string;
  subMessage?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logsId: 'LogsId',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      subCode: 'SubCode',
      subMessage: 'SubMessage',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: ValidateTaobaoAccountResponseBodyModel,
      requestId: 'string',
      subCode: 'string',
      subMessage: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTaobaoAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateTaobaoAccountResponseBody;
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
      body: ValidateTaobaoAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSupplierNewItemsRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  skuList?: number[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      skuList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundRequestLeavePictureList extends $tea.Model {
  desc?: string;
  picture?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      picture: 'Picture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      picture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundResponseBodyRefundApplicationData extends $tea.Model {
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundWithDesignatedTbUidRequestProofs extends $tea.Model {
  messagePic?: string;
  messagePicDesc?: string;
  static names(): { [key: string]: string } {
    return {
      messagePic: 'MessagePic',
      messagePicDesc: 'MessagePicDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messagePic: 'string',
      messagePicDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefundWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefundResponseBodyRefundApplicationData extends $tea.Model {
  disputeStatus?: number;
  disputeType?: number;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeStatus: 'number',
      disputeType: 'number',
      subLmOrderId: 'string',
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

export class CreateMovieTicketOrderResponseBodyModel extends $tea.Model {
  orderIds?: CreateMovieTicketOrderResponseBodyModelOrderIds;
  payTradeIds?: CreateMovieTicketOrderResponseBodyModelPayTradeIds;
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: CreateMovieTicketOrderResponseBodyModelOrderIds,
      payTradeIds: CreateMovieTicketOrderResponseBodyModelPayTradeIds,
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      skuId: 'number',
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

export class CreateOrderResponseBodyModel extends $tea.Model {
  lmOrderList?: CreateOrderResponseBodyModelLmOrderList;
  orderIds?: CreateOrderResponseBodyModelOrderIds;
  payTradeIds?: CreateOrderResponseBodyModelPayTradeIds;
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: CreateOrderResponseBodyModelLmOrderList,
      orderIds: CreateOrderResponseBodyModelOrderIds,
      payTradeIds: CreateOrderResponseBodyModelPayTradeIds,
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderPayUrlForOutDiscountResponseBodyModel extends $tea.Model {
  allIdsMap?: { [key: string]: {[key: string]: any} };
  lmOrderList?: string[];
  orderIds?: string[];
  payTradeIds?: string[];
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      allIdsMap: 'AllIdsMap',
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allIdsMap: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      lmOrderList: { 'type': 'array', 'itemType': 'string' },
      orderIds: { 'type': 'array', 'itemType': 'string' },
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderV2RequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      skuId: 'number',
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

export class CreateOrderV2ResponseBodyModel extends $tea.Model {
  lmOrderList?: CreateOrderV2ResponseBodyModelLmOrderList;
  orderIds?: CreateOrderV2ResponseBodyModelOrderIds;
  payTradeIds?: CreateOrderV2ResponseBodyModelPayTradeIds;
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: CreateOrderV2ResponseBodyModelLmOrderList,
      orderIds: CreateOrderV2ResponseBodyModelOrderIds,
      payTradeIds: CreateOrderV2ResponseBodyModelPayTradeIds,
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  allIdsMap?: { [key: string]: {[key: string]: any} };
  app?: string;
  lmOrderIds?: string[];
  orderIds?: string[];
  payTradeIds?: string[];
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      allIdsMap: 'AllIdsMap',
      app: 'App',
      lmOrderIds: 'LmOrderIds',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allIdsMap: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      app: 'string',
      lmOrderIds: { 'type': 'array', 'itemType': 'string' },
      orderIds: { 'type': 'array', 'itemType': 'string' },
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutDiscountOrderWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  allIdsMap?: { [key: string]: {[key: string]: any} };
  app?: string;
  lmOrderIds?: string[];
  orderIds?: string[];
  payTradeIds?: string[];
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      allIdsMap: 'AllIdsMap',
      app: 'App',
      lmOrderIds: 'LmOrderIds',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allIdsMap: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      app: 'string',
      lmOrderIds: { 'type': 'array', 'itemType': 'string' },
      orderIds: { 'type': 'array', 'itemType': 'string' },
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePayUrlResponseBodyModel extends $tea.Model {
  lmOrderList?: string[];
  orderIds?: string[];
  payTradeIds?: string[];
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': 'string' },
      orderIds: { 'type': 'array', 'itemType': 'string' },
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSettleConfirmResponseBodyTradeSettleConfirmResponse extends $tea.Model {
  outRequestNo?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualProductOrderRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      skuId: 'number',
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

export class CreateVirtualProductOrderResponseBodyModel extends $tea.Model {
  lmOrderList?: CreateVirtualProductOrderResponseBodyModelLmOrderList;
  orderIds?: CreateVirtualProductOrderResponseBodyModelOrderIds;
  payTradeIds?: CreateVirtualProductOrderResponseBodyModelPayTradeIds;
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: CreateVirtualProductOrderResponseBodyModelLmOrderList,
      orderIds: CreateVirtualProductOrderResponseBodyModelOrderIds,
      payTradeIds: CreateVirtualProductOrderResponseBodyModelPayTradeIds,
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWithholdTradeResponseBodyWithholdTradeResponse extends $tea.Model {
  outRequestNo?: string;
  outTradeNo?: string;
  paymentDate?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      paymentDate: 'PaymentDate',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      outTradeNo: 'string',
      paymentDate: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeductUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  action?: string;
  amount?: number;
  bizId?: string;
  bizUid?: string;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      action: 'Action',
      amount: 'Amount',
      bizId: 'BizId',
      bizUid: 'BizUid',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      action: 'string',
      amount: 'number',
      bizId: 'string',
      bizUid: 'string',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
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

export class EnableOrderResponseBodyModel extends $tea.Model {
  lmOrderList?: EnableOrderResponseBodyModelLmOrderList;
  orderIds?: EnableOrderResponseBodyModelOrderIds;
  payTradeIds?: EnableOrderResponseBodyModelPayTradeIds;
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: EnableOrderResponseBodyModelLmOrderList,
      orderIds: EnableOrderResponseBodyModelOrderIds,
      payTradeIds: EnableOrderResponseBodyModelPayTradeIds,
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderWithDesignatedTbUidResponseBodyModelLmOrderList extends $tea.Model {
  extJson?: { [key: string]: string };
  lmOrderId?: string;
  subLmOrderIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      extJson: 'ExtJson',
      lmOrderId: 'LmOrderId',
      subLmOrderIdList: 'SubLmOrderIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lmOrderId: 'string',
      subLmOrderIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableOrderWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  lmOrderList?: EnableOrderWithDesignatedTbUidResponseBodyModelLmOrderList[];
  orderIds?: string[];
  payTradeIds?: string[];
  redirectUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lmOrderList: 'LmOrderList',
      orderIds: 'OrderIds',
      payTradeIds: 'PayTradeIds',
      redirectUrl: 'RedirectUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmOrderList: { 'type': 'array', 'itemType': EnableOrderWithDesignatedTbUidResponseBodyModelLmOrderList },
      orderIds: { 'type': 'array', 'itemType': 'string' },
      payTradeIds: { 'type': 'array', 'itemType': 'string' },
      redirectUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteNodeResponseBodyModel extends $tea.Model {
  processInstanceId?: string;
  responseData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      processInstanceId: 'ProcessInstanceId',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processInstanceId: 'string',
      responseData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FreezeUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  action?: string;
  amount?: number;
  bizId?: string;
  bizUid?: string;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      action: 'Action',
      amount: 'Amount',
      bizId: 'BizId',
      bizUid: 'BizUid',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      action: 'string',
      amount: 'number',
      bizId: 'string',
      bizUid: 'string',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActivityGameInfoResponseBodyModel extends $tea.Model {
  extInfo?: string;
  gameDTO?: string;
  gameShowInfo?: string;
  userGameCoinInfos?: string;
  userProcessDTO?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      gameDTO: 'GameDTO',
      gameShowInfo: 'GameShowInfo',
      userGameCoinInfos: 'UserGameCoinInfos',
      userProcessDTO: 'UserProcessDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      gameDTO: 'string',
      gameShowInfo: 'string',
      userGameCoinInfos: 'string',
      userProcessDTO: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryChainResponseBodyCategoryList extends $tea.Model {
  categoryId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoryListResponseBodyCategoryListCategory extends $tea.Model {
  categoryId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      name: 'string',
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
  bizId?: string;
  liteShopId?: string;
  name?: string;
  src?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      liteShopId: 'LiteShopId',
      name: 'Name',
      src: 'Src',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      liteShopId: 'string',
      name: 'string',
      src: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetItemPromotionResponseBodyItemPromotionModel extends $tea.Model {
  endTime?: string;
  extInfo?: { [key: string]: any };
  itemId?: number;
  lmItemId?: string;
  promotionDesc?: string;
  promotionFlag?: boolean;
  promotionId?: string;
  promotionName?: string;
  skuPromotion?: { [key: string]: any };
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      promotionDesc: 'PromotionDesc',
      promotionFlag: 'PromotionFlag',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
      skuPromotion: 'SkuPromotion',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'number',
      lmItemId: 'string',
      promotionDesc: 'string',
      promotionFlag: 'boolean',
      promotionId: 'string',
      promotionName: 'string',
      skuPromotion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'string',
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
  bizId?: string;
  bizUid?: string;
  bizUserName?: string;
  extInfo?: { [key: string]: any };
  lmUserId?: number;
  returnUrl?: string;
  subBizId?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizUid: 'BizUid',
      bizUserName: 'BizUserName',
      extInfo: 'ExtInfo',
      lmUserId: 'LmUserId',
      returnUrl: 'ReturnUrl',
      subBizId: 'SubBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizUid: 'string',
      bizUserName: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmUserId: 'number',
      returnUrl: 'string',
      subBizId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTokenPageResponseBodyModel extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWithholdSignPageUrlResponseBodyWithholdSignResponse extends $tea.Model {
  outRequestNo?: string;
  pageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      pageUrl: 'PageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      pageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GiveUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  action?: string;
  amount?: number;
  bizId?: string;
  bizUid?: string;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      action: 'Action',
      amount: 'Amount',
      bizId: 'BizId',
      bizUid: 'BizUid',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      action: 'string',
      amount: 'number',
      bizId: 'string',
      bizUid: 'string',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPromotionToUserResponseBodyModel extends $tea.Model {
  effectiveEndTime?: number;
  effectiveStartTime?: number;
  promotionInstanceId?: string;
  subBizCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      promotionInstanceId: 'PromotionInstanceId',
      subBizCode: 'SubBizCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      promotionInstanceId: 'string',
      subBizCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  action?: string;
  amount?: number;
  bizId?: string;
  bizUid?: string;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      action: 'Action',
      amount: 'Amount',
      bizId: 'BizId',
      bizUid: 'BizUid',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      action: 'string',
      amount: 'number',
      bizId: 'string',
      bizUid: 'string',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
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

export class InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: number;
  reasonTips?: string;
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'ProofRequired',
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
      refundDescRequired: 'RefundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proofRequired: 'boolean',
      reasonTextId: 'number',
      reasonTips: 'string',
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

export class InitApplyRefundResponseBodyInitApplyRefundData extends $tea.Model {
  bizClaimType?: number;
  mainOrderRefund?: boolean;
  maxRefundFeeData?: InitApplyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData;
  refundReasonList?: InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonList;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      mainOrderRefund: 'MainOrderRefund',
      maxRefundFeeData: 'MaxRefundFeeData',
      refundReasonList: 'RefundReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      mainOrderRefund: 'boolean',
      maxRefundFeeData: InitApplyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData,
      refundReasonList: InitApplyRefundResponseBodyInitApplyRefundDataRefundReasonList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundWithDesignatedTbUidResponseBodyModelMaxRefundFeeData extends $tea.Model {
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

export class InitApplyRefundWithDesignatedTbUidResponseBodyModelRefundReasonList extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: number;
  reasonTips?: string;
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'ProofRequired',
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
      refundDescRequired: 'RefundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proofRequired: 'boolean',
      reasonTextId: 'number',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefundWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  bizClaimType?: number;
  lmOrderId?: string;
  mainOrderRefund?: boolean;
  maxRefundFeeData?: InitApplyRefundWithDesignatedTbUidResponseBodyModelMaxRefundFeeData;
  refundReasonList?: InitApplyRefundWithDesignatedTbUidResponseBodyModelRefundReasonList[];
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      lmOrderId: 'LmOrderId',
      mainOrderRefund: 'MainOrderRefund',
      maxRefundFeeData: 'MaxRefundFeeData',
      refundReasonList: 'RefundReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      lmOrderId: 'string',
      mainOrderRefund: 'boolean',
      maxRefundFeeData: InitApplyRefundWithDesignatedTbUidResponseBodyModelMaxRefundFeeData,
      refundReasonList: { 'type': 'array', 'itemType': InitApplyRefundWithDesignatedTbUidResponseBodyModelRefundReasonList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData extends $tea.Model {
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

export class InitModifyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: number;
  reasonTips?: string;
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'ProofRequired',
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
      refundDescRequired: 'RefundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proofRequired: 'boolean',
      reasonTextId: 'number',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundResponseBodyInitApplyRefundDataRefundReasonList extends $tea.Model {
  refundReasonList?: InitModifyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList[];
  static names(): { [key: string]: string } {
    return {
      refundReasonList: 'RefundReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundReasonList: { 'type': 'array', 'itemType': InitModifyRefundResponseBodyInitApplyRefundDataRefundReasonListRefundReasonList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundResponseBodyInitApplyRefundData extends $tea.Model {
  bizClaimType?: number;
  mainOrderRefund?: boolean;
  maxRefundFeeData?: InitModifyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData;
  refundReasonList?: InitModifyRefundResponseBodyInitApplyRefundDataRefundReasonList;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      mainOrderRefund: 'MainOrderRefund',
      maxRefundFeeData: 'MaxRefundFeeData',
      refundReasonList: 'RefundReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      mainOrderRefund: 'boolean',
      maxRefundFeeData: InitModifyRefundResponseBodyInitApplyRefundDataMaxRefundFeeData,
      refundReasonList: InitModifyRefundResponseBodyInitApplyRefundDataRefundReasonList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundWithDesignatedTbUidResponseBodyModelMaxRefundFeeData extends $tea.Model {
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

export class InitModifyRefundWithDesignatedTbUidResponseBodyModelRefundReasonList extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: number;
  reasonTips?: string;
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'ProofRequired',
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
      refundDescRequired: 'RefundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proofRequired: 'boolean',
      reasonTextId: 'number',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefundWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  bizClaimType?: number;
  lmOrderId?: string;
  mainOrderRefund?: boolean;
  maxRefundFeeData?: InitModifyRefundWithDesignatedTbUidResponseBodyModelMaxRefundFeeData;
  refundReasonList?: InitModifyRefundWithDesignatedTbUidResponseBodyModelRefundReasonList[];
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      lmOrderId: 'LmOrderId',
      mainOrderRefund: 'MainOrderRefund',
      maxRefundFeeData: 'MaxRefundFeeData',
      refundReasonList: 'RefundReasonList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      lmOrderId: 'string',
      mainOrderRefund: 'boolean',
      maxRefundFeeData: InitModifyRefundWithDesignatedTbUidResponseBodyModelMaxRefundFeeData,
      refundReasonList: { 'type': 'array', 'itemType': InitModifyRefundWithDesignatedTbUidResponseBodyModelRefundReasonList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityAtmosphereResponseBodyModel extends $tea.Model {
  bizUid?: string;
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizUid: 'BizUid',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUid: 'string',
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivityGameInfoResponseBodyModel extends $tea.Model {
  extInfo?: string;
  gameShowInfo?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'ExtInfo',
      gameShowInfo: 'GameShowInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: 'string',
      gameShowInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModelLmActivityPopModel extends $tea.Model {
  bizId?: string;
  displayDate?: string;
  endDate?: string;
  extInfo?: { [key: string]: any };
  id?: number;
  startDate?: string;
  subBizCode?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      extInfo: 'ExtInfo',
      id: 'Id',
      startDate: 'StartDate',
      subBizCode: 'SubBizCode',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      displayDate: 'string',
      endDate: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'number',
      startDate: 'string',
      subBizCode: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModel extends $tea.Model {
  itemId?: number;
  lmActivityPopModel?: ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModelLmActivityPopModel;
  lmItemId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmActivityPopModel: 'LmActivityPopModel',
      lmItemId: 'LmItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmActivityPopModel: ListItemActivitiesResponseBodyLmItemActivityModelListLmItemActivityModelLmActivityPopModel,
      lmItemId: 'string',
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

export class ListUserGameProcessResponseBodyModel extends $tea.Model {
  activityId?: string;
  createTime?: number;
  currentShowContent?: string;
  currentStepId?: string;
  currentStepStatus?: string;
  desc?: string;
  extInfo?: string;
  gameId?: string;
  modifyTime?: number;
  name?: string;
  processId?: string;
  routeId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      createTime: 'CreateTime',
      currentShowContent: 'CurrentShowContent',
      currentStepId: 'CurrentStepId',
      currentStepStatus: 'CurrentStepStatus',
      desc: 'Desc',
      extInfo: 'ExtInfo',
      gameId: 'GameId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      processId: 'ProcessId',
      routeId: 'RouteId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      createTime: 'number',
      currentShowContent: 'string',
      currentStepId: 'string',
      currentStepStatus: 'string',
      desc: 'string',
      extInfo: 'string',
      gameId: 'string',
      modifyTime: 'number',
      name: 'string',
      processId: 'string',
      routeId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPointRecordsResponseBodyModel extends $tea.Model {
  action?: string;
  amount?: number;
  createTime?: number;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  modifyTime?: number;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      amount: 'Amount',
      createTime: 'CreateTime',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      amount: 'number',
      createTime: 'number',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      modifyTime: 'number',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsRequestItemListSkuList extends $tea.Model {
  benefitId?: string;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  quantity?: number;
  skuId?: number;
  statusAction?: number;
  supplierPrice?: number;
  static names(): { [key: string]: string } {
    return {
      benefitId: 'BenefitId',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      skuId: 'SkuId',
      statusAction: 'StatusAction',
      supplierPrice: 'SupplierPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitId: 'string',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      quantity: 'number',
      skuId: 'number',
      statusAction: 'number',
      supplierPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBasicAndBizItemsRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  skuList?: ModifyBasicAndBizItemsRequestItemListSkuList[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
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
  itemId?: number;
  lmItemId?: string;
  skuIdList?: ModifyBasicAndBizItemsResponseBodyFailedItemListItemSkuIdList;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
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
  benefitId?: string;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  quantity?: number;
  skuId?: number;
  statusAction?: number;
  static names(): { [key: string]: string } {
    return {
      benefitId: 'BenefitId',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      skuId: 'SkuId',
      statusAction: 'StatusAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitId: 'string',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      quantity: 'number',
      skuId: 'number',
      statusAction: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBizItemsRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  skuList?: ModifyBizItemsRequestItemListSkuList[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
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
  itemId?: number;
  lmItemId?: string;
  skuIdList?: ModifyBizItemsResponseBodyFailedItemListItemSkuIdList;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
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

export class ModifyOrderDeliveryAddressResponseBodyModel extends $tea.Model {
  resultInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      resultInfo: 'ResultInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundRequestLeavePictureList extends $tea.Model {
  desc?: string;
  picture?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      picture: 'Picture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      picture: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundResponseBodyRefundApplicationData extends $tea.Model {
  disputeStatus?: number;
  disputeType?: number;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeStatus: 'number',
      disputeType: 'number',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundWithDesignatedTbUidRequestProofs extends $tea.Model {
  messagePic?: string;
  messagePicDesc?: string;
  static names(): { [key: string]: string } {
    return {
      messagePic: 'MessagePic',
      messagePicDesc: 'MessagePicDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messagePic: 'string',
      messagePicDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefundWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySettleAccountResponseBodyModel extends $tea.Model {
  accountId?: string;
  accountNo?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountNo: 'AccountNo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountNo: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUserGameProcessResponseBodyModel extends $tea.Model {
  activityId?: string;
  currentShowContent?: string;
  currentStepId?: string;
  currentStepStatus?: string;
  desc?: string;
  extInfo?: string;
  gameId?: string;
  name?: string;
  processId?: string;
  routeId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      currentShowContent: 'CurrentShowContent',
      currentStepId: 'CurrentStepId',
      currentStepStatus: 'CurrentStepStatus',
      desc: 'Desc',
      extInfo: 'ExtInfo',
      gameId: 'GameId',
      name: 'Name',
      processId: 'ProcessId',
      routeId: 'RouteId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      currentShowContent: 'string',
      currentStepId: 'string',
      currentStepStatus: 'string',
      desc: 'string',
      extInfo: 'string',
      gameId: 'string',
      name: 'string',
      processId: 'string',
      routeId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelListLmActivityItemSkuModel extends $tea.Model {
  activityPrice?: number;
  activityStatus?: string;
  bizId?: string;
  itemId?: number;
  lmActivityId?: number;
  lmItemId?: string;
  reservedPrice?: number;
  skuId?: number;
  skuPicUrl?: string;
  skuTitle?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      activityPrice: 'ActivityPrice',
      activityStatus: 'ActivityStatus',
      bizId: 'BizId',
      itemId: 'ItemId',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      reservedPrice: 'ReservedPrice',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuTitle: 'SkuTitle',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityPrice: 'number',
      activityStatus: 'string',
      bizId: 'string',
      itemId: 'number',
      lmActivityId: 'number',
      lmItemId: 'string',
      reservedPrice: 'number',
      skuId: 'number',
      skuPicUrl: 'string',
      skuTitle: 'string',
      tips: 'string',
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
  canSell?: boolean;
  itemActivityQuantity?: number;
  itemActivityStatus?: string;
  itemId?: number;
  itemTitle?: string;
  lmActivityId?: number;
  lmItemId?: string;
  lmShopId?: string;
  mainPicUrl?: string;
  sellableQuantity?: number;
  skuModelList?: QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelList;
  tbSellerId?: number;
  tbShopId?: number;
  tbShopName?: string;
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      itemActivityQuantity: 'ItemActivityQuantity',
      itemActivityStatus: 'ItemActivityStatus',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      lmActivityId: 'LmActivityId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      mainPicUrl: 'MainPicUrl',
      sellableQuantity: 'SellableQuantity',
      skuModelList: 'SkuModelList',
      tbSellerId: 'TbSellerId',
      tbShopId: 'TbShopId',
      tbShopName: 'TbShopName',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      itemActivityQuantity: 'number',
      itemActivityStatus: 'string',
      itemId: 'number',
      itemTitle: 'string',
      lmActivityId: 'number',
      lmItemId: 'string',
      lmShopId: 'string',
      mainPicUrl: 'string',
      sellableQuantity: 'number',
      skuModelList: QueryActivityItemsResponseBodyLmActivityItemModelListLmActivityItemModelSkuModelList,
      tbSellerId: 'number',
      tbShopId: 'number',
      tbShopName: 'string',
      tips: 'string',
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
  divisionCode?: number;
  divisionLevel?: number;
  divisionName?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'DivisionCode',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      parentId: 'number',
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
  addressDetail?: string;
  addressId?: number;
  area?: string;
  city?: string;
  country?: string;
  divisionCode?: string;
  fullName?: string;
  mobile?: string;
  postCode?: string;
  province?: string;
  status?: number;
  town?: string;
  townDivisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      addressId: 'AddressId',
      area: 'Area',
      city: 'City',
      country: 'Country',
      divisionCode: 'DivisionCode',
      fullName: 'FullName',
      mobile: 'Mobile',
      postCode: 'PostCode',
      province: 'Province',
      status: 'Status',
      town: 'Town',
      townDivisionCode: 'TownDivisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      addressId: 'number',
      area: 'string',
      city: 'string',
      country: 'string',
      divisionCode: 'string',
      fullName: 'string',
      mobile: 'string',
      postCode: 'string',
      province: 'string',
      status: 'number',
      town: 'string',
      townDivisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAddressListResponseBodyAddressList extends $tea.Model {
  addressDetail?: string;
  addressId?: number;
  area?: string;
  city?: string;
  country?: string;
  divisionCode?: string;
  fullName?: string;
  mobile?: string;
  postCode?: string;
  province?: string;
  status?: number;
  town?: string;
  townDivisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      addressId: 'AddressId',
      area: 'Area',
      city: 'City',
      country: 'Country',
      divisionCode: 'DivisionCode',
      fullName: 'FullName',
      mobile: 'Mobile',
      postCode: 'PostCode',
      province: 'Province',
      status: 'Status',
      town: 'Town',
      townDivisionCode: 'TownDivisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      addressId: 'number',
      area: 'string',
      city: 'string',
      country: 'string',
      divisionCode: 'string',
      fullName: 'string',
      mobile: 'string',
      postCode: 'string',
      province: 'string',
      status: 'number',
      town: 'string',
      townDivisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponseBodyModelAdvertiseSettleInfoList extends $tea.Model {
  advertiseName?: string;
  advertiseSettleAmount?: string;
  advertiseSettleDetailId?: string;
  channelId?: string;
  createDate?: string;
  endTime?: string;
  extInfo?: string;
  mediaSettleDetailId?: string;
  modifiedDate?: string;
  settleNo?: string;
  settleStatus?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      advertiseName: 'AdvertiseName',
      advertiseSettleAmount: 'AdvertiseSettleAmount',
      advertiseSettleDetailId: 'AdvertiseSettleDetailId',
      channelId: 'ChannelId',
      createDate: 'CreateDate',
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      mediaSettleDetailId: 'MediaSettleDetailId',
      modifiedDate: 'ModifiedDate',
      settleNo: 'SettleNo',
      settleStatus: 'SettleStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advertiseName: 'string',
      advertiseSettleAmount: 'string',
      advertiseSettleDetailId: 'string',
      channelId: 'string',
      createDate: 'string',
      endTime: 'string',
      extInfo: 'string',
      mediaSettleDetailId: 'string',
      modifiedDate: 'string',
      settleNo: 'string',
      settleStatus: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAdvertisementSettleInfoResponseBodyModel extends $tea.Model {
  advertiseSettleInfoList?: QueryAdvertisementSettleInfoResponseBodyModelAdvertiseSettleInfoList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advertiseSettleInfoList: 'AdvertiseSettleInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advertiseSettleInfoList: { 'type': 'array', 'itemType': QueryAdvertisementSettleInfoResponseBodyModelAdvertiseSettleInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgreementResponseBodyQueryAgreementResponse extends $tea.Model {
  agreementNo?: string;
  externalAgreementNo?: string;
  invalidTime?: string;
  signTime?: string;
  status?: string;
  validTime?: string;
  static names(): { [key: string]: string } {
    return {
      agreementNo: 'AgreementNo',
      externalAgreementNo: 'ExternalAgreementNo',
      invalidTime: 'InvalidTime',
      signTime: 'SignTime',
      status: 'Status',
      validTime: 'ValidTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementNo: 'string',
      externalAgreementNo: 'string',
      invalidTime: 'string',
      signTime: 'string',
      status: 'string',
      validTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAllCinemasResponseBodyCinemasCinema extends $tea.Model {
  address?: string;
  cinemaName?: string;
  cityId?: number;
  cityName?: string;
  id?: number;
  latitude?: string;
  longitude?: string;
  phone?: string;
  scheduleCloseTime?: number;
  standardId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      cinemaName: 'CinemaName',
      cityId: 'CityId',
      cityName: 'CityName',
      id: 'Id',
      latitude: 'Latitude',
      longitude: 'Longitude',
      phone: 'Phone',
      scheduleCloseTime: 'ScheduleCloseTime',
      standardId: 'StandardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cinemaName: 'string',
      cityId: 'number',
      cityName: 'string',
      id: 'number',
      latitude: 'string',
      longitude: 'string',
      phone: 'string',
      scheduleCloseTime: 'number',
      standardId: 'string',
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
  id?: number;
  name?: string;
  parentId?: number;
  pinYin?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
      pinYin: 'PinYin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'number',
      id: 'number',
      name: 'string',
      parentId: 'number',
      pinYin: 'string',
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
  bizId?: string;
  description?: string;
  displayDate?: string;
  endDate?: string;
  extInfo?: { [key: string]: any };
  lmActivityId?: number;
  lmSessionId?: number;
  name?: string;
  startDate?: string;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      description: 'Description',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      extInfo: 'ExtInfo',
      lmActivityId: 'LmActivityId',
      lmSessionId: 'LmSessionId',
      name: 'Name',
      startDate: 'StartDate',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      description: 'string',
      displayDate: 'string',
      endDate: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmActivityId: 'number',
      lmSessionId: 'number',
      name: 'string',
      startDate: 'string',
      subBizCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModel extends $tea.Model {
  itemId?: number;
  lmActivitySessionModel?: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModelLmActivitySessionModel;
  lmItemId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmActivitySessionModel: 'LmActivitySessionModel',
      lmItemId: 'LmItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmActivitySessionModel: QueryBestSession4ItemsResponseBodyLmItemActivitySessionModelListLmItemActivitySessionModelLmActivitySessionModel,
      lmItemId: 'string',
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
  accessUrl?: string;
  canBuy?: boolean;
  characteristicCode?: string;
  characteristicName?: string;
  exclusive?: boolean;
  icon?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  recommend?: boolean;
  showName?: string;
  subBizCode?: string;
  userLabelList?: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'AccessUrl',
      canBuy: 'CanBuy',
      characteristicCode: 'CharacteristicCode',
      characteristicName: 'CharacteristicName',
      exclusive: 'Exclusive',
      icon: 'Icon',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      recommend: 'Recommend',
      showName: 'ShowName',
      subBizCode: 'SubBizCode',
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
      canBuy: 'boolean',
      characteristicCode: 'string',
      characteristicName: 'string',
      exclusive: 'boolean',
      icon: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      recommend: 'boolean',
      showName: 'string',
      subBizCode: 'string',
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
  benefitId?: string;
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  gradePriceModels?: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModels;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  skuId?: number;
  skuPicUrl?: string;
  skuTitle?: string;
  taoBaoCurrentPrice?: number;
  userLabelList?: QueryBizItemListResponseBodyItemListItemSkuListSkuUserLabelList;
  static names(): { [key: string]: string } {
    return {
      benefitId: 'BenefitId',
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      gradePriceModels: 'GradePriceModels',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuTitle: 'SkuTitle',
      taoBaoCurrentPrice: 'TaoBaoCurrentPrice',
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitId: 'string',
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gradePriceModels: QueryBizItemListResponseBodyItemListItemSkuListSkuGradePriceModels,
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      skuId: 'number',
      skuPicUrl: 'string',
      skuTitle: 'string',
      taoBaoCurrentPrice: 'number',
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
  canSell?: boolean;
  categoryId?: number;
  customizedItemName?: string;
  extJson?: string;
  itemId?: number;
  itemTitle?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  reservePrice?: number;
  sellerId?: number;
  skuList?: QueryBizItemListResponseBodyItemListItemSkuList;
  taobaoShopName?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      customizedItemName: 'CustomizedItemName',
      extJson: 'ExtJson',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      skuList: 'SkuList',
      taobaoShopName: 'TaobaoShopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      categoryId: 'number',
      customizedItemName: 'string',
      extJson: 'string',
      itemId: 'number',
      itemTitle: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      reservePrice: 'number',
      sellerId: 'number',
      skuList: QueryBizItemListResponseBodyItemListItemSkuList,
      taobaoShopName: 'string',
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

export class QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList extends $tea.Model {
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

export class QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModel extends $tea.Model {
  accessUrl?: string;
  canBuy?: boolean;
  characteristicCode?: string;
  characteristicName?: string;
  exclusive?: boolean;
  icon?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  recommend?: boolean;
  showName?: string;
  subBizCode?: string;
  userLabelList?: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList;
  static names(): { [key: string]: string } {
    return {
      accessUrl: 'AccessUrl',
      canBuy: 'CanBuy',
      characteristicCode: 'CharacteristicCode',
      characteristicName: 'CharacteristicName',
      exclusive: 'Exclusive',
      icon: 'Icon',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      recommend: 'Recommend',
      showName: 'ShowName',
      subBizCode: 'SubBizCode',
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessUrl: 'string',
      canBuy: 'boolean',
      characteristicCode: 'string',
      characteristicName: 'string',
      exclusive: 'boolean',
      icon: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      recommend: 'boolean',
      showName: 'string',
      subBizCode: 'string',
      userLabelList: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModelUserLabelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModels extends $tea.Model {
  gradePriceModel?: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModel[];
  static names(): { [key: string]: string } {
    return {
      gradePriceModel: 'GradePriceModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gradePriceModel: { 'type': 'array', 'itemType': QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModelsGradePriceModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ResponseBodyItemListItemSkuListSkuUserLabelList extends $tea.Model {
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

export class QueryBizItemListV2ResponseBodyItemListItemSkuListSku extends $tea.Model {
  benefitId?: string;
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  gradePriceModels?: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModels;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  skuId?: number;
  skuPicUrl?: string;
  skuTitle?: string;
  taoBaoCurrentPrice?: number;
  userLabelList?: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuUserLabelList;
  static names(): { [key: string]: string } {
    return {
      benefitId: 'BenefitId',
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      gradePriceModels: 'GradePriceModels',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuTitle: 'SkuTitle',
      taoBaoCurrentPrice: 'TaoBaoCurrentPrice',
      userLabelList: 'UserLabelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitId: 'string',
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gradePriceModels: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuGradePriceModels,
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      skuId: 'number',
      skuPicUrl: 'string',
      skuTitle: 'string',
      taoBaoCurrentPrice: 'number',
      userLabelList: QueryBizItemListV2ResponseBodyItemListItemSkuListSkuUserLabelList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ResponseBodyItemListItemSkuList extends $tea.Model {
  sku?: QueryBizItemListV2ResponseBodyItemListItemSkuListSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryBizItemListV2ResponseBodyItemListItemSkuListSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ResponseBodyItemListItem extends $tea.Model {
  canSell?: boolean;
  categoryId?: number;
  customizedItemName?: string;
  extJson?: string;
  itemId?: number;
  itemTitle?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  reservePrice?: number;
  sellerId?: number;
  skuList?: QueryBizItemListV2ResponseBodyItemListItemSkuList;
  taobaoShopName?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      customizedItemName: 'CustomizedItemName',
      extJson: 'ExtJson',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      skuList: 'SkuList',
      taobaoShopName: 'TaobaoShopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      categoryId: 'number',
      customizedItemName: 'string',
      extJson: 'string',
      itemId: 'number',
      itemTitle: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      reservePrice: 'number',
      sellerId: 'number',
      skuList: QueryBizItemListV2ResponseBodyItemListItemSkuList,
      taobaoShopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListV2ResponseBodyItemList extends $tea.Model {
  item?: QueryBizItemListV2ResponseBodyItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBizItemListV2ResponseBodyItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemListWithCacheResponseBodyItemList extends $tea.Model {
  canSell?: boolean;
  itemId?: number;
  itemTitle?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  reservePrice?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      reservePrice: 'ReservePrice',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      itemId: 'number',
      itemTitle: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      reservePrice: 'number',
      status: 'number',
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
  activityItemSkuList?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuList;
  activityQuantity?: number;
  limitQuantityForPerson?: number;
  static names(): { [key: string]: string } {
    return {
      activityItemSkuList: 'ActivityItemSkuList',
      activityQuantity: 'ActivityQuantity',
      limitQuantityForPerson: 'LimitQuantityForPerson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityItemSkuList: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItemActivityItemSkuList,
      activityQuantity: 'number',
      limitQuantityForPerson: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItemActivitySessionItemSkuList extends $tea.Model {
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      skuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItem extends $tea.Model {
  activitySessionItemSkuList?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItemActivitySessionItemSkuList;
  limitQuantityForPerson?: number;
  saleableQuantity?: number;
  sessionQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      activitySessionItemSkuList: 'ActivitySessionItemSkuList',
      limitQuantityForPerson: 'LimitQuantityForPerson',
      saleableQuantity: 'SaleableQuantity',
      sessionQuantity: 'SessionQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activitySessionItemSkuList: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItemActivitySessionItemSkuList,
      limitQuantityForPerson: 'number',
      saleableQuantity: 'number',
      sessionQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySession extends $tea.Model {
  activitySessionItem?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItem;
  description?: string;
  displayDate?: number;
  endDate?: number;
  lmSessionId?: number;
  startDate?: number;
  subBizCode?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      activitySessionItem: 'ActivitySessionItem',
      description: 'Description',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      lmSessionId: 'LmSessionId',
      startDate: 'StartDate',
      subBizCode: 'SubBizCode',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activitySessionItem: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessionsActivitySessionActivitySessionItem,
      description: 'string',
      displayDate: 'number',
      endDate: 'number',
      lmSessionId: 'number',
      startDate: 'number',
      subBizCode: 'string',
      title: 'string',
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

export class QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivity extends $tea.Model {
  activityItem?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItem;
  activitySessions?: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessions;
  description?: string;
  endDate?: number;
  lmActivityId?: number;
  startDate?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      activityItem: 'ActivityItem',
      activitySessions: 'ActivitySessions',
      description: 'Description',
      endDate: 'EndDate',
      lmActivityId: 'LmActivityId',
      startDate: 'StartDate',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityItem: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivityItem,
      activitySessions: QueryBizItemsWithActivityResponseBodyItemListItemActivitiesActivityActivitySessions,
      description: 'string',
      endDate: 'number',
      lmActivityId: 'number',
      startDate: 'number',
      title: 'string',
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

export class QueryBizItemsWithActivityResponseBodyItemListItemSkuListSku extends $tea.Model {
  maxAllowedCount?: number;
  points?: number;
  pointsAmount?: number;
  pointsInfo?: string;
  pointsKey?: string;
  priceCent?: number;
  quantity?: number;
  skuId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      maxAllowedCount: 'MaxAllowedCount',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      pointsInfo: 'PointsInfo',
      pointsKey: 'PointsKey',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      skuId: 'SkuId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAllowedCount: 'number',
      points: 'number',
      pointsAmount: 'number',
      pointsInfo: 'string',
      pointsKey: 'string',
      priceCent: 'number',
      quantity: 'number',
      skuId: 'number',
      status: 'number',
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

export class QueryBizItemsWithActivityResponseBodyItemListItem extends $tea.Model {
  activities?: QueryBizItemsWithActivityResponseBodyItemListItemActivities;
  categoryId?: number;
  itemId?: number;
  itemTitle?: string;
  lmItemId?: string;
  maxAllowedCount?: number;
  picUrl?: string;
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  skuList?: QueryBizItemsWithActivityResponseBodyItemListItemSkuList;
  taobaoShopName?: string;
  totalSoldQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      activities: 'Activities',
      categoryId: 'CategoryId',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      maxAllowedCount: 'MaxAllowedCount',
      picUrl: 'PicUrl',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      skuList: 'SkuList',
      taobaoShopName: 'TaobaoShopName',
      totalSoldQuantity: 'TotalSoldQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activities: QueryBizItemsWithActivityResponseBodyItemListItemActivities,
      categoryId: 'number',
      itemId: 'number',
      itemTitle: 'string',
      lmItemId: 'string',
      maxAllowedCount: 'number',
      picUrl: 'string',
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      skuList: QueryBizItemsWithActivityResponseBodyItemListItemSkuList,
      taobaoShopName: 'string',
      totalSoldQuantity: 'number',
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

export class QueryBudgetTicketItemListByBizIdResponseBodyModel extends $tea.Model {
  invalid?: boolean;
  itemId?: number;
  poCode?: string;
  promotionId?: string;
  remnantAmount?: number;
  securityCode?: string;
  settlementPrice?: number;
  skuId?: number;
  subsidyAmount?: number;
  static names(): { [key: string]: string } {
    return {
      invalid: 'Invalid',
      itemId: 'ItemId',
      poCode: 'PoCode',
      promotionId: 'PromotionId',
      remnantAmount: 'RemnantAmount',
      securityCode: 'SecurityCode',
      settlementPrice: 'SettlementPrice',
      skuId: 'SkuId',
      subsidyAmount: 'SubsidyAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalid: 'boolean',
      itemId: 'number',
      poCode: 'string',
      promotionId: 'string',
      remnantAmount: 'number',
      securityCode: 'string',
      settlementPrice: 'number',
      skuId: 'number',
      subsidyAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChannelItemBillDownloadUrlResponseBodyModelData extends $tea.Model {
  billId?: string;
  fileDownloadUrl?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      fileDownloadUrl: 'FileDownloadUrl',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      fileDownloadUrl: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChannelItemBillDownloadUrlResponseBodyModel extends $tea.Model {
  data?: QueryChannelItemBillDownloadUrlResponseBodyModelData[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryChannelItemBillDownloadUrlResponseBodyModelData },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupResponseBodyGuideItemGroupItemInfo extends $tea.Model {
  itemId?: number;
  itemTitle?: string;
  itemUrl?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  reservePrice?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      itemUrl: 'ItemUrl',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      reservePrice: 'ReservePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      itemTitle: 'string',
      itemUrl: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      reservePrice: 'string',
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

export class QueryGuideItemGroupForCrowdOperationResponseBodyModel extends $tea.Model {
  atmospherePicUrl?: string;
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: string };
  itemId?: string;
  itemTitle?: string;
  itemUrl?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  reservePrice?: string;
  tags?: number[];
  whitePicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      atmospherePicUrl: 'AtmospherePicUrl',
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      itemUrl: 'ItemUrl',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      reservePrice: 'ReservePrice',
      tags: 'Tags',
      whitePicUrl: 'WhitePicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atmospherePicUrl: 'string',
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'string',
      itemTitle: 'string',
      itemUrl: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      reservePrice: 'string',
      tags: { 'type': 'array', 'itemType': 'number' },
      whitePicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGuideItemGroupWithOutInventoryResponseBodyItemList extends $tea.Model {
  customizedAttributeMap?: { [key: string]: any };
  itemId?: string;
  itemTitle?: string;
  itemUrl?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  reservePrice?: string;
  tags?: string[];
  whitePicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customizedAttributeMap: 'CustomizedAttributeMap',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      itemUrl: 'ItemUrl',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      reservePrice: 'ReservePrice',
      tags: 'Tags',
      whitePicUrl: 'WhitePicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'string',
      itemTitle: 'string',
      itemUrl: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      reservePrice: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      whitePicUrl: 'string',
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
  backgroundPicture?: string;
  country?: string;
  description?: string;
  director?: string;
  duration?: number;
  highlight?: string;
  id?: number;
  language?: string;
  leadingRole?: string;
  movieName?: string;
  movieNameEn?: string;
  movieTypeList?: QueryHotMoviesResponseBodyMoviesMovieMovieTypeList;
  movieVersion?: string;
  openDay?: string;
  openTime?: string;
  poster?: string;
  remark?: string;
  trailerList?: QueryHotMoviesResponseBodyMoviesMovieTrailerList;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundPicture: 'BackgroundPicture',
      country: 'Country',
      description: 'Description',
      director: 'Director',
      duration: 'Duration',
      highlight: 'Highlight',
      id: 'Id',
      language: 'Language',
      leadingRole: 'LeadingRole',
      movieName: 'MovieName',
      movieNameEn: 'MovieNameEn',
      movieTypeList: 'MovieTypeList',
      movieVersion: 'MovieVersion',
      openDay: 'OpenDay',
      openTime: 'OpenTime',
      poster: 'Poster',
      remark: 'Remark',
      trailerList: 'TrailerList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundPicture: 'string',
      country: 'string',
      description: 'string',
      director: 'string',
      duration: 'number',
      highlight: 'string',
      id: 'number',
      language: 'string',
      leadingRole: 'string',
      movieName: 'string',
      movieNameEn: 'string',
      movieTypeList: QueryHotMoviesResponseBodyMoviesMovieMovieTypeList,
      movieVersion: 'string',
      openDay: 'string',
      openTime: 'string',
      poster: 'string',
      remark: 'string',
      trailerList: QueryHotMoviesResponseBodyMoviesMovieTrailerList,
      type: 'string',
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
  quantity?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quantity: 'number',
      skuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInventoryOfItemsInBizItemGroupResponseBodyItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  skuList?: QueryInventoryOfItemsInBizItemGroupResponseBodyItemListSkuList[];
  totalQuantity?: number;
  totalSoldQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuList: 'SkuList',
      totalQuantity: 'TotalQuantity',
      totalSoldQuantity: 'TotalSoldQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      skuList: { 'type': 'array', 'itemType': QueryInventoryOfItemsInBizItemGroupResponseBodyItemListSkuList },
      totalQuantity: 'number',
      totalSoldQuantity: 'number',
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

export class QueryItemDetailResponseBodyItemSkusSku extends $tea.Model {
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  extJson?: string;
  itemId?: number;
  lmItemId?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  quantity?: number;
  reservePrice?: number;
  skuId?: number;
  skuPicUrl?: string;
  skuProperties?: string;
  skuPropertiesJson?: string;
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      extJson: 'ExtJson',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuProperties: 'SkuProperties',
      skuPropertiesJson: 'SkuPropertiesJson',
      skuTitle: 'SkuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extJson: 'string',
      itemId: 'number',
      lmItemId: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      quantity: 'number',
      reservePrice: 'number',
      skuId: 'number',
      skuPicUrl: 'string',
      skuProperties: 'string',
      skuPropertiesJson: 'string',
      skuTitle: 'string',
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

export class QueryItemDetailResponseBodyItem extends $tea.Model {
  canSell?: boolean;
  categoryId?: number;
  centerInventory?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  descOption?: string;
  descPath?: string;
  extJson?: string;
  iforestProps?: string;
  iforestPropsJson?: string;
  isCanSell?: boolean;
  isSellerPayPostfee?: boolean;
  itemId?: number;
  itemImages?: QueryItemDetailResponseBodyItemItemImages;
  itemTitle?: string;
  lmItemCategory?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  minPoints?: number;
  minPrice?: number;
  properties?: string;
  propertiesJson?: string;
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  sellerPayPostfee?: boolean;
  sellerType?: number;
  skus?: QueryItemDetailResponseBodyItemSkus;
  tbShopName?: string;
  totalSoldQuantity?: number;
  videoPicUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      centerInventory: 'CenterInventory',
      customizedAttributeMap: 'CustomizedAttributeMap',
      descOption: 'DescOption',
      descPath: 'DescPath',
      extJson: 'ExtJson',
      iforestProps: 'IforestProps',
      iforestPropsJson: 'IforestPropsJson',
      isCanSell: 'IsCanSell',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      lmItemCategory: 'LmItemCategory',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      minPoints: 'MinPoints',
      minPrice: 'MinPrice',
      properties: 'Properties',
      propertiesJson: 'PropertiesJson',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      sellerPayPostfee: 'SellerPayPostfee',
      sellerType: 'SellerType',
      skus: 'Skus',
      tbShopName: 'TbShopName',
      totalSoldQuantity: 'TotalSoldQuantity',
      videoPicUrl: 'VideoPicUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      categoryId: 'number',
      centerInventory: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      descOption: 'string',
      descPath: 'string',
      extJson: 'string',
      iforestProps: 'string',
      iforestPropsJson: 'string',
      isCanSell: 'boolean',
      isSellerPayPostfee: 'boolean',
      itemId: 'number',
      itemImages: QueryItemDetailResponseBodyItemItemImages,
      itemTitle: 'string',
      lmItemCategory: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      minPoints: 'number',
      minPrice: 'number',
      properties: 'string',
      propertiesJson: 'string',
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      sellerPayPostfee: 'boolean',
      sellerType: 'number',
      skus: QueryItemDetailResponseBodyItemSkus,
      tbShopName: 'string',
      totalSoldQuantity: 'number',
      videoPicUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItemSkuPropertysValues extends $tea.Model {
  id?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItemSkuPropertys extends $tea.Model {
  id?: number;
  text?: string;
  values?: QueryItemDetailInnerResponseBodyItemSkuPropertysValues[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      text: 'Text',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      text: 'string',
      values: { 'type': 'array', 'itemType': QueryItemDetailInnerResponseBodyItemSkuPropertysValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItemSkus extends $tea.Model {
  extJson?: string;
  itemId?: number;
  lmItemId?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  quantity?: number;
  reservePrice?: number;
  skuDesc?: string;
  skuId?: number;
  skuPicUrl?: string;
  skuPvs?: string;
  skuTitle?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      extJson: 'ExtJson',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      skuDesc: 'SkuDesc',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuPvs: 'SkuPvs',
      skuTitle: 'SkuTitle',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extJson: 'string',
      itemId: 'number',
      lmItemId: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      quantity: 'number',
      reservePrice: 'number',
      skuDesc: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      skuPvs: 'string',
      skuTitle: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailInnerResponseBodyItem extends $tea.Model {
  canSell?: boolean;
  categoryId?: number;
  categoryIds?: number[];
  centerInventory?: boolean;
  city?: string;
  descOption?: string;
  descPath?: string;
  firstPicUrl?: string;
  iforestProps?: { [key: string]: any }[];
  isCanSell?: boolean;
  isSellerPayPostfee?: boolean;
  itemId?: number;
  itemImages?: string[];
  itemTitle?: string;
  lmItemCategory?: string;
  lmShopId?: number;
  mainPicUrl?: string;
  minPoints?: number;
  minPrice?: number;
  properties?: { [key: string]: any };
  province?: string;
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  sellerNick?: string;
  sellerPayPostfee?: boolean;
  skuPropertys?: QueryItemDetailInnerResponseBodyItemSkuPropertys[];
  skus?: QueryItemDetailInnerResponseBodyItemSkus[];
  tbShopName?: string;
  totalSoldQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      categoryIds: 'CategoryIds',
      centerInventory: 'CenterInventory',
      city: 'City',
      descOption: 'DescOption',
      descPath: 'DescPath',
      firstPicUrl: 'FirstPicUrl',
      iforestProps: 'IforestProps',
      isCanSell: 'IsCanSell',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      lmItemCategory: 'LmItemCategory',
      lmShopId: 'LmShopId',
      mainPicUrl: 'MainPicUrl',
      minPoints: 'MinPoints',
      minPrice: 'MinPrice',
      properties: 'Properties',
      province: 'Province',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      sellerNick: 'SellerNick',
      sellerPayPostfee: 'SellerPayPostfee',
      skuPropertys: 'SkuPropertys',
      skus: 'Skus',
      tbShopName: 'TbShopName',
      totalSoldQuantity: 'TotalSoldQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      categoryId: 'number',
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      centerInventory: 'boolean',
      city: 'string',
      descOption: 'string',
      descPath: 'string',
      firstPicUrl: 'string',
      iforestProps: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      isCanSell: 'boolean',
      isSellerPayPostfee: 'boolean',
      itemId: 'number',
      itemImages: { 'type': 'array', 'itemType': 'string' },
      itemTitle: 'string',
      lmItemCategory: 'string',
      lmShopId: 'number',
      mainPicUrl: 'string',
      minPoints: 'number',
      minPrice: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      province: 'string',
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      sellerNick: 'string',
      sellerPayPostfee: 'boolean',
      skuPropertys: { 'type': 'array', 'itemType': QueryItemDetailInnerResponseBodyItemSkuPropertys },
      skus: { 'type': 'array', 'itemType': QueryItemDetailInnerResponseBodyItemSkus },
      tbShopName: 'string',
      totalSoldQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailTeaResponseBodyItemIforestProps extends $tea.Model {
  iforestProp?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      iforestProp: 'IforestProp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iforestProp: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailTeaResponseBodyItemItemImages extends $tea.Model {
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

export class QueryItemDetailTeaResponseBodyItemSkusSku extends $tea.Model {
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  extJson?: string;
  hasQuantity?: boolean;
  itemId?: number;
  lmItemId?: string;
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  quantity?: number;
  reservePrice?: number;
  simpleQuantity?: string;
  skuId?: number;
  skuPicUrl?: string;
  skuProperties?: { [key: string]: any };
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      extJson: 'ExtJson',
      hasQuantity: 'HasQuantity',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      simpleQuantity: 'SimpleQuantity',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuProperties: 'SkuProperties',
      skuTitle: 'SkuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extJson: 'string',
      hasQuantity: 'boolean',
      itemId: 'number',
      lmItemId: 'string',
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      quantity: 'number',
      reservePrice: 'number',
      simpleQuantity: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      skuProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skuTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailTeaResponseBodyItemSkus extends $tea.Model {
  sku?: QueryItemDetailTeaResponseBodyItemSkusSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryItemDetailTeaResponseBodyItemSkusSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailTeaResponseBodyItem extends $tea.Model {
  canSell?: boolean;
  categoryId?: number;
  centerInventory?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  descOption?: string;
  descPath?: string;
  extJson?: string;
  firstPicUrl?: string;
  hasQuantity?: boolean;
  iforestProps?: QueryItemDetailTeaResponseBodyItemIforestProps;
  isCanSell?: boolean;
  isSellerPayPostfee?: boolean;
  itemId?: number;
  itemImages?: QueryItemDetailTeaResponseBodyItemItemImages;
  itemTitle?: string;
  itemTotalSimpleValue?: string;
  lmItemCategory?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  minPoints?: number;
  minPrice?: number;
  properties?: { [key: string]: any };
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  sellerPayPostfee?: boolean;
  sellerType?: number;
  simpleQuantity?: string;
  skus?: QueryItemDetailTeaResponseBodyItemSkus;
  tbShopName?: string;
  totalSoldQuantity?: number;
  totalSoldSimpleQuantity?: string;
  videoPicUrl?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      centerInventory: 'CenterInventory',
      customizedAttributeMap: 'CustomizedAttributeMap',
      descOption: 'DescOption',
      descPath: 'DescPath',
      extJson: 'ExtJson',
      firstPicUrl: 'FirstPicUrl',
      hasQuantity: 'HasQuantity',
      iforestProps: 'IforestProps',
      isCanSell: 'IsCanSell',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      itemTotalSimpleValue: 'ItemTotalSimpleValue',
      lmItemCategory: 'LmItemCategory',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      minPoints: 'MinPoints',
      minPrice: 'MinPrice',
      properties: 'Properties',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      sellerPayPostfee: 'SellerPayPostfee',
      sellerType: 'SellerType',
      simpleQuantity: 'SimpleQuantity',
      skus: 'Skus',
      tbShopName: 'TbShopName',
      totalSoldQuantity: 'TotalSoldQuantity',
      totalSoldSimpleQuantity: 'TotalSoldSimpleQuantity',
      videoPicUrl: 'VideoPicUrl',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      categoryId: 'number',
      centerInventory: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      descOption: 'string',
      descPath: 'string',
      extJson: 'string',
      firstPicUrl: 'string',
      hasQuantity: 'boolean',
      iforestProps: QueryItemDetailTeaResponseBodyItemIforestProps,
      isCanSell: 'boolean',
      isSellerPayPostfee: 'boolean',
      itemId: 'number',
      itemImages: QueryItemDetailTeaResponseBodyItemItemImages,
      itemTitle: 'string',
      itemTotalSimpleValue: 'string',
      lmItemCategory: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      minPoints: 'number',
      minPrice: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      sellerPayPostfee: 'boolean',
      sellerType: 'number',
      simpleQuantity: 'string',
      skus: QueryItemDetailTeaResponseBodyItemSkus,
      tbShopName: 'string',
      totalSoldQuantity: 'number',
      totalSoldSimpleQuantity: 'string',
      videoPicUrl: 'string',
      videoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponseBodyItemBizListSkuList extends $tea.Model {
  benefitId?: string;
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: any };
  pointPrice?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  reservePrice?: number;
  skuId?: number;
  skuPicUrl?: string;
  skuProperties?: string;
  skuPropertiesJson?: string;
  skuTitle?: string;
  static names(): { [key: string]: string } {
    return {
      benefitId: 'BenefitId',
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      pointPrice: 'PointPrice',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      reservePrice: 'ReservePrice',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuProperties: 'SkuProperties',
      skuPropertiesJson: 'SkuPropertiesJson',
      skuTitle: 'SkuTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      benefitId: 'string',
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pointPrice: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      reservePrice: 'number',
      skuId: 'number',
      skuPicUrl: 'string',
      skuProperties: 'string',
      skuPropertiesJson: 'string',
      skuTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInSubBizsResponseBodyItemBizList extends $tea.Model {
  canSell?: boolean;
  categoryId?: number;
  descOption?: string;
  itemId?: number;
  itemImages?: string[];
  itemTitle?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  propertiesJson?: string;
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  skuList?: QueryItemInSubBizsResponseBodyItemBizListSkuList[];
  subBizId?: string;
  tbShopName?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      descOption: 'DescOption',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      propertiesJson: 'PropertiesJson',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      skuList: 'SkuList',
      subBizId: 'SubBizId',
      tbShopName: 'TbShopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      categoryId: 'number',
      descOption: 'string',
      itemId: 'number',
      itemImages: { 'type': 'array', 'itemType': 'string' },
      itemTitle: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      propertiesJson: 'string',
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      skuList: { 'type': 'array', 'itemType': QueryItemInSubBizsResponseBodyItemBizListSkuList },
      subBizId: 'string',
      tbShopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  skuIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
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
  inventory?: QueryItemInventoryResponseBodyItemListItemSkuListSkuInventory;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      inventory: 'Inventory',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: QueryItemInventoryResponseBodyItemListItemSkuListSkuInventory,
      skuId: 'number',
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
  itemId?: number;
  lmItemId?: string;
  skuList?: QueryItemInventoryResponseBodyItemListItemSkuList;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
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

export class QueryItemInventoryV2RequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  skuIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuIdList: 'SkuIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      skuIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2ResponseBodyItemListItemSkuListSkuInventory extends $tea.Model {
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

export class QueryItemInventoryV2ResponseBodyItemListItemSkuListSku extends $tea.Model {
  inventory?: QueryItemInventoryV2ResponseBodyItemListItemSkuListSkuInventory;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      inventory: 'Inventory',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: QueryItemInventoryV2ResponseBodyItemListItemSkuListSkuInventory,
      skuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2ResponseBodyItemListItemSkuList extends $tea.Model {
  sku?: QueryItemInventoryV2ResponseBodyItemListItemSkuListSku[];
  static names(): { [key: string]: string } {
    return {
      sku: 'Sku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sku: { 'type': 'array', 'itemType': QueryItemInventoryV2ResponseBodyItemListItemSkuListSku },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2ResponseBodyItemListItem extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  skuList?: QueryItemInventoryV2ResponseBodyItemListItemSkuList;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      skuList: 'SkuList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      skuList: QueryItemInventoryV2ResponseBodyItemListItemSkuList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemInventoryV2ResponseBodyItemList extends $tea.Model {
  item?: QueryItemInventoryV2ResponseBodyItemListItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryItemInventoryV2ResponseBodyItemListItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemNextCycleRestrictionResponseBodyModel extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  restrictionQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      restrictionQuantity: 'RestrictionQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      restrictionQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogisticsResponseBodyDataDataGoodsGoods extends $tea.Model {
  goodName?: string;
  itemId?: number;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      goodName: 'GoodName',
      itemId: 'ItemId',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodName: 'string',
      itemId: 'number',
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

export class QueryLogisticsResponseBodyDataData extends $tea.Model {
  dataProvider?: string;
  dataProviderTitle?: string;
  goods?: QueryLogisticsResponseBodyDataDataGoods;
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  logisticsDetailList?: QueryLogisticsResponseBodyDataDataLogisticsDetailList;
  mailNo?: string;
  static names(): { [key: string]: string } {
    return {
      dataProvider: 'DataProvider',
      dataProviderTitle: 'DataProviderTitle',
      goods: 'Goods',
      logisticsCompanyCode: 'LogisticsCompanyCode',
      logisticsCompanyName: 'LogisticsCompanyName',
      logisticsDetailList: 'LogisticsDetailList',
      mailNo: 'MailNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProvider: 'string',
      dataProviderTitle: 'string',
      goods: QueryLogisticsResponseBodyDataDataGoods,
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsDetailList: QueryLogisticsResponseBodyDataDataLogisticsDetailList,
      mailNo: 'string',
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
  channelId?: string;
  createDate?: string;
  endTime?: string;
  extInfo?: string;
  mediaName?: string;
  mediaSettleAmount?: string;
  mediaSettleDetailId?: string;
  modifiedDate?: string;
  settleNo?: string;
  settleStatus?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      createDate: 'CreateDate',
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      mediaName: 'MediaName',
      mediaSettleAmount: 'MediaSettleAmount',
      mediaSettleDetailId: 'MediaSettleDetailId',
      modifiedDate: 'ModifiedDate',
      settleNo: 'SettleNo',
      settleStatus: 'SettleStatus',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      createDate: 'string',
      endTime: 'string',
      extInfo: 'string',
      mediaName: 'string',
      mediaSettleAmount: 'string',
      mediaSettleDetailId: 'string',
      modifiedDate: 'string',
      settleNo: 'string',
      settleStatus: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaSettleInfoResponseBodyModel extends $tea.Model {
  mediaSettleInfoList?: QueryMediaSettleInfoResponseBodyModelMediaSettleInfoList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mediaSettleInfoList: 'MediaSettleInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaSettleInfoList: { 'type': 'array', 'itemType': QueryMediaSettleInfoResponseBodyModelMediaSettleInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessagesResponseBodyBizMessagesBizMessage extends $tea.Model {
  contentMapJson?: string;
  dataId?: number;
  pubTime?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      contentMapJson: 'ContentMapJson',
      dataId: 'DataId',
      pubTime: 'PubTime',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMapJson: 'string',
      dataId: 'number',
      pubTime: 'string',
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
  commentTime?: string;
  content?: string;
  favorCount?: number;
  id?: number;
  movieId?: number;
  nickName?: string;
  remark?: number;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      commentTime: 'CommentTime',
      content: 'Content',
      favorCount: 'FavorCount',
      id: 'Id',
      movieId: 'MovieId',
      nickName: 'NickName',
      remark: 'Remark',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentTime: 'string',
      content: 'string',
      favorCount: 'number',
      id: 'number',
      movieId: 'number',
      nickName: 'string',
      remark: 'number',
      subject: 'string',
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
  cinemaId?: number;
  hallName?: string;
  id?: number;
  isExpired?: boolean;
  maxCanBuy?: number;
  movieId?: number;
  movieVersion?: string;
  price?: number;
  releaseDate?: string;
  scheduleArea?: string;
  sectionId?: string;
  serviceFee?: number;
  sessionEndingTime?: string;
  sessionStartingTime?: string;
  static names(): { [key: string]: string } {
    return {
      cinemaId: 'CinemaId',
      hallName: 'HallName',
      id: 'Id',
      isExpired: 'IsExpired',
      maxCanBuy: 'MaxCanBuy',
      movieId: 'MovieId',
      movieVersion: 'MovieVersion',
      price: 'Price',
      releaseDate: 'ReleaseDate',
      scheduleArea: 'ScheduleArea',
      sectionId: 'SectionId',
      serviceFee: 'ServiceFee',
      sessionEndingTime: 'SessionEndingTime',
      sessionStartingTime: 'SessionStartingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cinemaId: 'number',
      hallName: 'string',
      id: 'number',
      isExpired: 'boolean',
      maxCanBuy: 'number',
      movieId: 'number',
      movieVersion: 'string',
      price: 'number',
      releaseDate: 'string',
      scheduleArea: 'string',
      sectionId: 'string',
      serviceFee: 'number',
      sessionEndingTime: 'string',
      sessionStartingTime: 'string',
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
  area?: string;
  column?: number;
  extId?: string;
  flag?: number;
  leftPx?: number;
  name?: string;
  row?: number;
  rowName?: string;
  status?: number;
  topPx?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      column: 'Column',
      extId: 'ExtId',
      flag: 'Flag',
      leftPx: 'LeftPx',
      name: 'Name',
      row: 'Row',
      rowName: 'RowName',
      status: 'Status',
      topPx: 'TopPx',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      column: 'number',
      extId: 'string',
      flag: 'number',
      leftPx: 'number',
      name: 'string',
      row: 'number',
      rowName: 'string',
      status: 'number',
      topPx: 'number',
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
  maxColumn?: number;
  maxLeftPx?: number;
  maxRow?: number;
  maxTopPx?: number;
  minColumn?: number;
  minLeftPx?: number;
  minRow?: number;
  minTopPx?: number;
  notice?: string;
  regular?: boolean;
  seatCount?: number;
  seats?: QueryMovieSeatsResponseBodySeatMapSeats;
  soldCount?: number;
  tipMessage?: string;
  static names(): { [key: string]: string } {
    return {
      maxCanBuy: 'MaxCanBuy',
      maxColumn: 'MaxColumn',
      maxLeftPx: 'MaxLeftPx',
      maxRow: 'MaxRow',
      maxTopPx: 'MaxTopPx',
      minColumn: 'MinColumn',
      minLeftPx: 'MinLeftPx',
      minRow: 'MinRow',
      minTopPx: 'MinTopPx',
      notice: 'Notice',
      regular: 'Regular',
      seatCount: 'SeatCount',
      seats: 'Seats',
      soldCount: 'SoldCount',
      tipMessage: 'TipMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCanBuy: 'number',
      maxColumn: 'number',
      maxLeftPx: 'number',
      maxRow: 'number',
      maxTopPx: 'number',
      minColumn: 'number',
      minLeftPx: 'number',
      minRow: 'number',
      minTopPx: 'number',
      notice: 'string',
      regular: 'boolean',
      seatCount: 'number',
      seats: QueryMovieSeatsResponseBodySeatMapSeats,
      soldCount: 'number',
      tipMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMovieTicketsResponseBodyMovieTicket extends $tea.Model {
  returnMessage?: string;
  status?: string;
  tbOrderId?: string;
  ticketContents?: string;
  static names(): { [key: string]: string } {
    return {
      returnMessage: 'ReturnMessage',
      status: 'Status',
      tbOrderId: 'TbOrderId',
      ticketContents: 'TicketContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnMessage: 'string',
      status: 'string',
      tbOrderId: 'string',
      ticketContents: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
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

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListPostFee extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
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
  enableStatus?: number;
  itemId?: number;
  itemPic?: string;
  itemPriceList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList;
  itemTitle?: string;
  lmItemId?: string;
  lmOrderId?: number;
  number?: number;
  orderStatus?: number;
  skuId?: number;
  skuName?: string;
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      enableStatus: 'EnableStatus',
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPriceList: 'ItemPriceList',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      lmOrderId: 'LmOrderId',
      number: 'Number',
      orderStatus: 'OrderStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableStatus: 'number',
      itemId: 'number',
      itemPic: 'string',
      itemPriceList: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList,
      itemTitle: 'string',
      lmItemId: 'string',
      lmOrderId: 'number',
      number: 'number',
      orderStatus: 'number',
      skuId: 'number',
      skuName: 'string',
      tbOrderId: 'number',
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

export class QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderList extends $tea.Model {
  createDate?: string;
  enableStatus?: number;
  extJson?: string;
  fundStructureModels?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModels;
  lmOrderId?: number;
  lmPaymentId?: string;
  logisticsStatus?: number;
  orderAmount?: number;
  orderStatus?: number;
  postFee?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListPostFee;
  shopName?: string;
  subOrderList?: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderList;
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      enableStatus: 'EnableStatus',
      extJson: 'ExtJson',
      fundStructureModels: 'FundStructureModels',
      lmOrderId: 'LmOrderId',
      lmPaymentId: 'LmPaymentId',
      logisticsStatus: 'LogisticsStatus',
      orderAmount: 'OrderAmount',
      orderStatus: 'OrderStatus',
      postFee: 'PostFee',
      shopName: 'ShopName',
      subOrderList: 'SubOrderList',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      enableStatus: 'number',
      extJson: 'string',
      fundStructureModels: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListFundStructureModels,
      lmOrderId: 'number',
      lmPaymentId: 'string',
      logisticsStatus: 'number',
      orderAmount: 'number',
      orderStatus: 'number',
      postFee: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListPostFee,
      shopName: 'string',
      subOrderList: QueryOrderAndPaymentListResponseBodyLmOrderListLmOrderListSubOrderList,
      tbOrderId: 'number',
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

export class QueryOrderAndPaymentListResponseBodyPostFee extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelFundStructureModels extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelPostFee extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelSubOrderListItemPriceList extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelSubOrderList extends $tea.Model {
  enableStatus?: number;
  itemId?: number;
  itemPic?: string;
  itemPriceList?: QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelSubOrderListItemPriceList[];
  itemTitle?: string;
  lmItemId?: string;
  lmOrderId?: number;
  number?: number;
  orderStatus?: number;
  skuId?: string;
  skuName?: string;
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      enableStatus: 'EnableStatus',
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPriceList: 'ItemPriceList',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      lmOrderId: 'LmOrderId',
      number: 'Number',
      orderStatus: 'OrderStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableStatus: 'number',
      itemId: 'number',
      itemPic: 'string',
      itemPriceList: { 'type': 'array', 'itemType': QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelSubOrderListItemPriceList },
      itemTitle: 'string',
      lmItemId: 'string',
      lmOrderId: 'number',
      number: 'number',
      orderStatus: 'number',
      skuId: 'string',
      skuName: 'string',
      tbOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  createTime?: string;
  enableStatus?: number;
  extJson?: string;
  fundStructureModels?: QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelFundStructureModels[];
  lmOrderId?: number;
  lmPaymentId?: string;
  logisticsStatus?: number;
  orderAmount?: number;
  orderStatus?: number;
  postFee?: QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelPostFee;
  shopName?: string;
  subOrderList?: QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelSubOrderList[];
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enableStatus: 'EnableStatus',
      extJson: 'ExtJson',
      fundStructureModels: 'FundStructureModels',
      lmOrderId: 'LmOrderId',
      lmPaymentId: 'LmPaymentId',
      logisticsStatus: 'LogisticsStatus',
      orderAmount: 'OrderAmount',
      orderStatus: 'OrderStatus',
      postFee: 'PostFee',
      shopName: 'ShopName',
      subOrderList: 'SubOrderList',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enableStatus: 'number',
      extJson: 'string',
      fundStructureModels: { 'type': 'array', 'itemType': QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelFundStructureModels },
      lmOrderId: 'number',
      lmPaymentId: 'string',
      logisticsStatus: 'number',
      orderAmount: 'number',
      orderStatus: 'number',
      postFee: QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelPostFee,
      shopName: 'string',
      subOrderList: { 'type': 'array', 'itemType': QueryOrderAndPaymentListWithDesignatedTbUidResponseBodyModelSubOrderList },
      tbOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfigConfigs extends $tea.Model {
  value?: number;
  valueUnit?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueUnit: 'ValueUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      valueUnit: 'string',
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
  rateConfig?: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfig;
  rateType?: string;
  static names(): { [key: string]: string } {
    return {
      rateConfig: 'RateConfig',
      rateType: 'RateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rateConfig: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfoRateConfig,
      rateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderCommissionRateResponseBodyCommissionModels extends $tea.Model {
  commissionInfo?: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfo;
  lmOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      commissionInfo: 'CommissionInfo',
      lmOrderId: 'LmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commissionInfo: QueryOrderCommissionRateResponseBodyCommissionModelsCommissionInfo,
      lmOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderFundStructureModelsFundStructure extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  lmOrderId?: number;
  tbSubOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
      lmOrderId: 'LmOrderId',
      tbSubOrderId: 'TbSubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
      lmOrderId: 'number',
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
  fundAmountMoney?: number;
  fundType?: string;
  lmOrderId?: number;
  tbSubOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
      lmOrderId: 'LmOrderId',
      tbSubOrderId: 'TbSubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
      lmOrderId: 'number',
      tbSubOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceListItemPrice extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  tbOrderId?: number;
  tbSubOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
      tbOrderId: 'TbOrderId',
      tbSubOrderId: 'TbSubOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
      tbOrderId: 'number',
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
  channelCode?: string;
  itemId?: number;
  itemPic?: string;
  itemPriceInfo?: string;
  itemPriceList?: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceList;
  itemTitle?: string;
  lmItemId?: string;
  lmOrderId?: number;
  number?: number;
  payStatus?: number;
  skuId?: number;
  skuName?: string;
  tbSubOrderId?: number;
  totalPaymentInfo?: string;
  static names(): { [key: string]: string } {
    return {
      channelCode: 'ChannelCode',
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPriceInfo: 'ItemPriceInfo',
      itemPriceList: 'ItemPriceList',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      lmOrderId: 'LmOrderId',
      number: 'Number',
      payStatus: 'PayStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbSubOrderId: 'TbSubOrderId',
      totalPaymentInfo: 'TotalPaymentInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCode: 'string',
      itemId: 'number',
      itemPic: 'string',
      itemPriceInfo: 'string',
      itemPriceList: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderListSubItemOrderItemPriceList,
      itemTitle: 'string',
      lmItemId: 'string',
      lmOrderId: 'number',
      number: 'number',
      payStatus: 'number',
      skuId: 'number',
      skuName: 'string',
      tbSubOrderId: 'number',
      totalPaymentInfo: 'string',
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

export class QueryOrderDetailInnerResponseBodyModelOrder extends $tea.Model {
  channelBizType?: string;
  channelCode?: string;
  channelOrderId?: string;
  createDate?: string;
  enableStatus?: number;
  endTime?: number;
  eticket?: boolean;
  extInfo?: { [key: string]: any };
  fundStructureModels?: QueryOrderDetailInnerResponseBodyModelOrderFundStructureModels;
  lmOrderId?: number;
  logisticsAddress?: string;
  logisticsCompName?: string;
  logisticsMobilePhone?: string;
  logisticsNo?: string;
  logisticsStatus?: number;
  logisticsStatusDesc?: string;
  logisticsUserName?: string;
  orderAmount?: number;
  orderPayInfo?: string;
  payStatus?: number;
  payWaterStatus?: number;
  postFee?: QueryOrderDetailInnerResponseBodyModelOrderPostFee;
  refundStatus?: number;
  resExtInfo?: string;
  sellerId?: number;
  sellerNick?: string;
  shipping?: string;
  shopName?: string;
  subItemOrderList?: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderList;
  tbOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      channelBizType: 'ChannelBizType',
      channelCode: 'ChannelCode',
      channelOrderId: 'ChannelOrderId',
      createDate: 'CreateDate',
      enableStatus: 'EnableStatus',
      endTime: 'EndTime',
      eticket: 'Eticket',
      extInfo: 'ExtInfo',
      fundStructureModels: 'FundStructureModels',
      lmOrderId: 'LmOrderId',
      logisticsAddress: 'LogisticsAddress',
      logisticsCompName: 'LogisticsCompName',
      logisticsMobilePhone: 'LogisticsMobilePhone',
      logisticsNo: 'LogisticsNo',
      logisticsStatus: 'LogisticsStatus',
      logisticsStatusDesc: 'LogisticsStatusDesc',
      logisticsUserName: 'LogisticsUserName',
      orderAmount: 'OrderAmount',
      orderPayInfo: 'OrderPayInfo',
      payStatus: 'PayStatus',
      payWaterStatus: 'PayWaterStatus',
      postFee: 'PostFee',
      refundStatus: 'RefundStatus',
      resExtInfo: 'ResExtInfo',
      sellerId: 'SellerId',
      sellerNick: 'SellerNick',
      shipping: 'Shipping',
      shopName: 'ShopName',
      subItemOrderList: 'SubItemOrderList',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelBizType: 'string',
      channelCode: 'string',
      channelOrderId: 'string',
      createDate: 'string',
      enableStatus: 'number',
      endTime: 'number',
      eticket: 'boolean',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fundStructureModels: QueryOrderDetailInnerResponseBodyModelOrderFundStructureModels,
      lmOrderId: 'number',
      logisticsAddress: 'string',
      logisticsCompName: 'string',
      logisticsMobilePhone: 'string',
      logisticsNo: 'string',
      logisticsStatus: 'number',
      logisticsStatusDesc: 'string',
      logisticsUserName: 'string',
      orderAmount: 'number',
      orderPayInfo: 'string',
      payStatus: 'number',
      payWaterStatus: 'number',
      postFee: QueryOrderDetailInnerResponseBodyModelOrderPostFee,
      refundStatus: 'number',
      resExtInfo: 'string',
      sellerId: 'number',
      sellerNick: 'string',
      shipping: 'string',
      shopName: 'string',
      subItemOrderList: QueryOrderDetailInnerResponseBodyModelOrderSubItemOrderList,
      tbOrderId: 'string',
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
  logisticsCompanyName?: string;
  logisticsNo?: string;
  logisticsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      logisticsCompanyCode: 'LogisticsCompanyCode',
      logisticsCompanyName: 'LogisticsCompanyName',
      logisticsNo: 'LogisticsNo',
      logisticsStatus: 'LogisticsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsNo: 'string',
      logisticsStatus: 'string',
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
  cashAmount?: string;
  createDate?: string;
  extJson?: string;
  lmOrderId?: number;
  logisticsList?: QueryOrderInfoAfterSaleResponseBodyModelLogisticsList;
  orderStatus?: string;
  points?: number;
  pointsAmount?: number;
  refundAmount?: number;
  refundPoints?: number;
  refundRate?: string;
  refundStatus?: string;
  shopName?: string;
  shopServiceTelephone?: string;
  tbOrderId?: number;
  xiaomiCode?: string;
  static names(): { [key: string]: string } {
    return {
      cashAmount: 'CashAmount',
      createDate: 'CreateDate',
      extJson: 'ExtJson',
      lmOrderId: 'LmOrderId',
      logisticsList: 'LogisticsList',
      orderStatus: 'OrderStatus',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      refundAmount: 'RefundAmount',
      refundPoints: 'RefundPoints',
      refundRate: 'RefundRate',
      refundStatus: 'RefundStatus',
      shopName: 'ShopName',
      shopServiceTelephone: 'ShopServiceTelephone',
      tbOrderId: 'TbOrderId',
      xiaomiCode: 'XiaomiCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashAmount: 'string',
      createDate: 'string',
      extJson: 'string',
      lmOrderId: 'number',
      logisticsList: QueryOrderInfoAfterSaleResponseBodyModelLogisticsList,
      orderStatus: 'string',
      points: 'number',
      pointsAmount: 'number',
      refundAmount: 'number',
      refundPoints: 'number',
      refundRate: 'string',
      refundStatus: 'string',
      shopName: 'string',
      shopServiceTelephone: 'string',
      tbOrderId: 'number',
      xiaomiCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderItemInfoByPaymentIdForAiZhanYouResponseBodyLmOrderListLmOrderList extends $tea.Model {
  itemId?: number;
  itemName?: string;
  lmItemId?: string;
  lmOrderId?: number;
  skuId?: number;
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemName: 'ItemName',
      lmItemId: 'LmItemId',
      lmOrderId: 'LmOrderId',
      skuId: 'SkuId',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      itemName: 'string',
      lmItemId: 'string',
      lmOrderId: 'number',
      skuId: 'number',
      skuName: 'string',
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

export class QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModelsFundStructureModels extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
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

export class QueryOrderListResponseBodyLmOrderListLmOrderListPostFee extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceListItemPriceList extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
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
  enableStatus?: number;
  itemId?: number;
  itemPic?: string;
  itemPriceList?: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList;
  itemTitle?: string;
  lmItemId?: string;
  lmOrderId?: number;
  number?: number;
  orderStatus?: number;
  skuId?: number;
  skuName?: string;
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      enableStatus: 'EnableStatus',
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPriceList: 'ItemPriceList',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      lmOrderId: 'LmOrderId',
      number: 'Number',
      orderStatus: 'OrderStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableStatus: 'number',
      itemId: 'number',
      itemPic: 'string',
      itemPriceList: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderListSubOrderListItemPriceList,
      itemTitle: 'string',
      lmItemId: 'string',
      lmOrderId: 'number',
      number: 'number',
      orderStatus: 'number',
      skuId: 'number',
      skuName: 'string',
      tbOrderId: 'number',
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

export class QueryOrderListResponseBodyLmOrderListLmOrderList extends $tea.Model {
  createDate?: string;
  enableStatus?: number;
  extJson?: string;
  fundStructureModels?: QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModels;
  lmOrderId?: number;
  logisticsStatus?: number;
  orderAmount?: number;
  orderStatus?: number;
  postFee?: QueryOrderListResponseBodyLmOrderListLmOrderListPostFee;
  shopName?: string;
  subOrderList?: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderList;
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      enableStatus: 'EnableStatus',
      extJson: 'ExtJson',
      fundStructureModels: 'FundStructureModels',
      lmOrderId: 'LmOrderId',
      logisticsStatus: 'LogisticsStatus',
      orderAmount: 'OrderAmount',
      orderStatus: 'OrderStatus',
      postFee: 'PostFee',
      shopName: 'ShopName',
      subOrderList: 'SubOrderList',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      enableStatus: 'number',
      extJson: 'string',
      fundStructureModels: QueryOrderListResponseBodyLmOrderListLmOrderListFundStructureModels,
      lmOrderId: 'number',
      logisticsStatus: 'number',
      orderAmount: 'number',
      orderStatus: 'number',
      postFee: QueryOrderListResponseBodyLmOrderListLmOrderListPostFee,
      shopName: 'string',
      subOrderList: QueryOrderListResponseBodyLmOrderListLmOrderListSubOrderList,
      tbOrderId: 'number',
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

export class QueryOrderListResponseBodyPostFee extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponseBodyModelFundStructureModels extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponseBodyModelPostFee extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponseBodyModelSubOrderListItemPriceList extends $tea.Model {
  fundAmount?: number;
  fundAmountMoney?: number;
  fundType?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmount: 'FundAmount',
      fundAmountMoney: 'FundAmountMoney',
      fundType: 'FundType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmount: 'number',
      fundAmountMoney: 'number',
      fundType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponseBodyModelSubOrderList extends $tea.Model {
  enableStatus?: number;
  itemId?: number;
  itemPic?: string;
  itemPriceList?: QueryOrderListWithDesignatedTbUidResponseBodyModelSubOrderListItemPriceList[];
  itemTitle?: string;
  lmItemId?: string;
  lmOrderId?: number;
  number?: number;
  orderStatus?: number;
  skuId?: string;
  skuName?: string;
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      enableStatus: 'EnableStatus',
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPriceList: 'ItemPriceList',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      lmOrderId: 'LmOrderId',
      number: 'Number',
      orderStatus: 'OrderStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableStatus: 'number',
      itemId: 'number',
      itemPic: 'string',
      itemPriceList: { 'type': 'array', 'itemType': QueryOrderListWithDesignatedTbUidResponseBodyModelSubOrderListItemPriceList },
      itemTitle: 'string',
      lmItemId: 'string',
      lmOrderId: 'number',
      number: 'number',
      orderStatus: 'number',
      skuId: 'string',
      skuName: 'string',
      tbOrderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderListWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  createTime?: string;
  enableStatus?: number;
  extJson?: string;
  fundStructureModels?: QueryOrderListWithDesignatedTbUidResponseBodyModelFundStructureModels[];
  lmOrderId?: number;
  logisticsStatus?: number;
  orderAmount?: number;
  orderStatus?: number;
  postFee?: QueryOrderListWithDesignatedTbUidResponseBodyModelPostFee;
  shopName?: string;
  subOrderList?: QueryOrderListWithDesignatedTbUidResponseBodyModelSubOrderList[];
  tbOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enableStatus: 'EnableStatus',
      extJson: 'ExtJson',
      fundStructureModels: 'FundStructureModels',
      lmOrderId: 'LmOrderId',
      logisticsStatus: 'LogisticsStatus',
      orderAmount: 'OrderAmount',
      orderStatus: 'OrderStatus',
      postFee: 'PostFee',
      shopName: 'ShopName',
      subOrderList: 'SubOrderList',
      tbOrderId: 'TbOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enableStatus: 'number',
      extJson: 'string',
      fundStructureModels: { 'type': 'array', 'itemType': QueryOrderListWithDesignatedTbUidResponseBodyModelFundStructureModels },
      lmOrderId: 'number',
      logisticsStatus: 'number',
      orderAmount: 'number',
      orderStatus: 'number',
      postFee: QueryOrderListWithDesignatedTbUidResponseBodyModelPostFee,
      shopName: 'string',
      subOrderList: { 'type': 'array', 'itemType': QueryOrderListWithDesignatedTbUidResponseBodyModelSubOrderList },
      tbOrderId: 'number',
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

export class QueryOrderLogisticsResponseBodyOrderLogistics extends $tea.Model {
  dataProvider?: string;
  dataProviderTitle?: string;
  fetcher?: QueryOrderLogisticsResponseBodyOrderLogisticsFetcher;
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  logisticsDetailList?: QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailList;
  receiver?: QueryOrderLogisticsResponseBodyOrderLogisticsReceiver;
  static names(): { [key: string]: string } {
    return {
      dataProvider: 'DataProvider',
      dataProviderTitle: 'DataProviderTitle',
      fetcher: 'Fetcher',
      logisticsCompanyCode: 'LogisticsCompanyCode',
      logisticsCompanyName: 'LogisticsCompanyName',
      logisticsDetailList: 'LogisticsDetailList',
      receiver: 'Receiver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProvider: 'string',
      dataProviderTitle: 'string',
      fetcher: QueryOrderLogisticsResponseBodyOrderLogisticsFetcher,
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsDetailList: QueryOrderLogisticsResponseBodyOrderLogisticsLogisticsDetailList,
      receiver: QueryOrderLogisticsResponseBodyOrderLogisticsReceiver,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelFetcher extends $tea.Model {
  address?: string;
  name?: string;
  phoneNumber?: string;
  requestId?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      requestId: 'RequestId',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      phoneNumber: 'string',
      requestId: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelLogisticsDetailList extends $tea.Model {
  ocurrTimeStr?: string;
  requestId?: string;
  standerdDesc?: string;
  statusIcon?: string;
  static names(): { [key: string]: string } {
    return {
      ocurrTimeStr: 'OcurrTimeStr',
      requestId: 'RequestId',
      standerdDesc: 'StanderdDesc',
      statusIcon: 'StatusIcon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ocurrTimeStr: 'string',
      requestId: 'string',
      standerdDesc: 'string',
      statusIcon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelPackageGoodItems extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  name?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      name: 'Name',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      name: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelReceiver extends $tea.Model {
  address?: string;
  name?: string;
  phoneNumber?: string;
  requestId?: string;
  zipCode?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      requestId: 'RequestId',
      zipCode: 'ZipCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      name: 'string',
      phoneNumber: 'string',
      requestId: 'string',
      zipCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderLogisticsWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  dataProvider?: string;
  dataProviderTitle?: string;
  fetcher?: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelFetcher;
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  logisticsDetailList?: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelLogisticsDetailList[];
  mailNo?: string;
  packageGoodItems?: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelPackageGoodItems[];
  receiver?: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelReceiver;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataProvider: 'DataProvider',
      dataProviderTitle: 'DataProviderTitle',
      fetcher: 'Fetcher',
      logisticsCompanyCode: 'LogisticsCompanyCode',
      logisticsCompanyName: 'LogisticsCompanyName',
      logisticsDetailList: 'LogisticsDetailList',
      mailNo: 'MailNo',
      packageGoodItems: 'PackageGoodItems',
      receiver: 'Receiver',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProvider: 'string',
      dataProviderTitle: 'string',
      fetcher: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelFetcher,
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsDetailList: { 'type': 'array', 'itemType': QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelLogisticsDetailList },
      mailNo: 'string',
      packageGoodItems: { 'type': 'array', 'itemType': QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelPackageGoodItems },
      receiver: QueryOrderLogisticsWithDesignatedTbUidResponseBodyModelReceiver,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetailResponseBodyRefundApplicationDetailApplyReasonText extends $tea.Model {
  reasonTextId?: number;
  reasonTips?: string;
  static names(): { [key: string]: string } {
    return {
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonTextId: 'number',
      reasonTips: 'string',
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

export class QueryRefundApplicationDetailResponseBodyRefundApplicationDetail extends $tea.Model {
  applyDisputeDesc?: string;
  applyReasonText?: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailApplyReasonText;
  bizClaimType?: number;
  disputeCreateTime?: string;
  disputeDesc?: string;
  disputeEndTime?: string;
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  lmOrderId?: string;
  maxRefundFeeData?: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailMaxRefundFeeData;
  orderLogisticsStatus?: number;
  realRefundFee?: number;
  refundFee?: number;
  refunderAddress?: string;
  refunderName?: string;
  refunderTel?: string;
  refunderZipCode?: string;
  returnGoodCount?: number;
  returnGoodLogisticsStatus?: number;
  sellerAgreeMsg?: string;
  sellerRefuseAgreementMessage?: string;
  sellerRefuseReason?: string;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      applyDisputeDesc: 'ApplyDisputeDesc',
      applyReasonText: 'ApplyReasonText',
      bizClaimType: 'BizClaimType',
      disputeCreateTime: 'DisputeCreateTime',
      disputeDesc: 'DisputeDesc',
      disputeEndTime: 'DisputeEndTime',
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      lmOrderId: 'LmOrderId',
      maxRefundFeeData: 'MaxRefundFeeData',
      orderLogisticsStatus: 'OrderLogisticsStatus',
      realRefundFee: 'RealRefundFee',
      refundFee: 'RefundFee',
      refunderAddress: 'RefunderAddress',
      refunderName: 'RefunderName',
      refunderTel: 'RefunderTel',
      refunderZipCode: 'RefunderZipCode',
      returnGoodCount: 'ReturnGoodCount',
      returnGoodLogisticsStatus: 'ReturnGoodLogisticsStatus',
      sellerAgreeMsg: 'SellerAgreeMsg',
      sellerRefuseAgreementMessage: 'SellerRefuseAgreementMessage',
      sellerRefuseReason: 'SellerRefuseReason',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDisputeDesc: 'string',
      applyReasonText: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailApplyReasonText,
      bizClaimType: 'number',
      disputeCreateTime: 'string',
      disputeDesc: 'string',
      disputeEndTime: 'string',
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      lmOrderId: 'string',
      maxRefundFeeData: QueryRefundApplicationDetailResponseBodyRefundApplicationDetailMaxRefundFeeData,
      orderLogisticsStatus: 'number',
      realRefundFee: 'number',
      refundFee: 'number',
      refunderAddress: 'string',
      refunderName: 'string',
      refunderTel: 'string',
      refunderZipCode: 'string',
      returnGoodCount: 'number',
      returnGoodLogisticsStatus: 'number',
      sellerAgreeMsg: 'string',
      sellerRefuseAgreementMessage: 'string',
      sellerRefuseReason: 'string',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplyWithDesignatedTbUidResponseBodyModelApplyReasonText extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: number;
  reasonTips?: string;
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'ProofRequired',
      reasonTextId: 'ReasonTextId',
      reasonTips: 'ReasonTips',
      refundDescRequired: 'RefundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proofRequired: 'boolean',
      reasonTextId: 'number',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplyWithDesignatedTbUidResponseBodyModelMaxRefundFeeData extends $tea.Model {
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

export class QueryRefundApplyWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  applyDisputeDesc?: string;
  applyReasonText?: QueryRefundApplyWithDesignatedTbUidResponseBodyModelApplyReasonText;
  bizClaimType?: number;
  disputeCreateTime?: string;
  disputeDesc?: string;
  disputeEndTime?: string;
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  lmOrderId?: string;
  maxRefundFeeData?: QueryRefundApplyWithDesignatedTbUidResponseBodyModelMaxRefundFeeData;
  orderLogisticsStatus?: number;
  realRefundFee?: number;
  refundFee?: number;
  refunderAddress?: string;
  refunderName?: string;
  refunderTel?: string;
  refunderZipCode?: string;
  returnGoodCount?: number;
  returnGoodLogisticsStatus?: number;
  sellerAgreeMsg?: string;
  sellerRefuseAgreementMessage?: string;
  sellerRefuseReason?: string;
  subLmOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      applyDisputeDesc: 'ApplyDisputeDesc',
      applyReasonText: 'ApplyReasonText',
      bizClaimType: 'BizClaimType',
      disputeCreateTime: 'DisputeCreateTime',
      disputeDesc: 'DisputeDesc',
      disputeEndTime: 'DisputeEndTime',
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      lmOrderId: 'LmOrderId',
      maxRefundFeeData: 'MaxRefundFeeData',
      orderLogisticsStatus: 'OrderLogisticsStatus',
      realRefundFee: 'RealRefundFee',
      refundFee: 'RefundFee',
      refunderAddress: 'RefunderAddress',
      refunderName: 'RefunderName',
      refunderTel: 'RefunderTel',
      refunderZipCode: 'RefunderZipCode',
      returnGoodCount: 'ReturnGoodCount',
      returnGoodLogisticsStatus: 'ReturnGoodLogisticsStatus',
      sellerAgreeMsg: 'SellerAgreeMsg',
      sellerRefuseAgreementMessage: 'SellerRefuseAgreementMessage',
      sellerRefuseReason: 'SellerRefuseReason',
      subLmOrderId: 'SubLmOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDisputeDesc: 'string',
      applyReasonText: QueryRefundApplyWithDesignatedTbUidResponseBodyModelApplyReasonText,
      bizClaimType: 'number',
      disputeCreateTime: 'string',
      disputeDesc: 'string',
      disputeEndTime: 'string',
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      lmOrderId: 'string',
      maxRefundFeeData: QueryRefundApplyWithDesignatedTbUidResponseBodyModelMaxRefundFeeData,
      orderLogisticsStatus: 'number',
      realRefundFee: 'number',
      refundFee: 'number',
      refunderAddress: 'string',
      refunderName: 'string',
      refunderTel: 'string',
      refunderZipCode: 'string',
      returnGoodCount: 'number',
      returnGoodLogisticsStatus: 'number',
      sellerAgreeMsg: 'string',
      sellerRefuseAgreementMessage: 'string',
      sellerRefuseReason: 'string',
      subLmOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySellerLicenseResponseBodyModel extends $tea.Model {
  licenseUrl?: string;
  sellerId?: string;
  static names(): { [key: string]: string } {
    return {
      licenseUrl: 'LicenseUrl',
      sellerId: 'SellerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseUrl: 'string',
      sellerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponseBodyModelStatementList extends $tea.Model {
  attributes?: string;
  createDate?: string;
  currency?: string;
  endTime?: string;
  extInfo?: string;
  kpNoGenerateTime?: string;
  modifiedDate?: string;
  payeeAccountId?: string;
  payeeAccountName?: string;
  payeeAccountNo?: string;
  payeeId?: string;
  payeeName?: string;
  settleAmount?: string;
  settleNo?: string;
  settleStatus?: string;
  startTime?: string;
  statusMessage?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createDate: 'CreateDate',
      currency: 'Currency',
      endTime: 'EndTime',
      extInfo: 'ExtInfo',
      kpNoGenerateTime: 'KpNoGenerateTime',
      modifiedDate: 'ModifiedDate',
      payeeAccountId: 'PayeeAccountId',
      payeeAccountName: 'PayeeAccountName',
      payeeAccountNo: 'PayeeAccountNo',
      payeeId: 'PayeeId',
      payeeName: 'PayeeName',
      settleAmount: 'SettleAmount',
      settleNo: 'SettleNo',
      settleStatus: 'SettleStatus',
      startTime: 'StartTime',
      statusMessage: 'StatusMessage',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      createDate: 'string',
      currency: 'string',
      endTime: 'string',
      extInfo: 'string',
      kpNoGenerateTime: 'string',
      modifiedDate: 'string',
      payeeAccountId: 'string',
      payeeAccountName: 'string',
      payeeAccountNo: 'string',
      payeeId: 'string',
      payeeName: 'string',
      settleAmount: 'string',
      settleNo: 'string',
      settleStatus: 'string',
      startTime: 'string',
      statusMessage: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStatementsResponseBodyModel extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  statementList?: QueryStatementsResponseBodyModelStatementList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statementList: 'StatementList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      statementList: { 'type': 'array', 'itemType': QueryStatementsResponseBodyModelStatementList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierItemBillDownloadUrlResponseBodyModelData extends $tea.Model {
  billId?: string;
  fileDownloadUrl?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      fileDownloadUrl: 'FileDownloadUrl',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      fileDownloadUrl: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySupplierItemBillDownloadUrlResponseBodyModel extends $tea.Model {
  data?: QuerySupplierItemBillDownloadUrlResponseBodyModelData[];
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QuerySupplierItemBillDownloadUrlResponseBodyModelData },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModelsLmActivitySessionModel extends $tea.Model {
  bizId?: string;
  description?: string;
  displayDate?: string;
  endDate?: string;
  extInfo?: { [key: string]: any };
  lmActivityId?: number;
  lmSessionId?: number;
  name?: string;
  startDate?: string;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      description: 'Description',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      extInfo: 'ExtInfo',
      lmActivityId: 'LmActivityId',
      lmSessionId: 'LmSessionId',
      name: 'Name',
      startDate: 'StartDate',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      description: 'string',
      displayDate: 'string',
      endDate: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmActivityId: 'number',
      lmSessionId: 'number',
      name: 'string',
      startDate: 'string',
      subBizCode: 'string',
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
  activityPicUrl?: string;
  bizId?: string;
  description?: string;
  endDate?: string;
  lmActivityId?: number;
  lmActivitySessionModels?: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModels;
  name?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      activityPicUrl: 'ActivityPicUrl',
      bizId: 'BizId',
      description: 'Description',
      endDate: 'EndDate',
      lmActivityId: 'LmActivityId',
      lmActivitySessionModels: 'LmActivitySessionModels',
      name: 'Name',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityPicUrl: 'string',
      bizId: 'string',
      description: 'string',
      endDate: 'string',
      lmActivityId: 'number',
      lmActivitySessionModels: QueryUnfinishedActivitiesResponseBodyLmActivityModelExtListLmActivityModelV2ExtLmActivitySessionModels,
      name: 'string',
      startDate: 'string',
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
  bizId?: string;
  description?: string;
  displayDate?: string;
  endDate?: string;
  lmActivityId?: number;
  lmSessionId?: number;
  name?: string;
  startDate?: string;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      description: 'Description',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      lmActivityId: 'LmActivityId',
      lmSessionId: 'LmSessionId',
      name: 'Name',
      startDate: 'StartDate',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      description: 'string',
      displayDate: 'string',
      endDate: 'string',
      lmActivityId: 'number',
      lmSessionId: 'number',
      name: 'string',
      startDate: 'string',
      subBizCode: 'string',
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
  bizId?: string;
  description?: string;
  displayDate?: string;
  endDate?: string;
  extInfo?: { [key: string]: any };
  lmActivityId?: number;
  lmSessionId?: number;
  name?: string;
  startDate?: string;
  subBizCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      description: 'Description',
      displayDate: 'DisplayDate',
      endDate: 'EndDate',
      extInfo: 'ExtInfo',
      lmActivityId: 'LmActivityId',
      lmSessionId: 'LmSessionId',
      name: 'Name',
      startDate: 'StartDate',
      subBizCode: 'SubBizCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      description: 'string',
      displayDate: 'string',
      endDate: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmActivityId: 'number',
      lmSessionId: 'number',
      name: 'string',
      startDate: 'string',
      subBizCode: 'string',
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
  itemId?: number;
  lmActivitySessionModels?: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModels;
  lmItemId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmActivitySessionModels: 'LmActivitySessionModels',
      lmItemId: 'LmItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmActivitySessionModels: QueryUnfinishedSessions4ItemsResponseBodyLmItemActivitySessionModelListListLmItemActivitySessionModelListLmActivitySessionModels,
      lmItemId: 'string',
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
  backgroundPicture?: string;
  country?: string;
  description?: string;
  director?: string;
  duration?: number;
  highlight?: string;
  id?: number;
  language?: string;
  leadingRole?: string;
  movieName?: string;
  movieNameEn?: string;
  movieTypeList?: string;
  movieVersion?: string;
  openDay?: string;
  openTime?: string;
  poster?: string;
  remark?: string;
  trailerList?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundPicture: 'BackgroundPicture',
      country: 'Country',
      description: 'Description',
      director: 'Director',
      duration: 'Duration',
      highlight: 'Highlight',
      id: 'Id',
      language: 'Language',
      leadingRole: 'LeadingRole',
      movieName: 'MovieName',
      movieNameEn: 'MovieNameEn',
      movieTypeList: 'MovieTypeList',
      movieVersion: 'MovieVersion',
      openDay: 'OpenDay',
      openTime: 'OpenTime',
      poster: 'Poster',
      remark: 'Remark',
      trailerList: 'TrailerList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundPicture: 'string',
      country: 'string',
      description: 'string',
      director: 'string',
      duration: 'number',
      highlight: 'string',
      id: 'number',
      language: 'string',
      leadingRole: 'string',
      movieName: 'string',
      movieNameEn: 'string',
      movieTypeList: 'string',
      movieVersion: 'string',
      openDay: 'string',
      openTime: 'string',
      poster: 'string',
      remark: 'string',
      trailerList: 'string',
      type: 'string',
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

export class QueryUserAccountResponseBodyModel extends $tea.Model {
  bizId?: string;
  CUserId?: string;
  extInfo?: string;
  lmUid?: number;
  requestId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      CUserId: 'CUserId',
      extInfo: 'ExtInfo',
      lmUid: 'LmUid',
      requestId: 'RequestId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      CUserId: 'string',
      extInfo: 'string',
      lmUid: 'number',
      requestId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGameProcessResponseBodyModel extends $tea.Model {
  activityId?: string;
  createTime?: number;
  currentShowContent?: string;
  currentStepId?: string;
  currentStepStatus?: string;
  desc?: string;
  extInfo?: string;
  gameId?: string;
  modifyTime?: number;
  name?: string;
  processId?: string;
  routeId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      createTime: 'CreateTime',
      currentShowContent: 'CurrentShowContent',
      currentStepId: 'CurrentStepId',
      currentStepStatus: 'CurrentStepStatus',
      desc: 'Desc',
      extInfo: 'ExtInfo',
      gameId: 'GameId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      processId: 'ProcessId',
      routeId: 'RouteId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      createTime: 'number',
      currentShowContent: 'string',
      currentStepId: 'string',
      currentStepStatus: 'string',
      desc: 'string',
      extInfo: 'string',
      gameId: 'string',
      modifyTime: 'number',
      name: 'string',
      processId: 'string',
      routeId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  bizId?: string;
  bizUid?: string;
  createTime?: number;
  currentAmount?: number;
  frozenAmount?: number;
  historyAmount?: number;
  level?: string;
  modifyTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bizId: 'BizId',
      bizUid: 'BizUid',
      createTime: 'CreateTime',
      currentAmount: 'CurrentAmount',
      frozenAmount: 'FrozenAmount',
      historyAmount: 'HistoryAmount',
      level: 'Level',
      modifyTime: 'ModifyTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bizId: 'string',
      bizUid: 'string',
      createTime: 'number',
      currentAmount: 'number',
      frozenAmount: 'number',
      historyAmount: 'number',
      level: 'string',
      modifyTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWithholdTradeResponseBodyQueryWithholdTradeResponse extends $tea.Model {
  outTradeNo?: string;
  paymentDate?: string;
  settleStatus?: string;
  totalAmount?: string;
  tradeNo?: string;
  tradeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      outTradeNo: 'OutTradeNo',
      paymentDate: 'PaymentDate',
      settleStatus: 'SettleStatus',
      totalAmount: 'TotalAmount',
      tradeNo: 'TradeNo',
      tradeStatus: 'TradeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outTradeNo: 'string',
      paymentDate: 'string',
      settleStatus: 'string',
      totalAmount: 'string',
      tradeNo: 'string',
      tradeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebindTbAccountResponseBodyModel extends $tea.Model {
  bizId?: string;
  CUserId?: string;
  extInfo?: string;
  lmUid?: number;
  requestId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      CUserId: 'CUserId',
      extInfo: 'ExtInfo',
      lmUid: 'LmUid',
      requestId: 'RequestId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      CUserId: 'string',
      extInfo: 'string',
      lmUid: 'number',
      requestId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshSettlementOrderAccountResponseBodyModel extends $tea.Model {
  accountNo?: string;
  message?: string;
  result?: string;
  settleNo?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      message: 'Message',
      result: 'Result',
      settleNo: 'SettleNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      message: 'string',
      result: 'string',
      settleNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundOrderResponseBodyRefundResponse extends $tea.Model {
  fundChange?: string;
  gmtRefundPay?: string;
  outRequestNo?: string;
  outTradeNo?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      fundChange: 'FundChange',
      gmtRefundPay: 'GmtRefundPay',
      outRequestNo: 'OutRequestNo',
      outTradeNo: 'OutTradeNo',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundChange: 'string',
      gmtRefundPay: 'string',
      outRequestNo: 'string',
      outTradeNo: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefundUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  action?: string;
  amount?: number;
  bizId?: string;
  bizUid?: string;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      action: 'Action',
      amount: 'Amount',
      bizId: 'BizId',
      bizUid: 'BizUid',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      action: 'string',
      amount: 'number',
      bizId: 'string',
      bizUid: 'string',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterSettleAccountResponseBodyModel extends $tea.Model {
  accountId?: string;
  accountNo?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountNo: 'AccountNo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountNo: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterUserAccountResponseBodyModel extends $tea.Model {
  bizId?: string;
  CUserId?: string;
  extInfo?: string;
  lmUid?: number;
  requestId?: string;
  tbAccountType?: string;
  tbUserId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      CUserId: 'CUserId',
      extInfo: 'ExtInfo',
      lmUid: 'LmUid',
      requestId: 'RequestId',
      tbAccountType: 'TbAccountType',
      tbUserId: 'TbUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      CUserId: 'string',
      extInfo: 'string',
      lmUid: 'number',
      requestId: 'string',
      tbAccountType: 'string',
      tbUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseMovieSeatResponseBodyActionResult extends $tea.Model {
  returnCode?: string;
  returnMessage?: string;
  returnValue?: string;
  static names(): { [key: string]: string } {
    return {
      returnCode: 'ReturnCode',
      returnMessage: 'ReturnMessage',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnCode: 'string',
      returnMessage: 'string',
      returnValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMessagesResponseBodyActionResult extends $tea.Model {
  returnCode?: string;
  returnMessage?: string;
  returnValue?: string;
  static names(): { [key: string]: string } {
    return {
      returnCode: 'ReturnCode',
      returnMessage: 'ReturnMessage',
      returnValue: 'ReturnValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      returnCode: 'string',
      returnMessage: 'string',
      returnValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelAddressInfoList extends $tea.Model {
  addressDetail?: string;
  addressId?: number;
  default?: boolean;
  divisionCode?: string;
  receiver?: string;
  receiverPhone?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      addressId: 'AddressId',
      default: 'Default',
      divisionCode: 'DivisionCode',
      receiver: 'Receiver',
      receiverPhone: 'ReceiverPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      addressId: 'number',
      default: 'boolean',
      divisionCode: 'string',
      receiver: 'string',
      receiverPhone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelDeliveryInfoList extends $tea.Model {
  displayName?: string;
  id?: string;
  postFee?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      postFee: 'PostFee',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      postFee: 'number',
      serviceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelInvoiceInfo extends $tea.Model {
  desc?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModelLmItemInfoList extends $tea.Model {
  actualPrice?: number;
  canSell?: boolean;
  cash?: number;
  features?: { [key: string]: any };
  itemId?: number;
  itemName?: string;
  itemPicUrl?: string;
  itemUrl?: string;
  lmItemId?: string;
  message?: string;
  points?: number;
  quantity?: number;
  sellerId?: number;
  sellerNick?: string;
  skuId?: number;
  skuName?: string;
  tbShopName?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      actualPrice: 'ActualPrice',
      canSell: 'CanSell',
      cash: 'Cash',
      features: 'Features',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemPicUrl: 'ItemPicUrl',
      itemUrl: 'ItemUrl',
      lmItemId: 'LmItemId',
      message: 'Message',
      points: 'Points',
      quantity: 'Quantity',
      sellerId: 'SellerId',
      sellerNick: 'SellerNick',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbShopName: 'TbShopName',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPrice: 'number',
      canSell: 'boolean',
      cash: 'number',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      itemId: 'number',
      itemName: 'string',
      itemPicUrl: 'string',
      itemUrl: 'string',
      lmItemId: 'string',
      message: 'string',
      points: 'number',
      quantity: 'number',
      sellerId: 'number',
      sellerNick: 'string',
      skuId: 'number',
      skuName: 'string',
      tbShopName: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderH5OrderResponseBodyModel extends $tea.Model {
  addressInfoList?: RenderH5OrderResponseBodyModelAddressInfoList[];
  buyerCurrentPoints?: number;
  deliveryInfoList?: RenderH5OrderResponseBodyModelDeliveryInfoList[];
  extInfo?: { [key: string]: any };
  invoiceInfo?: RenderH5OrderResponseBodyModelInvoiceInfo;
  lmItemInfoList?: RenderH5OrderResponseBodyModelLmItemInfoList[];
  static names(): { [key: string]: string } {
    return {
      addressInfoList: 'AddressInfoList',
      buyerCurrentPoints: 'BuyerCurrentPoints',
      deliveryInfoList: 'DeliveryInfoList',
      extInfo: 'ExtInfo',
      invoiceInfo: 'InvoiceInfo',
      lmItemInfoList: 'LmItemInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfoList: { 'type': 'array', 'itemType': RenderH5OrderResponseBodyModelAddressInfoList },
      buyerCurrentPoints: 'number',
      deliveryInfoList: { 'type': 'array', 'itemType': RenderH5OrderResponseBodyModelDeliveryInfoList },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      invoiceInfo: RenderH5OrderResponseBodyModelInvoiceInfo,
      lmItemInfoList: { 'type': 'array', 'itemType': RenderH5OrderResponseBodyModelLmItemInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      skuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfosDeliveryInfos extends $tea.Model {
  displayName?: string;
  id?: string;
  postFee?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      postFee: 'PostFee',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      postFee: 'number',
      serviceType: 'number',
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

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfosLmItemInfos extends $tea.Model {
  actualPrice?: number;
  canSell?: boolean;
  cash?: number;
  itemId?: number;
  itemName?: string;
  itemPicUrl?: string;
  lmItemId?: string;
  message?: string;
  points?: number;
  quantity?: number;
  sellerId?: number;
  sellerNick?: string;
  skuId?: number;
  skuName?: string;
  static names(): { [key: string]: string } {
    return {
      actualPrice: 'ActualPrice',
      canSell: 'CanSell',
      cash: 'Cash',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemPicUrl: 'ItemPicUrl',
      lmItemId: 'LmItemId',
      message: 'Message',
      points: 'Points',
      quantity: 'Quantity',
      sellerId: 'SellerId',
      sellerNick: 'SellerNick',
      skuId: 'SkuId',
      skuName: 'SkuName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPrice: 'number',
      canSell: 'boolean',
      cash: 'number',
      itemId: 'number',
      itemName: 'string',
      itemPicUrl: 'string',
      lmItemId: 'string',
      message: 'string',
      points: 'number',
      quantity: 'number',
      sellerId: 'number',
      sellerNick: 'string',
      skuId: 'number',
      skuName: 'string',
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

export class RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfos extends $tea.Model {
  deliveryInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfos;
  extInfo?: { [key: string]: any };
  lmItemInfos?: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfos;
  static names(): { [key: string]: string } {
    return {
      deliveryInfos: 'DeliveryInfos',
      extInfo: 'ExtInfo',
      lmItemInfos: 'LmItemInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryInfos: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosDeliveryInfos,
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lmItemInfos: RenderOrderResponseBodyModelRenderOrderInfosRenderOrderInfosLmItemInfos,
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

export class RenderOrderWithDesignatedTbUidRequestItemList extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  quantity?: number;
  skuId?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      quantity: 'number',
      skuId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelAddressInfos extends $tea.Model {
  addressDetail?: string;
  addressId?: number;
  divisionCode?: string;
  isDefault?: boolean;
  receiver?: string;
  receiverPhone?: string;
  townDivisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      addressId: 'AddressId',
      divisionCode: 'DivisionCode',
      isDefault: 'IsDefault',
      receiver: 'Receiver',
      receiverPhone: 'ReceiverPhone',
      townDivisionCode: 'TownDivisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      addressId: 'number',
      divisionCode: 'string',
      isDefault: 'boolean',
      receiver: 'string',
      receiverPhone: 'string',
      townDivisionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosDeliveryInfos extends $tea.Model {
  displayName?: string;
  id?: string;
  postFee?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      postFee: 'PostFee',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      postFee: 'number',
      serviceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosInvoiceInfo extends $tea.Model {
  desc?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfosItemPromInstVOSAvailableItems extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  lmShopId?: number;
  number?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  removed?: boolean;
  skuId?: number;
  tbSellerId?: number;
  userPayFee?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      number: 'Number',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      removed: 'Removed',
      skuId: 'SkuId',
      tbSellerId: 'TbSellerId',
      userPayFee: 'UserPayFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      lmShopId: 'number',
      number: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      removed: 'boolean',
      skuId: 'number',
      tbSellerId: 'number',
      userPayFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfosItemPromInstVOS extends $tea.Model {
  availableItems?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfosItemPromInstVOSAvailableItems[];
  canUse?: boolean;
  discountPrice?: number;
  expireTime?: number;
  instanceId?: string;
  level?: string;
  lmItemId?: string;
  promotionName?: string;
  promotionType?: string;
  reason?: string;
  selected?: boolean;
  skuIds?: number[];
  specialPrice?: number;
  subBizCode?: string;
  tbSellerId?: number;
  thresholdPrice?: number;
  useStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      availableItems: 'AvailableItems',
      canUse: 'CanUse',
      discountPrice: 'DiscountPrice',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      level: 'Level',
      lmItemId: 'LmItemId',
      promotionName: 'PromotionName',
      promotionType: 'PromotionType',
      reason: 'Reason',
      selected: 'Selected',
      skuIds: 'SkuIds',
      specialPrice: 'SpecialPrice',
      subBizCode: 'SubBizCode',
      tbSellerId: 'TbSellerId',
      thresholdPrice: 'ThresholdPrice',
      useStartTime: 'UseStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableItems: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfosItemPromInstVOSAvailableItems },
      canUse: 'boolean',
      discountPrice: 'number',
      expireTime: 'number',
      instanceId: 'string',
      level: 'string',
      lmItemId: 'string',
      promotionName: 'string',
      promotionType: 'string',
      reason: 'string',
      selected: 'boolean',
      skuIds: { 'type': 'array', 'itemType': 'number' },
      specialPrice: 'number',
      subBizCode: 'string',
      tbSellerId: 'number',
      thresholdPrice: 'number',
      useStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfos extends $tea.Model {
  actualPrice?: number;
  canSell?: boolean;
  cash?: number;
  features?: { [key: string]: string };
  itemId?: number;
  itemName?: string;
  itemPicUrl?: string;
  itemPromInstVOS?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfosItemPromInstVOS[];
  itemUrl?: string;
  lmItemId?: string;
  message?: string;
  pointPrice?: number;
  points?: number;
  promotionFee?: number;
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  sellerNick?: string;
  skuId?: number;
  skuName?: string;
  tbShopName?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      actualPrice: 'ActualPrice',
      canSell: 'CanSell',
      cash: 'Cash',
      features: 'Features',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemPicUrl: 'ItemPicUrl',
      itemPromInstVOS: 'ItemPromInstVOS',
      itemUrl: 'ItemUrl',
      lmItemId: 'LmItemId',
      message: 'Message',
      pointPrice: 'PointPrice',
      points: 'Points',
      promotionFee: 'PromotionFee',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      sellerNick: 'SellerNick',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbShopName: 'TbShopName',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPrice: 'number',
      canSell: 'boolean',
      cash: 'number',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'number',
      itemName: 'string',
      itemPicUrl: 'string',
      itemPromInstVOS: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfosItemPromInstVOS },
      itemUrl: 'string',
      lmItemId: 'string',
      message: 'string',
      pointPrice: 'number',
      points: 'number',
      promotionFee: 'number',
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      sellerNick: 'string',
      skuId: 'number',
      skuName: 'string',
      tbShopName: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosShopPromInstVOSAvailableItems extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  lmShopId?: number;
  number?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  removed?: boolean;
  skuId?: number;
  tbSellerId?: number;
  userPayFee?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      number: 'Number',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      removed: 'Removed',
      skuId: 'SkuId',
      tbSellerId: 'TbSellerId',
      userPayFee: 'UserPayFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      lmShopId: 'number',
      number: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      removed: 'boolean',
      skuId: 'number',
      tbSellerId: 'number',
      userPayFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosShopPromInstVOS extends $tea.Model {
  availableItems?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosShopPromInstVOSAvailableItems[];
  canUse?: boolean;
  discountPrice?: number;
  expireTime?: number;
  instanceId?: string;
  level?: string;
  lmItemId?: string;
  promotionName?: string;
  promotionType?: string;
  reason?: string;
  selected?: boolean;
  skuIds?: number[];
  specialPrice?: number;
  subBizCode?: string;
  tbSellerId?: number;
  thresholdPrice?: number;
  useStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      availableItems: 'AvailableItems',
      canUse: 'CanUse',
      discountPrice: 'DiscountPrice',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      level: 'Level',
      lmItemId: 'LmItemId',
      promotionName: 'PromotionName',
      promotionType: 'PromotionType',
      reason: 'Reason',
      selected: 'Selected',
      skuIds: 'SkuIds',
      specialPrice: 'SpecialPrice',
      subBizCode: 'SubBizCode',
      tbSellerId: 'TbSellerId',
      thresholdPrice: 'ThresholdPrice',
      useStartTime: 'UseStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableItems: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosShopPromInstVOSAvailableItems },
      canUse: 'boolean',
      discountPrice: 'number',
      expireTime: 'number',
      instanceId: 'string',
      level: 'string',
      lmItemId: 'string',
      promotionName: 'string',
      promotionType: 'string',
      reason: 'string',
      selected: 'boolean',
      skuIds: { 'type': 'array', 'itemType': 'number' },
      specialPrice: 'number',
      subBizCode: 'string',
      tbSellerId: 'number',
      thresholdPrice: 'number',
      useStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfos extends $tea.Model {
  canSell?: boolean;
  deliveryInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosDeliveryInfos[];
  extInfo?: { [key: string]: string };
  invoiceInfo?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosInvoiceInfo;
  lmItemInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfos[];
  message?: string;
  sellerId?: number;
  shopPromInstVOS?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosShopPromInstVOS[];
  tbShopName?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      deliveryInfos: 'DeliveryInfos',
      extInfo: 'ExtInfo',
      invoiceInfo: 'InvoiceInfo',
      lmItemInfos: 'LmItemInfos',
      message: 'Message',
      sellerId: 'SellerId',
      shopPromInstVOS: 'ShopPromInstVOS',
      tbShopName: 'TbShopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      deliveryInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosDeliveryInfos },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceInfo: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosInvoiceInfo,
      lmItemInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosLmItemInfos },
      message: 'string',
      sellerId: 'number',
      shopPromInstVOS: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfosShopPromInstVOS },
      tbShopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosDeliveryInfos extends $tea.Model {
  displayName?: string;
  id?: string;
  postFee?: number;
  serviceType?: number;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      postFee: 'PostFee',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      postFee: 'number',
      serviceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosInvoiceInfo extends $tea.Model {
  desc?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfosItemPromInstVOSAvailableItems extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  lmShopId?: number;
  number?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  removed?: boolean;
  skuId?: number;
  tbSellerId?: number;
  userPayFee?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      number: 'Number',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      removed: 'Removed',
      skuId: 'SkuId',
      tbSellerId: 'TbSellerId',
      userPayFee: 'UserPayFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      lmShopId: 'number',
      number: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      removed: 'boolean',
      skuId: 'number',
      tbSellerId: 'number',
      userPayFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfosItemPromInstVOS extends $tea.Model {
  availableItems?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfosItemPromInstVOSAvailableItems[];
  canUse?: boolean;
  discountPrice?: number;
  expireTime?: number;
  instanceId?: string;
  level?: string;
  lmItemId?: string;
  promotionName?: string;
  promotionType?: string;
  reason?: string;
  selected?: boolean;
  skuIds?: number[];
  specialPrice?: number;
  subBizCode?: string;
  tbSellerId?: number;
  thresholdPrice?: number;
  useStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      availableItems: 'AvailableItems',
      canUse: 'CanUse',
      discountPrice: 'DiscountPrice',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      level: 'Level',
      lmItemId: 'LmItemId',
      promotionName: 'PromotionName',
      promotionType: 'PromotionType',
      reason: 'Reason',
      selected: 'Selected',
      skuIds: 'SkuIds',
      specialPrice: 'SpecialPrice',
      subBizCode: 'SubBizCode',
      tbSellerId: 'TbSellerId',
      thresholdPrice: 'ThresholdPrice',
      useStartTime: 'UseStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableItems: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfosItemPromInstVOSAvailableItems },
      canUse: 'boolean',
      discountPrice: 'number',
      expireTime: 'number',
      instanceId: 'string',
      level: 'string',
      lmItemId: 'string',
      promotionName: 'string',
      promotionType: 'string',
      reason: 'string',
      selected: 'boolean',
      skuIds: { 'type': 'array', 'itemType': 'number' },
      specialPrice: 'number',
      subBizCode: 'string',
      tbSellerId: 'number',
      thresholdPrice: 'number',
      useStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfos extends $tea.Model {
  actualPrice?: number;
  canSell?: boolean;
  cash?: number;
  features?: { [key: string]: string };
  itemId?: number;
  itemName?: string;
  itemPicUrl?: string;
  itemPromInstVOS?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfosItemPromInstVOS[];
  itemUrl?: string;
  lmItemId?: string;
  message?: string;
  pointPrice?: number;
  points?: number;
  promotionFee?: number;
  quantity?: number;
  reservePrice?: number;
  sellerId?: number;
  sellerNick?: string;
  skuId?: number;
  skuName?: string;
  tbShopName?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      actualPrice: 'ActualPrice',
      canSell: 'CanSell',
      cash: 'Cash',
      features: 'Features',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemPicUrl: 'ItemPicUrl',
      itemPromInstVOS: 'ItemPromInstVOS',
      itemUrl: 'ItemUrl',
      lmItemId: 'LmItemId',
      message: 'Message',
      pointPrice: 'PointPrice',
      points: 'Points',
      promotionFee: 'PromotionFee',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      sellerId: 'SellerId',
      sellerNick: 'SellerNick',
      skuId: 'SkuId',
      skuName: 'SkuName',
      tbShopName: 'TbShopName',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualPrice: 'number',
      canSell: 'boolean',
      cash: 'number',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'number',
      itemName: 'string',
      itemPicUrl: 'string',
      itemPromInstVOS: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfosItemPromInstVOS },
      itemUrl: 'string',
      lmItemId: 'string',
      message: 'string',
      pointPrice: 'number',
      points: 'number',
      promotionFee: 'number',
      quantity: 'number',
      reservePrice: 'number',
      sellerId: 'number',
      sellerNick: 'string',
      skuId: 'number',
      skuName: 'string',
      tbShopName: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOSAvailableItems extends $tea.Model {
  itemId?: number;
  lmItemId?: string;
  lmShopId?: number;
  number?: number;
  points?: number;
  pointsAmount?: number;
  priceCent?: number;
  removed?: boolean;
  skuId?: number;
  tbSellerId?: number;
  userPayFee?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmShopId: 'LmShopId',
      number: 'Number',
      points: 'Points',
      pointsAmount: 'PointsAmount',
      priceCent: 'PriceCent',
      removed: 'Removed',
      skuId: 'SkuId',
      tbSellerId: 'TbSellerId',
      userPayFee: 'UserPayFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lmItemId: 'string',
      lmShopId: 'number',
      number: 'number',
      points: 'number',
      pointsAmount: 'number',
      priceCent: 'number',
      removed: 'boolean',
      skuId: 'number',
      tbSellerId: 'number',
      userPayFee: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOS extends $tea.Model {
  availableItems?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOSAvailableItems[];
  canUse?: boolean;
  discountPrice?: number;
  expireTime?: number;
  instanceId?: string;
  level?: string;
  lmItemId?: string;
  promotionName?: string;
  promotionType?: string;
  reason?: string;
  selected?: boolean;
  skuIds?: number[];
  specialPrice?: number;
  subBizCode?: string;
  tbSellerId?: number;
  thresholdPrice?: number;
  useStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      availableItems: 'AvailableItems',
      canUse: 'CanUse',
      discountPrice: 'DiscountPrice',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      level: 'Level',
      lmItemId: 'LmItemId',
      promotionName: 'PromotionName',
      promotionType: 'PromotionType',
      reason: 'Reason',
      selected: 'Selected',
      skuIds: 'SkuIds',
      specialPrice: 'SpecialPrice',
      subBizCode: 'SubBizCode',
      tbSellerId: 'TbSellerId',
      thresholdPrice: 'ThresholdPrice',
      useStartTime: 'UseStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableItems: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOSAvailableItems },
      canUse: 'boolean',
      discountPrice: 'number',
      expireTime: 'number',
      instanceId: 'string',
      level: 'string',
      lmItemId: 'string',
      promotionName: 'string',
      promotionType: 'string',
      reason: 'string',
      selected: 'boolean',
      skuIds: { 'type': 'array', 'itemType': 'number' },
      specialPrice: 'number',
      subBizCode: 'string',
      tbSellerId: 'number',
      thresholdPrice: 'number',
      useStartTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfos extends $tea.Model {
  canSell?: boolean;
  deliveryInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosDeliveryInfos[];
  extInfo?: { [key: string]: string };
  invoiceInfo?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosInvoiceInfo;
  lmItemInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfos[];
  message?: string;
  sellerId?: number;
  shopPromInstVOS?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOS[];
  tbShopName?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      deliveryInfos: 'DeliveryInfos',
      extInfo: 'ExtInfo',
      invoiceInfo: 'InvoiceInfo',
      lmItemInfos: 'LmItemInfos',
      message: 'Message',
      sellerId: 'SellerId',
      shopPromInstVOS: 'ShopPromInstVOS',
      tbShopName: 'TbShopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      deliveryInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosDeliveryInfos },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceInfo: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosInvoiceInfo,
      lmItemInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosLmItemInfos },
      message: 'string',
      sellerId: 'number',
      shopPromInstVOS: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOS },
      tbShopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderOrderWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  addressInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelAddressInfos[];
  buyerCurrentPoints?: number;
  canSell?: boolean;
  extInfo?: { [key: string]: string };
  message?: string;
  renderOrderInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfos[];
  unsellableRenderOrderInfos?: RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfos[];
  static names(): { [key: string]: string } {
    return {
      addressInfos: 'AddressInfos',
      buyerCurrentPoints: 'BuyerCurrentPoints',
      canSell: 'CanSell',
      extInfo: 'ExtInfo',
      message: 'Message',
      renderOrderInfos: 'RenderOrderInfos',
      unsellableRenderOrderInfos: 'UnsellableRenderOrderInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelAddressInfos },
      buyerCurrentPoints: 'number',
      canSell: 'boolean',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      renderOrderInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelRenderOrderInfos },
      unsellableRenderOrderInfos: { 'type': 'array', 'itemType': RenderOrderWithDesignatedTbUidResponseBodyModelUnsellableRenderOrderInfos },
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

export class RepayWithDesignatedTbUidResponseBodyModel extends $tea.Model {
  app?: string;
  frontUrl?: string;
  isOnlyPaidPoint?: boolean;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      frontUrl: 'FrontUrl',
      isOnlyPaidPoint: 'IsOnlyPaidPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      frontUrl: 'string',
      isOnlyPaidPoint: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReserveMovieSeatResponseBodyReservedSeat extends $tea.Model {
  applyKey?: string;
  defaultLockSecond?: number;
  reservedTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applyKey: 'ApplyKey',
      defaultLockSecond: 'DefaultLockSecond',
      reservedTime: 'ReservedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyKey: 'string',
      defaultLockSecond: 'number',
      reservedTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SettleOrderResponseBodyTradeOrderSettleResponse extends $tea.Model {
  outRequestNo?: string;
  tradeNo?: string;
  static names(): { [key: string]: string } {
    return {
      outRequestNo: 'OutRequestNo',
      tradeNo: 'TradeNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outRequestNo: 'string',
      tradeNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserGameResponseBodyModel extends $tea.Model {
  activityId?: string;
  bizId?: string;
  currentShowContent?: string;
  currentStepId?: string;
  currentStepStatus?: string;
  desc?: string;
  extInfo?: string;
  gameId?: string;
  name?: string;
  processId?: string;
  routeId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      bizId: 'BizId',
      currentShowContent: 'CurrentShowContent',
      currentStepId: 'CurrentStepId',
      currentStepStatus: 'CurrentStepStatus',
      desc: 'Desc',
      extInfo: 'ExtInfo',
      gameId: 'GameId',
      name: 'Name',
      processId: 'ProcessId',
      routeId: 'RouteId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      bizId: 'string',
      currentShowContent: 'string',
      currentStepId: 'string',
      currentStepStatus: 'string',
      desc: 'string',
      extInfo: 'string',
      gameId: 'string',
      name: 'string',
      processId: 'string',
      routeId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMerchantInfoResponseBodyModel extends $tea.Model {
  status?: string;
  taskId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnFreezeUserPointResponseBodyModel extends $tea.Model {
  accountId?: string;
  action?: string;
  amount?: number;
  bizId?: string;
  bizUid?: string;
  description?: string;
  extInfo?: { [key: string]: any };
  idempotentId?: string;
  name?: string;
  recordId?: string;
  rest?: number;
  ruleId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      action: 'Action',
      amount: 'Amount',
      bizId: 'BizId',
      bizUid: 'BizUid',
      description: 'Description',
      extInfo: 'ExtInfo',
      idempotentId: 'IdempotentId',
      name: 'Name',
      recordId: 'RecordId',
      rest: 'Rest',
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      action: 'string',
      amount: 'number',
      bizId: 'string',
      bizUid: 'string',
      description: 'string',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idempotentId: 'string',
      name: 'string',
      recordId: 'string',
      rest: 'number',
      ruleId: 'string',
      status: 'string',
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
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressInfo)) {
      body["AddressInfo"] = request.addressInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddAddress",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAddressResponse>(await this.callApi(params, req, runtime), new AddAddressResponse({}));
  }

  async addAddress(request: AddAddressRequest): Promise<AddAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAddressWithOptions(request, runtime);
  }

  async addItemLimitRuleWithOptions(request: AddItemLimitRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddItemLimitRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmActivityId)) {
      query["LmActivityId"] = request.lmActivityId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.subBizCode)) {
      query["SubBizCode"] = request.subBizCode;
    }

    if (!Util.isUnset(request.upperNum)) {
      query["UpperNum"] = request.upperNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddItemLimitRule",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddItemLimitRuleResponse>(await this.callApi(params, req, runtime), new AddItemLimitRuleResponse({}));
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      body["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.subBizIdsShrink)) {
      body["SubBizIds"] = request.subBizIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddItemToSubBizs",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddItemToSubBizsResponse>(await this.callApi(params, req, runtime), new AddItemToSubBizsResponse({}));
  }

  async addItemToSubBizs(request: AddItemToSubBizsRequest): Promise<AddItemToSubBizsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addItemToSubBizsWithOptions(request, runtime);
  }

  async addSupplierNewItemsWithOptions(request: AddSupplierNewItemsRequest, runtime: $Util.RuntimeOptions): Promise<AddSupplierNewItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSupplierNewItems",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSupplierNewItemsResponse>(await this.callApi(params, req, runtime), new AddSupplierNewItemsResponse({}));
  }

  async addSupplierNewItems(request: AddSupplierNewItemsRequest): Promise<AddSupplierNewItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSupplierNewItemsWithOptions(request, runtime);
  }

  async applyRefundWithOptions(request: ApplyRefundRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRefundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.applyReasonTextId)) {
      query["ApplyReasonTextId"] = request.applyReasonTextId;
    }

    if (!Util.isUnset(request.applyRefundCount)) {
      query["ApplyRefundCount"] = request.applyRefundCount;
    }

    if (!Util.isUnset(request.applyRefundFee)) {
      query["ApplyRefundFee"] = request.applyRefundFee;
    }

    if (!Util.isUnset(request.bizClaimType)) {
      query["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      query["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.leaveMessage)) {
      body["LeaveMessage"] = request.leaveMessage;
    }

    if (!Util.isUnset(request.leavePictureList)) {
      body["LeavePictureList"] = request.leavePictureList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyRefund",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyRefundResponse>(await this.callApi(params, req, runtime), new ApplyRefundResponse({}));
  }

  async applyRefund(request: ApplyRefundRequest): Promise<ApplyRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRefundWithOptions(request, runtime);
  }

  async applyRefundWithDesignatedTbUidWithOptions(tmpReq: ApplyRefundWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRefundWithDesignatedTbUidResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyRefundWithDesignatedTbUidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.proofs)) {
      request.proofsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.proofs, "Proofs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      body["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.message)) {
      body["Message"] = request.message;
    }

    if (!Util.isUnset(request.proofsShrink)) {
      body["Proofs"] = request.proofsShrink;
    }

    if (!Util.isUnset(request.reasonId)) {
      body["ReasonId"] = request.reasonId;
    }

    if (!Util.isUnset(request.refundCode)) {
      body["RefundCode"] = request.refundCode;
    }

    if (!Util.isUnset(request.refundCount)) {
      body["RefundCount"] = request.refundCount;
    }

    if (!Util.isUnset(request.refundFee)) {
      body["RefundFee"] = request.refundFee;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyRefundWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyRefundWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new ApplyRefundWithDesignatedTbUidResponse({}));
  }

  async applyRefundWithDesignatedTbUid(request: ApplyRefundWithDesignatedTbUidRequest): Promise<ApplyRefundWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRefundWithDesignatedTbUidWithOptions(request, runtime);
  }

  async batchRegistAnonymousTbAccountWithOptions(request: BatchRegistAnonymousTbAccountRequest, runtime: $Util.RuntimeOptions): Promise<BatchRegistAnonymousTbAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idJsonList)) {
      query["IdJsonList"] = request.idJsonList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchRegistAnonymousTbAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchRegistAnonymousTbAccountResponse>(await this.callApi(params, req, runtime), new BatchRegistAnonymousTbAccountResponse({}));
  }

  async batchRegistAnonymousTbAccount(request: BatchRegistAnonymousTbAccountRequest): Promise<BatchRegistAnonymousTbAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchRegistAnonymousTbAccountWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderResponse>(await this.callApi(params, req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async cancelOrderWithDesignatedTbUidWithOptions(request: CancelOrderWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      body["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelOrderWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelOrderWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new CancelOrderWithDesignatedTbUidResponse({}));
  }

  async cancelOrderWithDesignatedTbUid(request: CancelOrderWithDesignatedTbUidRequest): Promise<CancelOrderWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithDesignatedTbUidWithOptions(request, runtime);
  }

  async cancelRealTbAccountSupportWithOptions(request: CancelRealTbAccountSupportRequest, runtime: $Util.RuntimeOptions): Promise<CancelRealTbAccountSupportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelRealTbAccountSupport",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRealTbAccountSupportResponse>(await this.callApi(params, req, runtime), new CancelRealTbAccountSupportResponse({}));
  }

  async cancelRealTbAccountSupport(request: CancelRealTbAccountSupportRequest): Promise<CancelRealTbAccountSupportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRealTbAccountSupportWithOptions(request, runtime);
  }

  async cancelRefundWithOptions(request: CancelRefundRequest, runtime: $Util.RuntimeOptions): Promise<CancelRefundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.disputeId)) {
      query["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelRefund",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRefundResponse>(await this.callApi(params, req, runtime), new CancelRefundResponse({}));
  }

  async cancelRefund(request: CancelRefundRequest): Promise<CancelRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRefundWithOptions(request, runtime);
  }

  async cancelRefundWithDesignatedTbUidWithOptions(request: CancelRefundWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<CancelRefundWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelRefundWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRefundWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new CancelRefundWithDesignatedTbUidResponse({}));
  }

  async cancelRefundWithDesignatedTbUid(request: CancelRefundWithDesignatedTbUidRequest): Promise<CancelRefundWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRefundWithDesignatedTbUidWithOptions(request, runtime);
  }

  async confirmDisburseWithOptions(request: ConfirmDisburseRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmDisburseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmDisburse",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmDisburseResponse>(await this.callApi(params, req, runtime), new ConfirmDisburseResponse({}));
  }

  async confirmDisburse(request: ConfirmDisburseRequest): Promise<ConfirmDisburseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmDisburseWithOptions(request, runtime);
  }

  async confirmDisburseWithDesignatedTbUidWithOptions(request: ConfirmDisburseWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmDisburseWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      body["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmDisburseWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmDisburseWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new ConfirmDisburseWithDesignatedTbUidResponse({}));
  }

  async confirmDisburseWithDesignatedTbUid(request: ConfirmDisburseWithDesignatedTbUidRequest): Promise<ConfirmDisburseWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmDisburseWithDesignatedTbUidWithOptions(request, runtime);
  }

  async createMovieTicketOrderWithOptions(request: CreateMovieTicketOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateMovieTicketOrderResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMovieTicketOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMovieTicketOrderResponse>(await this.callApi(params, req, runtime), new CreateMovieTicketOrderResponse({}));
  }

  async createMovieTicketOrder(request: CreateMovieTicketOrderRequest): Promise<CreateMovieTicketOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMovieTicketOrderWithOptions(request, runtime);
  }

  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.buyerMessageMap)) {
      query["BuyerMessageMap"] = request.buyerMessageMap;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      query["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.orderExpireTime)) {
      query["OrderExpireTime"] = request.orderExpireTime;
    }

    if (!Util.isUnset(request.outTradeId)) {
      query["OutTradeId"] = request.outTradeId;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.totalAmount)) {
      query["TotalAmount"] = request.totalAmount;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  async createOrderPayUrlForOutDiscountWithOptions(request: CreateOrderPayUrlForOutDiscountRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderPayUrlForOutDiscountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buyInfo)) {
      body["BuyInfo"] = request.buyInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrderPayUrlForOutDiscount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderPayUrlForOutDiscountResponse>(await this.callApi(params, req, runtime), new CreateOrderPayUrlForOutDiscountResponse({}));
  }

  async createOrderPayUrlForOutDiscount(request: CreateOrderPayUrlForOutDiscountRequest): Promise<CreateOrderPayUrlForOutDiscountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderPayUrlForOutDiscountWithOptions(request, runtime);
  }

  async createOrderTransactionDetailFileWithOptions(request: CreateOrderTransactionDetailFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderTransactionDetailFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.channelName)) {
      body["ChannelName"] = request.channelName;
    }

    if (!Util.isUnset(request.createEndTime)) {
      body["CreateEndTime"] = request.createEndTime;
    }

    if (!Util.isUnset(request.createStartTime)) {
      body["CreateStartTime"] = request.createStartTime;
    }

    if (!Util.isUnset(request.itemId)) {
      body["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmShopId)) {
      body["LmShopId"] = request.lmShopId;
    }

    if (!Util.isUnset(request.orderStatus)) {
      body["OrderStatus"] = request.orderStatus;
    }

    if (!Util.isUnset(request.payStatus)) {
      body["PayStatus"] = request.payStatus;
    }

    if (!Util.isUnset(request.paymentEndTime)) {
      body["PaymentEndTime"] = request.paymentEndTime;
    }

    if (!Util.isUnset(request.paymentStartTime)) {
      body["PaymentStartTime"] = request.paymentStartTime;
    }

    if (!Util.isUnset(request.poCode)) {
      body["PoCode"] = request.poCode;
    }

    if (!Util.isUnset(request.refundEndTime)) {
      body["RefundEndTime"] = request.refundEndTime;
    }

    if (!Util.isUnset(request.refundStartTime)) {
      body["RefundStartTime"] = request.refundStartTime;
    }

    if (!Util.isUnset(request.sellerId)) {
      body["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.sellerName)) {
      body["SellerName"] = request.sellerName;
    }

    if (!Util.isUnset(request.settlementNode)) {
      body["SettlementNode"] = request.settlementNode;
    }

    if (!Util.isUnset(request.shopName)) {
      body["ShopName"] = request.shopName;
    }

    if (!Util.isUnset(request.tbMainOrderId)) {
      body["TbMainOrderId"] = request.tbMainOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrderTransactionDetailFile",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderTransactionDetailFileResponse>(await this.callApi(params, req, runtime), new CreateOrderTransactionDetailFileResponse({}));
  }

  async createOrderTransactionDetailFile(request: CreateOrderTransactionDetailFileRequest): Promise<CreateOrderTransactionDetailFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderTransactionDetailFileWithOptions(request, runtime);
  }

  async createOrderV2WithOptions(request: CreateOrderV2Request, runtime: $Util.RuntimeOptions): Promise<CreateOrderV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.buyerMessageMap)) {
      query["BuyerMessageMap"] = request.buyerMessageMap;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      query["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.orderExpireTime)) {
      query["OrderExpireTime"] = request.orderExpireTime;
    }

    if (!Util.isUnset(request.outTradeId)) {
      query["OutTradeId"] = request.outTradeId;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.totalAmount)) {
      query["TotalAmount"] = request.totalAmount;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrderV2",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderV2Response>(await this.callApi(params, req, runtime), new CreateOrderV2Response({}));
  }

  async createOrderV2(request: CreateOrderV2Request): Promise<CreateOrderV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderV2WithOptions(request, runtime);
  }

  async createOrderWithDesignatedTbUidWithOptions(request: CreateOrderWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.buyerMessages)) {
      body["BuyerMessages"] = request.buyerMessages;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      body["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.deliveryInfo)) {
      body["DeliveryInfo"] = request.deliveryInfo;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.orderExpireTime)) {
      body["OrderExpireTime"] = request.orderExpireTime;
    }

    if (!Util.isUnset(request.orderItems)) {
      body["OrderItems"] = request.orderItems;
    }

    if (!Util.isUnset(request.outTradeId)) {
      body["OutTradeId"] = request.outTradeId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrderWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrderWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new CreateOrderWithDesignatedTbUidResponse({}));
  }

  async createOrderWithDesignatedTbUid(request: CreateOrderWithDesignatedTbUidRequest): Promise<CreateOrderWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithDesignatedTbUidWithOptions(request, runtime);
  }

  async createOutDiscountOrderWithDesignatedTbUidWithOptions(request: CreateOutDiscountOrderWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<CreateOutDiscountOrderWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.buyerMessages)) {
      body["BuyerMessages"] = request.buyerMessages;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      body["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.deliveryInfo)) {
      body["DeliveryInfo"] = request.deliveryInfo;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.orderExpireTime)) {
      body["OrderExpireTime"] = request.orderExpireTime;
    }

    if (!Util.isUnset(request.orderItems)) {
      body["OrderItems"] = request.orderItems;
    }

    if (!Util.isUnset(request.outDiscountInfos)) {
      body["OutDiscountInfos"] = request.outDiscountInfos;
    }

    if (!Util.isUnset(request.outTradeId)) {
      body["OutTradeId"] = request.outTradeId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOutDiscountOrderWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOutDiscountOrderWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new CreateOutDiscountOrderWithDesignatedTbUidResponse({}));
  }

  async createOutDiscountOrderWithDesignatedTbUid(request: CreateOutDiscountOrderWithDesignatedTbUidRequest): Promise<CreateOutDiscountOrderWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOutDiscountOrderWithDesignatedTbUidWithOptions(request, runtime);
  }

  async createPayUrlWithOptions(request: CreatePayUrlRequest, runtime: $Util.RuntimeOptions): Promise<CreatePayUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buyInfo)) {
      body["BuyInfo"] = request.buyInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePayUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePayUrlResponse>(await this.callApi(params, req, runtime), new CreatePayUrlResponse({}));
  }

  async createPayUrl(request: CreatePayUrlRequest): Promise<CreatePayUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPayUrlWithOptions(request, runtime);
  }

  async createSettleConfirmWithOptions(request: CreateSettleConfirmRequest, runtime: $Util.RuntimeOptions): Promise<CreateSettleConfirmResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.outRequestNo)) {
      body["OutRequestNo"] = request.outRequestNo;
    }

    if (!Util.isUnset(request.outTradeNo)) {
      body["OutTradeNo"] = request.outTradeNo;
    }

    if (!Util.isUnset(request.settleInfo)) {
      body["SettleInfo"] = request.settleInfo;
    }

    if (!Util.isUnset(request.tradeNo)) {
      body["TradeNo"] = request.tradeNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSettleConfirm",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSettleConfirmResponse>(await this.callApi(params, req, runtime), new CreateSettleConfirmResponse({}));
  }

  async createSettleConfirm(request: CreateSettleConfirmRequest): Promise<CreateSettleConfirmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSettleConfirmWithOptions(request, runtime);
  }

  async createVirtualProductOrderWithOptions(request: CreateVirtualProductOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualProductOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      query["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.orderExpireTime)) {
      query["OrderExpireTime"] = request.orderExpireTime;
    }

    if (!Util.isUnset(request.outTradeId)) {
      query["OutTradeId"] = request.outTradeId;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.totalAmount)) {
      query["TotalAmount"] = request.totalAmount;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVirtualProductOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVirtualProductOrderResponse>(await this.callApi(params, req, runtime), new CreateVirtualProductOrderResponse({}));
  }

  async createVirtualProductOrder(request: CreateVirtualProductOrderRequest): Promise<CreateVirtualProductOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualProductOrderWithOptions(request, runtime);
  }

  async createWithholdTradeWithOptions(request: CreateWithholdTradeRequest, runtime: $Util.RuntimeOptions): Promise<CreateWithholdTradeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agreementNo)) {
      body["AgreementNo"] = request.agreementNo;
    }

    if (!Util.isUnset(request.body)) {
      body["Body"] = request.body;
    }

    if (!Util.isUnset(request.buyerId)) {
      body["BuyerId"] = request.buyerId;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.goodsDetail)) {
      body["GoodsDetail"] = request.goodsDetail;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.outRequestNo)) {
      body["OutRequestNo"] = request.outRequestNo;
    }

    if (!Util.isUnset(request.outTradeNo)) {
      body["OutTradeNo"] = request.outTradeNo;
    }

    if (!Util.isUnset(request.settleMode)) {
      body["SettleMode"] = request.settleMode;
    }

    if (!Util.isUnset(request.subject)) {
      body["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.totalAmount)) {
      body["TotalAmount"] = request.totalAmount;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWithholdTrade",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWithholdTradeResponse>(await this.callApi(params, req, runtime), new CreateWithholdTradeResponse({}));
  }

  async createWithholdTrade(request: CreateWithholdTradeRequest): Promise<CreateWithholdTradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWithholdTradeWithOptions(request, runtime);
  }

  async deductUserPointWithOptions(tmpReq: DeductUserPointRequest, runtime: $Util.RuntimeOptions): Promise<DeductUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new DeductUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeductUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeductUserPointResponse>(await this.callApi(params, req, runtime), new DeductUserPointResponse({}));
  }

  async deductUserPoint(request: DeductUserPointRequest): Promise<DeductUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deductUserPointWithOptions(request, runtime);
  }

  async deleteBizItemsWithOptions(request: DeleteBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBizItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemIdList)) {
      query["ItemIdList"] = request.itemIdList;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBizItems",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBizItemsResponse>(await this.callApi(params, req, runtime), new DeleteBizItemsResponse({}));
  }

  async deleteBizItems(request: DeleteBizItemsRequest): Promise<DeleteBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBizItemsWithOptions(request, runtime);
  }

  async deleteItemLimitRuleWithOptions(request: DeleteItemLimitRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteItemLimitRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmActivityId)) {
      query["LmActivityId"] = request.lmActivityId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.subBizCode)) {
      query["SubBizCode"] = request.subBizCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteItemLimitRule",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteItemLimitRuleResponse>(await this.callApi(params, req, runtime), new DeleteItemLimitRuleResponse({}));
  }

  async deleteItemLimitRule(request: DeleteItemLimitRuleRequest): Promise<DeleteItemLimitRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteItemLimitRuleWithOptions(request, runtime);
  }

  async downloadCpsBillFileWithOptions(request: DownloadCpsBillFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadCpsBillFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billId)) {
      body["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadCpsBillFile",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadCpsBillFileResponse>(await this.callApi(params, req, runtime), new DownloadCpsBillFileResponse({}));
  }

  async downloadCpsBillFile(request: DownloadCpsBillFileRequest): Promise<DownloadCpsBillFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadCpsBillFileWithOptions(request, runtime);
  }

  async downloadItemBillFileWithOptions(request: DownloadItemBillFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadItemBillFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billId)) {
      body["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadItemBillFile",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadItemBillFileResponse>(await this.callApi(params, req, runtime), new DownloadItemBillFileResponse({}));
  }

  async downloadItemBillFile(request: DownloadItemBillFileRequest): Promise<DownloadItemBillFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadItemBillFileWithOptions(request, runtime);
  }

  async downloadOrderTransactionDetailFileWithOptions(request: DownloadOrderTransactionDetailFileRequest, runtime: $Util.RuntimeOptions): Promise<DownloadOrderTransactionDetailFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.recordId)) {
      body["RecordId"] = request.recordId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadOrderTransactionDetailFile",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadOrderTransactionDetailFileResponse>(await this.callApi(params, req, runtime), new DownloadOrderTransactionDetailFileResponse({}));
  }

  async downloadOrderTransactionDetailFile(request: DownloadOrderTransactionDetailFileRequest): Promise<DownloadOrderTransactionDetailFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadOrderTransactionDetailFileWithOptions(request, runtime);
  }

  async enableOrderWithOptions(request: EnableOrderRequest, runtime: $Util.RuntimeOptions): Promise<EnableOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.outTradeId)) {
      query["OutTradeId"] = request.outTradeId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableOrderResponse>(await this.callApi(params, req, runtime), new EnableOrderResponse({}));
  }

  async enableOrder(request: EnableOrderRequest): Promise<EnableOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableOrderWithOptions(request, runtime);
  }

  async enableOrderWithDesignatedTbUidWithOptions(request: EnableOrderWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<EnableOrderWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      body["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableOrderWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableOrderWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new EnableOrderWithDesignatedTbUidResponse({}));
  }

  async enableOrderWithDesignatedTbUid(request: EnableOrderWithDesignatedTbUidRequest): Promise<EnableOrderWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableOrderWithDesignatedTbUidWithOptions(request, runtime);
  }

  async executeNodeWithOptions(request: ExecuteNodeRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteNodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.nodeInstanceId)) {
      query["NodeInstanceId"] = request.nodeInstanceId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!Util.isUnset(request.processInstanceId)) {
      query["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!Util.isUnset(request.requestData)) {
      query["RequestData"] = request.requestData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteNode",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteNodeResponse>(await this.callApi(params, req, runtime), new ExecuteNodeResponse({}));
  }

  async executeNode(request: ExecuteNodeRequest): Promise<ExecuteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeNodeWithOptions(request, runtime);
  }

  async freezeUserPointWithOptions(tmpReq: FreezeUserPointRequest, runtime: $Util.RuntimeOptions): Promise<FreezeUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new FreezeUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FreezeUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FreezeUserPointResponse>(await this.callApi(params, req, runtime), new FreezeUserPointResponse({}));
  }

  async freezeUserPoint(request: FreezeUserPointRequest): Promise<FreezeUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.freezeUserPointWithOptions(request, runtime);
  }

  async getActivityGameInfoWithOptions(tmpReq: GetActivityGameInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetActivityGameInfoResponse> {
    Util.validateModel(tmpReq);
    let request = new GetActivityGameInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetActivityGameInfo",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetActivityGameInfoResponse>(await this.callApi(params, req, runtime), new GetActivityGameInfoResponse({}));
  }

  async getActivityGameInfo(request: GetActivityGameInfoRequest): Promise<GetActivityGameInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getActivityGameInfoWithOptions(request, runtime);
  }

  async getCategoryChainWithOptions(request: GetCategoryChainRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoryChainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCategoryChain",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCategoryChainResponse>(await this.callApi(params, req, runtime), new GetCategoryChainResponse({}));
  }

  async getCategoryChain(request: GetCategoryChainRequest): Promise<GetCategoryChainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoryChainWithOptions(request, runtime);
  }

  async getCategoryListWithOptions(request: GetCategoryListRequest, runtime: $Util.RuntimeOptions): Promise<GetCategoryListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCategoryList",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCategoryListResponse>(await this.callApi(params, req, runtime), new GetCategoryListResponse({}));
  }

  async getCategoryList(request: GetCategoryListRequest): Promise<GetCategoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCategoryListWithOptions(request, runtime);
  }

  async getCustomServiceUrlWithOptions(request: GetCustomServiceUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomServiceUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.cuid)) {
      query["Cuid"] = request.cuid;
    }

    if (!Util.isUnset(request.nick)) {
      query["Nick"] = request.nick;
    }

    if (!Util.isUnset(request.sellerId)) {
      query["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomServiceUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomServiceUrlResponse>(await this.callApi(params, req, runtime), new GetCustomServiceUrlResponse({}));
  }

  async getCustomServiceUrl(request: GetCustomServiceUrlRequest): Promise<GetCustomServiceUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomServiceUrlWithOptions(request, runtime);
  }

  async getGuidePageWithOptions(request: GetGuidePageRequest, runtime: $Util.RuntimeOptions): Promise<GetGuidePageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGuidePage",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGuidePageResponse>(await this.callApi(params, req, runtime), new GetGuidePageResponse({}));
  }

  async getGuidePage(request: GetGuidePageRequest): Promise<GetGuidePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGuidePageWithOptions(request, runtime);
  }

  async getItemPromotionWithOptions(request: GetItemPromotionRequest, runtime: $Util.RuntimeOptions): Promise<GetItemPromotionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetItemPromotion",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetItemPromotionResponse>(await this.callApi(params, req, runtime), new GetItemPromotionResponse({}));
  }

  async getItemPromotion(request: GetItemPromotionRequest): Promise<GetItemPromotionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getItemPromotionWithOptions(request, runtime);
  }

  async getLoginPageWithOptions(request: GetLoginPageRequest, runtime: $Util.RuntimeOptions): Promise<GetLoginPageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.failUrl)) {
      body["FailUrl"] = request.failUrl;
    }

    if (!Util.isUnset(request.targetUrl)) {
      body["TargetUrl"] = request.targetUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLoginPage",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoginPageResponse>(await this.callApi(params, req, runtime), new GetLoginPageResponse({}));
  }

  async getLoginPage(request: GetLoginPageRequest): Promise<GetLoginPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoginPageWithOptions(request, runtime);
  }

  async getSwitchUrlWithOptions(request: GetSwitchUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetSwitchUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSwitchUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSwitchUrlResponse>(await this.callApi(params, req, runtime), new GetSwitchUrlResponse({}));
  }

  async getSwitchUrl(request: GetSwitchUrlRequest): Promise<GetSwitchUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSwitchUrlWithOptions(request, runtime);
  }

  async getUserInfoWithOptions(request: GetUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.userFlag)) {
      query["UserFlag"] = request.userFlag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queryJson)) {
      body["QueryJson"] = request.queryJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserInfo",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async getUserInfo(request: GetUserInfoRequest): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserInfoWithOptions(request, runtime);
  }

  async getUserTokenPageWithOptions(request: GetUserTokenPageRequest, runtime: $Util.RuntimeOptions): Promise<GetUserTokenPageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserTokenPage",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserTokenPageResponse>(await this.callApi(params, req, runtime), new GetUserTokenPageResponse({}));
  }

  async getUserTokenPage(request: GetUserTokenPageRequest): Promise<GetUserTokenPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserTokenPageWithOptions(request, runtime);
  }

  async getWithholdSignPageUrlWithOptions(request: GetWithholdSignPageUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetWithholdSignPageUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.externalAgreementNo)) {
      body["ExternalAgreementNo"] = request.externalAgreementNo;
    }

    if (!Util.isUnset(request.identityParameters)) {
      body["IdentityParameters"] = request.identityParameters;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.merchantServiceDescription)) {
      body["MerchantServiceDescription"] = request.merchantServiceDescription;
    }

    if (!Util.isUnset(request.merchantServiceName)) {
      body["MerchantServiceName"] = request.merchantServiceName;
    }

    if (!Util.isUnset(request.notifyUrl)) {
      body["NotifyUrl"] = request.notifyUrl;
    }

    if (!Util.isUnset(request.outRequestNo)) {
      body["OutRequestNo"] = request.outRequestNo;
    }

    if (!Util.isUnset(request.returnUrl)) {
      body["ReturnUrl"] = request.returnUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetWithholdSignPageUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWithholdSignPageUrlResponse>(await this.callApi(params, req, runtime), new GetWithholdSignPageUrlResponse({}));
  }

  async getWithholdSignPageUrl(request: GetWithholdSignPageUrlRequest): Promise<GetWithholdSignPageUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWithholdSignPageUrlWithOptions(request, runtime);
  }

  async giveUserPointWithOptions(tmpReq: GiveUserPointRequest, runtime: $Util.RuntimeOptions): Promise<GiveUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new GiveUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.targetBizUid)) {
      query["TargetBizUid"] = request.targetBizUid;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GiveUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GiveUserPointResponse>(await this.callApi(params, req, runtime), new GiveUserPointResponse({}));
  }

  async giveUserPoint(request: GiveUserPointRequest): Promise<GiveUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.giveUserPointWithOptions(request, runtime);
  }

  async grantPromotionToUserWithOptions(tmpReq: GrantPromotionToUserRequest, runtime: $Util.RuntimeOptions): Promise<GrantPromotionToUserResponse> {
    Util.validateModel(tmpReq);
    let request = new GrantPromotionToUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.expireSeconds)) {
      query["ExpireSeconds"] = request.expireSeconds;
    }

    if (!Util.isUnset(request.grantMode)) {
      query["GrantMode"] = request.grantMode;
    }

    if (!Util.isUnset(request.grantWay)) {
      query["GrantWay"] = request.grantWay;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.securityCode)) {
      query["SecurityCode"] = request.securityCode;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantPromotionToUser",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantPromotionToUserResponse>(await this.callApi(params, req, runtime), new GrantPromotionToUserResponse({}));
  }

  async grantPromotionToUser(request: GrantPromotionToUserRequest): Promise<GrantPromotionToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantPromotionToUserWithOptions(request, runtime);
  }

  async grantUserPointWithOptions(tmpReq: GrantUserPointRequest, runtime: $Util.RuntimeOptions): Promise<GrantUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new GrantUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantUserPointResponse>(await this.callApi(params, req, runtime), new GrantUserPointResponse({}));
  }

  async grantUserPoint(request: GrantUserPointRequest): Promise<GrantUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantUserPointWithOptions(request, runtime);
  }

  async initApplyRefundWithOptions(request: InitApplyRefundRequest, runtime: $Util.RuntimeOptions): Promise<InitApplyRefundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizClaimType)) {
      query["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      query["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitApplyRefund",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitApplyRefundResponse>(await this.callApi(params, req, runtime), new InitApplyRefundResponse({}));
  }

  async initApplyRefund(request: InitApplyRefundRequest): Promise<InitApplyRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initApplyRefundWithOptions(request, runtime);
  }

  async initApplyRefundWithDesignatedTbUidWithOptions(request: InitApplyRefundWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<InitApplyRefundWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.refundCode)) {
      body["RefundCode"] = request.refundCode;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitApplyRefundWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitApplyRefundWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new InitApplyRefundWithDesignatedTbUidResponse({}));
  }

  async initApplyRefundWithDesignatedTbUid(request: InitApplyRefundWithDesignatedTbUidRequest): Promise<InitApplyRefundWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initApplyRefundWithDesignatedTbUidWithOptions(request, runtime);
  }

  async initModifyRefundWithOptions(request: InitModifyRefundRequest, runtime: $Util.RuntimeOptions): Promise<InitModifyRefundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizClaimType)) {
      query["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.disputeId)) {
      query["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      query["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitModifyRefund",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitModifyRefundResponse>(await this.callApi(params, req, runtime), new InitModifyRefundResponse({}));
  }

  async initModifyRefund(request: InitModifyRefundRequest): Promise<InitModifyRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initModifyRefundWithOptions(request, runtime);
  }

  async initModifyRefundWithDesignatedTbUidWithOptions(request: InitModifyRefundWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<InitModifyRefundWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.refundCode)) {
      body["RefundCode"] = request.refundCode;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitModifyRefundWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitModifyRefundWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new InitModifyRefundWithDesignatedTbUidResponse({}));
  }

  async initModifyRefundWithDesignatedTbUid(request: InitModifyRefundWithDesignatedTbUidRequest): Promise<InitModifyRefundWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initModifyRefundWithDesignatedTbUidWithOptions(request, runtime);
  }

  async listActivityAtmosphereWithOptions(request: ListActivityAtmosphereRequest, runtime: $Util.RuntimeOptions): Promise<ListActivityAtmosphereResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListActivityAtmosphere",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListActivityAtmosphereResponse>(await this.callApi(params, req, runtime), new ListActivityAtmosphereResponse({}));
  }

  async listActivityAtmosphere(request: ListActivityAtmosphereRequest): Promise<ListActivityAtmosphereResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActivityAtmosphereWithOptions(request, runtime);
  }

  async listActivityGameInfoWithOptions(request: ListActivityGameInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListActivityGameInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListActivityGameInfo",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListActivityGameInfoResponse>(await this.callApi(params, req, runtime), new ListActivityGameInfoResponse({}));
  }

  async listActivityGameInfo(request: ListActivityGameInfoRequest): Promise<ListActivityGameInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActivityGameInfoWithOptions(request, runtime);
  }

  async listItemActivitiesWithOptions(tmpReq: ListItemActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<ListItemActivitiesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListItemActivitiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemIdsShrink)) {
      query["ItemIds"] = request.itemIdsShrink;
    }

    if (!Util.isUnset(request.lmItemIdsShrink)) {
      query["LmItemIds"] = request.lmItemIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListItemActivities",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListItemActivitiesResponse>(await this.callApi(params, req, runtime), new ListItemActivitiesResponse({}));
  }

  async listItemActivities(request: ListItemActivitiesRequest): Promise<ListItemActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listItemActivitiesWithOptions(request, runtime);
  }

  async listUserGameProcessWithOptions(request: ListUserGameProcessRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGameProcessResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGameProcess",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGameProcessResponse>(await this.callApi(params, req, runtime), new ListUserGameProcessResponse({}));
  }

  async listUserGameProcess(request: ListUserGameProcessRequest): Promise<ListUserGameProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGameProcessWithOptions(request, runtime);
  }

  async listUserPointRecordsWithOptions(request: ListUserPointRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserPointRecordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserPointRecords",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserPointRecordsResponse>(await this.callApi(params, req, runtime), new ListUserPointRecordsResponse({}));
  }

  async listUserPointRecords(request: ListUserPointRecordsRequest): Promise<ListUserPointRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserPointRecordsWithOptions(request, runtime);
  }

  async modifyBasicAndBizItemsWithOptions(request: ModifyBasicAndBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBasicAndBizItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemList)) {
      body["ItemList"] = request.itemList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBasicAndBizItems",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBasicAndBizItemsResponse>(await this.callApi(params, req, runtime), new ModifyBasicAndBizItemsResponse({}));
  }

  async modifyBasicAndBizItems(request: ModifyBasicAndBizItemsRequest): Promise<ModifyBasicAndBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBasicAndBizItemsWithOptions(request, runtime);
  }

  async modifyBasicItemSupplierPriceWithOptions(request: ModifyBasicItemSupplierPriceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBasicItemSupplierPriceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.lmShopId)) {
      query["LmShopId"] = request.lmShopId;
    }

    if (!Util.isUnset(request.skuId)) {
      query["SkuId"] = request.skuId;
    }

    if (!Util.isUnset(request.supplierPrice)) {
      query["SupplierPrice"] = request.supplierPrice;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBasicItemSupplierPrice",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBasicItemSupplierPriceResponse>(await this.callApi(params, req, runtime), new ModifyBasicItemSupplierPriceResponse({}));
  }

  async modifyBasicItemSupplierPrice(request: ModifyBasicItemSupplierPriceRequest): Promise<ModifyBasicItemSupplierPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBasicItemSupplierPriceWithOptions(request, runtime);
  }

  async modifyBizItemsWithOptions(request: ModifyBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBizItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemList)) {
      body["ItemList"] = request.itemList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBizItems",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBizItemsResponse>(await this.callApi(params, req, runtime), new ModifyBizItemsResponse({}));
  }

  async modifyBizItems(request: ModifyBizItemsRequest): Promise<ModifyBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBizItemsWithOptions(request, runtime);
  }

  async modifyItemLimitRuleWithOptions(request: ModifyItemLimitRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyItemLimitRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmActivityId)) {
      query["LmActivityId"] = request.lmActivityId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!Util.isUnset(request.subBizCode)) {
      query["SubBizCode"] = request.subBizCode;
    }

    if (!Util.isUnset(request.upperNum)) {
      query["UpperNum"] = request.upperNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyItemLimitRule",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyItemLimitRuleResponse>(await this.callApi(params, req, runtime), new ModifyItemLimitRuleResponse({}));
  }

  async modifyItemLimitRule(request: ModifyItemLimitRuleRequest): Promise<ModifyItemLimitRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyItemLimitRuleWithOptions(request, runtime);
  }

  async modifyOrderDeliveryAddressWithOptions(request: ModifyOrderDeliveryAddressRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOrderDeliveryAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      query["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOrderDeliveryAddress",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOrderDeliveryAddressResponse>(await this.callApi(params, req, runtime), new ModifyOrderDeliveryAddressResponse({}));
  }

  async modifyOrderDeliveryAddress(request: ModifyOrderDeliveryAddressRequest): Promise<ModifyOrderDeliveryAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOrderDeliveryAddressWithOptions(request, runtime);
  }

  async modifyRefundWithOptions(request: ModifyRefundRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRefundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.applyReasonTextId)) {
      query["ApplyReasonTextId"] = request.applyReasonTextId;
    }

    if (!Util.isUnset(request.applyRefundCount)) {
      query["ApplyRefundCount"] = request.applyRefundCount;
    }

    if (!Util.isUnset(request.applyRefundFee)) {
      query["ApplyRefundFee"] = request.applyRefundFee;
    }

    if (!Util.isUnset(request.bizClaimType)) {
      query["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.disputeId)) {
      query["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      query["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.leaveMessage)) {
      body["LeaveMessage"] = request.leaveMessage;
    }

    if (!Util.isUnset(request.leavePictureList)) {
      body["LeavePictureList"] = request.leavePictureList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRefund",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRefundResponse>(await this.callApi(params, req, runtime), new ModifyRefundResponse({}));
  }

  async modifyRefund(request: ModifyRefundRequest): Promise<ModifyRefundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRefundWithOptions(request, runtime);
  }

  async modifyRefundWithDesignatedTbUidWithOptions(tmpReq: ModifyRefundWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRefundWithDesignatedTbUidResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyRefundWithDesignatedTbUidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.proofs)) {
      request.proofsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.proofs, "Proofs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      body["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.message)) {
      body["Message"] = request.message;
    }

    if (!Util.isUnset(request.proofsShrink)) {
      body["Proofs"] = request.proofsShrink;
    }

    if (!Util.isUnset(request.reasonId)) {
      body["ReasonId"] = request.reasonId;
    }

    if (!Util.isUnset(request.refundCode)) {
      body["RefundCode"] = request.refundCode;
    }

    if (!Util.isUnset(request.refundCount)) {
      body["RefundCount"] = request.refundCount;
    }

    if (!Util.isUnset(request.refundFee)) {
      body["RefundFee"] = request.refundFee;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRefundWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRefundWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new ModifyRefundWithDesignatedTbUidResponse({}));
  }

  async modifyRefundWithDesignatedTbUid(request: ModifyRefundWithDesignatedTbUidRequest): Promise<ModifyRefundWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRefundWithDesignatedTbUidWithOptions(request, runtime);
  }

  async modifySettleAccountWithOptions(request: ModifySettleAccountRequest, runtime: $Util.RuntimeOptions): Promise<ModifySettleAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountChannel)) {
      body["AccountChannel"] = request.accountChannel;
    }

    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.accountPayType)) {
      body["AccountPayType"] = request.accountPayType;
    }

    if (!Util.isUnset(request.accountType)) {
      body["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.countryOrAreaCode)) {
      body["CountryOrAreaCode"] = request.countryOrAreaCode;
    }

    if (!Util.isUnset(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.idempotentId)) {
      body["IdempotentId"] = request.idempotentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySettleAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySettleAccountResponse>(await this.callApi(params, req, runtime), new ModifySettleAccountResponse({}));
  }

  async modifySettleAccount(request: ModifySettleAccountRequest): Promise<ModifySettleAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySettleAccountWithOptions(request, runtime);
  }

  async modifySupplierPriceAndPriceCentWithOptions(request: ModifySupplierPriceAndPriceCentRequest, runtime: $Util.RuntimeOptions): Promise<ModifySupplierPriceAndPriceCentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.lmShopId)) {
      query["LmShopId"] = request.lmShopId;
    }

    if (!Util.isUnset(request.priceCent)) {
      query["PriceCent"] = request.priceCent;
    }

    if (!Util.isUnset(request.skuId)) {
      query["SkuId"] = request.skuId;
    }

    if (!Util.isUnset(request.supplierPrice)) {
      query["SupplierPrice"] = request.supplierPrice;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySupplierPriceAndPriceCent",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySupplierPriceAndPriceCentResponse>(await this.callApi(params, req, runtime), new ModifySupplierPriceAndPriceCentResponse({}));
  }

  async modifySupplierPriceAndPriceCent(request: ModifySupplierPriceAndPriceCentRequest): Promise<ModifySupplierPriceAndPriceCentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySupplierPriceAndPriceCentWithOptions(request, runtime);
  }

  async notifyPayOrderStatusWithOptions(request: NotifyPayOrderStatusRequest, runtime: $Util.RuntimeOptions): Promise<NotifyPayOrderStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.operationDate)) {
      query["OperationDate"] = request.operationDate;
    }

    if (!Util.isUnset(request.payTypes)) {
      query["PayTypes"] = request.payTypes;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NotifyPayOrderStatus",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NotifyPayOrderStatusResponse>(await this.callApi(params, req, runtime), new NotifyPayOrderStatusResponse({}));
  }

  async notifyPayOrderStatus(request: NotifyPayOrderStatusRequest): Promise<NotifyPayOrderStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyPayOrderStatusWithOptions(request, runtime);
  }

  async notifyWithholdFundWithOptions(request: NotifyWithholdFundRequest, runtime: $Util.RuntimeOptions): Promise<NotifyWithholdFundResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.operationDate)) {
      query["OperationDate"] = request.operationDate;
    }

    if (!Util.isUnset(request.payTypes)) {
      query["PayTypes"] = request.payTypes;
    }

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.tenantOrderId)) {
      query["TenantOrderId"] = request.tenantOrderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NotifyWithholdFund",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NotifyWithholdFundResponse>(await this.callApi(params, req, runtime), new NotifyWithholdFundResponse({}));
  }

  async notifyWithholdFund(request: NotifyWithholdFundRequest): Promise<NotifyWithholdFundResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyWithholdFundWithOptions(request, runtime);
  }

  async openRealTbAccountSupportWithOptions(request: OpenRealTbAccountSupportRequest, runtime: $Util.RuntimeOptions): Promise<OpenRealTbAccountSupportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenRealTbAccountSupport",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenRealTbAccountSupportResponse>(await this.callApi(params, req, runtime), new OpenRealTbAccountSupportResponse({}));
  }

  async openRealTbAccountSupport(request: OpenRealTbAccountSupportRequest): Promise<OpenRealTbAccountSupportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openRealTbAccountSupportWithOptions(request, runtime);
  }

  async pushUserGameProcessWithOptions(tmpReq: PushUserGameProcessRequest, runtime: $Util.RuntimeOptions): Promise<PushUserGameProcessResponse> {
    Util.validateModel(tmpReq);
    let request = new PushUserGameProcessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currentStepId)) {
      query["CurrentStepId"] = request.currentStepId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    if (!Util.isUnset(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushUserGameProcess",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushUserGameProcessResponse>(await this.callApi(params, req, runtime), new PushUserGameProcessResponse({}));
  }

  async pushUserGameProcess(request: PushUserGameProcessRequest): Promise<PushUserGameProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushUserGameProcessWithOptions(request, runtime);
  }

  async queryActivityItemsWithOptions(request: QueryActivityItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryActivityItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmActivityId)) {
      query["LmActivityId"] = request.lmActivityId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryActivityItems",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryActivityItemsResponse>(await this.callApi(params, req, runtime), new QueryActivityItemsResponse({}));
  }

  async queryActivityItems(request: QueryActivityItemsRequest): Promise<QueryActivityItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryActivityItemsWithOptions(request, runtime);
  }

  async queryAddressWithOptions(request: QueryAddressRequest, runtime: $Util.RuntimeOptions): Promise<QueryAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.divisionCode)) {
      query["DivisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAddress",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAddressResponse>(await this.callApi(params, req, runtime), new QueryAddressResponse({}));
  }

  async queryAddress(request: QueryAddressRequest): Promise<QueryAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAddressWithOptions(request, runtime);
  }

  async queryAddressDetailWithOptions(request: QueryAddressDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryAddressDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressInfo)) {
      query["AddressInfo"] = request.addressInfo;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAddressDetail",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAddressDetailResponse>(await this.callApi(params, req, runtime), new QueryAddressDetailResponse({}));
  }

  async queryAddressDetail(request: QueryAddressDetailRequest): Promise<QueryAddressDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAddressDetailWithOptions(request, runtime);
  }

  async queryAddressListWithOptions(request: QueryAddressListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAddressListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAddressList",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAddressListResponse>(await this.callApi(params, req, runtime), new QueryAddressListResponse({}));
  }

  async queryAddressList(request: QueryAddressListRequest): Promise<QueryAddressListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAddressListWithOptions(request, runtime);
  }

  async queryAdvertisementSettleInfoWithOptions(request: QueryAdvertisementSettleInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryAdvertisementSettleInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.mediaSettleDetailId)) {
      query["MediaSettleDetailId"] = request.mediaSettleDetailId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.settleNo)) {
      query["SettleNo"] = request.settleNo;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAdvertisementSettleInfo",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAdvertisementSettleInfoResponse>(await this.callApi(params, req, runtime), new QueryAdvertisementSettleInfoResponse({}));
  }

  async queryAdvertisementSettleInfo(request: QueryAdvertisementSettleInfoRequest): Promise<QueryAdvertisementSettleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAdvertisementSettleInfoWithOptions(request, runtime);
  }

  async queryAgreementWithOptions(request: QueryAgreementRequest, runtime: $Util.RuntimeOptions): Promise<QueryAgreementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agreementNo)) {
      body["AgreementNo"] = request.agreementNo;
    }

    if (!Util.isUnset(request.externalAgreementNo)) {
      body["ExternalAgreementNo"] = request.externalAgreementNo;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAgreement",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAgreementResponse>(await this.callApi(params, req, runtime), new QueryAgreementResponse({}));
  }

  async queryAgreement(request: QueryAgreementRequest): Promise<QueryAgreementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAgreementWithOptions(request, runtime);
  }

  async queryAllCinemasWithOptions(request: QueryAllCinemasRequest, runtime: $Util.RuntimeOptions): Promise<QueryAllCinemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.cityCode)) {
      query["CityCode"] = request.cityCode;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAllCinemas",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAllCinemasResponse>(await this.callApi(params, req, runtime), new QueryAllCinemasResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extJsonShrink)) {
      query["ExtJson"] = request.extJsonShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAllCities",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAllCitiesResponse>(await this.callApi(params, req, runtime), new QueryAllCitiesResponse({}));
  }

  async queryAllCities(request: QueryAllCitiesRequest): Promise<QueryAllCitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAllCitiesWithOptions(request, runtime);
  }

  async queryBatchRegistAnonymousTbAccountResultWithOptions(request: QueryBatchRegistAnonymousTbAccountResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryBatchRegistAnonymousTbAccountResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBatchRegistAnonymousTbAccountResult",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBatchRegistAnonymousTbAccountResultResponse>(await this.callApi(params, req, runtime), new QueryBatchRegistAnonymousTbAccountResultResponse({}));
  }

  async queryBatchRegistAnonymousTbAccountResult(request: QueryBatchRegistAnonymousTbAccountResultRequest): Promise<QueryBatchRegistAnonymousTbAccountResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBatchRegistAnonymousTbAccountResultWithOptions(request, runtime);
  }

  async queryBestSession4ItemsWithOptions(tmpReq: QueryBestSession4ItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBestSession4ItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBestSession4ItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemIdsShrink)) {
      query["ItemIds"] = request.itemIdsShrink;
    }

    if (!Util.isUnset(request.lmItemIdsShrink)) {
      query["LmItemIds"] = request.lmItemIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBestSession4Items",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBestSession4ItemsResponse>(await this.callApi(params, req, runtime), new QueryBestSession4ItemsResponse({}));
  }

  async queryBestSession4Items(request: QueryBestSession4ItemsRequest): Promise<QueryBestSession4ItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBestSession4ItemsWithOptions(request, runtime);
  }

  async queryBizItemListWithOptions(tmpReq: QueryBizItemListRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemListResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBizItemListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.itemIdsShrink)) {
      query["ItemIds"] = request.itemIdsShrink;
    }

    if (!Util.isUnset(request.lmItemIdsShrink)) {
      query["LmItemIds"] = request.lmItemIdsShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBizItemList",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBizItemListResponse>(await this.callApi(params, req, runtime), new QueryBizItemListResponse({}));
  }

  async queryBizItemList(request: QueryBizItemListRequest): Promise<QueryBizItemListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemListWithOptions(request, runtime);
  }

  async queryBizItemListV2WithOptions(tmpReq: QueryBizItemListV2Request, runtime: $Util.RuntimeOptions): Promise<QueryBizItemListV2Response> {
    Util.validateModel(tmpReq);
    let request = new QueryBizItemListV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.itemIdsShrink)) {
      query["ItemIds"] = request.itemIdsShrink;
    }

    if (!Util.isUnset(request.lmItemIdsShrink)) {
      query["LmItemIds"] = request.lmItemIdsShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBizItemListV2",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBizItemListV2Response>(await this.callApi(params, req, runtime), new QueryBizItemListV2Response({}));
  }

  async queryBizItemListV2(request: QueryBizItemListV2Request): Promise<QueryBizItemListV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemListV2WithOptions(request, runtime);
  }

  async queryBizItemListWithCacheWithOptions(tmpReq: QueryBizItemListWithCacheRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemListWithCacheResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBizItemListWithCacheShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBizItemListWithCache",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBizItemListWithCacheResponse>(await this.callApi(params, req, runtime), new QueryBizItemListWithCacheResponse({}));
  }

  async queryBizItemListWithCache(request: QueryBizItemListWithCacheRequest): Promise<QueryBizItemListWithCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemListWithCacheWithOptions(request, runtime);
  }

  async queryBizItemsWithOptions(request: QueryBizItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBizItems",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBizItemsResponse>(await this.callApi(params, req, runtime), new QueryBizItemsResponse({}));
  }

  async queryBizItems(request: QueryBizItemsRequest): Promise<QueryBizItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemsWithOptions(request, runtime);
  }

  async queryBizItemsWithActivityWithOptions(tmpReq: QueryBizItemsWithActivityRequest, runtime: $Util.RuntimeOptions): Promise<QueryBizItemsWithActivityResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryBizItemsWithActivityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBizItemsWithActivity",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBizItemsWithActivityResponse>(await this.callApi(params, req, runtime), new QueryBizItemsWithActivityResponse({}));
  }

  async queryBizItemsWithActivity(request: QueryBizItemsWithActivityRequest): Promise<QueryBizItemsWithActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBizItemsWithActivityWithOptions(request, runtime);
  }

  async queryBudgetTicketItemListByBizIdWithOptions(request: QueryBudgetTicketItemListByBizIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryBudgetTicketItemListByBizIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.budgetTicketNo)) {
      query["BudgetTicketNo"] = request.budgetTicketNo;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryBudgetTicketItemListByBizId",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryBudgetTicketItemListByBizIdResponse>(await this.callApi(params, req, runtime), new QueryBudgetTicketItemListByBizIdResponse({}));
  }

  async queryBudgetTicketItemListByBizId(request: QueryBudgetTicketItemListByBizIdRequest): Promise<QueryBudgetTicketItemListByBizIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryBudgetTicketItemListByBizIdWithOptions(request, runtime);
  }

  async queryChannelItemBillDownloadUrlWithOptions(request: QueryChannelItemBillDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QueryChannelItemBillDownloadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billId)) {
      body["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.billPeriod)) {
      body["BillPeriod"] = request.billPeriod;
    }

    if (!Util.isUnset(request.billStatus)) {
      body["BillStatus"] = request.billStatus;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.lmShopId)) {
      body["LmShopId"] = request.lmShopId;
    }

    if (!Util.isUnset(request.lmShopName)) {
      body["LmShopName"] = request.lmShopName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryChannelItemBillDownloadUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryChannelItemBillDownloadUrlResponse>(await this.callApi(params, req, runtime), new QueryChannelItemBillDownloadUrlResponse({}));
  }

  async queryChannelItemBillDownloadUrl(request: QueryChannelItemBillDownloadUrlRequest): Promise<QueryChannelItemBillDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChannelItemBillDownloadUrlWithOptions(request, runtime);
  }

  async queryGuideItemGroupWithOptions(request: QueryGuideItemGroupRequest, runtime: $Util.RuntimeOptions): Promise<QueryGuideItemGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.itemState)) {
      query["ItemState"] = request.itemState;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGuideItemGroup",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGuideItemGroupResponse>(await this.callApi(params, req, runtime), new QueryGuideItemGroupResponse({}));
  }

  async queryGuideItemGroup(request: QueryGuideItemGroupRequest): Promise<QueryGuideItemGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGuideItemGroupWithOptions(request, runtime);
  }

  async queryGuideItemGroupForCrowdOperationWithOptions(request: QueryGuideItemGroupForCrowdOperationRequest, runtime: $Util.RuntimeOptions): Promise<QueryGuideItemGroupForCrowdOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.itemState)) {
      query["ItemState"] = request.itemState;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userFlag)) {
      query["UserFlag"] = request.userFlag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGuideItemGroupForCrowdOperation",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGuideItemGroupForCrowdOperationResponse>(await this.callApi(params, req, runtime), new QueryGuideItemGroupForCrowdOperationResponse({}));
  }

  async queryGuideItemGroupForCrowdOperation(request: QueryGuideItemGroupForCrowdOperationRequest): Promise<QueryGuideItemGroupForCrowdOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGuideItemGroupForCrowdOperationWithOptions(request, runtime);
  }

  async queryGuideItemGroupWithOutInventoryWithOptions(request: QueryGuideItemGroupWithOutInventoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryGuideItemGroupWithOutInventoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGuideItemGroupWithOutInventory",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGuideItemGroupWithOutInventoryResponse>(await this.callApi(params, req, runtime), new QueryGuideItemGroupWithOutInventoryResponse({}));
  }

  async queryGuideItemGroupWithOutInventory(request: QueryGuideItemGroupWithOutInventoryRequest): Promise<QueryGuideItemGroupWithOutInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGuideItemGroupWithOutInventoryWithOptions(request, runtime);
  }

  async queryHotMoviesWithOptions(request: QueryHotMoviesRequest, runtime: $Util.RuntimeOptions): Promise<QueryHotMoviesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.cityCode)) {
      query["CityCode"] = request.cityCode;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryHotMovies",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryHotMoviesResponse>(await this.callApi(params, req, runtime), new QueryHotMoviesResponse({}));
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInventoryOfItemsInBizItemGroup",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInventoryOfItemsInBizItemGroupResponse>(await this.callApi(params, req, runtime), new QueryInventoryOfItemsInBizItemGroupResponse({}));
  }

  async queryInventoryOfItemsInBizItemGroup(request: QueryInventoryOfItemsInBizItemGroupRequest): Promise<QueryInventoryOfItemsInBizItemGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInventoryOfItemsInBizItemGroupWithOptions(request, runtime);
  }

  async queryItemDetailWithOptions(request: QueryItemDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemDetail",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemDetailResponse>(await this.callApi(params, req, runtime), new QueryItemDetailResponse({}));
  }

  async queryItemDetail(request: QueryItemDetailRequest): Promise<QueryItemDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemDetailWithOptions(request, runtime);
  }

  async queryItemDetailInnerWithOptions(request: QueryItemDetailInnerRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.divisionCode)) {
      query["DivisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemDetailInner",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemDetailInnerResponse>(await this.callApi(params, req, runtime), new QueryItemDetailInnerResponse({}));
  }

  async queryItemDetailInner(request: QueryItemDetailInnerRequest): Promise<QueryItemDetailInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemDetailInnerWithOptions(request, runtime);
  }

  async queryItemDetailTeaWithOptions(request: QueryItemDetailTeaRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailTeaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemDetailTea",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemDetailTeaResponse>(await this.callApi(params, req, runtime), new QueryItemDetailTeaResponse({}));
  }

  async queryItemDetailTea(request: QueryItemDetailTeaRequest): Promise<QueryItemDetailTeaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemDetailTeaWithOptions(request, runtime);
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
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemInSubBizs",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemInSubBizsResponse>(await this.callApi(params, req, runtime), new QueryItemInSubBizsResponse({}));
  }

  async queryItemInSubBizs(request: QueryItemInSubBizsRequest): Promise<QueryItemInSubBizsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemInSubBizsWithOptions(request, runtime);
  }

  async queryItemInventoryWithOptions(request: QueryItemInventoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemInventoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.divisionCode)) {
      query["DivisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemInventory",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemInventoryResponse>(await this.callApi(params, req, runtime), new QueryItemInventoryResponse({}));
  }

  async queryItemInventory(request: QueryItemInventoryRequest): Promise<QueryItemInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemInventoryWithOptions(request, runtime);
  }

  async queryItemInventoryV2WithOptions(request: QueryItemInventoryV2Request, runtime: $Util.RuntimeOptions): Promise<QueryItemInventoryV2Response> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.divisionCode)) {
      query["DivisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemInventoryV2",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemInventoryV2Response>(await this.callApi(params, req, runtime), new QueryItemInventoryV2Response({}));
  }

  async queryItemInventoryV2(request: QueryItemInventoryV2Request): Promise<QueryItemInventoryV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemInventoryV2WithOptions(request, runtime);
  }

  async queryItemNextCycleRestrictionWithOptions(tmpReq: QueryItemNextCycleRestrictionRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemNextCycleRestrictionResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryItemNextCycleRestrictionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemId)) {
      request.lmItemIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemId, "LmItemId", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.subBizId)) {
      query["SubBizId"] = request.subBizId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lmItemIdShrink)) {
      body["LmItemId"] = request.lmItemIdShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemNextCycleRestriction",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemNextCycleRestrictionResponse>(await this.callApi(params, req, runtime), new QueryItemNextCycleRestrictionResponse({}));
  }

  async queryItemNextCycleRestriction(request: QueryItemNextCycleRestrictionRequest): Promise<QueryItemNextCycleRestrictionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemNextCycleRestrictionWithOptions(request, runtime);
  }

  async queryLogisticsWithOptions(request: QueryLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryLogisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryLogistics",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLogisticsResponse>(await this.callApi(params, req, runtime), new QueryLogisticsResponse({}));
  }

  async queryLogistics(request: QueryLogisticsRequest): Promise<QueryLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLogisticsWithOptions(request, runtime);
  }

  async queryMediaSettleInfoWithOptions(request: QueryMediaSettleInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryMediaSettleInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.mediaName)) {
      query["MediaName"] = request.mediaName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.settleNo)) {
      query["SettleNo"] = request.settleNo;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMediaSettleInfo",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMediaSettleInfoResponse>(await this.callApi(params, req, runtime), new QueryMediaSettleInfoResponse({}));
  }

  async queryMediaSettleInfo(request: QueryMediaSettleInfoRequest): Promise<QueryMediaSettleInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMediaSettleInfoWithOptions(request, runtime);
  }

  async queryMessagesWithOptions(request: QueryMessagesRequest, runtime: $Util.RuntimeOptions): Promise<QueryMessagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMessages",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMessagesResponse>(await this.callApi(params, req, runtime), new QueryMessagesResponse({}));
  }

  async queryMessages(request: QueryMessagesRequest): Promise<QueryMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMessagesWithOptions(request, runtime);
  }

  async queryMovieCommentsWithOptions(request: QueryMovieCommentsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieCommentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.movieId)) {
      query["MovieId"] = request.movieId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMovieComments",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMovieCommentsResponse>(await this.callApi(params, req, runtime), new QueryMovieCommentsResponse({}));
  }

  async queryMovieComments(request: QueryMovieCommentsRequest): Promise<QueryMovieCommentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieCommentsWithOptions(request, runtime);
  }

  async queryMovieSchedulesWithOptions(request: QueryMovieSchedulesRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieSchedulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.cinemaId)) {
      query["CinemaId"] = request.cinemaId;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMovieSchedules",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMovieSchedulesResponse>(await this.callApi(params, req, runtime), new QueryMovieSchedulesResponse({}));
  }

  async queryMovieSchedules(request: QueryMovieSchedulesRequest): Promise<QueryMovieSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieSchedulesWithOptions(request, runtime);
  }

  async queryMovieSeatsWithOptions(request: QueryMovieSeatsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieSeatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMovieSeats",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMovieSeatsResponse>(await this.callApi(params, req, runtime), new QueryMovieSeatsResponse({}));
  }

  async queryMovieSeats(request: QueryMovieSeatsRequest): Promise<QueryMovieSeatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieSeatsWithOptions(request, runtime);
  }

  async queryMovieTicketsWithOptions(request: QueryMovieTicketsRequest, runtime: $Util.RuntimeOptions): Promise<QueryMovieTicketsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryMovieTickets",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMovieTicketsResponse>(await this.callApi(params, req, runtime), new QueryMovieTicketsResponse({}));
  }

  async queryMovieTickets(request: QueryMovieTicketsRequest): Promise<QueryMovieTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMovieTicketsWithOptions(request, runtime);
  }

  async queryOrderAndPaymentListWithOptions(request: QueryOrderAndPaymentListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderAndPaymentListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.filterOption)) {
      query["FilterOption"] = request.filterOption;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderAndPaymentList",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderAndPaymentListResponse>(await this.callApi(params, req, runtime), new QueryOrderAndPaymentListResponse({}));
  }

  async queryOrderAndPaymentList(request: QueryOrderAndPaymentListRequest): Promise<QueryOrderAndPaymentListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderAndPaymentListWithOptions(request, runtime);
  }

  async queryOrderAndPaymentListWithDesignatedTbUidWithOptions(request: QueryOrderAndPaymentListWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderAndPaymentListWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.filterOption)) {
      body["FilterOption"] = request.filterOption;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderAndPaymentListWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderAndPaymentListWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new QueryOrderAndPaymentListWithDesignatedTbUidResponse({}));
  }

  async queryOrderAndPaymentListWithDesignatedTbUid(request: QueryOrderAndPaymentListWithDesignatedTbUidRequest): Promise<QueryOrderAndPaymentListWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderAndPaymentListWithDesignatedTbUidWithOptions(request, runtime);
  }

  async queryOrderCommissionRateWithOptions(request: QueryOrderCommissionRateRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderCommissionRateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderCommissionRate",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderCommissionRateResponse>(await this.callApi(params, req, runtime), new QueryOrderCommissionRateResponse({}));
  }

  async queryOrderCommissionRate(request: QueryOrderCommissionRateRequest): Promise<QueryOrderCommissionRateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderCommissionRateWithOptions(request, runtime);
  }

  async queryOrderDetailInnerWithOptions(request: QueryOrderDetailInnerRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderDetailInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.filterOption)) {
      query["FilterOption"] = request.filterOption;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderDetailInner",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderDetailInnerResponse>(await this.callApi(params, req, runtime), new QueryOrderDetailInnerResponse({}));
  }

  async queryOrderDetailInner(request: QueryOrderDetailInnerRequest): Promise<QueryOrderDetailInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderDetailInnerWithOptions(request, runtime);
  }

  async queryOrderIdByPayIdWithOptions(request: QueryOrderIdByPayIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderIdByPayIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.paymentId)) {
      query["PaymentId"] = request.paymentId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderIdByPayId",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderIdByPayIdResponse>(await this.callApi(params, req, runtime), new QueryOrderIdByPayIdResponse({}));
  }

  async queryOrderIdByPayId(request: QueryOrderIdByPayIdRequest): Promise<QueryOrderIdByPayIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderIdByPayIdWithOptions(request, runtime);
  }

  async queryOrderInfoAfterSaleWithOptions(request: QueryOrderInfoAfterSaleRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderInfoAfterSaleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderInfoAfterSale",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderInfoAfterSaleResponse>(await this.callApi(params, req, runtime), new QueryOrderInfoAfterSaleResponse({}));
  }

  async queryOrderInfoAfterSale(request: QueryOrderInfoAfterSaleRequest): Promise<QueryOrderInfoAfterSaleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderInfoAfterSaleWithOptions(request, runtime);
  }

  async queryOrderItemInfoByPaymentIdForAiZhanYouWithOptions(request: QueryOrderItemInfoByPaymentIdForAiZhanYouRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderItemInfoByPaymentIdForAiZhanYouResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.paymentId)) {
      query["PaymentId"] = request.paymentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderItemInfoByPaymentIdForAiZhanYou",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderItemInfoByPaymentIdForAiZhanYouResponse>(await this.callApi(params, req, runtime), new QueryOrderItemInfoByPaymentIdForAiZhanYouResponse({}));
  }

  async queryOrderItemInfoByPaymentIdForAiZhanYou(request: QueryOrderItemInfoByPaymentIdForAiZhanYouRequest): Promise<QueryOrderItemInfoByPaymentIdForAiZhanYouResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderItemInfoByPaymentIdForAiZhanYouWithOptions(request, runtime);
  }

  async queryOrderListWithOptions(request: QueryOrderListRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.filterOption)) {
      query["FilterOption"] = request.filterOption;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderList",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderListResponse>(await this.callApi(params, req, runtime), new QueryOrderListResponse({}));
  }

  async queryOrderList(request: QueryOrderListRequest): Promise<QueryOrderListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderListWithOptions(request, runtime);
  }

  async queryOrderListWithDesignatedTbUidWithOptions(request: QueryOrderListWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderListWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.filterOption)) {
      body["FilterOption"] = request.filterOption;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderListWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderListWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new QueryOrderListWithDesignatedTbUidResponse({}));
  }

  async queryOrderListWithDesignatedTbUid(request: QueryOrderListWithDesignatedTbUidRequest): Promise<QueryOrderListWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderListWithDesignatedTbUidWithOptions(request, runtime);
  }

  async queryOrderLogisticsWithOptions(request: QueryOrderLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderLogisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderLogistics",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderLogisticsResponse>(await this.callApi(params, req, runtime), new QueryOrderLogisticsResponse({}));
  }

  async queryOrderLogistics(request: QueryOrderLogisticsRequest): Promise<QueryOrderLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderLogisticsWithOptions(request, runtime);
  }

  async queryOrderLogisticsWithDesignatedTbUidWithOptions(request: QueryOrderLogisticsWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderLogisticsWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      body["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderLogisticsWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderLogisticsWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new QueryOrderLogisticsWithDesignatedTbUidResponse({}));
  }

  async queryOrderLogisticsWithDesignatedTbUid(request: QueryOrderLogisticsWithDesignatedTbUidRequest): Promise<QueryOrderLogisticsWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderLogisticsWithDesignatedTbUidWithOptions(request, runtime);
  }

  async queryRealTbAccountSupportWithOptions(request: QueryRealTbAccountSupportRequest, runtime: $Util.RuntimeOptions): Promise<QueryRealTbAccountSupportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRealTbAccountSupport",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRealTbAccountSupportResponse>(await this.callApi(params, req, runtime), new QueryRealTbAccountSupportResponse({}));
  }

  async queryRealTbAccountSupport(request: QueryRealTbAccountSupportRequest): Promise<QueryRealTbAccountSupportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRealTbAccountSupportWithOptions(request, runtime);
  }

  async queryRefundApplicationDetailWithOptions(request: QueryRefundApplicationDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryRefundApplicationDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryRefundApplicationDetail",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRefundApplicationDetailResponse>(await this.callApi(params, req, runtime), new QueryRefundApplicationDetailResponse({}));
  }

  async queryRefundApplicationDetail(request: QueryRefundApplicationDetailRequest): Promise<QueryRefundApplicationDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRefundApplicationDetailWithOptions(request, runtime);
  }

  async queryRefundApplyWithDesignatedTbUidWithOptions(request: QueryRefundApplyWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<QueryRefundApplyWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRefundApplyWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRefundApplyWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new QueryRefundApplyWithDesignatedTbUidResponse({}));
  }

  async queryRefundApplyWithDesignatedTbUid(request: QueryRefundApplyWithDesignatedTbUidRequest): Promise<QueryRefundApplyWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRefundApplyWithDesignatedTbUidWithOptions(request, runtime);
  }

  async querySellerLicenseWithOptions(request: QuerySellerLicenseRequest, runtime: $Util.RuntimeOptions): Promise<QuerySellerLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.sellerId)) {
      body["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QuerySellerLicense",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySellerLicenseResponse>(await this.callApi(params, req, runtime), new QuerySellerLicenseResponse({}));
  }

  async querySellerLicense(request: QuerySellerLicenseRequest): Promise<QuerySellerLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySellerLicenseWithOptions(request, runtime);
  }

  async queryStatementsWithOptions(request: QueryStatementsRequest, runtime: $Util.RuntimeOptions): Promise<QueryStatementsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.currency)) {
      query["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.payeeIds)) {
      query["PayeeIds"] = request.payeeIds;
    }

    if (!Util.isUnset(request.settleNoes)) {
      query["SettleNoes"] = request.settleNoes;
    }

    if (!Util.isUnset(request.settleStatus)) {
      query["SettleStatus"] = request.settleStatus;
    }

    if (!Util.isUnset(request.settleType)) {
      query["SettleType"] = request.settleType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryStatements",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryStatementsResponse>(await this.callApi(params, req, runtime), new QueryStatementsResponse({}));
  }

  async queryStatements(request: QueryStatementsRequest): Promise<QueryStatementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStatementsWithOptions(request, runtime);
  }

  async querySupplierItemBillDownloadUrlWithOptions(request: QuerySupplierItemBillDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<QuerySupplierItemBillDownloadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billId)) {
      body["BillId"] = request.billId;
    }

    if (!Util.isUnset(request.billPeriod)) {
      body["BillPeriod"] = request.billPeriod;
    }

    if (!Util.isUnset(request.billStatus)) {
      body["BillStatus"] = request.billStatus;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!Util.isUnset(request.lmShopId)) {
      body["LmShopId"] = request.lmShopId;
    }

    if (!Util.isUnset(request.lmShopName)) {
      body["LmShopName"] = request.lmShopName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QuerySupplierItemBillDownloadUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySupplierItemBillDownloadUrlResponse>(await this.callApi(params, req, runtime), new QuerySupplierItemBillDownloadUrlResponse({}));
  }

  async querySupplierItemBillDownloadUrl(request: QuerySupplierItemBillDownloadUrlRequest): Promise<QuerySupplierItemBillDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySupplierItemBillDownloadUrlWithOptions(request, runtime);
  }

  async queryUnfinishedActivitiesWithOptions(request: QueryUnfinishedActivitiesRequest, runtime: $Util.RuntimeOptions): Promise<QueryUnfinishedActivitiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUnfinishedActivities",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUnfinishedActivitiesResponse>(await this.callApi(params, req, runtime), new QueryUnfinishedActivitiesResponse({}));
  }

  async queryUnfinishedActivities(request: QueryUnfinishedActivitiesRequest): Promise<QueryUnfinishedActivitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUnfinishedActivitiesWithOptions(request, runtime);
  }

  async queryUnfinishedSessionsWithOptions(request: QueryUnfinishedSessionsRequest, runtime: $Util.RuntimeOptions): Promise<QueryUnfinishedSessionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryTime)) {
      query["QueryTime"] = request.queryTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUnfinishedSessions",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUnfinishedSessionsResponse>(await this.callApi(params, req, runtime), new QueryUnfinishedSessionsResponse({}));
  }

  async queryUnfinishedSessions(request: QueryUnfinishedSessionsRequest): Promise<QueryUnfinishedSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUnfinishedSessionsWithOptions(request, runtime);
  }

  async queryUnfinishedSessions4ItemsWithOptions(tmpReq: QueryUnfinishedSessions4ItemsRequest, runtime: $Util.RuntimeOptions): Promise<QueryUnfinishedSessions4ItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryUnfinishedSessions4ItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemIds)) {
      request.itemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemIds, "ItemIds", "json");
    }

    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.itemIdsShrink)) {
      query["ItemIds"] = request.itemIdsShrink;
    }

    if (!Util.isUnset(request.lmItemIdsShrink)) {
      query["LmItemIds"] = request.lmItemIdsShrink;
    }

    if (!Util.isUnset(request.queryTime)) {
      query["QueryTime"] = request.queryTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUnfinishedSessions4Items",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUnfinishedSessions4ItemsResponse>(await this.callApi(params, req, runtime), new QueryUnfinishedSessions4ItemsResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.cityCode)) {
      query["CityCode"] = request.cityCode;
    }

    if (!Util.isUnset(request.extJsonShrink)) {
      query["ExtJson"] = request.extJsonShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUpcomingMovies",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUpcomingMoviesResponse>(await this.callApi(params, req, runtime), new QueryUpcomingMoviesResponse({}));
  }

  async queryUpcomingMovies(request: QueryUpcomingMoviesRequest): Promise<QueryUpcomingMoviesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUpcomingMoviesWithOptions(request, runtime);
  }

  async queryUserAccountWithOptions(request: QueryUserAccountRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserAccountResponse>(await this.callApi(params, req, runtime), new QueryUserAccountResponse({}));
  }

  async queryUserAccount(request: QueryUserAccountRequest): Promise<QueryUserAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserAccountWithOptions(request, runtime);
  }

  async queryUserGameProcessWithOptions(tmpReq: QueryUserGameProcessRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserGameProcessResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryUserGameProcessShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserGameProcess",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserGameProcessResponse>(await this.callApi(params, req, runtime), new QueryUserGameProcessResponse({}));
  }

  async queryUserGameProcess(request: QueryUserGameProcessRequest): Promise<QueryUserGameProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserGameProcessWithOptions(request, runtime);
  }

  async queryUserPointWithOptions(tmpReq: QueryUserPointRequest, runtime: $Util.RuntimeOptions): Promise<QueryUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUserPointResponse>(await this.callApi(params, req, runtime), new QueryUserPointResponse({}));
  }

  async queryUserPoint(request: QueryUserPointRequest): Promise<QueryUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUserPointWithOptions(request, runtime);
  }

  async queryWithholdTradeWithOptions(request: QueryWithholdTradeRequest, runtime: $Util.RuntimeOptions): Promise<QueryWithholdTradeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.outTradeNo)) {
      body["OutTradeNo"] = request.outTradeNo;
    }

    if (!Util.isUnset(request.tradeNo)) {
      body["TradeNo"] = request.tradeNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryWithholdTrade",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryWithholdTradeResponse>(await this.callApi(params, req, runtime), new QueryWithholdTradeResponse({}));
  }

  async queryWithholdTrade(request: QueryWithholdTradeRequest): Promise<QueryWithholdTradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryWithholdTradeWithOptions(request, runtime);
  }

  async rebindTbAccountWithOptions(request: RebindTbAccountRequest, runtime: $Util.RuntimeOptions): Promise<RebindTbAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RebindTbAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebindTbAccountResponse>(await this.callApi(params, req, runtime), new RebindTbAccountResponse({}));
  }

  async rebindTbAccount(request: RebindTbAccountRequest): Promise<RebindTbAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebindTbAccountWithOptions(request, runtime);
  }

  async refreshSettlementOrderAccountWithOptions(request: RefreshSettlementOrderAccountRequest, runtime: $Util.RuntimeOptions): Promise<RefreshSettlementOrderAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefreshSettlementOrderAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshSettlementOrderAccountResponse>(await this.callApi(params, req, runtime), new RefreshSettlementOrderAccountResponse({}));
  }

  async refreshSettlementOrderAccount(request: RefreshSettlementOrderAccountRequest): Promise<RefreshSettlementOrderAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshSettlementOrderAccountWithOptions(request, runtime);
  }

  async refundOrderWithOptions(request: RefundOrderRequest, runtime: $Util.RuntimeOptions): Promise<RefundOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.outRequestNo)) {
      body["OutRequestNo"] = request.outRequestNo;
    }

    if (!Util.isUnset(request.outTradeNo)) {
      body["OutTradeNo"] = request.outTradeNo;
    }

    if (!Util.isUnset(request.refundAmount)) {
      body["RefundAmount"] = request.refundAmount;
    }

    if (!Util.isUnset(request.refundReason)) {
      body["RefundReason"] = request.refundReason;
    }

    if (!Util.isUnset(request.refundRoyaltyParameters)) {
      body["RefundRoyaltyParameters"] = request.refundRoyaltyParameters;
    }

    if (!Util.isUnset(request.tradeNo)) {
      body["TradeNo"] = request.tradeNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefundOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundOrderResponse>(await this.callApi(params, req, runtime), new RefundOrderResponse({}));
  }

  async refundOrder(request: RefundOrderRequest): Promise<RefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundOrderWithOptions(request, runtime);
  }

  async refundPointWithOptions(request: RefundPointRequest, runtime: $Util.RuntimeOptions): Promise<RefundPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.sellerId)) {
      query["SellerId"] = request.sellerId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefundPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundPointResponse>(await this.callApi(params, req, runtime), new RefundPointResponse({}));
  }

  async refundPoint(request: RefundPointRequest): Promise<RefundPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundPointWithOptions(request, runtime);
  }

  async refundUserPointWithOptions(tmpReq: RefundUserPointRequest, runtime: $Util.RuntimeOptions): Promise<RefundUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new RefundUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.originRecordId)) {
      query["OriginRecordId"] = request.originRecordId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RefundUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefundUserPointResponse>(await this.callApi(params, req, runtime), new RefundUserPointResponse({}));
  }

  async refundUserPoint(request: RefundUserPointRequest): Promise<RefundUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refundUserPointWithOptions(request, runtime);
  }

  async refuseMerchantSyncTaskWithOptions(request: RefuseMerchantSyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<RefuseMerchantSyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.sellerNick)) {
      query["SellerNick"] = request.sellerNick;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.timeStamp)) {
      query["TimeStamp"] = request.timeStamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefuseMerchantSyncTask",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefuseMerchantSyncTaskResponse>(await this.callApi(params, req, runtime), new RefuseMerchantSyncTaskResponse({}));
  }

  async refuseMerchantSyncTask(request: RefuseMerchantSyncTaskRequest): Promise<RefuseMerchantSyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refuseMerchantSyncTaskWithOptions(request, runtime);
  }

  async registAnonymousTbAccountWithOptions(request: RegistAnonymousTbAccountRequest, runtime: $Util.RuntimeOptions): Promise<RegistAnonymousTbAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegistAnonymousTbAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegistAnonymousTbAccountResponse>(await this.callApi(params, req, runtime), new RegistAnonymousTbAccountResponse({}));
  }

  async registAnonymousTbAccount(request: RegistAnonymousTbAccountRequest): Promise<RegistAnonymousTbAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registAnonymousTbAccountWithOptions(request, runtime);
  }

  async registerSettleAccountWithOptions(request: RegisterSettleAccountRequest, runtime: $Util.RuntimeOptions): Promise<RegisterSettleAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountChannel)) {
      body["AccountChannel"] = request.accountChannel;
    }

    if (!Util.isUnset(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!Util.isUnset(request.accountPayType)) {
      body["AccountPayType"] = request.accountPayType;
    }

    if (!Util.isUnset(request.accountType)) {
      body["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.countryOrAreaCode)) {
      body["CountryOrAreaCode"] = request.countryOrAreaCode;
    }

    if (!Util.isUnset(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.idempotentId)) {
      body["IdempotentId"] = request.idempotentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterSettleAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterSettleAccountResponse>(await this.callApi(params, req, runtime), new RegisterSettleAccountResponse({}));
  }

  async registerSettleAccount(request: RegisterSettleAccountRequest): Promise<RegisterSettleAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerSettleAccountWithOptions(request, runtime);
  }

  async registerUserAccountWithOptions(request: RegisterUserAccountRequest, runtime: $Util.RuntimeOptions): Promise<RegisterUserAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterUserAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterUserAccountResponse>(await this.callApi(params, req, runtime), new RegisterUserAccountResponse({}));
  }

  async registerUserAccount(request: RegisterUserAccountRequest): Promise<RegisterUserAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerUserAccountWithOptions(request, runtime);
  }

  async releaseMovieSeatWithOptions(request: ReleaseMovieSeatRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseMovieSeatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.lockSeatApplyKey)) {
      query["LockSeatApplyKey"] = request.lockSeatApplyKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseMovieSeat",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseMovieSeatResponse>(await this.callApi(params, req, runtime), new ReleaseMovieSeatResponse({}));
  }

  async releaseMovieSeat(request: ReleaseMovieSeatRequest): Promise<ReleaseMovieSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseMovieSeatWithOptions(request, runtime);
  }

  async removeAddressWithOptions(request: RemoveAddressRequest, runtime: $Util.RuntimeOptions): Promise<RemoveAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressInfo)) {
      body["AddressInfo"] = request.addressInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveAddress",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveAddressResponse>(await this.callApi(params, req, runtime), new RemoveAddressResponse({}));
  }

  async removeAddress(request: RemoveAddressRequest): Promise<RemoveAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeAddressWithOptions(request, runtime);
  }

  async removeMessagesWithOptions(request: RemoveMessagesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMessagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.messageIds)) {
      query["MessageIds"] = request.messageIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveMessages",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveMessagesResponse>(await this.callApi(params, req, runtime), new RemoveMessagesResponse({}));
  }

  async removeMessages(request: RemoveMessagesRequest): Promise<RemoveMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMessagesWithOptions(request, runtime);
  }

  async renderH5OrderWithOptions(request: RenderH5OrderRequest, runtime: $Util.RuntimeOptions): Promise<RenderH5OrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.buyOrderRequestModel)) {
      query["BuyOrderRequestModel"] = request.buyOrderRequestModel;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenderH5Order",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenderH5OrderResponse>(await this.callApi(params, req, runtime), new RenderH5OrderResponse({}));
  }

  async renderH5Order(request: RenderH5OrderRequest): Promise<RenderH5OrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderH5OrderWithOptions(request, runtime);
  }

  async renderOrderWithOptions(request: RenderOrderRequest, runtime: $Util.RuntimeOptions): Promise<RenderOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      query["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.itemList)) {
      query["ItemList"] = request.itemList;
    }

    if (!Util.isUnset(request.lmItemId)) {
      query["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenderOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenderOrderResponse>(await this.callApi(params, req, runtime), new RenderOrderResponse({}));
  }

  async renderOrder(request: RenderOrderRequest): Promise<RenderOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderOrderWithOptions(request, runtime);
  }

  async renderOrderWithDesignatedTbUidWithOptions(tmpReq: RenderOrderWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<RenderOrderWithDesignatedTbUidResponse> {
    Util.validateModel(tmpReq);
    let request = new RenderOrderWithDesignatedTbUidShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemList)) {
      request.itemListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemList, "ItemList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      body["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.itemListShrink)) {
      body["ItemList"] = request.itemListShrink;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenderOrderWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenderOrderWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new RenderOrderWithDesignatedTbUidResponse({}));
  }

  async renderOrderWithDesignatedTbUid(request: RenderOrderWithDesignatedTbUidRequest): Promise<RenderOrderWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderOrderWithDesignatedTbUidWithOptions(request, runtime);
  }

  async repayForPayUrlWithOptions(request: RepayForPayUrlRequest, runtime: $Util.RuntimeOptions): Promise<RepayForPayUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RepayForPayUrl",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RepayForPayUrlResponse>(await this.callApi(params, req, runtime), new RepayForPayUrlResponse({}));
  }

  async repayForPayUrl(request: RepayForPayUrlRequest): Promise<RepayForPayUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.repayForPayUrlWithOptions(request, runtime);
  }

  async repayOrderWithOptions(request: RepayOrderRequest, runtime: $Util.RuntimeOptions): Promise<RepayOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      query["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RepayOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RepayOrderResponse>(await this.callApi(params, req, runtime), new RepayOrderResponse({}));
  }

  async repayOrder(request: RepayOrderRequest): Promise<RepayOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.repayOrderWithOptions(request, runtime);
  }

  async repayWithDesignatedTbUidWithOptions(request: RepayWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<RepayWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.extJson)) {
      body["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.lmOrderId)) {
      body["LmOrderId"] = request.lmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RepayWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RepayWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new RepayWithDesignatedTbUidResponse({}));
  }

  async repayWithDesignatedTbUid(request: RepayWithDesignatedTbUidRequest): Promise<RepayWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.repayWithDesignatedTbUidWithOptions(request, runtime);
  }

  async reserveMovieSeatWithOptions(request: ReserveMovieSeatRequest, runtime: $Util.RuntimeOptions): Promise<ReserveMovieSeatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!Util.isUnset(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.seatIds)) {
      query["SeatIds"] = request.seatIds;
    }

    if (!Util.isUnset(request.seatNames)) {
      query["SeatNames"] = request.seatNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReserveMovieSeat",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReserveMovieSeatResponse>(await this.callApi(params, req, runtime), new ReserveMovieSeatResponse({}));
  }

  async reserveMovieSeat(request: ReserveMovieSeatRequest): Promise<ReserveMovieSeatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reserveMovieSeatWithOptions(request, runtime);
  }

  async settleOrderWithOptions(request: SettleOrderRequest, runtime: $Util.RuntimeOptions): Promise<SettleOrderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.outRequestNo)) {
      body["OutRequestNo"] = request.outRequestNo;
    }

    if (!Util.isUnset(request.outTradeNo)) {
      body["OutTradeNo"] = request.outTradeNo;
    }

    if (!Util.isUnset(request.royaltyParameters)) {
      body["RoyaltyParameters"] = request.royaltyParameters;
    }

    if (!Util.isUnset(request.tradeNo)) {
      body["TradeNo"] = request.tradeNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SettleOrder",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SettleOrderResponse>(await this.callApi(params, req, runtime), new SettleOrderResponse({}));
  }

  async settleOrder(request: SettleOrderRequest): Promise<SettleOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.settleOrderWithOptions(request, runtime);
  }

  async startUserGameWithOptions(tmpReq: StartUserGameRequest, runtime: $Util.RuntimeOptions): Promise<StartUserGameResponse> {
    Util.validateModel(tmpReq);
    let request = new StartUserGameShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.gameId)) {
      query["GameId"] = request.gameId;
    }

    if (!Util.isUnset(request.routeId)) {
      query["RouteId"] = request.routeId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.userApp)) {
      query["UserApp"] = request.userApp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartUserGame",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartUserGameResponse>(await this.callApi(params, req, runtime), new StartUserGameResponse({}));
  }

  async startUserGame(request: StartUserGameRequest): Promise<StartUserGameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startUserGameWithOptions(request, runtime);
  }

  async submitReturnGoodLogisticsWithOptions(request: SubmitReturnGoodLogisticsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReturnGoodLogisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.cpCode)) {
      query["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.disputeId)) {
      query["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.logisticsNo)) {
      query["LogisticsNo"] = request.logisticsNo;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      query["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitReturnGoodLogistics",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitReturnGoodLogisticsResponse>(await this.callApi(params, req, runtime), new SubmitReturnGoodLogisticsResponse({}));
  }

  async submitReturnGoodLogistics(request: SubmitReturnGoodLogisticsRequest): Promise<SubmitReturnGoodLogisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReturnGoodLogisticsWithOptions(request, runtime);
  }

  async submitReturnGoodLogisticsWithDesignatedTbUidWithOptions(request: SubmitReturnGoodLogisticsWithDesignatedTbUidRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReturnGoodLogisticsWithDesignatedTbUidResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.cpCode)) {
      body["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.logisticsNo)) {
      body["LogisticsNo"] = request.logisticsNo;
    }

    if (!Util.isUnset(request.subLmOrderId)) {
      body["SubLmOrderId"] = request.subLmOrderId;
    }

    if (!Util.isUnset(request.tbAccountType)) {
      body["TbAccountType"] = request.tbAccountType;
    }

    if (!Util.isUnset(request.tbUserId)) {
      body["TbUserId"] = request.tbUserId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      body["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitReturnGoodLogisticsWithDesignatedTbUid",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitReturnGoodLogisticsWithDesignatedTbUidResponse>(await this.callApi(params, req, runtime), new SubmitReturnGoodLogisticsWithDesignatedTbUidResponse({}));
  }

  async submitReturnGoodLogisticsWithDesignatedTbUid(request: SubmitReturnGoodLogisticsWithDesignatedTbUidRequest): Promise<SubmitReturnGoodLogisticsWithDesignatedTbUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReturnGoodLogisticsWithDesignatedTbUidWithOptions(request, runtime);
  }

  async syncMerchantInfoWithOptions(request: SyncMerchantInfoRequest, runtime: $Util.RuntimeOptions): Promise<SyncMerchantInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.sellerNick)) {
      query["SellerNick"] = request.sellerNick;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.timeStamp)) {
      query["TimeStamp"] = request.timeStamp;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.itemList)) {
      body["ItemList"] = request.itemList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncMerchantInfo",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncMerchantInfoResponse>(await this.callApi(params, req, runtime), new SyncMerchantInfoResponse({}));
  }

  async syncMerchantInfo(request: SyncMerchantInfoRequest): Promise<SyncMerchantInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncMerchantInfoWithOptions(request, runtime);
  }

  async unFreezeUserPointWithOptions(tmpReq: UnFreezeUserPointRequest, runtime: $Util.RuntimeOptions): Promise<UnFreezeUserPointResponse> {
    Util.validateModel(tmpReq);
    let request = new UnFreezeUserPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extInfo)) {
      request.extInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extInfo, "ExtInfo", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.idempotentId)) {
      query["IdempotentId"] = request.idempotentId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extInfoShrink)) {
      body["ExtInfo"] = request.extInfoShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnFreezeUserPoint",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnFreezeUserPointResponse>(await this.callApi(params, req, runtime), new UnFreezeUserPointResponse({}));
  }

  async unFreezeUserPoint(request: UnFreezeUserPointRequest): Promise<UnFreezeUserPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unFreezeUserPointWithOptions(request, runtime);
  }

  async unsignWithholdAgreementWithOptions(request: UnsignWithholdAgreementRequest, runtime: $Util.RuntimeOptions): Promise<UnsignWithholdAgreementResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agreementNo)) {
      body["AgreementNo"] = request.agreementNo;
    }

    if (!Util.isUnset(request.externalAgreementNo)) {
      body["ExternalAgreementNo"] = request.externalAgreementNo;
    }

    if (!Util.isUnset(request.merchantId)) {
      body["MerchantId"] = request.merchantId;
    }

    if (!Util.isUnset(request.outRequestNo)) {
      body["OutRequestNo"] = request.outRequestNo;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnsignWithholdAgreement",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnsignWithholdAgreementResponse>(await this.callApi(params, req, runtime), new UnsignWithholdAgreementResponse({}));
  }

  async unsignWithholdAgreement(request: UnsignWithholdAgreementRequest): Promise<UnsignWithholdAgreementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsignWithholdAgreementWithOptions(request, runtime);
  }

  async updateAddressWithOptions(request: UpdateAddressRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.thirdPartyUserId)) {
      query["ThirdPartyUserId"] = request.thirdPartyUserId;
    }

    if (!Util.isUnset(request.useAnonymousTbAccount)) {
      query["UseAnonymousTbAccount"] = request.useAnonymousTbAccount;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressInfo)) {
      body["AddressInfo"] = request.addressInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAddress",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAddressResponse>(await this.callApi(params, req, runtime), new UpdateAddressResponse({}));
  }

  async updateAddress(request: UpdateAddressRequest): Promise<UpdateAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAddressWithOptions(request, runtime);
  }

  async validateTaobaoAccountWithOptions(request: ValidateTaobaoAccountRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTaobaoAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.bizUid)) {
      query["BizUid"] = request.bizUid;
    }

    if (!Util.isUnset(request.extJson)) {
      query["ExtJson"] = request.extJson;
    }

    if (!Util.isUnset(request.mobileNo)) {
      query["MobileNo"] = request.mobileNo;
    }

    if (!Util.isUnset(request.tbUserNick)) {
      query["TbUserNick"] = request.tbUserNick;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateTaobaoAccount",
      version: "2018-01-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateTaobaoAccountResponse>(await this.callApi(params, req, runtime), new ValidateTaobaoAccountResponse({}));
  }

  async validateTaobaoAccount(request: ValidateTaobaoAccountRequest): Promise<ValidateTaobaoAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTaobaoAccountWithOptions(request, runtime);
  }

}
