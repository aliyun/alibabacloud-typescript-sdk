// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyCreateDistributionOrderRequest extends $tea.Model {
  buyerId?: string;
  deliveryAddress?: string;
  distributionOutTradeId?: string;
  distributionSupplierId?: string;
  distributorId?: string;
  extInfo?: string;
  itemInfoLists?: ApplyCreateDistributionOrderRequestItemInfoLists[];
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      deliveryAddress: 'DeliveryAddress',
      distributionOutTradeId: 'DistributionOutTradeId',
      distributionSupplierId: 'DistributionSupplierId',
      distributorId: 'DistributorId',
      extInfo: 'ExtInfo',
      itemInfoLists: 'ItemInfoLists',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: 'string',
      distributionOutTradeId: 'string',
      distributionSupplierId: 'string',
      distributorId: 'string',
      extInfo: 'string',
      itemInfoLists: { 'type': 'array', 'itemType': ApplyCreateDistributionOrderRequestItemInfoLists },
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCreateDistributionOrderShrinkRequest extends $tea.Model {
  buyerId?: string;
  deliveryAddress?: string;
  distributionOutTradeId?: string;
  distributionSupplierId?: string;
  distributorId?: string;
  extInfo?: string;
  itemInfoListsShrink?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      deliveryAddress: 'DeliveryAddress',
      distributionOutTradeId: 'DistributionOutTradeId',
      distributionSupplierId: 'DistributionSupplierId',
      distributorId: 'DistributorId',
      extInfo: 'ExtInfo',
      itemInfoListsShrink: 'ItemInfoLists',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: 'string',
      distributionOutTradeId: 'string',
      distributionSupplierId: 'string',
      distributorId: 'string',
      extInfo: 'string',
      itemInfoListsShrink: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCreateDistributionOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: string;
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
      model: 'string',
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

export class ApplyCreateDistributionOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyCreateDistributionOrderResponseBody;
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
      body: ApplyCreateDistributionOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefund4DistributionRequest extends $tea.Model {
  applyReasonTextId?: number;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  distributorId?: string;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureLists?: ApplyRefund4DistributionRequestLeavePictureLists[];
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      applyReasonTextId: 'ApplyReasonTextId',
      applyRefundCount: 'ApplyRefundCount',
      applyRefundFee: 'ApplyRefundFee',
      bizClaimType: 'BizClaimType',
      distributorId: 'DistributorId',
      goodsStatus: 'GoodsStatus',
      leaveMessage: 'LeaveMessage',
      leavePictureLists: 'LeavePictureLists',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReasonTextId: 'number',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      distributorId: 'string',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureLists: { 'type': 'array', 'itemType': ApplyRefund4DistributionRequestLeavePictureLists },
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefund4DistributionShrinkRequest extends $tea.Model {
  applyReasonTextId?: number;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  distributorId?: string;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureListsShrink?: string;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      applyReasonTextId: 'ApplyReasonTextId',
      applyRefundCount: 'ApplyRefundCount',
      applyRefundFee: 'ApplyRefundFee',
      bizClaimType: 'BizClaimType',
      distributorId: 'DistributorId',
      goodsStatus: 'GoodsStatus',
      leaveMessage: 'LeaveMessage',
      leavePictureListsShrink: 'LeavePictureLists',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReasonTextId: 'number',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      distributorId: 'string',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureListsShrink: 'string',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefund4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ApplyRefund4DistributionResponseBodyModel;
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
      model: ApplyRefund4DistributionResponseBodyModel,
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

export class ApplyRefund4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyRefund4DistributionResponseBody;
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
      body: ApplyRefund4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDistributionTradeRequest extends $tea.Model {
  distributionTradeId?: string;
  distributorId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionTradeId: 'DistributionTradeId',
      distributorId: 'DistributorId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionTradeId: 'string',
      distributorId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDistributionTradeResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
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

export class CancelDistributionTradeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDistributionTradeResponseBody;
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
      body: CancelDistributionTradeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefund4DistributionRequest extends $tea.Model {
  disputeId?: number;
  distributorId?: string;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      distributorId: 'DistributorId',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      distributorId: 'string',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefund4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: CancelRefund4DistributionResponseBodyModel;
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
      model: CancelRefund4DistributionResponseBodyModel,
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

export class CancelRefund4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRefund4DistributionResponseBody;
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
      body: CancelRefund4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburse4DistributionRequest extends $tea.Model {
  distributionTradeId?: string;
  distributorId?: string;
  mainDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionTradeId: 'DistributionTradeId',
      distributorId: 'DistributorId',
      mainDistributionOrderId: 'MainDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionTradeId: 'string',
      distributorId: 'string',
      mainDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmDisburse4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
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

export class ConfirmDisburse4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmDisburse4DistributionResponseBody;
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
      body: ConfirmDisburse4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefund4DistributionRequest extends $tea.Model {
  bizClaimType?: number;
  distributorId?: string;
  goodsStatus?: number;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      distributorId: 'DistributorId',
      goodsStatus: 'GoodsStatus',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      distributorId: 'string',
      goodsStatus: 'number',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefund4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: InitApplyRefund4DistributionResponseBodyModel;
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
      model: InitApplyRefund4DistributionResponseBodyModel,
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

export class InitApplyRefund4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitApplyRefund4DistributionResponseBody;
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
      body: InitApplyRefund4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefund4DistributionRequest extends $tea.Model {
  bizClaimType?: number;
  disputeId?: number;
  distributorId?: string;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      disputeId: 'DisputeId',
      distributorId: 'DistributorId',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      disputeId: 'number',
      distributorId: 'string',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefund4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: InitModifyRefund4DistributionResponseBodyModel;
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
      model: InitModifyRefund4DistributionResponseBodyModel,
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

export class InitModifyRefund4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitModifyRefund4DistributionResponseBody;
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
      body: InitModifyRefund4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemRequest extends $tea.Model {
  distributionMallId?: string;
  distributorId?: string;
  itemStatus?: number;
  lmItemId?: string;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      itemStatus: 'ItemStatus',
      lmItemId: 'LmItemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      distributorId: 'string',
      itemStatus: 'number',
      lmItemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ListDistributionItemResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': ListDistributionItemResponseBodyModel },
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

export class ListDistributionItemResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDistributionItemResponseBody;
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
      body: ListDistributionItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemWithoutCacheRequest extends $tea.Model {
  distributionMallId?: string;
  distributorId?: string;
  itemStatus?: number;
  lmItemId?: string;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      itemStatus: 'ItemStatus',
      lmItemId: 'LmItemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      distributorId: 'string',
      itemStatus: 'number',
      lmItemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemWithoutCacheResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ListDistributionItemWithoutCacheResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': ListDistributionItemWithoutCacheResponseBodyModel },
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

export class ListDistributionItemWithoutCacheResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDistributionItemWithoutCacheResponseBody;
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
      body: ListDistributionItemWithoutCacheResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionMallRequest extends $tea.Model {
  channelSupplierId?: string;
  distributionMallId?: string;
  distributionMallName?: string;
  distributorId?: string;
  endDate?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      channelSupplierId: 'ChannelSupplierId',
      distributionMallId: 'DistributionMallId',
      distributionMallName: 'DistributionMallName',
      distributorId: 'DistributorId',
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSupplierId: 'string',
      distributionMallId: 'string',
      distributionMallName: 'string',
      distributorId: 'string',
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionMallResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ListDistributionMallResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': ListDistributionMallResponseBodyModel },
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

export class ListDistributionMallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDistributionMallResponseBody;
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
      body: ListDistributionMallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefund4DistributionRequest extends $tea.Model {
  applyReasonTextId?: number;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  disputeId?: number;
  distributorId?: string;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureLists?: ModifyRefund4DistributionRequestLeavePictureLists[];
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      applyReasonTextId: 'ApplyReasonTextId',
      applyRefundCount: 'ApplyRefundCount',
      applyRefundFee: 'ApplyRefundFee',
      bizClaimType: 'BizClaimType',
      disputeId: 'DisputeId',
      distributorId: 'DistributorId',
      goodsStatus: 'GoodsStatus',
      leaveMessage: 'LeaveMessage',
      leavePictureLists: 'LeavePictureLists',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReasonTextId: 'number',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      disputeId: 'number',
      distributorId: 'string',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureLists: { 'type': 'array', 'itemType': ModifyRefund4DistributionRequestLeavePictureLists },
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefund4DistributionShrinkRequest extends $tea.Model {
  applyReasonTextId?: number;
  applyRefundCount?: number;
  applyRefundFee?: number;
  bizClaimType?: number;
  disputeId?: number;
  distributorId?: string;
  goodsStatus?: number;
  leaveMessage?: string;
  leavePictureListsShrink?: string;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      applyReasonTextId: 'ApplyReasonTextId',
      applyRefundCount: 'ApplyRefundCount',
      applyRefundFee: 'ApplyRefundFee',
      bizClaimType: 'BizClaimType',
      disputeId: 'DisputeId',
      distributorId: 'DistributorId',
      goodsStatus: 'GoodsStatus',
      leaveMessage: 'LeaveMessage',
      leavePictureListsShrink: 'LeavePictureLists',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReasonTextId: 'number',
      applyRefundCount: 'number',
      applyRefundFee: 'number',
      bizClaimType: 'number',
      disputeId: 'number',
      distributorId: 'string',
      goodsStatus: 'number',
      leaveMessage: 'string',
      leavePictureListsShrink: 'string',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefund4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: ModifyRefund4DistributionResponseBodyModel;
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
      model: ModifyRefund4DistributionResponseBodyModel,
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

export class ModifyRefund4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRefund4DistributionResponseBody;
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
      body: ModifyRefund4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeByIdRequest extends $tea.Model {
  distributorId?: string;
  divisionCode?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributorId: 'DistributorId',
      divisionCode: 'DivisionCode',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorId: 'string',
      divisionCode: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeByIdResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryChildDivisionCodeByIdResponseBodyModel;
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
      model: QueryChildDivisionCodeByIdResponseBodyModel,
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

export class QueryChildDivisionCodeByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryChildDivisionCodeByIdResponseBody;
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
      body: QueryChildDivisionCodeByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionBillDetailRequest extends $tea.Model {
  billId?: string;
  billPeriod?: string;
  billStatus?: string;
  distributionMallId?: string;
  distributionMallName?: string;
  distributorId?: string;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      billPeriod: 'BillPeriod',
      billStatus: 'BillStatus',
      distributionMallId: 'DistributionMallId',
      distributionMallName: 'DistributionMallName',
      distributorId: 'DistributorId',
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
      distributionMallId: 'string',
      distributionMallName: 'string',
      distributorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionBillDetailResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryDistributionBillDetailResponseBodyModel;
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
      model: QueryDistributionBillDetailResponseBodyModel,
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

export class QueryDistributionBillDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDistributionBillDetailResponseBody;
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
      body: QueryDistributionBillDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionMallRequest extends $tea.Model {
  distributionMallId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionMallResponseBody extends $tea.Model {
  bizViewData?: { [key: string]: any };
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryDistributionMallResponseBodyModel;
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
      bizViewData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryDistributionMallResponseBodyModel,
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

export class QueryDistributionMallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDistributionMallResponseBody;
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
      body: QueryDistributionMallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionTradeStatusRequest extends $tea.Model {
  distributionSupplierId?: string;
  distributionTradeId?: string;
  distributorId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionSupplierId: 'DistributionSupplierId',
      distributionTradeId: 'DistributionTradeId',
      distributorId: 'DistributorId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionSupplierId: 'string',
      distributionTradeId: 'string',
      distributorId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionTradeStatusResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: string;
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
      model: 'string',
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

export class QueryDistributionTradeStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDistributionTradeStatusResponseBody;
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
      body: QueryDistributionTradeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailRequest extends $tea.Model {
  distributionMallId?: string;
  distributorId?: string;
  lmItemId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      lmItemId: 'LmItemId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      distributorId: 'string',
      lmItemId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBody extends $tea.Model {
  bizViewData?: { [key: string]: any };
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryItemDetailResponseBodyModel;
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
      bizViewData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      logsId: 'string',
      message: 'string',
      model: QueryItemDetailResponseBodyModel,
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

export class QueryItemDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryItemDetailResponseBody;
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

export class QueryItemDetailWithDivisionRequest extends $tea.Model {
  distributionMallId?: string;
  distributorId?: string;
  divisionCode?: string;
  lmItemId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      divisionCode: 'DivisionCode',
      lmItemId: 'LmItemId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      distributorId: 'string',
      divisionCode: 'string',
      lmItemId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailWithDivisionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryItemDetailWithDivisionResponseBodyModel;
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
      model: QueryItemDetailWithDivisionResponseBodyModel,
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

export class QueryItemDetailWithDivisionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryItemDetailWithDivisionResponseBody;
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
      body: QueryItemDetailWithDivisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemGuideRetailPriceRequest extends $tea.Model {
  distributionMallId?: string;
  distributorId?: string;
  lmItemIds?: string[];
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      lmItemIds: 'LmItemIds',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      distributorId: 'string',
      lmItemIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemGuideRetailPriceShrinkRequest extends $tea.Model {
  distributionMallId?: string;
  distributorId?: string;
  lmItemIdsShrink?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      lmItemIdsShrink: 'LmItemIds',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      distributorId: 'string',
      lmItemIdsShrink: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemGuideRetailPriceResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryItemGuideRetailPriceResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': QueryItemGuideRetailPriceResponseBodyModel },
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

export class QueryItemGuideRetailPriceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryItemGuideRetailPriceResponseBody;
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
      body: QueryItemGuideRetailPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogistics4DistributionRequest extends $tea.Model {
  distributorId?: string;
  mainDistributionOrderId?: string;
  requestId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributorId: 'DistributorId',
      mainDistributionOrderId: 'MainDistributionOrderId',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorId: 'string',
      mainDistributionOrderId: 'string',
      requestId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogistics4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryLogistics4DistributionResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': QueryLogistics4DistributionResponseBodyModel },
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

export class QueryLogistics4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryLogistics4DistributionResponseBody;
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
      body: QueryLogistics4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMallCategoryListRequest extends $tea.Model {
  categoryId?: number;
  distributionMallId?: string;
  distributorId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      distributionMallId: 'DistributionMallId',
      distributorId: 'DistributorId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      distributionMallId: 'string',
      distributorId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMallCategoryListResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryMallCategoryListResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': QueryMallCategoryListResponseBodyModel },
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

export class QueryMallCategoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMallCategoryListResponseBody;
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
      body: QueryMallCategoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetail4DistributionRequest extends $tea.Model {
  distributorId?: string;
  mainDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributorId: 'DistributorId',
      mainDistributionOrderId: 'MainDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorId: 'string',
      mainDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetail4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryOrderDetail4DistributionResponseBodyModel;
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
      model: QueryOrderDetail4DistributionResponseBodyModel,
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

export class QueryOrderDetail4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrderDetail4DistributionResponseBody;
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
      body: QueryOrderDetail4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderList4DistributionRequest extends $tea.Model {
  distributorId?: string;
  filterOption?: string;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributorId: 'DistributorId',
      filterOption: 'FilterOption',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorId: 'string',
      filterOption: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderList4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryOrderList4DistributionResponseBodyModel[];
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
      model: { 'type': 'array', 'itemType': QueryOrderList4DistributionResponseBodyModel },
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

export class QueryOrderList4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryOrderList4DistributionResponseBody;
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
      body: QueryOrderList4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetail4DistributionRequest extends $tea.Model {
  distributorId?: string;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      distributorId: 'DistributorId',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributorId: 'string',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetail4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: QueryRefundApplicationDetail4DistributionResponseBodyModel;
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
      model: QueryRefundApplicationDetail4DistributionResponseBodyModel,
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

export class QueryRefundApplicationDetail4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRefundApplicationDetail4DistributionResponseBody;
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
      body: QueryRefundApplicationDetail4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderRequest extends $tea.Model {
  buyerId?: string;
  deliveryAddress?: string;
  distributionSupplierId?: string;
  distributorId?: string;
  extInfo?: string;
  itemInfoLists?: RenderDistributionOrderRequestItemInfoLists[];
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      deliveryAddress: 'DeliveryAddress',
      distributionSupplierId: 'DistributionSupplierId',
      distributorId: 'DistributorId',
      extInfo: 'ExtInfo',
      itemInfoLists: 'ItemInfoLists',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: 'string',
      distributionSupplierId: 'string',
      distributorId: 'string',
      extInfo: 'string',
      itemInfoLists: { 'type': 'array', 'itemType': RenderDistributionOrderRequestItemInfoLists },
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderShrinkRequest extends $tea.Model {
  buyerId?: string;
  deliveryAddress?: string;
  distributionSupplierId?: string;
  distributorId?: string;
  extInfo?: string;
  itemInfoListsShrink?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      deliveryAddress: 'DeliveryAddress',
      distributionSupplierId: 'DistributionSupplierId',
      distributorId: 'DistributorId',
      extInfo: 'ExtInfo',
      itemInfoListsShrink: 'ItemInfoLists',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      deliveryAddress: 'string',
      distributionSupplierId: 'string',
      distributorId: 'string',
      extInfo: 'string',
      itemInfoListsShrink: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
  model?: RenderDistributionOrderResponseBodyModel;
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
      model: RenderDistributionOrderResponseBodyModel,
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

export class RenderDistributionOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenderDistributionOrderResponseBody;
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
      body: RenderDistributionOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogistics4DistributionRequest extends $tea.Model {
  cpCode?: string;
  disputeId?: number;
  distributorId?: string;
  logisticsNo?: string;
  subDistributionOrderId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      cpCode: 'CpCode',
      disputeId: 'DisputeId',
      distributorId: 'DistributorId',
      logisticsNo: 'LogisticsNo',
      subDistributionOrderId: 'SubDistributionOrderId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpCode: 'string',
      disputeId: 'number',
      distributorId: 'string',
      logisticsNo: 'string',
      subDistributionOrderId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitReturnGoodLogistics4DistributionResponseBody extends $tea.Model {
  code?: string;
  logsId?: string;
  message?: string;
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

export class SubmitReturnGoodLogistics4DistributionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitReturnGoodLogistics4DistributionResponseBody;
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
      body: SubmitReturnGoodLogistics4DistributionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCreateDistributionOrderRequestItemInfoLists extends $tea.Model {
  distributionMallId?: string;
  lmItemId?: string;
  price?: number;
  quantity?: number;
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      lmItemId: 'LmItemId',
      price: 'Price',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      lmItemId: 'string',
      price: 'number',
      quantity: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyRefund4DistributionRequestLeavePictureLists extends $tea.Model {
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

export class ApplyRefund4DistributionResponseBodyModel extends $tea.Model {
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRefund4DistributionResponseBodyModel extends $tea.Model {
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefund4DistributionResponseBodyModelMaxRefundFeeData extends $tea.Model {
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

export class InitApplyRefund4DistributionResponseBodyModelRefundReasonList extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: string;
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
      reasonTextId: 'string',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitApplyRefund4DistributionResponseBodyModel extends $tea.Model {
  bizClaimType?: number;
  mainOrderRefund?: boolean;
  maxRefundFeeData?: InitApplyRefund4DistributionResponseBodyModelMaxRefundFeeData;
  refundReasonList?: InitApplyRefund4DistributionResponseBodyModelRefundReasonList[];
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      mainOrderRefund: 'MainOrderRefund',
      maxRefundFeeData: 'MaxRefundFeeData',
      refundReasonList: 'RefundReasonList',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      mainOrderRefund: 'boolean',
      maxRefundFeeData: InitApplyRefund4DistributionResponseBodyModelMaxRefundFeeData,
      refundReasonList: { 'type': 'array', 'itemType': InitApplyRefund4DistributionResponseBodyModelRefundReasonList },
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefund4DistributionResponseBodyModelMaxRefundFeeData extends $tea.Model {
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

export class InitModifyRefund4DistributionResponseBodyModelRefundReasonList extends $tea.Model {
  proofRequired?: boolean;
  reasonTextId?: string;
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
      reasonTextId: 'string',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitModifyRefund4DistributionResponseBodyModel extends $tea.Model {
  bizClaimType?: number;
  mainOrderRefund?: boolean;
  maxRefundFeeData?: InitModifyRefund4DistributionResponseBodyModelMaxRefundFeeData;
  refundReasonList?: InitModifyRefund4DistributionResponseBodyModelRefundReasonList[];
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      bizClaimType: 'BizClaimType',
      mainOrderRefund: 'MainOrderRefund',
      maxRefundFeeData: 'MaxRefundFeeData',
      refundReasonList: 'RefundReasonList',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizClaimType: 'number',
      mainOrderRefund: 'boolean',
      maxRefundFeeData: InitModifyRefund4DistributionResponseBodyModelMaxRefundFeeData,
      refundReasonList: { 'type': 'array', 'itemType': InitModifyRefund4DistributionResponseBodyModelRefundReasonList },
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemResponseBodyModelCategoryChain extends $tea.Model {
  categoryId?: number;
  leaf?: boolean;
  level?: number;
  name?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      leaf: 'Leaf',
      level: 'Level',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      leaf: 'boolean',
      level: 'number',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemResponseBodyModelLmAttributeModels extends $tea.Model {
  attrId?: number;
  category?: number;
  dataType?: string;
  description?: string;
  name?: string;
  restriction?: string;
  scopeList?: string[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attrId: 'AttrId',
      category: 'Category',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      restriction: 'Restriction',
      scopeList: 'ScopeList',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrId: 'number',
      category: 'number',
      dataType: 'string',
      description: 'string',
      name: 'string',
      restriction: 'string',
      scopeList: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemResponseBodyModelSkuListLmAttributeModels extends $tea.Model {
  attrId?: number;
  category?: number;
  dataType?: string;
  description?: string;
  name?: string;
  restriction?: string;
  scopeList?: string[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attrId: 'AttrId',
      category: 'Category',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      restriction: 'Restriction',
      scopeList: 'ScopeList',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrId: 'number',
      category: 'number',
      dataType: 'string',
      description: 'string',
      name: 'string',
      restriction: 'string',
      scopeList: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemResponseBodyModelSkuList extends $tea.Model {
  canSell?: boolean;
  customizedAttributeMap?: { [key: string]: string };
  extInfo?: string;
  gmtModified?: string;
  hasQuantity?: boolean;
  itemId?: number;
  lmAttributeModels?: ListDistributionItemResponseBodyModelSkuListLmAttributeModels[];
  lmItemId?: string;
  priceCent?: number;
  quantity?: number;
  reservedPrice?: number;
  simpleQuantity?: string;
  skuDesc?: string;
  skuId?: number;
  skuPicUrl?: string;
  skuProperties?: { [key: string]: string };
  skuPropertiesJson?: string;
  skuTitle?: string;
  status?: number;
  tips?: string;
  lmSkuAttributeMap?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      customizedAttributeMap: 'CustomizedAttributeMap',
      extInfo: 'ExtInfo',
      gmtModified: 'GmtModified',
      hasQuantity: 'HasQuantity',
      itemId: 'ItemId',
      lmAttributeModels: 'LmAttributeModels',
      lmItemId: 'LmItemId',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservedPrice: 'ReservedPrice',
      simpleQuantity: 'SimpleQuantity',
      skuDesc: 'SkuDesc',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuProperties: 'SkuProperties',
      skuPropertiesJson: 'SkuPropertiesJson',
      skuTitle: 'SkuTitle',
      status: 'Status',
      tips: 'Tips',
      lmSkuAttributeMap: 'lmSkuAttributeMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      extInfo: 'string',
      gmtModified: 'string',
      hasQuantity: 'boolean',
      itemId: 'number',
      lmAttributeModels: { 'type': 'array', 'itemType': ListDistributionItemResponseBodyModelSkuListLmAttributeModels },
      lmItemId: 'string',
      priceCent: 'number',
      quantity: 'number',
      reservedPrice: 'number',
      simpleQuantity: 'string',
      skuDesc: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      skuProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      skuPropertiesJson: 'string',
      skuTitle: 'string',
      status: 'number',
      tips: 'string',
      lmSkuAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemResponseBodyModel extends $tea.Model {
  category?: string;
  categoryChain?: ListDistributionItemResponseBodyModelCategoryChain[];
  categoryId?: number;
  descOption?: string;
  distributionMallId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hasQuantity?: boolean;
  isCanSell?: boolean;
  itemDesc?: string;
  itemId?: number;
  itemIdStr?: string;
  itemImages?: string[];
  itemName?: string;
  itemTitle?: string;
  lmAttributeMap?: { [key: string]: string };
  lmAttributeModels?: ListDistributionItemResponseBodyModelLmAttributeModels[];
  lmItemId?: string;
  mainPicUrl?: string;
  picUrl?: string;
  priceCentScope?: string;
  propertiesJson?: string;
  quantity?: number;
  reservedPrice?: number;
  reservedPriceScope?: string;
  simpleQuantity?: string;
  simpleTotalSoldQuantity?: string;
  skuList?: ListDistributionItemResponseBodyModelSkuList[];
  status?: number;
  tips?: string;
  totalSoldQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      categoryChain: 'CategoryChain',
      categoryId: 'CategoryId',
      descOption: 'DescOption',
      distributionMallId: 'DistributionMallId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasQuantity: 'HasQuantity',
      isCanSell: 'IsCanSell',
      itemDesc: 'ItemDesc',
      itemId: 'ItemId',
      itemIdStr: 'ItemIdStr',
      itemImages: 'ItemImages',
      itemName: 'ItemName',
      itemTitle: 'ItemTitle',
      lmAttributeMap: 'LmAttributeMap',
      lmAttributeModels: 'LmAttributeModels',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      picUrl: 'PicUrl',
      priceCentScope: 'PriceCentScope',
      propertiesJson: 'PropertiesJson',
      quantity: 'Quantity',
      reservedPrice: 'ReservedPrice',
      reservedPriceScope: 'ReservedPriceScope',
      simpleQuantity: 'SimpleQuantity',
      simpleTotalSoldQuantity: 'SimpleTotalSoldQuantity',
      skuList: 'SkuList',
      status: 'Status',
      tips: 'Tips',
      totalSoldQuantity: 'TotalSoldQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      categoryChain: { 'type': 'array', 'itemType': ListDistributionItemResponseBodyModelCategoryChain },
      categoryId: 'number',
      descOption: 'string',
      distributionMallId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasQuantity: 'boolean',
      isCanSell: 'boolean',
      itemDesc: 'string',
      itemId: 'number',
      itemIdStr: 'string',
      itemImages: { 'type': 'array', 'itemType': 'string' },
      itemName: 'string',
      itemTitle: 'string',
      lmAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lmAttributeModels: { 'type': 'array', 'itemType': ListDistributionItemResponseBodyModelLmAttributeModels },
      lmItemId: 'string',
      mainPicUrl: 'string',
      picUrl: 'string',
      priceCentScope: 'string',
      propertiesJson: 'string',
      quantity: 'number',
      reservedPrice: 'number',
      reservedPriceScope: 'string',
      simpleQuantity: 'string',
      simpleTotalSoldQuantity: 'string',
      skuList: { 'type': 'array', 'itemType': ListDistributionItemResponseBodyModelSkuList },
      status: 'number',
      tips: 'string',
      totalSoldQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemWithoutCacheResponseBodyModelSkuModels extends $tea.Model {
  customizedAttributeMap?: { [key: string]: string };
  distributionMallId?: string;
  extJson?: string;
  hasQuantity?: boolean;
  invoiceType?: number;
  isCanNotBeSoldCode?: string;
  isCanNotBeSoldMessage?: string;
  itemId?: number;
  lmItemId?: string;
  lmSkuAttributeMap?: { [key: string]: string };
  priceCent?: number;
  quantity?: number;
  reservedPrice?: number;
  simpleQuantity?: string;
  skuId?: number;
  skuPicUrl?: string;
  skuPvs?: string;
  skuTitle?: string;
  status?: number;
  supplierPrice?: number;
  static names(): { [key: string]: string } {
    return {
      customizedAttributeMap: 'CustomizedAttributeMap',
      distributionMallId: 'DistributionMallId',
      extJson: 'ExtJson',
      hasQuantity: 'HasQuantity',
      invoiceType: 'InvoiceType',
      isCanNotBeSoldCode: 'IsCanNotBeSoldCode',
      isCanNotBeSoldMessage: 'IsCanNotBeSoldMessage',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmSkuAttributeMap: 'LmSkuAttributeMap',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservedPrice: 'ReservedPrice',
      simpleQuantity: 'SimpleQuantity',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuPvs: 'SkuPvs',
      skuTitle: 'SkuTitle',
      status: 'Status',
      supplierPrice: 'SupplierPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      distributionMallId: 'string',
      extJson: 'string',
      hasQuantity: 'boolean',
      invoiceType: 'number',
      isCanNotBeSoldCode: 'string',
      isCanNotBeSoldMessage: 'string',
      itemId: 'number',
      lmItemId: 'string',
      lmSkuAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      priceCent: 'number',
      quantity: 'number',
      reservedPrice: 'number',
      simpleQuantity: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      skuPvs: 'string',
      skuTitle: 'string',
      status: 'number',
      supplierPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemWithoutCacheResponseBodyModelSkuPropertysValues extends $tea.Model {
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

export class ListDistributionItemWithoutCacheResponseBodyModelSkuPropertys extends $tea.Model {
  id?: number;
  text?: string;
  values?: ListDistributionItemWithoutCacheResponseBodyModelSkuPropertysValues[];
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
      values: { 'type': 'array', 'itemType': ListDistributionItemWithoutCacheResponseBodyModelSkuPropertysValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionItemWithoutCacheResponseBodyModel extends $tea.Model {
  categoryId?: number;
  categoryIds?: number[];
  city?: string;
  current?: string;
  customizedAttributeMap?: { [key: string]: string };
  descOption?: string;
  descPath?: string;
  distributionMallId?: string;
  features?: { [key: string]: string };
  firstPicUrl?: string;
  hasQuantity?: boolean;
  iforestProps?: { [key: string]: string }[];
  invoiceType?: number;
  isCanNotBeSoldCode?: string;
  isCanNotBeSoldMessage?: string;
  isCanSell?: boolean;
  isSellerPayPostfee?: boolean;
  itemId?: number;
  itemImages?: string[];
  itemTitle?: string;
  itemTotalSimpleValue?: string;
  itemTotalValue?: number;
  lmItemAttributeMap?: { [key: string]: string };
  lmItemCategory?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  minPrice?: number;
  properties?: { [key: string]: string[] };
  prov?: string;
  quantity?: number;
  reservedPrice?: number;
  securedTransactions?: number;
  simpleQuantity?: string;
  skuModels?: ListDistributionItemWithoutCacheResponseBodyModelSkuModels[];
  skuPropertys?: ListDistributionItemWithoutCacheResponseBodyModelSkuPropertys[];
  thirdPartyItemId?: string;
  thirdPartyName?: string;
  userType?: number;
  videoPicUrl?: string;
  videoUrl?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryIds: 'CategoryIds',
      city: 'City',
      current: 'Current',
      customizedAttributeMap: 'CustomizedAttributeMap',
      descOption: 'DescOption',
      descPath: 'DescPath',
      distributionMallId: 'DistributionMallId',
      features: 'Features',
      firstPicUrl: 'FirstPicUrl',
      hasQuantity: 'HasQuantity',
      iforestProps: 'IforestProps',
      invoiceType: 'InvoiceType',
      isCanNotBeSoldCode: 'IsCanNotBeSoldCode',
      isCanNotBeSoldMessage: 'IsCanNotBeSoldMessage',
      isCanSell: 'IsCanSell',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      itemTotalSimpleValue: 'ItemTotalSimpleValue',
      itemTotalValue: 'ItemTotalValue',
      lmItemAttributeMap: 'LmItemAttributeMap',
      lmItemCategory: 'LmItemCategory',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      minPrice: 'MinPrice',
      properties: 'Properties',
      prov: 'Prov',
      quantity: 'Quantity',
      reservedPrice: 'ReservedPrice',
      securedTransactions: 'SecuredTransactions',
      simpleQuantity: 'SimpleQuantity',
      skuModels: 'SkuModels',
      skuPropertys: 'SkuPropertys',
      thirdPartyItemId: 'ThirdPartyItemId',
      thirdPartyName: 'ThirdPartyName',
      userType: 'UserType',
      videoPicUrl: 'VideoPicUrl',
      videoUrl: 'VideoUrl',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      city: 'string',
      current: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      descOption: 'string',
      descPath: 'string',
      distributionMallId: 'string',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      firstPicUrl: 'string',
      hasQuantity: 'boolean',
      iforestProps: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      invoiceType: 'number',
      isCanNotBeSoldCode: 'string',
      isCanNotBeSoldMessage: 'string',
      isCanSell: 'boolean',
      isSellerPayPostfee: 'boolean',
      itemId: 'number',
      itemImages: { 'type': 'array', 'itemType': 'string' },
      itemTitle: 'string',
      itemTotalSimpleValue: 'string',
      itemTotalValue: 'number',
      lmItemAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lmItemCategory: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      minPrice: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      prov: 'string',
      quantity: 'number',
      reservedPrice: 'number',
      securedTransactions: 'number',
      simpleQuantity: 'string',
      skuModels: { 'type': 'array', 'itemType': ListDistributionItemWithoutCacheResponseBodyModelSkuModels },
      skuPropertys: { 'type': 'array', 'itemType': ListDistributionItemWithoutCacheResponseBodyModelSkuPropertys },
      thirdPartyItemId: 'string',
      thirdPartyName: 'string',
      userType: 'number',
      videoPicUrl: 'string',
      videoUrl: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDistributionMallResponseBodyModel extends $tea.Model {
  channelSupplierId?: string;
  distributionMallId?: string;
  distributionMallName?: string;
  distributionMallType?: string;
  endDate?: string;
  startDate?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      channelSupplierId: 'ChannelSupplierId',
      distributionMallId: 'DistributionMallId',
      distributionMallName: 'DistributionMallName',
      distributionMallType: 'DistributionMallType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSupplierId: 'string',
      distributionMallId: 'string',
      distributionMallName: 'string',
      distributionMallType: 'string',
      endDate: 'string',
      startDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRefund4DistributionRequestLeavePictureLists extends $tea.Model {
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

export class ModifyRefund4DistributionResponseBodyModel extends $tea.Model {
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeByIdResponseBodyModelDivisionList extends $tea.Model {
  divisionCode?: number;
  divisionLevel?: number;
  divisionName?: string;
  parentId?: number;
  pinyin?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'DivisionCode',
      divisionLevel: 'DivisionLevel',
      divisionName: 'DivisionName',
      parentId: 'ParentId',
      pinyin: 'Pinyin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      parentId: 'number',
      pinyin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryChildDivisionCodeByIdResponseBodyModel extends $tea.Model {
  divisionList?: QueryChildDivisionCodeByIdResponseBodyModelDivisionList[];
  static names(): { [key: string]: string } {
    return {
      divisionList: 'DivisionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionList: { 'type': 'array', 'itemType': QueryChildDivisionCodeByIdResponseBodyModelDivisionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionBillDetailResponseBodyModel extends $tea.Model {
  data?: string[];
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
      data: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDistributionMallResponseBodyModel extends $tea.Model {
  channelSupplierId?: string;
  distributionMallId?: string;
  distributionMallName?: string;
  distributionMallType?: string;
  distributorId?: string;
  endDate?: string;
  startDate?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      channelSupplierId: 'ChannelSupplierId',
      distributionMallId: 'DistributionMallId',
      distributionMallName: 'DistributionMallName',
      distributionMallType: 'DistributionMallType',
      distributorId: 'DistributorId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelSupplierId: 'string',
      distributionMallId: 'string',
      distributionMallName: 'string',
      distributionMallType: 'string',
      distributorId: 'string',
      endDate: 'string',
      startDate: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBodyModelSkuModels extends $tea.Model {
  canNotBeSoldCode?: string;
  canNotBeSoldMessage?: string;
  customizedAttributeMap?: { [key: string]: string };
  distributionMallId?: string;
  extJson?: string;
  hasQuantity?: boolean;
  invoiceType?: number;
  itemId?: number;
  lmItemId?: string;
  lmSkuAttributeMap?: { [key: string]: string };
  priceCent?: number;
  quantity?: number;
  reservedPrice?: number;
  simpleQuantity?: string;
  skuId?: number;
  skuPicUrl?: string;
  skuPvs?: string;
  skuTitle?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      canNotBeSoldCode: 'CanNotBeSoldCode',
      canNotBeSoldMessage: 'CanNotBeSoldMessage',
      customizedAttributeMap: 'CustomizedAttributeMap',
      distributionMallId: 'DistributionMallId',
      extJson: 'ExtJson',
      hasQuantity: 'HasQuantity',
      invoiceType: 'InvoiceType',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmSkuAttributeMap: 'LmSkuAttributeMap',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservedPrice: 'ReservedPrice',
      simpleQuantity: 'SimpleQuantity',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuPvs: 'SkuPvs',
      skuTitle: 'SkuTitle',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotBeSoldCode: 'string',
      canNotBeSoldMessage: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      distributionMallId: 'string',
      extJson: 'string',
      hasQuantity: 'boolean',
      invoiceType: 'number',
      itemId: 'number',
      lmItemId: 'string',
      lmSkuAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      priceCent: 'number',
      quantity: 'number',
      reservedPrice: 'number',
      simpleQuantity: 'string',
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

export class QueryItemDetailResponseBodyModelSkuPropertysValues extends $tea.Model {
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

export class QueryItemDetailResponseBodyModelSkuPropertys extends $tea.Model {
  id?: number;
  text?: string;
  values?: QueryItemDetailResponseBodyModelSkuPropertysValues[];
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
      values: { 'type': 'array', 'itemType': QueryItemDetailResponseBodyModelSkuPropertysValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailResponseBodyModel extends $tea.Model {
  canNotBeSoldCode?: string;
  canNotBeSoldMessage?: string;
  categoryId?: number;
  categoryIds?: number[];
  city?: string;
  current?: string;
  customizedAttributeMap?: { [key: string]: string };
  descOption?: string;
  descPath?: string;
  distributionMallId?: string;
  features?: { [key: string]: string };
  firstPicUrl?: string;
  hasQuantity?: boolean;
  iforestProps?: { [key: string]: string }[];
  invoiceType?: number;
  isCanSell?: boolean;
  isSellerPayPostfee?: boolean;
  itemId?: number;
  itemImages?: string[];
  itemTitle?: string;
  itemTotalSimpleValue?: string;
  itemTotalValue?: number;
  lmItemAttributeMap?: { [key: string]: string };
  lmItemCategory?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  minPrice?: number;
  properties?: { [key: string]: string[] };
  prov?: string;
  quantity?: number;
  reservedPrice?: number;
  simpleQuantity?: string;
  skuModels?: QueryItemDetailResponseBodyModelSkuModels[];
  skuPropertys?: QueryItemDetailResponseBodyModelSkuPropertys[];
  thirdPartyItemId?: string;
  thirdPartyName?: string;
  videoPicUrl?: string;
  videoUrl?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      canNotBeSoldCode: 'CanNotBeSoldCode',
      canNotBeSoldMessage: 'CanNotBeSoldMessage',
      categoryId: 'CategoryId',
      categoryIds: 'CategoryIds',
      city: 'City',
      current: 'Current',
      customizedAttributeMap: 'CustomizedAttributeMap',
      descOption: 'DescOption',
      descPath: 'DescPath',
      distributionMallId: 'DistributionMallId',
      features: 'Features',
      firstPicUrl: 'FirstPicUrl',
      hasQuantity: 'HasQuantity',
      iforestProps: 'IforestProps',
      invoiceType: 'InvoiceType',
      isCanSell: 'IsCanSell',
      isSellerPayPostfee: 'IsSellerPayPostfee',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      itemTotalSimpleValue: 'ItemTotalSimpleValue',
      itemTotalValue: 'ItemTotalValue',
      lmItemAttributeMap: 'LmItemAttributeMap',
      lmItemCategory: 'LmItemCategory',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      minPrice: 'MinPrice',
      properties: 'Properties',
      prov: 'Prov',
      quantity: 'Quantity',
      reservedPrice: 'ReservedPrice',
      simpleQuantity: 'SimpleQuantity',
      skuModels: 'SkuModels',
      skuPropertys: 'SkuPropertys',
      thirdPartyItemId: 'ThirdPartyItemId',
      thirdPartyName: 'ThirdPartyName',
      videoPicUrl: 'VideoPicUrl',
      videoUrl: 'VideoUrl',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotBeSoldCode: 'string',
      canNotBeSoldMessage: 'string',
      categoryId: 'number',
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      city: 'string',
      current: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      descOption: 'string',
      descPath: 'string',
      distributionMallId: 'string',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      firstPicUrl: 'string',
      hasQuantity: 'boolean',
      iforestProps: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      invoiceType: 'number',
      isCanSell: 'boolean',
      isSellerPayPostfee: 'boolean',
      itemId: 'number',
      itemImages: { 'type': 'array', 'itemType': 'string' },
      itemTitle: 'string',
      itemTotalSimpleValue: 'string',
      itemTotalValue: 'number',
      lmItemAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lmItemCategory: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      minPrice: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      prov: 'string',
      quantity: 'number',
      reservedPrice: 'number',
      simpleQuantity: 'string',
      skuModels: { 'type': 'array', 'itemType': QueryItemDetailResponseBodyModelSkuModels },
      skuPropertys: { 'type': 'array', 'itemType': QueryItemDetailResponseBodyModelSkuPropertys },
      thirdPartyItemId: 'string',
      thirdPartyName: 'string',
      videoPicUrl: 'string',
      videoUrl: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailWithDivisionResponseBodyModelSkuModels extends $tea.Model {
  canNotBeSoldCode?: string;
  canNotBeSoldMassage?: string;
  customizedAttributeMap?: { [key: string]: string };
  distributionMallId?: string;
  extJson?: string;
  hasQuantity?: boolean;
  invoiceType?: number;
  itemId?: number;
  lmItemId?: string;
  lmSkuAttributeMap?: { [key: string]: string };
  priceCent?: number;
  quantity?: number;
  reservePrice?: number;
  simpleQuantity?: string;
  skuId?: number;
  skuPicUrl?: string;
  skuPvs?: string;
  skuTitle?: string;
  status?: number;
  supplierPrice?: number;
  static names(): { [key: string]: string } {
    return {
      canNotBeSoldCode: 'CanNotBeSoldCode',
      canNotBeSoldMassage: 'CanNotBeSoldMassage',
      customizedAttributeMap: 'CustomizedAttributeMap',
      distributionMallId: 'DistributionMallId',
      extJson: 'ExtJson',
      hasQuantity: 'HasQuantity',
      invoiceType: 'InvoiceType',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lmSkuAttributeMap: 'LmSkuAttributeMap',
      priceCent: 'PriceCent',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      simpleQuantity: 'SimpleQuantity',
      skuId: 'SkuId',
      skuPicUrl: 'SkuPicUrl',
      skuPvs: 'SkuPvs',
      skuTitle: 'SkuTitle',
      status: 'Status',
      supplierPrice: 'SupplierPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotBeSoldCode: 'string',
      canNotBeSoldMassage: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      distributionMallId: 'string',
      extJson: 'string',
      hasQuantity: 'boolean',
      invoiceType: 'number',
      itemId: 'number',
      lmItemId: 'string',
      lmSkuAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      priceCent: 'number',
      quantity: 'number',
      reservePrice: 'number',
      simpleQuantity: 'string',
      skuId: 'number',
      skuPicUrl: 'string',
      skuPvs: 'string',
      skuTitle: 'string',
      status: 'number',
      supplierPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailWithDivisionResponseBodyModelSkuPropertysValues extends $tea.Model {
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

export class QueryItemDetailWithDivisionResponseBodyModelSkuPropertys extends $tea.Model {
  id?: number;
  text?: string;
  values?: QueryItemDetailWithDivisionResponseBodyModelSkuPropertysValues[];
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
      values: { 'type': 'array', 'itemType': QueryItemDetailWithDivisionResponseBodyModelSkuPropertysValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemDetailWithDivisionResponseBodyModel extends $tea.Model {
  canNotBeSoldCode?: string;
  canNotBeSoldMassage?: string;
  canSell?: boolean;
  categoryId?: number;
  categoryIds?: number[];
  city?: string;
  current?: string;
  customizedAttributeMap?: { [key: string]: string };
  descOption?: string;
  descPath?: string;
  distributionMallId?: string;
  features?: { [key: string]: string };
  firstPicUrl?: string;
  hasQuantity?: boolean;
  iforestProps?: { [key: string]: string }[];
  invoiceType?: number;
  itemId?: number;
  itemImages?: string[];
  itemTitle?: string;
  itemTotalSimpleValue?: string;
  itemTotalValue?: number;
  lmItemAttributeMap?: { [key: string]: string };
  lmItemCategory?: string;
  lmItemId?: string;
  mainPicUrl?: string;
  minPrice?: number;
  properties?: { [key: string]: string[] };
  prov?: string;
  quantity?: number;
  reservePrice?: number;
  securedTransactions?: number;
  sellerPayPostfee?: boolean;
  simpleQuantity?: string;
  skuModels?: QueryItemDetailWithDivisionResponseBodyModelSkuModels[];
  skuPropertys?: QueryItemDetailWithDivisionResponseBodyModelSkuPropertys[];
  thirdPartyItemId?: string;
  thirdPartyName?: string;
  userType?: number;
  videoPicUrl?: string;
  videoUrl?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      canNotBeSoldCode: 'CanNotBeSoldCode',
      canNotBeSoldMassage: 'CanNotBeSoldMassage',
      canSell: 'CanSell',
      categoryId: 'CategoryId',
      categoryIds: 'CategoryIds',
      city: 'City',
      current: 'Current',
      customizedAttributeMap: 'CustomizedAttributeMap',
      descOption: 'DescOption',
      descPath: 'DescPath',
      distributionMallId: 'DistributionMallId',
      features: 'Features',
      firstPicUrl: 'FirstPicUrl',
      hasQuantity: 'HasQuantity',
      iforestProps: 'IforestProps',
      invoiceType: 'InvoiceType',
      itemId: 'ItemId',
      itemImages: 'ItemImages',
      itemTitle: 'ItemTitle',
      itemTotalSimpleValue: 'ItemTotalSimpleValue',
      itemTotalValue: 'ItemTotalValue',
      lmItemAttributeMap: 'LmItemAttributeMap',
      lmItemCategory: 'LmItemCategory',
      lmItemId: 'LmItemId',
      mainPicUrl: 'MainPicUrl',
      minPrice: 'MinPrice',
      properties: 'Properties',
      prov: 'Prov',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      securedTransactions: 'SecuredTransactions',
      sellerPayPostfee: 'SellerPayPostfee',
      simpleQuantity: 'SimpleQuantity',
      skuModels: 'SkuModels',
      skuPropertys: 'SkuPropertys',
      thirdPartyItemId: 'ThirdPartyItemId',
      thirdPartyName: 'ThirdPartyName',
      userType: 'UserType',
      videoPicUrl: 'VideoPicUrl',
      videoUrl: 'VideoUrl',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canNotBeSoldCode: 'string',
      canNotBeSoldMassage: 'string',
      canSell: 'boolean',
      categoryId: 'number',
      categoryIds: { 'type': 'array', 'itemType': 'number' },
      city: 'string',
      current: 'string',
      customizedAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      descOption: 'string',
      descPath: 'string',
      distributionMallId: 'string',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      firstPicUrl: 'string',
      hasQuantity: 'boolean',
      iforestProps: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      invoiceType: 'number',
      itemId: 'number',
      itemImages: { 'type': 'array', 'itemType': 'string' },
      itemTitle: 'string',
      itemTotalSimpleValue: 'string',
      itemTotalValue: 'number',
      lmItemAttributeMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lmItemCategory: 'string',
      lmItemId: 'string',
      mainPicUrl: 'string',
      minPrice: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      prov: 'string',
      quantity: 'number',
      reservePrice: 'number',
      securedTransactions: 'number',
      sellerPayPostfee: 'boolean',
      simpleQuantity: 'string',
      skuModels: { 'type': 'array', 'itemType': QueryItemDetailWithDivisionResponseBodyModelSkuModels },
      skuPropertys: { 'type': 'array', 'itemType': QueryItemDetailWithDivisionResponseBodyModelSkuPropertys },
      thirdPartyItemId: 'string',
      thirdPartyName: 'string',
      userType: 'number',
      videoPicUrl: 'string',
      videoUrl: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemGuideRetailPriceResponseBodyModelSkuModels extends $tea.Model {
  distributionMallId?: string;
  guideRetailPrice?: number;
  itemId?: number;
  lmItemId?: string;
  lowGuideRetailPrice?: number;
  priceCent?: number;
  reservedPrice?: number;
  skuId?: number;
  skuTitle?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      guideRetailPrice: 'GuideRetailPrice',
      itemId: 'ItemId',
      lmItemId: 'LmItemId',
      lowGuideRetailPrice: 'LowGuideRetailPrice',
      priceCent: 'PriceCent',
      reservedPrice: 'ReservedPrice',
      skuId: 'SkuId',
      skuTitle: 'SkuTitle',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      guideRetailPrice: 'number',
      itemId: 'number',
      lmItemId: 'string',
      lowGuideRetailPrice: 'number',
      priceCent: 'number',
      reservedPrice: 'number',
      skuId: 'number',
      skuTitle: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryItemGuideRetailPriceResponseBodyModel extends $tea.Model {
  distributionMallId?: string;
  guideRetailPriceScope?: string;
  itemId?: number;
  itemTitle?: string;
  lmItemId?: string;
  lowGuideRetailPriceScope?: string;
  reservedPrice?: number;
  reservedPriceScope?: string;
  skuModels?: QueryItemGuideRetailPriceResponseBodyModelSkuModels[];
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      guideRetailPriceScope: 'GuideRetailPriceScope',
      itemId: 'ItemId',
      itemTitle: 'ItemTitle',
      lmItemId: 'LmItemId',
      lowGuideRetailPriceScope: 'LowGuideRetailPriceScope',
      reservedPrice: 'ReservedPrice',
      reservedPriceScope: 'ReservedPriceScope',
      skuModels: 'SkuModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      guideRetailPriceScope: 'string',
      itemId: 'number',
      itemTitle: 'string',
      lmItemId: 'string',
      lowGuideRetailPriceScope: 'string',
      reservedPrice: 'number',
      reservedPriceScope: 'string',
      skuModels: { 'type': 'array', 'itemType': QueryItemGuideRetailPriceResponseBodyModelSkuModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogistics4DistributionResponseBodyModelGoods extends $tea.Model {
  goodName?: string;
  itemId?: string;
  quantity?: number;
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      goodName: 'GoodName',
      itemId: 'ItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      goodName: 'string',
      itemId: 'string',
      quantity: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLogistics4DistributionResponseBodyModelLogisticsDetailList extends $tea.Model {
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

export class QueryLogistics4DistributionResponseBodyModel extends $tea.Model {
  dataProvider?: string;
  dataProviderTitle?: string;
  goods?: QueryLogistics4DistributionResponseBodyModelGoods[];
  logisticsCompanyCode?: string;
  logisticsCompanyName?: string;
  logisticsDetailList?: QueryLogistics4DistributionResponseBodyModelLogisticsDetailList[];
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
      goods: { 'type': 'array', 'itemType': QueryLogistics4DistributionResponseBodyModelGoods },
      logisticsCompanyCode: 'string',
      logisticsCompanyName: 'string',
      logisticsDetailList: { 'type': 'array', 'itemType': QueryLogistics4DistributionResponseBodyModelLogisticsDetailList },
      mailNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMallCategoryListResponseBodyModel extends $tea.Model {
  categoryId?: number;
  leaf?: boolean;
  name?: string;
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      leaf: 'Leaf',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      leaf: 'boolean',
      name: 'string',
      parentId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetail4DistributionResponseBodyModelSubOrderListItemPrice extends $tea.Model {
  fundAmountMoney?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmountMoney: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetail4DistributionResponseBodyModelSubOrderList extends $tea.Model {
  itemId?: string;
  itemPic?: string;
  itemPrice?: QueryOrderDetail4DistributionResponseBodyModelSubOrderListItemPrice[];
  itemTitle?: string;
  logisticsStatus?: string;
  mainDistributionOrderId?: string;
  number?: string;
  orderStatus?: string;
  skuId?: string;
  skuName?: string;
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPrice: 'ItemPrice',
      itemTitle: 'ItemTitle',
      logisticsStatus: 'LogisticsStatus',
      mainDistributionOrderId: 'MainDistributionOrderId',
      number: 'Number',
      orderStatus: 'OrderStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemPic: 'string',
      itemPrice: { 'type': 'array', 'itemType': QueryOrderDetail4DistributionResponseBodyModelSubOrderListItemPrice },
      itemTitle: 'string',
      logisticsStatus: 'string',
      mainDistributionOrderId: 'string',
      number: 'string',
      orderStatus: 'string',
      skuId: 'string',
      skuName: 'string',
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderDetail4DistributionResponseBodyModel extends $tea.Model {
  createDate?: string;
  distributionOrderId?: string;
  distributorId?: string;
  logisticsStatus?: string;
  orderAmount?: string;
  orderStatus?: string;
  subOrderList?: QueryOrderDetail4DistributionResponseBodyModelSubOrderList[];
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      distributionOrderId: 'DistributionOrderId',
      distributorId: 'DistributorId',
      logisticsStatus: 'LogisticsStatus',
      orderAmount: 'OrderAmount',
      orderStatus: 'OrderStatus',
      subOrderList: 'SubOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      distributionOrderId: 'string',
      distributorId: 'string',
      logisticsStatus: 'string',
      orderAmount: 'string',
      orderStatus: 'string',
      subOrderList: { 'type': 'array', 'itemType': QueryOrderDetail4DistributionResponseBodyModelSubOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderList4DistributionResponseBodyModelSubOrderListItemPrice extends $tea.Model {
  fundAmountMoney?: string;
  static names(): { [key: string]: string } {
    return {
      fundAmountMoney: 'FundAmountMoney',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAmountMoney: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderList4DistributionResponseBodyModelSubOrderList extends $tea.Model {
  itemId?: string;
  itemPic?: string;
  itemPrice?: QueryOrderList4DistributionResponseBodyModelSubOrderListItemPrice[];
  itemTitle?: string;
  logisticsStatus?: string;
  mainDistributionOrderId?: string;
  number?: string;
  orderStatus?: string;
  skuId?: string;
  skuName?: string;
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemPic: 'ItemPic',
      itemPrice: 'ItemPrice',
      itemTitle: 'ItemTitle',
      logisticsStatus: 'LogisticsStatus',
      mainDistributionOrderId: 'MainDistributionOrderId',
      number: 'Number',
      orderStatus: 'OrderStatus',
      skuId: 'SkuId',
      skuName: 'SkuName',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemPic: 'string',
      itemPrice: { 'type': 'array', 'itemType': QueryOrderList4DistributionResponseBodyModelSubOrderListItemPrice },
      itemTitle: 'string',
      logisticsStatus: 'string',
      mainDistributionOrderId: 'string',
      number: 'string',
      orderStatus: 'string',
      skuId: 'string',
      skuName: 'string',
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrderList4DistributionResponseBodyModel extends $tea.Model {
  createDate?: string;
  distributionOrderId?: string;
  distributorId?: string;
  logisticsStatus?: string;
  orderAmount?: string;
  orderStatus?: string;
  subOrderList?: QueryOrderList4DistributionResponseBodyModelSubOrderList[];
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      distributionOrderId: 'DistributionOrderId',
      distributorId: 'DistributorId',
      logisticsStatus: 'LogisticsStatus',
      orderAmount: 'OrderAmount',
      orderStatus: 'OrderStatus',
      subOrderList: 'SubOrderList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      distributionOrderId: 'string',
      distributorId: 'string',
      logisticsStatus: 'string',
      orderAmount: 'string',
      orderStatus: 'string',
      subOrderList: { 'type': 'array', 'itemType': QueryOrderList4DistributionResponseBodyModelSubOrderList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRefundApplicationDetail4DistributionResponseBodyModelApplyReason extends $tea.Model {
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

export class QueryRefundApplicationDetail4DistributionResponseBodyModelRefundFeeData extends $tea.Model {
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

export class QueryRefundApplicationDetail4DistributionResponseBodyModel extends $tea.Model {
  applyDisputeDesc?: string;
  applyReason?: QueryRefundApplicationDetail4DistributionResponseBodyModelApplyReason;
  bizClaimType?: number;
  disputeCreateTime?: string;
  disputeDesc?: string;
  disputeEndTime?: string;
  disputeId?: number;
  disputeStatus?: number;
  disputeType?: number;
  distributionOrderId?: string;
  orderLogisticsStatus?: number;
  realRefundFee?: number;
  refundFee?: number;
  refundFeeData?: QueryRefundApplicationDetail4DistributionResponseBodyModelRefundFeeData;
  refunderAddress?: string;
  refunderName?: string;
  refunderTel?: string;
  refunderZipCode?: string;
  returnGoodCount?: number;
  returnGoodLogisticsStatus?: number;
  sellerAgreeMsg?: string;
  sellerRefuseAgreementMessage?: string;
  sellerRefuseReason?: string;
  subDistributionOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      applyDisputeDesc: 'ApplyDisputeDesc',
      applyReason: 'ApplyReason',
      bizClaimType: 'BizClaimType',
      disputeCreateTime: 'DisputeCreateTime',
      disputeDesc: 'DisputeDesc',
      disputeEndTime: 'DisputeEndTime',
      disputeId: 'DisputeId',
      disputeStatus: 'DisputeStatus',
      disputeType: 'DisputeType',
      distributionOrderId: 'DistributionOrderId',
      orderLogisticsStatus: 'OrderLogisticsStatus',
      realRefundFee: 'RealRefundFee',
      refundFee: 'RefundFee',
      refundFeeData: 'RefundFeeData',
      refunderAddress: 'RefunderAddress',
      refunderName: 'RefunderName',
      refunderTel: 'RefunderTel',
      refunderZipCode: 'RefunderZipCode',
      returnGoodCount: 'ReturnGoodCount',
      returnGoodLogisticsStatus: 'ReturnGoodLogisticsStatus',
      sellerAgreeMsg: 'SellerAgreeMsg',
      sellerRefuseAgreementMessage: 'SellerRefuseAgreementMessage',
      sellerRefuseReason: 'SellerRefuseReason',
      subDistributionOrderId: 'SubDistributionOrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDisputeDesc: 'string',
      applyReason: QueryRefundApplicationDetail4DistributionResponseBodyModelApplyReason,
      bizClaimType: 'number',
      disputeCreateTime: 'string',
      disputeDesc: 'string',
      disputeEndTime: 'string',
      disputeId: 'number',
      disputeStatus: 'number',
      disputeType: 'number',
      distributionOrderId: 'string',
      orderLogisticsStatus: 'number',
      realRefundFee: 'number',
      refundFee: 'number',
      refundFeeData: QueryRefundApplicationDetail4DistributionResponseBodyModelRefundFeeData,
      refunderAddress: 'string',
      refunderName: 'string',
      refunderTel: 'string',
      refunderZipCode: 'string',
      returnGoodCount: 'number',
      returnGoodLogisticsStatus: 'number',
      sellerAgreeMsg: 'string',
      sellerRefuseAgreementMessage: 'string',
      sellerRefuseReason: 'string',
      subDistributionOrderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderRequestItemInfoLists extends $tea.Model {
  distributionMallId?: string;
  lmItemId?: string;
  quantity?: number;
  skuId?: string;
  static names(): { [key: string]: string } {
    return {
      distributionMallId: 'DistributionMallId',
      lmItemId: 'LmItemId',
      quantity: 'Quantity',
      skuId: 'SkuId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionMallId: 'string',
      lmItemId: 'string',
      quantity: 'number',
      skuId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderResponseBodyModelAddressInfos extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosDeliveryInfos extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosInvoiceInfo extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfosItemPromInstVOSAvailableItems extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfosItemPromInstVOS extends $tea.Model {
  availableItems?: RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfosItemPromInstVOSAvailableItems[];
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
      availableItems: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfosItemPromInstVOSAvailableItems },
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfos extends $tea.Model {
  canSell?: boolean;
  distributionMallId?: string;
  distributionSupplierId?: string;
  distributorId?: string;
  features?: { [key: string]: string };
  itemId?: string;
  itemName?: string;
  itemPicUrl?: string;
  itemPromInstVOS?: RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfosItemPromInstVOS[];
  itemUrl?: string;
  message?: string;
  price?: number;
  promotionFee?: number;
  quantity?: number;
  reservePrice?: number;
  skuId?: number;
  skuName?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      distributionMallId: 'DistributionMallId',
      distributionSupplierId: 'DistributionSupplierId',
      distributorId: 'DistributorId',
      features: 'Features',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemPicUrl: 'ItemPicUrl',
      itemPromInstVOS: 'ItemPromInstVOS',
      itemUrl: 'ItemUrl',
      message: 'Message',
      price: 'Price',
      promotionFee: 'PromotionFee',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      skuId: 'SkuId',
      skuName: 'SkuName',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      distributionMallId: 'string',
      distributionSupplierId: 'string',
      distributorId: 'string',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'string',
      itemName: 'string',
      itemPicUrl: 'string',
      itemPromInstVOS: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfosItemPromInstVOS },
      itemUrl: 'string',
      message: 'string',
      price: 'number',
      promotionFee: 'number',
      quantity: 'number',
      reservePrice: 'number',
      skuId: 'number',
      skuName: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosShopPromInstVOSAvailableItems extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfosShopPromInstVOS extends $tea.Model {
  availableItems?: RenderDistributionOrderResponseBodyModelRenderOrderInfosShopPromInstVOSAvailableItems[];
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
      availableItems: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfosShopPromInstVOSAvailableItems },
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

export class RenderDistributionOrderResponseBodyModelRenderOrderInfos extends $tea.Model {
  canSell?: boolean;
  deliveryInfos?: RenderDistributionOrderResponseBodyModelRenderOrderInfosDeliveryInfos[];
  extInfo?: { [key: string]: string };
  invoiceInfo?: RenderDistributionOrderResponseBodyModelRenderOrderInfosInvoiceInfo;
  itemInfos?: RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfos[];
  message?: string;
  shopPromInstVOS?: RenderDistributionOrderResponseBodyModelRenderOrderInfosShopPromInstVOS[];
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      deliveryInfos: 'DeliveryInfos',
      extInfo: 'ExtInfo',
      invoiceInfo: 'InvoiceInfo',
      itemInfos: 'ItemInfos',
      message: 'Message',
      shopPromInstVOS: 'ShopPromInstVOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      deliveryInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfosDeliveryInfos },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceInfo: RenderDistributionOrderResponseBodyModelRenderOrderInfosInvoiceInfo,
      itemInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfosItemInfos },
      message: 'string',
      shopPromInstVOS: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfosShopPromInstVOS },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosDeliveryInfos extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosInvoiceInfo extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfosItemPromInstVOSAvailableItems extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfosItemPromInstVOS extends $tea.Model {
  availableItems?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfosItemPromInstVOSAvailableItems[];
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
      availableItems: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfosItemPromInstVOSAvailableItems },
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

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfos extends $tea.Model {
  canSell?: boolean;
  distributionMallId?: string;
  distributionSupplierId?: string;
  distributorId?: string;
  features?: { [key: string]: string };
  itemId?: string;
  itemName?: string;
  itemPicUrl?: string;
  itemPromInstVOS?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfosItemPromInstVOS[];
  itemUrl?: string;
  message?: string;
  price?: number;
  promotionFee?: number;
  quantity?: number;
  reservePrice?: number;
  skuId?: number;
  skuName?: string;
  virtualItemType?: string;
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      distributionMallId: 'DistributionMallId',
      distributionSupplierId: 'DistributionSupplierId',
      distributorId: 'DistributorId',
      features: 'Features',
      itemId: 'ItemId',
      itemName: 'ItemName',
      itemPicUrl: 'ItemPicUrl',
      itemPromInstVOS: 'ItemPromInstVOS',
      itemUrl: 'ItemUrl',
      message: 'Message',
      price: 'Price',
      promotionFee: 'PromotionFee',
      quantity: 'Quantity',
      reservePrice: 'ReservePrice',
      skuId: 'SkuId',
      skuName: 'SkuName',
      virtualItemType: 'VirtualItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      distributionMallId: 'string',
      distributionSupplierId: 'string',
      distributorId: 'string',
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      itemId: 'string',
      itemName: 'string',
      itemPicUrl: 'string',
      itemPromInstVOS: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfosItemPromInstVOS },
      itemUrl: 'string',
      message: 'string',
      price: 'number',
      promotionFee: 'number',
      quantity: 'number',
      reservePrice: 'number',
      skuId: 'number',
      skuName: 'string',
      virtualItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOSAvailableItems extends $tea.Model {
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

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOS extends $tea.Model {
  availableItems?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOSAvailableItems[];
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
      availableItems: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOSAvailableItems },
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

export class RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfos extends $tea.Model {
  canSell?: boolean;
  deliveryInfos?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosDeliveryInfos[];
  extInfo?: { [key: string]: string };
  invoiceInfo?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosInvoiceInfo;
  itemInfos?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfos[];
  message?: string;
  shopPromInstVOS?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOS[];
  static names(): { [key: string]: string } {
    return {
      canSell: 'CanSell',
      deliveryInfos: 'DeliveryInfos',
      extInfo: 'ExtInfo',
      invoiceInfo: 'InvoiceInfo',
      itemInfos: 'ItemInfos',
      message: 'Message',
      shopPromInstVOS: 'ShopPromInstVOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSell: 'boolean',
      deliveryInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosDeliveryInfos },
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      invoiceInfo: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosInvoiceInfo,
      itemInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosItemInfos },
      message: 'string',
      shopPromInstVOS: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfosShopPromInstVOS },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderDistributionOrderResponseBodyModel extends $tea.Model {
  addressInfos?: RenderDistributionOrderResponseBodyModelAddressInfos[];
  canSell?: boolean;
  extInfo?: { [key: string]: string };
  message?: string;
  renderOrderInfos?: RenderDistributionOrderResponseBodyModelRenderOrderInfos[];
  unsellableRenderOrderInfos?: RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfos[];
  static names(): { [key: string]: string } {
    return {
      addressInfos: 'AddressInfos',
      canSell: 'CanSell',
      extInfo: 'ExtInfo',
      message: 'Message',
      renderOrderInfos: 'RenderOrderInfos',
      unsellableRenderOrderInfos: 'UnsellableRenderOrderInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelAddressInfos },
      canSell: 'boolean',
      extInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      message: 'string',
      renderOrderInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelRenderOrderInfos },
      unsellableRenderOrderInfos: { 'type': 'array', 'itemType': RenderDistributionOrderResponseBodyModelUnsellableRenderOrderInfos },
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

  async applyCreateDistributionOrderWithOptions(tmpReq: ApplyCreateDistributionOrderRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCreateDistributionOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyCreateDistributionOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemInfoLists)) {
      request.itemInfoListsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemInfoLists, "ItemInfoLists", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buyerId)) {
      body["BuyerId"] = request.buyerId;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      body["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.distributionOutTradeId)) {
      body["DistributionOutTradeId"] = request.distributionOutTradeId;
    }

    if (!Util.isUnset(request.distributionSupplierId)) {
      body["DistributionSupplierId"] = request.distributionSupplierId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.itemInfoListsShrink)) {
      body["ItemInfoLists"] = request.itemInfoListsShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyCreateDistributionOrder",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyCreateDistributionOrderResponse>(await this.callApi(params, req, runtime), new ApplyCreateDistributionOrderResponse({}));
  }

  async applyCreateDistributionOrder(request: ApplyCreateDistributionOrderRequest): Promise<ApplyCreateDistributionOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCreateDistributionOrderWithOptions(request, runtime);
  }

  async applyRefund4DistributionWithOptions(tmpReq: ApplyRefund4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<ApplyRefund4DistributionResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyRefund4DistributionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.leavePictureLists)) {
      request.leavePictureListsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.leavePictureLists, "LeavePictureLists", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyReasonTextId)) {
      body["ApplyReasonTextId"] = request.applyReasonTextId;
    }

    if (!Util.isUnset(request.applyRefundCount)) {
      body["ApplyRefundCount"] = request.applyRefundCount;
    }

    if (!Util.isUnset(request.applyRefundFee)) {
      body["ApplyRefundFee"] = request.applyRefundFee;
    }

    if (!Util.isUnset(request.bizClaimType)) {
      body["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      body["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.leaveMessage)) {
      body["LeaveMessage"] = request.leaveMessage;
    }

    if (!Util.isUnset(request.leavePictureListsShrink)) {
      body["LeavePictureLists"] = request.leavePictureListsShrink;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ApplyRefund4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyRefund4DistributionResponse>(await this.callApi(params, req, runtime), new ApplyRefund4DistributionResponse({}));
  }

  async applyRefund4Distribution(request: ApplyRefund4DistributionRequest): Promise<ApplyRefund4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyRefund4DistributionWithOptions(request, runtime);
  }

  async cancelDistributionTradeWithOptions(request: CancelDistributionTradeRequest, runtime: $Util.RuntimeOptions): Promise<CancelDistributionTradeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionTradeId)) {
      body["DistributionTradeId"] = request.distributionTradeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelDistributionTrade",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelDistributionTradeResponse>(await this.callApi(params, req, runtime), new CancelDistributionTradeResponse({}));
  }

  async cancelDistributionTrade(request: CancelDistributionTradeRequest): Promise<CancelDistributionTradeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelDistributionTradeWithOptions(request, runtime);
  }

  async cancelRefund4DistributionWithOptions(request: CancelRefund4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<CancelRefund4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelRefund4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelRefund4DistributionResponse>(await this.callApi(params, req, runtime), new CancelRefund4DistributionResponse({}));
  }

  async cancelRefund4Distribution(request: CancelRefund4DistributionRequest): Promise<CancelRefund4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelRefund4DistributionWithOptions(request, runtime);
  }

  async confirmDisburse4DistributionWithOptions(request: ConfirmDisburse4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmDisburse4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionTradeId)) {
      body["DistributionTradeId"] = request.distributionTradeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.mainDistributionOrderId)) {
      body["MainDistributionOrderId"] = request.mainDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmDisburse4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmDisburse4DistributionResponse>(await this.callApi(params, req, runtime), new ConfirmDisburse4DistributionResponse({}));
  }

  async confirmDisburse4Distribution(request: ConfirmDisburse4DistributionRequest): Promise<ConfirmDisburse4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmDisburse4DistributionWithOptions(request, runtime);
  }

  async initApplyRefund4DistributionWithOptions(request: InitApplyRefund4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<InitApplyRefund4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizClaimType)) {
      body["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      body["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitApplyRefund4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitApplyRefund4DistributionResponse>(await this.callApi(params, req, runtime), new InitApplyRefund4DistributionResponse({}));
  }

  async initApplyRefund4Distribution(request: InitApplyRefund4DistributionRequest): Promise<InitApplyRefund4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initApplyRefund4DistributionWithOptions(request, runtime);
  }

  async initModifyRefund4DistributionWithOptions(request: InitModifyRefund4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<InitModifyRefund4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizClaimType)) {
      body["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InitModifyRefund4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitModifyRefund4DistributionResponse>(await this.callApi(params, req, runtime), new InitModifyRefund4DistributionResponse({}));
  }

  async initModifyRefund4Distribution(request: InitModifyRefund4DistributionRequest): Promise<InitModifyRefund4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initModifyRefund4DistributionWithOptions(request, runtime);
  }

  async listDistributionItemWithOptions(request: ListDistributionItemRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributionItemResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.itemStatus)) {
      body["ItemStatus"] = request.itemStatus;
    }

    if (!Util.isUnset(request.lmItemId)) {
      body["LmItemId"] = request.lmItemId;
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
      action: "ListDistributionItem",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDistributionItemResponse>(await this.callApi(params, req, runtime), new ListDistributionItemResponse({}));
  }

  async listDistributionItem(request: ListDistributionItemRequest): Promise<ListDistributionItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributionItemWithOptions(request, runtime);
  }

  async listDistributionItemWithoutCacheWithOptions(request: ListDistributionItemWithoutCacheRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributionItemWithoutCacheResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.itemStatus)) {
      body["ItemStatus"] = request.itemStatus;
    }

    if (!Util.isUnset(request.lmItemId)) {
      body["LmItemId"] = request.lmItemId;
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
      action: "ListDistributionItemWithoutCache",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDistributionItemWithoutCacheResponse>(await this.callApi(params, req, runtime), new ListDistributionItemWithoutCacheResponse({}));
  }

  async listDistributionItemWithoutCache(request: ListDistributionItemWithoutCacheRequest): Promise<ListDistributionItemWithoutCacheResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributionItemWithoutCacheWithOptions(request, runtime);
  }

  async listDistributionMallWithOptions(request: ListDistributionMallRequest, runtime: $Util.RuntimeOptions): Promise<ListDistributionMallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channelSupplierId)) {
      body["ChannelSupplierId"] = request.channelSupplierId;
    }

    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributionMallName)) {
      body["DistributionMallName"] = request.distributionMallName;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDistributionMall",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDistributionMallResponse>(await this.callApi(params, req, runtime), new ListDistributionMallResponse({}));
  }

  async listDistributionMall(request: ListDistributionMallRequest): Promise<ListDistributionMallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDistributionMallWithOptions(request, runtime);
  }

  async modifyRefund4DistributionWithOptions(tmpReq: ModifyRefund4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRefund4DistributionResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyRefund4DistributionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.leavePictureLists)) {
      request.leavePictureListsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.leavePictureLists, "LeavePictureLists", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyReasonTextId)) {
      body["ApplyReasonTextId"] = request.applyReasonTextId;
    }

    if (!Util.isUnset(request.applyRefundCount)) {
      body["ApplyRefundCount"] = request.applyRefundCount;
    }

    if (!Util.isUnset(request.applyRefundFee)) {
      body["ApplyRefundFee"] = request.applyRefundFee;
    }

    if (!Util.isUnset(request.bizClaimType)) {
      body["BizClaimType"] = request.bizClaimType;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.goodsStatus)) {
      body["GoodsStatus"] = request.goodsStatus;
    }

    if (!Util.isUnset(request.leaveMessage)) {
      body["LeaveMessage"] = request.leaveMessage;
    }

    if (!Util.isUnset(request.leavePictureListsShrink)) {
      body["LeavePictureLists"] = request.leavePictureListsShrink;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRefund4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRefund4DistributionResponse>(await this.callApi(params, req, runtime), new ModifyRefund4DistributionResponse({}));
  }

  async modifyRefund4Distribution(request: ModifyRefund4DistributionRequest): Promise<ModifyRefund4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRefund4DistributionWithOptions(request, runtime);
  }

  async queryChildDivisionCodeByIdWithOptions(request: QueryChildDivisionCodeByIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryChildDivisionCodeByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.divisionCode)) {
      body["DivisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryChildDivisionCodeById",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryChildDivisionCodeByIdResponse>(await this.callApi(params, req, runtime), new QueryChildDivisionCodeByIdResponse({}));
  }

  async queryChildDivisionCodeById(request: QueryChildDivisionCodeByIdRequest): Promise<QueryChildDivisionCodeByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryChildDivisionCodeByIdWithOptions(request, runtime);
  }

  async queryDistributionBillDetailWithOptions(request: QueryDistributionBillDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryDistributionBillDetailResponse> {
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

    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributionMallName)) {
      body["DistributionMallName"] = request.distributionMallName;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
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
      action: "QueryDistributionBillDetail",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDistributionBillDetailResponse>(await this.callApi(params, req, runtime), new QueryDistributionBillDetailResponse({}));
  }

  async queryDistributionBillDetail(request: QueryDistributionBillDetailRequest): Promise<QueryDistributionBillDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDistributionBillDetailWithOptions(request, runtime);
  }

  async queryDistributionMallWithOptions(request: QueryDistributionMallRequest, runtime: $Util.RuntimeOptions): Promise<QueryDistributionMallResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDistributionMall",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDistributionMallResponse>(await this.callApi(params, req, runtime), new QueryDistributionMallResponse({}));
  }

  async queryDistributionMall(request: QueryDistributionMallRequest): Promise<QueryDistributionMallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDistributionMallWithOptions(request, runtime);
  }

  async queryDistributionTradeStatusWithOptions(request: QueryDistributionTradeStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDistributionTradeStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionSupplierId)) {
      body["DistributionSupplierId"] = request.distributionSupplierId;
    }

    if (!Util.isUnset(request.distributionTradeId)) {
      body["DistributionTradeId"] = request.distributionTradeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDistributionTradeStatus",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDistributionTradeStatusResponse>(await this.callApi(params, req, runtime), new QueryDistributionTradeStatusResponse({}));
  }

  async queryDistributionTradeStatus(request: QueryDistributionTradeStatusRequest): Promise<QueryDistributionTradeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDistributionTradeStatusWithOptions(request, runtime);
  }

  async queryItemDetailWithOptions(request: QueryItemDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.lmItemId)) {
      body["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemDetail",
      version: "2022-05-31",
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

  async queryItemDetailWithDivisionWithOptions(request: QueryItemDetailWithDivisionRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemDetailWithDivisionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.divisionCode)) {
      body["DivisionCode"] = request.divisionCode;
    }

    if (!Util.isUnset(request.lmItemId)) {
      body["LmItemId"] = request.lmItemId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemDetailWithDivision",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemDetailWithDivisionResponse>(await this.callApi(params, req, runtime), new QueryItemDetailWithDivisionResponse({}));
  }

  async queryItemDetailWithDivision(request: QueryItemDetailWithDivisionRequest): Promise<QueryItemDetailWithDivisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemDetailWithDivisionWithOptions(request, runtime);
  }

  async queryItemGuideRetailPriceWithOptions(tmpReq: QueryItemGuideRetailPriceRequest, runtime: $Util.RuntimeOptions): Promise<QueryItemGuideRetailPriceResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryItemGuideRetailPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.lmItemIds)) {
      request.lmItemIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lmItemIds, "LmItemIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.lmItemIdsShrink)) {
      body["LmItemIds"] = request.lmItemIdsShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryItemGuideRetailPrice",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryItemGuideRetailPriceResponse>(await this.callApi(params, req, runtime), new QueryItemGuideRetailPriceResponse({}));
  }

  async queryItemGuideRetailPrice(request: QueryItemGuideRetailPriceRequest): Promise<QueryItemGuideRetailPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryItemGuideRetailPriceWithOptions(request, runtime);
  }

  async queryLogistics4DistributionWithOptions(request: QueryLogistics4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<QueryLogistics4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.mainDistributionOrderId)) {
      body["MainDistributionOrderId"] = request.mainDistributionOrderId;
    }

    if (!Util.isUnset(request.requestId)) {
      body["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryLogistics4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLogistics4DistributionResponse>(await this.callApi(params, req, runtime), new QueryLogistics4DistributionResponse({}));
  }

  async queryLogistics4Distribution(request: QueryLogistics4DistributionRequest): Promise<QueryLogistics4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLogistics4DistributionWithOptions(request, runtime);
  }

  async queryMallCategoryListWithOptions(request: QueryMallCategoryListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMallCategoryListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!Util.isUnset(request.distributionMallId)) {
      body["DistributionMallId"] = request.distributionMallId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMallCategoryList",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMallCategoryListResponse>(await this.callApi(params, req, runtime), new QueryMallCategoryListResponse({}));
  }

  async queryMallCategoryList(request: QueryMallCategoryListRequest): Promise<QueryMallCategoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMallCategoryListWithOptions(request, runtime);
  }

  async queryOrderDetail4DistributionWithOptions(request: QueryOrderDetail4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderDetail4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.mainDistributionOrderId)) {
      body["MainDistributionOrderId"] = request.mainDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderDetail4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderDetail4DistributionResponse>(await this.callApi(params, req, runtime), new QueryOrderDetail4DistributionResponse({}));
  }

  async queryOrderDetail4Distribution(request: QueryOrderDetail4DistributionRequest): Promise<QueryOrderDetail4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderDetail4DistributionWithOptions(request, runtime);
  }

  async queryOrderList4DistributionWithOptions(request: QueryOrderList4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<QueryOrderList4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
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

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryOrderList4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryOrderList4DistributionResponse>(await this.callApi(params, req, runtime), new QueryOrderList4DistributionResponse({}));
  }

  async queryOrderList4Distribution(request: QueryOrderList4DistributionRequest): Promise<QueryOrderList4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryOrderList4DistributionWithOptions(request, runtime);
  }

  async queryRefundApplicationDetail4DistributionWithOptions(request: QueryRefundApplicationDetail4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<QueryRefundApplicationDetail4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRefundApplicationDetail4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryRefundApplicationDetail4DistributionResponse>(await this.callApi(params, req, runtime), new QueryRefundApplicationDetail4DistributionResponse({}));
  }

  async queryRefundApplicationDetail4Distribution(request: QueryRefundApplicationDetail4DistributionRequest): Promise<QueryRefundApplicationDetail4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryRefundApplicationDetail4DistributionWithOptions(request, runtime);
  }

  async renderDistributionOrderWithOptions(tmpReq: RenderDistributionOrderRequest, runtime: $Util.RuntimeOptions): Promise<RenderDistributionOrderResponse> {
    Util.validateModel(tmpReq);
    let request = new RenderDistributionOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.itemInfoLists)) {
      request.itemInfoListsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.itemInfoLists, "ItemInfoLists", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.buyerId)) {
      body["BuyerId"] = request.buyerId;
    }

    if (!Util.isUnset(request.deliveryAddress)) {
      body["DeliveryAddress"] = request.deliveryAddress;
    }

    if (!Util.isUnset(request.distributionSupplierId)) {
      body["DistributionSupplierId"] = request.distributionSupplierId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.extInfo)) {
      body["ExtInfo"] = request.extInfo;
    }

    if (!Util.isUnset(request.itemInfoListsShrink)) {
      body["ItemInfoLists"] = request.itemInfoListsShrink;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenderDistributionOrder",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenderDistributionOrderResponse>(await this.callApi(params, req, runtime), new RenderDistributionOrderResponse({}));
  }

  async renderDistributionOrder(request: RenderDistributionOrderRequest): Promise<RenderDistributionOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renderDistributionOrderWithOptions(request, runtime);
  }

  async submitReturnGoodLogistics4DistributionWithOptions(request: SubmitReturnGoodLogistics4DistributionRequest, runtime: $Util.RuntimeOptions): Promise<SubmitReturnGoodLogistics4DistributionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpCode)) {
      body["CpCode"] = request.cpCode;
    }

    if (!Util.isUnset(request.disputeId)) {
      body["DisputeId"] = request.disputeId;
    }

    if (!Util.isUnset(request.distributorId)) {
      body["DistributorId"] = request.distributorId;
    }

    if (!Util.isUnset(request.logisticsNo)) {
      body["LogisticsNo"] = request.logisticsNo;
    }

    if (!Util.isUnset(request.subDistributionOrderId)) {
      body["SubDistributionOrderId"] = request.subDistributionOrderId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitReturnGoodLogistics4Distribution",
      version: "2022-05-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitReturnGoodLogistics4DistributionResponse>(await this.callApi(params, req, runtime), new SubmitReturnGoodLogistics4DistributionResponse({}));
  }

  async submitReturnGoodLogistics4Distribution(request: SubmitReturnGoodLogistics4DistributionRequest): Promise<SubmitReturnGoodLogistics4DistributionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitReturnGoodLogistics4DistributionWithOptions(request, runtime);
  }

}
